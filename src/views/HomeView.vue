<template>
  <div>
    <h1>Welcome</h1>
    <div class="flex justify-center">
      <div class="py-4 mx-8">
        <div class="image-wrapper aspect-1 max-w-full">
          <img
            class="w-96"
            alt="Profile picture"
            src="../assets/profile.webp"
            style="width: 420px"
          />
        </div>
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
import { useHead } from "unhead";

export default {
  name: "HomeView",

  setup() {
    useHead({
      meta: [
        {
          name: `description`,
          content: "Main page of the portfolio website.",
        },
      ],
    });
  },
};
</script>
