<template>
  <div>
    <Swiper>
      <van-swipe-item class="Dswiper" v-for="item in imgSwiper" :key="item">
        <img :src="item" alt="" />
      </van-swipe-item>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/Swiper.vue";
export default {
  props: {
    imgSwiper: {
      type: Array,
    },
  },
  components: {
    Swiper,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  /* height: 100%; */
}
.Dswiper {
  height: 10.1333rem;
}
</style>