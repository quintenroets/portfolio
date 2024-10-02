<template>
  <div>
    <h1>Open-source Projects</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left mt-4">
        <p>
          In my free time, I create projects to automate my day-to-day tasks and
          help other people. This practice keeps me up to date with the newest
          trends and best practices in software development, a crucial aspect of
          being an effective software engineer.
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="px-12 relative">
        <div class="bg-almost-white rounded-xl shadow-lg w-[40rem] border-2">
          <div class="p-6 text-left h-full">
            <NavigationButtonsComponent
              v-bind:current-index="currentIndex"
              v-bind:total="numberOfProjects"
              @next="onNext"
              @previous="onPrevious"
            />
            <ProjectCard v-bind:project="project" class="mb-4" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left mt-4">
        For all 33 projects and more details, please visit my
        <a
          target="_blank"
          rel="noopener"
          href="https://www.github.com/quintenroets"
          >Github
        </a>
        page.
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import projects from "@/assets/projects.json";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    project() {
      return projects[this.currentIndex];
    },
    numberOfProjects() {
      return projects.length;
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
  components: { ProjectCard, NavigationButtonsComponent },
};
</script>
