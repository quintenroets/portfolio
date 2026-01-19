<template>
  <div>
    <h1>Professional Experience</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl mt-4 text-left">
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience"
          v-bind:info="experience"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "../components/ExperienceCard.vue";
import experiences from "../assets/experiences.json";
import { useHead } from "@unhead/vue";

export default {
  components: { ExperienceCard },
  data() {
    return {
      experiences: experiences,
    };
  },
  setup() {
    useHead({
      meta: [
        {
          name: `description`,
          content:
            "Discover my education at Columbia University & Ghent University and " +
            "explore my professional experiences at Apple, Flawless.ai, Tekst.ai, Robovision & ST Engineering iDirect.",
        },
      ],
    });
  },
};
</script>
