import { createRouter, createWebHistory } from 'vue-router'
import Inventory from './views/Inventory.vue'
import Transactions from './views/Transactions.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory },
  { path: '/transactions', component: Transactions }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router