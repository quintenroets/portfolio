<template>
  <div
    class="flex-grow mx-1 my-5 overflow-y-auto"
    :class="{
      'mb-20 bg-orange-200': ratio < 1,
    }"
  >
    <router-view class="px-4 overflow-y-auto h-full" />
  </div>
</template>

<script>
export default {
  props: {
    ratio: {},
  },
};
</script>
