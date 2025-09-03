import URI from "urijs";
import cheerio from "cheerio";
import error from "express/lib/router/route.js";

const LINK_ELEMENT_TYPES =
  "a[href^='http://']:not(a[href^='mailto']), " +
  "a[href^='https://']:not(a[href^='mailto']), " +
  "a[href^='/']:not(a[href^='mailto'])";

export const processPart = async (part, messageBodies) => {
  if (part.mimeType === "text/html" && part.body.size > 0 && !part.filename) {
    messageBodies.push(Buffer.from(part.body.data, "base64").toString("utf-8"));
  }
  if (part.parts) {
    for (const innerPart of part.parts) {
      await processPart(innerPart, messageBodies);
    }
  }
};

export const processMessage = async (message) => {
  const messageBodies = [];
  if (message.payload.body.size > 0) {
    messageBodies.push(
      Buffer.from(message.payload.body.data, "base64").toString("utf-8")
    );
  }
  if (message.payload && message.payload.parts) {
    for (const part of message.payload.parts) {
      await processPart(part, messageBodies);
    }
  }
  let headers = Object.assign(
    {},
    ...message.payload.headers.map((rawHeader) => ({
      [rawHeader.name]: Buffer.from(rawHeader.value, "utf-8").toString(),
    }))
  );

  let fullLinkURIs = [];
  if (messageBodies[0]) {
    const $ = cheerio.load(messageBodies[0]);
    const relativeLinks = $(LINK_ELEMENT_TYPES);
    relativeLinks.each((index, value) => {
      const href = $(value).attr("href");
      fullLinkURIs.push(new URI(href));
    });
  }

  return { headers, fullLinkURIs, messageBodies };
};
