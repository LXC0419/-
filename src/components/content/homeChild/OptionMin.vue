<template>
  <div>
    <Options>
      <div class="fx" v-for="(item, index) in optionData" :key="item">
        <span :class="{ isSelected: flg == index }" @click="isSelect(index)">{{
          item
        }}</span>
      </div>
    </Options>
  </div>
</template>

<script>
import Options from "../../common/Options.vue";
export default {
  name: "OptionMin",
  props: {
    optionData: {
      type: Array,
    },
  },
  components: {
    Options,
  },
  data() {
    return {
      flg: 0,
    };
  },
  methods: {
    isSelect(index) {
      this.flg = index;
      this.$emit("optClick", index);
    },
  },
};
</script>

<style scoped>
.fx {
  padding: 0.2133rem 0.1333rem;
  flex: 1;
  text-align: center;
  font-size: 0.64rem;
}
.isSelected {
  padding: 0 0.08rem 0.08rem;
  border-bottom: 0.08rem solid pink;
  color: pink;
}
</style>