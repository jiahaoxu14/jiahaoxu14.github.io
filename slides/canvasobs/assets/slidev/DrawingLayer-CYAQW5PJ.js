import { f as defineComponent, M as onMounted, G as onBeforeUnmount, o as openBlock, e as createElementBlock, n as normalizeClass, U as unref, L as watch, r as ref } from "../modules/vue-DCd3fsyH.js";
import { u as useDrawings } from "./play-DjywjcuW.js";
import { u as useSlideContext } from "./context-BZ9LmUBo.js";
import "../index-_oBFeUd_.js";
import "../modules/shiki-BYicmHTF.js";
import "../modules/unplugin-icons-CDWZ4-sC.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DrawingLayer",
  setup(__props) {
    const { drauu, drawingEnabled, loadCanvas } = useDrawings();
    const scale = useSlideContext().$scale;
    const svg = ref();
    onMounted(() => {
      drauu.mount(svg.value, svg.value.parentElement);
      watch(scale, (scale2) => drauu.options.coordinateScale = 1 / scale2, { immediate: true });
      loadCanvas();
    });
    onBeforeUnmount(() => {
      drauu.unmount();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "svg",
        {
          ref_key: "svg",
          ref: svg,
          class: normalizeClass(["w-full h-full absolute top-0", { "pointer-events-none": !unref(drawingEnabled), "touch-none": unref(drawingEnabled) }])
        },
        null,
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
