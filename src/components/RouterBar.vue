<template>
  <div ref="navigation" class="overflow-x-auto">
    <nav class="space-x-20 whitespace-nowrap flex justify-center min-w-max">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/mission">Mission</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/resume">Resume</router-link>
    </nav>
  </div>
  <div
    class="max-h-screen min-w-fit overflow-y-auto"
    style="max-height: calc(100vh - 100px)"
  >
    <router-view />
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
export default {
  name: "RouterBar",
};
</script>
