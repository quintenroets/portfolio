<template>
  <div class="flex flex-grow justify-center items-center">
    <div class="vl-parent w-full h-full max-w-7xl">
      <loading class="w-full h-full" :active="loading" :is-full-page="false" />
      <div class="relative rounded w-full h-full">
        <iframe
          @load="loading = false"
          title="Resume Quinten Roets"
          class="rounded w-full h-full"
          src="https://quintenroets.com/Resume.pdf"
          type="application/pdf"
        />
        <!-- Overlay div to catch swipe events (iframe swallows them) -->
        <div
          class="absolute top-0 left-0 w-full h-full z-1"
          v-touch:swipe.left="$router.goRight"
          v-touch:swipe.right="$router.goLeft"
          v-on:touchend="onTouchEnd"
          v-if="$router.isTouchDevice && this.catchEvents"
        ></div>
      </div>
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
      catchEvents: true,
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
  methods: {
    onTouchEnd() {
      this.catchEvents = false;
    },
  },
};
</script>
