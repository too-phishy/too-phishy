import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { processLinks } from "../processLinks.js";
import { sectionForRecentlyRegisteredLinks } from "../sections/sectionForRecentlyRegisteredLinks.js";
import { sectionForWebHostingSiteLink } from "../sections/sectionForWebHostingSiteLink.js";
import { performAIAnalysis } from "../performAIAnalysis.js";
import URI from "urijs";

export const AND_FORMATTER = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

export const OR_FORMATTER = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
});

export const cardForActiveUser = async (
  headers,
  fullLinkURIs,
  messageBodies,
  fullMessageData
) => {
  const {
    webHostingSiteFlagged,
    webHostingSiteURIDicts,
    webHostingSiteSection,
  } = sectionForWebHostingSiteLink(fullLinkURIs);

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
    messageBodies,
    webHostingSiteFlagged
  );

  const recentlyRegisteredLinksSection = sectionForRecentlyRegisteredLinks(
    recentlyRegisteredURIDicts
  );

  const overallPhishy =
    deceptiveLinksFlagged ||
    recentlyRegisteredURIDicts.length > 0 ||
    webHostingSiteFlagged;

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
              }: ${AND_FORMATTER.format(
                recentlyRegisteredURIDicts.map((URIDict) =>
                  URIDict.URI.domain()
                )
              )}. More details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/clock.png",
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
              }: ${AND_FORMATTER.format(
                deceptiveLinkDicts.map((dict) => URI(dict.linkUrl).domain())
              )}. More details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-orange.png",
              },
              wrapText: true,
            },
          }
        : []
    )
    .concat(
      webHostingSiteFlagged
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${webHostingSiteURIDicts.length} ${
                webHostingSiteURIDicts.length > 1 ? "links" : "link"
              } associated with web hosting sites:  ${AND_FORMATTER.format(
                webHostingSiteURIDicts.map((URIDict) => URIDict.URI.domain())
              )}. More details below.`,
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
      (webHostingSiteFlagged ||
        deceptiveLinksFlagged ||
        recentlyRegisteredURIDicts.length > 0) &&
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
      .concat(recentlyRegisteredLinksSection)
      .concat(deceptiveLinksSection)
      .concat(webHostingSiteSection)
      .concat(socialEngineeringSection),
    // .concat(sectionForDebugging(nonTopMillionURIs, recentlyRegisteredURIs)),
  };
};
