import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex); // 引入vuex

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    common,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createLogger(), createPersistedState()] // createLogger日志插件,createPersistedState()持久化vuex state插件
});
