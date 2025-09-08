<script setup lang="ts">
import { posts } from '~/data/posts'

// SEO
useHead({
  title: 'Blog - Kevin Kipruto',
  meta: [
    {
      name: 'description',
      content: 'Thoughts, tutorials, and insights from my journey in tech. Learn about web development, best practices, and career decisions.'
    },
    {
      property: 'og:title',
      content: 'Blog - Kevin Kipruto'
    },
    {
      property: 'og:description',
      content: 'Thoughts, tutorials, and insights from my journey in tech.'
    }
  ]
})

// Category filtering
const selectedCategory = ref<string>('all')
const categories = ['all', 'Development', 'Best Practices', 'Career']

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') {
    return posts
  }
  return posts.filter(post => post.category === selectedCategory.value)
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
  <BaseSection title="Blog" center>
    <div class="space-y-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <p class="text-xl text-electric font-semibold mb-4">
          Thoughts, tutorials, and insights from my journey in tech.
        </p>
        <p class="text-white/70 mb-6 max-w-2xl mx-auto">
          I write about my decision-making process, technical challenges, and lessons learned. 
          Each post follows a structured approach: Problem → Options → Why I chose X → Result → What I'd do differently.
        </p>
        <div class="w-24 h-1 bg-electric mx-auto"></div>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="selectedCategory === category 
            ? 'bg-electric text-blueprint' 
            : 'bg-blueprint/30 text-white/70 hover:bg-blueprint/50 hover:text-white border border-electric/20'"
        >
          {{ category === 'all' ? 'All Posts' : category }}
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ClientOnly>
          <Suspense>
            <LazyBlogCard 
              v-for="post in filteredPosts" 
              :key="post.slug"
              :post="post"
            />
            <template #fallback>
              <SkeletonLoader v-for="i in 3" :key="i" blockClass="h-64" />
            </template>
          </Suspense>
        </ClientOnly>
      </div>

      <!-- Empty State -->
      <div v-if="filteredPosts.length === 0" class="text-center py-12">
        <p class="text-white/70 text-lg">No posts found in this category.</p>
        <button 
          @click="selectedCategory = 'all'"
          class="mt-4 px-6 py-2 bg-electric text-blueprint font-bold rounded-lg hover:bg-white transition-colors"
        >
          View All Posts
        </button>
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
  </BaseSection>
</template>

<style scoped>
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style> 