import OpenAI from "openai";
import { z } from "zod";
import { zodTextFormat } from "openai/helpers/zod";
import { sectionForDeceptiveLinks } from "./sections/sectionForDeceptiveLinks.js";
import { sectionForSocialEngineering } from "./sections/sectionForSocialEngineering.js";
import { WEB_HOSTING_SUBDOMAINS } from "./sections/sectionForWebHostingSiteLink.js";
import { HOSTING_DOMAINS_AS_SET } from "./subdomains/webHostingDomains.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

const AppearanceOfLinkMatchesItsTrueNatureAnalysis = z.object({
  linkUrl: z.string(),
  appearanceOfLinkMatchesItsTrueNature: z.boolean(),
  explanation: z.string(),
});

const EmailAnalysis = z.object({
  linkAnalysis: z.array(AppearanceOfLinkMatchesItsTrueNatureAnalysis),
  emailBodyContainsTextInLineWithSocialEngineeringTechniques: z.boolean(),
  explanation: z.string(),
});

export const performAIAnalysis = async (
  uniqueFullLinkURIs,
  topMillionURIs,
  recentlyRegisteredURIDicts,
  messageBodies,
  webHostingSiteFlagged
) => {
  const topMillionURIsMinusWebHostingSiteLinks = topMillionURIs.filter(
    (URI) => {
      const notWebHostingDomain = !HOSTING_DOMAINS_AS_SET.has(URI.domain());
      const notWebHostingSubdomain = WEB_HOSTING_SUBDOMAINS.every(
        (subdomainDict) =>
          !URI.normalizeHostname().toString().includes(subdomainDict.domain)
      );
      return notWebHostingDomain && notWebHostingSubdomain;
    }
  );

  const input = `Please read the email at the bottom of this prompt and tell me the following two things.

1. For each link in the email, tell me if the appearance of the link does not match its true nature, i.e. does the text indicate it links one place where it actually links somewhere else? Please explain why in two sentences or less.

2. Does the email body contain text which prompts user action in line with social engineering techniques? Please explain why in two sentences or less.

Here is a list of all the links in the email to consider for question 1: ${
    uniqueFullLinkURIs.length === 0 ? "[None]" : uniqueFullLinkURIs.join(", ")
  }

I have already analyzed these links to see which were registered in the past 21 days. Here is a list of all the links registered in the past 21 days:  ${
    Object.keys(recentlyRegisteredURIDicts).length === 0
      ? "[None]"
      : recentlyRegisteredURIDicts
          .map((URIDict) => {
            return `\n * Registered ${
              URIDict.diffDays
            } days ago: ${URIDict.URI.toString()}`;
          })
          .join("")
  }

I have also already analyzed these links to see which are in the top million most popular domains in the world. The following links are indeed top million links and are therefore likely to be safe: ${
    topMillionURIsMinusWebHostingSiteLinks.length === 0
      ? "[None]"
      : topMillionURIsMinusWebHostingSiteLinks.join(", ")
  }
 

I have also already analyzed these links to see if they link to subdomain and hosting services that have been known to host phishing sites. Therefore please do not flag sites that are known to host phishing sites because I am already doing that analysis elsewhere.

Here is the email body:

${messageBodies[0]}
`;
  const response = await openai.responses.parse({
    model: "gpt-5.1",
    input: [
      {
        role: "system",
        content:
          "You are a helpful anti-phishing tool helping users find phishing emails.",
      },
      {
        role: "user",
        content: input,
      },
    ],
    text: {
      format: zodTextFormat(EmailAnalysis, "email_analysis"),
    },
  });
  const result = response.output_parsed;
  const deceptiveLinks = result.linkAnalysis.filter(
    (el) => !el.appearanceOfLinkMatchesItsTrueNature
  );
  const deceptiveLinksFlagged = deceptiveLinks.length > 0;
  const deceptiveLinkDicts = deceptiveLinks.map((el) => {
    return { linkUrl: el.linkUrl, explanation: el.explanation };
  });
  const socialEngineeringFlagged =
    result.emailBodyContainsTextInLineWithSocialEngineeringTechniques;
  const socialEngineeringExplanation = result.explanation;

  const deceptiveLinksSection = sectionForDeceptiveLinks(deceptiveLinkDicts);
  const socialEngineeringSection = sectionForSocialEngineering(
    socialEngineeringFlagged,
    socialEngineeringExplanation,
    webHostingSiteFlagged,
    deceptiveLinksFlagged,
    recentlyRegisteredURIDicts
  );

  return {
    deceptiveLinksFlagged,
    deceptiveLinkDicts,
    deceptiveLinksSection,
    socialEngineeringFlagged,
    socialEngineeringSection,
  };
};
