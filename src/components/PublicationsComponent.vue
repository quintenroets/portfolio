<template>
  <div>
    <h1 class="mb-4">Publications</h1>
    <div class="flex justify-center mb-4">
      <div class="w-[40rem] h-80 relative">
        <NavigationButtonsComponent
          v-bind:current-index="currentIndex"
          v-bind:total="numberOfPublications"
          @next="onNext"
          @previous="onPrevious"
        />
        <PublicationCard
          v-if="currentIndex === 0"
          title="Sequencing the Neurome: Towards Scalable Exact Parameter Reconstruction of Black-Box Neural Networks"
          issuer="Arxiv"
          date="Sep 2024"
          image="sequencing.webp"
          url="https://arxiv.org/abs/2409.19138"
        />
        <PublicationCard
          v-if="currentIndex === 1"
          title="Automated labeling and training of computer vision models in a live production environment"
          issuer="Confidential"
          date="Jun 2022"
          image="automated_labeling.webp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
import PublicationCard from "@/components/PublicationCard.vue";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    numberOfPublications() {
      return 2;
    },
  },
  methods: {
    onNext() {
      this.currentIndex++;
    },
    onPrevious() {
      this.currentIndex--;
    },
  },
  components: {
    PublicationCard,
    NavigationButtonsComponent,
  },
};
</script>
