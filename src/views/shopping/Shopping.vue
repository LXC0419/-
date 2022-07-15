<template>
  <div>
    <div class="cartNav">购物车</div>
    <div v-for="item in datas1" :key="item">
      <ul>
        <li>
          <div class="btn" @click="item.isflg = !item.isflg">
            <span v-if="item.isflg" class="iconfont icon-ico2"></span>
            <span v-else class="iconfont icon-ico1 isRed"></span>
          </div>
          <div><img :src="item.imgSwiper" alt="" /></div>
          <div class="info">
            <div class="textOvh">{{ item.datas.title }}</div>
            <div class="price">
              ￥{{ item.datas.realPrice * item.count }}
              <span
                >x{{ item.count }} <button @click="addOne(item.id)">+</button
                ><button
                  @click="reduce(item.id)"
                  :disabled="item.count == 1 ? true : false"
                >
                  -
                </button></span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Total class="Stotal" @newGet="newGet" />
  </div>
</template>

<script>
// 导入底部计算模块
import Total from "@/components/content/shoppingChild/Total.vue";
export default {
  components: {
    Total,
  },
  data() {
    return {
      datas1: null,
    };
  },
  mounted() {
    // 获取vuex中的id的购物车数据
    this.datas1 = this.$store.state.dataCart;
    // console.log(this.datas1);
  },
  methods: {
    addOne(id) {
      this.datas1.forEach((value, index, arr) => {
        // console.log(value);
        if (value.id == id) {
          value.count++;
        }
      });
    },
    reduce(id) {
      this.datas1.forEach((value, index, arr) => {
        if (value.id == id) {
          if (value.count > 1) {
            value.count--;
          }
        }
      });
    },
    newGet() {
      this.datas1 = this.$store.state.dataCart;
    },
  },
};
</script>

<style scoped>
.cartNav {
  text-align: center;
  width: 100%;
  height: 1.1733rem;
  line-height: 1.1733rem;
  font-weight: 700;
  color: aliceblue;
  background-color: #ff8e96;
}
img {
  height: 3.2rem;
  border-radius: 10%;
  vertical-align: middle;
  margin-left: 0.2667rem;
}
ul {
  margin: 0.5333rem;
}
li {
  display: flex;
  width: 100%;
  margin-top: 0.5333rem;
}
.textOvh {
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  width: 5.4667rem;
  font-size: 0.48rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.textSon {
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  width: 5.4667rem;
  font-size: 0.48rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.icon-ico2,
.icon-ico1 {
  font-size: 0.8rem;
}
.info {
  padding-left: 0.2667rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.5333rem;
}
.price {
  color: rgb(214, 97, 97);
}
.price span {
  float: right;
  color: black;
}
button {
  width: 30px;
}
.btn {
  display: flex;
  align-items: center;
}
.isRed {
  color: red;
}
.Stotal {
  position: fixed;
  width: 100%;
  height: 1.0667rem;
  bottom: 1.3067rem;
}
</style>