import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Contests from './components/views/Contests.vue'
import Contest from './components/views/Contest.vue'
import SignUp from './components/views/SignUp.vue'
import SignIn from './components/views/SignIn.vue'
import Problem from './components/views/Problem.vue';
import Submit from './components/views/Submit.vue'
import SubmitState from './components/views/SubmitState.vue'

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
      path: '/contests/:contestTag',
      name: 'contest',
      component: Contest
    },
    // 問題文表示テストのためのページ 
    {
      path: '/contests/welcomecontest/problem',
      name: 'problem',
      component: Problem
    },
    // 提出ページテスト用
    {
      path: '/contests/welcomecontest/problem/submit',
      name: 'submit',
      component: Submit
    },
    // 提出状況の詳細をみれるページテスト用
    {
      path: '/contests/welcomecontest/submitstate',
      name: 'submit-state',
      component: SubmitState
    }
  ]
})