import { domain } from "node-rdap";
import error from "express/lib/router/route.js";

import { TOP_MILLION_DOMAINS } from "./topDomains/topDomains.js";
import {
  AWS_PHISHING_SITE_DOMAIN,
  AZURE_PHISHING_SITE_DOMAIN,
  BITLY_PHISHING_SITE_DOMAIN,
  GCP_PHISHING_SITE_DOMAIN,
} from "./cards/cardForActiveUser.js";

const checkLessThan25DaysOld = async (domainName) => {
  try {
    const data = await domain(domainName);
    const regEvent = data.events.find((e) => e.eventAction === "registration");
    const domainRegistrationDate = new Date(regEvent.eventDate);
    const now = new Date();
    const diffDays = (now - domainRegistrationDate) / (1000 * 60 * 60 * 24);
    return { domainRegistrationDate, isRecentlyRegistered: diffDays < 21 };
  } catch (err) {
    console.error(`Error fetching RDAP data for ${domainName}: ${error}`);
    return { domainRegistrationDate: null, isRecentlyRegistered: false };
  }
};

export const processSuspiciousLinks = async (fullLinkURIs) => {
  const uniqueTopMillionURIs = new Set();
  const uniquePotentialPhishingURIs = new Set();
  const uniqueLikelyPhishingURIs = new Set();
  const reputableURIs = [];
  const potentialPhishingURIs = [];
  const likelyPhishingURIHashes = [];
  for (const URI of [...fullLinkURIs]) {
    if (TOP_MILLION_DOMAINS.has(URI.domain())) {
      if (
        !uniqueTopMillionURIs.has(URI.domain()) &&
        URI.normalizeHostname()
          .toString()
          .indexOf(BITLY_PHISHING_SITE_DOMAIN) === -1 &&
        URI.normalizeHostname().toString().indexOf(GCP_PHISHING_SITE_DOMAIN) ===
          -1 &&
        URI.normalizeHostname()
          .toString()
          .indexOf(AZURE_PHISHING_SITE_DOMAIN) === -1 &&
        URI.normalizeHostname().toString().indexOf(AWS_PHISHING_SITE_DOMAIN) ===
          -1 &&
        URI.domain() !== "amazonaws.com" &&
        URI.domain() !== "windows.net"
      ) {
        reputableURIs.push(URI);
        uniqueTopMillionURIs.add(URI.domain());
      }
    }
    if (!TOP_MILLION_DOMAINS.has(URI.domain())) {
      const { domainRegistrationDate, isRecentlyRegistered } =
        await checkLessThan25DaysOld(URI.domain());
      if (isRecentlyRegistered) {
        if (!uniqueLikelyPhishingURIs.has(URI.domain())) {
          likelyPhishingURIHashes.push({ URI, domainRegistrationDate });
          uniqueLikelyPhishingURIs.add(URI.domain());
        }
      } else {
        if (!uniquePotentialPhishingURIs.has(URI.domain())) {
          potentialPhishingURIs.push(URI);
          uniquePotentialPhishingURIs.add(URI.domain());
        }
      }
    }
  }
  return {
    reputableURIs,
    potentialPhishingURIs,
    likelyPhishingURIHashes,
  };
};
