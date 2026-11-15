const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-Df37tvWX.js","assets/modules/vue-DCd3fsyH.js","assets/modules/shiki-BYicmHTF.js","assets/modules/shiki-BFcF5iNl.css","assets/index-tUcMyYlJ.js","assets/index-BSOYMvLH.css","assets/slidev/context-BoeIygqB.js","assets/modules/unplugin-icons-CDWZ4-sC.js","assets/DrawingControls-D9O46yT5.css","assets/slidev/DrawingLayer-DJwseS9g.js"])))=>i.map(i=>d[i]);
import { a2 as createSharedComposable, X as useLocalStorage, ae as toReactive, y as markRaw, p as nextTick, L as watch, r as ref, z as computed, Q as reactive, af as onScopeDispose, ag as useEventListener, ah as usePointerSwipe, ai as timestamp, aj as useWakeLock$1, R as shallowRef, f as defineComponent, a8 as onClickOutside, a7 as useElementBounding, U as unref, o as openBlock, e as createElementBlock, ak as withModifiers, k as normalizeStyle, F as Fragment, al as renderList, n as normalizeClass, b as createBlock, am as resolveDynamicComponent, g as createBaseVNode, t as toDisplayString, j as createCommentVNode, an as createTextVNode, aa as useWindowFocus, l as withKeys, d as createVNode, ao as KeepAlive, i as renderSlot, ap as useVModel, A as isRef, w as withCtx, aq as useElementSize, E as watchEffect, N as onUnmounted, ar as provideLocal, h, as as toRef, at as Transition, au as withDirectives, av as vShow, aw as useModel, ax as vModelCheckbox, ay as mergeModels, az as vModelText, m as mergeProps, T as useRouter, D as inject, aA as useIntervalFn, v as normalizeProps, x as guardReactiveProps, aB as TransitionGroup, aC as and, aD as not, aE as or, aF as onKeyStroke } from "../modules/vue-DCd3fsyH.js";
import { u as useNav, d as drawingState, p as patchDrawingState, i as isInputting, c as configs, o as onPatchDrawingState, h as hideCursorIdle, w as wakeLockEnabled, t as toggleOverview, f as fullscreen, s as showEditor, m as mode, a as windowSize, b as showGotoDialog, e as activeElement, _ as _export_sfc, g as slides, j as define, r as randId, k as createSyncState, l as getSlide, n as slideScale, q as slideWidth, v as slideHeight, x as slideAspect, y as injectionSlideScale, z as injectionSlideElement, A as isDark, B as injectionRoute, C as injectionFrontmatter, D as injectionCurrentPage, E as injectionRenderContext, F as getSlideClass, G as injectionClicksContext, H as injectionSlideZoom, I as breakpoints, J as showOverview, K as createFixedClicks, L as CLICKS_MAX, M as __vitePreload, N as showRecordingDialog, O as showInfoDialog, P as viewerCssFilter, Q as viewerCssFilterDefaults, R as isColorSchemaConfigured, S as toggleDark, T as showPresenterCursor, U as downloadPDF, V as presenterLayout, W as togglePresenterLayout, X as hasViewerCssFilter, Y as state, Z as useSlideBounds, $ as magicKeys, a0 as clamp, a1 as hmrSkipTransition, a2 as disableTransition, a3 as activeDragElement, a4 as shortcutsLocked, a5 as shortcutsEnabled, a6 as isOnFocus, a7 as isEditorVertical, a8 as isScreenVertical } from "../index-tUcMyYlJ.js";
import { u as useSlideContext } from "./context-BoeIygqB.js";
import { _ as __unplugin_components_0, a as __unplugin_components_1, b as __unplugin_components_0$1, c as __unplugin_components_3 } from "../modules/unplugin-icons-CDWZ4-sC.js";
import { V as Vt, t as tt } from "../modules/shiki-BYicmHTF.js";
let createNanoEvents = () => ({
  emit(event, ...args) {
    for (let callbacks = this.events[event] || [], i = 0, length = callbacks.length; i < length; i++) callbacks[i](...args);
  },
  events: {},
  on(event, cb) {
    (this.events[event] ||= []).push(cb);
    return () => {
      this.events[event] = this.events[event]?.filter((i) => cb !== i);
    };
  }
});
function numSort(a$1, b$1) {
  return a$1 - b$1;
}
function getSymbol(a$1) {
  if (a$1 < 0) return -1;
  return 1;
}
function splitNum(a$1) {
  return [Math.abs(a$1), getSymbol(a$1)];
}
function guid() {
  const S4 = () => ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}
const DECIMAL = 2;
const D = DECIMAL;
function createArrowHead(id, fill) {
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  const head = document.createElementNS("http://www.w3.org/2000/svg", "path");
  head.setAttribute("fill", fill);
  marker.setAttribute("id", id);
  marker.setAttribute("viewBox", "0 -5 10 10");
  marker.setAttribute("refX", "5");
  marker.setAttribute("refY", "0");
  marker.setAttribute("markerWidth", "4");
  marker.setAttribute("markerHeight", "4");
  marker.setAttribute("orient", "auto");
  head.setAttribute("d", "M0,-5L10,0L0,5");
  marker.appendChild(head);
  defs.appendChild(marker);
  return defs;
}
function getSqDist(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return dx * dx + dy * dy;
}
function getSqSegDist(p, p1, p2) {
  let x = p1.x;
  let y = p1.y;
  let dx = p2.x - x;
  let dy = p2.y - y;
  if (dx !== 0 || dy !== 0) {
    const t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x = p2.x;
      y = p2.y;
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }
  dx = p.x - x;
  dy = p.y - y;
  return dx * dx + dy * dy;
}
function simplifyRadialDist(points, sqTolerance) {
  let prevPoint = points[0];
  const newPoints = [prevPoint];
  let point;
  for (let i = 1, len = points.length; i < len; i++) {
    point = points[i];
    if (getSqDist(point, prevPoint) > sqTolerance) {
      newPoints.push(point);
      prevPoint = point;
    }
  }
  if (prevPoint !== point && point) newPoints.push(point);
  return newPoints;
}
function simplifyDPStep(points, first, last, sqTolerance, simplified) {
  let maxSqDist = sqTolerance;
  let index = 0;
  for (let i = first + 1; i < last; i++) {
    const sqDist = getSqSegDist(points[i], points[first], points[last]);
    if (sqDist > maxSqDist) {
      index = i;
      maxSqDist = sqDist;
    }
  }
  if (maxSqDist > sqTolerance) {
    if (index - first > 1) simplifyDPStep(points, first, index, sqTolerance, simplified);
    simplified.push(points[index]);
    if (last - index > 1) simplifyDPStep(points, index, last, sqTolerance, simplified);
  }
}
function simplifyDouglasPeucker(points, sqTolerance) {
  const last = points.length - 1;
  const simplified = [points[0]];
  simplifyDPStep(points, 0, last, sqTolerance, simplified);
  simplified.push(points[last]);
  return simplified;
}
function simplify(points, tolerance, highestQuality = false) {
  if (points.length <= 2) return points;
  const sqTolerance = tolerance * tolerance;
  points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
  points = simplifyDouglasPeucker(points, sqTolerance);
  return points;
}
var BaseModel = class {
  constructor(drauu) {
    this.drauu = drauu;
    this.event = void 0;
    this.point = void 0;
    this.start = void 0;
    this.el = null;
  }
  onSelected(_el) {
  }
  onUnselected() {
  }
  onStart(_point) {
  }
  onMove(_point) {
    return false;
  }
  onEnd(_point) {
  }
  get brush() {
    return this.drauu.brush;
  }
  get shiftPressed() {
    return this.drauu.shiftPressed;
  }
  get altPressed() {
    return this.drauu.altPressed;
  }
  get svgElement() {
    return this.drauu.el;
  }
  getMousePosition(event) {
    const el = this.drauu.el;
    const cssZoom = this.drauu.options.cssZoom ?? 1;
    const scale = this.drauu.options.coordinateScale ?? 1;
    const offset = this.drauu.options.offset ?? {
      x: 0,
      y: 0
    };
    if (this.drauu.options.coordinateTransform === false) {
      const rect = this.drauu.el.getBoundingClientRect();
      return {
        x: (event.pageX / cssZoom - rect.left + offset.x) * scale,
        y: (event.pageY / cssZoom - rect.top + offset.y) * scale,
        pressure: event.pressure
      };
    } else {
      const point = this.drauu.svgPoint;
      point.x = event.clientX / cssZoom + offset.x;
      point.y = event.clientY / cssZoom + offset.y;
      const loc = point.matrixTransform(el.getScreenCTM()?.inverse());
      return {
        x: loc.x * scale,
        y: loc.y * scale,
        pressure: event.pressure
      };
    }
  }
  createElement(name, overrides) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", name);
    const brush = overrides ? {
      ...this.brush,
      ...overrides
    } : this.brush;
    el.setAttribute("fill", brush.fill ?? "transparent");
    el.setAttribute("stroke", brush.color);
    el.setAttribute("stroke-width", brush.size.toString());
    el.setAttribute("stroke-linecap", "round");
    if (brush.dasharray) el.setAttribute("stroke-dasharray", brush.dasharray);
    return el;
  }
  attr(name, value) {
    this.el.setAttribute(name, typeof value === "string" ? value : value.toFixed(D));
  }
  _setEvent(event) {
    this.event = event;
    this.point = this.getMousePosition(event);
  }
  /**
  * @internal
  */
  _eventDown(event) {
    this._setEvent(event);
    this.start = this.point;
    return this.onStart(this.point);
  }
  /**
  * @internal
  */
  _eventMove(event) {
    this._setEvent(event);
    return this.onMove(this.point);
  }
  /**
  * @internal
  */
  _eventUp(event) {
    this._setEvent(event);
    return this.onEnd(this.point);
  }
};
var DrawModel = class DrawModel2 extends BaseModel {
  constructor(..._args) {
    super(..._args);
    this.points = [];
    this.count = 0;
  }
  onStart(point) {
    this.el = this.createElement("path", { fill: "transparent" });
    this.points = [point];
    if (this.brush.arrowEnd) {
      this.arrowId = guid();
      const head = createArrowHead(this.arrowId, this.brush.color);
      this.el.appendChild(head);
    }
    return this.el;
  }
  onMove(point) {
    if (!this.el) this.onStart(point);
    if (this.points[this.points.length - 1] !== point) {
      this.points.push(point);
      this.count += 1;
    }
    if (this.count > 5) {
      this.points = simplify(this.points, 1, true);
      this.count = 0;
    }
    this.attr("d", DrawModel2.toSvgData(this.points));
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path) return false;
    path.setAttribute("d", DrawModel2.toSvgData(simplify(this.points, 1, true)));
    if (!path.getTotalLength()) {
      const { x, y } = this.points[0];
      const r = this.brush.size / 2;
      path.setAttribute("d", `M ${x - r} ${y} a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 ${-r * 2},0`);
      path.setAttribute("fill", this.brush.color);
      path.setAttribute("stroke-width", "0");
    }
    return true;
  }
  static line(a$1, b$1) {
    const lengthX = b$1.x - a$1.x;
    const lengthY = b$1.y - a$1.y;
    return {
      length: Math.sqrt(lengthX ** 2 + lengthY ** 2),
      angle: Math.atan2(lengthY, lengthX)
    };
  }
  static controlPoint(current, previous, next, reverse) {
    const p = previous || current;
    const n = next || current;
    const smoothing = 0.2;
    const o = DrawModel2.line(p, n);
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    return {
      x: current.x + Math.cos(angle) * length,
      y: current.y + Math.sin(angle) * length
    };
  }
  static bezierCommand(point, i, points) {
    const cps = DrawModel2.controlPoint(points[i - 1], points[i - 2], point);
    const cpe = DrawModel2.controlPoint(point, points[i - 1], points[i + 1], true);
    return `C ${cps.x.toFixed(D)},${cps.y.toFixed(D)} ${cpe.x.toFixed(D)},${cpe.y.toFixed(D)} ${point.x.toFixed(D)},${point.y.toFixed(D)}`;
  }
  static toSvgData(points) {
    return points.reduce((acc, point, i, a$1) => i === 0 ? `M ${point.x.toFixed(D)},${point.y.toFixed(D)}` : `${acc} ${DrawModel2.bezierCommand(point, i, a$1)}`, "");
  }
};
var EllipseModel = class extends BaseModel {
  onStart(point) {
    this.el = this.createElement("ellipse");
    this.attr("cx", point.x);
    this.attr("cy", point.y);
    return this.el;
  }
  onMove(point) {
    if (!this.el || !this.start) return false;
    let [dx, sx] = splitNum(point.x - this.start.x);
    let [dy, sy] = splitNum(point.y - this.start.y);
    if (this.shiftPressed) {
      const d = Math.min(dx, dy);
      dx = d;
      dy = d;
    }
    if (this.altPressed) {
      this.attr("cx", this.start.x);
      this.attr("cy", this.start.y);
      this.attr("rx", dx);
      this.attr("ry", dy);
    } else {
      const [x1, x2] = [this.start.x, this.start.x + dx * sx].sort(numSort);
      const [y1, y2] = [this.start.y, this.start.y + dy * sy].sort(numSort);
      this.attr("cx", (x1 + x2) / 2);
      this.attr("cy", (y1 + y2) / 2);
      this.attr("rx", (x2 - x1) / 2);
      this.attr("ry", (y2 - y1) / 2);
    }
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path) return false;
    try {
      if (!path.getTotalLength()) return false;
    } catch {
      return false;
    }
    return true;
  }
};
var EraserModel = class extends BaseModel {
  constructor(..._args) {
    super(..._args);
    this.pathSubFactor = 20;
    this.pathFragments = [];
    this._erased = [];
  }
  onSelected(el) {
    const calculatePathFragments = (children, element) => {
      if (children && children.length) for (let i = 0; i < children.length; i++) {
        const ele = children[i];
        if (ele.getTotalLength) {
          const pathLength = ele.getTotalLength();
          for (let j = 0; j < this.pathSubFactor; j++) {
            const pos1 = ele.getPointAtLength(pathLength * j / this.pathSubFactor);
            const pos2 = ele.getPointAtLength(pathLength * (j + 1) / this.pathSubFactor);
            this.pathFragments.push({
              x1: pos1.x,
              x2: pos2.x,
              y1: pos1.y,
              y2: pos2.y,
              segment: j,
              element: element || ele
            });
          }
        } else if (ele.children) calculatePathFragments(ele.children, ele);
      }
    };
    if (el) calculatePathFragments(el.children);
  }
  onUnselected() {
    this.pathFragments = [];
  }
  onStart(point) {
    this.svgPointPrevious = this.svgElement.createSVGPoint();
    this.svgPointPrevious.x = point.x;
    this.svgPointPrevious.y = point.y;
  }
  onMove(point) {
    this.svgPointCurrent = this.svgElement.createSVGPoint();
    this.svgPointCurrent.x = point.x;
    this.svgPointCurrent.y = point.y;
    const erased = this.checkAndEraseElement();
    this.svgPointPrevious = this.svgPointCurrent;
    return erased;
  }
  onEnd() {
    this.svgPointPrevious = void 0;
    this.svgPointCurrent = void 0;
    const erased = this._erased;
    this._erased = [];
    return {
      undo: () => erased.forEach((v) => this.drauu._restoreNode(v)),
      redo: () => erased.forEach((v) => this.drauu._removeNode(v))
    };
  }
  checkAndEraseElement() {
    if (this.pathFragments.length) for (let i = 0; i < this.pathFragments.length; i++) {
      const segment = this.pathFragments[i];
      if (this.svgPointPrevious && this.svgPointCurrent) {
        const line = {
          x1: this.svgPointPrevious.x,
          x2: this.svgPointCurrent.x,
          y1: this.svgPointPrevious.y,
          y2: this.svgPointCurrent.y
        };
        if (this.lineLineIntersect(segment, line)) {
          this.drauu._removeNode(segment.element);
          this._erased.push(segment.element);
        }
      }
    }
    if (this._erased.length) this.pathFragments = this.pathFragments.filter((v) => !this._erased.includes(v.element));
    return this._erased.length > 0;
  }
  lineLineIntersect(line1, line2) {
    const x1 = line1.x1;
    const x2 = line1.x2;
    const x3 = line2.x1;
    const x4 = line2.x2;
    const y1 = line1.y1;
    const y2 = line1.y2;
    const y3 = line2.y1;
    const y4 = line2.y2;
    const pt_denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    const pt_x_num = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
    const pt_y_num = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
    const btwn = (a$1, b1, b2) => {
      if (a$1 >= b1 && a$1 <= b2) return true;
      return a$1 >= b2 && a$1 <= b1;
    };
    if (pt_denom === 0) return false;
    else {
      const pt = {
        x: pt_x_num / pt_denom,
        y: pt_y_num / pt_denom
      };
      return btwn(pt.x, x1, x2) && btwn(pt.y, y1, y2) && btwn(pt.x, x3, x4) && btwn(pt.y, y3, y4);
    }
  }
};
var LineModel = class extends BaseModel {
  onStart(point) {
    this.el = this.createElement("line", { fill: "transparent" });
    this.attr("x1", point.x);
    this.attr("y1", point.y);
    this.attr("x2", point.x);
    this.attr("y2", point.y);
    if (this.brush.arrowEnd) {
      const id = guid();
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.append(createArrowHead(id, this.brush.color));
      g.append(this.el);
      this.attr("marker-end", `url(#${id})`);
      return g;
    }
    return this.el;
  }
  onMove(point) {
    if (!this.el) return false;
    let { x, y } = point;
    if (this.shiftPressed) {
      const dx = point.x - this.start.x;
      const dy = point.y - this.start.y;
      if (dy !== 0) {
        let slope = dx / dy;
        slope = Math.round(slope);
        if (Math.abs(slope) <= 1) {
          x = this.start.x + dy * slope;
          y = this.start.y + dy;
        } else {
          x = this.start.x + dx;
          y = this.start.y;
        }
      }
    }
    if (this.altPressed) {
      this.attr("x1", this.start.x * 2 - x);
      this.attr("y1", this.start.y * 2 - y);
      this.attr("x2", x);
      this.attr("y2", y);
    } else {
      this.attr("x1", this.start.x);
      this.attr("y1", this.start.y);
      this.attr("x2", x);
      this.attr("y2", y);
    }
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path) return false;
    try {
      if (path.getTotalLength() < 5) return false;
    } catch {
      return false;
    }
    return true;
  }
};
var RectModel = class extends BaseModel {
  onStart(point) {
    this.el = this.createElement("rect");
    if (this.brush.cornerRadius) {
      this.attr("rx", this.brush.cornerRadius);
      this.attr("ry", this.brush.cornerRadius);
    }
    this.attr("x", point.x);
    this.attr("y", point.y);
    return this.el;
  }
  onMove(point) {
    if (!this.el || !this.start) return false;
    let [dx, sx] = splitNum(point.x - this.start.x);
    let [dy, sy] = splitNum(point.y - this.start.y);
    if (this.shiftPressed) {
      const d = Math.min(dx, dy);
      dx = d;
      dy = d;
    }
    if (this.altPressed) {
      this.attr("x", this.start.x - dx);
      this.attr("y", this.start.y - dy);
      this.attr("width", dx * 2);
      this.attr("height", dy * 2);
    } else {
      const [x1, x2] = [this.start.x, this.start.x + dx * sx].sort(numSort);
      const [y1, y2] = [this.start.y, this.start.y + dy * sy].sort(numSort);
      this.attr("x", x1);
      this.attr("y", y1);
      this.attr("width", x2 - x1);
      this.attr("height", y2 - y1);
    }
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path) return false;
    try {
      if (!path.getTotalLength()) return false;
    } catch {
      return false;
    }
    return true;
  }
};
function $(e, t, u, x = (h2) => h2) {
  return e * x(0.5 - t * (0.5 - u));
}
function se(e) {
  return [-e[0], -e[1]];
}
function l(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function a(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function b(e, t) {
  return [e[0] * t, e[1] * t];
}
function he(e, t) {
  return [e[0] / t, e[1] / t];
}
function R(e) {
  return [e[1], -e[0]];
}
function B(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function ue(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function ge(e) {
  return Math.hypot(e[0], e[1]);
}
function de(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function A(e, t) {
  return de(a(e, t));
}
function G(e) {
  return he(e, ge(e));
}
function ie(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function L(e, t, u) {
  let x = Math.sin(u), h2 = Math.cos(u), y = e[0] - t[0], n = e[1] - t[1], f = y * h2 - n * x, d = y * x + n * h2;
  return [f + t[0], d + t[1]];
}
function K(e, t, u) {
  return l(e, b(a(t, e), u));
}
function ee(e, t, u) {
  return l(e, b(t, u));
}
var { min: C, PI: xe } = Math, pe = 0.275, V = xe + 1e-4;
function ce(e, t = {}) {
  let { size: u = 16, smoothing: x = 0.5, thinning: h2 = 0.5, simulatePressure: y = true, easing: n = (r) => r, start: f = {}, end: d = {}, last: D$1 = false } = t, { cap: S = true, easing: j = (r) => r * (2 - r) } = f, { cap: q = true, easing: c = (r) => --r * r * r + 1 } = d;
  if (e.length === 0 || u <= 0) return [];
  let p = e[e.length - 1].runningLength, g = f.taper === false ? 0 : f.taper === true ? Math.max(u, p) : f.taper, T = d.taper === false ? 0 : d.taper === true ? Math.max(u, p) : d.taper, te = Math.pow(u * x, 2), _ = [], M = [], H = e.slice(0, 10).reduce((r, i) => {
    let o = i.pressure;
    if (y) {
      let s = C(1, i.distance / u);
      o = C(1, r + (C(1, 1 - s) - r) * (s * pe));
    }
    return (r + o) / 2;
  }, e[0].pressure), m = $(u, h2, e[e.length - 1].pressure, n), U, X = e[0].vector, z = e[0].point, F = z, O = z, E = F, J = false;
  for (let r = 0; r < e.length; r++) {
    let { pressure: i } = e[r], { point: o, vector: s, distance: W, runningLength: I } = e[r];
    if (r < e.length - 1 && p - I < 3) continue;
    if (h2) {
      if (y) {
        let v = C(1, W / u), Z = C(1, 1 - v);
        i = C(1, H + (Z - H) * (v * pe));
      }
      m = $(u, h2, i, n);
    } else m = u / 2;
    U === void 0 && (U = m);
    let le = I < g ? j(I / g) : 1, fe = p - I < T ? c((p - I) / T) : 1;
    m = Math.max(0.01, m * Math.min(le, fe));
    let re = (r < e.length - 1 ? e[r + 1] : e[r]).vector, Y = r < e.length - 1 ? B(s, re) : 1, be = B(s, X) < 0 && !J, ne = Y !== null && Y < 0;
    if (be || ne) {
      let v = b(R(X), m);
      for (let Z = 1 / 13, w = 0; w <= 1; w += Z) O = L(a(o, v), o, V * w), _.push(O), E = L(l(o, v), o, V * -w), M.push(E);
      z = O, F = E, ne && (J = true);
      continue;
    }
    if (J = false, r === e.length - 1) {
      let v = b(R(s), m);
      _.push(a(o, v)), M.push(l(o, v));
      continue;
    }
    let oe = b(R(K(re, s, Y)), m);
    O = a(o, oe), (r <= 1 || A(z, O) > te) && (_.push(O), z = O), E = l(o, oe), (r <= 1 || A(F, E) > te) && (M.push(E), F = E), H = i, X = s;
  }
  let P = e[0].point.slice(0, 2), k = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : l(e[0].point, [1, 1]), Q = [], N = [];
  if (e.length === 1) {
    if (!(g || T) || D$1) {
      let r = ee(P, G(R(a(P, k))), -(U || m)), i = [];
      for (let o = 1 / 13, s = o; s <= 1; s += o) i.push(L(r, P, V * 2 * s));
      return i;
    }
  } else {
    if (!(g || T && e.length === 1)) if (S) for (let i = 1 / 13, o = i; o <= 1; o += i) {
      let s = L(M[0], P, V * o);
      Q.push(s);
    }
    else {
      let i = a(_[0], M[0]), o = b(i, 0.5), s = b(i, 0.51);
      Q.push(a(P, o), a(P, s), l(P, s), l(P, o));
    }
    let r = R(se(e[e.length - 1].vector));
    if (T || g && e.length === 1) N.push(k);
    else if (q) {
      let i = ee(k, r, m);
      for (let o = 1 / 29, s = o; s < 1; s += o) N.push(L(i, k, V * 3 * s));
    } else N.push(l(k, b(r, m)), l(k, b(r, m * 0.99)), a(k, b(r, m * 0.99)), a(k, b(r, m)));
  }
  return _.concat(N, M.reverse(), Q);
}
function me(e, t = {}) {
  var q;
  let { streamline: u = 0.5, size: x = 16, last: h2 = false } = t;
  if (e.length === 0) return [];
  let y = 0.15 + (1 - u) * 0.85, n = Array.isArray(e[0]) ? e : e.map(({ x: c, y: p, pressure: g = 0.5 }) => [
    c,
    p,
    g
  ]);
  if (n.length === 2) {
    let c = n[1];
    n = n.slice(0, -1);
    for (let p = 1; p < 5; p++) n.push(K(n[0], c, p / 4));
  }
  n.length === 1 && (n = [...n, [...l(n[0], [1, 1]), ...n[0].slice(2)]]);
  let f = [{
    point: [n[0][0], n[0][1]],
    pressure: n[0][2] >= 0 ? n[0][2] : 0.25,
    vector: [1, 1],
    distance: 0,
    runningLength: 0
  }], d = false, D$1 = 0, S = f[0], j = n.length - 1;
  for (let c = 1; c < n.length; c++) {
    let p = h2 && c === j ? n[c].slice(0, 2) : K(S.point, n[c], y);
    if (ue(S.point, p)) continue;
    let g = ie(p, S.point);
    if (D$1 += g, c < j && !d) {
      if (D$1 < x) continue;
      d = true;
    }
    S = {
      point: p,
      pressure: n[c][2] >= 0 ? n[c][2] : 0.5,
      vector: G(a(S.point, p)),
      distance: g,
      runningLength: D$1
    }, f.push(S);
  }
  return f[0].vector = ((q = f[1]) == null ? void 0 : q.vector) || [0, 0], f;
}
function ae(e, t = {}) {
  return ce(me(e, t), t);
}
var StylusModel = class StylusModel2 extends BaseModel {
  constructor(..._args) {
    super(..._args);
    this.points = [];
  }
  onStart(point) {
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.points = [point];
    this.attr("fill", this.brush.color);
    this.attr("d", this.getSvgData(this.points));
    return this.el;
  }
  onMove(point) {
    if (!this.el) this.onStart(point);
    if (this.points[this.points.length - 1] !== point) this.points.push(point);
    this.attr("d", this.getSvgData(this.points));
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path) return false;
    return true;
  }
  getSvgData(points) {
    return StylusModel2.getSvgData(points, this.brush);
  }
  static getSvgData(points, brush) {
    const stroke = ae(points, {
      size: brush.size,
      thinning: 0.9,
      simulatePressure: false,
      start: { taper: 5 },
      end: { taper: 5 },
      ...brush.stylusOptions
    });
    if (!stroke.length) return "";
    const d = stroke.reduce((acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    }, [
      "M",
      ...stroke[0],
      "Q"
    ]);
    d.push("Z");
    return d.map((i) => typeof i === "number" ? i.toFixed(2) : i).join(" ");
  }
};
function createModels(drauu) {
  return {
    draw: new DrawModel(drauu),
    stylus: new StylusModel(drauu),
    line: new LineModel(drauu),
    rectangle: new RectModel(drauu),
    ellipse: new EllipseModel(drauu),
    eraseLine: new EraserModel(drauu)
  };
}
var Drauu = class {
  constructor(options = {}) {
    this.options = options;
    this.el = null;
    this.svgPoint = null;
    this.eventEl = null;
    this.shiftPressed = false;
    this.altPressed = false;
    this.drawing = false;
    this._emitter = createNanoEvents();
    this._originalPointerId = null;
    this._models = createModels(this);
    this._opStack = [];
    this._opIndex = 0;
    this._disposables = [];
    this._elements = [];
    if (!this.options.brush) this.options.brush = {
      color: "black",
      size: 3,
      mode: "stylus"
    };
    if (options.el) this.mount(options.el, options.eventTarget, options.window);
  }
  get model() {
    return this._models[this.mode];
  }
  get mounted() {
    return !!this.el;
  }
  get mode() {
    return this.options.brush.mode || "stylus";
  }
  set mode(v) {
    this._models[this.mode].onUnselected();
    this.options.brush.mode = v;
    this.model.onSelected(this.el);
  }
  get brush() {
    return this.options.brush;
  }
  set brush(v) {
    this.options.brush = v;
  }
  resolveSelector(selector) {
    if (typeof selector === "string") return document.querySelector(selector);
    else return selector || null;
  }
  mount(el, eventEl, listenWindow = window) {
    if (this.el) throw new Error("[drauu] already mounted, unmount previous target first");
    this.el = this.resolveSelector(el);
    if (!this.el) throw new Error("[drauu] target element not found");
    if (this.el.tagName.toLocaleLowerCase() !== "svg") throw new Error("[drauu] can only mount to a SVG element");
    if (!this.el.createSVGPoint) throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");
    this.svgPoint = this.el.createSVGPoint();
    const target = this.resolveSelector(eventEl) || this.el;
    const start = this.eventStart.bind(this);
    const move = this.eventMove.bind(this);
    const end = this.eventEnd.bind(this);
    const keyboard = this.eventKeyboard.bind(this);
    const touchMove = this.touchMove.bind(this);
    target.addEventListener("pointerdown", start, { passive: false });
    listenWindow.addEventListener("pointermove", move, { passive: false });
    listenWindow.addEventListener("pointerup", end, { passive: false });
    listenWindow.addEventListener("pointercancel", end, { passive: false });
    listenWindow.addEventListener("keydown", keyboard, false);
    listenWindow.addEventListener("keyup", keyboard, false);
    listenWindow.addEventListener("touchmove", touchMove, { passive: false });
    this._disposables.push(() => {
      target.removeEventListener("pointerdown", start);
      listenWindow.removeEventListener("pointermove", move);
      listenWindow.removeEventListener("pointerup", end);
      listenWindow.removeEventListener("pointercancel", end);
      listenWindow.removeEventListener("keydown", keyboard, false);
      listenWindow.removeEventListener("keyup", keyboard, false);
      listenWindow.removeEventListener("touchmove", touchMove);
    });
    this._emitter.emit("mounted");
  }
  unmount() {
    this._disposables.forEach((fn) => fn());
    this._disposables.length = 0;
    this._elements.length = 0;
    this.el = null;
    this._emitter.emit("unmounted");
  }
  on(type, fn) {
    return this._emitter.on(type, fn);
  }
  undo() {
    if (!this.canUndo() || this.drawing) return false;
    this._opStack[--this._opIndex].undo();
    this._emitter.emit("changed");
    return true;
  }
  redo() {
    if (!this.canRedo() || this.drawing) return false;
    this._opStack[this._opIndex++].redo();
    this._emitter.emit("changed");
    return true;
  }
  canRedo() {
    return this._opIndex < this._opStack.length;
  }
  canUndo() {
    return this._opIndex > 0;
  }
  eventMove(event) {
    if (!this.acceptsInput(event) || !this.drawing) return;
    if (this.model._eventMove(event)) {
      event.stopPropagation();
      event.preventDefault();
      this._emitter.emit("changed");
    }
  }
  eventStart(event) {
    if (!this.acceptsInput(event)) return;
    event.stopPropagation();
    event.preventDefault();
    if (this._currentNode) this.cancel();
    this.drawing = true;
    this._originalPointerId = event.pointerId;
    this._emitter.emit("start");
    this._currentNode = this.model._eventDown(event);
    if (this._currentNode && this.mode !== "eraseLine") this.el.appendChild(this._currentNode);
    this._emitter.emit("changed");
  }
  eventEnd(event) {
    if (!this.acceptsInput(event) || !this.drawing) return;
    const result = this.model._eventUp(event);
    if (!result) this.cancel();
    else if (result === true) {
      const el = this._currentNode;
      if (el) {
        this._appendNode(el);
        this.commit({
          undo: () => this._removeNode(el),
          redo: () => this._restoreNode(el)
        });
      }
    } else this.commit(result);
    this.drawing = false;
    this._emitter.emit("end");
    this._emitter.emit("changed");
    this._originalPointerId = null;
  }
  touchMove(event) {
    if (Array.from(event.touches).some((touch) => touch.touchType === "stylus" && touch.identifier === this._originalPointerId)) event.preventDefault();
  }
  acceptsInput(event) {
    return (!this.options.acceptsInputTypes || this.options.acceptsInputTypes.includes(event.pointerType)) && !(this._originalPointerId && this._originalPointerId !== event.pointerId);
  }
  eventKeyboard(event) {
    if (this.shiftPressed === event.shiftKey && this.altPressed === event.altKey) return;
    this.shiftPressed = event.shiftKey;
    this.altPressed = event.altKey;
    if (this.model.point) {
      if (this.model.onMove(this.model.point)) this._emitter.emit("changed");
    }
  }
  commit(op) {
    this._opStack.length = this._opIndex;
    this._opStack.push(op);
    this._opIndex++;
    const node = this._currentNode;
    this._currentNode = void 0;
    this._emitter.emit("committed", node);
  }
  clear() {
    this._opStack.length = 0;
    this._opIndex = 0;
    this._elements = [];
    this.cancel();
    this.el.innerHTML = "";
    this._emitter.emit("changed");
  }
  cancel() {
    if (this._currentNode) {
      this.el.removeChild(this._currentNode);
      this._currentNode = void 0;
      this._emitter.emit("canceled");
    }
  }
  dump() {
    return this.el.innerHTML;
  }
  load(svg) {
    this.clear();
    this.el.innerHTML = svg;
  }
  /**
  * @internal
  */
  _appendNode(node) {
    const last = this._elements.at(-1);
    if (last) last.after(node);
    else this.el.append(node);
    const index = this._elements.push(node) - 1;
    node.dataset.drauu_index = index.toString();
  }
  /**
  * @internal
  */
  _removeNode(node) {
    node.remove();
    this._elements[+node.dataset.drauu_index] = null;
  }
  /**
  * @internal
  */
  _restoreNode(node) {
    const index = +node.dataset.drauu_index;
    this._elements[index] = node;
    for (let i = index - 1; i >= 0; i--) {
      const last = this._elements[i];
      if (last) {
        last.after(node);
        return;
      }
    }
    this.el.prepend(node);
  }
};
function createDrauu(options) {
  return new Drauu(options);
}
const useDrawings = createSharedComposable(() => {
  const { currentSlideNo, isPresenter } = useNav();
  const brushColors = [
    "#ff595e",
    "#ffca3a",
    "#8ac926",
    "#1982c4",
    "#6a4c93",
    "#ffffff",
    "#000000"
  ];
  const drawingEnabled = useLocalStorage("slidev-drawing-enabled", false);
  const drawingPinned = useLocalStorage("slidev-drawing-pinned", false);
  const brush = toReactive(useLocalStorage("slidev-drawing-brush", {
    color: brushColors[0],
    size: 4,
    mode: "stylus"
  }));
  const isDrawing = ref(false);
  const canUndo = ref(false);
  const canRedo = ref(false);
  const canClear = ref(false);
  const _mode = ref("stylus");
  const syncUp = computed(() => configs.drawings.syncAll || isPresenter.value);
  let disableDump = false;
  const drawingMode = computed({
    get() {
      return _mode.value;
    },
    set(v) {
      _mode.value = v;
      if (v === "arrow") {
        drauu.mode = "line";
        brush.arrowEnd = true;
      } else {
        drauu.mode = v;
        brush.arrowEnd = false;
      }
    }
  });
  const drauuOptions = reactive({
    brush,
    acceptsInputTypes: computed(() => drawingEnabled.value && (!configs.drawings.presenterOnly || isPresenter.value) ? void 0 : ["pen"]),
    coordinateTransform: false
  });
  const drauu = markRaw(createDrauu(drauuOptions));
  function clearDrauu() {
    drauu.clear();
    if (syncUp.value)
      patchDrawingState(currentSlideNo.value, "");
  }
  function updateState() {
    canRedo.value = drauu.canRedo();
    canUndo.value = drauu.canUndo();
    canClear.value = !!drauu.el?.children.length;
  }
  function loadCanvas(page) {
    disableDump = true;
    const data2 = drawingState[page || currentSlideNo.value];
    if (data2 != null)
      drauu.load(data2);
    else
      drauu.clear();
    updateState();
    disableDump = false;
  }
  drauu.on("changed", () => {
    updateState();
    if (!disableDump) {
      const dump = drauu.dump();
      const key = currentSlideNo.value;
      if ((drawingState[key] || "") !== dump && syncUp.value)
        patchDrawingState(key, drauu.dump());
    }
  });
  onPatchDrawingState((state2) => {
    disableDump = true;
    if (state2[currentSlideNo.value] != null)
      drauu.load(state2[currentSlideNo.value] || "");
    disableDump = false;
    updateState();
  });
  nextTick(() => {
    watch(currentSlideNo, () => {
      if (!drauu.mounted)
        return;
      loadCanvas();
    }, { immediate: true });
  });
  drauu.on("start", () => isDrawing.value = true);
  drauu.on("end", () => isDrawing.value = false);
  window.addEventListener("keydown", (e) => {
    if (!drawingEnabled.value || isInputting.value)
      return;
    const noModifier = !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey;
    let handled = true;
    if (e.code === "KeyZ" && (e.ctrlKey || e.metaKey)) {
      if (e.shiftKey)
        drauu.redo();
      else
        drauu.undo();
    } else if (e.code === "Escape") {
      drawingEnabled.value = false;
    } else if (e.code === "KeyL" && noModifier) {
      drawingMode.value = "line";
    } else if (e.code === "KeyA" && noModifier) {
      drawingMode.value = "arrow";
    } else if (e.code === "KeyS" && noModifier) {
      drawingMode.value = "stylus";
    } else if (e.code === "KeyR" && noModifier) {
      drawingMode.value = "rectangle";
    } else if (e.code === "KeyE" && noModifier) {
      drawingMode.value = "ellipse";
    } else if (e.code === "KeyC" && noModifier) {
      clearDrauu();
    } else if (e.code.startsWith("Digit") && noModifier && +e.code[5] <= brushColors.length) {
      brush.color = brushColors[+e.code[5] - 1];
    } else {
      handled = false;
    }
    if (handled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, false);
  return {
    brush,
    brushColors,
    canClear,
    canRedo,
    canUndo,
    clear: clearDrauu,
    drauu,
    drauuOptions,
    drawingEnabled,
    drawingMode,
    drawingPinned,
    drawingState,
    isDrawing,
    loadCanvas
  };
});
const TIMEOUT = 2e3;
function useHideCursorIdle(enabled) {
  const shouldHide = computed(() => enabled.value && hideCursorIdle.value);
  function hide() {
    document.body.style.cursor = "none";
  }
  function show() {
    document.body.style.cursor = "";
  }
  let timer = null;
  watch(
    shouldHide,
    (value) => {
      if (!value) {
        show();
        if (timer) {
          clearTimeout(timer);
        }
        timer = null;
      }
    }
  );
  onScopeDispose(() => {
    show();
    if (timer) {
      clearTimeout(timer);
    }
    timer = null;
  });
  useEventListener(
    document.body,
    ["pointermove", "pointerdown"],
    () => {
      show();
      if (timer)
        clearTimeout(timer);
      if (shouldHide.value) {
        timer = setTimeout(hide, TIMEOUT);
      } else {
        timer = null;
      }
    },
    { passive: true }
  );
}
function useSwipeControls(root) {
  const { next, nextSlide, prev, prevSlide } = useNav();
  const { isDrawing } = useDrawings();
  const swipeBegin = ref(0);
  const { direction, distanceX, distanceY } = usePointerSwipe(root, {
    pointerTypes: ["touch"],
    onSwipeStart() {
      if (isDrawing.value)
        return;
      swipeBegin.value = timestamp();
    },
    onSwipeEnd() {
      if (!swipeBegin.value)
        return;
      if (isDrawing.value)
        return;
      const x = Math.abs(distanceX.value);
      const y = Math.abs(distanceY.value);
      if (x / window.innerWidth > 0.3 || x > 75) {
        if (direction.value === "left")
          next();
        else
          prev();
      } else if (y / window.innerHeight > 0.4 || y > 200) {
        if (direction.value === "down")
          prevSlide();
        else
          nextSlide();
      }
    }
  });
}
function useWakeLock() {
  const { request, release } = useWakeLock$1();
  watch(
    wakeLockEnabled,
    (enabled) => {
      if (enabled)
        request("screen");
      else
        release();
    },
    { immediate: true }
  );
}
const setups$1 = [Object.values([])[0], Object.values([])[0]].filter(Boolean);
let items;
const setupContextMenu = () => {
  if (items)
    return items;
  const {
    next,
    nextSlide,
    prev,
    prevSlide,
    hasNext,
    hasPrev,
    currentPage,
    total,
    isPresenter,
    enterPresenter,
    exitPresenter,
    isEmbedded,
    isPresenterAvailable
  } = useNav();
  const { drawingEnabled } = useDrawings();
  const {
    isFullscreen,
    toggle: toggleFullscreen
  } = fullscreen;
  return items = setups$1.reduce(
    (items2, fn) => fn(items2),
    computed(() => [
      {
        small: true,
        icon: "i-carbon:arrow-left",
        label: "Previous Click",
        action: prev,
        disabled: !hasPrev.value
      },
      {
        small: true,
        icon: "i-carbon:arrow-right",
        label: "Next Click",
        action: next,
        disabled: !hasNext.value
      },
      {
        small: true,
        icon: "i-carbon:arrow-up",
        label: "Previous Slide",
        action: prevSlide,
        disabled: currentPage.value <= 1
      },
      {
        small: true,
        icon: "i-carbon:arrow-down",
        label: "Next Slide",
        action: nextSlide,
        disabled: currentPage.value >= total.value
      },
      "separator",
      {
        icon: "i-carbon:text-annotation-toggle",
        // IconTextNotationToggle,
        label: showEditor.value ? "Hide editor" : "Show editor",
        action: () => showEditor.value = !showEditor.value,
        show: false
      },
      {
        icon: "i-carbon:pen",
        label: drawingEnabled.value ? "Hide drawing toolbar" : "Show drawing toolbar",
        action: () => drawingEnabled.value = !drawingEnabled.value
      },
      {
        icon: "i-carbon:apps",
        label: "Show slide overview",
        action: toggleOverview
      },
      isPresenter.value && {
        icon: "i-carbon:presentation-file",
        label: "Exit Presenter Mode",
        action: exitPresenter
      },
      false,
      !isEmbedded.value && {
        icon: isFullscreen.value ? "i-carbon:minimize" : "i-carbon:maximize",
        label: isFullscreen.value ? "Close fullscreen" : "Enter fullscreen",
        action: toggleFullscreen
      }
    ].filter(Boolean))
  );
};
const currentContextMenu = shallowRef(null);
function openContextMenu(x, y) {
  currentContextMenu.value = {
    x,
    y,
    items: setupContextMenu()
  };
}
function closeContextMenu() {
  currentContextMenu.value = null;
}
function onContextMenu(ev) {
  if (configs.contextMenu !== true && configs.contextMenu != null && configs.contextMenu !== mode)
    return;
  if (ev.shiftKey || ev.defaultPrevented)
    return;
  const { isEmbedded } = useNav();
  if (isEmbedded.value)
    return;
  openContextMenu(ev.pageX, ev.pageY);
  ev.preventDefault();
  ev.stopPropagation();
}
const _hoisted_1$l = ["title", "onClick"];
const _hoisted_2$a = ["onClick"];
const _hoisted_3$6 = { class: "mx-auto flex" };
const _hoisted_4$6 = { key: 0 };
const _hoisted_5$4 = { class: "w-full text-xs p2" };
const _hoisted_6$2 = { class: "text-main text-opacity-50!" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "ContextMenu",
  setup(__props) {
    const container = ref();
    onClickOutside(container, closeContextMenu);
    useEventListener(document, "mousedown", (ev) => {
      if (ev.buttons & 2)
        closeContextMenu();
    }, {
      passive: true,
      capture: true
    });
    const isExplicitEnabled = computed(() => configs.contextMenu != null);
    const windowFocus = useWindowFocus();
    watch(windowFocus, (hasFocus) => {
      if (!hasFocus)
        closeContextMenu();
    });
    const { width, height } = useElementBounding(container);
    const left = computed(() => {
      const x = currentContextMenu.value?.x;
      if (!x)
        return 0;
      if (x + width.value > windowSize.width.value)
        return windowSize.width.value - width.value;
      return x;
    });
    const top = computed(() => {
      const y = currentContextMenu.value?.y;
      if (!y)
        return 0;
      if (y + height.value > windowSize.height.value)
        return windowSize.height.value - height.value;
      return y;
    });
    return (_ctx, _cache) => {
      return unref(currentContextMenu) ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          ref_key: "container",
          ref: container,
          style: normalizeStyle(`left:${left.value}px;top:${top.value}px`),
          class: "slidev-glass-effect fixed z-context-menu w-60 flex flex-wrap justify-items-start p-1 animate-fade-in animate-duration-100 rounded-md shadow overflow-hidden select-none",
          onContextmenu: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"])),
          onClick: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(closeContextMenu) && unref(closeContextMenu)(...args))
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(currentContextMenu).items.value, (item, index) => {
              return openBlock(), createElementBlock(
                Fragment,
                { key: index },
                [
                  item === "separator" ? (openBlock(), createElementBlock("div", {
                    key: index,
                    class: "w-full my1 border-t border-main"
                  })) : item.show ?? true ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 1 },
                    [
                      item.small ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(["p-2 w-[40px] h-[40px] inline-block text-center cursor-pointer rounded flex", item.disabled ? `op40` : `hover:bg-active`]),
                        title: item.label,
                        onClick: item.action
                      }, [
                        typeof item.icon === "string" ? (openBlock(), createElementBlock(
                          "div",
                          {
                            key: 0,
                            class: normalizeClass([item.icon, "text-1.2em ma"])
                          },
                          null,
                          2
                          /* CLASS */
                        )) : (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 1 }))
                      ], 10, _hoisted_1$l)) : (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(["w-full grid grid-cols-[35px_1fr] p-2 pl-0 cursor-pointer rounded", item.disabled ? `op40` : `hover:bg-active`]),
                        onClick: item.action
                      }, [
                        createBaseVNode("div", _hoisted_3$6, [
                          typeof item.icon === "string" ? (openBlock(), createElementBlock(
                            "div",
                            {
                              key: 0,
                              class: normalizeClass([item.icon, "text-1.2em ma"])
                            },
                            null,
                            2
                            /* CLASS */
                          )) : (openBlock(), createBlock(resolveDynamicComponent(item.icon), { key: 1 }))
                        ]),
                        typeof item.label === "string" ? (openBlock(), createElementBlock(
                          "div",
                          _hoisted_4$6,
                          toDisplayString(item.label),
                          1
                          /* TEXT */
                        )) : (openBlock(), createBlock(resolveDynamicComponent(item.label), { key: 1 }))
                      ], 10, _hoisted_2$a))
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          !isExplicitEnabled.value ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              _cache[6] || (_cache[6] = createBaseVNode(
                "div",
                { class: "w-full my1 border-t border-main" },
                null,
                -1
                /* CACHED */
              )),
              createBaseVNode("div", _hoisted_5$4, [
                createBaseVNode("div", _hoisted_6$2, [
                  _cache[3] || (_cache[3] = createTextVNode(
                    " Hold ",
                    -1
                    /* CACHED */
                  )),
                  _cache[4] || (_cache[4] = createBaseVNode(
                    "kbd",
                    { class: "border px1 py0.5 border-main rounded text-primary" },
                    "Shift",
                    -1
                    /* CACHED */
                  )),
                  _cache[5] || (_cache[5] = createTextVNode(
                    " and right click to open the native context menu ",
                    -1
                    /* CACHED */
                  )),
                  createCommentVNode("v-if", true)
                ])
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ],
        36
        /* STYLE, NEED_HYDRATION */
      )) : createCommentVNode("v-if", true);
    };
  }
});
const _hoisted_1$k = { key: 0 };
const _hoisted_2$9 = { key: 1 };
const _hoisted_3$5 = { key: 2 };
const _hoisted_4$5 = { key: 3 };
const _hoisted_5$3 = { key: 4 };
const _hoisted_6$1 = { key: 5 };
const _hoisted_7 = { key: 6 };
const _hoisted_8 = { key: 7 };
const _hoisted_9 = { key: 8 };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "title-renderer",
  props: {
    no: {}
  },
  setup(__props) {
    const props = __props;
    const { $page } = useSlideContext();
    const no = computed(() => +(props.no ?? $page.value));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        no.value === 1 ? (openBlock(), createElementBlock("p", _hoisted_1$k, "CanvasObs: Structured Spatial Observation for Agent Editing on 2D Infinite Canvases")) : no.value === 2 ? (openBlock(), createElementBlock("p", _hoisted_2$9, "AI agents can edit a 2D infinite canvas")) : no.value === 3 ? (openBlock(), createElementBlock("p", _hoisted_3$5, "Visible appearance does not reveal all canvas state")) : no.value === 4 ? (openBlock(), createElementBlock("p", _hoisted_4$5, "CanvasObs exposes structured canvas state")) : no.value === 5 ? (openBlock(), createElementBlock("p", _hoisted_5$3, "Case study: preparing a team handoff report")) : no.value === 6 ? (openBlock(), createElementBlock("p", _hoisted_6$1, "Experiment")) : no.value === 7 ? (openBlock(), createElementBlock("p", _hoisted_7, "Better observation improves target selection")) : no.value === 8 ? (openBlock(), createElementBlock("p", _hoisted_8, "Takeaway")) : no.value === 9 ? (openBlock(), createElementBlock("p", _hoisted_9, "Thank you")) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max2) => `Pattern length exceeds max of ${max2}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a2, b2) => a2.score === b2.score ? a2.idx < b2.idx ? -1 : 1 : a2.score < b2.score ? -1 : 1
};
const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
const SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data2, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data2;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
const stripDiacritics = String.prototype.normalize ? ((str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((str) => str);
class BitapSearch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
}
class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
}
class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
}
class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
}
class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
}
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
const searchersLen = searchers.length;
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
const LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
const KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key, norm: norm2, score }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data2) {
  const matches = result.matches;
  data2.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data2.matches.push(obj);
  });
}
function transformScore(result, data2) {
  data2.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data2 = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data2);
      });
    }
    return data2;
  });
}
class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) ;
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text, i: idx, n: norm2 }) => {
      if (!isDefined(text)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({ score, key, value: text, norm: norm2, indices });
      }
    }
    return matches;
  }
}
Fuse.version = "7.1.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
const _hoisted_1$j = {
  class: "bg-main transform",
  shadow: "~",
  p: "x-4 y-2",
  border: "~ transparent rounded dark:main"
};
const _hoisted_2$8 = ["value", "disabled"];
const _hoisted_3$4 = {
  table: "",
  "w-full": "",
  "border-collapse": ""
};
const _hoisted_4$4 = ["border", "onClick"];
const _hoisted_5$2 = {
  "text-right": "",
  op50: "",
  "text-sm": "",
  "table-cell": "",
  "py-2": "",
  "pl-4": "",
  "pr-3": "",
  "vertical-middle": ""
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "Goto",
  setup(__props) {
    const container = ref();
    const input = ref();
    const list = ref();
    const items2 = ref();
    const text = ref("");
    const selectedIndex = ref(0);
    const { go, slides: slides2 } = useNav();
    function notNull(value) {
      return value !== null && value !== void 0;
    }
    const fuse = computed(() => new Fuse(slides2.value.map((i) => i.meta?.slide).filter(notNull), {
      keys: ["no", "title"],
      threshold: 0.3,
      shouldSort: true,
      minMatchCharLength: 1
    }));
    const path = computed(() => text.value.startsWith("/") ? text.value.substring(1) : text.value);
    const result = computed(() => fuse.value.search(path.value).map((result2) => result2.item));
    const valid = computed(() => !!result.value.length);
    function goTo() {
      if (valid.value) {
        const item = result.value.at(selectedIndex.value || 0);
        if (item)
          go(item.no);
      }
      close();
    }
    function close() {
      text.value = "";
      showGotoDialog.value = false;
    }
    function focusDown(event) {
      event.preventDefault();
      selectedIndex.value++;
      if (selectedIndex.value >= result.value.length)
        selectedIndex.value = 0;
      scroll();
    }
    function focusUp(event) {
      event.preventDefault();
      selectedIndex.value--;
      if (selectedIndex.value <= -2)
        selectedIndex.value = result.value.length - 1;
      scroll();
    }
    function scroll() {
      const item = items2.value?.[selectedIndex.value];
      if (item && list.value) {
        if (item.offsetTop + item.offsetHeight > list.value.offsetHeight + list.value.scrollTop) {
          list.value.scrollTo({
            behavior: "smooth",
            top: item.offsetTop + item.offsetHeight - list.value.offsetHeight + 1
          });
        } else if (item.offsetTop < list.value.scrollTop) {
          list.value.scrollTo({
            behavior: "smooth",
            top: item.offsetTop
          });
        }
      }
    }
    function updateText(event) {
      selectedIndex.value = 0;
      text.value = event.target.value;
    }
    function select(no) {
      go(no);
      close();
    }
    watch(showGotoDialog, async (show) => {
      if (show) {
        text.value = "";
        selectedIndex.value = 0;
        setTimeout(() => input.value?.focus(), 0);
      } else {
        input.value?.blur();
      }
    });
    watch(activeElement, () => {
      if (!container.value?.contains(activeElement.value))
        close();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          id: "slidev-goto-dialog",
          ref_key: "container",
          ref: container,
          class: normalizeClass(["fixed right-5 transition-all", unref(showGotoDialog) ? "top-5" : "-top-20"]),
          "w-90": "",
          "max-w-90": "",
          "min-w-90": ""
        },
        [
          createBaseVNode("div", _hoisted_1$j, [
            createBaseVNode("input", {
              id: "slidev-goto-input",
              ref_key: "input",
              ref: input,
              value: text.value,
              type: "text",
              disabled: !unref(showGotoDialog),
              class: normalizeClass(["outline-none bg-transparent", { "text-red-400": !valid.value && text.value }]),
              placeholder: "Goto...",
              onKeydown: [
                withKeys(goTo, ["enter"]),
                withKeys(close, ["escape"]),
                withKeys(focusDown, ["down"]),
                withKeys(focusUp, ["up"])
              ],
              onInput: updateText
            }, null, 42, _hoisted_2$8)
          ]),
          result.value.length > 0 ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              ref_key: "list",
              ref: list,
              class: "autocomplete-list",
              shadow: "~",
              border: "~ transparent rounded dark:main"
            },
            [
              createBaseVNode("ul", _hoisted_3$4, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(result.value, (item, index) => {
                    return openBlock(), createElementBlock("li", {
                      ref_for: true,
                      ref_key: "items",
                      ref: items2,
                      key: item.id,
                      role: "button",
                      tabindex: "0",
                      "cursor-pointer": "",
                      hover: "op100",
                      "table-row": "",
                      "items-center": "",
                      border: index === 0 ? void 0 : "t main",
                      class: normalizeClass(selectedIndex.value === index ? "bg-active op100" : "op80"),
                      onClick: withModifiers(($event) => select(item.no), ["stop", "prevent"])
                    }, [
                      createBaseVNode(
                        "div",
                        _hoisted_5$2,
                        toDisplayString(item.no),
                        1
                        /* TEXT */
                      ),
                      createVNode(unref(_sfc_main$n), {
                        "table-cell": "",
                        "py-2": "",
                        "pr-4": "",
                        "w-full": "",
                        no: item.no
                      }, null, 8, ["no"])
                    ], 10, _hoisted_4$4);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            512
            /* NEED_PATCH */
          )) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      );
    };
  }
});
const Goto = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-429e24b7"]]);
const _imports_0 = "/slides/canvasobs/assets/logo-BYkHSa_O.png";
const _hoisted_1$i = {
  key: 0,
  class: "fixed top-0 bottom-0 left-0 right-0 grid z-modal"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  props: {
    modelValue: {
      default: false
    },
    class: {
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = useVModel(props, "modelValue", emit);
    function onClick() {
      value.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        KeepAlive,
        null,
        [
          unref(value) ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
            createBaseVNode("div", {
              bg: "black opacity-80",
              class: "absolute top-0 bottom-0 left-0 right-0 -z-1",
              onClick: _cache[0] || (_cache[0] = ($event) => onClick())
            }),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(["m-auto rounded-md bg-main shadow", props.class]),
                "dark:border": "~ main"
              },
              [
                renderSlot(_ctx.$slots, "default")
              ],
              2
              /* CLASS */
            )
          ])) : createCommentVNode("v-if", true)
        ],
        1024
        /* DYNAMIC_SLOTS */
      );
    };
  }
});
const _hoisted_1$h = { class: "slidev-info-dialog slidev-layout flex flex-col gap-4 text-base" };
const _hoisted_2$7 = ["innerHTML"];
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "InfoDialog",
  props: {
    modelValue: {
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = useVModel(props, "modelValue", emit);
    const hasInfo = computed(() => typeof configs.info === "string");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$l, {
        modelValue: unref(value),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
        class: "px-6 py-4"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$h, [
            hasInfo.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "mb-4",
              innerHTML: unref(configs).info
            }, null, 8, _hoisted_2$7)) : createCommentVNode("v-if", true),
            _cache[1] || (_cache[1] = createBaseVNode(
              "a",
              {
                href: "https://github.com/slidevjs/slidev",
                target: "_blank",
                class: "!opacity-100 !border-none !text-current"
              },
              [
                createBaseVNode("div", { class: "flex gap-1 children:my-auto" }, [
                  createBaseVNode("div", { class: "opacity-50 text-sm mr-2" }, "Powered by"),
                  createBaseVNode("img", {
                    class: "w-5 h-5",
                    src: _imports_0,
                    alt: "Slidev logo"
                  }),
                  createBaseVNode("div", { style: { "color": "#2082A6" } }, [
                    createBaseVNode("b", null, "Sli"),
                    createTextVNode("dev ")
                  ])
                ])
              ],
              -1
              /* CACHED */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
const min = ref(1);
const max = computed(() => slides.value.length);
const currentOverviewPage = ref(0);
const overviewRowCount = ref(0);
function prevOverviewPage() {
  if (currentOverviewPage.value > min.value)
    currentOverviewPage.value -= 1;
}
function nextOverviewPage() {
  if (currentOverviewPage.value < max.value)
    currentOverviewPage.value += 1;
}
function upOverviewPage() {
  if (currentOverviewPage.value > min.value) {
    let current = currentOverviewPage.value - overviewRowCount.value;
    if (current < min.value)
      current = min.value;
    currentOverviewPage.value = current;
  }
}
function downOverviewPage() {
  if (currentOverviewPage.value < max.value) {
    let current = currentOverviewPage.value + overviewRowCount.value;
    if (current > max.value)
      current = max.value;
    currentOverviewPage.value = current;
  }
}
window.navigator.userAgent.match(/Chrome\/(\d+)/)?.[1];
const data = reactive({});
let onSet = [];
let onPatch = [];
define(data, "$syncUp", true);
define(data, "$syncDown", true);
define(data, "$paused", false);
define(data, "$onSet", (fn) => onSet.push(fn));
define(data, "$onPatch", (fn) => onPatch.push(fn));
randId();
{
  define(data, "$patch", async () => false);
}
const snapshotState = createSyncState(
  data,
  data,
  true
);
window.navigator.userAgent.match(/Chrome\/(\d+)/)?.[1];
class SlideSnapshotManager {
  constructor() {
    this._screenshotSession = null;
  }
  getSnapshot(slideNo, isDark2) {
    const id = slideNo + (isDark2 ? "-dark" : "-light");
    const data2 = snapshotState.state[id];
    if (!data2) {
      return;
    }
    const slide = getSlide(slideNo);
    if (!slide) {
      return;
    }
    if (data2?.revision === slide?.meta.slide.revision) {
      return data2.image;
    }
  }
  async saveSnapshot(slideNo, dataUrl, isDark2) {
    return false;
  }
  async startCapturing(nav) {
    return false;
  }
}
const snapshotManager = new SlideSnapshotManager();
const _hoisted_1$g = ["innerHTML"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DrawingPreview",
  props: {
    page: {}
  },
  setup(__props) {
    const { drawingState: drawingState2 } = useDrawings();
    return (_ctx, _cache) => {
      return unref(drawingState2)[__props.page] ? (openBlock(), createElementBlock("svg", {
        key: 0,
        class: "w-full h-full absolute top-0 pointer-events-none",
        innerHTML: unref(drawingState2)[__props.page]
      }, null, 8, _hoisted_1$g)) : createCommentVNode("v-if", true);
    };
  }
});
const _hoisted_1$f = { class: "sr-only" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "IconButton",
  props: {
    title: {},
    icon: {},
    as: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const type = computed(() => props.as || (props.to ? "router-link" : "button"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(type.value), {
        class: "slidev-icon-btn",
        title: __props.title,
        to: __props.to
      }, {
        default: withCtx(() => [
          createBaseVNode(
            "span",
            _hoisted_1$f,
            toDisplayString(__props.title),
            1
            /* TEXT */
          ),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(__props.icon)
              },
              null,
              2
              /* CLASS */
            )
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["title", "to"]);
    };
  }
});
const _hoisted_1$e = ["id"];
const _hoisted_2$6 = ["id"];
const _hoisted_3$3 = { class: "slidev-slide-container w-full h-full relative" };
const _hoisted_4$3 = ["src"];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SlideContainer",
  props: {
    width: {
      type: Number
    },
    meta: {
      default: () => ({})
    },
    isMain: {
      type: Boolean,
      default: false
    },
    no: {
      type: Number,
      required: false
    },
    useSnapshot: {
      type: Boolean,
      default: false
    },
    contentStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const { isPrintMode } = useNav();
    const container = ref(null);
    const containerSize = useElementSize(container);
    const slideElement = ref(null);
    const width = computed(() => props.width ?? containerSize.width.value);
    const height = computed(() => props.width ? props.width / slideAspect.value : containerSize.height.value);
    const scale = computed(() => {
      if (slideScale.value && !isPrintMode.value)
        return +slideScale.value;
      return Math.min(width.value / slideWidth.value, height.value / slideHeight.value);
    });
    const contentStyle = computed(() => ({
      ...props.contentStyle,
      "height": `${slideHeight.value}px`,
      "width": `${slideWidth.value}px`,
      "--slidev-slide-scale": scale.value
    }));
    const containerStyle = computed(
      () => props.width ? {
        width: `${props.width}px`,
        height: `${props.width / slideAspect.value}px`
      } : {}
    );
    if (props.isMain) {
      const rootStyle = document.documentElement.style;
      watchEffect(() => rootStyle.setProperty("--slidev-slide-scale", scale.value.toString()));
      onUnmounted(() => rootStyle.removeProperty("--slidev-slide-scale"));
    }
    provideLocal(injectionSlideScale, scale);
    provideLocal(injectionSlideElement, slideElement);
    const snapshot = computed(() => {
      if (props.no == null || !props.useSnapshot)
        return void 0;
      return snapshotManager.getSnapshot(props.no, isDark.value);
    });
    return (_ctx, _cache) => {
      return !snapshot.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: __props.isMain ? "slide-container" : void 0,
        ref_key: "container",
        ref: container,
        class: "slidev-slide-container",
        style: normalizeStyle(containerStyle.value)
      }, [
        createBaseVNode("div", {
          id: __props.isMain ? "slide-content" : void 0,
          ref_key: "slideElement",
          ref: slideElement,
          class: "slidev-slide-content",
          style: normalizeStyle(contentStyle.value)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 12, _hoisted_2$6),
        renderSlot(_ctx.$slots, "controls", {}, void 0, true)
      ], 12, _hoisted_1$e)) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" Image Snapshot "),
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("img", {
              src: snapshot.value,
              class: "w-full h-full object-cover",
              style: normalizeStyle(containerStyle.value)
            }, null, 12, _hoisted_4$3),
            _cache[0] || (_cache[0] = createBaseVNode(
              "div",
              {
                absolute: "",
                "bottom-1": "",
                "right-1": "",
                "p0.5": "",
                "text-cyan:75": "",
                "bg-cyan:10": "",
                rounded: "",
                title: "Snapshot"
              },
              [
                createBaseVNode("div", { class: "i-carbon-camera" })
              ],
              -1
              /* CACHED */
            ))
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ));
    };
  }
});
const SlideContainer = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-3444d6f9"]]);
const _hoisted_1$d = { class: "vis2026-footer" };
const _hoisted_2$5 = { class: "deck-page" };
const _sfc_main$g = {
  __name: "global-bottom",
  setup(__props) {
    const { $nav } = useSlideContext();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", _hoisted_1$d, [
        createBaseVNode(
          "span",
          _hoisted_2$5,
          toDisplayString(unref($nav).currentSlideNo),
          1
          /* TEXT */
        ),
        _cache[0] || (_cache[0] = createBaseVNode(
          "span",
          { class: "venue" },
          "VISxGenAI 2026",
          -1
          /* CACHED */
        ))
      ]);
    };
  }
};
const __vite_glob_3_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-95c39d5d"]]);
const GlobalTopComponents = [
  Object.values([])[0],
  Object.values([])[0]
].filter(Boolean);
const GlobalTop = { render: () => GlobalTopComponents.map((comp) => h(comp)) };
const GlobalBottomComponents = [
  Object.values([])[0],
  Object.values([__vite_glob_3_0])[0]
].filter(Boolean);
const GlobalBottom = { render: () => GlobalBottomComponents.map((comp) => h(comp)) };
const SlideTopComponents = [
  Object.values([])[0],
  Object.values([])[0]
].filter(Boolean);
const SlideTop = { render: () => SlideTopComponents.map((comp) => h(comp)) };
const SlideBottomComponents = [
  Object.values([])[0],
  Object.values([])[0]
].filter(Boolean);
const SlideBottom = { render: () => SlideBottomComponents.map((comp) => h(comp)) };
const _hoisted_1$c = ["data-slidev-no", "lang"];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SlideWrapper",
  props: {
    clicksContext: {
      type: Object,
      required: true
    },
    renderContext: {
      type: String,
      default: "slide"
    },
    route: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const zoom = computed(() => props.route.meta?.slide?.frontmatter.zoom ?? 1);
    provideLocal(injectionRoute, props.route);
    provideLocal(injectionFrontmatter, props.route.meta.slide.frontmatter);
    provideLocal(injectionCurrentPage, ref(props.route.no));
    provideLocal(injectionRenderContext, ref(props.renderContext));
    provideLocal(injectionClicksContext, toRef(props, "clicksContext"));
    provideLocal(injectionSlideZoom, zoom);
    const style = computed(() => ({
      "user-select": configs.selectable ? void 0 : "none",
      "--slidev-slide-zoom-scale": zoom.value === 1 ? void 0 : zoom.value
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slidev-no": props.route.no,
        class: normalizeClass(unref(getSlideClass)(__props.route, ["slide", "presenter"].includes(props.renderContext) ? "" : "disable-view-transition")),
        style: normalizeStyle(style.value),
        lang: props.route.meta.slide.frontmatter.lang
      }, [
        createVNode(unref(SlideBottom)),
        (openBlock(), createBlock(resolveDynamicComponent(props.route.component))),
        createVNode(unref(SlideTop))
      ], 14, _hoisted_1$c);
    };
  }
});
const SlideWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-33fd4026"]]);
const _hoisted_1$b = ["onClick"];
const _hoisted_2$4 = { class: "text-green font-bold" };
const _hoisted_3$2 = { class: "opacity-50" };
const _hoisted_4$2 = {
  key: 1,
  class: "opacity-50"
};
const _hoisted_5$1 = { class: "fixed top-4 right-4 z-modal text-gray-400 flex flex-col items-center gap-2" };
const padding = 4 * 16 * 2;
const gap = 2 * 16;
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "QuickOverview",
  setup(__props) {
    const nav = useNav();
    const { currentSlideNo, go: goSlide, slides: slides2 } = nav;
    function close() {
      showOverview.value = false;
    }
    function go(page) {
      goSlide(page);
      close();
    }
    function focus(page) {
      if (page === currentOverviewPage.value)
        return true;
      return false;
    }
    const xs = breakpoints.smaller("xs");
    const sm = breakpoints.smaller("sm");
    const cardWidth = computed(() => {
      if (xs.value)
        return windowSize.width.value - padding;
      else if (sm.value)
        return (windowSize.width.value - padding - gap) / 2;
      return 300;
    });
    const rowCount = computed(() => {
      return Math.floor((windowSize.width.value - padding) / (cardWidth.value + gap));
    });
    const keyboardBuffer = ref("");
    useEventListener("keypress", (e) => {
      if (!showOverview.value) {
        keyboardBuffer.value = "";
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (keyboardBuffer.value) {
          go(+keyboardBuffer.value);
          keyboardBuffer.value = "";
        } else {
          go(currentOverviewPage.value);
        }
        return;
      }
      const num = Number.parseInt(e.key.replace(/\D/g, ""));
      if (Number.isNaN(num)) {
        keyboardBuffer.value = "";
        return;
      }
      if (!keyboardBuffer.value && num === 0)
        return;
      keyboardBuffer.value += String(num);
      if (+keyboardBuffer.value > slides2.value.length) {
        keyboardBuffer.value = "";
        return;
      }
      const extactMatch = slides2.value.findIndex((i) => `/${i.no}` === keyboardBuffer.value);
      if (extactMatch !== -1)
        currentOverviewPage.value = extactMatch + 1;
      if (+keyboardBuffer.value * 10 > slides2.value.length) {
        go(+keyboardBuffer.value);
        keyboardBuffer.value = "";
      }
    });
    watchEffect(() => {
      currentOverviewPage.value = currentSlideNo.value;
      overviewRowCount.value = rowCount.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(Transition, {
            "enter-active-class": "duration-150 ease-out",
            "enter-from-class": "opacity-0 scale-102 !backdrop-blur-0px",
            "leave-active-class": "duration-200 ease-in",
            "leave-to-class": "opacity-0 scale-102 !backdrop-blur-0px"
          }, {
            default: withCtx(() => [
              unref(showOverview) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)] z-modal bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px select-none",
                onClick: close
              }, [
                createBaseVNode(
                  "div",
                  {
                    class: "grid gap-y-4 gap-x-8 w-full",
                    style: normalizeStyle(`grid-template-columns: repeat(auto-fit,minmax(${cardWidth.value}px,1fr))`)
                  },
                  [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(unref(slides2), (route, idx) => {
                        return openBlock(), createElementBlock("div", {
                          key: route.no,
                          class: "relative"
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition", focus(idx + 1) || unref(currentOverviewPage) === idx + 1 ? "border-primary" : "border-main"]),
                            onClick: ($event) => go(route.no)
                          }, [
                            (openBlock(), createBlock(SlideContainer, {
                              key: route.no,
                              no: route.no,
                              "use-snapshot": true,
                              width: cardWidth.value,
                              class: "pointer-events-none"
                            }, {
                              default: withCtx(() => [
                                createVNode(SlideWrapper, {
                                  "clicks-context": unref(createFixedClicks)(route, unref(CLICKS_MAX)),
                                  route,
                                  "render-context": "overview"
                                }, null, 8, ["clicks-context", "route"]),
                                createVNode(_sfc_main$j, {
                                  page: route.no
                                }, null, 8, ["page"])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["no", "width"]))
                          ], 10, _hoisted_1$b),
                          createBaseVNode(
                            "div",
                            {
                              class: "absolute top-0",
                              style: normalizeStyle(`left: ${cardWidth.value + 5}px`)
                            },
                            [
                              keyboardBuffer.value && String(idx + 1).startsWith(keyboardBuffer.value) ? (openBlock(), createElementBlock(
                                Fragment,
                                { key: 0 },
                                [
                                  createBaseVNode(
                                    "span",
                                    _hoisted_2$4,
                                    toDisplayString(keyboardBuffer.value),
                                    1
                                    /* TEXT */
                                  ),
                                  createBaseVNode(
                                    "span",
                                    _hoisted_3$2,
                                    toDisplayString(String(idx + 1).slice(keyboardBuffer.value.length)),
                                    1
                                    /* TEXT */
                                  )
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              )) : (openBlock(), createElementBlock(
                                "span",
                                _hoisted_4$2,
                                toDisplayString(idx + 1),
                                1
                                /* TEXT */
                              ))
                            ],
                            4
                            /* STYLE */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )
              ])) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }),
          withDirectives(createBaseVNode(
            "div",
            _hoisted_5$1,
            [
              createVNode(_sfc_main$i, {
                title: "Close",
                class: "text-2xl",
                onClick: close
              }, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createBaseVNode(
                    "div",
                    { class: "i-carbon:close" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              createCommentVNode("v-if", true),
              createCommentVNode("v-if", true)
            ],
            512
            /* NEED_PATCH */
          ), [
            [vShow, unref(showOverview)]
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Controls",
  setup(__props) {
    const { isEmbedded } = useNav();
    const drawingEnabled = !configs.drawings.presenterOnly && !isEmbedded.value;
    const DrawingControls = shallowRef();
    if (drawingEnabled)
      __vitePreload(() => import("./DrawingControls-Df37tvWX.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0).then((v) => DrawingControls.value = v.default);
    const WebCamera = shallowRef();
    const RecordingDialog = shallowRef();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          DrawingControls.value ? (openBlock(), createBlock(unref(DrawingControls), { key: 0 })) : createCommentVNode("v-if", true),
          createVNode(_sfc_main$e),
          createVNode(Goto),
          WebCamera.value ? (openBlock(), createBlock(unref(WebCamera), { key: 1 })) : createCommentVNode("v-if", true),
          RecordingDialog.value ? (openBlock(), createBlock(unref(RecordingDialog), {
            key: 2,
            modelValue: unref(showRecordingDialog),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(showRecordingDialog) ? showRecordingDialog.value = $event : null)
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
          unref(configs).info ? (openBlock(), createBlock(_sfc_main$k, {
            key: 3,
            modelValue: unref(showInfoDialog),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(showInfoDialog) ? showInfoDialog.value = $event : null)
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
          createVNode(_sfc_main$o)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const CustomNavControls = {
  render: () => []
};
const _hoisted_1$a = {
  key: 0,
  class: "bg-main text-main shadow-xl absolute bottom-10 left-0 z-menu py2",
  border: "~ main rounded-md"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "MenuButton",
  props: {
    modelValue: {
      default: false
    },
    disabled: {
      default: false
    }
  },
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const value = useVModel(props, "modelValue", emit, { passive: true });
    const el = ref();
    onClickOutside(el, () => {
      value.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "el",
          ref: el,
          class: "flex relative"
        },
        [
          createBaseVNode(
            "button",
            {
              class: normalizeClass({ disabled: __props.disabled }),
              onClick: _cache[0] || (_cache[0] = ($event) => value.value = !unref(value))
            },
            [
              renderSlot(_ctx.$slots, "button", {
                class: normalizeClass({ disabled: __props.disabled })
              })
            ],
            2
            /* CLASS */
          ),
          (openBlock(), createBlock(
            KeepAlive,
            null,
            [
              unref(value) ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
                renderSlot(_ctx.$slots, "menu")
              ])) : createCommentVNode("v-if", true)
            ],
            1024
            /* DYNAMIC_SLOTS */
          ))
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});
const _hoisted_1$9 = {
  border: "~ main rounded",
  flex: "~ gap-2 items-center",
  relative: "",
  "h-5": "",
  "w-5": "",
  "p0.5": "",
  "hover:bg-active": "",
  p1: ""
};
const _hoisted_2$3 = ["disabled"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "FormCheckbox",
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean }
  }, {
    "modelValue": { type: Boolean, ...{
      type: Boolean
    } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const value = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode(
          "div",
          {
            "i-ri-check-line": "",
            class: normalizeClass(value.value ? "" : "op0")
          },
          null,
          2
          /* CLASS */
        ),
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          type: "checkbox",
          absolute: "",
          "inset-0": "",
          "opacity-10": "",
          disabled: __props.disabled
        }, null, 8, _hoisted_2$3), [
          [vModelCheckbox, value.value]
        ])
      ]);
    };
  }
});
const _hoisted_1$8 = {
  "w-30": "",
  "h-8": "",
  flex: "~ gap-1 items-center"
};
const _hoisted_2$2 = {
  key: 0,
  "w-1.5": "",
  "h-1.5": "",
  "bg-primary": "",
  rounded: "",
  absolute: "",
  "top-0": "",
  "right--2": ""
};
const _hoisted_3$1 = {
  key: 0,
  "w-1.5": "",
  "h-1.5": "",
  "bg-primary": "",
  rounded: "",
  absolute: "",
  "top-0": "",
  "right--2": ""
};
const _hoisted_4$1 = ["innerHTML"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FormItem",
  props: {
    title: {},
    nested: { type: [Boolean, Number] },
    div: { type: Boolean },
    description: {},
    dot: { type: Boolean }
  },
  emits: ["reset"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function reset() {
      emit("reset");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.div ? "div" : "label"), {
        flex: "~ row gap-2 items-center",
        "select-none": ""
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$8, [
            __props.nested ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                "i-ri-corner-down-right-line": "",
                op40: "",
                style: normalizeStyle(typeof __props.nested === "number" ? { marginLeft: `${__props.nested * 0.5 + 0.5}rem` } : { marginLeft: "0.25rem" })
              },
              null,
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true),
            !__props.description ? (openBlock(), createElementBlock(
              "div",
              {
                key: 1,
                op75: "",
                relative: "",
                onDblclick: reset
              },
              [
                createTextVNode(
                  toDisplayString(__props.title) + " ",
                  1
                  /* TEXT */
                ),
                __props.dot ? (openBlock(), createElementBlock("div", _hoisted_2$2)) : createCommentVNode("v-if", true)
              ],
              32
              /* NEED_HYDRATION */
            )) : (openBlock(), createBlock(unref(Vt), {
              key: 2,
              distance: "10"
            }, {
              popper: withCtx(() => [
                createBaseVNode("div", {
                  "text-sm": "",
                  "min-w-90": "",
                  innerHTML: __props.description
                }, null, 8, _hoisted_4$1)
              ]),
              default: withCtx(() => [
                createBaseVNode(
                  "div",
                  {
                    op75: "",
                    "text-right": "",
                    relative: "",
                    onDblclick: reset
                  },
                  [
                    createTextVNode(
                      toDisplayString(__props.title) + " ",
                      1
                      /* TEXT */
                    ),
                    __props.dot ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : createCommentVNode("v-if", true)
                  ],
                  32
                  /* NEED_HYDRATION */
                )
              ]),
              _: 1
              /* STABLE */
            }))
          ]),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
const _hoisted_1$7 = {
  relative: "",
  "h-22px": ""
};
const _hoisted_2$1 = {
  key: 0,
  "pointer-events-none": "",
  absolute: "",
  "right-1": "",
  "top-0.5": "",
  "text-xs": "",
  op25: ""
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FormSlider",
  props: /* @__PURE__ */ mergeModels({
    max: {},
    min: {},
    step: {},
    unit: {},
    default: {}
  }, {
    "modelValue": {
      type: Number
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const value = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode(
            "div",
            {
              relative: "",
              "h-22px": "",
              "w-60": "",
              "flex-auto": "",
              onDblclick: _cache[1] || (_cache[1] = ($event) => props.default !== void 0 ? value.value = props.default : null)
            },
            [
              withDirectives(createBaseVNode(
                "input",
                mergeProps({
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
                  type: "range",
                  class: "slider"
                }, props, {
                  absolute: "",
                  "bottom-0": "",
                  "left-0": "",
                  "right-0": "",
                  "top-0": "",
                  "z-10": "",
                  "w-full": "",
                  "align-top": ""
                }),
                null,
                16
                /* FULL_PROPS */
              ), [
                [
                  vModelText,
                  value.value,
                  void 0,
                  { number: true }
                ]
              ]),
              props.default != null ? (openBlock(), createElementBlock(
                "span",
                {
                  key: 0,
                  border: "r main",
                  absolute: "",
                  "bottom-0": "",
                  "top-0": "",
                  "h-full": "",
                  "w-1px": "",
                  op75: "",
                  style: normalizeStyle({
                    left: `${(props.default - __props.min) / (__props.max - __props.min) * 100}%`
                  })
                },
                null,
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true)
            ],
            32
            /* NEED_HYDRATION */
          ),
          createBaseVNode("div", _hoisted_1$7, [
            withDirectives(createBaseVNode(
              "input",
              mergeProps({
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
                type: "number"
              }, props, {
                border: "~ main rounded",
                m0: "",
                "w-20": "",
                "bg-gray:5": "",
                pl2: "",
                "align-top": "",
                "text-sm": ""
              }),
              null,
              16
              /* FULL_PROPS */
            ), [
              [
                vModelText,
                value.value,
                void 0,
                { number: true }
              ]
            ]),
            props.unit ? (openBlock(), createElementBlock(
              "span",
              _hoisted_2$1,
              toDisplayString(props.unit),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const predefinedColorMap = {
  error: 0,
  client: 60,
  Light: 60,
  Dark: 240
};
function getHashColorFromString(name, opacity = 1) {
  if (predefinedColorMap[name])
    return getHsla(predefinedColorMap[name], opacity);
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const hue = hash % 360;
  return getHsla(hue, opacity);
}
function getHsla(hue, opacity = 1) {
  const saturation = hue === -1 ? 0 : isDark.value ? 50 : 100;
  const lightness = isDark.value ? 60 : 20;
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
}
const _hoisted_1$6 = ["textContent"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    text: {},
    color: { type: [Boolean, Number], default: true },
    as: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      if (!props.text || props.color === false)
        return {};
      return {
        color: typeof props.color === "number" ? getHsla(props.color) : getHashColorFromString(props.text),
        background: typeof props.color === "number" ? getHsla(props.color, 0.1) : getHashColorFromString(props.text, 0.1)
      };
    });
    const sizeClasses = computed(() => {
      switch (props.size || "sm") {
        case "sm":
          return "px-1.5 text-11px leading-1.6em";
      }
      return "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.as || "span"), {
        "ws-nowrap": "",
        rounded: "",
        class: normalizeClass(sizeClasses.value),
        style: normalizeStyle(style.value)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createBaseVNode("span", {
              textContent: toDisplayString(props.text)
            }, null, 8, _hoisted_1$6)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "style"]);
    };
  }
});
const _hoisted_1$5 = {
  flex: "~ gap-1 items-center",
  rounded: "",
  "bg-gray:4": "",
  p1: "",
  "m--1": ""
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SegmentControl",
  props: {
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(__props.options, (option) => {
            return openBlock(), createBlock(_sfc_main$8, {
              key: option.value,
              class: normalizeClass(["px-2 py-1 text-xs font-mono", option.value === __props.modelValue ? "" : "op50"]),
              color: option.value === __props.modelValue,
              "aria-pressed": option.value === __props.modelValue,
              size: "none",
              text: option.label,
              as: "button",
              onClick: ($event) => _ctx.$emit("update:modelValue", option.value)
            }, null, 8, ["class", "color", "aria-pressed", "text", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
const _hoisted_1$4 = {
  "text-sm": "",
  "select-none": "",
  flex: "~ col gap-1",
  "min-w-30": "",
  px4: ""
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  setup(__props) {
    const { isPresenter } = useNav();
    const { isSupported } = useWakeLock$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_sfc_main$a, {
          title: "Invert",
          dot: unref(viewerCssFilter).invert !== unref(viewerCssFilterDefaults).invert,
          onReset: _cache[1] || (_cache[1] = ($event) => unref(viewerCssFilter).invert = unref(viewerCssFilterDefaults).invert)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$b, {
              modelValue: unref(viewerCssFilter).invert,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(viewerCssFilter).invert = $event)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dot"]),
        createVNode(_sfc_main$a, {
          title: "Brightness",
          dot: unref(viewerCssFilter).brightness !== unref(viewerCssFilterDefaults).brightness,
          onReset: _cache[3] || (_cache[3] = ($event) => unref(viewerCssFilter).brightness = unref(viewerCssFilterDefaults).brightness)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              modelValue: unref(viewerCssFilter).brightness,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(viewerCssFilter).brightness = $event),
              max: 1.5,
              min: 0.5,
              step: 0.02,
              default: unref(viewerCssFilterDefaults).brightness
            }, null, 8, ["modelValue", "default"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dot"]),
        createVNode(_sfc_main$a, {
          title: "Contrast",
          dot: unref(viewerCssFilter).contrast !== unref(viewerCssFilterDefaults).contrast,
          onReset: _cache[5] || (_cache[5] = ($event) => unref(viewerCssFilter).contrast = unref(viewerCssFilterDefaults).contrast)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              modelValue: unref(viewerCssFilter).contrast,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(viewerCssFilter).contrast = $event),
              max: 1.5,
              min: 0.5,
              step: 0.02,
              default: unref(viewerCssFilterDefaults).contrast
            }, null, 8, ["modelValue", "default"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dot"]),
        createVNode(_sfc_main$a, {
          title: "Saturation",
          dot: unref(viewerCssFilter).saturate !== unref(viewerCssFilterDefaults).saturate,
          onReset: _cache[7] || (_cache[7] = ($event) => unref(viewerCssFilter).saturate = unref(viewerCssFilterDefaults).saturate)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              modelValue: unref(viewerCssFilter).saturate,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(viewerCssFilter).saturate = $event),
              max: 1.5,
              min: 0.5,
              step: 0.02,
              default: unref(viewerCssFilterDefaults).saturate
            }, null, 8, ["modelValue", "default"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dot"]),
        createVNode(_sfc_main$a, {
          title: "Sepia",
          dot: unref(viewerCssFilter).sepia !== unref(viewerCssFilterDefaults).sepia,
          onReset: _cache[9] || (_cache[9] = ($event) => unref(viewerCssFilter).sepia = unref(viewerCssFilterDefaults).sepia)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              modelValue: unref(viewerCssFilter).sepia,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(viewerCssFilter).sepia = $event),
              max: 2,
              min: -2,
              step: 0.02,
              default: unref(viewerCssFilterDefaults).sepia
            }, null, 8, ["modelValue", "default"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dot"]),
        createVNode(_sfc_main$a, {
          title: "Hue Rotate",
          dot: unref(viewerCssFilter).hueRotate !== unref(viewerCssFilterDefaults).hueRotate,
          onReset: _cache[11] || (_cache[11] = ($event) => unref(viewerCssFilter).hueRotate = unref(viewerCssFilterDefaults).hueRotate)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              modelValue: unref(viewerCssFilter).hueRotate,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(viewerCssFilter).hueRotate = $event),
              max: 180,
              min: -180,
              step: 0.1,
              default: unref(viewerCssFilterDefaults).hueRotate
            }, null, 8, ["modelValue", "default"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dot"]),
        _cache[15] || (_cache[15] = createBaseVNode(
          "div",
          { class: "h-1px opacity-5 bg-current w-full my2" },
          null,
          -1
          /* CACHED */
        )),
        !unref(isPresenter) ? (openBlock(), createBlock(_sfc_main$a, {
          key: 0,
          title: "Slide Scale"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$7, {
              modelValue: unref(slideScale),
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isRef(slideScale) ? slideScale.value = $event : null),
              options: [
                { label: "Fit", value: 0 },
                { label: "1:1", value: 1 }
              ]
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        unref(isSupported) ? (openBlock(), createBlock(_sfc_main$a, {
          key: 1,
          title: "Wake Lock"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$b, {
              modelValue: unref(wakeLockEnabled),
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isRef(wakeLockEnabled) ? wakeLockEnabled.value = $event : null)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        !unref(isPresenter) ? (openBlock(), createBlock(_sfc_main$a, {
          key: 2,
          title: "Hide Idle Cursor"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$b, {
              modelValue: unref(hideCursorIdle),
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => isRef(hideCursorIdle) ? hideCursorIdle.value = $event : null)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
const _sfc_main$5 = {};
const _hoisted_1$3 = { class: "w-1px opacity-10 bg-current m-1 lg:m-2" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$3);
}
const VerticalDivider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render]]);
const _hoisted_1$2 = {
  key: 0,
  class: "i-carbon:minimize"
};
const _hoisted_2 = {
  key: 1,
  class: "i-carbon:maximize"
};
const _hoisted_3 = {
  key: 0,
  "w-2": "",
  "h-2": "",
  "bg-primary": "",
  "rounded-full": "",
  absolute: "",
  "top-0.5": "",
  "right-0.5": ""
};
const _hoisted_4 = { class: "px2 my-auto" };
const _hoisted_5 = { class: "text-lg" };
const _hoisted_6 = { class: "opacity-50 text-sm" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavControls",
  props: {
    persist: {
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const {
      currentSlideNo,
      hasNext,
      hasPrev,
      isEmbedded,
      isPresenter,
      isPresenterAvailable,
      next,
      prev,
      total,
      enterPresenter,
      exitPresenter
    } = useNav();
    const {
      brush,
      drawingEnabled
    } = useDrawings();
    const md = breakpoints.smaller("md");
    const { isFullscreen, toggle: toggleFullscreen } = fullscreen;
    const root = ref();
    function onMouseLeave() {
      if (root.value && activeElement.value && root.value.contains(activeElement.value))
        activeElement.value.blur();
    }
    const barStyle = computed(() => props.persist ? "text-$slidev-controls-foreground bg-transparent" : "rounded-md bg-main shadow-xl border border-main");
    const RecordingControls = shallowRef();
    return (_ctx, _cache) => {
      const _component_carbon_moon = __unplugin_components_0;
      const _component_carbon_sun = __unplugin_components_1;
      const _component_ph_cursor_fill = __unplugin_components_0$1;
      const _component_ph_cursor_duotone = __unplugin_components_3;
      return openBlock(), createElementBlock(
        "nav",
        {
          ref_key: "root",
          ref: root,
          class: "flex flex-col"
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:p-2", barStyle.value]),
              onMouseleave: onMouseLeave
            },
            [
              !unref(isEmbedded) ? (openBlock(), createBlock(_sfc_main$i, {
                key: 0,
                title: unref(isFullscreen) ? "Close fullscreen" : "Enter fullscreen",
                onClick: unref(toggleFullscreen)
              }, {
                default: withCtx(() => [
                  unref(isFullscreen) ? (openBlock(), createElementBlock("div", _hoisted_1$2)) : (openBlock(), createElementBlock("div", _hoisted_2))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "onClick"])) : createCommentVNode("v-if", true),
              createVNode(_sfc_main$i, {
                class: normalizeClass({ disabled: !unref(hasPrev) }),
                title: "Go to previous slide",
                onClick: unref(prev)
              }, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createBaseVNode(
                    "div",
                    { class: "i-carbon:arrow-left" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["class", "onClick"]),
              createVNode(_sfc_main$i, {
                class: normalizeClass({ disabled: !unref(hasNext) }),
                title: "Go to next slide",
                onClick: unref(next)
              }, {
                default: withCtx(() => [..._cache[7] || (_cache[7] = [
                  createBaseVNode(
                    "div",
                    { class: "i-carbon:arrow-right" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["class", "onClick"]),
              !unref(isEmbedded) ? (openBlock(), createBlock(_sfc_main$i, {
                key: 1,
                title: "Show slide overview",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleOverview)())
              }, {
                default: withCtx(() => [..._cache[8] || (_cache[8] = [
                  createBaseVNode(
                    "div",
                    { class: "i-carbon:apps" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              !unref(isColorSchemaConfigured) ? (openBlock(), createBlock(_sfc_main$i, {
                key: 2,
                title: unref(isDark) ? "Switch to light mode theme" : "Switch to dark mode theme",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
              }, {
                default: withCtx(() => [
                  unref(isDark) ? (openBlock(), createBlock(_component_carbon_moon, { key: 0 })) : (openBlock(), createBlock(_component_carbon_sun, { key: 1 }))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])) : createCommentVNode("v-if", true),
              createVNode(VerticalDivider),
              !unref(isEmbedded) ? (openBlock(), createElementBlock(
                Fragment,
                { key: 3 },
                [
                  !unref(isPresenter) && !unref(md) && RecordingControls.value ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 0 },
                    [
                      createVNode(unref(RecordingControls)),
                      createVNode(VerticalDivider)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : createCommentVNode("v-if", true),
                  unref(isPresenter) ? (openBlock(), createBlock(_sfc_main$i, {
                    key: 1,
                    title: unref(showPresenterCursor) ? "Hide presenter cursor" : "Show presenter cursor",
                    onClick: _cache[2] || (_cache[2] = ($event) => showPresenterCursor.value = !unref(showPresenterCursor))
                  }, {
                    default: withCtx(() => [
                      unref(showPresenterCursor) ? (openBlock(), createBlock(_component_ph_cursor_fill, { key: 0 })) : (openBlock(), createBlock(_component_ph_cursor_duotone, { key: 1 }))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title"])) : createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              (!unref(configs).drawings.presenterOnly || unref(isPresenter)) && !unref(isEmbedded) ? (openBlock(), createElementBlock(
                Fragment,
                { key: 4 },
                [
                  createVNode(_sfc_main$i, {
                    class: "relative",
                    title: unref(drawingEnabled) ? "Hide drawing toolbar" : "Show drawing toolbar",
                    onClick: _cache[3] || (_cache[3] = ($event) => drawingEnabled.value = !unref(drawingEnabled))
                  }, {
                    default: withCtx(() => [
                      _cache[9] || (_cache[9] = createBaseVNode(
                        "div",
                        { class: "i-carbon:pen" },
                        null,
                        -1
                        /* CACHED */
                      )),
                      unref(drawingEnabled) ? (openBlock(), createElementBlock(
                        "div",
                        {
                          key: 0,
                          class: "absolute left-1 right-1 bottom-0 h-0.7 rounded-full",
                          style: normalizeStyle({ background: unref(brush).color })
                        },
                        null,
                        4
                        /* STYLE */
                      )) : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title"]),
                  createVNode(VerticalDivider)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              !unref(isEmbedded) ? (openBlock(), createElementBlock(
                Fragment,
                { key: 5 },
                [
                  unref(isPresenter) ? (openBlock(), createBlock(_sfc_main$i, {
                    key: 0,
                    title: "Play Mode",
                    onClick: unref(exitPresenter)
                  }, {
                    default: withCtx(() => [..._cache[10] || (_cache[10] = [
                      createBaseVNode(
                        "div",
                        { class: "i-carbon:presentation-file" },
                        null,
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])) : createCommentVNode("v-if", true),
                  createCommentVNode("v-if", true),
                  createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              (openBlock(), createElementBlock(
                Fragment,
                { key: 6 },
                [
                  unref(configs).download ? (openBlock(), createBlock(_sfc_main$i, {
                    key: 0,
                    title: "Download as PDF",
                    onClick: unref(downloadPDF)
                  }, {
                    default: withCtx(() => [..._cache[13] || (_cache[13] = [
                      createBaseVNode(
                        "div",
                        { class: "i-carbon:download" },
                        null,
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])) : createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              )),
              createCommentVNode("v-if", true),
              !unref(isPresenter) && unref(configs).info && !unref(isEmbedded) ? (openBlock(), createBlock(_sfc_main$i, {
                key: 8,
                title: "Show info",
                onClick: _cache[5] || (_cache[5] = ($event) => showInfoDialog.value = !unref(showInfoDialog))
              }, {
                default: withCtx(() => [..._cache[15] || (_cache[15] = [
                  createBaseVNode(
                    "div",
                    { class: "i-carbon:information" },
                    null,
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })) : createCommentVNode("v-if", true),
              !unref(isEmbedded) ? (openBlock(), createElementBlock(
                Fragment,
                { key: 9 },
                [
                  createVNode(VerticalDivider),
                  unref(isPresenter) ? (openBlock(), createBlock(_sfc_main$i, {
                    key: 0,
                    title: "Toggle Presenter Layout",
                    class: "aspect-ratio-initial flex items-center",
                    onClick: unref(togglePresenterLayout)
                  }, {
                    default: withCtx(() => [
                      _cache[16] || (_cache[16] = createBaseVNode(
                        "div",
                        { class: "i-carbon:template" },
                        null,
                        -1
                        /* CACHED */
                      )),
                      createTextVNode(
                        " " + toDisplayString(unref(presenterLayout)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])) : createCommentVNode("v-if", true),
                  createCommentVNode("v-if", true),
                  createVNode(_sfc_main$c, null, {
                    button: withCtx(() => [
                      createVNode(_sfc_main$i, { title: "More Options" }, {
                        default: withCtx(() => [
                          _cache[17] || (_cache[17] = createBaseVNode(
                            "div",
                            { class: "i-carbon:settings-adjust" },
                            null,
                            -1
                            /* CACHED */
                          )),
                          unref(hasViewerCssFilter) ? (openBlock(), createElementBlock("div", _hoisted_3)) : createCommentVNode("v-if", true)
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    menu: withCtx(() => [
                      createVNode(_sfc_main$6)
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              !unref(isEmbedded) ? (openBlock(), createBlock(VerticalDivider, { key: 10 })) : createCommentVNode("v-if", true),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode(
                  "span",
                  _hoisted_5,
                  toDisplayString(unref(currentSlideNo)),
                  1
                  /* TEXT */
                ),
                createBaseVNode(
                  "span",
                  _hoisted_6,
                  " / " + toDisplayString(unref(total)),
                  1
                  /* TEXT */
                )
              ]),
              createVNode(unref(CustomNavControls))
            ],
            34
            /* CLASS, NEED_HYDRATION */
          )
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PresenterMouse",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_ph_cursor_fill = __unplugin_components_0$1;
      return unref(state).cursor ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_ph_cursor_fill, {
          class: "absolute stroke-white dark:stroke-black",
          style: normalizeStyle({
            left: `${unref(state).cursor.x}%`,
            top: `${unref(state).cursor.y}%`,
            strokeWidth: 16
          })
        }, null, 8, ["style"])
      ])) : createCommentVNode("v-if", true);
    };
  }
});
const loaded = /* @__PURE__ */ new Set();
const loading = /* @__PURE__ */ new Set();
function resolveUrl(url) {
  if (url.startsWith("http") || url.startsWith("//"))
    return url;
  const base = "/slides/canvasobs/".replace(/\/$/, "");
  return `${base}${url.startsWith("/") ? url : `/${url}`}`;
}
function preloadImage(url) {
  const resolved = resolveUrl(url);
  if (loaded.has(resolved) || loading.has(resolved))
    return;
  loading.add(resolved);
  const img = new Image();
  img.onload = () => {
    loading.delete(resolved);
    loaded.add(resolved);
  };
  img.onerror = () => {
    loading.delete(resolved);
  };
  img.src = resolved;
}
function preloadSlideImages(route) {
  const images = route.meta?.slide?.images;
  if (images?.length) {
    for (const url of images)
      preloadImage(url);
  }
}
function usePreloadImages(currentRoute, prevRoute, nextRoute, slides2) {
  const config = configs.preloadImages;
  if (config === false)
    return;
  const ahead = typeof config === "object" && config?.ahead || 3;
  watchEffect(() => {
    const current = currentRoute.value;
    const all = slides2.value;
    if (!current || !all?.length)
      return;
    preloadSlideImages(current);
    preloadSlideImages(prevRoute.value);
    preloadSlideImages(nextRoute.value);
    const currentIdx = current.no - 1;
    for (let i = 1; i <= ahead; i++) {
      const idx = currentIdx + i;
      if (idx < all.length)
        preloadSlideImages(all[idx]);
    }
  });
  watchEffect((onCleanup) => {
    const all = slides2.value;
    const timeout = setTimeout(() => {
      if (all?.length) {
        for (const route of all)
          preloadSlideImages(route);
      }
    }, 3e3);
    onCleanup(() => clearTimeout(timeout));
  });
}
function useViewTransition() {
  const router = useRouter();
  const isViewTransition = ref(false);
  let viewTransitionFinish;
  let viewTransitionAbort;
  const supportViewTransition = typeof document !== "undefined" && "startViewTransition" in document;
  router.beforeResolve((to, from) => {
    const fromMeta = getSlide(from.params.no)?.meta;
    const toMeta = getSlide(to.params.no)?.meta;
    const fromNo = fromMeta?.slide?.no;
    const toNo = toMeta?.slide?.no;
    const transitionType = fromNo != null && toNo != null && fromNo !== toNo && ((fromNo < toNo ? fromMeta?.transition : toMeta?.transition) ?? configs.transition);
    if (transitionType !== "view-transition") {
      isViewTransition.value = false;
      return;
    }
    if (!supportViewTransition) {
      isViewTransition.value = false;
      console.warn("View transition is not supported in your browser, fallback to normal transition.");
      return;
    }
    isViewTransition.value = true;
    const promise = new Promise((resolve, reject) => {
      viewTransitionFinish = resolve;
      viewTransitionAbort = reject;
    });
    let changeRoute;
    const ready = new Promise((resolve) => changeRoute = resolve);
    setTimeout(() => {
      document.startViewTransition(() => {
        changeRoute();
        return promise;
      });
    }, 50);
    return ready;
  });
  if (supportViewTransition) {
    router.afterEach(() => {
      viewTransitionFinish?.();
      viewTransitionAbort?.();
    });
  }
  return isViewTransition;
}
const _hoisted_1 = ["data-drag-id"];
const ctrlSize = 10;
const minRemain = 10;
const ctrlClasses = `absolute border border-gray bg-gray dark:border-gray-500 dark:bg-gray-800 bg-opacity-30 `;
const moveInterval = 20;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DragControl",
  props: {
    data: {}
  },
  setup(__props) {
    const { dragId, zoom, autoHeight, x0, y0, width, height, rotate, isArrow } = __props.data;
    const slideScale2 = inject(injectionSlideScale, ref(1));
    const scale = computed(() => slideScale2.value * zoom.value);
    const { left: slideLeft, top: slideTop } = useSlideBounds();
    const minSize = isArrow ? Number.NEGATIVE_INFINITY : 40;
    const rotateRad = computed(() => rotate.value * Math.PI / 180);
    const rotateSin = computed(() => Math.sin(rotateRad.value));
    const rotateCos = computed(() => Math.cos(rotateRad.value));
    const boundingWidth = computed(() => width.value * rotateCos.value + height.value * rotateSin.value);
    const boundingHeight = computed(() => width.value * rotateSin.value + height.value * rotateCos.value);
    const boundingLeft = computed(() => x0.value - boundingWidth.value / 2);
    const boundingTop = computed(() => y0.value - boundingHeight.value / 2);
    const boundingRight = computed(() => x0.value + boundingWidth.value / 2);
    const boundingBottom = computed(() => y0.value + boundingHeight.value / 2);
    const arrowRevX = computed(() => isArrow && width.value < 0);
    const arrowRevY = computed(() => isArrow && height.value < 0);
    let currentDrag = null;
    function onPointerdown(ev) {
      if (ev.buttons !== 1)
        return;
      ev.preventDefault();
      ev.stopPropagation();
      const el = ev.target;
      const elBounds = el.getBoundingClientRect();
      const cross1x = width.value * rotateCos.value - height.value * rotateSin.value;
      const cross1y = width.value * rotateSin.value + height.value * rotateCos.value;
      const cross2x = width.value * rotateCos.value + height.value * rotateSin.value;
      const cross2y = -width.value * rotateSin.value + height.value * rotateCos.value;
      currentDrag = {
        x0: x0.value,
        y0: y0.value,
        width: width.value,
        height: height.value,
        rotate: rotate.value,
        dx0: ev.clientX - (elBounds.left + elBounds.right) / 2,
        dy0: ev.clientY - (elBounds.top + elBounds.bottom) / 2,
        ltx: x0.value - cross1x / 2,
        lty: y0.value - cross1y / 2,
        rtx: x0.value + cross2x / 2,
        rty: y0.value - cross2y / 2,
        lbx: x0.value - cross2x / 2,
        lby: y0.value + cross2y / 2,
        rbx: x0.value + cross1x / 2,
        rby: y0.value + cross1y / 2
      };
      ev.currentTarget.setPointerCapture(ev.pointerId);
    }
    function onPointermove(ev) {
      if (!currentDrag || ev.buttons !== 1)
        return;
      ev.preventDefault();
      ev.stopPropagation();
      const x = (ev.clientX - slideLeft.value - currentDrag.dx0) / scale.value;
      const y = (ev.clientY - slideTop.value - currentDrag.dy0) / scale.value;
      x0.value = clamp(x, -boundingWidth.value / 2 + minRemain, slideWidth.value + boundingWidth.value / 2 - minRemain);
      y0.value = clamp(y, -boundingHeight.value / 2 + minRemain, slideHeight.value + boundingHeight.value / 2 - minRemain);
    }
    function onPointerup(ev) {
      if (!currentDrag)
        return;
      ev.preventDefault();
      ev.stopPropagation();
      currentDrag = null;
    }
    function getCornerProps(isLeft, isTop) {
      return {
        onPointerdown,
        onPointermove: (ev) => {
          if (!currentDrag || ev.buttons !== 1)
            return;
          ev.preventDefault();
          ev.stopPropagation();
          let x = (ev.clientX - slideLeft.value) / scale.value;
          let y = (ev.clientY - slideTop.value) / scale.value;
          const { ltx, lty, rtx, rty, lbx, lby, rbx, rby } = currentDrag;
          const ratio = currentDrag.width / currentDrag.height;
          const wMin = Math.max(minSize, minSize * ratio);
          function getSize(w1, h1) {
            if (ev.shiftKey) {
              const w = Math.max(w1, h1 * ratio, wMin);
              const h2 = w / ratio;
              return { w, h: h2 };
            } else {
              return { w: Math.max(w1, minSize), h: Math.max(h1, minSize) };
            }
          }
          if (isLeft) {
            if (isTop) {
              const w1 = (rbx - x) * rotateCos.value + (rby - y) * rotateSin.value;
              const h1 = -(rbx - x) * rotateSin.value + (rby - y) * rotateCos.value;
              const { w, h: h2 } = getSize(w1, h1);
              x = rbx - w * rotateCos.value + h2 * rotateSin.value;
              y = rby - w * rotateSin.value - h2 * rotateCos.value;
            } else {
              const w1 = (rtx - x) * rotateCos.value - (y - rty) * rotateSin.value;
              const h1 = (rtx - x) * rotateSin.value + (y - rty) * rotateCos.value;
              const { w, h: h2 } = getSize(w1, h1);
              x = rtx - w * rotateCos.value - h2 * rotateSin.value;
              y = rty - w * rotateSin.value + h2 * rotateCos.value;
            }
          } else {
            if (isTop) {
              const w1 = (x - lbx) * rotateCos.value - (lby - y) * rotateSin.value;
              const h1 = (x - lbx) * rotateSin.value + (lby - y) * rotateCos.value;
              const { w, h: h2 } = getSize(w1, h1);
              x = lbx + w * rotateCos.value + h2 * rotateSin.value;
              y = lby + w * rotateSin.value - h2 * rotateCos.value;
            } else {
              const w1 = (x - ltx) * rotateCos.value + (y - lty) * rotateSin.value;
              const h1 = -(x - ltx) * rotateSin.value + (y - lty) * rotateCos.value;
              const { w, h: h2 } = getSize(w1, h1);
              x = ltx + w * rotateCos.value - h2 * rotateSin.value;
              y = lty + w * rotateSin.value + h2 * rotateCos.value;
            }
          }
          if (isLeft) {
            if (isTop) {
              x0.value = (x + rbx) / 2;
              y0.value = (y + rby) / 2;
              width.value = (rbx - x) * rotateCos.value + (rby - y) * rotateSin.value;
              height.value = -(rbx - x) * rotateSin.value + (rby - y) * rotateCos.value;
            } else {
              x0.value = (x + rtx) / 2;
              y0.value = (y + rty) / 2;
              width.value = (rtx - x) * rotateCos.value - (y - rty) * rotateSin.value;
              height.value = (rtx - x) * rotateSin.value + (y - rty) * rotateCos.value;
            }
          } else {
            if (isTop) {
              x0.value = (x + lbx) / 2;
              y0.value = (y + lby) / 2;
              width.value = (x - lbx) * rotateCos.value - (lby - y) * rotateSin.value;
              height.value = (x - lbx) * rotateSin.value + (lby - y) * rotateCos.value;
            } else {
              x0.value = (x + ltx) / 2;
              y0.value = (y + lty) / 2;
              width.value = (x - ltx) * rotateCos.value + (y - lty) * rotateSin.value;
              height.value = -(x - ltx) * rotateSin.value + (y - lty) * rotateCos.value;
            }
          }
        },
        onPointerup,
        style: {
          width: `${ctrlSize}px`,
          height: `${ctrlSize}px`,
          margin: `-${ctrlSize / 2}px`,
          left: isLeft !== arrowRevX.value ? "0" : void 0,
          right: isLeft !== arrowRevX.value ? void 0 : "0",
          top: isTop !== arrowRevY.value ? "0" : void 0,
          bottom: isTop !== arrowRevY.value ? void 0 : "0",
          cursor: isArrow ? "move" : +isLeft + +isTop === 1 ? "nesw-resize" : "nwse-resize",
          borderRadius: isArrow ? "50%" : void 0
        },
        class: ctrlClasses
      };
    }
    function getBorderProps(dir) {
      return {
        onPointerdown,
        onPointermove: (ev) => {
          if (!currentDrag || ev.buttons !== 1)
            return;
          ev.preventDefault();
          ev.stopPropagation();
          const x = (ev.clientX - slideLeft.value) / scale.value;
          const y = (ev.clientY - slideTop.value) / scale.value;
          const { ltx, lty, rtx, rty, lbx, lby, rbx, rby } = currentDrag;
          if (dir === "l") {
            const rx = (rtx + rbx) / 2;
            const ry = (rty + rby) / 2;
            width.value = Math.max((rx - x) * rotateCos.value + (ry - y) * rotateSin.value, minSize);
            x0.value = rx - width.value * rotateCos.value / 2;
            y0.value = ry - width.value * rotateSin.value / 2;
          } else if (dir === "r") {
            const lx = (ltx + lbx) / 2;
            const ly = (lty + lby) / 2;
            width.value = Math.max((x - lx) * rotateCos.value + (y - ly) * rotateSin.value, minSize);
            x0.value = lx + width.value * rotateCos.value / 2;
            y0.value = ly + width.value * rotateSin.value / 2;
          } else if (dir === "t") {
            const bx = (lbx + rbx) / 2;
            const by = (lby + rby) / 2;
            height.value = Math.max((by - y) * rotateCos.value - (bx - x) * rotateSin.value, minSize);
            x0.value = bx + height.value * rotateSin.value / 2;
            y0.value = by - height.value * rotateCos.value / 2;
          } else if (dir === "b") {
            const tx = (ltx + rtx) / 2;
            const ty = (lty + rty) / 2;
            height.value = Math.max((y - ty) * rotateCos.value - (x - tx) * rotateSin.value, minSize);
            x0.value = tx - height.value * rotateSin.value / 2;
            y0.value = ty + height.value * rotateCos.value / 2;
          }
        },
        onPointerup,
        style: {
          width: `${ctrlSize}px`,
          height: `${ctrlSize}px`,
          margin: `-${ctrlSize / 2}px`,
          left: dir === "l" ? "0" : dir === "r" ? `100%` : `50%`,
          top: dir === "t" ? "0" : dir === "b" ? `100%` : `50%`,
          cursor: "lr".includes(dir) ? "ew-resize" : "ns-resize",
          borderRadius: "50%"
        },
        class: ctrlClasses
      };
    }
    function getRotateProps() {
      return {
        onPointerdown,
        onPointermove: (ev) => {
          if (!currentDrag || ev.buttons !== 1)
            return;
          ev.preventDefault();
          ev.stopPropagation();
          const x = (ev.clientX - slideLeft.value - currentDrag.dx0) / scale.value - ctrlSize / 4;
          const y = (ev.clientY - slideTop.value - currentDrag.dy0) / scale.value - ctrlSize / 4;
          let angle = Math.atan2(y - y0.value, x - x0.value) * 180 / Math.PI + 90;
          const commonAngles = [0, 90, 180, 270, 360];
          for (const a2 of commonAngles) {
            if (Math.abs(angle - a2) < 5) {
              angle = a2 % 360;
              break;
            }
          }
          rotate.value = angle;
        },
        onPointerup,
        style: {
          width: `${ctrlSize}px`,
          height: `${ctrlSize}px`,
          margin: `-${ctrlSize / 2}px`,
          left: "50%",
          top: "-20px",
          cursor: "grab",
          borderRadius: "50%"
        },
        class: ctrlClasses
      };
    }
    const intervalFnOptions = {
      immediate: false,
      immediateCallback: false
    };
    const moveLeft = useIntervalFn(() => {
      if (boundingRight.value <= minRemain)
        return;
      x0.value--;
    }, moveInterval, intervalFnOptions);
    const moveRight = useIntervalFn(() => {
      if (boundingLeft.value >= slideWidth.value - minRemain)
        return;
      x0.value++;
    }, moveInterval, intervalFnOptions);
    const moveUp = useIntervalFn(() => {
      if (boundingBottom.value <= minRemain)
        return;
      y0.value--;
    }, moveInterval, intervalFnOptions);
    const moveDown = useIntervalFn(() => {
      if (boundingTop.value >= slideHeight.value - minRemain)
        return;
      y0.value++;
    }, moveInterval, intervalFnOptions);
    watchEffect(() => {
      function shortcut(key, fn) {
        if (magicKeys[key].value)
          fn.resume();
        else fn.pause();
      }
      shortcut("left", moveLeft);
      shortcut("right", moveRight);
      shortcut("up", moveUp);
      shortcut("down", moveDown);
    });
    return (_ctx, _cache) => {
      return Number.isFinite(unref(x0)) ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: "drag-control-container",
        "data-drag-id": unref(dragId),
        style: normalizeStyle({
          position: "absolute",
          zIndex: 100,
          left: `${unref(zoom) * (unref(x0) - Math.abs(unref(width)) / 2)}px`,
          top: `${unref(zoom) * (unref(y0) - Math.abs(unref(height)) / 2)}px`,
          width: `${unref(zoom) * Math.abs(unref(width))}px`,
          height: `${unref(zoom) * Math.abs(unref(height))}px`,
          transformOrigin: "center center",
          transform: `rotate(${unref(rotate)}deg)`
        }),
        onPointerdown,
        onPointermove,
        onPointerup
      }, [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(["absolute inset-0 z-nav dark:b-gray-400", unref(isArrow) ? "" : "b b-dark"])
          },
          [
            !unref(autoHeight) ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [
                createBaseVNode(
                  "div",
                  normalizeProps(guardReactiveProps(getCornerProps(true, true))),
                  null,
                  16
                  /* FULL_PROPS */
                ),
                createBaseVNode(
                  "div",
                  normalizeProps(guardReactiveProps(getCornerProps(false, false))),
                  null,
                  16
                  /* FULL_PROPS */
                ),
                !unref(isArrow) ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    createBaseVNode(
                      "div",
                      normalizeProps(guardReactiveProps(getCornerProps(true, false))),
                      null,
                      16
                      /* FULL_PROPS */
                    ),
                    createBaseVNode(
                      "div",
                      normalizeProps(guardReactiveProps(getCornerProps(false, true))),
                      null,
                      16
                      /* FULL_PROPS */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true),
            !unref(isArrow) ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createBaseVNode(
                  "div",
                  normalizeProps(guardReactiveProps(getBorderProps("l"))),
                  null,
                  16
                  /* FULL_PROPS */
                ),
                createBaseVNode(
                  "div",
                  normalizeProps(guardReactiveProps(getBorderProps("r"))),
                  null,
                  16
                  /* FULL_PROPS */
                ),
                !unref(autoHeight) ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    createBaseVNode(
                      "div",
                      normalizeProps(guardReactiveProps(getBorderProps("t"))),
                      null,
                      16
                      /* FULL_PROPS */
                    ),
                    createBaseVNode(
                      "div",
                      normalizeProps(guardReactiveProps(getBorderProps("b"))),
                      null,
                      16
                      /* FULL_PROPS */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                createBaseVNode(
                  "div",
                  normalizeProps(guardReactiveProps(getRotateProps())),
                  null,
                  16
                  /* FULL_PROPS */
                ),
                createBaseVNode(
                  "div",
                  {
                    class: "absolute -top-15px w-0 b b-dashed b-dark dark:b-gray-400",
                    style: normalizeStyle({
                      left: "calc(50% - 1px)",
                      height: unref(autoHeight) ? "14px" : "10px"
                    })
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ], 44, _hoisted_1)) : createCommentVNode("v-if", true);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SlidesShow",
  props: {
    renderContext: {}
  },
  setup(__props) {
    const {
      currentSlideRoute,
      currentTransition,
      getPrimaryClicks,
      prevRoute,
      nextRoute,
      slides: slides2,
      isPrintMode,
      isPrintWithClicks,
      clicksDirection,
      printRange
    } = useNav();
    function preloadRoute(route) {
      if (route.meta.preload !== false) {
        route.meta.__preloaded = true;
        route.load();
      }
    }
    watchEffect(() => {
      preloadRoute(currentSlideRoute.value);
      preloadRoute(prevRoute.value);
      preloadRoute(nextRoute.value);
    });
    watchEffect((onCleanup) => {
      const routes = slides2.value;
      const timeout = setTimeout(() => {
        routes.forEach(preloadRoute);
      }, 3e3);
      onCleanup(() => clearTimeout(timeout));
    });
    usePreloadImages(currentSlideRoute, prevRoute, nextRoute, slides2);
    const hasViewTransition = useViewTransition();
    const DrawingLayer = shallowRef();
    __vitePreload(() => import("./DrawingLayer-DJwseS9g.js"), true ? __vite__mapDeps([9,1,6,4,2,3,5,7]) : void 0).then((v) => DrawingLayer.value = v.default);
    const loadedRoutes = computed(
      () => isPrintMode.value ? printRange.value.map((no) => slides2.value[no - 1]) : slides2.value.filter((r) => r.meta?.__preloaded || r === currentSlideRoute.value)
    );
    function onAfterLeave() {
      hmrSkipTransition.value = true;
      tt();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createCommentVNode(" Global Bottom "),
          createVNode(unref(GlobalBottom)),
          createCommentVNode(" Slides "),
          (openBlock(), createBlock(resolveDynamicComponent(unref(hasViewTransition) && !unref(isPrintMode) && !unref(hmrSkipTransition) && !unref(disableTransition) ? "div" : TransitionGroup), mergeProps(unref(hmrSkipTransition) || unref(disableTransition) || unref(isPrintMode) ? {} : unref(currentTransition), {
            id: "slideshow",
            tag: "div",
            class: {
              "slidev-nav-go-forward": unref(clicksDirection) > 0,
              "slidev-nav-go-backward": unref(clicksDirection) < 0
            },
            onAfterLeave
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(loadedRoutes.value, (route) => {
                  return withDirectives((openBlock(), createBlock(SlideWrapper, {
                    key: route.no,
                    "clicks-context": unref(isPrintMode) && !unref(isPrintWithClicks) ? unref(createFixedClicks)(route, unref(CLICKS_MAX)) : unref(getPrimaryClicks)(route),
                    route,
                    "render-context": __props.renderContext
                  }, null, 8, ["clicks-context", "route", "render-context"])), [
                    [vShow, route === unref(currentSlideRoute)]
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 16, ["class"])),
          unref(activeDragElement) ? (openBlock(), createBlock(_sfc_main$2, {
            key: 0,
            data: unref(activeDragElement)
          }, null, 8, ["data"])) : createCommentVNode("v-if", true),
          createCommentVNode(" Global Top "),
          createVNode(unref(GlobalTop)),
          DrawingLayer.value ? (openBlock(), createBlock(unref(DrawingLayer), { key: 1 })) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const SlidesShow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-32116736"]]);
const setups = [Object.values([])[0], Object.values([])[0]].filter(Boolean);
function setupShortcuts() {
  const { go, goFirst, goLast, next, nextSlide, prev, prevSlide } = useNav();
  const { drawingEnabled } = useDrawings();
  const { escape, space, shift, left, right, up, down, enter, d, g, o, "`": backtick } = magicKeys;
  const context = {
    next,
    prev,
    nextSlide,
    prevSlide,
    go,
    goFirst,
    goLast,
    downloadPDF,
    toggleDark,
    toggleOverview,
    toggleDrawing: () => drawingEnabled.value = !drawingEnabled.value,
    escapeOverview: () => showOverview.value = false,
    showGotoDialog: () => showGotoDialog.value = !showGotoDialog.value
  };
  const navViaArrowKeys = and(not(showOverview), not(activeDragElement));
  let shortcuts = [
    { name: "next_space", key: and(space, not(shift)), fn: next, autoRepeat: true },
    { name: "prev_space", key: and(space, shift), fn: prev, autoRepeat: true },
    { name: "next_right", key: and(right, not(shift), navViaArrowKeys), fn: next, autoRepeat: true },
    { name: "prev_left", key: and(left, not(shift), navViaArrowKeys), fn: prev, autoRepeat: true },
    { name: "next_page_key", key: "pageDown", fn: next, autoRepeat: true },
    { name: "prev_page_key", key: "pageUp", fn: prev, autoRepeat: true },
    { name: "next_down", key: and(down, navViaArrowKeys), fn: nextSlide, autoRepeat: true },
    { name: "prev_up", key: and(up, navViaArrowKeys), fn: prevSlide, autoRepeat: true },
    { name: "next_shift", key: and(right, shift), fn: nextSlide, autoRepeat: true },
    { name: "prev_shift", key: and(left, shift), fn: prevSlide, autoRepeat: true },
    { name: "toggle_dark", key: and(d, not(drawingEnabled)), fn: toggleDark },
    { name: "toggle_overview", key: and(or(o, backtick), not(drawingEnabled)), fn: toggleOverview },
    { name: "hide_overview", key: and(escape, not(drawingEnabled)), fn: () => showOverview.value = false },
    { name: "goto", key: and(g, not(drawingEnabled)), fn: () => showGotoDialog.value = !showGotoDialog.value },
    { name: "next_overview", key: and(right, showOverview), fn: nextOverviewPage },
    { name: "prev_overview", key: and(left, showOverview), fn: prevOverviewPage },
    { name: "up_overview", key: and(up, showOverview), fn: upOverviewPage },
    { name: "down_overview", key: and(down, showOverview), fn: downOverviewPage },
    {
      name: "goto_from_overview",
      key: and(enter, showOverview),
      fn: () => {
        go(currentOverviewPage.value);
        showOverview.value = false;
      }
    }
  ];
  const baseShortcutNames = new Set(shortcuts.map((s) => s.name));
  for (const setup of setups) {
    shortcuts = setup(context, shortcuts);
  }
  const remainingBaseShortcutNames = shortcuts.filter((s) => s.name && baseShortcutNames.has(s.name));
  if (remainingBaseShortcutNames.length === 0) {
    const message = [
      "========== WARNING ==========",
      "defineShortcutsSetup did not return any of the base shortcuts.",
      "See https://sli.dev/custom/config-shortcuts.html for migration.",
      'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'
    ].join("\n\n");
    alert(message);
    console.warn(message);
  }
  return shortcuts;
}
function registerShortcuts() {
  const { isPrintMode } = useNav();
  const enabled = and(not(isInputting), not(isOnFocus), not(isPrintMode), shortcutsEnabled, not(shortcutsLocked));
  const allShortcuts = setupShortcuts();
  const shortcuts = new Map(
    allShortcuts.map((options) => [options.key, options])
  );
  shortcuts.forEach((options) => {
    if (options.fn)
      shortcut(options.key, options.fn, options.autoRepeat);
  });
  strokeShortcut("f", () => fullscreen.toggle());
  function shortcut(key, fn, autoRepeat = false) {
    if (typeof key === "string")
      key = magicKeys[key];
    const source = and(key, enabled);
    let count = 0;
    let timer;
    const trigger = () => {
      clearTimeout(timer);
      if (!source.value) {
        count = 0;
        return;
      }
      if (autoRepeat) {
        timer = setTimeout(trigger, Math.max(1e3 - count * 250, 150));
        count++;
      }
      fn();
    };
    return watch(source, trigger, { flush: "sync" });
  }
  function strokeShortcut(key, fn) {
    return onKeyStroke(key, (ev) => {
      if (!enabled.value)
        return;
      if (!ev.repeat)
        fn();
    });
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "play",
  setup(__props) {
    const { next, prev, isPrintMode, isPlaying, isEmbedded } = useNav();
    const { isDrawing } = useDrawings();
    const root = ref();
    function onClick(e) {
      if (showEditor.value)
        return;
      if (e.button === 0 && e.target?.id === "slide-container") {
        if (e.pageX / window.innerWidth > 0.5)
          next();
        else
          prev();
      }
    }
    useSwipeControls(root);
    registerShortcuts();
    useWakeLock();
    useHideCursorIdle(computed(() => isPlaying.value && !isEmbedded.value && !showEditor.value));
    const persistNav = computed(() => isScreenVertical.value || showEditor.value);
    const SideEditor = shallowRef();
    const contentStyle = computed(() => {
      let filter = "";
      if (viewerCssFilter.value.brightness !== viewerCssFilterDefaults.brightness)
        filter += `brightness(${viewerCssFilter.value.brightness}) `;
      if (viewerCssFilter.value.contrast !== viewerCssFilterDefaults.contrast)
        filter += `contrast(${viewerCssFilter.value.contrast}) `;
      if (viewerCssFilter.value.sepia !== viewerCssFilterDefaults.sepia)
        filter += `sepia(${viewerCssFilter.value.sepia}) `;
      if (viewerCssFilter.value.hueRotate !== viewerCssFilterDefaults.hueRotate)
        filter += `hue-rotate(${viewerCssFilter.value.hueRotate}deg) `;
      if (viewerCssFilter.value.invert)
        filter += "invert(1) ";
      return {
        filter
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode(
            "div",
            {
              id: "page-root",
              ref_key: "root",
              ref: root,
              class: normalizeClass(["grid", unref(isEditorVertical) ? "grid-rows-[1fr_max-content]" : "grid-cols-[1fr_max-content]"])
            },
            [
              createVNode(SlideContainer, {
                style: { background: "var(--slidev-slide-container-background, black)" },
                "is-main": "",
                "content-style": contentStyle.value,
                onPointerdown: onClick,
                onContextmenu: unref(onContextMenu)
              }, {
                default: withCtx(() => [
                  createVNode(SlidesShow, { "render-context": "slide" }),
                  createVNode(_sfc_main$3)
                ]),
                controls: withCtx(() => [
                  !unref(isPrintMode) ? (openBlock(), createElementBlock(
                    "div",
                    {
                      key: 0,
                      class: normalizeClass(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100", [
                        persistNav.value ? "!opacity-100 right-0" : "opacity-0 p-2",
                        unref(isDrawing) ? "pointer-events-none" : ""
                      ]])
                    },
                    [
                      createVNode(_sfc_main$4, { persist: persistNav.value }, null, 8, ["persist"])
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["content-style", "onContextmenu"]),
              SideEditor.value && unref(showEditor) ? (openBlock(), createBlock(unref(SideEditor), {
                key: 0,
                resize: true
              })) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          ),
          !unref(isPrintMode) ? (openBlock(), createBlock(_sfc_main$d, { key: 0 })) : createCommentVNode("v-if", true),
          _cache[0] || (_cache[0] = createBaseVNode(
            "div",
            { id: "twoslash-container" },
            null,
            -1
            /* CACHED */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const play = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  VerticalDivider as V,
  _sfc_main$i as _,
  play as p,
  useDrawings as u
};
