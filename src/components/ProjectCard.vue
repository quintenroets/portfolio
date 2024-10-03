<template>
  <div class="max-h-full">
    <div>
      <a
        target="_blank"
        rel="noopener"
        :href="fullProjectUrl"
        class="max-w-fit"
      >
        <div class="flex items-center">
          <font-awesome-icon
            class="w-8 h-8 text-dark hover:text-dark !important mr-2.5"
            :icon="['fab', 'github']"
          />
          <div class="text-3xl font-bold">
            {{ project.name ? project.name : project.url }}
          </div>
        </div>
        <!--
        <img
          :src="
            'https://github-readme-stats.vercel.app/api/pin/?username=quintenroets&repo=' +
            project.url
          "
          alt="Repository description"
        />
        -->
      </a>
    </div>

    <!--
    <div class="flex mt-2" v-html="readmeContent"></div>
    -->

    <div class="mt-2 text-left">
      <span v-html="project.description"></span>
    </div>
    <a
      :href="fullProjectUrl"
      target="_blank"
      rel="noopener"
      v-if="project.image"
    >
      <img :src="imageUrl" alt="Example image" class="h-96" />
    </a>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { marked } from "marked";
const requireImage = require.context("@/assets/projects/", false, /\.png$/);

library.add(faGithub);
export default {
  data: function () {
    return { readmeContent: {} };
  },
  props: {
    project: {},
  },
  computed: {
    fullProjectUrl() {
      return "https://github.com/quintenroets/" + this.project.url;
    },
    imageUrl() {
      return this.project.image.includes("raw")
        ? this.project.image
        : requireImage("./" + this.project.image);
    },
  },
  components: {
    FontAwesomeIcon,
  },
  watch: {
    project() {
      this.fetchShields();
    },
  },
  methods: {
    fetchShields() {
      this.readmeContent = "";
      const repo =
        this.project.name !== undefined ? this.project.name : this.project.url;
      const url = `https://api.github.com/repos/quintenroets/${repo}/contents/README.md`;
      const config = { headers: { Accept: "application/vnd.github.v3.raw" } };
      fetch(url, config).then((response) => {
        response.text().then((content) => {
          if (content.includes("![")) {
            let start = content.indexOf("\n");
            let end = content.indexOf("\n\n");
            let badges = content.substring(start, end);
            let readmeContent = marked(badges);
            start = readmeContent.indexOf("<p>");
            end = readmeContent.indexOf("</p>");
            this.readmeContent = readmeContent.substring(start + 3, end);
          }
        });
      });
    },
  },
  mounted() {
    this.fetchShields();
  },
};
</script>
