<template>
  <div id="app">
    <MobileApp v-if="ratio < 1" />
    <WebApp v-else />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #222222;
  font-weight: bold;
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
  background-color: #f6f9fc;
}
</style>
<script setup>
import { ref } from "vue";

const ratio = ref(window.innerWidth / window.innerHeight);
import WebApp from "./components/WebApp.vue";
import MobileApp from "./components/MobileApp.vue";
</script>
