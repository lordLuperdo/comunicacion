import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import resultado from '../views/ResultadoView.vue'
import examen from '../views/examenView.vue'

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
    },
    {
      path: '/examen',
      name: 'examen',
      component: examen
    }
  ]
})

export default router
