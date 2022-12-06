import { t as termsOfService, _ as __unplugin_components_0 } from "./index.d964d2e2.mjs";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "../entry-server.mjs";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
import "./index.b872aad3.mjs";
import "vue3-markdown-it";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Privacy-Policy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TermsBlock = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TermsBlock, {
        title: "Privacy Policy",
        subtitle: "You must read through the entire Terms of Service below and agree with all the details before you use any of our sites.",
        updated: "March 22, 2022",
        image: "/assets/illustrations/hero/terms-hero.svg",
        "dark-image": "/assets/illustrations/hero/terms-hero.svg",
        "image-height": "1152",
        "image-width": "517",
        terms: unref(termsOfService)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Privacy-Policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
