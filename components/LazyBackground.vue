<template>
  <div ref="root" class="absolute inset-0 -z-10">
    <component v-if="shouldRender" :is="comp" />
    <div v-else class="absolute inset-0">
      <div class="bg-canvas-placeholder"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'

const isMobile = () => matchMedia('(hover: none), (pointer: coarse)').matches
const shouldRender = ref(false)
const root = ref(null)
const comp = defineAsyncComponent(() => import('@/components/Background.vue'))

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
.bg-canvas-placeholder { position:absolute; inset:0; background: linear-gradient(180deg,#0a0f1f 0%,#000 100%); }
html:not(.dark) .bg-canvas-placeholder { background: linear-gradient(180deg,#f8fafc 0%,#eef2ff 100%); }
</style>


