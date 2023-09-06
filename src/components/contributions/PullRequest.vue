<template>
  <div class="m-2 ml-1 mr-0 mb-4">
    <a
      class="flex items-center mb-2 max-w-fit"
      rel="noopener"
      target="_blank"
      :href="projectUrl + 'pull/' + number"
    >
      <font-awesome-icon
        class="w-6 h-6 mr-2 text-dark !important"
        :icon="['fab', 'github']"
      />
      <div>#{{ number }}</div>
    </a>
    <div>
      <ul class="list-disc list-inside">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);

export default {
  props: {
    projectUrl: String,
    number: Number,
  },
  components: { FontAwesomeIcon },
};
</script>
