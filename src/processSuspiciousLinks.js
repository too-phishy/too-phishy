import { TOP_MILLION_DOMAINS } from "./topDomains/topDomains.js";
import {
  AWS_PHISHING_SITE_DOMAIN,
  AZURE_PHISHING_SITE_DOMAIN,
  BITLY_PHISHING_SITE_DOMAIN,
  GCP_PHISHING_SITE_DOMAIN,
} from "./cards/cardForSubscribedUser.js";
import rdapClient from "rdap-client";

const rdapLookup = async (hostname) => await rdapClient(hostname);

const checkLessThan25DaysOld = async (domainName) => {
  const data = await rdapLookup(domainName);
  const regEvent = data.events.find(
      (e) => e.eventAction === 'registration'
  );
  const domainRegistrationDate = Date(regEvent.eventDate);
  const now = new Date();
  const diffDays = (now - domainRegistrationDate) / (1000 * 60 * 60 * 24);
  return {domainRegistrationDate, isLessThan25DaysOld: diffDays < 25};
};

export const processSuspiciousLinks = async (fullLinkURIs) => {
  const uniqueTopMillionURIs = new Set();
  const uniqueSuspiciousURIs = new Set();
  const reputableURIs = [];
  const suspiciousURIs = [];
  for (const URI of [...fullLinkURIs]) {
    const {domainRegistrationDate, isLessThan25DaysOld} = await checkLessThan25DaysOld(URI.domain());
    if (!TOP_MILLION_DOMAINS.has(URI.domain()) && isLessThan25DaysOld) {
      if (!uniqueSuspiciousURIs.has(URI.domain())) {
        suspiciousURIs.push({URI, domainRegistrationDate});
        uniqueSuspiciousURIs.add(URI.domain());
      }
    } else {
      if (
        !uniqueTopMillionURIs.has(URI.domain()) &&
        URI
          .normalizeHostname()
          .toString()
          .indexOf(BITLY_PHISHING_SITE_DOMAIN) === -1 &&
        URI
          .normalizeHostname()
          .toString()
          .indexOf(GCP_PHISHING_SITE_DOMAIN) === -1 &&
        URI
          .normalizeHostname()
          .toString()
          .indexOf(AZURE_PHISHING_SITE_DOMAIN) === -1 &&
        URI
          .normalizeHostname()
          .toString()
          .indexOf(AWS_PHISHING_SITE_DOMAIN) === -1 &&
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
    suspiciousURIs,
  };
};
