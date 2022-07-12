<template>
  <div class="Shopping">
    <ul>
      <li v-for="item in homeData.list" :key="item" @click="jumpClick(item)">
        <div class="shImg"><img :src="item.show.img" /></div>
        <div class="title">{{ item.title }}</div>
        <div class="price">
          <span>{{ item.price }}</span> <span>{{ item.orgPrice }}</span>
        </div>
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
  methods: {
    jumpClick(item) {
      this.$router.push("/detail/" + item.iid);
    },
  },
};
</script>

<style scoped>
.Shopping {
  /* margin-top: 0.2667rem; */
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
.price span:first-child {
  font-size: 0.48rem;
  color: rgb(237, 108, 108);
}
.price span:last-child {
  text-decoration: line-through;
  font-size: 0.3733rem;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.32rem;
}
</style>