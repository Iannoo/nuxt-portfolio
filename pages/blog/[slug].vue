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
.text-electric {
  color: #1e90ff;
}

.prose h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #1e90ff;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
}

.prose ul,
.prose ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
}

.prose pre {
  background-color: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(0, 255, 127, 0.3);
  border-radius: 0.75rem;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.prose code {
  background-color: rgba(10, 25, 47, 0.5);
  color: #1e90ff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.prose strong {
  color: #ffffff;
  font-weight: 600;
}
</style>