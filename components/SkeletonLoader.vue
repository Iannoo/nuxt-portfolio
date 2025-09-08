<template>
  <div class="animate-pulse">
    <div :class="['rounded-xl bg-white/10 dark:bg-white/10', blockClass]"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  blockClass: { type: String, default: 'h-32 w-full' }
})
</script>


