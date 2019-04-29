const config = require("../../../config");
const jwt = require("jsonwebtoken");

const secret = config.secret;
const oneHour = () => Math.floor(Date.now() / 1000) + 60 * 60;

const sign = payload =>
  jwt.sign(
    {
      exp: oneHour(),
      data: payload
    },
    secret
  );

const verify = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });

module.exports = {
  sign,
  verify
};
