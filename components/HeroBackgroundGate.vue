<template>
  <div ref="root" class="absolute inset-0 -z-10 overflow-hidden">
    <component v-if="shouldRender" :is="comp" />
    <div v-else class="absolute inset-0 hero-fallback"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'

const isMobile = () => matchMedia('(hover: none), (pointer: coarse)').matches
const shouldRender = ref(false)
const root = ref(null)
const comp = defineAsyncComponent(() => import('@/components/HeroBackground.vue'))

onMounted(() => {
  if (isMobile()) { shouldRender.value = false; return }
  const el = root.value
  if (!el) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { shouldRender.value = true; io.disconnect() } })
  }, { rootMargin: '200px' })
  io.observe(el)
})
</script>

<style>
.hero-fallback { position:absolute; inset:0; background: radial-gradient(40rem 24rem at 20% 0%, rgba(0,255,127,0.12), transparent 60%), linear-gradient(180deg,#000,#0a0f1f); }
html:not(.dark) .hero-fallback { background: radial-gradient(40rem 24rem at 20% 0%, rgba(147,197,253,0.25), transparent 60%), linear-gradient(180deg,#f8fafc,#eef2ff); }
</style>


