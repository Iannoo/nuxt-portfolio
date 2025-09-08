<script setup lang="ts">
import { ref } from 'vue'
import HeroBackgroundGate from '@/components/HeroBackgroundGate.vue'
useHead({
  title: 'Home | Kevin Kipruto',
  meta: [
    { name: 'description', content: 'Full‑stack developer building interactive experiences. Explore projects and get in touch.' },
    { property: 'og:title', content: 'Home | Kevin Kipruto' },
    { property: 'og:description', content: 'Full‑stack developer building interactive experiences. Explore projects and get in touch.' },
    { property: 'og:type', content: 'website' }
  ]
})

const content = ref({})
const error = ref(null)
const loading = ref(true)

// Use client-side only fetch to avoid SSR issues
const { data, error: fetchError, pending } = await useFetch('/json/siteContent.json', {
  server: false,
  default: () => ({
    hero: {
      name: 'Kevin Kipruto',
      tagline: 'Forged in chemistry, wired for code.',
      shortBio: 'Full-stack dev turning ideas into interactive magic. Welcome to my digital playground.',
      cta: 'See My Work'
    }
  })
})

// Watch for data changes and update content
watch(data, (newData) => {
  if (newData) {
    content.value = newData
    loading.value = false
  }
}, { immediate: true })

// Watch for errors
watch(fetchError, (newError) => {
  if (newError) {
    console.error('Failed to load siteContent.json:', newError)
    error.value = newError
    loading.value = false
  }
})

const hero = computed(() => content.value?.hero ?? {
  name: 'Kevin Kipruto',
  tagline: 'Forged in chemistry, wired for code.',
  shortBio: 'Full-stack dev turning ideas into interactive magic. Welcome to my digital playground.',
  cta: 'See My Work'
})

// LCP image loading state for blur-up placeholder
const heroImgLoaded = ref(false)
</script>
<template>
  <main>
    <section class="relative min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-16 py-12 text-white overflow-hidden">
      <HeroBackgroundGate />
      <div class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 max-w-5xl w-full z-10">
        <!-- Text Block -->
        <header class="w-full md:w-1/2 text-center md:text-left space-y-4 animate-fade-in-up px-2 sm:px-0">
          <p class="text-lg xs:text-xl font-semibold flex items-center justify-center md:justify-start gap-2 text-white/80">
            <span class="animate-wave inline-block" aria-hidden="true">👋</span>
            <span>Who is . . . . . </span>
          </p>
          <div class="rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md ring-1 ring-white/20 p-4 sm:p-6 inline-block">
            <h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-montserrat drop-shadow-lg leading-tight animate-fade-in">Kevin Kipruto</h1>
          </div>
          <h2 class="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold font-montserrat leading-snug flex items-center justify-center md:justify-start text-slate-700 dark:text-white/90 animate-fade-in-up">
            Forged in chemistry, <span class="text-electric font-extrabold ml-1">wired for code.</span>
            <span class="blinking-cursor ml-1" aria-hidden="true">|</span>
          </h2>
          <p class="text-xs xs:text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 text-slate-700 dark:text-white/70">
            Full-stack dev turning ideas into <span class="text-electric font-semibold">interactive magic</span>. Welcome to my digital playground.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-6 animate-fade-in-up">
            <!-- Primary CTA: See My Work -->
            <NuxtLink to="/projects" prefetch class="relative inline-flex items-center px-8 py-4 sm:px-10 sm:py-4 font-bold rounded-xl shadow-lg bg-electric/20 text-white border border-electric/60 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric/60 animate-cta-border text-base sm:text-lg min-h-[48px] min-w-[160px]">
              <span>See My Work</span>
              <svg class="ml-3 w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span class="absolute inset-0 rounded-xl border-2 border-transparent hover:border-blue-300 transition-all duration-300 pointer-events-none"></span>
            </NuxtLink>
            <!-- Secondary CTA: Contact Me -->
            <NuxtLink to="/contact" prefetch class="inline-flex items-center px-8 py-4 sm:px-10 sm:py-4 font-bold rounded-xl shadow bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all duration-200 text-base sm:text-lg min-h-[48px] min-w-[160px] mt-2 sm:mt-0">
              Contact Me
            </NuxtLink>
          </div>
        </header>
        <!-- Profile Image -->
        <div class="flex-shrink-0 animate-fade-in mb-6 md:mb-0 w-full flex justify-center md:justify-end md:w-auto">
          <img
            src="/images/profile.jpg"
            alt="Portrait of Kevin Kipruto, smiling and ready to help you build something great"
            class="w-28 h-28 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-400 shadow-xl hover:scale-105 transition-transform will-change-transform"
            width="192"
            height="192"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            @load="heroImgLoaded = true"
            :style="heroImgLoaded ? '' : 'filter: blur(8px); transform: scale(1.02);'"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

.font-montserrat {
  font-family: 'Montserrat', 'Inter', Arial, sans-serif;
}
.text-electric {
  color: #1e90ff;
}
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes bg-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
@keyframes bounce-x {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(6px); }
}
@keyframes cta-border {
  0% { box-shadow: 0 0 0 0 #1e90ff44; }
  70% { box-shadow: 0 0 0 8px #1e90ff22; }
  100% { box-shadow: 0 0 0 0 #1e90ff44; }
}
@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-fade-in {
  animation: fade-in 1s ease-out;
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
.animate-bg-move {
  animation: bg-move 8s ease-in-out infinite alternate;
}
.animate-bounce-x {
  animation: bounce-x 1.2s infinite;
}
.animate-cta-border {
  animation: cta-border 2.5s infinite;
}
.animate-wave {
  animation: wave 2s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}
.blinking-cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
}

/* Extra small breakpoint for xs: 375px */
@media (min-width: 375px) {
  .xs\:text-base { font-size: 1rem; }
  .xs\:text-xl { font-size: 1.25rem; }
  .xs\:w-36 { width: 9rem; }
  .xs\:h-36 { height: 9rem; }
  .xs\:w-40 { width: 10rem; }
  .xs\:h-40 { height: 10rem; }
  .xs\:px-8 { padding-left: 2rem; padding-right: 2rem; }
}
</style> 