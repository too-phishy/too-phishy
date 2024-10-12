import exiftool from "node-exiftool";
import * as fs from "fs";
import exiftoolBin from "dist-exiftool";
import URI from "urijs";
import sanitize from "sanitize-filename";
import cheerio from "cheerio";

const IMPORTANT_EXIF_FIELDS = new Set([
  "Application",
  "CharactersWithSpaces",
  "CreateDate",
  "Creator",
  "DateTimeOriginal",
  "DeviceManufacturer",
  "DeviceModel",
  "HostComputer",
  "LastModifiedBy",
  "Lines",
  "Make",
  "Model",
  "Paragraphs",
  "ProfileCreator",
  "RevisionNumber",
  "SourceFile",
  "ZipModifyDate",
]);
const LINK_ELEMENT_TYPES =
  "a[href^='http://']:not(a[href^='mailto']), " +
  "a[href^='https://']:not(a[href^='mailto']), " +
  "a[href^='/']:not(a[href^='mailto'])";

export const processAttachment = async (
  efProcess,
  filePath,
  attachment,
  attachments,
) => {
  const attachmentContents = Buffer.from(attachment.data, "base64");
  fs.writeFileSync(filePath, attachmentContents);
  try {
    const result = await efProcess.readMetadata(filePath, ["-File:all"]);
    const resultData = result.data[0];
    // if (!resultData.Error) {
    Object.keys(resultData).forEach(function (key) {
      if (!IMPORTANT_EXIF_FIELDS.has(key)) {
        delete resultData[key];
      }
    });
    attachments.push(resultData);
    // }
  } catch (e) {
    console.error(e);
  }
};

export const processPart = async (
  gmail,
  auth,
  messageToken,
  messageId,
  part,
  efProcess,
  messageBodies,
  attachments,
) => {
  if (part.mimeType == "text/html" && part.body.size > 0) {
    messageBodies.push(Buffer.from(part.body.data, "base64").toString("utf-8"));
  }
  if (part.filename) {
    if (gmail && part.body.attachmentId) {
      // production enviornment
      const attachment = await gmail.users.messages.attachments.get({
        id: part.body.attachmentId,
        messageId,
        userId: "me",
        format: "full",
        auth,
        headers: {
          "X-Goog-Gmail-Access-Token": messageToken,
        },
      });
      const filePath = `${sanitize(part.filename)}`; // Provide a suitable file name and extension
      await processAttachment(
        efProcess,
        filePath,
        attachment.data,
        attachments,
      );
    } else {
      // test environment
      attachments.push(part.filename);
    }
  }
  if (part.parts) {
    for (const innerPart of part.parts) {
      await processPart(
        gmail,
        auth,
        messageToken,
        messageId,
        innerPart,
        efProcess,
        messageBodies,
        attachments,
      );
    }
  }
};

export const processMessage = async (gmail, auth, messageToken, message) => {
  const messageBodies = [];
  const attachments = [];
  if (message.payload.body.size > 0) {
    messageBodies.push(
      Buffer.from(message.payload.body.data, "base64").toString("utf-8"),
    );
  }
  if (message.payload && message.payload.parts) {
    const efProcess = new exiftool.ExiftoolProcess(exiftoolBin);
    await efProcess.open();
    for (const part of message.payload.parts) {
      await processPart(
        gmail,
        auth,
        messageToken,
        message.id,
        part,
        efProcess,
        messageBodies,
        attachments,
      );
    }
    await efProcess.close();
  }
  let headers = Object.assign(
    {},
    ...message.payload.headers.map((rawHeader) => ({
      [rawHeader.name]: Buffer.from(rawHeader.value, "utf-8").toString(),
    })),
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
