import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';


createApp(App).use(store).use(router).use(Vant).mount('#app')
// 初始化样式
import('../src/assets/css/base.css')
// 适配的js
import('./assets/js/flexible')
// 字体图标
import('./assets/icon/iconfont')
import('./assets/icon/iconfont.css')

// vant的样式
import 'vant/lib/index.css';