<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="logo">
        <img src="../assets/img/login/logo.png" alt="" />
      </div>
      <div class="content">
        <div class="left">
          <span class="title">无线资源实时管理平台</span>
          <span class="edition">v0.0.1</span>
          <br />
          <span class="english"
            >WIRELESS RESOURCE REAL-TIME MANAGEMENT PLATFORM</span
          >
        </div>
        <div class="right">
          <span class="login_title">账号登陆</span>
          <a-form :form="form" class="login_form" @submit="login">
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  {
                    rules: [
                      { required: true, message: 'Please input your username!' }
                    ]
                  }
                ]"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" class="icon_color" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'passWord',
                  {
                    rules: [
                      { required: true, message: 'Please input your Password!' }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" class="icon_color" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                class="login_form_button"
                :loading="loading"
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @description 系统登陆页面
 */
export default {
  components: {},
  name: "Login",
  data() {
    return {
      loading: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    login() {
      this.loading = true;
      sessionStorage.setItem("token", "success");
      this.loading = false;
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "Arista2";
  src: url("../assets/font/BauLF-Regular.otf");
}

@font-face {
  font-family: "Regular";
  src: url("../assets/font/方正综艺_GBK.ttf");
}
</style>
