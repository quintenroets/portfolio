<template>
  <div
    class="flex-grow mx-1 my-5 overflow-y-auto"
    :class="{
      'mb-20': ratio < 1,
    }"
  >
    <router-view class="px-4 overflow-y-auto" />
  </div>
</template>

<style>
a {
  @apply text-blue !important;
}
</style>

<script>
export default {
  props: {
    ratio: {},
  },
};
</script>
