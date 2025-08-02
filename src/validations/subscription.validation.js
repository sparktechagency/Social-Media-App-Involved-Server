const Joi = require("joi");

const createSubscription = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    type: Joi.string().required().valid("monthly", "yearly"),
    description: Joi.string().required(),
    features: Joi.array().items(Joi.string()).required().min(1),
    amount: Joi.number().required(),
    currency: Joi.string().required(),
    status: Joi.string().optional().valid("active", "inactive"),
  }),
};

module.exports = {
  createSubscription,
};