const mongoose = require("mongoose");

let con = null;

const connectDB = async (url) => {
  if (con) return;
  try {
    if (typeof url !== "string") throw new Error("Invalid URL");

    con = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
