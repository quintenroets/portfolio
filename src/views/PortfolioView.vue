<template>
  <div>
    <ProjectsComponent />
    <ContributionsComponent />
  </div>
</template>

<script>
import { useHead } from "unhead";
import ContributionsComponent from "@/components/ContributionsComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  components: { ContributionsComponent, ProjectsComponent },
  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Discover the unique projects that shaped my Software Engineering skills.",
        },
      ],
    });
  },
};
</script>
