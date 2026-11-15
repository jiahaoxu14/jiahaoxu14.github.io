import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_28",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 27))),
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
              "div",
              { class: "body backup-columns layout-equations" },
              [
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, "Source-guided"),
                  createBaseVNode("p", null, "UMAP places document embeddings."),
                  createBaseVNode("div", { class: "formula" }, [
                    createTextVNode("w"),
                    createBaseVNode("sub", null, "jd"),
                    createTextVNode(" = max"),
                    createBaseVNode("sub", null, "i"),
                    createTextVNode(" max(0, cos(s"),
                    createBaseVNode("sub", null, "j"),
                    createTextVNode(", d"),
                    createBaseVNode("sub", null, "i"),
                    createTextVNode("))")
                  ]),
                  createBaseVNode("div", { class: "formula" }, [
                    createTextVNode("p(s"),
                    createBaseVNode("sub", null, "j"),
                    createTextVNode(") = Σ"),
                    createBaseVNode("sub", null, "d"),
                    createTextVNode(" ŵ"),
                    createBaseVNode("sub", null, "jd"),
                    createTextVNode(" p(d)")
                  ]),
                  createBaseVNode("p", { class: "muted" }, [
                    createTextVNode("Normalize contributions across documents;"),
                    createBaseVNode("br"),
                    createTextVNode("take the weighted mean of their 2D positions.")
                  ]),
                  createBaseVNode("p", { class: "small" }, "Current prototype: softmax normalization, τ = 0.08.")
                ]),
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, "Summary-guided"),
                  createBaseVNode("p", null, "Compare source and summary sentences."),
                  createBaseVNode("div", { class: "formula" }, [
                    createTextVNode("R"),
                    createBaseVNode("sub", null, "d"),
                    createTextVNode(" = max"),
                    createBaseVNode("sub", null, "i,j"),
                    createTextVNode(" |cos(d"),
                    createBaseVNode("sub", null, "i"),
                    createTextVNode(", s"),
                    createBaseVNode("sub", null, "j"),
                    createTextVNode(")|")
                  ]),
                  createBaseVNode("div", { class: "formula" }, [
                    createTextVNode("μ"),
                    createBaseVNode("sub", null, "d"),
                    createTextVNode(" = Σ"),
                    createBaseVNode("sub", null, "j"),
                    createTextVNode(" j w"),
                    createBaseVNode("sub", null, "jd"),
                    createTextVNode(" / Σ"),
                    createBaseVNode("sub", null, "j"),
                    createTextVNode(" w"),
                    createBaseVNode("sub", null, "jd")
                  ]),
                  createBaseVNode("p", { class: "muted" }, [
                    createTextVNode("Rank x by relevance R"),
                    createBaseVNode("sub", null, "d"),
                    createTextVNode("."),
                    createBaseVNode("br"),
                    createTextVNode("Rank y by summary alignment μ"),
                    createBaseVNode("sub", null, "d"),
                    createTextVNode(".")
                  ]),
                  createBaseVNode("p", { class: "small" }, "Each document occupies its own ranked position.")
                ])
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "statement" },
              "Sentence similarity positions content; it does not determine factual support.",
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
