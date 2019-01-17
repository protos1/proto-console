import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "./assets/css/index.scss";

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  render: h => h(App)
}).$mount("#app");
