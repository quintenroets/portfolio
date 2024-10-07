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
        <ProjectIntroductionCard v-if="currentIndex === 0" />
        <ProjectCard v-bind:project="project" v-if="currentIndex !== 0" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectIntroductionCard from "@/components/ProjectIntroductionCard.vue";
import projects from "@/assets/projects.json";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    project() {
      return projects[this.currentIndex - 1];
    },
    numberOfProjects() {
      return projects.length + 1;
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
    ProjectCard,
    NavigationButtonsComponent,
    ProjectIntroductionCard,
  },
};
</script>
