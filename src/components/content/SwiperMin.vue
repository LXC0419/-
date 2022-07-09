<template>
  <div>
    <Swiper>
      <van-swipe-item
        v-for="item in dataSwiper"
        :key="item"
        @click="SwiperClick(item)"
        stop-propagation="true"
      >
        <img :src="item.image" alt="" />
      </van-swipe-item>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "../common/Swiper.vue";
export default {
  name: "SwiperMin",
  props: {
    dataSwiper: {
      type: Array,
    },
  },
  components: {
    Swiper,
  },
  methods: {
    SwiperClick(item) {
      location.push(item.link);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>