<template>
  <div class="TabBar_btn" @click="Btn_click">
    <div v-if="isColor" class="btn_1"><slot name="Btn_img1"></slot></div>
    <div v-else class="btn_1"><slot name="Btn_img2"></slot></div>
    <div class="btn_2" :class="{ color: isColor }">
      <slot name="Btn_txt"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar_btn",
  props: {
    path: {
      type: String,
    },
  },

  methods: {
    Btn_click() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isColor() {
      return this.$route.path == this.path;
    },
  },
};
</script>

<style scoped>
.TabBar_btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.color {
  color: red;
}
.btn_1 {
  width: 1.3333rem;
  height: 1.3333rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.32rem;
}
.btn_2 {
  padding-bottom: 0.0533rem;
}
</style>