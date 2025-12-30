import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { processLinks } from "../processLinks.js";
import { sectionsForLikelyPhishingLinks } from "../sections/sectionsForLikelyPhishingLinks.js";
import { sectionsForCodeHostingSiteLink } from "../sections/sectionsForCodeHostingSiteLink.js";
import { performAIAnalysis } from "../performAIAnalysis.js";

export const AWS_PHISHING_SITE_DOMAIN = "s3.amazonaws.com";
export const AZURE_PHISHING_SITE_DOMAIN = "blob.core.windows.net";
export const BITLY_PHISHING_SITE_DOMAIN = "bit.ly";
export const GOOGLE_PHISHING_SITE_DOMAIN = "sites.google.com";
export const GCP_PHISHING_SITE_DOMAIN = "storage.googleapis.com";

export const cardForActiveUser = async (
  headers,
  fullLinkURIs,
  messageBodies,
  fullMessageData
) => {
  const {
    codeHostingSiteFlagged: sectionForAWSFlagged,
    sections: awsSections,
  } = sectionsForCodeHostingSiteLink(
    fullLinkURIs,
    AWS_PHISHING_SITE_DOMAIN,
    "https://cybersecuritynews.com/hackers-leverage-websites-hosted-aws"
  );
  const {
    codeHostingSiteFlagged: sectionForAzureFlagged,
    sections: azureSections,
  } = sectionsForCodeHostingSiteLink(
    fullLinkURIs,
    AZURE_PHISHING_SITE_DOMAIN,
    "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-azure-blob-storage-to-impersonate-microsoft"
  );
  const {
    codeHostingSiteFlagged: sectionForBitlyFlagged,
    sections: bitlySections,
  } = sectionsForCodeHostingSiteLink(
    fullLinkURIs,
    BITLY_PHISHING_SITE_DOMAIN,
    "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-bitly-blob-storage-to-impersonate-microsoft"
  );
  const {
    codeHostingSiteFlagged: sectionForGoogleSitesFlagged,
    sections: googleSitesSections,
  } = sectionsForCodeHostingSiteLink(
    fullLinkURIs,
    GOOGLE_PHISHING_SITE_DOMAIN,
    "https://www.bleepingcomputer.com/news/security/phishers-abuse-google-oauth-to-spoof-google-in-dkim-replay-attack/"
  );
  const {
    codeHostingSiteFlagged: sectionForGCPFlagged,
    sections: gcpSections,
  } = sectionsForCodeHostingSiteLink(
    fullLinkURIs,
    GCP_PHISHING_SITE_DOMAIN,
    "https://www.bleepingcomputer.com/news/security/phishing-campaign-uses-google-cloud-services-to-steal-office-365-logins/"
  );

  const { topMillionURIs, nonTopMillionURIs, likelyPhishingURIDicts } =
    await processLinks(fullLinkURIs, messageBodies);

  const {
    deceptiveLinksFlagged,
    deceptiveLinksSection,
    socialEngineeringFlagged,
    socialEngineeringSection,
  } = await performAIAnalysis(
    fullLinkURIs,
    likelyPhishingURIDicts,
    messageBodies
  );

  const { likelyPhishingLinksSections } = sectionsForLikelyPhishingLinks(
    likelyPhishingURIDicts
  );

  const potentialPhishingLinks = []
    .concat(sectionForAWSFlagged ? AWS_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAzureFlagged ? AZURE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForBitlyFlagged ? BITLY_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGoogleSitesFlagged ? GOOGLE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGCPFlagged ? GCP_PHISHING_SITE_DOMAIN : []);

  const overallPhishy =
    deceptiveLinksFlagged ||
    socialEngineeringFlagged ||
    likelyPhishingURIDicts.length > 0 ||
    potentialPhishingLinks.length > 0;

  const overviewWidgets = []
    .concat({
      decoratedText: {
        text: "Is it Phishy?",
        bottomLabel: overallPhishy ? "Yes: Possibly Phishy" : "No: Not Phishy",
        startIcon: {
          iconUrl: overallPhishy
            ? "https://toophishy.com/red.png"
            : "https://toophishy.com/green.png",
        },
        wrapText: true,
      },
    })
    .concat(
      deceptiveLinksFlagged || socialEngineeringFlagged
        ? {
            decoratedText: {
              text: `This email was identified as malicious.`,
              bottomLabel: `More details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-red.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      likelyPhishingURIDicts.length > 0
        ? {
            decoratedText: {
              text: `Don't click`,
              bottomLabel: `${
                likelyPhishingURIDicts.length
              } very likely phishing ${
                likelyPhishingURIDicts.length > 1 ? "links" : "link"
              }: ${likelyPhishingURIDicts
                .map((URIDict) => URIDict.URI.domain())
                .join(", ")}. Further details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-red.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      potentialPhishingLinks.length > 0
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${
                potentialPhishingLinks.length
              } potential phishing ${
                potentialPhishingLinks.length > 1 ? "links" : "link"
              }: ${potentialPhishingLinks.join(", ")}. Further details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-orange.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      topMillionURIs.length > 0
        ? {
            decoratedText: {
              text: `${topMillionURIs.length} reputable ${
                topMillionURIs.length > 1 ? "links" : "link"
              }`,
              bottomLabel: `${topMillionURIs
                .map((URI) => URI.domain())
                .join(", ")}`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-green.png",
              },
              wrapText: true,
            },
          }
        : []
    );
  return {
    sections: [
      {
        widgets: [
          {
            image: {
              imageUrl: "https://toophishy.com/gmail_logo.png",
              altText: `TooPhishy image`,
              onClick: {
                openLink: {
                  url: "https://toophishy.com",
                },
              },
            },
          },
        ],
      },
      {
        header: "Overview",
        widgets: overviewWidgets,
        collapsible: false,
      },
    ]
      .concat(likelyPhishingLinksSections)
      .concat(deceptiveLinksFlagged ? deceptiveLinksSection : [])
      .concat(socialEngineeringFlagged ? socialEngineeringSection : [])
      .concat(sectionForAWSFlagged ? awsSections : [])
      .concat(sectionForAzureFlagged ? azureSections : [])
      .concat(sectionForBitlyFlagged ? bitlySections : [])
      .concat(sectionForGoogleSitesFlagged ? googleSitesSections : [])
      .concat(sectionForGCPFlagged ? gcpSections : []),
    // .concat(sectionForDebugging(nonTopMillionURIs, likelyPhishingURIs)),
  };
};
