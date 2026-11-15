import { o as openBlock, e as createElementBlock, g as createBaseVNode, F as Fragment, al as renderList, t as toDisplayString, n as normalizeClass, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = ["data-step"];
const _hoisted_2 = {
  class: "body",
  "aria-label": "The same six source documents shown in a linear list and, on the next step, arranged across a two-dimensional canvas in SVS. Positions are illustrative."
};
const _hoisted_3 = {
  viewBox: "0 0 1152 520",
  role: "img",
  "aria-label": "A common linear source list followed by the SVS two-dimensional document canvas."
};
const _hoisted_4 = ["transform"];
const _hoisted_5 = {
  x: "42",
  y: "31",
  class: "source-label"
};
const _hoisted_6 = ["aria-hidden"];
const _hoisted_7 = ["transform"];
const _hoisted_8 = {
  x: "10",
  y: "27",
  class: "source-label"
};
const _sfc_main$1 = {
  __name: "SourceOrganizationIntro",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const { isPrintMode, isPrintWithClicks } = useNav();
    const showCanvas = computed(() => isPrintMode.value && !isPrintWithClicks.value || $clicks.value >= 1);
    const positions = [[552, 122], [745, 106], [983, 142], [625, 306], [832, 278], [1020, 340]];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "svs-slide organization-intro",
        "data-step": showCanvas.value ? 1 : 0
      }, [
        _cache[13] || (_cache[13] = createBaseVNode(
          "header",
          { class: "method-heading" },
          [
            createBaseVNode("h1", null, "Method"),
            createBaseVNode("p", { class: "method-challenge relevance" }, "Challenge 1: Relevance")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("figure", _hoisted_2, [
          (openBlock(), createElementBlock("svg", _hoisted_3, [
            _cache[8] || (_cache[8] = createBaseVNode(
              "text",
              {
                x: "0",
                y: "45",
                class: "view-label"
              },
              "Linear source list",
              -1
              /* CACHED */
            )),
            _cache[9] || (_cache[9] = createBaseVNode(
              "text",
              {
                x: "0",
                y: "73",
                class: "view-note"
              },
              "Common approach to organizing sources",
              -1
              /* CACHED */
            )),
            _cache[10] || (_cache[10] = createBaseVNode(
              "rect",
              {
                x: "0",
                y: "88",
                width: "360",
                height: "382",
                rx: "4",
                class: "list-frame"
              },
              null,
              -1
              /* CACHED */
            )),
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(6, (document) => {
                return createBaseVNode("g", {
                  key: document,
                  transform: `translate(18 ${104 + (document - 1) * 58})`,
                  class: "list-document"
                }, [
                  _cache[0] || (_cache[0] = createBaseVNode(
                    "rect",
                    {
                      width: "304",
                      height: "48",
                      rx: "3",
                      class: "document"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  _cache[1] || (_cache[1] = createBaseVNode(
                    "path",
                    {
                      d: "M12 11 H28 V36 H12 Z M16 17 H24 M16 23 H24 M16 29 H22",
                      class: "document-icon"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createBaseVNode(
                    "text",
                    _hoisted_5,
                    "Source " + toDisplayString(document),
                    1
                    /* TEXT */
                  ),
                  _cache[2] || (_cache[2] = createBaseVNode(
                    "path",
                    {
                      d: "M160 19 H286 M160 31 H254",
                      class: "text-lines"
                    },
                    null,
                    -1
                    /* CACHED */
                  ))
                ], 8, _hoisted_4);
              }),
              64
              /* STABLE_FRAGMENT */
            )),
            _cache[11] || (_cache[11] = createBaseVNode(
              "path",
              {
                d: "M340 108 V450",
                class: "scroll-track"
              },
              null,
              -1
              /* CACHED */
            )),
            _cache[12] || (_cache[12] = createBaseVNode(
              "path",
              {
                d: "M340 108 V225",
                class: "scroll-thumb"
              },
              null,
              -1
              /* CACHED */
            )),
            createBaseVNode("g", {
              class: normalizeClass(["canvas-stage", { revealed: showCanvas.value }]),
              "aria-hidden": !showCanvas.value
            }, [
              _cache[5] || (_cache[5] = createBaseVNode(
                "path",
                {
                  d: "M394 280 H484 M474 270 L484 280 L474 290",
                  class: "canvas-arrow"
                },
                null,
                -1
                /* CACHED */
              )),
              _cache[6] || (_cache[6] = createBaseVNode(
                "text",
                {
                  x: "520",
                  y: "45",
                  class: "view-label canvas-label"
                },
                "SVS: 2D document canvas",
                -1
                /* CACHED */
              )),
              _cache[7] || (_cache[7] = createBaseVNode(
                "rect",
                {
                  x: "520",
                  y: "88",
                  width: "632",
                  height: "382",
                  rx: "4",
                  class: "canvas-frame"
                },
                null,
                -1
                /* CACHED */
              )),
              (openBlock(), createElementBlock(
                Fragment,
                null,
                renderList(positions, (position, index) => {
                  return createBaseVNode("g", {
                    key: index,
                    transform: `translate(${position[0]} ${position[1]})`,
                    class: "canvas-document"
                  }, [
                    _cache[3] || (_cache[3] = createBaseVNode(
                      "rect",
                      {
                        width: "100",
                        height: "108",
                        rx: "3",
                        class: "document"
                      },
                      null,
                      -1
                      /* CACHED */
                    )),
                    createBaseVNode(
                      "text",
                      _hoisted_8,
                      "Source " + toDisplayString(index + 1),
                      1
                      /* TEXT */
                    ),
                    _cache[4] || (_cache[4] = createBaseVNode(
                      "path",
                      {
                        d: "M10 44 H90 M10 56 H90 M10 68 H74 M10 80 H90 M10 92 H66",
                        class: "text-lines"
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
            ], 10, _hoisted_6)
          ]))
        ])
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b1122648"]]);
const _sfc_main = {
  __name: "slides.md__slidev_6",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SourceOrganizationIntro = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 5))),
        {
          default: withCtx(() => [
            createVNode(_component_SourceOrganizationIntro)
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
