<template>
  <div class="flex flex-col" :class="{ 'flex flex-grow': !square }">
    <div
      class="flex flex-col flex-grow bg-sidebargray"
      :class="{ rounded: !square }"
    >
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
    square: {},
  },
};
</script>
