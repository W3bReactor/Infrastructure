(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([[794], {
  704: (n, e, t) => {
    t.d(e, { zt: () => f, I0: () => p, v9: () => g }); const r = t(294); const u = r.createContext(null); let c = function (n) { n(); }; const o = function () { return c; }; const i = { notify() {}, get() { return []; } }; function a(n, e) {
      let t; let r = i; function u() { a.onStateChange && a.onStateChange(); } function c() {
        t || (t = e ? e.addNestedSub(u) : n.subscribe(u), r = (function () {
          const n = o(); let e = null; let t = null; return {
            clear() { e = null, t = null; }, notify() { n((() => { for (let n = e; n;)n.callback(), n = n.next; })); }, get() { for (var n = [], t = e; t;)n.push(t), t = t.next; return n; }, subscribe(n) { let r = !0; const u = t = { callback: n, next: null, prev: t }; return u.prev ? u.prev.next = u : e = u, function () { r && e !== null && (r = !1, u.next ? u.next.prev = u.prev : t = u.prev, u.prev ? u.prev.next = u.next : e = u.next); }; },
          };
        }()));
      } var a = {
        addNestedSub(n) { return c(), r.subscribe(n); }, notifyNestedSubs() { r.notify(); }, handleChangeWrapper: u, isSubscribed() { return Boolean(t); }, trySubscribe: c, tryUnsubscribe() { t && (t(), t = void 0, r.clear(), r = i); }, getListeners() { return r; },
      }; return a;
    } const s = typeof window !== 'undefined' && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect; const f = function (n) { const e = n.store; const t = n.context; const c = n.children; const o = (0, r.useMemo)((() => { const n = a(e); return { store: e, subscription: n }; }), [e]); const i = (0, r.useMemo)((() => e.getState()), [e]); s((() => { const n = o.subscription; return n.onStateChange = n.notifyNestedSubs, n.trySubscribe(), i !== e.getState() && n.notifyNestedSubs(), function () { n.tryUnsubscribe(), n.onStateChange = null; }; }), [o, i]); const f = t || u; return r.createElement(f.Provider, { value: o }, c); }; function v() { return (0, r.useContext)(u); } function d(n) { void 0 === n && (n = u); const e = n === u ? v : function () { return (0, r.useContext)(n); }; return function () { return e().store; }; }t(679), t(864), t(462); const b = d(); function l(n) { void 0 === n && (n = u); const e = n === u ? b : d(n); return function () { return e().dispatch; }; } var p = l(); const h = function (n, e) { return n === e; }; function S(n) { void 0 === n && (n = u); const e = n === u ? v : function () { return (0, r.useContext)(n); }; return function (n, t) { void 0 === t && (t = h); const u = e(); const c = (function (n, e, t, u) { let c; const o = (0, r.useReducer)(((n) => n + 1), 0)[1]; const i = (0, r.useMemo)((() => a(t, u)), [t, u]); const f = (0, r.useRef)(); const v = (0, r.useRef)(); const d = (0, r.useRef)(); const b = (0, r.useRef)(); const l = t.getState(); try { if (n !== v.current || l !== d.current || f.current) { const p = n(l); c = void 0 !== b.current && e(p, b.current) ? b.current : p; } else c = b.current; } catch (n) { throw f.current && (n.message += `\nThe error may be correlated with this previous error:\n${f.current.stack}\n\n`), n; } return s((() => { v.current = n, d.current = l, b.current = c, f.current = void 0; })), s((() => { function n() { try { const n = t.getState(); if (n === d.current) return; const r = v.current(n); if (e(r, b.current)) return; b.current = r, d.current = n; } catch (n) { f.current = n; }o(); } return i.onStateChange = n, i.trySubscribe(), n(), function () { return i.tryUnsubscribe(); }; }), [t, i]), c; }(n, t, u.store, u.subscription)); return (0, r.useDebugValue)(c), c; }; } let y; var g = S(); y = t(935).unstable_batchedUpdates, c = y;
  },
}]);