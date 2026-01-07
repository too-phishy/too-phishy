export const cardForUnauthorizedUser = {
  action: {
    navigations: [
      {
        pushCard: {
          sections: [
            {
              widgets: [
                {
                  image: {
                    imageUrl: "https://toophishy.com/gmail_logo.png",
                    altText: "TooPhishy image",
                    onClick: {
                      openLink: {
                        url: "https://toophishy.com",
                      },
                    },
                  },
                },
              ],
            },
            {
              widgets: [
                {
                  decoratedText: {
                    text: `Too Phishy needs permission to scan this email. Please "delete all connections" to Too Phishy in your account settings, then come back here to grant permissions.`,
                    wrapText: true,
                  },
                },
                {
                  decoratedText: {
                    text: "",
                    wrapText: true,
                    button: {
                      text: "Google Account",
                      onClick: {
                        openLink: {
                          url: "https://myaccount.google.com/connections",
                        },
                      },
                      color: {
                        red: 0.4,
                        blue: 0.227,
                        green: 0.717,
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
