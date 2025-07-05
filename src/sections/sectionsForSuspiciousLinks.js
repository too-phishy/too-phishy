const sectionForLink = (URIData) => {
  const now = new Date();
  const diffDays = (now - URIData.domainRegistrationDate) / (1000 * 60 * 60 * 24);
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `This link is suspicious for two reason:`,
      },
    },
    {
      decoratedText: {
        text: ``,
        bottomLabel: `1. It is not in the top one million most popular domains on the internet, as defined by the Tranco Top 1 Million list.`,
      },
    },
    {
      decoratedText: {
        text: `Domain registration date:`,
        bottomLabel: URIData.domainRegistrationDate,
      },
    },
    {
      decoratedText: {
        text: ``,
        bottomLabel: `2. It is ${diffDays} days old. One of the best ways to identify a phishing site is if it was registered in the past 25 days (after that it will usually get reported and blocked by your browser, then the phishers will move to a new phishing site). We do not trust you visit this site.`,
      },
    },
  ];
  return {
    header: `Suspicious Link: ${URIData.URI.toString()}`,
    widgets: widgets,
    collapsible: true,
  };
};

export const sectionsForSuspiciousLinks = async (suspiciousURIs) => {
  return {
    linksSections: suspiciousURIs.map((URIData) => {
      return sectionForLink(URIData);
    }),
  };
};
