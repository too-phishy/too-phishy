export const sectionForCodeHostingSiteLink = (
  fullLinkURIs,
  knownCodeHostingSiteDomain,
  learnMoreUrl
) => {
  const codeHostingSiteLinks = [...fullLinkURIs].filter(
    (key) =>
      key.normalizeHostname().toString().indexOf(knownCodeHostingSiteDomain) !==
      -1
  );
  const codeHostingSiteFlagged = codeHostingSiteLinks.length > 0;
  return {
    codeHostingSiteFlagged: codeHostingSiteFlagged,
    section: codeHostingSiteFlagged && {
      header:
        codeHostingSiteLinks.length > 1
          ? `Potential Phishing Links: ${codeHostingSiteLinks
              .map((link) => link.domain())
              .join(", ")}`
          : `Potential Phishing Link: ${codeHostingSiteLinks[0].domain()}`,
      widgets: [
        {
          decoratedText: {
            text: ``,
            bottomLabel: `Hosting code on a popular web hosting site like ${knownCodeHostingSiteDomain} allows scammers to get links to their code past spam filters.`,
            wrapText: true,
          },
        },
        {
          decoratedText: {
            text: `Full link`,
            bottomLabel: codeHostingSiteLinks[0].toString(),
            wrapText: true,
            startIcon: {
              iconUrl: "https://toophishy.com/noun-link-orange.png",
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
