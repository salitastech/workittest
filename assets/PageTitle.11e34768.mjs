import { c as __unplugin_components_0, b as __unplugin_components_2$1, _ as _export_sfc } from "../entry-server.mjs";
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageTitle",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    subtitle: { default: void 0 },
    text: { default: void 0 },
    inverted: { type: Boolean, default: false },
    aligned: { type: Boolean, default: false },
    leading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const blockClasses = computed(() => [
      props.aligned && "is-aligned",
      props.leading && "is-leading"
    ]);
    const subtitleClasses = computed(() => [
      props.inverted ? `text-white` : "text-gradient"
    ]);
    const textClasses = computed(() => [props.aligned ? `` : "mx-auto"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subtitle = __unplugin_components_0;
      const _component_Title = __unplugin_components_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["page-title", unref(blockClasses)]
      }, _attrs))} data-v-dfbe7b44>`);
      _push(ssrRenderComponent(_component_Subtitle, {
        tag: "h3",
        size: 5,
        weight: "bold",
        inverted: props.inverted,
        class: "m-0 pb-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass(unref(subtitleClasses))}" data-v-dfbe7b44${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "subtitle", {}, () => {
              _push2(`${ssrInterpolate(__props.subtitle)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: unref(subtitleClasses) }, [
                renderSlot(_ctx.$slots, "subtitle", {}, () => [
                  createTextVNode(toDisplayString(__props.subtitle), 1)
                ], true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_Title, {
        tag: "h1",
        size: 2,
        weight: "bold",
        inverted: props.inverted,
        leading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-dfbe7b44${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(__props.title)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", null, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ], true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      if (props.text) {
        _push(`<div class="${ssrRenderClass([unref(textClasses), "max-w-5"])}" data-v-dfbe7b44><p class="paragraph rem-125" data-v-dfbe7b44>${ssrInterpolate(props.text)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const PageTitle_vue_vue_type_style_index_0_scoped_dfbe7b44_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/title/PageTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfbe7b44"]]);
export {
  __unplugin_components_2 as _
};
