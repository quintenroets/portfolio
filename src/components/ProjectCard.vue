<template>
  <InfoCard :href="fullProjectUrl">
    <div class="flex flex-col h-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center max-h-full">
          <font-awesome-icon class="w-8 h-8 mr-2.5" :icon="['fab', 'github']" />
          <ExternalLink :href="fullProjectUrl" :highlight-without-hover="false">
            <div class="text-2xl font-bold">
              {{ project.name ? project.name : project.url }}
            </div>
          </ExternalLink>
        </div>
        <div v-if="project.badges">
          <ExternalLink
            :href="'https://badge.fury.io/py/' + packageName"
            class="flex"
          >
            <img
              :src="'https://badge.fury.io/py/' + packageName + '.svg'"
              alt="PyPI version"
            />
            <img
              :src="'https://img.shields.io/pypi/dm/' + packageName"
              alt="PyPI downloads"
            />
          </ExternalLink>
        </div>
      </div>
      <div class="my-2 text-center text-lg">
        <span v-html="project.description"></span>
      </div>
      <div class="flex justify-center grow">
        <img
          :src="imageUrl"
          alt="Project image"
          v-if="imageUrl"
          class="flex justify-center max-h-[22rem] rounded mx-2"
        />
      </div>
    </div>
  </InfoCard>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import InfoCard from "@/components/InfoCard.vue";
import ExternalLink from "@/components/externalLink.vue";
const requireImage = require.context(
  "@/assets/projects/",
  false,
  /\.(png|webp)$/,
);

library.add(faGithub);
export default {
  props: {
    project: {},
  },
  computed: {
    fullProjectUrl() {
      return "https://github.com/quintenroets/" + this.project.url;
    },
    packageName() {
      return this.project.package ? this.project.package : this.project.url;
    },
    imageUrl() {
      return this.project.image === undefined ||
        this.project.image.includes("raw")
        ? this.project.image
        : requireImage("./" + this.project.image);
    },
  },
  components: {
    ExternalLink,
    FontAwesomeIcon,
    InfoCard,
  },
};
</script>
