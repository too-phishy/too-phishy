import {
  AWS_PHISHING_SITE_DOMAIN,
  AZURE_PHISHING_SITE_DOMAIN,
} from "../cards/cardForSubscribedUser.js";

export const sectionForAzure = (fullLinkURIs) => {
  const azurePhishingLinks = [...fullLinkURIs].filter(
    (key) =>
      key.normalizeHostname().toString().indexOf(AZURE_PHISHING_SITE_DOMAIN) !==
      -1
  );
  const sectionForAzureFlagged =
    !!azurePhishingLinks && azurePhishingLinks.length > 0;
  return {
    sectionForAzureFlagged,
    azureSection: sectionForAzureFlagged && {
      header: `${AZURE_PHISHING_SITE_DOMAIN} is a potential phishing link:`,
      widgets: [
        {
          decoratedText: {
            text:
              azurePhishingLinks.length > 1
                ? `Links: ${azurePhishingLinks
                    .map((link) => link.toString())
                    .join(", ")}`
                : `Link: ${azurePhishingLinks[0].toString()}`,
            bottomLabel: `Using a common Azure storage url like blob.core.windows.net allows scammers to host malicious code on a website that gets past spam filters.`,
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
                    url: "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-azure-blob-storage-to-impersonate-microsoft",
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
