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

const sectionForLink = (URI, formattedResults, results) => {
  const explanationWidgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `This link is not in the top one million most popular domains on the internet, as defined by the Tranco Top 1 Million list. Domains not on this list may lead somewhere untrustworthy.`,
      },
    },
    {
      decoratedText: {
        text: ``,
        bottomLabel: `Below is the available whois information for ${URI.domain()}.`,
      },
    },
  ];
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
              bottomLabel: `No data available for ${URI.domain()}`,
            },
          },
        ];
  const learnMoreWidget = [
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
  const widgets = explanationWidgets.concat(widgetsForLink).concat(learnMoreWidget);
  return {
    header: `Non-Top-Million Link: ${URI.toString()}`,
    widgets: widgets,
    collapsible: true,
  };
};

export const sectionsForNonTopMillionLinks = async (nonTopMillionURIs) => {
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
        URI,
        formattedResultsPerDomain[URI.domain()],
        resultsPerDomain[URI.domain()]
      );
    }),
  };
};
