import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
  count:1,
  httpError:{
    hasError:false,
    status:'',
    statusText:''
  },
  // token状态
  Authorization : localStorage.getItem('Authorization') ? localStorage.getItem('Authorization'):''
}

const mutations={
  add(state,n){
    state.count += n;
  },
  reduce(state){
    state.count --;
  },
  ON_HTTP_ERROR(state,payload){
    state.httpError = payload
  },
  changeLogin(state,user){
    state.Authorization = user.Authorization;
    localStorage.setItem('Authorization',user.Authorization);
  }
}


export default new Vuex.Store({
    state,mutations
})
