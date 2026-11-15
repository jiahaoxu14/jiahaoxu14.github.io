import { o as openBlock, e as createElementBlock, g as createBaseVNode, F as Fragment, al as renderList, t as toDisplayString, U as unref, n as normalizeClass, j as createCommentVNode, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = ["data-step"];
const _hoisted_2 = {
  viewBox: "0 0 1152 560",
  role: "img",
  "aria-label": "Document sentences and summary sentences yield one similarity matrix per document. Overall relevance determines horizontal rank; weighted summary-sentence alignment determines vertical rank. Four documents are ranked independently of the three summary sentences; they do not snap to sentence rows. All matrices and positions are illustrative."
};
const _hoisted_3 = ["id"];
const _hoisted_4 = ["transform"];
const _hoisted_5 = {
  x: "8",
  y: "25",
  class: "item-label"
};
const _hoisted_6 = ["transform"];
const _hoisted_7 = {
  x: "0",
  y: "15",
  class: "summary-label"
};
const _hoisted_8 = ["aria-hidden"];
const _hoisted_9 = ["marker-end"];
const _hoisted_10 = ["x"];
const _hoisted_11 = ["transform"];
const _hoisted_12 = {
  x: "-49",
  y: "40",
  class: "item-label"
};
const _hoisted_13 = ["transform"];
const _hoisted_14 = ["x", "fill"];
const _hoisted_15 = ["aria-hidden"];
const _hoisted_16 = ["marker-end"];
const _hoisted_17 = ["aria-hidden"];
const _hoisted_18 = ["x"];
const _hoisted_19 = ["d"];
const _hoisted_20 = ["transform"];
const _hoisted_21 = {
  x: "12",
  y: "28",
  class: "summary-label"
};
const _hoisted_22 = ["transform"];
const _hoisted_23 = {
  x: "10",
  y: "24",
  class: "item-label"
};
const _sfc_main$1 = {
  __name: "SummaryLayoutPipeline",
  setup(__props) {
    const { $clicks, $page, $renderContext } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const step = computed(() => isPrintMode.value && !isPrintWithClicks.value ? 3 : Math.max(0, Math.min(3, $clicks.value)));
    const markerId = computed(() => `summary-pipeline-${$renderContext.value}-${$page.value}`);
    const matrices = [
      [[0.9, 0.2, 0], [0.6, 0.1, 0.1], [0.2, 0.1, 0]],
      [[0.7, 0.3, 0.1], [0.5, 0.2, 0.1], [0.1, 0.1, 0]],
      [[0.1, 0.2, 0.8], [0, 0.3, 0.7], [0.1, 0.2, 0.5]],
      [[0.1, 0.5, 0.1], [0, 0.4, 0.2], [0.1, 0.2, 0.1]]
    ];
    const documents = matrices.map((matrix, index) => {
      const contributions = [0, 1, 2].map((j) => Math.max(0, ...matrix.map((row) => row[j])));
      return {
        id: index + 1,
        relevance: Math.max(...matrix.flat().map(Math.abs)),
        alignment: contributions.reduce((sum, weight, j) => sum + (j + 1) * weight, 0) / contributions.reduce((sum, weight) => sum + weight, 0)
      };
    });
    const relevanceOrder = [...documents].sort((a, b) => b.relevance - a.relevance);
    const alignmentOrder = [...documents].sort((a, b) => a.alignment - b.alignment);
    const positionedDocuments = relevanceOrder.map((document, rank) => ({
      ...document,
      x: 770 + rank * 95,
      y: 275 + alignmentOrder.findIndex((item) => item.id === document.id) * 64
    }));
    const cellColors = ["#edf2fb", "#d1dff0", "#9bb8df", "#5d85bb", "#2455a4"];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "summary-pipeline",
        "data-step": step.value,
        "aria-label": "Summary-guided layout pipeline"
      }, [
        _cache[21] || (_cache[21] = createBaseVNode(
          "header",
          { class: "method-heading" },
          [
            createBaseVNode("h1", null, "Method"),
            createBaseVNode("p", { class: "method-challenge relevance" }, "Challenge 1: Relevance")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("figure", null, [
          (openBlock(), createElementBlock("svg", _hoisted_2, [
            createBaseVNode("defs", null, [
              createBaseVNode("marker", {
                id: markerId.value,
                viewBox: "0 0 8 8",
                refX: "7",
                refY: "4",
                markerWidth: "10",
                markerHeight: "10",
                orient: "auto",
                markerUnits: "userSpaceOnUse"
              }, [..._cache[0] || (_cache[0] = [
                createBaseVNode(
                  "path",
                  {
                    d: "M1 1 L7 4 L1 7",
                    class: "arrow"
                  },
                  null,
                  -1
                  /* CACHED */
                )
              ])], 8, _hoisted_3)
            ]),
            _cache[19] || (_cache[19] = createBaseVNode(
              "text",
              {
                x: "0",
                y: "62",
                class: "input-title"
              },
              "Documents + summary",
              -1
              /* CACHED */
            )),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(unref(documents), (document) => {
                return openBlock(), createElementBlock("g", {
                  key: document.id,
                  transform: `translate(${8 + (document.id - 1) * 49} 147)`
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode(
                    "rect",
                    {
                      width: "42",
                      height: "82",
                      rx: "3",
                      class: "document"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "text",
                    _hoisted_5,
                    "D" + toDisplayString(document.id),
                    1
                    /* TEXT */
                  ),
                  _cache[2] || (_cache[2] = createBaseVNode(
                    "path",
                    {
                      d: "M8 39 H34 M8 51 H34 M8 63 H27",
                      class: "text-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  ))
                ], 8, _hoisted_4);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(3, (sentence) => {
                return createBaseVNode("g", {
                  key: sentence,
                  transform: `translate(8 ${329 + (sentence - 1) * 48})`
                }, [
                  createBaseVNode(
                    "text",
                    _hoisted_7,
                    "S" + toDisplayString(sentence),
                    1
                    /* TEXT */
                  ),
                  _cache[3] || (_cache[3] = createBaseVNode(
                    "path",
                    {
                      d: "M39 4 H174 M39 17 H151",
                      class: "text-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  ))
                ], 8, _hoisted_6);
              }),
              64
              /* STABLE_FRAGMENT */
            )),
            _cache[20] || (_cache[20] = createBaseVNode(
              "text",
              {
                x: "95",
                y: "520",
                class: "detail"
              },
              "Split into sentences",
              -1
              /* CACHED */
            )),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 1 }]),
              "aria-hidden": step.value < 1,
              "data-stage": "similarities"
            }, [
              _cache[4] || (_cache[4] = createBaseVNode(
                "text",
                {
                  x: "365",
                  y: "62",
                  class: "stage-title"
                },
                "Sentence similarities",
                -1
                /* CACHED */
              )),
              _cache[5] || (_cache[5] = createBaseVNode(
                "path",
                {
                  d: "M200 188 H222 Q232 188 232 198 V310 M200 392 H222 Q232 392 232 382 V310",
                  class: "arrow"
                },
                null,
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M232 310 H252",
                class: "arrow",
                "marker-end": `url(#${markerId.value})`
              }, null, 8, _hoisted_9),
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (sentence) => {
                  return createBaseVNode("text", {
                    key: sentence,
                    x: 335 + (sentence - 1) * 36,
                    y: "136",
                    class: "matrix-label"
                  }, "S" + toDisplayString(sentence), 9, _hoisted_10);
                }),
                64
                /* STABLE_FRAGMENT */
              )),
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(matrices, (matrix, document) => {
                  return createBaseVNode("g", {
                    key: document,
                    transform: `translate(320 ${154 + document * 90})`
                  }, [
                    createBaseVNode(
                      "text",
                      _hoisted_12,
                      "D" + toDisplayString(document + 1),
                      1
                      /* TEXT */
                    ),
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(matrix, (row, sentence) => {
                        return openBlock(), createElementBlock("g", {
                          key: sentence,
                          transform: `translate(0 ${sentence * 24})`
                        }, [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(row, (similarity, summary) => {
                              return openBlock(), createElementBlock("rect", {
                                key: summary,
                                x: summary * 36,
                                width: "30",
                                height: "21",
                                rx: "2",
                                fill: cellColors[Math.round(similarity * 4)]
                              }, null, 8, _hoisted_14);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ], 8, _hoisted_13);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ], 8, _hoisted_11);
                }),
                64
                /* STABLE_FRAGMENT */
              )),
              _cache[6] || (_cache[6] = createBaseVNode(
                "text",
                {
                  x: "365",
                  y: "520",
                  class: "detail"
                },
                "One matrix per document",
                -1
                /* CACHED */
              )),
              _cache[7] || (_cache[7] = createBaseVNode(
                "text",
                {
                  x: "365",
                  y: "545",
                  class: "small-detail"
                },
                "Rows: source sentences",
                -1
                /* CACHED */
              ))
            ], 10, _hoisted_8),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 2 }]),
              "aria-hidden": step.value < 2,
              "data-stage": "layout-relevance"
            }, [
              _cache[13] || (_cache[13] = createBaseVNode(
                "text",
                {
                  x: "856",
                  y: "62",
                  class: "output-title"
                },
                "Document layout",
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M450 310 H548",
                class: "arrow",
                "marker-end": `url(#${markerId.value})`
              }, null, 8, _hoisted_16),
              _cache[14] || (_cache[14] = createBaseVNode(
                "rect",
                {
                  x: "560",
                  y: "104",
                  width: "592",
                  height: "444",
                  rx: "8",
                  class: "map-surface"
                },
                null,
                -1
                /* CACHED */
              )),
              createCommentVNode(" Both orderings annotate the same fixed document positions. "),
              createBaseVNode("g", {
                class: normalizeClass(["pipeline-stage", { revealed: step.value >= 3 }]),
                "aria-hidden": step.value < 3,
                "data-stage": "summary-alignment"
              }, [..._cache[8] || (_cache[8] = [
                createBaseVNode(
                  "text",
                  {
                    x: "609",
                    y: "234",
                    class: "axis-endpoint"
                  },
                  "Earlier",
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "path",
                  {
                    d: "M609 250 V511 M603 503 L609 511 L615 503",
                    class: "ordering-axis"
                  },
                  null,
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "text",
                  {
                    x: "609",
                    y: "536",
                    class: "axis-endpoint"
                  },
                  "Later",
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "text",
                  {
                    transform: "translate(586 381) rotate(-90)",
                    class: "ordering-title"
                  },
                  "Summary alignment",
                  -1
                  /* CACHED */
                )
              ])], 10, _hoisted_17),
              _cache[15] || (_cache[15] = createBaseVNode(
                "text",
                {
                  x: "938",
                  y: "135",
                  class: "ordering-title"
                },
                "Overall relevance",
                -1
                /* CACHED */
              )),
              _cache[16] || (_cache[16] = createBaseVNode(
                "text",
                {
                  x: "770",
                  y: "169",
                  class: "small-detail"
                },
                "Higher",
                -1
                /* CACHED */
              )),
              _cache[17] || (_cache[17] = createBaseVNode(
                "text",
                {
                  x: "1100",
                  y: "169",
                  "text-anchor": "end",
                  class: "small-detail"
                },
                "Lower",
                -1
                /* CACHED */
              )),
              _cache[18] || (_cache[18] = createBaseVNode(
                "path",
                {
                  d: "M770 187 H1100 M778 181 L770 187 L778 193",
                  class: "ordering-axis"
                },
                null,
                -1
                /* CACHED */
              )),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(positionedDocuments), (document) => {
                  return openBlock(), createElementBlock("g", {
                    key: document.id
                  }, [
                    createBaseVNode("text", {
                      x: document.x + 26,
                      y: "221",
                      class: "score"
                    }, toDisplayString(document.relevance.toFixed(1)), 9, _hoisted_18),
                    createBaseVNode("path", {
                      d: `M${document.x + 26} 232 V${document.y}`,
                      class: "ordering-guide"
                    }, null, 8, _hoisted_19)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (sentence) => {
                  return createBaseVNode("g", {
                    key: sentence,
                    transform: `translate(650 ${250 + (sentence - 1) * 95})`
                  }, [
                    _cache[9] || (_cache[9] = createBaseVNode(
                      "rect",
                      {
                        width: "68",
                        height: "75",
                        rx: "3",
                        class: "summary-sentence"
                      },
                      null,
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "text",
                      _hoisted_21,
                      "S" + toDisplayString(sentence),
                      1
                      /* TEXT */
                    ),
                    _cache[10] || (_cache[10] = createBaseVNode(
                      "path",
                      {
                        d: "M12 43 H56 M12 55 H45",
                        class: "text-lines"
                      },
                      null,
                      -1
                      /* CACHED */
                    ))
                  ], 8, _hoisted_20);
                }),
                64
                /* STABLE_FRAGMENT */
              )),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(positionedDocuments), (document) => {
                  return openBlock(), createElementBlock("g", {
                    key: document.id,
                    transform: `translate(${document.x} ${document.y})`
                  }, [
                    _cache[11] || (_cache[11] = createBaseVNode(
                      "rect",
                      {
                        width: "52",
                        height: "60",
                        rx: "3",
                        class: "document"
                      },
                      null,
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "text",
                      _hoisted_23,
                      "D" + toDisplayString(document.id),
                      1
                      /* TEXT */
                    ),
                    _cache[12] || (_cache[12] = createBaseVNode(
                      "path",
                      {
                        d: "M10 35 H42 M10 44 H42 M10 53 H34",
                        class: "text-lines"
                      },
                      null,
                      -1
                      /* CACHED */
                    ))
                  ], 8, _hoisted_22);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 10, _hoisted_15)
          ]))
        ])
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c1b2e218"]]);
const _sfc_main = {
  __name: "slides.md__slidev_11",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SummaryLayoutPipeline = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 10))),
        {
          default: withCtx(() => [
            createVNode(_component_SummaryLayoutPipeline)
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
