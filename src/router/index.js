import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    name: 'home',
    // redirect:{name:'city'}
    component: home
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/city')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register')
  },

]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
