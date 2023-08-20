<template>
  <div>
    <div class="flex justify-center">
      <div class="max-w-2xl">
        <h1>AI for the benefit of humanity</h1>
        <div class="my-4 flex justify-center">
          <div class="image-wrapper max-w-2xl w-full aspect-4">
            <img alt="Wallpaper" src="../assets/wallpaper.webp" />
          </div>
        </div>
        <div class="text-left">
          <p>
            As a Machine Learning enthusiast with two master's degrees in AI, I
            have been privileged to observe and participate in the ongoing AI
            revolution from a front-line perspective. My hands-on experiences
            with foundation models have solidified my belief that the boundaries
            of AI are inexhaustible.
          </p>
          <p>
            I envision a future world transformed by AI where humanity thrives
            on a global scale. A world where humans are liberated to pursue
            their passions while advanced AI agents care for their health, build
            their houses and design their roads. However, this future is not
            without its challenges. The accelerating advancement and adoption of
            AI raises complex issues surrounding ethics and control. Moreover,
            the impact of a misbehaving system grows more severe as AI agents
            become a bigger part of our lives.
          </p>
          <p>
            This is why I believe in the importance of
            <a href="https://en.wikipedia.org/wiki/AI_safety">AI safety</a>.
            This domain studies problems like machine alignment and mechanistic
            interpretability to safeguard the adoption of advanced AI. By
            prioritizing AI safety, I believe we can build a world where we
            thrive alongside intelligent systems. We have one chance to do it
            right, and we must act now!
          </p>
          <p>
            I am a proud member of the
            <a href="https://www.effectivealtruism.org/">Effective Altruism</a>
            community where I completed an AI Safety Fellowship. Last December,
            I participated in the
            <a
              href="https://www.effectivealtruism.org/ea-global/events/eagxberkeley2022"
              >EAGxBerkeley</a
            >
            conference and this August, I will be at the
            <a href="https://www.effectivealtruism.org/ea-global/events/eagxnyc"
              >EAGxNYC</a
            >
            conference. I hope to see you there!
          </p>
          <p style="margin-bottom: 0 !important">
            For those interested in the dangers and possibilities of advanced
            AI, I recommend reading
            <a href="https://en.wikipedia.org/wiki/Our_Final_Invention">
              Our Final Invention
            </a>
            by James Barrat and
            <a
              href="https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies"
            >
              Superintelligence
            </a>
            by Nick Bostrom.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "unhead";
export default {
  name: "MissionView",

  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Explore what fuels my passion in Machine Learning and learn more about AI safety.",
        },
      ],
    });
  },
};
</script>
