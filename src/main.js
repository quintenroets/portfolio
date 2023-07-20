import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faGithub, faMapMarkerAlt, faEnvelope); // add the location symbol to the library

import "@/assets/css/tailwind.css";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
