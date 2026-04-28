import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import('../views/EventosPage.vue')
  },
  {
    path: '/eventos/:id',
    name: 'EventoDetalhe',
    component: () => import('../views/EventoDetalhePage.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import('../views/FavoritosPage.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/PerfilPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router