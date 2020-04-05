import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfTanslations: 0,
    numberOfUploads: 0,
    numberOfDownloads: 0,
    numberOfSharedLinks: 0,
    sizeOfLongestSourceText: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});
