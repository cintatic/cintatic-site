export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CINTATIC - Tu sitio web ahora",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Impúlsate con un sitio web hecho a tu medidia, rápido, atractivo y preparado para lo que necesites",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["animate.css/animate.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  //plugins: ["@/plugins/aos.client"],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //"@nuxtjs/google-fonts",
    "@nuxt/image",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  /*
  googleFonts: {
    families: {
      Montserrat: true,
    },
    display: "swap",
  },
  */

  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  },

  //plugins: ["@/plugins/aos.client"],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "CINTATIC",
      short_name: "CINTATIC",
      lang: "es",
      theme_color: "white",
      icons: ["static/icon.png"],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
    /*
    optimization: {
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        name: "test",
        maxSize: 256000,
      },
    },
    */
  },

  router: {},
};
