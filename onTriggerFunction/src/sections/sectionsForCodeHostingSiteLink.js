export const AWS_PHISHING_DOMAIN = "s3.amazonaws.com";
export const AZURE_PHISHING_DOMAIN = "blob.core.windows.net";
export const BITLY_PHISHING_DOMAIN = "bit.ly";
export const GOOGLE_SITES_PHISHING_DOMAIN = "sites.google.com";
export const GCP_PHISHING_DOMAIN = "storage.googleapis.com";

export const sectionForLink = (URI) => {
  return {
    header: `Potential Phishing Link: ${URI.domain()}`,
    widgets: [
      {
        decoratedText: {
          text: ``,
          bottomLabel: `Hosting code on a popular web hosting site allows scammers to get links to their code past spam filters.`,
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
    ],
    collapsible: true,
  };
};

export const sectionsForCodeHostingSiteLink = (fullLinkURIs) => {
  const uniqueCodeHostingSiteURIs = new Set();
  const codeHostingSiteURIs = [];
  for (const URI of [...fullLinkURIs]) {
    const matchedAnyWellKnownHostingSites = [
      AWS_PHISHING_DOMAIN,
      AZURE_PHISHING_DOMAIN,
      BITLY_PHISHING_DOMAIN,
      GOOGLE_SITES_PHISHING_DOMAIN,
      GCP_PHISHING_DOMAIN,
    ].filter((x) => URI.normalizeHostname().toString().indexOf(x) !== -1);
    if (
      matchedAnyWellKnownHostingSites.length > 0 &&
      !uniqueCodeHostingSiteURIs.has(URI.domain())
    ) {
      codeHostingSiteURIs.push(URI);
      uniqueCodeHostingSiteURIs.add(URI.domain());
    }
  }
  return {
    codeHostingSiteFlagged: codeHostingSiteURIs.length > 0,
    codeHostingSiteURIs: codeHostingSiteURIs,
    codeHostingSiteSections: codeHostingSiteURIs.map((URI) => {
      return sectionForLink(URI);
    }),
  };
};
