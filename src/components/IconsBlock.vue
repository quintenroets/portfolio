<template>
  <div class="flex flex-col items-start w-56">
    <div class="block mt-4" v-for="item in contactItems" :key="item.href">
      <component
        target="_blank"
        :href="item.href"
        :is="item.href ? 'a' : 'div'"
      >
        <font-awesome-icon :icon="item.icon" class="text-2xl w-8" />
        <span class="ml-2"> {{ item.text }} </span>
      </component>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
library.add(faLinkedin, faGithub, faGlobe, faMapMarkerAlt, faEnvelope);

export default {
  data() {
    const email = "qdr2104@columbia.edu";
    const username = "quintenroets";

    return {
      name: "Quinten Roets",
      contactItems: [
        {
          href: `mailto:${email}`,
          icon: ["fas", "envelope"],
          text: email,
        },
        {
          href: `https://www.linkedin.com/in/${username}`,
          icon: ["fab", "linkedin"],
          text: `in/${username}`,
        },
        {
          href: `https://www.github.com/${username}`,
          icon: ["fab", "github"],
          text: username,
        },
        {
          href: `https://www.${username}.com`,
          icon: ["fas", "globe"],
          text: `${username}.com`,
        },
        {
          icon: ["fas", "map-marker-alt"],
          text: "New York, USA",
        },
      ],
    };
  },
  components: { FontAwesomeIcon },
};
</script>

<style scoped>
a {
  @apply text-dark !important;
}
</style>
