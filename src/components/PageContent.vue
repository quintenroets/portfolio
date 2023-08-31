<template>
  <div
    class="flex-grow overflow-y-auto mx-1 my-5"
    :class="{
      'mb-20': ratio < 1,
    }"
  >
    <router-view class="mx-4" />
  </div>
</template>

<style>
a {
  @apply text-blue !important;
}
</style>

<script>
export default {
  name: "PageContent",
  props: {
    ratio: {},
  },
};
</script>
