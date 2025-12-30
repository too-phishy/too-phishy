export const irs = {
  id: "18b8bc8ec1a31176",
  threadId: "18b8ba36b01faaa5",
  labelIds: ["IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
  snippet:
    "Internal Revenu Service (IRS) Dear Applicant, After the last calculations of your annual tax refund, we have determined that you are eligible to receive an extra tax refund of 1400.00 USD Please submit",
  payload: {
    partId: "",
    mimeType: "text/html",
    filename: "",
    headers: [
      {
        name: "Delivered-To",
        value: "lydia.stepanek@gmail.com",
      },
      {
        name: "Received",
        value:
          "by 2002:ab0:77d4:0:b0:7ab:a90f:eacd with SMTP id y20csp1126687uar;        Wed, 1 Nov 2023 09:48:02 -0700 (PDT)",
      },
      {
        name: "X-Google-Smtp-Source",
        value:
          "AGHT+IGZojBiHTkbL/1wwIQsJIIAmztj/9hoO2HtZk0as/CrzhBosHdoNesz4ramKPKTEOnk5IuM",
      },
      {
        name: "X-Received",
        value:
          "by 2002:ac8:7d94:0:b0:41c:c4f2:39c6 with SMTP id c20-20020ac87d94000000b0041cc4f239c6mr20828207qtd.44.1698857282754;        Wed, 01 Nov 2023 09:48:02 -0700 (PDT)",
      },
      {
        name: "ARC-Seal",
        value:
          "i=1; a=rsa-sha256; t=1698857282; cv=none;        d=google.com; s=arc-20160816;        b=H0fbJkSE03kFBQHucLlSHHFWxaMYpb0rG2xuTiTx3igksukxZgsmlTlCZWJS9YdOJV         vXjST+bWMgeBAcRV0I7qgwyYQUO1VWvfBw7LTKewXP/KOKKJ0Eia1bwzWfOPl+XP5A2h         j1ljxdS13gtKWx1ZnpK578Ag70AH8WOf7jbQMgZflX2BpnuZmy9nw/N/y/uaUZ9mp0mB         P3baV3GyO45Pp7c5JjMouI8V1x8UEhz8YjJ+gZsOqVB8hUc4xJXnPD8POR3K0FEMXhmC         SMkE3+uXRlhuqW/ApqptbUO34hKs9NtKc5D8pyn1TrwJn1uBrNpWcdExTRBTPj4wRdav         HyHQ==",
      },
      {
        name: "ARC-Message-Signature",
        value:
          "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:mime-version:date:content-transfer-encoding:message-id         :subject:to:from:dkim-signature:dkim-signature;        bh=HjqTCh1y36Otpk9+Eyzr2zcZRj72puu0GqKFw+mv7DU=;        fh=KRfFSi6n3hCHhJ5thCAKM/WzpNfOwR03SzZ5TmRtxXk=;        b=K05Sk5ft/c7XeJoNlo+rQgO4/ocE9OMnJZDwRN5E3zWcgcdZZf0ivRI0IoUnLzoHQN         363eG9ht/j41QnM3w5n6xgSw86TMkom4wfV1QEqkvaXeo6iOKHT5KPZzoew9wcQV6TM6         kzv+NzAdKSuc8X2BepfoIdhI12GjGhCdDNGSu8TM2f8m26sjft4KC0hdBTuiUEJkoscd         GnLp5A/vxL7R5AVZSduz4yYkW7mF2dgNk78K0qXB0xhXC994pMkuKmOwvizRLSRA2lU4         fhEjN758HROc3+nTo96Pj/NVEPV1bY26fL5lXnAhOWwvr34znEr+Yhe5OaxSbIIAXlTu         xf7Q==",
      },
      {
        name: "ARC-Authentication-Results",
        value:
          "i=1; mx.google.com;       dkim=pass header.i=@isthisphishy.io header.s=ee22edsdijivx4nnfmdvhq3zm2sipkyg header.b=f2EnQGhq;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=UAKHOox4;       spf=pass (google.com: domain of 0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@amazonses.com designates 54.240.48.117 as permitted sender) smtp.mailfrom=0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@amazonses.com;       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=isthisphishy.io",
      },
      {
        name: "Return-Path",
        value:
          "\u003c0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@amazonses.com\u003e",
      },
      {
        name: "Received",
        value:
          "from a48-117.smtp-out.amazonses.com (a48-117.smtp-out.amazonses.com. [54.240.48.117])        by mx.google.com with ESMTPS id y9-20020a05622a164900b0041822c32e45si3113248qtj.361.2023.11.01.09.48.02        for \u003clydia.stepanek@gmail.com\u003e        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Wed, 01 Nov 2023 09:48:02 -0700 (PDT)",
      },
      {
        name: "Received-SPF",
        value:
          "pass (google.com: domain of 0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@amazonses.com designates 54.240.48.117 as permitted sender) client-ip=54.240.48.117;",
      },
      {
        name: "Authentication-Results",
        value:
          "mx.google.com;       dkim=pass header.i=@isthisphishy.io header.s=ee22edsdijivx4nnfmdvhq3zm2sipkyg header.b=f2EnQGhq;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=UAKHOox4;       spf=pass (google.com: domain of 0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@amazonses.com designates 54.240.48.117 as permitted sender) smtp.mailfrom=0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@amazonses.com;       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=isthisphishy.io",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=ee22edsdijivx4nnfmdvhq3zm2sipkyg; d=isthisphishy.io; t=1698857282; h=Content-Type:From:To:Subject:Message-ID:Content-Transfer-Encoding:Date:MIME-Version; bh=HjqTCh1y36Otpk9+Eyzr2zcZRj72puu0GqKFw+mv7DU=; b=f2EnQGhqavFn/CjzfCFTgCPAwYKToXjVKHO+vH/z/ct1HHYkt3fQPWTP5K3lWk1S fws46d6m1VlWoawHOvakj/QJ9/f/+BkEnGyKW/adOCi/obxfb73lgb6c9iCsnqlo2U5 qPoUwYcBy3w1FFPFBxXoLRsdxg9h/79u0dOO30si4WNfDlQCy6AhhaZ8dA3+Q3SslAm yLqUIyUGy/NJmmEPY9hCqOc8lsTwM9uxU2TmYxEjm1Nniozkgf+C1ur2VDZPBsVfPIi SZAUtlpqdNkuQtPtSFO7zOyo4iTb2FPEd4Q/7AZyC7fqf5SOQXmrr2prl1kc1F5uPzD 7L95cuVcfQ==",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1698857282; h=Content-Type:From:To:Subject:Message-ID:Content-Transfer-Encoding:Date:MIME-Version:Feedback-ID; bh=HjqTCh1y36Otpk9+Eyzr2zcZRj72puu0GqKFw+mv7DU=; b=UAKHOox46okIphtizzQkh4C8fJmrDM+jJcQOSDZgBlAL08VEBu1dHJ8U+UDG5Xtz TXGuqOpjpbsmU9Io845u7zGFb56pUM4e3qRU4Zp9heXD8A2bUCthMQ8/tNJIWBCFKb6 7Q2NNsdKtUhhJlWE8fSqPywSefnmh8QN69m8esEU=",
      },
      {
        name: "Content-Type",
        value: "text/html; charset=utf-8",
      },
      {
        name: "From",
        value: "IsThisPhishy \u003chelp@isthisphishy.io\u003e",
      },
      {
        name: "To",
        value: "Lydia Stepanek \u003clydia.stepanek@gmail.com\u003e",
      },
      {
        name: "Subject",
        value: "Recalculation of Your Tax Refund Payment",
      },
      {
        name: "Message-ID",
        value:
          "\u003c0100018b8bc8ea83-a545a7cd-c17a-4a84-9803-7b4cc46259cc-000000@email.amazonses.com\u003e",
      },
      {
        name: "Content-Transfer-Encoding",
        value: "quoted-printable",
      },
      {
        name: "Date",
        value: "Wed, 1 Nov 2023 16:48:02 +0000",
      },
      {
        name: "MIME-Version",
        value: "1.0",
      },
      {
        name: "Feedback-ID",
        value:
          "1.us-east-1.D1sW9ZJlpBNbmodJ5deOGJN5KyRkmDXJm5QDMkZ/i7o=:AmazonSES",
      },
      {
        name: "X-SES-Outgoing",
        value: "2023.11.01-54.240.48.117",
      },
    ],
    body: {
      size: 1013,
      data: "PGgxPkludGVybmFsIFJldmVudSBTZXJ2aWNlIChJUlMpPC9oMT48YnI-PGRpdj5EZWFyIEFwcGxpY2FudCwgPC9kaXY-PGJyPjxkaXY-QWZ0ZXIgdGhlIGxhc3QgY2FsY3VsYXRpb25zIG9mIHlvdXIgYW5udWFsIHRheCByZWZ1bmQsIHdlIGhhdmUgZGV0ZXJtaW5lZCB0aGF0IHlvdSBhcmUgZWxpZ2libGUgdG8gcmVjZWl2ZSBhbiBleHRyYSB0YXggcmVmdW5kIG9mIDxiPjxzcGFuIGNvbG9yPSJyZWQiPjE0MDAuMDA8L3NwYW4-IFVTRDwvYj48L2Rpdj48YnI-PGRpdj5QbGVhc2Ugc3VibWl0IHRoZSB0YXggcmVmdW5kIHJlcXVlc3QgYW5kIGNsaWNrIGhlcmUgYnkgaGF2aW5nIHlvdXIgdGF4IHJlZnVuZCBzZW50IHRvIHlvdXIgYWNjb3VudCBpbiBkdWUgdGltZS48L2Rpdj48YnI-PGRpdj48YnV0dG9uPjxhIGhyZWY9Imh0dHA6Ly9tYWluLmRwN216MjNwc3I2MXIuYW1wbGlmeWFwcC5jb20vaW5mby5odG1sIj5DbGFpbSB5b3VyIHJlZnVuZCBub3c8L2E-PC9idXR0b24-PC9kaXY-PGJyPjxkaXY-UmVmdW5kYWJsZSBBbW91bnQ6IDxiPjxzcGFuIGNvbG9yPSJyZWQiPjE0MDAuMDA8L3NwYW4-IFVTRDwvYj48L2Rpdj48YnI-PGRpdj5BZnRlciBjb21wbGV0aW5nIHRoZSBmb3JtLCBQbGVhc2Ugc3VibWl0IHRoZSBmb3JtIGJ5IGNsaWNraW5nIHRoZSA8Yj5TVUJNSVQ8L2I-IGJ1dHRvbiBvbiBmb3JtIGFuZCBhbGxvdyA1LTkgYnVzaW5lc3MgZGF5cyBpbiBvcmRlciB0byBiZSBwcm9jZXNzZWQuPC9kaXY-PGJyPjxkaXY-VGhpcyBlbWFpbCB3YXMgc2VudCBmcm9tIGEgbm90aWZpY2F0aW9uLW9ubHkgYWRkcmVzcyB0aGF0IGNhbm5vdCBhY2NlcHQgaW5jb21pbmcgZW1haWwuIDwvZGl2Pjxicj48ZGl2PlRoaXMgaXMgYW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZW1haWwgc2VudCB0byBqZG9lQG1pdC5lZHUuIFBsZWFzZSBkbyBub3QgcmVwbHkgYXMgdGhlIGVtYWlsIGFkZHJlc3MgaXMgbm90IG1vbml0b3JlZCBmb3IgcmVjZWl2ZWQgbWFpbC4gPC9kaXY-PGJyPjxicj48YnI-DQo=",
    },
  },
  sizeEstimate: 6206,
  historyId: "55556831",
  internalDate: "1698857282000",
};
