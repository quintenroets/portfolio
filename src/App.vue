<template>
  <div id="app" class="flex">
    <SidebarComponent class="w-1/5" />
    <div class="ml-auto w-4/5">
      <nav class="space-x-20 overflow-x-auto">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/">My mission</router-link>
        <router-link to="/">Projects</router-link>
        <router-link to="/">Open source</router-link>
        <router-link to="/resume">Resume</router-link>
      </nav>
      <router-view />
    </div>
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

body {
  background-color: #f6f9fc;
}
</style>
<script setup>
import SidebarComponent from "./components/Sidebar.vue";
</script>
