<template>
  <div
    class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 py-10 px-4 overflow-hidden"
  >
    <!-- BACK -->
    <div class="max-w-7xl mx-auto mb-6">
      <router-link
        to="/"
        class="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-purple-700 hover:scale-105 transition inline-block"
      >
        ⬅ Back Home
      </router-link>
    </div>

    <!-- STORY FOUND -->
    <div v-if="story" class="max-w-6xl mx-auto">

      <!-- HERO IMAGE -->
      <div class="relative rounded-[40px] overflow-hidden shadow-2xl">
        <img :src="story.image" class="w-full h-[500px] object-cover" />
        <div class="absolute inset-0 bg-black/30"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 class="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl">
            {{ story.title }}
          </h1>

          <p class="mt-6 text-2xl text-white max-w-3xl leading-10">
            {{ story.description }}
          </p>
        </div>
      </div>

      <!-- 🎧 CUTE PLAY STORY BUTTON -->
      <div class="flex justify-center mt-10 mb-8">
        <button
          @click="playStoryFromPage"
          class="px-10 py-5 rounded-full text-2xl font-bold text-white shadow-2xl
          bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400
          hover:scale-110 transition"
        >
          🎧 Play Story
        </button>
      </div>

      <!-- BOOK -->
      <div class="mt-16 relative">

        <!-- LEFT -->
        <button
          @click="prevPage"
          class="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❮
        </button>

        <!-- BOOK -->
        <div class="bg-white rounded-[40px] shadow-2xl p-6 md:p-12 max-w-4xl mx-auto border-[12px] border-pink-200 relative">

          <div class="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-300 px-8 py-2 rounded-full text-2xl shadow-lg">
            📖 Story Book
          </div>

          <transition name="fade" mode="out-in">
            <div :key="currentPage" class="min-h-[350px] flex flex-col justify-center">

              <h2 class="text-4xl font-extrabold text-purple-700 text-center">
                Page {{ currentPage + 1 }}
              </h2>

              <div class="mt-10 text-2xl leading-[60px] text-gray-700 text-center font-medium">
                <p
                  v-for="(line, index) in story.pages[currentPage]"
                  :key="index"
                  class="mb-6"
                >
                  {{ line }}
                </p>
              </div>

            </div>
          </transition>

          <!-- DOTS -->
          <div class="flex justify-center gap-3 mt-8">
            <div
              v-for="(p, index) in story.pages"
              :key="index"
              @click="goToPage(index)"
              class="w-5 h-5 rounded-full cursor-pointer transition"
              :class="currentPage === index ? 'bg-pink-500 scale-125' : 'bg-pink-200'"
            ></div>
          </div>

        </div>

        <!-- RIGHT -->
        <button
          @click="nextPage"
          class="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❯
        </button>
        

      </div>
    </div>

      <!-- STORY NOT FOUND -->
    <div
      v-else
      class="min-h-[80vh] flex items-center justify-center px-6"
    >

      <div
        class="bg-white max-w-3xl w-full rounded-[40px] shadow-2xl p-10 md:p-16 text-center border-[12px] border-pink-200 relative overflow-hidden"
      >

        <!-- FLOATING EMOJIS -->
        <div class="absolute top-6 left-6 text-5xl animate-bounce">
          🐻
        </div>

        <div class="absolute top-10 right-10 text-5xl animate-pulse">
          🌈
        </div>

        <div class="absolute bottom-8 left-10 text-5xl animate-bounce">
          ⭐
        </div>

        <div class="absolute bottom-6 right-6 text-5xl animate-pulse">
          🦄
        </div>

        <!-- EMOJI -->
        <div class="text-8xl mb-8">
          📚😢
        </div>

        <!-- TITLE -->
        <h1
          class="text-5xl md:text-6xl font-extrabold text-pink-500"
        >
          Oops!
        </h1>

        <!-- MESSAGE -->
        <p
          class="mt-8 text-2xl leading-10 text-gray-700"
        >
          This magical story could not be found.
          <br />
          Maybe the story flew away with fairy dust ✨
        </p>

        <!-- BUTTON -->
        <router-link
          to="/"
          class="mt-10 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition"
        >
          🏠 Go Back Home
        </router-link>

      </div>

    </div>

    
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useRoute } from "vue-router"

import story1 from "../assets/audio/story1.mp3"
import story2 from "../assets/audio/story2.mp3"
import story3 from "../assets/audio/story3.mp3"

const route = useRoute()

const currentPage = ref(0)
const currentAudio = ref(null)

/* ================= STORY DATA ================= */
const stories = [
  {
    id: 1,
    title: "🦁 Brave Lion",
    description: "A brave lion protects all jungle animals.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    pages: [
      [
        "The little rabbit woke up in the green forest.",
        "He saw the sun shining through the tall trees.",
        "A gentle wind moved the soft leaves.",
      ],
      [
        "The rabbit met a small brown squirrel on a branch.",
        "They shared some sweet berries together.",
        "They became happy friends in the forest.",
      ],
      [
        "A big rain started falling in the evening sky.",
        "The rabbit and squirrel ran into a cozy tree hole.",
        "They stayed safe and listened to the rain together.",
      ],
    ],
  },
]

/* ================= FIND STORY ================= */
const story = computed(() =>
  stories.find((s) => s.id === Number(route.params.id))
)

/* ================= AUDIO PER PAGE ================= */
const audioList = [story1, story2, story3]

const playStoryFromPage = () => {
  if (!story.value) return

  playAudio(audioList[currentPage.value])
}

const playAudio = (audioFile) => {
  if (currentAudio.value) {
    currentAudio.value.pause()
    currentAudio.value.currentTime = 0
  }

  currentAudio.value = new Audio(audioFile)
  currentAudio.value.play()
}

/* ================= NAVIGATION ================= */
const nextPage = () => {
  if (currentPage.value < story.value.pages.length - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const goToPage = (index) => {
  currentPage.value = index
}

/* reset */
watch(
  () => route.params.id,
  () => {
    currentPage.value = 0
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>