<template>
  <div v-if="badges">
    <ExternalLink :href="packageUrl" class="flex">
      <img
        :src="packageUrl + '.svg'"
        alt="PyPI version"
        class="bg-sidebargray h-[20px]"
      />
      <img
        :src="'https://img.shields.io/pypi/dm/' + packageName"
        alt="PyPI downloads"
        class="bg-sidebargray h-[20px]"
      />
    </ExternalLink>
  </div>
</template>

<script>
import ExternalLink from "@/components/externalLink.vue";

export default {
  props: {
    badges: { type: Boolean, default: false },
    packageName: { type: String },
  },
  computed: {
    packageUrl() {
      return "https://badge.fury.io/py/" + this.packageName;
    },
  },
  components: {
    ExternalLink,
  },
};
</script>
