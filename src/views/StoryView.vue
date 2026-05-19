<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 py-10 px-4 overflow-hidden">

    <!-- BACK -->
    <div class="max-w-7xl mx-auto mb-6">
      <router-link
        to="/"
        class="bg-white px-6 py-3 rounded-full shadow-xl font-bold text-purple-700 hover:scale-105 transition inline-block"
      >
        ⬅ Back Home
      </router-link>
    </div>

    <!-- STORY -->
    <div v-if="story" class="max-w-6xl mx-auto">



<!-- PLAY + FULLSCREEN BUTTONS -->
<div class="flex justify-center gap-4  mb-8">

  <!-- PLAY -->
  <button
    @click="playStoryFromPage"
    class="px-10 py-5 rounded-full text-2xl font-bold text-white shadow-2xl
    bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400
    hover:scale-110 transition"
  >
    🎧 Play Story
  </button>

  <!-- FULLSCREEN -->
  <button
    @click="toggleHeroFullScreen"
    class="px-6 py-5 rounded-full text-2xl font-bold text-purple-700 shadow-2xl
    bg-white hover:scale-110 transition border-2 border-purple-200"
  >
    ⛶ Full Screen
  </button>

</div>


  



<!-- HERO -->
<div
  ref="heroRef"
  
  class="relative overflow-hidden shadow-2xl border-8 border-white
         w-full h-[420px] md:h-[520px] rounded-[40px]
         bg-black"
>
  <!-- IMAGE -->
  <img
    :src="story.image"
>
    //class="w-full h-[420px] md:h-[520px] object-cover scale-105"

  

  <!-- DARK OVERLAY -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

  <!-- 🌈 TOP TITLE (RESPONSIVE) -->
  <div class="absolute top-4 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center">

    <div class="bg-white/90 backdrop-blur-md px-4 md:px-8 py-2 md:py-4 rounded-full shadow-xl border-2 border-pink-200 text-center animate-float">

      <h1 class="text-xl md:text-4xl font-extrabold text-pink-600">
        {{ story.title }}
      </h1>

    </div>

  </div>

  <!-- ⬅ LEFT ARROW -->
  <button
    @click="prevPage"
    class="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 hover:bg-white shadow-2xl flex items-center justify-center text-2xl md:text-3xl text-purple-600 hover:scale-110 transition"
  >
    ❮
  </button>

  <!-- ➡ RIGHT ARROW -->
  <button
    @click="nextPage"
    class="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 hover:bg-white shadow-2xl flex items-center justify-center text-2xl md:text-3xl text-purple-600 hover:scale-110 transition"
  >
    ❯
  </button>

  <!-- FLOATING ICONS -->
  <div class="absolute top-16 left-6 text-3xl md:text-4xl animate-bounce">🌟</div>
 

  <!-- 💬 CLOUD STORY TEXT (RESPONSIVE) -->
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">

    <div class="relative bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-[40px] shadow-2xl border-4 border-blue-100 max-w-[90%] md:max-w-fit">

      <p class="text-center text-sm md:text-2xl font-semibold text-purple-700 font-[cursive] leading-snug">

        💬

        <transition name="fade" mode="out-in">
          <div :key="currentPage" class="inline">

            <span
              v-for="(word, index) in currentSentenceData.words"
              :key="index"
              :class="[
                'inline-block mx-1 px-2 py-1 rounded-xl transition-all duration-300',
                activeWordIndex === index
                  ? 'bg-yellow-300 text-purple-900 scale-110 shadow-lg animate-pulse'
                  : 'text-gray-700'
              ]"
            >
              {{ word.text }}
            </span>

          </div>
        </transition>

      </p>

    </div>

    

  </div>
  

</div>

<!-- 🟦 WHITE INFO BOX UNDER IMAGE -->
<!-- 🟦 WHITE INFO BOX UNDER IMAGE (COMPACT) -->
<div class="max-w-4xl mx-auto -mt-6 relative z-10">

  <div class="bg-white rounded-[30px] shadow-xl border-4 border-pink-100 px-6 py-2">

  <div class="flex items-center justify-center gap-4">

    <!-- DOTS -->
    <div class="flex gap-3 items-center">
      <div
        v-for="(p, index) in story.pages"
        :key="index"
        @click="goToPage(index)"
        class="w-4 h-4 rounded-full cursor-pointer transition"
        :class="currentPage === index ? 'bg-pink-500 scale-125' : 'bg-pink-200'"
      ></div>
    </div>

    <!-- TEXT -->
    <span class="text-sm md:text-lg font-semibold text-purple-700 font-[cursive] whitespace-nowrap">
      📖 Page {{ currentPage + 1 }} / {{ story.pages.length }}
    </span>

  </div>

</div>

</div>

  

        


      

      
    </div>

    <!-- NOT FOUND -->
    <div v-else class="min-h-[80vh] flex items-center justify-center px-6">
      <div class="bg-white max-w-3xl w-full rounded-[40px] shadow-2xl p-10 text-center border-[12px] border-pink-200">
        <div class="text-8xl mb-8">📚😢</div>
        <h1 class="text-5xl font-extrabold text-pink-500">Oops!</h1>
        <p class="mt-8 text-2xl">Story not found</p>
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


const heroRef = ref(null)
const isFullScreen = ref(false)

const toggleHeroFullScreen = async () => {
  const el = heroRef.value

  if (!document.fullscreenElement) {
    await el.requestFullscreen()
    stopAudio()

    playStoryFromPage()
    isFullScreen.value = true
  } else {
    await document.exitFullscreen()
    stopAudio()
    isFullScreen.value = false
  }
}

const heroClass = computed(() =>
  isFullScreen.value
    ? "fixed inset-0 w-screen h-screen rounded-none border-0 z-50"
    : "relative w-full h-[420px] md:h-[520px] rounded-[40px] border-8 border-white"
)

const route = useRoute()

const currentPage = ref(0)
const currentSentence = ref(0)
const activeWordIndex = ref(-1)

let animationFrame = null
let currentAudio = null

/* ================= STORY ================= */
const stories = [
  {
    id: 1,
    title: "🦁 Brave Lion",
    description: "A brave lion protects all jungle animals.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    pages: [
      {
        audio: story1,
        sentences: [
          {
            text: "The little rabbit woke up in the green forest.",
            words: [
              { text: "The", start: 0, end: 0.4 },
              { text: "little", start: 0.4, end: 0.9 },
              { text: "rabbit", start: 0.9, end: 1.4 },
              { text: "woke", start: 1.4, end: 1.8 },
              { text: "up", start: 1.8, end: 2.2 },
              { text: "in", start: 2.2, end: 2.6 },
              { text: "the", start: 2.6, end: 3.0 },
              { text: "green", start: 3.0, end: 3.5 },
              { text: "forest.", start: 3.5, end: 4.2 },
            ],
          },
          {
            text: "He saw the sun shining through the tall trees.",
            words: [
              { text: "He", start: 4.3, end: 4.6 },
              { text: "saw", start: 4.6, end: 4.9 },
              { text: "the", start: 4.9, end: 5.1 },
              { text: "sun", start: 5.1, end: 5.4 },
              { text: "shining", start: 5.4, end: 5.9 },
            ],
          },
          {
            text: "A gentle wind moved the soft leaves.",
            words: [
              { text: "A", start: 6.0, end: 6.2 },
              { text: "gentle", start: 6.2, end: 6.6 },
              { text: "wind", start: 6.6, end: 7.0 },
              { text: "moved", start: 7.0, end: 7.4 },
              { text: "leaves.", start: 7.4, end: 7.9 },
            ],
          }
        ]
      },
      {
        audio: story2,
        sentences: [
          {
            text: "The rabbit met a small brown squirrel on a branch.",
            words: [
              { text: "The", start: 0, end: 0.4 },
              { text: "rabbit", start: 0.4, end: 0.9 },
              { text: "met", start: 0.9, end: 1.2 },
              { text: "a", start: 1.2, end: 1.4 },
              { text: "squirrel", start: 1.4, end: 2.0 },
            ],
          },
          {
            text: "They shared some sweet berries together.",
            words: [
              { text: "They", start: 2.0, end: 2.4 },
              { text: "shared", start: 2.4, end: 2.8 },
              { text: "berries", start: 2.8, end: 3.2 },
            ],
          },
          {
            text: "They became happy friends in the forest.",
            words: [
              { text: "They", start: 3.2, end: 3.5 },
              { text: "became", start: 3.5, end: 3.9 },
              { text: "friends.", start: 3.9, end: 4.4 },
            ],
          }
        ]
      },
      {
        audio: story3,
        sentences: [
          {
            text: "A big rain started falling in the evening sky.",
            words: [
              { text: "A", start: 0, end: 0.3 },
              { text: "big", start: 0.3, end: 0.7 },
              { text: "rain", start: 0.7, end: 1.1 },
              { text: "started", start: 1.1, end: 1.7 },
              { text: "falling.", start: 1.7, end: 2.4 },
            ],
          },
          {
            text: "The rabbit and squirrel ran into a cozy tree hole.",
            words: [
              { text: "The", start: 2.4, end: 2.7 },
              { text: "rabbit", start: 2.7, end: 3.1 },
              { text: "ran", start: 3.1, end: 3.5 },
              { text: "hole.", start: 3.5, end: 4.0 },
            ],
          },
          {
            text: "They stayed safe and listened to the rain together.",
            words: [
              { text: "They", start: 4.0, end: 4.3 },
              { text: "stayed", start: 4.3, end: 4.7 },
              { text: "safe.", start: 4.7, end: 5.2 },
            ],
          }
        ]
      }
    ]
  }
]

/* ================= STORY ================= */
const story = computed(() =>
  stories.find((s) => s.id === Number(route.params.id))
)

/* ================= CURRENT SENTENCE ================= */
const currentSentenceData = computed(() => {
  return story.value.pages[currentPage.value].sentences[currentSentence.value]
})

/* ================= AUDIO ================= */
const playStoryFromPage = () => {
  playAudio(story.value.pages[currentPage.value].audio)
}

const playAudio = (audioFile) => {
  stopAudio()

  const page = story.value.pages[currentPage.value]
  const audio = new Audio(audioFile)
  currentAudio = audio

  currentSentence.value = 0
  activeWordIndex.value = -1

  audio.play()

  const sync = () => {
    const time = audio.currentTime
    const sentence = page.sentences[currentSentence.value]

    if (!sentence) return

    // sentence switch
    for (let i = 0; i < page.sentences.length; i++) {
      const last = page.sentences[i].words.at(-1)
      if (time <= last.end) {
        currentSentence.value = i
        break
      }
    }

    const words = sentence.words

    let index = words.length - 1
    for (let i = 0; i < words.length; i++) {
      if (time < words[i].end) {
        index = i
        break
      }
    }

    activeWordIndex.value = index

    animationFrame = requestAnimationFrame(sync)
  }

  sync()

  audio.onended = () => {
    stopAudio()

    if (currentPage.value < story.value.pages.length - 1) {
      setTimeout(() => {
        currentPage.value++
        playStoryFromPage()
      }, 1200)
    }
  }
}

/* ================= STOP ================= */
const stopAudio = () => {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentAudio = null
  activeWordIndex.value = -1

  if (animationFrame) cancelAnimationFrame(animationFrame)
}

/* ================= NAV ================= */
const nextPage = () => {
  if (currentPage.value < story.value.pages.length - 1) {
    currentPage.value++
    stopAudio()
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
    stopAudio()
  }
}

const goToPage = (i) => {
  currentPage.value = i
  currentSentence.value = 0
  stopAudio()
}

/* RESET */
watch(
  () => route.params.id,
  () => {
    currentPage.value = 0
    currentSentence.value = 0
    stopAudio()
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