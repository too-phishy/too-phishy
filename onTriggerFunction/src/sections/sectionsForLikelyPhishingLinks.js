const sectionForLikelyPhishingLink = (URIHash) => {
  const now = new Date();
  const diffDays =
    (now - URIHash.domainRegistrationDate) / (1000 * 60 * 60 * 24);
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
      decoratedText: {
        text: `Full link`,
        bottomLabel: URIHash.URI.toString(),
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-link-red.png",
        },
      },
    },
    {
      decoratedText: {
        text: `Domain registration date`,
        bottomLabel: URIHash.domainRegistrationDate,
        wrapText: true,
        startIcon: {
          iconUrl: "https://toophishy.com/clock.png",
        },
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
  ];
  return {
    header: `Very Likely Phishing Link: ${URIHash.URI.domain()}`,
    widgets: widgets,
    collapsible: true,
  };
};

export const sectionsForLikelyPhishingLinks = async (URIHashes) => {
  return {
    likelyPhishingLinksSections: URIHashes.map((URIHash) => {
      return sectionForLikelyPhishingLink(URIHash);
    }),
  };
};
