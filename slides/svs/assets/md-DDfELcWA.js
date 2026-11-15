import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0 } from "./01_mode_comparison_panel-DEZ1gi9M.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_31",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 30))),
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
              { class: "body overall-backup" },
              [
                createBaseVNode("table", { class: "means-table" }, [
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Measure"),
                      createBaseVNode("th", { class: "linear" }, "Linear"),
                      createBaseVNode("th", { class: "source" }, [
                        createTextVNode("Source-"),
                        createBaseVNode("br"),
                        createTextVNode("guided")
                      ]),
                      createBaseVNode("th", { class: "summary" }, [
                        createTextVNode("Summary-"),
                        createBaseVNode("br"),
                        createTextVNode("guided")
                      ])
                    ])
                  ]),
                  createBaseVNode("tbody", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Accuracy / 10"),
                      createBaseVNode("td", null, "6.33"),
                      createBaseVNode("td", null, "8.61"),
                      createBaseVNode("td", null, "8.61")
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Time / minutes"),
                      createBaseVNode("td", null, "12.25"),
                      createBaseVNode("td", null, "10.68"),
                      createBaseVNode("td", null, "8.24")
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Confidence / 7"),
                      createBaseVNode("td", null, "5.64"),
                      createBaseVNode("td", null, "6.24"),
                      createBaseVNode("td", null, "6.31")
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Mental demand / 7"),
                      createBaseVNode("td", null, "4.11"),
                      createBaseVNode("td", null, "2.83"),
                      createBaseVNode("td", null, "2.17")
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Physical demand / 7"),
                      createBaseVNode("td", null, "3.17"),
                      createBaseVNode("td", null, "2.11"),
                      createBaseVNode("td", null, "1.83")
                    ])
                  ])
                ]),
                createBaseVNode("figure", null, [
                  createBaseVNode("svg", {
                    viewBox: "0 2210 1490 925",
                    role: "img",
                    "aria-label": "Original paper confidence plot: means 5.64, 6.24, 6.31 with 95 percent confidence intervals"
                  }, [
                    createBaseVNode("image", {
                      href: _imports_0,
                      width: "3220",
                      height: "3160"
                    })
                  ]),
                  createBaseVNode("figcaption", null, "Original confidence plot / 95% confidence intervals")
                ])
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "statement" },
              "Summary-guided was faster and had lower mental demand than Source-guided.",
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
