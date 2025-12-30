import * as util from "util";

export const sectionForDebugging = (
  nonTopMillionURIs,
  likelyPhishingURIDicts
) => {
  return {
    header: "Debugging",
    widgets: [
      {
        textParagraph: {
          text: `nonTopMillionURIs is ${util.inspect(nonTopMillionURIs, {
            depth: null,
          })}`,
        },
      },
      {
        textParagraph: {
          text: `likelyPhishingURIDicts is ${util.inspect(
            likelyPhishingURIDicts,
            {
              depth: null,
            }
          )}`,
        },
      },
    ],
  };
};
