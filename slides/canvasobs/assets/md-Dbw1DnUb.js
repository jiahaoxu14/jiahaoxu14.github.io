import { o as openBlock, e as createElementBlock, aG as createStaticVNode, b as createBlock, w as withCtx, g as createBaseVNode, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "experiment" };
const _sfc_main$1 = {
  __name: "EvaluationExperiment",
  setup(__props) {
    useSlideContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1, [..._cache[0] || (_cache[0] = [
        createStaticVNode('<p class="intro" data-v-c8c8f22a>Original tldraw agentic kit <span data-v-c8c8f22a>vs.</span> CanvasObs</p><div class="tasks" data-v-c8c8f22a><div data-v-c8c8f22a><span class="number" data-v-c8c8f22a>01</span><h2 data-v-c8c8f22a>Retrieve an offscreen copy</h2><p data-v-c8c8f22a>Find the editable version of the takeaway.</p></div><div data-v-c8c8f22a><span class="number" data-v-c8c8f22a>02</span><h2 data-v-c8c8f22a>Select an occluded chart</h2><p data-v-c8c8f22a>Choose the blue chart from overlapping drafts.</p></div><div data-v-c8c8f22a><span class="number" data-v-c8c8f22a>03</span><h2 data-v-c8c8f22a>Separate cards by membership</h2><p data-v-c8c8f22a>Move the two unattached cards to Setup B.</p></div><div data-v-c8c8f22a><span class="number" data-v-c8c8f22a>04</span><h2 data-v-c8c8f22a>Preserve an evidence link</h2><p data-v-c8c8f22a>Move the finding with a bound evidence connection.</p></div></div><div class="terms" data-v-c8c8f22a><div data-v-c8c8f22a><h3 data-v-c8c8f22a>1,200 trials</h3><p data-v-c8c8f22a>One agent attempt per trial</p></div><div data-v-c8c8f22a><h3 data-v-c8c8f22a>10 configurations</h3><p data-v-c8c8f22a>Different canvas setups</p></div><div data-v-c8c8f22a><h3 data-v-c8c8f22a>3 models</h3><p data-v-c8c8f22a>Sonnet 4.5 · GPT-5.4<br data-v-c8c8f22a>GPT-5.4-mini</p></div><div data-v-c8c8f22a><h3 data-v-c8c8f22a>2 variants</h3><p data-v-c8c8f22a>Original tldraw agentic kit<br data-v-c8c8f22a>CanvasObs</p></div></div><p class="repeats" data-v-c8c8f22a>20 repeats per configuration, model, and variant</p>', 4)
      ])]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c8c8f22a"]]);
const _sfc_main = {
  __name: "slides.md__slidev_6",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_EvaluationExperiment = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 5))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "Experiment",
              -1
              /* CACHED */
            )),
            createVNode(_component_EvaluationExperiment)
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
