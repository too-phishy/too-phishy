import * as util from "util";
import whois from "whois-json";
import to from "to-case";
import { COUNTRY_CODE_TO_COUNTRY_MAP } from "../countryCodeToCountryMap.js";

export const sectionForHeaders = async (headers) => {
  const fromEmail =
    headers["From"].split("<").length > 1
      ? headers["From"].split("<")[1].split(">")[0]
      : headers["From"];
  const fromDomain = fromEmail.split("@")[1];

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

  let results;
  const formattedResults = {};
  try {
    results = await whois(senderDomain);
    for (const key of Object.keys(results)) {
      if (
        key === "registrantCountry" &&
        !!COUNTRY_CODE_TO_COUNTRY_MAP[results[key]]
      ) {
        formattedResults[to.capital(key)] =
          COUNTRY_CODE_TO_COUNTRY_MAP[results[key]];
      } else {
        formattedResults[to.capital(key)] = results[key];
      }
    }
  } catch (e) {
    results = {};
  }

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
    sectionForFromDomainFlagged: Object.keys(formattedResults).length > 0,
    fromDomainSection: {
      header: `What we know about sender ${senderDomain}:`,
      widgets:
        Object.keys(formattedResults).length > 0
          ? Object.keys(formattedResults).map((key) => {
              return {
                decoratedText: {
                  text: key,
                  bottomLabel: formattedResults[key],
                },
              };
            })
          : [
              {
                decoratedText: {
                  text: ``,
                  bottomLabel: `No data available for ${senderDomain}`,
                },
              },
            ],
      collapsible: true,
    },
  };
};
