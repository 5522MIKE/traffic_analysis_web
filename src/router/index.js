import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import video from '@/components/video'
import data from '@/components/data'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/data',
      name: 'data',
      component: data
    }
  ]
})
