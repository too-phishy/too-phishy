import * as util from "util";

export const sectionForDebugging = (
  potentialPhishingURIs,
  likelyPhishingURIHashes
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
          text: `likelyPhishingURIHashes is ${util.inspect(
            likelyPhishingURIHashes,
            {
              depth: null,
            }
          )}`,
        },
      },
    ],
  };
};
