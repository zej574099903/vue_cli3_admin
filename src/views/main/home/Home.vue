<template>
  <div class="home">
    <!-- <img src="../../../assets/img/wating/waitting.png" alt="" />
    <h2 class="margin-t">页面正在开发中...敬请期待!</h2> -->
    <a-tabs :size="ldsSize" defaultActiveKey="1">
      <a-tab-pane tab="Tab 1" key="1"
        >屏幕宽度大于1600时,size为large</a-tab-pane
      >
      <a-tab-pane tab="Tab 2" key="2" forceRender
        >屏幕宽度小于1600大于1200时,size为default</a-tab-pane
      >
      <a-tab-pane tab="Tab 3" key="3"
        >屏幕宽度小于1200时,size为small</a-tab-pane
      >
    </a-tabs>
    <br />
    <a-steps :size="dsSize">
      <a-step status="finish" title="Login">
        <a-icon type="user" slot="icon" />
      </a-step>
      <a-step status="finish" title="Verification">
        <a-icon type="solution" slot="icon" />
      </a-step>
      <a-step status="process" title="Pay">
        <a-icon type="loading" slot="icon" />
      </a-step>
      <a-step status="wait" title="Done">
        <a-icon type="smile-o" slot="icon" />
      </a-step>
    </a-steps>
    <br />
    <a-table :size="dmsSize" :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
    <a-card :size="dsSize" title="Default size card" style="width: 300px">
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br />
    <a-input :size="ldsSize" placeholder="lds size" />
    <br /><br />
    <a-button class="margin_r" :size="ldsSize" type="primary">ldsSize</a-button>
    <a-date-picker class="margin_r" :size="ldsSize" />
    <a-select
      class="margin_r"
      :size="ldsSize"
      defaultValue="lucy"
      style="width: 120px"
    >
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
    <a-switch class="margin_r" :size="dsSize" defaultChecked />
    <a-avatar class="margin_r" :size="ldsSize" icon="user" />
    <a-spin class="margin_r" :size="ldsSize" />
    <br /><br />
    <p class="ict_font_size ict_color">字体大小自适应</p>
  </div>
</template>
<script>
// 引入vuex
import { mapState } from "vuex";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
    tags: ["loser"]
  }
];
export default {
  props: {},
  components: {},
  data() {
    return { data, columns };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  computed: {
    ...mapState({
      //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      ldsSize: state => state.size.ldsSize, //获取默认通用size
      dsSize: state => state.size.dsSize, //获取默认dssize
      dmsSize: state => state.size.dmsSize //获取默认dmssize
    })
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.home {
  text-align: left;
  img {
    margin-top: 10%;
  }
  h2 {
    color: #c2c2c2;
  }
}
.margin_r {
  margin-right: 20px;
}
</style>
