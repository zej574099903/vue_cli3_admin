<template>
  <div>
    <a-button
      type="primary"
      class="ict-align-center set_btn"
      @click="showDrawer"
      :style="{ right: visible ? '257px' : '0' }"
      ><a-icon :type="visible ? 'close' : 'setting'" style="line-height:0"
    /></a-button>
    <a-drawer
      title="用户偏好设置"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <div class="container">
        <h4>主题色</h4>
        <div class="ict-align--left theme_btns">
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
        <h4>输入色号进行更换</h4>
        <div class="ict-align--left input_box">
          <a-input
            class="input"
            placeholder="示例:#e3e3e3"
            v-model="colorNum"
            allowClear
          ></a-input>
          <a-button type="primary" @click="changeTheme(colorNum)"
            >确认</a-button
          >
        </div>
        <h4>导航栏切换</h4>
        <div class="ict-align--left nav_box">
          <a-tooltip placement="top">
            <template slot="title">
              <span>导航栏左侧</span>
            </template>
            <div class="left" @click="changeLayout('left')">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg"
                alt=""
              />
              <a-icon class="icon" type="check" v-if="layoutType === 'left'" />
            </div>
          </a-tooltip>
          <a-tooltip placement="top">
            <template slot="title">
              <span>导航栏顶部</span>
            </template>
            <div class="top" @click="changeLayout('top')">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg"
                alt=""
              />
              <a-icon class="icon" type="check" v-if="layoutType === 'top'" />
            </div>
          </a-tooltip>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "drawer",
  data() {
    return {
      visible: false,
      colorNum: ""
    };
  },
  methods: {
    //展现抽屉盒
    showDrawer() {
      this.visible=!this.visible
    },
    // 隐藏抽屉盒
    onClose() {
      this.visible = false;
    },
    //改变主题色的方法
    changeTheme(primaryColor) {
      window.less.modifyVars({
        "@primary-color": primaryColor
      });
      this.$store.commit("theme/setGlobalTheme", primaryColor);
    },
    // 改变布局方式
    changeLayout(type) {
      this.$store.commit("changeLayout/setdefaultType", type);
    }
  },
  computed: {
    ...mapState({
      //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      layoutType: state => state.changeLayout.defaultType
    })
  }
};
</script>
<style lang="less" scoped>
.set_btn {
  position: absolute;
  top: 300px;
  width: 40px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
  font-size: 22px;
  color: #fff;
  z-index: 999999;
}
.container {
  .theme_btns {
    margin-top: 10px;
    overflow-x: hidden;
    justify-content: space-between;
    .ant-btn {
      padding: 0;
      width: 20px;
      height: 20px;
      border: none;
    }
  }
  .input_box {
    padding-bottom: 25px;
    border-bottom: 1px solid #e8e8e8;
    .input {
      margin-right: 5px;
      height: 32px;
    }
  }
  .nav_box {
    padding-bottom: 25px;
    border-bottom: 1px solid #e8e8e8;
    .left,
    .top {
      position: relative;
      margin-right: 15px;
      cursor: pointer;
      .icon {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #1890ff;
      }
    }
  }
  h4 {
    margin: 15px 0;
  }
}
</style>
