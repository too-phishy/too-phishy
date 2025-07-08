import * as util from "util";

export const sectionForDebugging = (
  headers,
  senderDomain,
  senderDomainRegistrationDate
) => {
  return {
    header: "Debugging",
    widgets: [
      {
        textParagraph: {
          text: `headers is ${util.inspect(headers, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `senderDomain is ${util.inspect(senderDomain, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `senderDomainRegistrationDate is ${util.inspect(
            senderDomainRegistrationDate,
            {
              depth: null,
            }
          )}`,
        },
      },
    ],
  };
};
