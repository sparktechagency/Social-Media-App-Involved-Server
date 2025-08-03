const mongoose = require("mongoose");

const termsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required"]
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("TermsConditions", termsSchema);
