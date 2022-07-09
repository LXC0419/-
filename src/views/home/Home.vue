<template>
  <div class="home">
    <NavBarMin class="NavBarMins" />
    <div class="vh">
      <PullRefresh class="PullRefresh">
        <SwiperMin class="swiper" :dataSwiper="dataSwiper" />
        <p v-for="index in 1000" :key="index">111111</p>
      </PullRefresh>
    </div>
  </div>
</template>

<script>
// 引入轮播图数据
import { getHomeSwiper } from "../../network/nethome";
// 引入标题栏
import NavBarMin from "@/components/content/NavBarMin.vue";
// 引入轮播图
import SwiperMin from "@/components/content/SwiperMin.vue";
// 引入下拉刷新
import PullRefresh from "@/components/content/PullRefresh.vue";
export default {
  name: "Home",
  components: {
    NavBarMin,
    SwiperMin,
    PullRefresh,
  },
  data() {
    return {
      dataSwiper: null,
    };
  },
  created() {
    getHomeSwiper().then((res) => {
      this.dataSwiper = res.data.data.banner.list;
      console.log(this.dataSwiper);
    });
  },
};
</script>

<style scoped>
.NavBarMins {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
}
.vh {
  position: absolute;
  width: 100%;
  top: 1.1733rem;
}
</style>