import { defineStore } from "pinia"
import { ref } from "vue"
import router from "../router"

export const globalStore = defineStore("appStore", () => {
  // 🌍 GLOBAL STATE
  const isLoggedIn = ref(false)
  const mobileMenu = ref(false)


  // 🔐 LOGIN
  const login = () => {
    alert("Logged in successfully!")
    isLoggedIn.value = true
    router.push("/")
  }

  // 🚪 LOGOUT
  const logout = () => {
    isLoggedIn.value = false
    mobileMenu.value = false
    router.push("/")

  }

  return {
    isLoggedIn,
    mobileMenu,
    login,
    logout,
  }
})