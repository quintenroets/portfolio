<template>
  <div class="flex">
    <SidebarComponent class="w-1/5 border-r fixed min-h-screen" />
    <div class="ml-auto w-4/5 max-h-screen">
      <RouterBar />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./Sidebar.vue";
import RouterBar from "./RouterBar.vue";

export default {
  name: "WebApp",
  components: { RouterBar, SidebarComponent },
};
</script>
