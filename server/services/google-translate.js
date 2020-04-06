const { Translate } = require("@google-cloud/translate").v2;

class TranslateService {
  constructor() {
    const options = {
      key: process.env.API_KEY_GOOGLE_TRANSLATE
    };

    this.googleTranslateService = new Translate(options);
  }

  async translateText(text, target) {
    let translation = await this.googleTranslateService.translate(text, target);
    translation = Array.isArray(translation) ? translation : [translation];

    return translation[0];
  }

  async getLanguages() {
    // Lists available translation language with their names in English (the default).
    const [languages] = await this.googleTranslateService.getLanguages();
    return languages;
  }
}

module.exports.translateService = new TranslateService();
