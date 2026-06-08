import { defineStore } from "pinia"
import { ref } from "vue"
import router from "../router"

export const globalStore = defineStore("appStore", () => {

  // 🌍 GLOBAL STATE
  const isLoggedIn = ref(false)
  const mobileMenu = ref(false)
  const isKidSubscribed = ref(false)
  const userLogin = ref(null)

  // 🔐 LOGIN
  const login = (user, token) => {
    isLoggedIn.value = true
    userLogin.value = user

    // save to localStorage
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))

    alert("Logged in successfully!!!")
    router.push("/")
  }

  // 🚪 LOGOUT
  const logout = () => {
    isLoggedIn.value = false
    mobileMenu.value = false
    isKidSubscribed.value = false
    userLogin.value = null

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    router.push("/")
  }

  // 🔄 RESTORE SESSION (IMPORTANT)
  const initAuth = () => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token && user) {
      isLoggedIn.value = true
      userLogin.value = JSON.parse(user)
    }
  }

  return {
    userLogin,
    isLoggedIn,
    mobileMenu,
    isKidSubscribed,
    login,
    logout,
    initAuth
  }
})