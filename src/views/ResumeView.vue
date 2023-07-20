<template>
  <div class="flex justify-center items-center">
    <iframe
      class="auto-mx"
      :src="source1"
      type="application/pdf"
      width="90%"
      height="840px"
    />
  </div>
</template>

<script>
export default {
  name: "ResumeView",
  data() {
    return {
      source1: process.env.BASE_URL + "resume.pdf",
    };
  },
};
</script>
