import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { sectionForPhishingLink } from "../sections/sectionForPhishingLink.js";
import { processSuspiciousLinks } from "../processSuspiciousLinks.js";
import { sectionsForSuspiciousLinks } from "../sections/sectionsForSuspiciousLinks.js";

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
  fullMessageData,
  baseUrl
) => {
  const { phishingLinkFlagged: sectionForAWSFlagged, section: awsSection } =
    sectionForPhishingLink(
      fullLinkURIs,
      AWS_PHISHING_SITE_DOMAIN,
      "https://cybersecuritynews.com/hackers-leverage-websites-hosted-aws"
    );
  const { phishingLinkFlagged: sectionForAzureFlagged, section: azureSection } =
    sectionForPhishingLink(
      fullLinkURIs,
      AZURE_PHISHING_SITE_DOMAIN,
      "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-azure-blob-storage-to-impersonate-microsoft"
    );
  const { phishingLinkFlagged: sectionForBitlyFlagged, section: bitlySection } =
    sectionForPhishingLink(
      fullLinkURIs,
      BITLY_PHISHING_SITE_DOMAIN,
      "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-bitly-blob-storage-to-impersonate-microsoft"
    );
  const {
    phishingLinkFlagged: sectionForGoogleSitesFlagged,
    section: googleSitesSection,
  } = sectionForPhishingLink(
    fullLinkURIs,
    GOOGLE_PHISHING_SITE_DOMAIN,
    "https://www.bleepingcomputer.com/news/security/phishers-abuse-google-oauth-to-spoof-google-in-dkim-replay-attack/"
  );
  const { phishingLinkFlagged: sectionForGCPFlagged, section: gcpSection } =
    sectionForPhishingLink(
      fullLinkURIs,
      GCP_PHISHING_SITE_DOMAIN,
      "https://www.bleepingcomputer.com/news/security/phishing-campaign-uses-google-cloud-services-to-steal-office-365-logins/"
    );
  const wellKnownPhishingLinks = []
    .concat(sectionForAWSFlagged ? AWS_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAzureFlagged ? AZURE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForBitlyFlagged ? BITLY_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGoogleSitesFlagged ? GOOGLE_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGCPFlagged ? GCP_PHISHING_SITE_DOMAIN : []);

  const { reputableURIs, suspiciousURIs } = await processSuspiciousLinks(
    fullLinkURIs
  );
  const { linksSections } = await sectionsForSuspiciousLinks(suspiciousURIs);

  const sectionsForAttachmentsFlagged = attachments.length > 0;

  const overallPhishy =
    suspiciousURIs.length > 0 ||
    wellKnownPhishingLinks.length > 0 ||
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
    .concat(
      wellKnownPhishingLinks.length > 0
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${
                wellKnownPhishingLinks.length
              } potential phishing ${
                wellKnownPhishingLinks.length > 1 ? "links" : "link"
              }: ${wellKnownPhishingLinks.join(", ")}. Further details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-5741519-FF001C.png",
              },
            },
          }
        : []
    )
    .concat(
      suspiciousURIs.length > 0
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${suspiciousURIs.length} suspicious ${
                suspiciousURIs.length > 1 ? "links" : "link"
              }: ${suspiciousURIs
                .map((URIData) => URIData.URI.domain())
                .join(", ")}. Further details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-5741519-FF001C.png",
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
        widgets: [
          {
            selectionInput: {
              type: "RADIO_BUTTON",
              label: "Report Phishing",
              name: "Report Phishing",
              items: [
                {
                  text: `Label "mobile-phishing-reported" has already been added to this email.`,
                  value: "1",
                  selected: false,
                },
              ],
              onChangeAction: {
                function: `${baseUrl}/reportPhishing`,
                loadIndicator: "SPINNER",
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
      .concat(sectionForAWSFlagged ? awsSection : [])
      .concat(sectionForAzureFlagged ? azureSection : [])
      .concat(sectionForBitlyFlagged ? bitlySection : [])
      .concat(sectionForGoogleSitesFlagged ? googleSitesSection : [])
      .concat(sectionForGCPFlagged ? gcpSection : [])
      .concat(linksSections),
  };
};
