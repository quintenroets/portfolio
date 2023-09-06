<template>
  <div class="mb-6">
    <a :href="info.url">
      <div class="flex items-center mb-4">
        <div
          class="image-wrapper w-9 aspect-1 bg-background-white"
          :class="info.project === 'Pytorch Lightning' ? 'mr-1' : 'mr-2'"
        >
          <img :src="logoUrl" alt="Project logo" />
        </div>
        <div
          class="flex flex-col justify-center font-bold text-xl text-dark !important"
        >
          {{ info.project }}
        </div>
      </div>
    </a>

    <div>
      <div
        class="m-2 ml-1 mr-0 mb-4"
        v-for="(item, index) in info.contributions"
        :key="index"
      >
        <a
          class="flex items-center mb-2 max-w-fit"
          rel="noopener"
          target="_blank"
          :href="info.url + 'pull/' + item[0]"
        >
          <font-awesome-icon
            class="w-6 h-6 mr-2 text-dark !important"
            :icon="['fab', 'github']"
          />
          <div>#{{ item[0] }}</div>
        </a>
        <div>
          <ul class="list-disc list-inside">
            <span v-for="(item, index) in item[1]" :key="index">
              <span class="flex">
                <li class="w-4 ml-2"></li>
                <span>
                  {{ item }}
                </span>
              </span>
            </span>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0 !important;
  font-size: 14px !important;
}
</style>
<script>
const requireLogo = require.context("@/assets/logos/", false, /\.webp$/);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

export default {
  props: {
    info: {},
  },
  computed: {
    logoUrl() {
      return requireLogo("./" + this.info.logo);
    },
  },
  components: { FontAwesomeIcon },
};
</script>
