<template>
  <span>
    <svg v-if="icon === 'poetry'" class="w-7 h-7 text-electric" viewBox="0 0 24 24" fill="none"><path d="M4 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" stroke="currentColor" stroke-width="2"/><path d="M8 7h4M8 11h4M8 15h2" stroke="currentColor" stroke-width="2"/></svg>
    <svg v-else-if="icon === 'music'" class="w-7 h-7 text-electric" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="19" r="2" fill="currentColor"/><path d="M8 17V5l12-2v12" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="17" r="2" fill="currentColor"/></svg>
    <svg v-else-if="icon === 'film'" class="w-7 h-7 text-electric" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>
    <svg v-else class="w-7 h-7 text-electric" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>
  </span>
</template>
<script setup lang="ts">
defineProps<{ icon: string }>()
</script> 