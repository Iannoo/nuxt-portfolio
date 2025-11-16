module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.ts',
    './plugins/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00ff7f', // Base electric
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        blueprint: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0a192f', // Base blueprint
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 25s ease-in-out infinite',
        'float-medium': 'float 20s ease-in-out infinite',
        'float-fast': 'float 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)' },
          '33%': { transform: 'translateY(-20px) translateX(20px) scale(1.03)' },
          '66%': { transform: 'translateY(10px) translateX(-10px) scale(0.98)' },
        },
      },
    },
  },
  plugins: [
    // Removed @tailwindcss/forms and @tailwindcss/typography as they were causing issues
  ],
  corePlugins: {
    backdropBlur: true,
    backdropSaturate: true,
    backdropBrightness: true,
    backdropContrast: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}