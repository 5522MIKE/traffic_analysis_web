// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 视频播放插件
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

// 数据可视化组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
