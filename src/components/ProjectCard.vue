<template>
  <InfoCard :href="fullProjectUrl">
    <div class="flex flex-col h-full pb-5">
      <div class="flex justify-between items-center">
        <div class="flex items-center max-h-full">
          <font-awesome-icon class="w-8 h-8 mr-2.5" :icon="['fab', 'github']" />
          <ExternalLink :href="fullProjectUrl" :highlight-without-hover="false">
            <div class="text-2xl font-bold">
              {{ name ? name : url }}
            </div>
          </ExternalLink>
        </div>
        <BadgesBlock :badges="badges" :package-name="packageName" />
      </div>
      <div class="text-lg mt-1" v-if="title">{{ title }}</div>
      <div class="text-m">
        <slot></slot>
      </div>
      <div class="flex items-center grow">
        <div class="ml-4" v-if="code">
          <br />
          <pre class="text-sm" v-html="renderedCode"></pre>
        </div>
        <div class="flex justify-center w-full" v-if="imageUrl">
          <img
            :src="imageUrl"
            alt="Project image"
            class="rounded bg-sidebargray"
            :class="imageHeight"
          />
        </div>
      </div>
    </div>
  </InfoCard>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BadgesBlock from "@/components/BadgesBlock.vue";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import InfoCard from "@/components/InfoCard.vue";
import ExternalLink from "@/components/externalLink.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "prismjs/components/prism-python";

const projectImages = import.meta.glob("@/assets/projects/*.{png,webp}", {
  eager: true,
  import: "default",
});

library.add(faGithub);
export default {
  props: {
    package: { type: String },
    url: { type: String },
    title: { type: String },
    code: { type: String },
    image: { type: String },
    imageHeight: { type: String, default: "max-h-64" },
    description: { type: String },
    badges: { type: Boolean, default: false },
  },
  computed: {
    fullProjectUrl() {
      return "https://github.com/quintenroets/" + this.url;
    },
    imageUrl() {
      if (this.image === undefined || this.image.includes("raw")) {
        return this.image;
      }
      const path = `/src/assets/projects/${this.image}`;
      return projectImages[path] || "";
    },
    packageName() {
      return this.package ? this.package : this.url;
    },
    renderedCode() {
      return Prism.highlight(this.code, Prism.languages.python, "python");
    },
  },
  components: {
    BadgesBlock,
    ExternalLink,
    FontAwesomeIcon,
    InfoCard,
  },
};
</script>
