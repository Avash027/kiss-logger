const connectDatabase = require("./config/connectDatabase");

let isProduction = false;

const initialize = async ({ production, url }) => {
  isProduction = production && true;

  if (production) await connectDatabase(url);
};

function getIsProduction() {
  return isProduction;
}

module.exports = {
  initialize,
  getIsProduction,
};
