import { L as watch, M as onMounted, N as onUnmounted, o as openBlock, e as createElementBlock, g as createBaseVNode, an as createTextVNode, t as toDisplayString, F as Fragment, j as createCommentVNode, al as renderList, n as normalizeClass, U as unref, z as computed, r as ref, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps } from "./modules/vue-DCd3fsyH.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "case-study" };
const _hoisted_2 = {
  key: 0,
  class: "task-intro"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["src", "title"];
const _hoisted_5 = {
  key: 2,
  class: "outcome"
};
const _hoisted_6 = {
  key: 1,
  class: "tasks"
};
const _hoisted_7 = {
  key: 2,
  class: "cue"
};
const _sfc_main$1 = {
  __name: "EvaluationCaseStudy",
  setup(__props) {
    const { $clicks, $nav } = useSlideContext();
    const step = computed(() => Math.min(8, $clicks.value));
    const frames = ref([]);
    const taskIndex = computed(() => Math.max(0, Math.floor((step.value - 1) / 2)));
    const tasks = [
      ["Retrieve the offscreen takeaway", "Add the current working copy of “Unclear ownership delays handoffs” to Friday’s report.", "Existing editable copy", "Recreated text"],
      ["Select the blue chart", "The team chose the blue “Handoff breakdown” chart. Add it to Friday’s report.", "Blue chart", "Wrong chart"],
      ["Separate cards by frame membership", "Move the two unattached cards from “Study setup A” to the empty “Study setup B”.", "Diaries moved; Calls remain in A", "A visually plausible pair"],
      ["Preserve the evidence link", "Move the interview-backed “Lost decision context” finding to Friday’s report.", "Bound evidence link follows", "Unsupported finding; arrow stays behind"]
    ];
    const variants = [{ id: "original", label: "Original tldraw agentic kit", outcomeIndex: 3 }, { id: "canvasobs", label: "CanvasObs", outcomeIndex: 2 }];
    const task = computed(() => tasks[taskIndex.value]);
    function send() {
      frames.value.forEach((frame) => frame?.contentWindow?.postMessage({ type: "case-study-step", step: step.value }, window.location.origin));
    }
    function receive(event) {
      if (event.origin === window.location.origin && frames.value.some((f) => f?.contentWindow === event.source) && event.data?.type === "case-study-ready") send();
    }
    watch(step, send, { flush: "post" });
    onMounted(() => window.addEventListener("message", receive));
    onUnmounted(() => window.removeEventListener("message", receive));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        step.value > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("h2", null, [
            createTextVNode(
              toDisplayString(taskIndex.value + 1) + ". ",
              1
              /* TEXT */
            ),
            taskIndex.value === 1 ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                _cache[0] || (_cache[0] = createTextVNode(
                  "Select the ",
                  -1
                  /* CACHED */
                )),
                _cache[1] || (_cache[1] = createBaseVNode(
                  "mark",
                  { class: "blue-word" },
                  "blue",
                  -1
                  /* CACHED */
                )),
                _cache[2] || (_cache[2] = createTextVNode(
                  " chart",
                  -1
                  /* CACHED */
                ))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode(
                  toDisplayString(task.value[0]),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            _cache[3] || (_cache[3] = createBaseVNode(
              "span",
              { class: "replay-note" },
              "Illustrative replay",
              -1
              /* CACHED */
            ))
          ]),
          createBaseVNode("p", null, [
            taskIndex.value === 1 ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                _cache[4] || (_cache[4] = createTextVNode(
                  "The team chose the ",
                  -1
                  /* CACHED */
                )),
                _cache[5] || (_cache[5] = createBaseVNode(
                  "mark",
                  { class: "blue-word" },
                  "blue",
                  -1
                  /* CACHED */
                )),
                _cache[6] || (_cache[6] = createTextVNode(
                  " “Handoff breakdown” chart. Add it to Friday’s report.",
                  -1
                  /* CACHED */
                ))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createTextVNode(
                  toDisplayString(task.value[1]),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["comparison", { overview: step.value === 0 }])
          },
          [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(variants, (variant, i) => {
                return createBaseVNode(
                  "div",
                  {
                    key: variant.id,
                    class: normalizeClass({ inactive: step.value === 0 && i === 1 })
                  },
                  [
                    step.value > 0 ? (openBlock(), createElementBlock(
                      "h3",
                      _hoisted_3,
                      toDisplayString(variant.label),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true),
                    createCommentVNode(" Hidden Slidev neighbors have no text layout; mount tldraw only on the active slide. "),
                    unref($nav).currentSlideNo === 5 ? (openBlock(), createElementBlock("iframe", {
                      key: 1,
                      ref_for: true,
                      ref: (el) => frames.value[i] = el,
                      src: `/slides/canvasobs/demo/?case-study-slide&variant=${variant.id}`,
                      title: `${variant.label} case-study canvas`,
                      onLoad: send
                    }, null, 40, _hoisted_4)) : createCommentVNode("v-if", true),
                    step.value > 0 ? (openBlock(), createElementBlock(
                      "p",
                      _hoisted_5,
                      toDisplayString(step.value % 2 === 0 ? task.value[variant.outcomeIndex] : ""),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                );
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ),
        step.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(tasks, (item, i) => {
              return createBaseVNode(
                "span",
                {
                  key: item[0]
                },
                toDisplayString(i + 1) + ". " + toDisplayString(item[0]),
                1
                /* TEXT */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])) : (openBlock(), createElementBlock(
          "p",
          _hoisted_7,
          toDisplayString(step.value % 2 ? "Press Right to show the edits." : step.value === 8 ? "Press Right for the experiment." : "Press Right for the next subtask."),
          1
          /* TEXT */
        ))
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e35c1de1"]]);
const _sfc_main = {
  __name: "slides.md__slidev_5",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_EvaluationCaseStudy = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 4))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "Case study: preparing a team handoff report",
              -1
              /* CACHED */
            )),
            createVNode(_component_EvaluationCaseStudy)
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
