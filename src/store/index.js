import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfFailedTranslations: 0,
    numberOfTanslations: 0,
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
    async translate({ commit }, payload) {
      commit("UPDATE_LOADING", true);

      const params = {
        text: payload.sourceText,
        target: payload.targetLanguages[0] // TODO: request translation of all targets
      };
      await axios
        .post("/api/v1/translate", params)
        .then(response => {
          const amount = payload.targetLanguages.length;
          if (response.data.status === "OK") {
            commit("UPDATE_NUMBER_OF_TRANSLATIONS", { amount: amount });
            commit("UPDATE_TRANSLATED_TEXT", {
              target: payload.targetLanguages[0],
              translation: response.data.translation
            });
          } else {
            // TODO: determine whether all requested target languages failed or just some of them
            commit("UPDATE_NUMBER_OF_FAILED_REQUESTS", { amount: amount });
          }
        })
        .catch(error => {
          console.log(error);
        });

      commit("UPDATE_LOADING", false);
    }
  },
  getters: {
    getTargetText: state => {
      return state.translatedText || "Translation";  // TODO: translate the placeholder text to requested target
    }
  }
});
