import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import eventHub from '@/assets/js/eventHub'


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
// 全局事件总线
const app = createApp(App);
// 配置全局事件总线
app.config.globalProperties.eventHub = eventHub;
console.log(eventHub)
// app.mount('#app');
// console.log(app.config.globalProperties.eventHub)