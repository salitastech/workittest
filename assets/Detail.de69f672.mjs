import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../entry-server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/category/Detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Detail as default
};
