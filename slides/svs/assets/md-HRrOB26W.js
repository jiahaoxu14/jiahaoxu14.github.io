import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0 } from "./svs-prototype-D7ghNp2I.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_1",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 0))),
        {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode(
              "div",
              { class: "title-content" },
              [
                createBaseVNode("h1", null, [
                  createBaseVNode("span", null, "Spatial Visual Analytics"),
                  createBaseVNode("span", { class: "title-context" }, "for Multi-Document Summary Verification")
                ]),
                createBaseVNode("figure", { class: "cover-overview" }, [
                  createBaseVNode("img", {
                    src: _imports_0,
                    alt: "SVS prototype showing summary claims linked to supporting and contradictory evidence across the document canvas",
                    width: "3424",
                    height: "1318"
                  })
                ]),
                createBaseVNode("footer", { class: "cover-meta" }, [
                  createBaseVNode("div", { class: "authors" }, [
                    createBaseVNode("p", { class: "author-line" }, [
                      createBaseVNode("strong", null, [
                        createTextVNode("Jiahao Xu"),
                        createBaseVNode("sup", null, "1")
                      ]),
                      createTextVNode(", Wei Liu"),
                      createBaseVNode("sup", null, "1"),
                      createTextVNode(", Yang Liu"),
                      createBaseVNode("sup", null, "1"),
                      createTextVNode(", Eric Krokos"),
                      createBaseVNode("sup", null, "2"),
                      createTextVNode(", Kirsten Whitley"),
                      createBaseVNode("sup", null, "2"),
                      createTextVNode(",")
                    ]),
                    createBaseVNode("p", { class: "author-line" }, [
                      createTextVNode("Xuan Wang"),
                      createBaseVNode("sup", null, "1"),
                      createTextVNode(", Rebecca Faust"),
                      createBaseVNode("sup", null, "3"),
                      createTextVNode(", and Chris North"),
                      createBaseVNode("sup", null, "1")
                    ]),
                    createBaseVNode("p", { class: "affiliations" }, [
                      createBaseVNode("span", null, [
                        createBaseVNode("sup", null, "1"),
                        createTextVNode(" Virginia Tech")
                      ]),
                      createBaseVNode("span", null, [
                        createBaseVNode("sup", null, "2"),
                        createTextVNode(" Department of Defense")
                      ]),
                      createBaseVNode("span", null, [
                        createBaseVNode("sup", null, "3"),
                        createTextVNode(" Tulane University")
                      ])
                    ])
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
