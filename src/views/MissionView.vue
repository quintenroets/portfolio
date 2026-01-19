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
            As a Machine Learning Engineer with two master's degrees in AI, I
            have been privileged to observe and participate in the ongoing AI
            revolution from a front-line perspective. My hands-on experiences
            with foundation models have solidified my belief that the boundaries
            of AI are inexhaustible.
          </p>
          <p>
            I envision a future world transformed by AI, where humanity thrives
            on a global scale. In this world, humans are free to pursue their
            passions, while advanced AI agents construct their houses and
            provide healthcare. However, this future is not without its
            challenges. The accelerating advancement and adoption of AI raises
            complex issues surrounding ethics and control. Moreover, the impact
            of a misbehaving system grows as AI agents become more deeply
            ingrained in our lives.
          </p>
          <p>
            This is why I believe in the importance of
            <ExternalLink href="https://en.wikipedia.org/wiki/AI_safety"
              >AI safety</ExternalLink
            >. This domain studies problems like machine alignment and
            mechanistic interpretability to safeguard the adoption of advanced
            AI. By prioritizing AI safety, I believe we can build a world where
            we thrive alongside intelligent systems. We have one chance to do it
            right, and we must act now!
          </p>
          <p>
            I am a proud member of the
            <ExternalLink href="https://www.effectivealtruism.org/"
              >Effective Altruism</ExternalLink
            >
            community. I joined the AI Safety Fellowship and in December 2022, I
            participated in the
            <ExternalLink
              href="https://www.effectivealtruism.org/ea-global/events/eagxberkeley2022"
              >EAGxBerkeley</ExternalLink
            >
            conference.
          </p>
          <p class="mb-0 !important">
            For those interested in the possibilities and risks of advanced AI,
            I recommend reading
            <ExternalLink
              href="https://en.wikipedia.org/wiki/Our_Final_Invention"
            >
              Our Final Invention
            </ExternalLink>
            by James Barrat and
            <ExternalLink
              href="https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies"
            >
              Superintelligence
            </ExternalLink>
            by Nick Bostrom.
          </p>
        </div>
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
          name: "description",
          content:
            "Explore what fuels my passion in Machine Learning and learn more about AI safety.",
        },
      ],
    });
  },
  components: { ExternalLink },
};
</script>
