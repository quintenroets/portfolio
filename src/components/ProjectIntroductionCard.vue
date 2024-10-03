<template>
  <div>
    <GithubStatisticsComponent />
    <div class="ml-8">
      In my free time, I work on projects that automate my day-to-day tasks and
      help other people. This practice keeps me up to date with the newest
      trends and best practices in software development, a crucial aspect of
      being an effective software engineer.
      <p>
        Scroll to see my projects and go to my
        <a
          target="_blank"
          rel="noopener"
          href="https://www.github.com/quintenroets"
          >Github
        </a>
        page find all 33 of them.
      </p>
    </div>
  </div>
</template>

<script>
import GithubStatisticsComponent from "@/components/GithubStatisticsComponent.vue";
export default {
  components: {
    GithubStatisticsComponent,
  },
};
</script>
