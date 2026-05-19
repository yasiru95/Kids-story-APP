import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import StoryView from "../views/StoryView.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/story/:id",
    component: StoryView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router