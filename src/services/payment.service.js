const { Payment, User } = require("../models");


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
    const payment = await Payment.find().populate("userId").populate("subscriptionId");
    return payment;
};

module.exports = {
    createPayment,
    getAllPayment,
};