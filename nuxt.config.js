export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CINTATIC - Digitalízate ahora",
    meta: [
      {
        hid: "og:title",
        property: "og:title",
        content: "CINTATIC - Digitalízate ahora",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "CINTATIC - Digitalízate ahora",
      },

      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },

      {
        hid: "og:desc",
        property: "og:description",
        content: "Encárgate de lo que te gusta y nosotros de la tecnología.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/cintatic/cintatic-site/main/static/fb/image-og.png",
      },
      {
        hid: "fb:app_id",
        property: "fb:app_id",
        content: "1071431670076541",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "cintatic.com",
      },

      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Impúlsate con un sitio web hecho a tu medida, rápido, atractivo y preparado para lo que necesites",
      },
      {
        name: "facebook-domain-verification",
        content: "hynedflc7p4ze9jz1v1p66rvgdtgcu",
      },
      { name: "keywords", content: "sitio web, pagina web" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    "nuxt-custom-headers",
    "vue-social-sharing/nuxt",
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  server: {
    host: "0",
  },

  /*
  googleFonts: {
    families: {
      Montserrat: true,
    },
    display: "swap",
  },
  */

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
    },
    icon: {
      fileName: "icon-pwa.png",
    },
  },

  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
    /*fb:app_id
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
