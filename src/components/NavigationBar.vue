<template>
  <div>
    <div class="flex justify-center overflow-x-auto">
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
</template>

<script>
export default {
  props: {
    ratio: {},
  },
};
</script>

<style scoped>
a {
  @apply text-dark !important;
}

a.router-link-exact-active {
  font-weight: bold;
  @apply text-black;
}
</style>
