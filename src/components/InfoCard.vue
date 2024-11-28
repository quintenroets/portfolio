<template>
  <ExternalLink :href="href" :highlight="false" class="w-full h-full">
    <div
      class="rounded-xl flex-column p-4 text-left h-full w-full shadow-md hover:shadow-xl cursor-pointer border-1 bg-almost-white"
    >
      <slot></slot>
    </div>
  </ExternalLink>
</template>

<script>
import ExternalLink from "@/components/externalLink.vue";

export default {
  components: { ExternalLink },
  props: {
    href: {},
  },
};
</script>
