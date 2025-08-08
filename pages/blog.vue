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

const hero = computed(() => content.value?.blog ?? {
  title: 'Blog',
  description: 'Thoughts, tutorials, and insights from my journey in tech.',
  cta: 'Read More'
})

// Fetch blog posts from JSON file
const { data: blogData, error: blogError } = await useFetch('/json/blogContent.json', { server: false })

const blogPosts = computed(() => {
  return blogData.value?.posts || []
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <BaseSection :title="hero.title" center>
    <div v-if="!loading && !error" class="space-y-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <p class="text-xl text-electric font-semibold mb-4">{{ hero.description }}</p>
        <div class="w-24 h-1 bg-electric mx-auto"></div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in blogPosts" 
          :key="post.id"
          class="bg-blueprint/50 border border-electric/20 rounded-lg overflow-hidden hover:border-electric/40 transition-all duration-300 hover:transform hover:scale-105 group"
        >
          <!-- Post Image -->
          <div class="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-electric text-blueprint text-xs font-bold rounded-full">
                {{ post.category }}
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center gap-4 text-white/80 text-sm">
                <span>{{ formatDate(post.date) }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
            </div>
          </div>

          <!-- Post Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors">
              {{ post.title }}
            </h3>
            <p class="text-white/80 text-sm leading-relaxed mb-4">
              {{ post.excerpt }}
            </p>
            <NuxtLink 
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center text-electric font-semibold hover:text-white transition-colors group/link"
            >
              Read More
              <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-electric/20 rounded-lg text-center">
        <h3 class="text-2xl font-bold text-electric mb-4">Stay Updated</h3>
        <p class="text-white/80 mb-6 max-w-2xl mx-auto">
          Get notified when I publish new articles about web development, best practices, and tech insights.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 bg-blueprint/50 border border-electric/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-electric"
          >
          <button class="px-6 py-3 bg-electric text-blueprint font-bold rounded-lg hover:bg-white transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="loading" class="text-center text-white/70">
      <div class="animate-spin inline-block w-8 h-8 border-4 border-electric border-t-transparent rounded-full"></div>
      <p class="mt-2">Loading blog posts...</p>
    </div>

    <div v-else class="text-center text-red-500">
      Failed to load blog content.
    </div>
  </BaseSection>
</template>

<style scoped>
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style> 