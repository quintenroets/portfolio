<template>
  <InfoCard :href="url">
    <div>
      <div class="flex justify-between w-full">
        <div class="text-2xl font-bold" v-if="this.title">
          {{ this.title }}
        </div>
        <div class="text-lg font-bold" v-if="this.smallerTitle">
          {{ this.smallerTitle }}
        </div>
        {{ this.date }}
      </div>

      <div class="text mb-4 mt-2">issued by {{ this.issuer }}</div>
      <div class="flex justify-start grow">
        <img
          :src="this.image"
          alt="Award image"
          v-if="this.image"
          class="flex justify-center max-h-32 max-w-32 rounded mr-2"
        />
        <slot></slot>
      </div>
    </div>
  </InfoCard>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  props: {
    title: { type: String },
    smallerTitle: { type: String },
    issuer: { type: String },
    url: { type: String },
    image: { type: String },
    date: { type: String },
  },
  components: {
    InfoCard,
  },
};
</script>
