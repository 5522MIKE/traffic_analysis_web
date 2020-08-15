import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VideoPlay from '@/components/VideoPlay'
import vehicle from '@/components/vehicle'
import Main from '@/components/Main'
import number from '@/components/number'

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
      component: VideoPlay
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: vehicle
    },
    {
      path: '/number',
      name: 'number',
      component: number
    },
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
