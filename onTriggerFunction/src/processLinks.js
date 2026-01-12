import { lookup } from "rdapper";

import { TOP_MILLION_DOMAINS } from "./topDomains/topDomains.js";

const checkLessThan21DaysOld = async (domainName) => {
  try {
    const data = await lookup(domainName);
    const domainRegistrationDate = new Date(data.record.creationDate);
    const now = new Date();
    const diffDays = (now - domainRegistrationDate) / (1000 * 60 * 60 * 24);
    console.log(
      `Successfully fetched domainRegistrationDate data for ${domainName}: ${domainRegistrationDate}`
    );
    return {
      domainRegistrationDate,
      isRecentlyRegistered: diffDays < 22,
      diffDays,
    };
  } catch (err) {
    console.error(
      `Error fetching domainRegistrationDate data for ${domainName}: ${err}`
    );
    return {
      domainRegistrationDate: null,
      isRecentlyRegistered: false,
      diffDays: null,
    };
  }
};

export const processLinks = async (fullLinkURIs, messageBodies) => {
  const uniqueTopMillionURIs = new Set();
  const uniqueNonTopMillionURIs = new Set();
  const uniqueLikelyPhishingURIs = new Set();
  const topMillionURIs = [];
  const nonTopMillionURIs = [];
  const likelyPhishingURIDicts = [];
  for (const URI of fullLinkURIs) {
    if (TOP_MILLION_DOMAINS.has(URI.domain())) {
      if (!uniqueTopMillionURIs.has(URI.domain())) {
        topMillionURIs.push(URI);
        uniqueTopMillionURIs.add(URI.domain());
      }
    } else {
      const { domainRegistrationDate, isRecentlyRegistered, diffDays } =
        await checkLessThan21DaysOld(URI.domain());
      if (isRecentlyRegistered) {
        if (!uniqueLikelyPhishingURIs.has(URI.domain())) {
          likelyPhishingURIDicts.push({
            URI,
            domainRegistrationDate,
            diffDays,
          });
          uniqueLikelyPhishingURIs.add(URI.domain());
        }
      } else {
        if (!uniqueNonTopMillionURIs.has(URI.domain())) {
          nonTopMillionURIs.push(URI);
          uniqueNonTopMillionURIs.add(URI.domain());
        }
      }
    }
  }
  return {
    topMillionURIs,
    nonTopMillionURIs,
    likelyPhishingURIDicts,
  };
};
