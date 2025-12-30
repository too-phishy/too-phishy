export const sectionForDeceptiveLinks = (deceptiveLinkDicts) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `The email body contains deceptive links. The appearance of the links does not match their true nature.`,
        wrapText: true,
      },
    },
  ];
  const linkWidgets = deceptiveLinkDicts.map((dict) => {
    return {
      decoratedText: {
        text: dict.linkUrl,
        bottomLabel: dict.explanation,
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-link-red.png",
        },
      },
    };
  });
  return {
    header: `Deceptive Links`,
    widgets: widgets.concat(linkWidgets),
    collapsible: true,
  };
};
