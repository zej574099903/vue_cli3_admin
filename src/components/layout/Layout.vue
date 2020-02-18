<template>
  <a-layout class="layout">
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
        <a-sub-menu key="系统管理">
          <span slot="title"
            ><a-icon type="setting" /><span>系统设置</span></span
          >
          <a-menu-item key="theme">更换主题</a-menu-item>
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
</template>
<script>
export default {
  name: "Layout",
  components: {
    "right-drop-down": () => import("@/components/layout/RightDropDown") // header右侧下拉框
  },
  data() {
    return {
      collapsed: false,
      logoTitle: "智慧组模板",
      rootSubmenuKeys: ["系统管理"],
      openKeys: ["系统管理"]
    };
  },
  computed: {
    // 默认的选择框
    defaultSelected() {
      if (this.$route.name != null) {
        return [this.$route.name];
      }
    }
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
