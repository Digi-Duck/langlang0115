import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 關於我們頁面
    {
      path: '/aboutuspage',
      name: 'aboutuspage',
      component: () => import('../views/AboutUsPageView.vue')
    },{
      // 贊助我們頁面
        path: '/sponsorus',
        name: 'sponsorus',
        component:  () => import('../views/SponsorUsView.vue')
    },
    {
      // 立即贊助頁面
      path: '/sponsornow',
      name: 'sponsornow',
      component: () => import('../views/SponsorNow.vue')
    }
  ]
})

export default router
