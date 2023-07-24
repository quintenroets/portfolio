<template>
  <div>
    <div class="flex">
      <a :href="info.url">
        <img
          class="w-20 h-20 mb-4 mr-4"
          :src="'/logos/' + info.logo"
          alt="Company logo"
        />
      </a>
      <div class="flex flex-col">
        <p style="font-weight: bold">{{ info.function }}</p>
        <p>
          <a :href="info.url" style="color: #2c3e50">{{ info.company }} </a>
          • {{ info.type }}
        </p>

        <p>{{ info.duration }}</p>
        <p>{{ info.location }}</p>
      </div>
    </div>

    <ul class="list-disc list-inside">
      <span v-for="(item, index) in info.bullets" :key="index">
        <span class="flex">
          <li></li>
          <span>
            {{ item }}
          </span>
        </span>
      </span>
    </ul>
  </div>
</template>

<style scoped>
a {
  color: #2980b9;
}

p {
  margin-bottom: 0 !important;
  font-size: 14px !important;
}
</style>
<script>
export default {
  name: "ExperienceCard",
  props: {
    info: {},
  },
};
</script>
