// payment model here with this field paymentMethod, amount, paymentStatus , userId , subscriptionId

const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
        },
        duration: {
            type: String, // monthly or yearly
            required: true,
            default: "monthly"
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "success", "failed"],
            default: "pending",
        },
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            required: true,
        },
        subscriptionId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Subscription",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);