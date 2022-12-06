import { _ as _export_sfc, g as __unplugin_components_0$1, b as __unplugin_components_2, r as __unplugin_components_3, m as __unplugin_components_3$1, a as _sfc_main$3, t as block0 } from "../entry-server.mjs";
import { _ as __unplugin_components_1$1 } from "./ThemeToggle.25698111.mjs";
import { withCtx, createVNode, createTextVNode, withModifiers, withKeys, useSSRContext as useSSRContext$1, defineComponent, computed, mergeProps, unref, renderSlot, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const _imports_0 = "/assets/logo/logo.svg";
const ErrorAnimated_vue_vue_type_style_index_0_scoped_008a6c3e_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = __unplugin_components_0$1;
  const _component_ThemeToggle = __unplugin_components_1$1;
  const _component_Title = __unplugin_components_2;
  const _component_Buttons = __unplugin_components_3;
  const _component_Button = __unplugin_components_3$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-008a6c3e><div class="error-nav" data-v-008a6c3e>`);
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="error-nav-inner" data-v-008a6c3e${_scopeId}><div class="left" data-v-008a6c3e${_scopeId}><img class="navbar-logo"${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-008a6c3e${_scopeId}></div><div class="right" data-v-008a6c3e${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ThemeToggle, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "error-nav-inner" }, [
            createVNode("div", { class: "left" }, [
              createVNode("img", {
                class: "navbar-logo",
                src: _imports_0,
                alt: "logo"
              })
            ]),
            createVNode("div", { class: "right" }, [
              createVNode(_component_ThemeToggle)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="error-wrapper" data-v-008a6c3e><div class="error-wrapper-inner" data-v-008a6c3e><div class="underlay" data-v-008a6c3e><span data-v-008a6c3e>404</span></div><div class="error-box" data-v-008a6c3e><div class="error-box-face front" data-v-008a6c3e>4</div><div class="error-box-face back" data-v-008a6c3e>0</div><div class="error-box-face right" data-v-008a6c3e>4</div><div class="error-box-face left" data-v-008a6c3e>0</div><div class="error-box-face top" data-v-008a6c3e>0</div><div class="error-box-face bottom" data-v-008a6c3e>0</div></div><div class="error-box-shadow" data-v-008a6c3e></div></div><div class="error-content" data-v-008a6c3e>`);
  _push(ssrRenderComponent(_component_Title, {
    tag: "h2",
    size: 2,
    weight: "bold",
    inverted: "",
    leading: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-008a6c3e${_scopeId}>Page Not Found</span>`);
      } else {
        return [
          createVNode("span", null, "Page Not Found")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="paragraph rem-115 is-inverted-light mx-auto max-w-4 mb-4" data-v-008a6c3e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(` Oops, something went wrong and we couldn&#39;t find that page. Please try again later. `);
  }, _push, _parent);
  _push(`</p>`);
  _push(ssrRenderComponent(_component_Buttons, { alignment: "centered" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          to: "/",
          long: 3,
          color: "light",
          outlined: "",
          bold: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Homepage`);
            } else {
              return [
                createTextVNode("Homepage")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Button, {
          long: 3,
          color: "light",
          outlined: "",
          bold: "",
          onClick: ($event) => _ctx.$router.back(),
          onKeydown: () => _ctx.$router.back()
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Back `);
            } else {
              return [
                createTextVNode(" Back ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            to: "/",
            long: 3,
            color: "light",
            outlined: "",
            bold: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Homepage")
            ]),
            _: 1
          }),
          createVNode(_component_Button, {
            long: 3,
            color: "light",
            outlined: "",
            bold: "",
            onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"]),
            onKeydown: withKeys(withModifiers(() => _ctx.$router.back(), ["prevent"]), ["space"])
          }, {
            default: withCtx(() => [
              createTextVNode(" Back ")
            ]),
            _: 1
          }, 8, ["onClick", "onKeydown"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext$1();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/error/animated-error/ErrorAnimated.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-008a6c3e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ErrorHero",
  __ssrInlineRender: true,
  props: {
    color: { default: "grey" },
    pattern: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const errorClasses = computed(() => [
      props.color && `is-${props.color}`,
      props.pattern && ``
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$3;
      _push(ssrRenderComponent(_component_Hero, mergeProps({
        class: ["error-hero", unref(errorClasses)],
        size: "fullheight"
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "error", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "error", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const ErrorHero_vue_vue_type_style_index_0_scoped_eb91d9f0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext$1();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/error/hero-error/ErrorHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eb91d9f0"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slugPart = computed(
      () => Array.isArray(route.params.all) ? route.params.all : []
    );
    const slug = computed(() => `/${slugPart.value.join("/")}`);
    {
      const context = useSSRContext();
      if (context) {
        context.found = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ErrorHero = __unplugin_components_0;
      const _component_ErrorAnimated = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ErrorHero, {
        color: "primary",
        pattern: ""
      }, {
        error: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ErrorAnimated, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Oops, something went wrong and we couldn&#39;t find that page at <strong${_scopeId2}>${ssrInterpolate(unref(slug))}</strong> . Please try again later. `);
                } else {
                  return [
                    createTextVNode(" Oops, something went wrong and we couldn't find that page at "),
                    createVNode("strong", null, toDisplayString(unref(slug)), 1),
                    createTextVNode(" . Please try again later. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ErrorAnimated, null, {
                default: withCtx(() => [
                  createTextVNode(" Oops, something went wrong and we couldn't find that page at "),
                  createVNode("strong", null, toDisplayString(unref(slug)), 1),
                  createTextVNode(" . Please try again later. ")
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
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext$1();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
