<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden">
    <BaseNav />
    <BaseBlueprintOverlay />
    <main class="flex-1 z-10 relative">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
<script setup>
import BaseNav from '@/components/BaseNav.vue'
import BaseBlueprintOverlay from '@/components/BaseBlueprintOverlay.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script> 