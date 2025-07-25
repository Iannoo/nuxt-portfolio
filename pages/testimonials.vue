<script setup lang="ts">
let content = {}
let error = null
try {
  const { data, error: fetchError } = await useFetch('/json/testimonialsContent.json')
  if (fetchError.value) {
    error = fetchError.value
    console.error('Failed to load testimonialsContent.json:', error)
  }
  content = data.value ?? {}
} catch (err) {
  error = err
  console.error('Failed to load testimonialsContent.json:', err)
}
const hero = content.hero ?? {
  title: 'Testimonials',
  description: 'What people say about my work and impact.',
  cta: 'Read More'
}
</script>
<template>
  <BaseSection :title="hero.title" center>
    <div v-if="content?.testimonials">
      <div v-for="t in content.testimonials" :key="t.name" class="mb-6 p-4 bg-blueprint/80 rounded shadow">
        <p class="text-lg text-white/90 italic mb-2">"{{ t.feedback }}"</p>
        <div class="text-electric font-bold">- {{ t.name }}, <span class="font-normal">{{ t.role }}</span></div>
      </div>
    </div>
    <div v-else>
    <BaseTestimonialPlaceholder />
      <div class="text-center text-red-500">Failed to load testimonials content.</div>
    </div>
  </BaseSection>
</template> 