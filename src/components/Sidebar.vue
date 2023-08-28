<template>
  <div
    class="flex flex-col"
    :class="{ rounded: ratio < 1 }"
    style="background-color: #ebeef3"
  >
    <div class="image-wrapper rounded-full w-48 aspect-1 mx-auto mt-10">
      <img
        src="../assets/profile.webp"
        class="rounded-full"
        alt="Profile picture"
      />
    </div>
    <h1 class="text-2xl text-center my-4 font-bold w-full">
      {{ name }}
    </h1>
    <IconsBlock class="mx-auto" />
  </div>
</template>

<script>
import IconsBlock from "@/components/IconsBlock.vue";
import { NAME } from "@/constants";
import { ref } from "vue";

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
  name: "SidebarComponent",
  components: { IconsBlock },
  data() {
    return {
      name: NAME,
      location: "New York, USA",
      email: "qdr2104@columbia.edu",
      linkedin: "in/quintenroets",
      github: "quintenroets",
    };
  },
  setup() {
    const ratio = ref(window.innerWidth / window.innerHeight);
    return {
      ratio,
    };
  },
};
</script>
