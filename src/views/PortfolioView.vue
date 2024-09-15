<template>
  <div>
    <h1>Projects</h1>
    <img
      src="https://github-readme-stats.vercel.app/api/?username=quintenroets&theme=transparent&text_color=2c3e50&title_color=222222&hide_border=true&locale=en&show_icons=true&hide_rank=true&custom_title=Github Statistics&disable_animations=true&hide=issues"
      alt="GitHub Stats"
    />
    <img
      src="https://github-readme-stats.vercel.app/api/top-langs?username=quintenroets&layout=compact&theme=transparent&text_color=2c3e50&title_color=222222&hide_border=true&locale=en&langs_count=20"
      alt="GitHub Stats"
    />
    <img
      src="https://github-readme-streak-stats.herokuapp.com/?user=quintenroets&theme=transparent&text_color=2c3e50&title_color=222222&hide_current_streak=true&hide_longest_streak=true&card_width=200&card_height=50&hide_border=true&dates=222222&sideLabels=222222&sideNums=222222"
      alt="GitHub Stats"
    />
    <img
      src="https://github-readme-stats.vercel.app/api/pin/?username=quintenroets&repo=package-dev-tools"
      alt=""
      href="https://github-readme-stats.vercel.app/api/pin/?username=quintenroets&repo=package-dev-tools"
    />
    <div class="flex justify-center">
      <div class="max-w-2xl text-left mt-4">
        <p>
          In my free time, I create projects to automate my day-to-day tasks and
          help other people. This practice keeps me up to date with the newest
          trends and best practices in software development, a crucial aspect of
          being an effective software engineer.
        </p>
        <p>
          My recent open-source project,
          <a
            target="_blank"
            rel="noopener"
            href="https://pypi.org/project/canvasdl/"
            >canvasdl</a
          >, has received over 4,000 downloads within a month of its release.
          This Python package simplifies academic life by automating tasks like
          downloading materials, checking updates, and managing deadlines.
        </p>
        <p>
          For more details about my work, please visit my
          <a
            target="_blank"
            rel="noopener"
            href="https://www.github.com/quintenroets"
            >Github
          </a>
          page.
        </p>
      </div>
    </div>
    <ContributionsComponent />
  </div>
</template>

<script>
import { useHead } from "unhead";
import ContributionsComponent from "@/components/contributions/ContributionsComponent.vue";

export default {
  components: { ContributionsComponent },
  setup() {
    useHead({
      meta: [
        {
          name: "description",
          content:
            "Discover the unique projects that shaped my Software Engineering skills.",
        },
      ],
    });
  },
};
</script>
