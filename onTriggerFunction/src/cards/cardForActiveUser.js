import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { processLinks } from "../processLinks.js";
import { sectionForRecentlyRegisteredLinks } from "../sections/sectionForRecentlyRegisteredLinks.js";
import { sectionForCodeHostingSiteLink } from "../sections/sectionForCodeHostingSiteLink.js";
import { performAIAnalysis } from "../performAIAnalysis.js";

export const cardForActiveUser = async (
  headers,
  fullLinkURIs,
  messageBodies,
  fullMessageData
) => {
  const {
    codeHostingSiteFlagged,
    codeHostingSiteURIDicts,
    codeHostingSiteSection,
  } = sectionForCodeHostingSiteLink(fullLinkURIs);

  const { topMillionURIs, nonTopMillionURIs, recentlyRegisteredURIDicts } =
    await processLinks(fullLinkURIs);

  const {
    deceptiveLinksFlagged,
    deceptiveLinkDicts,
    deceptiveLinksSection,
    socialEngineeringFlagged,
    socialEngineeringSection,
  } = await performAIAnalysis(
    fullLinkURIs,
    topMillionURIs,
    recentlyRegisteredURIDicts,
    messageBodies
  );

  const recentlyRegisteredLinksSection = sectionForRecentlyRegisteredLinks(
    recentlyRegisteredURIDicts
  );

  const overallPhishy =
    deceptiveLinksFlagged ||
    socialEngineeringFlagged ||
    recentlyRegisteredURIDicts.length > 0 ||
    codeHostingSiteFlagged;

  const overviewWidgets = []
    .concat({
      decoratedText: {
        text: "Is it Phishy?",
        bottomLabel: overallPhishy
          ? "Yes: This email was identified as malicious."
          : "No: Not Phishy",
        startIcon: {
          iconUrl: overallPhishy
            ? "https://toophishy.com/red.png"
            : "https://toophishy.com/green.png",
        },
        wrapText: true,
      },
    })
    .concat(
      recentlyRegisteredURIDicts.length > 0
        ? {
            decoratedText: {
              text: `Don't click`,
              bottomLabel: `${
                recentlyRegisteredURIDicts.length
              } recently registered ${
                recentlyRegisteredURIDicts.length > 1 ? "links" : "link"
              }: ${recentlyRegisteredURIDicts
                .map((URIDict) => URIDict.URI.domain())
                .join(", ")}. More details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-red.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      deceptiveLinksFlagged
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${deceptiveLinkDicts.length} deceptive ${
                deceptiveLinkDicts.length > 1 ? "links" : "link"
              }: ${deceptiveLinkDicts
                .map((dict) => dict.linkUrl)
                .join(", ")}. More details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-orange.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      codeHostingSiteFlagged
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${codeHostingSiteURIDicts.length} ${
                codeHostingSiteURIDicts.length > 1 ? "links" : "link"
              } associated with code hosting sites: ${codeHostingSiteURIDicts
                .map((URIDict) => URIDict.URI.domain())
                .join(", ")}. More details below.`,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-outgoing-mail-367819-993AE0.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      socialEngineeringFlagged
        ? {
            decoratedText: {
              text: `Don't get tricked.`,
              bottomLabel: `Email contains wording associated with social engineering techniques. More details below.`,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-hate-mail-124279-3B6BF9.png",
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
      .concat(
        recentlyRegisteredURIDicts.length > 0
          ? recentlyRegisteredLinksSection
          : []
      )
      .concat(deceptiveLinksFlagged ? deceptiveLinksSection : [])
      .concat(socialEngineeringFlagged ? socialEngineeringSection : [])
      .concat(codeHostingSiteFlagged ? codeHostingSiteSection : []),
    // .concat(sectionForDebugging(nonTopMillionURIs, recentlyRegisteredURIs)),
  };
};
