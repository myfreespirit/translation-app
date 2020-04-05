const express = require("express");
const { translateService } = require("../../services/google-translate");

const router = express.Router();

router.post("/translate", function(req, res) {
  if (!req.body["target"]) {
    res.json({
      status: "NOK",
      errors: ["'target' parameter is not set"]
    });
  } else if (!req.body["text"]) {
    res.json({
      status: "NOK",
      errors: ["'text' parameter is not set"]
    });
  } else {
    translateService
      .translateText(req.body["text"], req.body["target"])
      .then(response => {
        res.json({
          status: "OK",
          original: req.body["text"],
          target: req.body["target"],
          translation: response
        });
      })
      .catch(error => {
        console.log(error);
        res.json({
          status: "NOK",
          errors: { code: error.code, reason: error.errors }
        });
      });
  }
});

module.exports = router;
