import { useWindowScroll } from "@vueuse/core";
import { defineComponent, ref, computed, onMounted, onUnmounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import VueScrollTo from "vue-scrollto";
import { _ as _export_sfc } from "../entry-server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useWindowScroll();
    VueScrollTo.scrollTo;
    const progressPath = ref();
    const isScrolled = computed(() => {
      return y.value > 600;
    });
    const handleScroll = () => {
      if (progressPath.value) {
        const pathLength = progressPath.value.getTotalLength();
        let scrollValue = window.scrollY;
        let scrollHeight = document.body.scrollHeight - window.innerHeight;
        let progress = pathLength - scrollValue * pathLength / scrollHeight;
        progressPath.value.style.strokeDashoffset = Math.round(progress).toString();
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      if (progressPath.value) {
        const style = progressPath.value.style;
        const pathLength = progressPath.value.getTotalLength();
        style.transition = "none", style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.value.getBoundingClientRect();
        style.transition = "stroke-dashoffset 10ms linear";
      }
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["progress-wrap", [unref(isScrolled) && "active-progress"]]
      }, _attrs))} data-v-5b5bd61a><svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102" data-v-5b5bd61a><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" data-v-5b5bd61a></path></svg></div>`);
    };
  }
});
const BackToTop_vue_vue_type_style_index_0_scoped_5b5bd61a_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/misc/backtotop/BackToTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b5bd61a"]]);
export {
  __unplugin_components_1 as _
};
