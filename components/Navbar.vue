<template>
  <header class="fixed top-0 inset-x-0 z-40">
    <nav class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-[0_8px_30px_rgb(0_0_0_/_0.12)]">
        <!-- Brand -->
        <NuxtLink to="/" class="pl-4 pr-3 py-2 flex items-center gap-2 group">
          <span class="inline-block w-2 h-2 rounded-full bg-electric shadow-[0_0_12px_2px_rgba(30,144,255,0.8)]"></span>
          <span class="font-bold tracking-wide text-sm sm:text-base group-hover:scale-[1.02] transition-transform">Kevin Kipruto</span>
        </NuxtLink>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-2 pr-2">
          <li v-for="item in items" :key="item.to">
            <NuxtLink :to="item.to" class="px-3 py-2 rounded-lg transition-all hover:scale-[1.03] focus:scale-[1.03] hover:text-electric focus:text-electric hover:shadow-[0_0_12px_2px_rgba(30,144,255,0.35)] focus:shadow-[0_0_12px_2px_rgba(30,144,255,0.35)]" exact-active-class="text-electric">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button @click="toggle" :aria-expanded="open ? 'true' : 'false'" aria-controls="mobile-menu" class="md:hidden p-3 m-1 rounded-lg hover:bg-white/10 focus:bg-white/10 transition">
          <span class="sr-only">Open menu</span>
          <svg v-if="!open" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
      </div>
    </nav>

    <!-- Mobile overlay menu -->
    <transition name="menu" appear>
      <div v-show="open" id="mobile-menu" class="fixed inset-0 z-30 md:hidden">
        <div class="absolute inset-0 bg-black/50" @click="toggle" aria-hidden="true"></div>
        <div class="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white/10 dark:bg-black/30 backdrop-blur-xl border-l border-white/20 shadow-2xl p-6 flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span class="font-bold tracking-wide">Menu</span>
            <button @click="toggle" class="p-2 rounded hover:bg-white/10"><span class="sr-only">Close</span>
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
          </div>
          <ul class="mt-2 space-y-2">
            <li v-for="item in items" :key="item.to">
              <NuxtLink @click.native="toggle" :to="item.to" class="block px-4 py-3 rounded-xl text-lg transition-all hover:scale-[1.02] hover:text-electric hover:shadow-[0_0_14px_2px_rgba(236,72,153,0.35)]">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const open = ref(false)
const items = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Blog', to: '/blog' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

const toggle = () => { open.value = !open.value }

// Close on route change
const router = useRouter()
onMounted(() => {
  router.afterEach(() => { open.value = false })
})
</script>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: opacity .25s ease, transform .25s ease; }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateX(16px); }
</style>



