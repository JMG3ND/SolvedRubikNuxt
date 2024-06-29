// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  css: ["~/assets/_styale-default.scss"],
});