<template>
  <div>
    <div class="query_box">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="规则编号">
              <a-input :size="ldsSize" placeholder="" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="使用状态">
              <a-select :size="ldsSize" placeholder="请选择" default-value="0">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">关闭</a-select-option>
                <a-select-option value="2">运行中</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item label="调用次数">
                <a-input-number :size="ldsSize" style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="更新日期">
                <a-date-picker
                  :size="ldsSize"
                  style="width: 100%"
                  placeholder="请输入更新日期"
                />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select
                  :size="ldsSize"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select
                  :size="ldsSize"
                  placeholder="请选择"
                  default-value="0"
                >
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col :md="(!advanced && 8) || 24" :sm="24">
            <span
              class="table-page-search-submitButtons"
              :style="
                (advanced && { float: 'right', overflow: 'hidden' }) || {}
              "
            >
              <a-button :size="ldsSize" type="primary" class="ict_font_size">查询</a-button>
              <a-button :size="ldsSize" style="margin-left: 8px" class="ict_font_size">重置</a-button>
              <a @click="toggleAdvanced" style="margin-left: 8px" class="ict_font_size">
                {{ advanced ? "收起" : "展开" }}
                <a-icon :type="advanced ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>
<script>
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "queryTable",
  data() {
    return {
      // 高级搜索 展开/关闭
      advanced: false
    };
  },
  methods: {
    toggleAdvanced() {
      this.advanced = !this.advanced;
    }
  },
  computed: {
    ...mapState({
      //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      ldsSize: state => state.size.ldsSize //获取默认通用size
    })
  }
};
</script>
