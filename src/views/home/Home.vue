<template>
  <div class="home" ref="home">
    <NavBarMin class="NavBarMins" />
    <div class="vh">
      <PullRefresh class="PullRefresh">
        <SwiperMin class="swiper" :dataSwiper="dataSwiper" />
        <Recommend :recommend="recommend" />
        <DayLike />
        <Vant_Sticky class="Hsticky">
          <OptionMin
            class="HoptionMin"
            :optionData="optionData"
            @optClick="optClick"
          />
        </Vant_Sticky>
        <Shopping :homeData="homeData[currentType]" />
        <PinMap
          class="PinMap"
          :style="{ display: isPinMap }"
          @topClick="topClick"
        />
      </PullRefresh>
      <div class="bottom" ref="bottom"></div>
    </div>
  </div>
</template>

<script>
// 引入轮数据
import { getHomeSwiper, getHomeData } from "../../network/nethome";
// 引入vant Sticky的插件
import Vant_Sticky from "@/components/common/Vant_Sticky.vue";
// 引入标题栏
import NavBarMin from "@/components/content/homeChild/NavBarMin.vue";
// 引入轮播图
import SwiperMin from "@/components/content/homeChild/SwiperMin.vue";
// 引入下拉刷新
import PullRefresh from "@/components/content/homeChild/PullRefresh.vue";
// 引入推荐
import Recommend from "@/components/content/homeChild/Recommend.vue";
// 引入喜欢
import DayLike from "@/components/content/homeChild/DayLike.vue";
// 引入选项
import OptionMin from "@/components/content/homeChild/OptionMin.vue";
// 引入商品
import Shopping from "@/components/content/homeChild/Shopping.vue";
// 引入置顶图标
import PinMap from "@/components/common/PinMap.vue";

export default {
  name: "Home",
  components: {
    NavBarMin,
    SwiperMin,
    PullRefresh,
    Recommend,
    DayLike,
    OptionMin,
    Shopping,
    Vant_Sticky,
    PinMap,
  },
  data() {
    return {
      dataSwiper: [],
      recommend: [],
      optionData: ["流行", "新歌", "精选"],
      homeData: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      topNum: 0,
      topNums: 0,
      isPinMap: "none",
    };
  },
  created() {
    this.getHomeSwipers();
    this.getDatas("pop");
    this.getDatas("new");
    this.getDatas("sell");
  },
  mounted() {
    // 添加滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      //获取滚动时的高度

      // 下拉刷新
      const a = document.documentElement.scrollTop + window.innerHeight;
      const b = this.$refs.bottom.offsetTop;
      this.topNums = document.documentElement.scrollTop;
      if (a > b) {
        this.getDatas(this.currentType);
      }
      // 显示隐藏置顶图标
      if (this.topNums > 530) {
        this.isPinMap = "block";
      } else {
        this.isPinMap = "none";
      }
    },
    // 获取轮播图数据
    getHomeSwipers() {
      getHomeSwiper().then((res) => {
        this.dataSwiper = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        // console.log(res.data.data);
      });
    },
    // 获取选项卡详细数据
    getDatas(type) {
      const page = this.homeData[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.homeData[type].list.push(...res.data.data.list);
        this.homeData[type].page += 1;
      });
    },
    optClick(idx) {
      switch (idx) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 点击置顶图标时回到顶部
    topClick() {
      setInterval(() => {}, 1);
      // document.documentElement.scrollTop = 0;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {},
  // 当前页面活动时赋值滚动高度
  activated() {
    document.documentElement.scrollTop = this.topNum;
  },
  // 当前页面离开时获取当前滚动高度
  deactivated() {
    this.topNum = this.topNums;
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

.HoptionMin {
  background-color: rgb(255, 255, 255);
}
.PinMap {
  position: fixed;
  top: 520px;
  right: 10px;
}
</style>