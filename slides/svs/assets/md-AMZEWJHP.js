import { _ as __unplugin_components_0 } from "./SpatialLayoutsOverview-BL0fK6i5.js";
import { o as openBlock, b as createBlock, w as withCtx, d as createVNode, v as normalizeProps, x as guardReactiveProps, U as unref } from "./modules/vue-BNFSZGH4.js";
import { I as InjectedLayout } from "./slidev/none-DV0Q9WCJ.js";
import { u as useSlideContext, f as frontmatterToProps } from "./slidev/context-NoJkDP_T.js";
import "./index-BenZRoUb.js";
import "./modules/shiki-Cv5xHaXs.js";
const _sfc_main = {
  __name: "slides.md__slidev_10",
  setup(__props) {
    const { $clicksContext, $frontmatter } = useSlideContext();
    $clicksContext.setup();
    return (_ctx, _cache) => {
      const _component_SpatialLayoutsOverview = __unplugin_components_0;
      return openBlock(), createBlock(
        InjectedLayout,
        normalizeProps(guardReactiveProps(unref(frontmatterToProps)(unref($frontmatter), 9))),
        {
          default: withCtx(() => [
            createVNode(_component_SpatialLayoutsOverview)
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
