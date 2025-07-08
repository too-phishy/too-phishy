import { checkLessThan21DaysOld } from "./processSuspiciousLinks.js";
import { TOP_MILLION_DOMAINS } from "./topDomains/topDomains.js";

export const processSenderDomain = async (headers) => {
  let senderEmail;
  let senderDomain;
  if (!!headers["From"]) {
    senderEmail =
      headers["From"].split("<").length > 1
        ? headers["From"].split("<")[1].split(">")[0]
        : headers["From"];
    senderDomain = senderEmail.split("@")[1];
  }

  let isSenderDomainLikelyPhishingLink = false;

  const { senderDomainRegistrationDate, isRecentlyRegistered } =
    await checkLessThan21DaysOld(senderDomain);
  if (!TOP_MILLION_DOMAINS.has(senderDomain) && isRecentlyRegistered) {
    isSenderDomainLikelyPhishingLink = true;
  }

  return {
    senderDomain,
    senderDomainRegistrationDate,
    isSenderDomainLikelyPhishingLink,
  };
};
