<template>
  <InfoCard :href="url">
    <div class="p-2">
      <div class="flex justify-between w-full">
        <ExternalLink
          :href="fullProjectUrl"
          class="flex items-center"
          :highlight="false"
        >
          <div
            class="image-wrapper w-6 aspect-1 bg-almost-white"
            v-if="contribution.projectLogoUrl"
            :class="
              contribution.project === 'Pytorch Lightning' ? 'mr-1' : 'mr-2.5'
            "
          >
            <img :src="logoUrl" alt="Project logo" />
          </div>
          <font-awesome-icon
            v-else
            class="w-7 h-7 mr-2.5"
            :icon="['fab', 'github']"
          />
          <div class="text-2xl font-bold hover:text-hover-blue">
            {{ contribution.project }}
          </div>
        </ExternalLink>
        <ExternalLink class="text-xl" :href="url">
          <font-awesome-icon
            class="w-5 h-5 text-dark hover:text-dark"
            :icon="['fab', 'github']"
          />
          #{{ contribution.number }}
        </ExternalLink>
      </div>

      <div class="text-lg font-bold my-2">
        {{ contribution.title }}
      </div>
      <div class="" v-if="contribution.problem">
        <span class="font-bold">Problem solved: </span>
        <span v-html="contribution.problem"></span>
      </div>
      <ul class="list-disc ml-4">
        <span class="flex" v-for="line in contribution.bullets" :key="line">
          <li>
            <span v-html="line"></span>
          </li>
        </span>
      </ul>
    </div>
  </InfoCard>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "@/components/externalLink.vue";
import InfoCard from "@/components/InfoCard.vue";

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
    url() {
      return this.fullProjectUrl + "/pull/" + this.contribution.number;
    },
    logoUrl() {
      return requireLogo("./" + this.contribution.projectLogoUrl);
    },
  },
  components: {
    FontAwesomeIcon,
    ExternalLink,
    InfoCard,
  },
};
</script>

<style scoped>
span >>> a {
  @apply text-blue;
}
span >>> a {
  @apply hover:text-hover-blue;
}
</style>
