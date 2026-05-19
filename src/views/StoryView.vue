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
    <div
      v-if="story"
      class="max-w-6xl mx-auto"
    >

      <!-- HERO IMAGE -->
      <div
        class="relative rounded-[40px] overflow-hidden shadow-2xl"
      >

        <img
          :src="story.image"
          class="w-full h-[500px] object-cover"
        />

        <div class="absolute inset-0 bg-black/30"></div>

        <!-- FLOATING ICONS -->
        <div
          class="absolute top-10 left-10 text-6xl animate-bounce"
        >
          ⭐
        </div>

        <div
          class="absolute top-16 right-12 text-6xl animate-pulse"
        >
          🌈
        </div>

        <div
          class="absolute bottom-12 left-16 text-5xl animate-bounce"
        >
          🦄
        </div>

        <div
          class="absolute bottom-10 right-16 text-5xl animate-pulse"
        >
          📚
        </div>

        <!-- TITLE -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >

          <h1
            class="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl"
          >
            {{ story.title }}
          </h1>

          <p
            class="mt-6 text-2xl text-white max-w-3xl leading-10"
          >
            {{ story.description }}
          </p>

        </div>

      </div>

      <!-- BOOK -->
      <div class="mt-16 relative">

        <!-- LEFT ARROW -->
        <button
          @click="prevPage"
          class="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl shadow-2xl hover:scale-110 transition"
        >
          ❮
        </button>

        <!-- BOOK CONTENT -->
        <div
          class="bg-white rounded-[40px] shadow-2xl p-6 md:p-12 max-w-4xl mx-auto border-[12px] border-pink-200 relative"
        >

          <!-- BOOK LABEL -->
          <div
            class="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-300 px-8 py-2 rounded-full text-2xl shadow-lg"
          >
            📖 Story Book
          </div>

          <!-- PAGE -->
          <transition
            name="fade"
            mode="out-in"
          >

            <div
              :key="currentPage"
              class="min-h-[350px] flex flex-col justify-center"
            >

              <!-- PAGE TITLE -->
              <h2
                class="text-4xl font-extrabold text-purple-700 text-center"
              >
                Page {{ currentPage + 1 }}
              </h2>

              <!-- PAGE TEXT -->
              <div
                class="mt-10 text-2xl leading-[60px] text-gray-700 text-center font-medium"
              >

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

          <!-- PAGE NUMBER -->
          <div
            class="mt-10 flex items-center justify-center"
          >

            <div
              class="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg"
            >
              {{ currentPage + 1 }} /
              {{ story.pages.length }}
            </div>

          </div>

          <!-- DOTS -->
          <div
            class="flex justify-center gap-3 mt-8"
          >

            <div
              v-for="(page, index) in story.pages"
              :key="index"
              @click="currentPage = index"
              class="w-5 h-5 rounded-full cursor-pointer transition"
              :class="
                currentPage === index
                  ? 'bg-pink-500 scale-125'
                  : 'bg-pink-200'
              "
            ></div>

          </div>

        </div>

        <!-- RIGHT ARROW -->
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

const route = useRoute()

/* ========================================= */
/* PAGE INDEX */
/* ========================================= */

const currentPage = ref(0)

/* ========================================= */
/* STORIES */
/* ========================================= */

const stories = [
  {
    id: 1,

    title: "🦁 Brave Lion",

    description:
      "A brave lion protects all jungle animals.",

    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d",

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

  {
    id: 2,

    title: "🚀 Space Adventure",

    description:
      "Kids explore magical planets and stars.",

    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",

    pages: [
      [
        "Ella looked at the shining stars at night.",
        "A tiny spaceship landed near her garden.",
        "A friendly robot opened the spaceship door.",
      ],

      [
        "Ella traveled across colorful planets.",
        "She saw purple mountains and blue rivers.",
        "Tiny aliens danced happily together.",
      ],

      [
        "The robot brought Ella safely home.",
        "She waved goodbye to her space friends.",
        "Ella dreamed about another adventure.",
      ],
    ],
  },
]

/* ========================================= */
/* FIND STORY */
/* ========================================= */

const story = computed(() => {
  return stories.find(
    (item) => item.id === Number(route.params.id)
  )
})

/* ========================================= */
/* RESET PAGE WHEN STORY CHANGES */
/* ========================================= */

watch(
  () => route.params.id,
  () => {
    currentPage.value = 0
  }
)

/* ========================================= */
/* NEXT PAGE */
/* ========================================= */

const nextPage = () => {
  if (story.value) {
    if (
      currentPage.value <
      story.value.pages.length - 1
    ) {
      currentPage.value++
    }
  }
}

/* ========================================= */
/* PREVIOUS PAGE */
/* ========================================= */

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
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
</style>