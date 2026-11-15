import { f as defineComponent, X as useLocalStorage, r as ref, aK as useDraggable, o as openBlock, e as createElementBlock, i as renderSlot, k as normalizeStyle, U as unref, b as createBlock, w as withCtx, d as createVNode, n as normalizeClass, g as createBaseVNode, t as toDisplayString, au as withDirectives, az as vModelText, F as Fragment, al as renderList, av as vShow, j as createCommentVNode } from "../modules/vue-BNFSZGH4.js";
import { L as Lt } from "../modules/shiki-Cv5xHaXs.js";
import { u as useDrawings, _ as _sfc_main$2, V as VerticalDivider } from "./play-BfB0rHTy.js";
import "../index-BenZRoUb.js";
import "./context-NoJkDP_T.js";
import "../modules/unplugin-icons-aY1V3vQA.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Draggable",
  props: {
    storageKey: {},
    initial: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    const initial = props.initial ?? { x: 0, y: 0 };
    const point = props.storageKey ? useLocalStorage(props.storageKey, initial) : ref(initial);
    const { style } = useDraggable(el, { initialValue: point });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "el",
          ref: el,
          class: "fixed",
          style: normalizeStyle(unref(style))
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        4
        /* STYLE */
      );
    };
  }
});
const _hoisted_1 = { class: "flex bg-main p-2" };
const _hoisted_2 = { class: "inline-block w-7 text-center" };
const _hoisted_3 = { class: "pt-.5" };
const _hoisted_4 = { class: "i-carbon:pin-filled transform -rotate-45" };
const _hoisted_5 = { class: "i-carbon:pin" };
const _hoisted_6 = { class: "i-carbon:error" };
const _hoisted_7 = { class: "i-carbon:close-outline" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DrawingControls",
  setup(__props) {
    const {
      brush,
      canClear,
      canRedo,
      canUndo,
      clear,
      drauu,
      drawingEnabled,
      drawingMode,
      drawingPinned,
      brushColors
    } = useDrawings();
    function undo() {
      drauu.undo();
    }
    function redo() {
      drauu.redo();
    }
    let lastDrawingMode = "stylus";
    function setDrawingMode(mode) {
      drawingMode.value = mode;
      drawingEnabled.value = true;
      if (mode !== "eraseLine")
        lastDrawingMode = mode;
    }
    function setBrushColor(color) {
      brush.color = color;
      drawingEnabled.value = true;
      drawingMode.value = lastDrawingMode;
    }
    return (_ctx, _cache) => {
      return unref(drawingEnabled) || unref(drawingPinned) ? (openBlock(), createBlock(_sfc_main$1, {
        key: 0,
        class: normalizeClass(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-nav border border-main", !unref(drawingEnabled) && unref(drawingPinned) ? "opacity-40 hover:opacity-90" : ""]),
        "storage-key": "slidev-drawing-pos",
        "initial-x": 10,
        "initial-y": 10
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$2, {
            title: "Draw with stylus",
            class: normalizeClass({ shallow: unref(drawingMode) !== "stylus" }),
            onClick: _cache[0] || (_cache[0] = ($event) => setDrawingMode("stylus"))
          }, {
            default: withCtx(() => [..._cache[13] || (_cache[13] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:pen" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Draw a line",
            class: normalizeClass({ shallow: unref(drawingMode) !== "line" }),
            onClick: _cache[1] || (_cache[1] = ($event) => setDrawingMode("line"))
          }, {
            default: withCtx(() => [..._cache[14] || (_cache[14] = [
              createBaseVNode(
                "svg",
                {
                  width: "1em",
                  height: "1em",
                  class: "-mt-0.5",
                  preserveAspectRatio: "xMidYMid meet",
                  viewBox: "0 0 24 24"
                },
                [
                  createBaseVNode("path", {
                    d: "M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",
                    fill: "currentColor"
                  })
                ],
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Draw an arrow",
            class: normalizeClass({ shallow: unref(drawingMode) !== "arrow" }),
            onClick: _cache[2] || (_cache[2] = ($event) => setDrawingMode("arrow"))
          }, {
            default: withCtx(() => [..._cache[15] || (_cache[15] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:arrow-up-right" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Draw an ellipse",
            class: normalizeClass({ shallow: unref(drawingMode) !== "ellipse" }),
            onClick: _cache[3] || (_cache[3] = ($event) => setDrawingMode("ellipse"))
          }, {
            default: withCtx(() => [..._cache[16] || (_cache[16] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:radio-button" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Draw a rectangle",
            class: normalizeClass({ shallow: unref(drawingMode) !== "rectangle" }),
            onClick: _cache[4] || (_cache[4] = ($event) => setDrawingMode("rectangle"))
          }, {
            default: withCtx(() => [..._cache[17] || (_cache[17] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:checkbox" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Erase",
            class: normalizeClass({ shallow: unref(drawingMode) !== "eraseLine" }),
            onClick: _cache[5] || (_cache[5] = ($event) => setDrawingMode("eraseLine"))
          }, {
            default: withCtx(() => [..._cache[18] || (_cache[18] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:erase" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(VerticalDivider),
          createVNode(unref(Lt), null, {
            popper: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode(
                  "div",
                  _hoisted_2,
                  toDisplayString(unref(brush).size),
                  1
                  /* TEXT */
                ),
                createBaseVNode("div", _hoisted_3, [
                  withDirectives(createBaseVNode(
                    "input",
                    {
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(brush).size = $event),
                      type: "range",
                      min: "1",
                      max: "15",
                      onChange: _cache[7] || (_cache[7] = ($event) => drawingMode.value = unref(lastDrawingMode))
                    },
                    null,
                    544
                    /* NEED_HYDRATION, NEED_PATCH */
                  ), [
                    [vModelText, unref(brush).size]
                  ])
                ])
              ])
            ]),
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                title: "Adjust stroke width",
                class: normalizeClass({ shallow: unref(drawingMode) === "eraseLine" })
              }, {
                default: withCtx(() => [..._cache[19] || (_cache[19] = [
                  createBaseVNode(
                    "svg",
                    {
                      viewBox: "0 0 32 32",
                      width: "1.2em",
                      height: "1.2em"
                    },
                    [
                      createBaseVNode("line", {
                        x1: "2",
                        y1: "15",
                        x2: "22",
                        y2: "4",
                        stroke: "currentColor",
                        "stroke-width": "1",
                        "stroke-linecap": "round"
                      }),
                      createBaseVNode("line", {
                        x1: "2",
                        y1: "24",
                        x2: "28",
                        y2: "10",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                      }),
                      createBaseVNode("line", {
                        x1: "7",
                        y1: "31",
                        x2: "29",
                        y2: "19",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round"
                      })
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["class"])
            ]),
            _: 1
            /* STABLE */
          }),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(brushColors), (color) => {
              return openBlock(), createBlock(_sfc_main$2, {
                key: color,
                title: "Set brush color",
                class: normalizeClass(unref(brush).color === color && unref(drawingMode) !== "eraseLine" ? "active" : "shallow"),
                onClick: ($event) => setBrushColor(color)
              }, {
                default: withCtx(() => [
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(["w-6 h-6 transition-all transform border", unref(brush).color !== color ? "rounded-1/2 scale-85 border-white" : "rounded-md border-gray-300/50"]),
                      style: normalizeStyle(unref(drawingEnabled) ? { background: color } : { borderColor: color })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["class", "onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          createVNode(VerticalDivider),
          createVNode(_sfc_main$2, {
            title: "Undo",
            class: normalizeClass({ disabled: !unref(canUndo) }),
            onClick: _cache[8] || (_cache[8] = ($event) => undo())
          }, {
            default: withCtx(() => [..._cache[20] || (_cache[20] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:undo" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Redo",
            class: normalizeClass({ disabled: !unref(canRedo) }),
            onClick: _cache[9] || (_cache[9] = ($event) => redo())
          }, {
            default: withCtx(() => [..._cache[21] || (_cache[21] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:redo" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(_sfc_main$2, {
            title: "Delete",
            class: normalizeClass({ disabled: !unref(canClear) }),
            onClick: _cache[10] || (_cache[10] = ($event) => unref(clear)())
          }, {
            default: withCtx(() => [..._cache[22] || (_cache[22] = [
              createBaseVNode(
                "div",
                { class: "i-carbon:trash-can" },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["class"]),
          createVNode(VerticalDivider),
          createVNode(_sfc_main$2, {
            title: unref(drawingPinned) ? "Unpin drawing" : "Pin drawing",
            class: normalizeClass({ shallow: !unref(drawingPinned) }),
            onClick: _cache[11] || (_cache[11] = ($event) => drawingPinned.value = !unref(drawingPinned))
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode(
                "div",
                _hoisted_4,
                null,
                512
                /* NEED_PATCH */
              ), [
                [vShow, unref(drawingPinned)]
              ]),
              withDirectives(createBaseVNode(
                "div",
                _hoisted_5,
                null,
                512
                /* NEED_PATCH */
              ), [
                [vShow, !unref(drawingPinned)]
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["title", "class"]),
          unref(drawingEnabled) ? (openBlock(), createBlock(_sfc_main$2, {
            key: 0,
            title: unref(drawingPinned) ? "Drawing pinned" : "Drawing unpinned",
            class: normalizeClass({ shallow: !unref(drawingEnabled) }),
            onClick: _cache[12] || (_cache[12] = ($event) => drawingEnabled.value = !unref(drawingEnabled))
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode(
                "div",
                _hoisted_6,
                null,
                512
                /* NEED_PATCH */
              ), [
                [vShow, unref(drawingPinned)]
              ]),
              withDirectives(createBaseVNode(
                "div",
                _hoisted_7,
                null,
                512
                /* NEED_PATCH */
              ), [
                [vShow, !unref(drawingPinned)]
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["title", "class"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class"])) : createCommentVNode("v-if", true);
    };
  }
});
export {
  _sfc_main as default
};
