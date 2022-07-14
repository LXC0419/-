<template>
  <div class="Dcomment">
    <div v-for="item in 100" :key="item">评论{{ item }}</div>
  </div>
</template>

<script>
// 全局事件
import Bus from "@/assets/js/eventHub";
export default {
  props: ["isImgLod"],
  data() {
    return {
      scrollTop: 0,
    };
  },

  created() {
    Bus.$on("apparelImgLod", () => {
      this.getDcommentTop();
    });
  },
  beforeDestroy() {
    Bus.$off("apparelImgLod");
  },
  // watch: {
  //   isImgLod(val) {
  //     if (this.isImgLod) {
  //       this.getDcommentTop();
  //       this.loadimgs = false;
  //     }
  //   },
  // },
  mounted() {
    this.getDcommentTop();
    // setTimeout(() => {
    //   this.getDcommentTop();
    // }, 1000);
  },
  methods: {
    getDcommentTop() {
      this.scrollTop = document.querySelector(".Dcomment").offsetTop;
      this.$emit("commentTop", this.scrollTop);
    },
  },
};
</script>

<style scoped>
</style>