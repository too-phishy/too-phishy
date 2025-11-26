import { processMessage } from "../src/processMessage.js";
import { message_body_with_two_bitly_links } from "./fixtures/message_body_with_two_bitly_links.js";
import { sectionsForCodeHostingSiteLink } from "../src/sections/sectionsForCodeHostingSiteLink.js";
import {
  BITLY_PHISHING_SITE_DOMAIN,
  GCP_PHISHING_SITE_DOMAIN,
} from "../src/cards/cardForActiveUser.js";
import { email_with_parsing_error } from "./fixtures/email_with_parsing_error.js";
import { email_with_multiple_attachments } from "./fixtures/email_with_multiple_attachments.js";
import { another_email_with_multiple_attachments } from "./fixtures/another_email_with_multiple_attachments.js";
import { email_with_link_that_doesnt_get_categorized_correctly } from "./fixtures/email_with_link_that_doesnt_get_categorized_correctly.js";

describe("processMessage", () => {
  test("process email with multiple attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(email_with_multiple_attachments);

      expect(fullLinkURIs.length).toBe(12);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("process another email with multiple attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(another_email_with_multiple_attachments);

      expect(fullLinkURIs.length).toBe(3);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("process email with link that doesn't get categorized correctly", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(
          email_with_link_that_doesnt_get_categorized_correctly
        );

      expect(fullLinkURIs.length).toBe(75);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("process emails containing attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(email_with_parsing_error);

      expect(fullLinkURIs.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  }, 20000);
});

describe("sectionsForCodeHostingSiteLink", () => {
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
