<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 px-4">

    <!-- LEFT -->
    <button
      @click="prevPage"
      class="absolute left-4 bg-purple-500 text-white w-14 h-14 rounded-full text-3xl"
    >
      ❮
    </button>

    <!-- BOOK -->
    <div class="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

      <!-- IMAGE -->
      <div class="h-[300px] bg-gray-200 flex items-center justify-center text-2xl font-bold">
        📖 Story {{ currentPage + 1 }}
      </div>

      <!-- AUDIO CONTROLS -->
      <div class="flex justify-center gap-4 py-4 bg-pink-100">

        <button @click="playAudio" class="bg-green-500 px-6 py-3 rounded-full text-white">
          ▶ Play
        </button>

        <button @click="pauseAudio" class="bg-red-500 px-6 py-3 rounded-full text-white">
          ⏸ Pause
        </button>

      </div>

      <!-- TEXT -->
      <div class="p-10 text-center text-2xl font-bold leading-[60px]">

        <span
          v-for="(word, i) in words"
          :key="i"
          class="inline-block mx-2 transition-all duration-200"
          :class="i === activeWord ? 'text-pink-600 bg-yellow-200 px-2 rounded-lg scale-125' : 'text-gray-600'"
        >
          {{ word.text }}
        </span>

      </div>

      <!-- FOOTER -->
      <div class="bg-gradient-to-r from-pink-500 to-purple-500 text-white flex justify-between px-6 py-4">
        <span>📚 Kids Story</span>
        <span>Page {{ currentPage + 1 }} / {{ stories.length }}</span>
      </div>

    </div>

    <!-- RIGHT -->
    <button
      @click="nextPage"
      class="absolute right-4 bg-pink-500 text-white w-14 h-14 rounded-full text-3xl"
    >
      ❯
    </button>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue"

/* ================= STORIES ================= */

const stories = [
  {
    audio: require("../assets/audio/story1.mp3"),
    text: [
      "The little rabbit woke up in the green forest.",
      "He saw the sun shining through the tall trees.",
      "A gentle wind moved the soft leaves."
    ]
  },
  {
    audio: require("../assets/audio/story2.mp3"),
    text: [
      "The rabbit met a small brown squirrel on a branch.",
      "They shared some sweet berries together.",
      "They became happy friends in the forest."
    ]
  },
  {
    audio: require("../assets/audio/story3.mp3"),
    text: [
      "A big rain started falling in the evening sky.",
      "The rabbit and squirrel ran into a cozy tree hole.",
      "They stayed safe and listened to the rain together."
    ]
  }
]

/* ================= STATE ================= */

const currentPage = ref(0)
const activeWord = ref(0)
const audio = new Audio(stories[0].audio)

/* ================= WORD SPLIT ================= */

const words = computed(() => {
  return stories[currentPage.value].text
    .join(" ")
    .split(" ")
    .map(w => ({
      text: w,
      time: 0
    }))
})

/* ================= AUDIO ================= */

const loadAudio = () => {
  audio.pause()
  audio.src = stories[currentPage.value].audio
  audio.load()
  activeWord.value = 0
}

/* ================= PLAY ================= */

const playAudio = () => {
  audio.play()
}

/* ================= PAUSE ================= */

const pauseAudio = () => {
  audio.pause()
}

/* ================= WORD SYNC (AUTO TIMING) ================= */

const updateWords = () => {
  const text = stories[currentPage.value].text.join(" ")
  const split = text.split(" ")

  const duration = audio.duration || 10
  const step = duration / split.length

  const currentIndex = Math.floor(audio.currentTime / step)

  activeWord.value = currentIndex
}

/* ================= PAGE NAV ================= */

const nextPage = () => {
  if (currentPage.value < stories.length - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

/* ================= WATCH PAGE ================= */

watch(currentPage, () => {
  loadAudio()
})

/* ================= INIT ================= */

onMounted(() => {
  loadAudio()
  audio.addEventListener("timeupdate", updateWords)
})
</script>