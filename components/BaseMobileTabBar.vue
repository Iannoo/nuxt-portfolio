<template>
  <nav class="fixed bottom-0 inset-x-0 z-30 md:hidden bg-blueprint/95 backdrop-blur border-t border-electric">
    <ul class="grid grid-cols-4 text-sm font-medium">
      <li>
        <NuxtLink to="/" exact class="flex flex-col items-center py-2 px-3 hover:text-electric transition" exact-active-class="text-electric" aria-label="Home">
          <svg viewBox="0 0 24 24" class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 10.5L12 3l9 7.5"/>
            <path d="M5 9.5V21h14V9.5"/>
          </svg>
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="flex flex-col items-center py-2 px-3 hover:text-electric transition" exact-active-class="text-electric" aria-label="About">
          <svg viewBox="0 0 24 24" class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="7" r="3"/>
            <path d="M5 21a7 7 0 0 1 14 0"/>
          </svg>
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="flex flex-col items-center py-2 px-3 hover:text-electric transition" exact-active-class="text-electric" aria-label="Contact">
          <svg viewBox="0 0 24 24" class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M21 8l-9 6-9-6"/>
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
          </svg>
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/testimonials" class="flex flex-col items-center py-2 px-3 hover:text-electric transition" exact-active-class="text-electric" aria-label="Testimonials">
          <svg viewBox="0 0 24 24" class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="7.5" cy="7.5" r="3"/>
            <path d="M2 21a6 6 0 0 1 11 0"/>
            <circle cx="17" cy="10" r="3"/>
            <path d="M14 21a5 5 0 0 1 8 0"/>
          </svg>
          Testimonials
        </NuxtLink>
      </li>
    </ul>
    <div class="h-[env(safe-area-inset-bottom)]"></div>
  </nav>
</template>


