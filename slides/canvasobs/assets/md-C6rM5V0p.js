import { o as openBlock, e as createElementBlock, aG as createStaticVNode, b as createBlock, w as withCtx, g as createBaseVNode, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "method-overview" };
const _sfc_main$1 = {
  __name: "CanvasObsMethod",
  setup(__props) {
    useSlideContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [
        createStaticVNode('<div class="method-flow" data-v-d65ac5df><div class="existing" data-v-d65ac5df><h2 data-v-d65ac5df>Existing context</h2><div class="mini-canvas" aria-label="Illustration of the screenshot input" data-v-d65ac5df><div class="yellow-note" data-v-d65ac5df>Plan<br data-v-d65ac5df>meeting</div><div class="blue-note" data-v-d65ac5df>Book<br data-v-d65ac5df>room</div></div><p data-v-d65ac5df>Screenshot<br data-v-d65ac5df>+ shape summaries</p></div><div class="plus" aria-hidden="true" data-v-d65ac5df>+</div><div class="structured" data-v-d65ac5df><h2 data-v-d65ac5df>CanvasObs</h2><p class="subhead" data-v-d65ac5df>Object records, relations, and interpretation guidance</p><dl data-v-d65ac5df><div data-v-d65ac5df><dt data-v-d65ac5df>Identity &amp; State</dt><dd data-v-d65ac5df>Which object, in what state?<small data-v-d65ac5df>ID, type, text, style, layer, locked / hidden flags</small></dd></div><div data-v-d65ac5df><dt data-v-d65ac5df>Visibility &amp; Structure</dt><dd data-v-d65ac5df>Visible? Part of which container?<small data-v-d65ac5df>Visibility labels and parent / group / frame IDs</small></dd></div><div data-v-d65ac5df><dt data-v-d65ac5df>Relations</dt><dd data-v-d65ac5df>Actually connected or just nearby?<small data-v-d65ac5df>Membership, bindings, and inferred spatial relations</small></dd></div><div data-v-d65ac5df><dt data-v-d65ac5df>Offscreen Objects</dt><dd data-v-d65ac5df>Where is the unseen object?<small data-v-d65ac5df>Retained offscreen objects: bounds in action coordinates</small></dd></div></dl></div><div class="flow-arrow" aria-hidden="true" data-v-d65ac5df>→</div><div class="agent" data-v-d65ac5df><h2 data-v-d65ac5df>Editing agent</h2><p data-v-d65ac5df>Select the target<br data-v-d65ac5df>and perform the edit</p></div></div>', 1)
      ])]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d65ac5df"]]);
const _sfc_main = {
  __name: "slides.md__slidev_4",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_CanvasObsMethod = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 3))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "CanvasObs exposes structured canvas state",
              -1
              /* CACHED */
            )),
            createVNode(_component_CanvasObsMethod)
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
