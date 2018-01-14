# vue_music 
#### demo     http://www.boycot.top/vue_music

> A Vue.js project

## 配置安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3009
npm run dev(开发环境)

# build for production with minification
npm run build(生成环境)
```

## 技术栈

* Vue2：采用最新Vue2的语法
* Vuex：管理公共组件状态量
* vue-router：管理单页面应用路由
* vue-resource：发起http请求
* node：vue-cli使用node做服务器。
* Webpack：自动化构建工具，主要配置vue-cli脚手架提供。
* ES6：采用ES6语法。

## 功能介绍

* 网易云（轮播，推荐歌单，独家放送，推荐MV，网友精选歌单（最新，最热），排行榜）
* 搜索（热门搜索，搜索结果包括单曲，歌手，专辑，歌单，用户及其滑动切换）
* 播放页面（歌词，碟片切换）
* 歌手，专辑，歌单，用户等详情展示

## 项目构成
``````
├── dist               		 // 项目build目录
├── index.html          	 // 项目入口文件
├── webpack.config.js        //运行项目所需的配置文件
├── .gitignore               //忽略上传的文件
├── .babelrc                 //es6转es5配置文件
├── package.json      		 // 项目配置文件
├── static       			// 放置静态资源
├── src                		 // 生产目录
│   ├── api       	        // api请求
│   ├── static                   // 静态资源
│   ├── common          	// 公共的css js images资源
│   ├── components     		// 各种组件
│   ├── store           	// vuex状态管理器
│   ├── App.vue         	// 主页面
│   ├── router.js     		// 路由配置器
│   └── main.js       	    // Webpack 预编译入口

``````