<template>
  <div class="flex flex-col items-start w-56">
    <a :href="'mailto:' + email" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-2xl w-8" />
        <span class="ml-2"> {{ email }} </span>
      </div>
    </a>

    <a :href="'https://www.linkedin.com/' + linkedin" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl w-8" />
        <span class="ml-2"> {{ linkedin }} </span>
      </div>
    </a>

    <a :href="'https://www.github.com/' + github" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fab', 'github']" class="text-2xl w-8" />
        <span class="ml-2"> {{ github }} </span>
      </div>
    </a>

    <a :href="'https://www.' + website" target="_blank">
      <div class="block mt-4">
        <font-awesome-icon :icon="['fas', 'globe']" class="text-2xl w-8" />
        <span class="ml-2"> {{ website }} </span>
      </div>
    </a>

    <div class="block mt-4">
      <font-awesome-icon
        :icon="['fas', 'map-marker-alt']"
        class="text-2xl w-8"
      />
      <span class="ml-2"> {{ location }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconsBlock",
  data() {
    return {
      name: "Quinten Roets",
      location: "New York, USA",
      email: "qdr2104@columbia.edu",
      linkedin: "in/quintenroets",
      github: "quintenroets",
      website: "quintenroets.com",
    };
  },
};
</script>
