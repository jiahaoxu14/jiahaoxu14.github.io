import { o as openBlock, e as createElementBlock, g as createBaseVNode, n as normalizeClass, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _imports_0 } from "./svs-prototype-D7ghNp2I.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = {
  class: "system-overview",
  "aria-label": "Summary Verification Space combines spatial document organization and provenance visualization"
};
const _hoisted_2 = { "aria-label": "Real SVS prototype showing the Hurricane Harvey summary panel and source-document canvas" };
const _hoisted_3 = {
  viewBox: "0 0 3424 1318",
  role: "img",
  "aria-label": "Summary and atomic claims on the left; spatially arranged documents on the right, with provenance links and highlighted evidence"
};
const _hoisted_4 = { class: "challenge-mapping" };
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const _sfc_main$1 = {
  __name: "SystemOverview",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const showAll = computed(() => isPrintMode.value && !isPrintWithClicks.value);
    const showSpatial = computed(() => showAll.value || $clicks.value >= 1);
    const showProvenance = computed(() => showAll.value || $clicks.value >= 2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[5] || (_cache[5] = createBaseVNode(
          "h1",
          null,
          "Method: Summary Verification Space",
          -1
          /* CACHED */
        )),
        createBaseVNode("figure", _hoisted_2, [
          (openBlock(), createElementBlock("svg", _hoisted_3, [
            _cache[2] || (_cache[2] = createBaseVNode(
              "image",
              {
                href: _imports_0,
                width: "3424",
                height: "1318"
              },
              null,
              -1
              /* CACHED */
            )),
            createBaseVNode(
              "g",
              {
                class: normalizeClass(["spatial-outline reveal", { visible: showSpatial.value }]),
                "aria-hidden": "true"
              },
              [..._cache[0] || (_cache[0] = [
                createBaseVNode(
                  "rect",
                  {
                    x: "1045",
                    y: "7",
                    width: "2370",
                    height: "1302",
                    rx: "10"
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
                class: normalizeClass(["provenance-outline reveal", { visible: showProvenance.value }]),
                "aria-hidden": "true"
              },
              [..._cache[1] || (_cache[1] = [
                createBaseVNode(
                  "rect",
                  {
                    x: "12",
                    y: "155",
                    width: "984",
                    height: "410",
                    rx: "10"
                  },
                  null,
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "rect",
                  {
                    x: "1295",
                    y: "155",
                    width: "454",
                    height: "452",
                    rx: "10"
                  },
                  null,
                  -1
                  /* CACHED */
                ),
                createBaseVNode(
                  "rect",
                  {
                    x: "2280",
                    y: "68",
                    width: "385",
                    height: "387",
                    rx: "10"
                  },
                  null,
                  -1
                  /* CACHED */
                )
              ])],
              2
              /* CLASS */
            )
          ]))
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("section", {
            class: normalizeClass(["spatial-method reveal", { visible: showSpatial.value }]),
            "aria-hidden": !showSpatial.value
          }, [..._cache[3] || (_cache[3] = [
            createBaseVNode(
              "p",
              { class: "challenge-label" },
              "Challenge 1: Relevance",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "h2",
              null,
              "Spatial document organization",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "method-purpose" },
              "Find relevant sources and coverage gaps.",
              -1
              /* CACHED */
            )
          ])], 10, _hoisted_5),
          createBaseVNode("section", {
            class: normalizeClass(["provenance-method reveal", { visible: showProvenance.value }]),
            "aria-hidden": !showProvenance.value
          }, [..._cache[4] || (_cache[4] = [
            createBaseVNode(
              "p",
              { class: "challenge-label" },
              "Challenge 2: Consistency",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "h2",
              null,
              "Provenance visualization",
              -1
              /* CACHED */
            ),
            createBaseVNode(
              "p",
              { class: "method-purpose" },
              "Trace claims to supporting or contradicting evidence.",
              -1
              /* CACHED */
            )
          ])], 10, _hoisted_6)
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dd420fe0"]]);
const _sfc_main = {
  __name: "slides.md__slidev_5",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SystemOverview = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 4))),
        {
          default: withCtx(() => [
            createVNode(_component_SystemOverview)
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
