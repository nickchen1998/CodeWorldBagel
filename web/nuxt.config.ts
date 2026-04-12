// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://code-world-bagel.com',
  },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '扣握貝果-CodeWorldBagel',
      htmlAttrs: { lang: 'zh-TW' },
      meta: [
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'og:site_name', content: '扣握貝果 CodeWorldBagel' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: '扣握貝果 CodeWorldBagel',
            url: 'https://code-world-bagel.com',
            logo: 'https://code-world-bagel.com/apple-touch-icon.png',
            description: '我們專門打造各種實用的應用程式，從設計到開發一手包辦，讓好點子快速落地。',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'codeworldbagel@gmail.com',
              contactType: 'customer service'
            }
          })
        }
      ]
    }
  }
})
