import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginHome from '../views/LoginHome.vue'
import Login from '../components/login/Login.vue'
import ForgetPassword from '../components/login/ForgetPassword.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'LoginHome',
    component: LoginHome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/home',
    name: Home,
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router