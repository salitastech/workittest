import { d as definePlugin } from "../entry-server.mjs";
import { createI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@nuxt/devalue";
import "vue/server-renderer";
import "@vueuse/head";
import "vue";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "@iconify/iconify";
const en = {
  "select-language": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Select Language"]);
  },
  "offline-ready": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
    return _normalize([_interpolate(_named("appName")), " is ready to work offline"]);
  },
  "need-refresh": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
    return _normalize(["A new version of ", _interpolate(_named("appName")), " is available, click on reload button to update."]);
  },
  "reload-button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Reload"]);
  },
  "close-button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Close"]);
  }
};
const fr = {
  "select-language": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["S\xE9lectionnez une langue"]);
  },
  "offline-ready": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
    return _normalize([_interpolate(_named("appName")), " est pr\xEAt \xE0 \xEAtre utilis\xE9 hors ligne"]);
  },
  "need-refresh": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
    return _normalize(["Une nouvelle version de ", _interpolate(_named("appName")), " est disponible, cliquez sur le bouton Recharger pour la mettre \xE0 jour."]);
  },
  "reload-button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Recharger"]);
  },
  "close-button": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Fermer"]);
  }
};
globalThis.__VUE_PROD_DEVTOOLS__ = false;
const i18n = definePlugin(({ app }) => {
  const i18n2 = createI18n({
    locale: "en",
    messages: {
      en,
      fr
    }
  });
  app.use(i18n2);
});
export {
  i18n as default
};
