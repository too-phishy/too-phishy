export const sectionForSocialEngineering = (socialEngineeringExplanation) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `The email body contains text which prompts user action in line with social engineering techniques.`,
        wrapText: true,
      },
    },
    {
      decoratedText: {
        text: ``,
        bottomLabel: socialEngineeringExplanation,
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-link-red.png",
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
