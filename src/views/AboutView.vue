<template>
  <div>
    <h1>Education</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl mx-5 text-left mt-4">
        <p>
          <a href="https://www.ugent.be/en" class="min-w-max">
            <img
              class="w-20 h-20 mb-4 mr-4 border-2"
              src="/logos/ugent.svg"
              alt="Ghent University"
              style="float: left"
            />
          </a>
          I started my education at
          <a href="https://www.ugent.be/en">Ghent University</a>, where I
          discovered my passion for Computer Science, developed a thorough
          theoretical foundation in Machine Learning and fostered competitive
          software development skills.
        </p>
        <p>
          During my thesis research, I worked on domain adaptation of Computer
          Vision systems to out-of-distribution data. I applied feature
          embeddings produced by multimodal transformer foundation models to
          cluster out-of-distribution data and automate the labeling of newly
          acquired data. My efficient framework labeled 10,000 data samples in
          under 2 minutes and achieved accuracies of over 99% on both
          state-of-the-art datasets and production datasets provided by
          <a href="https://robovision.ai/">Robovision</a>, making a relabeling
          system feasible in the industry for the first time.
        </p>
        <p>
          <a href="https://www.columbia.edu/" class="min-w-max">
            <img
              class="w-20 h-20 mb-4 mr-4 border-2"
              src="/logos/columbia.jpeg"
              alt="Columbia University"
              style="float: left"
            />
          </a>
          Supported by a
          <a href="https://www.baef.be/">BAEF</a> Fellowship, I completed an
          additional Masters degree at
          <a href="https://www.columbia.edu/">Columbia University</a>,
          specializing in advanced Machine Learning topics. I completed the
          1.5-year program in 9 months.
        </p>

        <p>
          At the
          <a href="https://www.creativemachineslab.com/"
            >Creative Machines Lab</a
          >, I worked on the exact parameter reconstruction of black-box neural
          networks. By visualizing the local optima in the reconstruction
          process, I came up with an advanced sampling strategy that iteratively
          combines in-distribution data and out-of-distribution data. This
          sample-efficient approach stabilized the reconstruction process for
          large networks and allowed me to reconstruct a network with 318,000
          parameters, the largest reconstruction seen to date. The corresponding
          paper is currently under review for publication.
        </p>
      </div>
    </div>
    <h1>Professional Experience</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl min-w-2xl mx-5 mt-4 text-left">
        <ExperienceCard
          class="mb-14"
          v-for="(experience, index) in experiences"
          :key="index"
          v-bind:info="experience"
          v-bind:index="index"
        ></ExperienceCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #2980b9;
}
</style>
<script>
import ExperienceCard from "../components/ExperienceCard.vue";
import experiences from "../assets/experiences.json";

export default {
  name: "AboutView",
  components: { ExperienceCard },
  data() {
    return {
      experiences: experiences,
    };
  },
};
</script>
