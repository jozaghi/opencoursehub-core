const passwordHash = require("password-hash");

const hash = password => passwordHash.generate(password);

const verify = (password, hashedPassword) =>
  passwordHash.verify(password, hashedPassword);

module.exports = {
  hash,
  verify
};
