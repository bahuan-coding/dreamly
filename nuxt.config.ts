// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/ui-pro'
  ],
  
  // @ts-ignore
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons'],
    
    // Custom theme based on dreamly design
    theme: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f1fe',
          200: '#bae3fd',
          300: '#7dcdf9',
          400: '#36b3f2',
          500: '#0c9be1',
          600: '#0280c0',
          700: '#026690',
          800: '#065776',
          900: '#0a4a64',
          950: '#072f44',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ff9f9f',
          400: '#ff6b6b',
          500: '#fe3b3b',
          600: '#ef1c1c',
          700: '#c91414',
          800: '#a71717',
          900: '#891a1a',
          950: '#4b0909',
        }
      }
    }
  }
}) 