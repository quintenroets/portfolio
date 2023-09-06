<template>
  <div>
    <h1>Projects</h1>
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
          <a href="https://pypi.org/project/canvasdl/">canvasdl</a>, has
          received over 4,000 downloads within a month of its release. This
          Python package simplifies academic life by automating tasks like
          downloading materials, checking updates, and managing deadlines.
        </p>
        <p>
          For more details about my work, please visit my
          <a href="https://www.github.com/quintenroets">Github </a>
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
