const chalk = require("chalk");

const infoColor = chalk.bgHex("#0000FF").bold;
const errorColor = chalk.bgHex("#FF0000").bold;
const warnColor = chalk.bgHex("#FFA500").bold;
const successColor = chalk.bgHex("#00FF00").bold.black;
const otherColor = chalk.bgHex("#FFFFFF").bold.black;

module.exports = {
  infoColor,
  errorColor,
  warnColor,
  successColor,
  otherColor,
};
