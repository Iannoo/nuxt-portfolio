<template>
  <div class="relative w-full max-w-xl mx-auto">
    <transition-group name="carousel" tag="div">
      <div v-for="(fact, idx) in [facts[current]]" :key="fact" class="text-lg md:text-xl text-electric font-semibold py-2 px-4 bg-blueprint rounded shadow mb-2 animate-fade-in">
        {{ fact }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps<{ facts: string[] }>()
const current = ref(0)
let interval: any
onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % props.facts.length
  }, 2500)
})
onBeforeUnmount(() => clearInterval(interval))
</script>

<style scoped>
.carousel-enter-active, .carousel-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.carousel-enter-from, .carousel-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.carousel-enter-to, .carousel-leave-from {
  opacity: 1;
  transform: translateY(0);
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.7s;
}
</style> 