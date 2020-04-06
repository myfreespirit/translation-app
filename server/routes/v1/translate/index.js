const express = require("express");
const { translateService } = require("../../../services/google-translate");

const router = express.Router();

/**
 *
 * Get supported languages
 *
 */
router.get("/languages", function(req, res) {
  translateService
    .getLanguages()
    .then(languages => {
      res.json({
        status: "OK",
        languages: languages
      });
    })
    .catch(error => {
      // TODO: handle errors generically on higher level
      console.log(error);
      res.json({
        status: "NOK",
        errors: { code: error.code, reason: error.errors }
      });
    });
});

/**
 *
 * Translate text into target language.
 *
 * @property {string} [text]    The source text to be translated.
 * @property {string} [target]  The target language for translation.
 *
 */
router.post("/text", function(req, res) {
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
      .then(translation => {
        res.json({
          status: "OK",
          original: req.body["text"],
          target: req.body["target"],
          translation: translation
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
