import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_27",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 26))),
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
              { class: "body backup-columns" },
              [
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, "1 / Retrieve"),
                  createBaseVNode("p", null, [
                    createTextVNode("Embedding cosine similarity"),
                    createBaseVNode("br"),
                    createTextVNode("+ lexical overlap")
                  ]),
                  createBaseVNode("p", { class: "muted" }, [
                    createTextVNode("Semantic matches and shared wording"),
                    createBaseVNode("br"),
                    createTextVNode("offer complementary retrieval cues.")
                  ]),
                  createBaseVNode("div", { class: "context-window" }, [
                    createBaseVNode("span", null, "Previous sentence"),
                    createBaseVNode("strong", null, "Candidate sentence"),
                    createBaseVNode("span", null, "Following sentence")
                  ])
                ]),
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, "2 / Judge and inspect"),
                  createBaseVNode("p", null, "Claim + retrieved source context"),
                  createBaseVNode("p", { class: "muted" }, [
                    createTextVNode("LLM judgment, rationale,"),
                    createBaseVNode("br"),
                    createTextVNode("and highlighted evidence")
                  ]),
                  createBaseVNode("div", { class: "audit-reminder" }, [
                    createTextVNode("Check the original passage"),
                    createBaseVNode("br"),
                    createTextVNode("when context or meaning is ambiguous.")
                  ])
                ])
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "statement" },
              "Retrieval can miss evidence; decomposition and judgments can be wrong.",
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
