<template>
  <div>
    <a-avatar icon="user" size="small" />
    <span class="userName">{{ username }}</span>
    <a-dropdown :trigger="['click']">
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
      sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less">
.userName{
  margin:0 10px;
}
</style>
