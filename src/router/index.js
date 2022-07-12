import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/classif',
    name: 'classif',
    component: () => import('../views/classIf/ClassIf.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/shopping/Shopping.vue')
  },
  {
    path: '/infor',
    name: 'infor',
    component: () => import('../views/infor/InFor.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/home/homeChilds/Detail.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router