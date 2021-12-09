import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

Vue.use(VXETable);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
