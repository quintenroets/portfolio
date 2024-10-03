<template>
  <div class="flex h-56 items-end">
    <img
      class="w-5/12"
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
      class="w-5/12"
      :src="
        apiUrl +
        '/?username=' +
        username +
        commonOptions +
        '&show_icons=true&hide_rank=true&custom_title=Github Statistics&hide=issues'
      "
      alt="Contribution statistics"
    />
    <img
      class="w-2/12"
      :src="
        'https://github-readme-streak-stats.herokuapp.com/?user=' +
        username +
        commonOptions +
        '&hide_current_streak=true&hide_longest_streak=true&card_width=150&card_height=225&dates=222222&sideLabels=222222&sideNums=222222'
      "
      alt="Total contributions"
    />
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
