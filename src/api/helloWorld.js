import request from './request' // 引入 axios 的封装方法

// 通过id获取Article
export const getArticleById = (params) => {
 return request('get', '/supbookMng/article/getArticleById', params)
}

// 登录
export const auth = (params) => {
 return request('post', '/supbookMng/login/auth', params)
}
