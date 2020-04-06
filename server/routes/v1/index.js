const express = require("express");
const translateRouter = require("./translate/index");

const router = express.Router();

router.use("/translate", translateRouter);

module.exports = router;
