import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import Vue3TouchEvents from "vue3-touch-events";
import { createHead } from "@unhead/vue";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(Vue3TouchEvents);

if (import.meta.env.VITE_GA_ID) {
  import("vue-gtag").then(({ default: VueGtag }) => {
    app.use(
      VueGtag,
      {
        config: { id: import.meta.env.VITE_GA_ID },
        deferScriptLoad: true,
      },
      router,
    );
  });
}

app.mount("#app");
