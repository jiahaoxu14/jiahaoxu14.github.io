import { o as openBlock, e as createElementBlock, g as createBaseVNode, F as Fragment, al as renderList, n as normalizeClass, t as toDisplayString, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import { _ as _export_sfc } from "./index-BenZRoUb.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import "./modules/shiki-Cv5xHaXs.js";
const _hoisted_1 = {
  class: "user-study-tasks",
  "aria-label": "User study tasks"
};
const _hoisted_2 = { class: "task-columns" };
const _hoisted_3 = ["aria-labelledby"];
const _hoisted_4 = ["id"];
const _hoisted_5 = ["start"];
const _hoisted_6 = ["data-task"];
const _sfc_main$1 = {
  __name: "UserStudyTasks",
  setup(__props) {
    useSlideContext();
    const relevanceTasks = [
      { id: "T1", text: "Identify topics discussed in the sources" },
      { id: "T2", text: "Estimate how many documents discuss a topic" },
      { id: "T3", text: "Compare topic emphasis in the summary" },
      { id: "T4", text: "Find the most relevant source for the whole summary" },
      { id: "T5", text: "Find the least relevant source for the whole summary" },
      { id: "T6", text: "Find the top two sources for a summary sentence" },
      { id: "T7", text: "Find the most relevant summary sentence for a source" }
    ];
    const consistencyTasks = [
      { id: "T8", text: "Select all sources contributing to a summary sentence's inference judgment" },
      { id: "T9", text: "Identify a claim contradicted by the sources" },
      { id: "T10", text: "Identify a claim with neither supporting nor contradicting evidence" }
    ];
    const taskGroups = [
      {
        category: "Relevance",
        tone: "relevance",
        tasks: relevanceTasks,
        start: 1
      },
      {
        category: "Consistency",
        tone: "consistency",
        tasks: consistencyTasks,
        start: 8
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode(
          "header",
          null,
          [
            createBaseVNode("h1", null, "Evaluation"),
            createBaseVNode("p", null, "10 tasks per condition")
          ],
          -1
          /* CACHED */
        )),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(taskGroups, (group) => {
              return createBaseVNode("section", {
                key: group.tone,
                class: normalizeClass(group.tone),
                "aria-labelledby": `${group.tone}-tasks-title`
              }, [
                createBaseVNode("h2", {
                  id: `${group.tone}-tasks-title`
                }, toDisplayString(group.category), 9, _hoisted_4),
                createBaseVNode("ol", {
                  start: group.start
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(group.tasks, (task) => {
                      return openBlock(), createElementBlock("li", {
                        key: task.id,
                        class: "task-row",
                        "data-task": task.id
                      }, [
                        createBaseVNode(
                          "strong",
                          null,
                          toDisplayString(task.id),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode(
                          "p",
                          null,
                          toDisplayString(task.text),
                          1
                          /* TEXT */
                        )
                      ], 8, _hoisted_6);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 8, _hoisted_5)
              ], 10, _hoisted_3);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0723e305"]]);
const _sfc_main = {
  __name: "slides.md__slidev_18",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_UserStudyTasks = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 17))),
        {
          default: withCtx(() => [
            createVNode(_component_UserStudyTasks)
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
