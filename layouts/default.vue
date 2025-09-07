<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden">
    <BaseNav />
    <Background />
    <main class="flex-1 z-10 relative">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
<script setup>
import BaseNav from '@/components/BaseNav.vue'
import Background from '@/components/Background.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script> 