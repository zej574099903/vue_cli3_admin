/**
 * @description 公共组件的路由
 */

const SelfAdaption = {
    path: 'selfAdaption',
    name: 'selfAdaption',
    component: () => import("@/views/common/selfAdaption/SelfAdaption.vue")
  }
  
  
  module.exports = [
    SelfAdaption
  ]
  