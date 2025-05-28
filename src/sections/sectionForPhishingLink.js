export const sectionForPhishingLink = (
  fullLinkURIs,
  knownPhishingDomain,
  learnMoreUrl
) => {
  const phishingLinks = [...fullLinkURIs].filter(
    (key) =>
      key.normalizeHostname().toString().indexOf(knownPhishingDomain) !== -1
  );
  const phishingLinkFlagged = !!phishingLinks && phishingLinks.length > 0;
  return {
    phishingLinkFlagged,
    section: phishingLinkFlagged && {
      header:
        phishingLinks.length > 1
          ? `Potential Phishing Links: ${phishingLinks
              .map((link) => link.toString())
              .join(", ")}`
          : `Potential Phishing Link: ${phishingLinks[0].toString()}`,
      widgets: [
        {
          decoratedText: {
            text: ``,
            bottomLabel: `Using a free web hosting tool like ${knownPhishingDomain} allows scammers to host malicious code on a website that gets past spam filters.`,
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
                    url: learnMoreUrl,
                  },
                },
              },
            ],
          },
        },
      ],
      collapsible: true,
    },
  };
};
