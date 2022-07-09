<template>
  <div>
    <router-view></router-view>
    <TabBarMinVue />
  </div>
</template>

<script>
import TabBarMinVue from "./components/content/TabBarMin.vue";
export default {
  name: "App",
  components: {
    TabBarMinVue,
  },
};
</script>

<style>
</style>
