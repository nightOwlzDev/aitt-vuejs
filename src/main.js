import Vue from "vue";
import Apexcharts from "vue-apexcharts";
import Fragment from "vue-fragment";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./vee-validate";
import i18n from "./I18n";

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.component("apex-chart", Apexcharts);

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount("#app");
