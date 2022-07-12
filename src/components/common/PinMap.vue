<template>
  <div>
    <svg class="icon pinMap" aria-hidden="true" @click="topClick">
      <use xlink:href="#icon-zhiding"></use>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    topClick() {
      this.$emit("topClick");
    },
  },
};
</script>

<style scoped>
.pinMap {
  font-size: 1.4667rem;
}
</style>