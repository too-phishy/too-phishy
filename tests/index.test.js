import { message_full } from "./fixtures/message_full.js";
import { message_with_attachment_but_no_text } from "./fixtures/message_with_attachment_but_no_text.js";
import { message_from_aws } from "./fixtures/message_from_aws.js";
import { forwarded_message } from "./fixtures/forwarded_message.js";
import { message_body_that_looks_like_css } from "./fixtures/message_body_that_looks_like_css.js";
import { email_with_multiple_attachments } from "./fixtures/email_with_multiple_attachments.js";
import { another_email_with_multiple_attachments } from "./fixtures/another_email_with_multiple_attachments.js";
import { forwarded_another_email_with_multiple_attachments } from "./fixtures/forwarded_another_email_with_multiple_attachments.js";
import { email_with_phishy_link_and_sender_domain } from "./fixtures/email_with_phishy_link_and_sender_domain.js";
import { reply_to_and_from_dont_match } from "./fixtures/reply_to_and_from_dont_match.js";
import { processMessage } from "../src/processMessage.js";
import { empty_email_to_myself } from "./fixtures/empty_email_to_myself.js";
import { sectionsForNonTopMillionLinks } from "../src/sections/sectionsForNonTopMillionLinks.js";
import { processNonTopMillion } from "../src/processNonTopMillion.js";
import { john_podesta } from "./fixtures/john_podesta.js";
import {
  cardForSubscribedUser,
  GCP_PHISHING_SITE_DOMAIN,
} from "../src/cards/cardForSubscribedUser.js";
import { email_with_s3_and_azure_phishing_links } from "./fixtures/email_with_s3_and_azure_phishing_links.js";
import { email_with_link_that_doesnt_get_categorized_correctly } from "./fixtures/email_with_link_that_doesnt_get_categorized_correctly.js";
import { sectionForPhishingLink } from "../src/sections/sectionForPhishingLink.js";

describe("processMessage", () => {
  test("message has body but no attachment", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_full);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(1934);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("message has inline attachment and no body", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_with_attachment_but_no_text);

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("message from aws", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_from_aws);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(1212);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("forwarded message", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(forwarded_message);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(4297);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("message body that looks like css", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(message_body_that_looks_like_css);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(57706);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("email with multiple attachments", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(email_with_multiple_attachments);

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(2);
      expect(attachments).toContain("Indie Worldwide Meetup NYC.pkpass");
      expect(attachments).toContain("invite.ics");
    } catch (e) {
      console.log(e);
    }
  });

  test("another email with an attachment", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(another_email_with_multiple_attachments);

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(1);
      expect(attachments).toContain("Congrats-NewNest113SenatorSt1.pdf");
    } catch (e) {
      console.log(e);
    }
  });

  test("another email with an inline attachment that was forwarded", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(forwarded_another_email_with_multiple_attachments);

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("email has multiple phishing links", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(email_with_s3_and_azure_phishing_links);

      expect([...fullLinkURIs].length).toBe(2);
    } catch (e) {
      console.log(e);
    }
  });

  test("message has no body", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(empty_email_to_myself);

      expect(fullLinkURIs.length).toBe(0);
      expect(messageBodies.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  });

  test("message has an attachment created by SES client library", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(john_podesta);

      expect(attachments.length).toBe(1);
      expect(attachments).toContain("hello.xls");
    } catch (e) {
      console.log(e);
    }
  });
});

describe("sectionForGCP", () => {
  test("no gcp link", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(empty_email_to_myself);
      const { phishingLinkFlagged: sectionForGCPFlagged, section: gcpSection } =
        sectionForPhishingLink(
          fullLinkURIs,
          GCP_PHISHING_SITE_DOMAIN,
          "https://www.bleepingcomputer.com/news/security/phishing-attack-uses-azure-blob-storage-to-impersonate-microsoft"
        );

      expect(sectionForGCPFlagged).toBe(false);
    } catch (e) {
      console.log(e);
    }
  }, 20000);
});

describe("processNonTopMillion", () => {
  test("whois info available", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(email_with_phishy_link_and_sender_domain);
      const { topMillionURIs, nonTopMillionURIs, nonTopMillionSection } =
        processNonTopMillion(fullLinkURIs);
      const { linksSections } = await sectionsForNonTopMillionLinks(
        nonTopMillionURIs
      );

      expect(linksSections.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  });

  test("email with link that doesnt get categorized correctly", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(
          email_with_link_that_doesnt_get_categorized_correctly
        );
      const { topMillionURIs, nonTopMillionURIs, nonTopMillionSection } =
        processNonTopMillion(fullLinkURIs);

      expect(topMillionURIs.length).toBe(0);
      expect(nonTopMillionURIs.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  });
});

describe("cardForSubscribedUser", () => {
  test("everything", async () => {
    try {
      const { headers, fullLinkURIs, messageBodies, attachments } =
        await processMessage(email_with_phishy_link_and_sender_domain);
      const card = await cardForSubscribedUser(
        headers,
        fullLinkURIs,
        messageBodies,
        attachments,
        email_with_phishy_link_and_sender_domain
      );

      expect(card.sections.length).toBe(3);
    } catch (e) {
      console.log(e);
    }
  });
});
