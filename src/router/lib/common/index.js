/**
 * @description 公共组件的路由
 */

const SelfAdaption = {
    path: 'selfAdaption',
    name: 'selfAdaption',
    component: () => import("@/views/common/selfAdaption/SelfAdaption.vue")
}

const FailReason = {
    path: 'failReason',
    name: 'failReason',
    component: () => import("@/views/common/failed/failReason.vue")
}


module.exports = [
    SelfAdaption,
    FailReason
]