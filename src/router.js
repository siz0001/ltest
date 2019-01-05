import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Analysis from './components/Analysis'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Mapchoice from './components/Analysis/Mapchoice'

Vue.use(Router)

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/main',
      name: 'main',      
      component: Analysis
    },
    {
      path: '/test1',
      name: 'test1',      
      component: Test1
    },
    {
      path: '/test2',
      name: 'test2',      
      component: Test2
    },
    {
      path: '/mapchoice',
      name: 'mpachoice',      
      component: Mapchoice
    },


  ]
})
