<template>
  <div class="Shopping">
    <ul>
      <li v-for="item in homeData.list" :key="item">
        <div class="shImg"><img :src="item.show.img" alt="" /></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Shopping",
  props: {
    homeData: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.Shopping {
  margin-top: 0.2667rem;
}
.Shopping ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.Shopping ul li {
  width: 48vw;
}
.shImg {
  width: 100%;
}
.shImg img {
  width: 100%;
}
</style>