const { getIsProduction } = require("./initialize");
const loggerUtil = require("./logger-function/loggerUtil");
const {
  infoColor,
  errorColor,
  warnColor,
  successColor,
  otherColor,
} = require("./utils/color");

const logger = {
  info: (text) => loggerUtil(text, "INFO", getIsProduction(), infoColor),
  error: (text) => loggerUtil(text, "ERROR", getIsProduction(), errorColor),
  warn: (text) => loggerUtil(text, "WARN", getIsProduction(), warnColor),
  success: (text) =>
    loggerUtil(text, "SUCCESS", getIsProduction(), successColor),
  other: (text) => loggerUtil(text, "OTHER", getIsProduction(), otherColor),
};

module.exports = logger;
