import {FIND_SERVICEUSER_DETAIL} from '../mutation-types'
import { Dialog } from 'cube-ui'

const state = {
  serviceUserDetail: {}, // 服务人员详情
};

const getters = {
  serviceUserDetail: state => state.serviceUserDetail
};

const actions = {
  // 查询服务人员详情
  findServiceuserDetail({commit, state}, param) {
    Dialog.$create({
      type: 'alert',
      title: '我是标题',
      content: '我是内容'
    }).show()
  },
};

const mutations = {
  // 查询服务人员详情
  [FIND_SERVICEUSER_DETAIL](state, user) {
    state.serviceUserDetail = param
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
