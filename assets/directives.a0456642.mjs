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
const handlers = /* @__PURE__ */ new WeakMap();
const preloaded = /* @__PURE__ */ new Set();
const vPreloadLink = {
  getSSRProps() {
    return {};
  },
  created: (el) => {
    const handler = function() {
      var _a;
      const href = ((_a = el.href) != null ? _a : "").split("#")[0];
      if (!href || preloaded.has(href)) {
        el.removeEventListener("mouseenter", handler);
        return;
      }
      const newPreLoadLink = document.createElement("link");
      newPreLoadLink.rel = "prefetch";
      newPreLoadLink.href = href;
      document.head.appendChild(newPreLoadLink);
      preloaded.add(href);
      el.removeEventListener("mouseenter", handler);
    };
    handlers.set(el, handler);
  },
  beforeMount() {
    const currentHref = window.location.toString().split("#")[0];
    if (!currentHref || preloaded.has(currentHref)) {
      return;
    }
    preloaded.add(currentHref);
  },
  mounted: (el) => {
    el.addEventListener("mouseenter", handlers.get(el), { passive: true });
  },
  unmounted: (el) => {
    el.removeEventListener("mouseenter", handlers.get(el));
  }
};
const onUpdate = (el, bindings) => {
  const src = bindings.value.src;
  const placeholder = bindings.value.placeholder;
  if (src) {
    const image = new Image();
    if (placeholder) {
      image.onerror = () => {
        image.onerror = null;
        el.style.backgroundImage = `url(${placeholder})`;
      };
    }
    image.onload = () => {
      image.onload = null;
      el.style.backgroundImage = `url(${src})`;
    };
    image.src = src;
  }
};
const vBackground = {
  getSSRProps() {
    return {};
  },
  updated: onUpdate,
  mounted: onUpdate
};
const directives = definePlugin(({ app }) => {
  app.directive("preload-link", vPreloadLink);
  app.directive("background", vBackground);
});
export {
  directives as default
};
