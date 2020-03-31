import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from '../node_modules/ant-design-vue'
 
Vue.use(Antd);


// 引入ant样式
import 'ant-design-vue/dist/antd.css'
// 引入common.css（初始格式化样式）
import './assets/css/common.css';
// global.css（全局样式）
import './assets/css/global.less';
// 引入base.css（页面样式，或多处使用的局部样式）
import './assets/css/base.less';
// 引入layout.css(修改ui组件的默认样式)
import './assets/css/layout.less';
// 引入媒体查询的样式
import './assets/css/media.less';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
