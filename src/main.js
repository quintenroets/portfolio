import { createApp } from "vue";
import { createHead } from "unhead";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/assets/css/tailwind.css";

const head = createHead();
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(head);
app.use(router);
app.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GA_ID },
    deferScriptLoad: true,
  },
  router,
);
app.mount("#app");
