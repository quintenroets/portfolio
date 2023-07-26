<template>
  <div>
    <h1>Welcome</h1>
    <div class="flex justify-center">
      <div class="py-4 mx-8">
        <img
          class="max-w-full w-96 rounded"
          alt="Profile picture"
          src="../assets/profile.jpeg"
          style="width: 420px"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="max-w-2xl mt-4 text-left">
        <p>
          Hello and welcome! My name is Quinten. I work as a Graduate Research
          Assistant at the
          <a href="https://www.creativemachineslab.com/"
            >Creative Machines Lab</a
          >
          at <a href="https://www.columbia.edu/">Columbia University</a>.
        </p>
        <p>
          I am a Machine Learning expert with a specialization in Computer
          Vision and a proven track record in empirical research, as well as in
          the practical implementation, optimization, and evaluation of Machine
          Learning pipelines. I have honed my skills across various stages
          ranging from training and automated labeling to inference and
          performance monitoring.
        </p>
        <p>
          I'm excited to share more about my background and experience as you
          continue to explore this page!
        </p>
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
import { useHead } from "@vueuse/head";

export default {
  name: "HomeView",

  setup() {
    useHead({
      // Can be static or computed
      title: "About",
      meta: [
        {
          name: `description`,
          content:
            "This page is the main page of the personal portfolio website and welcomes visitors.",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    });
  },
};
</script>
