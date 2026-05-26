# Kids Friendly Register Page (Vue + Tailwind CSS)

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

        <!-- LEFT IMAGE -->
        <div
          class="relative hidden lg:flex items-center justify-center bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 p-10 overflow-hidden"
        >

          <!-- FLOATS -->
          <div class="absolute top-10 left-10 text-6xl animate-bounce">
            🦄
          </div>

          <div class="absolute top-16 right-10 text-6xl animate-pulse">
            🌟
          </div>

          <div class="absolute bottom-10 left-10 text-6xl animate-bounce">
            🚀
          </div>

          <div class="absolute bottom-10 right-10 text-6xl animate-pulse">
            🎈
          </div>

          <div class="text-center relative z-10">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png"
              class="mx-auto w-72 drop-shadow-2xl animate-float"
            />

            <h1
              class="mt-8 text-5xl font-extrabold text-white drop-shadow-lg"
            >
              Kids Story World
            </h1>

            <p
              class="mt-6 text-2xl leading-10 text-white/95 font-semibold"
            >
              Create your magical account ✨
              <br />
              Read amazing stories every day 📚
            </p>

          </div>

        </div>

        <!-- FORM -->
        <div class="p-6 sm:p-10 lg:p-14">

          <!-- TOP -->
          <div class="text-center">

            <div
              class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-5xl text-white shadow-2xl"
            >
              🧒
            </div>

            <h2
              class="mt-6 text-4xl sm:text-5xl font-extrabold text-purple-700"
            >
              Create Account
            </h2>

            <p
              class="mt-4 text-lg text-gray-600"
            >
              Join the magical kids story adventure 🌈
            </p>

          </div>

          <!-- FORM -->
          <form class="mt-10 space-y-6">

            <!-- NAME -->
            <div>

              <label
                class="mb-3 block text-lg font-bold text-purple-700"
              >
                👦 Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                class="w-full rounded-3xl border-4 border-pink-100 bg-pink-50 px-6 py-5 text-lg font-semibold text-purple-700 outline-none transition focus:border-pink-400 focus:bg-white focus:shadow-xl"
              />

            </div>

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

            <!-- GENDER -->
            <div>

              <label
                class="mb-4 block text-lg font-bold text-purple-700"
              >
                🌈 Choose Gender
              </label>

              <div class="grid grid-cols-2 gap-4">

                <!-- BOY -->
                <label
                  class="group cursor-pointer rounded-3xl border-4 border-blue-100 bg-blue-50 p-5 transition hover:scale-105 hover:border-blue-300 hover:shadow-2xl"
                >

                  <input
                    type="radio"
                    name="gender"
                    value="boy"
                    class="hidden"
                  />

                  <div class="text-center">

                    <div
                      class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-200 text-5xl shadow-lg transition group-hover:scale-110"
                    >
                      👦
                    </div>

                    <h3
                      class="mt-4 text-2xl font-extrabold text-blue-600"
                    >
                      Boy
                    </h3>

                    <p
                      class="mt-2 text-sm font-semibold text-gray-600"
                    >
                      Adventure Hero 🚀
                    </p>

                  </div>

                </label>

                <!-- GIRL -->
                <label
                  class="group cursor-pointer rounded-3xl border-4 border-pink-100 bg-pink-50 p-5 transition hover:scale-105 hover:border-pink-300 hover:shadow-2xl"
                >

                  <input
                    type="radio"
                    name="gender"
                    value="girl"
                    class="hidden"
                  />

                  <div class="text-center">

                    <div
                      class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-200 text-5xl shadow-lg transition group-hover:scale-110"
                    >
                      👧
                    </div>

                    <h3
                      class="mt-4 text-2xl font-extrabold text-pink-600"
                    >
                      Girl
                    </h3>

                    <p
                      class="mt-2 text-sm font-semibold text-gray-600"
                    >
                      Magical Princess ✨
                    </p>

                  </div>

                </label>

              </div>

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
                placeholder="Create password"
                class="w-full rounded-3xl border-4 border-yellow-100 bg-yellow-50 px-6 py-5 text-lg font-semibold text-purple-700 outline-none transition focus:border-yellow-400 focus:bg-white focus:shadow-xl"
              />

            </div>

            <!-- CONFIRM PASSWORD -->
            <div>

              <label
                class="mb-3 block text-lg font-bold text-purple-700"
              >
                🔐 Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                class="w-full rounded-3xl border-4 border-green-100 bg-green-50 px-6 py-5 text-lg font-semibold text-purple-700 outline-none transition focus:border-green-400 focus:bg-white focus:shadow-xl"
              />

            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-8 py-5 text-2xl font-extrabold text-white shadow-2xl transition hover:scale-105"
            >
              🌈 Create Magical Account
            </button>

            <!-- LOGIN -->
            <div class="text-center">

              <p class="text-lg font-semibold text-gray-600">
                Already have an account?
              </p>

              <router-link
                to="/login"
                class="mt-4 inline-block rounded-full bg-purple-100 px-8 py-3 text-lg font-bold text-purple-700 transition hover:scale-105 hover:bg-purple-200"
              >
                🎈 Login Here
              </router-link>

            </div>

          </form>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
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
```
