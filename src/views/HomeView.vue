<template>
  <div>
    <h1>Welcome</h1>
    <div class="flex justify-center">
      <div class="py-4 mx-8">
        <div class="image-wrapper aspect-1 max-w-full">
          <img class="w-420" alt="Profile picture" src="/profile.webp" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="max-w-2xl mt-4 text-left">
        <p>Hello and welcome!</p>
        <p>
          I am a Machine Learning expert with a specialization in Computer
          Vision and Natural Language Processing. Over the past eight years, I
          have built a track record in empirical research and in the practical
          implementation, optimization, and evaluation of ML pipelines. My
          expertise ranges from training and automated labeling to inference and
          performance monitoring.
        </p>
        <p>
          My 33 open-source projects show the passion I have for sharing
          knowledge with the community. I created 26 PyPI packages, collectively
          downloaded over 30,000 times per month. My research contributions
          include two papers on neural network learning dynamics and nine
          contributions to major projects like
          <ExternalLink href="https://github.com/huggingface/transformers/"
            >Hugging Face Transformers</ExternalLink
          >
          and
          <ExternalLink
            href="https://github.com/Lightning-AI/pytorch-lightning"
          >
            Pytorch Lightning</ExternalLink
          >.
        </p>
        <p></p>

        <p>
          I currently work as a Machine Learning Engineer at
          <ExternalLink href="https://www.apple.com/">Apple</ExternalLink>,
          where I work on large language models. Before that, I worked on
          generative models for visual dubbing at

          <ExternalLink href="https://www.flawlessai.com/"
            >Flawless AI</ExternalLink
          >
          and released
          <ExternalLink
            href="https://www.linkedin.com/posts/quintenroets_we-did-it-we-cracked-the-code-visual-dubbing-activity-7325568031059791872-0uYe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9QslAB1spOqaFAfaoYyZcbuQSPM3LbZpw"
            >Watch The Skies</ExternalLink
          >
          to the theaters as the first movie ever to be visually dubbed. I'm
          excited to share more about my background and experience as you
          continue to explore this page!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "@unhead/vue";
import ExternalLink from "@/components/externalLink.vue";

export default {
  setup() {
    useHead({
      meta: [
        {
          name: `description`,
          content:
            "Hi! My name is Quinten Roets. Welcome to my portfolio website.",
        },
      ],
    });
  },
  components: { ExternalLink },
};
</script>
