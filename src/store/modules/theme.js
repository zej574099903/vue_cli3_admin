
const state = {
  // 默认全局主题
  globalTheme:'#1890ff'
};

const getters = {
  // 获取全局样式
  renderGlobalTheme(state) {
    return state.globalTheme;
  }
};

const mutations = {
  // 设置全局样式
  setGlobalTheme(state, data) {
    state.globalTheme = data;
  }
};

const actions = {
  
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
