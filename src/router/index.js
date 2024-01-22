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
    },
    {
      // 贊助我們頁面
      path: '/sponsorus',
      name: 'sponsorus',
      component: () => import('../views/SponsorUsView.vue')
    },
    {
      // 立即贊助頁面
      path: '/sponsornow',
      name: 'sponsornow',
      component: () => import('../views/SponsorNow.vue')
    },
    {
      // 認養中心頁面
      path: '/adoptioncenter',
      name: 'adoptioncenter',
      component: () => import('../views/AdoptionCenterView.vue')
    },
    {
      // 認養中心頁面>>毛小孩資訊
      path: '/adoptionpetinformation',
      name: 'adoptionpetinformation',
      component: () => import('../views/AdoptionPetInformation.vue')
    },
    {
      // 失散協尋頁面
      path: '/lostandfoundsearch',
      name: 'lostandfoundsearch',
      component: () => import('../views/LostandFoundSearchView.vue')
    },
    {
      // 失散協尋>>撿到遺失動物頁面
      path: '/foundanimalsform',
      name: 'foundanimalsform',
      component: () => import('../views/FormPageFoundAndLost.vue')
    },

    {
      // 最新消息頁面
      path: '/latestnewspage',
      name: 'latestnewspage',
      component: () => import('../views/LatestNewsPageView.vue')
    },
    {
      // 會員登入頁面
      path: '/memberlogin',
      name: 'memberlogin',
      component: () => import('../views/MemberLoginView.vue')
    },
  ]
})

export default router
