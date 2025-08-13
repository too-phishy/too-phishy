import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { processSuspiciousLinks } from "../processSuspiciousLinks.js";
import { sectionsForLikelyPhishingLinks } from "../sections/sectionsForLikelyPhishingLinks.js";
import { sectionsForNonTopMillionLinks } from "../sections/sectionsForNonTopMillionLinks.js";
import { sectionsForCodeHostingSiteLink } from "../sections/sectionsForCodeHostingSiteLink.js";

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

  const { reputableURIs, potentialPhishingURIs, likelyPhishingURIHashes } =
    await processSuspiciousLinks(fullLinkURIs);
  const { nonTopMillionLinksSections } = await sectionsForNonTopMillionLinks(
    potentialPhishingURIs
  );
  const { likelyPhishingLinksSections } = await sectionsForLikelyPhishingLinks(
    likelyPhishingURIHashes
  );

  const potentialPhishingLinks = []
    .concat(sectionForAWSFlagged ? AWS_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAzureFlagged ? AZURE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForBitlyFlagged ? BITLY_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGoogleSitesFlagged ? GOOGLE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGCPFlagged ? GCP_PHISHING_SITE_DOMAIN : [])
    .concat(potentialPhishingURIs.map((URIData) => URIData.domain()));

  const overallPhishy =
    likelyPhishingURIHashes.length > 0 || potentialPhishingLinks.length > 0;

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
      likelyPhishingURIHashes.length > 0
        ? {
            decoratedText: {
              text: `Don't click`,
              bottomLabel: `${
                likelyPhishingURIHashes.length
              } very likely phishing ${
                likelyPhishingURIHashes.length > 1 ? "links" : "link"
              }: ${likelyPhishingURIHashes
                .map((URIHash) => URIHash.URI.domain())
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
      reputableURIs.length > 0
        ? {
            decoratedText: {
              text: `${reputableURIs.length} reputable ${
                reputableURIs.length > 1 ? "links" : "link"
              }`,
              bottomLabel: `${reputableURIs
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
      .concat(sectionForAWSFlagged ? awsSections : [])
      .concat(sectionForAzureFlagged ? azureSections : [])
      .concat(sectionForBitlyFlagged ? bitlySections : [])
      .concat(sectionForGoogleSitesFlagged ? googleSitesSections : [])
      .concat(sectionForGCPFlagged ? gcpSections : [])
      .concat(nonTopMillionLinksSections),
    // .concat(sectionForDebugging(potentialPhishingURIs, likelyPhishingURIHashes)),
  };
};
