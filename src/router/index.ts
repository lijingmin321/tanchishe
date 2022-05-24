import { createRouter, createWebHashHistory } from 'vue-router' 

import Home from '../page/Home.vue'
import Game from '../page/Game.vue'
import GameOver from '../page/GameOver.vue'

const constantRouter:Array<any> = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/gameOver',
    name: 'gameOver',
    component: GameOver
  }
]

const router = createRouter({
    history: createWebHashHistory(''),
    routes: constantRouter,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  })

export default router