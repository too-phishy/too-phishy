import * as util from "util";

export const sectionForDebugging = (
  potentialPhishingURIs,
  likelyPhishingURIs
) => {
  return {
    header: "Debugging",
    widgets: [
      {
        textParagraph: {
          text: `potentialPhishingURIs is ${util.inspect(
            potentialPhishingURIs,
            {
              depth: null,
            }
          )}`,
        },
      },
      {
        textParagraph: {
          text: `likelyPhishingURIs is ${util.inspect(likelyPhishingURIs, {
            depth: null,
          })}`,
        },
      },
    ],
  };
};
