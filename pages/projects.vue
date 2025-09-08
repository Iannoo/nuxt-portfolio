<script setup lang="ts">
let content = {}
let error = null
useHead({
  title: 'Projects | Kevin Kipruto',
  meta: [
    { name: 'description', content: 'Selected projects by Kevin Kipruto – built with Nuxt, Vue, and modern web tech.' },
    { property: 'og:title', content: 'Projects | Kevin Kipruto' },
    { property: 'og:description', content: 'Selected projects by Kevin Kipruto – built with Nuxt, Vue, and modern web tech.' },
    { property: 'og:type', content: 'website' }
  ]
})
try {
  const { data, error: fetchError } = await useFetch('/json/projectsContent.json')
  if (fetchError.value) {
    error = fetchError.value
    console.error('Failed to load projectsContent.json:', error)
  }
  content = data.value ?? {}
} catch (err) {
  error = err
  console.error('Failed to load projectsContent.json:', err)
}
const hero = content.hero ?? {
  title: 'Projects',
  description: 'A short description for the hero section of this page.',
  cta: 'See Projects'
}
const project = content?.projects?.[0] ?? {}
</script>
<template>
  <BaseSection :title="hero.title" center>
    <div v-if="project && project.title" class="space-y-6" style="content-visibility:auto; contain-intrinsic-size: 700px;">
      <h3 class="text-2xl font-bold text-electric">{{ project.title }}</h3>
      <p class="text-white/90">{{ project.description }}</p>
      <div class="flex flex-wrap gap-4 mt-4">
        <span class="px-3 py-1 rounded bg-electric/10 border border-electric text-electric font-medium">Year: {{ project.year }}</span>
        <span class="px-3 py-1 rounded bg-electric/10 border border-electric text-electric font-medium">Role: {{ project.role }}</span>
        <span class="px-3 py-1 rounded bg-electric/10 border border-electric text-electric font-medium">Takeaway: {{ project.takeaway }}</span>
      </div>
    </div>
    <div v-else class="text-center text-red-500">Failed to load project content.</div>
  </BaseSection>
</template> 