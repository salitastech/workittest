import devalue from "@nuxt/devalue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlotInner, ssrGetDirectiveProps, ssrRenderVNode, renderToString } from "vue/server-renderer";
import { Head, createHead, renderHeadToString } from "@vueuse/head";
import { defineComponent, computed, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString, resolveComponent, openBlock, createBlock, Fragment, renderList, ref, createTextVNode, createCommentVNode, renderSlot, useCssModule, h, useSlots, resolveDirective, onMounted, markRaw, defineAsyncComponent, watch, resolveDynamicComponent, createApp as createApp$1 } from "vue";
import { defineStore, createPinia } from "pinia";
import { createRouter as createRouter$1, createMemoryHistory, START_LOCATION, useRoute, RouterView } from "vue-router";
import { useElementVisibility, usePreferredDark } from "@vueuse/core";
import { createCookies } from "@vueuse/integrations/useCookies";
import { setCookie } from "h3";
import { useI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import Module from "@iconify/iconify";
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    size: { default: void 0 },
    weight: { default: void 0 },
    inverted: { type: Boolean, default: false },
    narrow: { type: Boolean, default: false },
    leading: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false },
    tag: { default: "h2" }
  },
  setup(__props) {
    const props = __props;
    const titleClasses = computed(() => [
      props.size && `is-${props.size}`,
      props.weight && `is-${props.weight}`,
      props.inverted && `is-inverted`,
      props.narrow && `is-narrow`,
      props.leading && `is-leading`,
      props.uppercase && `is-uppercase`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.tag == "h1") {
        _push(`<h1${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: ["title", unref(titleClasses)]
        }))} data-v-44ce7835>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tag == "h2") {
        _push(`<h2${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: ["title", unref(titleClasses)]
        }))} data-v-44ce7835>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tag == "h3") {
        _push(`<h3${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: ["title", unref(titleClasses)]
        }))} data-v-44ce7835>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const Title_vue_vue_type_style_index_0_scoped_44ce7835_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/title/Title.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const __unplugin_components_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-44ce7835"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "IconSection",
  __ssrInlineRender: true,
  props: {
    features: { default: () => [] },
    centered: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6 mx-auto max-w-10" }, _attrs))} data-v-245fd3d3><div class="${ssrRenderClass([props.centered && "is-centered", "columns is-multiline b-columns-third-tablet-p"])}" data-v-245fd3d3><!--[-->`);
      ssrRenderList(props.features, (feature, index) => {
        _push(`<div class="column is-4" data-v-245fd3d3><div class="py-4" data-v-245fd3d3><img class="product-icon"${ssrRenderAttr("src", feature.icon)} alt="Icon feature" width="150" height="150" data-v-245fd3d3>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h3",
          size: 5,
          leading: "",
          inverted: props.inverted
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-245fd3d3${_scopeId}>${ssrInterpolate(feature.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(feature.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="paragraph rem-90" data-v-245fd3d3>${ssrInterpolate(feature.content)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const IconSection_vue_vue_type_style_index_0_scoped_245fd3d3_lang = "";
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/features/icon-section/IconSection.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __unplugin_components_14 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-245fd3d3"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    label: null,
    color: { default: void 0 },
    shape: { default: "curved" },
    outlined: { type: Boolean, default: false },
    elevated: { type: Boolean, default: false },
    remove: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<small${ssrRenderAttrs(mergeProps({
        class: ["tag", [
          props.color && "is-" + props.color,
          props.shape && `is-${props.shape}`,
          props.outlined && "is-outlined",
          props.elevated && "is-elevated",
          props.remove && "is-delete"
        ]]
      }, _attrs))} data-v-b53c083d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.label)}`);
      }, _push, _parent);
      _push(`</small>`);
    };
  }
});
const Tag_vue_vue_type_style_index_0_scoped_b53c083d_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/tag/Tag.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const __unplugin_components_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-b53c083d"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "Tags",
  __ssrInlineRender: true,
  props: {
    addons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tags", [props.addons && "has-addons"]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/tag/Tags.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "ResourceGridItem",
  __ssrInlineRender: true,
  props: {
    post: null,
    upsideDown: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tags = _sfc_main$N;
      const _component_Tag = __unplugin_components_1$8;
      const _component_Title = __unplugin_components_2$3;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-36f38ad6>`);
      if (props.upsideDown) {
        _push(`<div class="card-image" data-v-36f38ad6><img class="block"${ssrRenderAttr("src", props.post.image)} alt="Post image" width="360" height="200" data-v-36f38ad6></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card-content" data-v-36f38ad6><div class="media is-align-items-center" data-v-36f38ad6><div class="media-content" data-v-36f38ad6>`);
      _push(ssrRenderComponent(_component_Tags, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.post.categories, (category, c) => {
              _push2(ssrRenderComponent(_component_Tag, {
                key: c,
                label: category.name
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.post.categories, (category, c) => {
                return openBlock(), createBlock(_component_Tag, {
                  key: c,
                  label: category.name
                }, null, 8, ["label"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Title, {
        tag: "h3",
        size: 6,
        weight: "semi"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-36f38ad6${_scopeId}>${ssrInterpolate(props.post.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.post.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="is-flex is-align-items-center is-justify-content-space-between" data-v-36f38ad6><div data-v-36f38ad6>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "is-flex is-align-items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mr-2" data-v-36f38ad6${_scopeId}>Read More</span><i class="iconify" data-icon="feather:arrow-right" data-v-36f38ad6${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "mr-2" }, "Read More"),
              createVNode("i", {
                class: "iconify",
                "data-icon": "feather:arrow-right"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-stats is-flex is-align-items-center" data-v-36f38ad6><div class="is-flex is-align-items-center" data-v-36f38ad6><i class="iconify" data-icon="feather:heart" data-v-36f38ad6></i><span class="ml-1" data-v-36f38ad6>${ssrInterpolate(props.post.likes)}</span></div></div></div></div>`);
      if (!props.upsideDown) {
        _push(`<div class="card-image" data-v-36f38ad6><img class="block"${ssrRenderAttr("src", props.post.image)} alt="Post image" width="360" height="200" data-v-36f38ad6></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const ResourceGridItem_vue_vue_type_style_index_0_scoped_36f38ad6_lang = "";
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/blog/resource-grid-item/ResourceGridItem.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const __unplugin_components_0$f = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-36f38ad6"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "ResourceGrid",
  __ssrInlineRender: true,
  props: {
    posts: { default: () => [] },
    upsideDown: { type: Boolean, default: false },
    limit: { default: 20 },
    sideGrid: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const columnClasses = computed(() => [props.sideGrid ? "is-6" : "is-4"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ResourceGridItem = __unplugin_components_0$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "resource-grid" }, _attrs))} data-v-e2ab0138><div class="columns b-columns-half-tablet-p is-multiline" data-v-e2ab0138><!--[-->`);
      ssrRenderList(props.posts.slice(0, props.limit), (post, index) => {
        _push(`<div class="${ssrRenderClass([unref(columnClasses), "column"])}" data-v-e2ab0138>`);
        _push(ssrRenderComponent(_component_ResourceGridItem, {
          post,
          "upside-down": props.upsideDown
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const ResourceGrid_vue_vue_type_style_index_0_scoped_e2ab0138_lang = "";
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/blog/resource-grid/ResourceGrid.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __unplugin_components_13 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-e2ab0138"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "AvatarSimple",
  __ssrInlineRender: true,
  props: {
    size: { default: void 0 },
    picture: null,
    squared: { type: Boolean, default: false },
    badge: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const avatarSimpleClasses = computed(() => [
      props.size && `is-${props.size}`,
      props.squared && `is-squared`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["avatar", unref(avatarSimpleClasses)]
      }, _attrs))} data-v-c54a15df>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<img${ssrRenderAttr("src", props.picture)} class="avatar-image" alt="placeholder" height="38" width="38" data-v-c54a15df>`);
        if (props.badge) {
          _push(`<img${ssrRenderAttr("src", props.badge)} class="avatar-badge" alt="Badge" height="18" width="18" data-v-c54a15df>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const AvatarSimple_vue_vue_type_style_index_0_scoped_c54a15df_lang = "";
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/avatar/AvatarSimple.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const __unplugin_components_0$e = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-c54a15df"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    icon: null,
    size: { default: void 0 },
    color: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    const iconClasses = computed(() => [
      props.size && `rem-${props.size}`,
      props.color && `text-${props.color}`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        key: props.icon
      }, _attrs))} data-v-ff362c9e>`);
      if (unref(isIconify)) {
        _push(`<i aria-hidden="true" class="${ssrRenderClass([unref(iconClasses), "iconify"])}"${ssrRenderAttr("data-icon", props.icon)} data-v-ff362c9e></i>`);
      } else {
        _push(`<i aria-hidden="true" class="${ssrRenderClass(props.icon)}" data-v-ff362c9e></i>`);
      }
      _push(`</span>`);
    };
  }
});
const Icon_vue_vue_type_style_index_0_scoped_ff362c9e_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/icon/Icon.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const __unplugin_components_0$d = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-ff362c9e"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    tabs: null,
    selected: { default: void 0 },
    type: { default: void 0 },
    alignment: { default: void 0 },
    slider: { type: Boolean },
    slow: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const activeValue = ref(props.selected);
    const sliderClass = computed(() => {
      if (!props.slider) {
        return "";
      }
      if (props.type === "rounded") {
        if (props.tabs.length === 3) {
          return "is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-slider";
        }
        return "";
      }
      if (!props.type) {
        if (props.tabs.length === 3) {
          return "is-squared is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-squared is-slider";
        }
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __unplugin_components_0$d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tabs-wrapper", [unref(sliderClass)]]
      }, _attrs))} data-v-8ad37402><div class="tabs-inner" data-v-8ad37402><div class="${ssrRenderClass([[
        props.alignment === "centered" && "is-centered",
        props.alignment === "right" && "is-right",
        props.type === "rounded" && !props.slider && "is-toggle is-toggle-rounded",
        props.type === "toggle" && "is-toggle",
        props.type === "boxed" && "is-boxed"
      ], "tabs"])}" data-v-8ad37402><ul data-v-8ad37402><!--[-->`);
      ssrRenderList(__props.tabs, (tab, key) => {
        _push(`<li class="${ssrRenderClass([activeValue.value === tab.value && "is-active"])}" data-v-8ad37402>`);
        ssrRenderSlot(_ctx.$slots, "tab-link", { activeValue: activeValue.value }, () => {
          _push(`<a data-v-8ad37402>`);
          if (tab.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              icon: tab.icon
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="px-1" data-v-8ad37402>${ssrInterpolate(tab.label)}</span></a>`);
        }, _push, _parent);
        _push(`</li>`);
      });
      _push(`<!--]-->`);
      if (unref(sliderClass)) {
        _push(`<li class="tab-naver" data-v-8ad37402></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div><div class="tab-content is-active" data-v-8ad37402>`);
      ssrRenderSlotInner(_ctx.$slots, "tab", { activeValue: activeValue.value }, null, _push, _parent, null, true);
      _push(`</div></div>`);
    };
  }
});
const Tabs_vue_vue_type_style_index_0_scoped_8ad37402_lang = "";
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/tabs/Tabs.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const __unplugin_components_0$c = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-8ad37402"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "TestimonialsTabbed",
  __ssrInlineRender: true,
  props: {
    trainees: { default: () => [] },
    mentors: { default: () => [] },
    inverted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tabs = __unplugin_components_0$c;
      const _component_Tag = __unplugin_components_1$8;
      const _component_Title = __unplugin_components_2$3;
      const _component_AvatarSimple = __unplugin_components_0$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabbed-testimonials py-6" }, _attrs))} data-v-e5ff263a>`);
      _push(ssrRenderComponent(_component_Tabs, {
        slider: "",
        alignment: "centered",
        selected: "trainees",
        tabs: [
          { label: "Customers", value: "trainees" },
          { label: "Artisans", value: "mentors" }
        ]
      }, {
        tab: withCtx(({ activeValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (activeValue === "trainees") {
              _push2(`<div data-v-e5ff263a${_scopeId}><div class="tabbed-grid" data-v-e5ff263a${_scopeId}><div class="columns is-multiline" data-v-e5ff263a${_scopeId}><!--[-->`);
              ssrRenderList(props.trainees, (trainee, t) => {
                _push2(`<div class="column is-6" data-v-e5ff263a${_scopeId}><div class="tabbed-grid-item" data-v-e5ff263a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Tag, {
                  label: "Customer Stories",
                  class: "mb-4"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Title, {
                  tag: "h3",
                  size: 6,
                  weight: "semi"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` &quot;${ssrInterpolate(trainee.title)}&quot; `);
                    } else {
                      return [
                        createTextVNode(' "' + toDisplayString(trainee.title) + '" ', 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="paragraph rem-90 mb-4" data-v-e5ff263a${_scopeId}>${ssrInterpolate(trainee.content)}</p><div class="member" data-v-e5ff263a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AvatarSimple, {
                  picture: trainee.member.picture,
                  size: "medium",
                  squared: ""
                }, null, _parent2, _scopeId));
                _push2(`<div class="meta" data-v-e5ff263a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Title, {
                  tag: "h3",
                  size: 7,
                  weight: "semi",
                  narrow: ""
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(trainee.member.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(trainee.member.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="paragraph rem-90" data-v-e5ff263a${_scopeId}>${ssrInterpolate(trainee.member.role)}</p></div></div></div></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else if (activeValue === "mentors") {
              _push2(`<div data-v-e5ff263a${_scopeId}><div class="tabbed-grid" data-v-e5ff263a${_scopeId}><div class="columns is-multiline" data-v-e5ff263a${_scopeId}><!--[-->`);
              ssrRenderList(props.mentors, (mentor, m) => {
                _push2(`<div class="column is-6" data-v-e5ff263a${_scopeId}><div class="tabbed-grid-item" data-v-e5ff263a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Tag, {
                  label: "Mentor Stories",
                  class: "mb-4"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Title, {
                  tag: "h3",
                  size: 6,
                  weight: "semi"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` &quot;${ssrInterpolate(mentor.title)}&quot; `);
                    } else {
                      return [
                        createTextVNode(' "' + toDisplayString(mentor.title) + '" ', 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="paragraph rem-90 mb-4" data-v-e5ff263a${_scopeId}>${ssrInterpolate(mentor.content)}</p><div class="member" data-v-e5ff263a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AvatarSimple, {
                  picture: mentor.member.picture,
                  size: "medium",
                  squared: ""
                }, null, _parent2, _scopeId));
                _push2(`<div class="meta" data-v-e5ff263a${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Title, {
                  tag: "h3",
                  size: 7,
                  weight: "semi",
                  narrow: ""
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(mentor.member.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(mentor.member.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="paragraph rem-90" data-v-e5ff263a${_scopeId}>${ssrInterpolate(mentor.member.role)}</p></div></div></div></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              activeValue === "trainees" ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "tabbed-grid" }, [
                  createVNode("div", { class: "columns is-multiline" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.trainees, (trainee, t) => {
                      return openBlock(), createBlock("div", {
                        key: t,
                        class: "column is-6"
                      }, [
                        createVNode("div", { class: "tabbed-grid-item" }, [
                          createVNode(_component_Tag, {
                            label: "Customer Stories",
                            class: "mb-4"
                          }),
                          createVNode(_component_Title, {
                            tag: "h3",
                            size: 6,
                            weight: "semi"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(' "' + toDisplayString(trainee.title) + '" ', 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("p", { class: "paragraph rem-90 mb-4" }, toDisplayString(trainee.content), 1),
                          createVNode("div", { class: "member" }, [
                            createVNode(_component_AvatarSimple, {
                              picture: trainee.member.picture,
                              size: "medium",
                              squared: ""
                            }, null, 8, ["picture"]),
                            createVNode("div", { class: "meta" }, [
                              createVNode(_component_Title, {
                                tag: "h3",
                                size: 7,
                                weight: "semi",
                                narrow: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(trainee.member.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", { class: "paragraph rem-90" }, toDisplayString(trainee.member.role), 1)
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])) : activeValue === "mentors" ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "tabbed-grid" }, [
                  createVNode("div", { class: "columns is-multiline" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.mentors, (mentor, m) => {
                      return openBlock(), createBlock("div", {
                        key: m,
                        class: "column is-6"
                      }, [
                        createVNode("div", { class: "tabbed-grid-item" }, [
                          createVNode(_component_Tag, {
                            label: "Mentor Stories",
                            class: "mb-4"
                          }),
                          createVNode(_component_Title, {
                            tag: "h3",
                            size: 6,
                            weight: "semi"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(' "' + toDisplayString(mentor.title) + '" ', 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("p", { class: "paragraph rem-90 mb-4" }, toDisplayString(mentor.content), 1),
                          createVNode("div", { class: "member" }, [
                            createVNode(_component_AvatarSimple, {
                              picture: mentor.member.picture,
                              size: "medium",
                              squared: ""
                            }, null, 8, ["picture"]),
                            createVNode("div", { class: "meta" }, [
                              createVNode(_component_Title, {
                                tag: "h3",
                                size: 7,
                                weight: "semi",
                                narrow: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(mentor.member.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", { class: "paragraph rem-90" }, toDisplayString(mentor.member.role), 1)
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const TestimonialsTabbed_vue_vue_type_style_index_0_scoped_e5ff263a_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/testimonials/testimonials-tabbed/TestimonialsTabbed.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const __unplugin_components_12 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-e5ff263a"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  props: {
    number: null
  },
  setup(__props) {
    const props = __props;
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if (props.number) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          ref_key: "target",
          ref: target,
          class: ["counter", unref(targetIsVisible) && "counter-active"],
          style: `--end: ${Math.round((_a = props.number) != null ? _a : 0)}`
        }, _attrs))} data-v-f709bb8d></span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const Counter_vue_vue_type_style_index_0_scoped_f709bb8d_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/counter/Counter.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const __unplugin_components_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-f709bb8d"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "ContentBlockI",
  __ssrInlineRender: true,
  props: {
    counters: null,
    icons: { type: Boolean, default: true },
    inverted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const textClasses = computed(() => [props.inverted && "text-light"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$3;
      const _component_Counter = __unplugin_components_1$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-3be8fd32><div class="columns b-columns-half-tablet-p is-multiline has-text-centered" data-v-3be8fd32><!--[-->`);
      ssrRenderList(props.counters, (counter, index) => {
        _push(`<div class="column is-3" data-v-3be8fd32><div class="py-4" data-v-3be8fd32>`);
        if (props.icons) {
          _push(`<div class="counter-icon" data-v-3be8fd32><i class="iconify"${ssrRenderAttr("data-icon", counter.icon)} data-v-3be8fd32></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Title, {
          tag: "h3",
          size: 3,
          weight: "bold",
          narrow: "",
          inverted: props.inverted
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Counter, {
                number: counter.number
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Counter, {
                  number: counter.number
                }, null, 8, ["number"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="${ssrRenderClass([unref(textClasses), "paragraph pt-2 max-w-3 rem-95"])}" data-v-3be8fd32>${ssrInterpolate(counter.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const ContentBlockI_vue_vue_type_style_index_0_scoped_3be8fd32_lang = "";
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/navbar-blocks/content-blocks/ContentBlockI.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __unplugin_components_11 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-3be8fd32"]]);
let universalCookies;
const useUniversalCookies = (params, options) => {
  return universalCookies(params, options);
};
const initCookiesPlugin = (event) => {
  universalCookies = createCookies(event == null ? void 0 : event.req);
  if (!event) {
    return;
  }
  useUniversalCookies().addChangeListener((change) => {
    if (event.res.headersSent) {
      return;
    }
    if (change.value === void 0) {
      const unsetOptions = Object.assign({}, change.options);
      unsetOptions.maxAge = -1;
      setCookie(event, change.name, "", change.options);
    } else {
      setCookie(event, change.name, change.value, change.options);
    }
  });
};
const DARK_MODE_BODY_CLASS = "is-dark";
const useDarkmode = defineStore("darkmode", () => {
  const preferredDark = usePreferredDark();
  const cookies = useUniversalCookies(["color-schema"]);
  const colorSchema = computed({
    get: () => {
      return cookies.get("color-schema");
    },
    set: (value) => {
      if (value === void 0) {
        cookies.remove("color-schema", {
          sameSite: "lax",
          path: "/"
        });
      } else {
        cookies.set("color-schema", value, {
          sameSite: "lax",
          path: "/"
        });
      }
    }
  });
  const isDark = computed({
    get() {
      return colorSchema.value === void 0 ? preferredDark.value : colorSchema.value === "dark";
    },
    set(v) {
      colorSchema.value = v ? "dark" : "light";
    }
  });
  const htmlClass = computed(() => isDark.value ? DARK_MODE_BODY_CLASS : "");
  const onChange = (event) => {
    const target = event.target;
    isDark.value = !target.checked;
  };
  return {
    isDark,
    htmlClass,
    onChange
  };
});
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "DarkImage",
  __ssrInlineRender: true,
  props: {
    src: null,
    srcDark: { default: void 0 },
    alt: { default: void 0 },
    width: { default: "800" },
    height: { default: "600" },
    inline: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const darkmode = useDarkmode();
    const classes = computed(() => props.inline ? "inline" : "block");
    const src = computed(
      () => darkmode.isDark && props.srcDark ? props.srcDark : props.src
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        class: unref(classes),
        src: unref(src),
        alt: props.alt,
        width: props.width,
        height: props.height,
        loading: "lazy"
      }, _attrs))} data-v-bd8d0274>`);
    };
  }
});
const DarkImage_vue_vue_type_style_index_0_scoped_bd8d0274_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/image/DarkImage.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const __unplugin_components_3$5 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-bd8d0274"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    padding: { default: "1.5rem" },
    shape: { default: "curved" },
    shadow: { type: Boolean, default: false },
    muted: { type: Boolean, default: false },
    overflow: { type: Boolean, default: true },
    animated: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const cardClasses = computed(() => [
      props.shape && `is-${props.shape}`,
      props.animated && `is-animated`,
      props.muted && `is-muted`,
      props.overflow && `card-overflow`,
      !props.shadow ? `card-shadow-hover` : `card-shadow`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--754acc10": props.padding
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["card", unref(cardClasses)]
      }, _attrs, _cssVars))} data-v-b3727ad3>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`<div class="card-content" data-v-b3727ad3>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_b3727ad3_lang = "";
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/card/Card.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const __unplugin_components_0$b = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-b3727ad3"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "RecommendedServicesGrid",
  __ssrInlineRender: true,
  props: {
    projects: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Card = __unplugin_components_0$b;
      const _component_DarkImage = __unplugin_components_3$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "columns is-multiline b-columns-half-tablet-p" }, _attrs))} data-v-694b3cb5><!--[-->`);
      ssrRenderList(props.projects, (project, index) => {
        _push(`<div class="column is-4" data-v-694b3cb5>`);
        _push(ssrRenderComponent(_component_RouterLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Card, { class: "project-card" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DarkImage, {
                      class: "project-card-image",
                      src: project.image,
                      alt: "Project image",
                      width: "400",
                      height: "300"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="project-card-content" data-v-694b3cb5${_scopeId2}><h3 data-v-694b3cb5${_scopeId2}>${ssrInterpolate(project.title)}</h3><p data-v-694b3cb5${_scopeId2}>${ssrInterpolate(project.subtitle)}</p></div>`);
                  } else {
                    return [
                      createVNode(_component_DarkImage, {
                        class: "project-card-image",
                        src: project.image,
                        alt: "Project image",
                        width: "400",
                        height: "300"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "project-card-content" }, [
                        createVNode("h3", null, toDisplayString(project.title), 1),
                        createVNode("p", null, toDisplayString(project.subtitle), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Card, { class: "project-card" }, {
                  default: withCtx(() => [
                    createVNode(_component_DarkImage, {
                      class: "project-card-image",
                      src: project.image,
                      alt: "Project image",
                      width: "400",
                      height: "300"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "project-card-content" }, [
                      createVNode("h3", null, toDisplayString(project.title), 1),
                      createVNode("p", null, toDisplayString(project.subtitle), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const RecommendedServicesGrid_vue_vue_type_style_index_0_scoped_694b3cb5_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/workit/RecommendedServicesGrid.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-694b3cb5"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "ProfileWrapper",
  __ssrInlineRender: true,
  props: {
    large: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["profile-wrapper", props.large && "is-larger"]
      }, _attrs))} data-v-4ea3085a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const ProfileWrapper_vue_vue_type_style_index_0_scoped_4ea3085a_lang = "";
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/profile/wrapper/ProfileWrapper.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-4ea3085a"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    color: { default: void 0 },
    size: { default: void 0 },
    long: { default: void 0 },
    rounded: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    raised: { type: Boolean, default: false },
    elevated: { type: Boolean, default: false },
    bold: { type: Boolean },
    fullwidth: { type: Boolean, default: false },
    to: { default: void 0 },
    href: { default: void 0 },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    iconLeft: { default: void 0 },
    iconRight: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const buttonClasses = computed(() => [
      props.size && `is-${props.size}`,
      props.color && `is-${props.color}`,
      props.rounded && `is-rounded`,
      props.outlined && `is-outlined`,
      props.raised && `is-raised`,
      props.elevated && `is-elevated`,
      props.bold && `is-bold`,
      props.long && `is-long-${props.long}`,
      props.fullwidth && `is-fullwidth`,
      props.loading && `is-loading`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      if (props.to) {
        _push(ssrRenderComponent(_component_RouterLink, mergeProps({
          to: props.to,
          class: ["button", unref(buttonClasses)]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (props.iconLeft) {
                _push2(`<i class="iconify mr-1"${ssrRenderAttr("data-icon", props.iconLeft)} data-v-dd2e1f0d${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              if (props.iconRight) {
                _push2(`<i class="iconify ml-2"${ssrRenderAttr("data-icon", props.iconRight)} data-v-dd2e1f0d${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                props.iconLeft ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "iconify mr-1",
                  "data-icon": props.iconLeft
                }, null, 8, ["data-icon"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, void 0, true),
                props.iconRight ? (openBlock(), createBlock("i", {
                  key: 1,
                  class: "iconify ml-2",
                  "data-icon": props.iconRight
                }, null, 8, ["data-icon"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (props.href) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: props.href,
          class: ["button", unref(buttonClasses)]
        }, _attrs))} data-v-dd2e1f0d>`);
        if (props.iconLeft) {
          _push(`<i class="iconify mr-1"${ssrRenderAttr("data-icon", props.iconLeft)} data-v-dd2e1f0d></i>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (props.iconRight) {
          _push(`<i class="iconify ml-2"${ssrRenderAttr("data-icon", props.iconRight)} data-v-dd2e1f0d></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: ["button", unref(buttonClasses)],
          disabled: props.disabled
        }, _attrs))} data-v-dd2e1f0d>`);
        if (props.iconLeft) {
          _push(`<i class="iconify mr-1"${ssrRenderAttr("data-icon", props.iconLeft)} data-v-dd2e1f0d></i>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (props.iconRight) {
          _push(`<i class="iconify ml-2"${ssrRenderAttr("data-icon", props.iconRight)} data-v-dd2e1f0d></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      }
    };
  }
});
const Button_vue_vue_type_style_index_0_scoped_dd2e1f0d_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/button/Button.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __unplugin_components_3$4 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-dd2e1f0d"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "Subtitle",
  __ssrInlineRender: true,
  props: {
    size: { default: void 0 },
    weight: { default: void 0 },
    tag: { default: "h3" },
    inverted: { type: Boolean, default: false },
    narrow: { type: Boolean, default: false },
    leading: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const subtitleClasses = computed(() => [
      props.size && `is-${props.size}`,
      props.weight && `is-${props.weight}`,
      props.narrow && `is-narrow`,
      props.leading && `is-leading`,
      props.inverted && `is-inverted`,
      props.uppercase && `is-uppercase`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.tag == "h3") {
        _push(`<h3${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: ["subtitle", unref(subtitleClasses)]
        }))} data-v-a49e0929>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tag == "h4") {
        _push(`<h4${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: ["subtitle", unref(subtitleClasses)]
        }))} data-v-a49e0929>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</h4>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tag == "p") {
        _push(`<p${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: ["subtitle", unref(subtitleClasses)]
        }))} data-v-a49e0929>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const Subtitle_vue_vue_type_style_index_0_scoped_a49e0929_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/title/Subtitle.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __unplugin_components_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-a49e0929"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "CtaBlockA",
  __ssrInlineRender: true,
  props: {
    title: null,
    subtitle: null,
    logosText: { default: "Biggest companies using our product" },
    logos: { default: () => [] },
    ctaPrimary: { default: void 0 },
    ctaPrimaryLink: { default: void 0 },
    ctaSecondary: { default: void 0 },
    ctaSecondaryLink: { default: void 0 },
    inverted: { type: Boolean, default: false },
    boxed: { type: Boolean, default: false },
    color: { default: "default" },
    shapes: { type: Boolean, default: false },
    animated: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const blockClasses = computed(() => [
      props.inverted && !props.boxed && props.color === "default" && `is-inverted`,
      props.boxed && `is-boxed`,
      props.animated && `is-animated`,
      props.color && `is-${props.color}`
    ]);
    const textClasses = computed(() => [
      props.boxed && props.color === "primary" && `has-text-white`,
      props.boxed && props.color === "darker" && `has-text-white`,
      props.inverted && !props.boxed && props.color === "default" && `text-light`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$3;
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_Button = __unplugin_components_3$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-b027d0d2><div class="${ssrRenderClass([unref(blockClasses), "cta-block"])}" data-v-b027d0d2><div class="cta-content mx-auto max-w-4" data-v-b027d0d2>`);
      _push(ssrRenderComponent(_component_Title, {
        tag: "h3",
        size: 3,
        weight: "semi",
        inverted: props.boxed && props.color === "primary" || props.color === "darker" || props.inverted
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-b027d0d2${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Subtitle, {
        tag: "h3",
        size: 5,
        weight: "thin",
        inverted: props.boxed && props.color === "primary" || props.color === "darker" || props.inverted,
        class: "opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-b027d0d2${_scopeId}>${ssrInterpolate(props.subtitle)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (props.ctaPrimary) {
        _push(`<div class="buttons cta-content is-centered mt-5" data-v-b027d0d2>`);
        _push(ssrRenderComponent(_component_Button, {
          color: "primary",
          long: 2,
          to: props.ctaPrimaryLink,
          elevated: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$props.ctaPrimary)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$props.ctaPrimary), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (props.ctaSecondary) {
          _push(ssrRenderComponent(_component_Button, {
            color: "light",
            to: props.ctaPrimaryLink,
            long: 2,
            outlined: props.color === "primary" || props.color === "darker"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$props.ctaSecondary)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$props.ctaSecondary), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.logos.length > 0) {
        _push(`<p class="${ssrRenderClass([unref(textClasses), "cta-content paragraph rem-95 opacity-70 my-5"])}" data-v-b027d0d2>${ssrInterpolate(props.logosText)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (props.logos.length > 0) {
        _push(`<div class="cta-content mx-auto max-w-5 max-w-tablet-p max-w-tp-4" data-v-b027d0d2><div class="columns b-columns-half-mobile b-columns-third-tablet-p" data-v-b027d0d2><!--[-->`);
        ssrRenderList(props.logos.slice(0, 5), (logo, index) => {
          _push(`<div class="column px-5" data-v-b027d0d2><img${ssrRenderAttr("src", logo.logo)} alt="Client logo" width="65" height="30" data-v-b027d0d2></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shapes) {
        _push(`<div class="box-shape box-shape-1" data-v-b027d0d2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shapes) {
        _push(`<div class="box-shape box-shape-2" data-v-b027d0d2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shapes) {
        _push(`<div class="box-shape box-shape-3" data-v-b027d0d2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shapes) {
        _push(`<div class="box-shape box-shape-4" data-v-b027d0d2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shapes) {
        _push(`<div class="box-shape box-shape-5" data-v-b027d0d2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shapes) {
        _push(`<div class="box-shape box-shape-6" data-v-b027d0d2></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const CtaBlockA_vue_vue_type_style_index_0_scoped_b027d0d2_lang = "";
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/cta-blocks/CtaBlockA.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __unplugin_components_8$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-b027d0d2"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "Blob",
  __ssrInlineRender: true,
  props: {
    size: { default: 300 },
    color: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const blobClasses = computed(() => [props.color && `is-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["morphing-blob-wrapper", unref(blobClasses)]
      }, _attrs))} data-v-0b54c4ca><div class="blob-inner levitate" data-v-0b54c4ca><svg class="organic-blob" width="300" height="300" xmlns="http://www.w3.org/2000/svg" data-v-0b54c4ca><defs data-v-0b54c4ca><filter class="goo" data-v-0b54c4ca><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" data-v-0b54c4ca></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" data-v-0b54c4ca></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop" data-v-0b54c4ca></feComposite></filter></defs><circle class="circle-1" cx="150" cy="145" r="100" data-v-0b54c4ca></circle><circle class="circle-2" cx="150" cy="155" r="100" data-v-0b54c4ca></circle><circle class="circle-3" cx="145" cy="150" r="100" data-v-0b54c4ca></circle><circle class="circle-4" cx="155" cy="150" r="100" data-v-0b54c4ca></circle></svg></div></div>`);
    };
  }
});
const Blob_vue_vue_type_style_index_0_scoped_0b54c4ca_lang = "";
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/blob/Blob.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __unplugin_components_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-0b54c4ca"]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "SideSectionIcons",
  __ssrInlineRender: true,
  props: {
    title: null,
    subtitle: null,
    content: null,
    features: null,
    image: null,
    darkImage: { default: void 0 },
    imageWidth: { default: "900" },
    imageHeight: { default: "788" },
    inverted: { type: Boolean, default: false },
    blob: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const sideSectionClasses = computed(() => [
      props.inverted && `is-inverted`,
      props.reverse && `is-reverse`
    ]);
    const textClasses = computed(() => [props.inverted && `is-inverted`]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_Title = __unplugin_components_2$3;
      const _component_Blob = __unplugin_components_0$9;
      const _component_DarkImage = __unplugin_components_3$5;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["side-section mobile:py-0 small:py-6 z-1", unref(sideSectionClasses)]
      }, _attrs))} data-v-d05ad19d><div class="columns is-vcentered b-columns-half-tablet-p" data-v-d05ad19d><div class="column is-6" data-v-d05ad19d><div class="max-w-5" data-v-d05ad19d>`);
      _push(ssrRenderComponent(_component_Subtitle, {
        tag: "h3",
        size: 6,
        weight: "bold",
        class: "pb-4",
        leading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gradient" data-v-d05ad19d${_scopeId}>${ssrInterpolate(__props.subtitle)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gradient" }, toDisplayString(__props.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Title, {
        tag: "h2",
        size: 3,
        weight: "semi",
        inverted: props.inverted,
        leading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "content", {}, () => {
        _push(`<p class="${ssrRenderClass([unref(textClasses), "paragraph rem-95 mb-4"])}" data-v-d05ad19d>${ssrInterpolate(props.content)}</p>`);
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "features", {}, () => {
        _push(`<div class="columns is-multiline b-columns-half-tablet-p" data-v-d05ad19d><!--[-->`);
        ssrRenderList(props.features.slice(0, 4), (feature, index) => {
          _push(`<div class="column is-6" data-v-d05ad19d><div class="py-2 medium:py-3" data-v-d05ad19d><i class="iconify"${ssrRenderAttr("data-icon", feature.icon)} data-v-d05ad19d></i>`);
          _push(ssrRenderComponent(_component_Title, {
            tag: "h3",
            size: 6,
            weight: "semi",
            leading: "",
            inverted: props.inverted
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-d05ad19d${_scopeId}>${ssrInterpolate(feature.title)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(feature.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="${ssrRenderClass([unref(textClasses), "paragraph rem-85 max-w-3"])}" data-v-d05ad19d>${ssrInterpolate(feature.text)}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      }, _push, _parent);
      _push(`</div></div><div class="column is-6 has-text-centered is-relative" data-v-d05ad19d>`);
      if (props.blob) {
        _push(ssrRenderComponent(_component_Blob, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_DarkImage, {
        class: "is-relative mx-auto",
        src: props.image,
        "src-dark": props.darkImage,
        alt: "side section image",
        width: props.imageWidth,
        height: props.imageHeight
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const SideSectionIcons_vue_vue_type_style_index_0_scoped_d05ad19d_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/features/side-section-icons/SideSectionIcons.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-d05ad19d"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "ActionLink",
  __ssrInlineRender: true,
  props: {
    link: { default: void 0 },
    label: { default: "Learn More" },
    size: { default: void 0 },
    narrow: { type: Boolean, default: false },
    heavy: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const linkClasses = computed(() => [
      props.size === "tiny" && "rem-90",
      props.size === "small" && "rem-95",
      props.narrow && "is-narrow",
      props.heavy && "is-heavy"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_component_RouterLink, mergeProps({
        to: props.link,
        class: ["action-link", unref(linkClasses)]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-c7a7be79${_scopeId}>${ssrInterpolate(props.label)}</span><i class="iconify" data-icon="feather:arrow-right" data-v-c7a7be79${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.label), 1),
              createVNode("i", {
                class: "iconify",
                "data-icon": "feather:arrow-right"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const ActionLink_vue_vue_type_style_index_0_scoped_c7a7be79_lang = "";
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/link/ActionLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __unplugin_components_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-c7a7be79"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "FeatureBlockL",
  __ssrInlineRender: true,
  props: {
    features: null,
    blob: { type: Boolean, default: false },
    dots: { type: Boolean, default: false },
    links: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const textClasses = computed(() => [props.inverted && "text-light"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Blob = __unplugin_components_0$9;
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_Title = __unplugin_components_2$3;
      const _component_ActionLink = __unplugin_components_1$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-0" }, _attrs))} data-v-e45261bf><!--[-->`);
      ssrRenderList(props.features, (feature, index) => {
        _push(`<div class="columns is-vcentered b-columns-half-tablet-p" data-v-e45261bf>`);
        if (index % 2) {
          _push(`<div class="column is-6" data-v-e45261bf>`);
          if (props.blob) {
            _push(ssrRenderComponent(_component_Blob, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-primary dot-1 levitate" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-success dot-2 levitate delay-3" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-info dot-3 levitate delay-2" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<svg id="mask-type-1" class="svg-mask" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-e45261bf><defs data-v-e45261bf><clipPath${ssrRenderAttr("id", `blob-${index}`)} data-v-e45261bf><path fill="#474bff" d="M421.5,289.5Q376,339,334.5,371.5Q293,404,241.5,399Q190,394,118.5,387Q47,380,34.5,310Q22,240,44,177Q66,114,121,78Q176,42,244,29.5Q312,17,351,74Q390,131,428.5,185.5Q467,240,421.5,289.5Z" data-v-e45261bf></path></clipPath></defs><image x="0" y="0" width="100%" height="100%"${ssrRenderAttr("clip-path", `url(#blob-${index})`)}${ssrRenderAttr("xlink:href", feature.image)} preserveAspectRatio="xMidYMid slice" data-v-e45261bf></image></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        if (index % 2) {
          _push(`<div class="column is-5" data-v-e45261bf>`);
          _push(ssrRenderComponent(_component_Subtitle, {
            tag: "h4",
            size: 5,
            weight: "bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-gradient" data-v-e45261bf${_scopeId}>${ssrInterpolate(feature.subtitle)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-gradient" }, toDisplayString(feature.subtitle), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_Title, {
            tag: "h3",
            size: 3,
            weight: "bold",
            narrow: "",
            inverted: props.inverted
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-e45261bf${_scopeId}>${ssrInterpolate(feature.title)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(feature.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="${ssrRenderClass([unref(textClasses), "paragraph py-2 max-w-4 small:mx-auto"])}" data-v-e45261bf>${ssrInterpolate(feature.text)}</p>`);
          if (props.links) {
            _push(ssrRenderComponent(_component_ActionLink, {
              link: feature.link,
              label: "Learn more about it"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!(index % 2)) {
          _push(`<div class="column is-6 b-hidden-tablet-p b-hidden-tablet-l b-hidden-desktop" data-v-e45261bf>`);
          if (props.blob) {
            _push(ssrRenderComponent(_component_Blob, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-primary dot-4 levitate" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-success dot-5 levitate delay-3" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-info dot-3 levitate delay-2" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<svg id="mask-type-2a" class="svg-mask" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-e45261bf><defs data-v-e45261bf><clipPath${ssrRenderAttr("id", `blob-${index}-a`)} data-v-e45261bf><path fill="#474bff" d="M439.5,310.5Q409,381,341.5,407Q274,433,202.5,430.5Q131,428,101.5,364.5Q72,301,74,240.5Q76,180,105.5,119.5Q135,59,207.5,35.5Q280,12,333,64.5Q386,117,428,178.5Q470,240,439.5,310.5Z" data-v-e45261bf></path></clipPath></defs><image x="0" y="0" width="100%" height="100%"${ssrRenderAttr("clip-path", `url(#blob-${index}-a)`)}${ssrRenderAttr("xlink:href", feature.image)} preserveAspectRatio="xMidYMid slice" data-v-e45261bf></image></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!(index % 2)) {
          _push(`<div class="column is-5 is-offset-1" data-v-e45261bf>`);
          _push(ssrRenderComponent(_component_Subtitle, {
            tag: "h4",
            size: 5,
            weight: "bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-gradient" data-v-e45261bf${_scopeId}>${ssrInterpolate(feature.subtitle)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-gradient" }, toDisplayString(feature.subtitle), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_Title, {
            tag: "h3",
            size: 3,
            weight: "bold",
            narrow: "",
            inverted: props.inverted
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-e45261bf${_scopeId}>${ssrInterpolate(feature.title)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(feature.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="${ssrRenderClass([unref(textClasses), "paragraph py-2 max-w-4 small:mx-auto"])}" data-v-e45261bf>${ssrInterpolate(feature.text)}</p>`);
          if (props.links) {
            _push(ssrRenderComponent(_component_ActionLink, {
              link: feature.link,
              label: "Learn more about it"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!(index % 2)) {
          _push(`<div class="column is-6 b-hidden-mobile" data-v-e45261bf>`);
          if (props.blob) {
            _push(ssrRenderComponent(_component_Blob, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-primary dot-4 levitate" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-success dot-5 levitate delay-3" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          if (props.dots) {
            _push(`<div class="dot dot-info dot-3 levitate delay-2" data-v-e45261bf></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<svg id="mask-type-2b" class="svg-mask" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-e45261bf><defs data-v-e45261bf><clipPath${ssrRenderAttr("id", `blob-${index}-b`)} data-v-e45261bf><path fill="#474bff" d="M439.5,310.5Q409,381,341.5,407Q274,433,202.5,430.5Q131,428,101.5,364.5Q72,301,74,240.5Q76,180,105.5,119.5Q135,59,207.5,35.5Q280,12,333,64.5Q386,117,428,178.5Q470,240,439.5,310.5Z" data-v-e45261bf></path></clipPath></defs><image x="0" y="0" width="100%" height="100%"${ssrRenderAttr("clip-path", `url(#blob-${index}-b)`)}${ssrRenderAttr("xlink:href", feature.image)} preserveAspectRatio="xMidYMid slice" data-v-e45261bf></image></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const FeatureBlockL_vue_vue_type_style_index_0_scoped_e45261bf_lang = "";
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/feature-blocks/FeatureBlockL.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __unplugin_components_6$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-e45261bf"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "ContentBlockH",
  __ssrInlineRender: true,
  props: {
    title: null,
    text: null,
    images: null,
    imageWidth: { default: "429" },
    imageHeight: { default: "250" },
    links: { type: Boolean, default: false },
    linkLabel: { default: "Learn More" },
    limit: { default: 3 },
    imageSquared: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false },
    compact: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const spacingClasses = computed(() => [props.compact ? "pb-6" : "py-6"]);
    const wrapperClasses = computed(() => [props.limit && `max-w-1/${props.limit}`]);
    const imageClasses = computed(() => [props.imageSquared && `image-squared`]);
    const textClasses = computed(() => [
      props.limit > 3 ? `rem-80` : `rem-95`,
      props.inverted && "text-light"
    ]);
    const invertedClasses = computed(() => [props.inverted && "text-light"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = __unplugin_components_2$3;
      const _component_ActionLink = __unplugin_components_1$6;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mx-auto max-w-10", unref(spacingClasses)]
      }, _attrs))} data-v-3bee7ba6>`);
      if (!props.compact) {
        _push(`<div class="is-flex is-align-items-center is-justify-content-space-between d-column-mobile b-centered-mobile mb-12 px-2" data-v-3bee7ba6><div class="side-title" data-v-3bee7ba6>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h2",
          size: 4,
          weight: "semi",
          narrow: "",
          inverted: props.inverted
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-3bee7ba6${_scopeId}>${ssrInterpolate(props.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(props.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><p class="${ssrRenderClass([unref(invertedClasses), "paragraph max-w-5 mobile:my-4"])}" data-v-3bee7ba6>${ssrInterpolate(props.text)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="is-flex b-only-mobile-flex-wrap" data-v-3bee7ba6><!--[-->`);
      ssrRenderList(props.images.slice(0, props.limit), (image, index) => {
        _push(`<div class="${ssrRenderClass([unref(wrapperClasses), "max-w-mobile px-2 mobile:mb-8"])}" data-v-3bee7ba6><img class="${ssrRenderClass([unref(imageClasses), "inline-block mb-2"])}"${ssrRenderAttr("src", image.url)} alt="featured image"${ssrRenderAttr("width", props.imageWidth)}${ssrRenderAttr("height", props.imageHeight)} data-v-3bee7ba6><p class="${ssrRenderClass([unref(textClasses), "paragraph"])}" data-v-3bee7ba6>${ssrInterpolate(image.text)}</p>`);
        if (props.links) {
          _push(ssrRenderComponent(_component_ActionLink, {
            label: props.linkLabel,
            link: image.link,
            size: "small"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const ContentBlockH_vue_vue_type_style_index_0_scoped_3bee7ba6_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/navbar-blocks/content-blocks/ContentBlockH.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-3bee7ba6"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "IconBox",
  __ssrInlineRender: true,
  props: {
    size: { default: void 0 },
    color: { default: "default" },
    rounded: { type: Boolean },
    bordered: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["icon-box", [
          props.size && "is-" + props.size,
          props.color && "is-" + props.color,
          props.rounded && "is-rounded",
          props.bordered && "is-bordered",
          props.inverted && "is-inverted"
        ]]
      }, _attrs))} data-v-0c87a636>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const IconBox_vue_vue_type_style_index_0_scoped_0c87a636_lang = "";
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/icon/IconBox.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __unplugin_components_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-0c87a636"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "StackedSection",
  __ssrInlineRender: true,
  props: {
    features: null,
    image: null,
    darkImage: null,
    imageWidth: { default: "500" },
    imageHeight: { default: "500" },
    rounded: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const shapeClasses = computed(() => [props.inverted && "opacity-10"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconBox = __unplugin_components_0$8;
      const _component_Title = __unplugin_components_2$3;
      const _component_DarkImage = __unplugin_components_3$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-2461790d><div class="stacked-section" data-v-2461790d><div class="columns is-vcentered b-columns-half-tablet-p" data-v-2461790d><div class="column is-5 is-offset-1" data-v-2461790d><!--[-->`);
      ssrRenderList(props.features.slice(0, 3), (feature, index) => {
        _push(`<div class="media max-w-4" data-v-2461790d><div class="media-left" data-v-2461790d>`);
        _push(ssrRenderComponent(_component_IconBox, {
          color: feature.color,
          size: "medium",
          rounded: props.rounded,
          inverted: props.inverted
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="iconify"${ssrRenderAttr("data-icon", feature.icon)} data-v-2461790d${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", {
                  class: "iconify",
                  "data-icon": feature.icon
                }, null, 8, ["data-icon"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="media-content" data-v-2461790d>`);
        _push(ssrRenderComponent(_component_Title, {
          tag: "h3",
          size: 6,
          weight: "semi",
          leading: "",
          inverted: props.inverted
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-2461790d${_scopeId}>${ssrInterpolate(feature.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(feature.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="paragraph rem-85" data-v-2461790d>${ssrInterpolate(feature.text)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="column is-6" data-v-2461790d><div class="color-box" data-v-2461790d><div class="${ssrRenderClass([unref(shapeClasses), "color-box-inner"])}" data-v-2461790d></div><div class="character" data-v-2461790d>`);
      _push(ssrRenderComponent(_component_DarkImage, {
        src: props.image,
        "src-dark": props.darkImage,
        alt: "Featured Image",
        width: props.imageWidth,
        height: props.imageHeight
      }, null, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const StackedSection_vue_vue_type_style_index_0_scoped_2461790d_lang = "";
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/features/stacked-section/StackedSection.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-2461790d"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "SectionTitle",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    subtitle: { default: void 0 },
    inverted: { type: Boolean, default: false },
    spaced: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const titleClasses = computed(() => [props.inverted && `is-inverted`]);
    const blockClasses = computed(() => [props.spaced && "mb-16"]);
    const subtitleClasses = computed(() => [
      props.inverted ? `text-white` : "text-gradient"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_Title = __unplugin_components_2$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["has-text-centered", unref(blockClasses)]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Subtitle, {
        tag: "h3",
        size: 5,
        weight: "bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass(unref(subtitleClasses))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "subtitle", {}, () => {
              _push2(`${ssrInterpolate(props.subtitle)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: unref(subtitleClasses) }, [
                renderSlot(_ctx.$slots, "subtitle", {}, () => [
                  createTextVNode(toDisplayString(props.subtitle), 1)
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_Title, {
        tag: "h2",
        size: 3,
        weight: "bold",
        class: unref(titleClasses)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(props.title)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", null, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(props.title), 1)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/title/SectionTitle.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/container/Container.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __unplugin_components_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "TongueTwo",
  __ssrInlineRender: true,
  props: {
    color: { default: "grey" }
  },
  setup(__props) {
    const props = __props;
    const svgClasses = computed(() => [props.color && `tongue-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "853",
        height: "639",
        viewBox: "0 0 853 639",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: ["tongue-2", unref(svgClasses)]
      }, _attrs))} data-v-8af190e4><path d="M843,456.4C843,218.7,301.7,10,13,10c-288.7,0-440,69.6-440,307.4c0,237.8,242.1,314.1,530.9,314.1
	C392.6,631.5,843,694.2,843,456.4z" data-v-8af190e4></path><path class="opacity-50" d="M853,446.4C853,208.7,371.4,0,114.5,0S-277,69.6-277,307.4c0,237.8,215.4,314.1,472.4,314.1
	C452.3,621.5,853,684.2,853,446.4z" data-v-8af190e4></path></svg>`);
    };
  }
});
const TongueTwo_vue_vue_type_style_index_0_scoped_8af190e4_lang = "";
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/shapes/TongueTwo.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __unplugin_components_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-8af190e4"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TongueOne",
  __ssrInlineRender: true,
  props: {
    color: { default: "grey" }
  },
  setup(__props) {
    const props = __props;
    const svgClasses = computed(() => [props.color && `tongue-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "853",
        height: "639",
        viewBox: "0 0 853 639",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: ["tongue-1", unref(svgClasses)]
      }, _attrs))} data-v-7267784e><path fill-rule="evenodd" clip-rule="evenodd" d="M749.122 631.529C1037.86 631.529 1280 555.156 1280 317.386C1280 79.6165 1128.79 10 840.046 10C551.305 10 10 218.672 10 456.442C10 694.212 460.381 631.529 749.122 631.529Z" data-v-7267784e></path><path class="opacity-50" fill-rule="evenodd" clip-rule="evenodd" d="M657.644 621.529C914.556 621.529 1130 545.156 1130 307.386C1130 69.6165 995.456 0 738.545 0C481.634 0 0 208.672 0 446.442C0 684.212 400.733 621.529 657.644 621.529Z" data-v-7267784e></path></svg>`);
    };
  }
});
const TongueOne_vue_vue_type_style_index_0_scoped_7267784e_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/shapes/TongueOne.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __unplugin_components_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-7267784e"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "WaveTwo",
  __ssrInlineRender: true,
  props: {
    color: { default: "grey" },
    name: null
  },
  setup(__props) {
    const props = __props;
    const svgClasses = computed(() => [props.color && `wave-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animated-waves" }, _attrs))} data-v-4eb9d07b><svg class="${ssrRenderClass([unref(svgClasses), "waves"])}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" data-v-4eb9d07b><defs data-v-4eb9d07b><path${ssrRenderAttr("id", props.name)} d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-4eb9d07b></path></defs><g class="parallax" data-v-4eb9d07b><use${ssrRenderAttr("xlink:href", `#${props.name}`)} x="48" y="0" fill="rgba(255,255,255,0.7)" data-v-4eb9d07b></use><use${ssrRenderAttr("xlink:href", `#${props.name}`)} x="48" y="3" fill="rgba(255,255,255,0.5)" data-v-4eb9d07b></use><use${ssrRenderAttr("xlink:href", `#${props.name}`)} x="48" y="5" fill="rgba(255,255,255,0.3)" data-v-4eb9d07b></use><use${ssrRenderAttr("xlink:href", `#${props.name}`)} x="48" y="7" fill="#fff" data-v-4eb9d07b></use></g></svg></div>`);
    };
  }
});
const WaveTwo_vue_vue_type_style_index_0_scoped_4eb9d07b_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/shapes/WaveTwo.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __unplugin_components_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-4eb9d07b"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "WaveOne",
  __ssrInlineRender: true,
  props: {
    color: { default: "grey" }
  },
  setup(__props) {
    const props = __props;
    const svgClasses = computed(() => [props.color && `wave-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1440 320"
      }, _attrs))} data-v-284db7a0><path class="${ssrRenderClass(unref(svgClasses))}" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,229.3C480,235,600,245,720,234.7C840,224,960,192,1080,197.3C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" data-v-284db7a0></path></svg>`);
    };
  }
});
const WaveOne_vue_vue_type_style_index_0_scoped_284db7a0_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/shapes/WaveOne.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __unplugin_components_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-284db7a0"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    size: { default: void 0 },
    color: { default: void 0 },
    borderedTop: { type: Boolean, default: false },
    borderedBottom: { type: Boolean, default: false },
    bottomSpaced: { type: Boolean },
    bottomNarrow: { type: Boolean, default: false },
    topNarrow: { type: Boolean, default: false },
    overflown: { type: Boolean, default: false },
    wave: { default: void 0 },
    tongue: { default: void 0 },
    shapeColor: { default: "grey" },
    overlay: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const sectionClasses = computed(() => [
      props.size && `is-${props.size}`,
      props.color && `is-${props.color}`,
      props.borderedTop && `has-border-top`,
      props.borderedBottom && `has-border-bottom`,
      props.bottomSpaced && `is-bottom-spaced`,
      props.overflown && `is-overflown`,
      props.wave && `section-${props.wave}`,
      props.tongue && `section-${props.tongue}`,
      props.bottomNarrow && `is-bottom-narrow`,
      props.topNarrow && `is-top-narrow`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WaveOne = __unplugin_components_0$6;
      const _component_WaveTwo = __unplugin_components_1$5;
      const _component_TongueOne = __unplugin_components_2$2;
      const _component_TongueTwo = __unplugin_components_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["section", unref(sectionClasses)]
      }, _attrs))} data-v-b0db8ddf>`);
      if (__props.overlay) {
        _push(`<div class="section-overlay" data-v-b0db8ddf></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "background", {}, null, _push, _parent);
      _push(`<div class="section-content" data-v-b0db8ddf>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (props.wave === "wave-1") {
        _push(`<div class="section-wave" data-v-b0db8ddf>`);
        _push(ssrRenderComponent(_component_WaveOne, {
          color: props.shapeColor
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.wave === "wave-2") {
        _push(`<div class="section-wave" data-v-b0db8ddf>`);
        _push(ssrRenderComponent(_component_WaveTwo, {
          color: props.shapeColor,
          name: "a-wave-1"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.tongue === "tongue-1") {
        _push(`<div class="section-tongue" data-v-b0db8ddf>`);
        _push(ssrRenderComponent(_component_TongueOne, {
          color: props.shapeColor
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.tongue === "tongue-2") {
        _push(`<div class="section-tongue" data-v-b0db8ddf>`);
        _push(ssrRenderComponent(_component_TongueTwo, {
          color: props.shapeColor
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Section_vue_vue_type_style_index_0_scoped_b0db8ddf_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/section/Section.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __unplugin_components_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-b0db8ddf"]]);
const _sfc_main$j = defineComponent({
  name: "MarqueeText",
  props: {
    duration: {
      type: Number,
      default: 15
    },
    repeat: {
      type: Number,
      default: 2
    },
    paused: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const styles = useCssModule();
    return () => {
      var _a;
      return h("div", { class: [styles.wrap] }, [
        h(
          "div",
          {
            class: [props.paused ? styles.paused : void 0, styles.content]
          },
          Array(props.repeat).fill(
            h(
              "div",
              {
                class: styles.text,
                style: {
                  animationDuration: `${props.duration}s`,
                  animationDirection: props.reverse ? "reverse" : void 0
                }
              },
              (_a = slots.default) == null ? void 0 : _a.call(slots)
            )
          )
        )
      ]);
    };
  }
});
const wrap = "_wrap_11dt7_2";
const content = "_content_11dt7_6";
const text = "_text_11dt7_10";
const animation = "_animation_11dt7_1";
const paused = "_paused_11dt7_17";
const style0 = {
  wrap,
  content,
  text,
  animation,
  paused
};
const cssModules = {
  "$style": style0
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MarqueeText.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __unplugin_components_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__cssModules", cssModules]]);
const _imports_0$2 = "/assets/logo/logo.png";
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "HeroPeople",
  __ssrInlineRender: true,
  props: {
    people: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarqueeText = __unplugin_components_1$4;
      const _component_AvatarSimple = __unplugin_components_0$e;
      const _component_Title = __unplugin_components_2$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero-people-marquee" }, _attrs))} data-v-6b80b66c>`);
      _push(ssrRenderComponent(_component_MarqueeText, {
        repeat: 10,
        duration: 40
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hero-people-list" data-v-6b80b66c${_scopeId}><!--[-->`);
            ssrRenderList(props.people, (person, index) => {
              _push2(`<div class="hero-people-item" data-v-6b80b66c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AvatarSimple, {
                picture: person.picture,
                size: "xl"
              }, null, _parent2, _scopeId));
              _push2(`<div class="has-text-centered pt-2" data-v-6b80b66c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Title, {
                tag: "h3",
                size: 6,
                weight: "semi",
                narrow: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-6b80b66c${_scopeId2}>${ssrInterpolate(person.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(person.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="paragraph rem-85" data-v-6b80b66c${_scopeId}>${ssrInterpolate(person.role)}</p><div class="bottom-row" data-v-6b80b66c${_scopeId}><img class="logo"${ssrRenderAttr("src", _imports_0$2)} alt="Workit Ng logo for artisan Marquee on home page" data-v-6b80b66c${_scopeId}><div class="rating" data-v-6b80b66c${_scopeId}>`);
              if (person.rating >= 1) {
                _push2(`<i class="iconify" data-icon="uiw:star-on" data-v-6b80b66c${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              if (person.rating >= 2) {
                _push2(`<i class="iconify" data-icon="uiw:star-on" data-v-6b80b66c${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              if (person.rating >= 3) {
                _push2(`<i class="iconify" data-icon="uiw:star-on" data-v-6b80b66c${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              if (person.rating >= 4) {
                _push2(`<i class="iconify" data-icon="uiw:star-on" data-v-6b80b66c${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              if (person.rating === 5) {
                _push2(`<i class="iconify" data-icon="uiw:star-on" data-v-6b80b66c${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "hero-people-list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.people, (person, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "hero-people-item"
                  }, [
                    createVNode(_component_AvatarSimple, {
                      picture: person.picture,
                      size: "xl"
                    }, null, 8, ["picture"]),
                    createVNode("div", { class: "has-text-centered pt-2" }, [
                      createVNode(_component_Title, {
                        tag: "h3",
                        size: 6,
                        weight: "semi",
                        narrow: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(person.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("p", { class: "paragraph rem-85" }, toDisplayString(person.role), 1),
                      createVNode("div", { class: "bottom-row" }, [
                        createVNode("img", {
                          class: "logo",
                          src: _imports_0$2,
                          alt: "Workit Ng logo for artisan Marquee on home page"
                        }),
                        createVNode("div", { class: "rating" }, [
                          person.rating >= 1 ? (openBlock(), createBlock("i", {
                            key: 0,
                            class: "iconify",
                            "data-icon": "uiw:star-on"
                          })) : createCommentVNode("", true),
                          person.rating >= 2 ? (openBlock(), createBlock("i", {
                            key: 1,
                            class: "iconify",
                            "data-icon": "uiw:star-on"
                          })) : createCommentVNode("", true),
                          person.rating >= 3 ? (openBlock(), createBlock("i", {
                            key: 2,
                            class: "iconify",
                            "data-icon": "uiw:star-on"
                          })) : createCommentVNode("", true),
                          person.rating >= 4 ? (openBlock(), createBlock("i", {
                            key: 3,
                            class: "iconify",
                            "data-icon": "uiw:star-on"
                          })) : createCommentVNode("", true),
                          person.rating === 5 ? (openBlock(), createBlock("i", {
                            key: 4,
                            class: "iconify",
                            "data-icon": "uiw:star-on"
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const HeroPeople_vue_vue_type_style_index_0_scoped_6b80b66c_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/hero/modules/HeroPeople.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-6b80b66c"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "PolkaDots",
  __ssrInlineRender: true,
  props: {
    darker: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["polka-dots", props.darker && "darker"]
      }, _attrs))} data-v-812b6168><!--[-->`);
      ssrRenderList(16, (index) => {
        _push(`<span data-v-812b6168></span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const PolkaDots_vue_vue_type_style_index_0_scoped_812b6168_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/shapes/PolkaDots.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __unplugin_components_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-812b6168"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VSelect",
  __ssrInlineRender: true,
  props: {
    options: null,
    value: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: "" },
    readonly: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const selectClasses = computed(() => [props.rounded && `is-rounded`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["select", unref(selectClasses)]
      }, _attrs))} data-v-6a9b255a><select${ssrRenderAttr("value", __props.modelValue)} data-v-6a9b255a><option data-v-6a9b255a>${ssrInterpolate(props.placeholder)}</option><!--[-->`);
      ssrRenderList(props.options, (option, index) => {
        _push(`<option${ssrRenderAttr("value", option.value)} data-v-6a9b255a>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
});
const VSelect_vue_vue_type_style_index_0_scoped_6a9b255a_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/select/VSelect.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __unplugin_components_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-6a9b255a"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VInput",
  __ssrInlineRender: true,
  props: {
    type: { default: "text" },
    placeholder: { default: void 0 },
    value: { default: void 0 },
    modelValue: { default: void 0 },
    readonly: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    inverted: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const inputClasses = computed(() => [
      props.rounded && `is-rounded`,
      props.inverted && `is-inverted`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        type: props.type,
        placeholder: props.placeholder,
        readonly: props.readonly,
        "aria-label": "input",
        class: ["input", unref(inputClasses)]
      }, _attrs))} data-v-580cfa22>`);
    };
  }
});
const VInput_vue_vue_type_style_index_0_scoped_580cfa22_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/input/VInput.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __unplugin_components_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-580cfa22"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Control",
  __ssrInlineRender: true,
  props: {
    icon: { default: void 0 },
    validation: { type: Boolean, default: false },
    isValid: { type: Boolean, default: false },
    error: { default: "Please enter a valid value" },
    expanded: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const controlClasses = computed(() => [
      props.icon && `has-icon`,
      props.validation && `has-validation`,
      props.isValid && `is-valid`,
      !props.isValid && `is-invalid`,
      props.expanded && `is-expanded`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["control", unref(controlClasses)]
      }, _attrs))} data-v-c9b500ab>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (props.icon) {
        _push(`<div class="form-icon" data-v-c9b500ab><i class="iconify"${ssrRenderAttr("data-icon", props.icon)} data-v-c9b500ab></i></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.validation && props.isValid) {
        _push(`<div class="validation-icon valid-icon" data-v-c9b500ab><i class="iconify" data-icon="feather:check" data-v-c9b500ab></i></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.validation && !props.isValid) {
        _push(`<div class="validation-icon invalid-icon" data-v-c9b500ab><i class="iconify" data-icon="feather:x" data-v-c9b500ab></i></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.validation && !props.isValid) {
        ssrRenderSlot(_ctx.$slots, "error", {}, () => {
          _push(`<span class="is-block text rem-75 text-danger px-1 pt-1" data-v-c9b500ab>${ssrInterpolate(props.error)}</span>`);
        }, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Control_vue_vue_type_style_index_0_scoped_c9b500ab_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/control/Control.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __unplugin_components_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c9b500ab"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Field",
  __ssrInlineRender: true,
  props: {
    grouped: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const fieldClasses = computed(() => [props.grouped && `is-grouped`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["field", unref(fieldClasses)]
      }, _attrs))} data-v-5e1c7c40>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const Field_vue_vue_type_style_index_0_scoped_5e1c7c40_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/field/Field.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __unplugin_components_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-5e1c7c40"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "QuickJobSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      {
        value: "Hamburger",
        label: "Hamburger"
      },
      {
        value: "Cheeseburger",
        label: "Cheeseburger"
      },
      {
        value: "Burito",
        label: "Burito"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Field = __unplugin_components_0$3;
      const _component_Control = __unplugin_components_1$3;
      const _component_VInput = __unplugin_components_2$1;
      const _component_VSelect = __unplugin_components_3$2;
      const _component_Button = __unplugin_components_3$4;
      _push(`<form${ssrRenderAttrs(_attrs)} data-v-fb09babe><div class="flex-form is-relative z-1" data-v-fb09babe>`);
      _push(ssrRenderComponent(_component_Field, { grouped: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Control, { expanded: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VInput, { placeholder: "Search Artisans" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VInput, { placeholder: "Search Artisans" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Control, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VSelect, {
                    options,
                    placeholder: "All"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VSelect, {
                      options,
                      placeholder: "All"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Control, { expanded: "" }, {
                default: withCtx(() => [
                  createVNode(_component_VInput, { placeholder: "Search Artisans" })
                ]),
                _: 1
              }),
              createVNode(_component_Control, null, {
                default: withCtx(() => [
                  createVNode(_component_VSelect, {
                    options,
                    placeholder: "All"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-fb09babe>`);
      _push(ssrRenderComponent(_component_Button, {
        color: "primary",
        bold: "",
        raised: "",
        fullwidth: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quick Search`);
          } else {
            return [
              createTextVNode("Quick Search")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form>`);
    };
  }
});
const QuickJobSearch_vue_vue_type_style_index_0_scoped_fb09babe_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/quick-job-search/QuickJobSearch.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-fb09babe"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "HeroWaveMask",
  __ssrInlineRender: true,
  props: {
    color: { default: "white" }
  },
  setup(__props) {
    const props = __props;
    const svgClasses = computed(() => [props.color && `mask-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        "data-name": "Calque 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1920 1186.8"
      }, _attrs))} data-v-d18fb5d8><path d="M1755.5 78.3a863.94 863.94 0 00-120.4 65.5c-65.5 34-100.5 149-100.5 149-17 71-78.5 156-78.5 156s-99 140-346 168c-189.9 21.5-234.4 124-244.8 170.2-5.2 22.3-16.9 36.8-21.1 41.3-28.7 30.2-53.1 41.6-59.4 44.2-61.6 24.1-145 38.6-204.7 88.3-95.3 79.3-288 83.3-288 83.3C82.8 1045.5 0 1186.8 0 1186.8h1920V.3c-74-4.5-97.5 48.5-164.5 78z" class="${ssrRenderClass(unref(svgClasses))}" data-v-d18fb5d8></path></svg>`);
    };
  }
});
const HeroWaveMask_vue_vue_type_style_index_0_scoped_d18fb5d8_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/masks/HeroWaveMask.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __unplugin_components_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-d18fb5d8"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "HeroCircleMask",
  __ssrInlineRender: true,
  props: {
    color: { default: "white" }
  },
  setup(__props) {
    const props = __props;
    const svgClasses = computed(() => [props.color && `mask-${props.color}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0",
        y: "0",
        viewBox: "0 0 1440 440",
        "xml:space": "preserve"
      }, _attrs))} data-v-baa4b3c5><g id="XMLID_29_" data-v-baa4b3c5><path id="XMLID_30_" class="${ssrRenderClass(unref(svgClasses))}" d="M-15 442.5h707.4c-261.2 0-504.3-77.7-707.4-211.2v211.2z" data-v-baa4b3c5></path><path id="XMLID_31_" class="${ssrRenderClass(unref(svgClasses))}" d="M692.4 442.5H1455V192.9c-213.6 156.9-477.2 249.6-762.6 249.6z" data-v-baa4b3c5></path></g></svg>`);
    };
  }
});
const HeroCircleMask_vue_vue_type_style_index_0_scoped_baa4b3c5_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/masks/HeroCircleMask.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-baa4b3c5"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    size: { default: void 0 },
    alignment: { default: void 0 },
    color: { default: void 0 },
    shape: { default: void 0 },
    shapeOrientation: { default: void 0 },
    overlay: { type: Boolean, default: false },
    starfall: { type: Boolean, default: false },
    mask: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const heroClasses = computed(() => [
      props.shape && `has-top-bg`,
      props.shapeOrientation && `top-bg-${props.shapeOrientation}`,
      props.size && `is-${props.size}`,
      props.alignment && `is-${props.alignment}`,
      props.color && `is-${props.color}`,
      props.mask && "has-mask"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroCircleMask = __unplugin_components_0$2;
      const _component_HeroWaveMask = __unplugin_components_1$2;
      const _component_HeroSlantMask = resolveComponent("HeroSlantMask");
      const _component_Container = __unplugin_components_0$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["hero", unref(heroClasses)]
      }, _attrs))}>`);
      if (props.starfall) {
        _push(`<div class="starfall"><!--[-->`);
        ssrRenderList(40, (index) => {
          _push(`<div class="falling-star"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.shape) {
        _push(`<img class="top-bg"${ssrRenderAttr("src", props.shape)} alt="hero shape" width="240" height="150">`);
      } else {
        _push(`<!---->`);
      }
      if (props.mask === "circle") {
        _push(`<div class="hero-mask-circle">`);
        _push(ssrRenderComponent(_component_HeroCircleMask, {
          color: props.color
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.mask === "wave") {
        _push(`<div class="hero-mask-wave">`);
        _push(ssrRenderComponent(_component_HeroWaveMask, {
          color: props.color
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.mask === "slant") {
        _push(`<div class="hero-mask-slant">`);
        _push(ssrRenderComponent(_component_HeroSlantMask, {
          color: props.color
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.overlay) {
        _push(`<div class="hero-overlay"></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "background", {}, null, _push, _parent);
      if ("body" in unref(slots)) {
        _push(`<div class="hero-body">`);
        _push(ssrRenderComponent(_component_Container, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "body")
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ("footer" in unref(slots)) {
        _push(`<div class="hero-foot">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const Hero_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/hero/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$1 = "/assets/illustrations/hero/support-hero-call-1.svg";
const _imports_1 = "/assets/illustrations/hero/support-hero-call-2.svg";
const heroMentors = [
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Daryl Kepler",
    role: "Manager @Kromo",
    logo: "/assets/brands/kromo.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Anna Scott",
    role: "Business Lead @Proactive",
    logo: "/assets/brands/proactive.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Matt Hewitt",
    role: "CEO @Infinite",
    logo: "/assets/brands/infinite.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Ula Hobs",
    role: "Growth consultant",
    logo: "/assets/brands/covenant.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Marc Lebeau",
    role: "Sales Manager",
    logo: "/assets/brands/gutwork.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Jordan Daniels",
    role: "Business Developer",
    logo: "/assets/brands/tribe.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Bianca Sorelli",
    role: "Head of Marketing",
    logo: "/assets/brands/grubspot.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Armin Azadian",
    role: "CEO @livetalk",
    logo: "/assets/brands/livetalk.svg",
    rating: 5
  },
  {
    picture: "data:image/gif;base64,replace_with_your_image",
    name: "Lisa Gheller",
    role: "Business Analyst",
    logo: "/assets/brands/phasekit.svg",
    rating: 5
  }
];
const mentorTestimonials = {
  trainees: [
    {
      title: "Vulk has given me confidence in my plans and also allowed me to explore new opportunities and ways to increase my income",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Ousman Abedi",
        role: "Store Owner",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/asuna.svg"
      }
    },
    {
      title: "Vulk mentors helped me so much strenghtening my company's growth and securing new sources of income ",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Dany Bolzcak",
        role: "Startup Owner",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/vonmo.svg"
      }
    },
    {
      title: "I was so surprised to see all my metrics going up after only a month using Vulk mentors. Astonishing!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Christina Chu",
        role: "Business Owner",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/bobcot.svg"
      }
    },
    {
      title: "My analytics started going nuts after I took four sessions with Henry Miller, a marketing specialist I met here!",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Helena Firnalts",
        role: "Shop Owner",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/tetra.svg"
      }
    }
  ],
  mentors: [
    {
      title: "I enjoy my participation to Vulk Mentors every single day. I like to meet new people and to discuss new opportunities ",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Daryl Keppler",
        role: "Marketing Specialist",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/kromo.svg"
      }
    },
    {
      title: "As a business owner, I totally understand the struggles one can run into when launching a product or a new service. This is why Ian here",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Armin Azadian",
        role: "CEO @Livetalk",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/livetalk.svg"
      }
    },
    {
      title: "I already try to help people in my everyday work. Let's say Vulk mentors only reinforced that desire of mine",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Jordan Daniels",
        role: "Business Developer",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/tribe.svg"
      }
    },
    {
      title: "Iam always interested in helping other people with their businesses. It has proved to be even useful for my own company",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit",
      member: {
        name: "Bianca Sorelli",
        role: "Head of Marketing",
        picture: "data:image/gif;base64,replace_with_your_image",
        logo: "/assets/brands/grubspot.svg"
      }
    }
  ]
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeroK",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = _sfc_main$9;
      const _component_Title = __unplugin_components_2$3;
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_QuickJobSearch = __unplugin_components_3$1;
      const _component_DarkImage = __unplugin_components_3$5;
      const _component_PolkaDots = __unplugin_components_0$4;
      const _component_HeroPeople = __unplugin_components_6;
      _push(ssrRenderComponent(_component_Hero, mergeProps({
        class: "illustration-hero has-top-bg is-right",
        alignment: "center",
        size: "fullheight",
        color: "grey"
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns is-vcentered mt-12" data-v-9136158e${_scopeId}><div class="column is-relative" data-v-9136158e${_scopeId}><div class="mx-auto max-w-6 mb-4" data-v-9136158e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Title, {
              tag: "h1",
              size: 1,
              weight: "bold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-9136158e${_scopeId2}> Instantly Book &amp; Hire <span class="text-primary" data-v-9136158e${_scopeId2}>Service Providers </span> Near You. </span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createTextVNode(" Instantly Book & Hire "),
                      createVNode("span", { class: "text-primary" }, "Service Providers "),
                      createTextVNode(" Near You. ")
                    ])
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
                  _push3(` Workit is a one of a kind service provider booking system with a human backbone. Our platform is specifically curated to suggest vetted, experienced and trusted artisans near you. `);
                } else {
                  return [
                    createTextVNode(" Workit is a one of a kind service provider booking system with a human backbone. Our platform is specifically curated to suggest vetted, experienced and trusted artisans near you. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="buttons is-relative z-1" data-v-9136158e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_QuickJobSearch, null, null, _parent2, _scopeId));
            _push2(`</div></div><div class="hero-image-composition mt-6" data-v-9136158e${_scopeId}><div class="image-wrap" data-v-9136158e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DarkImage, {
              class: "inner-image",
              src: "/assets/illustrations/hero/support-hero.svg",
              alt: "Workit Nigeria Service provider hero image 1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="polka-dots polka-dots-1" data-v-9136158e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PolkaDots, null, null, _parent2, _scopeId));
            _push2(`</div><div class="element-container element-1" data-v-9136158e${_scopeId}><div class="call-container" data-v-9136158e${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="Workit Nigeria Service provider hero image 2" data-v-9136158e${_scopeId}></div></div><div class="polka-dots polka-dots-2" data-v-9136158e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PolkaDots, null, null, _parent2, _scopeId));
            _push2(`</div><div class="element-container element-2" data-v-9136158e${_scopeId}><div class="call-container" data-v-9136158e${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Workit Nigeria Service provider hero image 3" data-v-9136158e${_scopeId}></div></div></div></div></div>`);
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
                        createVNode("span", null, [
                          createTextVNode(" Instantly Book & Hire "),
                          createVNode("span", { class: "text-primary" }, "Service Providers "),
                          createTextVNode(" Near You. ")
                        ])
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
                        createTextVNode(" Workit is a one of a kind service provider booking system with a human backbone. Our platform is specifically curated to suggest vetted, experienced and trusted artisans near you. ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "buttons is-relative z-1" }, [
                      createVNode(_component_QuickJobSearch)
                    ])
                  ]),
                  createVNode("div", { class: "hero-image-composition mt-6" }, [
                    createVNode("div", { class: "image-wrap" }, [
                      createVNode(_component_DarkImage, {
                        class: "inner-image",
                        src: "/assets/illustrations/hero/support-hero.svg",
                        alt: "Workit Nigeria Service provider hero image 1"
                      })
                    ]),
                    createVNode("div", { class: "polka-dots polka-dots-1" }, [
                      createVNode(_component_PolkaDots)
                    ]),
                    createVNode("div", { class: "element-container element-1" }, [
                      createVNode("div", { class: "call-container" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: "Workit Nigeria Service provider hero image 2"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "polka-dots polka-dots-2" }, [
                      createVNode(_component_PolkaDots)
                    ]),
                    createVNode("div", { class: "element-container element-2" }, [
                      createVNode("div", { class: "call-container" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "Workit Nigeria Service provider hero image 3"
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HeroPeople, { people: unref(heroMentors) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HeroPeople, { people: unref(heroMentors) }, null, 8, ["people"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const HeroK_vue_vue_type_style_index_0_scoped_9136158e_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/hero/heroK/HeroK.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9136158e"]]);
const supportFeatures = [
  {
    title: "Multi-Channel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.",
    color: "primary",
    icon: "ion:layers-outline",
    link: "/"
  },
  {
    title: "Live Chat",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.",
    color: "green",
    icon: "ion:headset-outline",
    link: "/"
  },
  {
    title: "Support Dashboard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo.",
    color: "warning",
    icon: "ion:grid-outline",
    link: "/"
  }
];
const coloredFeaturesFirst = {
  title: "Awesome Features",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones.",
  images: [
    {
      url: "/assets/illustrations/features/colored-feature-1.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit",
      link: "index"
    },
    {
      url: "/assets/illustrations/features/colored-feature-2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit",
      link: "index"
    },
    {
      url: "/assets/illustrations/features/colored-feature-3.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit",
      link: "index"
    }
  ]
};
const coloredFeaturesSecond = {
  title: "Our Philosophy",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia, quae actiones.",
  images: [
    {
      url: "/assets/illustrations/features/colored-feature-4.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit",
      link: "index"
    },
    {
      url: "/assets/illustrations/features/colored-feature-5.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit",
      link: "index"
    },
    {
      url: "/assets/illustrations/features/colored-feature-6.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit",
      link: "index"
    }
  ]
};
const statistics = [
  {
    icon: "ion:card-outline",
    number: 74,
    text: "Available payment gateways"
  },
  {
    icon: "ion:diamond-outline",
    number: 9718,
    text: "Customers across the world"
  },
  {
    icon: "ion:timer-outline",
    number: 534,
    text: "Real time balance metrics"
  },
  {
    icon: "ion:business-outline",
    number: 92,
    text: "Regional and local offices"
  }
];
const businessFeatures = [
  {
    title: "Email marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
    icon: "ion:mail-unread-outline"
  },
  {
    title: "Bundles & upsells",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
    icon: "ion:sparkles-outline"
  },
  {
    title: "Lead magnets",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
    icon: "ion:magnet-outline"
  },
  {
    title: "Discount codes",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.",
    icon: "ion:gift-outline"
  }
];
const posts = [
  {
    id: 0,
    image: "/assets/illustrations/blog/commerce-1.svg",
    title: "Increase conversion rates and learn how to manage abandonned carts",
    likes: "112",
    categories: [
      {
        name: "Commerce"
      },
      {
        name: "Conversion"
      },
      {
        name: "Profit"
      }
    ],
    date: "March 17th, 2022",
    duration: 2
  },
  {
    id: 1,
    image: "/assets/illustrations/blog/commerce-2.svg",
    title: "How order bumps can help increasing your revenue and conversions",
    likes: "319",
    categories: [
      {
        name: "Orders"
      },
      {
        name: "Checkout"
      },
      {
        name: "Conversion"
      }
    ],
    date: "March 17th, 2022",
    duration: 2
  },
  {
    id: 2,
    image: "/assets/illustrations/blog/commerce-3.svg",
    title: "How a rich and well maintained catalogue easily converts customers",
    likes: "519",
    categories: [
      {
        name: "Conversion"
      },
      {
        name: "Sales"
      },
      {
        name: "Products"
      }
    ],
    date: "March 17th, 2022",
    duration: 2
  },
  {
    id: 3,
    image: "/assets/illustrations/blog/commerce-3.svg",
    title: "How a rich and well maintained catalogue easily converts customers",
    likes: "519",
    categories: [
      {
        name: "Conversion"
      },
      {
        name: "Sales"
      },
      {
        name: "Products"
      }
    ],
    date: "March 17th, 2022",
    duration: 2
  }
];
const itProcess = [
  {
    subtitle: "Collaboration",
    title: "A strong team",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.",
    image: "data:image/gif;base64,replace_with_your_image",
    link: "/about"
  },
  {
    subtitle: "Design",
    title: "High end skills",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.",
    image: "data:image/gif;base64,replace_with_your_image",
    link: "/"
  },
  {
    subtitle: "Success",
    title: "Relationship",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum patria: miserum exilium. Duo Reges: constructio interrete. Vitiosum est enim in dividendo partem in genere numerare. Restinguet citius, si ardentem acceperit. Invidiosum nomen est, infame, suspectum.",
    image: "data:image/gif;base64,replace_with_your_image",
    link: "/"
  }
];
const profileProjects = [
  {
    title: "Ecommerce UI Kit",
    subtitle: "Started 2 months ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  },
  {
    title: "Payment UI Kit",
    subtitle: "Started 3 weeks ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  },
  {
    title: "SaaS UI Kit",
    subtitle: "Started 5 days ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  },
  {
    title: "Marketing Website",
    subtitle: "Started 9 days ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: ["data:image/gif;base64,replace_with_your_image"]
  },
  {
    title: "Banking Website",
    subtitle: "Started 2 weeks ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  },
  {
    title: "Banking UI Kit",
    subtitle: "Started 2 months ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  },
  {
    title: "CRM UI Kit",
    subtitle: "Started 3 months ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  },
  {
    title: "Personal dashboard app",
    subtitle: "Started 4 months ago",
    image: "data:image/gif;base64,replace_with_your_image",
    members: [
      "data:image/gif;base64,replace_with_your_image",
      "data:image/gif;base64,replace_with_your_image"
    ]
  }
];
const marketingIconFeatures = [
  {
    id: 0,
    icon: "/assets/icons/colored/chat.svg",
    title: "Reach more customers",
    content: "Be where your customers are. Target buyers by search behavior, discover new converting keywords, and automatically set bids based on your product goals."
  },
  {
    id: 1,
    icon: "/assets/icons/colored/clock.svg",
    title: "Save hours of time a week",
    content: "Optimize your advertising workflow with automated campaign creation, keyword refinement, and algorithmic bidding. You set the controls, and our AI-technology does the heavy lifting."
  },
  {
    id: 2,
    icon: "/assets/icons/colored/certificate.svg",
    title: "Get profitability insights",
    content: "Connect your PPC spend to individual product costs and see a granular view of your product-level profitability. Confidently make smart decisions with essential metrics and reporting."
  }
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroK = __unplugin_components_0$1;
      const _component_Section = __unplugin_components_0$5;
      const _component_Container = __unplugin_components_0$7;
      const _component_SectionTitle = _sfc_main$q;
      const _component_StackedSection = __unplugin_components_8;
      const _component_ContentBlockH = __unplugin_components_5;
      const _component_FeatureBlockL = __unplugin_components_6$1;
      const _component_SideSectionIcons = __unplugin_components_7;
      const _component_CtaBlockA = __unplugin_components_8$1;
      const _component_ProfileWrapper = __unplugin_components_9;
      const _component_RecommendedServicesGrid = __unplugin_components_10;
      const _component_ContentBlockI = __unplugin_components_11;
      const _component_TestimonialsTabbed = __unplugin_components_12;
      const _component_ResourceGrid = __unplugin_components_13;
      const _component_IconSection = __unplugin_components_14;
      const _directive_background = resolveDirective("background");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroK, null, null, _parent));
      _push(ssrRenderComponent(_component_Section, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "WorkitNg Artisan Booking System",
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
                      title: "WorkitNg Artisan Booking System",
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
                    title: "WorkitNg Artisan Booking System",
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
      _push(ssrRenderComponent(_component_Section, { wave: "wave-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "Featured Artisan Categories",
                    subtitle: "Try out our tools"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ContentBlockH, {
                    title: unref(coloredFeaturesFirst).title,
                    text: unref(coloredFeaturesFirst).text,
                    images: unref(coloredFeaturesFirst).images,
                    links: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ContentBlockH, {
                    title: unref(coloredFeaturesSecond).title,
                    text: unref(coloredFeaturesSecond).text,
                    images: unref(coloredFeaturesSecond).images,
                    compact: "",
                    links: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Featured Artisan Categories",
                      subtitle: "Try out our tools"
                    }),
                    createVNode(_component_ContentBlockH, {
                      title: unref(coloredFeaturesFirst).title,
                      text: unref(coloredFeaturesFirst).text,
                      images: unref(coloredFeaturesFirst).images,
                      links: ""
                    }, null, 8, ["title", "text", "images"]),
                    createVNode(_component_ContentBlockH, {
                      title: unref(coloredFeaturesSecond).title,
                      text: unref(coloredFeaturesSecond).text,
                      images: unref(coloredFeaturesSecond).images,
                      compact: "",
                      links: ""
                    }, null, 8, ["title", "text", "images"])
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
                    title: "Featured Artisan Categories",
                    subtitle: "Try out our tools"
                  }),
                  createVNode(_component_ContentBlockH, {
                    title: unref(coloredFeaturesFirst).title,
                    text: unref(coloredFeaturesFirst).text,
                    images: unref(coloredFeaturesFirst).images,
                    links: ""
                  }, null, 8, ["title", "text", "images"]),
                  createVNode(_component_ContentBlockH, {
                    title: unref(coloredFeaturesSecond).title,
                    text: unref(coloredFeaturesSecond).text,
                    images: unref(coloredFeaturesSecond).images,
                    compact: "",
                    links: ""
                  }, null, 8, ["title", "text", "images"])
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
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "The Workit Artisan Booking Process",
                    subtitle: "Our Process"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FeatureBlockL, {
                    features: unref(itProcess),
                    blob: "",
                    dots: "",
                    links: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "The Workit Artisan Booking Process",
                      subtitle: "Our Process"
                    }),
                    createVNode(_component_FeatureBlockL, {
                      features: unref(itProcess),
                      blob: "",
                      dots: "",
                      links: ""
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
                    title: "The Workit Artisan Booking Process",
                    subtitle: "Our Process"
                  }),
                  createVNode(_component_FeatureBlockL, {
                    features: unref(itProcess),
                    blob: "",
                    dots: "",
                    links: ""
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
                  _push3(ssrRenderComponent(_component_SideSectionIcons, {
                    subtitle: "Manage your Business",
                    title: "One Simple Platform",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos.",
                    features: unref(businessFeatures),
                    image: "/assets/illustrations/features/commerce-feature-3.png",
                    "dark-image": "/assets/illustrations/features/commerce-feature-3-dark.png",
                    "image-width": "900",
                    "image-height": "788",
                    blob: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SideSectionIcons, {
                      subtitle: "Manage your Business",
                      title: "One Simple Platform",
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos.",
                      features: unref(businessFeatures),
                      image: "/assets/illustrations/features/commerce-feature-3.png",
                      "dark-image": "/assets/illustrations/features/commerce-feature-3-dark.png",
                      "image-width": "900",
                      "image-height": "788",
                      blob: ""
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
                  createVNode(_component_SideSectionIcons, {
                    subtitle: "Manage your Business",
                    title: "One Simple Platform",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos.",
                    features: unref(businessFeatures),
                    image: "/assets/illustrations/features/commerce-feature-3.png",
                    "dark-image": "/assets/illustrations/features/commerce-feature-3-dark.png",
                    "image-width": "900",
                    "image-height": "788",
                    blob: ""
                  }, null, 8, ["features"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, mergeProps({ overlay: "" }, ssrGetDirectiveProps(_ctx, _directive_background, {
        src: "https://dummyimage.com/1920x1080/",
        placeholder: "https://dummyimage.com/1920x1080/"
      })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CtaBlockA, {
                    title: "Download Workit Artisan Application",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam\n  dissimile?",
                    "cta-primary": "Get Started",
                    "cta-primary-link": "/about",
                    "cta-secondary": "Learn More",
                    "cta-secondary-link": "/about",
                    boxed: "",
                    shapes: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-6" }, [
                      createVNode(_component_CtaBlockA, {
                        title: "Download Workit Artisan Application",
                        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam\n  dissimile?",
                        "cta-primary": "Get Started",
                        "cta-primary-link": "/about",
                        "cta-secondary": "Learn More",
                        "cta-secondary-link": "/about",
                        boxed: "",
                        shapes: ""
                      })
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
                  createVNode("div", { class: "py-6" }, [
                    createVNode(_component_CtaBlockA, {
                      title: "Download Workit Artisan Application",
                      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam\n  dissimile?",
                      "cta-primary": "Get Started",
                      "cta-primary-link": "/about",
                      "cta-secondary": "Learn More",
                      "cta-secondary-link": "/about",
                      boxed: "",
                      shapes: ""
                    })
                  ])
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
                    title: "Recommended Artisans",
                    subtitle: "Outstanding results"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ProfileWrapper, { large: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_RecommendedServicesGrid, { projects: unref(profileProjects) }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_RecommendedServicesGrid, { projects: unref(profileProjects) }, null, 8, ["projects"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Recommended Artisans",
                      subtitle: "Outstanding results"
                    }),
                    createVNode(_component_ProfileWrapper, { large: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_RecommendedServicesGrid, { projects: unref(profileProjects) }, null, 8, ["projects"])
                      ]),
                      _: 1
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
                  createVNode(_component_SectionTitle, {
                    title: "Recommended Artisans",
                    subtitle: "Outstanding results"
                  }),
                  createVNode(_component_ProfileWrapper, { large: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_RecommendedServicesGrid, { projects: unref(profileProjects) }, null, 8, ["projects"])
                    ]),
                    _: 1
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
                    title: "Our Stats speak for themselves",
                    subtitle: "Outstanding results"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ContentBlockI, { counters: unref(statistics) }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TestimonialsTabbed, {
                    trainees: unref(mentorTestimonials).trainees,
                    mentors: unref(mentorTestimonials).mentors
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Our Stats speak for themselves",
                      subtitle: "Outstanding results"
                    }),
                    createVNode(_component_ContentBlockI, { counters: unref(statistics) }, null, 8, ["counters"]),
                    createVNode(_component_TestimonialsTabbed, {
                      trainees: unref(mentorTestimonials).trainees,
                      mentors: unref(mentorTestimonials).mentors
                    }, null, 8, ["trainees", "mentors"])
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
                    title: "Our Stats speak for themselves",
                    subtitle: "Outstanding results"
                  }),
                  createVNode(_component_ContentBlockI, { counters: unref(statistics) }, null, 8, ["counters"]),
                  createVNode(_component_TestimonialsTabbed, {
                    trainees: unref(mentorTestimonials).trainees,
                    mentors: unref(mentorTestimonials).mentors
                  }, null, 8, ["trainees", "mentors"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { wave: "wave-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "Workit Blog",
                    subtitle: "Free resources to"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ResourceGrid, {
                    posts: unref(posts),
                    limit: 6
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "Workit Blog",
                      subtitle: "Free resources to"
                    }),
                    createVNode(_component_ResourceGrid, {
                      posts: unref(posts),
                      limit: 6
                    }, null, 8, ["posts"])
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
                    title: "Workit Blog",
                    subtitle: "Free resources to"
                  }),
                  createVNode(_component_ResourceGrid, {
                    posts: unref(posts),
                    limit: 6
                  }, null, 8, ["posts"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Section, { "bottom-spaced": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitle, {
                    title: "The Workit Guarantee",
                    subtitle: "Why you should try our Optimization solution"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_IconSection, { features: unref(marketingIconFeatures) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitle, {
                      title: "The Workit Guarantee",
                      subtitle: "Why you should try our Optimization solution"
                    }),
                    createVNode(_component_IconSection, { features: unref(marketingIconFeatures) }, null, 8, ["features"])
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
                    title: "The Workit Guarantee",
                    subtitle: "Why you should try our Optimization solution"
                  }),
                  createVNode(_component_IconSection, { features: unref(marketingIconFeatures) }, null, 8, ["features"])
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
const block0 = {};
if (typeof block0 === "function")
  block0(_sfc_main$7);
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __pages_import_0__ = () => import("./assets/Detail.de69f672.mjs");
const __pages_import_1__ = () => import("./assets/Details.1d04061b.mjs");
const __pages_import_2__ = () => import("./assets/Terms-Of-Service.b86080f7.mjs");
const __pages_import_3__ = () => import("./assets/Search.318fa840.mjs");
const __pages_import_4__ = () => import("./assets/Provider.d8e306dc.mjs");
const __pages_import_5__ = () => import("./assets/Privacy-Policy.d05b327b.mjs");
const __pages_import_7__ = () => import("./assets/Frequently-Asked-Questions.6e41b8e0.mjs");
const __pages_import_8__ = () => import("./assets/Contact.e5ea2923.mjs");
const __pages_import_9__ = () => import("./assets/Categories.9a0c33a2.mjs");
const __pages_import_10__ = () => import("./assets/Blog.a07fccb2.mjs");
const __pages_import_11__ = () => import("./assets/About.67d72b67.mjs");
const __pages_import_12__ = () => import("./assets/_...all_.0e082798.mjs");
const routes = [{ "name": "category-Detail", "path": "/category/detail", "component": __pages_import_0__, "props": true }, { "name": "artisan-Details", "path": "/artisan/details", "component": __pages_import_1__, "props": true }, { "name": "Terms-Of-Service", "path": "/terms-of-service", "component": __pages_import_2__, "props": true }, { "name": "Search", "path": "/search", "component": __pages_import_3__, "props": true }, { "name": "Provider", "path": "/provider", "component": __pages_import_4__, "props": true }, { "name": "Privacy-Policy", "path": "/privacy-policy", "component": __pages_import_5__, "props": true }, { "name": "index", "path": "/", "component": _sfc_main$7, "props": true, "meta": { "layout": "default" } }, { "name": "Frequently-Asked-Questions", "path": "/frequently-asked-questions", "component": __pages_import_7__, "props": true }, { "name": "Contact", "path": "/contact", "component": __pages_import_8__, "props": true }, { "name": "Categories", "path": "/categories", "component": __pages_import_9__, "props": true }, { "name": "Blog", "path": "/blog", "component": __pages_import_10__, "props": true }, { "name": "About", "path": "/about", "component": __pages_import_11__, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": __pages_import_12__, "props": true, "meta": { "layout": "minimal" } }];
function createRouter() {
  const router = createRouter$1({
    history: createMemoryHistory(),
    routes,
    scrollBehavior: async (to, from, savedPosition) => {
      if (to.hash && from === START_LOCATION) {
        return {
          el: to.hash
        };
      }
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: "smooth"
            });
          }, 500);
        });
      }
      if (savedPosition)
        return savedPosition;
      return { top: 0, behavior: "smooth" };
    }
  });
  return router;
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FooterCta",
  __ssrInlineRender: true,
  props: {
    content: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_Title = __unplugin_components_2$3;
      const _component_Button = __unplugin_components_3$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-cta" }, _attrs))} data-v-c065ed48><div class="columns is-vcentered b-columns-half-tablet-p" data-v-c065ed48><div class="column is-6" data-v-c065ed48>`);
      _push(ssrRenderComponent(_component_Subtitle, {
        tag: "h3",
        size: 6,
        weight: "semi",
        narrow: "",
        class: "pb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-c065ed48${_scopeId}>${ssrInterpolate(props.content.subtitle)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.content.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Title, {
        tag: "h2",
        size: 2,
        weight: "bold",
        inverted: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.content.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.content.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="column is-6" data-v-c065ed48><div data-v-c065ed48><div class="buttons is-right is-relative z-1" data-v-c065ed48>`);
      _push(ssrRenderComponent(_component_Button, {
        to: props.content.links[0].to,
        color: "primary",
        elevated: "",
        bold: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.content.links[0].label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.content.links[0].label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        to: props.content.links[1].to,
        bold: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.content.links[1].label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.content.links[1].label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="field is-grouped mx-auto" data-v-c065ed48><!--[-->`);
      ssrRenderList(props.content.benefits, (benefit, index) => {
        _push(`<div class="control" data-v-c065ed48><i class="iconify" data-icon="feather:check" data-v-c065ed48></i><span class="pl-2 pr-3" data-v-c065ed48>${ssrInterpolate(benefit.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
});
const FooterCta_vue_vue_type_style_index_0_scoped_c065ed48_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/footer/modules/FooterCta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c065ed48"]]);
const _imports_0 = "/assets/illustrations/map/map.svg";
const FooterMap_vue_vue_type_style_index_0_scoped_9712e8a0_lang = "";
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    class: "map-bg z-0",
    src: _imports_0,
    alt: "map illustration"
  }, _attrs))} data-v-9712e8a0>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/footer/modules/FooterMap.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9712e8a0"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    content: null,
    color: null
  },
  setup(__props) {
    const props = __props;
    const footerClasses = computed(() => [
      props.color && `footer-${props.color}`,
      props.content.cta && `has-cta`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FooterMap = __unplugin_components_0;
      const _component_FooterCta = __unplugin_components_1$1;
      const _component_Subtitle = __unplugin_components_0$a;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Field = __unplugin_components_0$3;
      const _component_Control = __unplugin_components_1$3;
      const _component_VInput = __unplugin_components_2$1;
      const _component_Button = __unplugin_components_3$4;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["footer", unref(footerClasses)]
      }, _attrs))} data-v-ccf63cc6>`);
      _push(ssrRenderComponent(_component_FooterMap, null, null, _parent));
      if (props.content.cta) {
        _push(ssrRenderComponent(_component_FooterCta, {
          content: props.content.cta
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container" data-v-ccf63cc6><div class="columns footer-columns is-bordered pt-4 pb-6" data-v-ccf63cc6><!--[-->`);
      ssrRenderList(props.content.columns, (column, index) => {
        _push(`<div class="column is-one-third" data-v-ccf63cc6><div class="footer-column" data-v-ccf63cc6>`);
        _push(ssrRenderComponent(_component_Subtitle, {
          size: 6,
          weight: "thin",
          tag: "h4",
          leading: "",
          inverted: "",
          uppercase: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-ccf63cc6${_scopeId}>${ssrInterpolate(column.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(column.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<ul class="footer-column-list" data-v-ccf63cc6><!--[-->`);
        ssrRenderList(column.links, (link, l) => {
          _push(`<li data-v-ccf63cc6>`);
          _push(ssrRenderComponent(_component_RouterLink, {
            to: { name: link.to },
            class: "footer-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--><div class="column is-one-fifth has-text-centered" data-v-ccf63cc6><div class="social-block" data-v-ccf63cc6>`);
      _push(ssrRenderComponent(_component_Field, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Control, { icon: "feather:mail" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VInput, {
                    placeholder: "Subscribe",
                    inverted: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VInput, {
                      placeholder: "Subscribe",
                      inverted: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Control, { icon: "feather:mail" }, {
                default: withCtx(() => [
                  createVNode(_component_VInput, {
                    placeholder: "Subscribe",
                    inverted: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Field, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Control, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    color: "primary",
                    fullwidth: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Subscribe`);
                      } else {
                        return [
                          createTextVNode("Subscribe")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      color: "primary",
                      fullwidth: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Subscribe")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Control, null, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    color: "primary",
                    fullwidth: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Subscribe")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="socials" data-v-ccf63cc6><!--[-->`);
      ssrRenderList(props.content.socials, (social, s) => {
        _push(ssrRenderComponent(_component_RouterLink, {
          key: s,
          class: "footer-link",
          to: social.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="iconify"${ssrRenderAttr("data-icon", social.icon)} data-inline="false" data-v-ccf63cc6${_scopeId}></i><span class="is-sr-only" data-v-ccf63cc6${_scopeId}>${ssrInterpolate(social.name)}</span>`);
            } else {
              return [
                createVNode("i", {
                  class: "iconify",
                  "data-icon": social.icon,
                  "data-inline": "false"
                }, null, 8, ["data-icon"]),
                createVNode("span", { class: "is-sr-only" }, toDisplayString(social.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div><div class="columns is-vcentered pt-6 pb-6" data-v-ccf63cc6><div class="column is-8" data-v-ccf63cc6><div class="is-flex d-column-mobile d-column-tablet-p is-align-items-center" data-v-ccf63cc6><a class="footer-logo-left" href="#" data-v-ccf63cc6><img class="small:mx-auto large:mx-0"${ssrRenderAttr("src", _imports_0$2)} alt="logo" data-v-ccf63cc6><span class="footer-logo-text" data-v-ccf63cc6>Workit Nigeria</span></a><ul class="py-2" data-v-ccf63cc6><!--[-->`);
      ssrRenderList(__props.content.links, (link, l) => {
        _push(`<li class="inline-block px-2" data-v-ccf63cc6>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: link.to,
          class: "footer-link rem-90"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="column is-4 has-text-centered" data-v-ccf63cc6><p class="paragraph medium:text-right is-6" data-config-id="copyright" data-v-ccf63cc6>${ssrInterpolate(__props.content.copyright)}</p></div></div></div></footer>`);
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_ccf63cc6_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/footer/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ccf63cc6"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Buttons",
  __ssrInlineRender: true,
  props: {
    alignment: { type: [Boolean, String], default: void 0 },
    stacked: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const buttonsClasses = computed(() => [
      props.alignment && `is-${props.alignment}`,
      props.stacked && `is-stacked`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["buttons is-relative z-1", unref(buttonsClasses)]
      }, _attrs))} data-v-7d1cf7d9>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const Buttons_vue_vue_type_style_index_0_scoped_7d1cf7d9_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/button/Buttons.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7d1cf7d9"]]);
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registration;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (reloadPage = true) => {
    await registerPromise;
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      await (sendSkipWaitingMessage == null ? void 0 : sendSkipWaitingMessage());
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox, messageSW } = await import("./assets/workbox-window.prod.es5.fd3f491b.mjs");
      sendSkipWaitingMessage = async () => {
        if (registration && registration.waiting) {
          await messageSW(registration.waiting, { type: "SKIP_WAITING" });
        }
      };
      wb = new Workbox("/sw.js", { scope: "/", type: "classic" });
      wb.addEventListener("activated", (event) => {
        if (event.isUpdate)
          ;
        else
          onOfflineReady == null ? void 0 : onOfflineReady();
      });
      {
        const showSkipWaitingPrompt = () => {
          onNeedRefresh == null ? void 0 : onNeedRefresh();
        };
        wb.addEventListener("waiting", showSkipWaitingPrompt);
        wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
      }
      wb.register({ immediate }).then((r) => {
        registration = r;
        if (onRegisteredSW)
          onRegisteredSW("/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  const needRefresh = ref(false);
  const offlineReady = ref(false);
  const updateServiceWorker = registerSW({
    immediate,
    onNeedRefresh() {
      needRefresh.value = true;
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onOfflineReady() {
      offlineReady.value = true;
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onRegistered,
    onRegisteredSW,
    onRegisterError
  });
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReloadPrompt",
  __ssrInlineRender: true,
  props: {
    appName: null
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const { t } = useI18n();
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      loading.value = false;
      offlineReady.value = false;
      needRefresh.value = false;
    };
    const update = async () => {
      loading.value = true;
      await updateServiceWorker();
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __unplugin_components_0$b;
      const _component_Buttons = __unplugin_components_3;
      const _component_Button = __unplugin_components_3$4;
      if (unref(offlineReady) || unref(needRefresh)) {
        _push(ssrRenderComponent(_component_Card, mergeProps({
          class: "pwa-toast",
          role: "alert",
          radius: "smooth"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="pwa-message" data-v-6c8e6905${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push2, _parent2, _scopeId);
              _push2(`<div class="ml-4" data-v-6c8e6905${_scopeId}>`);
              if (unref(offlineReady)) {
                _push2(`<p class="paragraph rem-90" data-v-6c8e6905${_scopeId}>${ssrInterpolate(unref(t)("offline-ready", { appName: props.appName }))}</p>`);
              } else {
                _push2(`<p class="paragraph rem-90" data-v-6c8e6905${_scopeId}>${ssrInterpolate(unref(t)("need-refresh", { appName: props.appName }))}</p>`);
              }
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(_component_Buttons, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(needRefresh)) {
                      _push3(ssrRenderComponent(_component_Button, {
                        color: "primary",
                        icon: "ion:reload-outline",
                        loading: loading.value,
                        raised: "",
                        onClick: () => update()
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(t)("reload-button"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(t)("reload-button")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_Button, {
                      icon: "feather:x",
                      onClick: close
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(t)("close-button"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(t)("close-button")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      unref(needRefresh) ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        color: "primary",
                        icon: "ion:reload-outline",
                        loading: loading.value,
                        raised: "",
                        onClick: () => update()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("reload-button")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                      createVNode(_component_Button, {
                        icon: "feather:x",
                        onClick: close
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("close-button")), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "pwa-message" }, [
                  renderSlot(_ctx.$slots, "logo", {}, void 0, true),
                  createVNode("div", { class: "ml-4" }, [
                    unref(offlineReady) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "paragraph rem-90"
                    }, toDisplayString(unref(t)("offline-ready", { appName: props.appName })), 1)) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "paragraph rem-90"
                    }, toDisplayString(unref(t)("need-refresh", { appName: props.appName })), 1))
                  ])
                ]),
                createVNode(_component_Buttons, null, {
                  default: withCtx(() => [
                    unref(needRefresh) ? (openBlock(), createBlock(_component_Button, {
                      key: 0,
                      color: "primary",
                      icon: "ion:reload-outline",
                      loading: loading.value,
                      raised: "",
                      onClick: () => update()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("reload-button")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"])) : createCommentVNode("", true),
                    createVNode(_component_Button, {
                      icon: "feather:x",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("close-button")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const ReloadPrompt_vue_vue_type_style_index_0_scoped_6c8e6905_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ReloadPrompt.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6c8e6905"]]);
const _sfc_main$1 = defineComponent({
  name: "ClientOnly",
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ClientOnly.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const defaultLayoutId = "default";
const modules = /* @__PURE__ */ Object.assign({ "../layouts/default.vue": () => import("./assets/default.a1b046ea.mjs"), "../layouts/minimal.vue": () => import("./assets/minimal.05eb00e3.mjs"), "../layouts/nav-f.vue": () => import("./assets/nav-f.7682e6d0.mjs") });
const layouts = {};
for (const path in modules) {
  const layoutId = path.replace("../layouts/", "").replace(".vue", "");
  layouts[layoutId] = markRaw(
    defineAsyncComponent({
      loader: modules[path],
      delay: 0,
      suspensible: false
    })
  );
}
function useLayout() {
  const route = useRoute();
  const LayoutComponent = ref(layouts.default || RouterView);
  const layout = computed(
    () => {
      var _a;
      return ((_a = route == null ? void 0 : route.meta) == null ? void 0 : _a.layout) || defaultLayoutId;
    }
  );
  const transition = computed(
    () => {
      var _a, _b;
      return (_b = (_a = route == null ? void 0 : route.meta) == null ? void 0 : _a.transition) != null ? _b : "no-transition";
    }
  );
  watch(
    layout,
    (newLayout) => {
      if (newLayout in layouts) {
        LayoutComponent.value = layouts[newLayout];
      } else {
        console.error(`useLayout: no layout found with id "${newLayout}".`);
      }
    },
    { immediate: true }
  );
  return {
    layout,
    transition,
    LayoutComponent
  };
}
const footer = {
  cta: {
    title: "Maximize your marketplace potential",
    subtitle: "30-day free trial",
    benefits: [
      {
        label: "AI-powered tech"
      },
      {
        label: "Hours of time saved"
      }
    ],
    links: [
      {
        label: "Get Workit",
        to: "/"
      },
      {
        label: "Schedule Meeting",
        to: "/"
      }
    ]
  },
  columns: [
    {
      title: "Quick Links",
      links: [
        {
          label: "About Workit",
          to: "index"
        },
        {
          label: "Frequently Asked Questions",
          to: "index"
        },
        {
          label: "Artisan Categories",
          to: "index"
        },
        {
          label: "Sales Management",
          to: "index"
        },
        {
          label: "Software",
          to: "index"
        }
      ]
    },
    {
      title: "Customer Links",
      links: [
        {
          label: "Register",
          to: "index"
        },
        {
          label: "All providers",
          to: "index"
        },
        {
          label: "Search For Providers",
          to: "index"
        },
        {
          label: "Careers",
          to: "index"
        },
        {
          label: "Latest News",
          to: "index"
        }
      ]
    }
  ],
  socials: [
    {
      icon: "fa-brands:facebook-f",
      link: "/",
      name: "Facebook"
    },
    {
      icon: "fa-brands:twitter",
      link: "/",
      name: "Twitter"
    },
    {
      icon: "fa-brands:linkedin-in",
      link: "/",
      name: "Linkedin"
    },
    {
      icon: "fa-brands:instagram",
      link: "/",
      name: "Instagram"
    }
  ],
  links: [
    {
      label: "Contact Us",
      to: "/contact"
    },
    {
      label: "Privacy",
      to: "/privacy-policy"
    },
    {
      label: "Terms Of Service",
      to: "/terms-of-service"
    }
  ],
  copyright: "\xA9 2022 WorkitNg. All rights reserved."
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VulkApp",
  __ssrInlineRender: true,
  setup(__props) {
    const darkmode = useDarkmode();
    const { LayoutComponent } = useLayout();
    const htmlClasses = computed(() => [darkmode.htmlClass]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = _sfc_main$1;
      const _component_ReloadPrompt = __unplugin_components_1;
      const _component_Footer = __unplugin_components_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<html lang="en-US" class="${ssrRenderClass(unref(htmlClasses))}"${_scopeId}></html><title${_scopeId}>Workit Service Provider Booking System</title><base href="/"${_scopeId}>`);
          } else {
            return [
              createVNode("html", {
                lang: "en-US",
                class: unref(htmlClasses)
              }, null, 2),
              createVNode("title", null, "Workit Service Provider Booking System"),
              createVNode("base", { href: "/" })
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(LayoutComponent)), null, null), _parent);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ReloadPrompt, { "app-name": "WorkitNg" }, {
              logo: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Workit logo png" width="80" height="80"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0$2,
                      alt: "Workit logo png",
                      width: "80",
                      height: "80"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ReloadPrompt, { "app-name": "WorkitNg" }, {
                logo: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0$2,
                    alt: "Workit logo png",
                    width: "80",
                    height: "80"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Footer, {
        content: unref(footer),
        color: "dark"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/VulkApp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Iconify = Module.default || Module;
const collections = JSON.parse('[{"prefix":"ri","width":24,"height":24,"icons":{}},{"prefix":"ion","width":512,"height":512,"icons":{"apps-outline":{"body":"<rect width=\\"80\\" height=\\"80\\" x=\\"64\\" y=\\"64\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"216\\" y=\\"64\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"368\\" y=\\"64\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"64\\" y=\\"216\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"216\\" y=\\"216\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"368\\" y=\\"216\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"64\\" y=\\"368\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"216\\" y=\\"368\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/><rect width=\\"80\\" height=\\"80\\" x=\\"368\\" y=\\"368\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" rx=\\"40\\" ry=\\"40\\"/>"},"brush-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M452.37 59.63h0a40.49 40.49 0 0 0-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 0 0 0-57.26ZM138 336c-29.88 0-54 24.5-54 54.86c0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14c0-30.36-24.12-54.86-54-54.86Z\\"/>"},"business-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32Zm240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16Z\\"/><path fill=\\"currentColor\\" d=\\"M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Z\\"/><ellipse cx=\\"256\\" cy=\\"176\\" fill=\\"currentColor\\" rx=\\"15.95\\" ry=\\"16.03\\" transform=\\"rotate(-45 255.99 175.996)\\"/><path fill=\\"currentColor\\" d=\\"M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79ZM400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z\\"/>"},"calendar-outline":{"body":"<rect width=\\"416\\" height=\\"384\\" x=\\"48\\" y=\\"80\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"48\\"/><circle cx=\\"296\\" cy=\\"232\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"376\\" cy=\\"232\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"296\\" cy=\\"312\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"376\\" cy=\\"312\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"136\\" cy=\\"312\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"216\\" cy=\\"312\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"136\\" cy=\\"392\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"216\\" cy=\\"392\\" r=\\"24\\" fill=\\"currentColor\\"/><circle cx=\\"296\\" cy=\\"392\\" r=\\"24\\" fill=\\"currentColor\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M128 48v32m256-32v32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M464 160H48\\"/>"},"card-outline":{"body":"<rect width=\\"416\\" height=\\"320\\" x=\\"48\\" y=\\"96\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"56\\" ry=\\"56\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"60\\" d=\\"M48 192h416M128 300h48v20h-48z\\"/>"},"color-palette-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9c-11.5-1.9-15.9-4-22.6-10c-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2c-34.2-30.1-80.1-45-127.8-45c-55.7 0-113.9 20.3-158.8 60.1c-83.5 73.8-83.5 194.7 0 268.5c41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4c14.4-12.7 11.99-36.6.1-47.7Z\\"/><circle cx=\\"144\\" cy=\\"208\\" r=\\"32\\" fill=\\"currentColor\\"/><circle cx=\\"152\\" cy=\\"311\\" r=\\"32\\" fill=\\"currentColor\\"/><circle cx=\\"224\\" cy=\\"144\\" r=\\"32\\" fill=\\"currentColor\\"/><circle cx=\\"256\\" cy=\\"367\\" r=\\"48\\" fill=\\"currentColor\\"/><circle cx=\\"328\\" cy=\\"144\\" r=\\"32\\" fill=\\"currentColor\\"/>"},"construct-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M436.67 184.11a27.17 27.17 0 0 1-38.3 0l-22.48-22.49a27.15 27.15 0 0 1 0-38.29l50.89-50.89a.85.85 0 0 0-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 0 1-7.67 27.14l-173 160.76a40.76 40.76 0 1 0 57.57 57.54l162.15-173.3a27 27 0 0 1 26.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94c27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 0 0-1.36-.22Z\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 0 1-3.33-21.35a20.76 20.76 0 0 1 3.5-4.62l15.68-15.29a18.66 18.66 0 0 1 5.63-3.87a18.11 18.11 0 0 1 20 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 0 1 .94 19.92L394.63 444a14 14 0 0 1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m17.34 193.5l29.41-28.74a4.71 4.71 0 0 1 3.41-1.35a4.85 4.85 0 0 1 3.41 1.35h0a9.86 9.86 0 0 0 8.19 2.77c3.83-.42 7.92-1.6 10.57-4.12c6-5.8-.94-17.23 4.34-24.54a207 207 0 0 1 19.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 0 1 206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0 1 10.28 11.64a78.92 78.92 0 0 0-9.21-2.77a68.82 68.82 0 0 0-20-1.26c-13.33 1.09-29.41 7.26-38 14c-13.9 11-19.87 25.72-20.81 44.71c-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 0 1-.34 9.16l-18.22 18a6.88 6.88 0 0 1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 0 0-18.27 3.87a11.39 11.39 0 0 0-2.64 2a14.14 14.14 0 0 0 .42 20.08l1.71 1.6a4.63 4.63 0 0 1 0 6.64L71.73 246.6a4.71 4.71 0 0 1-3.41 1.4a4.86 4.86 0 0 1-3.41-1.35l-47.57-46.43a4.88 4.88 0 0 1 0-6.72Z\\"/>"},"diamond-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m35.42 188.21l207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75ZM48 176h416\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m400 64l-48 112l-96-128M112 64l48 112l96-128m0 400l-96-272m96 272l96-272\\"/>"},"document-attach-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M288 72v120a32 32 0 0 0 32 32h120\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144\\"/>"},"gift-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M256 104v56h56a56 56 0 1 0-56-56Zm0 0v56h-56a56 56 0 1 1 56-56Z\\"/><rect width=\\"384\\" height=\\"112\\" x=\\"64\\" y=\\"160\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"32\\" ry=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272m160-112v304\\"/>"},"glasses-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M224 232a32 32 0 0 1 64 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16Zm384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16Z\\"/>"},"grid-outline":{"body":"<rect width=\\"176\\" height=\\"176\\" x=\\"48\\" y=\\"48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"20\\" ry=\\"20\\"/><rect width=\\"176\\" height=\\"176\\" x=\\"288\\" y=\\"48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"20\\" ry=\\"20\\"/><rect width=\\"176\\" height=\\"176\\" x=\\"48\\" y=\\"288\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"20\\" ry=\\"20\\"/><rect width=\\"176\\" height=\\"176\\" x=\\"288\\" y=\\"288\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"20\\" ry=\\"20\\"/>"},"headset-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"m108.39 270.13l-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87Zm295.22 0l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z\\"/>"},"help-buoy-outline":{"body":"<circle cx=\\"256\\" cy=\\"256\\" r=\\"208\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><circle cx=\\"256\\" cy=\\"256\\" r=\\"80\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m208 54l8 132m80 0l8-132m-96 404l8-132m80 0l8 132m154-250l-132 8m0 80l132 8M54 208l132 8m0 80l-132 8\\"/>"},"layers-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09ZM160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48\\"/>"},"magnet-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M421.83 293.82A144 144 0 0 0 218.18 90.17\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M353.94 225.94a48 48 0 0 0-67.88-67.88\\"/><path fill=\\"currentColor\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M192 464v-48m-101.82 5.82l33.94-33.94M48 320h48\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M286.06 158.06L172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17m203.65 203.65L308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89m67.88 67.88l67.89 67.88\\"/>"},"mail-unread-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M320 96H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h334.73a40 40 0 0 0 40-40V239\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"m112 160l144 112l87-65.67\\"/><circle cx=\\"431.95\\" cy=\\"128.05\\" r=\\"47.95\\" fill=\\"currentColor\\"/><path fill=\\"currentColor\\" d=\\"M432 192a63.95 63.95 0 1 1 63.95-63.95A64 64 0 0 1 432 192Zm0-95.9a32 32 0 1 0 31.95 32a32 32 0 0 0-31.95-32Z\\"/>"},"phone-portrait-outline":{"body":"<rect width=\\"256\\" height=\\"480\\" x=\\"128\\" y=\\"16\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"48\\" ry=\\"48\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24\\"/>"},"reader-outline":{"body":"<rect width=\\"320\\" height=\\"416\\" x=\\"96\\" y=\\"48\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" rx=\\"48\\" ry=\\"48\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 128h160m-160 80h160m-160 80h80\\"/>"},"reload-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128\\"/><path fill=\\"currentColor\\" d=\\"M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42Z\\"/>"},"ribbon-outline":{"body":"<circle cx=\\"256\\" cy=\\"160\\" r=\\"128\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8\\"/><circle cx=\\"256\\" cy=\\"160\\" r=\\"64\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\"/>"},"rocket-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5c-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180.29 180.29 0 0 0 1.1 18.3a18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3a179.91 179.91 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17c7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95ZM298.66 213.67a42.7 42.7 0 1 1 60.38 0a42.65 42.65 0 0 1-60.38 0Z\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32\\"/>"},"save-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63ZM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64Zm48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16Z\\"/>"},"shapes-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M336 320H32L184 48l152 272z\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M265.32 194.51A144 144 0 1 1 192 320\\"/>"},"sparkles-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M259.92 262.91L216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17ZM108 68L88 16L68 68L16 88l52 20l20 52l20-52l52-20l-52-20zm318.67 49.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z\\"/>"},"speedometer-outline":{"body":"<path fill=\\"currentColor\\" d=\\"m326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14Z\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64Z\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\" d=\\"M256 128v32m160 128h-32m-256 0H96m69.49-90.51l-22.63-22.63m203.65 22.63l22.63-22.63\\"/>"},"storefront-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M448 448V240m-384 0v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23c0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48ZM32 464h448M136 288h80a24 24 0 0 1 24 24v88h0h-128h0v-88a24 24 0 0 1 24-24Zm152 176V312a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24v152\\"/>"},"timer-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194c106.2.2 192-85.83 192-192c0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152\\"/><path fill=\\"currentColor\\" d=\\"m233.38 278.63l-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26a33.21 33.21 0 0 1-8.07-7.94Z\\"/>"},"trophy-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M176 464h160m-80 0V336m128-112c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79c0 64.28 83 112 128 112S384 288.28 384 224Z\\"/><path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"32\\" d=\\"M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112\\"/>"}}},{"prefix":"feather","width":24,"height":24,"icons":{"arrow-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 12h14m-7-7l7 7l-7 7\\"/>"},"bell":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9m-4.27 13a2 2 0 0 1-3.46 0\\"/>"},"briefcase":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"20\\" height=\\"14\\" x=\\"2\\" y=\\"7\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\"/></g>"},"check":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20 6L9 17l-5-5\\"/>"},"chevron-down":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"m6 9l6 6l6-6\\"/>"},"circle":{"body":"<circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"/>"},"clock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 6v6l4 2\\"/></g>"},"coffee":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zm4-7v3m4-3v3m4-3v3\\"/>"},"credit-card":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><rect width=\\"22\\" height=\\"16\\" x=\\"1\\" y=\\"4\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M1 10h22\\"/></g>"},"eye":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8z\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"facebook":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\"/>"},"github":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\"/>"},"grid":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z\\"/>"},"heart":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78z\\"/>"},"linkedin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z\\"/><circle cx=\\"4\\" cy=\\"4\\" r=\\"2\\"/></g>"},"mail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\"/><path d=\\"m22 6l-10 7L2 6\\"/></g>"},"message-circle":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\\"/>"},"plus":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 5v14m-7-7h14\\"/>"},"search":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"m21 21l-4.35-4.35\\"/></g>"},"twitter":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\"/>"},"user":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\"/><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\"/></g>"},"users":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\"><path d=\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"9\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75\\"/></g>"},"x":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M18 6L6 18M6 6l12 12\\"/>"},"zap":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 2L3 14h9l-1 8l10-12h-9l1-8z\\"/>"}}},{"prefix":"ph","width":256,"height":256,"icons":{"article-duotone":{"body":"<rect width=\\"192\\" height=\\"160\\" x=\\"32\\" y=\\"48\\" fill=\\"currentColor\\" opacity=\\".2\\" rx=\\"8\\"/><path fill=\\"currentColor\\" d=\\"M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 160H40V56h176v144Z\\"/><path fill=\\"currentColor\\" d=\\"M180 88H76a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16Zm0 32H76a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16Zm0 32H76a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16Z\\"/>"},"atom-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M210 210c-17.2 17.2-67.8-5.6-113.1-50.9S28.8 63.2 46 46s67.8 5.6 113.1 50.9S227.2 192.8 210 210Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M196.1 128a195.3 195.3 0 0 0 19.2-32.7c11.1-24.6 11.2-44.2.4-55c-17.5-17.4-53.2-4.9-87.7 19.7c-34.5-24.6-70.2-37.1-87.7-19.7c-10.8 10.8-10.7 30.4.4 55A195.3 195.3 0 0 0 59.9 128a195.3 195.3 0 0 0-19.2 32.7c-11.1 24.6-11.2 44.2-.4 55c5.6 5.6 13.1 8.1 21.9 8.1c18.4 0 42.4-11.1 65.8-27.8c23.4 16.7 47.4 27.8 65.8 27.8c8.8 0 16.3-2.5 21.9-8.1c10.8-10.8 10.7-30.4-.4-55a195.3 195.3 0 0 0-19.2-32.7Zm-2.3-79.7c4.8 0 8.4 1.1 10.6 3.3c5.6 5.7 4.2 19.5-3.7 37.1a169.7 169.7 0 0 1-14.8 25.9c-6.4-7.9-13.5-15.7-21.1-23.4s-15.4-14.5-23.5-21.1c21.9-14.9 40.7-21.8 52.5-21.8ZM176.1 128a277.3 277.3 0 0 1-22.6 25.5a314.1 314.1 0 0 1-25.5 22.7a314.1 314.1 0 0 1-25.5-22.7A277.3 277.3 0 0 1 79.9 128a277.3 277.3 0 0 1 22.6-25.5A314.1 314.1 0 0 1 128 79.8a314.1 314.1 0 0 1 25.5 22.7a277.3 277.3 0 0 1 22.6 25.5ZM55.3 88.7c-7.9-17.6-9.3-31.4-3.7-37.1c2.2-2.2 5.8-3.3 10.6-3.3c11.8 0 30.6 6.9 52.5 21.8c-8.1 6.6-16 13.7-23.5 21.1s-14.7 15.5-21.1 23.4a169.7 169.7 0 0 1-14.8-25.9Zm-3.7 115.7c-5.6-5.7-4.2-19.5 3.7-37.1a169.7 169.7 0 0 1 14.8-25.9c6.4 7.9 13.5 15.7 21.1 23.4s15.4 14.5 23.5 21.1c-30.8 20.9-55.5 26.1-63.1 18.5Zm152.8 0c-2.2 2.2-5.8 3.3-10.6 3.3c-11.8 0-30.6-6.9-52.5-21.8c8.1-6.6 16-13.7 23.5-21.1s14.7-15.5 21.1-23.4a169.7 169.7 0 0 1 14.8 25.9c7.9 17.6 9.3 31.4 3.7 37.1ZM140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z\\"/>"},"bank-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M24 96h208L128 32L24 96z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M24 104h24v64H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16h-16v-64h24a8 8 0 0 0 4.2-14.8l-104-64a7.9 7.9 0 0 0-8.4 0l-104 64A8 8 0 0 0 24 104Zm40 0h32v64H64Zm80 0v64h-32v-64Zm48 64h-32v-64h32ZM128 41.4L203.7 88H52.3ZM248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8Z\\"/>"},"barricade-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M232 80v68l-76-76h68a8 8 0 0 1 8 8ZM32 72a8 8 0 0 0-8 8v4l76 76h72L84 72Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M240 80a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16Zm-16 48.7L175.3 80H224ZM80.7 80l72 72h-49.4L32 80.7V80ZM32 103.3L80.7 152H32ZM224 152h-48.7l-72-72h49.4l71.3 71.3v.7Z\\"/>"},"brain-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M240 132a48.1 48.1 0 0 1-32 45.3v6.7a40 40 0 0 1-80 0a40 40 0 0 1-80 0v-6.7a48.1 48.1 0 0 1 0-90.6V72a40 40 0 0 1 80 0a40 40 0 0 1 80 0v14.7a48.1 48.1 0 0 1 32 45.3Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M248 132a56 56 0 0 0-32-50.6V72a48 48 0 0 0-88-26.5A48 48 0 0 0 40 72v9.4a56 56 0 0 0 0 101.2v1.4a48 48 0 0 0 88 26.5a48 48 0 0 0 88-26.5v-1.4a56.1 56.1 0 0 0 32-50.6ZM88 216a32 32 0 0 1-31.8-28.6a49.3 49.3 0 0 0 7.8.6h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.3-77.7a8.1 8.1 0 0 0 5.3-7.6V72a32 32 0 0 1 64 0v76.3A47.4 47.4 0 0 0 88 136a8 8 0 0 0 0 16a32 32 0 0 1 0 64Zm104-44h-8a8 8 0 0 0 0 16h8a49.3 49.3 0 0 0 7.8-.6A32 32 0 1 1 168 152a8 8 0 0 0 0-16a47.4 47.4 0 0 0-32 12.3V72a32 32 0 0 1 64 0v14.7a8.1 8.1 0 0 0 5.3 7.6A40 40 0 0 1 192 172ZM60 128a8 8 0 0 1 0-16a20.1 20.1 0 0 0 20-20v-8a8 8 0 0 1 16 0v8a36 36 0 0 1-36 36Zm144-8a8 8 0 0 1-8 8a36 36 0 0 1-36-36v-8a8 8 0 0 1 16 0v8a20.1 20.1 0 0 0 20 20a8 8 0 0 1 8 8Z\\"/>"},"briefcase-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128 152a190.3 190.3 0 0 1-96-25.7V208a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-81.7a191.3 191.3 0 0 1-96 25.7Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M216 64h-40v-8a24.1 24.1 0 0 0-24-24h-48a24.1 24.1 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16ZM96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.6a183.6 183.6 0 0 1-88 22.4a183.6 183.6 0 0 1-88-22.4V80Zm0 128H40v-68.4a199.7 199.7 0 0 0 88 20.4a199.4 199.4 0 0 0 88-20.4V208Zm-108-88a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8Z\\"/>"},"browser-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M32 96h192V56a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v32H40V56Zm0 144H40v-96h176v96Z\\"/>"},"browsers-thin":{"body":"<path fill=\\"currentColor\\" d=\\"M216 44H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM40 84h144a4 4 0 0 1 4 4v20H36V88a4 4 0 0 1 4-4Zm148 116a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h152Zm32-32a4 4 0 0 1-4 4h-20V88a12 12 0 0 0-12-12H68V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z\\"/>"},"buildings-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M144 216V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v176\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M240 208h-8V104a16 16 0 0 0-16-16h-64V40a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16Zm-24-104v104h-64V104ZM40 40h96v168H40Zm16 32a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8Zm64 64a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm-16 40a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm96 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm-32-40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8Z\\"/>"},"cake-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128 8s46.2 40 0 56c-48-16 0-56 0-56Zm78 80H50a23.9 23.9 0 0 0-24 24v13.3c0 19.1 15.6 35.1 34.7 34.7A34 34 0 0 0 94 126a34 34 0 0 0 68 0a34 34 0 0 0 33.3 34c19.1.4 34.7-15.6 34.7-34.7V112a23.9 23.9 0 0 0-24-24Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M206 80h-70V69.4c11.5-5.1 18.2-12.5 20.1-22C160.2 26 136 4.3 133.2 2a7.8 7.8 0 0 0-10.3-.1C120 4.2 95.1 25.7 99.1 47.2c1.8 9.7 8.9 17.2 20.9 22.3V80H50a32.1 32.1 0 0 0-32 32v13.3A43.3 43.3 0 0 0 30.9 156l1.1 1v51a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-51l1.1-1a43.3 43.3 0 0 0 12.9-30.7V112a32.1 32.1 0 0 0-32-32Zm-91.2-35.8c-1.5-7.8 6.7-18.4 13.1-25.1c6.2 6.7 14 17.4 12.5 25.3c-.9 4.4-5.1 8.1-12.5 11.1c-5.8-2.3-12.1-5.9-13.1-11.3ZM34 112a16 16 0 0 1 16-16h156a16 16 0 0 1 16 16v13.3a27.5 27.5 0 0 1-8.1 19.3a25.7 25.7 0 0 1-18.4 7.4a26.1 26.1 0 0 1-25.5-26a8.3 8.3 0 0 0-1.8-5.1l-.5-.6a9 9 0 0 0-2.6-1.7a8.3 8.3 0 0 0-6.2 0a9 9 0 0 0-2.6 1.7l-.5.6a8.3 8.3 0 0 0-1.8 5.1a26 26 0 0 1-52 0a8.3 8.3 0 0 0-1.8-5.1l-.5-.6a9 9 0 0 0-2.6-1.7a8.3 8.3 0 0 0-6.2 0a9 9 0 0 0-2.6 1.7l-.5.6A8.3 8.3 0 0 0 86 126a26.1 26.1 0 0 1-25.5 26a25.7 25.7 0 0 1-18.4-7.4a27.5 27.5 0 0 1-8.1-19.3Zm174 96H48v-41.8a39.3 39.3 0 0 0 12.8 1.8A42.2 42.2 0 0 0 94 150.6a41.9 41.9 0 0 0 68 0a42.2 42.2 0 0 0 33.2 17.4h.8a40.6 40.6 0 0 0 12-1.8Z\\"/>"},"car-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M224 184v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8v-24Zm-152 0v24a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-24Zm152-64l-29.9-67.2a8 8 0 0 0-7.3-4.8H69.2a8 8 0 0 0-7.3 4.8L32 120Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M240 112h-10.8l-27.8-62.5a15.9 15.9 0 0 0-14.6-9.5H69.2a15.9 15.9 0 0 0-14.6 9.5L26.8 112H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16ZM69.2 56h117.6l24.9 56H44.3ZM64 208H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176Z\\"/><path fill=\\"currentColor\\" d=\\"M64 160h16a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16Zm112 0h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16Z\\"/>"},"chart-bar-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M156 40h56v168h-56z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M228 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40h-48a8 8 0 0 0-8 8v40H44a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h200a8 8 0 0 0 0-16ZM108 96h40v104h-40Zm-56 48h40v56H52Zm112 56V48h40v152Z\\"/>"},"chart-pie-slice-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M33.6 145.6A101.9 101.9 0 0 1 32 128a95.9 95.9 0 0 1 64-90.5v72Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M100 116.5a8.1 8.1 0 0 0 4-7v-72a8 8 0 0 0-10.7-7.6A104.3 104.3 0 0 0 24 128a109.1 109.1 0 0 0 1.7 19a8 8 0 0 0 4.6 5.8a7.6 7.6 0 0 0 3.3.8a8 8 0 0 0 4-1.1ZM88 49.6v55.3l-47.9 27.7c-.1-1.6-.1-3.1-.1-4.6a88.3 88.3 0 0 1 48-78.4Z\\"/><path fill=\\"currentColor\\" d=\\"M218.3 76.4a.8.8 0 0 1-.2-.4l-.4-.5A103.9 103.9 0 0 0 128 24a8 8 0 0 0-8 8v91.4l-79.1 45.7a7.9 7.9 0 0 0-3 10.9v.2l.3.5A104 104 0 0 0 232 128a103.5 103.5 0 0 0-13.7-51.6Zm-82.3-36a88.2 88.2 0 0 1 63.9 36.9L136 114.1ZM128 216a88.3 88.3 0 0 1-71.9-37.3l151.8-87.6A88 88 0 0 1 128 216Z\\"/>"},"chat-centered-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m149.7 195.9l-14.8 24.7a8.1 8.1 0 0 1-13.8 0l-14.8-24.7a7.9 7.9 0 0 0-6.8-3.9H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v128a8 8 0 0 1-8 8h-59.5a7.9 7.9 0 0 0-6.8 3.9Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M128 232.4a15.9 15.9 0 0 1-13.7-7.7L99.5 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16h-59.5l-6.8-4.1l6.8 4.1l-14.8 24.7a15.9 15.9 0 0 1-13.7 7.7ZM40 56v128h59.5a16.1 16.1 0 0 1 13.7 7.8l14.8 24.6l14.8-24.6a16.2 16.2 0 0 1 13.7-7.8H216V56Z\\"/>"},"chat-circle-text-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M45.4 177A95.9 95.9 0 1 1 79 210.6L45.8 220a7.9 7.9 0 0 1-9.8-9.8l9.4-33.2Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M128 24a104 104 0 0 0-91.2 154l-8.5 30A15.9 15.9 0 0 0 48 227.7l30-8.5A104 104 0 1 0 128 24Zm0 192a88.4 88.4 0 0 1-44.9-12.3a8.7 8.7 0 0 0-4.1-1.1a8.3 8.3 0 0 0-2.2.3l-33.2 9.5l9.5-33.2a8.2 8.2 0 0 0-.8-6.3A88 88 0 1 1 128 216Z\\"/><path fill=\\"currentColor\\" d=\\"M160 104H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm0 32H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Z\\"/>"},"chat-teardrop-text-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M132 216H47.7a7.6 7.6 0 0 1-7.7-7.7V124a92 92 0 0 1 92-92a92 92 0 0 1 92 92a92 92 0 0 1-92 92Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M132 24A100.2 100.2 0 0 0 32 124v84.3A15.7 15.7 0 0 0 47.7 224H132a100 100 0 0 0 0-200Zm0 184H48v-84a84 84 0 1 1 84 84Z\\"/><path fill=\\"currentColor\\" d=\\"M160 104h-60a8 8 0 0 0 0 16h60a8 8 0 0 0 0-16Zm0 32h-60a8 8 0 0 0 0 16h60a8 8 0 0 0 0-16Z\\"/>"},"chats-circle-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M92.1 175.9a72 72 0 0 0 104.7 38l24.8 7.1a6 6 0 0 0 7.4-7.4l-7.1-24.8a72 72 0 0 0-58-108.7A70.2 70.2 0 0 1 168 104a72 72 0 0 1-72 72Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M230.5 189.8a80 80 0 0 0-60.9-117.2a80 80 0 1 0-144.1 69.2l-6.2 21.6a13.9 13.9 0 0 0 17.3 17.3l21.6-6.2a80.8 80.8 0 0 0 28.2 8.9a80 80 0 0 0 111.4 39.1l21.6 6.2a13.9 13.9 0 0 0 17.3-17.3ZM59.3 157.9a7.8 7.8 0 0 0-2.2.3l-21.4 6.2l6.1-21.5a7.9 7.9 0 0 0-.8-6.2A64 64 0 1 1 96 168a64.8 64.8 0 0 1-32.7-8.9a7.2 7.2 0 0 0-4-1.2Zm155.8 26.8a7.6 7.6 0 0 0-.9 6.2l6.2 21.5l-21.4-6.2a7.7 7.7 0 0 0-6.3.9a64.2 64.2 0 0 1-88.4-23.5A80.2 80.2 0 0 0 176 104a84.5 84.5 0 0 0-1.3-14.3A64 64 0 0 1 224 152a64.8 64.8 0 0 1-8.9 32.7Z\\"/>"},"circle-wavy-check-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M232 128c0 12.5-17.8 22-22.7 33.7s1.4 30.6-7.8 39.8s-28.5 3.1-39.8 7.8S140.5 232 128 232s-22-17.8-33.7-22.7s-30.6 1.4-39.8-7.8s-3.1-28.5-7.8-39.8S24 140.5 24 128s17.8-22 22.7-33.7s-1.4-30.6 7.8-39.8s28.5-3.1 39.8-7.8S115.5 24 128 24s22 17.8 33.7 22.7s30.6-1.4 39.8 7.8s3.1 28.5 7.8 39.8S232 115.5 232 128Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M225.9 102.8c-3.8-3.9-7.7-8-9.2-11.5s-1.4-8.7-1.5-14c-.1-9.7-.3-20.8-8-28.5s-18.8-7.9-28.5-8c-5.3-.1-10.7-.2-14-1.5s-7.6-5.4-11.5-9.2C146.3 23.5 138.4 16 128 16s-18.3 7.5-25.2 14.1c-3.9 3.8-8 7.7-11.5 9.2s-8.7 1.4-14 1.5c-9.7.1-20.8.3-28.5 8s-7.9 18.8-8 28.5c-.1 5.3-.2 10.7-1.5 14s-5.4 7.6-9.2 11.5C23.5 109.7 16 117.6 16 128s7.5 18.3 14.1 25.2c3.8 3.9 7.7 8 9.2 11.5s1.4 8.7 1.5 14c.1 9.7.3 20.8 8 28.5s18.8 7.9 28.5 8c5.3.1 10.7.2 14 1.5s7.6 5.4 11.5 9.2c6.9 6.6 14.8 14.1 25.2 14.1s18.3-7.5 25.2-14.1c3.9-3.8 8-7.7 11.5-9.2s8.7-1.4 14-1.5c9.7-.1 20.8-.3 28.5-8s7.9-18.8 8-28.5c.1-5.3.2-10.7 1.5-14s5.4-7.6 9.2-11.5c6.6-6.9 14.1-14.8 14.1-25.2s-7.5-18.3-14.1-25.2Zm-11.6 39.3c-4.8 5-9.7 10.2-12.4 16.5s-2.6 13.1-2.7 19.8s-.2 14.4-3.3 17.5s-10.4 3.2-17.5 3.3s-13.7.2-19.8 2.7s-11.5 7.6-16.5 12.4S132 224 128 224s-9.1-4.9-14.1-9.7s-10.2-9.7-16.5-12.4s-13.1-2.6-19.8-2.7s-14.4-.2-17.5-3.3s-3.2-10.4-3.3-17.5s-.2-13.7-2.7-19.8s-7.6-11.5-12.4-16.5S32 132 32 128s4.9-9.1 9.7-14.1s9.7-10.2 12.4-16.5s2.6-13.1 2.7-19.8s.2-14.4 3.3-17.5s10.4-3.2 17.5-3.3s13.7-.2 19.8-2.7s11.5-7.6 16.5-12.4S124 32 128 32s9.1 4.9 14.1 9.7s10.2 9.7 16.5 12.4s13.1 2.6 19.8 2.7s14.4.2 17.5 3.3s3.2 10.4 3.3 17.5s.2 13.7 2.7 19.8s7.6 11.5 12.4 16.5S224 124 224 128s-4.9 9.1-9.7 14.1Zm-36.5-43.6a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3Z\\"/>"},"circles-four-duotone":{"body":"<circle cx=\\"76\\" cy=\\"180\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"76\\" cy=\\"76\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"180\\" cy=\\"76\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"180\\" cy=\\"180\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M76 32a44 44 0 1 0 44 44a44 44 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28.1 28.1 0 0 1-28 28Zm104 16a44 44 0 1 0-44-44a44 44 0 0 0 44 44Zm0-72a28 28 0 1 1-28 28a28.1 28.1 0 0 1 28-28Zm0 88a44 44 0 1 0 44 44a44 44 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28.1 28.1 0 0 1-28 28ZM76 136a44 44 0 1 0 44 44a44 44 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28.1 28.1 0 0 1-28 28Z\\"/>"},"circles-three-duotone":{"body":"<circle cx=\\"128\\" cy=\\"68\\" r=\\"40\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"188\\" cy=\\"172\\" r=\\"40\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"68\\" cy=\\"172\\" r=\\"40\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M176 68a48 48 0 1 0-48 48a48 48 0 0 0 48-48Zm-48 32a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm60 24a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32ZM68 124a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Z\\"/>"},"circles-three-plus-duotone":{"body":"<circle cx=\\"76\\" cy=\\"76\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"180\\" cy=\\"76\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><circle cx=\\"76\\" cy=\\"180\\" r=\\"36\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M76 32a44 44 0 1 0 44 44a44 44 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28.1 28.1 0 0 1-28 28Zm104 16a44 44 0 1 0-44-44a44 44 0 0 0 44 44Zm0-72a28 28 0 1 1-28 28a28.1 28.1 0 0 1 28-28ZM76 136a44 44 0 1 0 44 44a44 44 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28.1 28.1 0 0 1-28 28Zm132-36h-20v-20a8 8 0 0 0-16 0v20h-20a8 8 0 0 0 0 16h20v20a8 8 0 0 0 16 0v-20h20a8 8 0 0 0 0-16Z\\"/>"},"clock-duotone":{"body":"<circle cx=\\"128\\" cy=\\"128\\" r=\\"96\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z\\"/><path fill=\\"currentColor\\" d=\\"M184 120h-48V72a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16Z\\"/>"},"code-simple-light":{"body":"<path fill=\\"currentColor\\" d=\\"M92 68.5L25 128l67 59.5a6 6 0 0 1-4 10.5a6.2 6.2 0 0 1-4-1.5l-72-64a6.1 6.1 0 0 1 0-9l72-64a6 6 0 0 1 8 9Zm152 55l-72-64a6 6 0 1 0-8 9l67 59.5l-67 59.5a6 6 0 0 0-.5 8.5a6.1 6.1 0 0 0 8.5.5l72-64a6.1 6.1 0 0 0 0-9Z\\"/>"},"codesandbox-logo-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m177 47.5l-49 27.6l-49-27.6l45.1-25.3a7.8 7.8 0 0 1 7.8 0Zm-1 106.4V209l43.9-24.7a8.1 8.1 0 0 0 4.1-7v-50.4ZM32 177.3a8.1 8.1 0 0 0 4.1 7L80 209v-55.1l-48-27Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M232 78.7a15.6 15.6 0 0 0-2.1-7.9h-.1a15.5 15.5 0 0 0-6-5.9l-88-49.5a16 16 0 0 0-15.6 0l-88 49.5a16.2 16.2 0 0 0-6 5.9a.1.1 0 0 1-.1.1v.2a15 15 0 0 0-2.1 7.6v98.6a16.1 16.1 0 0 0 8.2 14l88 49.5a16.5 16.5 0 0 0 7.2 2h1.3a16.1 16.1 0 0 0 7.1-2l88-49.5a16.1 16.1 0 0 0 8.2-14Zm-64 75.2v50.4l-31.9 18l.8-89.6l79.1-45v34.5L172.1 147a7.9 7.9 0 0 0-4.1 6.9ZM83.9 147L40 122.2V87.6l80.9 45.1l-.8 89.7L88 204.3v-50.4a7.9 7.9 0 0 0-4.1-6.9ZM79 56.7L124.1 82a7.5 7.5 0 0 0 7.8 0L177 56.7L207.7 74l-78.8 44.8L48.4 74Zm49-27.5l32.6 18.3L128 65.9L95.4 47.5ZM40 140.6l32 18v36.7l-32-18Zm144 54.7v-36.7l32-18v36.7Z\\"/>"},"coins-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M96 120c-44.2 0-80-16.1-80-36s35.8-36 80-36s80 16.1 80 36s-35.8 36-80 36Zm80-23.3V124c0 18-29.2 32.9-67.5 35.6c13.9 5.2 31.9 8.4 51.5 8.4c44.2 0 80-16.1 80-36c0-17.4-27.5-31.9-64-35.3Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M184 89.6V84c0-25.1-37.8-44-88-44S8 58.9 8 84v40c0 20.9 26.2 37.5 64 42.5v5.5c0 25.1 37.8 44 88 44s88-18.9 88-44v-40c0-20.7-25.4-37.3-64-42.4Zm48 42.4c0 13.2-30.8 28-72 28c-3.7 0-7.4-.1-11.1-.4C170.5 151.8 184 139 184 124v-18.3c29.9 4.5 48 16.6 48 26.3ZM72 150.2v-23.7a184 184 0 0 0 24 1.5a184 184 0 0 0 24-1.5v23.7a151.1 151.1 0 0 1-24 1.8a151.1 151.1 0 0 1-24-1.8Zm96-40.3V124c0 8.4-12.4 17.4-32 22.9v-23.4c12.9-3.1 23.8-7.8 32-13.6ZM96 56c41.2 0 72 14.8 72 28s-30.8 28-72 28s-72-14.8-72-28s30.8-28 72-28Zm-72 68v-14.1c8.2 5.8 19.1 10.5 32 13.6v23.4c-19.6-5.5-32-14.5-32-22.9Zm64 48v-4.2l8 .2q5.9 0 11.4-.3c4 1.4 8.2 2.6 12.6 3.7v23.5c-19.6-5.5-32-14.5-32-22.9Zm48 26.2v-23.8a188.4 188.4 0 0 0 24 1.6a184 184 0 0 0 24-1.5v23.7a160.9 160.9 0 0 1-48 0Zm64-3.3v-23.4c12.9-3.1 23.8-7.8 32-13.6V172c0 8.4-12.4 17.4-32 22.9Z\\"/>"},"confetti-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m57.6 153.6l44.8 44.8l-54.3 19.7a7.9 7.9 0 0 1-10.2-10.2Zm141.5-2.5l-94.2-94.2a8 8 0 0 0-13.2 2.9l-14.9 41l78.4 78.4l41-14.9a8 8 0 0 0 2.9-13.2Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M110.5 51.2a15.7 15.7 0 0 0-14.7-4.3a16 16 0 0 0-11.6 10.2L30.3 205.2a16.1 16.1 0 0 0 15 21.4a17.1 17.1 0 0 0 5.5-.9l148.1-53.9a16 16 0 0 0 10.2-11.6a15.7 15.7 0 0 0-4.3-14.7Zm-6 137.9l-37.6-37.6L80 115.3l60.7 60.7Zm-59.1 21.5l15.4-42.5l27.1 27.1Zm111.9-40.7L86.1 98.7l13.1-36.2l94.3 94.3ZM160 72a38.2 38.2 0 0 1 3.8-15.6C169.1 45.8 179.1 40 192 40c6.7 0 11-2.3 13.7-7.2a22.3 22.3 0 0 0 2.3-8.9a7.9 7.9 0 0 1 8-7.9a8 8 0 0 1 8 8c0 12.9-8.5 32-32 32c-6.7 0-11 2.3-13.7 7.2a22.3 22.3 0 0 0-2.3 8.9a7.9 7.9 0 0 1-8 7.9a8 8 0 0 1-8-8Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.7 82.3a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0l-16-16a8.1 8.1 0 0 1 11.4-11.4Zm4.8-42.7l-24 8a7.3 7.3 0 0 1-2.5.4a8 8 0 0 1-2.5-15.6l24-8a8 8 0 0 1 5 15.2Z\\"/>"},"cookie-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M224 127.4a95.6 95.6 0 0 1-28.2 68.5c-36.9 36.9-97.3 37.3-134.7.9A96 96 0 0 1 128.6 32a8.1 8.1 0 0 1 7.8 9.8a32 32 0 0 0 30.8 39a8 8 0 0 1 8 8a32 32 0 0 0 39 30.8a8.1 8.1 0 0 1 9.8 7.8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M225.9 114.9a15.8 15.8 0 0 0-13.4-3.1a23.9 23.9 0 0 1-29.3-23.1a16 16 0 0 0-15.9-15.9a23.9 23.9 0 0 1-23.1-29.3A16.1 16.1 0 0 0 128.6 24h-.6A104.1 104.1 0 0 0 24 128.7a104 104 0 0 0 208-1.3a15.7 15.7 0 0 0-6.1-12.5Zm-35.7 75.4c-33.9 33.8-89.3 34.1-123.5.8A88 88 0 0 1 128 40h.6a39.9 39.9 0 0 0 38.6 48.8a39.9 39.9 0 0 0 48.8 38.6a87.6 87.6 0 0 1-25.8 62.9Zm-25.7-26.8a12 12 0 1 1-17 0a12 12 0 0 1 17 0Zm-64-8a12 12 0 1 1-17 0a12 12 0 0 1 17 0Zm-25-39a12 12 0 1 1 17 0a12 12 0 0 1-17 0Zm69 16a12 12 0 1 1 0-17a12 12 0 0 1 0 17Z\\"/>"},"credit-card-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M24 96.9h208V192a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M224 48H32a16 16 0 0 0-16 16v127.9a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 16v24.9H32V64Zm0 128H32v-87.1h192V192Z\\"/><path fill=\\"currentColor\\" d=\\"M200 160h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm-64 0h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Z\\"/>"},"crown-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M236.3 87.7L210.8 196a8.1 8.1 0 0 1-10 5.9a273 273 0 0 0-145.7 0a8.1 8.1 0 0 1-10-5.9L19.7 87.7a8 8 0 0 1 11-9.2L81.3 101a8.1 8.1 0 0 0 10.3-3.4l29.4-53a8 8 0 0 1 14 0l29.4 53a8.1 8.1 0 0 0 10.3 3.4l50.6-22.5a8 8 0 0 1 11 9.2Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M238.7 73.5a15.9 15.9 0 0 0-16.7-2.3l-50.6 22.5l-29.4-53a16.1 16.1 0 0 0-28 0l-29.4 53L34 71.2a16 16 0 0 0-22.1 18.3l25.4 108.3a15.9 15.9 0 0 0 7.4 10.1a16.2 16.2 0 0 0 8.3 2.3a15.2 15.2 0 0 0 4.2-.6a265.5 265.5 0 0 1 141.5 0a16.5 16.5 0 0 0 12.5-1.7a15.6 15.6 0 0 0 7.4-10.1l25.5-108.3a16 16 0 0 0-5.4-16ZM203 194.2a281.2 281.2 0 0 0-150.1 0L27.5 85.9l50.6 22.4a15.8 15.8 0 0 0 20.4-6.8l29.5-53l29.5 53a15.8 15.8 0 0 0 20.4 6.8l50.6-22.4Zm-35-31.7a8.1 8.1 0 0 1-8 7.2h-.8a309.8 309.8 0 0 0-62.4 0a8 8 0 0 1-8.8-7.1a8.1 8.1 0 0 1 7.2-8.8a312.7 312.7 0 0 1 65.6 0a8.1 8.1 0 0 1 7.2 8.7Z\\"/>"},"cube-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M33.1 74.6a8.1 8.1 0 0 0-1.1 4.1v98.6a8.1 8.1 0 0 0 4.1 7l88 49.5a7.6 7.6 0 0 0 3.9 1l.9-106.8l-95.8-53.4Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M229.9 70.8a.1.1 0 0 1-.1-.1a16.2 16.2 0 0 0-6-5.9l-88-49.5a16 16 0 0 0-15.6 0l-88 49.5a16.2 16.2 0 0 0-6 5.9a.1.1 0 0 1-.1.1v.2a15 15 0 0 0-2.1 7.7v98.6a16.1 16.1 0 0 0 8.2 14l88 49.5a16.5 16.5 0 0 0 7.2 2h1.4a16.1 16.1 0 0 0 7-2l88-49.5a16.1 16.1 0 0 0 8.2-14V78.7a15.6 15.6 0 0 0-2.1-7.9ZM128 29.2L207.7 74l-78.8 44.8L48.4 74ZM40 87.6l80.9 45.1l-.8 89.7L40 177.3Zm96.1 134.7l.8-89.6l79.1-45v89.6Z\\"/>"},"desktop-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M32 152V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v88Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M208 40H48a24.1 24.1 0 0 0-24 24v112a24.1 24.1 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24.1 24.1 0 0 0 24-24V64a24.1 24.1 0 0 0-24-24ZM48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8Zm160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8Z\\"/>"},"device-mobile-camera-duotone":{"body":"<rect width=\\"208\\" height=\\"128\\" x=\\"24\\" y=\\"64\\" fill=\\"currentColor\\" opacity=\\".2\\" rx=\\"16\\" transform=\\"rotate(90 128 128)\\"/><circle cx=\\"128\\" cy=\\"60\\" r=\\"12\\" fill=\\"currentColor\\"/><path fill=\\"currentColor\\" d=\\"M176 16H80a24.1 24.1 0 0 0-24 24v176a24.1 24.1 0 0 0 24 24h96a24.1 24.1 0 0 0 24-24V40a24.1 24.1 0 0 0-24-24Zm8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z\\"/>"},"device-mobile-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M64 56h128v144H64z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M176 16H80a24.1 24.1 0 0 0-24 24v176a24.1 24.1 0 0 0 24 24h96a24.1 24.1 0 0 0 24-24V40a24.1 24.1 0 0 0-24-24ZM72 64h112v128H72Zm8-32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8Zm96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8Z\\"/>"},"device-mobile-light":{"body":"<path fill=\\"currentColor\\" d=\\"M176 18H80a22.1 22.1 0 0 0-22 22v176a22.1 22.1 0 0 0 22 22h96a22.1 22.1 0 0 0 22-22V40a22.1 22.1 0 0 0-22-22ZM70 62h116v132H70Zm10-32h96a10 10 0 0 1 10 10v10H70V40a10 10 0 0 1 10-10Zm96 196H80a10 10 0 0 1-10-10v-10h116v10a10 10 0 0 1-10 10Z\\"/>"},"diamonds-four-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M93.7 69.7a8 8 0 0 1 0-11.4l28.6-28.6a8 8 0 0 1 11.4 0l28.6 28.6a8 8 0 0 1 0 11.4l-28.6 28.6a8 8 0 0 1-11.4 0Zm132.6 52.6l-28.6-28.6a8 8 0 0 0-11.4 0l-28.6 28.6a8 8 0 0 0 0 11.4l28.6 28.6a8 8 0 0 0 11.4 0l28.6-28.6a8 8 0 0 0 0-11.4Zm-128 0L69.7 93.7a8 8 0 0 0-11.4 0l-28.6 28.6a8 8 0 0 0 0 11.4l28.6 28.6a8 8 0 0 0 11.4 0l28.6-28.6a8 8 0 0 0 0-11.4Zm35.4 35.4a8 8 0 0 0-11.4 0l-28.6 28.6a8 8 0 0 0 0 11.4l28.6 28.6a8 8 0 0 0 11.4 0l28.6-28.6a8 8 0 0 0 0-11.4Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M116.7 104a15.9 15.9 0 0 0 22.6 0L168 75.3a16.1 16.1 0 0 0 0-22.6L139.3 24a15.9 15.9 0 0 0-22.6 0L88 52.7a16.1 16.1 0 0 0 0 22.6ZM128 35.3L156.7 64L128 92.7L99.3 64Zm104 81.4L203.3 88a15.9 15.9 0 0 0-22.6 0L152 116.7a16.1 16.1 0 0 0 0 22.6l28.7 28.7a15.9 15.9 0 0 0 22.6 0l28.7-28.7a16.1 16.1 0 0 0 0-22.6Zm-40 40L163.3 128L192 99.3l28.7 28.7Zm-88-40L75.3 88a15.9 15.9 0 0 0-22.6 0L24 116.7a16.1 16.1 0 0 0 0 22.6L52.7 168a15.9 15.9 0 0 0 22.6 0l28.7-28.7a16.1 16.1 0 0 0 0-22.6Zm-40 40L35.3 128L64 99.3L92.7 128Zm75.3-4.7a15.9 15.9 0 0 0-22.6 0L88 180.7a16.1 16.1 0 0 0 0 22.6l28.7 28.7a15.9 15.9 0 0 0 22.6 0l28.7-28.7a16.1 16.1 0 0 0 0-22.6ZM128 220.7L99.3 192l28.7-28.7l28.7 28.7Z\\"/>"},"dog-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M208 119.3V184a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32v-64.7L104 48h48Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68.7 16a16.1 16.1 0 0 1-6.7 1.4a15.6 15.6 0 0 1-10-3.6V184a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40v-42.2a15.6 15.6 0 0 1-10 3.6a16.1 16.1 0 0 1-6.7-1.4a15.8 15.8 0 0 1-9.1-17.6l16.4-87.5a16.1 16.1 0 0 1 19.6-12.6L105 40h46l54.8-13.7a16.1 16.1 0 0 1 19.6 12.6l16.4 87.5a15.8 15.8 0 0 1-9.1 17.6ZM90.1 52.8l-43.8-11l-16.4 87.6ZM200 184v-62l-51.9-66h-40.2L56 122v62a24.1 24.1 0 0 0 24 24h40v-12.7l-13.7-13.6a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L136 195.3V208h40a24.1 24.1 0 0 0 24-24Zm26.1-54.6l-16.4-87.6l-43.8 11Z\\"/>"},"envelope-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m224 56l-96 88l-96-88Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-83.9 74L128 133.1L52.6 64h150.8Zm-41.4 6L40 181.8V74.2Zm11.8 10.9l12.1 11a8 8 0 0 0 10.8 0l12.1-11l57.9 53.1H52.6Zm46.8-10.9L216 74.2v107.6Z\\"/>"},"factory-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M216 136v80H40V88l64 48V88l64 48Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M116 176a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h28a8 8 0 0 1 8 8Zm60-8h-28a8 8 0 0 0 0 16h28a8 8 0 0 0 0-16Zm72 48a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h16V88a8 8 0 0 1 12.8-6.4L96 120V88a8 8 0 0 1 12.8-6.4l38.7 29.1l11.6-81A16 16 0 0 1 174.9 16h18.2a16 16 0 0 1 15.8 13.7l15 105.2a.8.8 0 0 1 .1.4v72.5h16a8 8 0 0 1 8 8.2Zm-85.9-94.4l8.6 6.4h36.1l-13.7-96h-18.2ZM48 208h160v-64h-40a8.4 8.4 0 0 1-4.8-1.6l-14.4-10.8L112 104v32a8 8 0 0 1-12.8 6.4L48 104Z\\"/>"},"figma-logo-duotone":{"body":"<g fill=\\"currentColor\\" opacity=\\".2\\"><circle cx=\\"162\\" cy=\\"128\\" r=\\"34\\"/><path d=\\"M94 94h34V26H94a34 34 0 0 0 0 68ZM60 196a34 34 0 0 0 68 0v-34H94a34 34 0 0 0-34 34Z\\"/></g><path fill=\\"currentColor\\" d=\\"M186.6 94A42 42 0 0 0 162 18H94a42 42 0 0 0-24.6 76a41.9 41.9 0 0 0 0 68a42 42 0 1 0 66.6 34v-35.1A42 42 0 1 0 186.6 94Zm1.4-34a26.1 26.1 0 0 1-26 26h-26V34h26a26.1 26.1 0 0 1 26 26ZM68 60a26.1 26.1 0 0 1 26-26h26v52H94a26.1 26.1 0 0 1-26-26Zm0 68a26.1 26.1 0 0 1 26-26h26v52H94a26.1 26.1 0 0 1-26-26Zm26 94a26 26 0 0 1 0-52h26v26a26.1 26.1 0 0 1-26 26Zm68-68a26 26 0 0 1 0-52a26 26 0 0 1 0 52Z\\"/>"},"files-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M208 72v112a8 8 0 0 1-8 8h-24v-88l-40-40H80V40a8 8 0 0 1 8-8h80Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m213.7 66.3l-40-40A8.1 8.1 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-2.3-5.7ZM168 216H56V72h76.7l35.3 35.3V216Zm32-32h-16v-80a8.1 8.1 0 0 0-2.3-5.7l-40-40A8.1 8.1 0 0 0 136 56H88V40h76.7L200 75.3Zm-56-32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Zm0 32a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z\\"/>"},"flask-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M195.9 169.1Zm20.8 34.8l-20.8-34.8c-11.4 9.7-32.2 16.8-67.9-1.1c-33.3-16.6-53.6-11.7-65.4-3l-23.3 38.9a8 8 0 0 0 6.8 12.1h163.8a8 8 0 0 0 6.8-12.1Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M223.6 199.8L160 93.8V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v53.8l-40.2 66.9c0 .1-.1.2-.1.3l-23.3 38.8A16 16 0 0 0 46.1 224h163.8a16 16 0 0 0 13.7-24.2ZM109.7 102a15.9 15.9 0 0 0 2.3-8.2V40h32v53.8a15.9 15.9 0 0 0 2.3 8.2l38.8 64.8c-13.1 7.1-31.4 5.1-53.5-6c-14.3-7.1-32.7-13.5-50.3-11.4ZM46.1 208l22.5-37.4c13.2-8.7 32.4-7.1 55.8 4.6c17.3 8.6 31.5 11.8 43.2 11.8a51.4 51.4 0 0 0 25.8-6.5l16.5 27.5Z\\"/>"},"folder-simple-dotted-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M224 88v112.9a7.1 7.1 0 0 1-7.1 7.1H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.3a8.1 8.1 0 0 1 4.8 1.6l27.8 20.8a8.1 8.1 0 0 0 4.8 1.6H216a8 8 0 0 1 8 8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M24 80V64a16 16 0 0 1 16-16h53.3a15.6 15.6 0 0 1 9.6 3.2l29.9 22.4A8 8 0 0 1 128 88a7.7 7.7 0 0 1-4.8-1.6L93.3 64H40v16a8 8 0 0 1-16 0Zm64 120H40v-8a8 8 0 0 0-16 0v8.6A15.4 15.4 0 0 0 39.4 216H88a8 8 0 0 0 0-16Zm72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Zm64-56a8 8 0 0 0-8 8v48h-16a8 8 0 0 0 0 16h16.9a15.2 15.2 0 0 0 15.1-15.1V152a8 8 0 0 0-8-8Zm-8-72h-48a8 8 0 0 0 0 16h48v24a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM32 160a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z\\"/>"},"gear-six-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m229.6 106l-25.9-14.4a80.1 80.1 0 0 0-6.3-11l.5-29.6a102.6 102.6 0 0 0-38.2-22l-25.4 15.2a88.3 88.3 0 0 0-12.6 0L96.2 28.9A104 104 0 0 0 58.1 51l.5 29.7a73.6 73.6 0 0 0-6.3 10.9l-26 14.4a102 102 0 0 0 .1 44l25.9 14.4a80.1 80.1 0 0 0 6.3 11l-.5 29.6a102.6 102.6 0 0 0 38.2 22l25.4-15.2a88.3 88.3 0 0 0 12.6 0l25.5 15.3a104 104 0 0 0 38.1-22.1l-.5-29.7a73.6 73.6 0 0 0 6.3-10.9l26-14.4a102 102 0 0 0-.1-44ZM128 176a48 48 0 1 1 48-48a48 48 0 0 1-48 48Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M128 72a56 56 0 1 0 56 56a56 56 0 0 0-56-56Zm0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40Zm109.5-63.7a8 8 0 0 0-4-5.3l-23.8-13.2a69.3 69.3 0 0 0-4.3-7.5l.5-27.2a8.3 8.3 0 0 0-2.6-6.1a112 112 0 0 0-41.1-23.7a8.1 8.1 0 0 0-6.6.8l-23.3 14c-2.9-.1-5.7-.1-8.6 0l-23.3-14a8.1 8.1 0 0 0-6.6-.8a111.1 111.1 0 0 0-41.1 23.8a7.9 7.9 0 0 0-2.6 6l.5 27.2c-1.6 2.4-3 4.9-4.4 7.5L22.4 99a7.9 7.9 0 0 0-3.9 5.3a111.4 111.4 0 0 0 0 47.4a8 8 0 0 0 4 5.3l23.8 13.2a69.3 69.3 0 0 0 4.3 7.5l-.5 27.2a8.3 8.3 0 0 0 2.6 6.1a112 112 0 0 0 41.1 23.7a8.1 8.1 0 0 0 6.6-.8l23.3-14h8.6l23.4 14a7.3 7.3 0 0 0 4.1 1.2a10 10 0 0 0 2.4-.4a111.1 111.1 0 0 0 41.1-23.8a7.9 7.9 0 0 0 2.6-6l-.5-27.2c1.6-2.4 3-4.9 4.4-7.5l23.8-13.2a7.9 7.9 0 0 0 3.9-5.3a111.4 111.4 0 0 0 0-47.4Zm-15 40.5l-22.7 12.6a8.2 8.2 0 0 0-3.3 3.6a73.6 73.6 0 0 1-5.7 9.8a8.6 8.6 0 0 0-1.4 4.7l.4 25.9a94.4 94.4 0 0 1-29.1 16.9l-22.3-13.4a8.1 8.1 0 0 0-4.1-1.1h-.6a72.3 72.3 0 0 1-11.4 0a8.6 8.6 0 0 0-4.7 1.1l-22.3 13.4a95 95 0 0 1-29.1-16.8l.4-26a8.6 8.6 0 0 0-1.4-4.7a86.4 86.4 0 0 1-5.7-9.8a8.8 8.8 0 0 0-3.3-3.6l-22.7-12.6a94.8 94.8 0 0 1 0-33.6l22.7-12.6a8.2 8.2 0 0 0 3.3-3.6a73.6 73.6 0 0 1 5.7-9.8a8.6 8.6 0 0 0 1.4-4.7l-.4-25.9a94.4 94.4 0 0 1 29.1-16.9l22.3 13.4a8.4 8.4 0 0 0 4.7 1.1a72.3 72.3 0 0 1 11.4 0a8.6 8.6 0 0 0 4.7-1.1l22.3-13.4a95 95 0 0 1 29.1 16.8l-.4 26a8.6 8.6 0 0 0 1.4 4.7a86.4 86.4 0 0 1 5.7 9.8a8.8 8.8 0 0 0 3.3 3.6l22.7 12.6a94.8 94.8 0 0 1 0 33.6Z\\"/>"},"ghost-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m216 216l-29.3-24l-29.4 24l-29.3-24l-29.3 24l-29.4-24L40 216v-96a88 88 0 0 1 176 0Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M112 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 16v96a7.9 7.9 0 0 1-4.6 7.2a7.9 7.9 0 0 1-8.5-1l-24.2-19.9l-24.3 19.9a8 8 0 0 1-10.1 0L128 202.3l-24.3 19.9a8 8 0 0 1-10.1 0l-24.3-19.9l-24.2 19.9A8.1 8.1 0 0 1 32 216v-96a96 96 0 0 1 192 0Zm-16 0a80 80 0 0 0-160 0v79.1l16.3-13.3a8 8 0 0 1 10.1 0l24.3 19.9l24.2-19.9a8.1 8.1 0 0 1 10.2 0l24.2 19.9l24.3-19.9a8 8 0 0 1 10.1 0l16.3 13.3Z\\"/>"},"globe-duotone":{"body":"<circle cx=\\"128\\" cy=\\"128\\" r=\\"96\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m225.9 163.2l.3-1a103.7 103.7 0 0 0 0-68.4l-.3-1A104.4 104.4 0 0 0 128 24a104.2 104.2 0 0 0-97.9 68.8l-.3 1a103.7 103.7 0 0 0 0 68.4l.3 1A104.2 104.2 0 0 0 128 232a104.2 104.2 0 0 0 97.9-68.8ZM102.5 168h51a108.6 108.6 0 0 1-25.5 42.4a108.6 108.6 0 0 1-25.5-42.4Zm-4.2-16a126.4 126.4 0 0 1 0-48h59.4a127.6 127.6 0 0 1 2.3 24a126.8 126.8 0 0 1-2.3 24ZM40 128a90.3 90.3 0 0 1 3.3-24H82a145 145 0 0 0 0 48H43.3a90.3 90.3 0 0 1-3.3-24Zm113.5-40h-51A108.6 108.6 0 0 1 128 45.6A108.6 108.6 0 0 1 153.5 88Zm20.5 16h38.7a88.9 88.9 0 0 1 0 48H174a145 145 0 0 0 0-48Zm32.4-16h-36a128.7 128.7 0 0 0-24.1-46.1A88.6 88.6 0 0 1 206.4 88Zm-96.7-46.1A128.7 128.7 0 0 0 85.6 88h-36a88.6 88.6 0 0 1 60.1-46.1ZM49.6 168h36a128.7 128.7 0 0 0 24.1 46.1A88.3 88.3 0 0 1 49.6 168Zm96.7 46.1a128.7 128.7 0 0 0 24.1-46.1h36a88.3 88.3 0 0 1-60.1 46.1Z\\"/>"},"globe-hemisphere-west-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M130.3 224a96.3 96.3 0 0 0 83.9-53.6L159.9 137a7.2 7.2 0 0 0-3.1-1.1l-22.9-3.1a7.8 7.8 0 0 0-8.3 4.7l-13.7 30.7a8 8 0 0 0 1.4 8.7l18.8 20.3a8.2 8.2 0 0 1 2 7l-3.8 19.8ZM65 55.6l-9 21.2a8 8 0 0 0-.1 5.9l11.5 30.6a7.9 7.9 0 0 0 5.8 5.1l5.4 1.1l8.3-19.7a8.1 8.1 0 0 1 7.4-4.9h21.4a8.6 8.6 0 0 0 3.8-1l12.3-6.8a7.2 7.2 0 0 0 1.5-1.1l26.9-24.3a8.1 8.1 0 0 0 1.6-9.8l-9.3-16.8A98.5 98.5 0 0 0 128 32a95.4 95.4 0 0 0-63 23.6Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M221.6 173.3A102.9 102.9 0 0 0 232 128a104.2 104.2 0 0 0-77.2-100.5h-.5A103.8 103.8 0 0 0 60.4 49l-1.3 1.2A103.9 103.9 0 0 0 128 232h2.4a104.3 104.3 0 0 0 90.6-57.4ZM216 128a89.3 89.3 0 0 1-5.5 30.7l-46.4-28.5a15.4 15.4 0 0 0-6.3-2.3l-22.8-3a16.1 16.1 0 0 0-15.3 6.8h-8.6l-3.8-7.9a15.7 15.7 0 0 0-11-8.7l-6.6-1.4l4.6-10.8h21.4a16.1 16.1 0 0 0 7.7-2l12.2-6.8a16.1 16.1 0 0 0 3-2.1l26.9-24.4a15.7 15.7 0 0 0 4.5-16.9a88 88 0 0 1 46 77.3Zm-68.8-85.9l7.6 13.7l-26.9 24.3l-12.2 6.8H94.3a15.9 15.9 0 0 0-14.7 9.8l-5.3 12.4l-10.9-29.2l8.2-19.3a87.8 87.8 0 0 1 75.6-18.5ZM40 128a87.1 87.1 0 0 1 9.5-39.7l10.4 27.9a16.1 16.1 0 0 0 11.6 10l5.5 1.2h.1l15.8 3.4l3.8 7.9a16.4 16.4 0 0 0 14.4 9h1.2l-7.7 17.2a16.1 16.1 0 0 0 2.8 17.4l18.8 20.4l-2.5 13.2A88.1 88.1 0 0 1 40 128Zm100.1 87.2l1.8-9.5a16 16 0 0 0-3.9-13.9l-18.8-20.3l12.7-28.7h.1l.9-2.1l22.8 3.1l47.8 29.4a88.5 88.5 0 0 1-63.4 42Z\\"/>"},"hamburger-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M207.2 96H48.8a8 8 0 0 1-7.8-9.7C47.4 55.5 83.9 32 128 32s80.6 23.5 87 54.3a8 8 0 0 1-7.8 9.7ZM148 160l-40 16l-40-16l-20 8v16a32 32 0 0 0 32 32h96a32 32 0 0 0 32-32v-16l-20 8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M48.8 104h158.4a16 16 0 0 0 15.6-19.4C215.5 49.5 175.6 24 128 24S40.5 49.5 33.2 84.6A16 16 0 0 0 48.8 104ZM128 40c39.4 0 73.4 20.6 79.2 47.9H48.8C54.6 60.6 88.6 40 128 40Zm97 112.6l-37 14.8l-37-14.8a7.8 7.8 0 0 0-6 0l-37 14.8l-37-14.8a7.8 7.8 0 0 0-6 0l-40 16a8 8 0 0 0 3 15.4a8 8 0 0 0 3-.6l9-3.6v4.2a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-10.6l15-6a8 8 0 0 0-6-14.8ZM200 184a24.1 24.1 0 0 1-24 24H80a24.1 24.1 0 0 1-24-24v-10.6l12-4.8l37 14.8a7.8 7.8 0 0 0 6 0l37-14.8l37 14.8a7.8 7.8 0 0 0 6 0l9-3.6Zm40-56a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h208a8 8 0 0 1 8 8Z\\"/>"},"hand-waving-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M184 217.3A80 80 0 0 1 74.7 188l-42-72.8a20 20 0 0 1 34.7-20l-16-27.7a20 20 0 0 1 34.6-20l8 13.9a20 20 0 0 1 34.6-20l30 51.9a20 20 0 0 1 34.7-20l20 34.7A80 80 0 0 1 184 217.3Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m220.2 104l-20-34.7a28.1 28.1 0 0 0-47.3-1.9l-17.3-30a28.1 28.1 0 0 0-38.3-10.3a29.4 29.4 0 0 0-9.9 9.6a27.9 27.9 0 0 0-11.5-6.2a27.1 27.1 0 0 0-21.2 2.8a27.9 27.9 0 0 0-10.3 38.2l3.4 5.8A28.5 28.5 0 0 0 36 81a28.1 28.1 0 0 0-10.2 38.2l42 72.8a88 88 0 1 0 152.4-88Zm-6.7 62.6a71.2 71.2 0 0 1-33.5 43.7A72.1 72.1 0 0 1 81.6 184l-42-72.8a12 12 0 0 1 20.8-12l22 38.1l.6.9v.2l.5.5l.2.2l.7.6h.1l.7.5h.3l.6.3h.2l.9.3h.1l.8.2h2.2l.9-.2h.3l.6-.2h.3l.9-.4a8.1 8.1 0 0 0 2.9-11l-22-38.1l-16-27.7a12 12 0 0 1-1.2-9.1a11.8 11.8 0 0 1 5.6-7.3a12 12 0 0 1 9.1-1.2a12.5 12.5 0 0 1 7.3 5.6l8 14h.1l26 45a6 6 0 0 0 .9 1.3a8 8 0 0 0 12.9-9.3l-26-45a12 12 0 1 1 20.8-12l30 51.9l6.3 11a48.1 48.1 0 0 0-10.9 61a8 8 0 0 0 13.8-8a32 32 0 0 1 11.7-43.7l.7-.4l.5-.4h.1l.6-.6l.5-.5l.4-.5l.3-.6h.1l.2-.5v-.2a1.9 1.9 0 0 0 .2-.7h.1c0-.2.1-.4.1-.6s0-.2.1-.2v-2.1a6.4 6.4 0 0 0-.2-.7a1.9 1.9 0 0 0-.2-.7v-.2c0-.2-.1-.3-.2-.5l-.3-.7l-10-17.4a12 12 0 0 1 13.5-17.5a11.8 11.8 0 0 1 7.2 5.5l20 34.7a70.9 70.9 0 0 1 7.2 53.8Zm-125.8 78a8.2 8.2 0 0 1-6.6 3.4a8.6 8.6 0 0 1-4.6-1.4A117.9 117.9 0 0 1 41.1 208a8 8 0 1 1 13.8-8a102.6 102.6 0 0 0 30.8 33.4a8.1 8.1 0 0 1 2 11.2ZM168 31a8 8 0 0 1 8-8a60.2 60.2 0 0 1 52 30a7.9 7.9 0 0 1-3 10.9a7.1 7.1 0 0 1-4 1.1a8 8 0 0 1-6.9-4A44 44 0 0 0 176 39a8 8 0 0 1-8-8Z\\"/>"},"heartbeat-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m78.7 132.4l9.3-14l25.3 38a8 8 0 0 0 13.4 0l13.6-20.4H160a8 8 0 0 0 0-16h-24a7.9 7.9 0 0 0-6.7 3.6l-9.3 14l-25.3-38a8 8 0 0 0-13.4 0L67.7 120H32a8 8 0 0 0 0 16h40a7.9 7.9 0 0 0 6.7-3.6Z\\"/><path fill=\\"currentColor\\" d=\\"M176 32a60 60 0 0 0-48 24A60 60 0 0 0 20 92c0 1.5 0 3 .1 4.4a8.1 8.1 0 0 0 8.5 7.6a8 8 0 0 0 7.5-8.5c-.1-1.1-.1-2.3-.1-3.5a44 44 0 0 1 84.6-17a8 8 0 0 0 14.8 0A44 44 0 0 1 220 92c0 55.2-74 103.7-92 114.7c-10.6-6.4-40.5-25.8-63.3-52a8 8 0 0 0-12.1 10.6c30 34.2 69.8 56.7 71.5 57.7a8.1 8.1 0 0 0 7.8 0a314.3 314.3 0 0 0 51.5-37.6C218.3 154 236 122.6 236 92a60 60 0 0 0-60-60Z\\"/>"},"image-square-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M40 176V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v112l-42.3-42.3a8 8 0 0 0-11.4 0l-44.6 44.6a8 8 0 0 1-11.4 0l-20.6-20.6a8 8 0 0 0-11.4 0Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M88 92a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm136-44v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM48 156.7L68.7 136a16.1 16.1 0 0 1 22.6 0l20.7 20.7l44.7-44.7a16.1 16.1 0 0 1 22.6 0l28.7 28.7V48H48ZM208 208v-44.7l-40-40l-44.7 44.7a16.1 16.1 0 0 1-22.6 0L80 147.3l-32 32V208Z\\"/>"},"layout-light":{"body":"<path fill=\\"currentColor\\" d=\\"M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 54h176a2 2 0 0 1 2 2v42H38V56a2 2 0 0 1 2-2Zm-2 146v-90h60v92H40a2 2 0 0 1-2-2Zm178 2H110v-92h108v90a2 2 0 0 1-2 2Z\\"/>"},"lifebuoy-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m195.9 195.9l-39.6-39.6a40.1 40.1 0 0 0 0-56.6l39.6-39.6a96 96 0 0 1 0 135.8ZM60.1 60.1a96 96 0 0 0 0 135.8l39.6-39.6a40.1 40.1 0 0 1 0-56.6Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M202.2 200.8a103.8 103.8 0 0 0 0-145.6a2.3 2.3 0 0 0-.7-.7a2.3 2.3 0 0 0-.7-.7a103.8 103.8 0 0 0-145.6 0a2.3 2.3 0 0 0-.7.7a2.3 2.3 0 0 0-.7.7a103.8 103.8 0 0 0 0 145.6l.7.7a2.3 2.3 0 0 0 .7.7a103.8 103.8 0 0 0 145.6 0a2.3 2.3 0 0 0 .7-.7a2.3 2.3 0 0 0 .7-.7Zm-6.6-16.5l-28.5-28.5a47.9 47.9 0 0 0 0-55.6l28.5-28.5a87.9 87.9 0 0 1 0 112.6ZM96 128a32 32 0 1 1 32 32a32.1 32.1 0 0 1-32-32Zm88.3-67.6l-28.5 28.5a47.9 47.9 0 0 0-55.6 0L71.7 60.4a87.9 87.9 0 0 1 112.6 0ZM60.4 71.7l28.5 28.5a47.9 47.9 0 0 0 0 55.6l-28.5 28.5a87.9 87.9 0 0 1 0-112.6Zm11.3 123.9l28.5-28.5a47.9 47.9 0 0 0 55.6 0l28.5 28.5a87.9 87.9 0 0 1-112.6 0Z\\"/>"},"lifebuoy-light":{"body":"<path fill=\\"currentColor\\" d=\\"M200.5 199.7a101.9 101.9 0 0 0 0-143.4c-.2-.2-.2-.3-.4-.4s-.2-.2-.4-.4a101.9 101.9 0 0 0-143.4 0l-.4.4l-.4.4a101.9 101.9 0 0 0 0 143.4l.4.4c.1.2.2.2.4.4a101.9 101.9 0 0 0 143.4 0c.2-.2.3-.2.4-.4s.2-.2.4-.4Zm-4.8-12.5L164.5 156a46 46 0 0 0 0-56l31.2-31.2a89.7 89.7 0 0 1 0 118.4ZM94 128a34 34 0 1 1 34 34a34.1 34.1 0 0 1-34-34Zm93.2-67.7L156 91.5a46 46 0 0 0-56 0L68.8 60.3a89.7 89.7 0 0 1 118.4 0ZM60.3 68.8L91.5 100a46 46 0 0 0 0 56l-31.2 31.2a89.7 89.7 0 0 1 0-118.4Zm8.5 126.9l31.2-31.2a46 46 0 0 0 56 0l31.2 31.2a89.7 89.7 0 0 1-118.4 0Z\\"/>"},"lightbulb-filament-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M208 104a79.9 79.9 0 0 1-30.6 62.9A24.2 24.2 0 0 0 168 186v6a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-6a24.4 24.4 0 0 0-9.3-19A79.5 79.5 0 0 1 48 104.5C47.8 61.1 82.7 25 126.1 24a80.1 80.1 0 0 1 81.9 80Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm40-128a87.7 87.7 0 0 1-33.6 69.2A16.1 16.1 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16.2 16.2 0 0 0-6.2-12.7A87.8 87.8 0 0 1 40 104.5c-.3-47.7 38.3-87.4 85.9-88.5a87.9 87.9 0 0 1 90.1 88Zm-16 0a72.1 72.1 0 0 0-73.7-72c-39 .9-70.5 33.4-70.3 72.4a71.7 71.7 0 0 0 27.6 56.3A32 32 0 0 1 96 186v6h24v-44.7l-29.7-29.6a8.1 8.1 0 0 1 11.4-11.4l26.3 26.4l26.3-26.4a8.1 8.1 0 0 1 11.4 11.4L136 147.3V192h24v-6a32.1 32.1 0 0 1 12.5-25.4A71.5 71.5 0 0 0 200 104Z\\"/>"},"lightning-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m96 240l16-80l-64-24L160 16l-16 80l64 24L96 240z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M96 248a8.4 8.4 0 0 1-3.7-.9a8.1 8.1 0 0 1-4.1-8.7l14.6-73.3l-57.6-21.6a8.2 8.2 0 0 1-5-5.7a7.9 7.9 0 0 1 2-7.3l112-120a8 8 0 0 1 13.6 7l-14.6 73.4l57.6 21.6a7.9 7.9 0 0 1 3 12.9l-112 120A7.7 7.7 0 0 1 96 248ZM62 132.7l52.8 19.8a7.9 7.9 0 0 1 5 9l-10.4 52.4l84.6-90.6l-52.8-19.8a7.9 7.9 0 0 1-5-9.1L146.6 42Z\\"/>"},"magic-wand-light":{"body":"<path fill=\\"currentColor\\" d=\\"M246 152a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6ZM64 66h14v14a6 6 0 0 0 12 0V66h14a6 6 0 0 0 0-12H90V40a6 6 0 0 0-12 0v14H64a6 6 0 0 0 0 12Zm120 128h-10v-10a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12Zm-3.8-77.8L73.9 222.6a14 14 0 0 1-19.8 0l-20.7-20.7a14 14 0 0 1 0-19.8L182.1 33.4a14.1 14.1 0 0 1 19.8 0l20.7 20.7a14 14 0 0 1 0 19.8l-42.4 42.3ZM152.5 80l23.5 23.5l38.1-38.1a1.9 1.9 0 0 0 0-2.8l-20.7-20.7a1.9 1.9 0 0 0-2.8 0Zm15 32L144 88.5L41.9 190.6a1.9 1.9 0 0 0 0 2.8l20.7 20.7a1.9 1.9 0 0 0 2.8 0Z\\"/>"},"map-pin-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128.1 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80Zm0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M128.1 64a40 40 0 1 0 40 40a40.1 40.1 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24.1 24.1 0 0 1-24 24Z\\"/><path fill=\\"currentColor\\" d=\\"M128.1 16a88.1 88.1 0 0 0-88 88c0 31.4 14.5 64.7 42 96.2a259.4 259.4 0 0 0 41.4 38.4a8.3 8.3 0 0 0 9.2 0a257.6 257.6 0 0 0 41.5-38.4c27.4-31.5 41.9-64.8 41.9-96.2a88.1 88.1 0 0 0-88-88Zm0 206c-16.5-13-72-60.8-72-118a72 72 0 0 1 144 0c0 57.2-55.5 105-72 118Z\\"/>"},"megaphone-simple-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M136 70.3v99.4L42.2 197a8 8 0 0 1-10.2-7.7V50.7A8 8 0 0 1 42.2 43Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m220.5 86.6l-82.1-23.9h-.1L44.5 35.3a15.8 15.8 0 0 0-14.1 2.6A15.7 15.7 0 0 0 24 50.7v138.6a15.7 15.7 0 0 0 6.4 12.8a16.1 16.1 0 0 0 9.6 3.2a17.4 17.4 0 0 0 4.5-.6l83.5-24.4V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-30.3l28.5-8.3A16.1 16.1 0 0 0 232 138v-36a16.1 16.1 0 0 0-11.5-15.4ZM128 163.7l-88 25.6V50.7l88 25.6Zm48 28.3h-32v-16.3l32-9.4Zm40-54l-34.4 10l-37.6 11V81l72 21Z\\"/>"},"messenger-logo-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M224 128a96.1 96.1 0 0 1-145 82.6L45.8 220a7.9 7.9 0 0 1-9.8-9.8l9.4-33.2A96 96 0 1 1 224 128Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M128 24a104 104 0 0 0-91.2 154l-8.5 30A15.9 15.9 0 0 0 48 227.7l30-8.5A104 104 0 1 0 128 24Zm0 192a88.4 88.4 0 0 1-44.9-12.3a8.7 8.7 0 0 0-4.1-1.1a8.3 8.3 0 0 0-2.2.3l-33.2 9.5l9.5-33.2a8.2 8.2 0 0 0-.8-6.3A88 88 0 1 1 128 216Zm53.7-109.7a8.1 8.1 0 0 1 0 11.4l-32 32a8.2 8.2 0 0 1-11.4 0L112 123.3l-26.3 26.4a8.1 8.1 0 0 1-11.4-11.4l32-32a8.1 8.1 0 0 1 11.4 0l26.3 26.4l26.3-26.4a8.1 8.1 0 0 1 11.4 0Z\\"/>"},"moon":{"body":"<path fill=\\"currentColor\\" d=\\"M224.3 150.3a8.1 8.1 0 0 0-7.8-5.7l-2.2.4A84 84 0 0 1 111 41.6a5.7 5.7 0 0 0 .3-1.8a7.9 7.9 0 0 0-10.3-8.1a100 100 0 1 0 123.3 123.2a7.2 7.2 0 0 0 0-4.6ZM128 212A84 84 0 0 1 92.8 51.7a99.9 99.9 0 0 0 111.5 111.5A84.4 84.4 0 0 1 128 212Z\\"/>"},"mouse-simple-duotone":{"body":"<rect width=\\"152\\" height=\\"192\\" x=\\"52\\" y=\\"32\\" fill=\\"currentColor\\" opacity=\\".2\\" rx=\\"56\\"/><path fill=\\"currentColor\\" d=\\"M148 24h-40a64.1 64.1 0 0 0-64 64v80a64.1 64.1 0 0 0 64 64h40a64.1 64.1 0 0 0 64-64V88a64.1 64.1 0 0 0-64-64Zm48 144a48 48 0 0 1-48 48h-40a48 48 0 0 1-48-48V88a48 48 0 0 1 48-48h40a48 48 0 0 1 48 48Zm-60-96v40a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Z\\"/>"},"notebook-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M80 216H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h32Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M176 104h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm0 32h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Z\\"/><path fill=\\"currentColor\\" d=\\"M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 208H48V48h24Zm136 0H88V48h120v160Z\\"/>"},"notification-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M224 60a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0Zm16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36Zm-16 0a20 20 0 1 0-20 20a20.1 20.1 0 0 0 20-20Z\\"/>"},"paint-brush-broad-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M40 112h176v24a16 16 0 0 1-16 16h-46.8a8 8 0 0 0-7.9 9.1L152 208a24 24 0 0 1-48 0l6.7-46.9a8 8 0 0 0-7.9-9.1H56a16 16 0 0 1-16-16Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M216 24H72a40 40 0 0 0-40 40v72a24.1 24.1 0 0 0 24 24h46.8l-6.7 46.9a3.7 3.7 0 0 0-.1 1.1a32 32 0 0 0 64 0a3.7 3.7 0 0 0-.1-1.1l-6.7-46.9H200a24.1 24.1 0 0 0 24-24V32a8 8 0 0 0-8-8ZM72 40h104v40a8 8 0 0 0 16 0V40h16v64H48V64a24.1 24.1 0 0 1 24-24Zm128 104h-46.8a15.9 15.9 0 0 0-15.8 18.3l6.6 46.2a16 16 0 0 1-32 0l6.6-46.2a15.9 15.9 0 0 0-15.8-18.3H56a8 8 0 0 1-8-8v-16h160v16a8 8 0 0 1-8 8Z\\"/>"},"paint-brush-broad-light":{"body":"<path fill=\\"currentColor\\" d=\\"M216 26H72a38 38 0 0 0-38 38v72a22.1 22.1 0 0 0 22 22h46.8a1.8 1.8 0 0 1 1.5.7a2 2 0 0 1 .5 1.6l-6.7 46.9a1.9 1.9 0 0 0-.1.8a30 30 0 0 0 60 0a1.9 1.9 0 0 0-.1-.8l-6.7-46.9a2 2 0 0 1 .5-1.6a1.8 1.8 0 0 1 1.5-.7H200a22.1 22.1 0 0 0 22-22V32a6 6 0 0 0-6-6ZM72 38h106v42a6 6 0 0 0 12 0V38h20v68H46V64a26.1 26.1 0 0 1 26-26Zm128 108h-46.8a14.4 14.4 0 0 0-10.6 4.8a14.2 14.2 0 0 0-3.2 11.2l6.6 46.4a18 18 0 0 1-36 0l6.6-46.4a14.2 14.2 0 0 0-3.2-11.2a14.4 14.4 0 0 0-10.6-4.8H56a10 10 0 0 1-10-10v-18h164v18a10 10 0 0 1-10 10Z\\"/>"},"parachute-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128 24s-40 24-40 96H32a96 96 0 0 1 96-96Zm0 0s40 24 40 96h56a96 96 0 0 0-96-96Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M232 120A104.2 104.2 0 0 0 128 16A104.2 104.2 0 0 0 24 120a8.2 8.2 0 0 0 3.2 6.4L120 196v20h-8a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16h-8v-20l92.8-69.6a8.2 8.2 0 0 0 3.2-6.4Zm-16.4-8h-39.8c-1.5-37.9-13.9-62.4-25.1-77a88.1 88.1 0 0 1 64.9 77ZM128 34a79.2 79.2 0 0 1 13.9 16.3c7.6 11.6 16.5 31.6 17.9 61.7H96.2c1.4-30.1 10.3-50.1 17.9-61.7A76.5 76.5 0 0 1 128 34Zm26.4 94L128 175.5L101.6 128Zm-71.1 0l19.5 35.1L56 128Zm89.4 0H200l-46.8 35.1Zm-67.4-93c-11.2 14.6-23.6 39.1-25.1 77H40.4a88.1 88.1 0 0 1 64.9-77Z\\"/>"},"paw-print-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M232 108a20 20 0 1 1-20-20a20.1 20.1 0 0 1 20 20Zm-168 0a20 20 0 1 0-20 20a20.1 20.1 0 0 0 20-20Zm28-28a20 20 0 1 0-20-20a20.1 20.1 0 0 0 20 20Zm72 0a20 20 0 1 0-20-20a20.1 20.1 0 0 0 20 20Zm19.2 75.9a43.6 43.6 0 0 1-20.6-26a36 36 0 0 0-69.2 0a43.6 43.6 0 0 1-20.6 26A32 32 0 0 0 88 216a32.4 32.4 0 0 0 12.5-2.5a71.8 71.8 0 0 1 55 0A32.4 32.4 0 0 0 168 216a32 32 0 0 0 15.2-60.1Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M212 80a28 28 0 1 0 28 28a28.1 28.1 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12ZM72 108a28 28 0 1 0-28 28a28.1 28.1 0 0 0 28-28Zm-28 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm48-32a28 28 0 1 0-28-28a28.1 28.1 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm72 40a28 28 0 1 0-28-28a28.1 28.1 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12Zm23.1 100.8a35.3 35.3 0 0 1-16.9-21.1a43.9 43.9 0 0 0-84.4 0A35.5 35.5 0 0 1 69 148.8A40 40 0 0 0 88 224a40.5 40.5 0 0 0 15.5-3.1a64.2 64.2 0 0 1 48.9-.1A39.6 39.6 0 0 0 168 224a40 40 0 0 0 19.1-75.2ZM168 208a24.1 24.1 0 0 1-9.5-1.9A78.7 78.7 0 0 0 128 200a79.9 79.9 0 0 0-30.6 6.1A23.2 23.2 0 0 1 88 208a24 24 0 0 1-11.3-45.2a51.1 51.1 0 0 0 24.4-30.6a28 28 0 0 1 53.8 0a51.1 51.1 0 0 0 24.4 30.6h.1A24 24 0 0 1 168 208Z\\"/>"},"pen-nib-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M120 56L60.3 78.4a8.1 8.1 0 0 0-5.1 6.2L32 224l139.5-23.2a7.9 7.9 0 0 0 6.1-5.1L200 136Zm-4 104a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M232 92.7L163.3 24a16.1 16.1 0 0 0-22.6 0l-25.1 25.1l-58.1 21.8a15.9 15.9 0 0 0-10.1 12.3L24.1 222.7A7.9 7.9 0 0 0 32 232h1.3l139.5-23.2a16.2 16.2 0 0 0 12.3-10.2l21.8-58.1l25.1-25.2a16.1 16.1 0 0 0 0-22.6Zm-61.9 100.2L55.3 212l47.4-47.4A27.1 27.1 0 0 0 116 168a28 28 0 1 0-28-28a27.1 27.1 0 0 0 3.4 13.3L44 200.7L63.1 85.9L118 65.3l72.7 72.7ZM104 140a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm96-15.3L131.3 56L152 35.3l68.7 68.7Z\\"/>"},"phone-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M92.5 124.8a83.6 83.6 0 0 0 39 38.9a8 8 0 0 0 7.9-.6l25-16.7a7.9 7.9 0 0 1 7.6-.7l46.8 20.1a7.9 7.9 0 0 1 4.8 8.3A48 48 0 0 1 176 216A136 136 0 0 1 40 80a48 48 0 0 1 41.9-47.6a7.9 7.9 0 0 1 8.3 4.8l20.1 46.9a8 8 0 0 1-.6 7.5L93 117a8 8 0 0 0-.5 7.8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M176 224C96.6 224 32 159.4 32 80a56.2 56.2 0 0 1 48.9-55.6A16.3 16.3 0 0 1 97.6 34l20.1 46.9a15.9 15.9 0 0 1-1.4 15.1l-16.6 25.4a76.5 76.5 0 0 0 35.2 35l25.1-16.7a15.6 15.6 0 0 1 15.1-1.3l46.9 20a16.3 16.3 0 0 1 9.6 16.7A56.2 56.2 0 0 1 176 224ZM82.9 40.3A40 40 0 0 0 48 80a128.1 128.1 0 0 0 128 128a40 40 0 0 0 39.7-34.9l-46.9-20l-25 16.7a16 16 0 0 1-15.7 1.1a92.5 92.5 0 0 1-42.8-42.6a16 16 0 0 1 1-15.7L103 87.2ZM135 156.5Z\\"/>"},"pinwheel-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m124.8 109.7l-97.7 35.6a52 52 0 0 1 97.7-35.6Zm88.1-15l-97.7 35.6a52 52 0 0 0 97.7-35.6Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m229.7 218.3l-48.4-48.4l3.3-1a59.6 59.6 0 0 0 33.9-31.1a60.4 60.4 0 0 0 2-45.9a8.4 8.4 0 0 0-4.2-4.5a7.6 7.6 0 0 0-6.1-.2l-44.4 16.1l1-2a60 60 0 0 0-74.9-81.8a8.4 8.4 0 0 0-4.5 4.2a7.6 7.6 0 0 0-.2 6.1l16.1 44.4l-2-1a60 60 0 0 0-81.8 74.9a8.4 8.4 0 0 0 4.2 4.5a7.7 7.7 0 0 0 3.4.7a6.5 6.5 0 0 0 2.7-.5l44.4-16.1l-1 2a60 60 0 0 0 54.3 85.4a61.2 61.2 0 0 0 20.6-3.6a8.4 8.4 0 0 0 4.5-4.2a7.6 7.6 0 0 0 .2-6.1l-16.1-44.4l2 1a59.6 59.6 0 0 0 22.4 5.6l57.2 57.3a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4ZM131.1 36a44.2 44.2 0 0 1 3.7 77.9l-29.6-81.4a43.8 43.8 0 0 1 25.9 3.5ZM120 120Zm-87.5 14.8a44.2 44.2 0 0 1 43.4-51.3a43.2 43.2 0 0 1 18.6 4.2a43.9 43.9 0 0 1 19.4 17.5Zm76.4 69.2a44.2 44.2 0 0 1-3.7-77.9l29.6 81.4a43.8 43.8 0 0 1-25.9-3.5Zm55.6-47.5h-.2a44.4 44.4 0 0 1-18.8-4.2a43.9 43.9 0 0 1-19.4-17.5l81.4-29.6a43.8 43.8 0 0 1-28.4 48.6a45.4 45.4 0 0 1-14.6 2.7Z\\"/>"},"play-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m228.1 121.2l-143.9-88A8 8 0 0 0 72 40v176a8 8 0 0 0 12.2 6.8l143.9-88a7.9 7.9 0 0 0 0-13.6Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M80 232a15.5 15.5 0 0 1-7.8-2.1A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9a16 16 0 0 1 0 27.4l-144 87.9A15.4 15.4 0 0 1 80 232Zm0-192v176l144-88Z\\"/>"},"plug-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m212 132l-57.4 57.4a31.9 31.9 0 0 1-45.2 0l-42.8-42.8a31.9 31.9 0 0 1 0-45.2L124 44Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M237.7 66.3a8.1 8.1 0 0 0-11.4 0L192 100.7L155.3 64l34.4-34.3a8.1 8.1 0 0 0-11.4-11.4L144 52.7l-26.3-26.4a8.1 8.1 0 0 0-11.4 11.4l6.4 6.3L61 95.7a40.1 40.1 0 0 0 0 56.6L76.7 168l-50.4 50.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0L88 179.3l15.7 15.7a40.1 40.1 0 0 0 56.6 0l51.7-51.7l6.3 6.4a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4L203.3 112l34.4-34.3a8.1 8.1 0 0 0 0-11.4ZM149 183.7a24 24 0 0 1-34 0L72.3 141a24.1 24.1 0 0 1 0-34L124 55.3l76.7 76.7Z\\"/>"},"projector-screen-chart-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M208 72v112H48V72Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M88 144v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0Zm40 8a8 8 0 0 0 8-8v-24a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8Zm32 0a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm56-72v96h8a8 8 0 0 1 0 16h-88v17.4a24 24 0 1 1-16 0V192H32a8 8 0 0 1 0-16h8V80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16Zm-80 152a8 8 0 1 0-8 8a8 8 0 0 0 8-8ZM40 64h176V48H40Zm160 16H56v96h144Z\\"/>"},"rocket-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M73.9 111.4L42.5 149a7.6 7.6 0 0 0-1.6 6.8l12.3 55.7A8 8 0 0 0 66 216l30-24c-17.6-30.6-23.3-57.5-22.1-80.6Zm107.6-.7l31.4 37.7a7.6 7.6 0 0 1 1.6 6.8l-12.3 55.6a8 8 0 0 1-12.8 4.6l-30-24c17.6-30.7 23.3-57.6 22.1-80.7Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M144 216h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16Z\\"/><circle cx=\\"128\\" cy=\\"96\\" r=\\"12\\" fill=\\"currentColor\\"/><path fill=\\"currentColor\\" d=\\"m219.6 143.9l-30.2-36.3a125.4 125.4 0 0 0-8-34.9c-11.6-30.2-32.1-50-43.4-59.1a15.9 15.9 0 0 0-20-.1c-11.4 9.1-32.2 28.9-43.9 59.1a121.5 121.5 0 0 0-8.1 35.7l-29.6 35.6a16.1 16.1 0 0 0-3.4 13.7l12.4 55.6a15.9 15.9 0 0 0 10.3 11.6a17 17 0 0 0 5.4.9a16 16 0 0 0 9.9-3.5L98.8 200h58.4l27.8 22.2a16 16 0 0 0 9.9 3.5a17 17 0 0 0 5.4-.9a15.9 15.9 0 0 0 10.3-11.6l12.4-55.6a16.1 16.1 0 0 0-3.4-13.7ZM128 26c70.3 57.1 41.4 131 27.2 158h-54.5c-48-87.7 8.5-143 27.3-158ZM61 209.7l-12.3-55.6l17.9-21.5q3.5 28.1 19.1 57.4Zm134 0l-24.8-19.8c10.4-19.7 16.6-39 18.8-57.8l18.3 22Z\\"/>"},"rows-duotone":{"body":"<rect width=\\"176\\" height=\\"56\\" x=\\"40\\" y=\\"144\\" fill=\\"currentColor\\" opacity=\\".2\\" rx=\\"8\\"/><rect width=\\"176\\" height=\\"56\\" x=\\"40\\" y=\\"56\\" fill=\\"currentColor\\" opacity=\\".2\\" rx=\\"8\\"/><path fill=\\"currentColor\\" d=\\"M208 136H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16Zm0 56H48v-40h160v40Zm0-144H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 56H48V64h160v40Z\\"/>"},"sidebar-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M88 48v160H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 152h16a8 8 0 0 0 0-16H40v-16h16a8 8 0 0 0 0-16H40V88h16a8 8 0 0 0 0-16H40V56h40v144H40Zm176 48H96V56h120v144Z\\"/>"},"sketch-logo-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M240 104L128 224L78.9 104L128 40h56Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m246 98.7l-56-64a8 8 0 0 0-6-2.7H72a8 8 0 0 0-6 2.7l-56 64a8.1 8.1 0 0 0 .2 10.8l112 120a8 8 0 0 0 11.6 0l112-120a8.1 8.1 0 0 0 .2-10.8ZM222.4 96H181l-36.8-48h36.2ZM73.5 112l30.6 74.6L34.4 112Zm91.7 0L128 202.9L90.8 112ZM95.1 96L128 53.1L160.9 96Zm87.4 16h39.1l-69.7 74.6ZM75.6 48h36.2L75 96H33.6Z\\"/>"},"skull-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128 24a92 92 0 0 0-48 170.5V216a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-21.5A92 92 0 0 0 128 24ZM92 152a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Zm72 0a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M92 104a28 28 0 1 0 28 28a28.1 28.1 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm72-40a28 28 0 1 0 28 28a28.1 28.1 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12ZM128 16a100 100 0 0 0-56 182.9V216a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16v-17.1A100 100 0 0 0 128 16Zm43.8 171.7a7.8 7.8 0 0 0-3.8 6.8V216h-16v-24a8 8 0 0 0-16 0v24h-16v-24a8 8 0 0 0-16 0v24H88v-21.5a7.8 7.8 0 0 0-3.8-6.8a84 84 0 1 1 87.6 0Z\\"/>"},"sparkle-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m195.6 151.5l-52.1 19.2a8.1 8.1 0 0 0-4.8 4.8l-19.2 52.1a8 8 0 0 1-15 0l-19.2-52.1a8.1 8.1 0 0 0-4.8-4.8l-52.1-19.2a8 8 0 0 1 0-15l52.1-19.2a8.1 8.1 0 0 0 4.8-4.8l19.2-52.1a8 8 0 0 1 15 0l19.2 52.1a8.1 8.1 0 0 0 4.8 4.8l52.1 19.2a8 8 0 0 1 0 15Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"m198.4 129l-52.2-19.2L127 57.6a16 16 0 0 0-30 0l-19.2 52.2L25.6 129a16 16 0 0 0 0 30l52.2 19.2L97 230.4a16 16 0 0 0 30 0l19.2-52.2l52.2-19.2a16 16 0 0 0 0-30Zm-57.7 34.2a15.9 15.9 0 0 0-9.5 9.5L112 224.9l-19.2-52.2a15.9 15.9 0 0 0-9.5-9.5L31.1 144l52.2-19.2a15.9 15.9 0 0 0 9.5-9.5L112 63.1l19.2 52.2a15.9 15.9 0 0 0 9.5 9.5l52.2 19.2ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8Zm104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8Z\\"/>"},"star-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m132.4 190.7l50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M187.3 232a16.1 16.1 0 0 1-8.7-2.6l-50.5-31.9h-.2L81 227.2a18 18 0 0 1-20.1-.6a18.6 18.6 0 0 1-7-19.6l13.5-53.1a.8.8 0 0 0-.2-.8L22 115.5a16.8 16.8 0 0 1-5.2-18.1A16.4 16.4 0 0 1 31.4 86l59-3.8a.5.5 0 0 0 .4-.3l22-55.5a16.3 16.3 0 0 1 30.4 0l22 55.5a.5.5 0 0 0 .4.3l59 3.8a16.4 16.4 0 0 1 14.6 11.4a16.8 16.8 0 0 1-5.2 18.1l-45.2 37.6a.8.8 0 0 0-.2.8l14.5 57.3a16.6 16.6 0 0 1-6.3 17.7a16.8 16.8 0 0 1-9.5 3.1ZM128 181.5a16 16 0 0 1 8.7 2.5l50.4 31.9h.2a.7.7 0 0 0 .3-.3c.1-.1.1-.2 0-.6l-14.5-57.3a16.8 16.8 0 0 1 5.4-17l45.3-37.6c.1-.1.3-.3.1-.8s-.2-.4-.3-.4l-59.1-3.8a16.4 16.4 0 0 1-14.1-10.4l-22.1-55.4c-.1-.3-.2-.3-.3-.3s-.2 0-.3.3l-22.1 55.5a16.4 16.4 0 0 1-14.1 10.4L32.4 102c-.1 0-.2 0-.3.4s0 .7.1.8l45.3 37.6a16.8 16.8 0 0 1 5.4 17L69.4 211a2.5 2.5 0 0 0 .9 2.6a1.6 1.6 0 0 0 2.1.1l46.9-29.7a16 16 0 0 1 8.7-2.5Z\\"/>"},"storefront-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M96 96v16a32 32 0 0 1-64 0V96m192 0v16a32 32 0 0 1-64 0V96\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M232 95.8v-.4a4.3 4.3 0 0 1-.1-.5v-.3c-.1-.2-.1-.4-.2-.6v-.2l-14.3-50.2A16.2 16.2 0 0 0 202 32H54a16.2 16.2 0 0 0-15.4 11.6L24.3 93.8v.2c-.1.2-.1.4-.2.6v.3a4.3 4.3 0 0 1-.1.5V112a40 40 0 0 0 16 32v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a40 40 0 0 0 16-32V95.8ZM54 48h148l11.4 40H42.6Zm50 56h48v8a24 24 0 0 1-48 0Zm-16 0v8a24 24 0 0 1-35.1 21.3a8.7 8.7 0 0 0-1.8-1.1A23.9 23.9 0 0 1 40 112v-8Zm112 104H56v-56.8a42.6 42.6 0 0 0 8 .8a40 40 0 0 0 32-16a40 40 0 0 0 64 0a40 40 0 0 0 32 16a42.6 42.6 0 0 0 8-.8Zm4.9-75.8a8.7 8.7 0 0 0-1.8 1.1A24 24 0 0 1 168 112v-8h48v8a23.9 23.9 0 0 1-11.1 20.2Z\\"/>"},"swap-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M216 48v104a8 8 0 0 1-8 8h-40v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V104a8 8 0 0 1 8-8h40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M224 48v104a16 16 0 0 1-16 16H99.3l10.4 10.3a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0l-24-24a8.1 8.1 0 0 1 0-11.4l24-24a8.1 8.1 0 0 1 11.4 11.4L99.3 152H208V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16Zm-56 144a8 8 0 0 0-8 8v8H48V104h108.7l-10.4 10.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0l24-24a8.1 8.1 0 0 0 0-11.4l-24-24a8.1 8.1 0 0 0-11.4 11.4L156.7 88H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8Z\\"/>"},"sword-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m82.1 197.5l-29.9 29.9a8 8 0 0 1-11.3 0l-12.3-12.3a8 8 0 0 1 0-11.3l29.9-29.9a8 8 0 0 0 0-11.4l-20.8-20.8a8 8 0 0 1 0-11.4l12.6-12.6a8 8 0 0 1 11.4 0l76.6 76.6a8 8 0 0 1 0 11.4l-12.6 12.6a8 8 0 0 1-11.4 0l-20.8-20.8a8 8 0 0 0-11.4 0Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M221.7 34.3A8.1 8.1 0 0 0 216 32l-63.8.2a8.1 8.1 0 0 0-6.2 2.9l-70.4 85.2l-8.3-8.3a16.1 16.1 0 0 0-22.6 0L32 124.7a15.9 15.9 0 0 0 0 22.6l20.9 20.9l-30 29.9a16.2 16.2 0 0 0 0 22.7l12.3 12.3a16.3 16.3 0 0 0 22.7 0l29.9-30l20.9 20.9a16.1 16.1 0 0 0 22.6 0l12.7-12.7a15.9 15.9 0 0 0 0-22.6l-8.3-8.3l85.2-70.4a8.1 8.1 0 0 0 2.9-6.2L224 40a8.1 8.1 0 0 0-2.3-5.7ZM120 212.7l-20.9-20.9a15.9 15.9 0 0 0-22.6 0l-30 29.9l-12.2-12.2l29.9-30a16.1 16.1 0 0 0 0-22.6L43.3 136L56 123.3l14.5 14.5l23.8 23.9l38.4 38.3ZM207.8 100l-83.5 69l-13-13l54.4-54.3a8.1 8.1 0 0 0-11.4-11.4L100 144.7l-13-13l69-83.5l52-.2Z\\"/>"},"t-shirt-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"m244.6 78.8l-18.4 36.8a7.9 7.9 0 0 1-7.1 4.4H192V40l49.4 28.2a8.1 8.1 0 0 1 3.2 10.6Zm-233.2 0l18.4 36.8a7.9 7.9 0 0 0 7.1 4.4H64V40L14.6 68.2a8.1 8.1 0 0 0-3.2 10.6Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M245.4 61.3L196 33.1h-.1l-.5-.2h-.2l-.5-.2H160a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H61.3l-.5.2h-.2l-.5.2H60L10.6 61.3a15.9 15.9 0 0 0-6.4 21l18.4 36.9a16 16 0 0 0 14.3 8.8H56v80a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-80h19.1a16 16 0 0 0 14.3-8.8l18.4-36.9a15.9 15.9 0 0 0-6.4-21ZM36.9 112L18.5 75.2L56 53.8V112ZM184 208H72V48h16.8a40 40 0 0 0 78.4 0H184Zm35.1-96H200V53.8l37.5 21.4Z\\"/>"},"table-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M32 104h56v96H32z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8ZM40 112h40v32H40Zm56 0h120v32H96Zm120-48v32H40V64ZM40 160h40v32H40Zm176 32H96v-32h120v32Z\\"/>"},"toggle-left-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M112 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144Zm0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112ZM80 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24.1 24.1 0 0 1-24 24Z\\"/>"},"trophy-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M200 56v56a72 72 0 0 1-72.5 72c-39.7-.3-71.5-33.2-71.5-72.9V56a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M232 64h-24v-8a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v8H23.9a16 16 0 0 0-16 16v16a40 40 0 0 0 40 40h4c9.7 29.9 36.2 52.3 68.1 55.6V216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-24.4a79.7 79.7 0 0 0 68.3-55.6h3.7a40 40 0 0 0 40-40V80a16 16 0 0 0-16-16ZM47.9 120a24 24 0 0 1-24-24V80H48v31.1a86.9 86.9 0 0 0 .5 8.9Zm125.2 37.4A63.6 63.6 0 0 1 128 176h-.5c-35-.3-63.5-29.4-63.5-64.9V56h128v56a63.4 63.4 0 0 1-18.9 45.4ZM232 96a24.1 24.1 0 0 1-24 24h-.4a70.3 70.3 0 0 0 .4-8V80h24Z\\"/>"},"truck-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M176.1 144h-160v40a8 8 0 0 0 8 8h20a24 24 0 0 1 48 0h72a24 24 0 0 1 12-20.8Zm36 48a24 24 0 0 0-36-20.8V120h64v64a8 8 0 0 1-8 8h-20\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M248.1 119.9v-.2a1.7 1.7 0 0 0-.1-.7v-.3c0-.2-.1-.4-.1-.6v-.2c-.1-.3-.1-.5-.2-.8h-.1l-14-35A15.9 15.9 0 0 0 218.7 72h-34.6v-8a8 8 0 0 0-8-8h-152a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h13a32 32 0 0 0 62 0h58a32 32 0 0 0 62 0h13a16 16 0 0 0 16-16v-64ZM218.7 88l9.6 24h-44.2V88Zm-50.6-16v64h-144V72Zm-144 80h144v15a32.6 32.6 0 0 0-11 17h-58a32 32 0 0 0-62 0h-13Zm44 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16Zm120 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16Zm44-24h-13a32.1 32.1 0 0 0-31-24a26.9 26.9 0 0 0-4 .3V128h48Z\\"/>"},"user-circle-plus-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M128 32a96 96 0 0 0-64.2 167.4A72 72 0 0 1 128 160a40 40 0 1 1 40-40a40 40 0 0 1-40 40a72 72 0 0 1 64.2 39.4A96 96 0 0 0 128 32Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M168 56a8 8 0 0 1 8-8h16V32a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V64h-16a8 8 0 0 1-8-8Zm62.7 55.6A99.8 99.8 0 0 1 232 128a103.7 103.7 0 0 1-33.8 76.7l-1.3 1.2a104 104 0 0 1-137.8 0l-1.3-1.2A104 104 0 0 1 128 24a99.8 99.8 0 0 1 16.4 1.3a8 8 0 0 1-2.5 15.8A92 92 0 0 0 128 40a88 88 0 0 0-65.8 146.4a79.2 79.2 0 0 1 36.1-28.7a48 48 0 1 1 59.4 0a79.2 79.2 0 0 1 36.1 28.7A87.6 87.6 0 0 0 216 128a92 92 0 0 0-1.1-13.9a8 8 0 0 1 15.8-2.5ZM128 152a32 32 0 1 0-32-32a32.1 32.1 0 0 0 32 32Zm0 64a87.4 87.4 0 0 0 53.9-18.5a64 64 0 0 0-107.8 0A87.4 87.4 0 0 0 128 216Z\\"/>"},"users-duotone":{"body":"<circle cx=\\"88\\" cy=\\"108\\" r=\\"52\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M121.2 157.9a60 60 0 1 0-66.4 0a95.5 95.5 0 0 0-45.3 34.9a8 8 0 1 0 13 9.2a80.1 80.1 0 0 1 131 0a8 8 0 1 0 13-9.2a95.5 95.5 0 0 0-45.3-34.9ZM44 108a44 44 0 1 1 44 44a44 44 0 0 1-44-44Z\\"/><path fill=\\"currentColor\\" d=\\"M248.1 192.8a96.3 96.3 0 0 0-45.4-34.9A59.9 59.9 0 0 0 169.5 48a64 64 0 0 0-16.3 2.2a8.1 8.1 0 0 0-5.5 9.9a8 8 0 0 0 9.9 5.5a47.4 47.4 0 0 1 11.9-1.6a44 44 0 0 1 0 88a8 8 0 0 0 0 16a80.2 80.2 0 0 1 65.5 34a7.9 7.9 0 0 0 11.1 1.9a8 8 0 0 0 2-11.1Z\\"/>"},"users-four-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M112 168a32 32 0 1 1-32-32a32 32 0 0 1 32 32ZM80 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm96 104a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm0-40a32 32 0 1 0-32-32a32 32 0 0 0 32 32Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M27.2 126.4A7.7 7.7 0 0 0 32 128a8 8 0 0 0 6.4-3.2a52 52 0 0 1 83.1-.1l.6.7h.1c.1.2.3.3.5.5h.2l.3.3h.1a4.7 4.7 0 0 0 .9.6l.3.2l.9.4h.3l.8.2h3.3l1.7-.6h.2l.5-.3l.3-.2l.3-.2a.1.1 0 0 0 .1-.1l.3-.2l.5-.5h.1l.6-.6a52 52 0 0 1 83.2 0a8.1 8.1 0 0 0 11.2 1.6a8 8 0 0 0 1.6-11.2A67.8 67.8 0 0 0 203 93.5a40 40 0 1 0-54 0a68.1 68.1 0 0 0-21 14.3a68.1 68.1 0 0 0-21-14.3a40 40 0 1 0-54 0a67.8 67.8 0 0 0-27.4 21.7a8 8 0 0 0 1.6 11.2ZM152 64a24 24 0 1 1 24 24a24.1 24.1 0 0 1-24-24Zm-96 0a24 24 0 1 1 24 24a24.1 24.1 0 0 1-24-24Zm147 133.5a40 40 0 1 0-54 0a68.1 68.1 0 0 0-21 14.3a68.1 68.1 0 0 0-21-14.3a40 40 0 1 0-54 0a67.8 67.8 0 0 0-27.4 21.7a8 8 0 0 0 1.6 11.2A7.7 7.7 0 0 0 32 232a8 8 0 0 0 6.4-3.2a52 52 0 0 1 83.1-.1l.6.7h.1l.5.5h.2l.3.3h.1l.9.6l.3.2l.9.4h.3l.8.2h3.4l.7-.3h.1l.8-.3h.2l.5-.3l.3-.2l.3-.2h.1l.3-.2l.5-.5h.1l.6-.6a52 52 0 0 1 83.2 0a8.1 8.1 0 0 0 11.2 1.6a8 8 0 0 0 1.6-11.2a67.8 67.8 0 0 0-27.4-21.9ZM56 168a24 24 0 1 1 24 24a24.1 24.1 0 0 1-24-24Zm96 0a24 24 0 1 1 24 24a24.1 24.1 0 0 1-24-24Z\\"/>"},"users-three-duotone":{"body":"<path fill=\\"currentColor\\" d=\\"M168 140a40 40 0 1 1-40-40a40 40 0 0 1 40 40ZM60 52a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm136 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32Z\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M248.8 146.4a7.7 7.7 0 0 1-4.8 1.6a8 8 0 0 1-6.4-3.2A51.6 51.6 0 0 0 196 124a8 8 0 0 1 0-16a24 24 0 1 0-23.6-28.5a8 8 0 1 1-15.7-3a40 40 0 1 1 66.3 37a67.8 67.8 0 0 1 27.4 21.7a8 8 0 0 1-1.6 11.2Zm-56 66.1a8.1 8.1 0 0 1-3.7 10.7a9.3 9.3 0 0 1-3.5.8a8.1 8.1 0 0 1-7.2-4.5a56.1 56.1 0 0 0-100.8 0a8 8 0 0 1-10.7 3.7a8.1 8.1 0 0 1-3.7-10.7a72.1 72.1 0 0 1 35.6-34.4a48 48 0 1 1 58.4 0a72.1 72.1 0 0 1 35.6 34.4ZM128 172a32 32 0 1 0-32-32a32.1 32.1 0 0 0 32 32Zm-60-56a8 8 0 0 0-8-8a24 24 0 1 1 23.6-28.5a8 8 0 1 0 15.7-3a40 40 0 1 0-66.3 37a67.8 67.8 0 0 0-27.4 21.7a8 8 0 0 0 1.6 11.2A7.7 7.7 0 0 0 12 148a8 8 0 0 0 6.4-3.2A51.6 51.6 0 0 1 60 124a8 8 0 0 0 8-8Z\\"/>"},"watch-duotone":{"body":"<circle cx=\\"128\\" cy=\\"128\\" r=\\"72\\" fill=\\"currentColor\\" opacity=\\".2\\"/><path fill=\\"currentColor\\" d=\\"M208 128a80.1 80.1 0 0 0-32.7-64.5l-6.2-34.4A16 16 0 0 0 153.3 16h-50.6a16 16 0 0 0-15.8 13.1l-6.2 34.4a80 80 0 0 0 0 129l6.2 34.4a16 16 0 0 0 15.8 13.1h50.6a16 16 0 0 0 15.8-13.1l6.2-34.4A80.1 80.1 0 0 0 208 128ZM102.7 32h50.6l3.9 21.6a78.9 78.9 0 0 0-58.4 0ZM64 128a64 64 0 1 1 64 64a64.1 64.1 0 0 1-64-64Zm89.3 96h-50.6l-3.9-21.6a78.9 78.9 0 0 0 58.4 0Z\\"/><path fill=\\"currentColor\\" d=\\"M128 136h40a8 8 0 0 0 0-16h-32V88a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Z\\"/>"}}},{"prefix":"fa","width":1536,"height":1536,"icons":{"facebook":{"body":"<path fill=\\"currentColor\\" d=\\"M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12z\\"/>","width":896,"height":1664},"github":{"body":"<path fill=\\"currentColor\\" d=\\"M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z\\"/>","height":1504},"linkedin":{"body":"<path fill=\\"currentColor\\" d=\\"M349 497v991H19V497h330zm21-306q1 73-50.5 122T184 362h-2q-82 0-132-49T0 191q0-74 51.5-122.5T186 20t133 48.5T370 191zm1166 729v568h-329V958q0-105-40.5-164.5T1040 734q-63 0-105.5 34.5T871 854q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52t87-43.5T1157 474q171 0 275 113.5T1536 920z\\"/>","height":1504},"quote-left":{"body":"<path fill=\\"currentColor\\" d=\\"M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z\\"/>","width":1664,"height":1408},"twitter":{"body":"<path fill=\\"currentColor\\" d=\\"M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50z\\"/>","width":1600,"height":1280}}},{"prefix":"logos","width":256,"height":256,"icons":{"android-icon":{"body":"<path fill=\\"#3DDC84\\" d=\\"m190.736 43.58l21.305-36.927a4.443 4.443 0 0 0-1.623-6.06a4.436 4.436 0 0 0-6.055 1.625l-21.57 37.395C166.294 32.079 147.768 27.882 128 27.882s-38.297 4.197-54.792 11.731L51.637 2.217A4.437 4.437 0 0 0 45.581.593a4.44 4.44 0 0 0-1.622 6.06L65.264 43.58C28.681 63.494 3.66 100.56 0 144.35h256c-3.663-43.79-28.685-80.856-65.264-100.77m-3.921 42.95c5.828 0 10.568 4.829 10.568 10.764c0 5.937-4.74 10.769-10.568 10.769c-5.826 0-10.566-4.832-10.566-10.769c0-5.935 4.74-10.764 10.566-10.764Zm-117.631 0c5.826 0 10.567 4.829 10.567 10.764c0 5.937-4.741 10.769-10.567 10.769c-5.828 0-10.567-4.832-10.567-10.769c0-5.935 4.74-10.764 10.567-10.764Z\\"/>","height":145},"angular-icon":{"body":"<path fill=\\"#E23237\\" d=\\"M.1 45.522L125.908.697l129.196 44.028l-20.919 166.45l-108.277 59.966l-106.583-59.169L.1 45.522Z\\"/><path fill=\\"#B52E31\\" d=\\"M255.104 44.725L125.908.697v270.444l108.277-59.866l20.919-166.55Z\\"/><path fill=\\"#FFF\\" d=\\"M126.107 32.274L47.714 206.693l29.285-.498l15.739-39.347h70.325l17.233 39.845l27.99.498l-82.179-174.917Zm.2 55.882l26.496 55.383h-49.806l23.31-55.383Z\\"/>","height":272},"bootstrap":{"body":"<path fill=\\"#7E13F8\\" d=\\"M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z\\"/>","height":204},"bulma":{"body":"<path fill=\\"#00D1B2\\" d=\\"M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z\\"/>","height":373},"flutter":{"body":"<defs><linearGradient id=\\"svgIDa\\" x1=\\"3.952%\\" x2=\\"75.897%\\" y1=\\"26.993%\\" y2=\\"52.919%\\"><stop offset=\\"0%\\"/><stop offset=\\"100%\\" stop-opacity=\\"0\\"/></linearGradient></defs><path fill=\\"#47C5FB\\" d=\\"M157.666.001L.001 157.666l48.8 48.8L255.268.001zm-1.099 145.396l-84.418 84.418l48.984 49.716l48.71-48.71l85.425-85.424z\\"/><path fill=\\"#00569E\\" d=\\"m121.133 279.531l37.082 37.082h97.052l-85.425-85.792z\\"/><path fill=\\"#00B5F8\\" d=\\"m71.6 230.364l48.801-48.801l49.441 49.258l-48.709 48.71z\\"/><path fill=\\"url(#svgIDa)\\" fill-opacity=\\".8\\" d=\\"m121.133 279.531l40.56-13.459l4.029-31.131z\\"/>","height":317},"laravel":{"body":"<path fill=\\"#FF2D20\\" d=\\"M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35Zm-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773h-.005Zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514l90.843-52.3ZM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97v-.006ZM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893h.01Zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608l17.344-9.986ZM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768l-41.27-23.757Zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986v-47.04Zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918l41.21 23.325Z\\"/>","height":264},"nodejs-icon":{"body":"<path fill=\\"#539E43\\" d=\\"M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101c0 .795-.265 1.59-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571Z\\"/>","height":289},"python":{"body":"<defs><linearGradient id=\\"svgIDa\\" x1=\\"12.959%\\" x2=\\"79.639%\\" y1=\\"12.039%\\" y2=\\"78.201%\\"><stop offset=\\"0%\\" stop-color=\\"#387EB8\\"/><stop offset=\\"100%\\" stop-color=\\"#366994\\"/></linearGradient><linearGradient id=\\"svgIDb\\" x1=\\"19.128%\\" x2=\\"90.742%\\" y1=\\"20.579%\\" y2=\\"88.429%\\"><stop offset=\\"0%\\" stop-color=\\"#FFE052\\"/><stop offset=\\"100%\\" stop-color=\\"#FFC331\\"/></linearGradient></defs><path fill=\\"url(#svgIDa)\\" d=\\"M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072ZM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13Z\\"/><path fill=\\"url(#svgIDb)\\" d=\\"M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897Zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13Z\\"/>","height":255},"react":{"body":"<path fill=\\"#00D8FF\\" d=\\"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z\\"/>","height":228},"strapi-icon":{"body":"<g fill=\\"#8E75FF\\"><path d=\\"M249.868 0H81.613v84.362h82.79a5.343 5.343 0 0 1 5.342 5.342v81.647h85.465V5.352A5.342 5.342 0 0 0 249.868 0Z\\"/><path d=\\"M81.603 0v84.362H2.671a2.676 2.676 0 0 1-1.875-4.58L81.603 0Zm92.693 251.22a2.676 2.676 0 0 1-4.551-1.904v-77.965h85.465l-80.914 79.86v.01ZM81.603 84.362h85.476a2.67 2.67 0 0 1 2.666 2.666v84.323h-82.79a5.342 5.342 0 0 1-5.342-5.342V84.362h-.01Z\\" opacity=\\".405\\"/></g>","height":252},"tailwindcss-icon":{"body":"<defs><linearGradient id=\\"svgIDa\\" x1=\\"-2.778%\\" x2=\\"100%\\" y1=\\"32%\\" y2=\\"67.556%\\"><stop offset=\\"0%\\" stop-color=\\"#2298BD\\"/><stop offset=\\"100%\\" stop-color=\\"#0ED7B5\\"/></linearGradient></defs><path fill=\\"url(#svgIDa)\\" d=\\"M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z\\"/>","height":154},"vue":{"body":"<path fill=\\"#41B883\\" d=\\"M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z\\"/><path fill=\\"#41B883\\" d=\\"m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z\\"/><path fill=\\"#35495E\\" d=\\"M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z\\"/>","height":221}}},{"prefix":"et","width":32,"height":32,"icons":{"adjustments":{"body":"<g fill=\\"currentColor\\"><path d=\\"M31 0H2c-.822 0-2 1.178-2 2v28c0 .822 1.178 2 2 2h29c.822 0 2-1.178 2-2V2c0-.822-1.178-2-2-2zm1 30c-.006.284-.716.994-1 1H2c-.284-.006-.994-.716-1-1V2c.006-.284.716-.994 1-1h29c.284.006.994.716 1 1v28z\\"/><path d=\\"M16.5 5.5c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2zm0 3c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1zm8 13c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2zm0 3c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1zm-16-8c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2zm0 3c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1zm0-4.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5zm0 7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5zm8-11a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0v-14a.5.5 0 0 0-.5-.5zm8 9a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-1 0v14a.5.5 0 0 0 .5.5z\\"/></g>","width":33},"briefcase":{"body":"<g fill=\\"currentColor\\"><path d=\\"M37.5 18a.5.5 0 0 0-.5.5v12a.5.5 0 0 1-.5.5h-35a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 0-1 0v12c0 .827.673 1.5 1.5 1.5h35c.827 0 1.5-.673 1.5-1.5v-12a.5.5 0 0 0-.5-.5zm-12-13a.5.5 0 0 0 .5-.5v-3c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5z\\"/><path d=\\"M36.5 7h-35C.673 7 0 7.673 0 8.5v4.958c0 2.778 9.456 6.5 19.125 6.5c9.543 0 18.875-3.722 18.875-6.5V8.5c0-.827-.673-1.5-1.5-1.5zm.5 6.458c0 1.764-8.457 5.5-17.875 5.5c-9.55 0-18.125-3.735-18.125-5.5V8.5a.5.5 0 0 1 .5-.5h35a.5.5 0 0 1 .5.5v4.958zM19.125 23c.943 0 1.923-.039 2.914-.116a.5.5 0 0 0 .459-.538a.49.49 0 0 0-.538-.459c-2.014.157-3.909.15-5.919-.02a.5.5 0 0 0-.084.996c1.076.091 2.142.137 3.168.137z\\"/></g>","width":38},"browser":{"body":"<g fill=\\"currentColor\\"><path d=\\"M41.5 10a.5.5 0 0 0-.5.5v20a.5.5 0 0 1-.5.5h-39a.5.5 0 0 1-.5-.5v-20a.5.5 0 0 0-1 0v20c0 .827.673 1.5 1.5 1.5h39c.827 0 1.5-.673 1.5-1.5v-20a.5.5 0 0 0-.5-.5zm-1-10h-39C.673 0 0 .673 0 1.5v6a.5.5 0 0 0 .5.5h41a.5.5 0 0 0 .5-.5v-6c0-.827-.673-1.5-1.5-1.5zm.5 7H1V1.5a.5.5 0 0 1 .5-.5h39a.5.5 0 0 1 .5.5V7z\\"/><path d=\\"M17.5 28a.5.5 0 0 0 .5-.5v-16a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h13zM5 12h12v15H5V12zm17.5 3h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1zm0 5h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1zm0 5h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1z\\"/><circle cx=\\"4\\" cy=\\"4\\" r=\\"1\\"/><circle cx=\\"8\\" cy=\\"4\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"4\\" r=\\"1\\"/></g>","width":42},"camera":{"body":"<g fill=\\"currentColor\\"><path d=\\"M39.5 6H32c-1.927 0-1.998-1.797-2-2V3c0-1.258-1.39-3-4-3h-9.969c-2.935 0-4 1.794-4 3v.994C12.03 4.076 11.983 6 10 6H2.5A2.503 2.503 0 0 0 0 8.5v18C0 27.878 1.121 29 2.5 29h6a.5.5 0 0 0 0-1h-6c-.827 0-1.5-.673-1.5-1.5V14h8a12.93 12.93 0 0 0-1 5c0 7.168 5.832 13 13 13s13-5.832 13-13c0-1.771-.359-3.46-1.003-5H41v12.5c0 .827-.673 1.5-1.5 1.5h-7a.5.5 0 0 0 0 1h7c1.379 0 2.5-1.122 2.5-2.5v-18C42 7.122 40.879 6 39.5 6zM21 31c-6.617 0-12-5.383-12-12S14.383 7 21 7s12 5.383 12 12s-5.383 12-12 12zm11.75-18a.49.49 0 0 0-.206.047C30.38 8.868 26.022 6 21 6s-9.38 2.868-11.544 7.047A.49.49 0 0 0 9.25 13H1V8.5C1 7.673 1.673 7 2.5 7H10c2.368 0 3.019-1.958 3.031-3V3c0-.804.799-2 3-2H26c2.094 0 3 1.324 3 2v1c0 1.038.627 3 3 3h7.5c.827 0 1.5.673 1.5 1.5V13h-8.25z\\"/><path d=\\"M9.5 5a.5.5 0 0 0 .5-.5v-1C10 2.673 9.327 2 8.5 2h-4C3.673 2 3 2.673 3 3.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5zM21 10c-4.963 0-9 4.038-9 9s4.037 9 9 9s9-4.038 9-9s-4.037-9-9-9zm0 17c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z\\"/></g>","width":42},"chat":{"body":"<g fill=\\"currentColor\\"><path d=\\"M35.652 14.023a.5.5 0 0 0-.303.953C39.257 16.221 41 18.078 41 21c0 2.599-2.371 4.616-3.783 5.588A.5.5 0 0 0 37 27v3.823a7.953 7.953 0 0 1-3.126-2.155a.505.505 0 0 0-.468-.159c-.285.055-.576.133-.871.212c-.51.137-1.036.279-1.535.279c-2.568 0-4.366-.552-6.204-1.903a.5.5 0 0 0-.593.806C26.23 29.393 28.199 30 31 30c.631 0 1.223-.159 1.795-.313c.178-.049.355-.097.53-.138c1.869 1.974 3.983 2.423 4.075 2.441a.495.495 0 0 0 .416-.103A.498.498 0 0 0 38 31.5v-4.239c2.582-1.841 4-4.057 4-6.261c0-3.381-2.017-5.598-6.348-6.977z\\"/><path d=\\"M33 13.5C33 5.804 25.982 0 16.677 0C7.325 0 0 5.931 0 13.502c0 4.539 3.211 7.791 6 9.759v6.636a.502.502 0 0 0 .705.456c.146-.065 3.559-1.616 6.479-4.809c1.265.235 2.696.461 3.994.461C26.641 26.005 33 20.979 33 13.5zM17.177 25.005c-1.31 0-2.799-.251-4.083-.496a.507.507 0 0 0-.468.159C10.576 26.98 8.167 28.449 7 29.082V23a.5.5 0 0 0-.217-.412C4.145 20.773 1 17.725 1 13.502C1 6.491 7.886 1 16.677 1C25.413 1 32 6.374 32 13.5c0 6.882-5.957 11.505-14.823 11.505z\\"/><path d=\\"M16.5 11.5c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2zm0 3a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm7-3c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2zm0 3a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm-14-2.905c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2zm0 3a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2z\\"/></g>","width":42},"compass":{"body":"<g fill=\\"currentColor\\"><path d=\\"M0 16c0 8.822 7.178 16 16 16s16-7.178 16-16S24.822 0 16 0S0 7.178 0 16zM16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16S7.729 1 16 1z\\"/><path d=\\"M16 29c7.168 0 13-5.832 13-13S23.168 3 16 3S3 8.832 3 16s5.832 13 13 13zM15 4.051v1.526a.5.5 0 0 0 1 0V4c6.279 0 11.438 4.85 11.949 11h-1.527a.5.5 0 0 0 0 1H28c0 6.617-5.383 12-12 12v-1.577a.5.5 0 0 0-1 0v1.526C8.851 27.438 4 22.28 4 16h1.578a.5.5 0 0 0 0-1H4.051C4.534 9.181 9.181 4.534 15 4.051z\\"/><path d=\\"M9.386 23.041a.5.5 0 0 0 .292-.094l5.614-4.036c.228.056.463.093.708.093c1.654 0 3-1.346 3-3a3 3 0 0 0-.087-.687l4.106-5.712a.501.501 0 0 0-.698-.699l-5.778 4.153a2.96 2.96 0 0 0-.544-.055c-1.654 0-3 1.346-3 3c0 .195.022.386.058.571L8.98 22.249a.501.501 0 0 0 .406.792zM14 16.005c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2s-2-.898-2-2zm6.424-4.502l-1.987 2.765a3.025 3.025 0 0 0-.792-.767l2.779-1.998zm-6.919 6.164c.199.298.454.553.743.763l-2.672 1.921l1.929-2.684z\\"/></g>"},"documents":{"body":"<g fill=\\"currentColor\\"><path d=\\"M1.512 28H19.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.426.426 0 0 0-.013-.062a.488.488 0 0 0-.122-.227L13.853.147a.507.507 0 0 0-.289-.135C13.543.01 13.523 0 13.5 0H1.506C.676 0 0 .673 0 1.5v25c0 .827.678 1.5 1.512 1.5zM14 1.707L19.293 7H14.5a.5.5 0 0 1-.5-.5V1.707zM1 1.5c0-.276.227-.5.506-.5H13v5.5c0 .827.673 1.5 1.5 1.5H20v18.5a.5.5 0 0 1-.5.5H1.512A.506.506 0 0 1 1 26.5v-25z\\"/><path d=\\"M4.5 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1zm0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1zm0-8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zm0 12h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1zm0 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1z\\"/><path d=\\"M21.5 5H26v5.5c0 .827.673 1.5 1.5 1.5H33v18.5a.5.5 0 0 1-.5.5H14.512a.506.506 0 0 1-.512-.5v-1a.5.5 0 0 0-1 0v1c0 .827.678 1.5 1.512 1.5H32.5c.827 0 1.5-.673 1.5-1.5v-19c0-.023-.01-.043-.013-.065a.426.426 0 0 0-.013-.062a.488.488 0 0 0-.122-.227l-6.999-6.999a.491.491 0 0 0-.289-.134C26.543 4.01 26.523 4 26.5 4h-5a.5.5 0 0 0 0 1zm6 6a.5.5 0 0 1-.5-.5V5.707L32.293 11H27.5z\\"/><path d=\\"M23.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zm0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zm0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zm0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1z\\"/></g>","width":34},"layers":{"body":"<g fill=\\"currentColor\\"><path d=\\"M30.765 7.262L19.222.747c-1.571-.887-4.271-.888-5.845 0L1.834 7.262C.951 7.761.466 8.459.466 9.229s.486 1.468 1.368 1.966l11.543 6.516c.786.444 1.824.688 2.922.688c1.099 0 2.137-.245 2.923-.688l11.543-6.516c.883-.498 1.369-1.196 1.369-1.966s-.487-1.468-1.369-1.967zm-.526 3.003l-11.543 6.516c-1.238.699-3.556.7-4.794 0L2.359 10.265c-.524-.296-.824-.674-.824-1.036c0-.363.3-.74.824-1.037l11.543-6.516c.619-.35 1.493-.55 2.396-.55c.904 0 1.778.201 2.397.55l11.543 6.516c.524.296.825.674.825 1.037c.001.362-.299.74-.824 1.036z\\"/><path d=\\"M30.765 14.099a.536.536 0 0 0-.526.931c.524.296.825.674.825 1.036s-.301.74-.825 1.036l-11.543 6.516c-1.298.733-3.494.734-4.794 0L2.359 17.102c-.524-.296-.824-.674-.824-1.036s.3-.74.824-1.036a.534.534 0 1 0-.526-.931C.95 14.597.465 15.296.465 16.066s.485 1.469 1.368 1.967l11.543 6.516c.819.462 1.871.694 2.922.694c1.052 0 2.104-.231 2.923-.694l11.543-6.516c.883-.498 1.369-1.197 1.369-1.967s-.486-1.469-1.368-1.967z\\"/><path d=\\"M30.765 20.804a.536.536 0 0 0-.526.931c.524.296.825.674.825 1.036s-.301.74-.825 1.037l-11.543 6.516c-1.298.733-3.494.734-4.794 0L2.359 23.807c-.524-.296-.824-.674-.824-1.037c0-.362.3-.74.824-1.036a.534.534 0 1 0-.526-.931C.952 21.302.466 22 .466 22.771s.485 1.469 1.368 1.967l11.543 6.516c.819.462 1.871.694 2.922.694c1.052 0 2.104-.231 2.923-.694l11.543-6.516c.883-.499 1.369-1.197 1.369-1.967s-.487-1.469-1.369-1.967z\\"/></g>"},"lightbulb":{"body":"<path fill=\\"currentColor\\" d=\\"M11 0C5.71 0 0 4.206 0 11c0 3.353 1.334 6.174 3.896 8.312a.478.478 0 0 0 .092.088c1.901 2.062 1.997 2.454 2.01 3.361c.006.359.003.465 0 .523l-.004.209c-.015.452-.038 1.209.899 1.495l8.094 1.781a.5.5 0 1 0 .214-.977l-8.055-1.771c-.155-.047-.168-.051-.154-.498l.003-.191s.01-.078.002-.586c-.019-1.269-.295-1.882-2.309-4.059a.5.5 0 0 0-.138-.118C2.194 16.566 1 14.02 1 11C1 4.823 6.19 1 11 1c4.916 0 10 3.741 10 10c0 3.978-1.928 6.171-3.518 7.551a.485.485 0 0 0-.147.109c-2.037 2.204-2.313 2.817-2.332 4.086v.103l-.001.035c-.003.076-.014.118-.013.134a19.508 19.508 0 0 1-.117-.018l-4.195-.987a.5.5 0 1 0-.229.974l4.144.972c.055.02.553.182.973-.113c.183-.129.396-.382.434-.866l.003-.047l.002-.099l-.001-.026l.001-.046c.013-.902.107-1.294 2.005-3.356c.009-.007.019-.014.027-.022C20.703 17.143 22 14.4 22 11c0-6.885-5.593-11-11-11zm4 29.5a.498.498 0 0 0 .487-.39a.499.499 0 0 0-.377-.598l-8-1.814a.5.5 0 0 0-.221.975l8 1.814A.48.48 0 0 0 15 29.5zm-7.391.054a.5.5 0 1 0-.219.975l6.5 1.458a.5.5 0 1 0 .219-.975l-6.5-1.458z\\"/>","width":22},"trophy":{"body":"<path fill=\\"currentColor\\" d=\\"M25.5 1a.5.5 0 0 0 0-1h-17a.5.5 0 0 0 0 1h17zm0 1h-19C3.217 2 1.687 3.166.981 4.144C.117 5.344-.045 6.947.525 8.658c.882 2.646 3.846 5.825 5.668 7.237a.5.5 0 0 0 .614-.791c-1.674-1.296-4.525-4.342-5.332-6.763c-.467-1.397-.354-2.68.318-3.612C2.608 3.598 4.235 3 6.5 3H8v9.5c0 6.726 6.673 10.601 8.036 11.322A.504.504 0 0 0 16 24v2.5a.5.5 0 0 0 1 0V24a.499.499 0 0 0-.033-.164C18.481 23.124 26 19.25 26 12.5V3h1.5c2.265 0 3.892.598 4.707 1.729c.672.932.785 2.215.318 3.613c-.63 1.891-3.769 5.553-5.332 6.763a.5.5 0 0 0 .614.791c1.732-1.342 4.961-5.119 5.668-7.237c.57-1.711.408-3.314-.456-4.514C32.313 3.166 30.783 2 27.5 2h-2zM25 12.5c0 6.093-7.152 9.804-8.486 10.443C15.286 22.278 9 18.576 9 12.5V3h16v9.5zM11 28c-1.141 0-2 .86-2 2v1.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-1.425C24 28.912 23.121 28 22 28H11zm12 2.075V31H10v-1c0-.589.411-1 1-1h11c.57 0 1 .462 1 1.075z\\"/>","width":34}}},{"prefix":"el","width":1200,"height":1200,"icons":{}},{"prefix":"ls","width":717,"height":717,"icons":{"0":{"body":"<path fill=\\"currentColor\\" d=\\"M247 0c205 0 255 224 255 386s-50 386-255 386S0 546 0 386S41 0 247 0zm3 706c157 0 183-201 183-319c0-117-26-318-183-318C88 69 70 269 70 387s18 319 180 319z\\"/>","width":502,"height":772},"1":{"body":"<path fill=\\"currentColor\\" d=\\"M0 0h175v735h-73V71H0V0z\\"/>","width":175,"height":735},"n":{"body":"<path fill=\\"currentColor\\" d=\\"M72 128v64c42-40 109-64 171-64s109 24 151 64c44 42 72 102 72 168v294h-72V356c-2-87-64-157-151-157c-88 0-169 70-171 157v298H0V128h72z\\"/>","width":466,"height":654}}},{"prefix":"ep","width":1024,"height":1024,"icons":{}},{"prefix":"ps","width":512,"height":512,"icons":{}},{"prefix":"map","width":50,"height":50,"icons":{}},{"prefix":"cil","width":512,"height":512,"icons":{"vector":{"body":"<path fill=\\"currentColor\\" d=\\"M368 184h47.458c-4.664 69.192-39.8 119.633-95.458 140.869V288H192v36.869C136.344 303.633 101.206 253.192 96.542 184H144V56H16v128h48.471c2.993 50.374 20.242 93.872 50.341 126.537A170.65 170.65 0 0 0 166.7 348.9l-48.9 16.3a57.122 57.122 0 0 0-8.608-9.083a56.63 56.63 0 0 0-79.807 6.693A56.635 56.635 0 0 0 72.535 456q2.4 0 4.827-.2a56.609 56.609 0 0 0 51.731-60.634L192 374.2V416h128v-41.8l62.9 20.963a57.4 57.4 0 0 0 .043 8.939A56.64 56.64 0 0 0 439.274 456q2.4 0 4.828-.2a56.63 56.63 0 1 0-47.982-92.988c-.662.782-1.3 1.582-1.91 2.392L345.3 348.9a170.65 170.65 0 0 0 51.891-38.363c30.1-32.665 47.348-76.163 50.341-126.537H496V56H368ZM48 152V88h64v64Zm43.44 263.27a24.629 24.629 0 0 1-37.62-31.8a24.469 24.469 0 0 1 16.752-8.644q1.053-.087 2.1-.088A24.631 24.631 0 0 1 91.44 415.27ZM288 384h-64v-64h64Zm132.56-.529a24.467 24.467 0 0 1 16.752-8.644q1.053-.087 2.1-.088a24.635 24.635 0 1 1-18.851 8.733ZM400 88h64v64h-64Z\\"/>"}}},{"prefix":"ic","width":24,"height":24,"icons":{}},{"prefix":"il","width":750,"height":850,"icons":{}},{"prefix":"uiw","width":20,"height":20,"icons":{"star-on":{"body":"<path fill=\\"currentColor\\" d=\\"m9.89 17.514l-4.21 2.257l-.099.044c-.715.27-1.39.216-1.903-.242c-.482-.43-.657-1.046-.557-1.755l.704-4.86l-3.18-3.342c-.55-.56-.765-1.248-.58-1.968c.205-.799.88-1.258 1.851-1.412l4.227-.638l2.213-4.585C8.7.366 9.236-.017 9.911.001c.66.017 1.183.422 1.593 1.143l2.14 4.486l4.74.658c.753.13 1.308.522 1.53 1.176c.22.653.01 1.313-.557 1.987l-3.44 3.51l.772 4.856c.122.84-.025 1.505-.586 1.9c-.506.357-1.139.357-1.867.107l-.12-.053l-4.226-2.257Z\\"/>"}}},{"prefix":"bi","icons":{}},{"prefix":"fa-brands","width":448,"height":512,"icons":{"facebook-f":{"body":"<path fill=\\"currentColor\\" d=\\"m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\\"/>","width":320},"instagram":{"body":"<path fill=\\"currentColor\\" d=\\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\\"/>"},"linkedin-in":{"body":"<path fill=\\"currentColor\\" d=\\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z\\"/>"},"twitter":{"body":"<path fill=\\"currentColor\\" d=\\"M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z\\"/>","width":512}}},{"prefix":"uit","width":24,"height":24,"icons":{"vuejs-alt":{"body":"<path fill=\\"currentColor\\" d=\\"M22.934 3.256a.499.499 0 0 0-.434-.251l-4.99-.003L17.503 3l-4-.026H13.5a.498.498 0 0 0-.43.245l-1.072 1.805l-1.07-1.78A.498.498 0 0 0 10.505 3l-4-.027H6.5A.48.48 0 0 0 6.399 3H1.5a.5.5 0 0 0-.432.752l10.5 18a.5.5 0 0 0 .864 0l10.5-17.995a.5.5 0 0 0 .002-.501zm-12.718.742l1.355 2.259A.5.5 0 0 0 12 6.5h.001a.5.5 0 0 0 .429-.245l1.353-2.28l2.83.02l-3.006 4.917L12 11.54L7.394 3.979l2.822.019zM12 20.508L2.37 4h3.85l5.353 8.76a.493.493 0 0 0 .147.142c.014.01.021.026.035.034a.5.5 0 0 0 .672-.175l5.353-8.759l3.85.002L12 20.508z\\"/>"}}},{"prefix":"iconoir","width":24,"height":24,"icons":{"css3":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"1.5\\"><path d=\\"m4 3l1.778 17.09L12 22l6.222-1.91L20 3H4Z\\"/><path d=\\"M7 7h9.5l-1 10l-3.5 1l-3.5-1l-.25-2.5m7.75-3H7.5\\"/></g>"},"layout-right":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"1.5\\" d=\\"M20.4 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6Zm-6.15 6.75V21M21 9.75H3\\"/>"},"terminal-outline":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"1.5\\"><path d=\\"M13 16h5M6 8l4 4l-4 4\\"/><path d=\\"M2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z\\"/></g>"}}},{"prefix":"teenyicons","width":15,"height":15,"icons":{"plug-outline":{"body":"<path fill=\\"none\\" stroke=\\"currentColor\\" d=\\"M6.5 11.5V15m2-3.5V15m-4-15v4.5m6-4.5v4.5m-8 0h10v3h-1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2h-1v-3Z\\"/>"},"text-document-outline":{"body":"<path fill=\\"currentColor\\" d=\\"M4.5 6.995H4v1h.5v-1Zm6 1h.5v-1h-.5v1Zm-6 1.998H4v1h.5v-1Zm6 1.007h.5v-1h-.5v1Zm-6-7.003H4v1h.5v-1ZM8.5 5H9V4h-.5v1Zm2-4.5l.354-.354L10.707 0H10.5v.5Zm3 3h.5v-.207l-.146-.147l-.354.354Zm-9 4.495h6v-1h-6v1Zm0 2.998l6 .007v-1l-6-.007v1Zm0-5.996L8.5 5V4l-4-.003v1Zm8 9.003h-10v1h10v-1ZM2 13.5v-12H1v12h1ZM2.5 1h8V0h-8v1ZM13 3.5v10h1v-10h-1ZM10.146.854l3 3l.708-.708l-3-3l-.708.708ZM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15v-1Zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1Z\\"/>"}}},{"prefix":"simple-line-icons","width":1024,"height":1024,"icons":{"screen-smartphone":{"body":"<path fill=\\"currentColor\\" d=\\"M704.144 0H319.856c-53.024 0-96 42.976-96 96v832c0 53.024 42.976 96 96 96h384.288c53.024 0 96-42.976 96-96V96c0-53.024-42.976-96-96-96zm32 928c0 17.664-14.336 32-32 32H319.856c-17.664 0-32-14.336-32-32V96c0-17.664 14.336-32 32-32h384.288c17.664 0 32 14.336 32 32v832zM512.048 800.176c-35.28 0-63.84 28.592-63.84 63.824s28.576 63.841 63.84 63.841c35.28 0 63.84-28.608 63.84-63.84c0-35.233-28.56-63.825-63.84-63.825zm64-704.176h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32z\\"/>"}}},{"prefix":"file-icons","width":512,"height":512,"icons":{"vite":{"body":"<path fill=\\"currentColor\\" d=\\"M493.89 58.275L355.178 83.558L379.282 0L186.79 37.718l-2.999 50.64L15.145 58.214C3.53 57.538-3.238 65.879 1.558 77.46l244.056 427.983c5.253 8.575 17.347 8.91 22.65 0L507.575 77.419c5.4-9.676-2.874-21.018-13.685-19.144zm-237 435.435L17.87 74.556l164.993 29.491l-7.778 131.365l67.632-15.608l-18.858 92.344l51.374-15.608l-25.495 123.397c-1.27 8.069 9.241 12.362 14.44.812l150.22-299.792l-74.135 14.308l10.086-34.962l140.91-25.684L256.89 493.71z\\"/>","width":510}}},{"prefix":"vscode-icons","width":32,"height":32,"icons":{"file-type-bitbucketpipeline":{"body":"<defs><linearGradient id=\\"svgIDa\\" x1=\\"-792.28\\" x2=\\"-793.365\\" y1=\\"633.265\\" y2=\\"632.418\\" gradientTransform=\\"matrix(12.821 0 0 -12.821 10188.143 8132.963)\\" gradientUnits=\\"userSpaceOnUse\\"><stop offset=\\".18\\" stop-color=\\"#0052cc\\"/><stop offset=\\"1\\" stop-color=\\"#2684ff\\"/></linearGradient></defs><path fill=\\"#2684ff\\" d=\\"M2.909 3.41A.9.9 0 0 0 2 4.3a.8.8 0 0 0 .012.155L5.82 27.568a1.22 1.22 0 0 0 1.193 1.018h18.269a.9.9 0 0 0 .9-.754l3.805-23.378a.9.9 0 0 0-.737-1.033a.911.911 0 0 0-.147-.012Zm16.035 16.709h-5.831l-1.579-8.244h8.823Z\\"/><path fill=\\"url(#svgIDa)\\" d=\\"M28.776 11.874h-8.419l-1.413 8.244h-5.831L6.228 28.3a1.21 1.21 0 0 0 .785.3h18.274a.9.9 0 0 0 .9-.754Z\\"/>"},"file-type-csharp2":{"body":"<path fill=\\"#4e994a\\" d=\\"M29 10.232a2.387 2.387 0 0 0-.318-1.244a2.451 2.451 0 0 0-.936-.879q-5.194-2.868-10.393-5.733a2.642 2.642 0 0 0-2.763.024c-1.378.779-8.275 4.565-10.331 5.706A2.287 2.287 0 0 0 3 10.231V21.77a2.4 2.4 0 0 0 .3 1.22a2.434 2.434 0 0 0 .954.9c2.056 1.141 8.954 4.927 10.332 5.706a2.642 2.642 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.444 2.444 0 0 0 .955-.9a2.4 2.4 0 0 0 .3-1.22V10.232\\"/><path fill=\\"#358230\\" d=\\"M28.549 23.171a2.126 2.126 0 0 0 .147-.182a2.4 2.4 0 0 0 .3-1.22V10.232a2.387 2.387 0 0 0-.318-1.244c-.036-.059-.089-.105-.13-.16L16 16Z\\"/><path fill=\\"#1a7515\\" d=\\"M28.549 23.171L16 16L3.451 23.171a2.435 2.435 0 0 0 .809.72c2.056 1.141 8.954 4.927 10.332 5.706a2.642 2.642 0 0 0 2.763.026q5.19-2.871 10.386-5.733a2.43 2.43 0 0 0 .808-.719Z\\"/><path fill=\\"#fff\\" d=\\"M19.6 18.02a4.121 4.121 0 1 1-.027-4.087l3.615-2.073A8.309 8.309 0 0 0 7.7 16a8.216 8.216 0 0 0 1.1 4.117a8.319 8.319 0 0 0 14.411-.017L19.6 18.02\\"/><path fill=\\"#fff\\" d=\\"M27.67 15.271v-1.238h-1.007v-1.006h-1.239v1.006h-1.508v-1.006h-1.239v1.006h-1.008v1.238h1.006v1.513h-1.006v1.237h1.006v1.006h1.239v-1.006h1.509v1.006h1.239v-1.006h1.006v-1.237h-1v-1.513Zm-2.246 1.513h-1.508v-1.513h1.508Z\\"/>"},"file-type-nestjs":{"body":"<path fill=\\"#ea2845\\" fill-rule=\\"evenodd\\" d=\\"M18.487 2a1.781 1.781 0 0 0-.564.1c1.615 1.062-.29 2.6.6 3.9A2.235 2.235 0 0 1 19.6 3.765c.285-.237.468-.322.407-.714C19.908 2.409 19.052 2 18.487 2Zm2.3.414c-.223 1.123-.5 1.164-1.323 1.887a1.821 1.821 0 0 0-.527 2.191c-3.4-1.32-7.758-2.118-10.953.166c-1.149.821-1.85 2-3.267 2.481c-.916.314-1.816.221-2.39 1.129a1.413 1.413 0 0 0 .056 1.832c.171.175.5.287.636.465c.079.1.077.2.152.333a2.6 2.6 0 0 0 .564.828c.147.121.652.239.738.368c.108.161-.172.8.063.9c.158.073.621-.744.666-.816c-.092.643-.213 1.784.51.834c.343-.451.364-.6.941-.7a8.2 8.2 0 0 1 1.117-.116a8.362 8.362 0 0 1 8.622 7.622c-.108-.5-.761-1.3-1.369-1.11c-.259.08-.355.527-.525.786a3.773 3.773 0 0 1-.785.868a4.687 4.687 0 0 0-.072-1.452c-.182.748-.547 1.989-1.466 1.788a1.652 1.652 0 0 1-1.328-1.142c-.119-.76.684-1.651-.607-1.714c-2.59-.127-1.991 3.682-.462 4.675a3.272 3.272 0 0 0-1.015.283a6.893 6.893 0 0 0 10.276-4.922a7.058 7.058 0 0 1-.015 3.085a7.213 7.213 0 0 1-.554 1.559a6.781 6.781 0 0 1-1.3 1.81c-.314.311-.89.624-1.088.941a13.409 13.409 0 0 0 3.52-.968A11.638 11.638 0 0 1 15.1 30a11.589 11.589 0 0 0 9.3-5.909a11.657 11.657 0 0 1-1.945 4.668a11.531 11.531 0 0 0 4.975-7.783a11.622 11.622 0 0 1 .209 3.5a12.418 12.418 0 0 0 1.889-10.566a15.755 15.755 0 0 0-1.689-3.962a14.838 14.838 0 0 0-.939-1.394c-.133-.173-.844-.806-.844-1q-.009.029-.015 0c0 3.248-3.5 5.333-6.431 4.463a5 5 0 0 0 4.546-4.167a5 5 0 0 0-3.369-5.436Z\\"/>"},"file-type-vue":{"body":"<path fill=\\"#41b883\\" d=\\"M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z\\"/><path fill=\\"#41b883\\" d=\\"m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z\\"/><path fill=\\"#35495e\\" d=\\"M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z\\"/>"}}}]');
collections.forEach((c) => Iconify.addCollection(c));
const _default = "";
const carousel = "";
const main = "";
const plugins = /* @__PURE__ */ Object.assign({ "./plugins/directives.ts": () => import("./assets/directives.a0456642.mjs"), "./plugins/i18n.ts": () => import("./assets/i18n.1ab2c983.mjs"), "./plugins/navigation-guards.ts": () => import("./assets/navigation-guards.6c36543a.mjs"), "./plugins/nprogress.ts": () => import("./assets/nprogress.07597b8f.mjs"), "./plugins/slider.ts": () => import("./assets/slider.e64ce89f.mjs") });
function definePlugin(plugin) {
  return plugin;
}
async function createApp() {
  const app = createApp$1(_sfc_main);
  const router = createRouter();
  const head = createHead();
  app.use(head);
  const pinia = createPinia();
  app.use(pinia);
  const context = {
    app,
    router,
    head,
    pinia
  };
  app.provide("vulk", { plugins });
  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]();
      await plugin(context);
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`);
      console.error(error);
    }
  }
  app.use(router);
  return context;
}
async function init(event) {
  initCookiesPlugin(event);
}
async function render(url, manifest, initialState = {}) {
  const { app, router, pinia, head } = await createApp();
  router.push(url);
  await router.isReady();
  const ctx = {
    found: true
  };
  const appHtml = await renderToString(app, ctx);
  const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head);
  initialState.pinia = pinia == null ? void 0 : pinia.state.value;
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return {
    found: ctx.found,
    appHtml,
    headTags,
    htmlAttrs,
    bodyAttrs,
    preloadLinks,
    initialState: devalue(initialState)
  };
}
function renderPreloadLinks(modules2, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules2.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else if (file.endsWith(".svg")) {
    return ` <link rel="prefetch" href="${file}" as="image" type="image/svg+xml"/>`;
  } else {
    console.log("missing preload link for", file);
    return "";
  }
}
export {
  _export_sfc as _,
  _sfc_main$9 as a,
  __unplugin_components_2$3 as b,
  __unplugin_components_0$a as c,
  definePlugin as d,
  __unplugin_components_3$5 as e,
  __unplugin_components_0$5 as f,
  __unplugin_components_0$7 as g,
  _sfc_main$q as h,
  __unplugin_components_0$d as i,
  init,
  __unplugin_components_0$3 as j,
  __unplugin_components_1$3 as k,
  __unplugin_components_2$1 as l,
  __unplugin_components_3$4 as m,
  __unplugin_components_0$e as n,
  __unplugin_components_1$4 as o,
  __unplugin_components_0$4 as p,
  __unplugin_components_8 as q,
  __unplugin_components_3 as r,
  render,
  supportFeatures as s,
  block0 as t,
  useDarkmode as u,
  useLayout as v,
  _imports_0$2 as w
};
