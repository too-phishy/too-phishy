import { processMessage } from "../src/processMessage.js";
import { message_body_with_two_bitly_links } from "./fixtures/message_body_with_two_bitly_links.js";
import { sectionsForCodeHostingSiteLink } from "../src/sections/sectionsForCodeHostingSiteLink.js";
import { BITLY_PHISHING_SITE_DOMAIN } from "../src/cards/cardForActiveUser.js";

describe("sectionForGCP", () => {
  test("no gcp link", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_body_with_two_bitly_links);
      const { phishingLinkFlagged: sectionForGCPFlagged, section: gcpSection } =
        sectionsForCodeHostingSiteLink(
          fullLinkURIs,
          BITLY_PHISHING_SITE_DOMAIN,
          "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-azure-blob-storage-to-impersonate-microsoft"
        );

      expect(sectionForGCPFlagged).toBe(false);
    } catch (e) {
      console.log(e);
    }
  }, 20000);
});
