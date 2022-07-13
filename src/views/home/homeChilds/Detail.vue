<template>
  <div ref="Detail" class="detail">
    <DetailNav class="detailNav" @itemClick="itemClick" :Navidx="Navidx" />
    <DetailSWiper class="Dswiper" :imgSwiper="imgSwiper" />
    <DatailBaseInfo :datas="datas" />
    <DetailShopInfo :shopInfo="shopInfo" />
    <DetailApparel
      ref="Dapparel"
      :apparel="apparel"
      @getAscrollTop="getAscrollTop"
    />
    <DatailComments @commentTop="commentTop" class="Dcomments" />
    <DetailRecommend @recommendTop="recommendTop" class="Drecommend" />
  </div>
</template>

<script>
import {
  getHomeDetail,
  DetailData,
  DetailShop,
} from "../../../network/netHomeDetail";
// 引入标题
import DetailNav from "@/components/content/homeChild/DetailChild/DetailNav.vue";
// 引入轮播图
import DetailSWiper from "@/components/content/homeChild/DetailChild/DetailSwiper.vue";
// 引入基本信息
import DatailBaseInfo from "@/components/content/homeChild/DetailChild/DetailBaseInfo.vue";
import DetailShopInfo from "@/components/content/homeChild/DetailChild/DetailShopInfo.vue";
import DetailApparel from "@/components/content/homeChild/DetailChild/DetailApparel.vue";
// 评论
import DatailComments from "@/components/content/homeChild/DetailChild/DatailComments.vue";
// 推荐
import DetailRecommend from "@/components/content/homeChild/DetailChild/DetailRecommend.vue";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSWiper,
    DatailBaseInfo,
    DetailShopInfo,
    DetailApparel,
    DatailComments,
    DetailRecommend,
  },
  data() {
    return {
      id: "",
      datas: {},
      imgSwiper: [],
      shopInfo: {},
      apparel: {},
      apparelSclTop: 0,
      Navidx: 0,
      commentSclTop: 0,
      recommendSclTop: 0,
    };
  },
  created() {
    this.getIid();
    this.getDetail();
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.getScroll);
  },
  updated() {},
  methods: {
    // 获取详情页的数据
    getDetail() {
      getHomeDetail(this.id).then((res) => {
        const resdata = res.data.result;
        this.datas = new DetailData(
          resdata.itemInfo,
          resdata.columns,
          resdata.shopInfo
        );
        // 获取轮播图图片
        this.imgSwiper = res.data.result.itemInfo.topImages;
        // 获取信息
        this.shopInfo = new DetailShop(res.data.result.shopInfo);
        this.apparel = res.data.result.detailInfo;
      });
    },
    // 获取id值
    getIid() {
      this.id = this.$route.params.id;
    },
    // 获取滚动距离
    getScroll() {
      // console.log(document.documentElement.scrollTop);
      let topScroll = document.documentElement.scrollTop;
      if (topScroll < this.apparelSclTop) {
        this.Navidx = 0;
      } else if (topScroll >= this.recommendSclTop) {
        this.Navidx = 3;
      } else if (topScroll >= this.commentSclTop) {
        this.Navidx = 2;
      } else if (topScroll >= this.apparelSclTop) {
        this.Navidx = 1;
      }
      console.log("--------------------");
    },
    // 获取参数模块的偏移量
    getAscrollTop(ofTop) {
      this.apparelSclTop = ofTop;
      // console.log(this.apparelSclTop, "0000");
    },
    // 获取评论模块的偏移量
    commentTop(ofTop) {
      this.commentSclTop = ofTop;
      // console.log(ofTop, "00001");
    },
    // 获取推荐模块的偏移量
    recommendTop(ofTop) {
      this.recommendSclTop = ofTop;
    },
    // nav模块点击传输事件
    itemClick(index) {
      console.log(index, "dd");
      this.Navidx = index;
      switch (index) {
        case 0:
          // document.documentElement.scrollTop = 0;
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          break;
        case 1:
          // document.documentElement.scrollTop = this.apparelSclTop;
          window.scrollTo({
            top: this.apparelSclTop,
            behavior: "smooth",
          });
          break;
        case 2:
          // document.documentElement.scrollTop = this.commentSclTop;
          window.scrollTo({
            top: this.commentSclTop,
            behavior: "smooth",
          });
          break;
        case 3:
          // document.documentElement.scrollTop = this.recommendSclTop;
          window.scrollTo({
            top: this.recommendSclTop,
            behavior: "smooth",
          });
          break;
      }
    },
  },
};
</script>

<style scoped>
.detailNav {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: rgb(255, 211, 110);
}
.Dswiper {
  margin-top: 1.1733rem;
}
.Dcomments {
  padding-top: 1.3333rem;
}
.Drecommend {
  padding-top: 1.3333rem;
}
</style>