require("dotenv").config();
const express = require("express");
const history = require("connect-history-api-fallback");
const path = require("path");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(history());
  app.use(express.static(path.resolve("dist")));
}

// TODO: description of API with swagger
app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = app;
