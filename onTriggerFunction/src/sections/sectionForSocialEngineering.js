import { widgetsForNotFlagged } from "./widgetsForNotFlagged.js";

export const sectionForSocialEngineering = (
  socialEngineeringFlagged,
  socialEngineeringExplanation,
  codeHostingSiteFlagged,
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
      (codeHostingSiteFlagged ||
        deceptiveLinksFlagged ||
        recentlyRegisteredURIDicts.length > 0) &&
      socialEngineeringFlagged
        ? widgets
        : widgetsForNotFlagged,
    collapsible: false,
  };
};
