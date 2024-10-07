<template>
  <div class="flex flex-col justify-center h-full">
    <div class="flex items-end">
      <img
        class="w-1/2"
        :src="
          apiUrl +
          '/top-langs?username=' +
          username +
          commonOptions +
          '&layout=compact&langs_count=20'
        "
        alt="Top languages"
      />
      <img
        class="w-1/2"
        :src="
          apiUrl +
          '/?username=' +
          username +
          commonOptions +
          '&show_icons=true&hide_rank=true&custom_title=Github Statistics&hide=issues'
        "
        alt="Contribution statistics"
      />
    </div>
    <div class="flex justify-between mt-8">
      <div class="w-7/12 mx-7">
        In my free time, I work on projects that automate my day-to-day tasks
        and help other people. This practice keeps me up to date with the newest
        trends and best practices in software development, a crucial aspect of
        being an effective software engineer.
      </div>
      <img
        class="w-4/12 -translate-y-8 -translate-x-10"
        :src="
          'https://github-readme-streak-stats.herokuapp.com/?user=' +
          username +
          commonOptions +
          '&hide_current_streak=true&hide_longest_streak=true&card_width=200&card_height=20&dates=222222&sideLabels=222222&sideNums=222222'
        "
        alt="Total contributions"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: "https://github-readme-stats.vercel.app/api",
      username: "quintenroets",
      commonOptions:
        "&theme=transparent&text_color=2c3e50&title_color=222222&hide_border=true&locale=en&disable_animations=true",
    };
  },
};
</script>
