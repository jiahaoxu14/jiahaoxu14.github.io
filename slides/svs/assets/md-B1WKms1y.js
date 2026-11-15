import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _imports_0 = "/slides/svs/images/pipeline.png";
const _sfc_main = {
  __name: "slides.md__slidev_26",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 25))),
        {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode(
              "h1",
              null,
              "Supporting",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "figure",
              { class: "body backup-pipeline" },
              [
                createBaseVNode("img", {
                  src: _imports_0,
                  width: "2400",
                  height: "665",
                  alt: "Original paper pipeline: summary structuring, claim decomposition, semantic and lexical evidence retrieval, and LLM claim-level inference judgment"
                })
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "statement" },
              [
                createTextVNode("Retrieve candidate evidence, then judge each claim."),
                createBaseVNode("br"),
                createTextVNode("Expose the judgment, rationale, and source context for inspection.")
              ],
              -1
              /* CACHED */
            )
          ])]),
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
