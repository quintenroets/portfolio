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
        <p>Hello and welcome! My name is Quinten.</p>
        <p>
          I am a Machine Learning expert with a specialization in Computer
          Vision. Over the past eight years, I have built a track record in
          empirical research and in the practical implementation, optimization,
          and evaluation of ML pipelines. My expertise ranges from training and
          automated labeling to inference and performance monitoring.
        </p>
        <p>
          I am passionate about my work and sharing knowledge with my community.
          I have created 33 open-source projects and published 26 PyPI packages,
          collectively downloaded over 20,000 times per month. My research
          contributions include two papers on neural network learning dynamics
          and eight contributions to major projects like Pytorch Lightning.
        </p>
        <p></p>

        <p>
          I currently work as a Machine Learning Engineer at
          <ExternalLink href="https://www.flawlessai.com/"
            >Flawless AI</ExternalLink
          >
          where I work on generative models with cinematic quality. I'm excited
          to share more about my background and experience as you continue to
          explore this page!
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
            "Hi! My name is Quinten Roets. Welcome to my portfolio website.",
        },
      ],
    });
  },
  components: { ExternalLink },
};
</script>
