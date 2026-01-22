import { widgetsForNotFlagged } from "./widgetsForNotFlagged.js";
import { HOSTING_DOMAINS } from "../subdomains/webHostingDomains.js";
import { OR_FORMATTER } from "../cards/cardForActiveUser.js";

export const AWS_PHISHING_DOMAIN = "s3.amazonaws.com";
export const AZURE_PHISHING_DOMAIN = "blob.core.windows.net";
export const BITLY_PHISHING_DOMAIN = "bit.ly";
export const GOOGLE_SITES_PHISHING_DOMAIN = "sites.google.com";
export const GCP_PHISHING_DOMAIN = "storage.googleapis.com";

export const WEB_HOSTING_SUBDOMAINS = [
  { provider: "Amazon Web Services", domain: AWS_PHISHING_DOMAIN },
  { provider: "Microsoft", domain: AZURE_PHISHING_DOMAIN },
  { provider: "Google", domain: GOOGLE_SITES_PHISHING_DOMAIN },
  { provider: "Google", domain: GCP_PHISHING_DOMAIN },
];

export const sectionForLinks = (webHostingSiteURIDicts) => {
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `A link can look trustworthy because it’s hosted on a well-known web hosting platform like ${OR_FORMATTER.format(
          webHostingSiteURIDicts.map((URIDict) => URIDict.URI.domain())
        )}, but anyone can upload content ${
          webHostingSiteURIDicts.length > 0 ? "to these" : "there"
        }. Scammers take advantage of this, making unsafe links appear safe at first glance.`,
        wrapText: true,
      },
    },
  ];
  const linkWidgets = [];
  for (const URIDict of webHostingSiteURIDicts) {
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
          text: `Web hosting provider:`,
          bottomLabel: `${URIDict.webHostingDomainDict.provider} (domain: ${URIDict.webHostingDomainDict.domain})`,
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
    header: `Web Hosting`,
    widgets:
      webHostingSiteURIDicts.length > 0
        ? widgets.concat(linkWidgets)
        : widgetsForNotFlagged,
    collapsible: false,
  };
};

export const sectionForWebHostingSiteLink = (fullLinkURIs) => {
  const uniqueWebHostingSiteSubdomains = new Set();
  const webHostingSiteURIDicts = [];
  for (const URI of fullLinkURIs) {
    for (const subdomainDict of WEB_HOSTING_SUBDOMAINS) {
      if (
        URI.normalizeHostname().toString().indexOf(subdomainDict.domain) !==
          -1 &&
        !uniqueWebHostingSiteSubdomains.has(subdomainDict.domain)
      ) {
        webHostingSiteURIDicts.push({
          URI,
          webHostingDomainDict: subdomainDict,
        });
        uniqueWebHostingSiteSubdomains.add(subdomainDict.domain);
      }
    }
  }
  for (const URI of fullLinkURIs) {
    for (const hostingDomainDict of HOSTING_DOMAINS) {
      if (
        URI.domain() === hostingDomainDict.domain &&
        !uniqueWebHostingSiteSubdomains.has(hostingDomainDict.domain)
      ) {
        webHostingSiteURIDicts.push({
          URI,
          webHostingDomainDict: hostingDomainDict,
        });
        uniqueWebHostingSiteSubdomains.add(hostingDomainDict.domain);
      }
    }
  }
  return {
    webHostingSiteFlagged: webHostingSiteURIDicts.length > 0,
    webHostingSiteURIDicts,
    webHostingSiteSection: sectionForLinks(webHostingSiteURIDicts),
  };
};
