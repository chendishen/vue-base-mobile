/* 缓存工具类 */
export let StorageUtils = {
  storageKey: { // 缓存key
    user_refreshMainData: 'user_refreshMainData', // 是否刷新用户首页数据
    user_curCity: 'user_curCity', // 当前城市
    user_historyCity: 'user_historyCity', // 历史搜索城市
    user_searchHistory: 'user_searchHistory', // 用户历史搜索缓存，最多十条
    user_orderDetail: 'user_orderDetail', // 订单详情
    user_privateCustom: 'user_privateCustom', // 私人定制缓存
    user_token: 'user_token', // 微信登录用户token
    user_info: 'user_info', // 微信用户授权详情
    user_video: 'user_video', // 是否能看视频
    user_course: 'user_course', // 用户选择的课程
    user_course: 'user_code', // 登录所用code
    promoCode: 'promoCode', // 推广码详情
    promoter: 'promoter', // 推广大使详细资料
    isShowDialogByChatWindow: 'isShowDialogByChatWindow', // 用户首页先逛逛/联系客服弹窗是否显示
    user_agreeProtocol: 'user_agreeProtocol', // 是否同意协议
    isKeepAlive: 'isKeepAlive', // 是否刷新订单列表(值为no，表示从从预约页面进入订单列表，数据从第一页开始查)
    cityList: 'cityList', // 城市列表
    oprOrderIdAndStatus: 'oprOrderIdAndStatus', // 当前操作的订单id和状态
    reserveTime: 'reserveTime', // 当前预约时间
  },
  getItem: function (key) {
    var str = localStorage.getItem(key)
    if (str && str.length >= 2 && ((str.substr(0, 1) === '[' && str.substr(str.length - 1, 1) === ']') || (str.substr(0, 1) === '{' && str.substr(str.length - 1, 1) === '}'))) {
      return JSON.parse(str)
    } else {
      return str
    }
  },
  setItem: function (key, data) {
    if (data && typeof (data) === 'object') {
      localStorage.setItem(key, JSON.stringify(data))
    } else {
      localStorage.setItem(key, data)
    }
  }
}
