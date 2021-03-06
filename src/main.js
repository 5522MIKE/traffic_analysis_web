// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入viewui库
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(ViewUI);

// 引入v-viewer库
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, 
  "toolbar": true, "tooltip": true, "movable": true, "zoomable": true,
  "rotatable": true, "scalable": true, "transition": true,
  "fullscreen": true, "keyboard": true, "url": "data-source" }
});


// 引入 axios
import axios from 'axios'
Vue.prototype.$axios = axios

// 视频播放插件
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

// 数据可视化组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

Vue.config.productionTip = false

// The routing configuration
// const RouterConfig = {
//   routes: Routers
// };
// const router = new VueRouter(RouterConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
