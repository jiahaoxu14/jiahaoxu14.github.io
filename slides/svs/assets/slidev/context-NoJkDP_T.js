import { a9 as injectLocal, z as computed, r as ref, as as toRef, aJ as objectOmit } from "../modules/vue-BNFSZGH4.js";
import { G as injectionClicksContext, H as injectionSlideZoom, y as injectionSlideScale, C as injectionFrontmatter, E as injectionRenderContext, B as injectionRoute, D as injectionCurrentPage, a9 as injectionSlidevContext, aa as HEADMATTER_FIELDS, ab as FRONTMATTER_FIELDS } from "../index-BenZRoUb.js";
function useSlideContext() {
  const $slidev = injectLocal(injectionSlidevContext);
  const $nav = toRef($slidev, "nav");
  const $clicksContext = injectLocal(injectionClicksContext).value;
  const $clicks = toRef($clicksContext, "current");
  const $page = injectLocal(injectionCurrentPage);
  const $renderContext = injectLocal(injectionRenderContext);
  const $frontmatter = injectLocal(injectionFrontmatter, {});
  const $route = injectLocal(injectionRoute, void 0);
  const $scale = injectLocal(injectionSlideScale, ref(1));
  const $zoom = injectLocal(injectionSlideZoom, computed(() => 1));
  return {
    $slidev,
    $nav,
    $clicksContext,
    $clicks,
    $page,
    $route,
    $renderContext,
    $frontmatter,
    $scale,
    $zoom
  };
}
function frontmatterToProps(frontmatter, pageNo) {
  return {
    ...objectOmit(frontmatter, pageNo === 0 ? HEADMATTER_FIELDS : FRONTMATTER_FIELDS),
    frontmatter
  };
}
export {
  frontmatterToProps as f,
  useSlideContext as u
};
