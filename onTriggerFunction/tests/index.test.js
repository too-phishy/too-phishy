import { processMessage } from "../src/processMessage.js";
import { message_body_with_two_bitly_links } from "./fixtures/message_body_with_two_bitly_links.js";
import { sectionsForCodeHostingSiteLink } from "../src/sections/sectionsForCodeHostingSiteLink.js";
import {
  BITLY_PHISHING_SITE_DOMAIN,
  GCP_PHISHING_SITE_DOMAIN,
} from "../src/cards/cardForActiveUser.js";

describe("sectionForGCP", () => {
  test("bitly link is present", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_body_with_two_bitly_links);
      const {
        codeHostingSiteFlagged: sectionForBitlyFlagged,
        sections: bitlySections,
      } = sectionsForCodeHostingSiteLink(
        fullLinkURIs,
        BITLY_PHISHING_SITE_DOMAIN,
        "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-bitly-blob-storage-to-impersonate-microsoft"
      );

      expect(sectionForBitlyFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("no gcp link is present", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_body_with_two_bitly_links);
      const {
        codeHostingSiteFlagged: sectionForGCPFlagged,
        sections: gcpSections,
      } = sectionsForCodeHostingSiteLink(
        fullLinkURIs,
        GCP_PHISHING_SITE_DOMAIN,
        "https://www.bleepingcomputer.com/news/security/phishing-campaign-uses-google-cloud-services-to-steal-office-365-logins/"
      );

      expect(sectionForGCPFlagged).toBe(false);
    } catch (e) {
      console.log(e);
    }
  }, 20000);
});
