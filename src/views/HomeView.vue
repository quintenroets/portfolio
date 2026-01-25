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
          I am a Machine Learning Engineer at
          <ExternalLink href="https://www.apple.com/">Apple</ExternalLink> with
          eight years of experience in computer vision and NLP. I have built a
          track record in empirical research and the implementation,
          optimization, and evaluation of production ML systems. My expertise
          ranges from training and automated labeling to inference and
          performance monitoring.
        </p>
        <p>
          I created and maintain 33 open-source projects, including 26 PyPI
          packages with more than 30,000 downloads per month. My open-source ML
          work includes two papers on neural network learning dynamics and nine
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
        <p>
          Previously, I worked on generative models for visual dubbing at
          <ExternalLink href="https://www.flawlessai.com/"
            >Flawless AI</ExternalLink
          >
          and released
          <ExternalLink
            href="https://www.linkedin.com/posts/quintenroets_we-did-it-we-cracked-the-code-visual-dubbing-activity-7325568031059791872-0uYe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9QslAB1spOqaFAfaoYyZcbuQSPM3LbZpw"
            >Watch The Skies</ExternalLink
          >
          in theaters as the first movie ever to be visually dubbed. I'm excited
          to share more about my experience as you explore the rest of the site.
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
