<template>
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div class="hero-gradient"></div>
    <div v-if="canAnimate" class="glow glow-a"></div>
    <div v-if="canAnimate" class="glow glow-b"></div>
  </div>
 </template>

<script setup>
import { ref, onMounted } from 'vue'
const canAnimate = ref(false)
onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reduce.matches) return
  const root = document.querySelector('.hero-gradient')
  if (!root) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { canAnimate.value = e.isIntersecting })
  })
  io.observe(root)
})
</script>

<style>
.hero-gradient {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(60rem 40rem at 10% 10%, rgba(147, 197, 253, 0.35), transparent 60%),
    radial-gradient(45rem 30rem at 90% 0%, rgba(216, 180, 254, 0.35), transparent 60%),
    linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(238,242,255,1) 100%);
}

.glow {
  position: absolute;
  width: 28rem;
  height: 28rem;
  border-radius: 9999px;
  filter: blur(45px);
  opacity: .25;
  animation: float 18s ease-in-out infinite, glowPulse 8s ease-in-out infinite;
  background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.6), rgba(59,130,246,0) 65%);
}
.glow-a { top: -6rem; left: -8rem; }
.glow-b { bottom: -8rem; right: -6rem; background: radial-gradient(circle at 50% 50%, rgba(236,72,153,0.6), rgba(236,72,153,0) 65%); }

@keyframes float { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(8px,10px,0)} }
@keyframes glowPulse { 0%,100%{opacity:.2} 50%{opacity:.32} }

/* Dark mode */
html.dark .hero-gradient {
  background-image:
    radial-gradient(60rem 40rem at 10% 10%, rgba(0, 255, 127, 0.12), transparent 60%),
    radial-gradient(45rem 30rem at 90% 0%, rgba(0, 229, 255, 0.10), transparent 60%),
    linear-gradient(180deg, #000000 0%, #0a0f1f 100%);
}
html.dark .glow { opacity: .28; }
html.dark .glow-a { background: radial-gradient(circle at 50% 50%, rgba(0,255,127,0.55), rgba(0,255,127,0) 65%); }
html.dark .glow-b { background: radial-gradient(circle at 50% 50%, rgba(0,229,255,0.45), rgba(0,229,255,0) 65%); }

@media (prefers-reduced-motion: reduce) {
  .glow { animation: none !important; }
}
</style>


