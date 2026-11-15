import { o as openBlock, e as createElementBlock, g as createBaseVNode, t as toDisplayString, F as Fragment, al as renderList, n as normalizeClass, aH as createStaticVNode, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = ["data-step"];
const _hoisted_2 = { class: "method-heading" };
const _hoisted_3 = {
  "aria-live": "polite",
  "aria-atomic": "true"
};
const _hoisted_4 = ["aria-hidden", "aria-label"];
const _hoisted_5 = ["href"];
const _hoisted_6 = {
  key: 0,
  class: "claim-label-explanation"
};
const _hoisted_7 = ["transform"];
const _hoisted_8 = { class: "label-name" };
const _hoisted_9 = {
  y: "52",
  class: "label-definition"
};
const _hoisted_10 = ["dy"];
const _hoisted_11 = {
  key: 1,
  class: "compact-label-key",
  "aria-label": "Claim-level inference judgments based on retrieved source evidence"
};
const _hoisted_12 = ["transform"];
const _hoisted_13 = { class: "label-name" };
const _hoisted_14 = {
  y: "39",
  class: "label-definition"
};
const _hoisted_15 = ["dy"];
const _hoisted_16 = ["d"];
const _hoisted_17 = ["cx", "cy"];
const _hoisted_18 = ["x", "y"];
const _hoisted_19 = ["x", "dy"];
const _hoisted_20 = {
  class: "sr-only",
  "aria-live": "polite",
  "aria-atomic": "true"
};
const _sfc_main$1 = {
  __name: "SummaryProvenance",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const step = computed(() => isPrintMode.value && !isPrintWithClicks.value ? 2 : Math.max(0, Math.min(2, $clicks.value)));
    const claimLabels = [
      { label: "Supports", tone: "support", lines: ["Evidence establishes the full claim."] },
      { label: "Contradicts", tone: "contradiction", lines: ["Evidence refutes a key part of the claim."] },
      { label: "Insufficient evidence", tone: "insufficient", lines: ["Evidence cannot support or contradict", "the full claim."] }
    ];
    const views = [
      {
        mode: "Assess a claim",
        image: "claim-explanation",
        caption: "What needs checking?",
        description: "Actual SVS claim-explanation tutorial state. S4 expands into atomic claims. The AI labels s4_c1 CONTRADICTS and explains the 400 million versus 300 million discrepancy. An editable annotation over the document canvas defines the three claim-level inference judgments: Supports, Contradicts, and Insufficient evidence. The explanation is the textual rationale for the assigned inference judgment. Readers check both the label and rationale against the sources.",
        annotations: [
          { x: 650, y: 435, lines: ["Claim-level", "inference judgment"], path: "M635 444 H585 L128 515", target: [128, 515] },
          { x: 650, y: 730, lines: ["Explanation"], path: "M635 716 H590 L405 630", target: [405, 630] }
        ]
      },
      {
        mode: "Locate evidence",
        image: "connectors",
        caption: "Where is the evidence?",
        description: "Actual SVS connectors-explanation tutorial state, hovering doc_002.txt. The red link connects this source to S4, the same 400 million summary statement. Green links encode support and red links contradiction; width encodes relevance, not certainty. Document card colors summarize inferred evidence relationships at the current overview focus, which differs from the earlier selected-claim focus.",
        annotations: [
          { x: 670, y: 180, lines: ["Links: support / contradiction"], path: "M660 194 H610 V580 H850", target: [850, 580] },
          { x: 1470, y: 200, lines: ["Document color"], path: "M1455 214 H1530 L1490 300", target: [1490, 300] }
        ]
      },
      {
        mode: "Inspect the source",
        image: "evidence-phrases",
        caption: "Does the source support the judgment?",
        description: "Actual SVS document-evidence-bold tutorial state. S4 and its explanation remain beside doc_002.txt. Colored source sentences locate inferred evidence; the native bold-text callout identifies decisive quoted words, including the 300 million target. Hidden-sentence placeholders condense unrelated text. Compare this source with the summary claim of 400 million.",
        annotations: [
          { x: 635, y: 280, lines: ["Colored", "sentences"], path: "M765 290 L828 365", target: [828, 365] }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "summary-provenance",
        "data-step": step.value,
        "aria-label": "Challenge 2: consistency verification through provenance visualization"
      }, [
        createBaseVNode("header", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode(
            "h1",
            null,
            "Method",
            -1
            /* CACHED */
          )),
          _cache[1] || (_cache[1] = createBaseVNode(
            "p",
            { class: "method-challenge consistency" },
            "Challenge 2: Consistency",
            -1
            /* CACHED */
          )),
          createBaseVNode(
            "h2",
            _hoisted_3,
            toDisplayString(views[step.value].mode),
            1
            /* TEXT */
          )
        ]),
        createBaseVNode("figure", null, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(views, (view, index) => {
              return createBaseVNode("svg", {
                key: view.image,
                class: normalizeClass(["tutorial-capture", { visible: step.value === index }]),
                "aria-hidden": step.value !== index,
                viewBox: "0 0 1920 1120",
                role: "img",
                "aria-label": view.description
              }, [
                createBaseVNode("image", {
                  href: `/slides/svs/prototype/provenance/${view.image}.png`,
                  x: "0",
                  y: "120",
                  width: "1920",
                  height: "1000",
                  "aria-hidden": "true"
                }, null, 8, _hoisted_5),
                index === 0 ? (openBlock(), createElementBlock("g", _hoisted_6, [
                  _cache[2] || (_cache[2] = createBaseVNode(
                    "rect",
                    {
                      x: "600",
                      y: "120",
                      width: "1320",
                      height: "1000",
                      class: "legend-surface"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  _cache[3] || (_cache[3] = createBaseVNode(
                    "text",
                    {
                      x: "960",
                      y: "82",
                      "text-anchor": "middle",
                      class: "explanation"
                    },
                    "An LLM judges each atomic claim using retrieved source evidence.",
                    -1
                    /* CACHED */
                  )),
                  _cache[4] || (_cache[4] = createBaseVNode(
                    "text",
                    {
                      x: "1000",
                      y: "255",
                      class: "legend-heading"
                    },
                    "Claim-level inference judgments",
                    -1
                    /* CACHED */
                  )),
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(claimLabels, (label, labelIndex) => {
                      return createBaseVNode("g", {
                        key: label.label,
                        class: normalizeClass(label.tone),
                        transform: `translate(1000 ${390 + labelIndex * 175})`
                      }, [
                        createBaseVNode(
                          "text",
                          _hoisted_8,
                          toDisplayString(label.label),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode("text", _hoisted_9, [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(label.lines, (line, lineIndex) => {
                              return openBlock(), createElementBlock("tspan", {
                                key: line,
                                x: "0",
                                dy: lineIndex ? 42 : 0
                              }, toDisplayString(line), 9, _hoisted_10);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ], 10, _hoisted_7);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  _cache[5] || (_cache[5] = createStaticVNode('<path d="M1000 875 H1830" class="rationale-divider" data-v-e2a6ac55></path><text x="1000" y="925" class="rationale-heading" data-v-e2a6ac55>Explanation</text><text x="1000" y="977" class="label-definition" data-v-e2a6ac55><tspan x="1000" data-v-e2a6ac55>The textual rationale for the assigned</tspan><tspan x="1000" dy="42" data-v-e2a6ac55>inference judgment.</tspan></text>', 3))
                ])) : (openBlock(), createElementBlock("g", _hoisted_11, [
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(claimLabels, (label, labelIndex) => {
                      return createBaseVNode("g", {
                        key: label.label,
                        class: normalizeClass(label.tone),
                        transform: `translate(${40 + labelIndex * 630} 37)`
                      }, [
                        createBaseVNode(
                          "text",
                          _hoisted_13,
                          toDisplayString(label.label),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode("text", _hoisted_14, [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(label.lines, (line, lineIndex) => {
                              return openBlock(), createElementBlock("tspan", {
                                key: line,
                                x: "0",
                                dy: lineIndex ? 30 : 0
                              }, toDisplayString(line), 9, _hoisted_15);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ], 10, _hoisted_12);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(view.annotations, (annotation) => {
                    return openBlock(), createElementBlock("g", {
                      key: annotation.lines[0],
                      class: "visual-annotation",
                      "aria-hidden": "true"
                    }, [
                      createBaseVNode("path", {
                        d: annotation.path,
                        class: "annotation-leader"
                      }, null, 8, _hoisted_16),
                      createBaseVNode("circle", {
                        cx: annotation.target[0],
                        cy: annotation.target[1],
                        r: "5",
                        class: "annotation-target"
                      }, null, 8, _hoisted_17),
                      createBaseVNode("text", {
                        x: annotation.x,
                        y: annotation.y,
                        class: "annotation-label"
                      }, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(annotation.lines, (line, lineIndex) => {
                            return openBlock(), createElementBlock("tspan", {
                              key: line,
                              x: annotation.x,
                              dy: lineIndex ? 38 : 0
                            }, toDisplayString(line), 9, _hoisted_19);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ], 8, _hoisted_18)
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 10, _hoisted_4);
            }),
            64
            /* STABLE_FRAGMENT */
          )),
          createBaseVNode(
            "span",
            _hoisted_20,
            toDisplayString(views[step.value].caption),
            1
            /* TEXT */
          )
        ])
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e2a6ac55"]]);
const _sfc_main = {
  __name: "slides.md__slidev_14",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SummaryProvenance = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 13))),
        {
          default: withCtx(() => [
            createVNode(_component_SummaryProvenance)
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
