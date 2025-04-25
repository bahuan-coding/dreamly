// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Dreamly',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Dreamly - Plataforma de Sorteios e Experiências' }
      ]
    }
  },
  
  ssr: true,
  
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxt/fonts',
    '@nuxt/ui-pro'
  ],
  
  // @ts-ignore
  uiPro: {
    license: 'BEA08C62-811A-4DEF-9DB3-B2B26860FE39'
  },
  
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
  },
  
  image: {
    // Configurações para o módulo de imagem
    provider: 'ipx',
    quality: 80,
    dir: 'public',
  },

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  }
}) 