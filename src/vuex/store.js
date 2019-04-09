import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
  count:1,
  httpError:{
    hasError:false,
    status:'',
    statusText:''
  }
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
  }
}


export default new Vuex.Store({
    state,mutations
})
