<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 overflow-hidden">
    <HeroSlider
      :slides="heroSlides"
      :activeIndex="heroIndex"
      @prev="prevHero"
      @next="nextHero"
      @change="heroIndex = $event"
    />


      <div
    class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100"
  >
    <!-- PRELOADER -->
    <div
      v-if="loading"
      class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <!-- Spinner -->
      <div
        class="w-24 h-24 border-[10px] border-pink-300 border-t-purple-600 rounded-full animate-spin"
      ></div>

      <!-- Text -->
      <h2 class="mt-8 text-4xl font-extrabold text-purple-700 animate-pulse">
        📚 Loading Stories...
      </h2>
    </div>

    <!-- HOME CONTENT -->
    <section class="py-24 px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-extrabold text-purple-700">⭐ Featured Stories</h2>
        <p class="mt-4 text-xl text-gray-700">Magical adventures for kids 🌈✨</p>
      </div>

      <div class="relative max-w-7xl mx-auto">
        <button
          @click="prevFeatured"
          class="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❮
        </button>

        <div class="overflow-hidden">
          <div
            class="flex gap-8 transition-transform duration-500"
            :style="{ transform: `translateX(-${featuredIndex * 340}px)` }"
          >
            <StoryCard v-for="story in featuredStories" :key="story.id" :story="story" />
          </div>
        </div>

        <button
          @click="nextFeatured"
          class="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❯
        </button>
      </div>
    </section>
  </div>

    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import HeroSlider from "../components/HeroSlider.vue"
import StoryCard from "../components/StoryCard.vue"
import { heroSlides } from "../data/storyData.js"



const featuredStories = ref([])
const loading = ref(true)

const loadStories = async () => {
  try {
    loading.value = true

      // simulate API loading
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // fake API call
    const response = await fetch("../src/stories.json")
    console.log('Response:', response) // log the raw response

    // convert json
    const data = await response.json()

    // pass data to model
    featuredStories.value = data
    console.log("Loaded stories:", featuredStories.value) // log the loaded stories
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadStories()
})

const heroIndex = ref(0)
const featuredIndex = ref(0)

const nextHero = () => {
  heroIndex.value = (heroIndex.value + 1) % heroSlides.length
}

const prevHero = () => {
  heroIndex.value = (heroIndex.value - 1 + heroSlides.length) % heroSlides.length
}

const nextFeatured = () => {
  if (featuredIndex.value < featuredStories.value.length - 3) {
    featuredIndex.value++
  }
}

const prevFeatured = () => {
  if (featuredIndex.value > 0) {
    featuredIndex.value--
  }
}
</script>
