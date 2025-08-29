<script setup lang="ts">
import type { Post } from '~/data/posts'

interface Props {
  post: Post
}

const props = defineProps<Props>()

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
</script>

<template>
  <article class="bg-blueprint/50 border border-electric/20 rounded-lg overflow-hidden hover:border-electric/40 transition-all duration-300 hover:transform hover:scale-105 group">
    <!-- Post Image -->
    <div class="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
      <img 
        v-if="post.cover" 
        :src="post.cover" 
        :alt="post.title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <!-- Category Chip -->
      <div class="absolute top-4 left-4">
        <span 
          class="px-3 py-1 text-xs font-bold rounded-full border"
          :class="getCategoryColor(post.category)"
        >
          {{ post.category }}
        </span>
      </div>
      
      <!-- Date and Read Time -->
      <div class="absolute bottom-4 left-4 right-4">
        <div class="flex items-center gap-4 text-white/80 text-sm">
          <span>{{ formatDate(post.date) }}</span>
          <span>•</span>
          <span>{{ post.minutes }} min read</span>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <div class="p-6">
      <h2 class="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors">
        {{ post.title }}
      </h2>
      
      <p class="text-white/80 text-sm leading-relaxed mb-4">
        {{ post.summary }}
      </p>
      
      <NuxtLink 
        :to="`/blog/${post.slug}`"
        class="inline-flex items-center text-electric font-semibold hover:text-white transition-colors group/link"
      >
        Read case study →
        <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
