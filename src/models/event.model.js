const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        location: {
            type: String,
        },
        eventDate: {
            type: Date,
        },
        eventTime: {
            type: String, // Format: "11:20 AM"
        },
        category: {
            type: String,
            enum: [
                "Dining",
                "Entertainment",
                "Activities",
                "Catering",
                "Transportation",
                "Venues",
                "Map"
            ],
        },
        occurrenceType: {
            type: String,
            enum: [
                "Romantic",
                "Fast Date",
                "Fun",
                "Chill",
                "Active",
                "Party",
                "Sophisticated",
                "Outdoors",
                "Intimate",
            ],
        },
        occurrenceTime: {
            type: String,
            enum: ["One-time-Event", "Per-week-event", "Monthly-event", "Yearly-event"],
        },
        description: {
            type: String,
            maxlength: 2000,
        },
        image: {
            type: String, // URL or file path
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        isApproved: {
            type: Boolean,
            default: false,
        },
        isShow: {
            type: Boolean,
            default: false 
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
