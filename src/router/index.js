import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import StoryView from "../views/StoryView.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import ForgotPassword from "../views/Forgot-Password.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/register",
    component: Register,
  },

  {
    path: "/login",
    component: Login,
  },

     {
    path: "/forgot-password",
    component: ForgotPassword,
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