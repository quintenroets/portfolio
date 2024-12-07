<template>
  <InfoCard :href="url">
    <div>
      <div class="text-center mb-2">
        <div class="text-lg font-bold">
          {{ this.title }}
        </div>
        <span class="italic">{{ this.issuer }}</span>
        <span>, {{ this.date }}</span>
      </div>
      <div class="flex justify-center grow">
        <img
          :src="this.imageUrl"
          alt="Award image"
          v-if="this.imageUrl"
          class="flex justify-center max-h-44 max-w-44 rounded mr-2"
        />
      </div>
    </div>
  </InfoCard>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
const requireLogo = require.context("@/assets/publications/", false, /\.webp$/);

export default {
  props: {
    title: { type: String },
    smallerTitle: { type: String },
    issuer: { type: String },
    url: { type: String, default: "" },
    image: { type: String },
    date: { type: String },
  },
  computed: {
    imageUrl() {
      return requireLogo("./" + this.image);
    },
  },
  components: {
    InfoCard,
  },
};
</script>
