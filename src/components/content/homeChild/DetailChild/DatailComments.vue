<template>
  <div class="Dcomment">
    <div v-for="item in 100" :key="item">评论{{ item }}</div>
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
      this.getDcommentTop();
    }, 1000);
  },
  methods: {
    getDcommentTop() {
      this.scrollTop = document.querySelector(".Dcomment").offsetTop;
      this.$emit("commentTop", this.scrollTop);
      // console.log(this.scrollTop, "444");
    },
  },
};
</script>

<style scoped>
</style>