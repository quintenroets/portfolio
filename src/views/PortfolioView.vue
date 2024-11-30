<template>
  <div>
    <PublicationsComponent />
    <ProjectsComponent />
    <ContributionsComponent />
    <AwardsComponent class="mb-4" />
  </div>
</template>

<script>
import { useHead } from "unhead";
import ContributionsComponent from "@/components/ContributionsComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import AwardsComponent from "@/components/AwardsComponent.vue";
import PublicationsComponent from "@/components/PublicationsComponent.vue";

export default {
  components: {
    AwardsComponent,
    PublicationsComponent,
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
