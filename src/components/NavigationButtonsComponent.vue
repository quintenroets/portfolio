<template>
  <div>
    <div
      class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12"
    >
      <button
        @click="onPrevious"
        class="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
        v-if="currentIndex > 0"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="text-md text-white"
        />
      </button>
    </div>
    <div
      class="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12"
    >
      <button
        @click="onNext"
        class="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
        v-if="currentIndex < total - 1"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="text-md text-white"
        />
      </button>
    </div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-5">
      <TransitionGroup
        class="flex items-center"
        tag="div"
        :name="this.navigationIndex > 2 ? 'next' : 'previous'"
      >
        <div
          class="mx-1 rounded-full transform transition-all duration-500 ease-in-out w-2 h-2"
          :class="
            (i === currentIndex ? 'bg-white' : 'bg-gray-200') +
            ' ' +
            ((i === currentIndex - navigationIndex && i !== 0) ||
            (i === currentIndex - navigationIndex + 4 && i !== total - 1)
              ? 'smaller'
              : '')
          "
          v-for="i in visibleIndices"
          :key="i"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight, faChevronLeft);
export default {
  props: {
    currentIndex: Number,
    total: Number,
  },
  methods: {
    onPrevious() {
      this.$emit("previous");
      if (this.currentIndex === 1) {
        this.navigationIndex = 0;
      } else if (this.navigationIndex > 1) {
        this.navigationIndex--;
      }
    },
    onNext() {
      this.$emit("next");
      if (this.currentIndex === this.total - 2) {
        this.navigationIndex = 4;
      } else if (this.navigationIndex < 3) {
        this.navigationIndex++;
      }
    },
  },
  computed: {
    visibleIndices() {
      let availableBefore = Math.min(this.currentIndex, this.navigationIndex);
      let availableBehind = Math.min(
        this.total - this.currentIndex - 1,
        4 - this.navigationIndex,
      );
      const start = Math.max(0, this.currentIndex - 4 + availableBehind);
      const end = Math.min(this.total, this.currentIndex + 5 - availableBefore);
      return Array.from({ length: end - start }, (_, i) => i + start);
    },
  },
  data() {
    return {
      navigationIndex: 0,
    };
  },
  components: { FontAwesomeIcon },
};
</script>

<style scoped>
.next-enter-from {
  opacity: 0;
  transform: translateX(1rem);
}
.previous-leave-to {
  opacity: 0;
  transform: translateX(5rem);
}
.next-leave-to,
.previous-enter-from {
  opacity: 0;
  transform: translateX(-1rem);
}
.next-leave-active,
.previous-leave-active {
  position: absolute;
}
.smaller {
  height: 7px;
  width: 7px;
}
</style>
