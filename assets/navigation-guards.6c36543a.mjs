import { d as definePlugin } from "../entry-server.mjs";
import "@nuxt/devalue";
import "vue/server-renderer";
import "@vueuse/head";
import "vue";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const navigationGuards = definePlugin(({ router }) => {
  router.beforeEach(async (to, from) => {
  });
});
export {
  navigationGuards as default
};
