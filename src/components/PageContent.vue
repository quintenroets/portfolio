<template>
  <div class="flex-grow overflow-y-auto mx-1 my-5">
    <router-view
      class="mx-4"
      :class="{
        'pb-14': ratio < 1,
      }"
    />
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
