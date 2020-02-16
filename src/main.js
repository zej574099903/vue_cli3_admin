import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from '../node_modules/ant-design-vue'
import 'ant-design-vue/dist/antd.css'
 
Vue.use(Antd)

// 引入common.css
import './assets/css/common.css';
// global.css
import './assets/css/global.css';
// 引入base.css
import './assets/css/base.less';
// 引入layout.css（响应式布局）
import './assets/css/layout.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
