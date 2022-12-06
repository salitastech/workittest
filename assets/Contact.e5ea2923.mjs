import { g as genericFaq, _ as __unplugin_components_5 } from "./index.02f1929b.mjs";
import { b as __unplugin_components_2, _ as _export_sfc, f as __unplugin_components_0$1, g as __unplugin_components_0$2, h as _sfc_main$2 } from "../entry-server.mjs";
import { _ as __unplugin_components_2$1, a as __unplugin_components_0 } from "./ContactForm.489b31e8.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as __unplugin_components_2$2 } from "./PageTitle.11e34768.mjs";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
import "mapbox-gl";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SideContact",
  __ssrInlineRender: true,
  props: {
    title: null,
    subtitle: null,
    lng: null,
    lat: null,
    zoom: { default: 16 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2;
      const _component_ContactForm = __unplugin_components_2$1;
      const _component_MapBox = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "side-contact" }, _attrs))} data-v-b32729c2><div class="side-contact-inner" data-v-b32729c2><div class="columns" data-v-b32729c2><div class="column is-5" data-v-b32729c2><div class="contact-card" data-v-b32729c2>`);
      _push(ssrRenderComponent(_component_Title, {
        tag: "h2",
        size: 5,
        weight: "semi",
        narrow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-b32729c2${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="paragraph mb-5" data-v-b32729c2>${ssrInterpolate(props.subtitle)}</p>`);
      _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</div></div><div class="column is-7" data-v-b32729c2><div class="contact-map" data-v-b32729c2>`);
      _push(ssrRenderComponent(_component_MapBox, {
        lng: props.lng,
        lat: props.lat,
        zoom: props.zoom,
        absolute: ""
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const SideContact_vue_vue_type_style_index_0_scoped_b32729c2_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/contact/contact-side/SideContact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b32729c2"]]);
const contactInfo = [
  {
    icon: "ph:envelope-duotone",
    title: "Email",
    info: "contact@vulk.io",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.",
    color: "primary"
  },
  {
    icon: "ph:phone-duotone",
    title: "Phone",
    info: "+1 44 598-5598",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.",
    color: "success"
  },
  {
    icon: "ph:map-pin-duotone",
    title: "Location",
    info: "28, Baker Street, Los Angeles, CA",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.",
    color: "yellow"
  },
  {
    icon: "ph:chat-circle-text-duotone",
    title: "Live Chat",
    info: "https://support.vulk.io",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate.",
    color: "orange"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __unplugin_components_0$1;
      const _component_Container = __unplugin_components_0$2;
      const _component_PageTitle = __unplugin_components_2$2;
      const _component_SideContact = __unplugin_components_3;
      const _component_ContactInfo = resolveComponent("ContactInfo");
      const _component_SectionTitle = _sfc_main$2;
      const _component_FaqListBoxed = __unplugin_components_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    title: "Contact Us",
                    subtitle: "Reach Out"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SideContact, {
                    title: "Contact Us",
                    subtitle: "Fill out the form below to reach us",
                    lng: 12.550343,
                    lat: 55.665957,
                    zoom: 16
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ContactInfo, { infos: unref(contactInfo) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      title: "Contact Us",
                      subtitle: "Reach Out"
                    }),
                    createVNode(_component_SideContact, {
                      title: "Contact Us",
                      subtitle: "Fill out the form below to reach us",
                      lng: 12.550343,
                      lat: 55.665957,
                      zoom: 16
                    }, null, 8, ["lng", "lat"]),
                    createVNode(_component_ContactInfo, { infos: unref(contactInfo) }, null, 8, ["infos"])
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
                    title: "Contact Us",
                    subtitle: "Reach Out"
                  }),
                  createVNode(_component_SideContact, {
                    title: "Contact Us",
                    subtitle: "Fill out the form below to reach us",
                    lng: 12.550343,
                    lat: 55.665957,
                    zoom: 16
                  }, null, 8, ["lng", "lat"]),
                  createVNode(_component_ContactInfo, { infos: unref(contactInfo) }, null, 8, ["infos"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, {
        color: "grey",
        wave: "wave-1",
        "shape-color": "white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "Read our FAQs",
                    subtitle: "Have a Question?"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FaqListBoxed, { items: unref(genericFaq) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Read our FAQs",
                      subtitle: "Have a Question?"
                    }),
                    createVNode(_component_FaqListBoxed, { items: unref(genericFaq) }, null, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitle, {
                    title: "Read our FAQs",
                    subtitle: "Have a Question?"
                  }),
                  createVNode(_component_FaqListBoxed, { items: unref(genericFaq) }, null, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
