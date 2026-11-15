import { o as openBlock, e as createElementBlock, g as createBaseVNode, k as normalizeStyle, F as Fragment, al as renderList, n as normalizeClass, t as toDisplayString, j as createCommentVNode, aH as createStaticVNode, z as computed } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext } from "./slidev/context-NoJkDP_T.js";
const _hoisted_1 = ["data-step", "data-mode"];
const _hoisted_2 = { class: "method-heading" };
const _hoisted_3 = ["aria-hidden", "viewBox", "aria-label"];
const _hoisted_4 = {
  key: 0,
  class: "layout-pipeline",
  "aria-hidden": "true"
};
const _hoisted_5 = ["transform"];
const _hoisted_6 = {
  y: "42",
  class: "pipeline-title"
};
const _hoisted_7 = {
  y: "85",
  class: "pipeline-detail"
};
const _hoisted_8 = {
  key: 0,
  d: "M405 40 H450 M440 30 L450 40 L440 50",
  class: "pipeline-arrow"
};
const _hoisted_9 = ["href"];
const _hoisted_10 = {
  key: 1,
  class: "summary-axes"
};
const _hoisted_11 = {
  key: 2,
  transform: "translate(0 190)",
  class: "sentence-distance"
};
const _hoisted_12 = ["id"];
const _hoisted_13 = ["mask"];
const _hoisted_14 = {
  key: 3,
  x: "620",
  y: "160",
  class: "explanation"
};
const _hoisted_15 = {
  class: "sr-only",
  "aria-live": "polite",
  "aria-atomic": "true"
};
const _sfc_main = {
  __name: "SummaryVerificationMethod",
  props: { mode: { type: String, default: "source" }, showPipeline: { type: Boolean, default: true } },
  setup(__props) {
    const props = __props;
    const { $clicks, $page, $renderContext } = useSlideContext();
    const { currentPage, isPrintMode, isPrintWithClicks } = useNav();
    const step = computed(() => isPrintMode.value && !isPrintWithClicks.value ? 0 : Math.max(0, Math.min(views.value.length - 1, $clicks.value)));
    const sharedActive = computed(() => !isPrintMode.value && currentPage.value === $page.value && ["slide", "presenter"].includes($renderContext.value));
    const sharedLayout = computed(() => sharedActive.value ? `spatial-${props.mode}-layout` : "none");
    const sharedTitle = computed(() => sharedActive.value ? "spatial-layout-title" : "none");
    const sentenceFocusMask = computed(() => `sentence-focus-${$page.value}-${$renderContext.value}`);
    const tutorialViews = [
      { image: "source-overview", caption: "Documents organized by content similarity.", description: "Actual SVS source-org-overview tutorial state. The same 60 source documents form a semantic map; orange dots locate summary sentences." },
      { image: "source-distance", caption: "Nearer = more related content. Farther = less related.", description: "Actual SVS source-org-distance tutorial state. Its selected seed, nearby document and distant document are highlighted; other documents fade. Nearer and farther guide arrows compare document proximity, not provenance." },
      { image: "source-overview", sentenceDistance: true, caption: "Nearer to a sentence point suggests more related content; farther suggests less related content.", description: "The original prototype screenshot with presentation annotations highlighting summary sentence S1, its orange map point, the nearby copper report doc_000, and the farther science report doc_044. Distance is an approximate relevance cue, not a support judgment." },
      { image: "summary-overview", caption: "Horizontal: relevance. Vertical: summary order.", description: "Actual SVS summary-org-overview tutorial state. Documents are positioned by relevance to the whole summary and alignment with the sequence of summary sentences." },
      { image: "summary-relevance", caption: "Left = higher relevance. Right = lower relevance.", description: "Actual SVS summary-org-relevance tutorial state. Two documents on opposite sides are highlighted to compare overall relevance to the summary. The comparison arrow joins documents, not claims or evidence." },
      { image: "summary-order", caption: "Higher = earlier summary sentences. Lower = later.", description: "Actual SVS summary-org-order tutorial state. The tutorial highlights documents aligned with earlier and later summary sentences and labels their vertical positions. Cross-panel tutorial guide lines are hidden; no provenance visualization appears." }
    ];
    const pipeline = computed(() => props.mode === "source" ? [
      { title: "Source documents", detail: "Full document content" },
      { title: "Document embeddings", detail: "Represent semantic content" },
      { title: "UMAP projection", detail: "Reduce to two dimensions" },
      { title: "Document map", detail: "Similar content stays nearby" }
    ] : [
      { title: "Documents + summary", detail: "Split into sentences" },
      { title: "Sentence similarities", detail: "Compare sources with summary" },
      { title: "Derive two orderings", detail: "x: relevance · y: summary order" },
      { title: "Document layout", detail: "Place documents by x and y" }
    ]);
    const views = computed(() => props.mode === "summary" ? tutorialViews.slice(3) : tutorialViews.slice(0, 3));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "verification-method",
        "data-step": step.value,
        "data-mode": props.mode,
        "aria-label": "Spatial document organization tutorial"
      }, [
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
        createBaseVNode(
          "figure",
          {
            style: normalizeStyle({ viewTransitionName: sharedLayout.value })
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(views.value, (view, index) => {
                return openBlock(), createElementBlock("svg", {
                  key: `${view.image}-${index}`,
                  class: normalizeClass(["tutorial-capture", { visible: step.value === index }]),
                  "aria-hidden": step.value !== index,
                  viewBox: __props.showPipeline ? "0 0 1920 1190" : props.mode === "summary" ? "0 85 2070 1120" : "0 190 1920 1000",
                  role: "img",
                  "aria-label": view.description
                }, [
                  __props.showPipeline ? (openBlock(), createElementBlock("g", _hoisted_4, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(pipeline.value, (stage, stageIndex) => {
                        return openBlock(), createElementBlock("g", {
                          key: stage.title,
                          transform: `translate(${40 + stageIndex * 490} 0)`
                        }, [
                          createBaseVNode(
                            "text",
                            _hoisted_6,
                            toDisplayString(stage.title),
                            1
                            /* TEXT */
                          ),
                          createBaseVNode(
                            "text",
                            _hoisted_7,
                            toDisplayString(stage.detail),
                            1
                            /* TEXT */
                          ),
                          stageIndex < 3 ? (openBlock(), createElementBlock("path", _hoisted_8)) : createCommentVNode("v-if", true)
                        ], 8, _hoisted_5);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : createCommentVNode("v-if", true),
                  createBaseVNode("image", {
                    href: `/slides/svs/prototype/tutorial/${view.image}.png`,
                    x: "0",
                    y: "190",
                    width: "1920",
                    height: "1000",
                    "aria-hidden": "true"
                  }, null, 8, _hoisted_9),
                  props.mode === "summary" && !__props.showPipeline ? (openBlock(), createElementBlock("g", _hoisted_10, [..._cache[1] || (_cache[1] = [
                    createStaticVNode('<text x="585" y="128" data-v-2299d56e>Higher relevance</text><text x="1910" y="128" text-anchor="end" data-v-2299d56e>Lower relevance</text><path d="M590 164 H1900 M608 152 L590 164 L608 176 M1882 152 L1900 164 L1882 176" data-v-2299d56e></path><text x="1990" y="220" text-anchor="middle" data-v-2299d56e>Earlier</text><path d="M1990 250 V1110 M1978 268 L1990 250 L2002 268 M1978 1092 L1990 1110 L2002 1092" data-v-2299d56e></path><text x="1990" y="1165" text-anchor="middle" data-v-2299d56e>Later</text><text transform="translate(2042 680) rotate(-90)" text-anchor="middle" data-v-2299d56e>Summary order</text>', 7)
                  ])])) : createCommentVNode("v-if", true),
                  createCommentVNode(" Screenshot coordinates preserve the captured documents and S1 point. "),
                  view.sentenceDistance ? (openBlock(), createElementBlock("g", _hoisted_11, [
                    createBaseVNode("defs", null, [
                      createBaseVNode("mask", {
                        id: sentenceFocusMask.value,
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "1920",
                        height: "1000"
                      }, [..._cache[2] || (_cache[2] = [
                        createStaticVNode('<rect width="1920" height="1000" fill="white" data-v-2299d56e></rect><rect x="18" y="186" width="520" height="169" rx="6" fill="black" data-v-2299d56e></rect><rect x="1173" y="333" width="106" height="112" rx="3" fill="black" data-v-2299d56e></rect><rect x="668" y="565" width="88" height="86" rx="3" fill="black" data-v-2299d56e></rect><circle cx="1265" cy="430" r="13" fill="black" data-v-2299d56e></circle>', 5)
                      ])], 8, _hoisted_12)
                    ]),
                    createBaseVNode("rect", {
                      width: "1920",
                      height: "1000",
                      fill: "#faf9f6",
                      opacity: "0.86",
                      mask: `url(#${sentenceFocusMask.value})`
                    }, null, 8, _hoisted_13),
                    _cache[3] || (_cache[3] = createStaticVNode('<rect x="18" y="186" width="520" height="169" rx="6" class="sentence-outline" data-v-2299d56e></rect><rect x="1168" y="328" width="116" height="122" rx="6" class="near-outline" data-v-2299d56e></rect><rect x="663" y="560" width="98" height="96" rx="6" class="far-outline" data-v-2299d56e></rect><path d="M1252 438 L761 595" class="distance-guide" data-v-2299d56e></path><circle cx="1265" cy="430" r="13" class="sentence-outline" data-v-2299d56e></circle><path d="M1278 430 H1310 L1340 470" class="sentence-leader" data-v-2299d56e></path><text x="1352" y="480" class="sentence-label" data-v-2299d56e>Sentence S1</text><text x="1168" y="269" class="distance-label near-label" data-v-2299d56e>Nearer to S1</text><text x="1168" y="308" class="distance-detail" data-v-2299d56e>More related</text><text x="663" y="705" class="distance-label" data-v-2299d56e>Farther from S1</text><text x="663" y="744" class="distance-detail" data-v-2299d56e>Less related</text><text x="1250" y="943" text-anchor="middle" class="distance-note" data-v-2299d56e>Distance is an approximate relevance cue.</text>', 12))
                  ])) : createCommentVNode("v-if", true),
                  __props.showPipeline ? (openBlock(), createElementBlock(
                    "text",
                    _hoisted_14,
                    toDisplayString(view.caption),
                    1
                    /* TEXT */
                  )) : createCommentVNode("v-if", true)
                ], 10, _hoisted_3);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            createBaseVNode(
              "span",
              _hoisted_15,
              toDisplayString(views.value[step.value].caption),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2299d56e"]]);
export {
  __unplugin_components_0 as _
};
