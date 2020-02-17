<template>
  <div class="box">
    <a-button type="primary" class="btn">点它换肤=>></a-button>
    <colorPicker v-model="color" @change="checkColor" defaultColor="#1890ff"></colorPicker>
  </div>
</template>
<script>
/**
 * @description 系统登陆页面
 */
export default {
  name: "Home",
  data() {
    return {
      color: "#ff0000"
    };
  },
  methods: {
    checkColor() {
      this.changeTheme(this.color);
    },
    changeTheme(primaryColor) {
      window.less.modifyVars({
        "@primary-color": primaryColor
      });
    }
  }
};
</script>
<style lang="less">
.box {
  display: flex;
  align-items: center;
  .colorBtn {
    width: 20px !important;
    height: 20px !important;
    border-radius: 50%;
    margin-left: 10px;
  }
}
</style>
