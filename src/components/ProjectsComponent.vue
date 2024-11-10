<template>
  <div>
    <h1 class="mb-4">Open-source Projects</h1>
    <div class="flex justify-center">
      <div class="w-[40rem] h-[30rem] relative flex">
        <NavigationButtonsComponent
          v-bind:current-index="currentIndex"
          v-bind:total="numberOfProjects"
          @next="onNext"
          @previous="onPrevious"
        />
        <ProjectIntroductionCard v-if="currentIndex === 99" />
        <ProjectCards
          class="w-full"
          v-bind:current-index="currentIndex"
          v-else
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
import ProjectIntroductionCard from "@/components/ProjectIntroductionCard.vue";
import ProjectCards from "@/components/ProjectCards.vue";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    numberOfProjects() {
      return 19;
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
    ProjectCards,
    NavigationButtonsComponent,
    ProjectIntroductionCard,
  },
};
</script>
