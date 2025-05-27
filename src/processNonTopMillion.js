import { TOP_MILLION_DOMAINS } from "./topDomains/topDomains.js";
import {
  AWS_PHISHING_SITE_DOMAIN,
  AZURE_PHISHING_SITE_DOMAIN,
  BITLY_PHISHING_SITE_DOMAIN,
  GCP_PHISHING_SITE_DOMAIN,
} from "./cards/cardForSubscribedUser.js";

export const processNonTopMillion = (fullLinkURIs) => {
  const uniqueTopMillionURIs = new Set();
  const uniqueNonTopMillionURIs = new Set();
  const topMillionURIs = [];
  const nonTopMillionURIs = [];
  [...fullLinkURIs].forEach((link) => {
    if (!TOP_MILLION_DOMAINS.has(link.domain())) {
      if (!uniqueNonTopMillionURIs.has(link.domain())) {
        nonTopMillionURIs.push(link);
        uniqueNonTopMillionURIs.add(link.domain());
      }
    } else {
      if (
        !uniqueTopMillionURIs.has(link.domain()) &&
        link
          .normalizeHostname()
          .toString()
          .indexOf(BITLY_PHISHING_SITE_DOMAIN) === -1 &&
        link
          .normalizeHostname()
          .toString()
          .indexOf(GCP_PHISHING_SITE_DOMAIN) === -1 &&
        link
          .normalizeHostname()
          .toString()
          .indexOf(AZURE_PHISHING_SITE_DOMAIN) === -1 &&
        link
          .normalizeHostname()
          .toString()
          .indexOf(AWS_PHISHING_SITE_DOMAIN) === -1 &&
        link.domain() !== "amazonaws.com" &&
        link.domain() !== "windows.net"
      ) {
        topMillionURIs.push(link);
        uniqueTopMillionURIs.add(link.domain());
      }
    }
  });
  return {
    topMillionURIs,
    nonTopMillionURIs,
  };
};
