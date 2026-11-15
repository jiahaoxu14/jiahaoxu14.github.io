import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { _ as _imports_0 } from "./canvasobs-teaser-sA79N2s9.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import "./index-_oBFeUd_.js";
import "./modules/shiki-BYicmHTF.js";
const _imports_1 = "/slides/canvasobs/images/virginia-tech.svg";
const _imports_2 = "/slides/canvasobs/images/tulane-university.svg";
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
                  createBaseVNode("span", null, "CanvasObs"),
                  createBaseVNode("span", { class: "title-context" }, [
                    createTextVNode("Structured Spatial Observation for Agent Editing"),
                    createBaseVNode("br"),
                    createTextVNode("on 2D Infinite Canvases")
                  ])
                ]),
                createBaseVNode("figure", { class: "cover-overview" }, [
                  createBaseVNode("img", {
                    src: _imports_0,
                    alt: "CanvasObs exposes object identity and state, visibility and structure, relations, and offscreen bounds to support agent editing on a 2D infinite canvas",
                    width: "2083",
                    height: "755"
                  })
                ]),
                createBaseVNode("footer", { class: "cover-meta" }, [
                  createBaseVNode("div", { class: "authors" }, [
                    createBaseVNode("p", { class: "author-line" }, [
                      createBaseVNode("strong", null, [
                        createTextVNode("Jiahao Xu"),
                        createBaseVNode("sup", null, "1")
                      ]),
                      createTextVNode(", Haohui Wang"),
                      createBaseVNode("sup", null, "1"),
                      createTextVNode(", Rebecca Faust"),
                      createBaseVNode("sup", null, "2"),
                      createTextVNode(",")
                    ]),
                    createBaseVNode("p", { class: "author-line" }, [
                      createTextVNode("Dawei Zhou"),
                      createBaseVNode("sup", null, "1"),
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
                        createTextVNode(" Tulane University")
                      ])
                    ])
                  ]),
                  createBaseVNode("div", { class: "university-logos" }, [
                    createBaseVNode("img", {
                      class: "vt-logo",
                      src: _imports_1,
                      alt: "Virginia Tech"
                    }),
                    createBaseVNode("img", {
                      class: "tulane-logo",
                      src: _imports_2,
                      alt: "Tulane University"
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
