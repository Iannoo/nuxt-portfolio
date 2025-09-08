<template>
  <article
    class="group relative rounded-2xl overflow-hidden bg-white/5 dark:bg-white/5 border border-white/10 shadow hover:shadow-xl transition-shadow"
    @click="onTap"
  >
    <div class="aspect-video overflow-hidden">
      <img :src="image" :alt="title + ' image'" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" decoding="async"/>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ title }}</h3>
      <p class="text-sm text-slate-700/80 dark:text-white/70 line-clamp-2">{{ description }}</p>
    </div>

    <!-- Hover / Expanded Overlay -->
    <div
      class="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300"
      :class="{ 'bg-black/60': expanded }"
    ></div>

    <div
      class="absolute inset-x-0 bottom-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
      :class="{ 'translate-y-0 opacity-100': expanded }"
    >
      <div class="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
        <p class="text-sm text-white/90 mb-3">{{ details }}</p>
        <NuxtLink :to="to" class="btn-neon inline-flex items-center px-4 py-2 rounded-lg border border-electric/60 text-white">
          View Project
          <svg class="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  details: { type: String, default: '' },
  image: { type: String, required: true },
  to: { type: String, default: '/projects' }
})

const expanded = ref(false)
const onTap = () => {
  // Enable tap to expand on small screens only
  if (window.matchMedia('(hover: none)').matches) {
    expanded.value = !expanded.value
  }
}

onMounted(() => {
  // Collapse overlay on route change could be added here if needed
})
</script>

<style scoped>
/* Subtle lift and tilt on hover (desktop) */
.group:hover article, .group:focus-within article { transform: translateY(-2px); }
</style>



