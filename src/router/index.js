import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/HomeView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: ()=>import('../views/HistoryView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: ()=>import('../views/ProfileView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: ()=>import('../views/ReportView.vue')
    },
  ]
})

export default router
