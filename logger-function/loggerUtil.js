const Log = require("../models/LogSchema");

const loggerUtil = async (text, type, isProduction, textColor) => {
  try {
    if (!text || typeof text !== "string")
      throw new Error("Error text must be a valid string");

    if (isProduction) {
      await Log.create({
        type,
        text,
      });
    } else {
      console.log(textColor(type), text);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loggerUtil;
