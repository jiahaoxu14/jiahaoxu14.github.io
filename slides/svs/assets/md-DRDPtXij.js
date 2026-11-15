import { o as openBlock, e as createElementBlock, g as createBaseVNode, k as normalizeStyle, F as Fragment, al as renderList, n as normalizeClass, j as createCommentVNode, t as toDisplayString, U as unref, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = ["data-step"];
const _hoisted_2 = { class: "method-heading" };
const _hoisted_3 = {
  viewBox: "0 0 1152 560",
  role: "img",
  "aria-label": "Two routes converge in one document space. Above: source documents, whole-document embeddings, and UMAP establish document positions. Below: summary and source sentences provide normalized contribution weights; a weighted average of document positions places orange summary anchors. All values and positions are illustrative."
};
const _hoisted_4 = ["id"];
const _hoisted_5 = ["transform"];
const _hoisted_6 = {
  x: "8",
  y: "23",
  class: "document-id"
};
const _hoisted_7 = ["aria-hidden"];
const _hoisted_8 = ["marker-end"];
const _hoisted_9 = { "aria-label": "Each document has a high-dimensional numeric embedding vector. Bracketed columns show illustrative signed values for D1, D2, and D6. Ellipses omit other dimensions and documents." };
const _hoisted_10 = ["transform"];
const _hoisted_11 = {
  x: "0",
  y: "103",
  class: "small-id",
  "text-anchor": "middle"
};
const _hoisted_12 = ["y"];
const _hoisted_13 = ["aria-hidden"];
const _hoisted_14 = ["marker-end"];
const _hoisted_15 = ["transform"];
const _hoisted_16 = {
  x: "11",
  y: "6",
  class: "small-id"
};
const _hoisted_17 = ["aria-hidden"];
const _hoisted_18 = ["marker-end"];
const _hoisted_19 = ["marker-end"];
const _hoisted_20 = ["transform"];
const _hoisted_21 = {
  x: "22",
  y: "12",
  class: "document-id"
};
const _hoisted_22 = { "aria-label": "A contribution-weight matrix with rows S1 through S3 and columns D1 through D6. Darker cells indicate greater normalized contributions. Values are illustrative." };
const _hoisted_23 = ["x"];
const _hoisted_24 = ["transform"];
const _hoisted_25 = {
  x: "0",
  y: "19",
  class: "matrix-id"
};
const _hoisted_26 = ["x", "fill"];
const _hoisted_27 = ["aria-hidden"];
const _hoisted_28 = ["marker-end"];
const _hoisted_29 = ["marker-end"];
const _hoisted_30 = { "aria-label": "S1 is placed at the weighted mean of D1, D2, and D3, using illustrative weights of 30%, 30%, and 40%." };
const _hoisted_31 = ["d", "stroke-width"];
const _hoisted_32 = ["cx", "cy"];
const _hoisted_33 = ["x", "y"];
const _hoisted_34 = ["cx", "cy"];
const _hoisted_35 = ["x", "y"];
const _hoisted_36 = ["aria-hidden"];
const _hoisted_37 = ["marker-end"];
const _hoisted_38 = { transform: "translate(6 52)" };
const _hoisted_39 = ["transform"];
const _hoisted_40 = {
  x: "8",
  y: "24",
  class: "document-id"
};
const _hoisted_41 = ["transform"];
const _hoisted_42 = ["x", "text-anchor"];
const _sfc_main$1 = {
  __name: "SourceLayoutPipeline",
  setup(__props) {
    const { $clicks, $page, $renderContext } = useSlideContext();
    const { currentPage, isPrintMode, isPrintWithClicks } = useNav();
    const step = computed(() => isPrintMode.value && !isPrintWithClicks.value ? 5 : Math.max(0, Math.min(5, $clicks.value)));
    const sharedActive = computed(() => !isPrintMode.value && currentPage.value === $page.value && ["slide", "presenter"].includes($renderContext.value));
    const markerPrefix = computed(() => `source-pipeline-${$renderContext.value}-${$page.value}`);
    const positions = [[28, 70], [100, 38], [65, 155], [195, 100], [170, 205], [255, 180]];
    const vectors = [
      { document: 1, x: 271, values: [0.12, -0.31, 0.08, 0.24] },
      { document: 2, x: 339, values: [0.16, -0.28, 0.05, 0.21] },
      { document: 6, x: 428, values: [-0.42, 0.19, -0.26, 0.07] }
    ];
    const cellColors = ["#eaf0f7", "#d1dff0", "#9bb8df", "#5d85bb", "#2455a4"];
    const weights = [[0.3, 0.3, 0.4, 0, 0, 0], [0, 0, 0, 0.4, 0.3, 0.3], [0, 0.5, 0, 0, 0.5, 0]];
    const centers = positions.map(([x, y]) => [x + 26, y + 35]);
    const anchors = weights.map((row) => [0, 1].map((axis) => row.reduce((sum, weight, document) => sum + weight * centers[document][axis], 0)));
    const placementPosition = ([x, y]) => [520 + (x - 54) * 1.75, 398 + (y - 73) * 0.78];
    const placementPoints = centers.slice(0, 3).map(placementPosition);
    const placementAnchor = placementPosition(anchors[0]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "source-pipeline",
        "data-step": step.value,
        "aria-label": "Source-guided layout: two routes into a shared document space"
      }, [
        createBaseVNode("header", _hoisted_2, [
          createBaseVNode(
            "h1",
            {
              style: normalizeStyle({ viewTransitionName: sharedActive.value ? "spatial-layout-title" : "none" })
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
          (openBlock(), createElementBlock("svg", _hoisted_3, [
            createBaseVNode("defs", null, [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(["document", "summary", "neutral"], (tone) => {
                  return createBaseVNode("marker", {
                    id: `${markerPrefix.value}-${tone}`,
                    key: tone,
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "10",
                    markerHeight: "10",
                    orient: "auto",
                    markerUnits: "userSpaceOnUse"
                  }, [
                    createBaseVNode(
                      "path",
                      {
                        d: "M1 1 L7 4 L1 7",
                        class: normalizeClass(["arrow-tip", `${tone}-route`])
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ], 8, _hoisted_4);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            createCommentVNode(" Two aligned routes, with a larger shared map as the result. "),
            _cache[29] || (_cache[29] = createBaseVNode(
              "text",
              {
                x: "0",
                y: "62",
                class: "input-title"
              },
              "Source documents",
              -1
              /* CACHED */
            )),
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(6, (document) => {
                return createBaseVNode("g", {
                  key: document,
                  transform: `translate(${12 + (document - 1) % 3 * 59} ${102 + Math.floor((document - 1) / 3) * 78})`
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode(
                    "rect",
                    {
                      width: "46",
                      height: "64",
                      rx: "3",
                      class: "document"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "text",
                    _hoisted_6,
                    "D" + toDisplayString(document),
                    1
                    /* TEXT */
                  ),
                  _cache[2] || (_cache[2] = createBaseVNode(
                    "path",
                    {
                      d: "M8 35 H38 M8 44 H38 M8 53 H29",
                      class: "document-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  ))
                ], 8, _hoisted_5);
              }),
              64
              /* STABLE_FRAGMENT */
            )),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 1 }]),
              "aria-hidden": step.value < 1,
              "data-stage": "vectors"
            }, [
              _cache[6] || (_cache[6] = createBaseVNode(
                "text",
                {
                  x: "345",
                  y: "62",
                  class: "stage-title"
                },
                "Document vectors",
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M193 178 H228",
                class: "route document-route",
                "marker-end": `url(#${markerPrefix.value}-document)`
              }, null, 8, _hoisted_8),
              createBaseVNode("g", _hoisted_9, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(vectors, (vector) => {
                    return createBaseVNode("g", {
                      key: vector.document,
                      transform: `translate(${vector.x} 0)`
                    }, [
                      createBaseVNode(
                        "text",
                        _hoisted_11,
                        "D" + toDisplayString(vector.document),
                        1
                        /* TEXT */
                      ),
                      _cache[3] || (_cache[3] = createBaseVNode(
                        "path",
                        {
                          d: "M-20 117 H-27 V247 H-20 M20 117 H27 V247 H20",
                          class: "vector-bracket"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(vector.values, (value, dimension) => {
                          return openBlock(), createElementBlock("text", {
                            key: dimension,
                            x: "0",
                            y: 137 + (dimension === 3 ? 4 : dimension) * 25,
                            class: "vector-value"
                          }, toDisplayString(value.toFixed(2)), 9, _hoisted_12);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      _cache[4] || (_cache[4] = createBaseVNode(
                        "text",
                        {
                          x: "0",
                          y: "212",
                          class: "vector-value"
                        },
                        "⋮",
                        -1
                        /* CACHED */
                      ))
                    ], 8, _hoisted_10);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                )),
                _cache[5] || (_cache[5] = createBaseVNode(
                  "text",
                  {
                    x: "383",
                    y: "184",
                    class: "vector-value"
                  },
                  "…",
                  -1
                  /* CACHED */
                ))
              ]),
              _cache[7] || (_cache[7] = createBaseVNode(
                "text",
                {
                  x: "345",
                  y: "275",
                  class: "detail"
                },
                "Illustrative embeddings",
                -1
                /* CACHED */
              ))
            ], 10, _hoisted_7),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 2 }]),
              "aria-hidden": step.value < 2,
              "data-stage": "projection"
            }, [
              _cache[9] || (_cache[9] = createBaseVNode(
                "text",
                {
                  x: "600",
                  y: "62",
                  class: "stage-title"
                },
                "UMAP projection",
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M460 178 H492",
                class: "route document-route",
                "marker-end": `url(#${markerPrefix.value}-document)`
              }, null, 8, _hoisted_14),
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(centers), (center, document) => {
                  return openBlock(), createElementBlock("g", {
                    key: document,
                    transform: `translate(${502 + center[0] * 0.55} ${90 + center[1] * 0.55})`
                  }, [
                    _cache[8] || (_cache[8] = createBaseVNode(
                      "circle",
                      {
                        r: "6",
                        class: "projection-point"
                      },
                      null,
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "text",
                      _hoisted_16,
                      "D" + toDisplayString(document + 1),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_15);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              _cache[10] || (_cache[10] = createBaseVNode(
                "text",
                {
                  x: "600",
                  y: "275",
                  class: "detail"
                },
                "Document positions",
                -1
                /* CACHED */
              ))
            ], 10, _hoisted_13),
            createCommentVNode(" These secondary connections supply inputs to summary placement. "),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 3 }]),
              "aria-hidden": step.value < 3,
              "data-stage": "contributions"
            }, [
              createBaseVNode("path", {
                d: "M94 255 V300 Q94 312 106 312 H334 Q346 312 346 324 V334",
                class: "source-input",
                "marker-end": `url(#${markerPrefix.value}-neutral)`
              }, null, 8, _hoisted_18),
              _cache[13] || (_cache[13] = createBaseVNode(
                "text",
                {
                  x: "215",
                  y: "302",
                  class: "dependency-label"
                },
                "Source sentences",
                -1
                /* CACHED */
              )),
              _cache[14] || (_cache[14] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "361",
                  class: "input-title"
                },
                "Summary sentences",
                -1
                /* CACHED */
              )),
              _cache[15] || (_cache[15] = createBaseVNode(
                "text",
                {
                  x: "345",
                  y: "361",
                  class: "stage-title"
                },
                "Contribution weights",
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M193 450 H228",
                class: "route summary-route",
                "marker-end": `url(#${markerPrefix.value}-summary)`
              }, null, 8, _hoisted_19),
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(3, (sentence) => {
                  return createBaseVNode("g", {
                    key: sentence,
                    transform: `translate(12 ${398 + (sentence - 1) * 49})`
                  }, [
                    _cache[11] || (_cache[11] = createBaseVNode(
                      "circle",
                      {
                        cx: "6",
                        cy: "6",
                        r: "6",
                        class: "sentence-anchor"
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
                    _cache[12] || (_cache[12] = createBaseVNode(
                      "path",
                      {
                        d: "M60 0 H162 M60 11 H162 M60 22 H137",
                        class: "sentence-lines"
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
              createBaseVNode("g", _hoisted_22, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(6, (document) => {
                    return createBaseVNode("text", {
                      key: document,
                      x: 282 + (document - 1) * 30,
                      y: "394",
                      class: "matrix-id",
                      "text-anchor": "middle"
                    }, "D" + toDisplayString(document), 9, _hoisted_23);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                )),
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList(weights, (row, sentence) => {
                    return createBaseVNode("g", {
                      key: sentence,
                      transform: `translate(241 ${406 + sentence * 35})`
                    }, [
                      createBaseVNode(
                        "text",
                        _hoisted_25,
                        "S" + toDisplayString(sentence + 1),
                        1
                        /* TEXT */
                      ),
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(row, (weight, document) => {
                          return openBlock(), createElementBlock("rect", {
                            key: document,
                            x: 29 + document * 30,
                            width: "24",
                            height: "26",
                            rx: "2",
                            fill: cellColors[Math.round(weight * 8)]
                          }, null, 8, _hoisted_26);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 8, _hoisted_24);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _cache[16] || (_cache[16] = createBaseVNode(
                "text",
                {
                  x: "345",
                  y: "545",
                  class: "detail"
                },
                "Normalized similarities",
                -1
                /* CACHED */
              ))
            ], 10, _hoisted_17),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 4 }]),
              "aria-hidden": step.value < 4,
              "data-stage": "placement"
            }, [
              _cache[17] || (_cache[17] = createBaseVNode(
                "text",
                {
                  x: "600",
                  y: "361",
                  class: "stage-title"
                },
                "Weighted placement",
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M600 289 V334",
                class: "source-input",
                "marker-end": `url(#${markerPrefix.value}-neutral)`
              }, null, 8, _hoisted_28),
              createBaseVNode("path", {
                d: "M460 450 H492",
                class: "route summary-route",
                "marker-end": `url(#${markerPrefix.value}-summary)`
              }, null, 8, _hoisted_29),
              createBaseVNode("g", _hoisted_30, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(unref(placementPoints), (point, document) => {
                    return openBlock(), createElementBlock("path", {
                      key: document,
                      d: `M${point[0]} ${point[1]} L${unref(placementAnchor)[0]} ${unref(placementAnchor)[1]}`,
                      class: "contribution-line",
                      "stroke-width": weights[0][document] * 5
                    }, null, 8, _hoisted_31);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(unref(placementPoints), (point, document) => {
                    return openBlock(), createElementBlock("g", { key: document }, [
                      createBaseVNode("circle", {
                        cx: point[0],
                        cy: point[1],
                        r: "5.5",
                        class: "projection-point"
                      }, null, 8, _hoisted_32),
                      createBaseVNode("text", {
                        x: point[0],
                        y: point[1] + (document === 2 ? 23 : -14),
                        "text-anchor": "middle",
                        class: "small-id"
                      }, "D" + toDisplayString(document + 1), 9, _hoisted_33)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                createBaseVNode("circle", {
                  cx: unref(placementAnchor)[0],
                  cy: unref(placementAnchor)[1],
                  r: "8",
                  class: "sentence-anchor"
                }, null, 8, _hoisted_34),
                createBaseVNode("text", {
                  x: unref(placementAnchor)[0] + 15,
                  y: unref(placementAnchor)[1] + 6,
                  class: "anchor-id"
                }, "S1", 8, _hoisted_35)
              ]),
              _cache[18] || (_cache[18] = createBaseVNode(
                "text",
                {
                  x: "600",
                  y: "545",
                  class: "detail"
                },
                "Weighted mean position",
                -1
                /* CACHED */
              ))
            ], 10, _hoisted_27),
            createBaseVNode("g", {
              class: normalizeClass(["pipeline-stage", { revealed: step.value >= 5 }]),
              "aria-hidden": step.value < 5,
              "data-stage": "workspace"
            }, [
              _cache[23] || (_cache[23] = createBaseVNode(
                "text",
                {
                  x: "980",
                  y: "62",
                  class: "output-title"
                },
                "Shared document space",
                -1
                /* CACHED */
              )),
              _cache[24] || (_cache[24] = createBaseVNode(
                "path",
                {
                  d: "M714 178 H751 Q764 178 764 191 V304",
                  class: "route document-route"
                },
                null,
                -1
                /* CACHED */
              )),
              _cache[25] || (_cache[25] = createBaseVNode(
                "path",
                {
                  d: "M714 450 H751 Q764 450 764 437 V304",
                  class: "route summary-route"
                },
                null,
                -1
                /* CACHED */
              )),
              _cache[26] || (_cache[26] = createBaseVNode(
                "circle",
                {
                  cx: "764",
                  cy: "304",
                  r: "3",
                  class: "merge-point"
                },
                null,
                -1
                /* CACHED */
              )),
              createBaseVNode("path", {
                d: "M764 304 H799",
                class: "route neutral-route",
                "marker-end": `url(#${markerPrefix.value}-neutral)`
              }, null, 8, _hoisted_37),
              createCommentVNode(" A shared canvas with document cards and summary anchors. "),
              (openBlock(), createElementBlock(
                "svg",
                {
                  x: "810",
                  y: "96",
                  width: "342",
                  height: "420",
                  viewBox: "0 0 342 420",
                  role: "img",
                  "aria-label": "The shared map contains six document cards and three orange summary anchors. S1 and S2 lie within their contributing neighborhoods; S3 lies between equally contributing D2 and D5.",
                  style: normalizeStyle({ viewTransitionName: sharedActive.value && step.value >= 5 ? "spatial-source-layout" : "none" })
                },
                [
                  _cache[22] || (_cache[22] = createBaseVNode(
                    "rect",
                    {
                      x: "0.5",
                      y: "0.5",
                      width: "341",
                      height: "419",
                      rx: "8",
                      class: "map-surface"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode("g", _hoisted_38, [
                    (openBlock(), createElementBlock(
                      Fragment,
                      null,
                      renderList(positions, (position, document) => {
                        return createBaseVNode("g", {
                          key: document,
                          transform: `translate(${position[0]} ${position[1]})`
                        }, [
                          _cache[19] || (_cache[19] = createBaseVNode(
                            "rect",
                            {
                              width: "52",
                              height: "70",
                              rx: "3",
                              class: "document"
                            },
                            null,
                            -1
                            /* CACHED */
                          )),
                          createBaseVNode(
                            "text",
                            _hoisted_40,
                            "D" + toDisplayString(document + 1),
                            1
                            /* TEXT */
                          ),
                          _cache[20] || (_cache[20] = createBaseVNode(
                            "path",
                            {
                              d: "M8 36 H44 M8 46 H44 M8 56 H34",
                              class: "document-lines"
                            },
                            null,
                            -1
                            /* CACHED */
                          ))
                        ], 8, _hoisted_39);
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    )),
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(unref(anchors), (anchor, sentence) => {
                        return openBlock(), createElementBlock("g", {
                          key: sentence,
                          transform: `translate(${anchor[0]} ${anchor[1]})`
                        }, [
                          _cache[21] || (_cache[21] = createBaseVNode(
                            "circle",
                            {
                              r: "8",
                              class: "sentence-anchor"
                            },
                            null,
                            -1
                            /* CACHED */
                          )),
                          createBaseVNode("text", {
                            x: sentence === 0 ? 13 : -14,
                            y: "6",
                            "text-anchor": sentence === 0 ? "start" : "end",
                            class: "anchor-id"
                          }, "S" + toDisplayString(sentence + 1), 9, _hoisted_42)
                        ], 8, _hoisted_41);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ],
                4
                /* STYLE */
              )),
              _cache[27] || (_cache[27] = createBaseVNode(
                "circle",
                {
                  cx: "841",
                  cy: "539",
                  r: "6",
                  class: "sentence-anchor"
                },
                null,
                -1
                /* CACHED */
              )),
              _cache[28] || (_cache[28] = createBaseVNode(
                "text",
                {
                  x: "859",
                  y: "545",
                  class: "map-legend"
                },
                "Summary sentence anchors",
                -1
                /* CACHED */
              ))
            ], 10, _hoisted_36)
          ]))
        ])
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e3115638"]]);
const _sfc_main = {
  __name: "slides.md__slidev_8",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SourceLayoutPipeline = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 7))),
        {
          default: withCtx(() => [
            createVNode(_component_SourceLayoutPipeline)
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
