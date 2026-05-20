<template>
  <!-- <div class="min-w-[320px] bg-white rounded-[35px] overflow-hidden shadow-2xl hover:scale-105 transition">
    <img :src="story.image" class="w-full h-72 object-cover" />
    <div class="p-8 text-center">
      <h3 class="text-3xl font-extrabold" :class="story.color">{{ story.title }}</h3>
      <p class="mt-4 text-gray-600 text-lg leading-8">{{ story.description }}</p>
      <router-link
        :to="`/story/${story.id}`"
        class="mt-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
      >
        📖 Read Story
      </router-link>
    </div>
  </div> -->

  <div class="flex justify-center flex-wrap gap-10 px-6 py-10">

  <div
   
    class="group relative w-64 md:w-72 cursor-pointer"
  >
    <router-link :to="`/story/${story.id}`">

      <!-- BOOK SHADOW -->
      <div
        class="absolute inset-0 bg-pink-300/20 rounded-[28px] blur-md scale-105 group-hover:scale-110 transition"
      ></div>

      <!-- BOOK COVER -->
      <div
        class="relative bg-white rounded-[28px] overflow-hidden shadow-md
        group-hover:-translate-y-2 transition duration-500"
      >

        <!-- IMAGE (BOOK COVER) -->
        <img
          :src="story.image"
          alt="story"
          class="w-full h-80 object-cover"
        />
   
        <!-- BOTTOM GLOW EDGE -->
        <div
          class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"
        ></div>

      </div>

      <!-- UNDER LABEL (OPTIONAL MINIMAL) -->
      <!-- <div class="text-center mt-4">
        <h3 class="text-lg font-bold text-purple-700">
          {{ story.title }}
        </h3>
      </div> -->

    </router-link>
  </div>

</div>

  
</template>

<script setup>
const props = defineProps({
  story: {
    type: Object,
    required: true,
  },
})
</script>
