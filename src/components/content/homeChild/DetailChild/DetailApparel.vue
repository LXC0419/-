<template>
  <div v-if="apparel.detailImage">
    <div class="descss">
      {{ apparel.desc }}
    </div>
    <div class="keyss keyss1" v-for="item in apparel.detailImage" :key="item">
      {{ item.key }}
    </div>
    <div class="keyss" v-for="item in apparel.detailImage" :key="item">
      <div v-for="items in item.list" :key="items">
        <img :src="items" alt="" />
      </div>
    </div>
    <div v-for="(item, index) in apparel.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="imgLoad" />
    </div>
  </div>
</template>

<script>
// 全局事件
import Bus from "@/assets/js/eventHub";
export default {
  name: "DetailApparel",
  props: ["apparel"],

  updated() {
    this.getScrollKeyss1();
    // this.loadimgs(this.getScrollKeyss1);
    // console.log(this.apparel);
  },
  methods: {
    getScrollKeyss1() {
      const scrollTop =
        document.querySelector(".descss").offsetTop ||
        document.querySelector(".keyss1").offsetTop;
      this.$emit("getAscrollTop", scrollTop);
    },

    // 图片加载事件

    imgLoad() {
      // console.log("555555");
      // this.$emit("apparelimgLoad");
      Bus.$emit("apparelImgLod", new Date().getTime());
    },
  },
};
</script>

<style scoped>
.descss {
  padding-top: 1.1733rem;
  font-size: 0.32rem;
  color: rgb(85, 85, 85);
}
.keyss {
  padding-top: 0.5333rem;
  color: rgb(83, 83, 83);
}
img {
  width: 100%;
}
</style>