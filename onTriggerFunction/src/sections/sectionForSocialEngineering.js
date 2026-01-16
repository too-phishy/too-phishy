export const sectionForSocialEngineering = (socialEngineeringExplanation) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: socialEngineeringExplanation,
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-hate-mail-124279-3B6BF9.png",
        },
      },
    },
  ];
  return {
    header: `Social Engineering`,
    widgets: widgets,
    collapsible: true,
  };
};
