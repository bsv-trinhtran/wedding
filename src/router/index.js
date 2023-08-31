import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Album from '../views/Album.vue'
import AttendWedding from '../views/AttendWedding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/album',
        name: 'album',
        component: Album
    },
    {
        path: '/attend-wedding',
        name: 'attendwedding',
        component: AttendWedding
    }
  ]
})

export default router
