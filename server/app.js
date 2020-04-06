require("dotenv").config();
const express = require("express");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: description of API with swagger
app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = app;
