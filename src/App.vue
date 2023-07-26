<template>
  <div class="flex" id="app">
    <div class="overflow-x-auto w-1/5" v-if="ratio >= 1">
      <SidebarComponent class="min-w-fit h-full w-full" />
    </div>
    <RouterBar class="flex-grow" />
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
import SidebarComponent from "@/components/Sidebar.vue";
import RouterBar from "@/components/RouterBar.vue";
</script>
