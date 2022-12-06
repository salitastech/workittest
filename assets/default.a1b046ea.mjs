import { _ as __unplugin_components_1 } from "./BackToTop.8ec20d87.mjs";
import { _ as __unplugin_components_0 } from "./NavbarF.292178c9.mjs";
import { defineComponent, resolveComponent, withCtx, createVNode, resolveDynamicComponent, Transition, unref, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { v as useLayout } from "../entry-server.mjs";
import "@vueuse/core";
import "vue-scrollto";
import "./ThemeToggle.25698111.mjs";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { transition } = useLayout();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarF = __unplugin_components_0;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_BackToTop = __unplugin_components_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NavbarF, { fixed: "" }, null, _parent));
      _push(ssrRenderComponent(_component_RouterView, null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          } else {
            return [
              createVNode(Transition, {
                name: unref(transition),
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1032, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BackToTop, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
