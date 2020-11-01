import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quote from '../views/Quote.vue'
import Customer from '../views/Customer.vue'
import Project from '../views/Project.vue'
import About from '../views/About.vue' 
import Catalog from '../views/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Quote',
    name: 'Quote',
    component: Quote
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/Project',
    name: 'Project',
    component: Project
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
