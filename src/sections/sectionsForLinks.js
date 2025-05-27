import whois from "whois-json";
import to from "to-case";
import { COUNTRY_CODE_TO_COUNTRY_MAP } from "../countryCodeToCountryMap.js";

const processDomainName = async (domainName) => {
  try {
    const results = await whois(domainName);
    const formattedResults = {};
    for (const key of Object.keys(results)) {
      if (key.slice(0, 10) === "registrant") {
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
    }
    return { results, formattedResults };
  } catch (e) {
    return { results: {}, formattedResults: {} };
  }
};

const sectionForLink = (domainName, formattedResults, results) => {
  const widgetsForLink =
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
              bottomLabel: `No data available for ${domainName}`,
            },
          },
        ];
  const explanationWidgets = [
    {
      decoratedText: {
        text: "Rarely seen link",
        bottomLabel: `${domainName} is not in the top million most common websites in the world.`,
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
                url: "https://tranco-list.eu/list/K2XYW",
                openAs: "OVERLAY",
              },
            },
          },
        ],
      },
    },
  ];
  const widgets = explanationWidgets.concat(widgetsForLink);
  return {
    header: `What we know about link ${domainName}:`,
    widgets: widgets,
    collapsible: true,
  };
};

export const sectionsForLinks = async (nonTopMillionURIs) => {
  const formattedResultsPerDomain = {};
  const resultsPerDomain = {};
  for (const URI of nonTopMillionURIs) {
    const domainName = URI.domain();
    const { results, formattedResults } = await processDomainName(domainName);
    formattedResultsPerDomain[domainName] = formattedResults;
    resultsPerDomain[domainName] = results;
  }
  return {
    linksSections: nonTopMillionURIs.map((URI) => {
      return sectionForLink(
        URI.domain(),
        formattedResultsPerDomain[URI.domain()],
        resultsPerDomain[URI.domain()]
      );
    }),
  };
};
