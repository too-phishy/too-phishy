import * as util from "util";
import whois from "whois-json";
import to from "to-case";
import { COUNTRY_CODE_TO_COUNTRY_MAP } from "../countryCodeToCountryMap.js";

export const sectionForHeaders = async (headers) => {
  let fromEmail;
  let fromDomain;
  if (!!headers["From"]) {
    fromEmail =
      headers["From"].split("<").length > 1
        ? headers["From"].split("<")[1].split(">")[0]
        : headers["From"];
    fromDomain = fromEmail.split("@")[1];
  }

  let replyToEmail;
  let replyToDomain;
  if (!!headers["Reply-To"]) {
    replyToEmail =
      headers["Reply-To"].split("<").length > 1
        ? headers["Reply-To"].split("<")[1].split(">")[0]
        : headers["Reply-To"];
    replyToDomain = replyToEmail.split("@")[1];
  }
  const flagged = !!headers["Reply-To"] && fromDomain !== replyToDomain;
  const senderDomainType = flagged ? "Reply-To" : "From";
  const senderDomain = flagged ? replyToDomain : fromDomain;

  let whoisResults;
  let fromDomainCountry;
  try {
    whoisResults = await whois(fromDomain);
    for (const key of Object.keys(whoisResults)) {
      if (
        key === "registrantCountry" &&
        !!COUNTRY_CODE_TO_COUNTRY_MAP[whoisResults[key]]
      ) {
        fromDomainCountry = COUNTRY_CODE_TO_COUNTRY_MAP[whoisResults[key]];
      }
    }
  } catch (e) {}

  const bottomLabel = `'Reply-To' address '${replyToEmail}' doesn't match 'From' address '${fromEmail}'. Phishers occasionally spoof the From header but forget to spoof the corresponding Reply-To header.`;
  return {
    senderDomain: senderDomain,
    senderDomainType: senderDomainType,
    sectionForHeadersFlagged: flagged,
    headersSection: {
      header: "Email headers don't match",
      widgets: [
        {
          decoratedText: {
            text: "Reply-to and From address are different.",
            bottomLabel: bottomLabel,
          },
        },
        {
          horizontalAlignment: "CENTER",
          buttonList: {
            buttons: [
              {
                text: "Learn More",
                onClick: {
                  openLink: {
                    url: "https://www.graphus.ai/blog/email-spoofing/#:~:text=If%20the%20reply%20to%20address,may%20indicate%20a%20spoofed%20message.",
                  },
                },
              },
            ],
          },
        },
      ],
      collapsible: true,
    },
    sectionForFromDomainFlagged: !!fromDomainCountry,
    fromDomainSection: {
      header: `What we know about sender ${senderDomain}:`,
      widgets: [
        {
          decoratedText: {
            text: "The sender's 'Reply-To' address ${fromDomain} is not in the top million most common websites in the world.`",
            bottomLabel: `Our whois check shows that ${senderDomain} is hosted in ${fromDomainCountry}.`,
          },
        },
      ],
      collapsible: true,
    },
  };
};
