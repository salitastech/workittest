import { a as _sfc_main$2, b as __unplugin_components_2, c as __unplugin_components_0$2, e as __unplugin_components_3, _ as _export_sfc, f as __unplugin_components_0$3, g as __unplugin_components_0$4 } from "../entry-server.mjs";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { c as customerLogos } from "./index.b872aad3.mjs";
import Markdown from "vue3-markdown-it";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TermsHeader",
  __ssrInlineRender: true,
  props: {
    title: null,
    subtitle: null,
    updated: null,
    image: null,
    darkImage: null,
    imageWidth: null,
    imageHeight: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$2;
      const _component_Title = __unplugin_components_2;
      const _component_Subtitle = __unplugin_components_0$2;
      const _component_DarkImage = __unplugin_components_3;
      const _component_HeroClients = resolveComponent("HeroClients");
      _push(ssrRenderComponent(_component_Hero, mergeProps({
        alignment: "center",
        size: "fullheight",
        color: "grey"
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns is-vcentered mt-12" data-v-3d49d7e5${_scopeId}><div class="column is-relative" data-v-3d49d7e5${_scopeId}><div class="mx-auto max-w-6 mb-4" data-v-3d49d7e5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Title, {
              tag: "h1",
              size: 1,
              weight: "bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-3d49d7e5${_scopeId2}>${ssrInterpolate(props.title)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(props.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Subtitle, {
              tag: "p",
              size: 5,
              weight: "thin",
              class: "mx-auto max-w-6 b-centered-tablet-p pt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.subtitle)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.subtitle), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="paragraph" data-v-3d49d7e5${_scopeId}>Last updated: ${ssrInterpolate(props.updated)}</p></div><div class="centered-illustration-wrapper" data-v-3d49d7e5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DarkImage, {
              class: "centered-illustration",
              src: props.image,
              "src-dark": props.darkImage,
              width: props.imageWidth,
              height: props.imageHeight,
              alt: "Hero illustration"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "columns is-vcentered mt-12" }, [
                createVNode("div", { class: "column is-relative" }, [
                  createVNode("div", { class: "mx-auto max-w-6 mb-4" }, [
                    createVNode(_component_Title, {
                      tag: "h1",
                      size: 1,
                      weight: "bold"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(props.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Subtitle, {
                      tag: "p",
                      size: 5,
                      weight: "thin",
                      class: "mx-auto max-w-6 b-centered-tablet-p pt-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.subtitle), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "paragraph" }, "Last updated: " + toDisplayString(props.updated), 1)
                  ]),
                  createVNode("div", { class: "centered-illustration-wrapper" }, [
                    createVNode(_component_DarkImage, {
                      class: "centered-illustration",
                      src: props.image,
                      "src-dark": props.darkImage,
                      width: props.imageWidth,
                      height: props.imageHeight,
                      alt: "Hero illustration"
                    }, null, 8, ["src", "src-dark", "width", "height"])
                  ])
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-8" data-v-3d49d7e5${_scopeId}><p class="paragraph rem-100 text-light has-text-centered" data-v-3d49d7e5${_scopeId}> Helping people work faster at </p><div class="tabs is-centered pb-6" data-v-3d49d7e5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HeroClients, { logos: unref(customerLogos) }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-8" }, [
                createVNode("p", { class: "paragraph rem-100 text-light has-text-centered" }, " Helping people work faster at "),
                createVNode("div", { class: "tabs is-centered pb-6" }, [
                  createVNode(_component_HeroClients, { logos: unref(customerLogos) }, null, 8, ["logos"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const TermsHeader_vue_vue_type_style_index_0_scoped_3d49d7e5_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/terms/terms-header/TermsHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3d49d7e5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TermsBlock",
  __ssrInlineRender: true,
  props: {
    terms: null,
    title: null,
    subtitle: null,
    updated: null,
    image: null,
    darkImage: null,
    imageWidth: null,
    imageHeight: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TermsHeader = __unplugin_components_0$1;
      const _component_Section = __unplugin_components_0$3;
      const _component_Container = __unplugin_components_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "terms-block" }, _attrs))} data-v-4081d0c3>`);
      _push(ssrRenderComponent(_component_TermsHeader, {
        title: props.title,
        subtitle: props.subtitle,
        updated: props.updated,
        image: props.image,
        "dark-image": props.darkImage,
        "image-width": props.imageWidth,
        "image-height": props.imageHeight
      }, null, _parent));
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content" data-v-4081d0c3${_scopeId2}><div class="terms-content" data-v-4081d0c3${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Markdown), {
                    source: props.terms,
                    breaks: true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "terms-content" }, [
                        createVNode(unref(Markdown), {
                          source: props.terms,
                          breaks: true
                        }, null, 8, ["source"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode("div", { class: "terms-content" }, [
                      createVNode(unref(Markdown), {
                        source: props.terms,
                        breaks: true
                      }, null, 8, ["source"])
                    ])
                  ])
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
const TermsBlock_vue_vue_type_style_index_0_scoped_4081d0c3_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/terms/terms-block/TermsBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4081d0c3"]]);
const termsOfService = `
### Overview


`;
export {
  __unplugin_components_0 as _,
  termsOfService as t
};
