import { defineAsyncComponent } from "vue";
import { d as definePlugin } from "../entry-server.mjs";
import "@nuxt/devalue";
import "vue/server-renderer";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const slider = definePlugin(({ app }) => {
  app.component(
    "Slider",
    defineAsyncComponent({
      loader: () => import("@vueform/slider").then((mod) => mod.default),
      delay: 0,
      suspensible: false
    })
  );
});
export {
  slider as default
};
