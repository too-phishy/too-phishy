export const AWS_PHISHING_DOMAIN = "s3.amazonaws.com";
export const AZURE_PHISHING_DOMAIN = "blob.core.windows.net";
export const BITLY_PHISHING_DOMAIN = "bit.ly";
export const GOOGLE_SITES_PHISHING_DOMAIN = "sites.google.com";
export const GCP_PHISHING_DOMAIN = "storage.googleapis.com";

export const CODE_HOSTING_SUBDOMAINS = new Set([
  AWS_PHISHING_DOMAIN,
  AZURE_PHISHING_DOMAIN,
  BITLY_PHISHING_DOMAIN,
  GOOGLE_SITES_PHISHING_DOMAIN,
  GCP_PHISHING_DOMAIN,
]);

export const sectionForLinks = (codeHostingSiteURIDicts) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `Hosting code on popular code hosting sites allows scammers to post their malicious code on websites thought to be safe.`,
        wrapText: true,
      },
    },
  ];
  const linkWidgets = [];
  for (const URIDict of codeHostingSiteURIDicts) {
    const URIWidgets = [
      {
        decoratedText: {
          text: `Full link`,
          bottomLabel: URIDict.URI.toString(),
          wrapText: true,
        },
      },
      {
        decoratedText: {
          text: `Code hosting site:`,
          bottomLabel: URIDict.codeHostingSiteSubdomain,
          wrapText: true,
          startIcon: {
            iconUrl:
              "https://toophishy.com/noun-outgoing-mail-367819-993AE0.png",
          },
        },
      },
    ];
    linkWidgets.push(...URIWidgets);
  }
  return {
    header: `Code Hosting`,
    widgets: widgets.concat(linkWidgets),
    collapsible: true,
  };
};

export const sectionForCodeHostingSiteLink = (fullLinkURIs) => {
  const uniqueCodeHostingSiteSubdomains = new Set();
  const codeHostingSiteURIDicts = [];
  for (const URI of fullLinkURIs) {
    for (const subdomain of CODE_HOSTING_SUBDOMAINS) {
      if (
        URI.normalizeHostname().toString().indexOf(subdomain) !== -1 &&
        !uniqueCodeHostingSiteSubdomains.has(subdomain)
      ) {
        codeHostingSiteURIDicts.push({
          URI,
          codeHostingSiteSubdomain: subdomain,
        });
        uniqueCodeHostingSiteSubdomains.add(subdomain);
      }
    }
  }
  return {
    codeHostingSiteFlagged: codeHostingSiteURIDicts.length > 0,
    codeHostingSiteURIDicts,
    codeHostingSiteSection: sectionForLinks(codeHostingSiteURIDicts),
  };
};
