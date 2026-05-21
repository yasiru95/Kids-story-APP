<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 overflow-hidden">

    <!-- HERO -->
    <HeroSlider
      :slides="heroSlides"
      :activeIndex="heroIndex"
      @prev="prevHero"
      @next="nextHero"
      @change="heroIndex = $event"
    />

    <!-- CATEGORIES SECTION -->
    <div class="bg-gradient-to-b from-pink-100 via-sky-100 to-yellow-100 overflow-hidden py-10 px-4 sm:px-6 md:px-10 lg:px-16">

      <!-- TITLE -->
      <div class="text-center mb-12 md:mb-16">
        <CuteHeading text="⭐ CategoriesAAAA" />
      </div>

      <!-- SLIDER WRAPPER -->
      <div class="relative max-w-7xl mx-auto">

        <!-- LEFT BUTTON -->
        <button
          @click="prevFeatured"
          class="absolute left-1 sm:left-0 md:-left-10 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
          rounded-full
          bg-gradient-to-br from-purple-500 to-pink-400
          text-white text-2xl sm:text-3xl md:text-4xl
          shadow-2xl
          hover:scale-110 transition duration-300"
        >
          ❮
        </button>

        <!-- CATEGORY BUBBLES -->
        <div class="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 flex-wrap">

          <div
            v-for="story in featuredStories.slice(0, 3)"
            :key="story.id"
            class="group relative shrink-0"
          >

            <!-- GLOW -->
            <div
              class="absolute inset-2 rounded-full bg-pink-300/25 blur-sm scale-100 group-hover:scale-105 transition duration-500"
            ></div>

            <!-- BUBBLE -->
            <div
              class="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80
              rounded-full p-4
              bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300
              hover:scale-110 hover:rotate-3
              shadow-[0_10px_10px_rgba(255,105,180,0.45)]
              transition duration-500 cursor-pointer"
            >
              <img
                src="https://res.cloudinary.com/dxe23gtsc/image/upload/v1779272834/6_bli0uv.webp"
                alt="story"
                class="w-full h-full rounded-full object-cover border-[6px] sm:border-[8px] border-white shadow-lg"
              />

              <div class="absolute -top-2 sm:-top-4 left-4 sm:left-6 text-2xl sm:text-4xl animate-bounce">
                ✨
              </div>

              <div class="absolute inset-6 rounded-full border-4 border-white/40"></div>
            </div>

          </div>

        </div>

        <!-- RIGHT BUTTON -->
        <button
          @click="nextFeatured"
          class="absolute right-1 sm:right-0 md:-right-10 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
          rounded-full
          bg-gradient-to-br from-pink-500 to-yellow-400
          text-white text-2xl sm:text-3xl md:text-4xl
          shadow-2xl
          hover:scale-110 transition duration-300"
        >
          ❯
        </button>

      </div>
    </div>

    <!-- PRELOADER -->
    <div
      v-if="loading"
      class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <div class="w-20 h-20 sm:w-24 sm:h-24 border-[10px] border-pink-300 border-t-purple-600 rounded-full animate-spin"></div>

      <h2 class="mt-6 sm:mt-8 text-2xl sm:text-4xl font-extrabold text-purple-700 animate-pulse text-center px-4">
        📚 Loading Stories...
      </h2>
    </div>

    <!-- FEATURED STORIES -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16">

      <div class="text-center mb-10 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-6xl font-extrabold text-purple-700">
          ⭐ Featured Stories
        </h2>
        <p class="mt-3 sm:mt-4 text-base sm:text-xl text-gray-700">
          Magical adventures for kids...🌈✨
        </p>
      </div>

      <div class="relative max-w-7xl mx-auto">

        <!-- LEFT -->
        <button
          @click="prevFeatured"
          class="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 sm:w-16 sm:h-16 rounded-full
          bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl sm:text-3xl
          shadow-2xl hover:scale-110 transition"
        >
          ❮
        </button>

        <!-- SLIDER -->
        <div class="overflow-hidden">
          <div
            class="flex gap-4 sm:gap-6 md:gap-8 transition-transform duration-500"
            :style="{ transform: `translateX(-${featuredIndex * getCardWidth()}px)` }"
          >
            <StoryCard
              v-for="story in featuredStories"
              :key="story.id"
              :story="story"
            />
          </div>
        </div>

        <!-- RIGHT -->
        <button
          @click="nextFeatured"
          class="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 sm:w-16 sm:h-16 rounded-full
          bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-2xl sm:text-3xl
          shadow-2xl hover:scale-110 transition"
        >
          ❯
        </button>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import HeroSlider from "../components/HeroSlider.vue"
import StoryCard from "../components/StoryCard.vue"
import CuteHeading from "../components/CuteHeading.vue"
import { heroSlides } from "../data/storyData.js"

const heroIndex = ref(0)
const featuredIndex = ref(0)
const featuredStories = ref([])
const loading = ref(true)

let heroAutoSlide = null

/* ---------------- HERO SLIDER ---------------- */
const nextHero = () => {
  heroIndex.value = (heroIndex.value + 1) % heroSlides.length
}

const prevHero = () => {
  heroIndex.value = (heroIndex.value - 1 + heroSlides.length) % heroSlides.length
}

/* ---------------- FEATURED ---------------- */
const nextFeatured = () => {
  if (featuredIndex.value < featuredStories.value.length - 3) {
    featuredIndex.value++
  } else {
    featuredIndex.value = 0
  }
}

const prevFeatured = () => {
  if (featuredIndex.value > 0) {
    featuredIndex.value--
  }
}

/* ---------------- RESPONSIVE CARD WIDTH ---------------- */
const getCardWidth = () => {
  if (window.innerWidth < 640) return 260
  if (window.innerWidth < 1024) return 300
  return 340
}

/* ---------------- LOAD DATA ---------------- */
const loadStories = async () => {
  loading.value = true

  await new Promise((r) => setTimeout(r, 2000))

  const response = await fetch("/stories.json")
  const data = await response.json()

  featuredStories.value = data
  loading.value = false
}

/* ---------------- HERO AUTOPLAY ---------------- */
onMounted(() => {
  loadStories()

  heroAutoSlide = setInterval(() => {
    nextHero()
  }, 4000)
})

onUnmounted(() => {
  clearInterval(heroAutoSlide)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');

body {
  font-family: 'Fredoka', sans-serif;
}

html {
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}
</style>