<template>
  <router-view
    class="m-6"
    :class="{
      'pb-14': ratio < 1,
      'mx-2': ratio >= 1,
    }"
  />
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
