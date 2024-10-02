<template>
  <div>
    <div>
      <a
        target="_blank"
        rel="noopener"
        :href="fullProjectUrl"
        class="flex items-center max-w-fit"
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

    <div class="flex mt-2" v-html="readmeContent"></div>

    <div class="mt-2 text-left">
      <span v-html="project.description"></span>
    </div>
    <a
      :href="fullProjectUrl"
      target="_blank"
      rel="noopener"
      v-if="project.image"
    >
      <div class="image-wrapper w-full aspect-2 bg-almost-white">
        <img :src="project.image" alt="Example image" />
      </div>
    </a>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { marked } from "marked";

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
  },
  components: {
    FontAwesomeIcon,
  },
  async mounted() {
    const owner = "quintenroets";
    const repo =
      this.project.name !== undefined ? this.project.name : this.project.url;
    const branch = "main"; // or 'master', depending on your repo

    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/README.md?ref=${branch}`,
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        },
      );

      let markdown = await response.text();
      let start = markdown.indexOf("\n");
      let end = markdown.indexOf("\n\n");
      markdown = markdown.substring(start, end);
      let readmeContent = marked(markdown);
      start = readmeContent.indexOf("<p>");
      end = readmeContent.indexOf("</p>");
      this.readmeContent = readmeContent.substring(start + 3, end);
    } catch (error) {
      console.error("Error fetching README:", error);
      this.readmeContent = "<p>Error loading README file.</p>";
    }
  },
};
</script>
