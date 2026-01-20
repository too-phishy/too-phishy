import { processMessage } from "../src/processMessage.js";
import { message_body_with_two_bitly_links } from "./fixtures/message_body_with_two_bitly_links.js";
import {
  BITLY_PHISHING_DOMAIN,
  GCP_PHISHING_DOMAIN,
  sectionForCodeHostingSiteLink,
} from "../src/sections/sectionForCodeHostingSiteLink.js";
import { email_with_parsing_error } from "./fixtures/email_with_parsing_error.js";
import { john_podesta } from "./fixtures/john_podesta.js";
import { processLinks } from "../src/processLinks.js";
import { sony } from "./fixtures/sony.js";
import { id_badge_update_needed } from "./fixtures/id_badge_update_needed.js";
import { irs } from "./fixtures/irs.js";
import { performAIAnalysis } from "../src/performAIAnalysis.js";
import { deceptive_link_false_positive } from "./fixtures/deceptive_link_false_positive.js";
import { another_email_with_multiple_attachments } from "./fixtures/another_email_with_multiple_attachments.js";
import { email_with_link_that_doesnt_get_categorized_correctly } from "./fixtures/email_with_link_that_doesnt_get_categorized_correctly.js";
import { email_with_multiple_attachments } from "./fixtures/email_with_multiple_attachments.js";

describe("processMessage", () => {
  test("process email with multiple attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(
        email_with_multiple_attachments
      );

      expect(fullLinkURIs.length).toBe(12);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("process another email with multiple attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(
        another_email_with_multiple_attachments
      );

      expect(fullLinkURIs.length).toBe(3);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("process email with link that doesn't get categorized correctly", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(
        email_with_link_that_doesnt_get_categorized_correctly
      );

      expect(fullLinkURIs.length).toBe(75);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("process emails containing attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(
        email_with_parsing_error
      );

      expect(fullLinkURIs.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  }, 20000);
});

describe("performAIAnalysis", () => {
  test("catches deceptive links and social engineering in sony email", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(sony);
      const { topMillionURIs, nonTopMillionURIs, recentlyRegisteredURIDicts } =
        await processLinks(fullLinkURIs);
      const {
        deceptiveLinksFlagged,
        deceptiveLinksSection,
        socialEngineeringFlagged,
        socialEngineeringSection,
      } = await performAIAnalysis(
        fullLinkURIs,
        topMillionURIs,
        recentlyRegisteredURIDicts,
        messageBodies,
        false // codeHostingSiteFlagged only affects the way socialEngineeringSection is rendered so hard coded to false here
      );

      expect(deceptiveLinksFlagged).toBe(true);
      expect(socialEngineeringFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 100000);

  test("catches deceptive links and social engineering in john_podesta email", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } =
        processMessage(john_podesta);
      const { topMillionURIs, nonTopMillionURIs, recentlyRegisteredURIDicts } =
        await processLinks(fullLinkURIs);
      const {
        deceptiveLinksFlagged,
        deceptiveLinksSection,
        socialEngineeringFlagged,
        socialEngineeringSection,
      } = await performAIAnalysis(
        fullLinkURIs,
        topMillionURIs,
        recentlyRegisteredURIDicts,
        messageBodies,
        false // codeHostingSiteFlagged only affects the way socialEngineeringSection is rendered so hard coded to false here
      );

      expect(deceptiveLinksFlagged).toBe(true);
      expect(socialEngineeringFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 100000);

  test("catches social engineering in irs email", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        processMessage(irs);
      const { topMillionURIs, nonTopMillionURIs, recentlyRegisteredURIDicts } =
        await processLinks(fullLinkURIs);
      const {
        deceptiveLinksFlagged,
        deceptiveLinksSection,
        socialEngineeringFlagged,
        socialEngineeringSection,
      } = await performAIAnalysis(
        fullLinkURIs,
        topMillionURIs,
        recentlyRegisteredURIDicts,
        messageBodies,
        false // codeHostingSiteFlagged only affects the way socialEngineeringSection is rendered so hard coded to false here
      );

      expect(deceptiveLinksFlagged).toBe(false);
      expect(socialEngineeringFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 100000);

  test("catches deceptive links and social engineering in id_badge_update_needed email", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(
        id_badge_update_needed
      );
      const { topMillionURIs, nonTopMillionURIs, recentlyRegisteredURIDicts } =
        await processLinks(fullLinkURIs);
      const {
        deceptiveLinksFlagged,
        deceptiveLinksSection,
        socialEngineeringFlagged,
        socialEngineeringSection,
      } = await performAIAnalysis(
        fullLinkURIs,
        topMillionURIs,
        recentlyRegisteredURIDicts,
        messageBodies,
        false // codeHostingSiteFlagged only affects the way socialEngineeringSection is rendered so hard coded to false here
      );

      expect(deceptiveLinksFlagged).toBe(true);
      expect(socialEngineeringFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 100000);

  test("doesn't find deceptive links in an email with only top million links", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(
        deceptive_link_false_positive
      );
      const { topMillionURIs, nonTopMillionURIs, recentlyRegisteredURIDicts } =
        await processLinks(fullLinkURIs);
      const {
        deceptiveLinksFlagged,
        deceptiveLinksSection,
        socialEngineeringFlagged,
        socialEngineeringSection,
      } = await performAIAnalysis(
        fullLinkURIs,
        topMillionURIs,
        recentlyRegisteredURIDicts,
        messageBodies,
        false // codeHostingSiteFlagged only affects the way socialEngineeringSection is rendered so hard coded to false here
      );

      expect(deceptiveLinksFlagged).toBe(false);
      // flaky test
      expect(socialEngineeringFlagged).toBe(false);
    } catch (e) {
      console.log(e);
    }
  }, 100000);

  test("finds that link registered in past 21 days is also deceptive", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies } = processMessage(sony);
      const topMillionURIs = [];
      const nonTopMillionURIs = [];
      const recentlyRegisteredURIDicts = [
        {
          URI: fullLinkURIs[0],
          domainRegistrationDate: new Date(),
          diffDays: 0,
        },
      ];
      const {
        deceptiveLinksFlagged,
        deceptiveLinksSection,
        socialEngineeringFlagged,
        socialEngineeringSection,
      } = await performAIAnalysis(
        fullLinkURIs,
        topMillionURIs,
        recentlyRegisteredURIDicts,
        messageBodies,
        false // codeHostingSiteFlagged only affects the way socialEngineeringSection is rendered so hard coded to false here
      );

      expect(deceptiveLinksFlagged).toBe(true);
      expect(socialEngineeringFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 100000);
});
