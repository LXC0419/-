<template>
  <div>
    <DetailNav class="detailNav" />
    <DetailSWiper :imgSwiper="imgSwiper" />
    <DatailBaseInfo :datas="datas" />
    <!-- <DetailShopInfo :shopInfo="shopInfo" /> -->
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
// import DetailShopInfo from "@/components/content/homeChild/DetailChild/DetailShopInfo.vue";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSWiper,
    DatailBaseInfo,
    // DetailShopInfo,
  },
  data() {
    return {
      id: "",
      datas: {},
      imgSwiper: [],
      shopInfo: {},
      apparel: {},
    };
  },
  created() {
    this.getIid();
    this.getDetail();
  },
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
  },
};
</script>

<style scoped>
.detailNav {
  background-color: rgba(255, 212, 110, 0.784);
}
</style>