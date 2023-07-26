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

export default {
  name: "ResumeView",

  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: rgba(100, 100, 100, 0.25);
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(40, 40, 40, 0.5);
  border: 2px solid transparent;
  border-radius: 10px;
  background-clip: padding-box;
}
</style>
