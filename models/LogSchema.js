const mongoose = require("mongoose");

const LogSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: "OTHER",
      enum: ["INFO", "ERROR", "WARN", "SUCCESS", "OTHER"],
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Logs", LogSchema);
