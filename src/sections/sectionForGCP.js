import { GCP_PHISHING_SITE_DOMAIN } from "../cards/cardForSubscribedUser.js";

export const sectionForGCP = (fullLinkURIs) => {
  const gcpPhishingLinks = [...fullLinkURIs].filter(
    (key) =>
      key.normalizeHostname().toString().indexOf(GCP_PHISHING_SITE_DOMAIN) !==
      -1
  );
  const sectionForGCPFlagged =
    !!gcpPhishingLinks && gcpPhishingLinks.length > 0;
  return {
    sectionForGCPFlagged,
    gcpSection: sectionForGCPFlagged && {
      header: `${GCP_PHISHING_SITE_DOMAIN} is a potential phishing link:`,
      widgets: [
        {
          decoratedText: {
            text: "Don’t click.",
            bottomLabel: `Using a common GCP storage url like ${GCP_PHISHING_SITE_DOMAIN} allows scammers to host malicious code on a website that gets past spam filters.`,
            startIcon: {
              iconUrl: "https://toophishy.com/noun-hate-mail-124279-993AE0.png",
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
