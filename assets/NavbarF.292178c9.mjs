import { _ as _export_sfc, w as _imports_0, m as __unplugin_components_3 } from "../entry-server.mjs";
import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, computed, unref, ref, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as __unplugin_components_1 } from "./ThemeToggle.25698111.mjs";
import { useWindowScroll } from "@vueuse/core";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavbarSocialItem",
  __ssrInlineRender: true,
  props: {
    icon: null,
    label: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_component_RouterLink, mergeProps({
        to: "/",
        target: "_blank",
        class: "social-item px-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="icon" data-v-a4a30de6${_scopeId}><i class="iconify"${ssrRenderAttr("data-icon", props.icon)} data-v-a4a30de6${_scopeId}></i><span class="is-sr-only" data-v-a4a30de6${_scopeId}>${ssrInterpolate(props.label)}</span></span>`);
          } else {
            return [
              createVNode("span", { class: "icon" }, [
                createVNode("i", {
                  class: "iconify",
                  "data-icon": props.icon
                }, null, 8, ["data-icon"]),
                createVNode("span", { class: "is-sr-only" }, toDisplayString(props.label), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const NavbarSocialItem_vue_vue_type_style_index_0_scoped_a4a30de6_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/navbar-blocks/modules/NavbarSocialItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a4a30de6"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Hamburger",
  __ssrInlineRender: true,
  props: {
    style: { default: 1 },
    open: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const hamburgerClasses = computed(() => [
      props.style && `style-${props.style}`,
      props.open && `open`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["hamburger", unref(hamburgerClasses)]
      }, _attrs))} data-v-0b61bae3><span data-v-0b61bae3></span></button>`);
    };
  }
});
const Hamburger_vue_vue_type_style_index_0_scoped_0b61bae3_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/navigation/hamburger/Hamburger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0b61bae3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavbarF",
  __ssrInlineRender: true,
  props: {
    fixed: { type: Boolean, default: false },
    dropdownBoxed: { type: Boolean, default: false },
    mode: { default: "fade" }
  },
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const isScrolled = computed(() => {
      return y.value > 60;
    });
    const isNavbarOpen = ref(false);
    const socialItems = [
      {
        icon: "fa:twitter",
        label: "Twitter",
        link: "https://twitter.com"
      },
      {
        icon: "fa:linkedin",
        label: "Linkedin",
        link: "https://linkedin.com"
      },
      {
        icon: "fa:github",
        label: "Github",
        link: "https://github.com"
      }
    ];
    const navbarClasses = computed(() => [
      props.fixed && `is-fixed-top`,
      props.mode && `is-${props.mode}`,
      props.fixed && isScrolled.value && "is-scrolled",
      isNavbarOpen.value && `is-solid`
    ]);
    const navbarMenuClasses = computed(() => [isNavbarOpen.value && `is-active`]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Hamburger = __unplugin_components_0$1;
      const _component_ThemeToggle = __unplugin_components_1;
      const _component_NavbarSocialItem = __unplugin_components_2;
      const _component_Button = __unplugin_components_3;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["navbar is-transparent is-centered", unref(navbarClasses)]
      }, _attrs))} data-v-27d6b030><div class="container" data-v-27d6b030><div class="navbar-brand" data-v-27d6b030>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: { name: "index" },
        class: "navbar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="navbar-logo"${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-27d6b030${_scopeId}><span class="is-sr-only" data-v-27d6b030${_scopeId}>Vulk</span>`);
          } else {
            return [
              createVNode("img", {
                class: "navbar-logo",
                src: _imports_0,
                alt: "logo"
              }),
              createVNode("span", { class: "is-sr-only" }, "Vulk")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navbar-burger" data-v-27d6b030>`);
      _push(ssrRenderComponent(_component_Hamburger, { open: isNavbarOpen.value }, null, _parent));
      _push(`</div></div><div class="${ssrRenderClass([unref(navbarMenuClasses), "navbar-menu b-centered-mobile b-centered-tablet-p"])}" data-v-27d6b030><div class="navbar-start" data-v-27d6b030><div class="left-brand" data-v-27d6b030>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "navbar-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" width="200" height="200" data-v-27d6b030${_scopeId}><span class="is-sr-only" data-v-27d6b030${_scopeId}>WorkitNg</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                width: "200",
                height: "200"
              }),
              createVNode("span", { class: "is-sr-only" }, "WorkitNg")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="navbar-center" data-v-27d6b030>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/",
        class: "navbar-item has-naver"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/about",
        class: "navbar-item has-naver"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/categories",
        class: "navbar-item has-naver"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Categories `);
          } else {
            return [
              createTextVNode(" Categories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/frequently-asked-questions",
        class: "navbar-item has-naver"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQs `);
          } else {
            return [
              createTextVNode(" FAQs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/blog",
        class: "navbar-item has-naver"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, {
        to: "/contact",
        class: "navbar-item has-naver"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-end" data-v-27d6b030><div class="navbar-item is-flex is-align-items-center is-justify-content-center" data-v-27d6b030>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`</div><div class="navbar-item" data-v-27d6b030><!--[-->`);
      ssrRenderList(socialItems, (item, index) => {
        _push(ssrRenderComponent(_component_NavbarSocialItem, {
          key: index,
          icon: item.icon,
          label: item.label,
          link: item.link
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="navbar-item" data-v-27d6b030>`);
      _push(ssrRenderComponent(_component_Button, {
        color: "primary",
        raised: "",
        bold: "",
        custom: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Workit`);
          } else {
            return [
              createTextVNode("Get Workit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></nav>`);
    };
  }
});
const NavbarF_vue_vue_type_style_index_0_scoped_27d6b030_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/navbar-blocks/NavbarF.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27d6b030"]]);
export {
  __unplugin_components_0 as _
};
