import { o as openBlock, e as createElementBlock, g as createBaseVNode, t as toDisplayString, F as Fragment, al as renderList, n as normalizeClass, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { _ as _export_sfc } from "./index-tUcMyYlJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BoeIygqB.js";
import { I as InjectedLayout } from "./slidev/none-B8I3P91o.js";
import "./modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "observation-problems" };
const _hoisted_2 = { class: "example-layout" };
const _hoisted_3 = { class: "example-title" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = { class: "request" };
const _hoisted_6 = { class: "gap" };
const _hoisted_7 = { class: "steps" };
const _sfc_main$1 = {
  __name: "ObservationProblems",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const step = computed(() => Math.min(5, $clicks.value));
    const examples = [
      { title: "Offscreen", request: "Find “Book room”.", before: "Can you see the requested note?", after: "The note exists outside the viewport.", action: "Zoom out to reveal it" },
      { title: "Occluded", request: "Select the blue note.", before: "Only the yellow note is visible.", after: "The blue note was underneath.", action: "Move the yellow note aside" },
      { title: "Touching is not connected", request: "Which blue note is connected to “Meeting”?", before: "Both arrows touch a note. Only one is actually bound.", after: "“Book room” is connected. Its bound arrow follows; the other arrow stays behind.", action: "Move both blue notes" }
    ];
    const current = computed(() => examples[Math.floor(step.value / 2)]);
    const revealed = computed(() => step.value % 2 === 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode(
              "p",
              _hoisted_3,
              toDisplayString(current.value.title),
              1
              /* TEXT */
            ),
            createBaseVNode("img", {
              class: "canvas-view",
              src: `/images/canvasobs-slides/observation-${step.value}.svg`,
              alt: `${current.value.title}: ${revealed.value ? current.value.after : current.value.before}`
            }, null, 8, _hoisted_4)
          ]),
          createBaseVNode("aside", null, [
            _cache[0] || (_cache[0] = createBaseVNode(
              "p",
              { class: "label" },
              "Request",
              -1
              /* CACHED */
            )),
            createBaseVNode(
              "p",
              _hoisted_5,
              toDisplayString(current.value.request),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "p",
              _hoisted_6,
              toDisplayString(revealed.value ? current.value.after : current.value.before),
              1
              /* TEXT */
            )
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(examples, (example, i) => {
              return createBaseVNode(
                "span",
                {
                  key: example.title,
                  class: normalizeClass({ active: Math.floor(step.value / 2) === i })
                },
                toDisplayString(i + 1) + ". " + toDisplayString(example.title),
                3
                /* TEXT, CLASS */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4753f123"]]);
const _sfc_main = {
  __name: "slides.md__slidev_3",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_ObservationProblems = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 2))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "Visible appearance does not reveal all canvas state",
              -1
              /* CACHED */
            )),
            createVNode(_component_ObservationProblems)
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
