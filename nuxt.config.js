export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/core_components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    'nuxt-vue-multiselect'
  ],

  axios: {
    baseURL: process.env.BASE_URL_API,
  },

  auth: {
    strategies: {
        local: {
            user: {
                property: 'user',
                autoFetch: false,
            },
            token: {
                property: 'token',
                global: true,
                type: 'Bearer',
            },
            refreshToken: {
                property: 'refreshToken',
                data: 'refreshToken',
                maxAge: 60 * 60 * 24 * 30,
            },
            endpoints: {
                login: {
                    url: process.env.BASE_URL_API + '/auth/login',
                    method: 'post',
                },
                logout: {
                    url: process.env.BASE_URL_API + '/auth/logout',
                    method: 'post',
                },
                user: {
                    url: process.env.BASE_URL_API + '/auth/user',
                    method: 'get',
                },
            },
        },
    },
    redirect: {
        login: '/',
        logout: undefined,
        home: '/assets',
    },
    watchLoggedIn: true,
    rewriteRedirects: true,
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
