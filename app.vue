<template>
  <div :class="['min-h-screen font-inter', isDark ? 'dark bg-blueprint text-white' : 'bg-white text-slate-900']">
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'fade' }" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})

// Expose a simple event for toggling from nav
if (process.client) {
  window.__toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
