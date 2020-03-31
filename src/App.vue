<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        setTimeout(() => {
          // 打印screenWidth变化的值
          // if (this.screenWidth > 1600) {
          //   this.$store.commit("size/setLdsSize", "large");
          //   this.$store.commit("size/setDsSize", "default");
          //   this.$store.commit("size/setDmsSize", "default");
          // } else 
          if (this.screenWidth > 1200) {
            this.$store.commit("size/setLdsSize", "default");
            this.$store.commit("size/setDsSize", "default");
            this.$store.commit("size/setDmsSize", "middle");
          } else if (this.screenWidth < 1199) {
            this.$store.commit("size/setLdsSize", "small");
            this.$store.commit("size/setDsSize", "small");
            this.$store.commit("size/setDmsSize", "small");
          }
          this.timer = false;
        }, 400);
      }
    }
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
