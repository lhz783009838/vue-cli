# test_vue_1

> let me see a see vue

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

###项目结构

````bash
my-project
  build --webpack相关配置文件（都已经配置好，一般不需要再进行配置）
    build.js --生产环境构建
    check-version.js --版本检查
    dev-client.js --开发服务器的热重载
    dev-server.js--构建本地服务器
    utils.js --构建相关工具
    vue-load.conf.js --css加载配置器
    webpack.base.conf.js --webpack基础配置
    webpack.dev.conf.js --webpack开发环境配置
    webpack.prod.conf.js --webpack生产环境配置
  config --vue基本配置文件（我们可以配置监听端口，打包输出等） 
    dev.env.js --项目开发环境配置
    index.js --项目主要配置（包括监听端口，打包路径等）
    prod.env.js --项目生产环境配置
  src --项目核心文件（我们写的代码都放在这个文件夹下）
    assets --静态资源（样式类文件，如css，less，sass，以及外部的js文件）
    components --公共组件
    router --路由（配置项目路由）
      App.vue --根组件
      main.js --入口文件
  static --静态资源（一般放图片类资源）
  .babelrc --babel编译参数
  .editorconfig --代码格式
  .gitignore --git忽略文件
  .postcssrc.js --转换css的工具
  index.html --主页
  package.json --项目基本信息
  README.md --项目说明
`````
###依赖引入
````bash
# vuex: vuex是一个专门为vue.js设计的集中式状态管理架构。
  npm install vuex --save
  使用: import Vuex from 'vuex'
````
