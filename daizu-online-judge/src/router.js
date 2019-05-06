import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Contests from './components/views/Contests.vue'
import Contest from './components/views/Contest.vue'
import SignUp from './components/views/SignUp.vue'
import SignIn from './components/views/SignIn.vue'
import Task from './components/views/Task.vue';

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
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/contests/contest',
      name: 'contest',
      component: Contest
    },
    // 問題文表示テストのためのページ 
    {
      path: '/contests/contest/task',
      name: 'task',
      component: Task
    }
  ]
})