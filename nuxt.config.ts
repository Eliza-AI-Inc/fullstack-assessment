// import { fileURLToPath } from 'url'
// import { dirname, join } from 'path'
// const currentDir = dirname(fileURLToPath(import.meta.url))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],
})
