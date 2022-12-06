import { openBlock, createElementBlock, createElementVNode, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { u as useDarkmode, _ as _export_sfc } from "../entry-server.mjs";
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_1$1 = { name: "feather-moon", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }),
  /* @__PURE__ */ createElementVNode("path", { d: "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "feather-sun", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const darkmode = useDarkmode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_feather_sun = __unplugin_components_0;
      const _component_i_feather_moon = __unplugin_components_1$1;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: "theme-toggle",
        class: "custom-toggle"
      }, _attrs))} data-v-66021d0d><input id="theme-toggle"${ssrIncludeBooleanAttr(Array.isArray(unref(darkmode).isDark) ? ssrLooseContain(unref(darkmode).isDark, null) : unref(darkmode).isDark) ? " checked" : ""} type="checkbox" data-v-66021d0d><span class="no-margin" data-v-66021d0d><span class="track" data-v-66021d0d><span class="track-inner" data-v-66021d0d></span><span class="track-knob" data-v-66021d0d>`);
      _push(ssrRenderComponent(_component_i_feather_sun, { class: "inactive iconify" }, null, _parent));
      _push(ssrRenderComponent(_component_i_feather_moon, { class: "active iconify" }, null, _parent));
      _push(`</span></span></span></label>`);
    };
  }
});
const ThemeToggle_vue_vue_type_style_index_0_scoped_66021d0d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/toggle/ThemeToggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66021d0d"]]);
export {
  __unplugin_components_1 as _
};
