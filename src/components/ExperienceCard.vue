<template>
  <div
    :class="{
      'mb-10': !info.formatting_skip_margin,
      'mb-4': info.formatting_skip_margin && info.bullets,
    }"
  >
    <div class="flex">
      <ExternalLink :href="info.url">
        <div
          class="image-wrapper w-20 aspect-1 mr-4"
          :class="{ 'mb-4': info.bullets, 'mb-2': !info.bullets }"
        >
          <img :src="logoUrl" alt="Company logo" />
        </div>
      </ExternalLink>
      <div class="flex flex-col">
        <p class="font-bold">{{ info.function }}</p>
        <p v-if="info.company">
          <ExternalLink :href="info.url">
            {{ info.company }}
          </ExternalLink>
          • {{ info.type }}
        </p>
        <p>{{ info.duration }}</p>
        <p>{{ info.location }}</p>
      </div>
    </div>
    <ul class="list-disc list-inside" v-if="info.bullets">
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

<script>
import ExternalLink from "@/components/externalLink.vue";
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
  components: { ExternalLink },
};
</script>

<style scoped>
p {
  margin-bottom: 0 !important;
  font-size: 14px !important;
}
a {
  @apply text-dark !important;
}
</style>
