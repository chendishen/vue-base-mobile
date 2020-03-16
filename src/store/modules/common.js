import {LOGIN_INFO, IS_LOGIN} from '../mutation-types'

const state = {
  loginInfo: {userId: '', userType: '',access_token:'',token_type:''},
  isLogin: false // 用户是否登录
};


const getters = {
  loginInfo: state => state.loginInfo,
  isLogin: state => state.isLogin
};

const actions = {
  // 判断用户是否登录
  judgeIsLogin({commit, state}) {
    commit(IS_LOGIN)
  },

};

const mutations = {
  // 获取登录信息
  [LOGIN_INFO](state, user) {
    StorageUtils.setItem(StorageUtils.storageKey.user_token, user);
    state.loginInfo.access_token = user.access_token;
    state.loginInfo.userId = user.userId;
    state.loginInfo.userType = user.userType;
    state.loginInfo.token_type = user.token_type;
  },
  // 判断用户是否登录
  [IS_LOGIN](state) {
    if (state.loginInfo && state.loginInfo.userId) {
      state.isLogin = true
    } else {
      goLoginPage();
      state.isLogin = false
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
