<script setup lang="ts">
let content: Record<string, any> = {}
let error: Error | null = null
useHead({
  title: 'Education | Kevin Kipruto',
  meta: [
    { name: 'description', content: 'A journey through learning – from labs to lines of code.' },
    { property: 'og:title', content: 'Education | Kevin Kipruto' },
    { property: 'og:description', content: 'A journey through learning – from labs to lines of code.' },
    { property: 'og:type', content: 'website' }
  ]
})
try {
  const { data, error: fetchError } = await useFetch('/json/educationContent.json', { server: false })
  if (fetchError.value) {
    error = fetchError.value as Error
    console.error('Failed to load educationContent.json:', error)
  }
  content = (data.value as Record<string, any>) ?? {}
} catch (err: unknown) {
  error = err instanceof Error ? err : new Error(String(err))
  console.error('Failed to load educationContent.json:', err)
}
const hero = (content.hero as Record<string, any>) ?? {
  title: 'Education',
  description: 'Where my journey of curiosity was forged.',
  cta: 'View Credentials'
}

const onImgError = (payload: string | Event) => {
  if (typeof payload === 'string') return
  const target = payload.target as HTMLImageElement | null
  if (!target) return
  // fallback to local profile image to avoid broken thumbnail
  target.src = '/images/profile.jpg'
}
</script>
<template>
  <BaseSection :title="hero.title" center>
    <div class="space-y-6" style="content-visibility:auto; contain-intrinsic-size: 800px;">
      <p class="text-xl text-electric font-semibold mb-2">{{ hero.description }}</p>
      <p class="text-white/70 -mt-2">Where curiosity earns its colors.</p>
      <div>
        <ul class="space-y-4">
          <li v-for="item in content?.timeline ?? []" :key="item.school" class="bg-blueprint/80 rounded p-4 shadow">
            <div class="flex items-start gap-4">
              <NuxtImg v-if="item.photo" :src="item.photo" :alt="item.school + ' photo'" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-white/20" format="webp" width="80" height="80" sizes="(min-width: 640px) 80px, 64px" loading="lazy" decoding="async" @error="onImgError"/>
              <div>
                <h3 class="text-lg font-bold text-electric mb-1">{{ item.school }}</h3>
                <p class="text-white/90">{{ item.course }}</p>
                <p class="text-white/70">{{ item.year }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <NuxtLink to="/projects" class="inline-block px-6 py-3 rounded border-2 border-electric text-electric font-bold text-lg shadow hover:bg-electric hover:text-blueprint transition">{{ hero.cta }}</NuxtLink>
      </div>
    </div>
  </BaseSection>
</template> 