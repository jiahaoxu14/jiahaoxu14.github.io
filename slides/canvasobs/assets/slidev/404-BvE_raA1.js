import { f as defineComponent, T as useRouter, e as createElementBlock, g as createBaseVNode, an as createTextVNode, t as toDisplayString, U as unref, b as createBlock, j as createCommentVNode, w as withCtx, z as computed, a as resolveComponent, o as openBlock } from "../modules/vue-DCd3fsyH.js";
import { u as useNav, _ as _export_sfc } from "../index-_oBFeUd_.js";
import "../modules/shiki-BYicmHTF.js";
const _hoisted_1 = { class: "grid justify-center text-center pt-15% gap-5" };
const _hoisted_2 = { class: "text-2xl" };
const _hoisted_3 = { class: "op-60" };
const _hoisted_4 = { class: "mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  setup(__props) {
    const { currentRoute } = useRouter();
    const { total } = useNav();
    const guessedSlide = computed(() => {
      const path = currentRoute.value.path;
      const match = path.match(/\d+/);
      if (match) {
        const slideNo = +match[0];
        if (slideNo > 0 && slideNo <= total.value)
          return slideNo;
      }
      return null;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          _cache[2] || (_cache[2] = createBaseVNode(
            "h1",
            { class: "text-9xl font-light" },
            " 404 ",
            -1
            /* CACHED */
          )),
          createBaseVNode("p", _hoisted_2, [
            _cache[0] || (_cache[0] = createTextVNode(
              " Page ",
              -1
              /* CACHED */
            )),
            createBaseVNode(
              "code",
              _hoisted_3,
              toDisplayString(unref(currentRoute).path),
              1
              /* TEXT */
            ),
            _cache[1] || (_cache[1] = createTextVNode(
              " not found ",
              -1
              /* CACHED */
            ))
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          guessedSlide.value !== 1 ? (openBlock(), createBlock(_component_RouterLink, {
            key: 0,
            to: "/",
            class: "page-link"
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode(
                " Go Home ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          guessedSlide.value ? (openBlock(), createBlock(_component_RouterLink, {
            key: 1,
            to: `/${guessedSlide.value}`,
            class: "page-link"
          }, {
            default: withCtx(() => [
              createTextVNode(
                " Go to Slide " + toDisplayString(guessedSlide.value),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["to"])) : createCommentVNode("v-if", true)
        ])
      ]);
    };
  }
});
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a62a1e8a"]]);
export {
  _404 as default
};
