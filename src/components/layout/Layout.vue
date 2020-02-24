<template>
  <div style="height:100%">
    <a-layout class="layoutLeft" v-if="layoutType === 'left'">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo">
          {{ logoTitle }}
        </div>
        <a-menu
          theme="dark"
          @click="selectItem"
          mode="inline"
          :openKeys="openKeys"
          @openChange="onOpenChange"
          :selectedKeys="defaultSelected"
        >
          <a-menu-item key="home"><a-icon type="home" /><span>首页</span></a-menu-item>
          <a-sub-menu key="系统管理">
            <span slot="title"
              ><a-icon type="setting" /><span>系统设置</span></span
            >
            <a-menu-item key="theme">更换主题</a-menu-item>
            <a-menu-item key="changeLayout">更换布局</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="changeLogo()"
          />
          <div class="right">
            <right-drop-down></right-drop-down>
          </div>
        </a-layout-header>
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout class="layoutTop" v-if="layoutType === 'top'">
      <a-layout-header
        :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
        class="ict-align--left"
      >
        <div class="logo">{{ logoTitle }}</div>
        <a-menu
          theme="dark"
          @click="selectItem"
          mode="horizontal"
          :openKeys="openKeys"
          @openChange="onOpenChange"
          :selectedKeys="defaultSelected"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="home"><a-icon type="home" />首页</a-menu-item>
          <a-sub-menu key="系统管理">
            <span slot="title"
              ><a-icon type="setting" /><span>系统设置</span></span
            >
            <a-menu-item key="theme">更换主题</a-menu-item>
            <a-menu-item key="changeLayout">更换布局</a-menu-item>
          </a-sub-menu>
        </a-menu>
        <div class="right">
          <right-drop-down></right-drop-down>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '74px' }" class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
/**
 * @description layout布局
 */
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    "right-drop-down": () => import("@/components/layout/RightDropDown") // header右侧下拉框
  },
  data() {
    return {
      collapsed: false,
      logoTitle: "智慧组模板",
      rootSubmenuKeys: ["首页", "系统设置"],
      openKeys: ["首页"]
    };
  },
  computed: {
    // 默认的菜单选择框
    defaultSelected() {
      if (this.$route.name != null) {
        return [this.$route.name];
      }
    },
    ...mapState({
      //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      layoutType: state => state.changeLayout.defaultType
    })
  },
  methods: {
    // 点击logo右边的按钮时
    changeLogo() {
      this.collapsed = !this.collapsed;
      if (this.collapsed) {
        this.logoTitle = "ST";
      } else {
        this.logoTitle = "智慧组模板";
      }
    },
    //选择菜单栏
    selectItem({ item, key, keyPath }) {
      if (this.$router.history.current.name !== key) {
        sessionStorage.whichTab = "1";
        this.$router.push({ name: key });
      }
    },
    //菜单栏展开时间
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>
<style></style>
