<template>
  <div
    class="flex"
    id="app"
    v-touch:swipe.left="$router.goRight"
    v-touch:swipe.right="$router.goLeft"
  >
    <SideBar
      v-if="ratio >= 1"
      class="w-1/5 max-h-screen overflow-auto"
      :square="true"
    />
    <div class="flex flex-grow flex-col h-screen">
      <NavigationBar :ratio="ratio" />
      <PageContent class="flex flex-grow flex-col" :ratio="ratio" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ratio = ref(window.innerWidth / window.innerHeight);
import SideBar from "@/components/SideBar.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import PageContent from "@/components/PageContent.vue";
import { useHead } from "@unhead/vue";

useHead({
  meta: [
    {
      name: `description`,
      content: "Portfolio website of Quinten Roets.",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
