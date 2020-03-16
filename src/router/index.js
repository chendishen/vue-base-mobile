import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  mode:'history',
=======
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
<<<<<<< HEAD
      component: resolve => require(['@/components/HelloWorld'], resolve),
      meta: {
        title: '框架测试'
      }
=======
      component: HelloWorld
>>>>>>> ae01644e9b3a8cf71a3a29a2da248fb92d2ed9cd
    }
  ]
})
