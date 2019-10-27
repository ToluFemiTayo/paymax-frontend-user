export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
      },

      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/bootstrap/css/bootstrap.min.css"
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/owl.carousel/assets/owl.carousel.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/owl.carousel/assets/owl.theme.default.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/stylesheet.css"
      },

      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/custom.css"
      }
      // {
      // 	rel: 'stylesheet',
      // 	type: 'text/css',
      // 	href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      // }
    ],
    script: [
      {
        src: "/vendor/jquery/jquery.min.js"
      },
      {
        src: "/vendor/bootstrap/js/bootstrap.bundle.min.js"
      },
      {
        src: "/vendor/owl.carousel/owl.carousel.min.js"
      },
      {
        src: "/js/theme.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#0c2f55",
    delay: 3000,
    throttle: 0
  },
  /*
   ** Global CSS
   */
  css: [
    "@fortawesome/fontawesome-free/css/all.min.css",
    "swiper/dist/css/swiper.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/swiper.js",
      ssr: false
    },
    "~/plugins/vee-validate",
    "~/plugins/sweet-modal-vue",
    "~/plugins/vue-clipboard"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // proxy: true,
    baseURL: "https://paypub.herokuapp.com/api"
    // baseURL: "http://localhost:2200/api"
  },

  // proxy: {
  // 	'/api/': 'https://paypub.herokuapp.com/api'
  // },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "data.token"
          },
          user: {
            url: "me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "logout",
            method: "get"
          }
        }
      }
    },
    redirect: {
      login: "/accounts/login",
      home: "/app",
      logout: "/"
    }
  },
  env: {
    browser: true,
    RV: "FLWPUBK_TEST-491b3ece799f178e280d2d7b215b5072-X"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
