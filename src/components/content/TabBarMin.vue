<template>
  <div>
    <TabBar class="TabBars">
      <TabBar_btn path="/home">
        <template v-slot:Btn_img1>
          <svg class="icon ic_fs" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
        </template>
        <template v-slot:Btn_img2>
          <span class="iconfont icon-shouye ic_fs2"></span>
        </template>
        <template v-slot:Btn_txt> 首页 </template>
      </TabBar_btn>

      <TabBar_btn path="/classif">
        <template v-slot:Btn_img1>
          <svg class="icon ic_fs" aria-hidden="true">
            <use xlink:href="#icon-fenlei"></use>
          </svg>
        </template>
        <template v-slot:Btn_img2>
          <span class="iconfont icon-fenlei ic_fs2"></span>
        </template>
        <template v-slot:Btn_txt> 分类 </template>
      </TabBar_btn>

      <TabBar_btn path="/shopping">
        <template v-slot:Btn_img1>
          <svg class="icon ic_fs" aria-hidden="true">
            <use xlink:href="#icon-gouwuchexiadan"></use>
          </svg>
        </template>
        <template v-slot:Btn_img2>
          <span class="iconfont icon-gouwuchexiadan ic_fs2"></span>
        </template>
        <template v-slot:Btn_txt> 购物车 </template>
      </TabBar_btn>

      <TabBar_btn path="/infor">
        <template v-slot:Btn_img1>
          <svg class="icon ic_fs" aria-hidden="true">
            <use xlink:href="#icon-20like"></use>
          </svg>
        </template>
        <template v-slot:Btn_img2>
          <span class="iconfont icon-20like ic_fs2"></span>
        </template>
        <template v-slot:Btn_txt> 我的 </template>
      </TabBar_btn>
    </TabBar>
  </div>
</template>

<script>
import TabBar_btn from "../common/TabBar-btn.vue";
import TabBar from "../common/TabBar.vue";
export default {
  mame: "TabBar_btn",
  components: {
    TabBar_btn,
    TabBar,
  },
};
</script>

<style scoped>
.TabBars {
  position: fixed;
  padding-top: 0.08rem;
  bottom: 0;
  font-size: 0.3733rem;
}

.ic_fs {
  font-size: 0.6667rem;
}
.ic_fs2 {
  font-size: 0.5rem;
  color: rgb(103, 0, 55);
}
</style>