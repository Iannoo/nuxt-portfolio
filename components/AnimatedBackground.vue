<template>
  <div class="absolute inset-0 -z-10">
    <canvas ref="canvasEl" class="w-full h-full"></canvas>
    <noscript>
      <div class="absolute inset-0" :class="dark ? 'bg-black' : 'bg-gradient-to-b from-slate-50 to-indigo-50'"></div>
    </noscript>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasEl = ref(null)
let rafId = 0

const draw = (ctx, t, w, h) => {
  ctx.clearRect(0, 0, w, h)
  const gradient = ctx.createLinearGradient(0, 0, 0, h)
  const isDark = document.documentElement.classList.contains('dark')
  if (isDark) {
    gradient.addColorStop(0, '#000000')
    gradient.addColorStop(1, '#0a0f1f')
  } else {
    gradient.addColorStop(0, '#f8fafc')
    gradient.addColorStop(1, '#eef2ff')
  }
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, w, h)

  // Waves
  const waves = 3
  for (let i = 0; i < waves; i++) {
    const amplitude = 18 + i * 6
    const yOffset = h * (0.6 + i * 0.12)
    ctx.beginPath()
    for (let x = 0; x <= w; x += 4) {
      const y = yOffset + Math.sin((x + t * (0.6 + i * 0.2)) * 0.012) * amplitude
      if (x === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    const alpha = isDark ? 0.12 - i * 0.02 : 0.18 - i * 0.03
    ctx.strokeStyle = isDark ? `rgba(0,255,127,${alpha})` : `rgba(59,130,246,${alpha})`
    ctx.lineWidth = 2
    ctx.stroke()
  }
}

const loop = (ctx) => {
  let t = 0
  const frame = () => {
    const w = ctx.canvas.width = ctx.canvas.clientWidth
    const h = ctx.canvas.height = ctx.canvas.clientHeight
    draw(ctx, t, w, h)
    t += 1
    rafId = requestAnimationFrame(frame)
  }
  frame()
}

onMounted(() => {
  const canvas = canvasEl.value
  if (!canvas) return
  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return
  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    draw(ctx, 0, canvas.clientWidth, canvas.clientHeight)
    return
  }
  loop(ctx)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>



