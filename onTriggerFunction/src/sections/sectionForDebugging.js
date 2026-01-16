import * as util from "util";

export const sectionForDebugging = (
  nonTopMillionURIs,
  recentlyRegisteredURIDicts
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
          text: `recentlyRegisteredURIDicts is ${util.inspect(
            recentlyRegisteredURIDicts,
            {
              depth: null,
            }
          )}`,
        },
      },
    ],
  };
};
