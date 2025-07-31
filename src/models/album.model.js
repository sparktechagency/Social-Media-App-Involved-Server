// this is album makeing model
const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        events: {
            type: [Schema.Types.ObjectId],
            ref: "Event",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = model("Album", albumSchema);