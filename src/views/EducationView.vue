<template>
  <div>
    <h1>Education</h1>
    <div class="flex justify-center">
      <div class="max-w-2xl text-left mt-4">
        <p>
          <ExternalLink href="https://www.columbia.edu/" class="min-w-max">
            <div class="image-wrapper w-20 aspect-1 mr-4 float-left">
              <img
                src="../assets/logos/columbia.webp"
                alt="Columbia University"
              />
            </div>
          </ExternalLink>
          Supported by a
          <ExternalLink href="https://www.baef.be/"
            >BAEF Fellowship</ExternalLink
          >, I obtained a master's degree in Computer Science from
          <ExternalLink href="https://www.columbia.edu/"
            >Columbia University</ExternalLink
          >. In just 9 months, I completed the 1.5-year program, specializing in
          advanced Machine Learning topics.
        </p>

        <p>
          At the
          <ExternalLink href="https://www.creativemachineslab.com/"
            >Creative Machines Lab</ExternalLink
          >, I worked on the exact parameter reconstruction of black-box neural
          networks. By visualizing the local optima in the reconstruction
          process, I came up with an advanced sampling strategy iteratively
          combining in-distribution and out-of-distribution data. My
          sample-efficient
          <ExternalLink href="https://github.com/quintenroets/revnets/"
            >approach</ExternalLink
          >
          stabilized the reconstruction process for large networks and enabled
          me to reconstruct a network with 1.5 million parameters, the largest
          reconstruction seen to date. The corresponding paper is currently
          under review for publication and the
          <ExternalLink href="https://arxiv.org/abs/2409.19138"
            >preprint</ExternalLink
          >
          is available on arxiv.
        </p>
        <p>
          <ExternalLink href="https://www.ugent.be/en" class="min-w-max">
            <div class="image-wrapper w-20 aspect-1 mr-4 float-left">
              <img
                class="bg-white"
                src="../assets/logos/ugent.webp"
                alt="Ghent University"
              />
            </div>
          </ExternalLink>
          Before that, I earned a master's degree in Computer Science
          Engineering from
          <ExternalLink href="https://www.ugent.be/en"
            >Ghent University</ExternalLink
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
          <ExternalLink href="https://robovision.ai/">Robovision</ExternalLink>,
          making an automated retraining system feasible in the industry for the
          first time.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "unhead";
import ExternalLink from "@/components/externalLink.vue";

export default {
  setup() {
    useHead({
      meta: [
        {
          name: `description`,
          content:
            "Discover more about my education at Columbia University & Ghent University",
        },
      ],
    });
  },
  components: { ExternalLink },
};
</script>
