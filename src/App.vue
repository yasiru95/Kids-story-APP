<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100">
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/70 shadow-sm">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <router-link
          to="/"
          class="flex items-center gap-3 text-purple-800 font-bold text-base sm:text-lg"
        >
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-500 text-lg text-white shadow-lg">
            📚
          </span>
          Kids Story App
        </router-link>

        <nav class="hidden sm:flex items-center gap-4 text-sm font-semibold text-purple-700">
          <router-link to="/" class="transition hover:text-pink-600">Home</router-link>
          <router-link to="/" class="transition hover:text-pink-600">Stories</router-link>
        </nav>

        <router-link
          to="/"
          class="sm:hidden inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-white text-sm font-semibold shadow-lg transition hover:bg-purple-700"
        >
          Home
        </router-link>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>