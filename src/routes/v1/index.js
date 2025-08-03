const express = require("express");
const config = require("../../config/config");
const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const docsRoute = require("./docs.routes");
const eventRoute = require("./event.routes");
const albumRoute = require("./album.routes");
const subscriptionRoute = require("./subscription.routes");
const privacyPolicyRoute = require("./privacyPolicy.routes");
const termsConditionRoute = require("./termsCondition.routes");
const aboutUsRoute = require("./aboutUs.routes");
const paymentRoute = require("./payment.routes");
const notificationRoute = require("./notification.routes");


const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/events",
    route: eventRoute,
  },
  {
    path: "/albums",
    route: albumRoute,
  },
  {
    path: "/subscriptions",
    route: subscriptionRoute,
  },
  {
    path: "/payment",
    route: paymentRoute,
  },
  {
    path: "/privacy-policy",
    route: privacyPolicyRoute,
  },
  {
    path: "/terms-condition",
    route: termsConditionRoute,
  },
  {
    path: "/about-us",
    route: aboutUsRoute,
  },
  {
    path: "/notifications",
    route: notificationRoute,
  }
];

// routes available only in development mode goes here 
const devRoutes = [
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
