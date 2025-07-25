<template>
  <section :class="['py-12 px-4 md:px-8', { 'max-w-4xl mx-auto': center }]">
    <h2 v-if="title" class="text-3xl font-bold mb-6 text-electric">
      <slot name="title">{{ title }}</slot>
    </h2>
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title?: string, center?: boolean }>()
</script> 