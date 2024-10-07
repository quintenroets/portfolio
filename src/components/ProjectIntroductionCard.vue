<template>
  <InfoCard :href="this.url">
    <GithubStatisticsComponent />
  </InfoCard>
</template>

<script>
import GithubStatisticsComponent from "@/components/GithubStatisticsComponent.vue";
import InfoCard from "@/components/InfoCard.vue";
export default {
  data: function () {
    return {
      url: "https://www.github.com/quintenroets",
    };
  },
  components: {
    GithubStatisticsComponent,
    InfoCard,
  },
};
</script>
