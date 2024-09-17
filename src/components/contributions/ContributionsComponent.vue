<template>
  <div>
    <h2 class="my-4 mt-10">Open-source contributions</h2>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left flex-grow">
        <LightningContribution />
        <FishContribution />
      </div>
    </div>
    <img
      src="https://github-readme-stats.vercel.app/api/pin/?username=quintenroets&repo=package-dev-tools"
      alt=""
      href="https://github-readme-stats.vercel.app/api/pin/?username=quintenroets&repo=package-dev-tools"
    />
  </div>
</template>

<script>
import FishContribution from "./FishContribution.vue";
import LightningContribution from "./LightningContribution.vue";

export default {
  components: { FishContribution, LightningContribution },
};
</script>
