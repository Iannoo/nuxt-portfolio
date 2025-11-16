<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const route = useRoute()
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

// Find the current blog post based on the slug
const currentPost = computed(() => {
  return blogPosts.value.find(post => post.slug === route.params.slug)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Set page title and meta
useHead({
  title: currentPost.value ? `${currentPost.value.title} - Blog` : 'Blog Post',
  meta: [
    {
      name: 'description',
      content: currentPost.value?.excerpt || 'Blog post'
    }
  ]
})
</script>

<template>
  <div v-if="currentPost" class="max-w-4xl mx-auto px-4 py-8">
    <!-- Back to Blog Link -->
    <NuxtLink 
      to="/blog" 
      class="inline-flex items-center text-electric hover:text-white transition-colors mb-8 group"
    >
      <svg class="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back to Blog
    </NuxtLink>

    <!-- Article Header -->
    <header class="mb-8">
      <div class="flex items-center gap-4 mb-4">
        <span class="px-3 py-1 bg-electric text-blueprint text-sm font-bold rounded-full">
          {{ currentPost.category }}
        </span>
        <span class="text-white/60 text-sm">{{ formatDate(currentPost.date) }}</span>
        <span class="text-white/60 text-sm">•</span>
        <span class="text-white/60 text-sm">{{ currentPost.readTime }}</span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {{ currentPost.title }}
      </h1>
      
      <p class="text-xl text-white/80 mb-6 leading-relaxed">
        {{ currentPost.excerpt }}
      </p>
      
      <div class="flex items-center gap-4 text-white/60">
        <span>By {{ currentPost.author }}</span>
      </div>
    </header>

    <!-- Article Content -->
    <article class="prose prose-invert prose-lg max-w-none">
      <div 
        class="text-white/90 leading-relaxed space-y-6"
        v-html="currentPost.content"
      ></div>
    </article>

    <!-- Tags -->
    <div class="mt-12 pt-8 border-t border-electric/20">
      <h3 class="text-lg font-semibold text-electric mb-4">Tags</h3>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in currentPost.tags" 
          :key="tag"
          class="px-3 py-1 bg-blueprint/50 border border-electric/30 text-white/80 text-sm rounded-full hover:border-electric/60 transition-colors"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Related Posts -->
    <div class="mt-12 pt-8 border-t border-electric/20">
      <h3 class="text-2xl font-bold text-electric mb-6">Related Posts</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article 
          v-for="post in blogPosts.filter(p => p.id !== currentPost.id).slice(0, 2)" 
          :key="post.id"
          class="bg-blueprint/30 border border-electric/20 rounded-lg p-6 hover:border-electric/40 transition-colors"
        >
          <h4 class="text-lg font-bold text-white mb-2 hover:text-electric transition-colors">
            <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
          </h4>
          <p class="text-white/70 text-sm mb-3">{{ post.excerpt }}</p>
          <div class="flex items-center gap-4 text-white/50 text-xs">
            <span>{{ formatDate(post.date) }}</span>
            <span>•</span>
            <span>{{ post.readTime }}</span>
          </div>
        </article>
      </div>
    </div>
  </div>

  <div v-else class="max-w-4xl mx-auto px-4 py-8 text-center">
    <h1 class="text-3xl font-bold text-white mb-4">Post Not Found</h1>
    <p class="text-white/70 mb-8">The blog post you're looking for doesn't exist.</p>
    <NuxtLink 
      to="/blog" 
      class="inline-flex items-center px-6 py-3 bg-electric text-blueprint font-bold rounded-lg hover:bg-white transition-colors"
    >
      Back to Blog
    </NuxtLink>
  </div>
</template>

<style scoped>
.prose h2 {
  @apply text-2xl font-bold text-electric mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-white mt-6 mb-3;
}

.prose p {
  @apply text-white/90 mb-4;
}

.prose ul, .prose ol {
  @apply mb-4 pl-6;
}

.prose li {
  @apply text-white/90 mb-2;
}

.prose pre {
  @apply bg-blueprint/50 border border-electric/30 rounded-lg p-4 overflow-x-auto mb-4;
}

.prose code {
  @apply bg-blueprint/50 text-electric px-2 py-1 rounded text-sm;
}

.prose strong {
  @apply text-white font-semibold;
}
</style> 