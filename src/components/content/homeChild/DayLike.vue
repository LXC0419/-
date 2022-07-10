<template>
  <div class="dayLike">
    <div><span>当你沉睡时</span></div>
    <div @click="btnClick">
      <img src="@/assets/img/imghome/cxs.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DayLike",
  methods: {
    btnClick() {
      location.assign("https://www.xcyhd.com/play/25612/2-1.html");
    },
  },
};
</script>

<style scoped>
.dayLike img {
  width: 100%;
  border-radius: 0.08rem;
  vertical-align: middle;
}
.dayLike div:first-child {
  padding: 0.1333rem;
  background-color: rgb(166, 135, 135);
}
.dayLike span {
  font-size: 0.48rem;
  border-radius: 0.1333rem;
  color: rgb(96, 0, 51);
  font-weight: 700;
}
</style>