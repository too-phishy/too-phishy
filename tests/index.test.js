import { message_full } from "./fixtures/message_full.js";
import { message_with_attachment_but_no_text } from "./fixtures/message_with_attachment_but_no_text.js";
import { message_from_aws } from "./fixtures/message_from_aws.js";
import { forwarded_message } from "./fixtures/forwarded_message.js";
import { message_body_that_looks_like_css } from "./fixtures/message_body_that_looks_like_css.js";
import { email_with_multiple_attachments } from "./fixtures/email_with_multiple_attachments.js";
import { another_email_with_multiple_attachments } from "./fixtures/another_email_with_multiple_attachments.js";
import { forwarded_another_email_with_multiple_attachments } from "./fixtures/forwarded_another_email_with_multiple_attachments.js";
import { phishing_example_attachments } from "./ef_processed_file_fixtures/phishing_example_attachments.js";
import { email_with_phishy_link_and_sender_domain } from "./fixtures/email_with_phishy_link_and_sender_domain.js";
import { reply_to_and_from_dont_match } from "./fixtures/reply_to_and_from_dont_match.js";
import { processAttachment, processMessage } from "../src/processMessage.js";
import { sectionsForAttachments } from "../src/sections/sectionsForAttachments.js";
import { sectionForHeaders } from "../src/sections/sectionForHeaders.js";
import { empty_email_to_myself } from "./fixtures/empty_email_to_myself.js";
import exiftool from "node-exiftool";
import exiftoolBin from "dist-exiftool";
import { attachment_with_spaces_in_filename } from "./attachments_from_google_api/attachment_with_spaces_in_filename.js";
import * as fs from "fs";
import { eml_attachment } from "./attachments_from_google_api/eml_attachment.js";
import { sectionsForLinks } from "../src/sections/sectionsForLinks.js";
import { processNonTopMillion } from "../src/processNonTopMillion.js";
import { john_podesta } from "./fixtures/john_podesta.js";
import { cardForSubscribedUser } from "../src/cards/cardForSubscribedUser.js";
import { sectionForGCP } from "../src/sections/sectionForGCP.js";
import { email_with_s3_and_azure_phishing_links } from "./fixtures/email_with_s3_and_azure_phishing_links.js";

describe("processMessage", () => {
  test("message has body but no attachment", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, message_full);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(1934);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("message has attachment but no body", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          message_with_attachment_but_no_text
        );

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(1);
      expect(attachments).toContain("IMG-1127.jpg");
    } catch (e) {
      console.log(e);
    }
  });

  test("message from aws", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, message_from_aws);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(1212);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("forwarded message", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, forwarded_message);

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(4297);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("message body that looks like css", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          message_body_that_looks_like_css
        );

      expect(messageBodies.length).toBe(1);
      expect(messageBodies[0].length).toBe(57706);
      expect(attachments.length).toBe(0);
    } catch (e) {
      console.log(e);
    }
  });

  test("email with multiple attachments", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, email_with_multiple_attachments);

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(2);
      expect(attachments).toContain("Indie Worldwide Meetup NYC.pkpass");
      expect(attachments).toContain("invite.ics");
    } catch (e) {
      console.log(e);
    }
  });

  test("another email with multiple attachments", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          another_email_with_multiple_attachments
        );

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(2);
      expect(attachments).toContain("IMG_6686.JPG");
      expect(attachments).toContain("Congrats-NewNest113SenatorSt1.pdf");
    } catch (e) {
      console.log(e);
    }
  });

  test("another email with multiple attachments that was forwarded", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          forwarded_another_email_with_multiple_attachments
        );

      expect(messageBodies.length).toBe(1);
      expect(attachments.length).toBe(1);
      expect(attachments).toContain("IMG_6686.JPG");
    } catch (e) {
      console.log(e);
    }
  });

  test("email has multiple phishing links", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          email_with_s3_and_azure_phishing_links
        );

      expect([...domainNames].length).toBe(2);
    } catch (e) {
      console.log(e);
    }
  });

  test("message has no body", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, empty_email_to_myself);

      expect(JSON.stringify(domainNames)).toBe("{}");
      expect(messageBodies.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  });

  test("message has an attachment created by SES client library", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, john_podesta);

      expect(attachments.length).toBe(1);
      expect(attachments).toContain("hello.xls");
    } catch (e) {
      console.log(e);
    }
  });
});

test("processAttachment: attachment with spaces in filename", async () => {
  try {
    const efProcess = new exiftool.ExiftoolProcess(exiftoolBin);
    await efProcess.open();
    const attachments = [];
    const filePath = "test.docx";
    await processAttachment(
      efProcess,
      filePath,
      attachment_with_spaces_in_filename,
      attachments
    );

    expect(attachments.length).toBe(1);
    expect(attachments[0]).toStrictEqual({
      Application: "Microsoft Office Word",
      CharactersWithSpaces: 413,
      CreateDate: "2023:08:24 18:11:00Z",
      Creator: "Hansen, Valerie",
      LastModifiedBy: "Hansen, Valerie",
      Lines: 2,
      Paragraphs: 1,
      RevisionNumber: 3,
      SourceFile: "test.docx",
      ZipModifyDate: "1980:01:01 00:00:00",
    });
    await efProcess.close();
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
      else {
        console.log(`\nDeleted file: ${filePath}`);
      }
    });
  } catch (e) {
    console.log(e);
  }
});

test("processAttachment: attachment is an .eml file", async () => {
  try {
    const efProcess = new exiftool.ExiftoolProcess(exiftoolBin);
    await efProcess.open();
    const attachments = [];
    const filePath = "test.eml";
    await processAttachment(efProcess, filePath, eml_attachment, attachments);

    expect(attachments.length).toBe(1);
    await efProcess.close();
    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
      else {
        console.log(`\nDeleted file: ${filePath}`);
      }
    });
  } catch (e) {
    console.log(e);
  }
});

describe("sectionsForAttachments", () => {
  test("another email with multiple attachments that was forwarded", async () => {
    try {
      const { sectionsForAttachmentsFlagged, attachmentsSections } =
        sectionsForAttachments(phishing_example_attachments);

      expect(attachmentsSections.length).toBe(5);
    } catch (e) {
      console.log(e);
    }
  });
});

describe("sectionForGCP", () => {
  test("no gcp link", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, empty_email_to_myself);
      const { sectionForGCPFlagged, gcpSection } = sectionForGCP(domainNames);

      expect(sectionForGCPFlagged).toBe(false);
    } catch (e) {
      console.log(e);
    }
  }, 20000);
});

describe("sectionForSenderDomain", () => {
  test("whois info available for lu.ma", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, email_with_multiple_attachments);
      const {
        senderDomain,
        senderDomainType,
        sectionForHeadersFlagged,
        headersSection,
        sectionForFromDomainFlagged,
        fromDomainSection,
      } = await sectionForHeaders(headers);

      expect(sectionForFromDomainFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  }, 20000);

  test("whois info available", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          email_with_phishy_link_and_sender_domain
        );
      const {
        senderDomain,
        senderDomainType,
        sectionForHeadersFlagged,
        headersSection,
        sectionForFromDomainFlagged,
        fromDomainSection,
      } = await sectionForHeaders(headers);

      expect(sectionForFromDomainFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  });

  test("whois info not showing up", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          email_with_s3_and_azure_phishing_links
        );
      const {
        senderDomain,
        senderDomainType,
        sectionForHeadersFlagged,
        headersSection,
        sectionForFromDomainFlagged,
        fromDomainSection,
      } = await sectionForHeaders(headers);

      expect(fromDomainSection.widgets.length).toBe(7);
    } catch (e) {
      console.log(e);
    }
  });
});

describe("sectionForHeaders", () => {
  test("reply to and from match", async () => {
    try {
      [
        another_email_with_multiple_attachments,
        forwarded_another_email_with_multiple_attachments,
        forwarded_message,
        message_body_that_looks_like_css,
        message_from_aws,
        message_full,
        message_with_attachment_but_no_text,
      ].forEach(async (message) => {
        const {
          headers,
          fullLinkUrls,
          domainNames,
          messageBodies,
          attachments,
        } = await processMessage(null, null, null, message);
        const {
          senderDomain,
          senderDomainType,
          sectionForHeadersFlagged,
          headersSection,
          sectionForFromDomainFlagged,
          fromDomainSection,
        } = await sectionForHeaders(headers);
        expect(sectionForHeadersFlagged).toBe(false);
      });
    } catch (e) {
      console.log(e);
    }
  });

  test("legitimate reply to and from dont match", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, email_with_multiple_attachments);
      const {
        senderDomain,
        senderDomainType,
        sectionForHeadersFlagged,
        headersSection,
        sectionForFromDomainFlagged,
        fromDomainSection,
      } = await sectionForHeaders(headers);
      expect(sectionForHeadersFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  });

  test("spammy reply to and from dont match", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(null, null, null, reply_to_and_from_dont_match);
      const {
        senderDomain,
        senderDomainType,
        sectionForHeadersFlagged,
        headersSection,
        sectionForFromDomainFlagged,
        fromDomainSection,
      } = await sectionForHeaders(headers);
      expect(sectionForHeadersFlagged).toBe(true);
    } catch (e) {
      console.log(e);
    }
  });
});

describe("sectionsForLinks", () => {
  test("whois info available", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          email_with_phishy_link_and_sender_domain
        );
      const {
        topMillionDomainNames,
        nonTopMillionDomainNames,
        nonTopMillionSection,
      } = processNonTopMillion(domainNames);
      const { linksSections } = await sectionsForLinks(
        nonTopMillionDomainNames
      );

      expect(linksSections.length).toBe(1);
    } catch (e) {
      console.log(e);
    }
  });
});

describe("cardForSubscribedUser", () => {
  test("everything", async () => {
    try {
      const { headers, fullLinkUrls, domainNames, messageBodies, attachments } =
        await processMessage(
          null,
          null,
          null,
          email_with_phishy_link_and_sender_domain
        );
      const card = await cardForSubscribedUser(
        headers,
        fullLinkUrls,
        domainNames,
        messageBodies,
        phishing_example_attachments,
        email_with_phishy_link_and_sender_domain
      );

      expect(card.sections.length).toBe(9);
    } catch (e) {
      console.log(e);
    }
  });
});
