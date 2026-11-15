import { o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0 } from "./svs-prototype-D7ghNp2I.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _imports_1 = "/slides/svs/images/jiahaox-website-qr.png";
const _sfc_main = {
  __name: "slides.md__slidev_23",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 22))),
        {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode(
              "h1",
              null,
              "Thank you!",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "div",
              { class: "body thanks-body" },
              [
                createBaseVNode("div", { class: "column thanks-summary" }, [
                  createBaseVNode("h2", null, "Summary Verification Space"),
                  createBaseVNode("figure", { class: "thanks-prototype" }, [
                    createBaseVNode("img", {
                      src: _imports_0,
                      alt: "SVS prototype showing summary claims linked to supporting and contradictory evidence across the document canvas",
                      width: "3424",
                      height: "1318"
                    })
                  ]),
                  createBaseVNode("div", { class: "thanks-takeaways" }, [
                    createBaseVNode("p", { class: "lead" }, [
                      createBaseVNode("span", { class: "relevance" }, "Spatial organization"),
                      createBaseVNode("br"),
                      createTextVNode("Find relevant sources.")
                    ]),
                    createBaseVNode("p", { class: "lead" }, [
                      createBaseVNode("span", { class: "consistency" }, "Provenance visualization"),
                      createBaseVNode("br"),
                      createTextVNode("Verify claims against evidence.")
                    ])
                  ])
                ]),
                createBaseVNode("figure", { class: "website" }, [
                  createBaseVNode("a", {
                    href: "https://www.jiahaox.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Visit Jiahao Xu's website"
                  }, [
                    createBaseVNode("img", {
                      src: _imports_1,
                      width: "340",
                      height: "340",
                      alt: "QR code linking to https://www.jiahaox.com/"
                    })
                  ]),
                  createBaseVNode("figcaption", null, [
                    createBaseVNode("a", {
                      href: "https://www.jiahaox.com/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, "www.jiahaox.com")
                  ])
                ])
              ],
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "footer",
              { class: "thanks-footer" },
              [
                createBaseVNode("div", { class: "thanks-meta" }, [
                  createBaseVNode("p", null, [
                    createTextVNode("Jiahao Xu "),
                    createBaseVNode("span", { class: "muted" }, "/ Virginia Tech")
                  ]),
                  createBaseVNode("p", { class: "accent" }, "With thanks to LAS for its support.")
                ]),
                createBaseVNode("p", { class: "funding-disclaimer" }, "This material is based upon work supported in whole or in part with funding from the Department of Defense (DoD). Any opinions, findings, conclusions, or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the DoD and/or any agency or entity of the United States Government.")
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
