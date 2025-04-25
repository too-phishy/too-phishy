export const sectionsForAttachments = (attachments) => {
  return {
    sectionsForAttachmentsFlagged: attachments.length > 0,
    attachmentsSections: {
      header: "Contains attachments:",
      collapsible: true,
      widgets: [
        {
          decoratedText: {
            text: "Only open attachments unless you are 100% sure you know the sender is who they say they are.",
          },
        },
      ].concat(
        attachments.map((filename) => {
          return {
            decoratedText: {
              text: filename,
              startIcon: {
                iconUrl:
                  "https://toophishy.com/noun-attachment-2490420-FF001C.png",
              },
            },
          };
        })
      ),
    },
  };
};
