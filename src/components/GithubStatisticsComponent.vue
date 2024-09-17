<template>
  <div>
    <div class="image-wrapper w-full aspect-2 bg-background-white">
      <img
        :src="
          apiUrl +
          '/?username=' +
          username +
          commonOptions +
          '&show_icons=true&hide_rank=true&custom_title=Github Statistics&hide=issues'
        "
        alt="Contribution statistics"
        class="w-full"
      />
    </div>
    <div class="image-wrapper w-full aspect-2 bg-background-white">
      <img
        :src="
          apiUrl +
          '/top-langs?username=' +
          username +
          commonOptions +
          '&layout=compact&langs_count=20'
        "
        alt="Top languages"
        class="w-full"
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
