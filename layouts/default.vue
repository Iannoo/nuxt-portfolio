<template>
  <div class="relative min-h-screen flex flex-col overflow-x-hidden antialiased text-white bg-[#1e1bb5]">
    <Navbar />
    <ClientOnly>
      <BackgroundGate />
    </ClientOnly>
    <main class="flex-1 z-10 relative">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import BackgroundGate from '@/components/BackgroundGate.vue'
import BaseFooter from '@/components/BaseFooter.vue'

// Enable smooth scrolling for the entire app
if (process.client) {
  document.documentElement.style.scrollBehavior = 'smooth'
  document.documentElement.style.textRendering = 'optimizeLegibility'
  document.documentElement.style.WebkitFontSmoothing = 'antialiased'
  document.documentElement.style.MozOsxFontSmoothing = 'grayscale'
  document.documentElement.style.WebkitTextSizeAdjust = '100%'
}
</script>

<style>
/* Smooth scrolling for the entire app */
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}

/* Better selection colors */
::selection {
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

/* Better focus states */
:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.9);
  outline-offset: 2px;
}
</style>