import { defineComponent, ref, computed, onMounted, watch, mergeProps, useSSRContext, unref, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import mapboxgl from "mapbox-gl";
import { u as useDarkmode, _ as _export_sfc, j as __unplugin_components_0$1, k as __unplugin_components_1$1, l as __unplugin_components_2$1, m as __unplugin_components_3 } from "../entry-server.mjs";
const mapboxGl = "";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MapBox",
  __ssrInlineRender: true,
  props: {
    lng: null,
    lat: null,
    zoom: { default: 9 },
    absolute: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    mapboxgl.accessToken = "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
    let map;
    const container = ref();
    const darkmode = useDarkmode();
    const style = computed(
      () => darkmode.isDark ? "mapbox://styles/mapbox/dark-v10" : "mapbox://styles/mapbox/light-v10"
    );
    const markerOptions = {
      color: "red"
    };
    onMounted(() => {
      if (container.value) {
        map = new mapboxgl.Map({
          container: container.value,
          style: style.value,
          center: [props.lng, props.lat],
          zoom: props.zoom
        });
        new mapboxgl.Marker(markerOptions).setLngLat([props.lng, props.lat]).addTo(map);
      }
    });
    watch(style, (newStyle, oldStyle) => {
      console.log("STYLES", newStyle, oldStyle);
      map == null ? void 0 : map.setStyle(newStyle);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: ["map", props.absolute && "is-absolute"]
      }, _attrs))} data-v-daa340d5></div>`);
    };
  }
});
const MapBox_vue_vue_type_style_index_0_scoped_daa340d5_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/mapbox/MapBox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-daa340d5"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VTextarea",
  __ssrInlineRender: true,
  props: {
    rows: { default: void 0 },
    placeholder: { default: void 0 },
    value: { default: void 0 },
    modelValue: { default: void 0 },
    readonly: { type: Boolean, default: false },
    resize: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const textareaClasses = computed(() => [!props.resize && `no-resize`]);
    const testValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        "model-value": __props.modelValue,
        placeholder: props.placeholder,
        class: ["textarea", unref(textareaClasses)],
        rows: props.rows,
        readonly: props.readonly,
        "aria-label": "textarea"
      }, _attrs), "textarea")} data-v-a560f9a5>${ssrInterpolate(unref(testValue))}</textarea>`);
    };
  }
});
const VTextarea_vue_vue_type_style_index_0_scoped_a560f9a5_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/textarea/VTextarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a560f9a5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FieldLabel",
  __ssrInlineRender: true,
  props: {
    label: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "field-label" }, _attrs))} data-v-0f4e1548>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.label)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const FieldLabel_vue_vue_type_style_index_0_scoped_0f4e1548_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/base/form/field-label/FieldLabel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f4e1548"]]);
const ContactForm_vue_vue_type_style_index_0_scoped_f57e6616_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Field = __unplugin_components_0$1;
  const _component_FieldLabel = __unplugin_components_1;
  const _component_Control = __unplugin_components_1$1;
  const _component_VInput = __unplugin_components_2$1;
  const _component_VTextarea = __unplugin_components_4;
  const _component_Button = __unplugin_components_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-form" }, _attrs))} data-v-f57e6616><form data-v-f57e6616><div class="columns is-multiline" data-v-f57e6616><div class="column is-6" data-v-f57e6616>`);
  _push(ssrRenderComponent(_component_Field, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FieldLabel, { label: "First Name" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`First Name`);
            } else {
              return [
                createTextVNode("First Name")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Control, { icon: "feather:user" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VInput, { placeholder: "Your first name" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VInput, { placeholder: "Your first name" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FieldLabel, { label: "First Name" }, {
            default: withCtx(() => [
              createTextVNode("First Name")
            ]),
            _: 1
          }),
          createVNode(_component_Control, { icon: "feather:user" }, {
            default: withCtx(() => [
              createVNode(_component_VInput, { placeholder: "Your first name" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="column is-6" data-v-f57e6616>`);
  _push(ssrRenderComponent(_component_Field, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FieldLabel, { label: "Last Name" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Last Name`);
            } else {
              return [
                createTextVNode("Last Name")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Control, { icon: "feather:user" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VInput, { placeholder: "Your last name" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VInput, { placeholder: "Your last name" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FieldLabel, { label: "Last Name" }, {
            default: withCtx(() => [
              createTextVNode("Last Name")
            ]),
            _: 1
          }),
          createVNode(_component_Control, { icon: "feather:user" }, {
            default: withCtx(() => [
              createVNode(_component_VInput, { placeholder: "Your last name" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="column is-12" data-v-f57e6616>`);
  _push(ssrRenderComponent(_component_Field, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FieldLabel, { label: "First Name" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Email Address`);
            } else {
              return [
                createTextVNode("Email Address")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Control, { icon: "feather:mail" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VInput, { placeholder: "Your mail address" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VInput, { placeholder: "Your mail address" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FieldLabel, { label: "First Name" }, {
            default: withCtx(() => [
              createTextVNode("Email Address")
            ]),
            _: 1
          }),
          createVNode(_component_Control, { icon: "feather:mail" }, {
            default: withCtx(() => [
              createVNode(_component_VInput, { placeholder: "Your mail address" })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="column is-12" data-v-f57e6616>`);
  _push(ssrRenderComponent(_component_Field, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_FieldLabel, { label: "First Name" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Message`);
            } else {
              return [
                createTextVNode("Message")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Control, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VTextarea, {
                rows: 4,
                placeholder: "Write your message..."
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VTextarea, {
                  rows: 4,
                  placeholder: "Write your message..."
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_FieldLabel, { label: "First Name" }, {
            default: withCtx(() => [
              createTextVNode("Message")
            ]),
            _: 1
          }),
          createVNode(_component_Control, null, {
            default: withCtx(() => [
              createVNode(_component_VTextarea, {
                rows: 4,
                placeholder: "Write your message..."
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="column is-12" data-v-f57e6616>`);
  _push(ssrRenderComponent(_component_Control, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, {
          color: "primary",
          bold: "",
          raised: "",
          fullwidth: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span data-v-f57e6616${_scopeId2}>Send Message</span>`);
            } else {
              return [
                createVNode("span", null, "Send Message")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, {
            color: "primary",
            bold: "",
            raised: "",
            fullwidth: ""
          }, {
            default: withCtx(() => [
              createVNode("span", null, "Send Message")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/form/contact-form/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f57e6616"]]);
export {
  __unplugin_components_2 as _,
  __unplugin_components_0 as a
};
