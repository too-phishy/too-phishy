import * as util from "util";

export const sectionForDebugging = (
  messageBodies,
  domainNames,
  headers,
  fullMessageData,
  attachments,
) => {
  return {
    header: "Debugging",
    widgets: [
      {
        textParagraph: {
          text: `messageBodies is ${util.inspect(messageBodies, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `domainNames is ${util.inspect(domainNames, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `headers is ${util.inspect(headers, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `fullMessageData is ${util.inspect(fullMessageData, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `attachments is ${util.inspect(attachments, {
            depth: null,
          })}`,
        },
      },
    ],
  };
};
