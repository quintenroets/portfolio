<template>
  <div class="flex flex-col bg-sidebargray" :class="{ rounded: ratio < 1 }">
    <div class="image-wrapper rounded-full w-48 aspect-1 mx-auto mt-10">
      <img
        src="../assets/profile.webp"
        class="rounded-full"
        alt="Profile picture"
      />
    </div>
    <h1 class="text-2xl text-center my-4">
      {{ name }}
    </h1>
    <IconsBlock class="mx-auto" />
  </div>
</template>

<script>
import IconsBlock from "@/components/IconsBlock.vue";
import { NAME } from "@/constants";

export default {
  name: "SideBar",
  components: { IconsBlock },
  data() {
    return {
      name: NAME,
    };
  },
  props: {
    ratio: {},
  },
};
</script>
