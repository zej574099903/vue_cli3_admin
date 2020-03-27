const state = {
    ldsSize: 'default', // size(large,default,small),可用于button、input、datePicker、select、avatar
    dsSize: 'default', //size(default,small),可用于ds,switch,card,
    dmsSize:'default',//size(default,middle,small)可用于table,
};

const getters = { 
    // 获取ldsSize
    renderLdsSize(state) {
        return state.ldsSize;
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
    // 设置ldsSize
    setLdsSize(state, data) {
        state.ldsSize = data;
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