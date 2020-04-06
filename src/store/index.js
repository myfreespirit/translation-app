import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfFailedTranslations: 0,
    numberOfTanslations: 0,
    supportedLanguages: [],
    targetLanguage: "fr", // TODO: request translation for multiple targets
    sourceText: "",  // Can be manipulated both by text-area and file-input
    translatedText: "",

    numberOfUploads: 0,
    numberOfDownloads: 0,
    numberOfSharedLinks: 0,
    numberOfActiveLinks: 0,
    sizeOfLongestSourceText: 0,
    loading: false
    // TODO: add popular languages stats
  },
  mutations: {
    UPDATE_LOADING(state, payload) {
      state.loading = payload;
    },
    UPDATE_SUPPORTED_LANGUAGES(state, payload) {
      state.supportedLanguages = payload;
    },
    UPDATE_TARGET_LANGUAGE(state, payload) {
      state.targetLanguage = payload;
    },
    UPDATE_SOURCE_TEXT(state, payload) {
      state.sourceText = payload.sourceText;
    },
    UPDATE_NUMBER_OF_FAILED_REQUESTS(state, payload) {
      state.numberOfFailedTranslations += payload.amount;
    },
    UPDATE_NUMBER_OF_TRANSLATIONS(state, payload) {
      state.numberOfTanslations += payload.amount;
    },
    UPDATE_TRANSLATED_TEXT(state, payload) {
      // TODO: translate all target languages
      state.translatedText = payload.translation;
    }
  },
  actions: {
    setTargetLanguage({ commit }, payload) {
      commit("UPDATE_TARGET_LANGUAGE", payload);
    },
    setSourceText({ commit }, payload) {
      commit("UPDATE_SOURCE_TEXT", payload);
    },
    async setSupportedLanguages({ commit }) {
      await axios
        .get("/api/v1/translate/languages")
        .then(response => response.data)
        .then(data => {
          if (data.status === "OK") {
            commit("UPDATE_SUPPORTED_LANGUAGES", data.languages);
          } else {
            console.log(data.errors);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async translate({ state, commit }, payload) {
      commit("UPDATE_LOADING", true);

      const params = {
        text: payload.sourceText,
        target: state.targetLanguage
      };
      await axios
        .post("/api/v1/translate/text", params)
        .then(response => {
          // const amount = params.target.length;
          if (response.data.status === "OK") {
            commit("UPDATE_NUMBER_OF_TRANSLATIONS", { amount: 1 });
            commit("UPDATE_TRANSLATED_TEXT", {
              target: params.target,
              translation: response.data.translation
            });
          } else {
            // TODO: determine whether all requested target languages failed or just some of them
            commit("UPDATE_NUMBER_OF_FAILED_REQUESTS", { amount: 1 });
          }
        })
        .catch(error => {
          console.log(error);
          // TODO: commit error - to visualize at frontend
        });

      commit("UPDATE_LOADING", false);
    }
  },
  getters: {
    getTargetText: state => {
      return state.translatedText || "Translation will go here"; // TODO: translate the placeholder text to requested target
    }
  }
});
