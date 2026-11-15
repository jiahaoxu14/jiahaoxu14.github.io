import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_29",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 28))),
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
              "p",
              { class: "small" },
              "Illustrative scenario / not an additional case-study result",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "div",
              { class: "body conflict-example" },
              [
                createBaseVNode("div", { class: "conflict-claim" }, [
                  createBaseVNode("span", null, "Summary claim"),
                  createBaseVNode("strong", null, "“The storm made landfall at Category 5.”")
                ]),
                createBaseVNode("div", { class: "conflict-sources" }, [
                  createBaseVNode("section", { class: "support" }, [
                    createBaseVNode("h2", null, "Source A / Supports"),
                    createBaseVNode("p", null, "Reports Category 5.")
                  ]),
                  createBaseVNode("section", { class: "contradiction" }, [
                    createBaseVNode("h2", null, "Source B / Contradicts"),
                    createBaseVNode("p", null, "Reports Category 4.")
                  ])
                ]),
                createBaseVNode("p", null, "Inspect both passages, their context, and the explanation.")
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "statement" },
              "Conflicting evidence is visible; the user must assess which account is justified.",
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
