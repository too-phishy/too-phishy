import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { sectionForBitly } from "../sections/sectionForBitly.js";
import { sectionForGCP } from "../sections/sectionForGCP.js";
import { sectionForAWS } from "../sections/sectionForAWS.js";
import { sectionForAzure } from "../sections/sectionForAzure.js";
import { processNonTopMillion } from "../processNonTopMillion.js";
import { sectionsForLinks } from "../sections/sectionsForLinks.js";

export const BITLY_PHISHING_SITE_DOMAIN = "bit.ly";
export const GCP_PHISHING_SITE_DOMAIN = "storage.googleapis.com";
export const AZURE_PHISHING_SITE_DOMAIN = "blob.core.windows.net";
export const AWS_PHISHING_SITE_DOMAIN = "s3.amazonaws.com";

export const cardForSubscribedUser = async (
  headers,
  fullLinkUrls,
  domainNames,
  messageBodies,
  attachments,
  fullMessageData
) => {
  const { sectionForBitlyFlagged, bitlySection } = sectionForBitly(domainNames);
  const { sectionForGCPFlagged, gcpSection } = sectionForGCP(fullLinkUrls);
  const { sectionForAWSFlagged, awsSection } = sectionForAWS(fullLinkUrls);
  const { sectionForAzureFlagged, azureSection } =
    sectionForAzure(fullLinkUrls);
  const wellKnownPhishingLinks = []
    .concat(sectionForBitlyFlagged ? BITLY_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGCPFlagged ? GCP_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAWSFlagged ? AWS_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAzureFlagged ? AZURE_PHISHING_SITE_DOMAIN : []);

  const { topMillionDomainNames, nonTopMillionDomainNames } =
    processNonTopMillion(domainNames);
  const { linksSections } = await sectionsForLinks(nonTopMillionDomainNames);

  const sectionsForAttachmentsFlagged = attachments.length > 0;

  const overallPhishy =
    nonTopMillionDomainNames.length > 0 ||
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
      topMillionDomainNames.length > 0
        ? {
            decoratedText: {
              text: `${topMillionDomainNames.length} reputable ${
                topMillionDomainNames.length > 1 ? "links" : "link"
              }`,
              bottomLabel: `${topMillionDomainNames.join(", ")}`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-5741519-007435.png",
              },
            },
          }
        : []
    )
    .concat(
      nonTopMillionDomainNames.length > 0
        ? {
            decoratedText: {
              text: `${nonTopMillionDomainNames.length} rarely seen ${
                nonTopMillionDomainNames.length > 1 ? "links" : "link"
              }`,
              bottomLabel: `We've provided whois information below for: ${nonTopMillionDomainNames.join(
                ", "
              )}`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-5741519-FF001C.png",
              },
            },
          }
        : []
    )
    .concat(
      wellKnownPhishingLinks.length > 0
        ? {
            decoratedText: {
              text: `${wellKnownPhishingLinks.length} potential phishing ${
                wellKnownPhishingLinks.length > 1 ? "links" : "link"
              }`,
              bottomLabel: `${wellKnownPhishingLinks.join(", ")}`,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-hate-mail-124279-993AE0.png",
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
            ? `Only open attachments unless you are 100% sure that the sender is who they say they are: ${attachments.join(", ")}`
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
      .concat(linksSections)
      .concat(sectionForBitlyFlagged ? bitlySection : [])
      .concat(sectionForGCPFlagged ? gcpSection : [])
      .concat(sectionForAWSFlagged ? awsSection : [])
      .concat(sectionForAzureFlagged ? azureSection : [])
    // .concat(
    //   sectionForDebugging(
    //     messageBodies,
    //     domainNames,
    //     headers,
    //     fullMessageData,
    //     attachments,
    //   ),
    // ),
  };
};
