import {
  AWS_PHISHING_SITE_DOMAIN,
  AZURE_PHISHING_SITE_DOMAIN,
} from "../cards/cardForSubscribedUser.js";

export const sectionForAzure = (domainNames) => {
  const azurePhishingLinks = [...domainNames].filter(
    (key) => key.toString().indexOf(AZURE_PHISHING_SITE_DOMAIN) !== -1,
  );
  return {
    sectionForAzureFlagged:
      !!azurePhishingLinks && azurePhishingLinks.length > 0,
    azureSection: {
      header: `${AZURE_PHISHING_SITE_DOMAIN} is a potential phishing link:`,
      widgets: [
        {
          decoratedText: {
            text: "Don’t click.",
            bottomLabel: `Using a common Azure storage url with root domain ${AZURE_PHISHING_SITE_DOMAIN}, i.e. Azure storage links which use the domain "blob.core.windows.net",  allows scammers to host malicious code on a website that gets past spam filters.`,
            startIcon: {
              iconUrl:
                "https://toophishy.com/images/noun-hate-mail-124279-993AE0.png",
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
