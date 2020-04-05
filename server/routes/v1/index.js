const express = require("express");
const { translateService } = require("../../services/google-translate");

const router = express.Router();

router.get("/", function(req, res) {
  const text = "The texts to translate, e.g. Hello, world!";
  const target = "ru";

  translateService
    .translateText(text, target)
    .then(response => {
      res.json({
        message: "Greetings from the API v1 endpoint.",
        response: response
      });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
