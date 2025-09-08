// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vite-pwa/nuxt',
  ],
  image: {
    provider: 'ipx',
    screens: { sm: 320, md: 640, lg: 1024, xl: 1280 },
    presets: {
      avatar: { modifiers: { format: 'webp', width: 100, height: 100 } }
    }
  },
  routeRules: {
    '/**': { prerender: true },
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/assets/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Kevin Kimutai Kipruto | Portfolio',
      meta: [
        { name: 'description', content: 'Portfolio of Kevin Kimutai Kipruto – Forged in chemistry, wired for code.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#00ff7f' },
        { property: 'og:title', content: 'Kevin Kimutai Kipruto | Portfolio' },
        { property: 'og:description', content: 'Portfolio of Kevin Kimutai Kipruto – Forged in chemistry, wired for code.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/profile.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap' },
        { rel: 'preload', as: 'image', href: '/images/logo.svg' }
      ]
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  vite: {
    server: {
      watch: {
        ignored: [
          '**/node_modules/**',
          '**/.output/**',
          '**/.nuxt/**',
          '**/.git/**',
          '**/.cache/**',
          '**/.vite-cache/**'
        ],
      },
    },
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('vue-router')) return 'vendor-vue'
              if (id.includes('nuxt')) return 'vendor-nuxt'
              return 'vendor'
            }
          }
        }
      }
    }
  },
  nitro: {
    publicAssets: [
      {
        dir: 'public',
        baseURL: '/',
      },
    ],
    preset: 'static',
    prerender: {
      routes: ['/', '/about', '/projects', '/education', '/contact', '/testimonials']
    },
    compressPublicAssets: true,
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Kevin Kipruto Portfolio',
      short_name: 'Kipruto',
      start_url: '/',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#1e90ff',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: '/*',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages'
          }
        }
      ]
    }
  },
})
