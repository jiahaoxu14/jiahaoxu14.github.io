import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0, a as _imports_1 } from "./rtsum-figure-2-CiFlgeCN.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _imports_2 = "/slides/svs/images/related-work/awesomelit-figure-1.png";
const _sfc_main = {
  __name: "slides.md__slidev_25",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 24))),
        {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode(
              "header",
              { class: "existing-method-header" },
              [
                createBaseVNode("h1", null, "Supporting")
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "div",
              { class: "body related-work-gallery" },
              [
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, [
                    createBaseVNode("a", { href: "https://aclanthology.org/2021.acl-demo.18/" }, "SummVis")
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("img", {
                      src: _imports_0,
                      alt: "SummVis paper Figure 2: source and summary alignment with original extraction, hallucination, and abstraction annotations."
                    })
                  ])
                ]),
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, [
                    createBaseVNode("a", { href: "https://aclanthology.org/2024.naacl-demo.5/" }, "RTSUM")
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("img", {
                      src: _imports_1,
                      alt: "RTSUM paper Figure 2: source text and generated summary beside sentence, relation-triple, and phrase salience highlights."
                    })
                  ])
                ]),
                createBaseVNode("section", null, [
                  createBaseVNode("h2", null, [
                    createBaseVNode("a", { href: "https://arxiv.org/abs/2603.22648" }, "AwesomeLit")
                  ]),
                  createBaseVNode("figure", null, [
                    createBaseVNode("img", {
                      src: _imports_2,
                      alt: "AwesomeLit paper Figure 1: transparent agent workflow, semantic coordinate view, and query exploration tree."
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
