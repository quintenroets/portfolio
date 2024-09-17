<template>
  <div>
    <h1>Projects</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left">
        <div class="flex">
          <GithubStatisticsComponent class="w-6/12" />
          <ProjectsExplanationComponent class="w-6/12 mt-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GithubStatisticsComponent from "@/components/GithubStatisticsComponent.vue";
import ProjectsExplanationComponent from "@/components/ProjectsExplanationComponent.vue";

export default {
  components: { GithubStatisticsComponent, ProjectsExplanationComponent },
};
</script>
