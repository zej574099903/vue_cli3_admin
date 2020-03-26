const state = {
    baseSize: 'default', // 默认通用size,可用于button、input、datePicker、select、avatar
    dsSize: 'default', //size(default,small),可用于ds,switch,card,
    dmsSize:'default',//size(default,middle,small)可用于table,
};

const getters = {
    // 获取全局通用size
    renderBaseSize(state) {
        return state.baseSize;
    },
    //获取dsSize
    renderDsSize(state) {
        return state.dsSize;
    },
    //获取dmsSize
    renderDmsSize(state) {
        return state.dmsSize;
    }
};

const mutations = {
    // 设置全局通用size
    setBaseSize(state, data) {
        state.baseSize = data;
    },
    // 设置dsSize
    setDsSize(state, data) {
        state.dsSize = data;
    },
    // 设置dmsSize
    setDmsSize(state, data) {
        state.dmsSize = data;
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