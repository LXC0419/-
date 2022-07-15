<template>
  <div class="Dbottombar">
    <div class="dBootomBar">
      <div><span class="iconfont icon-kehu"></span></div>
      <div>客服</div>
    </div>
    <div class="dBootomBar">
      <div><span class="iconfont icon-dianpu"></span></div>
      <div>店铺</div>
    </div>
    <div v-if="isflg" class="dBootomBar" @click="collectionClick">
      <div><span class="iconfont icon-shoucang"></span></div>
      <div>收藏</div>
    </div>

    <div v-else class="dBootomBar ifRed" @click="collectionClick">
      <div><span class="iconfont icon-shoucang"></span></div>
      <div>已收藏</div>
    </div>

    <div class="dBootomBar3" @click="addToCart"><div>加入购物车</div></div>
    <div class="dBootomBar4"><div>购买</div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isflg: true,
    };
  },
  methods: {
    collectionClick() {
      this.isflg = !this.isflg;
    },
    // 添加到购物车
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
.Dbottombar {
  display: flex;
  height: 1.4933rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 9;
  font-size: 0.5333rem;
  background-color: #eee;
}
.dBootomBar {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.48rem;
}
.dBootomBar span {
  font-size: 0.6933rem;
}
.dBootomBar3 {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffde0e;
}
.dBootomBar4 {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #ffffff;
  background-color: #ff779b;
}
.ifRed {
  color: red;
}
</style>