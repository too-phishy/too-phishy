export const id_badge_update_needed = {
  id: "197f629cc1b71459",
  threadId: "197f629cc1b71459",
  labelIds: ["CATEGORY_PERSONAL", "SENT", "INBOX"],
  snippet:
    "Update your ID Badge! Hi Lydia, Healthcare guidelines require personnel in hospitals to wear an updated identification. Make sure you have an up-to-date ID photo to complete our security validation.",
  payload: {
    partId: "",
    mimeType: "multipart/alternative",
    filename: "",
    headers: [
      {
        name: "Delivered-To",
        value: "lydia.stepanek@gmail.com",
      },
      {
        name: "Received",
        value:
          "by 2002:a05:7301:19ab:b0:17e:b12a:5de3 with SMTP id mc43csp4179465dyb;        Thu, 10 Jul 2025 14:07:04 -0700 (PDT)",
      },
      {
        name: "X-Received",
        value:
          "by 2002:a05:620a:44d5:b0:7d4:4b12:a39c with SMTP id af79cd13be357-7dc992eea6fmr711956185a.16.1752181624303;        Thu, 10 Jul 2025 14:07:04 -0700 (PDT)",
      },
      {
        name: "ARC-Seal",
        value:
          "i=1; a=rsa-sha256; t=1752181624; cv=none;        d=google.com; s=arc-20240605;        b=QZ88GFtPlw9alRHI4GdcXPYG+O0ZjmXnynXt/AcnxldWEyHQKnO9iM+YCMjwIT8dmb         Nunnt4BQW20MJb0nMKaL6SAD5ujf5Rt90OF+dYsKSQL2rGQKxuC9qisDQjLB94GRg4B4         pxHlXMfPsYL7PyPl1QxGu+TLhw1WhnAXYfOqO4Jmn1xuhyhBl9j/QHimblu8hcYxXRY6         Dq37V8pn2rU5byKhCTLUeUkw83J8L4pzqe/gH5mqNzPMitH4pMdbxm+nOwixNEcDlyUk         CIIGl0mqRw36ZlsoolQU+9M21zQ6w/VCTv6bSeP+0n+mxI8t9RN1F3X7AXiGxAY5cG8h         +UUQ==",
      },
      {
        name: "ARC-Message-Signature",
        value:
          "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20240605;        h=to:subject:message-id:date:from:mime-version:dkim-signature;        bh=gTzlZ9y3FiwEPBoLJh9edRGMJQD3qe2rJjShL9ns3hk=;        fh=Hj46ZdyldYGRR8Bq7YoBL3oUNg9kP4imx5pp/IepDnM=;        b=a5KnCSVPY+uKcSZ7yWK4PrT197o3QwsZyJfgx8YERTkWcGdvRwPYmSHyK3JykOhw0l         UM/UZNHI4bSgrLaDGWouSqHjwPFVKfSIVFaFQLLrrWOm79P9hcrBoBys+73Tm40Ek+iB         1AadbHP9RmmcxzGHfFOOQ4SQk1VZeDlYdgVTbInu7JqJISJQEwRJLRqLw1Yf7jm+GIaz         1QUt1CJxiBcf3O8uVQWgORiiRJn1RJHAdMFTq+2IoVcfSP3rSJy0wyhKsj+d1sBugRNz         tCxi3sXoMbLhr83cWESjGT5MWgCC7s9eTlSsbL3hJWZEQ1vJA6PIdEtnKcEm9kN1iYA+         YTFw==;        dara=google.com",
      },
      {
        name: "ARC-Authentication-Results",
        value:
          "i=1; mx.google.com;       dkim=pass header.i=@googl-mail-smtp-out-198-142-126-39-prod-net.20230601.gappssmtp.com header.s=20230601 header.b=se2XXZTH;       spf=softfail (google.com: domain of transitioning me@googl-mail-smtp-out-198-142-126-39-prod.net does not designate 209.85.220.41 as permitted sender) smtp.mailfrom=me@googl-mail-smtp-out-198-142-126-39-prod.net;       dmarc=fail (p=QUARANTINE sp=QUARANTINE dis=QUARANTINE) header.from=googl-mail-smtp-out-198-142-126-39-prod.net;       dara=pass header.i=@gmail.com",
      },
      {
        name: "Return-Path",
        value: "\u003cme@googl-mail-smtp-out-198-142-126-39-prod.net\u003e",
      },
      {
        name: "Received",
        value:
          "from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])        by mx.google.com with SMTPS id a1e0cc1a2514c-888df3da45asor1278502241.0.2025.07.10.14.07.04        for \u003clydia.stepanek@gmail.com\u003e        (Google Transport Security);        Thu, 10 Jul 2025 14:07:04 -0700 (PDT)",
      },
      {
        name: "Received-SPF",
        value:
          "softfail (google.com: domain of transitioning me@googl-mail-smtp-out-198-142-126-39-prod.net does not designate 209.85.220.41 as permitted sender) client-ip=209.85.220.41;",
      },
      {
        name: "Authentication-Results",
        value:
          "mx.google.com;       dkim=pass header.i=@googl-mail-smtp-out-198-142-126-39-prod-net.20230601.gappssmtp.com header.s=20230601 header.b=se2XXZTH;       spf=softfail (google.com: domain of transitioning me@googl-mail-smtp-out-198-142-126-39-prod.net does not designate 209.85.220.41 as permitted sender) smtp.mailfrom=me@googl-mail-smtp-out-198-142-126-39-prod.net;       dmarc=fail (p=QUARANTINE sp=QUARANTINE dis=QUARANTINE) header.from=googl-mail-smtp-out-198-142-126-39-prod.net;       dara=pass header.i=@gmail.com",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=googl-mail-smtp-out-198-142-126-39-prod-net.20230601.gappssmtp.com; s=20230601; t=1752181623; x=1752786423; dara=google.com;        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject         :date:message-id:reply-to;        bh=gTzlZ9y3FiwEPBoLJh9edRGMJQD3qe2rJjShL9ns3hk=;        b=se2XXZTHX7i5nexyVEm9WkY1L4i29aDEDLF7XIi/bEzDqnoSa4efU8o4rHEbHUxpkj         D9bh87W/35DjAJPS5bXJUha5zTK5md9nnG3CwaVkGcPeWW58WSdoPdlbPFbvqPshSt+X         vTz+Agh861P3FW9ZoARrulkv4K4jzMz6pssXvCHqx0qoImBEp3/KaTZdyb4m5tKRwUrn         p8XVg4eP5ycnWi6NZjkJXlrjr/yd7oTefvyAQi/kU88YWTdGBuXAj0F2cTNOYzTo14Rf         f4iS2EENyBCjSxviHCBH/3c3vI54UejG8pR0SbUQZCosv5y+46Ldlgr7yWYCbuEdIg+w         x2HQ==",
      },
      {
        name: "X-Google-DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20230601; t=1752181623; x=1752786423;        h=to:subject:message-id:date:from:mime-version:x-gm-message-state         :from:to:cc:subject:date:message-id:reply-to;        bh=gTzlZ9y3FiwEPBoLJh9edRGMJQD3qe2rJjShL9ns3hk=;        b=XrEP+ekWlZt9NZka2X6UbRRjojDRKoGVDO8iWWwPO5EaIQ7h9jB7JnXvzccbIjYPSl         SRh3X95XwkRw3et1BthFF8vexDDwm3N6M7rhBeTX8XVIhLZ0tYpWqvFFkcAs+QzdVxDe         5avXeguSMUmEDbevF4E5Dwk9S9zaGCXXhAD8MAYml1MYr9IW7I4bMVc2P/q19lVFnr1D         N2cWJiPpdrNvg5GeRG9e/AX1r/hPv9EUXxdXMUnNlNc4FlgifDFHhL2BHLKI+Dy0aU/d         dqG/ggyJTQWBXmoEiu8hL6pojduUnfzL6rhdqDFd5MxagoprnI8q3vP+W52xpwplGIeX         nBpA==",
      },
      {
        name: "X-Gm-Message-State",
        value:
          "AOJu0YyAz8kjj4ZJKbZn9t45ZjqFChsfsiWAzd0A333OHgec/d/JJSGR u36WaS1xoqxDJc6oDYxqFPBMkaJQvJd6gJurYTFshAqYr0Ddv+D5gyFYVHohIg6BjdxfLIC3aca /j1bOs3d3ziM3k17uPifZXeUF1uYwqA1bz0xmVjcuMctl4mlaHaivbPdB",
      },
      {
        name: "X-Gm-Gg",
        value:
          "ASbGnctzCOyQwOFxxehWBSYlQicTB1xpzNAOSUzeZtmz8OVy0PLRsp4lsPMFsQGTGbk ivQpRZ7jMHyxVbXkYGbFxFPZMhPN3GM6bgJW35N9A3tmqr82+LVVWWIROTlQyI3OQVEYOWS2hrZ r0AXPsAjDtQCTQk2TwTsJcRaxJIJsjZtpoVv5MO2f14RmRs09wTGZaw86Cxkw8mN3HAoqmCqzki FQ+hQ==",
      },
      {
        name: "X-Google-Smtp-Source",
        value:
          "AGHT+IHMC34smEdo+KZVI+fADojfXNmxlT5dPnqqcr6pF+xI10K3TwS35dGnNjeHMywXKebTu7S8tyHtayLPyixRaQU=",
      },
      {
        name: "X-Received",
        value:
          "by 2002:a05:6122:5219:20b0:534:7a9a:dfb4 with SMTP id 71dfb90a1353d-535e4055933mr2929068e0c.3.1752181623147; Thu, 10 Jul 2025 14:07:03 -0700 (PDT)",
      },
      {
        name: "MIME-Version",
        value: "1.0",
      },
      {
        name: "From",
        value:
          "eHealth Support \u003cme@googl-mail-smtp-out-198-142-126-39-prod.net\u003e",
      },
      {
        name: "Date",
        value: "Thu, 10 Jul 2025 17:06:52 -0400",
      },
      {
        name: "X-Gm-Features",
        value:
          "Ac12FXwtyaL_XUDZyudAHduL9pQCiCOWytOq0_ADhyzchuMOsws9u8HUA6Db-0Q",
      },
      {
        name: "Message-ID",
        value:
          "\u003cCAHTH3HYN3baKQx6jDe4fAXw5uajA=ZL+jTtnz_WuUVobs98JGg@mail.gmail.com\u003e",
      },
      {
        name: "Subject",
        value: "ID Badge Update Needed - Urgent",
      },
      {
        name: "To",
        value:
          '"lydia.stepanek@gmail.com" \u003clydia.stepanek@gmail.com\u003e',
      },
      {
        name: "Content-Type",
        value: 'multipart/alternative; boundary="0000000000003ae124063999937d"',
      },
    ],
    body: {
      size: 0,
    },
    parts: [
      {
        partId: "0",
        mimeType: "text/plain",
        filename: "",
        headers: [
          {
            name: "Content-Type",
            value: 'text/plain; charset="UTF-8"',
          },
        ],
        body: {
          size: 590,
          data: "VXBkYXRlIHlvdXIgSUQgQmFkZ2UhDQpIaSBMeWRpYSwNCkhlYWx0aGNhcmUgZ3VpZGVsaW5lcyByZXF1aXJlIHBlcnNvbm5lbCBpbiBob3NwaXRhbHMgdG8gd2VhciBhbiB1cGRhdGVkDQppZGVudGlmaWNhdGlvbi4NCg0KKk1ha2Ugc3VyZSB5b3UgaGF2ZSBhbiB1cC10by1kYXRlIElEIHBob3RvIHRvIGNvbXBsZXRlIG91ciBzZWN1cml0eQ0KdmFsaWRhdGlvbi4qDQoNCkFyZSB5b3UgYW4gZXNzZW50aWFsIGVtcGxveWVlIGFuZCB3b3JrZXIgc3VjaCBhcyBkb2N0b3IsIG51cnNlIG9yIG1lZGljYWwNCmFzc2lzdGFudD8gT3IgcGxhbm5pbmcgdG8gdmlzaXQgYSBob3NwaXRhbCBpbiB0aGUgbmV4dCBmZXcgZGF5cz8gV2Ugd2lsbCBkbw0Kb3VyIGJlc3QgdG8gc2V0IHVwIHlvdXIgSUQgQmFkZ2UgVXBkYXRlIGFzIHF1aWNrbHkgYXMgcG9zc2libGUuDQoNClBsZWFzZSAqYWRkIHlvdXIgZGV0YWlscyosIHVwbG9hZCBhIG5ldyBwaG90byA8aHR0cDovL2JpdC5seS8xUGliU1UwPiBhbmQNCmdldCBhbiB1cGRhdGVkIElEIGJhZGdlIQ0KKlVwZGF0ZSB5b3VyIElEIGJhZGdlKiA8aHR0cDovL2ltcGFjdHBvbGljeXNlcnZpY2VzLmNvbS8-DQo=",
        },
      },
      {
        partId: "1",
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
          size: 3375,
          data: "PGRpdiBkaXI9Imx0ciI-PHRhYmxlIGNsYXNzPSJnbWFpbC1ib2R5LXdyYXAiIGJnY29sb3I9IiNmNmY2ZjYiIHN0eWxlPSJjb2xvcjpyZ2IoMCwwLDApO2ZvbnQtZmFtaWx5OiZxdW90O0hlbHZldGljYSBOZXVlJnF1b3Q7LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2JhY2tncm91bmQtY29sb3I6cmdiKDI0NiwyNDYsMjQ2KTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6aW5pdGlhbDt0ZXh0LWRlY29yYXRpb24tY29sb3I6aW5pdGlhbDtmb250LXNpemU6MTRweDt3aWR0aDo2ODBweCI-PHRib2R5Pjx0cj48dGQgc3R5bGU9ImJveC1zaXppbmc6Ym9yZGVyLWJveCI-PC90ZD48dGQgY2xhc3M9ImdtYWlsLWNvbnRhaW5lciIgd2lkdGg9IjYwMCIgc3R5bGU9ImJveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tbGVmdDphdXRvO2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjYwMHB4O2NsZWFyOmJvdGgiPjxkaXYgY2xhc3M9ImdtYWlsLWNvbnRlbnQiIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3g7bWF4LXdpZHRoOjYwMHB4O21hcmdpbjowcHggYXV0bztwYWRkaW5nOjIwcHgiPjx0YWJsZSB3aWR0aD0iMTAwJSIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiPjx0Ym9keT48dHI-PHRkIHdpZHRoPSI2NDAiIGhlaWdodD0iMCIgYmdjb2xvcj0iI2Y2ZjZmNiIgc3R5bGU9ImJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZSI-PHRhYmxlIHdpZHRoPSIzNjAiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBhbGlnbj0iY2VudGVyIj48dGJvZHk-PC90Ym9keT48L3RhYmxlPjwvdGQ-PC90cj48L3Rib2R5PjwvdGFibGU-PHRhYmxlIGNsYXNzPSJnbWFpbC1tYWluIiB3aWR0aD0iMTAwJSIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBzdHlsZT0iYm9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCByZ2IoMjIxLDIyMSwyMjEpIj48dGJvZHk-PHRyPjx0ZD48dGFibGUgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBib3JkZXI9IjAiIHN0eWxlPSJmb250LXNpemU6MXB4O2hlaWdodDoycHg7bGluZS1oZWlnaHQ6M3B4O3dpZHRoOjU1NnB4O2JvcmRlcjptZWRpdW0iPjx0Ym9keT48dHI-PHRkIHN0eWxlPSJmb250LWZhbWlseTomcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OyxBcmlhbCxzYW5zLXNlcmlmO3dpZHRoOjU1NnB4O2JvcmRlcjptZWRpdW0iPsKgPC90ZD48L3RyPjwvdGJvZHk-PC90YWJsZT48L3RkPjwvdHI-PHRyIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6cmdiKDgyLDgyLDgyKSI-PHRkIGNsYXNzPSJnbWFpbC1jb250ZW50LXdyYXAiIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoyMHB4Ij48dGFibGUgd2lkdGg9IjEwMCUiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCI-PHRib2R5Pjx0cj48dGQgY2xhc3M9ImdtYWlsLWNvbnRlbnQtYmxvY2siIGFsaWduPSJjZW50ZXIiIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowcHggMHB4IDhweCI-PGgyPlVwZGF0ZSB5b3VyIElEIEJhZGdlITwvaDI-PC90ZD48L3RyPjx0cj48dGQgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwcHgiIGFsaWduPSJjZW50ZXIiIHN0eWxlPSJib3JkZXItY29sbGFwc2U6Y29sbGFwc2UiPjxpbWcgc3JjPSJodHRwczovL2QxeXlucnFkMmZwODZqLmNsb3VkZnJvbnQubmV0L0VtYWlsVGVtcGxhdGVzL0NvbW1vbi9pbWFnZXMvYmFkZ2UtbG9nby5wbmciIHdpZHRoPSIxNDZweCIgaGVpZ2h0PSI5MHB4IiBhbHQ9IiIgYm9yZGVyPSIwIiBzdHlsZT0ibWF4LXdpZHRoOiAxMDAlOyBvdXRsaW5lOiBjdXJyZW50Y29sb3I7IGRpc3BsYXk6IGJsb2NrOyI-PC90ZD48L3RyPjx0cj48dGQgY2xhc3M9ImdtYWlsLWNvbnRlbnQtYmxvY2siIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3giPjxoMz5IaSBMeWRpYSw8L2gzPjwvdGQ-PC90cj48dHI-PHRkIGNsYXNzPSJnbWFpbC1jb250ZW50LWJsb2NrIiBzdHlsZT0iYm94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MHB4IDBweCAyMHB4Ij48aDMgc3R5bGU9ImJveC1zaXppbmc6Ym9yZGVyLWJveCI-SGVhbHRoY2FyZSBndWlkZWxpbmVzIHJlcXVpcmUgcGVyc29ubmVsIGluIGhvc3BpdGFscyB0byB3ZWFyIGFuIHVwZGF0ZWQgaWRlbnRpZmljYXRpb24uPC9oMz48L3RkPjwvdHI-PHRyPjx0ZCBjbGFzcz0iZ21haWwtY29udGVudC1ibG9jayIgc3R5bGU9ImJveC1zaXppbmc6Ym9yZGVyLWJveCI-PHA-PHN0cm9uZz5NYWtlIHN1cmUgeW91IGhhdmUgYW4gdXAtdG8tZGF0ZSBJRCBwaG90byB0byBjb21wbGV0ZSBvdXIgc2VjdXJpdHkgdmFsaWRhdGlvbi48L3N0cm9uZz48L3A-PHAgc3R5bGU9InBhZGRpbmctYm90dG9tOjEycHgiPkFyZSB5b3UgYW4gZXNzZW50aWFsIGVtcGxveWVlIGFuZCB3b3JrZXIgc3VjaCBhcyBkb2N0b3IsIG51cnNlIG9yIG1lZGljYWwgYXNzaXN0YW50PyBPciBwbGFubmluZyB0byB2aXNpdCBhIGhvc3BpdGFsIGluIHRoZSBuZXh0IGZldyBkYXlzPyBXZSB3aWxsIGRvIG91ciBiZXN0IHRvIHNldCB1cCB5b3VyIElEIEJhZGdlIFVwZGF0ZSBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLjwvcD48L3RkPjwvdHI-PHRyPjx0ZCBjbGFzcz0iZ21haWwtY29udGVudC1ibG9jayIgc3R5bGU9ImJveC1zaXppbmc6Ym9yZGVyLWJveCI-PHAgc3R5bGU9InBhZGRpbmctYm90dG9tOjEycHgiPlBsZWFzZcKgPHN0cm9uZz5hZGQgeW91ciBkZXRhaWxzPC9zdHJvbmc-LMKgPGEgaHJlZj0iaHR0cDovL2JpdC5seS8xUGliU1UwIiBzdHlsZT0iY3Vyc29yOiBwb2ludGVyOyI-dXBsb2FkIGEgbmV3IHBob3RvPC9hPsKgYW5kIGdldCBhbiB1cGRhdGVkIElEIGJhZGdlITwvcD48L3RkPjwvdHI-PHRyIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3g7aGVpZ2h0OjgwcHg7bWFyZ2luOjIwcHgiPjx0ZCBjbGFzcz0iZ21haWwtY29udGVudC1ibG9jayIgYWxpZ249ImNlbnRlciIgc3R5bGU9ImJveC1zaXppbmc6Ym9yZGVyLWJveDtoZWlnaHQ6ODBweDttYXJnaW46MjBweCI-PGEgaHJlZj0iaHR0cDovL2ltcGFjdHBvbGljeXNlcnZpY2VzLmNvbS8iIHN0eWxlPSJib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1zaXplOjE2cHg7Y29sb3I6cmdiKDI1NSwyNTUsMjU1KTtiYWNrZ3JvdW5kLWNvbG9yOnJnYigzMywxNTAsMjQzKTt0ZXh0LWRlY29yYXRpb246bm9uZTttYXJnaW46MjBweDtwYWRkaW5nOjEzcHggMjBweCI-PGI-VXBkYXRlIHlvdXIgSUQgYmFkZ2U8L2I-PC9hPjwvdGQ-PC90cj48L3Rib2R5PjwvdGFibGU-PC90ZD48L3RyPjwvdGJvZHk-PC90YWJsZT48L2Rpdj48L3RkPjwvdHI-PC90Ym9keT48L3RhYmxlPjwvZGl2Pg0K",
        },
      },
    ],
  },
  sizeEstimate: 10438,
  historyId: "55161072",
  internalDate: "1752181612000",
};
