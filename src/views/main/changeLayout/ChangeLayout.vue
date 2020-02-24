<template>
  <div class="changeLayout">
    <h2>请选择你要切换的布局</h2>
    <div class="ict-align--left">
        <a-button type="primary" @click="changeLayout('left')">
          菜单栏左侧
        </a-button>
        <a-button type="primary" @click="changeLayout('top')">
          菜单栏顶部
        </a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "changeLayout",
  data(){
    return{
      
    }
  },
  methods:{
    // 改变布局方式
    changeLayout(type){
      this.$store.commit("changeLayout/setdefaultType", type);
    }
  }
};
</script>
<style lang="less"></style>
