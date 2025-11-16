<template>
  <nav class="w-full py-3 px-4 flex justify-center bg-transparent backdrop-blur-sm border-b border-white/10 z-20">
    <ul class="flex items-center gap-6 text-sm font-medium">
      <li>
        <NuxtLink to="/" exact class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="Home">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 10.5L12 3l9 7.5"/>
            <path d="M5 9.5V21h14V9.5"/>
          </svg>
          <span class="hidden sm:inline">Home</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="About">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="7" r="3"/>
            <path d="M5 21a7 7 0 0 1 14 0"/>
          </svg>
          <span class="hidden sm:inline">About</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="Projects">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"/>
            <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"/>
          </svg>
          <span class="hidden sm:inline">Projects</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="Blog">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M7 3h8l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
            <path d="M15 3v5a2 2 0 0 0 2 2h5"/>
            <path d="M9 13h6"/>
            <path d="M9 17h6"/>
          </svg>
          <span class="hidden sm:inline">Blog</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/education" class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="Education">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 9l9-4 9 4-9 4-9-4z"/>
            <path d="M21 10v5"/>
            <path d="M3 10v5c0 2 6 4 9 4s9-2 9-4v-5"/>
          </svg>
          <span class="hidden sm:inline">Education</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="Contact">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M21 8l-9 6-9-6"/>
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
          </svg>
          <span class="hidden sm:inline">Contact</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/testimonials" class="flex items-center gap-2 hover:text-electric transition" exact-active-class="text-electric" aria-label="Testimonials">
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="7.5" cy="7.5" r="3"/>
            <path d="M2 21a6 6 0 0 1 11 0"/>
            <circle cx="17" cy="10" r="3"/>
            <path d="M14 21a5 5 0 0 1 8 0"/>
          </svg>
          <span class="hidden sm:inline">Testimonials</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template> 
<script setup>
</script>