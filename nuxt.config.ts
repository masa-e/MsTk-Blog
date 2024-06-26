import tailwindTypography from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-microcms-module', '@nuxtjs/tailwindcss'],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
  runtimeConfig: {
    public: {
      compression: true,
      SITE_TITLE: 'Evolution Blog',
      TEAM_NAME: 'Mstk',
    },
  },
  css: [
    '@/assets/css/style.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    server: {
      // バックエンドのサーバーに接続
      proxy: {
        '/api/': {
          target: process.env.PROXY_API_URL,
          secure: false,
        },
      },
    },
  },
})
