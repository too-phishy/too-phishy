import * as util from "util";
import sanitize from "sanitize-filename";
import to from "to-case";

const importantFields = [
  "XPAuthor",
  "PrimaryPlatform",
  "Creator",
  "DeviceManufacturer",
  "DeviceModel",
  "DeviceAttributes",
  "RenderingIntent",
];

const sectionForAttachment = (attachment) => {
  const widgets = Object.keys(attachment).map((key) => {
    return {
      decoratedText: {
        text: to.capital(key),
        bottomLabel: attachment[key],
      },
    };
  });
  if (!attachment.error) {
    return {
      header: `Author data for ${sanitize(attachment.SourceFile)}`,
      widgets: widgets,
      collapsible: true,
    };
  }
};
export const sectionsForAttachments = (attachments) => {
  return {
    sectionsForAttachmentsFlagged: attachments.length > 0,
    attachmentsSections: attachments.map(sectionForAttachment),
  };
};
