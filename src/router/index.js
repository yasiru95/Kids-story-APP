import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import StoryView from "../views/StoryView.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import ForgotPassword from "../views/Forgot-Password.vue"
import AgeGate from "../components/Age-Gate.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/register",
    component: AgeGate,
  },

  {
    path: "/login",
    component: AgeGate,
  },

     {
    path: "/forgot-password",
    component: ForgotPassword,
  },

  {
    path: "/story/:id",
    component: StoryView,
  },

  {
    path: "/parent-login",
    component: Login,
  },

  {
    path: "/parent-register",
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router