export const email_with_s3_and_azure_phishing_links = {
  id: "18bee550f5c88764",
  threadId: "18bee550f5c88764",
  labelIds: ["CATEGORY_PERSONAL", "INBOX"],
  snippet: "hi azure",
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
          "by 2002:ab0:661a:0:b0:7ab:a90f:eacd with SMTP id r26csp93477uam;        Mon, 20 Nov 2023 12:03:53 -0800 (PST)",
      },
      {
        name: "X-Google-Smtp-Source",
        value:
          "AGHT+IFeeEeE5jO0f5SHpcoJOMXhjBKl9VBieb/2g1wwU0tWyinmyQreFZe2tj+1ptkPX+2ZZ/iG",
      },
      {
        name: "X-Received",
        value:
          "by 2002:a67:f249:0:b0:45f:71fe:861c with SMTP id y9-20020a67f249000000b0045f71fe861cmr6816407vsm.9.1700510633608;        Mon, 20 Nov 2023 12:03:53 -0800 (PST)",
      },
      {
        name: "ARC-Seal",
        value:
          "i=1; a=rsa-sha256; t=1700510633; cv=none;        d=google.com; s=arc-20160816;        b=yt4EjmbVdQYIw1Fr3jqneQzLHgNoewKrW+WMkxiZV+9MD1Kp46y2HnjXg5JtMS6/uq         JCXenk+lvZJ/WWaDYEfrpO1OWnTi6+vbPqtV3i6jSwEDZbV/fBBCj3EhMYv+EV4eHAiF         tJYMBSgu8Jpg0i8Eq8YCk7g/kYWx07qQtysELoeYBrPYgAlf5PLpXby16mO7rPkZZvGF         xfqAjtwWZo6843OuAPHiVkBE0fC9KvY624Z5AOwSO7Re3RQTYVprACqEvcWo8aVyBcQk         +1nX1Fk3o9jVyh1f/IY6e9NprmkICSF9YqBiR8ZaAZLLPhbc8Om+YHV335pmFEOSgSJJ         Mydg==",
      },
      {
        name: "ARC-Message-Signature",
        value:
          "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=references:mime-version:subject:message-id:to:from:date         :dkim-signature;        bh=jzJpytXD8VwMfkGNFW54bEEvYsueVOO+p9tsMZ16CDY=;        fh=Hj46ZdyldYGRR8Bq7YoBL3oUNg9kP4imx5pp/IepDnM=;        b=F0qj+5B7Dya/bmBpv4w07+/Lo51CF1i5MMZgPj4Nt7VteMr7XA/K6+UqALuxvGxrZ6         y+VNGupnPl6MJ4WcT9feUGqruU4E01tBrsGyb+XxVyUZuM5rhaFJpkFi6LdnG3IIGSK1         fBUW+6sXKeOx8vnqvU3pfQXew/xkqm7XWFUtPUmZ3hGfwKJfRUJBurgLmX4fdyHKPjJW         WKGPWtMMNYE6d3wfM2KOjFJQK1Hl/UhNJd8id1xXVMqjYECY+EgZgKWKFEhUJ2BYW8vf         UvncqOr9cGaJ4dMeVxHNLn6pW+K+knxbjLTXjZTj1p7bwcuJqTmviw5pL3+/agdwYzA0         6DmA==",
      },
      {
        name: "ARC-Authentication-Results",
        value:
          "i=1; mx.google.com;       dkim=pass header.i=@yahoo.com header.s=s2048 header.b=HMVd5MvM;       spf=pass (google.com: domain of lyddieuh@yahoo.com designates 66.163.191.205 as permitted sender) smtp.mailfrom=lyddieuh@yahoo.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=yahoo.com",
      },
      {
        name: "Return-Path",
        value: "\u003clyddieuh@yahoo.com\u003e",
      },
      {
        name: "Received",
        value:
          "from sonic312-24.consmr.mail.ne1.yahoo.com (sonic312-24.consmr.mail.ne1.yahoo.com. [66.163.191.205])        by mx.google.com with ESMTPS id d15-20020a67c10f000000b0045286708fcdsi1826643vsj.45.2023.11.20.12.03.53        for \u003clydia.stepanek@gmail.com\u003e        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);        Mon, 20 Nov 2023 12:03:53 -0800 (PST)",
      },
      {
        name: "Received-SPF",
        value:
          "pass (google.com: domain of lyddieuh@yahoo.com designates 66.163.191.205 as permitted sender) client-ip=66.163.191.205;",
      },
      {
        name: "Authentication-Results",
        value:
          "mx.google.com;       dkim=pass header.i=@yahoo.com header.s=s2048 header.b=HMVd5MvM;       spf=pass (google.com: domain of lyddieuh@yahoo.com designates 66.163.191.205 as permitted sender) smtp.mailfrom=lyddieuh@yahoo.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=yahoo.com",
      },
      {
        name: "DKIM-Signature",
        value:
          "v=1; a=rsa-sha256; c=relaxed/relaxed; d=yahoo.com; s=s2048; t=1700510633; bh=jzJpytXD8VwMfkGNFW54bEEvYsueVOO+p9tsMZ16CDY=; h=Date:From:To:Subject:References:From:Subject:Reply-To; b=HMVd5MvMNNbxrxsbF+fiWNv2h/WgXBkRER3zRPR31fT/YV+6rId+QqnUIXw5XJ0W6sEEBgmL5CakFh0oEZyB3NMbbSDgDTqJLBOLQsM4cJtxAhAMlWZYMx/76mVYeyKA1VwkqetESvfOTkiD9a+OEQ5YPXCxKvpl6QjYFI0T5swFVijtnAMllLZmSCzNEdArP0tOxoEIfQOQaFmqaWQSbR1HtPrcVrM96SOHAlt5RiJft3WwuiQ55m7NCBnRpB8dOGepJBOZszViMjRnQh8JOw8nZ3mwfZWxkRifEGUicJb0LdCCfMCcnFbefQ+7H8Xx3NVUI64n2GYnFrQQ5j6lTg==",
      },
      {
        name: "X-SONIC-DKIM-SIGN",
        value:
          "v=1; a=rsa-sha256; c=relaxed/relaxed; d=yahoo.com; s=s2048; t=1700510633; bh=MwE8YY2Fvlk85cWXTZslj8wY7KGo0QxoL/3nVaFqEV0=; h=X-Sonic-MF:Date:From:To:Subject:From:Subject; b=L3Fh/+mj+2pNGvGdFYN7aqRRKWkl0lByNf9WpdpmXemPc+X6puVfnWiys1ENVE2GWSDe7gPSVSh/hg5erBr6o8m84rfx0fqgdCBYpfWsb/sC0j7+dmKPq8UBztFQctgIOQTFB+3CenUvvT8HNr4WllX+unGrTnJKciTejnn8aqC98eVszzay3L5adzjtFTyVqnNIRqv19dnDN/UMCc122H1drmhURN0+heMusJ6Ep4DQa7vRvF0niwk9ly7RRgbnY4/7BtYFDYaKBxO2+HziQBOtS1DqUebS9E/foJoaRFP9fkFjDOTBcHBcAuEdw6Caq78lR3sYxSz3ZW1mxq/4OA==",
      },
      {
        name: "X-YMail-OSG",
        value:
          "86_DNdUVM1mdLUjFG4yladCdwVmOoNN1sdq31B8JX3nP6mkak_HCIifgWIYQzxG YfJQVvcxPX4B5UAsmWYmd9aV4.1V57XrsZdym9RRUW81rB7Jal0fuT4eZzN15iAuYMBoWSz8_VjF Ozky1zEgU.UdpcbFHY6UQwHGCRIyDhTvHmCRbTHIddb2isY6wUIYTKUXI7HmR30zuzEqNerQHFWp 1sUVeBHXt.zwNidPR6RQReHIqHbOCs_h63fYN1heWsBdlnGBMYJb6iGvfiFRyTxMDPVevOo3Klzy zDkd7SJzf5ILrT_2K80xt_9kuUUH.1nAqOxaXepcjYo4oNKKAi_KtKUN.ktwfqREnjEOLmPKZITl NA0s3ZAZF7Up263JKzqDmqujfVLwN4.rgUi7X7ek5bgZELRvY4bn8oM2.pX5YY3yFeuO08pRDqbE O7gV2aMWdkOjjRQsuOFCGIAy9Wy9De2FpeM2WkYZsR4UvgMVz23LuPEMy1XfxmmKWJj5Caekc8SL Uy4dKlGb75sdMhA_nJesH8SGl29Vo1M_ckDYUewl77hPs1HnoF.GF_JGM5tiMODdJTmAa7AOVw7w 80ChgmT2n3I7RL.a1m2X0Ke8yv5Jqa4jh4MIpttkSNVIoRmZaZQBsax1CTWtyDsUKZu0S1TE7ZfY 2Qxz2O6a.FbA9hmmVRvNQ5Wrsbk9JbBic5AcEToRLW_1po_AB7XbLC3txrWhDbcTe9F5cM..bCYy JnGwHsOqT__FWBZxA5vNXeaSptURQxM1YA1RoraJHzvCRA.ZGoShHy0BR9ZP6Dxg6o6CmRxZiTjg M_SXlrK0tZ4UDYX5mUU9kcD93Zt2FW_CGoINLaBGINjRSNqXdMZ6kNxGKp6S14SuBqrqpCAVl03a 8.wC6FY0P82cbtihHvIOaGeVdfYxT702onnnTo32BCNDkqrxMN5TKT8AupIuqPMfcwSCKVRu9riU z4TeKKjZQrjnWVyWCr4QR8HeZIUJ9qki_XyZwCiloDFhxb7i_pKoX6jaPA6B.fxwdkmBCyX5YefB GnGB9fdCdseAZDu70bw0N_qHUYL1ZG0VPr45zaC5_23kvdAi1qLAZT_mcc7LfRyuJ_jIgFt6nZz6 nylrjP7ZBi.mMB7LXKf0_f9fkQEIkgQC93HugURojIaoDLcY8.lfO1_imw3xJJkv1FSUbWvPYB8T H6n0_zvVP_GayVHBLOoDUl0aaf4pLinriE8qDkqBzewzkwC1dQIdNUz_WaomJIaXhrbvhg8Q0VrZ Vfb5o.TM8G7J8sVP1yiKmWPH.cBF8EFUPYS4wr3BLPzHvMO7rrsa1zqNgQMhwJoxFD7Rrag6dtaU raVah4WJyqW_nLevctabGOhcE4JEMrAcx9UmFCOYReSSBQR5exYBPW.4RjXMEcsVNbLqE8ZdvGdV huoEhc0NYpaGbAe_9V94w6FhKU1SC_DoexnjLdsccZpwraNATCSb.gPezKjiQDQ.XzNmsEAD9xaG Fv4wwvnGOo6HTWcUulp2Ia5B3CcggSAvs4LUA6vdZbypDHyJW3_lqgGu3Ctxddc6Md_hK9r6D77b VLOSG7soxC6Hrdw7erymPAZrDU4jrX8x6sGgvoEvH544z7Q3YLT8TOFhODn5efbi_iCtl2Sv_ze4 qY1Ud0.c0fneTw1OjkPaLR2nDxQdS2WfGlXxL6p5.3WtrBU5XRVnFMj8JWL7K55NMrtsurDpRYZQ EWKTnsxzAS6Unbl2GfkFAQ1_MF7lEaLJ5fzxlifXFCttQ1BQgWHfbnWWvyF6OxO_fweZGaagmZSe gi38BvwmGrmLUJrEIb1LpW5HsT9YRvWVPDPiSK4ACtD0gaNPYV3pXrGTrb9FFzbd3SxQI0Zqw1ko nUBu.FwnhRRjfA5dYEWjQ5gTKUqhlHuXoyHXPM_e.O11l5hmXK5Xhoe5BXO.eOoRUKmxAIQ_BW73 ub8JM1zA4KRo760NV4YKuNXH4gZkUTimS.dtTEWA6EUur.DujfGCPsuLugoa_XXf_ddZoDIEChTy XeyMnf3mpfy1UygbNZnPvmd5X93hwmYPvLNsrEMRlAXp.DZBAsh5_uAdMkap6oWFFMK3lJVYgoq2 66KoJdcFBMzY9Aj6LT7vHIlQatdjElFQ.3siPnz0vzzqglTCkkd4HT9BDApKq9yWQDTlYNGopodc UVhMbyDoAsltwskWyApsrNHbuyrIuj9drUUw9ZkkeovCjjRA2bfArM4Vxjc9RuoqSgIIIOQ0Hdf8 PrNSxQvn86fSfv_xHQfGqgqex5qJrHw--",
      },
      {
        name: "X-Sonic-MF",
        value: "\u003clyddieuh@yahoo.com\u003e",
      },
      {
        name: "X-Sonic-ID",
        value: "0419c28a-9322-4e6e-a941-fe0db7ab40a7",
      },
      {
        name: "Received",
        value:
          "from sonic.gate.mail.ne1.yahoo.com by sonic312.consmr.mail.ne1.yahoo.com with HTTP; Mon, 20 Nov 2023 20:03:53 +0000",
      },
      {
        name: "Date",
        value: "Mon, 20 Nov 2023 20:03:48 +0000 (UTC)",
      },
      {
        name: "From",
        value: "\u003clyddieuh@tranco-list.eu\u003e",
      },
      {
        name: "To",
        value:
          '"lydia.stepanek@gmail.com" \u003clydia.stepanek@gmail.com\u003e',
      },
      {
        name: "Message-ID",
        value: "\u003c1364399946.5352953.1700510628126@mail.yahoo.com\u003e",
      },
      {
        name: "Subject",
        value: "aws phishy link",
      },
      {
        name: "MIME-Version",
        value: "1.0",
      },
      {
        name: "Content-Type",
        value:
          'multipart/alternative; boundary="----=_Part_5352952_2115633260.1700510628125"',
      },
      {
        name: "References",
        value:
          "\u003c1364399946.5352953.1700510628126.ref@mail.yahoo.com\u003e",
      },
      {
        name: "X-Mailer",
        value: "WebService/1.1.21896 YMailNorrin",
      },
      {
        name: "Content-Length",
        value: "666",
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
            value: "text/plain; charset=UTF-8",
          },
          {
            name: "Content-Transfer-Encoding",
            value: "7bit",
          },
        ],
        body: {
          size: 9,
          data: "aGkNCmF6dXJl",
        },
      },
      {
        partId: "1",
        mimeType: "text/html",
        filename: "",
        headers: [
          {
            name: "Content-Type",
            value: "text/html; charset=UTF-8",
          },
          {
            name: "Content-Transfer-Encoding",
            value: "7bit",
          },
        ],
        body: {
          size: 371,
          data: "PGh0bWw-PGhlYWQ-PC9oZWFkPjxib2R5PjxkaXYgY2xhc3M9InlhaG9vLXN0eWxlLXdyYXAiIHN0eWxlPSJmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDsiPjxkaXYgZGlyPSJsdHIiIGRhdGEtc2V0ZGlyPSJmYWxzZSI-PGEgaHJlZj0iaHR0cDovL3MzLmFtYXpvbmF3cy5jb20iPmhpPC9hPjwvZGl2PjxkaXYgZGlyPSJsdHIiIGRhdGEtc2V0ZGlyPSJmYWxzZSI-PGJyPjwvZGl2PjxkaXYgZGlyPSJsdHIiIGRhdGEtc2V0ZGlyPSJmYWxzZSI-PGEgaHJlZj0iaHR0cDovL2Jsb2IuY29yZS53aW5kb3dzLm5ldCI-YXp1cmU8L2E-PC9kaXY-PC9kaXY-PC9ib2R5PjwvaHRtbD4=",
        },
      },
    ],
  },
  sizeEstimate: 7727,
  historyId: "42722379",
  internalDate: "1700510628000",
};
