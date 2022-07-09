<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style scoped>
.TabBar {
  display: flex;
  width: 100%;
  height: 1.3067rem;
  background-color: rgb(227, 167, 167);
}
</style>