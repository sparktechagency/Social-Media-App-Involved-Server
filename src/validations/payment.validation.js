
const Joi = require("joi");

const createPayment = {
  body: Joi.object().keys({
    amount: Joi.number().required(),
    duration: Joi.string().required().valid("monthly", "yearly"),
    paymentStatus: Joi.string().optional().valid("pending", "success", "failed"),
    userId: Joi.string().required(),
    subscriptionId: Joi.string().required(),
  }),
};

module.exports = {
  createPayment,
};