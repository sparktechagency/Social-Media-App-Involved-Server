
const express = require("express");
const router = express.Router();
const { paymentController } = require("../../controllers");
const { paymentValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

router
    .post("/create", validate(paymentValidation.createPayment), paymentController.createPayment);

router
    .get("/all", auth("admin"),  paymentController.getAllPayment);

module.exports = router;