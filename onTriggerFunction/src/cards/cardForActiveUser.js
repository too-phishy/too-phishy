import { sectionForDebugging } from "../sections/sectionForDebugging.js";
import { processLinks } from "../processLinks.js";
import { sectionForLikelyPhishingLinks } from "../sections/sectionForLikelyPhishingLinks.js";
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

  const { topMillionURIs, nonTopMillionURIs, likelyPhishingURIDicts } =
    await processLinks(fullLinkURIs);

  const {
    deceptiveLinksFlagged,
    deceptiveLinksSection,
    socialEngineeringFlagged,
    socialEngineeringSection,
  } = await performAIAnalysis(
    fullLinkURIs,
    topMillionURIs,
    likelyPhishingURIDicts,
    messageBodies
  );

  const likelyPhishingLinksSection = sectionForLikelyPhishingLinks(
    likelyPhishingURIDicts
  );

  const overallPhishy =
    deceptiveLinksFlagged ||
    socialEngineeringFlagged ||
    likelyPhishingURIDicts.length > 0 ||
    codeHostingSiteURIDicts.length > 0;

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
      deceptiveLinksFlagged || socialEngineeringFlagged
        ? {
            decoratedText: {
              text: `This email was identified as malicious.`,
              bottomLabel: `Further details below.`,
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
      codeHostingSiteURIDicts.length > 0
        ? {
            decoratedText: {
              text: `Hesitate before clicking`,
              bottomLabel: `${
                codeHostingSiteURIDicts.length
              } potential phishing ${
                codeHostingSiteURIDicts.length > 1 ? "links" : "link"
              }: ${codeHostingSiteURIDicts
                .map((URIDict) => URIDict.URI.domain())
                .join(", ")}. Further details below.`,
              startIcon: {
                iconUrl: "https://toophishy.com/noun-link-orange.png",
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
        likelyPhishingURIDicts.length > 0 ? likelyPhishingLinksSection : []
      )
      .concat(deceptiveLinksFlagged ? deceptiveLinksSection : [])
      .concat(socialEngineeringFlagged ? socialEngineeringSection : [])
      .concat(codeHostingSiteFlagged ? codeHostingSiteSection : []),
    // .concat(sectionForDebugging(nonTopMillionURIs, likelyPhishingURIs)),
  };
};
