import { widgetsForNotFlagged } from "./widgetsForNotFlagged.js";

export const sectionForSocialEngineering = (
  socialEngineeringFlagged,
  socialEngineeringExplanation,
  webHostingSiteFlagged,
  deceptiveLinksFlagged,
  recentlyRegisteredURIDicts
) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `${socialEngineeringExplanation}`,
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-hate-mail-124279-3B6BF9.png",
        },
      },
    },
  ];
  return {
    header: `Social Engineering`,
    widgets:
      (webHostingSiteFlagged ||
        deceptiveLinksFlagged ||
        recentlyRegisteredURIDicts.length > 0) &&
      socialEngineeringFlagged
        ? widgets
        : widgetsForNotFlagged,
    collapsible: false,
  };
};
