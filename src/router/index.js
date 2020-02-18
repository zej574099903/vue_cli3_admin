import Vue from "vue";
import VueRouter from "vue-router";

import NProgress from 'nprogress' // 页面跳转时顶部进度条
import '@/components/NProgress/nprogress.less' // 页面进度条的样式
import { setDocumentTitle, domTitle } from '@/utils/domUtil'//设置标签栏头部信息

NProgress.configure({ showSpinner: false }) // NProgress Configuration


// 系统登录页
const Login = () => import("@/views/Login");
// 系统主页
const Main = () => import("@/views/main/Main");
const Theme = () => import("@/views/main/theme/Theme");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    redirect: "/main/theme",
    children: [
      {
        path: "theme",
        name: "theme",
        component: Theme
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 全局前置守卫，用于权限拦截
router.beforeEach((to, from, next) => {
  let accessPathName = ["login"]; // 不需要登陆就可以直接访问
  NProgress.start() // start progress bar
  if (sessionStorage.getItem("token")) {
    // 如果已登陆，即可放行
    next();
    NProgress.done()
  } else if (accessPathName.indexOf(to.name) > -1) {
    /**
     * 此时是没有登陆的情况，
     * 如果访问是不需要登陆就可访问的，直接放行
     */
    next();
  } else {
    /**
     * 此时是在没有登陆情况下，访问需要登陆之后才能访问的内容，
     * 前往登陆
     */
    next("/login");
  }
});

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export default router;
