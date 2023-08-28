<template>
  <div class="flex flex-col items-start w-56">
    <a :href="'mailto:' + email" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-2xl w-8" />
        <span class="ml-2"> {{ email }} </span>
      </div>
    </a>

    <a :href="'https://www.linkedin.com/' + linkedin" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl w-8" />
        <span class="ml-2"> {{ linkedin }} </span>
      </div>
    </a>

    <a :href="'https://www.github.com/' + github" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fab', 'github']" class="text-2xl w-8" />
        <span class="ml-2"> {{ github }} </span>
      </div>
    </a>

    <a :href="'https://www.' + website" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fas', 'globe']" class="text-2xl w-8" />
        <span class="ml-2"> {{ website }} </span>
      </div>
    </a>

    <div class="block mt-4">
      <font-awesome-icon
        :icon="['fas', 'map-marker-alt']"
        class="text-2xl w-8"
      />
      <span class="ml-2"> {{ location }} </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
library.add(faLinkedin, faGithub, faGlobe, faMapMarkerAlt, faEnvelope);

export default {
  name: "IconsBlock",
  data() {
    return {
      name: "Quinten Roets",
      location: "New York, USA",
      email: "qdr2104@columbia.edu",
      linkedin: "in/quintenroets",
      github: "quintenroets",
      website: "quintenroets.com",
    };
  },
  components: { FontAwesomeIcon },
};
</script>

<style scoped>
a {
  color: #2c3e50 !important;
}
</style>
