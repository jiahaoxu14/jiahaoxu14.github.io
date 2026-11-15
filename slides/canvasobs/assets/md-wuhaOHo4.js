import { o as openBlock, e as createElementBlock, g as createBaseVNode, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "takeaway" };
const _sfc_main$1 = {
  __name: "Takeaway",
  setup(__props) {
    useSlideContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [
        createBaseVNode(
          "p",
          { class: "message" },
          "Make hidden canvas state observable.",
          -1
          /* CACHED */
        ),
        createBaseVNode(
          "div",
          { class: "points" },
          [
            createBaseVNode("div", null, [
              createBaseVNode("span", null, "01"),
              createBaseVNode("div", null, [
                createBaseVNode("h2", null, "Expose object identity, relations, and offscreen geometry."),
                createBaseVNode("p", null, "Visual appearance alone can hide which objects an agent should act on.")
              ])
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("span", null, "02"),
              createBaseVNode("div", null, [
                createBaseVNode("h2", null, "Better observation improves target selection."),
                createBaseVNode("p", null, "CanvasObs improves object choice while keeping the editing pipeline fixed.")
              ])
            ])
          ],
          -1
          /* CACHED */
        )
      ])]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bf5257a0"]]);
const _sfc_main = {
  __name: "slides.md__slidev_8",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_Takeaway = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 7))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "Takeaway",
              -1
              /* CACHED */
            )),
            createVNode(_component_Takeaway)
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
};
export {
  _sfc_main as default
};
