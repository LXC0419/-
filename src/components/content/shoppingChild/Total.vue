<template>
  <div class="total">
    <div class="total_son1" @click="isClick">
      <span v-if="isFlg" class="iconfont icon-ico2"></span>
      <span v-else class="iconfont icon-ico1 isRed"></span>
      全选
    </div>
    <div class="total_son2">
      合计<span> ￥{{ $store.getters.sumPrice }}</span>
    </div>
    <div class="total_son3">去结算</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: null,
      isFlg: true,
    };
  },
  methods: {
    isClick() {
      this.$emit("newGet");
      this.isFlg = !this.isFlg;
      let a = null;
      if (!this.isFlg) {
        this.$store.commit("isSelect");
      }
    },
  },
  mounted() {
    this.datas = this.$store.state.dataCart;
  },
};
</script>

<style scoped>
.isRed {
  color: rgb(234, 109, 109);
}
.total {
  display: flex;
  font-size: 0.5333rem;
  background-color: #eee;
}
.total_son1 {
  flex: 1;
}
.total_son2 {
  flex: 1.8;
  justify-content: start !important;
}
.total_son1 span {
  font-size: 0.56rem !important;
}
.total_son3 {
  flex: 1.3;
  background-color: red;
}
.total > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>