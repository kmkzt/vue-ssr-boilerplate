import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

const Top = () => import('@/pages/Top')
const About = () => import('@/pages/About')

const routes: RouteConfig[] = [
  {
    name: 'Top',
    path: '/',
    component: Top
  },
  {
    name: 'About',
    path: '/about',
    component: About
  }
]

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  fallback: true,
  base: process.env.BASE_URL,
  routes
})
