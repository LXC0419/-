<template>
  <div class="NavBar">
    <div class="NavBar_btn1"><slot name="left"></slot></div>
    <div class="NavBar_btn2"><slot name="center"></slot></div>
    <div class="NavBar_btn3"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.NavBar {
  display: flex;
  height: 1.1733rem;
  align-items: center;
}
.NavBar_btn1 {
  flex: 2;
  text-align: center;
}
.NavBar_btn2 {
  flex: 6;
  font-size: 0.5333rem;
  text-align: center;
}
.NavBar_btn3 {
  flex: 2;
  text-align: center;
}
</style>