import express from "express";
import { google } from "googleapis";
import axios from "axios";
import Stripe from "stripe";
import asyncHandler from "express-async-handler";
import { OAuth2Client } from "google-auth-library";
import { processMessage } from "./src/processMessage.js";
import { cardForSubscribedUser } from "./src/cards/cardForSubscribedUser.js";
import { cardForInactiveUser } from "./src/cards/cardForInactiveUser.js";

const gmail = google.gmail({ version: "v1" });
// Create and configure the app
const app = express();

// Trust GCPs front end to for hostname/port forwarding
app.set("trust proxy", true);
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: "toophishy-stripe",
    version: "0.0.1",
  },
});

const getPrice = async () => {
  const prices = await stripe.prices.list({
    active: "true",
    lookup_keys: ["too-phishy-monthly"],
    expand: ["data.product"],
  });
  return prices.data[0];
};

export const hasActiveSubscription = async (email) => {
  const price = getPrice();
  const customers = await stripe.customers.list({
    email: email,
  });
  for await (const customer of customers.data) {
    const activeSubscriptionsForCustomer = await stripe.subscriptions.list({
      customer: customer.id,
      price: price.id,
      status: "active",
      limit: 1,
    });
    const trialingSubscriptionsForCustomer = await stripe.subscriptions.list({
      customer: customer.id,
      price: price.id,
      status: "trialing",
      limit: 1,
    });
    if (
      activeSubscriptionsForCustomer.data.length > 0 ||
      trialingSubscriptionsForCustomer.data.length > 0
    ) {
      return true;
    }
  }
  return false;
};

// Initial route for the add-on
app.post(
  "/",
  asyncHandler(async (req, res) => {
    const currentMessageId = req.body.gmail.messageId;
    const event = req.body;
    const accessToken = event.authorizationEventObject.userOAuthToken;

    const tokenInfo = await new OAuth2Client().getTokenInfo(accessToken);
    const email = tokenInfo.email;

    const activeSubscription = await hasActiveSubscription(email);

    axios
      .post(process.env.DATASTORE_ENDPOINT, {
        operation: "create",
        payload: {
          Item: { id: email },
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
    auth.setCredentials({ access_token: accessToken });

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

    const { headers, fullLinkURIs, messageBodies, attachments } =
      await processMessage(messageData);

    const pushCard = activeSubscription
      ? await cardForSubscribedUser(
          headers,
          fullLinkURIs,
          messageBodies,
          attachments,
          messageData
        )
      : cardForInactiveUser;
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
  })
);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
