import { aG as createStaticVNode, o as openBlock, b as createBlock, w as withCtx, g as createBaseVNode, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-DCd3fsyH.js";
import { _ as _imports_0 } from "./canvasobs-teaser-sA79N2s9.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-BZ9LmUBo.js";
import { _ as _export_sfc } from "./index-_oBFeUd_.js";
import { I as InjectedLayout } from "./slidev/none-yf68NJKT.js";
import "./modules/shiki-BYicmHTF.js";
const _imports_1 = "/slides/canvasobs/images/canvasobs-paper-qr.png";
const _imports_2 = "/slides/canvasobs/images/jiahaox-website-qr.png";
const _sfc_main$1 = {
  __name: "ClosingSlide",
  setup(__props) {
    useSlideContext();
    return (_ctx, _cache) => {
      return _cache[0] || (_cache[0] = createStaticVNode('<div class="closing-body" data-v-ece97dc1><div class="closing-summary" data-v-ece97dc1><h2 data-v-ece97dc1>CanvasObs</h2><img class="closing-prototype" src="' + _imports_0 + '" alt="CanvasObs connects the canvas with structured observations of identity, visibility, relations, and offscreen objects" data-v-ece97dc1><div class="closing-messages" data-v-ece97dc1><p data-v-ece97dc1><strong data-v-ece97dc1>Expose hidden canvas state.</strong><br data-v-ece97dc1>Connect visual context with structure.</p><p data-v-ece97dc1><strong data-v-ece97dc1>Choose the right objects.</strong><br data-v-ece97dc1>Keep the editing pipeline fixed.</p></div></div><div class="closing-links" data-v-ece97dc1><figure class="closing-website" data-v-ece97dc1><a href="https://arxiv.org/abs/2610.27176" target="_blank" rel="noopener noreferrer" data-v-ece97dc1><img src="' + _imports_1 + '" alt="QR code linking to the CanvasObs paper on arXiv" width="190" height="190" data-v-ece97dc1></a><figcaption data-v-ece97dc1><a href="https://arxiv.org/abs/2610.27176" target="_blank" rel="noopener noreferrer" data-v-ece97dc1>Read the paper</a></figcaption></figure><figure class="closing-website" data-v-ece97dc1><a href="https://www.jiahaox.com/" target="_blank" rel="noopener noreferrer" data-v-ece97dc1><img src="' + _imports_2 + '" alt="QR code for Jiahao Xu’s website" width="300" height="300" data-v-ece97dc1></a><figcaption data-v-ece97dc1><a href="https://www.jiahaox.com/" target="_blank" rel="noopener noreferrer" data-v-ece97dc1>www.jiahaox.com</a></figcaption></figure></div></div><footer class="closing-contact" data-v-ece97dc1><p data-v-ece97dc1>Jiahao Xu <span data-v-ece97dc1>/ Virginia Tech</span></p><a href="mailto:jiahao@vt.edu" data-v-ece97dc1>jiahao@vt.edu</a></footer>', 2));
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ece97dc1"]]);
const _sfc_main = {
  __name: "slides.md__slidev_9",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_ClosingSlide = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 8))),
        {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode(
              "h1",
              null,
              "Thank you!",
              -1
              /* CACHED */
            )),
            createVNode(_component_ClosingSlide)
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
