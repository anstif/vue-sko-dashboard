import Vue from "vue";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import axios from "axios";
import App from "./App.vue";

Vue.use(BootstrapVue);

window.axios = axios;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
