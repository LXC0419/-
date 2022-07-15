// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
// import Vue from 'vue';
// 导入vuex
import Vuex from 'vuex';

// Vue.useAttrs(Vue)

const store = new Vuex.Store({
  // 存储数据
  state: {
    dataCart: []
  },
  //方便调试
  mutations: {
    pushs(state, dat) {
      state.dataCart.push(dat)
    },
    pops(state) {
      state.dataCart.pop()
    },
    // 点击全选
    isSelect(state, isflg) {
      state.dataCart.forEach(val => {
        val.isflg = true
        console.log(val.isflg);
      })
    }
  },
  // 异步时使用
  actions: {},

  getters: {
    // 单选的判断
    isSel(state) {

    },

    // 购物车总价格
    sumPrice(state) {
      let sum = 0
      // state.dataCart[0].count
      // state.dataCart[0].datas.realPrice
      state.dataCart.forEach((val, index, arr) => {
        sum = val.count * val.datas.realPrice + sum
      })
      return sum
    }
  },
  modules: {}
})
// 导出配置 在main.js中导入并.use(vuex)
export default store