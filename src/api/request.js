import axios from 'axios'
import { throwErr } from '@/utils/throwErr.js' //utils 捕捉服务端 http 状态码的方法
import store from '@/vuex/store'   // 引入 vuex 的相关操作
// import { Message } from 'cube-ui' //element Toast 的提示
import router from '@/router'
// 过滤请求
axios.interceptors.request.use(config => {
  //config 为请求的一些配置 例如: 请求头 请求时间 Token
 // 如果服务端帮忙处理好了，那么请求阶段只要传好参数就好了
  config.timeout = 10 * 1000 // 请求响应时间
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器，暂未了解code码，先暂停使用拦截器
// axios.interceptors.response.use(
//   response => {
//     if (response.data.code === 0) {   // 服务端定义的响应 code 码为 0 时请求成功
//       return Promise.resolve(response.data) // 使用 Promise.resolve 正常响应
//     } else if (response.data.code === 1401) { // 服务端定义的响应 code 码为 1401 时为未登录
//       store.dispatch('setUserInfo', {})
//       Message({
//         message: '未登录'
//       })
//       // router.push('/login')
//       return Promise.reject(response.data)    // 使用 Promise.reject 抛出错误和异常
//     } else {
//       return Promise.reject(response.data)
//     }
//   },
//   error => {
//     if (error && error.response) {
//       let res = {}
//       res.code = error.response.status
//       res.msg = throwErr(error.response.status, error.response) //throwErr 捕捉服务端的 http 状态码 定义在 utils 工具类的方法
//       return Promise.reject(res)
//     }
//     return Promise.reject(error)
//   }
// )

export default function request(method, url, data) {  // 暴露 request 给我们好 API 管理
  method = method.toLocaleLowerCase()   // 封装 RESTful API 的各种请求方式 以 post get 为例
  if (method === 'post') {
    return axios.post(url, data)    //axios 的 post 默认转化为 JSON 格式
  }
  else if (method === 'get') {
    return axios.get(url, {
      params: data
    })
  }
  // else if (method === 'delete') {
  //   return axios.delete(url, {
  //     params: data
  //   })
  // }
}
