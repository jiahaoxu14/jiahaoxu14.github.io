const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-XCH24tS_.js","assets/modules/vue-DCd3fsyH.js","assets/canvasobs-teaser-sA79N2s9.js","assets/slidev/none-B8I3P91o.js","assets/slidev/context-BoeIygqB.js","assets/modules/shiki-BYicmHTF.js","assets/modules/shiki-BFcF5iNl.css","assets/md-DUZqH8Ch.js","assets/md-ByukD-4l.css","assets/md-NwU7Dyly.js","assets/md-BIAwFZIC.css","assets/md-DAPFWvCa.js","assets/md-BOIAJS3J.css","assets/md-DtLyC87n.js","assets/md-DOEcqIJg.css","assets/md-DOwCgj3d.js","assets/md-EX6Dc-Wy.css","assets/md-Wbua4pqz.js","assets/md-Bw0lnKwW.css","assets/md-CQZ24xCq.js","assets/md-B5L_2vrB.css","assets/md-B5YF6AJ9.js","assets/md-pRnwMSwM.css","assets/slidev/play-CjAlcRyu.js","assets/modules/unplugin-icons-CDWZ4-sC.js","assets/play-BmdNipyv.css","assets/slidev/404-D5DfiAXZ.js","assets/404-CnFFVeEy.css"])))=>i.map(i=>d[i]);
import { z as computed, A as isRef, B as toValue, C as hasInjectionContext, D as inject, E as watchEffect, G as onBeforeUnmount, H as onDeactivated, I as onActivated, J as getCurrentScope, r as ref, K as getCurrentInstance, L as watch, M as onMounted, N as onUnmounted, O as shallowReactive, P as isReadonly, o as openBlock, e as createElementBlock, t as toDisplayString, f as defineComponent, F as Fragment, g as createBaseVNode, j as createCommentVNode, Q as reactive, R as shallowRef, S as defineAsyncComponent, T as useRouter, p as nextTick, U as unref, V as useMagicKeys, W as useFullscreen, X as useLocalStorage, Y as useBreakpoints, Z as useToggle, _ as useActiveElement, $ as breakpointsTailwind, a0 as isClient, a1 as useWindowSize, a2 as createSharedComposable, a3 as useRoute, a4 as usePreferredDark, a5 as useStyleTag, a6 as toRaw, b as createBlock, a as resolveComponent, a7 as useElementBounding, a8 as onClickOutside, a9 as injectLocal, aa as useWindowFocus, ab as directive, ac as createRouter, ad as createWebHashHistory, c as createApp } from "./modules/vue-DCd3fsyH.js";
import { T as TwoslashFloatingVue } from "./modules/shiki-BYicmHTF.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const configs = { "theme": "default", "title": "CanvasObs: Structured Spatial Observation for Agent Editing on 2D Infinite Canvases", "titleTemplate": "%s - Slidev", "addons": [], "remoteAssets": false, "monaco": true, "monacoTypesSource": "local", "monacoTypesAdditionalPackages": [], "monacoTypesIgnorePackages": [], "monacoRunAdditionalDeps": [], "monacoRunUseStrict": true, "download": false, "export": {}, "info": "<p>VISxGenAI 2026, co-located with IEEE VIS 2026</p>\n", "highlighter": "shiki", "twoslash": true, "lineNumbers": false, "colorSchema": "light", "routerMode": "hash", "aspectRatio": 1.7777777777777777, "canvasWidth": 1280, "exportFilename": "", "selectable": false, "themeConfig": {}, "fonts": { "sans": ['"DC Sans"', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], "serif": ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], "mono": ['"Fira Code"', "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"], "webfonts": [], "provider": "google", "local": ["DC Sans", "Fira Code"], "italic": false, "weights": ["200", "400", "600"] }, "favicon": "https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png", "drawings": { "enabled": true, "persist": false, "presenterOnly": false, "syncAll": true }, "plantUmlServer": "https://www.plantuml.com/plantuml", "codeCopy": true, "magicMoveCopy": true, "author": "Jiahao Xu, Haohui Wang, Rebecca Faust, Dawei Zhou, and Chris North", "record": "dev", "css": "unocss", "presenter": false, "browserExporter": "dev", "htmlAttrs": {}, "transition": "fade", "editor": true, "contextMenu": null, "wakeLock": true, "mdc": false, "comark": false, "seoMeta": {}, "notesAutoRuby": {}, "duration": "30min", "timer": "stopwatch", "magicMoveDuration": 800, "preloadImages": true, "layout": "none", "class": "title-slide", "talkSeconds": 20, "slidesTitle": "CanvasObs: Structured Spatial Observation for Agent Editing on 2D Infinite Canvases - Slidev" };
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}
function sum(...args) {
  return flattenArrayable(args).reduce((a, b) => a + b, 0);
}
function toArray(array) {
  array = array ?? [];
  return Array.isArray(array) ? array : [array];
}
function flattenArrayable(array) {
  return toArray(array).flat(1);
}
function uniq(array) {
  return Array.from(new Set(array));
}
function range(...args) {
  let start, stop, step;
  if (args.length === 1) {
    start = 0;
    step = 1;
    [stop] = args;
  } else {
    [start, stop, step = 1] = args;
  }
  const arr = [];
  let current = start;
  while (current < stop) {
    arr.push(current);
    current += step || 1;
  }
  return arr;
}
function notNullish(v) {
  return v != null;
}
function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => fn(k, v)).filter(notNullish)
  );
}
const mode = "build";
const slideAspect = computed(() => configs.aspectRatio);
const slideWidth = computed(() => configs.canvasWidth);
const slideHeight = computed(() => Math.ceil(slideWidth.value / slideAspect.value));
const themeVars = computed(() => {
  return objectMap(configs.themeConfig || {}, (k, v) => [`--slidev-theme-${k}`, v]);
});
const slidesTitle = configs.slidesTitle;
const setups$2 = [Object.values([])[0], Object.values([])[0]].filter(Boolean);
const DupeableTags = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
const TagsWithInnerContent = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
const HasElementTags = /* @__PURE__ */ new Set([
  "base",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
const ValidHeadTags = /* @__PURE__ */ new Set([
  "title",
  "base",
  "htmlAttrs",
  "bodyAttrs",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
const UniqueTags = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
const TagConfigKeys = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
const UsesMergeStrategy = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
const MetaTagsArrayable = /* @__PURE__ */ new Set([
  "theme-color",
  "google-site-verification",
  "og",
  "article",
  "book",
  "profile",
  "twitter",
  "author"
]);
const hasContent = (value) => typeof value === "number" ? Number.isFinite(value) : value;
// @__NO_SIDE_EFFECTS__
function isUnsafeKey(key) {
  return key === "__proto__" || key === "constructor" || key === "prototype";
}
const sortTags = (a, b) => a._w === b._w ? a._p - b._p : a._w - b._w;
const TAG_WEIGHTS = {
  base: -10,
  title: 10
};
const TAG_ALIASES = {
  critical: -8,
  high: -1,
  low: 2
};
const WEIGHT_MAP = {
  meta: {
    "content-security-policy": -30,
    "charset": -20,
    "viewport": -15
  },
  link: {
    "preconnect": 20,
    "stylesheet": 60,
    "preload": 70,
    "modulepreload": 70,
    "prefetch": 90,
    "dns-prefetch": 90,
    "prerender": 90
  },
  script: {
    async: 30,
    defer: 80,
    sync: 50
  },
  style: {
    imported: 40,
    sync: 60
  }
};
const ImportStyleRe = /@import/;
const isTruthy = (val) => val === "" || val === true;
function tagWeight(head, tag) {
  if (typeof tag.tagPriority === "number")
    return tag.tagPriority;
  let weight = 100;
  const offset = TAG_ALIASES[tag.tagPriority] || 0;
  const weightMap = head.resolvedOptions.disableCapoSorting ? {
    link: {},
    script: {},
    style: {}
  } : WEIGHT_MAP;
  if (tag.tag in TAG_WEIGHTS) {
    weight = TAG_WEIGHTS[tag.tag];
  } else if (tag.tag === "meta") {
    const metaType = tag.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : tag.props.charset ? "charset" : tag.props.name === "viewport" ? "viewport" : null;
    if (metaType)
      weight = WEIGHT_MAP.meta[metaType];
  } else if (tag.tag === "link" && tag.props.rel) {
    weight = weightMap.link[tag.props.rel];
  } else if (tag.tag === "script") {
    const type = String(tag.props.type);
    if (isTruthy(tag.props.async)) {
      weight = weightMap.script.async;
    } else if (tag.props.src && !isTruthy(tag.props.defer) && !isTruthy(tag.props.async) && type !== "module" && !type.endsWith("json") || tag.innerHTML && !type.endsWith("json")) {
      weight = weightMap.script.sync;
    } else if (isTruthy(tag.props.defer) && tag.props.src && !isTruthy(tag.props.async) || type === "module") {
      weight = weightMap.script.defer;
    }
  } else if (tag.tag === "style") {
    weight = tag.innerHTML && ImportStyleRe.test(tag.innerHTML) ? weightMap.style.imported : weightMap.style.sync;
  }
  return (weight || 100) + offset;
}
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
    else if (typeof subHook === "function") hooks[name] = subHook;
  }
  return hooks;
}
const createTask = /* @__PURE__ */ (() => {
  if (console.createTask) return console.createTask;
  const defaultTask = { run: (fn) => fn() };
  return () => defaultTask;
})();
function callHooks(hooks, args, startIndex, task) {
  for (let i = startIndex; i < hooks.length; i += 1) try {
    const result = task ? task.run(() => hooks[i](...args)) : hooks[i](...args);
    if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks(hooks, args, i + 1, task));
  } catch (error) {
    return Promise.reject(error);
  }
}
function serialTaskCaller(hooks, args, name) {
  if (hooks.length > 0) return callHooks(hooks, args, 0, createTask(name));
}
function parallelTaskCaller(hooks, args, name) {
  if (hooks.length > 0) {
    const task = createTask(name);
    return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
  }
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
  _hooks;
  _before;
  _after;
  _deprecatedHooks;
  _deprecatedMessages;
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") return () => {
    };
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) try {
      Object.defineProperty(function_, "name", {
        get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
        configurable: true
      });
    } catch {
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") _unreg();
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    const hooks = this._hooks[name];
    if (hooks) {
      const index = hooks.indexOf(function_);
      if (index !== -1) hooks.splice(index, 1);
      if (hooks.length === 0) this._hooks[name] = void 0;
    }
  }
  clearHook(name) {
    this._hooks[name] = void 0;
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    this._hooks[name] = void 0;
    for (const hook of _hooks) this.hook(name, hook);
  }
  deprecateHooks(deprecatedHooks) {
    for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      for (const unreg of removeFns) unreg();
      removeFns.length = 0;
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) this.removeHook(key, hooks[key]);
  }
  removeAllHooks() {
    this._hooks = {};
  }
  callHook(name, ...args) {
    return this.callHookWith(serialTaskCaller, name, args);
  }
  callHookParallel(name, ...args) {
    return this.callHookWith(parallelTaskCaller, name, args);
  }
  callHookWith(caller, name, args) {
    const event = this._before || this._after ? {
      name,
      args,
      context: {}
    } : void 0;
    if (this._before) callEachWith(this._before, event);
    const result = caller(this._hooks[name] ? [...this._hooks[name]] : [], args, name);
    if (result instanceof Promise) return result.finally(() => {
      if (this._after && event) callEachWith(this._after, event);
    });
    if (this._after && event) callEachWith(this._after, event);
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) this._before.splice(index, 1);
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) this._after.splice(index, 1);
      }
    };
  }
};
function createHooks() {
  return new Hookable();
}
const allowedMetaProperties = ["name", "property", "http-equiv"];
const StandardSingleMetaTags = /* @__PURE__ */ new Set([
  "viewport",
  "description",
  "keywords",
  "robots"
]);
function isMetaArrayDupeKey(v) {
  const i = v.indexOf(":");
  if (i === -1)
    return false;
  const j = v.indexOf(":", i + 1);
  const namespace = v.slice(i + 1, j === -1 ? v.length : j);
  if (namespace === "twitter")
    return v === "meta:twitter:image" || v.startsWith("meta:twitter:image:");
  return MetaTagsArrayable.has(namespace);
}
function dedupeKey(tag) {
  const { props, tag: name } = tag;
  if (UniqueTags.has(name))
    return name;
  if (name === "link" && props.rel === "canonical")
    return "canonical";
  if (name === "link" && props.rel === "alternate") {
    if (props.hreflang)
      return `alternate:${props.hreflang}`;
    if (props.type)
      return `alternate:${props.type}:${props.href || ""}`;
  }
  if (props.charset)
    return "charset";
  if (tag.tag === "meta") {
    for (const n of allowedMetaProperties) {
      if (props[n] !== void 0) {
        const propValue = props[n];
        const isStructured = propValue && typeof propValue === "string" && propValue.includes(":");
        const isStandardSingle = propValue && StandardSingleMetaTags.has(propValue);
        const shouldAlwaysDedupe = isStructured || isStandardSingle;
        const keyPart = !shouldAlwaysDedupe && tag.key ? `:key:${tag.key}` : "";
        return `${name}:${propValue}${keyPart}`;
      }
    }
  }
  if (tag.key) {
    return `${name}:key:${tag.key}`;
  }
  if (props.id) {
    return `${name}:id:${props.id}`;
  }
  if (name === "link" && props.rel === "alternate") {
    return `alternate:${props.href || ""}`;
  }
  if (TagsWithInnerContent.has(name)) {
    const v = tag.textContent || tag.innerHTML;
    if (v) {
      return `${name}:content:${v}`;
    }
  }
}
function hashTag(tag) {
  const dedupe = tag._h || tag._d;
  if (dedupe)
    return dedupe;
  const inner = tag.textContent || tag.innerHTML;
  if (inner)
    return inner;
  const keys = Object.keys(tag.props).sort();
  return `${tag.tag}:${keys.map((k) => `${k}:${String(tag.props[k])}`).join(",")}`;
}
function walkResolver(val, resolve, key) {
  const type = typeof val;
  if (type === "function") {
    if (!key || key !== "titleTemplate" && !(key[0] === "o" && key[1] === "n")) {
      val = val();
    }
  }
  const v = resolve ? resolve(key, val) : val;
  if (Array.isArray(v)) {
    let out;
    for (let i = 0; i < v.length; i++) {
      const resolved = walkResolver(v[i], resolve);
      if (out) {
        out[i] = resolved;
      } else if (resolved !== v[i]) {
        out = v.slice(0, i);
        out[i] = resolved;
      }
    }
    return out || v;
  }
  if (v?.constructor === Object) {
    let next;
    for (const k in v) {
      const unsafe = /* @__PURE__ */ isUnsafeKey(k);
      const resolved = unsafe ? void 0 : walkResolver(v[k], resolve, k);
      const requiresCopy = k === "_resolver";
      if (!next && (unsafe || requiresCopy || resolved !== v[k])) {
        next = {};
        for (const previousKey in v) {
          if (previousKey === k) {
            break;
          }
          next[previousKey] = v[previousKey];
        }
      }
      if (next && !unsafe) {
        next[k] = resolved;
      }
    }
    return next || v;
  }
  return v;
}
const INVALID_ATTR_NAME_RE = /[\s"'<>/=\x00-\x1F\x7F]/;
function normalizeStyleClassProps(key, value) {
  const store2 = key === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
  function processValue(rawValue) {
    if (rawValue == null || rawValue === void 0)
      return;
    const value2 = String(rawValue).trim();
    if (!value2)
      return;
    if (key === "style") {
      const [k, ...v] = value2.split(":").map((s) => s ? s.trim() : "");
      if (k && v.length)
        store2.set(k, v.join(":"));
    } else {
      value2.split(" ").filter(Boolean).forEach((c) => store2.add(c));
    }
  }
  if (typeof value === "string") {
    key === "style" ? value.split(";").forEach(processValue) : processValue(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => processValue(item));
  } else if (value && typeof value === "object") {
    Object.entries(value).forEach(([k, v]) => {
      if (v && v !== "false") {
        key === "style" ? store2.set(String(k).trim(), String(v)) : processValue(k);
      }
    });
  }
  return store2;
}
function normalizeProps(tag, input) {
  tag.props = tag.props || {};
  if (!input) {
    return tag;
  }
  if (tag.tag === "templateParams") {
    tag.props = input;
    return tag;
  }
  const isHtmlTag = HasElementTags.has(tag.tag) || tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs";
  for (const prop of Object.keys(input)) {
    if (/* @__PURE__ */ isUnsafeKey(prop))
      continue;
    const isDataKey = prop.startsWith("data-");
    const isHtmlAttr = isHtmlTag && !TagConfigKeys.has(prop);
    const key = isHtmlAttr && !isDataKey ? prop.toLowerCase() : prop;
    if (isHtmlAttr && (!key || INVALID_ATTR_NAME_RE.test(key)))
      continue;
    const value = input[prop];
    if (value === null) {
      tag.props[key] = null;
      continue;
    }
    if (prop === "class" || prop === "style") {
      tag.props[prop] = normalizeStyleClassProps(prop, value);
      continue;
    }
    if (TagConfigKeys.has(prop)) {
      if ((prop === "textContent" || prop === "innerHTML") && typeof value === "object") {
        let type = input.type;
        if (!input.type) {
          type = "application/json";
        }
        if (!type?.endsWith("json") && type !== "speculationrules") {
          continue;
        }
        input.type = type;
        tag.props.type = type;
        tag[prop] = JSON.stringify(value);
      } else {
        tag[prop] = value;
      }
      continue;
    }
    const strValue = String(value);
    const isMetaContentKey = tag.tag === "meta" && key === "content";
    if (strValue === "true" || strValue === "") {
      tag.props[key] = isDataKey || isMetaContentKey ? strValue : true;
    } else if (!value && isDataKey && strValue === "false") {
      tag.props[key] = "false";
    } else if (value !== void 0) {
      tag.props[key] = value;
    }
  }
  return tag;
}
function normalizeTag(tagName, _input) {
  const input = typeof _input === "object" && typeof _input !== "function" ? _input : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: _input };
  const tag = normalizeProps({ tag: tagName, props: {} }, input);
  if (tag.key && DupeableTags.has(tag.tag)) {
    tag.props["data-hid"] = tag._h = tag.key;
  }
  if (tag.tag === "script" && typeof tag.innerHTML === "object") {
    tag.innerHTML = JSON.stringify(tag.innerHTML);
    tag.props.type = tag.props.type || "application/json";
  }
  return Array.isArray(tag.props.content) ? tag.props.content.map((v) => ({ ...tag, props: { ...tag.props, content: v } })) : tag;
}
function normalizeEntryToTags(input, propResolvers) {
  if (!input) {
    return [];
  }
  if (typeof input === "function") {
    input = input();
  }
  const resolvers = (key, val) => {
    for (let i = 0; i < propResolvers.length; i++) {
      val = propResolvers[i](key, val);
    }
    return val;
  };
  input = resolvers(void 0, input);
  const tags = [];
  input = walkResolver(input, resolvers);
  Object.entries(input || {}).forEach(([key, value]) => {
    if (value === void 0)
      return;
    for (const v of Array.isArray(value) ? value : [value])
      tags.push(normalizeTag(key, v));
  });
  return tags.flat();
}
function registerPlugin(head, p) {
  const plugin = typeof p === "function" ? p(head) : p;
  const key = plugin.key || String(head.plugins.size + 1);
  const exists = head.plugins.get(key);
  if (!exists) {
    head.plugins.set(key, plugin);
    head.hooks.addHooks(plugin.hooks || {});
  }
}
// @__NO_SIDE_EFFECTS__
function createUnhead(resolvedOptions = {}) {
  const hooks = createHooks();
  hooks.addHooks(resolvedOptions.hooks || {});
  const ssr = !resolvedOptions.document;
  const entries = /* @__PURE__ */ new Map();
  const plugins = /* @__PURE__ */ new Map();
  const normalizeQueue = /* @__PURE__ */ new Set();
  const head = {
    _entryCount: 1,
    // 0 is reserved for internal use
    plugins,
    dirty: false,
    resolvedOptions,
    hooks,
    ssr,
    entries,
    headEntries() {
      return [...entries.values()];
    },
    use: (p) => registerPlugin(head, p),
    push(input, _options) {
      const options = { ..._options || {} };
      delete options.head;
      const _i = options._index ?? head._entryCount++;
      const inst = { _i, input, options };
      const _ = {
        _poll(rm = false) {
          head.dirty = true;
          !rm && normalizeQueue.add(_i);
          hooks.callHook("entries:updated", head);
        },
        dispose() {
          if (entries.delete(_i)) {
            head.invalidate();
          }
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          if (!options.mode || options.mode === "server" && ssr || options.mode === "client" && !ssr) {
            inst.input = input2;
            entries.set(_i, inst);
            _._poll();
          }
        }
      };
      _.patch(input);
      return _;
    },
    async resolveTags() {
      const ctx = {
        tagMap: /* @__PURE__ */ new Map(),
        tags: [],
        entries: [...head.entries.values()]
      };
      await hooks.callHook("entries:resolve", ctx);
      while (normalizeQueue.size) {
        const i = normalizeQueue.values().next().value;
        normalizeQueue.delete(i);
        const e = entries.get(i);
        if (e) {
          const normalizeCtx = {
            tags: normalizeEntryToTags(e.input, resolvedOptions.propResolvers || []).map((t) => Object.assign(t, e.options)),
            entry: e
          };
          await hooks.callHook("entries:normalize", normalizeCtx);
          e._tags = normalizeCtx.tags.map((t, i2) => {
            t._w = tagWeight(head, t);
            t._p = (e._i << 10) + i2;
            t._d = dedupeKey(t);
            if (!t._d)
              t._h = hashTag(t);
            return t;
          });
        }
      }
      let hasFlatMeta = false;
      ctx.entries.flatMap((e) => (e._tags || []).map((t) => ({ ...t, props: { ...t.props } }))).sort(sortTags).reduce((acc, next) => {
        const k = next._d || next._h;
        if (!acc.has(k))
          return acc.set(k, next);
        const prev = acc.get(k);
        const strategy = next?.tagDuplicateStrategy || (UsesMergeStrategy.has(next.tag) ? "merge" : null) || (next.key && next.key === prev.key ? "merge" : null);
        if (strategy === "merge") {
          const newProps = { ...prev.props };
          Object.entries(next.props).forEach(([p, v]) => (
            // @ts-expect-error untyped
            newProps[p] = p === "style" ? new Map([...prev.props.style || /* @__PURE__ */ new Map(), ...v]) : p === "class" ? /* @__PURE__ */ new Set([...prev.props.class || /* @__PURE__ */ new Set(), ...v]) : v
          ));
          acc.set(k, { ...next, props: newProps });
        } else if (next._p >> 10 === prev._p >> 10 && next.tag === "meta" && isMetaArrayDupeKey(k)) {
          acc.set(k, Object.assign([...Array.isArray(prev) ? prev : [prev], next], next));
          hasFlatMeta = true;
        } else if (next._w === prev._w ? next._p > prev._p : next?._w < prev?._w) {
          acc.set(k, next);
        }
        return acc;
      }, ctx.tagMap);
      const title = ctx.tagMap.get("title");
      const titleTemplate = ctx.tagMap.get("titleTemplate");
      head._title = title?.textContent;
      if (titleTemplate) {
        const titleTemplateFn = titleTemplate?.textContent;
        head._titleTemplate = titleTemplateFn;
        if (titleTemplateFn) {
          let newTitle = typeof titleTemplateFn === "function" ? titleTemplateFn(title?.textContent) : titleTemplateFn;
          if (typeof newTitle === "string" && !head.plugins.has("template-params")) {
            newTitle = newTitle.replace("%s", title?.textContent || "");
          }
          if (title) {
            newTitle === null ? ctx.tagMap.delete("title") : ctx.tagMap.set("title", { ...title, textContent: newTitle });
          } else {
            titleTemplate.tag = "title";
            titleTemplate.textContent = newTitle;
          }
        }
      }
      ctx.tags = Array.from(ctx.tagMap.values());
      if (hasFlatMeta) {
        ctx.tags = ctx.tags.flat().sort(sortTags);
      }
      await hooks.callHook("tags:beforeResolve", ctx);
      await hooks.callHook("tags:resolve", ctx);
      await hooks.callHook("tags:afterResolve", ctx);
      const finalTags = [];
      for (const t of ctx.tags) {
        const { innerHTML, tag, props } = t;
        if (!ValidHeadTags.has(tag)) {
          continue;
        }
        if (Object.keys(props).length === 0 && !hasContent(t.innerHTML) && !hasContent(t.textContent)) {
          continue;
        }
        if (tag === "meta") {
          if (!hasContent(props.content) && !props["http-equiv"] && !props.charset) {
            continue;
          }
        }
        if (tag === "script" && innerHTML) {
          if (String(props.type).endsWith("json")) {
            const v = typeof innerHTML === "string" ? innerHTML : JSON.stringify(innerHTML);
            t.innerHTML = v.replace(/</g, "\\u003C");
          } else if (typeof innerHTML === "string") {
            t.innerHTML = innerHTML.replace(new RegExp(`</${tag}`, "g"), `<\\/${tag}`);
          }
          t._d = dedupeKey(t);
        }
        finalTags.push(t);
      }
      return finalTags;
    },
    invalidate() {
      for (const entry of entries.values()) {
        normalizeQueue.add(entry._i);
      }
      head.dirty = true;
      hooks.callHook("entries:updated", head);
    }
  };
  (resolvedOptions?.plugins || []).forEach((p) => registerPlugin(head, p));
  head.hooks.callHook("init", head);
  resolvedOptions.init?.forEach((e) => e && head.push(e));
  return head;
}
const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};
const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}
// @__NO_SIDE_EFFECTS__
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (instance) {
      return instance;
    }
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(input, options = {}) {
  const head = options.head || /* @__PURE__ */ injectHead();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const scope = getCurrentScope();
  if (scope && !scope.active)
    return { patch() {
    }, dispose() {
    }, _poll() {
    } };
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i);
    } else {
      entry = head.push(i, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}
function normalizeSingleAtValue(at) {
  if (at === false || at === "false")
    return null;
  if (at == null || at === true || at === "true")
    return "+1";
  if (typeof at === "string" && "+-".includes(at[0]))
    return at;
  const v = +at;
  if (Number.isNaN(v)) {
    console.error(`Invalid "at" prop value: ${at}`);
    return null;
  }
  if (v <= 0) {
    console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${at}, has been set to 1`);
    return 1;
  }
  return v;
}
function normalizeRangeAtValue(at) {
  if (Array.isArray(at))
    return [normalizeSingleAtValue(at[0]), normalizeSingleAtValue(at[1])];
  return null;
}
function createClicksContextBase(current, clicksStart = 0, clicksTotalOverrides) {
  const isMounted = ref(false);
  let relativeSizeMap = /* @__PURE__ */ new Map();
  let maxMap = /* @__PURE__ */ new Map();
  const context = {
    get current() {
      return clamp(+current.value, clicksStart, context.total);
    },
    set current(value) {
      current.value = isMounted.value ? clamp(value, clicksStart, context.total) : value;
    },
    clicksStart,
    get relativeSizeMap() {
      return relativeSizeMap;
    },
    get maxMap() {
      return maxMap;
    },
    get isMounted() {
      return isMounted.value;
    },
    setup() {
      onMounted(() => {
        isMounted.value = true;
        maxMap = shallowReactive(maxMap);
        if (!isReadonly(current))
          context.current = current.value;
      });
      onUnmounted(() => {
        isMounted.value = false;
        relativeSizeMap = /* @__PURE__ */ new Map();
        maxMap = /* @__PURE__ */ new Map();
      });
    },
    calculateSince(rawAt, size = 1) {
      const at = normalizeSingleAtValue(rawAt);
      if (at == null)
        return null;
      let start, max, delta;
      if (typeof at === "string") {
        const offset = context.currentOffset;
        const value = +at;
        start = offset + value;
        max = offset + value + size - 1;
        delta = value + size - 1;
      } else {
        start = at;
        max = at + size - 1;
        delta = 0;
      }
      return {
        start,
        end: +Number.POSITIVE_INFINITY,
        max,
        delta,
        currentOffset: computed(() => context.current - start),
        isCurrent: computed(() => context.current === start),
        isActive: computed(() => context.current >= start)
      };
    },
    calculateRange(rawAt) {
      const at = normalizeRangeAtValue(rawAt);
      if (at == null)
        return null;
      const [a, b] = at;
      let start, end, delta;
      if (typeof a === "string") {
        const offset = context.currentOffset;
        start = offset + +a;
        delta = +a;
      } else {
        start = a;
        delta = 0;
      }
      if (typeof b === "string") {
        end = start + +b;
        delta += +b;
      } else {
        end = b;
      }
      return {
        start,
        end,
        max: end,
        delta,
        currentOffset: computed(() => context.current - start),
        isCurrent: computed(() => context.current === start),
        isActive: computed(() => start <= context.current && context.current < end)
      };
    },
    calculate(at) {
      if (Array.isArray(at))
        return context.calculateRange(at);
      return context.calculateSince(at);
    },
    register(el, info) {
      if (!info)
        return;
      const { delta, max } = info;
      relativeSizeMap.set(el, delta);
      maxMap.set(el, max);
    },
    unregister(el) {
      relativeSizeMap.delete(el);
      maxMap.delete(el);
    },
    get currentOffset() {
      return sum(...relativeSizeMap.values());
    },
    get total() {
      return clicksTotalOverrides ?? (isMounted.value ? Math.max(0, ...maxMap.values()) : 0);
    }
  };
  return context;
}
function createFixedClicks(route, currentInit = 0) {
  const clicksStart = route?.meta.slide?.frontmatter.clicksStart ?? 0;
  const clicks = ref(Math.max(toValue(currentInit), clicksStart));
  watch(() => toValue(currentInit), (v) => {
    clicks.value = Math.max(v, clicksStart);
  });
  return createClicksContextBase(
    clicks,
    clicksStart,
    route?.meta?.clicks
  );
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/slides/canvasobs/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
const _hoisted_1$1 = { class: "px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString("Failed to fetch this slide. Please check your network connection."));
}
const SlideError = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1 = { class: "h-full w-full flex items-center justify-center gap-2 slidev-slide-loading" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SlideLoading",
  setup(__props) {
    const timeout = ref(false);
    onMounted(() => {
      setTimeout(() => {
        timeout.value = true;
      }, 200);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        timeout.value ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            _cache[0] || (_cache[0] = createBaseVNode(
              "div",
              { class: "i-svg-spinners-90-ring-with-bg text-xl" },
              null,
              -1
              /* CACHED */
            )),
            _cache[1] || (_cache[1] = createBaseVNode(
              "div",
              null,
              "Loading slide...",
              -1
              /* CACHED */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const frontmatterData$8 = { "routerMode": "hash", "presenter": false, "theme": "default", "title": "CanvasObs: Structured Spatial Observation for Agent Editing on 2D Infinite Canvases", "author": "Jiahao Xu, Haohui Wang, Rebecca Faust, Dawei Zhou, and Chris North", "info": "VISxGenAI 2026, co-located with IEEE VIS 2026", "layout": "none", "class": "title-slide", "aspectRatio": "16/9", "canvasWidth": 1280, "colorSchema": "light", "transition": "fade", "talkSeconds": 20, "fonts": { "sans": "DC Sans", "local": ["DC Sans", "Fira Code"] }, "drawings": { "enabled": true } };
const frontmatter$8 = reactive(frontmatterData$8);
const meta$8 = shallowReactive({
  get layout() {
    return frontmatter$8.layout;
  },
  get transition() {
    return frontmatter$8.transition;
  },
  get class() {
    return frontmatter$8.class;
  },
  get clicks() {
    return frontmatter$8.clicks;
  },
  get name() {
    return frontmatter$8.name;
  },
  get preload() {
    return frontmatter$8.preload;
  },
  slide: {
    ...{ "content": "", "revision": "xhv45d", "frontmatterRaw": "routerMode: hash\npresenter: false\ntheme: default\ntitle: 'CanvasObs: Structured Spatial Observation for Agent Editing on 2D Infinite Canvases'\nauthor: Jiahao Xu, Haohui Wang, Rebecca Faust, Dawei Zhou, and Chris North\ninfo: VISxGenAI 2026, co-located with IEEE VIS 2026\nlayout: none\nclass: title-slide\naspectRatio: 16/9\ncanvasWidth: 1280\ncolorSchema: light\ntransition: fade\ntalkSeconds: 20\nfonts:\n  sans: 'DC Sans'\n  local: ['DC Sans', 'Fira Code']\ndrawings:\n  enabled: true\n", "note": "", "title": "CanvasObs: Structured Spatial Observation for Agent Editing on 2D Infinite Canvases", "index": 0, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$8,
    filepath: "",
    start: 0,
    id: 0,
    no: 1
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$7 = { "layout": "none", "class": "content-slide", "clicks": 1 };
const frontmatter$7 = reactive(frontmatterData$7);
const meta$7 = shallowReactive({
  get layout() {
    return frontmatter$7.layout;
  },
  get transition() {
    return frontmatter$7.transition;
  },
  get class() {
    return frontmatter$7.class;
  },
  get clicks() {
    return frontmatter$7.clicks;
  },
  get name() {
    return frontmatter$7.name;
  },
  get preload() {
    return frontmatter$7.preload;
  },
  slide: {
    ...{ "content": "", "revision": "lxmsl0", "frontmatterRaw": "layout: none\nclass: content-slide\nclicks: 1\n", "note": "", "title": "AI agents can edit a 2D infinite canvas", "level": 1, "index": 1, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$7,
    filepath: "",
    start: 46,
    id: 1,
    no: 2
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$6 = { "layout": "none", "class": "content-slide", "clicks": 5 };
const frontmatter$6 = reactive(frontmatterData$6);
const meta$6 = shallowReactive({
  get layout() {
    return frontmatter$6.layout;
  },
  get transition() {
    return frontmatter$6.transition;
  },
  get class() {
    return frontmatter$6.class;
  },
  get clicks() {
    return frontmatter$6.clicks;
  },
  get name() {
    return frontmatter$6.name;
  },
  get preload() {
    return frontmatter$6.preload;
  },
  slide: {
    ...{ "content": "", "revision": "byfgr8", "frontmatterRaw": "layout: none\nclass: content-slide\nclicks: 5\n", "note": "", "title": "Visible appearance does not reveal all canvas state", "level": 1, "index": 2, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$6,
    filepath: "",
    start: 58,
    id: 2,
    no: 3
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$5 = { "layout": "none", "class": "content-slide" };
const frontmatter$5 = reactive(frontmatterData$5);
const meta$5 = shallowReactive({
  get layout() {
    return frontmatter$5.layout;
  },
  get transition() {
    return frontmatter$5.transition;
  },
  get class() {
    return frontmatter$5.class;
  },
  get clicks() {
    return frontmatter$5.clicks;
  },
  get name() {
    return frontmatter$5.name;
  },
  get preload() {
    return frontmatter$5.preload;
  },
  slide: {
    ...{ "content": "", "revision": "-opwczt", "frontmatterRaw": "layout: none\nclass: content-slide\n", "note": "", "title": "CanvasObs exposes structured canvas state", "level": 1, "index": 3, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$5,
    filepath: "",
    start: 70,
    id: 3,
    no: 4
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$4 = { "layout": "none", "class": "content-slide", "clicks": 8 };
const frontmatter$4 = reactive(frontmatterData$4);
const meta$4 = shallowReactive({
  get layout() {
    return frontmatter$4.layout;
  },
  get transition() {
    return frontmatter$4.transition;
  },
  get class() {
    return frontmatter$4.class;
  },
  get clicks() {
    return frontmatter$4.clicks;
  },
  get name() {
    return frontmatter$4.name;
  },
  get preload() {
    return frontmatter$4.preload;
  },
  slide: {
    ...{ "content": "", "revision": "-9hfe6m", "frontmatterRaw": "layout: none\nclass: content-slide\nclicks: 8\n", "note": "", "title": "Case study: preparing a team handoff report", "level": 1, "index": 4, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$4,
    filepath: "",
    start: 81,
    id: 4,
    no: 5
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$3 = { "layout": "none", "class": "content-slide" };
const frontmatter$3 = reactive(frontmatterData$3);
const meta$3 = shallowReactive({
  get layout() {
    return frontmatter$3.layout;
  },
  get transition() {
    return frontmatter$3.transition;
  },
  get class() {
    return frontmatter$3.class;
  },
  get clicks() {
    return frontmatter$3.clicks;
  },
  get name() {
    return frontmatter$3.name;
  },
  get preload() {
    return frontmatter$3.preload;
  },
  slide: {
    ...{ "content": "", "revision": "-c8bvwl", "frontmatterRaw": "layout: none\nclass: content-slide\n", "note": "", "title": "Experiment", "level": 1, "index": 5, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$3,
    filepath: "",
    start: 93,
    id: 5,
    no: 6
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$2 = { "layout": "none", "class": "content-slide" };
const frontmatter$2 = reactive(frontmatterData$2);
const meta$2 = shallowReactive({
  get layout() {
    return frontmatter$2.layout;
  },
  get transition() {
    return frontmatter$2.transition;
  },
  get class() {
    return frontmatter$2.class;
  },
  get clicks() {
    return frontmatter$2.clicks;
  },
  get name() {
    return frontmatter$2.name;
  },
  get preload() {
    return frontmatter$2.preload;
  },
  slide: {
    ...{ "content": "", "revision": "-ud4v81", "frontmatterRaw": "layout: none\nclass: content-slide\n", "note": "", "title": "Better observation improves target selection", "level": 1, "index": 6, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$2,
    filepath: "",
    start: 104,
    id: 6,
    no: 7
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData$1 = { "layout": "none", "class": "content-slide" };
const frontmatter$1 = reactive(frontmatterData$1);
const meta$1 = shallowReactive({
  get layout() {
    return frontmatter$1.layout;
  },
  get transition() {
    return frontmatter$1.transition;
  },
  get class() {
    return frontmatter$1.class;
  },
  get clicks() {
    return frontmatter$1.clicks;
  },
  get name() {
    return frontmatter$1.name;
  },
  get preload() {
    return frontmatter$1.preload;
  },
  slide: {
    ...{ "content": "", "revision": "-hrd8tl", "frontmatterRaw": "layout: none\nclass: content-slide\n", "note": "", "title": "Takeaway", "level": 1, "index": 7, "noteHTML": "", "raw": "" },
    frontmatter: frontmatter$1,
    filepath: "",
    start: 115,
    id: 7,
    no: 8
  },
  __clicksContext: null,
  __preloaded: false
});
const frontmatterData = { "layout": "none", "class": "content-slide thanks-slide", "title": "Thank you" };
const frontmatter = reactive(frontmatterData);
const meta = shallowReactive({
  get layout() {
    return frontmatter.layout;
  },
  get transition() {
    return frontmatter.transition;
  },
  get class() {
    return frontmatter.class;
  },
  get clicks() {
    return frontmatter.clicks;
  },
  get name() {
    return frontmatter.name;
  },
  get preload() {
    return frontmatter.preload;
  },
  slide: {
    ...{ "content": "", "revision": "atnwnr", "frontmatterRaw": "layout: none\nclass: content-slide thanks-slide\ntitle: 'Thank you'\n", "note": "", "title": "Thank you", "index": 8, "noteHTML": "", "raw": "" },
    frontmatter,
    filepath: "",
    start: 126,
    id: 8,
    no: 9
  },
  __clicksContext: null,
  __preloaded: false
});
const componentsCache = new Array(9);
const getAsyncComponent = (idx, loader) => defineAsyncComponent({
  loader,
  delay: 300,
  loadingComponent: _sfc_main$1,
  errorComponent: SlideError,
  onError: (e) => console.error("Failed to load slide " + (idx + 1), e)
});
const load1 = async () => {
  try {
    return componentsCache[0] ??= await __vitePreload(() => import("./md-XCH24tS_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load2 = async () => {
  try {
    return componentsCache[1] ??= await __vitePreload(() => import("./md-DUZqH8Ch.js"), true ? __vite__mapDeps([7,1,4,3,5,6,8]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load3 = async () => {
  try {
    return componentsCache[2] ??= await __vitePreload(() => import("./md-NwU7Dyly.js"), true ? __vite__mapDeps([9,1,4,3,5,6,10]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load4 = async () => {
  try {
    return componentsCache[3] ??= await __vitePreload(() => import("./md-DAPFWvCa.js"), true ? __vite__mapDeps([11,1,4,3,5,6,12]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load5 = async () => {
  try {
    return componentsCache[4] ??= await __vitePreload(() => import("./md-DtLyC87n.js"), true ? __vite__mapDeps([13,1,4,3,5,6,14]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load6 = async () => {
  try {
    return componentsCache[5] ??= await __vitePreload(() => import("./md-DOwCgj3d.js"), true ? __vite__mapDeps([15,1,4,3,5,6,16]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load7 = async () => {
  try {
    return componentsCache[6] ??= await __vitePreload(() => import("./md-Wbua4pqz.js"), true ? __vite__mapDeps([17,1,4,3,5,6,18]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load8 = async () => {
  try {
    return componentsCache[7] ??= await __vitePreload(() => import("./md-CQZ24xCq.js"), true ? __vite__mapDeps([19,1,4,3,5,6,20]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const load9 = async () => {
  try {
    return componentsCache[8] ??= await __vitePreload(() => import("./md-B5YF6AJ9.js"), true ? __vite__mapDeps([21,1,2,4,3,5,6,22]) : void 0);
  } catch (e) {
    console.error("slide failed to load", e);
    return SlideError;
  }
};
const data$2 = [
  { no: 1, meta: meta$8, load: load1, component: getAsyncComponent(0, load1) },
  { no: 2, meta: meta$7, load: load2, component: getAsyncComponent(1, load2) },
  { no: 3, meta: meta$6, load: load3, component: getAsyncComponent(2, load3) },
  { no: 4, meta: meta$5, load: load4, component: getAsyncComponent(3, load4) },
  { no: 5, meta: meta$4, load: load5, component: getAsyncComponent(4, load5) },
  { no: 6, meta: meta$3, load: load6, component: getAsyncComponent(5, load6) },
  { no: 7, meta: meta$2, load: load7, component: getAsyncComponent(6, load7) },
  { no: 8, meta: meta$1, load: load8, component: getAsyncComponent(7, load8) },
  { no: 9, meta, load: load9, component: getAsyncComponent(8, load9) }
];
const slides = shallowRef(data$2);
function parseRangeString(total, rangeStr) {
  if (!rangeStr || rangeStr === "all" || rangeStr === "*") return range(1, total + 1);
  if (rangeStr === "none") return [];
  const indexes = [];
  for (const part of rangeStr.split(/[,;]/g)) if (!part.includes("-")) indexes.push(+part);
  else {
    const [start, end] = part.split("-", 2);
    indexes.push(...range(+start, !end ? total + 1 : +end + 1));
  }
  return uniq(indexes).filter((i) => i <= total).sort((a, b) => a - b);
}
const injectionClicksContext = "$$slidev-clicks-context";
const injectionCurrentPage = "$$slidev-page";
const injectionSlideElement = "$$slidev-slide-element";
const injectionSlideScale = "$$slidev-slide-scale";
const injectionSlidevContext = "$$slidev-context";
const injectionRoute = "$$slidev-route";
const injectionRenderContext = "$$slidev-render-context";
const injectionFrontmatter = "$$slidev-fontmatter";
const injectionSlideZoom = "$$slidev-slide-zoom";
const CLASS_VCLICK_TARGET = "slidev-vclick-target";
const CLASS_VCLICK_HIDDEN = "slidev-vclick-hidden";
const CLASS_VCLICK_FADE = "slidev-vclick-fade";
const CLASS_VCLICK_HIDDEN_EXP = "slidev-vclick-hidden-explicitly";
const CLASS_VCLICK_CURRENT = "slidev-vclick-current";
const CLASS_VCLICK_PRIOR = "slidev-vclick-prior";
const CLICKS_MAX = 999999;
const TRUST_ORIGINS = [
  "localhost",
  "127.0.0.1"
];
const FRONTMATTER_FIELDS = [
  "clicks",
  "clicksStart",
  "disabled",
  "hide",
  "hideInToc",
  "layout",
  "level",
  "preload",
  "routeAlias",
  "src",
  "title",
  "transition",
  "zoom",
  "dragPos",
  "lang"
];
const HEADMATTER_FIELDS = [
  ...FRONTMATTER_FIELDS,
  "theme",
  "titleTemplate",
  "info",
  "author",
  "keywords",
  "presenter",
  "browserExporter",
  "download",
  "exportFilename",
  "export",
  "highlighter",
  "lineNumbers",
  "monaco",
  "monacoTypesSource",
  "monacoTypesAdditionalPackages",
  "monacoRunAdditionalDeps",
  "monacoRunUseStrict",
  "remoteAssets",
  "selectable",
  "record",
  "colorSchema",
  "routerMode",
  "aspectRatio",
  "canvasWidth",
  "themeConfig",
  "favicon",
  "plantUmlServer",
  "fonts",
  "defaults",
  "drawings",
  "htmlAttrs",
  "mdc",
  "comark",
  "contextMenu",
  "wakeLock",
  "seoMeta",
  "notesAutoRuby",
  "magicMoveDuration",
  "preloadImages"
];
function useRouteQuery(name, defaultValue, {
  mode: mode2 = "replace"
} = {}) {
  const router = useRouter();
  return computed({
    get() {
      const data2 = router.currentRoute.value.query[name];
      if (data2 == null)
        return defaultValue;
      if (Array.isArray(data2))
        return data2.filter(Boolean);
      return data2;
    },
    set(v) {
      nextTick(() => {
        const oldValue = router.currentRoute.value.query[name];
        if ((oldValue ?? defaultValue?.toString()) === v.toString())
          return;
        router[unref(mode2)]({
          query: {
            ...router.currentRoute.value.query,
            [name]: `${v}` === defaultValue ? void 0 : v
          }
        });
      });
    }
  });
}
function getSlide(no) {
  return slides.value.find(
    (s) => s.no === +no || s.meta.slide?.frontmatter.routeAlias === no
  );
}
function getSlidePath(route, presenter, exporting = false) {
  if (typeof route === "number" || typeof route === "string")
    route = getSlide(route);
  const no = route.meta.slide?.frontmatter.routeAlias ?? route.no;
  return exporting ? `/export/${no}` : presenter ? `/presenter/${no}` : `/${no}`;
}
const transitionResolveMap = {
  "slide-left": "slide-left | slide-right",
  "slide-right": "slide-right | slide-left",
  "slide-up": "slide-up | slide-down",
  "slide-down": "slide-down | slide-up"
};
function resolveTransition(transition, isBackward = false) {
  if (!transition)
    return void 0;
  if (typeof transition === "string") {
    transition = {
      name: transition
    };
  }
  if (!transition.name)
    return void 0;
  let name = transition.name.includes("|") ? transition.name : transitionResolveMap[transition.name] || transition.name;
  if (name.includes("|")) {
    const [forward, backward] = name.split("|").map((i) => i.trim());
    name = isBackward ? backward : forward;
  }
  if (!name)
    return void 0;
  return {
    ...transition,
    name
  };
}
function getCurrentTransition(direction, currentRoute, prevRoute) {
  let transition = direction > 0 ? prevRoute?.meta?.transition : currentRoute?.meta?.transition;
  if (!transition)
    transition = configs.transition || void 0;
  return resolveTransition(transition, direction < 0);
}
const showRecordingDialog = ref(false);
const showInfoDialog = ref(false);
const showGotoDialog = ref(false);
const showOverview = ref(false);
const hmrSkipTransition = ref(false);
const disableTransition = ref(false);
const shortcutsEnabled = ref(true);
const shortcutsLocks = reactive(/* @__PURE__ */ new Set());
const shortcutsLocked = computed(() => shortcutsLocks.size > 0);
const breakpoints = useBreakpoints({
  xs: 460,
  ...breakpointsTailwind
});
const windowSize = useWindowSize();
const magicKeys = useMagicKeys();
const isScreenVertical = computed(() => windowSize.height.value - windowSize.width.value / slideAspect.value > 120);
const fullscreen = useFullscreen(isClient ? document.body : null);
const activeElement = useActiveElement();
const isInputting = computed(() => ["INPUT", "TEXTAREA"].includes(activeElement.value?.tagName || ""));
const isOnFocus = computed(() => ["BUTTON", "A"].includes(activeElement.value?.tagName || ""));
useLocalStorage("slidev-camera", "default", { listenToStorageChanges: false });
useLocalStorage("slidev-mic", "default", { listenToStorageChanges: false });
const slideScale = useLocalStorage("slidev-scale", 0);
const wakeLockEnabled = useLocalStorage("slidev-wake-lock", true);
const hideCursorIdle = useLocalStorage("slidev-hide-cursor-idle", true);
useLocalStorage("slidev-skip-export-pdf-tip", false);
useLocalStorage("slidev-export-capture-delay", 400, { listenToStorageChanges: false });
const showPresenterCursor = useLocalStorage("slidev-presenter-cursor", true, { listenToStorageChanges: false });
const showEditor = useLocalStorage("slidev-show-editor", false, { listenToStorageChanges: false });
const isEditorVertical = useLocalStorage("slidev-editor-vertical", false, { listenToStorageChanges: false });
const editorWidth = useLocalStorage("slidev-editor-width", isClient ? window.innerWidth * 0.4 : 318, { listenToStorageChanges: false });
const editorHeight = useLocalStorage("slidev-editor-height", isClient ? window.innerHeight * 0.4 : 300, { listenToStorageChanges: false });
const activeDragElement = shallowRef(null);
useLocalStorage("slidev-presenter-font-size", 1, { listenToStorageChanges: false });
const presenterLayout = useLocalStorage("slidev-presenter-layout", 1, { listenToStorageChanges: false });
const viewerCssFilterDefaults = {
  invert: false,
  contrast: 1,
  brightness: 1,
  hueRotate: 0,
  saturate: 1,
  sepia: 0
};
const viewerCssFilter = useLocalStorage(
  "slidev-viewer-css-filter",
  viewerCssFilterDefaults,
  { listenToStorageChanges: false, mergeDefaults: true, deep: true }
);
const hasViewerCssFilter = computed(() => {
  return Object.keys(viewerCssFilterDefaults).some((k) => viewerCssFilter.value[k] !== viewerCssFilterDefaults[k]);
});
function togglePresenterLayout() {
  presenterLayout.value = presenterLayout.value + 1;
  if (presenterLayout.value > 3)
    presenterLayout.value = 1;
}
const toggleOverview = useToggle(showOverview);
const syncDirections = useLocalStorage(
  "slidev-sync-directions",
  {
    viewerSend: true,
    viewerReceive: true,
    presenterSend: true,
    presenterReceive: true
  },
  {
    listenToStorageChanges: false,
    mergeDefaults: true
  }
);
function addToTree(tree, route, level = 1) {
  const titleLevel = route.meta.slide.level ?? level;
  if (titleLevel && titleLevel > level && tree.length > 0) {
    addToTree(tree[tree.length - 1].children, route, level + 1);
  } else {
    tree.push({
      no: route.no,
      children: [],
      level,
      titleLevel,
      path: getSlidePath(route.meta.slide?.frontmatter?.routeAlias ?? route.no, false),
      hideInToc: Boolean(route.meta?.slide?.frontmatter?.hideInToc),
      title: route.meta?.slide?.title
    });
  }
}
function getTreeWithActiveStatuses(tree, currentRoute, hasActiveParent = false, parent, currentSlideNo) {
  return tree.map((item) => {
    const clone2 = {
      ...item,
      active: item.no === currentSlideNo?.value,
      hasActiveParent
    };
    if (clone2.children.length > 0) {
      clone2.children = getTreeWithActiveStatuses(
        clone2.children,
        currentRoute,
        clone2.active || clone2.hasActiveParent,
        clone2,
        currentSlideNo
      );
    }
    if (parent && (clone2.active || clone2.activeParent))
      parent.activeParent = true;
    return clone2;
  });
}
function filterTree(tree, level = 1) {
  return tree.filter((item) => !item.hideInToc).map((item) => ({
    ...item,
    children: filterTree(item.children, level + 1)
  }));
}
function useTocTree(slides2, currentSlideNo, currentSlideRoute) {
  const rawTree = computed(() => slides2.value.filter((route) => route.meta?.slide?.title).reduce((acc, route) => {
    addToTree(acc, route);
    return acc;
  }, []));
  const treeWithActiveStatuses = computed(() => getTreeWithActiveStatuses(
    rawTree.value,
    currentSlideRoute.value,
    void 0,
    void 0,
    currentSlideNo
  ));
  return computed(() => filterTree(treeWithActiveStatuses.value));
}
function useNavBase(currentSlideRoute, clicksContext, queryClicks = ref(0), isPresenter, isPrint, router) {
  const total = computed(() => slides.value.length);
  const navDirection = ref(0);
  const clicksDirection = ref(0);
  const currentPath = computed(() => getSlidePath(currentSlideRoute.value, isPresenter.value));
  const currentSlideNo = computed(() => currentSlideRoute.value.no);
  const currentLayout = computed(() => currentSlideRoute.value.meta?.layout || (currentSlideNo.value === 1 ? "cover" : "default"));
  const clicks = computed(() => clicksContext.value.current);
  const clicksStart = computed(() => clicksContext.value.clicksStart);
  const clicksTotal = computed(() => clicksContext.value.total);
  const nextRoute = computed(() => slides.value[Math.min(slides.value.length, currentSlideNo.value + 1) - 1]);
  const prevRoute = computed(() => slides.value[Math.max(1, currentSlideNo.value - 1) - 1]);
  const hasNext = computed(() => currentSlideNo.value < slides.value.length || clicks.value < clicksTotal.value);
  const hasPrev = computed(() => currentSlideNo.value > 1 || clicks.value > 0);
  const currentTransition = computed(() => isPrint.value ? void 0 : getCurrentTransition(navDirection.value, currentSlideRoute.value, prevRoute.value));
  watch(currentSlideRoute, (next2, prev2) => {
    navDirection.value = next2.no - prev2.no;
  });
  async function openInEditor(url) {
    return false;
  }
  const tocTree = useTocTree(
    slides,
    currentSlideNo,
    currentSlideRoute
  );
  async function next() {
    clicksDirection.value = 1;
    if (clicksTotal.value <= queryClicks.value)
      await nextSlide();
    else
      queryClicks.value += 1;
  }
  async function prev() {
    clicksDirection.value = -1;
    if (queryClicks.value <= clicksStart.value)
      await prevSlide(true);
    else
      queryClicks.value -= 1;
  }
  async function nextSlide(lastClicks = false) {
    clicksDirection.value = 1;
    if (currentSlideNo.value < slides.value.length) {
      await go(
        currentSlideNo.value + 1,
        lastClicks && !isPrint.value ? CLICKS_MAX : void 0
      );
    }
  }
  async function prevSlide(lastClicks = false) {
    clicksDirection.value = -1;
    if (currentSlideNo.value > 1) {
      await go(
        currentSlideNo.value - 1,
        lastClicks && !isPrint.value ? CLICKS_MAX : void 0
      );
    }
  }
  function goFirst() {
    return go(1);
  }
  function goLast() {
    return go(total.value);
  }
  async function go(no, clicks2 = 0, force = false) {
    hmrSkipTransition.value = false;
    const pageChanged = currentSlideNo.value !== no;
    const clicksChanged = clicks2 !== queryClicks.value;
    const meta2 = getSlide(no)?.meta;
    const clicksStart2 = meta2?.slide?.frontmatter.clicksStart ?? 0;
    clicks2 = clamp(clicks2, clicksStart2, meta2?.__clicksContext?.total ?? CLICKS_MAX);
    if (force || pageChanged || clicksChanged) {
      await router?.push({
        path: getSlidePath(no, isPresenter.value, router.currentRoute.value.name === "export"),
        query: {
          ...router.currentRoute.value.query,
          clicks: clicks2 === 0 ? void 0 : clicks2.toString(),
          embedded: location.search.includes("embedded") ? "true" : void 0
        }
      });
    }
  }
  function enterPresenter() {
    router?.push({
      path: getSlidePath(currentSlideNo.value, true),
      query: { ...router.currentRoute.value.query }
    });
  }
  function exitPresenter() {
    router?.push({
      path: getSlidePath(currentSlideNo.value, false),
      query: { ...router.currentRoute.value.query }
    });
  }
  return {
    slides,
    total,
    currentPath,
    currentSlideNo,
    currentPage: currentSlideNo,
    currentSlideRoute,
    currentLayout,
    currentTransition,
    clicksDirection,
    nextRoute,
    prevRoute,
    clicksContext,
    clicks,
    clicksStart,
    clicksTotal,
    hasNext,
    hasPrev,
    tocTree,
    navDirection,
    openInEditor,
    next,
    prev,
    go,
    goLast,
    goFirst,
    nextSlide,
    prevSlide,
    enterPresenter,
    exitPresenter
  };
}
const useNavState = createSharedComposable(() => {
  const router = useRouter();
  const currentRoute = useRoute();
  const query = computed(() => {
    router?.currentRoute?.value?.query;
    return new URLSearchParams(location.search);
  });
  const isPrintMode = computed(() => query.value.has("print") || currentRoute.name === "export");
  const isPrintWithClicks = ref(query.value.get("print") === "clicks");
  const isEmbedded = computed(() => query.value.has("embedded"));
  const isPlaying = computed(() => currentRoute.name === "play");
  const isPresenter = computed(() => currentRoute.name === "presenter");
  const isNotesViewer = computed(() => currentRoute.name === "notes");
  const isPresenterAvailable = computed(() => !isPresenter.value && (!configs.remote || query.value.get("password") === configs.remote));
  const hasPrimarySlide = computed(() => !!currentRoute.params.no);
  const currentSlideNo = computed(() => hasPrimarySlide.value ? getSlide(currentRoute.params.no)?.no ?? 1 : 1);
  const currentSlideRoute = computed(() => slides.value[currentSlideNo.value - 1]);
  const printRange = ref(parseRangeString(slides.value.length, currentRoute?.query?.range));
  const queryClicksRaw = useRouteQuery("clicks", "0");
  const clicksContext = computed(() => getPrimaryClicks(currentSlideRoute.value));
  const queryClicks = computed({
    get() {
      let v = +(queryClicksRaw.value || 0);
      if (Number.isNaN(v))
        v = 0;
      return v;
    },
    set(v) {
      hmrSkipTransition.value = false;
      queryClicksRaw.value = v.toString();
    }
  });
  function getPrimaryClicks(route) {
    if (route?.meta?.__clicksContext)
      return route.meta.__clicksContext;
    const thisNo = route.no;
    const context = createClicksContextBase(
      computed({
        get() {
          if (currentSlideNo.value === thisNo)
            return Math.max(+(queryClicksRaw.value ?? 0), context.clicksStart);
          else if (currentSlideNo.value > thisNo)
            return CLICKS_MAX;
          else
            return context.clicksStart;
        },
        set(v) {
          if (currentSlideNo.value === thisNo)
            queryClicksRaw.value = v.toString();
        }
      }),
      route?.meta.slide?.frontmatter.clicksStart ?? 0,
      route?.meta.clicks
    );
    if (route?.meta)
      route.meta.__clicksContext = context;
    return context;
  }
  return {
    router,
    currentRoute: computed(() => currentRoute),
    isPrintMode,
    isPrintWithClicks,
    isEmbedded,
    isPlaying,
    isPresenter,
    isNotesViewer,
    isPresenterAvailable,
    hasPrimarySlide,
    currentSlideNo,
    currentSlideRoute,
    clicksContext,
    queryClicksRaw,
    queryClicks,
    printRange,
    getPrimaryClicks
  };
});
const useNav = createSharedComposable(() => {
  const state2 = useNavState();
  const router = useRouter();
  const nav = useNavBase(
    state2.currentSlideRoute,
    state2.clicksContext,
    state2.queryClicks,
    state2.isPresenter,
    state2.isPrintMode,
    router
  );
  watch(
    [nav.total, state2.currentRoute],
    async () => {
      const no = state2.currentRoute.value.params.no;
      if (state2.hasPrimarySlide.value && !getSlide(no)) {
        if (no && no !== "index.html") {
          await nav.go(nav.total.value, 0, true);
        } else {
          await nav.go(1, 0, true);
        }
      }
    },
    { flush: "pre", immediate: true }
  );
  return {
    ...nav,
    ...state2
  };
});
const preferredDark = usePreferredDark();
const store = useLocalStorage("slidev-color-schema", "auto");
const isColorSchemaConfigured = computed(() => configs.colorSchema !== "auto");
const isDark = computed({
  get() {
    if (isColorSchemaConfigured.value)
      return configs.colorSchema === "dark";
    return store.value === "auto" ? preferredDark.value : store.value === "dark";
  },
  set(v) {
    if (isColorSchemaConfigured.value)
      return;
    store.value = v === preferredDark.value ? "auto" : v ? "dark" : "light";
  }
});
const toggleDark = useToggle(isDark);
if (isClient) {
  const CSS_DISABLE_TRANS = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  watch(
    isDark,
    (v) => {
      const style = window.document.createElement("style");
      style.appendChild(document.createTextNode(CSS_DISABLE_TRANS));
      window.document.head.appendChild(style);
      const html = document.querySelector("html");
      html.classList.toggle("dark", v);
      html.classList.toggle("light", !v);
      window.getComputedStyle(style).opacity;
      document.head.removeChild(style);
    },
    { immediate: true }
  );
}
function usePrintStyles() {
  const { isPrintMode } = useNav();
  useStyleTag(computed(() => isPrintMode.value ? `
@page {
  size: ${slideWidth.value}px ${slideHeight.value}px;
  margin: 0px;
}

* {
  transition: none !important;
  transition-duration: 0s !important;
}` : ""));
}
const ALIAS = /* @__PURE__ */ Symbol.for("yaml.alias");
const DOC = /* @__PURE__ */ Symbol.for("yaml.document");
const MAP = /* @__PURE__ */ Symbol.for("yaml.map");
const PAIR = /* @__PURE__ */ Symbol.for("yaml.pair");
const SCALAR = /* @__PURE__ */ Symbol.for("yaml.scalar");
const SEQ = /* @__PURE__ */ Symbol.for("yaml.seq");
const NODE_TYPE = /* @__PURE__ */ Symbol.for("yaml.node.type");
const isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
const isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
const isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
const isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
const isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
const isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
function isCollection(node) {
  if (node && typeof node === "object")
    switch (node[NODE_TYPE]) {
      case MAP:
      case SEQ:
        return true;
    }
  return false;
}
function isNode(node) {
  if (node && typeof node === "object")
    switch (node[NODE_TYPE]) {
      case ALIAS:
      case MAP:
      case SCALAR:
      case SEQ:
        return true;
    }
  return false;
}
const hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
const BREAK = /* @__PURE__ */ Symbol("break visit");
const SKIP = /* @__PURE__ */ Symbol("skip children");
const REMOVE = /* @__PURE__ */ Symbol("remove node");
function visit(node, visitor) {
  const visitor_ = initVisitor(visitor);
  if (isDocument(node)) {
    const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
    if (cd === REMOVE)
      node.contents = null;
  } else
    visit_(null, node, visitor_, Object.freeze([]));
}
visit.BREAK = BREAK;
visit.SKIP = SKIP;
visit.REMOVE = REMOVE;
function visit_(key, node, visitor, path) {
  const ctrl = callVisitor(key, node, visitor, path);
  if (isNode(ctrl) || isPair(ctrl)) {
    replaceNode(key, path, ctrl);
    return visit_(key, ctrl, visitor, path);
  }
  if (typeof ctrl !== "symbol") {
    if (isCollection(node)) {
      path = Object.freeze(path.concat(node));
      for (let i = 0; i < node.items.length; ++i) {
        const ci = visit_(i, node.items[i], visitor, path);
        if (typeof ci === "number")
          i = ci - 1;
        else if (ci === BREAK)
          return BREAK;
        else if (ci === REMOVE) {
          node.items.splice(i, 1);
          i -= 1;
        }
      }
    } else if (isPair(node)) {
      path = Object.freeze(path.concat(node));
      const ck = visit_("key", node.key, visitor, path);
      if (ck === BREAK)
        return BREAK;
      else if (ck === REMOVE)
        node.key = null;
      const cv = visit_("value", node.value, visitor, path);
      if (cv === BREAK)
        return BREAK;
      else if (cv === REMOVE)
        node.value = null;
    }
  }
  return ctrl;
}
function initVisitor(visitor) {
  if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
    return Object.assign({
      Alias: visitor.Node,
      Map: visitor.Node,
      Scalar: visitor.Node,
      Seq: visitor.Node
    }, visitor.Value && {
      Map: visitor.Value,
      Scalar: visitor.Value,
      Seq: visitor.Value
    }, visitor.Collection && {
      Map: visitor.Collection,
      Seq: visitor.Collection
    }, visitor);
  }
  return visitor;
}
function callVisitor(key, node, visitor, path) {
  if (typeof visitor === "function")
    return visitor(key, node, path);
  if (isMap(node))
    return visitor.Map?.(key, node, path);
  if (isSeq(node))
    return visitor.Seq?.(key, node, path);
  if (isPair(node))
    return visitor.Pair?.(key, node, path);
  if (isScalar(node))
    return visitor.Scalar?.(key, node, path);
  if (isAlias(node))
    return visitor.Alias?.(key, node, path);
  return void 0;
}
function replaceNode(key, path, node) {
  const parent = path[path.length - 1];
  if (isCollection(parent)) {
    parent.items[key] = node;
  } else if (isPair(parent)) {
    if (key === "key")
      parent.key = node;
    else
      parent.value = node;
  } else if (isDocument(parent)) {
    parent.contents = node;
  } else {
    const pt = isAlias(parent) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${pt} parent`);
  }
}
function anchorIsValid(anchor) {
  if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
    const sa = JSON.stringify(anchor);
    const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
    throw new Error(msg);
  }
  return true;
}
function applyReviver(reviver, obj, key, val) {
  if (val && typeof val === "object") {
    if (Array.isArray(val)) {
      for (let i = 0, len = val.length; i < len; ++i) {
        const v0 = val[i];
        const v1 = applyReviver(reviver, val, String(i), v0);
        if (v1 === void 0)
          delete val[i];
        else if (v1 !== v0)
          val[i] = v1;
      }
    } else if (val instanceof Map) {
      for (const k of Array.from(val.keys())) {
        const v0 = val.get(k);
        const v1 = applyReviver(reviver, val, k, v0);
        if (v1 === void 0)
          val.delete(k);
        else if (v1 !== v0)
          val.set(k, v1);
      }
    } else if (val instanceof Set) {
      for (const v0 of Array.from(val)) {
        const v1 = applyReviver(reviver, val, v0, v0);
        if (v1 === void 0)
          val.delete(v0);
        else if (v1 !== v0) {
          val.delete(v0);
          val.add(v1);
        }
      }
    } else {
      for (const [k, v0] of Object.entries(val)) {
        const v1 = applyReviver(reviver, val, k, v0);
        if (v1 === void 0)
          delete val[k];
        else if (v1 !== v0)
          val[k] = v1;
      }
    }
  }
  return reviver.call(obj, key, val);
}
function toJS(value, arg, ctx) {
  if (Array.isArray(value))
    return value.map((v, i) => toJS(v, String(i), ctx));
  if (value && typeof value.toJSON === "function") {
    if (!ctx || !hasAnchor(value))
      return value.toJSON(arg, ctx);
    const data2 = { aliasCount: 0, count: 1, res: void 0 };
    ctx.anchors.set(value, data2);
    ctx.onCreate = (res2) => {
      data2.res = res2;
      delete ctx.onCreate;
    };
    const res = value.toJSON(arg, ctx);
    if (ctx.onCreate)
      ctx.onCreate(res);
    return res;
  }
  if (typeof value === "bigint" && !ctx?.keep)
    return Number(value);
  return value;
}
class NodeBase {
  constructor(type) {
    Object.defineProperty(this, NODE_TYPE, { value: type });
  }
  /** Create a copy of this node.  */
  clone() {
    const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    if (this.range)
      copy.range = this.range.slice();
    return copy;
  }
  /** A plain JavaScript representation of this node. */
  toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
    if (!isDocument(doc))
      throw new TypeError("A document argument is required");
    const ctx = {
      anchors: /* @__PURE__ */ new Map(),
      doc,
      keep: true,
      mapAsMap: mapAsMap === true,
      mapKeyWarned: false,
      maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
    };
    const res = toJS(this, "", ctx);
    if (typeof onAnchor === "function")
      for (const { count, res: res2 } of ctx.anchors.values())
        onAnchor(res2, count);
    return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
  }
}
class Alias extends NodeBase {
  constructor(source) {
    super(ALIAS);
    this.source = source;
    Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(doc, ctx) {
    if (ctx?.maxAliasCount === 0)
      throw new ReferenceError("Alias resolution is disabled");
    let nodes;
    if (ctx?.aliasResolveCache) {
      nodes = ctx.aliasResolveCache;
    } else {
      nodes = [];
      visit(doc, {
        Node: (_key, node) => {
          if (isAlias(node) || hasAnchor(node))
            nodes.push(node);
        }
      });
      if (ctx)
        ctx.aliasResolveCache = nodes;
    }
    let found = void 0;
    for (const node of nodes) {
      if (node === this)
        break;
      if (node.anchor === this.source)
        found = node;
    }
    if (found && ctx) {
      const { anchors, doc: doc2, maxAliasCount } = ctx;
      let data2 = anchors.get(found);
      if (!data2) {
        toJS(found, null, ctx);
        data2 = anchors.get(found);
      }
      if (data2?.res === void 0) {
        const msg = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(msg);
      }
      if (maxAliasCount >= 0) {
        data2.count += 1;
        if (data2.aliasCount === 0)
          data2.aliasCount = getAliasCount(doc2, found, anchors);
        if (data2.count * data2.aliasCount > maxAliasCount) {
          const msg = "Excessive alias count indicates a resource exhaustion attack";
          throw new ReferenceError(msg);
        }
      }
    }
    return found;
  }
  toJSON(_arg, ctx) {
    if (!ctx)
      return { source: this.source };
    const source = this.resolve(ctx.doc, ctx);
    if (!source) {
      const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(msg);
    }
    return ctx.anchors.get(source).res;
  }
  toString(ctx, _onComment, _onChompKeep) {
    const src = `*${this.source}`;
    if (ctx) {
      anchorIsValid(this.source);
      if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
        const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(msg);
      }
      if (ctx.implicitKey)
        return `${src} `;
    }
    return src;
  }
}
function getAliasCount(doc, node, anchors) {
  if (isAlias(node)) {
    const source = node.resolve(doc);
    const anchor = anchors && source && anchors.get(source);
    return anchor ? anchor.count * anchor.aliasCount : 0;
  } else if (isCollection(node)) {
    let count = 0;
    for (const item of node.items) {
      const c = getAliasCount(doc, item, anchors);
      if (c > count)
        count = c;
    }
    return count;
  } else if (isPair(node)) {
    const kc = getAliasCount(doc, node.key, anchors);
    const vc = getAliasCount(doc, node.value, anchors);
    return Math.max(kc, vc);
  }
  return 1;
}
const isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
class Scalar extends NodeBase {
  constructor(value) {
    super(SCALAR);
    this.value = value;
  }
  toJSON(arg, ctx) {
    return ctx?.keep ? this.value : toJS(this.value, arg, ctx);
  }
  toString() {
    return String(this.value);
  }
}
Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
Scalar.PLAIN = "PLAIN";
Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
function findTagObject(value, tagName, tags) {
  return tags.find((t) => t.identify?.(value) && !t.format);
}
function createNode(value, tagName, ctx) {
  if (isDocument(value))
    value = value.contents;
  if (isNode(value))
    return value;
  if (isPair(value)) {
    const map = ctx.schema[MAP].createNode?.(ctx.schema, null, ctx);
    map.items.push(value);
    return map;
  }
  if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
    value = value.valueOf();
  }
  const { aliasDuplicateObjects, onAnchor, onTagObj, schema, sourceObjects } = ctx;
  let ref2 = void 0;
  if (aliasDuplicateObjects && value && typeof value === "object") {
    ref2 = sourceObjects.get(value);
    if (ref2) {
      ref2.anchor ?? (ref2.anchor = onAnchor(value));
      return new Alias(ref2.anchor);
    } else {
      ref2 = { anchor: null, node: null };
      sourceObjects.set(value, ref2);
    }
  }
  let tagObj = findTagObject(value, tagName, schema.tags);
  if (!tagObj) {
    if (value && typeof value.toJSON === "function") {
      value = value.toJSON();
    }
    if (!value || typeof value !== "object") {
      const node2 = new Scalar(value);
      if (ref2)
        ref2.node = node2;
      return node2;
    }
    tagObj = value instanceof Map ? schema[MAP] : Symbol.iterator in Object(value) ? schema[SEQ] : schema[MAP];
  }
  if (onTagObj) {
    onTagObj(tagObj);
    delete ctx.onTagObj;
  }
  const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar(value);
  if (!tagObj.default)
    node.tag = tagObj.tag;
  if (ref2)
    ref2.node = node;
  return node;
}
function collectionFromPath(schema, path, value) {
  let v = value;
  for (let i = path.length - 1; i >= 0; --i) {
    const k = path[i];
    if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
      const a = [];
      a[k] = v;
      v = a;
    } else {
      v = /* @__PURE__ */ new Map([[k, v]]);
    }
  }
  return createNode(v, void 0, {
    aliasDuplicateObjects: false,
    keepUndefined: false,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const isEmptyPath = (path) => path == null || typeof path === "object" && !!path[Symbol.iterator]().next().done;
class Collection extends NodeBase {
  constructor(type, schema) {
    super(type);
    Object.defineProperty(this, "schema", {
      value: schema,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(schema) {
    const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    if (schema)
      copy.schema = schema;
    copy.items = copy.items.map((it) => isNode(it) || isPair(it) ? it.clone(schema) : it);
    if (this.range)
      copy.range = this.range.slice();
    return copy;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(path, value) {
    if (isEmptyPath(path))
      this.add(value);
    else {
      const [key, ...rest] = path;
      const node = this.get(key, true);
      if (isCollection(node))
        node.addIn(rest, value);
      else if (node === void 0 && this.schema)
        this.set(key, collectionFromPath(this.schema, rest, value));
      else
        throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(path) {
    const [key, ...rest] = path;
    if (rest.length === 0)
      return this.delete(key);
    const node = this.get(key, true);
    if (isCollection(node))
      return node.deleteIn(rest);
    else
      throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(path, keepScalar) {
    const [key, ...rest] = path;
    const node = this.get(key, true);
    if (rest.length === 0)
      return !keepScalar && isScalar(node) ? node.value : node;
    else
      return isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
  }
  hasAllNullValues(allowScalar) {
    return this.items.every((node) => {
      if (!isPair(node))
        return false;
      const n = node.value;
      return n == null || allowScalar && isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(path) {
    const [key, ...rest] = path;
    if (rest.length === 0)
      return this.has(key);
    const node = this.get(key, true);
    return isCollection(node) ? node.hasIn(rest) : false;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(path, value) {
    const [key, ...rest] = path;
    if (rest.length === 0) {
      this.set(key, value);
    } else {
      const node = this.get(key, true);
      if (isCollection(node))
        node.setIn(rest, value);
      else if (node === void 0 && this.schema)
        this.set(key, collectionFromPath(this.schema, rest, value));
      else
        throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
  }
}
const stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
function indentComment(comment, indent) {
  if (/^\n+$/.test(comment))
    return comment.substring(1);
  return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
}
const lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
const FOLD_FLOW = "flow";
const FOLD_BLOCK = "block";
const FOLD_QUOTED = "quoted";
function foldFlowLines(text, indent, mode2 = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
  if (!lineWidth || lineWidth < 0)
    return text;
  if (lineWidth < minContentWidth)
    minContentWidth = 0;
  const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep)
    return text;
  const folds = [];
  const escapedFolds = {};
  let end = lineWidth - indent.length;
  if (typeof indentAtStart === "number") {
    if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
      folds.push(0);
    else
      end = lineWidth - indentAtStart;
  }
  let split = void 0;
  let prev = void 0;
  let overflow = false;
  let i = -1;
  let escStart = -1;
  let escEnd = -1;
  if (mode2 === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i, indent.length);
    if (i !== -1)
      end = i + endStep;
  }
  for (let ch; ch = text[i += 1]; ) {
    if (mode2 === FOLD_QUOTED && ch === "\\") {
      escStart = i;
      switch (text[i + 1]) {
        case "x":
          i += 3;
          break;
        case "u":
          i += 5;
          break;
        case "U":
          i += 9;
          break;
        default:
          i += 1;
      }
      escEnd = i;
    }
    if (ch === "\n") {
      if (mode2 === FOLD_BLOCK)
        i = consumeMoreIndentedLines(text, i, indent.length);
      end = i + indent.length + endStep;
      split = void 0;
    } else {
      if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
        const next = text[i + 1];
        if (next && next !== " " && next !== "\n" && next !== "	")
          split = i;
      }
      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = void 0;
        } else if (mode2 === FOLD_QUOTED) {
          while (prev === " " || prev === "	") {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          }
          const j = i > escEnd + 1 ? i - 2 : escStart - 1;
          if (escapedFolds[j])
            return text;
          folds.push(j);
          escapedFolds[j] = true;
          end = j + endStep;
          split = void 0;
        } else {
          overflow = true;
        }
      }
    }
    prev = ch;
  }
  if (overflow && onOverflow)
    onOverflow();
  if (folds.length === 0)
    return text;
  if (onFold)
    onFold();
  let res = text.slice(0, folds[0]);
  for (let i2 = 0; i2 < folds.length; ++i2) {
    const fold = folds[i2];
    const end2 = folds[i2 + 1] || text.length;
    if (fold === 0)
      res = `
${indent}${text.slice(0, end2)}`;
    else {
      if (mode2 === FOLD_QUOTED && escapedFolds[fold])
        res += `${text[fold]}\\`;
      res += `
${indent}${text.slice(fold + 1, end2)}`;
    }
  }
  return res;
}
function consumeMoreIndentedLines(text, i, indent) {
  let end = i;
  let start = i + 1;
  let ch = text[start];
  while (ch === " " || ch === "	") {
    if (i < start + indent) {
      ch = text[++i];
    } else {
      do {
        ch = text[++i];
      } while (ch && ch !== "\n");
      end = i;
      start = i + 1;
      ch = text[start];
    }
  }
  return end;
}
const getFoldOptions = (ctx, isBlock) => ({
  indentAtStart: isBlock ? ctx.indent.length : ctx.indentAtStart,
  lineWidth: ctx.options.lineWidth,
  minContentWidth: ctx.options.minContentWidth
});
const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
function lineLengthOverLimit(str, lineWidth, indentLength) {
  if (!lineWidth || lineWidth < 0)
    return false;
  const limit = lineWidth - indentLength;
  const strLen = str.length;
  if (strLen <= limit)
    return false;
  for (let i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === "\n") {
      if (i - start > limit)
        return true;
      start = i + 1;
      if (strLen - start <= limit)
        return false;
    }
  }
  return true;
}
function doubleQuotedString(value, ctx) {
  const json = JSON.stringify(value);
  if (ctx.options.doubleQuotedAsJSON)
    return json;
  const { implicitKey } = ctx;
  const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
  const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
  let str = "";
  let start = 0;
  for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
      str += json.slice(start, i) + "\\ ";
      i += 1;
      start = i;
      ch = "\\";
    }
    if (ch === "\\")
      switch (json[i + 1]) {
        case "u":
          {
            str += json.slice(start, i);
            const code = json.substr(i + 2, 4);
            switch (code) {
              case "0000":
                str += "\\0";
                break;
              case "0007":
                str += "\\a";
                break;
              case "000b":
                str += "\\v";
                break;
              case "001b":
                str += "\\e";
                break;
              case "0085":
                str += "\\N";
                break;
              case "00a0":
                str += "\\_";
                break;
              case "2028":
                str += "\\L";
                break;
              case "2029":
                str += "\\P";
                break;
              default:
                if (code.substr(0, 2) === "00")
                  str += "\\x" + code.substr(2);
                else
                  str += json.substr(i, 6);
            }
            i += 5;
            start = i + 1;
          }
          break;
        case "n":
          if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
            i += 1;
          } else {
            str += json.slice(start, i) + "\n\n";
            while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"') {
              str += "\n";
              i += 2;
            }
            str += indent;
            if (json[i + 2] === " ")
              str += "\\";
            i += 1;
            start = i + 1;
          }
          break;
        default:
          i += 1;
      }
  }
  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
}
function singleQuotedString(value, ctx) {
  if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value))
    return doubleQuotedString(value, ctx);
  const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
  const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
  return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function quotedString(value, ctx) {
  const { singleQuote } = ctx.options;
  let qs;
  if (singleQuote === false)
    qs = doubleQuotedString;
  else {
    const hasDouble = value.includes('"');
    const hasSingle = value.includes("'");
    if (hasDouble && !hasSingle)
      qs = singleQuotedString;
    else if (hasSingle && !hasDouble)
      qs = doubleQuotedString;
    else
      qs = singleQuote ? singleQuotedString : doubleQuotedString;
  }
  return qs(value, ctx);
}
let blockEndNewlines;
try {
  blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
} catch {
  blockEndNewlines = /\n+(?!\n|$)/g;
}
function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
  const { blockQuote, commentString, lineWidth } = ctx.options;
  if (!blockQuote || /\n[\t ]+$/.test(value)) {
    return quotedString(value, ctx);
  }
  const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
  const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.BLOCK_FOLDED ? false : type === Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
  if (!value)
    return literal ? "|\n" : ">\n";
  let chomp;
  let endStart;
  for (endStart = value.length; endStart > 0; --endStart) {
    const ch = value[endStart - 1];
    if (ch !== "\n" && ch !== "	" && ch !== " ")
      break;
  }
  let end = value.substring(endStart);
  const endNlPos = end.indexOf("\n");
  if (endNlPos === -1) {
    chomp = "-";
  } else if (value === end || endNlPos !== end.length - 1) {
    chomp = "+";
    if (onChompKeep)
      onChompKeep();
  } else {
    chomp = "";
  }
  if (end) {
    value = value.slice(0, -end.length);
    if (end[end.length - 1] === "\n")
      end = end.slice(0, -1);
    end = end.replace(blockEndNewlines, `$&${indent}`);
  }
  let startWithSpace = false;
  let startEnd;
  let startNlPos = -1;
  for (startEnd = 0; startEnd < value.length; ++startEnd) {
    const ch = value[startEnd];
    if (ch === " ")
      startWithSpace = true;
    else if (ch === "\n")
      startNlPos = startEnd;
    else
      break;
  }
  let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
  if (start) {
    value = value.substring(start.length);
    start = start.replace(/\n+/g, `$&${indent}`);
  }
  const indentSize = indent ? "2" : "1";
  let header = (startWithSpace ? indentSize : "") + chomp;
  if (comment) {
    header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
    if (onComment)
      onComment();
  }
  if (!literal) {
    const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
    let literalFallback = false;
    const foldOptions = getFoldOptions(ctx, true);
    if (blockQuote !== "folded" && type !== Scalar.BLOCK_FOLDED) {
      foldOptions.onOverflow = () => {
        literalFallback = true;
      };
    }
    const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
    if (!literalFallback)
      return `>${header}
${indent}${body}`;
  }
  value = value.replace(/\n+/g, `$&${indent}`);
  return `|${header}
${indent}${start}${value}${end}`;
}
function plainString(item, ctx, onComment, onChompKeep) {
  const { type, value } = item;
  const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
  if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) {
    return quotedString(value, ctx);
  }
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
    return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
  }
  if (!implicitKey && !inFlow && type !== Scalar.PLAIN && value.includes("\n")) {
    return blockString(item, ctx, onComment, onChompKeep);
  }
  if (containsDocumentMarker(value)) {
    if (indent === "") {
      ctx.forceBlockIndent = true;
      return blockString(item, ctx, onComment, onChompKeep);
    } else if (implicitKey && indent === indentStep) {
      return quotedString(value, ctx);
    }
  }
  const str = value.replace(/\n+/g, `$&
${indent}`);
  if (actualString) {
    const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
    const { compat, tags } = ctx.doc.schema;
    if (tags.some(test) || compat?.some(test))
      return quotedString(value, ctx);
  }
  return implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
}
function stringifyString(item, ctx, onComment, onChompKeep) {
  const { implicitKey, inFlow } = ctx;
  const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
  let { type } = item;
  if (type !== Scalar.QUOTE_DOUBLE) {
    if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
      type = Scalar.QUOTE_DOUBLE;
  }
  const _stringify = (_type) => {
    switch (_type) {
      case Scalar.BLOCK_FOLDED:
      case Scalar.BLOCK_LITERAL:
        return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
      case Scalar.QUOTE_DOUBLE:
        return doubleQuotedString(ss.value, ctx);
      case Scalar.QUOTE_SINGLE:
        return singleQuotedString(ss.value, ctx);
      case Scalar.PLAIN:
        return plainString(ss, ctx, onComment, onChompKeep);
      default:
        return null;
    }
  };
  let res = _stringify(type);
  if (res === null) {
    const { defaultKeyType, defaultStringType } = ctx.options;
    const t = implicitKey && defaultKeyType || defaultStringType;
    res = _stringify(t);
    if (res === null)
      throw new Error(`Unsupported default string type ${t}`);
  }
  return res;
}
function createStringifyContext(doc, options) {
  const opt = Object.assign({
    blockQuote: true,
    commentString: stringifyComment,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: false,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: true,
    indentSeq: true,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: false,
    singleQuote: null,
    trailingComma: false,
    trueStr: "true",
    verifyAliasOrder: true
  }, doc.schema.toStringOptions, options);
  let inFlow;
  switch (opt.collectionStyle) {
    case "block":
      inFlow = false;
      break;
    case "flow":
      inFlow = true;
      break;
    default:
      inFlow = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc,
    flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
    inFlow,
    options: opt
  };
}
function getTagObject(tags, item) {
  if (item.tag) {
    const match = tags.filter((t) => t.tag === item.tag);
    if (match.length > 0)
      return match.find((t) => t.format === item.format) ?? match[0];
  }
  let tagObj = void 0;
  let obj;
  if (isScalar(item)) {
    obj = item.value;
    let match = tags.filter((t) => t.identify?.(obj));
    if (match.length > 1) {
      const testMatch = match.filter((t) => t.test);
      if (testMatch.length > 0)
        match = testMatch;
    }
    tagObj = match.find((t) => t.format === item.format) ?? match.find((t) => !t.format);
  } else {
    obj = item;
    tagObj = tags.find((t) => t.nodeClass && obj instanceof t.nodeClass);
  }
  if (!tagObj) {
    const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
    throw new Error(`Tag not resolved for ${name} value`);
  }
  return tagObj;
}
function stringifyProps(node, tagObj, { anchors, doc }) {
  if (!doc.directives)
    return "";
  const props = [];
  const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
  if (anchor && anchorIsValid(anchor)) {
    anchors.add(anchor);
    props.push(`&${anchor}`);
  }
  const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
  if (tag)
    props.push(doc.directives.tagString(tag));
  return props.join(" ");
}
function stringify(item, ctx, onComment, onChompKeep) {
  if (isPair(item))
    return item.toString(ctx, onComment, onChompKeep);
  if (isAlias(item)) {
    if (ctx.doc.directives)
      return item.toString(ctx);
    if (ctx.resolvedAliases?.has(item)) {
      throw new TypeError(`Cannot stringify circular structure without alias nodes`);
    } else {
      if (ctx.resolvedAliases)
        ctx.resolvedAliases.add(item);
      else
        ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
      item = item.resolve(ctx.doc);
    }
  }
  let tagObj = void 0;
  const node = isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
  tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
  const props = stringifyProps(node, tagObj, ctx);
  if (props.length > 0)
    ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
  const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : isScalar(node) ? stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
  if (!props)
    return str;
  return isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
}
function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
  const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
  let keyComment = isNode(key) && key.comment || null;
  if (simpleKeys) {
    if (keyComment) {
      throw new Error("With simple keys, key nodes cannot have comments");
    }
    if (isCollection(key) || !isNode(key) && typeof key === "object") {
      const msg = "With simple keys, collection cannot be used as a key value";
      throw new Error(msg);
    }
  }
  let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || isCollection(key) || (isScalar(key) ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL : typeof key === "object"));
  ctx = Object.assign({}, ctx, {
    allNullValues: false,
    implicitKey: !explicitKey && (simpleKeys || !allNullValues),
    indent: indent + indentStep
  });
  let keyCommentDone = false;
  let chompKeep = false;
  let str = stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
  if (!explicitKey && !ctx.inFlow && str.length > 1024) {
    if (simpleKeys)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    explicitKey = true;
  }
  if (ctx.inFlow) {
    if (allNullValues || value == null) {
      if (keyCommentDone && onComment)
        onComment();
      return str === "" ? "?" : explicitKey ? `? ${str}` : str;
    }
  } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
    str = `? ${str}`;
    if (keyComment && !keyCommentDone) {
      str += lineComment(str, ctx.indent, commentString(keyComment));
    } else if (chompKeep && onChompKeep)
      onChompKeep();
    return str;
  }
  if (keyCommentDone)
    keyComment = null;
  if (explicitKey) {
    if (keyComment)
      str += lineComment(str, ctx.indent, commentString(keyComment));
    str = `? ${str}
${indent}:`;
  } else {
    str = `${str}:`;
    if (keyComment)
      str += lineComment(str, ctx.indent, commentString(keyComment));
  }
  let vsb, vcb, valueComment;
  if (isNode(value)) {
    vsb = !!value.spaceBefore;
    vcb = value.commentBefore;
    valueComment = value.comment;
  } else {
    vsb = false;
    vcb = null;
    valueComment = null;
    if (value && typeof value === "object")
      value = doc.createNode(value);
  }
  ctx.implicitKey = false;
  if (!explicitKey && !keyComment && isScalar(value))
    ctx.indentAtStart = str.length + 1;
  chompKeep = false;
  if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && isSeq(value) && !value.flow && !value.tag && !value.anchor) {
    ctx.indent = ctx.indent.substring(2);
  }
  let valueCommentDone = false;
  const valueStr = stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
  let ws = " ";
  if (keyComment || vsb || vcb) {
    ws = vsb ? "\n" : "";
    if (vcb) {
      const cs = commentString(vcb);
      ws += `
${indentComment(cs, ctx.indent)}`;
    }
    if (valueStr === "" && !ctx.inFlow) {
      if (ws === "\n" && valueComment)
        ws = "\n\n";
    } else {
      ws += `
${ctx.indent}`;
    }
  } else if (!explicitKey && isCollection(value)) {
    const vs0 = valueStr[0];
    const nl0 = valueStr.indexOf("\n");
    const hasNewline = nl0 !== -1;
    const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
    if (hasNewline || !flow) {
      let hasPropsLine = false;
      if (hasNewline && (vs0 === "&" || vs0 === "!")) {
        let sp0 = valueStr.indexOf(" ");
        if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
          sp0 = valueStr.indexOf(" ", sp0 + 1);
        }
        if (sp0 === -1 || nl0 < sp0)
          hasPropsLine = true;
      }
      if (!hasPropsLine)
        ws = `
${ctx.indent}`;
    }
  } else if (valueStr === "" || valueStr[0] === "\n") {
    ws = "";
  }
  str += ws + valueStr;
  if (ctx.inFlow) {
    if (valueCommentDone && onComment)
      onComment();
  } else if (valueComment && !valueCommentDone) {
    str += lineComment(str, ctx.indent, commentString(valueComment));
  } else if (chompKeep && onChompKeep) {
    onChompKeep();
  }
  return str;
}
function warn(logLevel, warning) {
  if (logLevel === "debug" || logLevel === "warn") {
    console.warn(warning);
  }
}
const MERGE_KEY = "<<";
const merge = {
  identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), {
    addToJSMap: addMergeToJSMap
  }),
  stringify: () => MERGE_KEY
};
const isMergeKey = (ctx, key) => (merge.identify(key) || isScalar(key) && (!key.type || key.type === Scalar.PLAIN) && merge.identify(key.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default);
function addMergeToJSMap(ctx, map, value) {
  const source = resolveAliasValue(ctx, value);
  if (isSeq(source))
    for (const it of source.items)
      mergeValue(ctx, map, it);
  else if (Array.isArray(source))
    for (const it of source)
      mergeValue(ctx, map, it);
  else
    mergeValue(ctx, map, source);
}
function mergeValue(ctx, map, value) {
  const source = resolveAliasValue(ctx, value);
  if (!isMap(source))
    throw new Error("Merge sources must be maps or map aliases");
  const srcMap = source.toJSON(null, ctx, Map);
  for (const [key, value2] of srcMap) {
    if (map instanceof Map) {
      if (!map.has(key))
        map.set(key, value2);
    } else if (map instanceof Set) {
      map.add(key);
    } else if (!Object.prototype.hasOwnProperty.call(map, key)) {
      Object.defineProperty(map, key, {
        value: value2,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }
  return map;
}
function resolveAliasValue(ctx, value) {
  return ctx && isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
}
function addPairToJSMap(ctx, map, { key, value }) {
  if (isNode(key) && key.addToJSMap)
    key.addToJSMap(ctx, map, value);
  else if (isMergeKey(ctx, key))
    addMergeToJSMap(ctx, map, value);
  else {
    const jsKey = toJS(key, "", ctx);
    if (map instanceof Map) {
      map.set(jsKey, toJS(value, jsKey, ctx));
    } else if (map instanceof Set) {
      map.add(jsKey);
    } else {
      const stringKey = stringifyKey(key, jsKey, ctx);
      const jsValue = toJS(value, stringKey, ctx);
      if (stringKey in map)
        Object.defineProperty(map, stringKey, {
          value: jsValue,
          writable: true,
          enumerable: true,
          configurable: true
        });
      else
        map[stringKey] = jsValue;
    }
  }
  return map;
}
function stringifyKey(key, jsKey, ctx) {
  if (jsKey === null)
    return "";
  if (typeof jsKey !== "object")
    return String(jsKey);
  if (isNode(key) && ctx?.doc) {
    const strCtx = createStringifyContext(ctx.doc, {});
    strCtx.anchors = /* @__PURE__ */ new Set();
    for (const node of ctx.anchors.keys())
      strCtx.anchors.add(node.anchor);
    strCtx.inFlow = true;
    strCtx.inStringifyKey = true;
    const strKey = key.toString(strCtx);
    if (!ctx.mapKeyWarned) {
      let jsonStr = JSON.stringify(strKey);
      if (jsonStr.length > 40)
        jsonStr = jsonStr.substring(0, 36) + '..."';
      warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
      ctx.mapKeyWarned = true;
    }
    return strKey;
  }
  return JSON.stringify(jsKey);
}
function createPair(key, value, ctx) {
  const k = createNode(key, void 0, ctx);
  const v = createNode(value, void 0, ctx);
  return new Pair(k, v);
}
class Pair {
  constructor(key, value = null) {
    Object.defineProperty(this, NODE_TYPE, { value: PAIR });
    this.key = key;
    this.value = value;
  }
  clone(schema) {
    let { key, value } = this;
    if (isNode(key))
      key = key.clone(schema);
    if (isNode(value))
      value = value.clone(schema);
    return new Pair(key, value);
  }
  toJSON(_, ctx) {
    const pair = ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return addPairToJSMap(ctx, pair, this);
  }
  toString(ctx, onComment, onChompKeep) {
    return ctx?.doc ? stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
  }
}
function stringifyCollection(collection, ctx, options) {
  const flow = ctx.inFlow ?? collection.flow;
  const stringify2 = flow ? stringifyFlowCollection : stringifyBlockCollection;
  return stringify2(collection, ctx, options);
}
function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
  const { indent, options: { commentString } } = ctx;
  const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
  let chompKeep = false;
  const lines = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    let comment2 = null;
    if (isNode(item)) {
      if (!chompKeep && item.spaceBefore)
        lines.push("");
      addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
      if (item.comment)
        comment2 = item.comment;
    } else if (isPair(item)) {
      const ik = isNode(item.key) ? item.key : null;
      if (ik) {
        if (!chompKeep && ik.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
      }
    }
    chompKeep = false;
    let str2 = stringify(item, itemCtx, () => comment2 = null, () => chompKeep = true);
    if (comment2)
      str2 += lineComment(str2, itemIndent, commentString(comment2));
    if (chompKeep && comment2)
      chompKeep = false;
    lines.push(blockItemPrefix + str2);
  }
  let str;
  if (lines.length === 0) {
    str = flowChars.start + flowChars.end;
  } else {
    str = lines[0];
    for (let i = 1; i < lines.length; ++i) {
      const line2 = lines[i];
      str += line2 ? `
${indent}${line2}` : "\n";
    }
  }
  if (comment) {
    str += "\n" + indentComment(commentString(comment), indent);
    if (onComment)
      onComment();
  } else if (chompKeep && onChompKeep)
    onChompKeep();
  return str;
}
function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
  const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
  itemIndent += indentStep;
  const itemCtx = Object.assign({}, ctx, {
    indent: itemIndent,
    inFlow: true,
    type: null
  });
  let reqNewline = false;
  let linesAtValue = 0;
  const lines = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    let comment = null;
    if (isNode(item)) {
      if (item.spaceBefore)
        lines.push("");
      addCommentBefore(ctx, lines, item.commentBefore, false);
      if (item.comment)
        comment = item.comment;
    } else if (isPair(item)) {
      const ik = isNode(item.key) ? item.key : null;
      if (ik) {
        if (ik.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, ik.commentBefore, false);
        if (ik.comment)
          reqNewline = true;
      }
      const iv = isNode(item.value) ? item.value : null;
      if (iv) {
        if (iv.comment)
          comment = iv.comment;
        if (iv.commentBefore)
          reqNewline = true;
      } else if (item.value == null && ik?.comment) {
        comment = ik.comment;
      }
    }
    if (comment)
      reqNewline = true;
    let str = stringify(item, itemCtx, () => comment = null);
    reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
    if (i < items.length - 1) {
      str += ",";
    } else if (ctx.options.trailingComma) {
      if (ctx.options.lineWidth > 0) {
        reqNewline || (reqNewline = lines.reduce((sum2, line2) => sum2 + line2.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
      }
      if (reqNewline) {
        str += ",";
      }
    }
    if (comment)
      str += lineComment(str, itemIndent, commentString(comment));
    lines.push(str);
    linesAtValue = lines.length;
  }
  const { start, end } = flowChars;
  if (lines.length === 0) {
    return start + end;
  } else {
    if (!reqNewline) {
      const len = lines.reduce((sum2, line2) => sum2 + line2.length + 2, 2);
      reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
    }
    if (reqNewline) {
      let str = start;
      for (const line2 of lines)
        str += line2 ? `
${indentStep}${indent}${line2}` : "\n";
      return `${str}
${indent}${end}`;
    } else {
      return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
    }
  }
}
function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
  if (comment && chompKeep)
    comment = comment.replace(/^\n+/, "");
  if (comment) {
    const ic = indentComment(commentString(comment), indent);
    lines.push(ic.trimStart());
  }
}
function findPair(items, key) {
  const k = isScalar(key) ? key.value : key;
  for (const it of items) {
    if (isPair(it)) {
      if (it.key === key || it.key === k)
        return it;
      if (isScalar(it.key) && it.key.value === k)
        return it;
    }
  }
  return void 0;
}
class YAMLMap extends Collection {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(schema) {
    super(MAP, schema);
    this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(schema, obj, ctx) {
    const { keepUndefined, replacer } = ctx;
    const map = new this(schema);
    const add = (key, value) => {
      if (typeof replacer === "function")
        value = replacer.call(obj, key, value);
      else if (Array.isArray(replacer) && !replacer.includes(key))
        return;
      if (value !== void 0 || keepUndefined)
        map.items.push(createPair(key, value, ctx));
    };
    if (obj instanceof Map) {
      for (const [key, value] of obj)
        add(key, value);
    } else if (obj && typeof obj === "object") {
      for (const key of Object.keys(obj))
        add(key, obj[key]);
    }
    if (typeof schema.sortMapEntries === "function") {
      map.items.sort(schema.sortMapEntries);
    }
    return map;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(pair, overwrite) {
    let _pair;
    if (isPair(pair))
      _pair = pair;
    else if (!pair || typeof pair !== "object" || !("key" in pair)) {
      _pair = new Pair(pair, pair?.value);
    } else
      _pair = new Pair(pair.key, pair.value);
    const prev = findPair(this.items, _pair.key);
    const sortEntries = this.schema?.sortMapEntries;
    if (prev) {
      if (!overwrite)
        throw new Error(`Key ${_pair.key} already set`);
      if (isScalar(prev.value) && isScalarValue(_pair.value))
        prev.value.value = _pair.value;
      else
        prev.value = _pair.value;
    } else if (sortEntries) {
      const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
      if (i === -1)
        this.items.push(_pair);
      else
        this.items.splice(i, 0, _pair);
    } else {
      this.items.push(_pair);
    }
  }
  delete(key) {
    const it = findPair(this.items, key);
    if (!it)
      return false;
    const del = this.items.splice(this.items.indexOf(it), 1);
    return del.length > 0;
  }
  get(key, keepScalar) {
    const it = findPair(this.items, key);
    const node = it?.value;
    return (!keepScalar && isScalar(node) ? node.value : node) ?? void 0;
  }
  has(key) {
    return !!findPair(this.items, key);
  }
  set(key, value) {
    this.add(new Pair(key, value), true);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(_, ctx, Type) {
    const map = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    if (ctx?.onCreate)
      ctx.onCreate(map);
    for (const item of this.items)
      addPairToJSMap(ctx, map, item);
    return map;
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx)
      return JSON.stringify(this);
    for (const item of this.items) {
      if (!isPair(item))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
    }
    if (!ctx.allNullValues && this.hasAllNullValues(false))
      ctx = Object.assign({}, ctx, { allNullValues: true });
    return stringifyCollection(this, ctx, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: ctx.indent || "",
      onChompKeep,
      onComment
    });
  }
}
class YAMLSeq extends Collection {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(schema) {
    super(SEQ, schema);
    this.items = [];
  }
  add(value) {
    this.items.push(value);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(key) {
    const idx = asItemIndex(key);
    if (typeof idx !== "number")
      return false;
    const del = this.items.splice(idx, 1);
    return del.length > 0;
  }
  get(key, keepScalar) {
    const idx = asItemIndex(key);
    if (typeof idx !== "number")
      return void 0;
    const it = this.items[idx];
    return !keepScalar && isScalar(it) ? it.value : it;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(key) {
    const idx = asItemIndex(key);
    return typeof idx === "number" && idx < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(key, value) {
    const idx = asItemIndex(key);
    if (typeof idx !== "number")
      throw new Error(`Expected a valid index, not ${key}.`);
    const prev = this.items[idx];
    if (isScalar(prev) && isScalarValue(value))
      prev.value = value;
    else
      this.items[idx] = value;
  }
  toJSON(_, ctx) {
    const seq = [];
    if (ctx?.onCreate)
      ctx.onCreate(seq);
    let i = 0;
    for (const item of this.items)
      seq.push(toJS(item, String(i++), ctx));
    return seq;
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx)
      return JSON.stringify(this);
    return stringifyCollection(this, ctx, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (ctx.indent || "") + "  ",
      onChompKeep,
      onComment
    });
  }
  static from(schema, obj, ctx) {
    const { replacer } = ctx;
    const seq = new this(schema);
    if (obj && Symbol.iterator in Object(obj)) {
      let i = 0;
      for (let it of obj) {
        if (typeof replacer === "function") {
          const key = obj instanceof Set ? it : String(i++);
          it = replacer.call(obj, key, it);
        }
        seq.items.push(createNode(it, void 0, ctx));
      }
    }
    return seq;
  }
}
function asItemIndex(key) {
  let idx = isScalar(key) ? key.value : key;
  if (idx && typeof idx === "string")
    idx = Number(idx);
  return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
}
function createPairs(schema, iterable, ctx) {
  const { replacer } = ctx;
  const pairs = new YAMLSeq(schema);
  pairs.tag = "tag:yaml.org,2002:pairs";
  let i = 0;
  if (iterable && Symbol.iterator in Object(iterable))
    for (let it of iterable) {
      if (typeof replacer === "function")
        it = replacer.call(iterable, String(i++), it);
      let key, value;
      if (Array.isArray(it)) {
        if (it.length === 2) {
          key = it[0];
          value = it[1];
        } else
          throw new TypeError(`Expected [key, value] tuple: ${it}`);
      } else if (it && it instanceof Object) {
        const keys = Object.keys(it);
        if (keys.length === 1) {
          key = keys[0];
          value = it[key];
        } else {
          throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
        }
      } else {
        key = it;
      }
      pairs.items.push(createPair(key, value, ctx));
    }
  return pairs;
}
class YAMLOMap extends YAMLSeq {
  constructor() {
    super();
    this.add = YAMLMap.prototype.add.bind(this);
    this.delete = YAMLMap.prototype.delete.bind(this);
    this.get = YAMLMap.prototype.get.bind(this);
    this.has = YAMLMap.prototype.has.bind(this);
    this.set = YAMLMap.prototype.set.bind(this);
    this.tag = YAMLOMap.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(_, ctx) {
    if (!ctx)
      return super.toJSON(_);
    const map = /* @__PURE__ */ new Map();
    if (ctx?.onCreate)
      ctx.onCreate(map);
    for (const pair of this.items) {
      let key, value;
      if (isPair(pair)) {
        key = toJS(pair.key, "", ctx);
        value = toJS(pair.value, key, ctx);
      } else {
        key = toJS(pair, "", ctx);
      }
      if (map.has(key))
        throw new Error("Ordered maps must not include duplicate keys");
      map.set(key, value);
    }
    return map;
  }
  static from(schema, iterable, ctx) {
    const pairs = createPairs(schema, iterable, ctx);
    const omap = new this();
    omap.items = pairs.items;
    return omap;
  }
}
YAMLOMap.tag = "tag:yaml.org,2002:omap";
class YAMLSet extends YAMLMap {
  constructor(schema) {
    super(schema);
    this.tag = YAMLSet.tag;
  }
  add(key) {
    let pair;
    if (isPair(key))
      pair = key;
    else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null)
      pair = new Pair(key.key, null);
    else
      pair = new Pair(key, null);
    const prev = findPair(this.items, pair.key);
    if (!prev)
      this.items.push(pair);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(key, keepPair) {
    const pair = findPair(this.items, key);
    return !keepPair && isPair(pair) ? isScalar(pair.key) ? pair.key.value : pair.key : pair;
  }
  set(key, value) {
    if (typeof value !== "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
    const prev = findPair(this.items, key);
    if (prev && !value) {
      this.items.splice(this.items.indexOf(prev), 1);
    } else if (!prev && value) {
      this.items.push(new Pair(key));
    }
  }
  toJSON(_, ctx) {
    return super.toJSON(_, ctx, Set);
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx)
      return JSON.stringify(this);
    if (this.hasAllNullValues(true))
      return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
    else
      throw new Error("Set items must all have null values");
  }
  static from(schema, iterable, ctx) {
    const { replacer } = ctx;
    const set = new this(schema);
    if (iterable && Symbol.iterator in Object(iterable))
      for (let value of iterable) {
        if (typeof replacer === "function")
          value = replacer.call(iterable, value, value);
        set.items.push(createPair(value, null, ctx));
      }
    return set;
  }
}
YAMLSet.tag = "tag:yaml.org,2002:set";
new Set("0123456789ABCDEFabcdef");
new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
new Set(",[]{}");
new Set(" ,[]{}\n\r	");
function makeId(length = 5) {
  const result = [];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++)
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  return result.join("");
}
function randId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
}
function define(target, key, value) {
  Object.defineProperty(target, key, {
    value,
    writable: true,
    enumerable: false
  });
}
const data$1 = reactive({});
let onSet$1 = [];
let onPatch$2 = [];
define(data$1, "$syncUp", true);
define(data$1, "$syncDown", true);
define(data$1, "$paused", false);
define(data$1, "$onSet", (fn) => onSet$1.push(fn));
define(data$1, "$onPatch", (fn) => onPatch$2.push(fn));
randId();
{
  define(data$1, "$patch", async () => false);
}
const builtinSync = {
  channels: [],
  enabled: true,
  init(channelKey, onUpdate, state2, persist = false) {
    let stateChannel;
    if (!persist) {
      stateChannel = new BroadcastChannel(channelKey);
      stateChannel.addEventListener("message", (event) => onUpdate(event.data));
      this.channels.push(stateChannel);
    } else if (persist) {
      this.listener = function(event) {
        if (event && event.key === channelKey && event.newValue)
          onUpdate(JSON.parse(event.newValue));
      };
      window.addEventListener("storage", this.listener);
      const serializedState = window.localStorage.getItem(channelKey);
      if (serializedState)
        onUpdate(JSON.parse(serializedState));
    }
    return (state22, updating = false) => {
      if (this.enabled) {
        if (!persist && stateChannel && !updating)
          stateChannel.postMessage(toRaw(state22));
        if (persist && !updating)
          window.localStorage.setItem(channelKey, JSON.stringify(state22));
      }
    };
  },
  disable() {
    this.enabled = false;
    this.channels.forEach((channel) => channel.close());
    if (this.listener) {
      window.removeEventListener("storage", this.listener);
    }
  }
};
const syncInterfaces = reactive([builtinSync]);
const channels = /* @__PURE__ */ new Map();
const syncWrites = ref({});
function createSyncState(serverState, defaultState, persist = false) {
  const onPatchCallbacks = [];
  let patching = false;
  let updating = false;
  let patchingTimeout;
  let updatingTimeout;
  const state2 = reactive(defaultState);
  function onPatch2(fn) {
    onPatchCallbacks.push(fn);
  }
  function patch2(key, value) {
    if (state2[key] === value)
      return;
    clearTimeout(patchingTimeout);
    patching = true;
    state2[key] = value;
    patchingTimeout = setTimeout(() => patching = false, 0);
  }
  function onUpdate(patch22) {
    if (!patching) {
      clearTimeout(updatingTimeout);
      updating = true;
      Object.entries(patch22).forEach(([key, value]) => {
        state2[key] = value;
      });
      updatingTimeout = setTimeout(() => updating = false, 0);
    }
  }
  function init2(channelKey) {
    channels.set(channelKey, { onUpdate, persist, state: state2 });
    syncWrites.value[channelKey] = syncInterfaces.map((sync) => sync.init(channelKey, onUpdate, state2, persist)).filter((x) => Boolean(x));
    function onStateChanged() {
      syncWrites.value[channelKey].forEach((write) => write?.(toRaw(state2), updating));
      if (!patching)
        onPatchCallbacks.forEach((fn) => fn(state2));
    }
    watch(state2, onStateChanged, { deep: true });
  }
  return { init: init2, onPatch: onPatch2, onUpdate, patch: patch2, state: state2 };
}
const {
  init: initDrawingState,
  onPatch: onPatchDrawingState,
  patch: patchDrawingState,
  state: drawingState
} = createSyncState(
  data$1,
  data$1,
  false
);
const data = reactive({ "page": 0, "clicks": 0, "timer": { "status": "stopped", "slides": {}, "startedAt": 0, "pausedAt": 0 } });
let onSet = [];
let onPatch$1 = [];
define(data, "$syncUp", true);
define(data, "$syncDown", true);
define(data, "$paused", false);
define(data, "$onSet", (fn) => onSet.push(fn));
define(data, "$onPatch", (fn) => onPatch$1.push(fn));
randId();
{
  define(data, "$patch", async () => false);
}
const { init, onPatch, patch, state } = createSyncState(data, {
  page: 1,
  clicks: 0,
  clicksTotal: 0,
  timer: {
    status: "stopped",
    slides: {},
    startedAt: 0,
    pausedAt: 0
  }
});
function setupRoot() {
  const app = getCurrentInstance().appContext.app;
  const context = reactive({
    nav: useNav(),
    configs,
    themeConfigs: computed(() => configs.themeConfig)
  });
  app.provide(injectionRenderContext, ref("none"));
  app.provide(injectionSlidevContext, context);
  app.provide(injectionCurrentPage, computed(() => context.nav.currentSlideNo));
  app.provide(injectionClicksContext, shallowRef(createFixedClicks()));
  for (const setup of setups$2)
    setup();
  const {
    clicksContext,
    currentSlideNo,
    hasPrimarySlide,
    isNotesViewer,
    isPresenter,
    isPrintMode
  } = useNav();
  useHead({
    title: slidesTitle,
    htmlAttrs: configs.htmlAttrs
  });
  usePrintStyles();
  init(`${slidesTitle} - shared`);
  initDrawingState(`${slidesTitle} - drawings`);
  const id = `${location.origin}_${makeId()}`;
  const syncType = computed(() => isPresenter.value ? "presenter" : "viewer");
  function updateSharedState() {
    const shouldSend = isPresenter.value ? syncDirections.value.presenterSend : syncDirections.value.viewerSend;
    if (!shouldSend)
      return;
    if (isNotesViewer.value || isPrintMode.value)
      return;
    if (!isPresenter.value && !TRUST_ORIGINS.includes(location.host.split(":")[0]))
      return;
    patch("page", +currentSlideNo.value);
    patch("clicks", clicksContext.value.current);
    patch("clicksTotal", clicksContext.value.total);
    patch("lastUpdate", {
      id,
      type: syncType.value,
      time: (/* @__PURE__ */ new Date()).getTime()
    });
  }
  const router = useRouter();
  router.afterEach(updateSharedState);
  watch(clicksContext, updateSharedState);
  onPatch((state2) => {
    const shouldReceive = isPresenter.value ? syncDirections.value.presenterReceive : syncDirections.value.viewerReceive;
    if (!shouldReceive)
      return;
    if (!hasPrimarySlide.value || isPrintMode.value)
      return;
    if (state2.lastUpdate?.type === syncType.value)
      return;
    if (+state2.page === +currentSlideNo.value && +clicksContext.value.current === +state2.clicks)
      return;
    hmrSkipTransition.value = false;
    router.replace({
      path: getSlidePath(state2.page, isPresenter.value),
      query: {
        ...router.currentRoute.value.query,
        clicks: state2.clicks || 0
      }
    });
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    setupRoot();
    watchEffect(() => {
      for (const [key, value] of Object.entries(themeVars.value))
        document.body.style.setProperty(key, value.toString());
    });
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createBlock(_component_RouterView);
    };
  }
});
const setups$1 = [Object.values([])[0], Object.values([])[0]].filter(Boolean);
async function renderDOMHead(head, options = {}) {
  const dom = options.document || head.resolvedOptions.document;
  if (!dom || !head.dirty)
    return;
  const beforeRenderCtx = { shouldRender: true, tags: [] };
  await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender)
    return;
  if (head._domUpdatePromise) {
    return head._domUpdatePromise;
  }
  head._domUpdatePromise = new Promise(async (resolve) => {
    const dupeKeyCounter = /* @__PURE__ */ new Map();
    const resolveTagPromise = new Promise((resolve2) => {
      head.resolveTags().then((tags2) => {
        resolve2(
          tags2.map((tag) => {
            const count = dupeKeyCounter.get(tag._d) || 0;
            const res = {
              tag,
              id: (count ? `${tag._d}:${count}` : tag._d) || tag._h,
              shouldRender: true
            };
            if (tag._d && isMetaArrayDupeKey(tag._d)) {
              dupeKeyCounter.set(tag._d, count + 1);
            }
            return res;
          })
        );
      });
    });
    let state2 = head._dom;
    if (!state2) {
      state2 = {
        title: dom.title,
        elMap: (/* @__PURE__ */ new Map()).set("htmlAttrs", dom.documentElement).set("bodyAttrs", dom.body)
      };
      for (const key of ["body", "head"]) {
        const children = dom[key]?.children;
        for (const c of children) {
          const tag = c.tagName.toLowerCase();
          if (!HasElementTags.has(tag)) {
            continue;
          }
          const next = normalizeProps({ tag, props: {} }, {
            innerHTML: c.innerHTML,
            ...c.getAttributeNames().reduce((props, name) => {
              props[name] = c.getAttribute(name);
              return props;
            }, {}) || {}
          });
          next.key = c.getAttribute("data-hid") || void 0;
          next._d = dedupeKey(next) || hashTag(next);
          if (state2.elMap.has(next._d)) {
            let count = 1;
            let k = next._d;
            while (state2.elMap.has(k)) {
              k = `${next._d}:${count++}`;
            }
            state2.elMap.set(k, c);
          } else {
            state2.elMap.set(next._d, c);
          }
        }
      }
    }
    state2.pendingSideEffects = { ...state2.sideEffects };
    state2.sideEffects = {};
    function track(id, scope, fn) {
      const k = `${id}:${scope}`;
      state2.sideEffects[k] = fn;
      delete state2.pendingSideEffects[k];
    }
    function trackCtx({ id, $el, tag }) {
      const isAttrTag = tag.tag.endsWith("Attrs");
      state2.elMap.set(id, $el);
      if (!isAttrTag) {
        if (tag.textContent && tag.textContent !== $el.textContent) {
          $el.textContent = tag.textContent;
        }
        if (tag.innerHTML && tag.innerHTML !== $el.innerHTML) {
          $el.innerHTML = tag.innerHTML;
        }
        track(id, "el", () => {
          $el?.remove();
          state2.elMap.delete(id);
        });
      }
      for (const k in tag.props) {
        if (!Object.prototype.hasOwnProperty.call(tag.props, k))
          continue;
        const value = tag.props[k];
        if (k.startsWith("on") && typeof value === "function") {
          const dataset = $el?.dataset;
          if (dataset && dataset[`${k}fired`]) {
            const ek = k.slice(0, -5);
            value.call($el, new Event(ek.substring(2)));
          }
          if ($el.getAttribute(`data-${k}`) !== "") {
            (tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(
              // onload -> load
              k.substring(2),
              value.bind($el)
            );
            $el.setAttribute(`data-${k}`, "");
          }
          continue;
        }
        const ck = `attr:${k}`;
        if (k === "class") {
          if (!value) {
            continue;
          }
          for (const c of value) {
            isAttrTag && track(id, `${ck}:${c}`, () => $el.classList.remove(c));
            !$el.classList.contains(c) && $el.classList.add(c);
          }
        } else if (k === "style") {
          if (!value) {
            continue;
          }
          for (const [k2, v] of value) {
            track(id, `${ck}:${k2}`, () => {
              $el.style.removeProperty(k2);
            });
            $el.style.setProperty(k2, v);
          }
        } else if (value !== false && value !== null) {
          $el.getAttribute(k) !== value && $el.setAttribute(k, value === true ? "" : String(value));
          isAttrTag && track(id, ck, () => $el.removeAttribute(k));
        }
      }
    }
    const pending = [];
    const frag = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
    const tags = await resolveTagPromise;
    for (const ctx of tags) {
      const { tag, shouldRender, id } = ctx;
      if (!shouldRender)
        continue;
      if (tag.tag === "title") {
        dom.title = tag.textContent;
        track("title", "", () => dom.title = state2.title);
        continue;
      }
      ctx.$el = ctx.$el || state2.elMap.get(id);
      if (ctx.$el) {
        trackCtx(ctx);
      } else if (HasElementTags.has(tag.tag)) {
        pending.push(ctx);
      }
    }
    for (const ctx of pending) {
      const pos = ctx.tag.tagPosition || "head";
      ctx.$el = dom.createElement(ctx.tag.tag);
      trackCtx(ctx);
      frag[pos] = frag[pos] || dom.createDocumentFragment();
      frag[pos].appendChild(ctx.$el);
    }
    for (const ctx of tags)
      await head.hooks.callHook("dom:renderTag", ctx, dom, track);
    frag.head && dom.head.appendChild(frag.head);
    frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
    frag.bodyClose && dom.body.appendChild(frag.bodyClose);
    for (const k in state2.pendingSideEffects) {
      state2.pendingSideEffects[k]();
    }
    head._dom = state2;
    await head.hooks.callHook("dom:rendered", { renders: tags });
    resolve();
  }).finally(() => {
    head._domUpdatePromise = void 0;
    head.dirty = false;
  });
  return head._domUpdatePromise;
}
function createHead$1(options = {}) {
  const render = options.domOptions?.render || renderDOMHead;
  options.document = options.document || (typeof window !== "undefined" ? document : void 0);
  const initialPayload = options.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || false;
  const head = /* @__PURE__ */ createUnhead({
    ...options,
    plugins: [
      ...options.plugins || [],
      {
        key: "client",
        hooks: {
          "entries:updated": render
        }
      }
    ],
    init: [
      initialPayload ? JSON.parse(initialPayload) : false,
      ...options.init || []
    ]
  });
  head.ssr = false;
  return head;
}
function createDebouncedFn(callee, delayer) {
  let ctxId = 0;
  return () => {
    const delayFnCtxId = ++ctxId;
    delayer(() => {
      if (ctxId === delayFnCtxId) {
        callee();
      }
    });
  };
}
// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    domOptions: {
      render: createDebouncedFn(() => renderDOMHead(head), (fn) => setTimeout(fn, 0))
    },
    ...options
  });
  head.install = /* @__PURE__ */ vueInstall(head);
  return head;
}
function getSlideClass(route, extra = "") {
  const classes = ["slidev-page", extra];
  const no = route?.meta?.slide?.no;
  if (no != null)
    classes.push(`slidev-page-${no}`);
  return classes.filter(Boolean).join(" ");
}
async function downloadPDF() {
  const { saveAs } = await __vitePreload(async () => {
    const { saveAs: saveAs2 } = await import("./modules/file-saver-eOEwPutC.js").then((n) => n.F);
    return { saveAs: saveAs2 };
  }, true ? [] : void 0);
  saveAs(
    typeof configs.download === "string" ? configs.download : configs.exportFilename ? `${configs.exportFilename}.pdf` : `${"/slides/canvasobs/"}slidev-exported.pdf`,
    `${configs.title}.pdf`
  );
}
function directiveInject(dir, key, defaultValue) {
  return (dir.instance?.$).provides[key] ?? defaultValue;
}
function createVClickDirectives() {
  return {
    install(app) {
      app.directive("click", {
        // @ts-expect-error extra prop
        name: "v-click",
        mounted(el, dir) {
          const resolved = resolveClick(el, dir, dir.value);
          if (resolved == null)
            return;
          el.classList.toggle(CLASS_VCLICK_TARGET, true);
          el.dataset.slidevClicksStart = String(resolved.start);
          if (Number.isFinite(resolved.end))
            el.dataset.slidevClicksEnd = String(resolved.end);
          el.watchStopHandle = watchEffect(() => {
            const active = resolved.isActive.value;
            const current = resolved.isCurrent.value;
            const prior = active && !current;
            if (resolved.flagHide) {
              el.classList.toggle(resolved.flagFade ? CLASS_VCLICK_FADE : CLASS_VCLICK_HIDDEN, active);
              el.classList.toggle(CLASS_VCLICK_HIDDEN_EXP, active);
            } else {
              el.classList.toggle(resolved.flagFade ? CLASS_VCLICK_FADE : CLASS_VCLICK_HIDDEN, !active);
            }
            el.classList.toggle(CLASS_VCLICK_CURRENT, current);
            el.classList.toggle(CLASS_VCLICK_PRIOR, prior);
          });
        },
        unmounted
      });
      app.directive("after", {
        // @ts-expect-error extra prop
        name: "v-after",
        mounted(el, dir) {
          const resolved = resolveClick(el, dir, "+0");
          if (resolved == null)
            return;
          el.classList.toggle(CLASS_VCLICK_TARGET, true);
          el.watchStopHandle = watchEffect(() => {
            const active = resolved.isActive.value;
            const current = resolved.isCurrent.value;
            const prior = active && !current;
            if (resolved.flagHide) {
              el.classList.toggle(resolved.flagFade ? CLASS_VCLICK_FADE : CLASS_VCLICK_HIDDEN, active);
              el.classList.toggle(CLASS_VCLICK_HIDDEN_EXP, active);
            } else {
              el.classList.toggle(resolved.flagFade ? CLASS_VCLICK_FADE : CLASS_VCLICK_HIDDEN, !active);
            }
            el.classList.toggle(CLASS_VCLICK_CURRENT, current);
            el.classList.toggle(CLASS_VCLICK_PRIOR, prior);
          });
        },
        unmounted
      });
      app.directive("click-hide", {
        // @ts-expect-error extra prop
        name: "v-click-hide",
        mounted(el, dir) {
          const resolved = resolveClick(el, dir, dir.value, true);
          if (resolved == null)
            return;
          el.classList.toggle(CLASS_VCLICK_TARGET, true);
          el.watchStopHandle = watchEffect(() => {
            const active = resolved.isActive.value;
            const current = resolved.isCurrent.value;
            const prior = active && !current;
            el.classList.toggle(resolved.flagFade ? CLASS_VCLICK_FADE : CLASS_VCLICK_HIDDEN, active);
            el.classList.toggle(CLASS_VCLICK_HIDDEN_EXP, active);
            el.classList.toggle(CLASS_VCLICK_CURRENT, current);
            el.classList.toggle(CLASS_VCLICK_PRIOR, prior);
          });
        },
        unmounted
      });
    }
  };
}
const resolvedClickMap = /* @__PURE__ */ new Map();
function resolveClick(el, dir, value, explicitHide = false) {
  const ctx = directiveInject(dir, injectionClicksContext)?.value;
  if (!el || !ctx)
    return null;
  const flagHide = explicitHide || dir.modifiers.hide !== false && dir.modifiers.hide != null;
  const flagFade = dir.modifiers.fade !== false && dir.modifiers.fade != null;
  const info = ctx.calculate(value);
  if (!info)
    return null;
  ctx.register(el, info);
  const isShown = computed(() => flagHide ? !info.isActive.value : info.isActive.value);
  const visibilityState = computed(() => {
    if (isShown.value)
      return "shown";
    if (Number.isFinite(info.end))
      return ctx.current < info.start ? "before" : "after";
    else
      return flagHide ? "after" : "before";
  });
  const resolved = {
    ...info,
    isShown,
    visibilityState,
    flagFade,
    flagHide
  };
  resolvedClickMap.set(el, resolved);
  return resolved;
}
function unmounted(el, dir) {
  el.classList.toggle(CLASS_VCLICK_TARGET, false);
  const ctx = directiveInject(dir, injectionClicksContext)?.value;
  ctx?.unregister(el);
  el.watchStopHandle?.();
}
function useSlideBounds(slideElement = inject(injectionSlideElement, ref())) {
  const bounding = useElementBounding(slideElement);
  const stop = watch(
    [
      showEditor,
      isEditorVertical,
      editorWidth,
      editorHeight,
      slideScale,
      windowSize.width,
      windowSize.height
    ],
    () => {
      setTimeout(bounding.update, 300);
    },
    {
      flush: "post",
      immediate: true
    }
  );
  return {
    ...bounding,
    stop
  };
}
function useDragElementsUpdater(no) {
  return () => {
  };
}
function useDragElement(directive2, posRaw, markdownSource, isArrow = false) {
  function inject2(key) {
    return directive2 ? directiveInject(directive2, key) : injectLocal(key);
  }
  const renderContext = inject2(injectionRenderContext);
  const frontmatter2 = inject2(injectionFrontmatter) ?? {};
  const page = inject2(injectionCurrentPage);
  const updater = computed(() => useDragElementsUpdater(page.value));
  const scale = inject2(injectionSlideScale) ?? ref(1);
  const zoom = inject2(injectionSlideZoom) ?? ref(1);
  const { left: slideLeft, top: slideTop, stop: stopWatchBounds } = useSlideBounds(inject2(injectionSlideElement) ?? ref());
  const { isPrintMode } = useNav();
  const enabled = ["slide", "presenter"].includes(renderContext.value) && !isPrintMode.value;
  let dataSource = directive2 ? "directive" : "prop";
  let dragId = makeId();
  let pos;
  if (Array.isArray(posRaw)) {
    pos = posRaw;
  } else if (typeof posRaw === "string" && posRaw.includes(",")) {
    pos = posRaw.split(",").map(Number);
  } else if (posRaw != null) {
    dataSource = "frontmatter";
    dragId = `${posRaw}`;
    posRaw = frontmatter2?.dragPos?.[dragId];
    pos = posRaw?.split(",").map(Number);
  }
  if (dataSource !== "frontmatter" && !markdownSource)
    throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");
  const watchStopHandles = [stopWatchBounds];
  const autoHeight = !isArrow && posRaw != null && !Number.isFinite(pos?.[3]);
  pos ??= [Number.NaN, Number.NaN, 0];
  const width = ref(pos[2]);
  const x0 = ref(pos[0] + pos[2] / 2);
  const rotate2 = ref(isArrow ? 0 : pos[4] ?? 0);
  const rotateRad = computed(() => rotate2.value * Math.PI / 180);
  const rotateSin = computed(() => Math.sin(rotateRad.value));
  const rotateCos = computed(() => Math.cos(rotateRad.value));
  const container = ref();
  const bounds = ref({ left: 0, top: 0, width: 0, height: 0 });
  const actualHeight = ref(0);
  function updateBounds() {
    if (!container.value)
      return;
    const rect = container.value.getBoundingClientRect();
    bounds.value = {
      left: rect.left / zoom.value,
      top: rect.top / zoom.value,
      width: rect.width / zoom.value,
      height: rect.height / zoom.value
    };
    actualHeight.value = (bounds.value.width + bounds.value.height) / scale.value / (Math.abs(rotateSin.value) + Math.abs(rotateCos.value)) - width.value;
  }
  watchStopHandles.push(watch(width, updateBounds, { flush: "post" }));
  const configuredHeight = ref(pos[3] ?? 0);
  const height = autoHeight ? computed({
    get: () => (autoHeight ? actualHeight.value : configuredHeight.value) || 0,
    set: (v) => !autoHeight && (configuredHeight.value = v)
  }) : configuredHeight;
  const configuredY0 = autoHeight ? ref(pos[1]) : ref(pos[1] + pos[3] / 2);
  const y0 = autoHeight ? computed({
    get: () => configuredY0.value + height.value / 2,
    set: (v) => configuredY0.value = v - height.value / 2
  }) : configuredY0;
  const containerStyle = computed(() => {
    return Number.isFinite(x0.value) ? {
      position: "absolute",
      zIndex: 100,
      left: `${x0.value - width.value / 2}px`,
      top: `${y0.value - height.value / 2}px`,
      width: `${width.value}px`,
      height: autoHeight ? void 0 : `${height.value}px`,
      transformOrigin: "center center",
      transform: `rotate(${rotate2.value}deg)`
    } : {
      position: "absolute",
      zIndex: 100
    };
  });
  watchStopHandles.push(
    watch(
      [x0, y0, width, height, rotate2],
      ([x02, y02, w, h, r]) => {
        let posStr = [x02 - w / 2, y02 - h / 2, w].map(Math.round).join();
        if (autoHeight)
          posStr += dataSource === "directive" ? ",NaN" : ",_";
        else
          posStr += `,${Math.round(h)}`;
        if (Math.round(r) !== 0)
          posStr += `,${Math.round(r)}`;
        if (dataSource === "directive")
          posStr = `[${posStr}]`;
        updater.value(dragId, posStr, dataSource, markdownSource);
      }
    )
  );
  const state2 = {
    dragId,
    dataSource,
    markdownSource,
    isArrow,
    zoom,
    autoHeight,
    x0,
    y0,
    width,
    height,
    rotate: rotate2,
    container,
    containerStyle,
    watchStopHandles,
    dragging: computed(() => activeDragElement.value === state2),
    mounted() {
      if (!enabled)
        return;
      updateBounds();
      if (!posRaw) {
        setTimeout(() => {
          updateBounds();
          x0.value = (bounds.value.left + bounds.value.width / 2 - slideLeft.value) / scale.value;
          y0.value = (bounds.value.top - slideTop.value) / scale.value;
          width.value = bounds.value.width / scale.value;
          height.value = bounds.value.height / scale.value;
        }, 100);
      }
    },
    unmounted() {
      if (!enabled)
        return;
      state2.stopDragging();
    },
    startDragging() {
      if (!enabled)
        return;
      updateBounds();
      activeDragElement.value = state2;
    },
    stopDragging() {
      if (!enabled)
        return;
      if (activeDragElement.value === state2)
        activeDragElement.value = null;
    }
  };
  watchStopHandles.push(
    onClickOutside(container, (ev) => {
      const container2 = document.querySelector("#drag-control-container");
      if (container2 && ev.target && container2.contains(ev.target))
        return;
      state2.stopDragging();
    }),
    watch(useWindowFocus(), (focused) => {
      if (!focused)
        state2.stopDragging();
    })
  );
  return state2;
}
function createVDragDirective() {
  return {
    install(app) {
      app.directive("drag", {
        // @ts-expect-error extra prop
        name: "v-drag",
        created(el, binding, vnode) {
          const state2 = useDragElement(binding, binding.value, vnode.props?.markdownSource);
          if (vnode.props) {
            vnode.props = { ...vnode.props };
            delete vnode.props.markdownSource;
          }
          state2.container.value = el;
          el.draggingState = state2;
          el.dataset.dragId = state2.dragId;
          state2.watchStopHandles.push(
            watch(state2.containerStyle, (style) => {
              for (const [k, v] of Object.entries(style)) {
                if (v)
                  el.style[k] = v;
              }
            }, { immediate: true })
          );
          el.addEventListener("dblclick", state2.startDragging);
        },
        mounted(el) {
          el.draggingState.mounted();
        },
        unmounted(el) {
          const state2 = el.draggingState;
          state2.unmounted();
          el.removeEventListener("dblclick", state2.startDragging);
          state2.watchStopHandles.forEach((fn) => fn());
        }
      });
    }
  };
}
function randomSeed() {
  return Math.floor(Math.random() * 2 ** 31);
}
class Random {
  constructor(seed) {
    this.seed = seed;
  }
  next() {
    if (this.seed) {
      return (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
    } else {
      return Math.random();
    }
  }
}
function rotatePoints(points, center, degrees) {
  if (points && points.length) {
    const [cx, cy] = center;
    const angle = Math.PI / 180 * degrees;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    for (const p of points) {
      const [x, y] = p;
      p[0] = (x - cx) * cos - (y - cy) * sin + cx;
      p[1] = (x - cx) * sin + (y - cy) * cos + cy;
    }
  }
}
function rotateLines(lines, center, degrees) {
  const points = [];
  lines.forEach((line2) => points.push(...line2));
  rotatePoints(points, center, degrees);
}
function areSamePoints(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
}
function hachureLines(polygons, hachureGap, hachureAngle, hachureStepOffset = 1) {
  const angle = hachureAngle;
  const gap = Math.max(hachureGap, 0.1);
  const polygonList = polygons[0] && polygons[0][0] && typeof polygons[0][0] === "number" ? [polygons] : polygons;
  const rotationCenter = [0, 0];
  if (angle) {
    for (const polygon2 of polygonList) {
      rotatePoints(polygon2, rotationCenter, angle);
    }
  }
  const lines = straightHachureLines(polygonList, gap, hachureStepOffset);
  if (angle) {
    for (const polygon2 of polygonList) {
      rotatePoints(polygon2, rotationCenter, -angle);
    }
    rotateLines(lines, rotationCenter, -angle);
  }
  return lines;
}
function straightHachureLines(polygons, gap, hachureStepOffset) {
  const vertexArray = [];
  for (const polygon2 of polygons) {
    const vertices = [...polygon2];
    if (!areSamePoints(vertices[0], vertices[vertices.length - 1])) {
      vertices.push([vertices[0][0], vertices[0][1]]);
    }
    if (vertices.length > 2) {
      vertexArray.push(vertices);
    }
  }
  const lines = [];
  gap = Math.max(gap, 0.1);
  const edges = [];
  for (const vertices of vertexArray) {
    for (let i = 0; i < vertices.length - 1; i++) {
      const p1 = vertices[i];
      const p2 = vertices[i + 1];
      if (p1[1] !== p2[1]) {
        const ymin = Math.min(p1[1], p2[1]);
        edges.push({
          ymin,
          ymax: Math.max(p1[1], p2[1]),
          x: ymin === p1[1] ? p1[0] : p2[0],
          islope: (p2[0] - p1[0]) / (p2[1] - p1[1])
        });
      }
    }
  }
  edges.sort((e1, e2) => {
    if (e1.ymin < e2.ymin) {
      return -1;
    }
    if (e1.ymin > e2.ymin) {
      return 1;
    }
    if (e1.x < e2.x) {
      return -1;
    }
    if (e1.x > e2.x) {
      return 1;
    }
    if (e1.ymax === e2.ymax) {
      return 0;
    }
    return (e1.ymax - e2.ymax) / Math.abs(e1.ymax - e2.ymax);
  });
  if (!edges.length) {
    return lines;
  }
  let activeEdges = [];
  let y = edges[0].ymin;
  let iteration = 0;
  while (activeEdges.length || edges.length) {
    if (edges.length) {
      let ix = -1;
      for (let i = 0; i < edges.length; i++) {
        if (edges[i].ymin > y) {
          break;
        }
        ix = i;
      }
      const removed = edges.splice(0, ix + 1);
      removed.forEach((edge) => {
        activeEdges.push({ s: y, edge });
      });
    }
    activeEdges = activeEdges.filter((ae) => {
      if (ae.edge.ymax <= y) {
        return false;
      }
      return true;
    });
    activeEdges.sort((ae1, ae2) => {
      if (ae1.edge.x === ae2.edge.x) {
        return 0;
      }
      return (ae1.edge.x - ae2.edge.x) / Math.abs(ae1.edge.x - ae2.edge.x);
    });
    if (hachureStepOffset !== 1 || iteration % gap === 0) {
      if (activeEdges.length > 1) {
        for (let i = 0; i < activeEdges.length; i = i + 2) {
          const nexti = i + 1;
          if (nexti >= activeEdges.length) {
            break;
          }
          const ce = activeEdges[i].edge;
          const ne = activeEdges[nexti].edge;
          lines.push([
            [Math.round(ce.x), y],
            [Math.round(ne.x), y]
          ]);
        }
      }
    }
    y += hachureStepOffset;
    activeEdges.forEach((ae) => {
      ae.edge.x = ae.edge.x + hachureStepOffset * ae.edge.islope;
    });
    iteration++;
  }
  return lines;
}
function polygonHachureLines(polygonList, o) {
  var _a;
  const angle = o.hachureAngle + 90;
  let gap = o.hachureGap;
  if (gap < 0) {
    gap = o.strokeWidth * 4;
  }
  gap = Math.round(Math.max(gap, 0.1));
  let skipOffset = 1;
  if (o.roughness >= 1) {
    if ((((_a = o.randomizer) === null || _a === void 0 ? void 0 : _a.next()) || Math.random()) > 0.7) {
      skipOffset = gap;
    }
  }
  return hachureLines(polygonList, gap, angle, skipOffset || 1);
}
class HachureFiller {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o) {
    return this._fillPolygons(polygonList, o);
  }
  _fillPolygons(polygonList, o) {
    const lines = polygonHachureLines(polygonList, o);
    const ops = this.renderLines(lines, o);
    return { type: "fillSketch", ops };
  }
  renderLines(lines, o) {
    const ops = [];
    for (const line2 of lines) {
      ops.push(...this.helper.doubleLineOps(line2[0][0], line2[0][1], line2[1][0], line2[1][1], o));
    }
    return ops;
  }
}
function lineLength(line2) {
  const p1 = line2[0];
  const p2 = line2[1];
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
class ZigZagFiller extends HachureFiller {
  fillPolygons(polygonList, o) {
    let gap = o.hachureGap;
    if (gap < 0) {
      gap = o.strokeWidth * 4;
    }
    gap = Math.max(gap, 0.1);
    const o2 = Object.assign({}, o, { hachureGap: gap });
    const lines = polygonHachureLines(polygonList, o2);
    const zigZagAngle = Math.PI / 180 * o.hachureAngle;
    const zigzagLines = [];
    const dgx = gap * 0.5 * Math.cos(zigZagAngle);
    const dgy = gap * 0.5 * Math.sin(zigZagAngle);
    for (const [p1, p2] of lines) {
      if (lineLength([p1, p2])) {
        zigzagLines.push([
          [p1[0] - dgx, p1[1] + dgy],
          [...p2]
        ], [
          [p1[0] + dgx, p1[1] - dgy],
          [...p2]
        ]);
      }
    }
    const ops = this.renderLines(zigzagLines, o);
    return { type: "fillSketch", ops };
  }
}
class HatchFiller extends HachureFiller {
  fillPolygons(polygonList, o) {
    const set = this._fillPolygons(polygonList, o);
    const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
    const set2 = this._fillPolygons(polygonList, o2);
    set.ops = set.ops.concat(set2.ops);
    return set;
  }
}
class DotFiller {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o) {
    o = Object.assign({}, o, { hachureAngle: 0 });
    const lines = polygonHachureLines(polygonList, o);
    return this.dotsOnLines(lines, o);
  }
  dotsOnLines(lines, o) {
    const ops = [];
    let gap = o.hachureGap;
    if (gap < 0) {
      gap = o.strokeWidth * 4;
    }
    gap = Math.max(gap, 0.1);
    let fweight = o.fillWeight;
    if (fweight < 0) {
      fweight = o.strokeWidth / 2;
    }
    const ro = gap / 4;
    for (const line2 of lines) {
      const length = lineLength(line2);
      const dl = length / gap;
      const count = Math.ceil(dl) - 1;
      const offset = length - count * gap;
      const x = (line2[0][0] + line2[1][0]) / 2 - gap / 4;
      const minY = Math.min(line2[0][1], line2[1][1]);
      for (let i = 0; i < count; i++) {
        const y = minY + offset + i * gap;
        const cx = x - ro + Math.random() * 2 * ro;
        const cy = y - ro + Math.random() * 2 * ro;
        const el = this.helper.ellipse(cx, cy, fweight, fweight, o);
        ops.push(...el.ops);
      }
    }
    return { type: "fillSketch", ops };
  }
}
class DashedFiller {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o) {
    const lines = polygonHachureLines(polygonList, o);
    return { type: "fillSketch", ops: this.dashedLine(lines, o) };
  }
  dashedLine(lines, o) {
    const offset = o.dashOffset < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashOffset;
    const gap = o.dashGap < 0 ? o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap : o.dashGap;
    const ops = [];
    lines.forEach((line2) => {
      const length = lineLength(line2);
      const count = Math.floor(length / (offset + gap));
      const startOffset = (length + gap - count * (offset + gap)) / 2;
      let p1 = line2[0];
      let p2 = line2[1];
      if (p1[0] > p2[0]) {
        p1 = line2[1];
        p2 = line2[0];
      }
      const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
      for (let i = 0; i < count; i++) {
        const lstart = i * (offset + gap);
        const lend = lstart + offset;
        const start = [p1[0] + lstart * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha) + startOffset * Math.sin(alpha)];
        const end = [p1[0] + lend * Math.cos(alpha) + startOffset * Math.cos(alpha), p1[1] + lend * Math.sin(alpha) + startOffset * Math.sin(alpha)];
        ops.push(...this.helper.doubleLineOps(start[0], start[1], end[0], end[1], o));
      }
    });
    return ops;
  }
}
class ZigZagLineFiller {
  constructor(helper2) {
    this.helper = helper2;
  }
  fillPolygons(polygonList, o) {
    const gap = o.hachureGap < 0 ? o.strokeWidth * 4 : o.hachureGap;
    const zo = o.zigzagOffset < 0 ? gap : o.zigzagOffset;
    o = Object.assign({}, o, { hachureGap: gap + zo });
    const lines = polygonHachureLines(polygonList, o);
    return { type: "fillSketch", ops: this.zigzagLines(lines, zo, o) };
  }
  zigzagLines(lines, zo, o) {
    const ops = [];
    lines.forEach((line2) => {
      const length = lineLength(line2);
      const count = Math.round(length / (2 * zo));
      let p1 = line2[0];
      let p2 = line2[1];
      if (p1[0] > p2[0]) {
        p1 = line2[1];
        p2 = line2[0];
      }
      const alpha = Math.atan((p2[1] - p1[1]) / (p2[0] - p1[0]));
      for (let i = 0; i < count; i++) {
        const lstart = i * 2 * zo;
        const lend = (i + 1) * 2 * zo;
        const dz = Math.sqrt(2 * Math.pow(zo, 2));
        const start = [p1[0] + lstart * Math.cos(alpha), p1[1] + lstart * Math.sin(alpha)];
        const end = [p1[0] + lend * Math.cos(alpha), p1[1] + lend * Math.sin(alpha)];
        const middle = [start[0] + dz * Math.cos(alpha + Math.PI / 4), start[1] + dz * Math.sin(alpha + Math.PI / 4)];
        ops.push(...this.helper.doubleLineOps(start[0], start[1], middle[0], middle[1], o), ...this.helper.doubleLineOps(middle[0], middle[1], end[0], end[1], o));
      }
    });
    return ops;
  }
}
const fillers = {};
function getFiller(o, helper2) {
  let fillerName = o.fillStyle || "hachure";
  if (!fillers[fillerName]) {
    switch (fillerName) {
      case "zigzag":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new ZigZagFiller(helper2);
        }
        break;
      case "cross-hatch":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new HatchFiller(helper2);
        }
        break;
      case "dots":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new DotFiller(helper2);
        }
        break;
      case "dashed":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new DashedFiller(helper2);
        }
        break;
      case "zigzag-line":
        if (!fillers[fillerName]) {
          fillers[fillerName] = new ZigZagLineFiller(helper2);
        }
        break;
      case "hachure":
      default:
        fillerName = "hachure";
        if (!fillers[fillerName]) {
          fillers[fillerName] = new HachureFiller(helper2);
        }
        break;
    }
  }
  return fillers[fillerName];
}
const COMMAND = 0;
const NUMBER = 1;
const EOD = 2;
const PARAMS = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function tokenize(d) {
  const tokens = new Array();
  while (d !== "") {
    if (d.match(/^([ \t\r\n,]+)/)) {
      d = d.substr(RegExp.$1.length);
    } else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
      tokens[tokens.length] = { type: COMMAND, text: RegExp.$1 };
      d = d.substr(RegExp.$1.length);
    } else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
      tokens[tokens.length] = { type: NUMBER, text: `${parseFloat(RegExp.$1)}` };
      d = d.substr(RegExp.$1.length);
    } else {
      return [];
    }
  }
  tokens[tokens.length] = { type: EOD, text: "" };
  return tokens;
}
function isType(token, type) {
  return token.type === type;
}
function parsePath(d) {
  const segments = [];
  const tokens = tokenize(d);
  let mode2 = "BOD";
  let index = 0;
  let token = tokens[index];
  while (!isType(token, EOD)) {
    let paramsCount = 0;
    const params = [];
    if (mode2 === "BOD") {
      if (token.text === "M" || token.text === "m") {
        index++;
        paramsCount = PARAMS[token.text];
        mode2 = token.text;
      } else {
        return parsePath("M0,0" + d);
      }
    } else if (isType(token, NUMBER)) {
      paramsCount = PARAMS[mode2];
    } else {
      index++;
      paramsCount = PARAMS[token.text];
      mode2 = token.text;
    }
    if (index + paramsCount < tokens.length) {
      for (let i = index; i < index + paramsCount; i++) {
        const numbeToken = tokens[i];
        if (isType(numbeToken, NUMBER)) {
          params[params.length] = +numbeToken.text;
        } else {
          throw new Error("Param not a number: " + mode2 + "," + numbeToken.text);
        }
      }
      if (typeof PARAMS[mode2] === "number") {
        const segment = { key: mode2, data: params };
        segments.push(segment);
        index += paramsCount;
        token = tokens[index];
        if (mode2 === "M")
          mode2 = "L";
        if (mode2 === "m")
          mode2 = "l";
      } else {
        throw new Error("Bad segment: " + mode2);
      }
    } else {
      throw new Error("Path data ended short");
    }
  }
  return segments;
}
function absolutize(segments) {
  let cx = 0, cy = 0;
  let subx = 0, suby = 0;
  const out = [];
  for (const { key, data: data2 } of segments) {
    switch (key) {
      case "M":
        out.push({ key: "M", data: [...data2] });
        [cx, cy] = data2;
        [subx, suby] = data2;
        break;
      case "m":
        cx += data2[0];
        cy += data2[1];
        out.push({ key: "M", data: [cx, cy] });
        subx = cx;
        suby = cy;
        break;
      case "L":
        out.push({ key: "L", data: [...data2] });
        [cx, cy] = data2;
        break;
      case "l":
        cx += data2[0];
        cy += data2[1];
        out.push({ key: "L", data: [cx, cy] });
        break;
      case "C":
        out.push({ key: "C", data: [...data2] });
        cx = data2[4];
        cy = data2[5];
        break;
      case "c": {
        const newdata = data2.map((d, i) => i % 2 ? d + cy : d + cx);
        out.push({ key: "C", data: newdata });
        cx = newdata[4];
        cy = newdata[5];
        break;
      }
      case "Q":
        out.push({ key: "Q", data: [...data2] });
        cx = data2[2];
        cy = data2[3];
        break;
      case "q": {
        const newdata = data2.map((d, i) => i % 2 ? d + cy : d + cx);
        out.push({ key: "Q", data: newdata });
        cx = newdata[2];
        cy = newdata[3];
        break;
      }
      case "A":
        out.push({ key: "A", data: [...data2] });
        cx = data2[5];
        cy = data2[6];
        break;
      case "a":
        cx += data2[5];
        cy += data2[6];
        out.push({ key: "A", data: [data2[0], data2[1], data2[2], data2[3], data2[4], cx, cy] });
        break;
      case "H":
        out.push({ key: "H", data: [...data2] });
        cx = data2[0];
        break;
      case "h":
        cx += data2[0];
        out.push({ key: "H", data: [cx] });
        break;
      case "V":
        out.push({ key: "V", data: [...data2] });
        cy = data2[0];
        break;
      case "v":
        cy += data2[0];
        out.push({ key: "V", data: [cy] });
        break;
      case "S":
        out.push({ key: "S", data: [...data2] });
        cx = data2[2];
        cy = data2[3];
        break;
      case "s": {
        const newdata = data2.map((d, i) => i % 2 ? d + cy : d + cx);
        out.push({ key: "S", data: newdata });
        cx = newdata[2];
        cy = newdata[3];
        break;
      }
      case "T":
        out.push({ key: "T", data: [...data2] });
        cx = data2[0];
        cy = data2[1];
        break;
      case "t":
        cx += data2[0];
        cy += data2[1];
        out.push({ key: "T", data: [cx, cy] });
        break;
      case "Z":
      case "z":
        out.push({ key: "Z", data: [] });
        cx = subx;
        cy = suby;
        break;
    }
  }
  return out;
}
function normalize(segments) {
  const out = [];
  let lastType = "";
  let cx = 0, cy = 0;
  let subx = 0, suby = 0;
  let lcx = 0, lcy = 0;
  for (const { key, data: data2 } of segments) {
    switch (key) {
      case "M":
        out.push({ key: "M", data: [...data2] });
        [cx, cy] = data2;
        [subx, suby] = data2;
        break;
      case "C":
        out.push({ key: "C", data: [...data2] });
        cx = data2[4];
        cy = data2[5];
        lcx = data2[2];
        lcy = data2[3];
        break;
      case "L":
        out.push({ key: "L", data: [...data2] });
        [cx, cy] = data2;
        break;
      case "H":
        cx = data2[0];
        out.push({ key: "L", data: [cx, cy] });
        break;
      case "V":
        cy = data2[0];
        out.push({ key: "L", data: [cx, cy] });
        break;
      case "S": {
        let cx1 = 0, cy1 = 0;
        if (lastType === "C" || lastType === "S") {
          cx1 = cx + (cx - lcx);
          cy1 = cy + (cy - lcy);
        } else {
          cx1 = cx;
          cy1 = cy;
        }
        out.push({ key: "C", data: [cx1, cy1, ...data2] });
        lcx = data2[0];
        lcy = data2[1];
        cx = data2[2];
        cy = data2[3];
        break;
      }
      case "T": {
        const [x, y] = data2;
        let x1 = 0, y1 = 0;
        if (lastType === "Q" || lastType === "T") {
          x1 = cx + (cx - lcx);
          y1 = cy + (cy - lcy);
        } else {
          x1 = cx;
          y1 = cy;
        }
        const cx1 = cx + 2 * (x1 - cx) / 3;
        const cy1 = cy + 2 * (y1 - cy) / 3;
        const cx2 = x + 2 * (x1 - x) / 3;
        const cy2 = y + 2 * (y1 - y) / 3;
        out.push({ key: "C", data: [cx1, cy1, cx2, cy2, x, y] });
        lcx = x1;
        lcy = y1;
        cx = x;
        cy = y;
        break;
      }
      case "Q": {
        const [x1, y1, x, y] = data2;
        const cx1 = cx + 2 * (x1 - cx) / 3;
        const cy1 = cy + 2 * (y1 - cy) / 3;
        const cx2 = x + 2 * (x1 - x) / 3;
        const cy2 = y + 2 * (y1 - y) / 3;
        out.push({ key: "C", data: [cx1, cy1, cx2, cy2, x, y] });
        lcx = x1;
        lcy = y1;
        cx = x;
        cy = y;
        break;
      }
      case "A": {
        const r1 = Math.abs(data2[0]);
        const r2 = Math.abs(data2[1]);
        const angle = data2[2];
        const largeArcFlag = data2[3];
        const sweepFlag = data2[4];
        const x = data2[5];
        const y = data2[6];
        if (r1 === 0 || r2 === 0) {
          out.push({ key: "C", data: [cx, cy, x, y, x, y] });
          cx = x;
          cy = y;
        } else {
          if (cx !== x || cy !== y) {
            const curves = arcToCubicCurves(cx, cy, x, y, r1, r2, angle, largeArcFlag, sweepFlag);
            curves.forEach(function(curve2) {
              out.push({ key: "C", data: curve2 });
            });
            cx = x;
            cy = y;
          }
        }
        break;
      }
      case "Z":
        out.push({ key: "Z", data: [] });
        cx = subx;
        cy = suby;
        break;
    }
    lastType = key;
  }
  return out;
}
function degToRad(degrees) {
  return Math.PI * degrees / 180;
}
function rotate(x, y, angleRad) {
  const X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
  const Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
  return [X, Y];
}
function arcToCubicCurves(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, recursive) {
  const angleRad = degToRad(angle);
  let params = [];
  let f1 = 0, f2 = 0, cx = 0, cy = 0;
  if (recursive) {
    [f1, f2, cx, cy] = recursive;
  } else {
    [x1, y1] = rotate(x1, y1, -angleRad);
    [x2, y2] = rotate(x2, y2, -angleRad);
    const x = (x1 - x2) / 2;
    const y = (y1 - y2) / 2;
    let h = x * x / (r1 * r1) + y * y / (r2 * r2);
    if (h > 1) {
      h = Math.sqrt(h);
      r1 = h * r1;
      r2 = h * r2;
    }
    const sign = largeArcFlag === sweepFlag ? -1 : 1;
    const r1Pow = r1 * r1;
    const r2Pow = r2 * r2;
    const left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
    const right = r1Pow * y * y + r2Pow * x * x;
    const k = sign * Math.sqrt(Math.abs(left / right));
    cx = k * r1 * y / r2 + (x1 + x2) / 2;
    cy = k * -r2 * x / r1 + (y1 + y2) / 2;
    f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
    f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));
    if (x1 < cx) {
      f1 = Math.PI - f1;
    }
    if (x2 < cx) {
      f2 = Math.PI - f2;
    }
    if (f1 < 0) {
      f1 = Math.PI * 2 + f1;
    }
    if (f2 < 0) {
      f2 = Math.PI * 2 + f2;
    }
    if (sweepFlag && f1 > f2) {
      f1 = f1 - Math.PI * 2;
    }
    if (!sweepFlag && f2 > f1) {
      f2 = f2 - Math.PI * 2;
    }
  }
  let df = f2 - f1;
  if (Math.abs(df) > Math.PI * 120 / 180) {
    const f2old = f2;
    const x2old = x2;
    const y2old = y2;
    if (sweepFlag && f2 > f1) {
      f2 = f1 + Math.PI * 120 / 180 * 1;
    } else {
      f2 = f1 + Math.PI * 120 / 180 * -1;
    }
    x2 = cx + r1 * Math.cos(f2);
    y2 = cy + r2 * Math.sin(f2);
    params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [f2, f2old, cx, cy]);
  }
  df = f2 - f1;
  const c1 = Math.cos(f1);
  const s1 = Math.sin(f1);
  const c2 = Math.cos(f2);
  const s2 = Math.sin(f2);
  const t = Math.tan(df / 4);
  const hx = 4 / 3 * r1 * t;
  const hy = 4 / 3 * r2 * t;
  const m1 = [x1, y1];
  const m2 = [x1 + hx * s1, y1 - hy * c1];
  const m3 = [x2 + hx * s2, y2 - hy * c2];
  const m4 = [x2, y2];
  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];
  if (recursive) {
    return [m2, m3, m4].concat(params);
  } else {
    params = [m2, m3, m4].concat(params);
    const curves = [];
    for (let i = 0; i < params.length; i += 3) {
      const r12 = rotate(params[i][0], params[i][1], angleRad);
      const r22 = rotate(params[i + 1][0], params[i + 1][1], angleRad);
      const r3 = rotate(params[i + 2][0], params[i + 2][1], angleRad);
      curves.push([r12[0], r12[1], r22[0], r22[1], r3[0], r3[1]]);
    }
    return curves;
  }
}
const helper = {
  randOffset,
  randOffsetWithRange,
  ellipse,
  doubleLineOps: doubleLineFillOps
};
function line(x1, y1, x2, y2, o) {
  return { type: "path", ops: _doubleLine(x1, y1, x2, y2, o) };
}
function linearPath(points, close, o) {
  const len = (points || []).length;
  if (len > 2) {
    const ops = [];
    for (let i = 0; i < len - 1; i++) {
      ops.push(..._doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
    }
    if (close) {
      ops.push(..._doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
    }
    return { type: "path", ops };
  } else if (len === 2) {
    return line(points[0][0], points[0][1], points[1][0], points[1][1], o);
  }
  return { type: "path", ops: [] };
}
function polygon(points, o) {
  return linearPath(points, true, o);
}
function rectangle(x, y, width, height, o) {
  const points = [
    [x, y],
    [x + width, y],
    [x + width, y + height],
    [x, y + height]
  ];
  return polygon(points, o);
}
function curve(inputPoints, o) {
  if (inputPoints.length) {
    const p1 = inputPoints[0];
    const pointsList = typeof p1[0] === "number" ? [inputPoints] : inputPoints;
    const o1 = _curveWithOffset(pointsList[0], 1 * (1 + o.roughness * 0.2), o);
    const o2 = o.disableMultiStroke ? [] : _curveWithOffset(pointsList[0], 1.5 * (1 + o.roughness * 0.22), cloneOptionsAlterSeed(o));
    for (let i = 1; i < pointsList.length; i++) {
      const points = pointsList[i];
      if (points.length) {
        const underlay = _curveWithOffset(points, 1 * (1 + o.roughness * 0.2), o);
        const overlay = o.disableMultiStroke ? [] : _curveWithOffset(points, 1.5 * (1 + o.roughness * 0.22), cloneOptionsAlterSeed(o));
        for (const item of underlay) {
          if (item.op !== "move") {
            o1.push(item);
          }
        }
        for (const item of overlay) {
          if (item.op !== "move") {
            o2.push(item);
          }
        }
      }
    }
    return { type: "path", ops: o1.concat(o2) };
  }
  return { type: "path", ops: [] };
}
function ellipse(x, y, width, height, o) {
  const params = generateEllipseParams(width, height, o);
  return ellipseWithParams(x, y, o, params).opset;
}
function generateEllipseParams(width, height, o) {
  const psq = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(width / 2, 2) + Math.pow(height / 2, 2)) / 2));
  const stepCount = Math.ceil(Math.max(o.curveStepCount, o.curveStepCount / Math.sqrt(200) * psq));
  const increment = Math.PI * 2 / stepCount;
  let rx = Math.abs(width / 2);
  let ry = Math.abs(height / 2);
  const curveFitRandomness = 1 - o.curveFitting;
  rx += _offsetOpt(rx * curveFitRandomness, o);
  ry += _offsetOpt(ry * curveFitRandomness, o);
  return { increment, rx, ry };
}
function ellipseWithParams(x, y, o, ellipseParams) {
  const [ap1, cp1] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1, ellipseParams.increment * _offset(0.1, _offset(0.4, 1, o), o), o);
  let o1 = _curve(ap1, null, o);
  if (!o.disableMultiStroke && o.roughness !== 0) {
    const [ap2] = _computeEllipsePoints(ellipseParams.increment, x, y, ellipseParams.rx, ellipseParams.ry, 1.5, 0, o);
    const o2 = _curve(ap2, null, o);
    o1 = o1.concat(o2);
  }
  return {
    estimatedPoints: cp1,
    opset: { type: "path", ops: o1 }
  };
}
function arc(x, y, width, height, start, stop, closed, roughClosure, o) {
  const cx = x;
  const cy = y;
  let rx = Math.abs(width / 2);
  let ry = Math.abs(height / 2);
  rx += _offsetOpt(rx * 0.01, o);
  ry += _offsetOpt(ry * 0.01, o);
  let strt = start;
  let stp = stop;
  while (strt < 0) {
    strt += Math.PI * 2;
    stp += Math.PI * 2;
  }
  if (stp - strt > Math.PI * 2) {
    strt = 0;
    stp = Math.PI * 2;
  }
  const ellipseInc = Math.PI * 2 / o.curveStepCount;
  const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
  const ops = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
  if (!o.disableMultiStroke) {
    const o2 = _arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
    ops.push(...o2);
  }
  if (closed) {
    if (roughClosure) {
      ops.push(..._doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o), ..._doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
    } else {
      ops.push({ op: "lineTo", data: [cx, cy] }, { op: "lineTo", data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)] });
    }
  }
  return { type: "path", ops };
}
function svgPath(path, o) {
  const segments = normalize(absolutize(parsePath(path)));
  const ops = [];
  let first = [0, 0];
  let current = [0, 0];
  for (const { key, data: data2 } of segments) {
    switch (key) {
      case "M": {
        current = [data2[0], data2[1]];
        first = [data2[0], data2[1]];
        break;
      }
      case "L":
        ops.push(..._doubleLine(current[0], current[1], data2[0], data2[1], o));
        current = [data2[0], data2[1]];
        break;
      case "C": {
        const [x1, y1, x2, y2, x, y] = data2;
        ops.push(..._bezierTo(x1, y1, x2, y2, x, y, current, o));
        current = [x, y];
        break;
      }
      case "Z":
        ops.push(..._doubleLine(current[0], current[1], first[0], first[1], o));
        current = [first[0], first[1]];
        break;
    }
  }
  return { type: "path", ops };
}
function solidFillPolygon(polygonList, o) {
  const ops = [];
  for (const points of polygonList) {
    if (points.length) {
      const offset = o.maxRandomnessOffset || 0;
      const len = points.length;
      if (len > 2) {
        ops.push({ op: "move", data: [points[0][0] + _offsetOpt(offset, o), points[0][1] + _offsetOpt(offset, o)] });
        for (let i = 1; i < len; i++) {
          ops.push({ op: "lineTo", data: [points[i][0] + _offsetOpt(offset, o), points[i][1] + _offsetOpt(offset, o)] });
        }
      }
    }
  }
  return { type: "fillPath", ops };
}
function patternFillPolygons(polygonList, o) {
  return getFiller(o, helper).fillPolygons(polygonList, o);
}
function patternFillArc(x, y, width, height, start, stop, o) {
  const cx = x;
  const cy = y;
  let rx = Math.abs(width / 2);
  let ry = Math.abs(height / 2);
  rx += _offsetOpt(rx * 0.01, o);
  ry += _offsetOpt(ry * 0.01, o);
  let strt = start;
  let stp = stop;
  while (strt < 0) {
    strt += Math.PI * 2;
    stp += Math.PI * 2;
  }
  if (stp - strt > Math.PI * 2) {
    strt = 0;
    stp = Math.PI * 2;
  }
  const increment = (stp - strt) / o.curveStepCount;
  const points = [];
  for (let angle = strt; angle <= stp; angle = angle + increment) {
    points.push([cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)]);
  }
  points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
  points.push([cx, cy]);
  return patternFillPolygons([points], o);
}
function randOffset(x, o) {
  return _offsetOpt(x, o);
}
function randOffsetWithRange(min, max, o) {
  return _offset(min, max, o);
}
function doubleLineFillOps(x1, y1, x2, y2, o) {
  return _doubleLine(x1, y1, x2, y2, o, true);
}
function cloneOptionsAlterSeed(ops) {
  const result = Object.assign({}, ops);
  result.randomizer = void 0;
  if (ops.seed) {
    result.seed = ops.seed + 1;
  }
  return result;
}
function random(ops) {
  if (!ops.randomizer) {
    ops.randomizer = new Random(ops.seed || 0);
  }
  return ops.randomizer.next();
}
function _offset(min, max, ops, roughnessGain = 1) {
  return ops.roughness * roughnessGain * (random(ops) * (max - min) + min);
}
function _offsetOpt(x, ops, roughnessGain = 1) {
  return _offset(-x, x, ops, roughnessGain);
}
function _doubleLine(x1, y1, x2, y2, o, filling = false) {
  const singleStroke = filling ? o.disableMultiStrokeFill : o.disableMultiStroke;
  const o1 = _line(x1, y1, x2, y2, o, true, false);
  if (singleStroke) {
    return o1;
  }
  const o2 = _line(x1, y1, x2, y2, o, true, true);
  return o1.concat(o2);
}
function _line(x1, y1, x2, y2, o, move, overlay) {
  const lengthSq = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
  const length = Math.sqrt(lengthSq);
  let roughnessGain = 1;
  if (length < 200) {
    roughnessGain = 1;
  } else if (length > 500) {
    roughnessGain = 0.4;
  } else {
    roughnessGain = -16668e-7 * length + 1.233334;
  }
  let offset = o.maxRandomnessOffset || 0;
  if (offset * offset * 100 > lengthSq) {
    offset = length / 10;
  }
  const halfOffset = offset / 2;
  const divergePoint = 0.2 + random(o) * 0.2;
  let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
  let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
  midDispX = _offsetOpt(midDispX, o, roughnessGain);
  midDispY = _offsetOpt(midDispY, o, roughnessGain);
  const ops = [];
  const randomHalf = () => _offsetOpt(halfOffset, o, roughnessGain);
  const randomFull = () => _offsetOpt(offset, o, roughnessGain);
  const preserveVertices = o.preserveVertices;
  {
    if (overlay) {
      ops.push({
        op: "move",
        data: [
          x1 + (preserveVertices ? 0 : randomHalf()),
          y1 + (preserveVertices ? 0 : randomHalf())
        ]
      });
    } else {
      ops.push({
        op: "move",
        data: [
          x1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain)),
          y1 + (preserveVertices ? 0 : _offsetOpt(offset, o, roughnessGain))
        ]
      });
    }
  }
  if (overlay) {
    ops.push({
      op: "bcurveTo",
      data: [
        midDispX + x1 + (x2 - x1) * divergePoint + randomHalf(),
        midDispY + y1 + (y2 - y1) * divergePoint + randomHalf(),
        midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomHalf(),
        midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomHalf(),
        x2 + (preserveVertices ? 0 : randomHalf()),
        y2 + (preserveVertices ? 0 : randomHalf())
      ]
    });
  } else {
    ops.push({
      op: "bcurveTo",
      data: [
        midDispX + x1 + (x2 - x1) * divergePoint + randomFull(),
        midDispY + y1 + (y2 - y1) * divergePoint + randomFull(),
        midDispX + x1 + 2 * (x2 - x1) * divergePoint + randomFull(),
        midDispY + y1 + 2 * (y2 - y1) * divergePoint + randomFull(),
        x2 + (preserveVertices ? 0 : randomFull()),
        y2 + (preserveVertices ? 0 : randomFull())
      ]
    });
  }
  return ops;
}
function _curveWithOffset(points, offset, o) {
  if (!points.length) {
    return [];
  }
  const ps = [];
  ps.push([
    points[0][0] + _offsetOpt(offset, o),
    points[0][1] + _offsetOpt(offset, o)
  ]);
  ps.push([
    points[0][0] + _offsetOpt(offset, o),
    points[0][1] + _offsetOpt(offset, o)
  ]);
  for (let i = 1; i < points.length; i++) {
    ps.push([
      points[i][0] + _offsetOpt(offset, o),
      points[i][1] + _offsetOpt(offset, o)
    ]);
    if (i === points.length - 1) {
      ps.push([
        points[i][0] + _offsetOpt(offset, o),
        points[i][1] + _offsetOpt(offset, o)
      ]);
    }
  }
  return _curve(ps, null, o);
}
function _curve(points, closePoint, o) {
  const len = points.length;
  const ops = [];
  if (len > 3) {
    const b = [];
    const s = 1 - o.curveTightness;
    ops.push({ op: "move", data: [points[1][0], points[1][1]] });
    for (let i = 1; i + 2 < len; i++) {
      const cachedVertArray = points[i];
      b[0] = [cachedVertArray[0], cachedVertArray[1]];
      b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
      b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
      b[3] = [points[i + 1][0], points[i + 1][1]];
      ops.push({ op: "bcurveTo", data: [b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1]] });
    }
  } else if (len === 3) {
    ops.push({ op: "move", data: [points[1][0], points[1][1]] });
    ops.push({
      op: "bcurveTo",
      data: [
        points[1][0],
        points[1][1],
        points[2][0],
        points[2][1],
        points[2][0],
        points[2][1]
      ]
    });
  } else if (len === 2) {
    ops.push(..._line(points[0][0], points[0][1], points[1][0], points[1][1], o, true, true));
  }
  return ops;
}
function _computeEllipsePoints(increment, cx, cy, rx, ry, offset, overlap, o) {
  const coreOnly = o.roughness === 0;
  const corePoints = [];
  const allPoints = [];
  if (coreOnly) {
    increment = increment / 4;
    allPoints.push([
      cx + rx * Math.cos(-increment),
      cy + ry * Math.sin(-increment)
    ]);
    for (let angle = 0; angle <= Math.PI * 2; angle = angle + increment) {
      const p = [
        cx + rx * Math.cos(angle),
        cy + ry * Math.sin(angle)
      ];
      corePoints.push(p);
      allPoints.push(p);
    }
    allPoints.push([
      cx + rx * Math.cos(0),
      cy + ry * Math.sin(0)
    ]);
    allPoints.push([
      cx + rx * Math.cos(increment),
      cy + ry * Math.sin(increment)
    ]);
  } else {
    const radOffset = _offsetOpt(0.5, o) - Math.PI / 2;
    allPoints.push([
      _offsetOpt(offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
      _offsetOpt(offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
    ]);
    const endAngle = Math.PI * 2 + radOffset - 0.01;
    for (let angle = radOffset; angle < endAngle; angle = angle + increment) {
      const p = [
        _offsetOpt(offset, o) + cx + rx * Math.cos(angle),
        _offsetOpt(offset, o) + cy + ry * Math.sin(angle)
      ];
      corePoints.push(p);
      allPoints.push(p);
    }
    allPoints.push([
      _offsetOpt(offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5),
      _offsetOpt(offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)
    ]);
    allPoints.push([
      _offsetOpt(offset, o) + cx + 0.98 * rx * Math.cos(radOffset + overlap),
      _offsetOpt(offset, o) + cy + 0.98 * ry * Math.sin(radOffset + overlap)
    ]);
    allPoints.push([
      _offsetOpt(offset, o) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5),
      _offsetOpt(offset, o) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)
    ]);
  }
  return [allPoints, corePoints];
}
function _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
  const radOffset = strt + _offsetOpt(0.1, o);
  const points = [];
  points.push([
    _offsetOpt(offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
    _offsetOpt(offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
  ]);
  for (let angle = radOffset; angle <= stp; angle = angle + increment) {
    points.push([
      _offsetOpt(offset, o) + cx + rx * Math.cos(angle),
      _offsetOpt(offset, o) + cy + ry * Math.sin(angle)
    ]);
  }
  points.push([
    cx + rx * Math.cos(stp),
    cy + ry * Math.sin(stp)
  ]);
  points.push([
    cx + rx * Math.cos(stp),
    cy + ry * Math.sin(stp)
  ]);
  return _curve(points, null, o);
}
function _bezierTo(x1, y1, x2, y2, x, y, current, o) {
  const ops = [];
  const ros = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.3];
  let f = [0, 0];
  const iterations = o.disableMultiStroke ? 1 : 2;
  const preserveVertices = o.preserveVertices;
  for (let i = 0; i < iterations; i++) {
    if (i === 0) {
      ops.push({ op: "move", data: [current[0], current[1]] });
    } else {
      ops.push({ op: "move", data: [current[0] + (preserveVertices ? 0 : _offsetOpt(ros[0], o)), current[1] + (preserveVertices ? 0 : _offsetOpt(ros[0], o))] });
    }
    f = preserveVertices ? [x, y] : [x + _offsetOpt(ros[i], o), y + _offsetOpt(ros[i], o)];
    ops.push({
      op: "bcurveTo",
      data: [
        x1 + _offsetOpt(ros[i], o),
        y1 + _offsetOpt(ros[i], o),
        x2 + _offsetOpt(ros[i], o),
        y2 + _offsetOpt(ros[i], o),
        f[0],
        f[1]
      ]
    });
  }
  return ops;
}
function clone(p) {
  return [...p];
}
function curveToBezier(pointsIn, curveTightness = 0) {
  const len = pointsIn.length;
  if (len < 3) {
    throw new Error("A curve must have at least three points.");
  }
  const out = [];
  if (len === 3) {
    out.push(clone(pointsIn[0]), clone(pointsIn[1]), clone(pointsIn[2]), clone(pointsIn[2]));
  } else {
    const points = [];
    points.push(pointsIn[0], pointsIn[0]);
    for (let i = 1; i < pointsIn.length; i++) {
      points.push(pointsIn[i]);
      if (i === pointsIn.length - 1) {
        points.push(pointsIn[i]);
      }
    }
    const b = [];
    const s = 1 - curveTightness;
    out.push(clone(points[0]));
    for (let i = 1; i + 2 < points.length; i++) {
      const cachedVertArray = points[i];
      b[0] = [cachedVertArray[0], cachedVertArray[1]];
      b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
      b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
      b[3] = [points[i + 1][0], points[i + 1][1]];
      out.push(b[1], b[2], b[3]);
    }
  }
  return out;
}
function distance(p1, p2) {
  return Math.sqrt(distanceSq(p1, p2));
}
function distanceSq(p1, p2) {
  return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
function distanceToSegmentSq(p, v, w) {
  const l2 = distanceSq(v, w);
  if (l2 === 0) {
    return distanceSq(p, v);
  }
  let t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
  t = Math.max(0, Math.min(1, t));
  return distanceSq(p, lerp(v, w, t));
}
function lerp(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t
  ];
}
function flatness(points, offset) {
  const p1 = points[offset + 0];
  const p2 = points[offset + 1];
  const p3 = points[offset + 2];
  const p4 = points[offset + 3];
  let ux = 3 * p2[0] - 2 * p1[0] - p4[0];
  ux *= ux;
  let uy = 3 * p2[1] - 2 * p1[1] - p4[1];
  uy *= uy;
  let vx = 3 * p3[0] - 2 * p4[0] - p1[0];
  vx *= vx;
  let vy = 3 * p3[1] - 2 * p4[1] - p1[1];
  vy *= vy;
  if (ux < vx) {
    ux = vx;
  }
  if (uy < vy) {
    uy = vy;
  }
  return ux + uy;
}
function getPointsOnBezierCurveWithSplitting(points, offset, tolerance, newPoints) {
  const outPoints = newPoints || [];
  if (flatness(points, offset) < tolerance) {
    const p0 = points[offset + 0];
    if (outPoints.length) {
      const d = distance(outPoints[outPoints.length - 1], p0);
      if (d > 1) {
        outPoints.push(p0);
      }
    } else {
      outPoints.push(p0);
    }
    outPoints.push(points[offset + 3]);
  } else {
    const t = 0.5;
    const p1 = points[offset + 0];
    const p2 = points[offset + 1];
    const p3 = points[offset + 2];
    const p4 = points[offset + 3];
    const q1 = lerp(p1, p2, t);
    const q2 = lerp(p2, p3, t);
    const q3 = lerp(p3, p4, t);
    const r1 = lerp(q1, q2, t);
    const r2 = lerp(q2, q3, t);
    const red = lerp(r1, r2, t);
    getPointsOnBezierCurveWithSplitting([p1, q1, r1, red], 0, tolerance, outPoints);
    getPointsOnBezierCurveWithSplitting([red, r2, q3, p4], 0, tolerance, outPoints);
  }
  return outPoints;
}
function simplify(points, distance2) {
  return simplifyPoints(points, 0, points.length, distance2);
}
function simplifyPoints(points, start, end, epsilon, newPoints) {
  const outPoints = newPoints || [];
  const s = points[start];
  const e = points[end - 1];
  let maxDistSq = 0;
  let maxNdx = 1;
  for (let i = start + 1; i < end - 1; ++i) {
    const distSq = distanceToSegmentSq(points[i], s, e);
    if (distSq > maxDistSq) {
      maxDistSq = distSq;
      maxNdx = i;
    }
  }
  if (Math.sqrt(maxDistSq) > epsilon) {
    simplifyPoints(points, start, maxNdx + 1, epsilon, outPoints);
    simplifyPoints(points, maxNdx, end, epsilon, outPoints);
  } else {
    if (!outPoints.length) {
      outPoints.push(s);
    }
    outPoints.push(e);
  }
  return outPoints;
}
function pointsOnBezierCurves(points, tolerance = 0.15, distance2) {
  const newPoints = [];
  const numSegments = (points.length - 1) / 3;
  for (let i = 0; i < numSegments; i++) {
    const offset = i * 3;
    getPointsOnBezierCurveWithSplitting(points, offset, tolerance, newPoints);
  }
  if (distance2 && distance2 > 0) {
    return simplifyPoints(newPoints, 0, newPoints.length, distance2);
  }
  return newPoints;
}
function pointsOnPath(path, tolerance, distance2) {
  const segments = parsePath(path);
  const normalized = normalize(absolutize(segments));
  const sets = [];
  let currentPoints = [];
  let start = [0, 0];
  let pendingCurve = [];
  const appendPendingCurve = () => {
    if (pendingCurve.length >= 4) {
      currentPoints.push(...pointsOnBezierCurves(pendingCurve, tolerance));
    }
    pendingCurve = [];
  };
  const appendPendingPoints = () => {
    appendPendingCurve();
    if (currentPoints.length) {
      sets.push(currentPoints);
      currentPoints = [];
    }
  };
  for (const { key, data: data2 } of normalized) {
    switch (key) {
      case "M":
        appendPendingPoints();
        start = [data2[0], data2[1]];
        currentPoints.push(start);
        break;
      case "L":
        appendPendingCurve();
        currentPoints.push([data2[0], data2[1]]);
        break;
      case "C":
        if (!pendingCurve.length) {
          const lastPoint = currentPoints.length ? currentPoints[currentPoints.length - 1] : start;
          pendingCurve.push([lastPoint[0], lastPoint[1]]);
        }
        pendingCurve.push([data2[0], data2[1]]);
        pendingCurve.push([data2[2], data2[3]]);
        pendingCurve.push([data2[4], data2[5]]);
        break;
      case "Z":
        appendPendingCurve();
        currentPoints.push([start[0], start[1]]);
        break;
    }
  }
  appendPendingPoints();
  if (!distance2) {
    return sets;
  }
  const out = [];
  for (const set of sets) {
    const simplifiedSet = simplify(set, distance2);
    if (simplifiedSet.length) {
      out.push(simplifiedSet);
    }
  }
  return out;
}
const NOS = "none";
class RoughGenerator {
  constructor(config) {
    this.defaultOptions = {
      maxRandomnessOffset: 2,
      roughness: 1,
      bowing: 1,
      stroke: "#000",
      strokeWidth: 1,
      curveTightness: 0,
      curveFitting: 0.95,
      curveStepCount: 9,
      fillStyle: "hachure",
      fillWeight: -1,
      hachureAngle: -41,
      hachureGap: -1,
      dashOffset: -1,
      dashGap: -1,
      zigzagOffset: -1,
      seed: 0,
      disableMultiStroke: false,
      disableMultiStrokeFill: false,
      preserveVertices: false,
      fillShapeRoughnessGain: 0.8
    };
    this.config = config || {};
    if (this.config.options) {
      this.defaultOptions = this._o(this.config.options);
    }
  }
  static newSeed() {
    return randomSeed();
  }
  _o(options) {
    return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
  }
  _d(shape, sets, options) {
    return { shape, sets: sets || [], options: options || this.defaultOptions };
  }
  line(x1, y1, x2, y2, options) {
    const o = this._o(options);
    return this._d("line", [line(x1, y1, x2, y2, o)], o);
  }
  rectangle(x, y, width, height, options) {
    const o = this._o(options);
    const paths = [];
    const outline = rectangle(x, y, width, height, o);
    if (o.fill) {
      const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
      if (o.fillStyle === "solid") {
        paths.push(solidFillPolygon([points], o));
      } else {
        paths.push(patternFillPolygons([points], o));
      }
    }
    if (o.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("rectangle", paths, o);
  }
  ellipse(x, y, width, height, options) {
    const o = this._o(options);
    const paths = [];
    const ellipseParams = generateEllipseParams(width, height, o);
    const ellipseResponse = ellipseWithParams(x, y, o, ellipseParams);
    if (o.fill) {
      if (o.fillStyle === "solid") {
        const shape = ellipseWithParams(x, y, o, ellipseParams).opset;
        shape.type = "fillPath";
        paths.push(shape);
      } else {
        paths.push(patternFillPolygons([ellipseResponse.estimatedPoints], o));
      }
    }
    if (o.stroke !== NOS) {
      paths.push(ellipseResponse.opset);
    }
    return this._d("ellipse", paths, o);
  }
  circle(x, y, diameter, options) {
    const ret = this.ellipse(x, y, diameter, diameter, options);
    ret.shape = "circle";
    return ret;
  }
  linearPath(points, options) {
    const o = this._o(options);
    return this._d("linearPath", [linearPath(points, false, o)], o);
  }
  arc(x, y, width, height, start, stop, closed = false, options) {
    const o = this._o(options);
    const paths = [];
    const outline = arc(x, y, width, height, start, stop, closed, true, o);
    if (closed && o.fill) {
      if (o.fillStyle === "solid") {
        const fillOptions = Object.assign({}, o);
        fillOptions.disableMultiStroke = true;
        const shape = arc(x, y, width, height, start, stop, true, false, fillOptions);
        shape.type = "fillPath";
        paths.push(shape);
      } else {
        paths.push(patternFillArc(x, y, width, height, start, stop, o));
      }
    }
    if (o.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("arc", paths, o);
  }
  curve(points, options) {
    const o = this._o(options);
    const paths = [];
    const outline = curve(points, o);
    if (o.fill && o.fill !== NOS) {
      if (o.fillStyle === "solid") {
        const fillShape = curve(points, Object.assign(Object.assign({}, o), { disableMultiStroke: true, roughness: o.roughness ? o.roughness + o.fillShapeRoughnessGain : 0 }));
        paths.push({
          type: "fillPath",
          ops: this._mergedShape(fillShape.ops)
        });
      } else {
        const polyPoints = [];
        const inputPoints = points;
        if (inputPoints.length) {
          const p1 = inputPoints[0];
          const pointsList = typeof p1[0] === "number" ? [inputPoints] : inputPoints;
          for (const points2 of pointsList) {
            if (points2.length < 3) {
              polyPoints.push(...points2);
            } else if (points2.length === 3) {
              polyPoints.push(...pointsOnBezierCurves(curveToBezier([
                points2[0],
                points2[0],
                points2[1],
                points2[2]
              ]), 10, (1 + o.roughness) / 2));
            } else {
              polyPoints.push(...pointsOnBezierCurves(curveToBezier(points2), 10, (1 + o.roughness) / 2));
            }
          }
        }
        if (polyPoints.length) {
          paths.push(patternFillPolygons([polyPoints], o));
        }
      }
    }
    if (o.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("curve", paths, o);
  }
  polygon(points, options) {
    const o = this._o(options);
    const paths = [];
    const outline = linearPath(points, true, o);
    if (o.fill) {
      if (o.fillStyle === "solid") {
        paths.push(solidFillPolygon([points], o));
      } else {
        paths.push(patternFillPolygons([points], o));
      }
    }
    if (o.stroke !== NOS) {
      paths.push(outline);
    }
    return this._d("polygon", paths, o);
  }
  path(d, options) {
    const o = this._o(options);
    const paths = [];
    if (!d) {
      return this._d("path", paths, o);
    }
    d = (d || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const hasFill = o.fill && o.fill !== "transparent" && o.fill !== NOS;
    const hasStroke = o.stroke !== NOS;
    const simplified = !!(o.simplification && o.simplification < 1);
    const distance2 = simplified ? 4 - 4 * (o.simplification || 1) : (1 + o.roughness) / 2;
    const sets = pointsOnPath(d, 1, distance2);
    const shape = svgPath(d, o);
    if (hasFill) {
      if (o.fillStyle === "solid") {
        if (sets.length === 1) {
          const fillShape = svgPath(d, Object.assign(Object.assign({}, o), { disableMultiStroke: true, roughness: o.roughness ? o.roughness + o.fillShapeRoughnessGain : 0 }));
          paths.push({
            type: "fillPath",
            ops: this._mergedShape(fillShape.ops)
          });
        } else {
          paths.push(solidFillPolygon(sets, o));
        }
      } else {
        paths.push(patternFillPolygons(sets, o));
      }
    }
    if (hasStroke) {
      if (simplified) {
        sets.forEach((set) => {
          paths.push(linearPath(set, false, o));
        });
      } else {
        paths.push(shape);
      }
    }
    return this._d("path", paths, o);
  }
  opsToPath(drawing, fixedDecimals) {
    let path = "";
    for (const item of drawing.ops) {
      const data2 = typeof fixedDecimals === "number" && fixedDecimals >= 0 ? item.data.map((d) => +d.toFixed(fixedDecimals)) : item.data;
      switch (item.op) {
        case "move":
          path += `M${data2[0]} ${data2[1]} `;
          break;
        case "bcurveTo":
          path += `C${data2[0]} ${data2[1]}, ${data2[2]} ${data2[3]}, ${data2[4]} ${data2[5]} `;
          break;
        case "lineTo":
          path += `L${data2[0]} ${data2[1]} `;
          break;
      }
    }
    return path.trim();
  }
  toPaths(drawable) {
    const sets = drawable.sets || [];
    const o = drawable.options || this.defaultOptions;
    const paths = [];
    for (const drawing of sets) {
      let path = null;
      switch (drawing.type) {
        case "path":
          path = {
            d: this.opsToPath(drawing),
            stroke: o.stroke,
            strokeWidth: o.strokeWidth,
            fill: NOS
          };
          break;
        case "fillPath":
          path = {
            d: this.opsToPath(drawing),
            stroke: NOS,
            strokeWidth: 0,
            fill: o.fill || NOS
          };
          break;
        case "fillSketch":
          path = this.fillSketch(drawing, o);
          break;
      }
      if (path) {
        paths.push(path);
      }
    }
    return paths;
  }
  fillSketch(drawing, o) {
    let fweight = o.fillWeight;
    if (fweight < 0) {
      fweight = o.strokeWidth / 2;
    }
    return {
      d: this.opsToPath(drawing),
      stroke: o.fill || NOS,
      strokeWidth: fweight,
      fill: NOS
    };
  }
  _mergedShape(input) {
    return input.filter((d, i) => {
      if (i === 0) {
        return true;
      }
      if (d.op === "move") {
        return false;
      }
      return true;
    });
  }
}
const SVG_NS = "http://www.w3.org/2000/svg";
const DEFAULT_ANIMATION_DURATION = 800;
let defaultOptions = null;
function getDefaultOptions() {
  if (!defaultOptions) {
    const gen = new RoughGenerator();
    defaultOptions = gen.defaultOptions;
  }
  return defaultOptions;
}
function getOptions(type, seed, overrides) {
  return {
    ...getDefaultOptions(),
    maxRandomnessOffset: 2,
    roughness: type === "highlight" ? 3 : 1.5,
    bowing: 1,
    stroke: "#000",
    strokeWidth: 1.5,
    curveTightness: 0,
    curveFitting: 0.95,
    curveStepCount: 9,
    fillStyle: "hachure",
    fillWeight: -1,
    hachureAngle: -41,
    hachureGap: -1,
    dashOffset: -1,
    dashGap: -1,
    zigzagOffset: -1,
    // combineNestedSvgPaths: false,
    disableMultiStroke: type !== "double",
    disableMultiStrokeFill: false,
    seed,
    ...overrides
  };
}
function parsePadding(config) {
  const p = config.padding;
  if (p || p === 0) {
    if (typeof p === "number") {
      return [p, p, p, p];
    } else if (Array.isArray(p)) {
      const pa = p;
      if (pa.length) {
        switch (pa.length) {
          case 4:
            return [...pa];
          case 1:
            return [pa[0], pa[0], pa[0], pa[0]];
          case 2:
            return [...pa, ...pa];
          case 3:
            return [...pa, pa[1]];
          default:
            return [pa[0], pa[1], pa[2], pa[3]];
        }
      }
    }
  }
  return [5, 5, 5, 5];
}
function renderAnnotation(svg, rect, config, animationGroupDelay, animationDuration, seed) {
  const opList = [];
  let strokeWidth = config.strokeWidth || 2;
  const padding = parsePadding(config);
  const animate = config.animate === void 0 ? true : !!config.animate;
  const iterations = config.iterations || 2;
  const rtl = config.rtl ? 1 : 0;
  const o = getOptions("single", seed, config);
  switch (config.type) {
    case "underline": {
      const y = rect.y + rect.h + padding[2];
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(rect.x + rect.w, y, rect.x, y, o));
        else
          opList.push(line(rect.x, y, rect.x + rect.w, y, o));
      }
      break;
    }
    case "strike-through": {
      const y = rect.y + rect.h / 2;
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(rect.x + rect.w, y, rect.x, y, o));
        else
          opList.push(line(rect.x, y, rect.x + rect.w, y, o));
      }
      break;
    }
    case "box": {
      const x = rect.x - padding[3];
      const y = rect.y - padding[0];
      const width = rect.w + (padding[1] + padding[3]);
      const height = rect.h + (padding[0] + padding[2]);
      for (let i = 0; i < iterations; i++)
        opList.push(rectangle(x, y, width, height, o));
      break;
    }
    case "bracket": {
      const brackets = Array.isArray(config.brackets) ? config.brackets : config.brackets ? [config.brackets] : ["right"];
      const lx = rect.x - padding[3] * 2;
      const rx = rect.x + rect.w + padding[1] * 2;
      const ty = rect.y - padding[0] * 2;
      const by = rect.y + rect.h + padding[2] * 2;
      for (const br of brackets) {
        let points;
        switch (br) {
          case "bottom":
            points = [
              [lx, rect.y + rect.h],
              [lx, by],
              [rx, by],
              [rx, rect.y + rect.h]
            ];
            break;
          case "top":
            points = [
              [lx, rect.y],
              [lx, ty],
              [rx, ty],
              [rx, rect.y]
            ];
            break;
          case "left":
            points = [
              [rect.x, ty],
              [lx, ty],
              [lx, by],
              [rect.x, by]
            ];
            break;
          case "right":
            points = [
              [rect.x + rect.w, ty],
              [rx, ty],
              [rx, by],
              [rect.x + rect.w, by]
            ];
            break;
        }
        if (points)
          opList.push(linearPath(points, false, o));
      }
      break;
    }
    case "crossed-off": {
      const x = rect.x;
      const y = rect.y;
      const x2 = x + rect.w;
      const y2 = y + rect.h;
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(x2, y2, x, y, o));
        else
          opList.push(line(x, y, x2, y2, o));
      }
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(x, y2, x2, y, o));
        else
          opList.push(line(x2, y, x, y2, o));
      }
      break;
    }
    case "circle": {
      const doubleO = getOptions("double", seed, config);
      const width = rect.w + (padding[1] + padding[3]);
      const height = rect.h + (padding[0] + padding[2]);
      const x = rect.x - padding[3] + width / 2;
      const y = rect.y - padding[0] + height / 2;
      const fullItr = Math.floor(iterations / 2);
      const singleItr = iterations - fullItr * 2;
      for (let i = 0; i < fullItr; i++)
        opList.push(ellipse(x, y, width, height, doubleO));
      for (let i = 0; i < singleItr; i++)
        opList.push(ellipse(x, y, width, height, o));
      break;
    }
    case "highlight": {
      const o2 = getOptions("highlight", seed, config);
      strokeWidth = rect.h * 0.95;
      const y = rect.y + rect.h / 2;
      for (let i = rtl; i < iterations + rtl; i++) {
        if (i % 2)
          opList.push(line(rect.x + rect.w, y, rect.x, y, o2));
        else
          opList.push(line(rect.x, y, rect.x + rect.w, y, o2));
      }
      break;
    }
  }
  if (opList.length) {
    const pathStrings = opsToPath(opList);
    const lengths = [];
    const pathElements = [];
    let totalLength = 0;
    const setAttr = (p, an, av) => p.setAttribute(an, av);
    for (const d of pathStrings) {
      const path = document.createElementNS(SVG_NS, "path");
      setAttr(path, "d", d);
      setAttr(path, "fill", "none");
      setAttr(path, "stroke", config.color || "currentColor");
      setAttr(path, "stroke-width", `${strokeWidth}`);
      if (config.opacity !== void 0)
        setAttr(path, "style", `opacity:${config.opacity}`);
      if (animate) {
        const length = path.getTotalLength();
        lengths.push(length);
        totalLength += length;
      }
      svg.appendChild(path);
      pathElements.push(path);
    }
    if (animate) {
      let durationOffset = 0;
      for (let i = 0; i < pathElements.length; i++) {
        const path = pathElements[i];
        const length = lengths[i];
        const duration = totalLength ? animationDuration * (length / totalLength) : 0;
        const delay = animationGroupDelay + durationOffset;
        const style = path.style;
        style.strokeDashoffset = `${length}`;
        style.strokeDasharray = `${length}`;
        style.animation = `rough-notation-dash ${duration}ms ease-out ${delay}ms forwards`;
        durationOffset += duration;
      }
      return sleep(animationDuration + animationGroupDelay);
    }
  }
  return sleep(0);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function opsToPath(opList) {
  const paths = [];
  for (const drawing of opList) {
    let path = "";
    for (const item of drawing.ops) {
      const data2 = item.data;
      switch (item.op) {
        case "move":
          if (path.trim())
            paths.push(path.trim());
          path = `M${data2[0]} ${data2[1]} `;
          break;
        case "bcurveTo":
          path += `C${data2[0]} ${data2[1]}, ${data2[2]} ${data2[3]}, ${data2[4]} ${data2[5]} `;
          break;
        case "lineTo":
          path += `L${data2[0]} ${data2[1]} `;
          break;
      }
    }
    if (path.trim())
      paths.push(path.trim());
  }
  return paths;
}
function ensureKeyframes() {
  if (!window.__rno_kf_s) {
    const style = window.__rno_kf_s = document.createElement("style");
    style.textContent = `@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }`;
    document.head.appendChild(style);
  }
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class RoughAnnotationImpl {
  constructor(e, config) {
    __publicField(this, "_state", "unattached");
    __publicField(this, "_config");
    __publicField(this, "_resizing", false);
    __publicField(this, "_ro");
    __publicField(this, "_seed", randomSeed());
    __publicField(this, "_e");
    __publicField(this, "_svg");
    __publicField(this, "_lastSizes", []);
    __publicField(this, "_animationDelay", 0);
    __publicField(this, "_resizeListener", () => {
      if (!this._resizing) {
        this._resizing = true;
        setTimeout(() => {
          this._resizing = false;
          if (this._state === "showing") {
            if (this.haveRectsChanged())
              this.show();
          }
        }, 400);
      }
    });
    __publicField(this, "pendingRefresh");
    this._e = e;
    this._config = JSON.parse(JSON.stringify(config));
    this.attach();
  }
  getConfig(key) {
    return this._config[key];
  }
  setConfig(key, value) {
    if (this._config[key] !== value) {
      this._config[key] = value;
      this.refresh();
    }
  }
  get animate() {
    return this._config.animate;
  }
  set animate(value) {
    this._config.animate = value;
  }
  get animationDuration() {
    return this._config.animationDuration;
  }
  set animationDuration(value) {
    this._config.animationDuration = value;
  }
  get iterations() {
    return this._config.iterations;
  }
  set iterations(value) {
    this._config.iterations = value;
  }
  get color() {
    return this._config.color;
  }
  set color(value) {
    if (this._config.color !== value) {
      this._config.color = value;
      this.refresh();
    }
  }
  get class() {
    return this._config.class;
  }
  set class(value) {
    if (this._config.class !== value) {
      this._config.class = value;
      if (this._svg)
        this._svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
    }
  }
  get strokeWidth() {
    return this._config.strokeWidth;
  }
  set strokeWidth(value) {
    if (this._config.strokeWidth !== value) {
      this._config.strokeWidth = value;
      this.refresh();
    }
  }
  get padding() {
    return this._config.padding;
  }
  set padding(value) {
    if (this._config.padding !== value) {
      this._config.padding = value;
      this.refresh();
    }
  }
  attach() {
    if (this._state === "unattached" && this._e.parentElement) {
      ensureKeyframes();
      const svg = this._svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
      const style = svg.style;
      style.position = "absolute";
      style.top = "0";
      style.left = "0";
      style.overflow = "visible";
      style.pointerEvents = "none";
      style.width = "100px";
      style.height = "100px";
      const prepend = this._config.type === "highlight";
      this._e.insertAdjacentElement(prepend ? "beforebegin" : "afterend", svg);
      this._state = "not-showing";
      if (prepend) {
        const computedPos = window.getComputedStyle(this._e).position;
        const unpositioned = !computedPos || computedPos === "static";
        if (unpositioned)
          this._e.style.position = "relative";
      }
      this.attachListeners();
    }
  }
  detachListeners() {
    window.removeEventListener("resize", this._resizeListener);
    if (this._ro)
      this._ro.unobserve(this._e);
  }
  attachListeners() {
    this.detachListeners();
    window.addEventListener("resize", this._resizeListener, { passive: true });
    if (!this._ro && "ResizeObserver" in window) {
      this._ro = new window.ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect)
            this._resizeListener();
        }
      });
    }
    if (this._ro)
      this._ro.observe(this._e);
  }
  haveRectsChanged() {
    if (this._lastSizes.length) {
      const newRects = this.rects();
      if (newRects.length === this._lastSizes.length) {
        for (let i = 0; i < newRects.length; i++) {
          if (!this.isSameRect(newRects[i], this._lastSizes[i]))
            return true;
        }
      } else {
        return true;
      }
    }
    return false;
  }
  isSameRect(rect1, rect2) {
    const si = (a, b) => Math.round(a) === Math.round(b);
    return si(rect1.x, rect2.x) && si(rect1.y, rect2.y) && si(rect1.w, rect2.w) && si(rect1.h, rect2.h);
  }
  isShowing() {
    return this._state !== "not-showing";
  }
  refresh() {
    if (this.isShowing() && !this.pendingRefresh) {
      this.pendingRefresh = Promise.resolve().then(() => {
        if (this.isShowing())
          this.show();
        delete this.pendingRefresh;
      });
    }
  }
  async show() {
    switch (this._state) {
      case "unattached":
        break;
      case "showing":
        this.hide();
        if (this._svg)
          await this.render(this._svg, true);
        break;
      case "not-showing":
        this.attach();
        if (this._svg)
          await this.render(this._svg, false);
        break;
    }
  }
  hide() {
    if (this._svg) {
      while (this._svg.lastChild)
        this._svg.removeChild(this._svg.lastChild);
    }
    this._state = "not-showing";
  }
  remove() {
    if (this._svg && this._svg.parentElement)
      this._svg.parentElement.removeChild(this._svg);
    this._svg = void 0;
    this._state = "unattached";
    this.detachListeners();
  }
  async render(svg, ensureNoAnimation) {
    let config = this._config;
    if (ensureNoAnimation) {
      config = JSON.parse(JSON.stringify(this._config));
      config.animate = false;
    }
    const rects = this.rects();
    let totalWidth = 0;
    rects.forEach((rect) => totalWidth += rect.w);
    const totalDuration = config.animationDuration || DEFAULT_ANIMATION_DURATION;
    let delay = 0;
    const promises = [];
    for (let i = 0; i < rects.length; i++) {
      const rect = rects[i];
      const ad = totalDuration * (rect.w / totalWidth);
      promises.push(
        renderAnnotation(svg, rects[i], config, delay + this._animationDelay + (this._config.delay || 0), ad, this._seed)
      );
      delay += ad;
    }
    this._lastSizes = rects;
    this._state = "showing";
    return await Promise.all(promises);
  }
  rects() {
    const ret = [];
    if (this._svg) {
      if (this._config.multiline) {
        const elementRects = this._e.getClientRects();
        for (let i = 0; i < elementRects.length; i++)
          ret.push(this.svgRect(this._svg, elementRects[i]));
      } else {
        ret.push(this.svgRect(this._svg, this._e.getBoundingClientRect()));
      }
    }
    return ret;
  }
  svgRect(svg, bounds) {
    const rect1 = svg.getBoundingClientRect();
    const rect2 = bounds;
    return {
      x: (rect2.x || rect2.left) - (rect1.x || rect1.left),
      y: (rect2.y || rect2.top) - (rect1.y || rect1.top),
      w: rect2.width,
      h: rect2.height
    };
  }
}
function annotate(element, config) {
  return new RoughAnnotationImpl(element, config);
}
function addClass(options, cls) {
  options.class = [options.class, cls].filter(Boolean).join(" ");
  return options;
}
const vMarkModifiers = {
  // Types
  "box": (options) => Object.assign(options, { type: "box" }),
  "circle": (options) => Object.assign(options, { type: "circle" }),
  "underline": (options) => Object.assign(options, { type: "underline" }),
  "highlight": (options) => Object.assign(options, { type: "highlight" }),
  "strike-through": (options) => Object.assign(options, { type: "strike-through" }),
  "crossed-off": (options) => Object.assign(options, { type: "crossed-off" }),
  "bracket": (options) => Object.assign(options, { type: "bracket" }),
  // Type Aliases
  "strike": (options) => Object.assign(options, { type: "strike-through" }),
  "cross": (options) => Object.assign(options, { type: "crossed-off" }),
  "crossed": (options) => Object.assign(options, { type: "crossed-off" }),
  "linethrough": (options) => Object.assign(options, { type: "strike-through" }),
  "line-through": (options) => Object.assign(options, { type: "strike-through" }),
  // Colors
  // @unocss-include
  "black": (options) => addClass(options, "text-black"),
  "blue": (options) => addClass(options, "text-blue"),
  "cyan": (options) => addClass(options, "text-cyan"),
  "gray": (options) => addClass(options, "text-gray"),
  "green": (options) => addClass(options, "text-green"),
  "indigo": (options) => addClass(options, "text-indigo"),
  "lime": (options) => addClass(options, "text-lime"),
  "orange": (options) => addClass(options, "text-orange"),
  "pink": (options) => addClass(options, "text-pink"),
  "purple": (options) => addClass(options, "text-purple"),
  "red": (options) => addClass(options, "text-red"),
  "teal": (options) => addClass(options, "text-teal"),
  "white": (options) => addClass(options, "text-white"),
  "yellow": (options) => addClass(options, "text-yellow")
};
const vMarkModifiersDynamic = [
  // Support setting delay like `v-mark.delay300="1"`
  [/^delay-?(\d+)?$/, (match, options, value) => {
    const ms = (match[1] ? Number.parseInt(match[1]) : value) || 300;
    options.delay = ms;
    return options;
  }],
  // Support setting opacity like `v-mark.op50="1"`
  [/^(?:op|opacity)-?(\d+)?$/, (match, options, value) => {
    const opacity = (match[1] ? Number.parseInt(match[1]) : value) || 100;
    options.opacity = opacity / 100;
    return options;
  }]
];
function createVMarkDirective() {
  return {
    install(app) {
      app.directive("mark", {
        // @ts-expect-error extra prop
        name: "v-mark",
        mounted: (el, binding) => {
          const { isPrintMode } = useNav();
          const options = computed(() => {
            const bindingOptions = typeof binding.value === "object" && !Array.isArray(binding.value) ? { ...binding.value } : { at: binding.value };
            let modifierOptions = { at: bindingOptions.at };
            const unknownModifiers = Object.entries(binding.modifiers).filter(([k, v]) => {
              if (vMarkModifiers[k]) {
                modifierOptions = vMarkModifiers[k](modifierOptions, v);
                return false;
              }
              for (const [re, fn] of vMarkModifiersDynamic) {
                const match = k.match(re);
                if (match) {
                  modifierOptions = fn(match, modifierOptions, v);
                  return false;
                }
              }
              return true;
            });
            if (unknownModifiers.length)
              console.warn("[Slidev] Invalid modifiers for v-mark:", unknownModifiers);
            const options2 = {
              ...modifierOptions,
              ...bindingOptions
            };
            options2.type ||= "underline";
            if (isPrintMode.value)
              options2.animationDuration = 1;
            return options2;
          });
          const annotation = annotate(el, options.value);
          const resolvedClick = resolveClick(el, binding, options.value.at);
          if (!resolvedClick) {
            annotation.show();
            return;
          }
          el.watchStopHandle = watchEffect(() => {
            let shouldShow;
            if (options.value.class)
              annotation.class = options.value.class;
            if (options.value.color)
              annotation.color = options.value.color;
            const at = options.value.at;
            if (at === true)
              shouldShow = true;
            else if (at === false)
              shouldShow = false;
            else
              shouldShow = resolvedClick.isActive.value;
            if (shouldShow == null)
              return;
            if (shouldShow)
              annotation.show();
            else
              annotation.hide();
          });
        },
        unmounted: (el) => {
          el.watchStopHandle?.();
        }
      });
    }
  };
}
function createVMotionDirectives() {
  return {
    install(app) {
      const original = directive();
      app.directive("motion", {
        // @ts-expect-error extra prop
        name: "v-motion",
        mounted(el, binding, node, prevNode) {
          const clicksContext = directiveInject(binding, injectionClicksContext);
          const thisPage = directiveInject(binding, injectionCurrentPage);
          const renderContext = directiveInject(binding, injectionRenderContext);
          const { currentPage, clicks: currentClicks, isPrintMode } = useNav();
          const props = node.props = { ...node.props };
          const variantInitial = { ...props.initial, ...props.variants?.["slidev-initial"] };
          const variantEnter = { ...props.enter, ...props.variants?.["slidev-enter"] };
          const variantLeave = { ...props.leave, ...props.variants?.["slidev-leave"] };
          delete props.initial;
          delete props.enter;
          delete props.leave;
          const idPrefix = `${makeId()}-`;
          const clicks = [];
          for (const k of Object.keys(props)) {
            if (k.startsWith("click-")) {
              const s = k.slice(6);
              const at = s.includes("-") ? s.split("-").map(Number) : +s;
              const id = idPrefix + s;
              clicks.push({
                id,
                at,
                variant: { ...props[k] },
                info: clicksContext?.value.calculate(at)
              });
              delete props[k];
            }
          }
          clicks.sort((a, b) => (Array.isArray(a.at) ? a.at[0] : a.at) - (Array.isArray(b.at) ? b.at[0] : b.at));
          original.created(el, binding, node);
          original.mounted(el);
          const motion = el.motionInstance;
          motion.clickIds = clicks.map((i) => i.id);
          motion.set(variantInitial);
          motion.watchStopHandle = watch(
            [thisPage, currentPage, currentClicks].filter(Boolean),
            () => {
              const visibility = resolvedClickMap.get(el)?.visibilityState.value ?? "shown";
              if (!clicksContext?.value || !["slide", "presenter"].includes(renderContext?.value ?? "")) {
                const mixedVariant = { ...variantInitial, ...variantEnter };
                for (const { variant } of clicks)
                  Object.assign(mixedVariant, variant);
                motion.set(mixedVariant);
              } else if (isPrintMode.value || thisPage?.value === currentPage.value) {
                if (visibility === "shown") {
                  const mixedVariant = { ...variantInitial, ...variantEnter };
                  for (const { variant, info } of clicks) {
                    if (!info || info.isActive.value)
                      Object.assign(mixedVariant, variant);
                  }
                  if (isPrintMode.value)
                    motion.set(mixedVariant);
                  else
                    motion.apply(mixedVariant);
                } else {
                  motion.apply(visibility === "before" ? variantInitial : variantLeave);
                }
              } else {
                motion.apply((thisPage?.value ?? -1) > currentPage.value ? variantInitial : variantLeave);
              }
            },
            {
              immediate: true
            }
          );
        },
        unmounted(el) {
          const motion = el.motionInstance;
          motion.watchStopHandle();
        }
      });
    }
  };
}
const setups = [Object.values([])[0], Object.values([])[0]].filter(Boolean);
function setupRoutes() {
  const routes = [];
  routes.push(
    {
      name: "play",
      path: "/:no",
      component: () => __vitePreload(() => import("./slidev/play-CjAlcRyu.js").then((n) => n.p), true ? __vite__mapDeps([23,1,4,24,5,6,25]) : void 0)
    },
    {
      path: "",
      redirect: { path: "/1" }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => __vitePreload(() => import("./slidev/404-D5DfiAXZ.js"), true ? __vite__mapDeps([26,1,5,6,27]) : void 0)
    }
  );
  return setups.reduce((routes2, setup) => setup(routes2), routes);
}
async function setupMain(app) {
  function setMaxHeight() {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  }
  setMaxHeight();
  window.addEventListener("resize", setMaxHeight);
  const router = createRouter({
    history: createWebHashHistory("/slides/canvasobs/"),
    routes: setupRoutes()
  });
  app.use(router);
  app.use(/* @__PURE__ */ createHead());
  app.use(createVClickDirectives());
  app.use(createVMarkDirective());
  app.use(createVDragDirective());
  app.use(createVMotionDirectives());
  app.use(TwoslashFloatingVue, { container: "#twoslash-container" });
  const context = {
    app,
    router
  };
  for (const setup of setups$1)
    await setup(context);
}
async function main() {
  const app = createApp(_sfc_main);
  await setupMain(app);
  app.mount("#app");
}
main();
export {
  magicKeys as $,
  isDark as A,
  injectionRoute as B,
  injectionFrontmatter as C,
  injectionCurrentPage as D,
  injectionRenderContext as E,
  getSlideClass as F,
  injectionClicksContext as G,
  injectionSlideZoom as H,
  breakpoints as I,
  showOverview as J,
  createFixedClicks as K,
  CLICKS_MAX as L,
  __vitePreload as M,
  showRecordingDialog as N,
  showInfoDialog as O,
  viewerCssFilter as P,
  viewerCssFilterDefaults as Q,
  isColorSchemaConfigured as R,
  toggleDark as S,
  showPresenterCursor as T,
  downloadPDF as U,
  presenterLayout as V,
  togglePresenterLayout as W,
  hasViewerCssFilter as X,
  state as Y,
  useSlideBounds as Z,
  _export_sfc as _,
  windowSize as a,
  clamp as a0,
  hmrSkipTransition as a1,
  disableTransition as a2,
  activeDragElement as a3,
  shortcutsLocked as a4,
  shortcutsEnabled as a5,
  isOnFocus as a6,
  isEditorVertical as a7,
  isScreenVertical as a8,
  injectionSlidevContext as a9,
  HEADMATTER_FIELDS as aa,
  FRONTMATTER_FIELDS as ab,
  showGotoDialog as b,
  configs as c,
  drawingState as d,
  activeElement as e,
  fullscreen as f,
  slides as g,
  hideCursorIdle as h,
  isInputting as i,
  define as j,
  createSyncState as k,
  getSlide as l,
  mode as m,
  slideScale as n,
  onPatchDrawingState as o,
  patchDrawingState as p,
  slideWidth as q,
  randId as r,
  showEditor as s,
  toggleOverview as t,
  useNav as u,
  slideHeight as v,
  wakeLockEnabled as w,
  slideAspect as x,
  injectionSlideScale as y,
  injectionSlideElement as z
};
