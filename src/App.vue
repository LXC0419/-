<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <TabBarMinVue />
  </div>
</template>

<script>
import TabBarMinVue from "./components/content/homeChild/TabBarMin.vue";
export default {
  name: "App",
  components: {
    TabBarMinVue,
  },
};
</script>

<style>
</style>
