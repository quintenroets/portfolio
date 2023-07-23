<template>
  <div>
    <h1>Welcome</h1>
    <div class="flex justify-center">
      <div class="p-5">
        <img
          class="max-w-full w-96 rounded"
          alt="Profile picture"
          src="../assets/profile.jpeg"
          style="width: 420px"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="max-w-2xl mx-5 mt-4 text-left">
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
export default {
  name: "HomeView",
};
</script>
