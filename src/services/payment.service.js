const { Payment, User } = require("../models");
const cron = require('node-cron');

const createPayment = async (payload) => {
    // Find the user
    const userFind = await User.findOne({ _id: payload.userId });

    // Check if user exists
    if (!userFind) {
        throw new Error("User not found");
    }

    // Update user subscription details
    userFind.subscriptionId = payload.subscriptionId;
    userFind.subscriptionEndDate = payload.duration === "monthly"
        ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    userFind.isSubscribed = true;
    await userFind.save();

    // Create payment record
    const payment = await Payment.create(payload);

    return payment;
};

const getAllPayment = async () => {
    // First fetch all payments with populated user and subscription data
    const allPayments = await Payment.find()
        .populate("userId")
        .populate("subscriptionId");

    // Filter payments to only include those where the user is subscribed
    const subscribedPayments = allPayments.filter(payment => {
        // Check if userId exists and if the user is subscribed
        return payment.userId && payment.userId.isSubscribed === true;
    });

    return subscribedPayments;
};

cron.schedule('0 1 * * *', async () => {
    const userFind = await User.find({ isSubscribed: true });

    userFind.forEach(async (user) => {
        if (user.subscriptionEndDate < Date.now()) {
            user.isSubscribed = false;
            await user.save();
        }
    });

});


module.exports = {
    createPayment,
    getAllPayment,
};