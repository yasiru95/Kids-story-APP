<template>
  <section class="relative h-[750px] overflow-hidden">
    <div class="flex h-full transition-transform duration-700" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
      <div v-for="slide in slides" :key="slide.id" class="min-w-full h-full relative">
        <img :src="slide.image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 class="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl">{{ slide.title }}</h1>
          <p class="mt-8 text-2xl md:text-3xl text-white max-w-3xl leading-10">{{ slide.description }}</p>
          <router-link
            :to="`/story/${slide.id}`"
            class="mt-10 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl hover:scale-110 transition"
          >
            📖 Read Story
          </router-link>
        </div>
      </div>
    </div>

    <button
      @click="$emit('prev')"
      class="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/80 text-purple-700 w-16 h-16 rounded-full text-4xl shadow-2xl hover:scale-110 transition"
    >
      ❮
    </button>

    <button
      @click="$emit('next')"
      class="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/80 text-pink-600 w-16 h-16 rounded-full text-4xl shadow-2xl hover:scale-110 transition"
    >
      ❯
    </button>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        @click="$emit('change', index)"
        class="w-4 h-4 rounded-full transition"
        :class="activeIndex === index ? 'bg-white scale-125' : 'bg-white/50'"
      ></button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  activeIndex: {
    type: Number,
    required: true,
  },
})
</script>
