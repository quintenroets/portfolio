<template>
  <div>
    <div class="flex justify-between w-[36rem]">
      <a
        target="_blank"
        rel="noopener"
        :href="fullProjectUrl"
        class="flex items-center"
      >
        <div
          class="image-wrapper w-9 aspect-1 bg-almost-white p-0 m-0"
          v-if="contribution.projectLogoUrl"
          :class="
            contribution.project === 'Pytorch Lightning' ? 'mr-1' : 'mr-2.5'
          "
        >
          <img :src="logoUrl" alt="Project logo" />
        </div>
        <font-awesome-icon
          v-else
          class="w-9 h-9 text-dark !important mr-2.5"
          :icon="['fab', 'github']"
        />
        <div class="text-xl text-dark">
          {{ contribution.project }}
        </div>
      </a>
      <a
        target="_blank"
        class="text-xl"
        rel="noopener"
        :href="this.fullProjectUrl + '/pull/' + contribution.number"
      >
        <font-awesome-icon
          class="w-5 h-5 text-dark !important"
          :icon="['fab', 'github']"
        />
        #{{ contribution.number }}
      </a>
    </div>

    <div class="text-lg font-bold my-3">
      {{ contribution.title }}
    </div>
    <ul class="list-disc ml-4">
      <span
        class="flex text-left"
        v-for="line in contribution.bullets"
        :key="line"
      >
        <li>
          <span v-html="line"></span>
        </li>
      </span>
    </ul>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
const requireLogo = require.context("@/assets/logos/", false, /\.webp$/);
export default {
  props: {
    contribution: {},
  },
  computed: {
    fullProjectUrl() {
      return "https://github.com/" + this.contribution.projectUrl;
    },
    logoUrl() {
      return requireLogo("./" + this.contribution.projectLogoUrl);
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
