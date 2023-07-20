<template>
  <div
    class="min-h-screen border-r p-4 fixed"
    style="background-color: #ebeef3"
  >
    <img
      src="../assets/profile.jpeg"
      class="rounded-full w-48 h-48 mx-auto mt-4 mb-4"
      alt="Profile picture"
    />
    <h1 class="text-2xl text-center my-4 font-bold">{{ name }}</h1>
    <IconsBlock class="w-2/3 mx-auto" />
  </div>
</template>

<script>
import IconsBlock from "@/components/IconsBlock.vue";
import { NAME } from "@/constants";
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
};
</script>
