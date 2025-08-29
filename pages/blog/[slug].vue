<script setup lang="ts">
import { getPostBySlug, getNextPost, getPrevPost } from '~/data/posts'

const route = useRoute()
const post = getPostBySlug(route.params.slug as string)
const nextPost = getNextPost(route.params.slug as string)
const prevPost = getPrevPost(route.params.slug as string)

// 404 if post not found
if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Development':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    case 'Best Practices':
      return 'bg-green-500/20 text-green-300 border-green-500/30'
    case 'Career':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    default:
      return 'bg-electric/20 text-electric border-electric/30'
  }
}

// SEO
useHead({
  title: `${post.title} - Blog`,
  meta: [
    {
      name: 'description',
      content: post.summary
    },
    {
      property: 'og:title',
      content: post.title
    },
    {
      property: 'og:description',
      content: post.summary
    },
    ...(post.cover ? [{
      property: 'og:image',
      content: post.cover
    }] : [])
  ]
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
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
        <span 
          class="px-3 py-1 text-sm font-bold rounded-full border"
          :class="getCategoryColor(post.category)"
        >
          {{ post.category }}
        </span>
        <span class="text-white/60 text-sm">{{ formatDate(post.date) }}</span>
        <span class="text-white/60 text-sm">•</span>
        <span class="text-white/60 text-sm">{{ post.minutes }} min read</span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {{ post.title }}
      </h1>
      
      <p class="text-xl text-white/80 mb-6 leading-relaxed">
        {{ post.summary }}
      </p>
    </header>

    <!-- Article Content -->
    <article class="prose prose-invert prose-lg max-w-none mb-12">
      <div 
        class="text-white/90 leading-relaxed space-y-6"
        v-html="post.body"
      ></div>
    </article>

    <!-- Navigation -->
    <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-electric/20">
      <NuxtLink 
        v-if="prevPost"
        :to="`/blog/${prevPost.slug}`"
        class="flex-1 p-4 bg-blueprint/30 border border-electric/20 rounded-lg hover:border-electric/40 transition-colors group"
      >
        <div class="text-sm text-white/60 mb-1">← Previous</div>
        <div class="text-white font-semibold group-hover:text-electric transition-colors">
          {{ prevPost.title }}
        </div>
      </NuxtLink>
      
      <div v-else class="flex-1"></div>
      
      <NuxtLink 
        v-if="nextPost"
        :to="`/blog/${nextPost.slug}`"
        class="flex-1 p-4 bg-blueprint/30 border border-electric/20 rounded-lg hover:border-electric/40 transition-colors group text-right"
      >
        <div class="text-sm text-white/60 mb-1">Next →</div>
        <div class="text-white font-semibold group-hover:text-electric transition-colors">
          {{ nextPost.title }}
        </div>
      </NuxtLink>
      
      <div v-else class="flex-1"></div>
    </div>

    <!-- Back to Blog -->
    <div class="text-center mt-8">
      <NuxtLink 
        to="/blog" 
        class="inline-flex items-center px-6 py-3 bg-electric text-blueprint font-bold rounded-lg hover:bg-white transition-colors"
      >
        ← Back to All Posts
      </NuxtLink>
    </div>
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