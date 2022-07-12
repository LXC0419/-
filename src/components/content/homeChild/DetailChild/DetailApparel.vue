<template>
  <div>
    <div class="descss">
      {{ apparel.desc }}
    </div>
    <div class="keyss" v-for="item in apparel.detailImage" :key="item">
      {{ item.key }}
    </div>
    <!-- <div>
      {{ apparel.detailImage[0] }}
    </div> -->
    <div class="keyss" v-for="item in apparel.detailImage" :key="item">
      <div v-for="items in item.list" :key="items">
        <img :src="items" alt="" />
      </div>
    </div>
    <!-- <div v-for="(item, index) in apparel.detailImage[0].list" :key="index">
      <img :src="item" alt="" />
    </div>  -->
  </div>
</template>

<script>
export default {
  name: "DetailApparel",
  props: ["apparel"],
  mounted() {
    // console.log(this.apparel);
  },
};
</script>

<style scoped>
.descss {
  font-size: 12px;
  color: rgb(85, 85, 85);
}
.keyss {
  margin-top: 20px;
  color: rgb(83, 83, 83);
}
img {
  width: 100%;
}
</style>