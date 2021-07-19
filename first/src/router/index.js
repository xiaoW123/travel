import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../components/home/Home.vue')
    },
    {
      path: '/city',
      component: () => import('@/components/city/City.vue')
    },
    {
      path: '/detail',
      component: () => import('@/components/details/Detail.vue')
    }
  ],
  mode: 'history'
})

export default router