import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Contests from './components/views/Contests.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contests',
      name: 'contests',
      component: Contests
    }
  ]
})