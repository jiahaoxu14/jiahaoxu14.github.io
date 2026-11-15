import { aG as resolveDirective, o as openBlock, e as createElementBlock, au as withDirectives, aH as createStaticVNode, g as createBaseVNode, F as Fragment, al as renderList, k as normalizeStyle, b as createBlock, w as withCtx, d as createVNode, an as createTextVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { _ as _export_sfc } from "./index-BenZRoUb.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1$1 = {
  class: "motivation-flow",
  "aria-label": "Many source documents are condensed through AI summarization into one concise summary"
};
const _hoisted_2 = {
  class: "verification-cue",
  viewBox: "0 0 1152 120",
  "aria-hidden": "true"
};
const _hoisted_3 = { class: "source-collection" };
const _hoisted_4 = {
  class: "document-stack",
  "aria-hidden": "true"
};
const _hoisted_5 = { class: "summary-result" };
const _hoisted_6 = {
  class: "summary-page",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  class: "application-domains",
  "aria-label": "Examples of AI summarization applications"
};
const _sfc_main$1 = {
  __name: "SummaryMotivation",
  setup(__props) {
    useSlideContext();
    return (_ctx, _cache) => {
      const _directive_click = resolveDirective("click");
      return openBlock(), createElementBlock("figure", _hoisted_1$1, [
        withDirectives((openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createStaticVNode('<path d="M938 88 V46 Q938 32 924 32 H228 Q214 32 214 46 V88" class="return-path" data-v-1e8bb07c></path><path d="M207 80 L214 88 L221 80" class="return-arrow" data-v-1e8bb07c></path><circle cx="938" cy="88" r="4" class="return-start" data-v-1e8bb07c></circle><circle cx="576" cy="32" r="23" class="question-circle" data-v-1e8bb07c></circle><text x="576" y="42" text-anchor="middle" class="question-mark" data-v-1e8bb07c>?</text>', 5)
        ])])), [
          [_directive_click, 2]
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(3, (document) => {
                return createBaseVNode(
                  "div",
                  {
                    key: document,
                    class: "document-page",
                    style: normalizeStyle({ "--document": document })
                  },
                  [
                    _cache[1] || (_cache[1] = createBaseVNode(
                      "div",
                      { class: "document-heading" },
                      null,
                      -1
                      /* CACHED */
                    )),
                    (openBlock(), createElementBlock(
                      Fragment,
                      null,
                      renderList(6, (line) => {
                        return createBaseVNode("div", {
                          key: line,
                          class: "document-line"
                        });
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                );
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _cache[2] || (_cache[2] = createBaseVNode(
            "p",
            null,
            "Many source documents",
            -1
            /* CACHED */
          ))
        ]),
        _cache[6] || (_cache[6] = createBaseVNode(
          "div",
          { class: "summarization-step" },
          [
            createBaseVNode("p", null, "AI summarization"),
            createBaseVNode("div", {
              class: "flow-arrow",
              "aria-hidden": "true"
            })
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            _cache[3] || (_cache[3] = createBaseVNode(
              "span",
              null,
              "Summary",
              -1
              /* CACHED */
            )),
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(5, (line) => {
                return createBaseVNode("div", {
                  key: line,
                  class: "summary-line"
                });
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _cache[4] || (_cache[4] = createBaseVNode(
            "p",
            null,
            "One concise summary",
            -1
            /* CACHED */
          ))
        ]),
        withDirectives((openBlock(), createElementBlock("ul", _hoisted_7, [..._cache[5] || (_cache[5] = [
          createStaticVNode('<li data-v-1e8bb07c><svg viewBox="0 0 40 40" aria-hidden="true" data-v-1e8bb07c><path d="M20 9 C14 5 8 5 3 7 V32 C9 30 14 30 20 34 C26 30 31 30 37 32 V7 C32 5 26 5 20 9 Z M20 9 V34 M8 12 L15 14 M8 18 L15 20 M25 14 L32 12 M25 20 L32 18" data-v-1e8bb07c></path></svg><div data-v-1e8bb07c><strong data-v-1e8bb07c>Research</strong><span data-v-1e8bb07c>Literature reviews</span></div></li><li data-v-1e8bb07c><svg viewBox="0 0 40 40" aria-hidden="true" data-v-1e8bb07c><path d="M5 5 H34 V35 H5 Z M10 11 H29 M10 17 H18 V26 H10 Z M23 17 H29 M23 22 H29 M10 30 H29" data-v-1e8bb07c></path></svg><div data-v-1e8bb07c><strong data-v-1e8bb07c>News</strong><span data-v-1e8bb07c>Event briefings</span></div></li><li data-v-1e8bb07c><svg viewBox="0 0 40 40" aria-hidden="true" data-v-1e8bb07c><path d="M7 4 H26 L34 12 V36 H7 Z M26 4 V12 H34 M13 29 V23 M20 29 V17 M27 29 V20 M11 31 H29" data-v-1e8bb07c></path></svg><div data-v-1e8bb07c><strong data-v-1e8bb07c>Business</strong><span data-v-1e8bb07c>Report synthesis</span></div></li>', 3)
        ])])), [
          [_directive_click, 1]
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1e8bb07c"]]);
const _hoisted_1 = { class: "statement" };
const _sfc_main = {
  __name: "slides.md__slidev_2",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SummaryMotivation = __unplugin_components_0;
      const _directive_click = resolveDirective("click");
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 1))),
        {
          default: withCtx(() => [
            _cache[1] || (_cache[1] = createBaseVNode(
              "h1",
              null,
              "Background",
              -1
              /* CACHED */
            )),
            createVNode(_component_SummaryMotivation, { class: "body" }),
            withDirectives((openBlock(), createElementBlock("p", _hoisted_1, [..._cache[0] || (_cache[0] = [
              createTextVNode(
                "Does the summary ",
                -1
                /* CACHED */
              ),
              createBaseVNode(
                "strong",
                null,
                "faithfully represent",
                -1
                /* CACHED */
              ),
              createTextVNode(
                " its sources?",
                -1
                /* CACHED */
              )
            ])])), [
              [_directive_click, 2]
            ])
          ]),
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
