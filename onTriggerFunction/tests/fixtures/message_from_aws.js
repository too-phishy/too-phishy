export const message_from_aws = {
  id: "18a4d095ab9cc27c",
  threadId: "18a4b06ca9cc91c7",
  labelIds: ["IMPORTANT", "CATEGORY_PERSONAL", "INBOX"],
  snippet:
    "{&quot;notificationType&quot;:&quot;Delivery&quot;,&quot;mail&quot;:{&quot;timestamp&quot;:&quot;2023-08-31T19:19:32.027Z&quot;,&quot;source&quot;:&quot;=?UTF-8?Q?lydia?= &lt;lydia@isthisphishy.io&gt;",
  payload: {
    partId: "",
    mimeType: "text/plain",
    filename: "",
    headers: [
      {
        name: "Delivered-To",
        value: "lydia.stepanek@gmail.com",
      },
      {
        name: "Received",
        value:
          "by 2002:ab0:3744:0:b0:7a2:50b5:7d18 with SMTP id i4csp469060uat;        Thu, 31 Aug 2023 12:19:33 -0700 (PDT)",
      },
      {
        name: "X-Google-Smtp-Source",
        value:
          "AGHT+IF+5U/2fTQ5eU52jGzEhPgMwtNw0mWDv/fRwZIowcHHmCzIdY9T48DrMHVEBeUUo2pyys4g",
      },
      {
        name: "X-Received",
        value:
          "by 2002:a67:e94e:0:b0:44d:50f0:f43e with SMTP id p14-20020a67e94e000000b0044d50f0f43emr524331vso.30.1693509573252;        Thu, 31 Aug 2023 12:19:33 -0700 (PDT)",
      },
      {
        name: "ARC-Seal",
        value:
          "i=1; a=rsa-sha256; t=1693509573; cv=none;        d=google.com; s=arc-20160816;        b=XVM0D0ILtb7jAsliHkYlSWC1gEDCb0z92UN1kwTehlZQRsksAGfNZFg1HCn/d0t8B6         Z2aMQFNlCrQqlEduV8V0j6uIL0tvEQkeJkflz8ZPqMCF8n+d/XNjhb1KZoQAdBgz5pBe         5wSQcZVZ36jq0VmuhogXGHnJNoloEgnmJgxF8zHwV5ZkvHWeMyPPGmYtPB5zu+YI1vZe         UyDq0ReapPzsXNqH6tHctYc6QysLfUm0zv4V632BuLVR25Rbp7CL7lz9RPYjWOMQfhTM         zOAjvj6iYnz/jn27K3LI6ilms2pWXEG833p06H3hbUUsAhhtf6+OBypHaOqMo9nL2x9Y         JscA==",
      },
      {
        name: "ARC-Message-Signature",
        value:
          "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:content-transfer-encoding:mime-version:subject         :message-id:to:from:date:dkim-signature:dkim-signature;        bh=pEYpDXEA8yJ8bAhxJXjttBon0hf82bNca2vxi31/ido=;        fh=p6FPBSc3TAzPyaVo11/5vWtWgo26dK5DXF97+PJs36E=;        b=NJw8L6A3odfgxDm7ylZIU9Dsm+tse3FV3HTFwQxMuP6/qupdxAKYZfMgZY1Z4wT+Nh         Rv08rdgmV179xP0THEWxc8XBRQNjghBfWjqveeVOvVCSC0JfLqO4MxZOYu7d1rIEWS64         Ae4OG3pyBaYsWHw+GFlJIqaZAM9v2iwIqBrraNqUeCibiwuyklDOYEncOkmvyoqG0Odx         6/BCMf4Vkze2L8tBN4g8t3nq4zKdBwOrOd+tDGKSatUNGYtWAuS9KVzzTZur5YUaVSR9         pjDm9rrfExjeAWEEZc+LdvHiV5nu8jetczgfJWZyoOLK4t5/SC5Kwy2A4s+rhwsZtEaD         uvkA==",
      },
      {
        name: "ARC-Authentication-Results",
        value:
          'i=1; mx.google.com;       dkim=pass header.i=@sns.amazonaws.com header.s=rz7vk4jywqubb4z4msexjeruhp3xxmz7 header.b="cyxJ9C/Y";       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=BABdB3zB;       spf=pass (google.com: domain of 0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@amazonses.com designates 54.240.10.232 as permitted sender) smtp.mailfrom=0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@amazonses.com;       dmarc=pass (p=QUARANTINE sp=NONE dis=NONE) header.from=amazonaws.com',
      },
      {
        name: "Return-Path",
        value:
          "\u003c0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@amazonses.com\u003e",
      },
      {
        name: "Received",
        value:
          "from a10-232.smtp-out.amazonses.com (a10-232.smtp-out.amazonses.com. [54.240.10.232])        by mx.google.com with ESMTPS id h18-20020a0cf452000000b006471113a986si1299624qvm.323.2023.08.31.12.19.33        for \u003clydia.stepanek@gmail.com\u003e        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Thu, 31 Aug 2023 12:19:33 -0700 (PDT)",
      },
      {
        name: "Received-SPF",
        value:
          "pass (google.com: domain of 0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@amazonses.com designates 54.240.10.232 as permitted sender) client-ip=54.240.10.232;",
      },
      {
        name: "Authentication-Results",
        value:
          'mx.google.com;       dkim=pass header.i=@sns.amazonaws.com header.s=rz7vk4jywqubb4z4msexjeruhp3xxmz7 header.b="cyxJ9C/Y";       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=BABdB3zB;       spf=pass (google.com: domain of 0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@amazonses.com designates 54.240.10.232 as permitted sender) smtp.mailfrom=0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@amazonses.com;       dmarc=pass (p=QUARANTINE sp=NONE dis=NONE) header.from=amazonaws.com',
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=rz7vk4jywqubb4z4msexjeruhp3xxmz7; d=sns.amazonaws.com; t=1693509573; h=Date:From:To:Message-ID:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding; bh=Xz3OKTVlptb4Uzwwv6R+I/Vi6AEMSpNTN9lyIxDyT8k=; b=cyxJ9C/YEgCQfNFtdXGM3T+TNkO9L4rul0jy4r5g9Geaj/qoyNR6Mtla+AYjOLsa qgX8S8nvMgYAcQejQ+zhP0ckSOfDWZZMSN4S0LpflhY1iGOgGncQSxNlzdBc0nOuGIP wGUmwC8KfSEusiRllPFX1wlvH17CBQrZh8zDeCIA=",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1693509573; h=Date:From:To:Message-ID:Subject:MIME-Version:Content-Type:Content-Transfer-Encoding:Feedback-ID; bh=Xz3OKTVlptb4Uzwwv6R+I/Vi6AEMSpNTN9lyIxDyT8k=; b=BABdB3zBmSUwzrcl8sIW/KaRo3j7clVM9tSuztstMTidzQYKCbLQw6EYrdW6FO06 Oi94daSSmAESFhupQ81zBQwfXz6tq/+lpdP4kRE61vFylm6s6cMPsN6B3N+CZIE5wqe QcQ+xD/NzfDZ9eZOdhnhCZk1zvLSXMkwv2o8aRvw=",
      },
      {
        name: "Date",
        value: "Thu, 31 Aug 2023 19:19:32 +0000",
      },
      {
        name: "From",
        value: "AWS Notifications \u003cno-reply@sns.amazonaws.com\u003e",
      },
      {
        name: "To",
        value: "lydia.stepanek@gmail.com",
      },
      {
        name: "Message-ID",
        value:
          "\u003c0100018a4d09595f-aee63b5c-b53b-40d8-bc07-32bed20cba22-000000@email.amazonses.com\u003e",
      },
      {
        name: "Subject",
        value: "AWS Notification Message",
      },
      {
        name: "MIME-Version",
        value: "1.0",
      },
      {
        name: "Content-Type",
        value: "text/plain; charset=UTF-8",
      },
      {
        name: "Content-Transfer-Encoding",
        value: "7bit",
      },
      {
        name: "x-amz-sns-message-id",
        value: "1a07c30d-3ca3-5446-bba9-9e67d6a7f602",
      },
      {
        name: "x-amz-sns-subscription-arn",
        value:
          "arn:aws:sns:us-east-1:351019356657:SentEmail:fb81dd33-cc60-4c5f-8cef-2d5877ed2cc8",
      },
      {
        name: "Feedback-ID",
        value:
          "1.us-east-1.rLk2FYYR7ms1BvCiYXCIqXvY3U/J1vVW0G3YrYLy0pk=:AmazonSES",
      },
      {
        name: "X-SES-Outgoing",
        value: "2023.08.31-54.240.10.232",
      },
    ],
    body: {
      size: 1212,
      data: "eyJub3RpZmljYXRpb25UeXBlIjoiRGVsaXZlcnkiLCJtYWlsIjp7InRpbWVzdGFtcCI6IjIwMjMtMDgtMzFUMTk6MTk6MzIuMDI3WiIsInNvdXJjZSI6Ij0_VVRGLTg_UT9seWRpYT89IDxseWRpYUBpc3RoaXNwaGlzaHkuaW8-Iiwic291cmNlQXJuIjoiYXJuOmF3czpzZXM6dXMtZWFzdC0xOjM1MTAxOTM1NjY1NzppZGVudGl0eS9pc3RoaXNwaGlzaHkuaW8iLCJzb3VyY2VJcCI6IjU0LjIzOS45OC4zNiIsImNhbGxlcklkZW50aXR5IjoiYW1hem9uLXdvcmttYWlsLW1haWxpbmctYWdlbnQtdXMtZWFzdC0xIiwic2VuZGluZ0FjY291bnRJZCI6IjQyNzM3MzU4MTgxOSIsIm1lc3NhZ2VJZCI6IjAxMDAwMThhNGQwOTU1YmItZGRmMmE1MDQtOTY3OS00NWUyLTkxNzgtNGRiNDYwMDc5MjU1LTAwMDAwMCIsImRlc3RpbmF0aW9uIjpbImx5ZGlhLnN0ZXBhbmVrQGdtYWlsLmNvbSJdfSwiZGVsaXZlcnkiOnsidGltZXN0YW1wIjoiMjAyMy0wOC0zMVQxOToxOTozMi44NTJaIiwicHJvY2Vzc2luZ1RpbWVNaWxsaXMiOjgyNSwicmVjaXBpZW50cyI6WyJseWRpYS5zdGVwYW5la0BnbWFpbC5jb20iXSwic210cFJlc3BvbnNlIjoiMjUwIDIuMC4wIE9LICAxNjkzNTA5NTcyIGQ3LTIwMDIwYTA1NjIwYTI0MDcwMGIwMDc2ZWZhNmE3MDU2c2kxNDY0ODI5cWtuLjUyNyAtIGdzbXRwIiwicmVtb3RlTXRhSXAiOiIxNzIuMjUzLjEyMi4yNyIsInJlcG9ydGluZ01UQSI6ImExMS0zMi5zbXRwLW91dC5hbWF6b25zZXMuY29tIn19DQoNCi0tDQpJZiB5b3Ugd2lzaCB0byBzdG9wIHJlY2VpdmluZyBub3RpZmljYXRpb25zIGZyb20gdGhpcyB0b3BpYywgcGxlYXNlIGNsaWNrIG9yIHZpc2l0IHRoZSBsaW5rIGJlbG93IHRvIHVuc3Vic2NyaWJlOg0KaHR0cHM6Ly9zbnMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdW5zdWJzY3JpYmUuaHRtbD9TdWJzY3JpcHRpb25Bcm49YXJuOmF3czpzbnM6dXMtZWFzdC0xOjM1MTAxOTM1NjY1NzpTZW50RW1haWw6ZmI4MWRkMzMtY2M2MC00YzVmLThjZWYtMmQ1ODc3ZWQyY2M4JkVuZHBvaW50PWx5ZGlhLnN0ZXBhbmVrQGdtYWlsLmNvbQ0KDQpQbGVhc2UgZG8gbm90IHJlcGx5IGRpcmVjdGx5IHRvIHRoaXMgZW1haWwuIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3IgY29tbWVudHMgcmVnYXJkaW5nIHRoaXMgZW1haWwsIHBsZWFzZSBjb250YWN0IHVzIGF0IGh0dHBzOi8vYXdzLmFtYXpvbi5jb20vc3VwcG9ydA0K",
    },
  },
  sizeEstimate: 6307,
  historyId: "41525295",
  internalDate: "1693509572000",
};
