<template>
  <div class="dShopInfo">
    <div class="ShTop">
      <img :src="shopInfo.shopLogo" alt="" /><span>{{ shopInfo.name }}</span>
    </div>
    <div class="describe">
      <div class="describe_left">
        <div>
          <div>{{ fixed }}万</div>
          <div class="jieshi">总销量</div>
        </div>
        <div>
          <div>{{ shopInfo.cGoods }}</div>
          <div class="jieshi">全部宝贝</div>
        </div>
      </div>
      <div class="describe_right">
        <div v-for="item in shopInfo.score" :key="item">
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
          <span class="ifGreen" :class="{ ifRed: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="entrance"><span>进入店铺</span></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    fixed() {
      const num = this.shopInfo.cSells / 10000;
      return num.toFixed(1);
    },
  },
};
</script>

<style scoped>
-- > .ShTop {
  padding: 0 0.2667rem;
  height: 2.6667rem;
  line-height: 100px;
}
.ShTop img {
  width: 60px;
  vertical-align: middle;
}
.ShTop span {
  margin-left: 0.5333rem;
  color: rgb(145, 145, 145);
  font-weight: 700;
  font-size: 0.5333rem;
}
.describe {
  height: 3.3333rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.describe > div {
  flex: 1;
}
.describe_left {
  display: flex;
  justify-content: space-around;
  margin: 0 0.4rem;
  height: 1.3333rem;
  border-right: 1px solid rgb(208, 207, 207);
}
.describe_left > div {
  font-weight: 700;
  color: rgb(62, 60, 60);
  font-size: 0.48rem;
  text-align: center;
}
.jieshi {
  margin-top: 0.2667rem;
  font-size: 0.4rem;
}
.ifGreen {
  background-color: rgb(129, 230, 129);
}
.ifRed {
  background-color: rgb(218, 112, 112);
}
.describe_right {
  height: 70%;
  display: flex;
  flex-direction: column;
}
.describe_right div {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2667rem;
  align-items: center;
  font-size: 0.48rem;
}
.entrance {
  height: 1.0667rem;
  text-align: center;
}
.entrance span {
  padding: 0.1333rem 40px;
  border-radius: 0.2133rem;
  font-size: 0.64rem;
  background-color: #eee;
}
</style>