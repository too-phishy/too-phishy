import { BITLY_PHISHING_SITE_DOMAIN } from "../cards/cardForSubscribedUser.js";

export const sectionForBitly = (fullLinkURIs) => {
  const bitlyPhishingLinks = [...fullLinkURIs].filter(
    (key) =>
      key.normalizeHostname().toString().indexOf(BITLY_PHISHING_SITE_DOMAIN) !==
      -1
  );
  const sectionForBitlyFlagged =
    !!bitlyPhishingLinks && bitlyPhishingLinks.length > 0;
  return {
    sectionForBitlyFlagged,
    bitlySection: sectionForBitlyFlagged && {
      header: `${BITLY_PHISHING_SITE_DOMAIN} is a potential phishing link:`,
      widgets: [
        {
          decoratedText: {
            text:
              bitlyPhishingLinks.length > 1
                ? `Links: ${bitlyPhishingLinks
                    .map((link) => link.toString())
                    .join(", ")}`
                : `Link: ${bitlyPhishingLinks[0].toString()}`,
            bottomLabel: `Using a url shortener like ${BITLY_PHISHING_SITE_DOMAIN} allows scammers to host malicious code on a website that gets past spam filters.`,
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
                    url: "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-bitly-blob-storage-to-impersonate-microsoft",
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
