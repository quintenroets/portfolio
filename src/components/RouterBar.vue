<template>
  <div ref="navigation" class="overflow-x-auto">
    <div class="flex justify-center">
      <nav class="whitespace-nowrap flex justify-between w-full max-w-2xl px-4">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/mission">Mission</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/resume">Resume</router-link>
      </nav>
    </div>
  </div>
  <hr class="mb-4" />
  <div
    class="min-w-fit overflow-y-auto"
    style="max-height: calc(100vh - 100px); min-height: calc(100vh - 105px)"
  >
    <router-view class="mb-10" v-if="ratio < 1" />
    <router-view v-else />
  </div>
</template>

<style>
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
<script>
import { ref } from "vue";

export default {
  name: "RouterBar",

  setup() {
    const ratio = ref(window.innerWidth / window.innerHeight);
    return {
      ratio,
    };
  },
};
</script>
