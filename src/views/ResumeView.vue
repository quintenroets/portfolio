<template>
  <div class="flex flex-grow justify-center items-center">
    <div class="vl-parent w-full h-full max-w-7xl">
      <loading class="w-full h-full" :active="loading" :is-full-page="false" />
      <iframe
        @load="loading = false"
        title="Resume Quinten Roets"
        class="rounded w-full h-full"
        src="https://quintenroets.com/Resume.pdf"
        type="application/pdf"
      />
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { useHead } from "unhead";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },

  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content: "View the Resume of Quinten Roets.",
        },
      ],
    });
  },
};
</script>
