import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import BookView from '../views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import('../views/DashboardView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/books',
      name: 'books',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/authors',
      name: 'authors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthorView.vue')
    },
  ]
})

export default router
