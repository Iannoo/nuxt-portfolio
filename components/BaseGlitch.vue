<template>
  <span class="relative inline-block glitch" :data-text="text">
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<style scoped>
.glitch {
  color: #1e90ff;
  text-shadow:
    2px 0 #fff,
    -2px 0 #0ff,
    0 2px #00f,
    0 -2px #0ff;
  position: relative;
  animation: glitch 1.2s infinite linear alternate-reverse;
}
@keyframes glitch {
  0% { text-shadow: 2px 0 #fff, -2px 0 #0ff, 0 2px #00f, 0 -2px #0ff; }
  20% { text-shadow: -2px 0 #fff, 2px 0 #0ff, 0 -2px #00f, 0 2px #0ff; }
  40% { text-shadow: 2px 2px #fff, -2px -2px #0ff, 2px -2px #00f, -2px 2px #0ff; }
  60% { text-shadow: -2px -2px #fff, 2px 2px #0ff, -2px 2px #00f, 2px -2px #0ff; }
  80% { text-shadow: 2px 0 #fff, -2px 0 #0ff, 0 2px #00f, 0 -2px #0ff; }
  100% { text-shadow: -2px 0 #fff, 2px 0 #0ff, 0 -2px #00f, 0 2px #0ff; }
}
</style> 