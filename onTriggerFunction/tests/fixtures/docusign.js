export const docusign = {
  id: "18b010a27618a4e5",
  threadId: "18b010a27618a4e5",
  labelIds: ["IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
  snippet:
    "Do Not Share This Email This email contains a secure link to DocuSign. Please do not share this email, link, or access code with others. Alternate Signing Method Visit DocuSign.com, click &#39;Access",
  payload: {
    partId: "",
    mimeType: "multipart/mixed",
    filename: "",
    headers: [
      {
        name: "Delivered-To",
        value: "lydia.stepanek@gmail.com",
      },
      {
        name: "Received",
        value:
          "by 2002:ab0:28d6:0:b0:7ab:a90f:eacd with SMTP id g22csp523684uaq;        Thu, 5 Oct 2023 11:12:05 -0700 (PDT)",
      },
      {
        name: "X-Google-Smtp-Source",
        value:
          "AGHT+IHY66op2cXgFS7ua1yLbAnly+/SVl1WWHVV/Yel0KkeuQmGCHce/RNunbs5ZLqI4u04RIQc",
      },
      {
        name: "X-Received",
        value:
          "by 2002:a05:620a:4622:b0:76f:1ead:ddb9 with SMTP id br34-20020a05620a462200b0076f1eadddb9mr7247874qkb.51.1696529524741;        Thu, 05 Oct 2023 11:12:04 -0700 (PDT)",
      },
      {
        name: "ARC-Seal",
        value:
          "i=1; a=rsa-sha256; t=1696529524; cv=none;        d=google.com; s=arc-20160816;        b=nNWB3CV37ZcFehK8Qxd6THHLLp6aN9S4izcv4IgmYBGt7TDDBI7RIzdpfyDcpcTWXF         HgdiUii7vyRbWOTtJn2ebufYUtb2jhxzikiBRxG7Fe9Px+P3pdb4tTAXrFJbY9NaPiju         Ip6XeM9GTsvQNfFzQebqtHvNHYXE1nC2Jt5bIirj7Xc0NsGlin2rYetbj27jBO8AvSJj         KYiot8AtqrQZ4uSoXC8TeIlf7MuTpemvOc8ybb5+ODic2nONpW6Y5j7k1syRfHCOHlPC         tzMTh2iGJVeGrEyK0KU5PdGhX3kMcALuF+TW8iAtg6LsAA1UTXV7cB0Qx/eTNS1OV2DC         eweQ==",
      },
      {
        name: "ARC-Message-Signature",
        value:
          "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:mime-version:date:message-id:subject:to:from         :dkim-signature:dkim-signature;        bh=KlXhLWzK//6hExNXR+97qMSH7hZU7zBa8/LUoueVm2o=;        fh=KRfFSi6n3hCHhJ5thCAKM/WzpNfOwR03SzZ5TmRtxXk=;        b=Fx++Jl1MRXyAsoHXQnKGm6miQN75DIqux+6WrOYUbCu8IknDb4ARpmtAMFDglMab8R         qG3u3iYxecvRxP92KuHnb2IkrMA3DbVMC1AJuOJW8ENIS4mqDvzLsSfvN92Jgn/1lACw         I60DoYx1OH5Rx04WXToZv/oNABFWR1hzqfztxI9z/WzQMiKZ8C0bffibToHL+cC80NN3         9PsS9xm9GylG4RruCvfxtmqmc0bCFxxNxhUXR8zK9H/1iKoR1iJxWwushhDX1ojUcPyJ         OrgpFp+rnDEVu5AGDqSJvGNk0gAzf3OTJVpJUTvsM679nTfE/8eW0IWXxHTGFuT0blZB         o/UA==",
      },
      {
        name: "ARC-Authentication-Results",
        value:
          'i=1; mx.google.com;       dkim=pass header.i=@isthisphishy.io header.s=ee22edsdijivx4nnfmdvhq3zm2sipkyg header.b=fyES+OdT;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b="S8jYHA/V";       spf=pass (google.com: domain of 0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@amazonses.com designates 54.240.48.121 as permitted sender) smtp.mailfrom=0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@amazonses.com;       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=isthisphishy.io',
      },
      {
        name: "Return-Path",
        value:
          "\u003c0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@amazonses.com\u003e",
      },
      {
        name: "Received",
        value:
          "from a48-121.smtp-out.amazonses.com (a48-121.smtp-out.amazonses.com. [54.240.48.121])        by mx.google.com with ESMTPS id j12-20020a05620a288c00b00773b3e7fda1si1244161qkp.555.2023.10.05.11.12.04        for \u003clydia.stepanek@gmail.com\u003e        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Thu, 05 Oct 2023 11:12:04 -0700 (PDT)",
      },
      {
        name: "Received-SPF",
        value:
          "pass (google.com: domain of 0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@amazonses.com designates 54.240.48.121 as permitted sender) client-ip=54.240.48.121;",
      },
      {
        name: "Authentication-Results",
        value:
          'mx.google.com;       dkim=pass header.i=@isthisphishy.io header.s=ee22edsdijivx4nnfmdvhq3zm2sipkyg header.b=fyES+OdT;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b="S8jYHA/V";       spf=pass (google.com: domain of 0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@amazonses.com designates 54.240.48.121 as permitted sender) smtp.mailfrom=0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@amazonses.com;       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=isthisphishy.io',
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=ee22edsdijivx4nnfmdvhq3zm2sipkyg; d=isthisphishy.io; t=1696529524; h=Content-Type:From:To:Subject:Message-ID:Date:MIME-Version; bh=KlXhLWzK//6hExNXR+97qMSH7hZU7zBa8/LUoueVm2o=; b=fyES+OdTe/qtUsp0DqYToqlf/SP2TIVLC9Sb6giHku9+PqjD2AltmBtuSfW3U5tv aD2Fl+F9kpuwEenPkNQ843dT1CSh+xecu6VYChKRMUbaeVHahr+JOhfmT/lJntLSPk+ pMWtgEdt1W6jqeR61wJjTokDYCu4SwNZlQQtOUBKGslyM5dTAS/iLH6bCjj2XpPYkbr KM1EnH0njT2p85dNu8r65csgjoSMfY3vPtm3W3h8xmOmBevmqQxlN66eeMI6e4KwlSz ShMf7Msht34z7LKa90LeIhbt/Dp2PHVyFvXOtSul/lmbsMVEvVrNghHlXW5GswR6Mj4 DC5D9GHbow==",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1696529524; h=Content-Type:From:To:Subject:Message-ID:Date:MIME-Version:Feedback-ID; bh=KlXhLWzK//6hExNXR+97qMSH7hZU7zBa8/LUoueVm2o=; b=S8jYHA/VWFxh92Fr8RU6pRKGyUyg5tZ7puL/XdwP47yHIEEkir2HD9wyvCfO0yrY RFSnVyKzMW8uoeeufO+gnDhMHFCHYQsc0QyXZgT1U8byHOsnKKmd+HlXHecuPG7Hn6E jFN13JqGnkFHZr+08EDooBEimOE3EmqZVMwTDVyE=",
      },
      {
        name: "Content-Type",
        value: 'multipart/mixed; boundary="--_NmP-86ed93a08f9a1ba6-Part_1"',
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
        value: "DocuSign Electronic Signature",
      },
      {
        name: "Message-ID",
        value:
          "\u003c0100018b010a265e-285f5394-3d17-49d2-a1e3-c88ce24c96c0-000000@email.amazonses.com\u003e",
      },
      {
        name: "Date",
        value: "Thu, 5 Oct 2023 18:12:04 +0000",
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
        value: "2023.10.05-54.240.48.121",
      },
    ],
    body: {
      size: 0,
    },
    parts: [
      {
        partId: "0",
        mimeType: "text/html",
        filename: "",
        headers: [
          {
            name: "Content-Type",
            value: "text/html; charset=utf-8",
          },
          {
            name: "Content-Transfer-Encoding",
            value: "quoted-printable",
          },
        ],
        body: {
          size: 1016,
          data: "PGRpdj48Yj5EbyBOb3QgU2hhcmUgVGhpcyBFbWFpbDwvYj48L2Rpdj48ZGl2PlRoaXMgZW1haWwgY29udGFpbnMgYSBzZWN1cmUgbGluayB0byBEb2N1U2lnbi4gUGxlYXNlIGRvIG5vdCBzaGFyZSB0aGlzIGVtYWlsLCBsaW5rLCBvciBhY2Nlc3MgY29kZSB3aXRoIG90aGVycy48L2Rpdj48YnI-PGRpdj48Yj5BbHRlcm5hdGUgU2lnbmluZyBNZXRob2Q8L2I-PC9kaXY-VmlzaXQgRG9jdVNpZ24uY29tLCBjbGljayAnQWNjZXNzIERvY3VtZW50cycsIGFuZCBlbnRlciB0aGUgc2VjdXJpdHkgY29kZTogPGJyPjY5MzgwMTxicj48YnI-PGRpdj48Yj5BYm91dCBEb2N1U2lnbjwvYj48L2Rpdj48ZGl2PlNpZ24gZG9jdW1lbnRzIGVsZWN0cm9uaWNhbGx5IGluIGp1c3QgbWludXRlcy4gSXQncyBzYWZlLCBzZWN1cmUsIGFuZCBsZWdhbGx5IGJpbmRpbmcuIFdoZXRoZXIgeW91J3JlIGluIGFuIG9mZmljZSwgYXQgaG9tZSwgb24gdGhlIGdvIC0gb3IgZXZlbiBhY3Jvc3MgdGhlIGdsb2JlIC0gRG9jdVNpZ24gcHJvdmlkZXMgYSBwcm9mZXNzaW9uYWwgdHJ1c3RlZCBzb2x1dGlvbiBmb3IgRGlnaXRhbCBUcmFuc2FjdGlvbiBNYW5hZ2VtZW50LjwvZGl2Pjxicj48ZGl2PjxiPlF1ZXN0aW9ucyBhYm91dCB0aGUgRG9jdW1lbnQ_PC9iPjwvZGl2PjxkaXY-SWYgeW91IG5lZWQgdG8gbW9kaWZ5IHRoZSBkb2N1bWVudCBvciBoYXZlIHF1ZXN0aW9ucyBhYm91dCB0aGUgZGV0YWlscyBpbiB0aGUgZG9jdW1lbnQsIHBsZWFzZSByZWFjaCBvdXQgdG8gdGhlIHNlbmRlciBieSBlbWFpbGluZyB0aGVtIGRpcmVjdGx5LiA8L2Rpdj48YnI-PGRpdj5JZiB5b3UgYXJlIGhhdmluZyB0cm91YmxlIHNpZ25pbmcgdGhlIGRvY3VtZW50LCBwbGVhc2Ugc2VlIHRoZSA8YSBocmVmPSJodHRwczovL3d3dy5kb2N1c2lnbi5jb20vIj5IZWxwIHdpdGggU2lnbmluZzwvYT4gcGFnZSBvbiBvdXIgPGEgaHJlZj0iaHR0cHM6Ly93d3cuZG9jdXNpZ24uY29tLyI-U3VwcG9ydCBQYWdlPC9hPi48L2Rpdj48YnI-PGJyPjxicj4=",
        },
      },
      {
        partId: "1",
        mimeType: "application/vnd.ms-excel",
        filename: "invoice_958306.xls",
        headers: [
          {
            name: "Content-Type",
            value: "application/vnd.ms-excel; name=invoice_958306.xls",
          },
          {
            name: "Content-Transfer-Encoding",
            value: "base64",
          },
          {
            name: "Content-Disposition",
            value: "attachment; filename=invoice_958306.xls",
          },
        ],
        body: {
          attachmentId:
            "ANGjdJ_C0kIGI-FF9qRltJR2N4cO1XFvYgd67wu2sWU_5u7VdCAArMlCjLpJWLu7X2PWieGKVnwWGftLXO7qwrqlAnVc30GvWcwqWzdt2VqKwNpsBGfy233teSLGgm5dL3fP4WV38l5Vf6K0Tl0aHvk1yOoyIgsRo9n4TEBtrhHx32c0AfE5viRcmeLz6HbiAqpIaqur94xlelV48Nthby0KlbBCsw7Afn2S-deo55uweCJAguim4bkfBV8EoR8ItbfaOJ1p4fLtUsTE5faLirIJXO9PF2i-R1AI5UXTTzh0xpaW5fgBh-SRSSxCEWxo4V3TYDOAs-8cbZBLeOtkqSXD-pm9U4L5H0GEQu1AQwLwKjCXjwLzIeTU9o0Mem7nAf1awO5En6RIueLX4Ya_",
          size: 12,
        },
      },
    ],
  },
  sizeEstimate: 6489,
  historyId: "55556516",
  internalDate: "1696529524000",
};
