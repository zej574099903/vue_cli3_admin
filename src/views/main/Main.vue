<template>
  <div style="height:100%;">
    <lay-out></lay-out>
  </div>
</template>
<script>
/**
 * @description 系统主页
 */
export default {
  name: "Main",
  components:{
      "lay-out": () => import("@/components/layout/Layout") // layout布局
  }
};
</script>
<style lang="less">

</style>
