import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

const Top = () => import('@/pages/Top')
const About = () => import('@/pages/About')

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  }
]

Vue.use(Router)

const router: Router = new Router({
  mode: 'history',
  fallback: true,
  routes
})

export router
