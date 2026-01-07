export const cardForInactiveUser = {
  sections: [
    {
      widgets: [
        {
          image: {
            imageUrl: "https://toophishy.com/gmail_logo.png",
          },
        },
        {
          textParagraph: {
            text: "To get started, sign up for a Too Phishy account:",
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
