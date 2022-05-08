import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '@/views/CustomerView.vue'
import RestaurantView from '@/views/RestaurantView.vue'
import SignupView from '@/views/SignupView.vue'
import OrderView from '@/views/OrderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignupView
  },
  {
    path: '/owner',
    name: 'owner',
    component: RestaurantView
  },
  {
    path:'/customer',
    name: 'customer',
    component: CustomerView
  },
  {
    path:'/customer/order',
    name: 'customer/order',
    component: OrderView
  },
  
  
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
