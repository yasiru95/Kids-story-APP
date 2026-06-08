<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 py-[2.5rem] px-[1rem] overflow-hidden">

    <!-- BACK -->
 <div class="max-w-7xl mx-auto mb-[1rem] sm:mb-0">
  <router-link
    to="/"
    class="inline-flex items-center justify-center
           w-[60%] ml-[5rem] sm:w-auto
           px-[1.5rem] py-[0.875rem]
           sm:px-[1.5rem] sm:py-[0.75rem]
           rounded-full shadow-xl
           font-bold text-purple-700
           bg-white
           hover:scale-105 transition"
  >
    ⬅ Back Home
  </router-link>
</div>

    <Loadder v-if="loading" />

    <!-- STORY -->
 <div v-if="story" class="max-w-6xl mx-auto">

  <MobileHint />

<!-- PLAY + FULLSCREEN BUTTONS -->
<div class="flex flex-col sm:flex-row justify-center items-center gap-[1rem] mb-[2rem] px-[0.5rem] sm:px-0">

  <!-- PLAY -->
  <button
    @click="playStoryFromPage"
    class="w-full sm:w-auto px-[2rem] sm:px-[2.5rem] py-[1rem] sm:py-[1.25rem] rounded-full text-[1.25rem] sm:text-[1.5rem] font-bold text-white shadow-2xl
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:scale-110 transition"
  >
    🎧 Play Story
  </button>

  <!-- FULLSCREEN -->
  <button
    @click="toggleHeroFullScreen"
    class="w-full sm:w-auto px-[1.5rem] sm:px-[2rem] py-[1rem] sm:py-[1.25rem] rounded-full text-[1.25rem] sm:text-[1.5rem] font-bold text-purple-700 shadow-2xl
    bg-white hover:scale-110 transition border-[0.125rem] border-purple-200"
  >
    ⛶ Full Screen
  </button>

</div>

<!-- HERO -->
<div
  ref="heroRef"
  class="relative
    overflow-hidden
    shadow-2xl
    border-[0.25rem] sm:border-[0.375rem]
    border-white
    w-full
    h-[15rem] sm:h-[26rem] md:h-[32rem] lg:h-[38rem] xl:h-[44rem]
    rounded-[1.75rem] sm:rounded-[2.5rem]
    bg-black,     isFullScreen"
>

  <!-- IMAGE -->
  <transition 
    mode="out-in"
    enter-active-class="transition-all duration-500 ease-out"
    leave-active-class="transition-all duration-500 ease-in"
    enter-from-class="opacity-0 translate-x-[2.5rem]"
    enter-to-class="opacity-100 translate-x-0"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 -translate-x-[2.5rem]"
  >
    <img
      :key="currentPage"
      :src="story.pages[currentPage].img"
      class="absolute inset-0 w-full h-full object-contain md:object-cover"
    />
  </transition>

  <!-- DARK OVERLAY -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

  <!-- TOP TITLE -->
  <div class="absolute top-[1rem] left-1/2 -translate-x-1/2 w-full px-[1rem] flex justify-center">

    <div class="bg-white/90 backdrop-blur-md px-[1rem] md:px-[2rem] py-[0.5rem] md:py-[1rem] rounded-full shadow-xl border-[0.125rem] border-pink-200 text-center animate-float max-w-[95%]">

      <h1 class="text-[0.575rem] sm:text-[1.25rem] md:text-[1.35rem] lg:text-[1.50rem] font-extrabold text-pink-600 truncate">
        {{ story.title }}
      </h1>

    </div>

  </div>

  <!-- LEFT -->
  <button
    @click="prevPage"
    class="absolute left-[0.5rem] md:left-[1.5rem] top-1/2 -translate-y-1/2 
           w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]
           rounded-full bg-white/90 hover:bg-white shadow-2xl 
           flex items-center justify-center 
           text-[1.5rem] md:text-[2rem] 
           text-purple-600 hover:scale-110 transition"
  >
    ❮
  </button>

  <!-- RIGHT -->
  <button
    @click="nextPage"
    class="absolute right-[0.5rem] md:right-[1.5rem] top-1/2 -translate-y-1/2 
           w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]
           rounded-full bg-white/90 hover:bg-white shadow-2xl 
           flex items-center justify-center 
           text-[1.5rem] md:text-[2rem] 
           text-purple-600 hover:scale-110 transition"
  >
    ❯
  </button>

  <!-- FLOATING -->
  <div class="absolute top-[4rem] left-[1.5rem] text-[1.875rem] md:text-[2.5rem] animate-bounce">
    🌟
  </div>

  <!-- TEXT BOX -->
  <div class="absolute bottom-[1rem] left-1/2 -translate-x-1/2 w-full flex justify-center px-[0.5rem]">
  
    <div class="relative 
                bg-white/20 backdrop-blur-md 
                px-[0.75rem] py-[0.375rem] md:px-[1.5rem] md:py-[0.75rem] 
                rounded-full md:rounded-[2.5rem] 
                shadow-xl border-[0.125rem] md:border-[0.25rem] border-blue-100 
                max-w-[95%] md:max-w-fit
                overflow-hidden">

      <p class="flex flex-wrap
  justify-center
  items-center
  text-center
  leading-relaxed text-[0.6875rem] sm:text-[0.875rem] md:text-[1.25rem] font-semibold text-purple-700">

        💬

        <transition name="fade" mode="out-in">
          <div :key="currentPage" class="flex flex-wrap
    justify-center
    items-center
    gap-1">

            <span
              v-for="(word, index) in currentSentenceData.words"
              :key="index"
              @click="playStoryFromPage"
              class="
              inline-block 
              mx-[0.125rem] sm:mx-[0.25rem] 
              px-[0.125rem] sm:px-[0.25rem] 
              py-[0.0625rem] sm:py-[0.125rem] 
              rounded-[0.375rem] sm:rounded-[0.5rem] 
              text-[0.5rem] sm:text-[0.875rem] md:text-[2rem]
              transition-all duration-300 cursor-pointer
              hover:scale-110 hover:shadow-md
              "
              :class="[
                activeWordIndex === index
                  ? 'text-highlight scale-105 shadow-md'
                  : 'text-outline'
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

<!-- WHITE CONTROL BOX -->
<div
  class="
      w-full
    max-w-5xl
    mx-auto
    mt-4
    relative z-10
    bg-white
    shadow-xl
    border-4 border-pink-100
    px-3 sm:px-6
    py-3
    rounded-3xl sm:rounded-full
  "
>

  <div class=" flex
      flex-wrap
      justify-center
      items-center
      gap-4">

    <!-- DOTS -->
    <div class="flex
        flex-wrap
        justify-center
        gap-2">
      <div
        v-for="(p, index) in story.pages"
        :key="index"
        @click="goToPage(index)"
        class="rounded-full cursor-pointer transition"
        :class="[
          currentPage === index
            ? 'bg-pink-500 shadow-lg'
            : 'bg-pink-200 hover:bg-pink-300',
          'w-[0.5rem] h-[0.5rem] sm:w-[1rem] sm:h-[1rem]'
        ]"
      ></div>
    </div>

    <!-- INFO -->
    <span
      class="font-semibold text-purple-700 whitespace-nowrap
             text-[0.625rem] sm:text-[1rem] shrink-0"
    >
      📖 {{ currentPage + 1 }}/{{ story.pages.length }}
    </span>

    <!-- CONTROLS -->
    <div class="flex items-center gap-[0.75rem] sm:gap-[0.5rem] shrink-0">

      <!-- PREV -->
      <button
        @click="prevPage"
        class="flex items-center justify-center rounded-full
               bg-pink-100 text-pink-600
               w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem]
               text-[0.625rem] sm:text-[1.125rem]
               hover:scale-110 transition"
      >
        ⬅
      </button>

      <!-- INPUT -->
      <input
        v-model="pageInput"
        type="number"
        min="1"
        :max="story.pages.length"
        @keyup.enter="jumpToPage"
        placeholder="Page No"
        class="text-center font-bold text-purple-700 outline-none
               border border-pink-100 bg-pink-50
               rounded-full
               w-[5rem]  h-[1.5rem] text-[0.625rem]
              sm:text-[0.875rem] 
               focus:border-pink-400 focus:bg-white"
      />

      <!-- GO -->
      <button
        @click="jumpToPage"
        class="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold
               rounded-full transition hover:scale-105
               text-[0.5625rem] px-[0.5rem] py-[0.125rem]
               sm:text-[0.75rem] sm:px-[0.75rem] sm:py-[0.25rem]"
      >
        Go
      </button>

      <!-- NEXT -->
      <button
        @click="nextPage"
        class="flex items-center justify-center rounded-full
               bg-blue-100 text-blue-600
               w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem]
               text-[0.625rem] sm:text-[1.125rem]
               hover:scale-110 transition"
      >
        ➡
      </button>

    </div>

  </div>
</div>

    </div>

    <!-- NOT FOUND -->
    <NotFound v-else />

  </div>
</template>

<script setup>
import {
  computed,
  ref,
  watch,
  onMounted,
  onUnmounted
} from "vue"
import NotFound from "../components/NotFound.vue"
import { useRoute } from "vue-router"
import Loadder from "../components/Loadder.vue"
import MobileHint from "../components/ForMobile.vue"
import api from '../services/Api.js';

import router from "../router"

import { globalStore } from "../pinaGlobal/global"
const global = globalStore()


const popSound = new Audio("../assets/sounds/pop.wav")







function playPop() {
  popSound.currentTime = 0
  popSound.volume = 0.4
  popSound.play()
}


const heroRef = ref(null)
const isFullScreen = ref(false)

const toggleHeroFullScreen = async () => {
    isFullScreen.value = !isFullScreen.value
  const el = heroRef.value

  if (!document.fullscreenElement) {
    await el.requestFullscreen()
    playStoryFromPage()
    isFullScreen.value = true
  } else {
    await document.exitFullscreen()
    isFullScreen.value = false
  }
}

/* ================= FULLSCREEN EXIT EVENT ================= */

const handleFullScreenChange = () => {
  const isNowFullscreen = !!document.fullscreenElement

  isFullScreen.value = isNowFullscreen

  // EXITED FULLSCREEN
  if (!isNowFullscreen) {
    stopAudio()
  }
}

/* ================= MOUNT ================= */

onMounted(() => {
  loadStories()

  document.addEventListener(
    "fullscreenchange",
    handleFullScreenChange
  )
})

/* ================= UNMOUNT ================= */

onUnmounted(() => {
  document.removeEventListener(
    "fullscreenchange",
    handleFullScreenChange
  )

  stopAudio()
})

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


const story= ref(null)
const loading = ref(true)

const loadStories = async () => {
  try {
    loading.value = true

      // simulate API loading
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // fake API call
    // const response = await fetch("../storyPage.json")
    const response = await api.get('/stories/' + route.params.id);
    console.log("Loaded story back:", response.data['data'])

    // await new Promise((r) => setTimeout(r, 1000))

    story.value = response.data['data']
    console.log("Loaded story mp3:", story.value.pages[currentPage.value].audio) // log the loaded story
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadStories()
})

/* ================= STORY ================= */


/* ================= STORY ================= */
// const story = computed(() =>
//   stories.value.find((s) => s.id === Number(route.params.id))
  
// )
console.log("Current story:", story) // log the current story
/* ================= CURRENT SENTENCE ================= */
const currentSentenceData = computed(() => {
  return story.value.pages[currentPage.value].sentences[currentSentence.value]
})

console.log("Current sentence data:", currentSentenceData) // log the current sentence data
console.log("Is kid subscribed:", global.isKidSubscribed) // log the current sentence data

/* ================= AUDIO ================= */
const playStoryFromPage = () => {
  // alert(global.isKidSubscribed+'page: '+currentPage.value)

 // ✅ subscribed users
  if (global.isKidSubscribed) {

    playAudio(
      story.value.pages[currentPage.value].audio
    )

  }

  // ✅ free pages
  else if (currentPage.value < 2) {

    playAudio(
      story.value.pages[currentPage.value].audio
    )

  }

  // ❌ locked pages
  else {

    alert("🌟 Subscribe to unlock all magical stories!")
    router.push("/subscribe?isAgeGate=subs")
  }


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
    const time = audio.currentTime*1000
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
  playPop()
  if (currentPage.value < story.value.pages.length - 1) {
    currentPage.value++
    stopAudio()
    
  }
}

const prevPage = () => {
  playPop()
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


const pageInput = ref("")

const jumpToPage = () => {
  const page = Number(pageInput.value)

  if (
    !isNaN(page) &&
    page >= 1 &&
    page <= story.value.pages.length
  ) {
    goToPage(page - 1)

    pageInput.value = ""
  }
}



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


.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Mobile */
.text-outline {
    color: white;
    font-weight: 900;
    text-shadow:
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000;
}




.text-highlight {
    color: yellow;
    font-weight: 900;
    text-shadow:
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000;
}


/* Tablet */
@media (min-width: 640px) {
    .text-outline, .text-highlight {
        text-shadow:
            -2px -2px 0 #000,
             2px -2px 0 #000,
            -2px  2px 0 #000,
             2px  2px 0 #000,
            -2px  0 0 #000,
             2px  0 0 #000,
             0 -2px 0 #000,
             0  2px 0 #000;
    }
}

/* Desktop */
@media (min-width: 768px) {
    .text-outline, .text-highlight {
        text-shadow:
            -3px -3px 0 #000,
             3px -3px 0 #000,
            -3px  3px 0 #000,
             3px  3px 0 #000,
            -3px  0 0 #000,
             3px  0 0 #000,
             0 -3px 0 #000,
             0  3px 0 #000;
    }
}

</style>