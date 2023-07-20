<template>
  <div>
    <RouterBar />
    <SidebarComponent class="w-full" />
  </div>
</template>

<script>
import RouterBar from "./RouterBar.vue";
import SidebarComponent from "@/components/Sidebar.vue";

export default {
  name: "WebApp",
  components: { SidebarComponent, RouterBar },
};
</script>
