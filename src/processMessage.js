import URI from "urijs";
import cheerio from "cheerio";
import sanitize from "sanitize-filename";

const LINK_ELEMENT_TYPES =
  "a[href^='http://']:not(a[href^='mailto']), " +
  "a[href^='https://']:not(a[href^='mailto']), " +
  "a[href^='/']:not(a[href^='mailto'])";

export const isNotInlineAttachment = (part) => {
  for (const header of part.headers) {
    if (header.name.toLowerCase() === "content-disposition") {
      return header.value.toLowerCase().startsWith("attachment");
    }
  }
};

export const processPart = async (part, attachments, messageBodies) => {
  if (part.mimeType === "text/html" && part.body.size > 0) {
    messageBodies.push(Buffer.from(part.body.data, "base64").toString("utf-8"));
  }
  if (part.filename) {
    if (part.body.attachmentId && isNotInlineAttachment(part)) {
      const filePath = `${sanitize(part.filename)}`; // Provide a suitable file name and extension
      attachments.push(filePath);
    }
  }
  if (part.parts) {
    for (const innerPart of part.parts) {
      await processPart(innerPart, attachments, messageBodies);
    }
  }
};

export const processMessage = async (message) => {
  const messageBodies = [];
  const attachments = [];
  if (message.payload.body.size > 0) {
    messageBodies.push(
      Buffer.from(message.payload.body.data, "base64").toString("utf-8")
    );
  }
  if (message.payload && message.payload.parts) {
    for (const part of message.payload.parts) {
      await processPart(part, attachments, messageBodies);
    }
  }
  let headers = Object.assign(
    {},
    ...message.payload.headers.map((rawHeader) => ({
      [rawHeader.name]: Buffer.from(rawHeader.value, "utf-8").toString(),
    }))
  );

  let domainNames = new Set();
  let fullLinkUrls = new Set();
  if (messageBodies[0]) {
    const $ = cheerio.load(messageBodies[0]);
    const relativeLinks = $(LINK_ELEMENT_TYPES);
    relativeLinks.each((index, value) => {
      const href = $(value).attr("href");
      fullLinkUrls.add(new URI(href).normalizeHostname());
      domainNames.add(new URI(href).domain());
    });
  }

  return { headers, fullLinkUrls, domainNames, messageBodies, attachments };
};
