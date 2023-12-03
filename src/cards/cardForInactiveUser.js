export const cardForInactiveUser = {
  sections: [
    {
      widgets: [
        {
          image: {
            imageUrl: "https://toophishy.com/images/gmail_logo.png",
          },
        },
        {
          textParagraph: {
            // "text": "To get started sign up for a Too Phishy account!"
            text: `You do not have a Too Phishy account. Please sign up for a 14-day free trial and then refresh to begin.`,
          },
          horizontalAlignment: "CENTER",
        },
        {
          buttonList: {
            buttons: [
              {
                text: "Sign up",
                color: {
                  red: 0.4,
                  blue: 0.227,
                  green: 0.717,
                },
                onClick: {
                  openLink: {
                    url: "https://toophishy.com",
                    openAs: "OVERLAY",
                    onClose: "RELOAD",
                  },
                },
              },
            ],
          },
          horizontalAlignment: "CENTER",
        },
      ],
      header: " ",
    },
  ],
};
