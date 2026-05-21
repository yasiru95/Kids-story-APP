<template>
  <div class="wrap">
    <h2
      class="bubble"
      @click="playPop"
      @mouseenter="playPop"
    >
      {{ text }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "⭐ Categories"
  }
})

const popSound = new Audio("../assets/sounds/pop.wav")

function playPop() {
  popSound.currentTime = 0
  popSound.volume = 0.4
  popSound.play()
}
</script>

<style scoped>
.wrap {
  text-align: center;
}

/* 🫧 Bubble Heading */
.bubble {
  font-family: "Baloo 2", cursive;
  font-size: 3rem;
  font-weight: 900;

  color: #6d28d9;

  display: inline-block;
  padding: 14px 34px;

  border-radius: 50px;

  background: linear-gradient(135deg, #ffffff, #f5f3ff);

  /* soft glow */
  box-shadow:
    0 8px 18px rgba(109, 40, 217, 0.15),
    inset 0 0 0 2px rgba(255, 255, 255, 0.9);

  text-shadow:
    0 0 6px rgba(168, 85, 247, 0.25);

  position: relative;

  cursor: pointer;
  user-select: none;

  animation: floatBubble 3.5s ease-in-out infinite;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

/* ✨ hover effect */
.bubble:hover {
  transform: scale(1.08) rotate(-1deg);

  box-shadow:
    0 16px 30px rgba(109, 40, 217, 0.25),
    0 0 20px rgba(168, 85, 247, 0.18);

}

/* 🫧 floating animation */
@keyframes floatBubble {
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }
}
</style>