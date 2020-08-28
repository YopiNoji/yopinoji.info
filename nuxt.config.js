export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'YOPINOJI.INFO',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'YOPINOJI.INFO'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'YOPINOJI.INFO'
      },
      { hid: 'og:type', property: 'og:type', content: 'YOPINOJI.INFO' },
      { hid: 'og:url', property: 'og:url', content: 'https://yopinoji.info' },
      { hid: 'og:title', property: 'og:title', content: 'YOPINOJI.INFO' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'YOPINOJI.INFO'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/yopinoji.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/firebase'],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {}
}
