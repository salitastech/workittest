import { a as __unplugin_components_0, _ as __unplugin_components_2$2 } from "./ContactForm.489b31e8.mjs";
import { b as __unplugin_components_2$1, _ as _export_sfc, c as __unplugin_components_0$1, o as __unplugin_components_1, p as __unplugin_components_0$2, s as supportFeatures, f as __unplugin_components_0$3, g as __unplugin_components_0$4, h as _sfc_main$7, q as __unplugin_components_8 } from "../entry-server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, createTextVNode, openBlock, createBlock, Fragment, renderList, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { c as customerLogos } from "./index.b872aad3.mjs";
import "mapbox-gl";
import "@nuxt/devalue";
import "@vueuse/head";
import "pinia";
import "vue-router";
import "@vueuse/core";
import "@vueuse/integrations/useCookies";
import "h3";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@iconify/iconify";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BlockContact",
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
      const _component_MapBox = __unplugin_components_0;
      const _component_Title = __unplugin_components_2$1;
      const _component_ContactForm = __unplugin_components_2$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block-contact" }, _attrs))} data-v-836c17c3><div class="second-circle" data-v-836c17c3></div><div class="subcircle is-1" data-v-836c17c3></div><div class="subcircle is-2" data-v-836c17c3></div><div class="subcircle is-3" data-v-836c17c3></div><div class="map-block" data-v-836c17c3><div class="map-block-inner" data-v-836c17c3>`);
      _push(ssrRenderComponent(_component_MapBox, {
        lng: props.lng,
        lat: props.lat,
        zoom: props.zoom,
        absolute: ""
      }, null, _parent));
      _push(`<div class="contact-card" data-v-836c17c3>`);
      _push(ssrRenderComponent(_component_Title, {
        tag: "h2",
        size: 5,
        weight: "semi",
        narrow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-836c17c3${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="paragraph mb-5" data-v-836c17c3>${ssrInterpolate(props.subtitle)}</p>`);
      _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const BlockContact_vue_vue_type_style_index_0_scoped_836c17c3_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/contact/contact-block/BlockContact.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-836c17c3"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TeamSection",
  __ssrInlineRender: true,
  props: {
    members: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-9 pb-6" }, _attrs))} data-v-0eb02c5e><div class="columns is-multiline b-columns-third-tablet-p" data-v-0eb02c5e><!--[-->`);
      ssrRenderList(props.members, (member, index) => {
        _push(`<div class="column is-3" data-v-0eb02c5e><div class="team-member" data-v-0eb02c5e><img class="mb-2"${ssrRenderAttr("src", member.picture)} alt="Team member picture" data-v-0eb02c5e><div class="meta-info" data-v-0eb02c5e><div class="left" data-v-0eb02c5e>`);
        _push(ssrRenderComponent(_component_Title, {
          size: 6,
          tag: "h3",
          narrow: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(member.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(member.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p data-v-0eb02c5e>${ssrInterpolate(member.role)}</p></div><div class="right" data-v-0eb02c5e><!--[-->`);
        ssrRenderList(member.socialProfiles, (profile, p) => {
          _push(`<a${ssrRenderAttr("href", profile.url)} target="_blank" class="social-profile" data-v-0eb02c5e><i class="iconify"${ssrRenderAttr("data-icon", profile.icon)} data-v-0eb02c5e></i><span class="is-sr-only" data-v-0eb02c5e>${ssrInterpolate(profile.name)}</span></a>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const TeamSection_vue_vue_type_style_index_0_scoped_0eb02c5e_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/company/team-section/TeamSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0eb02c5e"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FoundersSection",
  __ssrInlineRender: true,
  props: {
    founders: null,
    limit: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-02aba448><div class="founders-section" data-v-02aba448><div class="${ssrRenderClass([props.limit && `is-${props.limit}`, "founders-section-inner"])}" data-v-02aba448><!--[-->`);
      ssrRenderList(props.founders.slice(0, props.limit), (founder, index) => {
        _push(`<div class="founder" data-v-02aba448><img${ssrRenderAttr("src", founder.photo)} alt="Founder photo" width="270" height="333" data-v-02aba448>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h3",
          size: 5,
          weight: "semi",
          narrow: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-02aba448${_scopeId}>${ssrInterpolate(founder.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(founder.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="paragraph mb-4 text-primary" data-v-02aba448>${ssrInterpolate(founder.role)}</p><p class="paragraph rem-90" data-v-02aba448>${ssrInterpolate(founder.bio)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const FoundersSection_vue_vue_type_style_index_0_scoped_02aba448_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/company/founders-section/FoundersSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-02aba448"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LogoMarquee",
  __ssrInlineRender: true,
  props: {
    logos: { default: () => [] },
    inverted: { type: Boolean, default: false },
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subtitle = __unplugin_components_0$1;
      const _component_MarqueeText = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["logo-marquee", props.compact && "is-compact"]
      }, _attrs))} data-v-aa14dcec>`);
      if (!props.compact) {
        _push(`<div class="has-text-centered pb-6" data-v-aa14dcec>`);
        _push(ssrRenderComponent(_component_Subtitle, {
          tag: "h3",
          size: 6,
          weight: "bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-gradient px-2" data-v-aa14dcec${_scopeId}> WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500 </span>`);
            } else {
              return [
                createVNode("span", { class: "text-gradient px-2" }, " WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="track" data-v-aa14dcec>`);
      _push(ssrRenderComponent(_component_MarqueeText, {
        repeat: 10,
        duration: 40
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([props.inverted && "is-inverted", "marquee-logos"])}" data-v-aa14dcec${_scopeId}><!--[-->`);
            ssrRenderList(props.logos, (logo, index) => {
              _push2(`<div data-v-aa14dcec${_scopeId}><img class="is-relative mx-6"${ssrRenderAttr("src", logo.logo)} alt="Customer logo" width="110" height="52" data-v-aa14dcec${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["marquee-logos", props.inverted && "is-inverted"]
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.logos, (logo, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("img", {
                      class: "is-relative mx-6",
                      src: logo.logo,
                      alt: "Customer logo",
                      width: "110",
                      height: "52"
                    }, null, 8, ["src"])
                  ]);
                }), 128))
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const LogoMarquee_vue_vue_type_style_index_0_scoped_aa14dcec_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/logo/logo-marquee/LogoMarquee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-aa14dcec"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ValuesIconSection",
  __ssrInlineRender: true,
  props: {
    values: null,
    columns: { default: 3 },
    limit: { default: 4 },
    polkaDots: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const columnClasses = computed(() => [props.columns && `is-${props.columns}`]);
    const blockClasses = computed(() => [
      props.columns === 6 && "mx-auto max-w-7",
      props.columns === 4 && "mx-auto max-w-9"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PolkaDots = __unplugin_components_0$2;
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-027c6f16><div class="${ssrRenderClass([unref(blockClasses), "icon-values"])}" data-v-027c6f16>`);
      if (props.polkaDots) {
        _push(`<div class="polka-wrap polka-1" data-v-027c6f16>`);
        _push(ssrRenderComponent(_component_PolkaDots, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="icon-values-card" data-v-027c6f16><div class="columns b-columns-half-tablet-p" data-v-027c6f16><!--[-->`);
      ssrRenderList(props.values.slice(0, props.limit), (value, index) => {
        _push(`<div class="${ssrRenderClass([unref(columnClasses), "column"])}" data-v-027c6f16><i${ssrRenderAttr("data-icon", value.icon)} class="${ssrRenderClass([`text-${value.color}`, "iconify"])}" data-v-027c6f16></i>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h3",
          size: 6,
          weight: "semi",
          leading: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-027c6f16${_scopeId}>${ssrInterpolate(value.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(value.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="paragraph rem-85" data-v-027c6f16>${ssrInterpolate(value.text)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (props.polkaDots) {
        _push(`<div class="polka-wrap polka-2" data-v-027c6f16>`);
        _push(ssrRenderComponent(_component_PolkaDots, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const ValuesIconSection_vue_vue_type_style_index_0_scoped_027c6f16_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/company/values-icon-section/ValuesIconSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-027c6f16"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CompanyStory",
  __ssrInlineRender: true,
  props: {
    mainTitle: null,
    secondaryTitle: null,
    mainText: null,
    secondaryText: null,
    images: null,
    reverse: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "company-story" }, _attrs))} data-v-4e92bb58><div class="columns b-columns-half-tablet-p" data-v-4e92bb58><div class="column is-6" data-v-4e92bb58><div class="company-story-block" data-v-4e92bb58>`);
      if (!props.reverse) {
        _push(`<div class="text-block is-start" data-v-4e92bb58>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h2",
          size: 1,
          weight: "bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-4e92bb58${_scopeId}>${ssrInterpolate(props.mainTitle)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(props.mainTitle), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="paragraph" data-v-4e92bb58>${ssrInterpolate(props.mainText)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="images-block" data-v-4e92bb58><div class="left" data-v-4e92bb58><img class="pushed"${ssrRenderAttr("src", props.images.imageOne)} alt="story image" width="375" height="562" data-v-4e92bb58></div><div class="right" data-v-4e92bb58><img${ssrRenderAttr("src", props.images.imageTwo)} alt="story image" width="400" height="400" data-v-4e92bb58><img${ssrRenderAttr("src", props.images.imageThree)} alt="story image" width="375" height="562" data-v-4e92bb58></div></div>`);
      if (props.reverse) {
        _push(`<div class="text-block is-start" data-v-4e92bb58>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h2",
          size: 1,
          weight: "bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-4e92bb58${_scopeId}>${ssrInterpolate(props.secondaryTitle)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(props.secondaryTitle), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="paragraph" data-v-4e92bb58>${ssrInterpolate(props.secondaryText)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="column is-6" data-v-4e92bb58><div class="company-story-block" data-v-4e92bb58>`);
      if (props.reverse) {
        _push(`<div class="text-block is-end" data-v-4e92bb58>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h2",
          size: 1,
          weight: "bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-4e92bb58${_scopeId}>${ssrInterpolate(props.mainTitle)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(props.mainTitle), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="paragraph" data-v-4e92bb58>${ssrInterpolate(props.mainText)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="images-block" data-v-4e92bb58><div class="left" data-v-4e92bb58><img class="pushed"${ssrRenderAttr("src", props.images.imageFour)} alt="story image" width="375" height="562" data-v-4e92bb58></div><div class="right" data-v-4e92bb58><img${ssrRenderAttr("src", props.images.imageFive)} alt="story image" width="400" height="400" data-v-4e92bb58><img${ssrRenderAttr("src", props.images.imageSix)} alt="story image" width="375" height="562" data-v-4e92bb58></div></div>`);
      if (!props.reverse) {
        _push(`<div class="text-block is-end" data-v-4e92bb58>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h2",
          size: 1,
          weight: "bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-4e92bb58${_scopeId}>${ssrInterpolate(props.secondaryTitle)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(props.secondaryTitle), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="paragraph" data-v-4e92bb58>${ssrInterpolate(props.secondaryText)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const CompanyStory_vue_vue_type_style_index_0_scoped_4e92bb58_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/company/values-icon-section/story-section/CompanyStory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e92bb58"]]);
const iconValues = [
  {
    icon: "ph:dog-duotone",
    title: "We are human",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    color: "primary"
  },
  {
    icon: "ph:brain-duotone",
    title: "We are focused",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    color: "success"
  },
  {
    icon: "ph:rocket-duotone",
    title: "We are productive",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    color: "yellow"
  },
  {
    icon: "ph:pinwheel-duotone",
    title: "We are creative",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    color: "orange"
  }
];
const team = [
  {
    id: 0,
    picture: "/assets/illustrations/team/3.svg",
    name: "John Gordo",
    role: "CEO & Founder",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 1,
    picture: "/assets/illustrations/team/1.svg",
    name: "Mike Myers",
    role: "CTO & Founder",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 2,
    picture: "/assets/illustrations/team/2.svg",
    name: "Angela Birkin",
    role: "Business Analyst",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 3,
    picture: "/assets/illustrations/team/4.svg",
    name: "Ron Lopez",
    role: "Software Architect",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 4,
    picture: "/assets/illustrations/team/5.svg",
    name: "Garry Oldman",
    role: "Head of Product",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 5,
    picture: "/assets/illustrations/team/6.svg",
    name: "Natacha Biursk",
    role: "Head of Sales",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 6,
    picture: "/assets/illustrations/team/8.svg",
    name: "Hans Bauer",
    role: "Head of Engineering",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 7,
    picture: "/assets/illustrations/team/7.svg",
    name: "Rika Davis",
    role: "Marketing Associate",
    socialProfiles: [
      {
        name: "Linkedin",
        icon: "fa:linkedin",
        url: "https://linkedin.com"
      },
      {
        name: "GitHub",
        icon: "fa:github",
        url: "https://github.com"
      }
    ]
  }
];
const founders = [
  {
    photo: "data:image/gif;base64,replace_with_your_image",
    name: "Adebowale Adiatu",
    role: "Founder & CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Section = __unplugin_components_0$3;
      const _component_Container = __unplugin_components_0$4;
      const _component_CompanyStory = __unplugin_components_2;
      const _component_SectionTitle = _sfc_main$7;
      const _component_ValuesIconSection = __unplugin_components_4;
      const _component_LogoMarquee = __unplugin_components_5;
      const _component_FoundersSection = __unplugin_components_6;
      const _component_TeamSection = __unplugin_components_7;
      const _component_StackedSection = __unplugin_components_8;
      const _component_BlockContact = __unplugin_components_9;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CompanyStory, {
                    "main-title": "Our Story",
                    "secondary-title": "Our Mission",
                    "main-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille\n              pellit, qui permulcet sensum voluptate. Hoc non est positum in\n              nostra actione. Primum in nostrane potestate est, quid\n              meminerimus? Duo Reges: constructio interrete. Respondent extrema\n              primis, media utrisque, omnia omnibus. Non risu potius quam\n              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut\n              etiam non dicente te intellego; Quae tamen a te agetur non melior,\n              quam illae sunt.",
                    "secondary-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille\n              pellit, qui permulcet sensum voluptate. Hoc non est positum in\n              nostra actione. Primum in nostrane potestate est, quid\n              meminerimus? Duo Reges: constructio interrete. Respondent extrema\n              primis, media utrisque, omnia omnibus. Non risu potius quam\n              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut\n              etiam non dicente te intellego; Quae tamen a te agetur non melior,\n              quam illae sunt.",
                    images: {
                      imageOne: "data:image/gif;base64,replace_with_your_image",
                      imageTwo: "data:image/gif;base64,replace_with_your_image",
                      imageThree: "data:image/gif;base64,replace_with_your_image",
                      imageFour: "data:image/gif;base64,replace_with_your_image",
                      imageFive: "data:image/gif;base64,replace_with_your_image",
                      imageSix: "data:image/gif;base64,replace_with_your_image"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CompanyStory, {
                      "main-title": "Our Story",
                      "secondary-title": "Our Mission",
                      "main-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille\n              pellit, qui permulcet sensum voluptate. Hoc non est positum in\n              nostra actione. Primum in nostrane potestate est, quid\n              meminerimus? Duo Reges: constructio interrete. Respondent extrema\n              primis, media utrisque, omnia omnibus. Non risu potius quam\n              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut\n              etiam non dicente te intellego; Quae tamen a te agetur non melior,\n              quam illae sunt.",
                      "secondary-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille\n              pellit, qui permulcet sensum voluptate. Hoc non est positum in\n              nostra actione. Primum in nostrane potestate est, quid\n              meminerimus? Duo Reges: constructio interrete. Respondent extrema\n              primis, media utrisque, omnia omnibus. Non risu potius quam\n              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut\n              etiam non dicente te intellego; Quae tamen a te agetur non melior,\n              quam illae sunt.",
                      images: {
                        imageOne: "data:image/gif;base64,replace_with_your_image",
                        imageTwo: "data:image/gif;base64,replace_with_your_image",
                        imageThree: "data:image/gif;base64,replace_with_your_image",
                        imageFour: "data:image/gif;base64,replace_with_your_image",
                        imageFive: "data:image/gif;base64,replace_with_your_image",
                        imageSix: "data:image/gif;base64,replace_with_your_image"
                      }
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
                  createVNode(_component_CompanyStory, {
                    "main-title": "Our Story",
                    "secondary-title": "Our Mission",
                    "main-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille\n              pellit, qui permulcet sensum voluptate. Hoc non est positum in\n              nostra actione. Primum in nostrane potestate est, quid\n              meminerimus? Duo Reges: constructio interrete. Respondent extrema\n              primis, media utrisque, omnia omnibus. Non risu potius quam\n              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut\n              etiam non dicente te intellego; Quae tamen a te agetur non melior,\n              quam illae sunt.",
                    "secondary-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille\n              pellit, qui permulcet sensum voluptate. Hoc non est positum in\n              nostra actione. Primum in nostrane potestate est, quid\n              meminerimus? Duo Reges: constructio interrete. Respondent extrema\n              primis, media utrisque, omnia omnibus. Non risu potius quam\n              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut\n              etiam non dicente te intellego; Quae tamen a te agetur non melior,\n              quam illae sunt.",
                    images: {
                      imageOne: "data:image/gif;base64,replace_with_your_image",
                      imageTwo: "data:image/gif;base64,replace_with_your_image",
                      imageThree: "data:image/gif;base64,replace_with_your_image",
                      imageFour: "data:image/gif;base64,replace_with_your_image",
                      imageFive: "data:image/gif;base64,replace_with_your_image",
                      imageSix: "data:image/gif;base64,replace_with_your_image"
                    }
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "Our Company Values",
                    subtitle: "Dedicated Team"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ValuesIconSection, {
                    values: unref(iconValues),
                    "polka-dots": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_LogoMarquee, {
                    logos: unref(customerLogos),
                    compact: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Our Company Values",
                      subtitle: "Dedicated Team"
                    }),
                    createVNode(_component_ValuesIconSection, {
                      values: unref(iconValues),
                      "polka-dots": ""
                    }, null, 8, ["values"]),
                    createVNode(_component_LogoMarquee, {
                      logos: unref(customerLogos),
                      compact: ""
                    }, null, 8, ["logos"])
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
                    title: "Our Company Values",
                    subtitle: "Dedicated Team"
                  }),
                  createVNode(_component_ValuesIconSection, {
                    values: unref(iconValues),
                    "polka-dots": ""
                  }, null, 8, ["values"]),
                  createVNode(_component_LogoMarquee, {
                    logos: unref(customerLogos),
                    compact: ""
                  }, null, 8, ["logos"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { color: "grey" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "Meet Our Team",
                    subtitle: "Vision, Innovation & Service"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FoundersSection, {
                    founders: unref(founders),
                    limit: 1
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TeamSection, { members: unref(team) }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Meet Our Team",
                      subtitle: "Vision, Innovation & Service"
                    }),
                    createVNode(_component_FoundersSection, {
                      founders: unref(founders),
                      limit: 1
                    }, null, 8, ["founders"]),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode(_component_TeamSection, { members: unref(team) }, null, 8, ["members"])
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
                  createVNode(_component_SectionTitle, {
                    title: "Meet Our Team",
                    subtitle: "Vision, Innovation & Service"
                  }),
                  createVNode(_component_FoundersSection, {
                    founders: unref(founders),
                    limit: 1
                  }, null, 8, ["founders"]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_TeamSection, { members: unref(team) }, null, 8, ["members"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "Put your clipboard at work",
                    subtitle: "Get Started Fast"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_StackedSection, {
                    features: unref(supportFeatures),
                    image: "/assets/illustrations/features/calling.svg",
                    "dark-image": "/assets/illustrations/features/calling.svg",
                    "image-width": "500",
                    "image-height": "500",
                    rounded: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Put your clipboard at work",
                      subtitle: "Get Started Fast"
                    }),
                    createVNode(_component_StackedSection, {
                      features: unref(supportFeatures),
                      image: "/assets/illustrations/features/calling.svg",
                      "dark-image": "/assets/illustrations/features/calling.svg",
                      "image-width": "500",
                      "image-height": "500",
                      rounded: ""
                    }, null, 8, ["features"])
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
                    title: "Put your clipboard at work",
                    subtitle: "Get Started Fast"
                  }),
                  createVNode(_component_StackedSection, {
                    features: unref(supportFeatures),
                    image: "/assets/illustrations/features/calling.svg",
                    "dark-image": "/assets/illustrations/features/calling.svg",
                    "image-width": "500",
                    "image-height": "500",
                    rounded: ""
                  }, null, 8, ["features"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BlockContact, {
                    title: "Contact Us",
                    subtitle: "Fill out the form below to reach us",
                    lng: 12.550343,
                    lat: 55.665957,
                    zoom: 16
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BlockContact, {
                      title: "Contact Us",
                      subtitle: "Fill out the form below to reach us",
                      lng: 12.550343,
                      lat: 55.665957,
                      zoom: 16
                    }, null, 8, ["lng", "lat"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Container, null, {
                default: withCtx(() => [
                  createVNode(_component_BlockContact, {
                    title: "Contact Us",
                    subtitle: "Fill out the form below to reach us",
                    lng: 12.550343,
                    lat: 55.665957,
                    zoom: 16
                  }, null, 8, ["lng", "lat"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
