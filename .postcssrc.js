// https://github.com/michael-ciniawsky/postcss-load-config

//该文件配置完后，允许在移动端，正常使用px

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {},
    // 移动端vw适配
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": { utf8: false },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      //设计图宽度为750
      viewportWidth: 375,
      //小数点位数
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      //px的最小值
      minPixelValue: 1,
      //允许在媒体查询中转换`px`
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    //版本冲突暂时停止使用cssnano，css压缩
    // "cssnano":{
    //   preset: "advanced",
    //   //重复调用，禁掉
    //   autoprefixer: false,
    //   //z-index的值重置为1，深坑
    //   "postcss-zindex": false
    // }
  }
}
