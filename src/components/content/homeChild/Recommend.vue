<template>
  <div class="recommend">
    <ul>
      <li
        v-for="item in recommend"
        :key="item.sort"
        @click="btnClick(item.link)"
      >
        <div><img :src="item.image" alt="" /></div>
        <div>
          <span>{{ item.title }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
    },
  },
  methods: {
    btnClick(link) {
      location.assign(link);
    },
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
}
.recommend ul {
  width: 100%;
  display: flex;
  padding: 0.1333rem 0;
}
.recommend ul li {
  flex: 1;
  font-size: 0.3733rem;
  text-align: center;
}
.recommend ul li img {
  width: 70%;
}
</style>