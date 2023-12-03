import { GCP_PHISHING_SITE_DOMAIN } from "../cards/cardForSubscribedUser.js";

export const sectionForGCP = (domainNames) => {
  const gcpPhishingLinks = [...domainNames].filter(
    (key) =>
      key.toString().indexOf(GCP_PHISHING_SITE_DOMAIN) !== -1,
  );
  return {
    sectionForGCPFlagged: !!gcpPhishingLinks && gcpPhishingLinks.length > 0,
    gcpSection: {
      header: `${GCP_PHISHING_SITE_DOMAIN} is a potential phishing link:`,
      widgets: [
        {
          decoratedText: {
            text: "Don’t click.",
            bottomLabel: `Using a common GCP storage url like ${GCP_PHISHING_SITE_DOMAIN} allows scammers to host malicious code on a website that gets past spam filters.`,
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
