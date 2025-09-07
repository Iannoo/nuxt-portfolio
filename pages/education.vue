<script setup lang="ts">
let content = {}
let error = null
try {
  const { data, error: fetchError } = await useFetch('/json/educationContent.json')
  if (fetchError.value) {
    error = fetchError.value
    console.error('Failed to load educationContent.json:', error)
  }
  content = data.value ?? {}
} catch (err) {
  error = err
  console.error('Failed to load educationContent.json:', err)
}
const hero = content.hero ?? {
  title: 'Education',
  description: 'Where my journey of curiosity was forged.',
  cta: 'View Credentials'
}

const onImgError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (!target) return
  // fallback to local profile image to avoid broken thumbnail
  target.src = '/images/profile.jpg'
}
</script>
<template>
  <BaseSection :title="hero.title" center>
    <div class="space-y-6">
      <p class="text-xl text-electric font-semibold mb-2">{{ hero.description }}</p>
      <div>
        <ul class="space-y-4">
          <li v-for="item in content?.timeline" :key="item.school" class="bg-blueprint/80 rounded p-4 shadow">
            <div class="flex items-start gap-4">
              <img v-if="item.photo" :src="item.photo" :alt="item.school + ' photo'" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded" loading="lazy" @error="onImgError"/>
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
        <NuxtLink to="/projects" class="inline-block px-6 py-3 rounded bg-electric text-blueprint font-bold text-lg shadow hover:bg-white hover:text-electric transition">{{ hero.cta }}</NuxtLink>
      </div>
    </div>
  </BaseSection>
</template> 