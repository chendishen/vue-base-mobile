import request from './request' // 引入 axios 的封装方法

// code换取网页授权access_token,示例
export function oauthAccessToken(params) {
  return request('get', '/oauth2/access_token', params, '', "sns")
}
