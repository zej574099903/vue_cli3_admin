<template>
  <div class="theme">
    <h2>请选择你要的主题色</h2>
    <div>
      <a-button
        type="primary"
        @click="changeTheme('#1890ff')"
        style="background:#1890ff"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#F5222D')"
        style="background:#F5222D"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#FA541C')"
        style="background:#FA541C"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#FAAD14')"
        style="background:#FAAD14"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#13C2C2')"
        style="background:#13C2C2"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#52C41A')"
        style="background:#52C41A"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#1890FF')"
        style="background:#1890FF"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#2F54EB')"
        style="background:#2F54EB"
      ></a-button>
      <a-button
        type="primary"
        @click="changeTheme('#722ED1')"
        style="background:#722ED1"
      ></a-button>
      
    </div>
    <h2>请输入你想要的色号</h2>
    <div class="input">
      <a-input placeholder="请输入色号如 #ffffff" v-model="colorNum" allowClear></a-input>
      <a-button type="primary" @click="changeTheme(colorNum)">生成</a-button>
    </div>
    <h2>变更示例</h2>
    <img src="../../../assets/img/tips/theme.png" alt="">
    <!-- 颜色选择器插件 -->
    <!-- <colorPicker v-model="color" @change="checkColor" defaultColor="#1890ff"></colorPicker> -->
    <!-- 颜色选择器插件 -->
  </div>
</template>
<script>
/**
 * @description 更换主题页面
 */
export default {
  name: "Theme",
  data() {
    return {
      colorNum:""
    };
  },
  methods: {
    //改变主题色的方法
    changeTheme(primaryColor) {
      window.less.modifyVars({
        "@primary-color": primaryColor
      });
    }
  }
};
</script>
