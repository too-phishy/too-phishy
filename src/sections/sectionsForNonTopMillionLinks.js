const sectionForLink = (URI) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `This link is not in the top one million most popular domains on the internet, as defined by the Tranco Top 1 Million list. Domains not on this list may lead somewhere untrustworthy.`,
      },
    },
    {
      horizontalAlignment: "CENTER",
      buttonList: {
        buttons: [
          {
            text: "Learn More",
            onClick: {
              openLink: {
                url: "https://tranco-list.eu/list/K2XYW",
              },
            },
          },
        ],
      },
    },
  ];
  return {
    header: `Potential Phishing Link: ${URI.toString()}`,
    widgets: widgets,
    collapsible: true,
  };
};

export const sectionsForNonTopMillionLinks = async (nonTopMillionURIs) => {
  return {
    nonTopMillionLinksSections: nonTopMillionURIs.map((URI) => {
      return sectionForLink(URI);
    }),
  };
};
