export const sectionForSenderDomain = (
  senderDomain,
  senderDomainRegistrationDate
) => {
  const now = new Date();
  const diffDays = (now - senderDomainRegistrationDate) / (1000 * 60 * 60 * 24);
  const widgets = [
    {
      decoratedText: {
        text: ``,
        bottomLabel: `Sender domain ${senderDomain} is ${Math.floor(
          diffDays
        )} days old. One of the best ways to identify a phishing site is if its domain was registered in the past 21 days.`,
      },
    },
    {
      horizontalAlignment: "CENTER",
      buttonList: {
        buttons: [
          {
            text: "Learn More",
            onClick: {
              openLink: {
                url: "https://dnsrf.org/blog/phishing-attacks--newly-registered-domains-still-a-prominent-threat/index.html",
              },
            },
          },
        ],
      },
    },
    {
      decoratedText: {
        text: `Domain registration date:`,
        bottomLabel: senderDomainRegistrationDate,
      },
    },
  ];
  return {
    header: `Sender Domain is Likely Phishing Link: ${senderDomain}`,
    widgets: widgets,
    collapsible: true,
  };
};
