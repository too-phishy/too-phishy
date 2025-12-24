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
                      imageUrl: "https://www.toophishy.com/gmail_logo.png",
                      altText: "MacMedics",
                      onClick: {
                        openLink: {
                          url: "https://www.macmedics.ca/security",
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
