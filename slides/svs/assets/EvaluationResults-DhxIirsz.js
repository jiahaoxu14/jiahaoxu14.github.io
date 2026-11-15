import { o as openBlock, e as createElementBlock, g as createBaseVNode, t as toDisplayString, F as Fragment, al as renderList, k as normalizeStyle, an as createTextVNode, j as createCommentVNode, z as computed } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0 } from "./01_mode_comparison_panel-DEZ1gi9M.js";
import { u as useSlideContext } from "./slidev/context-NoJkDP_T.js";
import { _ as _export_sfc } from "./index-BenZRoUb.js";
const _imports_1 = "/slides/svs/images/task-results-vs-linear.svg";
const _hoisted_1 = ["data-question", "aria-label"];
const _hoisted_2 = { class: "question" };
const _hoisted_3 = {
  class: "legend",
  "aria-label": "Plot legend"
};
const _hoisted_4 = { class: "plots" };
const _hoisted_5 = ["viewBox", "aria-label"];
const _hoisted_6 = ["id"];
const _hoisted_7 = ["y", "height"];
const _hoisted_8 = ["clip-path"];
const _hoisted_9 = {
  key: 1,
  class: "task-chart"
};
const _hoisted_10 = {
  key: 2,
  class: "experience"
};
const _sfc_main = {
  __name: "EvaluationResults",
  props: { question: { type: Number, required: true } },
  setup(__props) {
    useSlideContext();
    const props = __props;
    const headings = {
      1: {
        question: "Does spatial document organization improve user performance over a Linear baseline for multi-document summary verification?",
        answer: "Both spatial layouts improve accuracy over Linear, with Summary-guided also reducing completion time."
      },
      2: {
        question: "How do Summary-guided and Source-guided layouts differ in supporting different verification tasks?",
        answer: "Summary-guided saves more time on relevance tasks; consistency shows fewer layout effects."
      },
      3: {
        question: "How do users perceive and use the three organization conditions during verification?",
        answer: "Users felt more confident with less effort and valued Summary-guided's relevance cues."
      }
    };
    const heading = computed(() => headings[props.question]);
    const conditions = [
      { name: "Linear", color: "var(--svs-condition-linear)" },
      { name: "Source-guided", color: "var(--svs-condition-source)" },
      { name: "Summary-guided", color: "var(--svs-condition-summary)" }
    ];
    const plots = [
      {
        id: "accuracy",
        top: 165,
        height: 925,
        finding: "Both spatial layouts: 36% higher score",
        description: "Original paper accuracy plot, with 95% confidence intervals. Total score out of 10: Linear 6.33, Source-guided 8.61, Summary-guided 8.61. Both spatial layouts significantly outperform Linear; they do not differ from each other."
      },
      {
        id: "time",
        top: 1188,
        height: 930,
        finding: "Summary-guided: 33% less time",
        description: "Original paper completion-time plot, with 95% confidence intervals. Total minutes: Linear 12.25, Source-guided 10.68, Summary-guided 8.24. Summary-guided is significantly faster than both alternatives."
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "evaluation-results",
        "data-question": __props.question,
        "aria-label": `Evaluation results answering Q${__props.question}`
      }, [
        createBaseVNode("header", null, [
          _cache[0] || (_cache[0] = createBaseVNode(
            "h1",
            null,
            "Evaluation",
            -1
            /* CACHED */
          )),
          createBaseVNode("p", _hoisted_2, [
            createBaseVNode(
              "strong",
              null,
              "Q" + toDisplayString(__props.question),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "span",
              null,
              toDisplayString(heading.value.question),
              1
              /* TEXT */
            )
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.question === 2 ? conditions.slice(1) : conditions, (condition) => {
              return openBlock(), createElementBlock("span", {
                key: condition.name
              }, [
                createBaseVNode(
                  "i",
                  {
                    style: normalizeStyle({ background: condition.color })
                  },
                  null,
                  4
                  /* STYLE */
                ),
                createTextVNode(
                  toDisplayString(condition.name),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        __props.question === 1 ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createBaseVNode("div", _hoisted_4, [
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(plots, (plot) => {
                  return createBaseVNode("figure", {
                    key: plot.id
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      viewBox: `0 ${plot.top} 1490 ${plot.height}`,
                      role: "img",
                      "aria-label": plot.description
                    }, [
                      createBaseVNode("defs", null, [
                        createBaseVNode("clipPath", {
                          id: `evaluation-${plot.id}-crop`
                        }, [
                          createBaseVNode("rect", {
                            x: "0",
                            y: plot.top,
                            width: "1490",
                            height: plot.height
                          }, null, 8, _hoisted_7)
                        ], 8, _hoisted_6)
                      ]),
                      createBaseVNode("image", {
                        href: _imports_0,
                        width: "3220",
                        height: "3160",
                        "clip-path": `url(#evaluation-${plot.id}-crop)`
                      }, null, 8, _hoisted_8)
                    ], 8, _hoisted_5)),
                    createBaseVNode(
                      "figcaption",
                      null,
                      toDisplayString(plot.finding),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _cache[1] || (_cache[1] = createBaseVNode(
              "p",
              { class: "figure-note" },
              "Error bars show 95% confidence intervals.",
              -1
              /* CACHED */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : __props.question === 2 ? (openBlock(), createElementBlock("figure", _hoisted_9, [..._cache[2] || (_cache[2] = [
          createBaseVNode(
            "img",
            {
              src: _imports_1,
              alt: "Grouped horizontal bars showing two descriptive category aggregates covering all ten tasks: Relevance (T1-T7) and Consistency (T8-T10). Values compare Source-guided, then Summary-guided, with Linear. Relevance: accuracy +27.8 and +30.2 percentage points, total time saved +1.97 and +3.92 minutes, confidence +0.83 and +0.85 points. Consistency: accuracy +11.1 and +5.6 percentage points, total time saved -0.40 and +0.09 minutes, confidence +0.06 and +0.24 points. Each participant's accuracy and available confidence responses are averaged within the category; completion times are summed. Condition means weight all 18 participants equally. Categories contain seven and three tasks, so compare total time between layouts within each category. Zero represents Linear. Negative time saved means longer completion time. No error bars or category-level significance tests are shown."
            },
            null,
            -1
            /* CACHED */
          )
        ])])) : __props.question === 3 ? (openBlock(), createElementBlock("div", _hoisted_10, [..._cache[3] || (_cache[3] = [
          createBaseVNode(
            "div",
            { class: "workload-plots" },
            [
              createBaseVNode("figure", null, [
                createBaseVNode("svg", {
                  viewBox: "1630 165 1540 925",
                  role: "img",
                  "aria-label": "Original mental-demand plot with 95% confidence intervals. Mean ratings on a 1-7 scale: Linear 4.11, Source-guided 2.83, Summary-guided 2.17. Lower is better. Both spatial layouts were significantly lower than Linear, and Summary-guided was significantly lower than Source-guided."
                }, [
                  createBaseVNode("defs", null, [
                    createBaseVNode("clipPath", { id: "evaluation-mental-crop" }, [
                      createBaseVNode("rect", {
                        x: "1630",
                        y: "165",
                        width: "1540",
                        height: "925"
                      })
                    ])
                  ]),
                  createBaseVNode("image", {
                    href: _imports_0,
                    width: "3220",
                    height: "3160",
                    "clip-path": "url(#evaluation-mental-crop)"
                  })
                ])
              ]),
              createBaseVNode("figure", null, [
                createBaseVNode("svg", {
                  viewBox: "1630 1188 1540 930",
                  role: "img",
                  "aria-label": "Original physical-demand plot with 95% confidence intervals. Mean ratings on a 1-7 scale: Linear 3.17, Source-guided 2.11, Summary-guided 1.83. Lower is better. Both spatial layouts were significantly lower than Linear; the difference between Source-guided and Summary-guided was not significant."
                }, [
                  createBaseVNode("defs", null, [
                    createBaseVNode("clipPath", { id: "evaluation-physical-crop" }, [
                      createBaseVNode("rect", {
                        x: "1630",
                        y: "1188",
                        width: "1540",
                        height: "930"
                      })
                    ])
                  ]),
                  createBaseVNode("image", {
                    href: _imports_0,
                    width: "3220",
                    height: "3160",
                    "clip-path": "url(#evaluation-physical-crop)"
                  })
                ])
              ])
            ],
            -1
            /* CACHED */
          )
        ])])) : createCommentVNode("v-if", true),
        createBaseVNode("footer", null, [
          createBaseVNode(
            "p",
            null,
            toDisplayString(heading.value.answer),
            1
            /* TEXT */
          )
        ])
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1ded4be"]]);
export {
  __unplugin_components_0 as _
};
