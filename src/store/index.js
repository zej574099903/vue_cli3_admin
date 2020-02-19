import Vue from "vue";
import Vuex from "vuex";
import theme from "./modules/theme";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme
  },
  plugins: [createPersistedState()]  //加上这个就可以解决vuex数据持久化问题
});
