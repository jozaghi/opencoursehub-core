require("module-alias/register");
const express = require("express");
const app = express();
const jsonParser = require("body-parser").json();
const errorHandler = require("./lib/middleware/error-handler");
const toCamelCase = require("./lib/middleware/to-camel-case");

app.use(jsonParser);
app.use(toCamelCase);

app.get("/", (req, res) => {
  res.send("it works fine");
});

app.use(errorHandler());
module.exports = async () => {
  return app;
};
