import express from "express";
import {google} from "googleapis";
import axios from "axios";
import asyncHandler from "express-async-handler";
import {OAuth2Client} from "google-auth-library";
import {processMessage} from "./src/processMessage.js";
import {cardForSubscribedUser} from "./src/cards/cardForSubscribedUser.js";
import {cardForInactiveUser} from "./src/cards/cardForInactiveUser.js";

const gmail = google.gmail({version: "v1"});
// Create and configure the app
const app = express();

// Trust GCPs front end to for hostname/port forwarding
app.set("trust proxy", true);
app.use(express.json());

// Initial route for the add-on
app.post(
    "/",
    asyncHandler(async (req, res) => {
        const baseUrl = `${req.protocol}://${req.hostname}${req.baseUrl}`;
        const pushCard = await renderPlugin(req.body, baseUrl);

        const renderAction = {
            action: {
                navigations: [
                    {
                        pushCard,
                    },
                ],
            },
        };
        res.json(renderAction);
    }),
);

// Initial route for the add-on
app.post(
    "/reportPhishing",
    asyncHandler(async (req, res) => {
        const baseUrl = `${req.protocol}://${req.hostname}${req.baseUrl}`;
        const pushCard = await renderPlugin(req.body, baseUrl);

        const renderAction = {
            action: {
                navigations: [
                    {
                        pushCard,
                    },
                ],
            },
        };
        res.json(renderAction);
    }),
);

async function renderPlugin(event, baseUrl) {
    const currentMessageId = event.gmail.messageId;
    const accessToken = event.authorizationEventObject.userOAuthToken;

    const tokenInfo = await new OAuth2Client().getTokenInfo(accessToken);
    const email = tokenInfo.email;
    axios
        .post(process.env.DATASTORE_ENDPOINT, {
            operation: "create",
            payload: {
                Item: {id: email},
                TableName: "too-phishy-active-users",
            },
        })
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            this.error = "Error";
            console.error(e);
        });

    const messageToken = event.gmail.accessToken;
    const auth = new OAuth2Client();
    auth.setCredentials({access_token: accessToken});

    const gmailResponse = await gmail.users.messages.get({
        id: currentMessageId,
        userId: "me",
        format: "full",
        auth,
        headers: {
            "X-Goog-Gmail-Access-Token": messageToken,
        },
    });
    const messageData = gmailResponse.data;

    const {headers, fullLinkUrls, domainNames, messageBodies, attachments} =
        await processMessage(gmail, auth, messageToken, messageData);

    return await cardForSubscribedUser(
        headers,
        fullLinkUrls,
        domainNames,
        messageBodies,
        attachments,
        messageData,
        baseUrl
    );
}

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
