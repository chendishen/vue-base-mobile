import axios from 'axios'
import store from '@/vuex/store'


const service = axios.create({
  baseURL: 'http://supbookapi.supmiao.com/supbookMng',
  timeout: 15000 // 请求超时
})

service.interceptors.response.use(
    function(response) {
      //请求正常则返回
      return Promise.resolve(response)
    },
    function(error) {
      // 请求错误则向store commit这个状态变化
      const httpError= {
        hasError:true,
        status:error.response.status,
        statusText:error.response.statusText
      }
      store.commit('ON_HTTP_ERROR', httpError)
      return Promise.reject(error)
    }
  )

  export default service
