```vue id="k6v3pz"
<template>
  <div class="min-h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 overflow-hidden">

    <!-- ================================================= -->
    <!-- HERO FULL IMAGE SLIDER -->
    <!-- ================================================= -->

    <section class="relative h-[750px] overflow-hidden">

      <!-- SLIDES -->
      <div
        class="flex h-full transition-transform duration-700"
        :style="{ transform: `translateX(-${heroIndex * 100}%)` }"
      >

        <!-- SLIDE -->
        <div
          v-for="slide in heroSlides"
          :key="slide.id"
          class="min-w-full h-full relative"
        >

          <!-- IMAGE -->
          <img
            :src="slide.image"
            class="w-full h-full object-cover"
          />

          <!-- OVERLAY -->
          <div class="absolute inset-0 bg-black/40"></div>

          <!-- FLOATING ICONS -->
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            class="absolute top-10 left-10 w-24 animate-bounce"
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616430.png"
            class="absolute top-20 right-10 w-20 animate-pulse"
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616494.png"
            class="absolute bottom-20 left-20 w-16 animate-bounce"
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616516.png"
            class="absolute bottom-20 right-20 w-20 animate-pulse"
          />

          <!-- CONTENT -->
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >

            <h1
              class="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl"
            >
              {{ slide.title }}
            </h1>

            <p
              class="mt-8 text-2xl md:text-3xl text-white max-w-3xl leading-10"
            >
              {{ slide.description }}
            </p>

            <router-link
              :to="`/story/${slide.id}`"
              class="mt-10 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition"
            >
              📖 Read Story
            </router-link>

          </div>

        </div>

      </div>

      <!-- LEFT ARROW -->
      <button
        @click="prevHero"
        class="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/80 text-purple-700 w-16 h-16 rounded-full text-4xl shadow-2xl hover:scale-110 transition"
      >
        ❮
      </button>

      <!-- RIGHT ARROW -->
      <button
        @click="nextHero"
        class="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/80 text-pink-600 w-16 h-16 rounded-full text-4xl shadow-2xl hover:scale-110 transition"
      >
        ❯
      </button>

      <!-- DOTS -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
      >

        <div
          v-for="(slide, index) in heroSlides"
          :key="index"
          @click="heroIndex = index"
          class="w-4 h-4 rounded-full cursor-pointer transition"
          :class="
            heroIndex === index
              ? 'bg-white scale-125'
              : 'bg-white/50'
          "
        ></div>

      </div>

    </section>

    <!-- ================================================= -->
    <!-- FEATURED STORIES -->
    <!-- ================================================= -->

    <section class="py-24 px-6">

      <div class="text-center mb-16">

        <h2
          class="text-5xl md:text-6xl font-extrabold text-purple-700"
        >
          ⭐ Featured Stories
        </h2>

        <p class="mt-4 text-xl text-gray-700">
          Magical adventures for kids 🌈✨
        </p>

      </div>

      <div class="relative max-w-7xl mx-auto">

        <!-- LEFT -->
        <button
          @click="prevFeatured"
          class="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❮
        </button>

        <!-- SLIDER -->
        <div class="overflow-hidden">

          <div
            class="flex gap-8 transition-transform duration-500"
            :style="{ transform: `translateX(-${featuredIndex * 340}px)` }"
          >

            <!-- CARD -->
            <div
              v-for="story in stories"
              :key="story.id"
              class="min-w-[320px] bg-white rounded-[35px] overflow-hidden shadow-2xl hover:scale-105 transition"
            >

              <img
                :src="story.image"
                class="w-full h-72 object-cover"
              />

              <div class="p-8 text-center">

                <h3
                  class="text-3xl font-extrabold"
                  :class="story.color"
                >
                  {{ story.title }}
                </h3>

                <p class="mt-4 text-gray-600 text-lg leading-8">
                  {{ story.description }}
                </p>

                <router-link
                  :to="`/story/${story.id}`"
                  class="mt-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
                >
                  📖 Read Story
                </router-link>

              </div>

            </div>

          </div>

        </div>

        <!-- RIGHT -->
        <button
          @click="nextFeatured"
          class="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❯
        </button>

      </div>

    </section>

  </div>
</template>

<script setup>
import { ref } from "vue"

/* ================================================= */
/* HERO SLIDER */
/* ================================================= */

const heroIndex = ref(0)

const heroSlides = [
  {
    id: 1,
    title: "📚 Kids Story Land",
    description: "Magical adventures and fairy tales 🌈",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  },

  {
    id: 2,
    title: "🦁 Brave Lion",
    description: "Join Leo in jungle adventures 🦁",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
  },

  {
    id: 3,
    title: "🚀 Space Adventure",
    description: "Travel across stars and galaxies 🚀",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  },
]

const nextHero = () => {
  heroIndex.value =
    (heroIndex.value + 1) % heroSlides.length
}

const prevHero = () => {
  heroIndex.value =
    (heroIndex.value - 1 + heroSlides.length) %
    heroSlides.length
}

/* ================================================= */
/* FEATURED STORIES */
/* ================================================= */

const featuredIndex = ref(0)

const stories = [
  {
    id: 1,
    title: "🦁 Brave Lion",
    description: "A brave lion protects the jungle animals.",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    color: "text-orange-500",
  },

  {
    id: 2,
    title: "🐰 Magic Rabbit",
    description: "A rabbit discovers magical forest powers.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    color: "text-pink-500",
  },

  {
    id: 3,
    title: "🚀 Space Adventure",
    description: "Kids explore stars and galaxies.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    color: "text-blue-500",
  },

  {
    id: 4,
    title: "🦄 Unicorn Forest",
    description: "A unicorn protects the rainbow forest.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    color: "text-purple-500",
  },

  {
    id: 5,
    title: "🐼 Panda Dreams",
    description: "A panda searches for happiness.",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
    color: "text-green-600",
  },

  {
    id: 6,
    title: "🐧 Snow Penguin",
    description: "A penguin travels snowy mountains.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    color: "text-sky-500",
  },

  {
    id: 7,
    title: "🐯 Tiger King",
    description: "A tiger guards the jungle kingdom.",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5",
    color: "text-yellow-500",
  },

  {
    id: 8,
    title: "🐬 Ocean Friends",
    description: "Sea animals find hidden treasure.",
    image:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac",
    color: "text-cyan-500",
  },

  {
    id: 9,
    title: "🧙 Wizard School",
    description: "Young kids learn magic spells.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    color: "text-violet-500",
  },

  {
    id: 10,
    title: "🌈 Rainbow Castle",
    description: "A magical colorful castle adventure.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    color: "text-rose-500",
  },
]

const nextFeatured = () => {
  if (featuredIndex.value < stories.length - 3) {
    featuredIndex.value++
  }
}

const prevFeatured = () => {
  if (featuredIndex.value > 0) {
    featuredIndex.value--
  }
}
</script>
```
