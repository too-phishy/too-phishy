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
  const linkWidgets = [];
  for (const LinkDict of deceptiveLinkDicts) {
    const URIWidgets = [
      {
        decoratedText: {
          text: `Full link`,
          bottomLabel: LinkDict.linkUrl,
          wrapText: true,
        },
      },
      {
        decoratedText: {
          text: ``,
          bottomLabel: `${LinkDict.explanation}`,
          wrapText: true,
          startIcon: {
            iconUrl: "https://toophishy.com/noun-link-orange.png",
          },
        },
      },
    ];
    linkWidgets.push(...URIWidgets);
  }
  return {
    header: `Deceptive Links`,
    widgets:
      deceptiveLinkDicts.length > 0
        ? widgets.concat(linkWidgets)
        : widgetsForNotFlagged,
    collapsible: false,
  };
};
