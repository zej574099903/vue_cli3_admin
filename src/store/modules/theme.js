
const state = {
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
    // // 将主题色号存入本地便于下次登陆获取
    // localStorage.setItem('theme',data);
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
