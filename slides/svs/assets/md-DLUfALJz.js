import { o as openBlock, e as createElementBlock, g as createBaseVNode, n as normalizeClass, F as Fragment, al as renderList, t as toDisplayString, j as createCommentVNode, an as createTextVNode, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = ["data-step"];
const _hoisted_2 = { class: "body gap-challenges" };
const _hoisted_3 = { class: "gap-relevance" };
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["transform"];
const _hoisted_6 = {
  x: "14",
  y: "30",
  class: "doc-id"
};
const _hoisted_7 = {
  key: 0,
  d: "M14 86 H136",
  class: "relevant-line"
};
const _hoisted_8 = ["aria-hidden"];
const _hoisted_9 = { class: "gap-consistency" };
const _hoisted_10 = ["aria-hidden"];
const _hoisted_11 = ["aria-hidden"];
const _hoisted_12 = ["aria-hidden"];
const _hoisted_13 = ["aria-hidden"];
const _sfc_main$1 = {
  __name: "VerificationGap",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const step = computed(() => isPrintMode.value && !isPrintWithClicks.value ? 6 : Math.max(0, Math.min(6, $clicks.value)));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "svs-slide verification-gap",
        "data-step": step.value
      }, [
        _cache[13] || (_cache[13] = createBaseVNode(
          "header",
          { class: "existing-method-header" },
          [
            createBaseVNode("h1", null, "Problem")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("section", _hoisted_3, [
            _cache[3] || (_cache[3] = createBaseVNode(
              "h2",
              null,
              "Challenge 1: Relevance",
              -1
              /* CACHED */
            )),
            (openBlock(), createElementBlock("svg", {
              class: normalizeClass(["reveal", { revealed: step.value >= 1 }]),
              "aria-hidden": step.value < 1,
              viewBox: "0 0 520 420",
              role: "img",
              "aria-label": "Conceptual example: some sources are represented in the summary, while others are not included. Blue marks included source content; amber marks omitted source content."
            }, [
              _cache[1] || (_cache[1] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "25",
                  class: "diagram-label"
                },
                "Source collection",
                -1
                /* CACHED */
              )),
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(6, (document) => {
                  return createBaseVNode("g", {
                    key: document,
                    transform: `translate(${(document - 1) % 3 * 180} ${52 + Math.floor((document - 1) / 3) * 166})`
                  }, [
                    createBaseVNode(
                      "rect",
                      {
                        width: "150",
                        height: "138",
                        rx: "3",
                        class: normalizeClass(["document", { relevant: document % 2 === 1, uncovered: document % 2 === 0 && step.value >= 2 }])
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    createBaseVNode(
                      "text",
                      _hoisted_6,
                      "Source " + toDisplayString(document),
                      1
                      /* TEXT */
                    ),
                    _cache[0] || (_cache[0] = createBaseVNode(
                      "path",
                      {
                        d: "M14 54 H136 M14 70 H136 M14 86 H136 M14 102 H136 M14 118 H102",
                        class: "text-lines"
                      },
                      null,
                      -1
                      /* CACHED */
                    )),
                    document % 2 === 1 ? (openBlock(), createElementBlock("path", _hoisted_7)) : createCommentVNode("v-if", true)
                  ], 8, _hoisted_5);
                }),
                64
                /* STABLE_FRAGMENT */
              )),
              _cache[2] || (_cache[2] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "400",
                  class: "relevance-key"
                },
                "Included in summary",
                -1
                /* CACHED */
              )),
              createBaseVNode("text", {
                x: "320",
                y: "400",
                class: normalizeClass(["coverage-key reveal", { revealed: step.value >= 2 }]),
                "aria-hidden": step.value < 2
              }, "Not included", 10, _hoisted_8)
            ], 10, _hoisted_4))
          ]),
          createBaseVNode("section", _hoisted_9, [
            _cache[12] || (_cache[12] = createBaseVNode(
              "h2",
              null,
              "Challenge 2: Consistency",
              -1
              /* CACHED */
            )),
            (openBlock(), createElementBlock("svg", {
              class: normalizeClass(["reveal", { revealed: step.value >= 3 }]),
              "aria-hidden": step.value < 3,
              viewBox: "0 0 520 420",
              role: "img",
              "aria-label": "Conceptual summary with three claims: one is supported by sources, one is contradicted, and one has no supporting evidence found. The claims in the summary are what must be verified."
            }, [
              _cache[10] || (_cache[10] = createBaseVNode(
                "text",
                {
                  x: "0",
                  y: "25",
                  class: "diagram-label"
                },
                "Summary",
                -1
                /* CACHED */
              )),
              _cache[11] || (_cache[11] = createBaseVNode(
                "rect",
                {
                  x: "0",
                  y: "52",
                  width: "230",
                  height: "354",
                  rx: "3",
                  class: "summary-document"
                },
                null,
                -1
                /* CACHED */
              )),
              createBaseVNode(
                "g",
                {
                  class: normalizeClass(["summary-claim", { supported: step.value >= 4 }])
                },
                [..._cache[4] || (_cache[4] = [
                  createBaseVNode(
                    "rect",
                    {
                      x: "14",
                      y: "68",
                      width: "202",
                      height: "98",
                      rx: "3"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "text",
                    {
                      x: "28",
                      y: "99",
                      class: "claim-label"
                    },
                    "Claim 1",
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "path",
                    {
                      d: "M28 119 H194 M28 137 H194 M28 155 H164",
                      class: "text-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                2
                /* CLASS */
              ),
              createBaseVNode(
                "g",
                {
                  class: normalizeClass(["summary-claim", { contradicted: step.value >= 5 }])
                },
                [..._cache[5] || (_cache[5] = [
                  createBaseVNode(
                    "rect",
                    {
                      x: "14",
                      y: "182",
                      width: "202",
                      height: "98",
                      rx: "3"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "text",
                    {
                      x: "28",
                      y: "213",
                      class: "claim-label"
                    },
                    "Claim 2",
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "path",
                    {
                      d: "M28 233 H194 M28 251 H194 M28 269 H164",
                      class: "text-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                2
                /* CLASS */
              ),
              createBaseVNode(
                "g",
                {
                  class: normalizeClass(["summary-claim", { unsupported: step.value >= 6 }])
                },
                [..._cache[6] || (_cache[6] = [
                  createBaseVNode(
                    "rect",
                    {
                      x: "14",
                      y: "296",
                      width: "202",
                      height: "98",
                      rx: "3"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "text",
                    {
                      x: "28",
                      y: "327",
                      class: "claim-label"
                    },
                    "Claim 3",
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "path",
                    {
                      d: "M28 347 H194 M28 365 H194 M28 383 H164",
                      class: "text-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                2
                /* CLASS */
              ),
              createBaseVNode("g", {
                class: normalizeClass(["support-cue reveal", { revealed: step.value >= 4 }]),
                "aria-hidden": step.value < 4
              }, [..._cache[7] || (_cache[7] = [
                createBaseVNode(
                  "path",
                  {
                    d: "M230 117 H251 M279 117 H302 M257 117 L263 124 L274 110",
                    class: "claim-connection"
                  },
                  null,
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "text",
                  {
                    x: "316",
                    y: "111",
                    class: "judgment-label"
                  },
                  [
                    createTextVNode("Supported"),
                    createBaseVNode("tspan", {
                      x: "316",
                      dy: "29"
                    }, "by sources")
                  ],
                  -1
                  /* CACHED */
                )
              ])], 10, _hoisted_11),
              createBaseVNode("g", {
                class: normalizeClass(["contradiction-cue reveal", { revealed: step.value >= 5 }]),
                "aria-hidden": step.value < 5
              }, [..._cache[8] || (_cache[8] = [
                createBaseVNode(
                  "path",
                  {
                    d: "M230 231 H251 M279 231 H302 M258 224 L272 238 M258 238 L272 224",
                    class: "claim-connection"
                  },
                  null,
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "text",
                  {
                    x: "316",
                    y: "225",
                    class: "judgment-label"
                  },
                  [
                    createTextVNode("Contradicted"),
                    createBaseVNode("tspan", {
                      x: "316",
                      dy: "29"
                    }, "by sources")
                  ],
                  -1
                  /* CACHED */
                )
              ])], 10, _hoisted_12),
              createBaseVNode("g", {
                class: normalizeClass(["no-support-cue reveal", { revealed: step.value >= 6 }]),
                "aria-hidden": step.value < 6
              }, [..._cache[9] || (_cache[9] = [
                createBaseVNode(
                  "path",
                  {
                    d: "M230 345 H302",
                    class: "claim-connection"
                  },
                  null,
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "text",
                  {
                    x: "316",
                    y: "339",
                    class: "judgment-label"
                  },
                  [
                    createTextVNode("No supporting"),
                    createBaseVNode("tspan", {
                      x: "316",
                      dy: "29"
                    }, "evidence found")
                  ],
                  -1
                  /* CACHED */
                )
              ])], 10, _hoisted_13)
            ], 10, _hoisted_10))
          ])
        ])
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-993471e7"]]);
const _sfc_main = {
  __name: "slides.md__slidev_4",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_VerificationGap = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 3))),
        {
          default: withCtx(() => [
            createVNode(_component_VerificationGap)
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
