<template>
  <div>
    <div class="w-[36rem]" v-if="project">
      <a
        target="_blank"
        rel="noopener"
        :href="fullProjectUrl"
        class="flex items-center"
      >
        <font-awesome-icon
          class="w-6 h-6 text-dark hover:text-dark !important mr-1.5"
          :icon="['fab', 'github']"
        />
        <div class="text-xl">
          {{ project.name ? project.name : project.url }}
        </div>
      </a>
    </div>
    <div class="mt-2 text-left">
      <span v-html="project.description"></span>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
export default {
  props: {
    project: {},
  },
  computed: {
    fullProjectUrl() {
      return "https://github.com/quintenroets/" + this.project.url;
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
