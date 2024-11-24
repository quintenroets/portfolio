<template>
  <div>
    <ProjectsComponent class="mb-4" />
    <ContributionsComponent />
    <AwardsComponent />
  </div>
</template>

<script>
import { useHead } from "unhead";
import ContributionsComponent from "@/components/ContributionsComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import AwardsComponent from "@/components/AwardsComponent.vue";

export default {
  components: {
    AwardsComponent,
    ContributionsComponent,
    ProjectsComponent,
  },
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
