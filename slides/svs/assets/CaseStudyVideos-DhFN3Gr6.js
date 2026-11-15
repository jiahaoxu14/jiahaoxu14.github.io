import { L as watch, p as nextTick, G as onBeforeUnmount, o as openBlock, e as createElementBlock, g as createBaseVNode, t as toDisplayString, U as unref, ak as withModifiers, m as mergeProps, j as createCommentVNode, r as ref, z as computed } from "./modules/vue-BNFSZGH4.js";
import { _ as _export_sfc, u as useNav } from "./index-BenZRoUb.js";
import { u as useSlideContext } from "./slidev/context-NoJkDP_T.js";
const _hoisted_1 = ["data-task"];
const _hoisted_2 = { class: "dataset" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "recording-frame" };
const _hoisted_5 = ["src", "poster", "aria-label"];
const _hoisted_6 = {
  key: 0,
  class: "brush-emphasis",
  viewBox: "0 0 1920 1080",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  key: 1,
  class: "print-posters single-poster"
};
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = { key: 2 };
const _hoisted_10 = {
  key: 3,
  "aria-live": "polite"
};
const _sfc_main = {
  __name: "CaseStudyVideos",
  props: { task: { type: String, required: true } },
  setup(__props) {
    const props = __props;
    const { $page, $renderContext, $clicks } = useSlideContext();
    const { currentPage, isPrintMode } = useNav();
    const active = computed(() => !isPrintMode.value && currentPage.value === $page.value && ["slide", "presenter"].includes($renderContext.value));
    const player = ref(null);
    const elapsed = ref(0);
    const playMessage = ref("");
    const clips = {
      relevance: {
        file: "case-study-relevance",
        layout: "Source-guided layout",
        dataset: "WCEP / 60 documents",
        posterSummary: "Brushing reveals an undercovered science topic: 26 documents.",
        description: "A real prototype recording: orange summary anchors cluster around business sources. The user brushes the business region, then a science region, and hovers its topic label to expose the undercovered science group.",
        cues: [
          [0, "Orange anchors locate summary sentences in the source map."],
          [8, "Brush the business region to inspect its topic."],
          [12, "Global infrastructure: close to the orange summary anchors."],
          [18, "Brush the science region, away from the summary anchors."],
          [23, "Science topic: 26 documents, with little summary coverage."]
        ]
      },
      consistency: {
        file: "case-study-consistency",
        layout: "Summary-guided layout",
        dataset: "Multi-News / Hurricane Harvey / 8 documents",
        posterSummary: "The summary says Category 5; the source reports Category 4.",
        description: "A real prototype recording: select Harvey S1, inspect the supported warm-water claim, zoom and scroll through doc_001, then inspect the contradicted landfall claim and the Category 4 evidence in doc_002.",
        cues: [
          [0, "One sentence contains both supported and contradicted claims."],
          [5, "Claim 1: inspect the warm-water evidence in doc_001."],
          [25, "Claim 2: compare the Category 5 claim with doc_002."],
          [34, "The source says Category 4; the 130 mph wind speed agrees."]
        ]
      }
    };
    const clip = computed(() => {
      if (!Object.hasOwn(clips, props.task)) throw new Error(`Unknown case study: ${props.task}`);
      return clips[props.task];
    });
    const cue = computed(() => clip.value.cues.filter(([time]) => time <= elapsed.value).at(-1)[1]);
    const brush = computed(() => {
      if (props.task !== "relevance") return null;
      if (elapsed.value >= 12 && elapsed.value < 16) return { x: 1320, y: 220, width: 515, height: 500 };
      if (elapsed.value >= 23 && elapsed.value < 35.5) return { x: 680, y: 475, width: 365, height: 436 };
      return null;
    });
    function pauseVideo() {
      player.value?.pause();
    }
    watch([active, clip, $clicks], async () => {
      pauseVideo();
      elapsed.value = 0;
      playMessage.value = "";
      await nextTick();
      if (!active.value) return;
      if (!player.value) return;
      player.value.defaultPlaybackRate = 1.25;
      player.value.playbackRate = 1.25;
      player.value.currentTime = 0;
      if ($clicks.value < 1) return;
      try {
        await player.value.play();
      } catch (error) {
        if (error.name !== "AbortError") playMessage.value = "Press Play to start the recording.";
      }
    }, { immediate: true, flush: "post" });
    onBeforeUnmount(pauseVideo);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: "case-study-videos",
        "data-task": __props.task,
        "aria-label": "Recorded prototype case study"
      }, [
        createBaseVNode("header", null, [
          _cache[4] || (_cache[4] = createBaseVNode(
            "h1",
            null,
            "Demo",
            -1
            /* CACHED */
          )),
          createBaseVNode("p", null, [
            createBaseVNode(
              "span",
              null,
              toDisplayString(clip.value.layout),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "span",
              _hoisted_2,
              toDisplayString(clip.value.dataset),
              1
              /* TEXT */
            )
          ])
        ]),
        !unref(isPrintMode) ? (openBlock(), createElementBlock("figure", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock("video", {
              key: clip.value.file,
              ref_key: "player",
              ref: player,
              src: `/slides/svs/videos/${clip.value.file}.mp4`,
              poster: `/slides/svs/videos/${clip.value.file}.jpg`,
              "aria-label": clip.value.description,
              controls: "",
              muted: "",
              playsinline: "",
              preload: "metadata",
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"])),
              onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {
              }, ["stop"])),
              onKeydown: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"])),
              onTimeupdate: _cache[3] || (_cache[3] = ($event) => elapsed.value = $event.target.currentTime)
            }, null, 40, _hoisted_5)),
            brush.value ? (openBlock(), createElementBlock("svg", _hoisted_6, [
              createBaseVNode(
                "rect",
                mergeProps(brush.value, { class: "brush-halo" }),
                null,
                16
                /* FULL_PROPS */
              ),
              createBaseVNode(
                "rect",
                mergeProps(brush.value, { class: "brush-outline" }),
                null,
                16
                /* FULL_PROPS */
              )
            ])) : createCommentVNode("v-if", true)
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("figure", null, [
            createBaseVNode("img", {
              src: `/slides/svs/videos/${clip.value.file}.jpg`,
              alt: clip.value.description
            }, null, 8, _hoisted_8),
            createBaseVNode(
              "figcaption",
              null,
              toDisplayString(clip.value.posterSummary),
              1
              /* TEXT */
            )
          ])
        ])),
        unref(isPrintMode) ? (openBlock(), createElementBlock(
          "footer",
          _hoisted_9,
          "Recording: " + toDisplayString(clip.value.file) + ".mp4",
          1
          /* TEXT */
        )) : (openBlock(), createElementBlock(
          "footer",
          _hoisted_10,
          toDisplayString(playMessage.value || cue.value),
          1
          /* TEXT */
        ))
      ], 8, _hoisted_1);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b8a77e1"]]);
export {
  __unplugin_components_0 as _
};
