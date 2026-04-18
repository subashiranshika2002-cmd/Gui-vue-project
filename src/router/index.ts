import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/products',
      name: 'products',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetail,
    },
  ],
})

export default router