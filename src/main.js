import { createApp } from "vue";
import { createHead } from "unhead";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import "@/assets/css/tailwind.css";
import Vue3TouchEvents from "vue3-touch-events";

const head = createHead();
const app = createApp(App);
app.use(head);
app.use(router);
app.use(Vue3TouchEvents);
app.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GA_ID },
    deferScriptLoad: true,
  },
  router,
);
app.mount("#app");
