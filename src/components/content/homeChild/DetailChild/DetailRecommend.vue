<template>
  <div class="recommend">
    <div v-for="item in 100" :key="item">推荐{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.getrecommendTop();
    }, 1000);
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