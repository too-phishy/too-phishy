import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { sectionsForAttachments } from "../sections/sectionsForAttachments.js";
import { sectionForBitly } from "../sections/sectionForBitly.js";
import { sectionForGCP } from "../sections/sectionForGCP.js";
import { sectionForAWS } from "../sections/sectionForAWS.js";
import { sectionForAzure } from "../sections/sectionForAzure.js";
import { sectionForHeaders } from "../sections/sectionForHeaders.js";
import { processNonTopMillion } from "../processNonTopMillion.js";
import { sectionsForLinks } from "../sections/sectionsForLinks.js";
import sanitize from "sanitize-filename";

export const BITLY_PHISHING_SITE_DOMAIN = "bit.ly";
export const GCP_PHISHING_SITE_DOMAIN = "googleapis.com";
export const AZURE_PHISHING_SITE_DOMAIN = "windows.net";
export const AWS_PHISHING_SITE_DOMAIN = "amazonaws.com";

export const cardForSubscribedUser = async (
  headers,
  domainNames,
  messageBodies,
  attachments,
  fullMessageData,
) => {
  const {
    senderDomain,
    senderDomainType,
    sectionForHeadersFlagged,
    headersSection,
    sectionForFromDomainFlagged,
    fromDomainSection,
  } = await sectionForHeaders(headers);

  const { sectionForBitlyFlagged, bitlySection } = sectionForBitly(domainNames);
  const { sectionForGCPFlagged, gcpSection } = sectionForGCP(domainNames);
  const { sectionForAWSFlagged, awsSection } = sectionForAWS(domainNames);
  const { sectionForAzureFlagged, azureSection } = sectionForAzure(domainNames);
  const wellKnownPhishingLinks = []
    .concat(sectionForBitlyFlagged ? BITLY_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForGCPFlagged ? GCP_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAWSFlagged ? AWS_PHISHING_SITE_DOMAIN : [])
    .concat(sectionForAzureFlagged ? AZURE_PHISHING_SITE_DOMAIN : []);

  const { topMillionDomainNames, nonTopMillionDomainNames } =
    processNonTopMillion(domainNames);
  const { sectionsForAttachmentsFlagged, attachmentsSections } =
    sectionsForAttachments(attachments);
  const { linksSections } = await sectionsForLinks(nonTopMillionDomainNames);

  const attachmentsBottomLabel =
    attachments.length > 0
      ? sanitize(
          `Author data for ${attachments
            .map((a) => a.SourceFile.toString())
            .join(", ")}`,
        )
      : ``;

  const overallPhishy =
    sectionForHeadersFlagged ||
    nonTopMillionDomainNames.length > 0 ||
    wellKnownPhishingLinks.length > 0 ||
    attachments.length > 0;
  const overviewWidgets = []
    .concat({
      decoratedText: {
        text: "Score",
        bottomLabel: overallPhishy ? "Phishy" : "Not Phishy",
        startIcon: {
          iconUrl: overallPhishy
            ? "https://toophishy.com/red.png"
            : "https://toophishy.com/green.png",
        },
      },
    })
    .concat(
      sectionForHeadersFlagged
        ? {
            decoratedText: {
              text: "Email headers don't match",
              bottomLabel: `From address ${headers["From"]
                .split("<")
                .join("(")
                .split(">")
                .join(")")} could be spoofed`,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-outgoing-mail-367819-FF001C.png",
              },
            },
          }
        : [],
    )
    .concat({
      decoratedText: {
        text: `Check out '${senderDomainType}' address info`,
        bottomLabel: `See domain info for ${senderDomain} below`,
        startIcon: {
          iconUrl: "https://toophishy.com/noun-send-2845907-007435.png",
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
                iconUrl:
                  "https://toophishy.com/noun-link-5741519-007435.png",
              },
            },
          }
        : [],
    )
    .concat(
      nonTopMillionDomainNames.length > 0
        ? {
            decoratedText: {
              text: `${nonTopMillionDomainNames.length} rarely seen ${
                nonTopMillionDomainNames.length > 1 ? "links" : "link"
              }`,
              bottomLabel: `We've provided whois information below for: ${nonTopMillionDomainNames.join(
                ", ",
              )}`,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-link-5741519-FF001C.png",
              },
            },
          }
        : [],
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
        : [],
    )
    .concat({
      decoratedText: {
        text:
          attachments.length > 0
            ? `See author data for attachments`
            : `No attachments`,
        bottomLabel: attachmentsBottomLabel,
        startIcon: {
          iconUrl:
            attachments.length > 0
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
      .concat(sectionForHeadersFlagged ? headersSection : [])
      .concat(fromDomainSection)
      .concat(linksSections)
      .concat(sectionForBitlyFlagged ? bitlySection : [])
      .concat(sectionForGCPFlagged ? gcpSection : [])
      .concat(sectionForAWSFlagged ? awsSection : [])
      .concat(sectionForAzureFlagged ? azureSection : [])
      .concat(sectionsForAttachmentsFlagged ? attachmentsSections : []),
    // .concat(
    //   sectionForDebugging(
    //     messageBodies,
    //     domainNames,
    //     headers,
    //     fullMessageData,
    //     attachments,
    //   ),
    // ),
    displayStyle: "PEEK",
  };
};
