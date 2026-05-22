<template>
  <div class="min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-blue-100 to-yellow-100 font-['Fredoka']">

    <!-- HERO -->
    <div class="w-full overflow-hidden">
      <HeroSlider
        :slides="heroSlides"
        :activeIndex="heroIndex"
        @prev="prevHero"
        @next="nextHero"
        @change="heroIndex = $event"
        class="w-full h-full"
      />
    </div>

    <!-- CATEGORIES -->
    <section class="overflow-hidden bg-gradient-to-b from-pink-100 via-sky-100 to-yellow-100 px-4 py-10 sm:px-6 md:px-10 lg:px-16">

      <!-- TITLE -->
      <div class="mb-12 text-center md:mb-16">
        <CuteHeading text="⭐ Categories" />
      </div>

      <!-- CATEGORY SLIDER -->
      <div class="relative mx-auto max-w-7xl">

        <!-- LEFT -->
        <button
          @click="prevFeatured"
          class="
            absolute left-2 top-1/2 z-30
            flex items-center justify-center
            h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16
            -translate-y-1/2
            rounded-full
            bg-gradient-to-br from-purple-500 to-pink-400
            text-xl text-white sm:text-2xl md:text-4xl
            shadow-2xl
            transition duration-300
            hover:scale-110
            md:-left-10
          "
        >
          ❮
        </button>

        <!-- BUBBLES -->
        <div
          class="
            flex items-center gap-4
            overflow-x-auto px-2
            sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-visible sm:px-0
            md:gap-12
            scrollbar-none
          "
        >

          <div
            v-for="story in featuredStories.slice(0, 3)"
            :key="story.id"
            class="group relative shrink-0"
          >

            <!-- GLOW -->
            <div
              class="
                absolute inset-2
                rounded-full
                bg-pink-300/25
                blur-sm
                transition duration-500
                group-hover:scale-105
              "
            ></div>

            <!-- BUBBLE -->
            <div
              class="
                relative
                h-28 w-28
                cursor-pointer
                rounded-full
                bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300
                p-2
                shadow-[0_10px_10px_rgba(255,105,180,0.45)]
                transition duration-500
                hover:scale-110 hover:rotate-3

                sm:h-40 sm:w-40 sm:p-3
                md:h-56 md:w-56
                lg:h-64 lg:w-64
              "
            >

              <img
                src="https://res.cloudinary.com/dxe23gtsc/image/upload/v1779272834/6_bli0uv.webp"
                alt="story"
                class="
                  h-full w-full
                  rounded-full
                  border-[4px] border-white
                  object-cover
                  shadow-lg

                  sm:border-[8px]
                "
              />

              <!-- STAR -->
              <div
                class="
                  absolute left-2 -top-1
                  animate-bounce
                  text-lg

                  sm:left-6 sm:-top-4 sm:text-4xl
                "
              >
                ✨
              </div>

              <!-- INNER RING -->
              <div
                class="
                  absolute inset-4
                  rounded-full
                  border-2 border-white/40

                  sm:border-4
                "
              ></div>

            </div>

          </div>

        </div>

        <!-- RIGHT -->
        <button
          @click="nextFeatured"
          class="
            absolute right-2 top-1/2 z-30
            flex items-center justify-center
            h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16
            -translate-y-1/2
            rounded-full
            bg-gradient-to-br from-pink-500 to-yellow-400
            text-xl text-white sm:text-2xl md:text-4xl
            shadow-2xl
            transition duration-300
            hover:scale-110
            md:-right-10
          "
        >
          ❯
        </button>

      </div>
    </section>

    <!-- books -->
<!-- BOOKS SECTION -->
<section class="overflow-hidden bg-gradient-to-b from-pink-100 via-sky-100 to-yellow-100 px-4 py-10 sm:px-6 md:px-10 lg:px-16">

  <!-- TITLE -->
  <div class="mb-12 text-center md:mb-16">
    <CuteHeading text="⭐ Books" />
  </div>

  <!-- SLIDER WRAPPER -->
         <div class="relative mx-auto max-w-7xl">

        <!-- LEFT -->
        <button
          @click="prevFeatured"
          class="
            absolute left-2 top-1/2 z-30
            flex items-center justify-center
            h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
            -translate-y-1/2
            rounded-full
            bg-gradient-to-r from-purple-500 to-pink-500
            text-xl text-white
            shadow-2xl
            transition
            hover:scale-110

            sm:text-2xl
            md:-left-8
            md:text-3xl
          "
        >
          ❮
        </button>

        <!-- STORIES -->
        <div
          ref="featuredSlider"
          class="
            overflow-x-auto
            scroll-smooth
            scrollbar-none
            snap-x snap-mandatory

            sm:overflow-hidden
          "
        >

          <div
            class="
              flex
              gap-3
              transition-transform duration-500

              sm:gap-4
              md:gap-4
            "
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
          class="
            absolute right-2 top-1/2 z-30
            flex items-center justify-center
            h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
            -translate-y-1/2
            rounded-full
            bg-gradient-to-r from-pink-500 to-yellow-400
            text-xl text-white
            shadow-2xl
            transition
            hover:scale-110

            sm:text-2xl
            md:-right-8
            md:text-3xl
          "
        >
          ❯
        </button>

      </div>

</section>

    <!-- LOADER -->
    <div
      v-if="loading"
      class="
        fixed inset-0 z-50
        flex flex-col items-center justify-center
        bg-white px-4
      "
    >

      <div
        class="
          h-16 w-16
          animate-spin
          rounded-full
          border-[8px]
          border-pink-300
          border-t-purple-600

          sm:h-24 sm:w-24
          sm:border-[10px]
        "
      ></div>

      <h2
        class="
          mt-6
          animate-pulse
          text-center
          text-xl
          font-extrabold
          text-purple-700

          sm:mt-8
          sm:text-4xl
        "
      >
        📚 Loading Stories...
      </h2>

    </div>

    <!-- FEATURED STORIES -->
    <section class="px-4 py-16 sm:px-6 sm:py-24 md:px-10 lg:px-16">

     <!-- TITLE -->
      <div class="mb-12 text-center md:mb-16">
        <CuteHeading text="⭐ CategoriesAAAA" />
      </div>      

      <!-- SLIDER -->


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
const featuredStories = ref([])
const featuredSlider = ref(null)
const loading = ref(true)
const cardWidth = ref(300)

let heroAutoSlide = null
let resizeHandler = null

const nextHero = () => {
  heroIndex.value = (heroIndex.value + 1) % heroSlides.length
}

const prevHero = () => {
  heroIndex.value =
    (heroIndex.value - 1 + heroSlides.length) % heroSlides.length
}

const getCardGap = () => {
  if (window.innerWidth < 640) return 12
  if (window.innerWidth < 1024) return 24
  return 32
}

const nextFeatured = () => {
  if (!featuredSlider.value) return

  const scrollAmount = getCardWidth() + getCardGap()

  featuredSlider.value.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  })
}

const prevFeatured = () => {
  if (!featuredSlider.value) return

  const scrollAmount = getCardWidth() + getCardGap()

  featuredSlider.value.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  })
}

const updateCardWidth = () => {
  if (window.innerWidth < 640) cardWidth.value = 260
  else if (window.innerWidth < 1024) cardWidth.value = 300
  else cardWidth.value = 340
}

const getCardWidth = () => cardWidth.value

const loadStories = async () => {
  loading.value = true

  await new Promise((r) => setTimeout(r, 2000))

  const response = await fetch("/stories.json")
  const data = await response.json()

  featuredStories.value = data
  loading.value = false
}

onMounted(() => {
  loadStories()

  updateCardWidth()

  heroAutoSlide = setInterval(nextHero, 4000)

  resizeHandler = () => updateCardWidth()

  window.addEventListener("resize", resizeHandler)
})

onUnmounted(() => {
  clearInterval(heroAutoSlide)

  window.removeEventListener("resize", resizeHandler)
})
</script>

<style scoped>



</style>