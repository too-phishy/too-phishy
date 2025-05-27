import { AWS_PHISHING_SITE_DOMAIN } from "../cards/cardForSubscribedUser.js";

export const sectionForAWS = (fullLinkURIs) => {
  const awsPhishingLinks = [...fullLinkURIs].filter(
    (key) =>
      key.normalizeHostname().toString().indexOf(AWS_PHISHING_SITE_DOMAIN) !==
      -1
  );
  const sectionForAWSFlagged =
    !!awsPhishingLinks && awsPhishingLinks.length > 0;
  return {
    sectionForAWSFlagged,
    awsSection: sectionForAWSFlagged && {
      header: `${AWS_PHISHING_SITE_DOMAIN} is a potential phishing link:`,
      widgets: [
        {
          decoratedText: {
            text: "Don’t click.",
            bottomLabel: `Using a common AWS storage url like s3.amazonaws.com allows scammers to host malicious code on a website that gets past spam filters.`,
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
                    url: "https://cybersecuritynews.com/hackers-leverage-websites-hosted-aws",
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
