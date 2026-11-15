import { o as openBlock, e as createElementBlock, g as createBaseVNode, F as Fragment, al as renderList, t as toDisplayString, aH as createStaticVNode, k as normalizeStyle, an as createTextVNode, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { _ as _export_sfc } from "./index-BenZRoUb.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = {
  class: "user-study",
  "aria-label": "Comparative user study design and research questions"
};
const _hoisted_2 = {
  class: "research-section",
  "aria-label": "Study questions"
};
const _hoisted_3 = {
  class: "research-questions",
  "aria-label": "The paper's three research questions"
};
const _hoisted_4 = {
  class: "evaluation-setup",
  "aria-label": "Study setup"
};
const _hoisted_5 = { class: "conditions" };
const _sfc_main$1 = {
  __name: "UserStudy",
  setup(__props) {
    useSlideContext();
    const conditions = [
      { name: "Linear", color: "var(--svs-condition-linear)", description: "Fixed sequential source list" },
      { name: "Source-guided", color: "var(--svs-condition-source)", description: "Sources grouped by content similarity" },
      { name: "Summary-guided", color: "var(--svs-condition-summary)", description: "Sources aligned with the summary" }
    ];
    const questions = [
      "Does spatial document organization improve user performance over a Linear baseline for multi-document summary verification?",
      "How do Summary-guided and Source-guided layouts differ in supporting different verification tasks?",
      "How do users perceive and use the three organization conditions during verification?"
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[2] || (_cache[2] = createBaseVNode(
          "header",
          null,
          [
            createBaseVNode("h1", null, "Evaluation")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("section", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode(
            "h2",
            { class: "section-title" },
            "Study questions",
            -1
            /* CACHED */
          )),
          createBaseVNode("ol", _hoisted_3, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(questions, (question, index) => {
                return createBaseVNode("li", { key: question }, [
                  createBaseVNode(
                    "strong",
                    null,
                    "Q" + toDisplayString(index + 1),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "p",
                    null,
                    toDisplayString(question),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        createBaseVNode("section", _hoisted_4, [
          _cache[1] || (_cache[1] = createStaticVNode('<h2 class="section-title" data-v-82cdeec2>Study setup</h2><div class="study-facts" data-v-82cdeec2><p data-v-82cdeec2><strong data-v-82cdeec2>18</strong> participants<span data-v-82cdeec2>Each used all three layouts</span></p><p data-v-82cdeec2><strong data-v-82cdeec2>3</strong> WCEP collections<span data-v-82cdeec2>60 documents per collection</span></p><p data-v-82cdeec2><strong data-v-82cdeec2>10</strong> tasks per condition<span data-v-82cdeec2>7 relevance + 3 consistency</span></p></div>', 2)),
          createBaseVNode("div", _hoisted_5, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(conditions, (condition) => {
                return createBaseVNode("div", {
                  key: condition.name
                }, [
                  createBaseVNode("h3", null, [
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
                  ]),
                  createBaseVNode(
                    "p",
                    null,
                    toDisplayString(condition.description),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82cdeec2"]]);
const _sfc_main = {
  __name: "slides.md__slidev_17",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_UserStudy = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 16))),
        {
          default: withCtx(() => [
            createVNode(_component_UserStudy)
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
