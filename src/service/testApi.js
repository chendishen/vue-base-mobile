import request from '@/service/request'


// api接口列表
// create in 2019.4.8

// 测试api
export function getTest(apiRoute) {
  return request({
    url: "/article/getArticleById?id="+apiRoute,
    method: 'get'
  })
}
