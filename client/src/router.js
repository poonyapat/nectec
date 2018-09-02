import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Content from '@/components/Content.vue'
import Tel from '@/views/Tel.vue'
import ShowData from '@/views/ShowData.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/content/:id',
      name: 'content',
      component: Content
    },
    {
      path: '/tel',
      name: 'tel',
      component: Tel
    },
    {
      path: '/list',
      name: 'list',
      component: ShowData
    }
  ]
})
