<template>
  <div class="flex flex-col" :class="{ 'flex-grow': !this.square }">
    <div
      class="flex flex-col flex-grow bg-sidebargray"
      :class="{ rounded: !this.square }"
    >
      <div class="image-wrapper rounded-full w-48 aspect-1 mx-auto mt-10">
        <img src="/profile.webp" class="rounded-full" alt="Profile picture" />
      </div>
      <h1 class="text-2xl text-center my-4">
        {{ name }}
      </h1>
      <IconsBlock class="mx-auto" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import { NAME } from "@/constants";
const IconsBlock = defineAsyncComponent(() =>
  import("@/components/IconsBlock.vue"),
);

export default {
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
