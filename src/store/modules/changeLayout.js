
const state = {
    // 默认全局主题
    defaultType:'left'
  };
  
  const getters = {
    // 获取全局样式
    renderdefaultType(state) {
      return state.defaultType;
    }
  };
  
  const mutations = {
    // 设置全局样式
    setdefaultType(state, data) {
      state.defaultType = data;
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
  