
const httpStatus = require("http-status");
const Subscription = require("../models/subscription.model");
const ApiError = require("../utils/ApiError");

const createSubscription = async (subscriptionBody) => {
    const subscription = await Subscription.create(subscriptionBody);
    return subscription;
};

const getAllSubscriptions = async () => {
    const subscriptions = await Subscription.find();
    return subscriptions;
};

const getSingleSubscription = async (id) => {
    const subscription = await Subscription.findById(id);
    if (!subscription) {
        throw new ApiError(httpStatus.NOT_FOUND, "Subscription not found");
    }
    return subscription;
};


const updateSubscription = async (id, subscriptionBody) => {
    const subscription = await Subscription.findById(id);
    if (!subscription) {
        throw new ApiError(httpStatus.NOT_FOUND, "Subscription not found");
    }
    Object.assign(subscription, subscriptionBody);
    await subscription.save();
    return subscription;
}
const deleteSubscription = async (id) => {
    const subscription = await Subscription.findByIdAndDelete(id);
    if (!subscription) {
        throw new ApiError(httpStatus.NOT_FOUND, "Subscription not found");
    }
    return subscription;
}

module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSingleSubscription,
    updateSubscription,
    deleteSubscription
};