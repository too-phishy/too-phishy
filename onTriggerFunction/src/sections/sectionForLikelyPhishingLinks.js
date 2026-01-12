export const sectionForLikelyPhishingLinks = (URIDicts) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `Contains recently registered links. One of the best ways to identify a phishing link is if its domain was registered in the past 21 days.`,
        wrapText: true,
      },
    },
  ];
  const linkWidgets = [];
  for (const URIDict of URIDicts) {
    const URIWidgets = [
      {
        decoratedText: {
          text: ``,
          bottomLabel: `This link is ${Math.floor(URIDict.diffDays)} days old.`,
          wrapText: true,
        },
      },
      {
        decoratedText: {
          text: `Full link`,
          bottomLabel: URIDict.URI.toString(),
          wrapText: true,
          startIcon: {
            iconUrl: "https://toophishy.com/noun-link-red.png",
          },
        },
      },
      {
        decoratedText: {
          text: `Domain registration date`,
          bottomLabel: URIDict.domainRegistrationDate,
          wrapText: true,
          startIcon: {
            iconUrl: "https://toophishy.com/clock.png",
          },
        },
      },
    ];
    linkWidgets.push(...URIWidgets);
  }
  const learnMoreWidgets = [
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
    header: `Recently Registered Links`,
    widgets: widgets.concat(linkWidgets).concat(learnMoreWidgets),
    collapsible: true,
  };
};
