const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true, enum: ["monthly", "yearly"] },
        description: { type: String, required: true },
        features: { type: [String], required: true },
        amount: { type: Number, required: true },
        currency: { type: String, required: true },
        status: { type: String, required: true, default: "active", enum: ["active", "inactive"] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);