// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  router: { options: { scrollBehaviorType: "smooth" } },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: "andromeeda",
        dark: "material-theme-darker",
      },
    },
  },
  nitro: { prerender: { routes: ["/sitemap.xml"] } },
});
