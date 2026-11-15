import { o as openBlock, e as createElementBlock, g as createBaseVNode, an as createTextVNode, F as Fragment, al as renderList, t as toDisplayString, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "results" };
const _hoisted_2 = { class: "charts" };
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = ["x1", "x2"];
const _hoisted_5 = ["x"];
const _hoisted_6 = ["transform"];
const _hoisted_7 = ["font-weight"];
const _hoisted_8 = ["width"];
const _hoisted_9 = ["x"];
const _hoisted_10 = ["width"];
const _hoisted_11 = ["x"];
const _sfc_main$1 = {
  __name: "EvaluationResults",
  setup(__props) {
    useSlideContext();
    const models = ["Sonnet 4.5", "GPT-5.4", "GPT-5.4-mini", "Combined"];
    const charts = [
      { title: "Correct target", baseline: [29.5, 13.5, 6.5, 16.5], canvasobs: [94.5, 36.5, 14, 48.3] },
      { title: "Full task success", baseline: [9.5, 3.5, 0, 4.3], canvasobs: [49.5, 24, 1.5, 25] }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode(
          "div",
          { class: "legend" },
          [
            createBaseVNode("span", null, [
              createBaseVNode("i", { class: "baseline" }),
              createTextVNode("Original tldraw agentic kit")
            ]),
            createBaseVNode("span", null, [
              createBaseVNode("i", { class: "canvasobs" }),
              createTextVNode("CanvasObs")
            ])
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(charts, (chart) => {
              return createBaseVNode("div", {
                key: chart.title
              }, [
                createBaseVNode(
                  "h2",
                  null,
                  toDisplayString(chart.title),
                  1
                  /* TEXT */
                ),
                (openBlock(), createElementBlock("svg", {
                  viewBox: "0 0 550 350",
                  role: "img",
                  "aria-label": `${chart.title}: comparison by model and combined, in percent`
                }, [
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList([0, 25, 50, 75, 100], (tick) => {
                      return createBaseVNode("g", { key: tick }, [
                        createBaseVNode("line", {
                          x1: 135 + tick * 3.4,
                          x2: 135 + tick * 3.4,
                          y1: "15",
                          y2: "310",
                          stroke: "#e8e2db"
                        }, null, 8, _hoisted_4),
                        createBaseVNode("text", {
                          x: 135 + tick * 3.4,
                          y: "334",
                          "text-anchor": "middle",
                          class: "tick"
                        }, toDisplayString(tick) + "%", 9, _hoisted_5)
                      ]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  (openBlock(), createElementBlock(
                    Fragment,
                    null,
                    renderList(models, (model, i) => {
                      return createBaseVNode("g", {
                        key: model,
                        transform: `translate(0, ${20 + i * 74})`
                      }, [
                        createBaseVNode("text", {
                          x: "122",
                          y: "26",
                          "text-anchor": "end",
                          "font-weight": i === 3 ? 700 : 400
                        }, toDisplayString(model), 9, _hoisted_7),
                        createBaseVNode("rect", {
                          x: "135",
                          y: "0",
                          width: chart.baseline[i] * 3.4,
                          height: "18",
                          fill: "#a49c92"
                        }, null, 8, _hoisted_8),
                        createBaseVNode("text", {
                          x: 143 + chart.baseline[i] * 3.4,
                          y: "14",
                          class: "value"
                        }, toDisplayString(chart.baseline[i].toFixed(1)) + "%", 9, _hoisted_9),
                        createBaseVNode("rect", {
                          x: "135",
                          y: "25",
                          width: chart.canvasobs[i] * 3.4,
                          height: "18",
                          fill: "#d76628"
                        }, null, 8, _hoisted_10),
                        createBaseVNode("text", {
                          x: 143 + chart.canvasobs[i] * 3.4,
                          y: "39",
                          class: "value"
                        }, toDisplayString(chart.canvasobs[i].toFixed(1)) + "%", 9, _hoisted_11)
                      ], 8, _hoisted_6);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ], 8, _hoisted_3))
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _cache[1] || (_cache[1] = createBaseVNode(
          "p",
          { class: "source" },
          "Combined across 3 models · 1,200 trials",
          -1
          /* CACHED */
        ))
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b5f13861"]]);
const _sfc_main = {
  __name: "slides.md__slidev_7",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_EvaluationResults = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 6))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "Better observation improves target selection",
              -1
              /* CACHED */
            )),
            createVNode(_component_EvaluationResults)
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
