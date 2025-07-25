// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vite-pwa/nuxt',
  ],
  image: {
    domains: ['localhost'],
    screens: { sm: 320, md: 640, lg: 1024, xl: 1280 },
    presets: {
      avatar: { modifiers: { format: 'webp', width: 100, height: 100 } }
    }
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
        { name: 'theme-color', content: '#1e90ff' },
        { property: 'og:title', content: 'Kevin Kimutai Kipruto | Portfolio' },
        { property: 'og:description', content: 'Portfolio of Kevin Kimutai Kipruto – Forged in chemistry, wired for code.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' }
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
      minify: 'esbuild',
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
