import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0, a as _imports_2 } from "./notebooklm-Dmsnqy5d.js";
import { _ as _imports_0$1, a as _imports_1 } from "./rtsum-figure-2-CiFlgeCN.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_3",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 2))),
        {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode(
              "h1",
              null,
              "Existing Approaches",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "div",
              { class: "body approach-rows" },
              [
                createBaseVNode("section", { class: "approach-row" }, [
                  createBaseVNode("div", { class: "approach-description" }, [
                    createBaseVNode("h2", null, "Commercial tools"),
                    createBaseVNode("p", null, [
                      createTextVNode("Citations and side panels provide access. Users still "),
                      createBaseVNode("strong", null, "switch back and forth to find and compare evidence"),
                      createTextVNode(".")
                    ])
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("figcaption", null, "ChatGPT"),
                    createBaseVNode("svg", {
                      viewBox: "0 375 1436 700",
                      role: "img",
                      "aria-label": "Saved ChatGPT screenshot: summary text with citations beside a list of source documents"
                    }, [
                      createBaseVNode("image", {
                        href: _imports_0,
                        x: "0",
                        y: "0",
                        width: "1436",
                        height: "1241"
                      })
                    ])
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("figcaption", null, "Google NotebookLM"),
                    createBaseVNode("svg", {
                      viewBox: "0 135 1631 795",
                      role: "img",
                      "aria-label": "Saved NotebookLM screenshot: source documents beside a generated answer with numbered citations"
                    }, [
                      createBaseVNode("image", {
                        href: _imports_2,
                        x: "0",
                        y: "0",
                        width: "1631",
                        height: "1256"
                      })
                    ])
                  ])
                ]),
                createBaseVNode("section", { class: "approach-row" }, [
                  createBaseVNode("div", { class: "approach-description" }, [
                    createBaseVNode("h2", null, "Research systems"),
                    createBaseVNode("p", null, [
                      createTextVNode("Visual links help track evidence, but mainly within "),
                      createBaseVNode("strong", null, "a single document or a small comparison set"),
                      createTextVNode(".")
                    ])
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("figcaption", null, [
                      createBaseVNode("a", { href: "https://aclanthology.org/2021.acl-demo.18/" }, "SummVis (2021)")
                    ]),
                    createBaseVNode("img", {
                      src: _imports_0$1,
                      alt: "SummVis Figure 2: original source-summary alignment with extraction, hallucination, and abstraction annotations"
                    })
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("figcaption", null, [
                      createBaseVNode("a", { href: "https://aclanthology.org/2024.naacl-demo.5/" }, "RTSUM (2024)")
                    ]),
                    createBaseVNode("img", {
                      src: _imports_1,
                      alt: "RTSUM Figure 2: original source and summary views with salience highlights"
                    })
                  ])
                ])
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
