<template>
  <div class="recommend">
    <div v-for="item in 100" :key="item">推荐{{ item }}</div>
  </div>
</template>

<script>
// 全局总线
import Bus from "@/assets/js/eventHub";
export default {
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    Bus.$on("apparelImgLod", () => {
      this.getrecommendTop();
    });
    // setTimeout(() => {
    //   this.getrecommendTop();
    // }, 1000);
  },
  beforeDestroy() {
    Bus.$off("apparelImgLod");
  },
  methods: {
    getrecommendTop() {
      this.scrollTop = document.querySelector(".recommend").offsetTop;
      // console.log(this.scrollTop, "454");
      this.$emit("recommendTop", this.scrollTop);
    },
  },
};
</script>

<style>
</style>