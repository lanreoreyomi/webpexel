import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Career.vue'

import VueMeta from 'vue-meta';

Vue.use(VueMeta);
Vue.use(VueRouter)
const routes=[
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },


]

const router = new VueRouter({
  mode:'hash',
  routes
})
export default router
