import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import resultado from '../views/ResultadoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resultado',
      name: 'resultado',
      component: resultado
    }
  ]
})

export default router
