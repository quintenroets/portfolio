<template>
  <div>
    <h1 class="mb-4">Open-source Contributions</h1>
    <div class="flex justify-center">
      <div class="px-12 relative">
        <div
          class="bg-almost-white rounded-xl shadow-lg w-[36rem] h-64 border-2"
        >
          <div class="p-6 text-left h-full">
            <NavigationButtonsComponent
              v-bind:current-index="currentIndex"
              v-bind:total="numberOfContributions"
              @next="onNext"
              @previous="onPrevious"
            />
            <ContributionCard v-bind:contribution="contribution" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contributions from "../assets/contributions.json";
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
import ContributionCard from "@/components/ContributionCard.vue";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    contribution() {
      return contributions[this.currentIndex];
    },
    numberOfContributions() {
      return contributions.length;
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
    NavigationButtonsComponent,
    ContributionCard,
  },
};
</script>
