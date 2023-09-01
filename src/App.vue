<template>
  <div class="flex" id="app">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  @apply text-dark;
}

h1 {
  font-weight: bold !important;
  font-size: 2em !important;
}

p {
  margin-bottom: 1em !important;
  font-size: 17px !important;
}

body {
  @apply bg-background-blue;
}

.image-wrapper {
  border-radius: 0.25rem;
  @apply bg-sidebargray;
}

img {
  border-radius: 0.25rem;
  object-fit: contain;
}

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
<script setup>
import { ref } from "vue";

const ratio = ref(window.innerWidth / window.innerHeight);
import SideBar from "@/components/SideBar.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import PageContent from "@/components/PageContent.vue";
import { useHead } from "unhead";
import mainImageUrl from "./assets/profile.webp";

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
  link: [
    {
      rel: "preload",
      as: "image",
      href: mainImageUrl,
    },
  ],
});
</script>
