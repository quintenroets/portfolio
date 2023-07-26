<template>
  <div
    class="flex flex-col"
    :class="{ rounded: ratio < 1 }"
    style="background-color: #ebeef3"
  >
    <img
      src="../assets/profile.jpeg"
      class="rounded-full w-48 h-48 mx-auto mt-10"
      alt="Profile picture"
    />
    <h1 class="text-2xl text-center my-4 font-bold w-full">
      {{ name }}
    </h1>
    <IconsBlock class="mx-auto" />
  </div>
</template>

<script>
import IconsBlock from "@/components/IconsBlock.vue";
import { NAME } from "@/constants";
import { ref } from "vue";

export default {
  name: "SidebarComponent",
  components: { IconsBlock },
  data() {
    return {
      name: NAME,
      location: "New York, USA",
      email: "qdr2104@columbia.edu",
      linkedin: "in/quintenroets",
      github: "quintenroets",
    };
  },
  setup() {
    const ratio = ref(window.innerWidth / window.innerHeight);
    return {
      ratio,
    };
  },
};
</script>
