<template>
  <div>
    <h1 class="my-4 mt-10">Open-source Contributions</h1>
    <div class="flex justify-center">
      <div class="px-12 relative">
        <div
          class="bg-almost-white rounded-xl shadow-lg w-[39rem] h-72 border-2"
        >
          <div class="p-6 text-left">
            <NavigationButtonsComponent
              v-bind:current-index="currentIndex"
              v-bind:total="numberOfContributions"
              @next="next"
              @previous="previous"
            />
            <div class="flex justify-between">
              <a
                target="_blank"
                rel="noopener"
                :href="fullProjectUrl"
                class="flex items-center"
              >
                <div
                  class="image-wrapper w-9 aspect-1 bg-almost-white"
                  :class="
                    contribution.project === 'Pytorch Lightning'
                      ? 'mr-1'
                      : 'mr-2.5'
                  "
                >
                  <img
                    :src="logoUrl"
                    alt="Project logo"
                    v-if="contribution.projectLogoUrl"
                  />
                  <div class="bg-gray-300 w-9 h-9 rounded-lg" v-else />
                </div>
                <div class="text-xl text-dark">
                  {{ contribution.project }}
                </div>
              </a>
              <a
                target="_blank"
                class="text-xl"
                rel="noopener"
                :href="this.fullProjectUrl + '/pull/' + contribution.number"
              >
                <font-awesome-icon
                  class="w-5 h-5 text-dark !important"
                  :icon="['fab', 'github']"
                />
                #{{ contribution.number }}
              </a>
            </div>

            <div class="text-lg font-bold my-3">
              {{ contribution.title }}
            </div>
            <ul class="list-disc ml-4">
              <span
                class="flex text-left"
                v-for="line in contribution.bullets"
                :key="line"
              >
                <li>
                  <span v-html="line"></span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
import contributions from "../assets/contributions.json";
import NavigationButtonsComponent from "@/components/NavigationButtonsComponent.vue";
const requireLogo = require.context("@/assets/logos/", false, /\.webp$/);
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    contribution() {
      return contributions[this.currentIndex];
    },
    numberOfContributions() {
      return contributions.length;
    },
    fullProjectUrl() {
      return "https://github.com/" + this.contribution.projectUrl;
    },
    logoUrl() {
      return requireLogo("./" + this.contribution.projectLogoUrl);
    },
  },
  methods: {
    next() {
      this.currentIndex++;
    },
    previous() {
      this.currentIndex--;
    },
  },
  components: {
    NavigationButtonsComponent,
    FontAwesomeIcon,
  },
};
</script>
