import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  MdButton,
  MdCard,
  MdField,
  MdList,
  MdToolbar
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdList);
Vue.use(MdToolbar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
