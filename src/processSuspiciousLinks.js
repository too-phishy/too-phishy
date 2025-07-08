import { queryRDAP } from "@iocium/rdap-lite";

import { TOP_MILLION_DOMAINS } from "./topDomains/topDomains.js";
import {
  AWS_PHISHING_SITE_DOMAIN,
  AZURE_PHISHING_SITE_DOMAIN,
  BITLY_PHISHING_SITE_DOMAIN,
  GCP_PHISHING_SITE_DOMAIN,
} from "./cards/cardForSubscribedUser.js";

const checkLessThan25DaysOld = async (domainName) => {
  try {
    const data = await queryRDAP(domainName, {});
    const regEvent = data.raw.events.find(
      (e) => e.eventAction === "registration"
    );
    const domainRegistrationDate = new Date(regEvent.eventDate);
    const now = new Date();
    const diffDays = (now - domainRegistrationDate) / (1000 * 60 * 60 * 24);
    return { domainRegistrationDate, isRecentlyRegistered: diffDays < 21 };
  } catch (err) {
    return { domainRegistrationDate: null, isRecentlyRegistered: false };
  }
};

export const processSuspiciousLinks = async (fullLinkURIs) => {
  const uniqueTopMillionURIs = new Set();
  const uniquePotentialPhishingURIs = new Set();
  const uniqueLikelyPhishingURIs = new Set();
  const reputableURIs = [];
  const potentialPhishingURIs = [];
  const likelyPhishingURIs = [];
  for (const URI of [...fullLinkURIs]) {
    const { domainRegistrationDate, isRecentlyRegistered } =
      await checkLessThan25DaysOld(URI.domain());
    if (!TOP_MILLION_DOMAINS.has(URI.domain()) && isRecentlyRegistered) {
      if (!uniqueLikelyPhishingURIs.has(URI.domain())) {
        likelyPhishingURIs.push({ URI, domainRegistrationDate });
        uniqueLikelyPhishingURIs.add(URI.domain());
      }
    } else if (!TOP_MILLION_DOMAINS.has(URI.domain())) {
      if (!uniquePotentialPhishingURIs.has(URI.domain())) {
        potentialPhishingURIs.push(URI);
        uniquePotentialPhishingURIs.add(URI.domain());
      }
    } else {
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
  }
  return {
    reputableURIs,
    potentialPhishingURIs,
    likelyPhishingURIs,
  };
};
