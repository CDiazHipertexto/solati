import Vue from 'vue'
import VueRouter from 'vue-router'


// Views
import homeOne from '@/views/homeOne/homeOne'
import main from '@/views/auth/main'
import emailValidation from "../views/auth/emailValidation";
import catalogo from "../views/catalogo/catalogo";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeOne',
    component: homeOne
  },
  {
    path: '/auth',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/home-two.vue'),
   component: main
  },
  {
    path: '/auth/email',
    name: 'email',
    component: emailValidation
  },
  {
    path: '/dashboard',
    name: 'catalogo',
    component: catalogo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
