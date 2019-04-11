# yeb

> 移动端vue项目的基础框架

> 简单介绍一下框架，webpack+vue-cli生成的骨架
> axios简单封装及接口分离
> UI框架用的cube-ui
> 使用vw作为移动端适配配置，直接写设计图的px单位可自动适配设备
> 配置了vuex状态管理器，
> 配置了vue-router

> src-|
      |
      api-|
          |android.js     ##安卓原生接口列表的js
          |xxx.js         ##xxx对应vue组件名称，用以存储对应组件的api事件的js
          |request.js     ##请求方法，封装api接口及拦截器的js+
      |
      |
      assets-|
      |
      |
      components-|        ##存储对应vue组件的地方
      |
      |
      router-|            ##路由
      |
      |
      style-|             ##存储公共样式表
      |
      |
      utils-|             ##工具
            |throwErr.js  ##拦截接口异常事件
            |ziti.js      ##调整移动端字体font-size 暂未启用
      |
      |
      vuex- |
            |store.js     ##状态管理器，包括了state,mutation，用于存储token用户状态





## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
