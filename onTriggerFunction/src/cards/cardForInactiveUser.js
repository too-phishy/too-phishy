export const cardForInactiveUser = {
  sections: [
    {
      widgets: [
        {
          image: {
            imageUrl: "https://toophishy.com/gmail_logo.png",
            altText: `TooPhishy image`,
            onClick: {
              openLink: {
                url: "https://toophishy.com",
              },
            },
          },
        },
        {
          textParagraph: {
            text: "To get started, sign up for a Too Phishy account:",
          },
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
        },
      ],
      header: " ",
    },
  ],
};
