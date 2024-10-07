<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    v-if="href"
    :class="
      (this.highlight && this.highlightWithoutHover ? 'text-blue' : '') +
      (this.highlight ? ' hover:text-hover-blue' : '')
    "
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    highlight: {
      type: Boolean,
      default: true,
    },
    highlightWithoutHover: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
