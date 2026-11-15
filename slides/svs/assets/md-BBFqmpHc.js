import { o as openBlock, e as createElementBlock, g as createBaseVNode, F as Fragment, al as renderList, n as normalizeClass, t as toDisplayString, an as createTextVNode, aH as createStaticVNode, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = ["data-step"];
const _hoisted_2 = { class: "takeaway-list" };
const _hoisted_3 = { class: "takeaway-heading" };
const _hoisted_4 = { class: "number" };
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden", "inert"];
const _hoisted_7 = { class: "takeaway-copy" };
const _hoisted_8 = {
  key: 0,
  viewBox: "0 0 760 230",
  role: "img",
  "aria-label": "Spatial organization helps find relevant documents; provenance traces evidence to supported, contradicted, and insufficiently grounded summary claims. This is a schematic."
};
const _hoisted_9 = ["transform"];
const _hoisted_10 = {
  key: 1,
  viewBox: "0 0 760 230",
  role: "img",
  "aria-label": "Source-guided places semantically similar documents near one another, with orange summary anchors. Summary-guided arranges the same documents by relevance horizontally and summary order vertically, at continuous positions rather than one row per sentence. Schematic only."
};
const _hoisted_11 = ["transform"];
const _hoisted_12 = {
  x: "6",
  y: "17",
  class: "doc-id"
};
const _hoisted_13 = ["transform"];
const _hoisted_14 = {
  x: "6",
  y: "17",
  class: "doc-id"
};
const _hoisted_15 = {
  key: 2,
  viewBox: "0 0 760 230",
  role: "img",
  "aria-label": "Proposed future workflow: select, move, or group source documents to guide an LLM revision; inspect the revised summary in the same workspace and verify again. Not an implemented feature."
};
const _sfc_main$1 = {
  __name: "Takeaways",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const step = computed(() => Math.max(0, Math.min(3, $clicks.value)));
    const printSummary = computed(() => isPrintMode.value && !isPrintWithClicks.value);
    const takeaways = [
      {
        title: "Combine relevance and consistency verification.",
        summary: "Spatial organization + inspectable provenance.",
        detail: "Spatial organization helps locate relevant sources and coverage gaps. Provenance connects each claim to evidence we can inspect."
      },
      {
        title: "Organize sources around the summary.",
        summary: "Make relevance and summary order explicit.",
        detail: "Source-guided maps semantic similarity. Summary-guided organizes documents by relevance to the summary and alignment with its sentence order."
      },
      {
        title: "Future work: semantic interaction for summary revision.",
        summary: "Use document interactions to guide LLM revisions.",
        detail: "Moving, grouping, or selecting documents could express the desired emphasis, guide an LLM revision, and lead to another verification pass."
      }
    ];
    const sourcePositions = [[24, 60], [76, 75], [43, 128], [185, 55], [238, 91], [202, 134]];
    const summaryPositions = [[452, 57], [508, 73], [478, 127], [625, 54], [568, 111], [652, 139]];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["svs-slide takeaway-steps", { "print-summary": printSummary.value }]),
        "data-step": step.value,
        "aria-label": "Three project takeaways"
      }, [
        _cache[16] || (_cache[16] = createBaseVNode(
          "h1",
          null,
          "Takeaways",
          -1
          /* CACHED */
        )),
        createBaseVNode("ol", _hoisted_2, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(takeaways, (takeaway, index) => {
              return createBaseVNode(
                "li",
                {
                  key: takeaway.title,
                  class: normalizeClass(["takeaway", { expanded: step.value === index + 1 || printSummary.value }])
                },
                [
                  createBaseVNode("h2", _hoisted_3, [
                    createBaseVNode(
                      "span",
                      _hoisted_4,
                      toDisplayString(index + 1),
                      1
                      /* TEXT */
                    ),
                    createTextVNode(
                      toDisplayString(takeaway.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  createBaseVNode("p", {
                    class: "overview-copy",
                    "aria-hidden": step.value !== 0 || printSummary.value
                  }, toDisplayString(takeaway.summary), 9, _hoisted_5),
                  createBaseVNode("div", {
                    class: "takeaway-detail",
                    "aria-hidden": step.value !== index + 1 && !printSummary.value,
                    inert: step.value !== index + 1 && !printSummary.value
                  }, [
                    createBaseVNode(
                      "p",
                      _hoisted_7,
                      toDisplayString(takeaway.detail),
                      1
                      /* TEXT */
                    ),
                    index === 0 ? (openBlock(), createElementBlock("svg", _hoisted_8, [
                      _cache[1] || (_cache[1] = createBaseVNode(
                        "text",
                        {
                          x: "8",
                          y: "25",
                          class: "diagram-title relevance"
                        },
                        "Find relevant sources",
                        -1
                        /* CACHED */
                      )),
                      _cache[2] || (_cache[2] = createBaseVNode(
                        "rect",
                        {
                          x: "8",
                          y: "46",
                          width: "275",
                          height: "146",
                          rx: "3",
                          class: "canvas"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList([[28, 65], [99, 91], [179, 62], [207, 132]], (position, i) => {
                          return createBaseVNode("g", {
                            key: i,
                            transform: `translate(${position[0]} ${position[1]})`
                          }, [
                            createBaseVNode(
                              "rect",
                              {
                                width: "43",
                                height: "49",
                                rx: "2",
                                class: normalizeClass(["document", { selected: i === 1 }])
                              },
                              null,
                              2
                              /* CLASS */
                            ),
                            _cache[0] || (_cache[0] = createBaseVNode(
                              "path",
                              {
                                d: "M8 13 H35 M8 23 H35 M8 33 H28",
                                class: "doc-lines"
                              },
                              null,
                              -1
                              /* CACHED */
                            ))
                          ], 8, _hoisted_9);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      )),
                      _cache[3] || (_cache[3] = createStaticVNode('<rect x="29" y="131" width="44" height="48" rx="2" class="coverage-document" data-v-b254e5ab></rect><path d="M38 143 H65 M38 153 H65 M38 163 H57" class="doc-lines" data-v-b254e5ab></path><text x="8" y="219" class="diagram-note" data-v-b254e5ab>Relevance + coverage</text><text x="370" y="91" text-anchor="middle" class="diagram-note" data-v-b254e5ab>Trace evidence</text><path d="M306 116 H435 M425 106 L435 116 L425 126" class="arrow" data-v-b254e5ab></path><text x="464" y="25" class="diagram-title consistency" data-v-b254e5ab>Inspect summary claims</text><rect x="464" y="46" width="286" height="146" rx="3" class="canvas" data-v-b254e5ab></rect><rect x="478" y="59" width="258" height="32" rx="2" class="support-fill" data-v-b254e5ab></rect><path d="M490 74 L496 80 L507 67" class="support-mark" data-v-b254e5ab></path><text x="521" y="81" class="claim-label" data-v-b254e5ab>Supported</text><rect x="478" y="103" width="258" height="32" rx="2" class="contradiction-fill" data-v-b254e5ab></rect><path d="M491 112 L504 125 M504 112 L491 125" class="contradiction-mark" data-v-b254e5ab></path><text x="521" y="125" class="claim-label" data-v-b254e5ab>Contradicted</text><rect x="478" y="147" width="258" height="32" rx="2" class="insufficient-fill" data-v-b254e5ab></rect><text x="498" y="170" text-anchor="middle" class="claim-label" data-v-b254e5ab>?</text><text x="521" y="170" class="claim-label" data-v-b254e5ab>Insufficient evidence</text>', 16))
                    ])) : index === 1 ? (openBlock(), createElementBlock("svg", _hoisted_10, [
                      _cache[8] || (_cache[8] = createBaseVNode(
                        "text",
                        {
                          x: "8",
                          y: "25",
                          class: "diagram-title"
                        },
                        "Source-guided",
                        -1
                        /* CACHED */
                      )),
                      _cache[9] || (_cache[9] = createBaseVNode(
                        "rect",
                        {
                          x: "8",
                          y: "42",
                          width: "302",
                          height: "144",
                          rx: "3",
                          class: "canvas"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(sourcePositions, (position, i) => {
                          return createBaseVNode("g", {
                            key: i,
                            transform: `translate(${position[0]} ${position[1]})`
                          }, [
                            _cache[4] || (_cache[4] = createBaseVNode(
                              "rect",
                              {
                                width: "32",
                                height: "38",
                                rx: "2",
                                class: "document"
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            createBaseVNode(
                              "text",
                              _hoisted_12,
                              "D" + toDisplayString(i + 1),
                              1
                              /* TEXT */
                            ),
                            _cache[5] || (_cache[5] = createBaseVNode(
                              "path",
                              {
                                d: "M6 25 H26 M6 31 H21",
                                class: "doc-lines"
                              },
                              null,
                              -1
                              /* CACHED */
                            ))
                          ], 8, _hoisted_11);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      )),
                      _cache[10] || (_cache[10] = createStaticVNode('<circle cx="126" cy="99" r="6" class="summary-anchor" data-v-b254e5ab></circle><circle cx="271" cy="156" r="6" class="summary-anchor" data-v-b254e5ab></circle><circle cx="15" cy="213" r="5" class="summary-anchor" data-v-b254e5ab></circle><text x="30" y="219" class="diagram-note" data-v-b254e5ab>Summary anchors in source space</text><path d="M374 8 V224" class="divider" data-v-b254e5ab></path><text x="428" y="25" class="diagram-title" data-v-b254e5ab>Summary-guided</text><rect x="428" y="42" width="280" height="144" rx="3" class="canvas" data-v-b254e5ab></rect>', 7)),
                      (openBlock(), createElementBlock(
                        Fragment,
                        null,
                        renderList(summaryPositions, (position, i) => {
                          return createBaseVNode("g", {
                            key: i,
                            transform: `translate(${position[0]} ${position[1]})`
                          }, [
                            _cache[6] || (_cache[6] = createBaseVNode(
                              "rect",
                              {
                                width: "32",
                                height: "38",
                                rx: "2",
                                class: "document"
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            createBaseVNode(
                              "text",
                              _hoisted_14,
                              "D" + toDisplayString(i + 1),
                              1
                              /* TEXT */
                            ),
                            _cache[7] || (_cache[7] = createBaseVNode(
                              "path",
                              {
                                d: "M6 25 H26 M6 31 H21",
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
                      _cache[11] || (_cache[11] = createBaseVNode(
                        "path",
                        {
                          d: "M439 199 H700 M448 193 L439 199 L448 205 M725 51 V180 M719 172 L725 180 L731 172",
                          class: "arrow"
                        },
                        null,
                        -1
                        /* CACHED */
                      )),
                      _cache[12] || (_cache[12] = createBaseVNode(
                        "text",
                        {
                          x: "428",
                          y: "224",
                          class: "diagram-note"
                        },
                        "Higher relevance",
                        -1
                        /* CACHED */
                      )),
                      _cache[13] || (_cache[13] = createBaseVNode(
                        "text",
                        {
                          x: "708",
                          y: "224",
                          "text-anchor": "end",
                          class: "diagram-note"
                        },
                        "Lower",
                        -1
                        /* CACHED */
                      )),
                      _cache[14] || (_cache[14] = createBaseVNode(
                        "text",
                        {
                          transform: "translate(744 117) rotate(90)",
                          "text-anchor": "middle",
                          class: "diagram-note"
                        },
                        "Summary order",
                        -1
                        /* CACHED */
                      ))
                    ])) : (openBlock(), createElementBlock("svg", _hoisted_15, [..._cache[15] || (_cache[15] = [
                      createStaticVNode('<text x="8" y="25" class="diagram-title" data-v-b254e5ab>Select / move documents</text><rect x="8" y="48" width="214" height="136" rx="3" class="canvas" data-v-b254e5ab></rect><rect x="26" y="67" width="42" height="50" rx="2" class="ghost-document" data-v-b254e5ab></rect><path d="M78 91 H111 M102 84 L111 91 L102 98" class="interaction-arrow" data-v-b254e5ab></path><rect x="129" y="70" width="42" height="50" rx="2" class="document selected" data-v-b254e5ab></rect><rect x="68" y="127" width="42" height="43" rx="2" class="document" data-v-b254e5ab></rect><rect x="155" y="130" width="42" height="43" rx="2" class="document" data-v-b254e5ab></rect><path d="M138 84 H162 M138 95 H162 M138 106 H155 M78 139 H100 M78 150 H96 M165 142 H187 M165 153 H183" class="doc-lines" data-v-b254e5ab></path><path d="M165 112 L165 136 L172 129 L181 137 L185 132 L176 125 L186 123 Z" class="cursor" data-v-b254e5ab></path><path d="M244 115 H301 M291 105 L301 115 L291 125" class="arrow" data-v-b254e5ab></path><rect x="321" y="67" width="149" height="98" rx="3" class="canvas" data-v-b254e5ab></rect><text x="395" y="108" text-anchor="middle" class="model-label" data-v-b254e5ab>LLM</text><text x="395" y="138" text-anchor="middle" class="diagram-note" data-v-b254e5ab>Revise</text><path d="M490 115 H540 M530 105 L540 115 L530 125" class="arrow" data-v-b254e5ab></path><text x="557" y="25" class="diagram-title" data-v-b254e5ab>Revised summary</text><rect x="557" y="48" width="193" height="136" rx="3" class="canvas" data-v-b254e5ab></rect><path d="M576 73 H727 M576 89 H710 M576 142 H727 M576 158 H698" class="doc-lines summary-lines" data-v-b254e5ab></path><rect x="573" y="103" width="157" height="25" rx="2" class="revised-line" data-v-b254e5ab></rect><path d="M582 115 H719" class="interaction-arrow" data-v-b254e5ab></path><path d="M650 194 V222 H111 V194 M104 202 L111 194 L118 202" class="arrow" data-v-b254e5ab></path><text x="380" y="209" text-anchor="middle" class="diagram-note" data-v-b254e5ab>Verify again</text>', 21)
                    ])]))
                  ], 8, _hoisted_6)
                ],
                2
                /* CLASS */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ], 10, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b254e5ab"]]);
const _sfc_main = {
  __name: "slides.md__slidev_22",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_Takeaways = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 21))),
        {
          default: withCtx(() => [
            createVNode(_component_Takeaways)
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
