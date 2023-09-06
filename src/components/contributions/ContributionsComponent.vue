<template>
  <div>
    <h1 class="my-4 mt-10">Open-source contributions</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left flex-grow">
        <LightningContribution />
        <FishContribution />
      </div>
    </div>
  </div>
</template>

<script>
import FishContribution from "./FishContribution.vue";
import LightningContribution from "./LightningContribution.vue";

export default {
  components: { FishContribution, LightningContribution },
};
</script>
