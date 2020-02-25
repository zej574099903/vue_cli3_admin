<template>
  <div>
    <a-avatar icon="user" size="small" />
    <span class="userName">{{ username }}</span>
    <a-dropdown :trigger="['hover']" class="is-btn">
      <a-icon type="poweroff" style="font-size: 16px;vertical-align: sub" />
      <a-menu slot="overlay">
        <a-menu-item @click="logout">
          <a-icon type="poweroff" style="color: red" />退出
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
/**
 * @description layout右上的角内容
 */
export default {
  name: "RightDropDown",
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    // 退出登陆
    logout() {
      let self=this;
      this.$confirm({
        title: "你确定要退出吗?",
        okText: "确定",
        cancelText: "取消",
        onOk() {
          sessionStorage.clear();
          self.$router.push("/login");
        },
        onCancel() {}
      });
    }
  }
};
</script>
<style lang="less">
.userName {
  margin: 0 10px;
}
</style>
