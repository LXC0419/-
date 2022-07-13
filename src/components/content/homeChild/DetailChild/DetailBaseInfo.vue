<template>
  <div>
    <div class="Dtopic" v-if="datas.services">
      <div class="Dtitle">{{ datas.title }}</div>
      <div>
        <span class="Dprice">{{ datas.newPrice }}</span>
        <span class="DoldPrice">{{ datas.oldPrice }}</span>
        <span class="Ddiscount">{{ datas.discount }}</span>
      </div>
      <div class="columns">
        <span>{{ datas.columns[0] }}</span>
        <span>{{ datas.columns[1] }}</span>
        <span>{{ datas.services[datas.services.length - 1].name }}</span>
      </div>
      <div class="services">
        <span
          ><img :src="datas.services[0].icon" alt="" />{{
            datas.services[0].name
          }}
        </span>
        <span
          ><img :src="datas.services[1].icon" alt="" />{{
            datas.services[1].name
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      default() {
        return {
          columns: [],
        };
      },
    },
  },
  mounted() {
    // console.log(this.datas);
  },
};
</script>

<style scoped>
.Dtitle {
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; */
  font-size: 0.3733rem;
}
.Dtopic {
  text-align: justify;
  padding: 0.2667rem 0.2667rem 0;
}
.Dprice {
  font-size: 0.5867rem;
  color: rgb(255, 76, 76);
}
.DoldPrice {
  margin-left: 0.4rem;
  text-decoration: line-through;
  font-size: 0.4267rem;
  color: rgb(135, 135, 135);
}
.Ddiscount {
  margin-left: 0.2667rem;
  background-color: rgb(216, 142, 142);
  border-radius: 20%;
  color: #fff;
  font-size: 0.48rem;
}
.columns {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2667rem;
  color: rgb(152, 152, 152);
}
.services {
  margin-top: 0.2667rem;
  padding: 0.5333rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 0.0267rem solid rgba(238, 238, 238, 0.499);
  border-bottom: 0.1333rem solid rgba(204, 199, 199, 0.245);
  color: rgb(138, 138, 138);
  box-sizing: border-box;
}
.services img {
  width: 0.4267rem;
  vertical-align: top;
}
.services span {
  font-size: 0.4267rem;
}
.columns {
  font-size: 0.4267rem;
}
</style>