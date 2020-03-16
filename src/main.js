// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入移动端UI框架cube-ui
import Cube from 'cube-ui'
Vue.use(Cube)

// import {
//   /* eslint-disable no-unused-vars */
//   Style,
//   Button
// } from 'cube-ui'
// // 全局注册
// Vue.use(Button)

import App from './App'
import router from './router'
<<<<<<< HEAD
import {StorageUtils} from './utils/StorageUtils'
window.StorageUtils = StorageUtils
import store from './store/index'

=======
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

