import { o as openBlock, e as createElementBlock, g as createBaseVNode, k as normalizeStyle, F as Fragment, al as renderList, t as toDisplayString, aH as createStaticVNode, z as computed } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext } from "./slidev/context-NoJkDP_T.js";
const _hoisted_1 = {
  class: "spatial-layouts-overview",
  "aria-label": "Two spatial document layouts"
};
const _hoisted_2 = { class: "method-heading" };
const _hoisted_3 = { class: "source-pane" };
const _hoisted_4 = {
  viewBox: "0 0 516 520",
  role: "img",
  "aria-label": "Source-guided: similar documents form topical neighborhoods."
};
const _hoisted_5 = {
  x: "0",
  y: "108",
  width: "516",
  height: "310"
};
const _hoisted_6 = {
  viewBox: "0 108 516 310",
  "aria-hidden": "true"
};
const _hoisted_7 = ["transform"];
const _hoisted_8 = {
  x: "12",
  y: "25",
  class: "doc-id"
};
const _hoisted_9 = { class: "summary-pane" };
const _hoisted_10 = {
  viewBox: "0 0 540 520",
  role: "img",
  "aria-label": "Source-guided: source documents form neighborhoods by content similarity. Summary-guided: documents are ordered horizontally by overall relevance to the summary, with more relevant documents on the left, and vertically by alignment with earlier or later summary content. Schematic positions show the same six documents in both layouts; position does not indicate factual support."
};
const _hoisted_11 = {
  x: "0",
  y: "108",
  width: "500",
  height: "310"
};
const _hoisted_12 = {
  viewBox: "0 108 500 310",
  "aria-hidden": "true"
};
const _hoisted_13 = ["transform"];
const _hoisted_14 = {
  x: "10",
  y: "23",
  class: "sentence-id"
};
const _hoisted_15 = ["transform"];
const _hoisted_16 = {
  x: "8",
  y: "21",
  class: "doc-id"
};
const _sfc_main = {
  __name: "SpatialLayoutsOverview",
  setup(__props) {
    const { $page, $renderContext } = useSlideContext();
    const { currentPage, isPrintMode } = useNav();
    const sharedSource = computed(() => !isPrintMode.value && currentPage.value === $page.value && ["slide", "presenter"].includes($renderContext.value) ? "spatial-source-layout" : "none");
    const sharedSummary = computed(() => sharedSource.value !== "none" ? "spatial-summary-layout" : "none");
    const sharedTitle = computed(() => sharedSource.value !== "none" ? "spatial-layout-title" : "none");
    const sourcePositions = [[62, 156], [163, 164], [122, 282], [348, 178], [418, 277], [318, 301]];
    const summaryPositions = [[150, 156], [208, 235], [266, 313], [324, 167], [382, 234], [440, 313]];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          createBaseVNode(
            "h1",
            {
              style: normalizeStyle({ viewTransitionName: sharedTitle.value })
            },
            "Method",
            4
            /* STYLE */
          ),
          _cache[0] || (_cache[0] = createBaseVNode(
            "p",
            { class: "method-challenge relevance" },
            "Challenge 1: Relevance",
            -1
            /* CACHED */
          ))
        ]),
        createBaseVNode("figure", null, [
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock("svg", _hoisted_4, [
              _cache[5] || (_cache[5] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "42",
                  class: "layout-title"
                },
                "Source-guided",
                -1
                /* CACHED */
              )),
              (openBlock(), createElementBlock("foreignObject", _hoisted_5, [
                createBaseVNode(
                  "div",
                  {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    class: "source-canvas",
                    style: normalizeStyle({ viewTransitionName: sharedSource.value })
                  },
                  [
                    (openBlock(), createElementBlock("svg", _hoisted_6, [
                      _cache[3] || (_cache[3] = createBaseVNode(
                        "rect",
                        {
                          x: "0",
                          y: "108",
                          width: "516",
                          height: "310",
                          rx: "5",
                          class: "canvas"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      _cache[4] || (_cache[4] = createBaseVNode(
                        "path",
                        {
                          d: "M40 140 H263 V394 H40 Z M295 150 H500 V408 H295 Z",
                          class: "neighborhood"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(sourcePositions, (position, index) => {
                          return createBaseVNode("g", {
                            key: index,
                            transform: `translate(${position[0]} ${position[1]})`,
                            class: "source-layout-document"
                          }, [
                            _cache[1] || (_cache[1] = createBaseVNode(
                              "rect",
                              {
                                width: "70",
                                height: "92",
                                rx: "2",
                                class: "document"
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            createBaseVNode(
                              "text",
                              _hoisted_8,
                              "D" + toDisplayString(index + 1),
                              1
                              /* TEXT */
                            ),
                            _cache[2] || (_cache[2] = createBaseVNode(
                              "path",
                              {
                                d: "M12 43 H58 M12 56 H58 M12 69 H46 M12 81 H53",
                                class: "doc-lines"
                              },
                              null,
                              -1
                              /* CACHED */
                            ))
                          ], 8, _hoisted_7);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]))
                  ],
                  4
                  /* STYLE */
                )
              ])),
              _cache[6] || (_cache[6] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "507",
                  class: "caption"
                },
                "Similar content stays nearby.",
                -1
                /* CACHED */
              ))
            ]))
          ]),
          _cache[15] || (_cache[15] = createBaseVNode(
            "svg",
            {
              viewBox: "0 0 1152 520",
              "aria-hidden": "true"
            },
            [
              createBaseVNode("path", {
                d: "M564 20 V494",
                class: "divider"
              })
            ],
            -1
            /* CACHED */
          )),
          createBaseVNode("div", _hoisted_9, [
            (openBlock(), createElementBlock("svg", _hoisted_10, [
              _cache[13] || (_cache[13] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "42",
                  class: "layout-title"
                },
                "Summary-guided",
                -1
                /* CACHED */
              )),
              (openBlock(), createElementBlock("foreignObject", _hoisted_11, [
                createBaseVNode(
                  "div",
                  {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    class: "summary-canvas",
                    style: normalizeStyle({ viewTransitionName: sharedSummary.value })
                  },
                  [
                    (openBlock(), createElementBlock("svg", _hoisted_12, [
                      _cache[11] || (_cache[11] = createBaseVNode(
                        "rect",
                        {
                          x: "0",
                          y: "108",
                          width: "500",
                          height: "310",
                          rx: "5",
                          class: "canvas"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      _cache[12] || (_cache[12] = createBaseVNode(
                        "text",
                        {
                          x: "14",
                          y: "139",
                          class: "summary-label"
                        },
                        "Summary",
                        -1
                        /* CACHED */
                      )),
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(3, (index) => {
                          return createBaseVNode("g", {
                            key: index,
                            transform: `translate(14 ${157 + (index - 1) * 82})`
                          }, [
                            _cache[7] || (_cache[7] = createBaseVNode(
                              "rect",
                              {
                                width: "105",
                                height: "62",
                                rx: "2",
                                class: "summary-sentence"
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            createBaseVNode(
                              "text",
                              _hoisted_14,
                              "S" + toDisplayString(index),
                              1
                              /* TEXT */
                            ),
                            _cache[8] || (_cache[8] = createBaseVNode(
                              "path",
                              {
                                d: "M10 38 H94 M10 49 H75",
                                class: "doc-lines"
                              },
                              null,
                              -1
                              /* CACHED */
                            ))
                          ], 8, _hoisted_13);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      )),
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(summaryPositions, (position, index) => {
                          return createBaseVNode("g", {
                            key: index,
                            transform: `translate(${position[0]} ${position[1]})`,
                            class: "summary-layout-document"
                          }, [
                            _cache[9] || (_cache[9] = createBaseVNode(
                              "rect",
                              {
                                width: "46",
                                height: "65",
                                rx: "2",
                                class: "document"
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            createBaseVNode(
                              "text",
                              _hoisted_16,
                              "D" + toDisplayString(index + 1),
                              1
                              /* TEXT */
                            ),
                            _cache[10] || (_cache[10] = createBaseVNode(
                              "path",
                              {
                                d: "M8 35 H38 M8 46 H38 M8 57 H30",
                                class: "doc-lines"
                              },
                              null,
                              -1
                              /* CACHED */
                            ))
                          ], 8, _hoisted_15);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]))
                  ],
                  4
                  /* STYLE */
                )
              ])),
              _cache[14] || (_cache[14] = createStaticVNode('<path d="M146 438 H488 M154 431 L146 438 L154 445" class="axis" data-v-d3cdf138></path><text x="146" y="466" class="axis-label" data-v-d3cdf138>Higher relevance</text><text x="488" y="466" text-anchor="end" class="axis-label" data-v-d3cdf138>Lower relevance</text><path d="M518 158 V392 M511 384 L518 392 L525 384" class="axis" data-v-d3cdf138></path><text transform="translate(526 272) rotate(90)" text-anchor="middle" class="axis-label" data-v-d3cdf138>Earlier → later summary content</text><text x="0" y="507" class="caption" data-v-d3cdf138>Relevance × summary order.</text>', 6))
            ]))
          ]),
          _cache[16] || (_cache[16] = createBaseVNode(
            "figcaption",
            { class: "sr-only" },
            "Source-guided reveals topical neighborhoods. Summary-guided prioritizes relevant sources and aligns them with the summary sequence.",
            -1
            /* CACHED */
          ))
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d3cdf138"]]);
export {
  __unplugin_components_0 as _
};
