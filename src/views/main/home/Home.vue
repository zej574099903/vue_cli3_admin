<template>
  <div class="home">
    <!-- <img src="../../../assets/img/wating/waitting.png" alt="" />
    <h2 class="margin-t">页面正在开发中...敬请期待!</h2> -->
    <a-button :size="baseSize" type="primary">baseSize</a-button>
    <br />
    <br />
    <a-input :size="baseSize" placeholder="base size" />
    <br /><br />
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
    <br /><br />
    <a-date-picker :size="baseSize" />
    <br />
    <br />
    <a-select :size="baseSize" defaultValue="lucy" style="width: 120px">
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
    <br /><br />
    <a-switch :size="dsSize" defaultChecked />
    <br /><br />
    <a-avatar :size="baseSize" icon="user" />
    <br /><br />
    <a-card :size="dsSize" title="Default size card" style="width: 300px">
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br /><br />
    <a-table :size="dmsSize" :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
    <br /><br />
    <a-tabs :size="baseSize" defaultActiveKey="1">
      <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" forceRender
        >Content of Tab Pane 2</a-tab-pane
      >
      <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
    <br /><br />
    <a-spin :size="baseSize" />
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
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
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
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
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
      baseSize: state => state.size.baseSize, //获取默认通用size
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
</style>
