import { L as watch, o as openBlock, e as createElementBlock, au as withDirectives, av as vShow, g as createBaseVNode, an as createTextVNode, aG as createStaticVNode, j as createCommentVNode, F as Fragment, r as ref, z as computed, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _imports_0 = "/slides/canvasobs/videos/grouping-notes-poster.png";
const _imports_1 = "/slides/canvasobs/videos/grouping-notes.mp4?v=14";
const _hoisted_1 = { class: "grouping-demo" };
const _hoisted_2 = {
  key: 0,
  class: "agent-context"
};
const _sfc_main$1 = {
  __name: "GroupingDemo",
  setup(__props) {
    const { $clicks } = useSlideContext();
    const showContext = computed(() => $clicks.value > 0);
    const video = ref(null);
    watch(showContext, (revealed) => {
      if (revealed) video.value?.pause();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          withDirectives(createBaseVNode(
            "div",
            _hoisted_1,
            [
              _cache[1] || (_cache[1] = createBaseVNode(
                "aside",
                { class: "demo-context" },
                [
                  createBaseVNode("p", null, [
                    createTextVNode("tldraw"),
                    createBaseVNode("br"),
                    createTextVNode("agent kit")
                  ]),
                  createBaseVNode("p", { class: "demo-model" }, "GPT-5.4")
                ],
                -1
                /* CACHED */
              )),
              createBaseVNode(
                "video",
                {
                  ref_key: "video",
                  ref: video,
                  controls: "",
                  playsinline: "",
                  preload: "metadata",
                  poster: _imports_0,
                  "aria-label": "tldraw agent kit groups six notes into Research, Launch, and Bug Fixes"
                },
                [..._cache[0] || (_cache[0] = [
                  createBaseVNode(
                    "source",
                    {
                      src: _imports_1,
                      type: "video/mp4"
                    },
                    null,
                    -1
                    /* CACHED */
                  )
                ])],
                512
                /* NEED_PATCH */
              )
            ],
            512
            /* NEED_PATCH */
          ), [
            [vShow, !showContext.value]
          ]),
          showContext.value ? (openBlock(), createElementBlock("section", _hoisted_2, [..._cache[2] || (_cache[2] = [
            createStaticVNode('<h2 data-v-6bfb5baa>Main context provided to the tldraw agent kit</h2><div class="context-layout" data-v-6bfb5baa><div class="context-example" data-v-6bfb5baa><img src="' + _imports_0 + '" alt="The prototype workspace used in the grouping demonstration" data-v-6bfb5baa></div><dl data-v-6bfb5baa><div data-v-6bfb5baa><dt data-v-6bfb5baa>Viewport image</dt><dd data-v-6bfb5baa>A rendered image of the agent’s current view.</dd></div><div data-v-6bfb5baa><dt data-v-6bfb5baa>In-view shape summaries</dt><dd data-v-6bfb5baa>Object IDs, types, text, positions, and sizes.</dd></div><div data-v-6bfb5baa><dt data-v-6bfb5baa>Offscreen clusters</dt><dd data-v-6bfb5baa>Object counts and bounding boxes.</dd></div><div data-v-6bfb5baa><dt data-v-6bfb5baa>Task and interaction context</dt><dd data-v-6bfb5baa>Request, selection, history, and detailed attached shapes.</dd></div></dl></div>', 2)
          ])])) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6bfb5baa"]]);
const _sfc_main = {
  __name: "slides.md__slidev_2",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_GroupingDemo = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 1))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "AI agents can edit a 2D infinite canvas",
              -1
              /* CACHED */
            )),
            createVNode(_component_GroupingDemo)
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
