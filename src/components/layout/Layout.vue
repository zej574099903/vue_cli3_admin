<template>
  <a-layout class="layout">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">
        {{ logoTitle }}
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
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
</template>
<script>
export default {
  name:"Layout",
  components:{
    "right-drop-down": () => import("@/components/layout/RightDropDown") // header右侧下拉框
  },
  data() {
    return {
      collapsed: false,
      logoTitle: "智慧组模板"
    };
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
    }
  }
};
</script>
<style>
.layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout .trigger:hover {
  color: #1890ff;
}
</style>
