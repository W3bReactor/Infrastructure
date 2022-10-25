/*! For license information please see npm.scheduler.025d02c43c62645c8873.js.LICENSE.txt */

(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([[655], {
  53: (e, n) => {
    let t; let r; let a; let o; if (typeof performance === 'object' && typeof performance.now === 'function') { const l = performance; n.unstable_now = function () { return l.now(); }; } else { const i = Date; const u = i.now(); n.unstable_now = function () { return i.now() - u; }; } if (typeof window === 'undefined' || typeof MessageChannel !== 'function') { let s = null; let c = null; var f = function () { if (s !== null) try { const e = n.unstable_now(); s(!0, e), s = null; } catch (e) { throw setTimeout(f, 0), e; } }; t = function (e) { s !== null ? setTimeout(t, 0, e) : (s = e, setTimeout(f, 0)); }, r = function (e, n) { c = setTimeout(e, n); }, a = function () { clearTimeout(c); }, n.unstable_shouldYield = function () { return !1; }, o = n.unstable_forceFrameRate = function () {}; } else {
      const b = window.setTimeout; const p = window.clearTimeout; if (typeof console !== 'undefined') { const d = window.cancelAnimationFrame; typeof window.requestAnimationFrame !== 'function' && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof d !== 'function' && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"); } let v = !1; let y = null; let m = -1; let w = 5; let _ = 0; n.unstable_shouldYield = function () { return n.unstable_now() >= _; }, o = function () {}, n.unstable_forceFrameRate = function (e) { e < 0 || e > 125 ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : w = e > 0 ? Math.floor(1e3 / e) : 5; }; const h = new MessageChannel(); const
        k = h.port2; h.port1.onmessage = function () { if (y !== null) { const e = n.unstable_now(); _ = e + w; try { y(!0, e) ? k.postMessage(null) : (v = !1, y = null); } catch (e) { throw k.postMessage(null), e; } } else v = !1; }, t = function (e) { y = e, v || (v = !0, k.postMessage(null)); }, r = function (e, t) { m = b((() => { e(n.unstable_now()); }), t); }, a = function () { p(m), m = -1; };
    } function T(e, n) { let t = e.length; e.push(n); for (;;) { const r = t - 1 >>> 1; const a = e[r]; if (!(void 0 !== a && C(a, n) > 0)) break; e[r] = n, e[t] = a, t = r; } } function g(e) { return void 0 === (e = e[0]) ? null : e; } function x(e) { const n = e[0]; if (void 0 !== n) { const t = e.pop(); if (t !== n) { e[0] = t; for (let r = 0, a = e.length; r < a;) { const o = 2 * (r + 1) - 1; const l = e[o]; const i = o + 1; const u = e[i]; if (void 0 !== l && C(l, t) < 0) void 0 !== u && C(u, l) < 0 ? (e[r] = u, e[i] = t, r = i) : (e[r] = l, e[o] = t, r = o); else { if (!(void 0 !== u && C(u, t) < 0)) break; e[r] = u, e[i] = t, r = i; } } } return n; } return null; } function C(e, n) { const t = e.sortIndex - n.sortIndex; return t !== 0 ? t : e.id - n.id; } const P = []; const F = []; let I = 1; let M = null; let j = 3; let A = !1; let L = !1; let q = !1; function R(e) { for (let n = g(F); n !== null;) { if (n.callback === null)x(F); else { if (!(n.startTime <= e)) break; x(F), n.sortIndex = n.expirationTime, T(P, n); }n = g(F); } } function Y(e) { if (q = !1, R(e), !L) if (g(P) !== null)L = !0, t(E); else { const n = g(F); n !== null && r(Y, n.startTime - e); } } function E(e, t) { L = !1, q && (q = !1, a()), A = !0; const o = j; try { for (R(t), M = g(P); M !== null && (!(M.expirationTime > t) || e && !n.unstable_shouldYield());) { const l = M.callback; if (typeof l === 'function') { M.callback = null, j = M.priorityLevel; const i = l(M.expirationTime <= t); t = n.unstable_now(), typeof i === 'function' ? M.callback = i : M === g(P) && x(P), R(t); } else x(P); M = g(P); } if (M !== null) var u = !0; else { const s = g(F); s !== null && r(Y, s.startTime - t), u = !1; } return u; } finally { M = null, j = o, A = !1; } } const N = o; n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function (e) { e.callback = null; }, n.unstable_continueExecution = function () { L || A || (L = !0, t(E)); }, n.unstable_getCurrentPriorityLevel = function () { return j; }, n.unstable_getFirstCallbackNode = function () { return g(P); }, n.unstable_next = function (e) { switch (j) { case 1: case 2: case 3: var n = 3; break; default: n = j; } const t = j; j = n; try { return e(); } finally { j = t; } }, n.unstable_pauseExecution = function () {}, n.unstable_requestPaint = N, n.unstable_runWithPriority = function (e, n) { switch (e) { case 1: case 2: case 3: case 4: case 5: break; default: e = 3; } const t = j; j = e; try { return n(); } finally { j = t; } }, n.unstable_scheduleCallback = function (e, o, l) {
      const i = n.unstable_now(); switch (l = typeof l === 'object' && l !== null && typeof (l = l.delay) === 'number' && l > 0 ? i + l : i, e) { case 1: var u = -1; break; case 2: u = 250; break; case 5: u = 1073741823; break; case 4: u = 1e4; break; default: u = 5e3; } return e = {
        id: I++, callback: o, priorityLevel: e, startTime: l, expirationTime: u = l + u, sortIndex: -1,
      }, l > i ? (e.sortIndex = l, T(F, e), g(P) === null && e === g(F) && (q ? a() : q = !0, r(Y, l - i))) : (e.sortIndex = u, T(P, e), L || A || (L = !0, t(E))), e;
    }, n.unstable_wrapCallback = function (e) { const n = j; return function () { const t = j; j = n; try { return e.apply(this, arguments); } finally { j = t; } }; };
  },
  840: (e, n, t) => { e.exports = t(53); },
}]);