<template>
  <div>
    <Navbar>
      <template v-slot:left>
        <div class="navLeft" @click="backClick">&lt;</div>
      </template>
      <template v-slot:center>
        <div class="nav">
          <div
            class="navItem"
            v-for="(item, index) in navItems"
            :key="item"
            @click="itemClick(index)"
            :class="{ navstyle: Navidx == index }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../common/NavBar.vue";

export default {
  props: ["Navidx"],
  components: {
    Navbar,
  },
  data() {
    return {
      navItems: ["商品", "参数", "评论", "推荐"],
      count: 0,
    };
  },
  methods: {
    itemClick(index) {
      console.log(this.Navidx);
      this.$emit("itemClick", index);
    },
    backClick() {
      // this.$router.back();
      this.$router.go(-1);
    },
  },
  computed() {},
};
</script>

<style scoped>
.nav {
  display: flex;
}
.navItem {
  flex: 1;
}
.navLeft {
  text-align: center;
  font-size: 30px;
}
.navstyle {
  color: rgb(255, 116, 116);
}
</style>