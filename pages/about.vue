<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const content = ref<any>({})
const error = ref<any>(null)
const loading = ref(true)

const { data, error: fetchError } = await useFetch('/json/siteContent.json', { server: false })

watch(data, (newData) => {
  if (newData) {
    content.value = newData
    loading.value = false
  }
}, { immediate: true })

watch(fetchError, (newError) => {
  if (newError) {
    error.value = newError
    loading.value = false
  }
})

const hero = computed(() => content.value?.about ?? {
  title: 'About Me',
  description: 'A passionate developer blending logic with creativity.',
  cta: 'Explore Journey',
  bio: { full: '' }
})
</script>
<template>
  <BaseSection :title="hero.title" center>
    <div v-if="!loading && !error" class="space-y-6" style="content-visibility:auto; contain-intrinsic-size: 600px;">
      <p class="text-xl text-electric font-semibold mb-2">{{ hero.description }}</p>
      <p class="text-lg text-white/90 mb-4">{{ hero.bio.full }}</p>
      <NuxtLink to="/projects" class="inline-block px-6 py-3 rounded bg-electric text-blueprint font-bold text-lg shadow hover:bg-white hover:text-electric transition">{{ hero.cta }}</NuxtLink>
        </div>
    <div v-else-if="loading" class="text-center text-white/70">
      <div class="animate-spin inline-block w-8 h-8 border-4 border-electric border-t-transparent rounded-full"></div>
      <p class="mt-2">Loading...</p>
    </div>
    <div v-else class="text-center text-red-500">Failed to load about content.</div>
  </BaseSection>
</template> 