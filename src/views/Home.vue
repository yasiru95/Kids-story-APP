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
  class=" bg-gradient-to-b from-pink-100 via-sky-100 to-yellow-100 overflow-hidden py-20 px-6"
>
  <!-- TITLE -->
  <div class="text-center mb-16">
    <h2
      class="text-5xl md:text-7xl font-black text-purple-700 drop-shadow-lg"
    >
      ⭐ Catgories
    </h2>


  </div>

  <!-- SLIDER -->
  <div class="relative max-w-7xl mx-auto">

    <!-- LEFT BUTTON -->
    <button
      @click="prevFeatured"
      class="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 z-30
      w-20 h-20 rounded-full
      bg-gradient-to-br from-purple-500 to-pink-400
      text-white text-4xl shadow-2xl
      hover:scale-110 hover:-rotate-12 transition duration-300"
    >
      ❮
    </button>

    <!-- STORY BUTTONS -->
    
<div class="flex justify-center items-center gap-12 ">

  <div
    v-for="story in featuredStories.slice(0, 3)"
    :key="story.id"
    class="group relative shrink-0"
  >
    <!-- OUTER GLOW -->
<div
  class="absolute inset-2 rounded-full 
  bg-pink-300/25 
  blur-sm 
  scale-100 
  group-hover:scale-105 
  transition duration-500"
></div>

    <!-- BIG CUTE BUTTON -->
    <div
      class="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-4
      bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300
      hover:scale-110 hover:rotate-3
      shadow-[0_10px_10px_rgba(255,105,180,0.45)]
      transition duration-500 cursor-pointer"
    >
      <!-- IMAGE -->
      <img
        src="https://res.cloudinary.com/dxe23gtsc/image/upload/v1779272834/6_bli0uv.webp"
        alt="story"
        class="w-full h-full rounded-full object-cover border-[8px] border-white shadow-lg"
      />

      <!-- FLOATING SPARKLES -->
      <div class="absolute -top-4 left-6 text-4xl animate-bounce">✨</div>

      <!-- INNER GLOW RING -->
      <div class="absolute inset-6 rounded-full border-4 border-white/40"></div>
    </div>
  </div>

</div>
    <!-- RIGHT BUTTON -->
    <button
      @click="nextFeatured"
      class="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 z-30
      w-20 h-20 rounded-full
      bg-gradient-to-br from-pink-500 to-yellow-400
      text-white text-4xl shadow-2xl
      hover:scale-110 hover:rotate-12 transition duration-300"
    >
      ❯
    </button>

  </div>
</div>

     
 


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
        <p class="mt-4 text-xl text-gray-700">Magical adventures for kids...🌈✨</p>
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
    const response = await fetch("../stories.json")
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


<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');

body {
  font-family: 'Fredoka', sans-serif;
}
</style>
