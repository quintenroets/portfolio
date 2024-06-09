<template>
  <div class="m-2 ml-1 mr-0 mb-4">
    <div class="flex">
      <div>
        <font-awesome-icon
          class="w-5 h-5 text-dark !important m-0.5 mr-1.5"
          :icon="['fab', 'github']"
        />
      </div>
      <div>
        <div class="flex items-center mb-1 ml-1 max-w-fit">
          {{ title }}
          <a
            target="_blank"
            class="ml-2"
            rel="noopener"
            :href="projectUrl + 'pull/' + number"
          >
            #{{ number }}
          </a>
        </div>
        <div>
          <ul class="list-disc list-inside">
            <slot />
          </ul>
        </div>
      </div>
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
    title: String,
  },
  components: { FontAwesomeIcon },
};
</script>
