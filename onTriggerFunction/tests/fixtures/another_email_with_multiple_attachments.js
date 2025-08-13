export const another_email_with_multiple_attachments = {
  id: "180866bb6a962c80",
  threadId: "180866bb6a962c80",
  labelIds: ["CATEGORY_PERSONAL", "INBOX"],
  snippet:
    "Hi Eugene, Attached is the contact information for your new tenants. -- Hey, Lydia &amp; Brian, Attached is the contact information for your new landlord. Your signed lease is at the apartment. Thank",
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
          "by 2002:a05:7022:a87:b0:3e:29ff:adee with SMTP id dd7csp2727533dlb;        Mon, 2 May 2022 13:17:31 -0700 (PDT)",
      },
      {
        name: "X-Received",
        value:
          "by 2002:ab0:5b4d:0:b0:35d:2f9c:f01 with SMTP id v13-20020ab05b4d000000b0035d2f9c0f01mr3500833uae.86.1651522648224;        Mon, 02 May 2022 13:17:28 -0700 (PDT)",
      },
      {
        name: "ARC-Seal",
        value:
          "i=1; a=rsa-sha256; t=1651522648; cv=none;        d=google.com; s=arc-20160816;        b=MZkgcb0cYLWCsbfYtHT7/W0ZPQXxj5Sb4vFVOYcKcyq/Gqzx0BvtycMAM+gE3q0yjR         /2PpHx7khGrrxxlE+DRArJ5OPnlxlh5vo3jAjwt1bCw7R5RbTJW004Nwwm0HbzHCjreV         WsWh9ScaA5lYIX2JGEI+tadZvZ3t5NuohQ2o5CM3rPPFP7ZsPSbE3qOd8kJP0PN+iNF6         54yOSMvDhU5Cqga1A6hmLLCarT2JaKRkXh29pgHxn5aBv/vQXR+u4spMoAmqaiCgwAwg         PWA6LVGT2qGK/9TPNFOsuzKUaH9S553WrsHI2/VYg0ULwYykKXz9eYolTY9VwDqZQvG4         XtSg==",
      },
      {
        name: "ARC-Message-Signature",
        value:
          "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=cc:to:subject:message-id:date:from:mime-version:dkim-signature;        bh=whzXIXDKyFcmDLGXIIEBV08WuT2iqEwSg8RrxZogw7g=;        b=f57luS6xUT3MM4s8+kPh3AghkfldFJnQ2yskEOmZgDoNivZWe6/nJ17UONG2OLoNfb         R2xEjlahTaMNP4gwVUgqPD10uvUTwTtW9PgZS0Ulu2T2Y7hDeGgRh5CpwhDxfs7WB+Wi         /wNzhAGId+t1BF2CN10CUC0JOxtplHKUkrXjyK9Pzv2bDa6LXFePAyn3VBVRWEANRuM7         jSGSiZCHIcL0G3k80LKFkS0nUpce02s7KKCRIPPFca8GsO4ZHXV/kxrFPR3FRij46Svd         ifbh2EgeXUQSLra/RhurEvNWftU9EbKjvri7RWftagrXdfFDJ35BQR8Imvzo/LrZN4D2         PM/w==",
      },
      {
        name: "ARC-Authentication-Results",
        value:
          "i=1; mx.google.com;       dkim=pass header.i=@citynest-nyc.20210112.gappssmtp.com header.s=20210112 header.b=b6p06qJN;       spf=pass (google.com: domain of ahmed@citynest.nyc designates 209.85.220.41 as permitted sender) smtp.mailfrom=ahmed@citynest.nyc",
      },
      {
        name: "Return-Path",
        value: "\u003cahmed@citynest.nyc\u003e",
      },
      {
        name: "Received",
        value:
          "from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])        by mx.google.com with SMTPS id r19-20020ab06f53000000b003616e8a1232sor3481286uat.15.2022.05.02.13.17.27        for \u003clydia.stepanek@gmail.com\u003e        (Google Transport Security);        Mon, 02 May 2022 13:17:27 -0700 (PDT)",
      },
      {
        name: "Received-SPF",
        value:
          "pass (google.com: domain of ahmed@citynest.nyc designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41;",
      },
      {
        name: "Authentication-Results",
        value:
          "mx.google.com;       dkim=pass header.i=@citynest-nyc.20210112.gappssmtp.com header.s=20210112 header.b=b6p06qJN;       spf=pass (google.com: domain of ahmed@citynest.nyc designates 209.85.220.41 as permitted sender) smtp.mailfrom=ahmed@citynest.nyc",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=citynest-nyc.20210112.gappssmtp.com; s=20210112;        h=mime-version:from:date:message-id:subject:to:cc;        bh=whzXIXDKyFcmDLGXIIEBV08WuT2iqEwSg8RrxZogw7g=;        b=b6p06qJNrsUcyxNntAK8issSDca/+xSLNHMPJIQN3/h3/H9dTGsfLolO/NT4PpytTE         1gScCNAlXSfTDTrc6LKFIienudWTpxt2hVyBPvt/3jckRaPTarUm4q4tILC3kUqfdN0s         GEuSdS4zpb7d5lcxBBZyf67u3ErF/ctLFcMhVNJa7JShkoSyt2TssSrRFRzPa//F+69I         V6pZvsC9+4pEMoqYKVSKQjrVfGG44okRe073ke7x3QILpaFAUktU6FltLtRPjz9VPqTG         hpUoWXoeKlyf48qrq9qL8PisulcxKOJ6tdnMPXOiffGZuN5yYtac8OFxRjccNKL/g3CF         pcyQ==",
      },
      {
        name: "X-Google-DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20210112;        h=x-gm-message-state:mime-version:from:date:message-id:subject:to:cc;        bh=whzXIXDKyFcmDLGXIIEBV08WuT2iqEwSg8RrxZogw7g=;        b=8ASajg7isaYgziTdGKfMs85HNQyS7zjHv5XklJxJsYz1DXRNlS6QMOwxnMzxKZ2fZp         uBVfsc3Zu+xIN2jEiXQhoBN1mAv0TmM0EdCGvDKBcs0ZWk2NL5vCtVYuS5QhoDhvi0jr         bwCn+sgIm2TaEIcB9I01iWW0m+Hc/hIKQ9UTXFkl+1kk0xmL/21BChPdgKaDu4UWQWZJ         rNt9fHqLiDBxbcoO0H/0dHHTU+dt2ghrW980uInvHF/z17l/JbPBp1cWo3++mUq8i74i         ZkoKuyjks19Pl/Sjo4h/Z7M6CvvEvU+K4H1Ygm8wFbs/l2IraDvI+g75OnON+rVjS2Kk         sqEw==",
      },
      {
        name: "X-Gm-Message-State",
        value:
          "AOAM530c4nsTPFM1ZyeBov9oHkMJScPEkvg8PysaS6c90Ipt6xp4BRCY iJYQTYRJC5JsK08Ahv3pOxRBrSMaj+HFFES2s+VQno4EGgWxnsZV",
      },
      {
        name: "X-Google-Smtp-Source",
        value:
          "ABdhPJwEjY3V/nxo/BRVJVQGpZ2NQkKQbMKejtq/ODefGbNWvMkWkGAQloez6BSlwlWYppJSqpRoZbHkhDQzzV3k4+E=",
      },
      {
        name: "X-Received",
        value:
          "by 2002:ab0:5945:0:b0:365:7d38:d80a with SMTP id o5-20020ab05945000000b003657d38d80amr3446239uad.89.1651522644109; Mon, 02 May 2022 13:17:24 -0700 (PDT)",
      },
      {
        name: "MIME-Version",
        value: "1.0",
      },
      {
        name: "From",
        value: "Ahmed Eldib \u003cahmed@citynest.nyc\u003e",
      },
      {
        name: "Date",
        value: "Mon, 2 May 2022 16:17:13 -0400",
      },
      {
        name: "Message-ID",
        value:
          "\u003cCAK7_bkKBHafA3zRYM=XqM=e+7AwWNN_3f0S=wUC-PDapaKKOHw@mail.gmail.com\u003e",
      },
      {
        name: "Subject",
        value: "Congratulation on your new nest! 113 Senator St #1",
      },
      {
        name: "To",
        value:
          "lydia.stepanek@gmail.com, brian.kristopher.stackhouse@gmail.com",
      },
      {
        name: "Cc",
        value: "Eugene Chiu \u003cugn414@gmail.com\u003e",
      },
      {
        name: "Content-Type",
        value: 'multipart/mixed; boundary="0000000000008bb0a105de0d148b"',
      },
    ],
    body: {
      size: 0,
    },
    parts: [
      {
        partId: "0",
        mimeType: "multipart/related",
        filename: "",
        headers: [
          {
            name: "Content-Type",
            value: 'multipart/related; boundary="0000000000008bb0a005de0d148a"',
          },
        ],
        body: {
          size: 0,
        },
        parts: [
          {
            partId: "0.0",
            mimeType: "multipart/alternative",
            filename: "",
            headers: [
              {
                name: "Content-Type",
                value:
                  'multipart/alternative; boundary="0000000000008bb09e05de0d1489"',
              },
            ],
            body: {
              size: 0,
            },
            parts: [
              {
                partId: "0.0.0",
                mimeType: "text/plain",
                filename: "",
                headers: [
                  {
                    name: "Content-Type",
                    value: 'text/plain; charset="UTF-8"',
                  },
                ],
                body: {
                  size: 674,
                  data: "SGkgRXVnZW5lLA0KQXR0YWNoZWQgaXMgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIHlvdXIgbmV3IHRlbmFudHMuDQotLQ0KSGV5LCBMeWRpYSAmIEJyaWFuLA0KQXR0YWNoZWQgaXMgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIHlvdXIgbmV3IGxhbmRsb3JkLg0KDQpZb3VyIHNpZ25lZCBsZWFzZSBpcyBhdCB0aGUgYXBhcnRtZW50Lg0KW2ltYWdlOiBJTUdfNjY4Ni5KUEddDQoNClRoYW5rIHlvdSwgZG9uJ3QgZm9yZ2V0IHRvIGNhbGwgTmF0aW9uYWwgR3JpZCBhbmQgQ29uRWQgdG8gc2V0IHVwIHV0aWxpdGllcw0KcHJpb3IgdG8geW91ciBtb3ZlLWluIGRhdGUuDQoNCkknZCBhcHByZWNpYXRlIGl0IGlmIHlvdSB3cml0ZSB1cyBhIHJldmlldzoNCg0KaHR0cHM6Ly9nb28uZ2wvbWFwcy9KN3ZFRjVDRjROd2drQWtINw0KDQpodHRwczovL3d3dy55ZWxwLmNvbS9iaXovY2l0aW5lc3QtZ3JvdXAtYnJvb2tseW4NCg0KQmVzdCwNCkVkZGllDQoNCi0tIA0KKkFobWVkIEVsZGliKg0KKkxpY2Vuc2VkIFJlYWwgRXN0YXRlIEJyb2tlcioNCnd3dy5jaXR5bmVzdC5ueWMNCjUwNiA1dGggQXZlbnVlLCAybmQgRmxvb3INCkJyb29rbHluLCBOWSAxMTIxNQ0KKkNlbGw6IDY0Ni01NzgtNjEwMSoNCk9mZmljZTogMzQ3LTg0NC05MzgwDQpPLkU6IGNvbnRhY3RAY2l0eW5lc3QubnljDQo=",
                },
              },
              {
                partId: "0.0.1",
                mimeType: "text/html",
                filename: "",
                headers: [
                  {
                    name: "Content-Type",
                    value: 'text/html; charset="UTF-8"',
                  },
                  {
                    name: "Content-Transfer-Encoding",
                    value: "quoted-printable",
                  },
                ],
                body: {
                  size: 1937,
                  data: "PGRpdiBkaXI9Imx0ciI-SGkgRXVnZW5lLMKgPGRpdj48ZGl2PkF0dGFjaGVkIGlzIHRoZSBjb250YWN0IGluZm9ybWF0aW9uIGZvciB5b3VyIG5ldyB0ZW5hbnRzLsKgPC9kaXY-PGRpdj48ZGl2Pi0tPC9kaXY-PGRpdj5IZXksIEx5ZGlhICZhbXA7IEJyaWFuLDwvZGl2PjxkaXY-QXR0YWNoZWQgaXMgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIHlvdXIgbmV3IGxhbmRsb3JkLsKgPC9kaXY-PGRpdj48YnI-PC9kaXY-PGRpdj5Zb3VyIHNpZ25lZCBsZWFzZSBpcyBhdCB0aGUgYXBhcnRtZW50LjwvZGl2PjxpbWcgc3JjPSJjaWQ6aWlfbDJwNXg2MXcxIiBhbHQ9IklNR182Njg2LkpQRyIgd2lkdGg9IjM2OCIgaGVpZ2h0PSI0OTEiPjxicj48ZGl2Pjxicj5UaGFuayB5b3UsIGRvbiYjMzk7dCBmb3JnZXTCoHRvIGNhbGwgTmF0aW9uYWwgR3JpZCBhbmTCoDxzcGFuIGNsYXNzPSJnbWFpbC1pbCI-Q29uRWQ8L3NwYW4-wqB0byBzZXQgdXAgdXRpbGl0aWVzIHByaW9ywqB0byB5b3VyIG1vdmUtaW4gZGF0ZS7CoDwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-SSYjMzk7ZCBhcHByZWNpYXRlIGl0IGlmIHlvdSB3cml0ZSB1cyBhIHJldmlldzo8L2Rpdj48ZGl2Pjxicj48L2Rpdj48ZGl2PjxhIGhyZWY9Imh0dHBzOi8vZ29vLmdsL21hcHMvSjd2RUY1Q0Y0Tndna0FrSDciIHRhcmdldD0iX2JsYW5rIj5odHRwczovL2dvby5nbC9tYXBzL0o3dkVGNUNGNE53Z2tBa0g3PC9hPjwvZGl2PjxkaXY-PGJyPjwvZGl2PjxkaXY-PGEgaHJlZj0iaHR0cHM6Ly93d3cueWVscC5jb20vYml6L2NpdGluZXN0LWdyb3VwLWJyb29rbHluIiB0YXJnZXQ9Il9ibGFuayI-aHR0cHM6Ly93d3cueWVscC5jb20vYml6L2NpdGluZXN0LWdyb3VwLWJyb29rbHluPC9hPjxicj48L2Rpdj48ZGl2Pjxicj48L2Rpdj48ZGl2PkJlc3QsPC9kaXY-PC9kaXY-PC9kaXY-PGRpdj5FZGRpZcKgPC9kaXY-PGRpdj48YnI-PC9kaXY-LS0gPGJyPjxkaXYgZGlyPSJsdHIiIGNsYXNzPSJnbWFpbF9zaWduYXR1cmUiIGRhdGEtc21hcnRtYWlsPSJnbWFpbF9zaWduYXR1cmUiPjxkaXYgZGlyPSJsdHIiPjxpbWcgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTIiIHNyYz0iaHR0cHM6Ly9jaTMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL21haWwtc2lnL0FJb3JLNHdiRFhwQkt3NnUwVE9FU0c2YVVSWUdvWjBNeXUxbzV5bGowMXRrQk1sbVMzNjlnY2Qxd2lLSGNOZDloZFVDZUF1MF9YUnBNSEUiPjxkaXY-PGI-PGZvbnQgZmFjZT0idGFob21hLCBzYW5zLXNlcmlmIiBzaXplPSI0Ij5BaG1lZCBFbGRpYjwvZm9udD48L2I-PGRpdj48Zm9udCBmYWNlPSJ0YWhvbWEsIHNhbnMtc2VyaWYiPjxiPkxpY2Vuc2VkIFJlYWwgRXN0YXRlIEJyb2tlcjwvYj48L2ZvbnQ-PC9kaXY-PGRpdj48Zm9udCBmYWNlPSJ0YWhvbWEsIHNhbnMtc2VyaWYiPjxhIGhyZWY9Imh0dHA6Ly93d3cuY2l0eW5lc3QubnljIiB0YXJnZXQ9Il9ibGFuayI-d3d3LmNpdHluZXN0Lm55YzwvYT48L2ZvbnQ-PC9kaXY-PGRpdj48Zm9udCBmYWNlPSJ0YWhvbWEsIHNhbnMtc2VyaWYiPjUwNiA1dGggQXZlbnVlLCAybmQgRmxvb3LCoDwvZm9udD48L2Rpdj48ZGl2Pjxmb250IGZhY2U9InRhaG9tYSwgc2Fucy1zZXJpZiI-QnJvb2tseW4sIE5ZIDExMjE1PC9mb250PjwvZGl2PjxkaXY-PGZvbnQgZmFjZT0idGFob21hLCBzYW5zLXNlcmlmIj48Yj5DZWxsOiA2NDYtNTc4LTYxMDE8L2I-PC9mb250PjwvZGl2PjxkaXY-PGZvbnQgZmFjZT0idGFob21hLCBzYW5zLXNlcmlmIj5PZmZpY2U6IDM0Ny04NDQtOTM4MDwvZm9udD48L2Rpdj48ZGl2Pjxmb250IGZhY2U9InRhaG9tYSwgc2Fucy1zZXJpZiI-Ty5FOiA8YSBocmVmPSJtYWlsdG86Y29udGFjdEBjaXR5bmVzdC5ueWMiIHRhcmdldD0iX2JsYW5rIj5jb250YWN0QGNpdHluZXN0Lm55YzwvYT48L2ZvbnQ-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-DQo=",
                },
              },
            ],
          },
          {
            partId: "0.1",
            mimeType: "image/jpeg",
            filename: "IMG_6686.JPG",
            headers: [
              {
                name: "Content-Type",
                value: 'image/jpeg; name="IMG_6686.JPG"',
              },
              {
                name: "Content-Disposition",
                value: 'inline; filename="IMG_6686.JPG"',
              },
              {
                name: "Content-Transfer-Encoding",
                value: "base64",
              },
              {
                name: "Content-ID",
                value: "\u003cii_l2p5x61w1\u003e",
              },
              {
                name: "X-Attachment-Id",
                value: "ii_l2p5x61w1",
              },
            ],
            body: {
              attachmentId:
                "ANGjdJ_Q3w8rbusUGLPX2dkyqCMo9DI1S7d7vYAuxVryiYf45awy0RRrL8CHMCkZPpIvzIaVgs8SSPaswLQBX7Bu9MaA2LOGcMCYXk8nljQV9PnmWMgvxQUbcKDDguZGzK76te544D7Rdz95nVsW3j4UcZd1jx7sQSgIAQzQaBovsWJOnVZVAuX8NtyHFantXNHLOoxKEQD6eLL5bLBtDZYzx8kmHrJFBiVFRZ5ebYiP4Ob2G9ivcGA18t8_mpDRkueazts_boDnJJSIEZURrTG1P5lnX5OLDWwy5YrUwfGDW_BAhZsRYGUXFE-boVaFUED0H2TMBHD_iosttwD7plHCJ-O32ZsGkoP-TMBfDxiZwV4qil-pOdQf8VFBYp7HKtA0QzU6ADKMqLtsTVO5",
              size: 3186107,
            },
          },
        ],
      },
      {
        partId: "1",
        mimeType: "application/pdf",
        filename: "Congrats-NewNest113SenatorSt1.pdf",
        headers: [
          {
            name: "Content-Type",
            value: 'application/pdf; name="Congrats-NewNest113SenatorSt1.pdf"',
          },
          {
            name: "Content-Disposition",
            value: 'attachment; filename="Congrats-NewNest113SenatorSt1.pdf"',
          },
          {
            name: "Content-Transfer-Encoding",
            value: "base64",
          },
          {
            name: "Content-ID",
            value: "\u003cf_l2p5wfvq0\u003e",
          },
          {
            name: "X-Attachment-Id",
            value: "f_l2p5wfvq0",
          },
        ],
        body: {
          attachmentId:
            "ANGjdJ9LckbKFnFYj7bOyEzOH1aQbOcKLH3A5J1mS0AaC28pvaX0VQTVUe7CN6HNgtNV-M6kJH1IDIZCEyJoEjTVaoIpUZG3Z5oacYgRm4dCpZJjT-HqWZ5OuGiLmsk8_BclLuZYApUAmAXfzo6EiDaeqH-Qdu9J_9pLaMoknbSeK6lQ6myPvRPSTBQIyP_rd9hRZ52Md_1wT4Kq5dJinV2cqLk7NhPuxS7-91mjuDap0zOG4bGpBxaN3rd2C4uyxz2E6NzurriR0kYkURmwiyc8vG2WDPnaBuexLmoiKLDzfKxcfwGZRITQXdA8SO9UTLBmVQ76r0pO2lhbHXiXSnQ_OYYej79R-KAwAZ0hGQ-h4Za-CAXzo8R7nktRQqPgHoYrudi-CtE2cxejolPCgaAx8gmtUnVdsAshHvUdXA",
          size: 2203354,
        },
      },
    ],
  },
  sizeEstimate: 7383547,
  historyId: "41542047",
  internalDate: "1651522633000",
};
