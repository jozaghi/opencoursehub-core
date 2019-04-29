const toCamelCaseFormater = require("camelcase-keys");

const toCamelCase = (req, res, next) => {
  if (req.body) {
    req.body = toCamelCaseFormater(req.body);
  }
  next();
};

module.exports = toCamelCase;
