<template>
  <InfoCard :href="fullProjectUrl">
    <div class="flex flex-col h-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center max-h-full">
          <font-awesome-icon class="w-8 h-8 mr-2.5" :icon="['fab', 'github']" />
          <ExternalLink :href="fullProjectUrl" :highlight-without-hover="false">
            <div class="text-2xl font-bold">
              {{ name ? name : url }}
            </div>
          </ExternalLink>
        </div>
        <div v-if="badges">
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
      <div class="flex-column content-center grow mb-6 text-md mt-1 text-left">
        <div>
          <slot></slot>
        </div>
        <div class="flex justify-center">
          <img
            :src="imageUrl"
            alt="Project image"
            v-if="imageUrl"
            class="rounded mx-2"
            :class="this.imageHeight"
          />
        </div>
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
    package: { type: Number },
    url: { type: String },
    image: { type: String },
    imageHeight: { type: String, default: "max-h-64" },
    description: { type: String },
    badges: { type: Boolean, default: false },
  },
  computed: {
    fullProjectUrl() {
      return "https://github.com/quintenroets/" + this.url;
    },
    packageName() {
      return this.package ? this.package : this.url;
    },
    imageUrl() {
      return this.image === undefined || this.image.includes("raw")
        ? this.image
        : requireImage("./" + this.image);
    },
  },
  components: {
    ExternalLink,
    FontAwesomeIcon,
    InfoCard,
  },
};
</script>
