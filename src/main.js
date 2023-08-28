import { createApp } from "vue";
import { createHead } from "unhead";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub, faGlobe, faMapMarkerAlt, faEnvelope); // add the location symbol to the library

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
