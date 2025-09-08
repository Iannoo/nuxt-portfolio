<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden">
    <Navbar />
    <Background />
    <main class="flex-1 z-10 relative">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
import Background from '@/components/Background.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script> 