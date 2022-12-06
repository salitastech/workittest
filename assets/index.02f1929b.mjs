import { i as __unplugin_components_0, _ as _export_sfc } from "../entry-server.mjs";
import { defineComponent, ref, useSSRContext, mergeProps } from "vue";
import { ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Collapse",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] },
    itemOpen: { default: void 0 },
    withChevron: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const internalItemOpen = ref(props.itemOpen);
    const toggle = (key) => {
      if (internalItemOpen.value === key) {
        internalItemOpen.value = void 0;
        return;
      }
      internalItemOpen.value = key;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __unplugin_components_0;
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item, key) => {
        _push(`<details class="${ssrRenderClass([[__props.withChevron && "has-chevron", !__props.withChevron && "has-plus"], "collapse"])}"${ssrIncludeBooleanAttr(internalItemOpen.value === key || void 0) ? " open" : ""}>`);
        ssrRenderSlot(_ctx.$slots, "collapse-item", {
          item,
          index: key,
          toggle
        }, () => {
          _push(`<summary class="collapse-header" tabindex="0"><h3>`);
          ssrRenderSlot(_ctx.$slots, "collapse-item-summary", {
            item,
            index: key,
            toggle
          }, () => {
            _push(`${ssrInterpolate(item.title)}`);
          }, _push, _parent);
          _push(`</h3><div class="collapse-icon">`);
          if (__props.withChevron) {
            _push(ssrRenderComponent(_component_Icon, { icon: "feather:chevron-down" }, null, _parent));
          } else if (!__props.withChevron) {
            _push(ssrRenderComponent(_component_Icon, { icon: "feather:plus" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></summary><div class="collapse-content"><p>`);
          ssrRenderSlot(_ctx.$slots, "collapse-item-content", {
            item,
            index: key,
            toggle
          }, () => {
            _push(`${ssrInterpolate(item.content)}`);
          }, _push, _parent);
          _push(`</p></div>`);
        }, _push, _parent);
        _push(`</details>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const Collapse_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/collapse/Collapse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FaqListBoxed",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] },
    chevrons: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Collapse = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6" }, _attrs))} data-v-f8c4712b><div class="mx-auto max-w-7" data-v-f8c4712b><div class="columns" data-v-f8c4712b><div class="column" data-v-f8c4712b><div class="collapse-wrap" data-v-f8c4712b>`);
      _push(ssrRenderComponent(_component_Collapse, {
        items: props.items,
        "with-chevron": props.chevrons
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const FaqListBoxed_vue_vue_type_style_index_0_scoped_f8c4712b_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/advanced/faq/FaqListBoxed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8c4712b"]]);
const genericFaq = [
  {
    title: "How does it work?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."
  },
  {
    title: "What's included with membership?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."
  },
  {
    title: "All the free API services really unlimited?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."
  },
  {
    title: "How does billing work?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."
  },
  {
    title: "Can I sign up for dedicated support?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."
  },
  {
    title: "How do I upgrade my account?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde."
  }
];
export {
  __unplugin_components_5 as _,
  genericFaq as g
};
