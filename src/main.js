import Vue from "vue";
import Apexcharts from "vue-apexcharts";
import Fragment from "vue-fragment";

import App from "./App.vue";
import router from "./router";
import "./vee-validate";

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.component("apex-chart", Apexcharts);

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
