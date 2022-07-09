<template>
  <div class="home">
    <PullRefresh class="PullRefresh">
      <NavBarMin class="NavBarMins" />
      <SwiperMin class="swiper" :dataSwiper="dataSwiper" />
      <p>刷新次数: {{ count }}</p>
    </PullRefresh>
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
.home {
  position: absolute;
  top: 1.1733rem;
  width: 100vw;
  height: calc(100vh - 1.1733rem - 1.3067rem);
  background-color: rgb(243, 226, 229);
}

.PullRefresh {
  height: 100%;
}
</style>