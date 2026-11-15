import { aI as useId, o as openBlock, e as createElementBlock, g as createBaseVNode, n as normalizeClass, an as createTextVNode, U as unref, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0, a as _imports_2 } from "./notebooklm-Dmsnqy5d.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _imports_1 = "/slides/svs/images/existing-tools/chatgpt-citations.png";
const _imports_3 = "/slides/svs/images/existing-tools/notebooklm-citations.png";
const _hoisted_1 = {
  class: "existing-tools",
  "aria-label": "Saved ChatGPT and Google NotebookLM screenshots showing citations and linear source lists"
};
const _hoisted_2 = { class: "tool-comparison" };
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = {
  class: "interface-crop",
  viewBox: "0 375 1436 700",
  role: "img",
  "aria-label": "ChatGPT screenshot crop: generated summary on the left and a vertical list of source files on the right"
};
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const _hoisted_7 = {
  viewBox: "204 58 406 34",
  role: "img",
  "aria-label": "Enlarged original ChatGPT excerpt ending in Gulf Coast industrial facilities, followed by doc_006 and doc_007 citation tags"
};
const _hoisted_8 = ["id"];
const _hoisted_9 = ["clip-path"];
const _hoisted_10 = ["aria-hidden"];
const _hoisted_11 = {
  class: "interface-crop",
  viewBox: "0 135 1631 795",
  role: "img",
  "aria-label": "NotebookLM screenshot crop: a vertical list of source files on the left and a generated answer with numbered citations on the right"
};
const _hoisted_12 = ["aria-hidden"];
const _hoisted_13 = ["aria-hidden"];
const _hoisted_14 = {
  viewBox: "0 119 210 30",
  preserveAspectRatio: "xMinYMid meet",
  role: "img",
  "aria-label": "Enlarged original NotebookLM excerpt ending in residents, followed by numbered citation 7 and an additional citation indicator"
};
const _hoisted_15 = ["id"];
const _hoisted_16 = ["clip-path"];
const _hoisted_17 = ["aria-hidden"];
const _sfc_main$1 = {
  __name: "ExistingToolsComparison",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const clipId = useId();
    const showAll = computed(() => isPrintMode.value && !isPrintWithClicks.value);
    const showSources = computed(() => showAll.value || $clicks.value >= 1);
    const showCitations = computed(() => showAll.value || $clicks.value >= 2);
    const showTakeaway = computed(() => showAll.value || $clicks.value >= 3);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[15] || (_cache[15] = createBaseVNode(
          "header",
          { class: "existing-method-header" },
          [
            createBaseVNode("h1", null, "Supporting")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("figure", null, [
            _cache[6] || (_cache[6] = createBaseVNode(
              "figcaption",
              null,
              "ChatGPT",
              -1
              /* CACHED */
            )),
            createBaseVNode("p", {
              class: normalizeClass(["source-label reveal", { visible: showSources.value }]),
              "aria-hidden": !showSources.value
            }, [..._cache[0] || (_cache[0] = [
              createTextVNode(
                "Linear source list ",
                -1
                /* CACHED */
              ),
              createBaseVNode(
                "span",
                { "aria-hidden": "true" },
                "↓",
                -1
                /* CACHED */
              )
            ])], 10, _hoisted_3),
            (openBlock(), createElementBlock("svg", _hoisted_4, [
              _cache[2] || (_cache[2] = createBaseVNode(
                "image",
                {
                  href: _imports_0,
                  x: "0",
                  y: "0",
                  width: "1436",
                  height: "1241"
                },
                null,
                -1
                /* CACHED */
              )),
              createBaseVNode(
                "g",
                {
                  class: normalizeClass(["source-outline reveal", { visible: showSources.value }]),
                  "aria-hidden": "true"
                },
                [..._cache[1] || (_cache[1] = [
                  createBaseVNode(
                    "rect",
                    {
                      x: "1047",
                      y: "390",
                      width: "373",
                      height: "430",
                      rx: "10"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "path",
                    { d: "M1391 415 V787 M1378 774 L1391 787 L1404 774" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                2
                /* CLASS */
              ),
              createBaseVNode("rect", {
                class: normalizeClass(["citation-outline reveal", { visible: showCitations.value }]),
                "aria-hidden": !showCitations.value,
                x: "438",
                y: "680",
                width: "176",
                height: "34",
                rx: "8"
              }, null, 10, _hoisted_5)
            ])),
            createBaseVNode("div", {
              class: normalizeClass(["citation-detail reveal", { visible: showCitations.value }]),
              "aria-hidden": !showCitations.value
            }, [
              _cache[5] || (_cache[5] = createBaseVNode(
                "p",
                null,
                "Citations after summary text",
                -1
                /* CACHED */
              )),
              (openBlock(), createElementBlock("svg", _hoisted_7, [
                createBaseVNode("defs", null, [
                  createBaseVNode("clipPath", {
                    id: `${unref(clipId)}-chatgpt-citation-crop`
                  }, [..._cache[3] || (_cache[3] = [
                    createBaseVNode(
                      "rect",
                      {
                        x: "204",
                        y: "58",
                        width: "406",
                        height: "34"
                      },
                      null,
                      -1
                      /* CACHED */
                    )
                  ])], 8, _hoisted_8)
                ]),
                createBaseVNode("g", {
                  "clip-path": `url(#${unref(clipId)}-chatgpt-citation-crop)`
                }, [..._cache[4] || (_cache[4] = [
                  createBaseVNode(
                    "image",
                    {
                      href: _imports_1,
                      x: "0",
                      y: "0",
                      width: "781",
                      height: "98"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "rect",
                    {
                      class: "citation-outline detail-outline",
                      x: "426",
                      y: "59",
                      width: "173",
                      height: "28",
                      rx: "5"
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])], 8, _hoisted_9)
              ]))
            ], 10, _hoisted_6)
          ]),
          createBaseVNode("figure", null, [
            _cache[13] || (_cache[13] = createBaseVNode(
              "figcaption",
              null,
              "Google NotebookLM",
              -1
              /* CACHED */
            )),
            createBaseVNode("p", {
              class: normalizeClass(["source-label reveal", { visible: showSources.value }]),
              "aria-hidden": !showSources.value
            }, [..._cache[7] || (_cache[7] = [
              createTextVNode(
                "Linear source list ",
                -1
                /* CACHED */
              ),
              createBaseVNode(
                "span",
                { "aria-hidden": "true" },
                "↓",
                -1
                /* CACHED */
              )
            ])], 10, _hoisted_10),
            (openBlock(), createElementBlock("svg", _hoisted_11, [
              _cache[9] || (_cache[9] = createBaseVNode(
                "image",
                {
                  href: _imports_2,
                  x: "0",
                  y: "0",
                  width: "1631",
                  height: "1256"
                },
                null,
                -1
                /* CACHED */
              )),
              createBaseVNode(
                "g",
                {
                  class: normalizeClass(["source-outline reveal", { visible: showSources.value }]),
                  "aria-hidden": "true"
                },
                [..._cache[8] || (_cache[8] = [
                  createBaseVNode(
                    "rect",
                    {
                      x: "22",
                      y: "252",
                      width: "396",
                      height: "391",
                      rx: "10"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "path",
                    { d: "M407 275 V621 M394 608 L407 621 L420 608" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                2
                /* CLASS */
              ),
              createBaseVNode("rect", {
                class: normalizeClass(["citation-outline reveal", { visible: showCitations.value }]),
                "aria-hidden": !showCitations.value,
                x: "674",
                y: "575",
                width: "63",
                height: "31",
                rx: "8"
              }, null, 10, _hoisted_12)
            ])),
            createBaseVNode("div", {
              class: normalizeClass(["citation-detail reveal", { visible: showCitations.value }]),
              "aria-hidden": !showCitations.value
            }, [
              _cache[12] || (_cache[12] = createBaseVNode(
                "p",
                null,
                "Citations after summary text",
                -1
                /* CACHED */
              )),
              (openBlock(), createElementBlock("svg", _hoisted_14, [
                createBaseVNode("defs", null, [
                  createBaseVNode("clipPath", {
                    id: `${unref(clipId)}-notebooklm-citation-crop`
                  }, [..._cache[10] || (_cache[10] = [
                    createBaseVNode(
                      "rect",
                      {
                        x: "0",
                        y: "119",
                        width: "210",
                        height: "30"
                      },
                      null,
                      -1
                      /* CACHED */
                    )
                  ])], 8, _hoisted_15)
                ]),
                createBaseVNode("g", {
                  "clip-path": `url(#${unref(clipId)}-notebooklm-citation-crop)`
                }, [..._cache[11] || (_cache[11] = [
                  createBaseVNode(
                    "image",
                    {
                      href: _imports_3,
                      x: "0",
                      y: "0",
                      width: "701",
                      height: "149"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  createBaseVNode(
                    "rect",
                    {
                      class: "citation-outline detail-outline",
                      x: "89",
                      y: "120",
                      width: "57",
                      height: "26",
                      rx: "5"
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])], 8, _hoisted_16)
              ]))
            ], 10, _hoisted_13)
          ])
        ]),
        createBaseVNode("p", {
          class: normalizeClass(["problem-takeaway reveal", { visible: showTakeaway.value }]),
          "aria-hidden": !showTakeaway.value
        }, [..._cache[14] || (_cache[14] = [
          createTextVNode(
            "Citations link to sources, but verifying multi-document summaries becomes harder as readers must ",
            -1
            /* CACHED */
          ),
          createBaseVNode(
            "strong",
            null,
            "search and compare more documents",
            -1
            /* CACHED */
          ),
          createTextVNode(
            ".",
            -1
            /* CACHED */
          )
        ])], 10, _hoisted_17)
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f755159"]]);
const _sfc_main = {
  __name: "slides.md__slidev_24",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_ExistingToolsComparison = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 23))),
        {
          default: withCtx(() => [
            createVNode(_component_ExistingToolsComparison)
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
