import { widgetsForNotFlagged } from "./widgetsForNotFlagged.js";

export const sectionForDeceptiveLinks = (deceptiveLinkDicts) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `Contains ${
          deceptiveLinkDicts > 0 ? "deceptive links" : "a deceptive link"
        }. The appearance of ${
          deceptiveLinkDicts > 0 ? "these links" : "this link"
        } does not match ${
          deceptiveLinkDicts > 0 ? "their" : "its"
        } true nature.`,
        wrapText: true,
      },
    },
  ];
  const linkWidgets = deceptiveLinkDicts.map((dict) => {
    return {
      decoratedText: {
        text: `${dict.linkUrl}`,
        bottomLabel: `${dict.explanation}`,
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-link-orange.png",
        },
      },
    };
  });
  return {
    header: `Deceptive Links`,
    widgets:
      deceptiveLinkDicts.length > 0
        ? widgets.concat(linkWidgets)
        : widgetsForNotFlagged,
    collapsible: true,
  };
};
