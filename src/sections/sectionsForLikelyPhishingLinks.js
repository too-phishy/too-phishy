const sectionForLikelyPhishingLink = (URIData) => {
  const now = new Date();
  const diffDays =
    (now - URIData.domainRegistrationDate) / (1000 * 60 * 60 * 24);
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `This link is ${Math.floor(
          diffDays
        )} days old. One of the best ways to identify a phishing site is if its domain was registered in the past 21 days.`,
        wrapText: true,
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
                url: "https://dnsrf.org/blog/phishing-attacks--newly-registered-domains-still-a-prominent-threat/index.html",
              },
            },
          },
        ],
      },
    },
    {
      decoratedText: {
        text: `Domain registration date:`,
        bottomLabel: URIData.domainRegistrationDate,
        wrapText: true,
      },
    },
  ];
  return {
    header: `Very Likely Phishing Link: ${URIData.URI.toString()}`,
    widgets: widgets,
    collapsible: true,
  };
};

export const sectionsForLikelyPhishingLinks = async (suspiciousURIs) => {
  return {
    likelyPhishingLinksSections: suspiciousURIs.map((URIData) => {
      return sectionForLikelyPhishingLink(URIData);
    }),
  };
};
