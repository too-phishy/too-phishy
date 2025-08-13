export const sectionForLink = (
  URI,
  knownCodeHostingSiteDomain,
  learnMoreUrl
) => {
  return {
    header: `Potential Phishing Link: ${URI.domain()}`,
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
          bottomLabel: URI.toString(),
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
  };
};

export const sectionsForCodeHostingSiteLink = (
  fullLinkURIs,
  knownCodeHostingSiteDomain,
  learnMoreUrl
) => {
  const uniqueCodeHostingSiteURIs = new Set();
  const codeHostingSiteURIs = [];
  for (const URI of [...fullLinkURIs]) {
    if (
      URI.normalizeHostname().toString().indexOf(knownCodeHostingSiteDomain) !==
        -1 &&
      !uniqueCodeHostingSiteURIs.has(URI.domain())
    ) {
      codeHostingSiteURIs.push(URI);
      uniqueCodeHostingSiteURIs.add(URI.domain());
    }
  }
  const codeHostingSiteFlagged = codeHostingSiteURIs.length > 0;
  return {
    codeHostingSiteFlagged: codeHostingSiteFlagged,
    sections: codeHostingSiteURIs.map((URI) => {
      return sectionForLink(URI, knownCodeHostingSiteDomain, learnMoreUrl);
    }),
  };
};
