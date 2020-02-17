<template>
  <div>
    <a-avatar icon="user" size="small" />
    {{ username }}
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
 * @description 系统主页
 */
export default {
  name: "RightDropDown",
  data() {
    return {
      username: "admin"
    };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
