import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { sectionForCodeHostingSiteLink } from "../sections/sectionForCodeHostingSiteLink.js";
import { processSuspiciousLinks } from "../processSuspiciousLinks.js";
import { sectionForSenderDomain } from "../sections/sectionForSenderDomain.js";
import { sectionsForLikelyPhishingLinks } from "../sections/sectionsForLikelyPhishingLinks.js";
import { sectionsForNonTopMillionLinks } from "../sections/sectionsForNonTopMillionLinks.js";
import { processSenderDomain } from "../processSenderDomain.js";

export const AWS_PHISHING_SITE_DOMAIN = "s3.amazonaws.com";
export const AZURE_PHISHING_SITE_DOMAIN = "blob.core.windows.net";
export const BITLY_PHISHING_SITE_DOMAIN = "bit.ly";
export const GOOGLE_PHISHING_SITE_DOMAIN = "sites.google.com";
export const GCP_PHISHING_SITE_DOMAIN = "storage.googleapis.com";

export const cardForSubscribedUser = async (
  headers,
  fullLinkURIs,
  messageBodies,
  attachments,
  fullMessageData
) => {
  const { phishingLinkFlagged: sectionForAWSFlagged, section: awsSection } =
    sectionForCodeHostingSiteLink(
      fullLinkURIs,
      AWS_PHISHING_SITE_DOMAIN,
      "https://cybersecuritynews.com/hackers-leverage-websites-hosted-aws"
    );
  const { phishingLinkFlagged: sectionForAzureFlagged, section: azureSection } =
    sectionForCodeHostingSiteLink(
      fullLinkURIs,
      AZURE_PHISHING_SITE_DOMAIN,
      "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-azure-blob-storage-to-impersonate-microsoft"
    );
  const { phishingLinkFlagged: sectionForBitlyFlagged, section: bitlySection } =
    sectionForCodeHostingSiteLink(
      fullLinkURIs,
      BITLY_PHISHING_SITE_DOMAIN,
      "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-bitly-blob-storage-to-impersonate-microsoft"
    );
  const {
    phishingLinkFlagged: sectionForGoogleSitesFlagged,
    section: googleSitesSection,
  } = sectionForCodeHostingSiteLink(
    fullLinkURIs,
    GOOGLE_PHISHING_SITE_DOMAIN,
    "https://www.bleepingcomputer.com/news/security/phishers-abuse-google-oauth-to-spoof-google-in-dkim-replay-attack/"
  );
  const { phishingLinkFlagged: sectionForGCPFlagged, section: gcpSection } =
    sectionForCodeHostingSiteLink(
      fullLinkURIs,
      GCP_PHISHING_SITE_DOMAIN,
      "https://www.bleepingcomputer.com/news/security/phishing-campaign-uses-google-cloud-services-to-steal-office-365-logins/"
    );

  const {
    senderDomain,
    senderDomainRegistrationDate,
    isSenderDomainLikelyPhishingLink,
  } = processSenderDomain(headers);

  const { reputableURIs, potentialPhishingURIs, likelyPhishingURIs } =
    await processSuspiciousLinks(fullLinkURIs);
  const { nonTopMillionLinksSections } = await sectionsForNonTopMillionLinks(
    potentialPhishingURIs
  );
  const { likelyPhishingLinksSections } = await sectionsForLikelyPhishingLinks(
    likelyPhishingURIs
  );

  const senderDomainSection = sectionForSenderDomain(
    senderDomain,
    senderDomainRegistrationDate
  );

  const sectionsForAttachmentsFlagged = attachments.length > 0;

  const potentialPhishingLinks = []
    .concat(sectionForAWSFlagged ? AWS_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAzureFlagged ? AZURE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForBitlyFlagged ? BITLY_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGoogleSitesFlagged ? GOOGLE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGCPFlagged ? GCP_PHISHING_SITE_DOMAIN : [])
    .concat(potentialPhishingURIs);

  const overallPhishy =
    isSenderDomainLikelyPhishingLink ||
    likelyPhishingURIs.length > 0 ||
    potentialPhishingLinks.length > 0 ||
    sectionsForAttachmentsFlagged;

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
      },
    })
    .concat(
      isSenderDomainLikelyPhishingLink
        ? {
            decoratedText: {
              text: "Don't trust this sender",
              bottomLabel: `Sender ${senderEmail} is emailing you from a likely phishing address. Further details below.`,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-outgoing-mail-367819-FF001C.png",
              },
            },
          }
        : []
    )
    .concat(
      likelyPhishingURIs.length > 0
        ? {
            decoratedText: {
              text: `Don't click`,
              bottomLabel: `${likelyPhishingURIs.length} likely phishing ${
                likelyPhishingURIs.length > 1 ? "links" : "link"
              }: ${likelyPhishingURIs
                .map((URIData) => URIData.URI.domain())
                .join(", ")}. Further details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-5741519-FF001C.png",
              },
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
                iconUrl: "https://toophishy.com/noun-link-5741519-FF001C.png",
              },
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
                iconUrl: "https://toophishy.com/noun-link-5741519-007435.png",
              },
            },
          }
        : []
    )
    .concat({
      decoratedText: {
        text: sectionsForAttachmentsFlagged
          ? `Contains attachments`
          : `No attachments`,
        bottomLabel: sectionsForAttachmentsFlagged
          ? `Only open attachments unless you are 100% sure that the sender is who they say they are: ${attachments.join(
              ", "
            )}`
          : ``,
        startIcon: {
          iconUrl: sectionsForAttachmentsFlagged
            ? "https://toophishy.com/noun-attachment-2490420-FF001C.png"
            : "https://toophishy.com/noun-attachment-2490420-007435.png",
        },
      },
    });
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
      .concat(isSenderDomainLikelyPhishingLink ? senderDomainSection : [])
      .concat(likelyPhishingLinksSections)
      .concat(sectionForAWSFlagged ? awsSection : [])
      .concat(sectionForAzureFlagged ? azureSection : [])
      .concat(sectionForBitlyFlagged ? bitlySection : [])
      .concat(sectionForGoogleSitesFlagged ? googleSitesSection : [])
      .concat(sectionForGCPFlagged ? gcpSection : [])
      .concat(nonTopMillionLinksSections)
      .concat(
        sectionForDebugging(headers, senderDomain, senderDomainRegistrationDate)
      ),
  };
};
