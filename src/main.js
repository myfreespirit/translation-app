import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
// import {
//   MdButton,
//   MdCard,
//   MdField,
//   MdList,
//   MdToolbar
// } from "vue-material/dist/components";
import VueMaterial from 'vue-material';

// Vue.use(MdButton);
// Vue.use(MdCard);
// Vue.use(MdField);
// Vue.use(MdList);
// Vue.use(MdToolbar);
// TODO: following issue is still not resolved, hence using the workaround of importing the whole vue-material library
//        https://github.com/vuematerial/vue-material/issues/1974
Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
  created(){
    this.$store.dispatch('setSupportedLanguages');
  },
}).$mount("#app");
