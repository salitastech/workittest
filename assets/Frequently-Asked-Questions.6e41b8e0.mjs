import { g as genericFaq, _ as __unplugin_components_5 } from "./index.02f1929b.mjs";
import { f as __unplugin_components_0, g as __unplugin_components_0$1, h as _sfc_main$1 } from "../entry-server.mjs";
import { _ as __unplugin_components_2 } from "./PageTitle.11e34768.mjs";
import { defineComponent, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Frequently-Asked-Questions",
  __ssrInlineRender: true,
  setup(__props) {
    const topics = ["workit", "billings"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __unplugin_components_0;
      const _component_Container = __unplugin_components_0$1;
      const _component_PageTitle = __unplugin_components_2;
      const _component_SectionTitle = _sfc_main$1;
      const _component_FaqListBoxed = __unplugin_components_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    title: "Discover Our Simple Plan",
                    subtitle: "Simple & Comprehensive",
                    text: "Improve the way your work, discover a brand new tool and drop the hassle once and for all."
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      title: "Discover Our Simple Plan",
                      subtitle: "Simple & Comprehensive",
                      text: "Improve the way your work, discover a brand new tool and drop the hassle once and for all."
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  createVNode(_component_PageTitle, {
                    title: "Discover Our Simple Plan",
                    subtitle: "Simple & Comprehensive",
                    text: "Improve the way your work, discover a brand new tool and drop the hassle once and for all."
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, {
        wave: "wave-1",
        "shape-color": "grey"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(topics, (topic, index) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SectionTitle, {
                      title: topic,
                      subtitle: "Have a Question?"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_FaqListBoxed, { items: unref(genericFaq) }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(topics, (topic, index) => {
                      return createVNode("div", { key: index }, [
                        createVNode(_component_SectionTitle, {
                          title: topic,
                          subtitle: "Have a Question?"
                        }, null, 8, ["title"]),
                        createVNode(_component_FaqListBoxed, { items: unref(genericFaq) }, null, 8, ["items"])
                      ]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(topics, (topic, index) => {
                    return createVNode("div", { key: index }, [
                      createVNode(_component_SectionTitle, {
                        title: topic,
                        subtitle: "Have a Question?"
                      }, null, 8, ["title"]),
                      createVNode(_component_FaqListBoxed, { items: unref(genericFaq) }, null, 8, ["items"])
                    ]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Frequently-Asked-Questions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
