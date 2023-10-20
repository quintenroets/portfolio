<template>
  <div>
    <h1>Education</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left mt-4">
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.columbia.edu/"
            class="min-w-max"
          >
            <div class="image-wrapper w-20 aspect-1 mr-4 float-left">
              <img
                src="../assets/logos/columbia.webp"
                alt="Columbia University"
              />
            </div>
          </a>
          Supported by a
          <a target="_blank" rel="noopener" href="https://www.baef.be/"
            >BAEF Fellowship</a
          >, I obtained a master's degree in Computer Science from
          <a target="_blank" rel="noopener" href="https://www.columbia.edu/"
            >Columbia University</a
          >. In just 9 months, I completed the 1.5-year program, specializing in
          advanced Machine Learning topics.
        </p>

        <p>
          At the
          <a
            target="_blank"
            rel="noopener"
            href="https://www.creativemachineslab.com/"
            >Creative Machines Lab</a
          >, I worked on the exact parameter reconstruction of black-box neural
          networks. By visualizing the local optima in the reconstruction
          process, I came up with an advanced sampling strategy iteratively
          combining in-distribution and out-of-distribution data. My
          sample-efficient
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/quintenroets/revnets/"
            >approach</a
          >
          stabilized the reconstruction process for large networks and enabled
          me to reconstruct a network with 318,000 parameters, the largest
          reconstruction seen to date. The corresponding paper is currently
          under review for publication.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.ugent.be/en"
            class="min-w-max"
          >
            <div class="image-wrapper w-20 aspect-1 mr-4 float-left">
              <img
                class="bg-white"
                src="../assets/logos/ugent.webp"
                alt="Ghent University"
              />
            </div>
          </a>
          Before that, I earned a master's degree in Computer Science
          Engineering from
          <a target="_blank" rel="noopener" href="https://www.ugent.be/en"
            >Ghent University</a
          >, where I acquired competitive software development skills and
          developed a thorough theoretical foundation in Machine Learning.
        </p>
        <p>
          During my thesis research, I worked on domain adaptation of Computer
          Vision systems to out-of-distribution data. I applied feature
          embeddings produced by multimodal transformer foundation models to
          cluster out-of-distribution data and automate the labeling of newly
          acquired data. My efficient framework labeled 10,000 data samples in
          under 2 minutes and achieved accuracies of over 99% on both
          state-of-the-art datasets and production datasets provided by
          <a target="_blank" rel="noopener" href="https://robovision.ai/"
            >Robovision</a
          >, making a retraining system feasible in the industry for the first
          time.
        </p>
      </div>
    </div>
    <h1 class="my-4">Professional Experience</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl mt-4 text-left">
        <ExperienceCard
          class="mb-10"
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
import { useHead } from "unhead";

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
            "explore my professional experiences at Tekst.ai, Robovision & ST Engineering iDirect.",
        },
      ],
    });
  },
};
</script>
