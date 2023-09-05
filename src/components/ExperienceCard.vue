<template>
  <div>
    <div class="flex">
      <a :href="info.url">
        <div class="image-wrapper w-20 aspect-1 mb-4 mr-4">
          <img :src="logoUrl" alt="Company logo" />
        </div>
      </a>
      <div class="flex flex-col">
        <p class="font-bold">{{ info.function }}</p>
        <p>
          <a :href="info.url">{{ info.company }} </a>
          • {{ info.type }}
        </p>
        <p>{{ info.duration }}</p>
        <p>{{ info.location }}</p>
      </div>
    </div>

    <ul class="list-disc list-inside">
      <span v-for="(item, index) in info.bullets" :key="index">
        <span class="flex">
          <li class="w-4"></li>
          <span>
            {{ item }}
          </span>
        </span>
      </span>
    </ul>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0 !important;
  font-size: 14px !important;
}
a {
  @apply text-dark !important;
}
</style>
<script>
const requireLogo = require.context("@/assets/logos/", false, /\.webp$/);

export default {
  props: {
    info: {},
  },
  computed: {
    logoUrl() {
      return requireLogo("./" + this.info.logo);
    },
  },
};
</script>
