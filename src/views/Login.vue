# Kids Friendly Login Page (Vue + Tailwind CSS)

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 overflow-hidden relative"
  >

    <!-- FLOATING ICONS -->
    <div class="absolute top-10 left-6 text-5xl animate-bounce">
      🌈
    </div>

    <div class="absolute top-20 right-10 text-5xl animate-pulse">
      ⭐
    </div>

    <div class="absolute bottom-10 left-10 text-5xl animate-bounce">
      🧸
    </div>

    <div class="absolute bottom-10 right-10 text-5xl animate-pulse">
      📚
    </div>

    <!-- CONTAINER -->
    <div
      class="relative z-10 flex min-h-screen items-center justify-center px-4 py-10"
    >

      <!-- CARD -->
      <div
        class="w-full max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-2xl border-[10px] border-white grid lg:grid-cols-2"
      >

        <!-- LEFT SIDE -->
        <div
          class="relative hidden lg:flex items-center justify-center bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 p-10 overflow-hidden"
        >

          <!-- FLOATING EMOJIS -->
          <div class="absolute top-10 left-10 text-6xl animate-bounce">
            🚀
          </div>

          <div class="absolute top-16 right-10 text-6xl animate-pulse">
            🌟
          </div>

          <div class="absolute bottom-10 left-10 text-6xl animate-bounce">
            🦄
          </div>

          <div class="absolute bottom-10 right-10 text-6xl animate-pulse">
            🎈
          </div>

          <div class="relative z-10 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2436/2436702.png"
              class="mx-auto w-72 drop-shadow-2xl animate-float"
            />

            <h1
              class="mt-8 text-5xl font-extrabold text-white drop-shadow-lg"
            >
              Welcome Back
            </h1>

            <p
              class="mt-6 text-2xl leading-10 text-white/95 font-semibold"
            >
              Continue your magical reading adventure ✨
              <br />
              Explore fun stories and happy worlds 📚
            </p>

          </div>

        </div>

        <!-- FORM SIDE -->
        <div class="p-6 sm:p-10 lg:p-14">

          <!-- TOP -->
          <div class="text-center">

            <div
              class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-5xl text-white shadow-2xl"
            >
              📚
            </div>

            <h2
              class="mt-6 text-4xl sm:text-5xl font-extrabold text-purple-700"
            >
              Login
            </h2>

            <p
              class="mt-4 text-lg text-gray-600"
            >
              Enter your magical account ✨
            </p>

          </div>

          <!-- FORM -->
          <form class="mt-10 space-y-6" @submit.prevent="handleLogin">

            <!-- EMAIL -->
            <div>

              <label
                class="mb-3 block text-lg font-bold text-purple-700"
              >
                📧 Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-3xl border-4 border-blue-100 bg-blue-50 px-6 py-5 text-lg font-semibold text-purple-700 outline-none transition focus:border-blue-400 focus:bg-white focus:shadow-xl"
              />

            </div>

            <!-- PASSWORD -->
            <div>

              <label
                class="mb-3 block text-lg font-bold text-purple-700"
              >
                🔒 Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                class="w-full rounded-3xl border-4 border-pink-100 bg-pink-50 px-6 py-5 text-lg font-semibold text-purple-700 outline-none transition focus:border-pink-400 focus:bg-white focus:shadow-xl"
              />

            </div>

            <!-- REMEMBER + FORGOT -->
            <div
              class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >

              <label
                class="flex cursor-pointer items-center gap-3 text-base font-semibold text-purple-700"
              >

                <input
                  type="checkbox"
                  class="h-5 w-5 rounded border-2 border-pink-400 text-pink-500 focus:ring-pink-400"
                />

                Remember Me 🌈

              </label>

              <router-link
                to="/forgot-password"
                class="text-sm font-bold text-pink-600 hover:text-pink-800 transition"
                >
            <button
                type="button"
                class="text-base font-bold text-pink-500 transition hover:scale-105 hover:text-pink-600"
              >
                Forgot Password?
              </button>

            </router-link>
            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-8 py-5 text-2xl font-extrabold text-white shadow-2xl transition hover:scale-105"
            >
              🚀 Login Now
            </button>

            <!-- REGISTER -->
            <div class="text-center">

              <p class="text-lg font-semibold text-gray-600">
                Don't have an account?
              </p>

              <router-link
                to="/register"
                class="mt-4 inline-block rounded-full bg-pink-100 px-8 py-3 text-lg font-bold text-pink-600 transition hover:scale-105 hover:bg-pink-200"
              >
                🌈 Create Account
              </router-link>

            </div>

          </form>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>

import { globalStore } from "../pinaGlobal/global"
const global = globalStore()

const handleLogin = () => {
    global.login()
 
}
</script>

<style scoped>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>

