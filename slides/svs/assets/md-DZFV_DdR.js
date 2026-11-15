import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_30",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 29))),
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
              { class: "body backup-columns study-backup" },
              [
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, "Controlled comparison"),
                  createBaseVNode("p", null, "18 participants / within subjects"),
                  createBaseVNode("p", null, "Linear, Source-guided, Summary-guided"),
                  createBaseVNode("p", null, [
                    createTextVNode("3 collections × 60 documents"),
                    createBaseVNode("br"),
                    createTextVNode("10 tasks per condition")
                  ]),
                  createBaseVNode("p", { class: "muted" }, [
                    createTextVNode("Counterbalanced layout order;"),
                    createBaseVNode("br"),
                    createTextVNode("same summary and provenance interface.")
                  ])
                ]),
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, "Interpreting the evidence"),
                  createBaseVNode("p", null, [
                    createTextVNode("Generated errors + deliberately"),
                    createBaseVNode("br"),
                    createTextVNode("introduced errors in study materials")
                  ]),
                  createBaseVNode("p", { class: "muted" }, [
                    createTextVNode("The Harvey Category 5 error"),
                    createBaseVNode("br"),
                    createTextVNode("was deliberately introduced.")
                  ]),
                  createBaseVNode("p", null, [
                    createTextVNode("Layout effects were evaluated;"),
                    createBaseVNode("br"),
                    createTextVNode("provenance was held constant.")
                  ]),
                  createBaseVNode("p", { class: "muted" }, "Small sample; relevance-heavy task mix.")
                ])
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "statement" },
              "Results concern verification support, not the natural frequency of LLM errors.",
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
