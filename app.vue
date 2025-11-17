<template>
  <div class="min-h-screen font-inter bg-[#3539a1] text-white">
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'fade' }" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const animationsReady = ref(false)
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
