# vue-vuex-axios-webpack

> 移动端vue项目的基础框架

> 简单介绍一下框架，webpack+vue-cli生成的骨架
> axios简单封装及接口分离
> UI框架用的cube-ui
> 使用vw作为移动端适配配置，直接写设计图的px单位可自动适配设备
> 配置了vuex状态管理器，
> 配置了vue-router
<br>


├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js          ##配置css插件于此
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─test
|  ├─unit
|  |  ├─.eslintrc
|  |  ├─jest.conf.js
|  |  ├─setup.js
|  |  ├─specs
|  |  |   └HelloWorld.spec.js
|  ├─e2e
|  |  ├─nightwatch.conf.js
|  |  ├─runner.js
|  |  ├─specs
|  |  |   └test.js
|  |  ├─custom-assertions
|  |  |         └elementCount.js
├─static
|   ├─.gitkeep
|   ├─helloWorld
|   |     └test.png
├─src
|  ├─App.vue
|  ├─main.js
|  ├─vuex                 ##状态管理器，测试
|  |  └store.js
|  ├─utils                ##工具
|  |   ├─StorageUtils.js  ##缓存工具类
|  |   ├─throwErr.js      ##服务异常工具类
|  |   └ziti.js
|  ├─style                ##存储公共样式表
|  |   └common.scss
|  ├─store                ##状态管理器，存储登录状态
|  |   ├─index.js
|  |   ├─mutation-types.js
|  |   ├─modules
|  |   |    ├─common.js
|  |   |    └user.js
|  ├─router               ##路由
|  |   └index.js
|  ├─components           ##存储对应vue组件的地方
|  |     └HelloWorld.vue
|  ├─assets
|  |   └logo.png
|  ├─api
|  |  ├─android.js        ##安卓原生接口列表的js
|  |  ├─api.js            ##用以存储对应组件的api接口事件的js
|  |  └request.js         ##请求方法，封装api接口及拦截器的js
├─config
|   ├─dev.env.js
|   ├─index.js
|   ├─prod.env.js
|   └test.env.js
├─build
|   ├─build.js
|   ├─check-versions.js
|   ├─logo.png
|   ├─utils.js
|   ├─vue-loader.conf.js
|   ├─webpack.base.conf.js
|   ├─webpack.dev.conf.js
|   └webpack.prod.conf.js



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


## npm install可能出现的问题，可能源于搭建框架时的mac和win的跨平台

``` bash
#Error: ENOENT: no such file or directory, scandir ‘…/node_modules/node-sass/vendor’
#需要重建sass
npm rebuild node-sass

#npm ERR! chromedriver 相关的问题
#需要重建sass
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
