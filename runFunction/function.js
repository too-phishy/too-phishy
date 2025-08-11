exports.loadHomePage = function addonsHomePage(req, res) {
  res.send(createAction());
};

/** Creates a card with two widgets. */
function createAction() {
  return {
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
                      altText: `TooPhishy image`,
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
                      text: "Get started by opening an email.",
                      wrapText: true,
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
}
