<template>
  <div class="mb-8">
    <div class="mb-4 max-w-fit">
      <a target="_blank" rel="noopener" :href="url" class="flex items-center">
        <div
          class="image-wrapper w-9 aspect-1 bg-background-white"
          :class="name === 'Pytorch Lightning' ? 'mr-1' : 'mr-2.5'"
        >
          <img :src="logoUrl" alt="Project logo" />
        </div>
        <div
          class="flex flex-col justify-center font-bold text-xl text-dark !important"
        >
          {{ name }}
        </div>
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
const requireLogo = require.context("@/assets/logos/", false, /\.webp$/);
export default {
  props: {
    name: String,
    url: String,
    logo: String,
  },
  computed: {
    logoUrl() {
      return requireLogo("./" + this.logo);
    },
  },
};
</script>
