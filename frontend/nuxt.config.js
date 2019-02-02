require('dotenv').config()

module.exports = {
  mode: 'universal',

  srcDir: __dirname,

  env: {
    apiUrl: process.env.APP_URL || 'http://api.bson.loc/api',
    appName: process.env.APP_NAME || 'Laravel-Nuxt',
    appLocale: process.env.APP_LOCALE || 'en',
    githubAuth: !!process.env.GITHUB_CLIENT_ID
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },

  loading: { color: '#007bff' },

  router: {
    middleware: ['locale', 'check-auth']
  },

  /*
    css: [
      // { src: '~assets/sass/app.scss', lang: 'scss' }
    ],
  */

  css: [],
  plugins: [
    '~components',
    '~plugins/i18n',
    '~plugins/vform',
    '~plugins/axios',
    '~plugins/validation'
  ],

  modules: [
    '@nuxtjs/router',
    // '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/font-awesome',
    'nuxt-material-design-icons'
  ],

  vuetify: {
    materialIcons: false
    // Vuetify options
    //  theme: { }
  },

  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
