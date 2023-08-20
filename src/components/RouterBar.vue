<template>
  <div class="flex flex-col h-screen justify-start">
    <div class="overflow-x-auto flex-shrink-0">
      <div class="flex justify-center">
        <nav
          class="whitespace-nowrap flex justify-between w-full max-w-2xl px-4 py-7"
          :style="{ 'font-size': ratio < 1 ? '13px' : '' }"
        >
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/mission">Mission</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/resume">Resume</router-link>
          <router-link to="/contact" v-if="ratio < 1">Contact</router-link>
        </nav>
      </div>
      <hr />
    </div>
    <div
      class="flex flex-col min-w-fit overflow-y-auto flex-grow p-6"
      :class="{ 'px-2': ratio >= 1 }"
      id="pageContent"
    >
      <router-view
        class="flex flex-grow flex-col"
        :class="{ 'pb-14': ratio < 1, 'overflow-y-auto': ratio >= 1 }"
      />
    </div>
  </div>
</template>

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

<style scoped>
a {
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #222222;
  font-weight: bold;
}
</style>
