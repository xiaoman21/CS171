import * as it from "react";
import P, { isValidElement as gt, Children as lr, PureComponent as Bt, forwardRef as Xp, useRef as Vi, useImperativeHandle as km, useState as At, useCallback as Nm, useEffect as Za, useMemo as Yp, cloneElement as Se, createElement as Zp, useContext as Lt, createContext as br, Component as Jp } from "react";
var Ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qp = { exports: {} }, Ja = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm = P, Im = Symbol.for("react.element"), Bm = Symbol.for("react.fragment"), Lm = Object.prototype.hasOwnProperty, Rm = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function ed(e, t, r) {
  var n, i = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Lm.call(t, n) && !Fm.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Im, type: e, key: a, ref: o, props: i, _owner: Rm.current };
}
Ja.Fragment = Bm;
Ja.jsx = ed;
Ja.jsxs = ed;
Qp.exports = Ja;
var S = Qp.exports;
function K(e) {
  if (typeof e == "number") return e;
  const t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
async function zm() {
  try {
    const r = (await (await fetch("/tbl_AnnualChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((l, h) => {
        var d;
        o[l.trim()] = ((d = a[h]) == null ? void 0 : d.trim()) || "";
      });
      const s = K(o.shorts_uploads), u = K(o.total_uploads), c = K(o.views_from_shorts_total || 0), f = K(o.total_views);
      return {
        channelKey: o.channelKey,
        year: K(o.year),
        is_ytd: o.is_ytd === "True" || o.is_ytd === "true",
        total_uploads: u,
        shorts_uploads: s,
        total_views: f,
        views_from_shorts_total: c,
        normal_uploads: K(o.normal_uploads),
        normal_views: K(o.normal_views),
        uploads_shorts_share: K(o.uploads_shorts_share),
        percent_views_from_shorts_from_total: K(o.percent_views_from_shorts_from_total),
        engagement_per_1k_views: K(o.engagement_per_1k_views),
        avg_duration_seconds: K(o.avg_duration_seconds),
        likes_per_1k_views: K(o.likes_per_1k_views),
        comments_per_1k_views: K(o.comments_per_1k_views),
        jan_views: K(o.jan_views),
        feb_views: K(o.feb_views),
        mar_views: K(o.mar_views),
        apr_views: K(o.apr_views),
        may_views: K(o.may_views),
        jun_views: K(o.jun_views),
        jul_views: K(o.jul_views),
        aug_views: K(o.aug_views),
        sep_views: K(o.sep_views),
        oct_views: K(o.oct_views),
        nov_views: K(o.nov_views),
        dec_views: K(o.dec_views)
      };
    });
  } catch (e) {
    return console.error("Error loading annual data:", e), [];
  }
}
async function Wm() {
  try {
    const r = (await (await fetch("/tbl_MonthlyChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((d, y) => {
        var p;
        o[d.trim()] = ((p = a[y]) == null ? void 0 : p.trim()) || "";
      });
      const s = K(o.uploads_short_count), u = K(o.uploads_count), c = K(o.uploads_normal), f = K(o.views_shorts), l = K(o.views_total), h = K(o.views_normal);
      return {
        channelKey: o.channelKey,
        year: K(o.year),
        month: o.month,
        uploads_count: u,
        uploads_short_count: s,
        uploads_normal: c,
        views_total: l,
        views_shorts: f,
        views_normal: h,
        avg_views_per_video: K(o.avg_views_per_video),
        avg_duration_seconds: K(o.avg_duration_seconds),
        likes_per_1k_views: K(o.likes_per_1k_views),
        comments_per_1k_views: K(o.comments_per_1k_views),
        engagement_per_1k_views: K(o.engagement_per_1k_views),
        percent_views_from_shorts_from_total: K(o.percent_views_from_shorts_from_total),
        views_mom_pct: K(o.views_mom_pct),
        views_share_across_channels: K(o.views_share_across_channels),
        uploads_shorts_share: K(o.uploads_shorts_share)
      };
    });
  } catch (e) {
    return console.error("Error loading monthly data:", e), [];
  }
}
async function Um() {
  try {
    const r = (await (await fetch("/tbl_MonthlyShortVsLong.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      return n.forEach((s, u) => {
        var c;
        o[s.trim()] = ((c = a[u]) == null ? void 0 : c.trim()) || "";
      }), {
        channelKey: o.channelKey,
        year: K(o.year),
        month: o.month,
        uploads_count_Normal: K(o.uploads_count_Normal),
        uploads_count_Short: K(o.uploads_count_Short),
        views_total_Normal: K(o.views_total_Normal),
        views_total_Short: K(o.views_total_Short),
        likes_per_1k_views_Normal: K(o.likes_per_1k_views_Normal),
        likes_per_1k_views_Short: K(o.likes_per_1k_views_Short),
        comments_per_1k_views_Normal: K(o.comments_per_1k_views_Normal),
        comments_per_1k_views_Short: K(o.comments_per_1k_views_Short),
        engagement_per_1k_views_Normal: K(o.engagement_per_1k_views_Normal),
        engagement_per_1k_views_Short: K(o.engagement_per_1k_views_Short),
        avg_views_per_video_Normal: K(o.avg_views_per_video_Normal),
        avg_views_per_video_Short: K(o.avg_views_per_video_Short),
        avg_duration_seconds_Normal: K(o.avg_duration_seconds_Normal),
        avg_duration_seconds_Short: K(o.avg_duration_seconds_Short),
        uploads_share_within_channel_month_Normal: K(o.uploads_share_within_channel_month_Normal),
        uploads_share_within_channel_month_Short: K(o.uploads_share_within_channel_month_Short),
        views_share_within_channel_month_Normal: K(o.views_share_within_channel_month_Normal),
        views_share_within_channel_month_Short: K(o.views_share_within_channel_month_Short),
        avg_views_per_video_short_div_normal: K(o.avg_views_per_video_short_div_normal),
        engagement_per_1k_views_short_div_normal: K(o.engagement_per_1k_views_short_div_normal)
      };
    });
  } catch (e) {
    return console.error("Error loading short vs long data:", e), [];
  }
}
async function Km() {
  const [e, t, r] = await Promise.all([
    zm(),
    Wm(),
    Um()
  ]);
  return { annual: e, monthly: t, shortVsLong: r };
}
const ki = {
  overview: {
    title: "Overview",
    description: "Compares how much each channel invests in Shorts vs how much viewership Shorts generate."
  },
  "channel-drilldown": {
    title: "Channel Drill-down",
    description: "Shows how one channel's strategy evolved month by month."
  },
  "short-vs-long": {
    title: "Short vs Long",
    description: "Compares the per-video performance of Shorts vs long-form content."
  }
}, qm = ({
  filters: e,
  allChannels: t,
  onFilterChange: r
}) => {
  const n = (s) => {
    const u = e.selectedChannels.includes(s) ? e.selectedChannels.filter((c) => c !== s) : [...e.selectedChannels, s];
    r({ selectedChannels: u });
  }, i = () => {
    r({ selectedChannels: t });
  }, a = () => {
    r({ selectedChannels: [] });
  }, o = (s) => s.replace("@", "");
  return /* @__PURE__ */ S.jsxs("div", { className: "dashboard-controls", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "control-group", children: [
      /* @__PURE__ */ S.jsx("label", { className: "control-label", children: "Year" }),
      /* @__PURE__ */ S.jsxs("div", { className: "year-selector-group", children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            className: `year-btn ${e.year === 2024 ? "active" : ""}`,
            onClick: () => r({ year: 2024 }),
            children: "2024"
          }
        ),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            className: `year-btn ${e.year === 2025 ? "active" : ""}`,
            onClick: () => r({ year: 2025 }),
            children: "2025 YTD"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "control-group", children: [
      /* @__PURE__ */ S.jsx("label", { className: "control-label", children: "Channels" }),
      /* @__PURE__ */ S.jsxs("div", { className: "channel-actions", children: [
        /* @__PURE__ */ S.jsx("button", { className: "action-btn", onClick: i, children: "Select All" }),
        /* @__PURE__ */ S.jsx("button", { className: "action-btn", onClick: a, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "channel-list", children: t.map((s) => /* @__PURE__ */ S.jsxs("label", { className: "channel-checkbox", children: [
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "checkbox",
            checked: e.selectedChannels.includes(s),
            onChange: () => n(s)
          }
        ),
        /* @__PURE__ */ S.jsx("span", { className: "channel-name", children: o(s) })
      ] }, s)) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "control-group", children: [
      /* @__PURE__ */ S.jsx("label", { className: "control-label", children: "View Mode" }),
      /* @__PURE__ */ S.jsx("div", { className: "view-mode-tabs", children: Object.keys(ki).map((s) => /* @__PURE__ */ S.jsx(
        "button",
        {
          className: `view-mode-btn ${e.viewMode === s ? "active" : ""}`,
          onClick: () => r({ viewMode: s }),
          children: ki[s].title
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "control-group", children: /* @__PURE__ */ S.jsxs("div", { className: "view-description", children: [
      /* @__PURE__ */ S.jsx("h4", { className: "view-description-title", children: ki[e.viewMode].title }),
      /* @__PURE__ */ S.jsx("p", { className: "view-description-text", children: ki[e.viewMode].description })
    ] }) })
  ] });
};
function td(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = td(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ee() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = td(e)) && (n && (n += " "), n += t);
  return n;
}
var Hm = Array.isArray, qe = Hm, Gm = typeof Ci == "object" && Ci && Ci.Object === Object && Ci, rd = Gm, Vm = rd, Xm = typeof self == "object" && self && self.Object === Object && self, Ym = Vm || Xm || Function("return this")(), Ot = Ym, Zm = Ot, Jm = Zm.Symbol, _i = Jm, tl = _i, nd = Object.prototype, Qm = nd.hasOwnProperty, eg = nd.toString, _n = tl ? tl.toStringTag : void 0;
function tg(e) {
  var t = Qm.call(e, _n), r = e[_n];
  try {
    e[_n] = void 0;
    var n = !0;
  } catch {
  }
  var i = eg.call(e);
  return n && (t ? e[_n] = r : delete e[_n]), i;
}
var rg = tg, ng = Object.prototype, ig = ng.toString;
function ag(e) {
  return ig.call(e);
}
var og = ag, rl = _i, sg = rg, ug = og, cg = "[object Null]", lg = "[object Undefined]", nl = rl ? rl.toStringTag : void 0;
function fg(e) {
  return e == null ? e === void 0 ? lg : cg : nl && nl in Object(e) ? sg(e) : ug(e);
}
var Rt = fg;
function hg(e) {
  return e != null && typeof e == "object";
}
var Ft = hg, pg = Rt, dg = Ft, vg = "[object Symbol]";
function yg(e) {
  return typeof e == "symbol" || dg(e) && pg(e) == vg;
}
var sn = yg, mg = qe, gg = sn, bg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xg = /^\w*$/;
function wg(e, t) {
  if (mg(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || gg(e) ? !0 : xg.test(e) || !bg.test(e) || t != null && e in Object(t);
}
var Ku = wg;
function _g(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vt = _g;
const un = /* @__PURE__ */ ce(Vt);
var Og = Rt, Sg = Vt, Ag = "[object AsyncFunction]", Pg = "[object Function]", $g = "[object GeneratorFunction]", jg = "[object Proxy]";
function Tg(e) {
  if (!Sg(e))
    return !1;
  var t = Og(e);
  return t == Pg || t == $g || t == Ag || t == jg;
}
var qu = Tg;
const Z = /* @__PURE__ */ ce(qu);
var Eg = Ot, Mg = Eg["__core-js_shared__"], Cg = Mg, Uo = Cg, il = function() {
  var e = /[^.]+$/.exec(Uo && Uo.keys && Uo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function kg(e) {
  return !!il && il in e;
}
var Ng = kg, Dg = Function.prototype, Ig = Dg.toString;
function Bg(e) {
  if (e != null) {
    try {
      return Ig.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var id = Bg, Lg = qu, Rg = Ng, Fg = Vt, zg = id, Wg = /[\\^$.*+?()[\]{}|]/g, Ug = /^\[object .+?Constructor\]$/, Kg = Function.prototype, qg = Object.prototype, Hg = Kg.toString, Gg = qg.hasOwnProperty, Vg = RegExp(
  "^" + Hg.call(Gg).replace(Wg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xg(e) {
  if (!Fg(e) || Rg(e))
    return !1;
  var t = Lg(e) ? Vg : Ug;
  return t.test(zg(e));
}
var Yg = Xg;
function Zg(e, t) {
  return e == null ? void 0 : e[t];
}
var Jg = Zg, Qg = Yg, eb = Jg;
function tb(e, t) {
  var r = eb(e, t);
  return Qg(r) ? r : void 0;
}
var xr = tb, rb = xr, nb = rb(Object, "create"), Qa = nb, al = Qa;
function ib() {
  this.__data__ = al ? al(null) : {}, this.size = 0;
}
var ab = ib;
function ob(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sb = ob, ub = Qa, cb = "__lodash_hash_undefined__", lb = Object.prototype, fb = lb.hasOwnProperty;
function hb(e) {
  var t = this.__data__;
  if (ub) {
    var r = t[e];
    return r === cb ? void 0 : r;
  }
  return fb.call(t, e) ? t[e] : void 0;
}
var pb = hb, db = Qa, vb = Object.prototype, yb = vb.hasOwnProperty;
function mb(e) {
  var t = this.__data__;
  return db ? t[e] !== void 0 : yb.call(t, e);
}
var gb = mb, bb = Qa, xb = "__lodash_hash_undefined__";
function wb(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = bb && t === void 0 ? xb : t, this;
}
var _b = wb, Ob = ab, Sb = sb, Ab = pb, Pb = gb, $b = _b;
function cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cn.prototype.clear = Ob;
cn.prototype.delete = Sb;
cn.prototype.get = Ab;
cn.prototype.has = Pb;
cn.prototype.set = $b;
var jb = cn;
function Tb() {
  this.__data__ = [], this.size = 0;
}
var Eb = Tb;
function Mb(e, t) {
  return e === t || e !== e && t !== t;
}
var Hu = Mb, Cb = Hu;
function kb(e, t) {
  for (var r = e.length; r--; )
    if (Cb(e[r][0], t))
      return r;
  return -1;
}
var eo = kb, Nb = eo, Db = Array.prototype, Ib = Db.splice;
function Bb(e) {
  var t = this.__data__, r = Nb(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ib.call(t, r, 1), --this.size, !0;
}
var Lb = Bb, Rb = eo;
function Fb(e) {
  var t = this.__data__, r = Rb(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var zb = Fb, Wb = eo;
function Ub(e) {
  return Wb(this.__data__, e) > -1;
}
var Kb = Ub, qb = eo;
function Hb(e, t) {
  var r = this.__data__, n = qb(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Gb = Hb, Vb = Eb, Xb = Lb, Yb = zb, Zb = Kb, Jb = Gb;
function ln(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ln.prototype.clear = Vb;
ln.prototype.delete = Xb;
ln.prototype.get = Yb;
ln.prototype.has = Zb;
ln.prototype.set = Jb;
var to = ln, Qb = xr, e0 = Ot, t0 = Qb(e0, "Map"), Gu = t0, ol = jb, r0 = to, n0 = Gu;
function i0() {
  this.size = 0, this.__data__ = {
    hash: new ol(),
    map: new (n0 || r0)(),
    string: new ol()
  };
}
var a0 = i0;
function o0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var s0 = o0, u0 = s0;
function c0(e, t) {
  var r = e.__data__;
  return u0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ro = c0, l0 = ro;
function f0(e) {
  var t = l0(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var h0 = f0, p0 = ro;
function d0(e) {
  return p0(this, e).get(e);
}
var v0 = d0, y0 = ro;
function m0(e) {
  return y0(this, e).has(e);
}
var g0 = m0, b0 = ro;
function x0(e, t) {
  var r = b0(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var w0 = x0, _0 = a0, O0 = h0, S0 = v0, A0 = g0, P0 = w0;
function fn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = _0;
fn.prototype.delete = O0;
fn.prototype.get = S0;
fn.prototype.has = A0;
fn.prototype.set = P0;
var Vu = fn, ad = Vu, $0 = "Expected a function";
function Xu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError($0);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Xu.Cache || ad)(), r;
}
Xu.Cache = ad;
var od = Xu;
const j0 = /* @__PURE__ */ ce(od);
var T0 = od, E0 = 500;
function M0(e) {
  var t = T0(e, function(n) {
    return r.size === E0 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var C0 = M0, k0 = C0, N0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, D0 = /\\(\\)?/g, I0 = k0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(N0, function(r, n, i, a) {
    t.push(i ? a.replace(D0, "$1") : n || r);
  }), t;
}), B0 = I0;
function L0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Yu = L0, sl = _i, R0 = Yu, F0 = qe, z0 = sn, ul = sl ? sl.prototype : void 0, cl = ul ? ul.toString : void 0;
function sd(e) {
  if (typeof e == "string")
    return e;
  if (F0(e))
    return R0(e, sd) + "";
  if (z0(e))
    return cl ? cl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var W0 = sd, U0 = W0;
function K0(e) {
  return e == null ? "" : U0(e);
}
var ud = K0, q0 = qe, H0 = Ku, G0 = B0, V0 = ud;
function X0(e, t) {
  return q0(e) ? e : H0(e, t) ? [e] : G0(V0(e));
}
var cd = X0, Y0 = sn;
function Z0(e) {
  if (typeof e == "string" || Y0(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var no = Z0, J0 = cd, Q0 = no;
function ex(e, t) {
  t = J0(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Q0(t[r++])];
  return r && r == n ? e : void 0;
}
var Zu = ex, tx = Zu;
function rx(e, t, r) {
  var n = e == null ? void 0 : tx(e, t);
  return n === void 0 ? r : n;
}
var ld = rx;
const at = /* @__PURE__ */ ce(ld);
function nx(e) {
  return e == null;
}
var ix = nx;
const X = /* @__PURE__ */ ce(ix);
var ax = Rt, ox = qe, sx = Ft, ux = "[object String]";
function cx(e) {
  return typeof e == "string" || !ox(e) && sx(e) && ax(e) == ux;
}
var lx = cx;
const dr = /* @__PURE__ */ ce(lx);
var fd = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ju = Symbol.for("react.element"), Qu = Symbol.for("react.portal"), io = Symbol.for("react.fragment"), ao = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), so = Symbol.for("react.provider"), uo = Symbol.for("react.context"), fx = Symbol.for("react.server_context"), co = Symbol.for("react.forward_ref"), lo = Symbol.for("react.suspense"), fo = Symbol.for("react.suspense_list"), ho = Symbol.for("react.memo"), po = Symbol.for("react.lazy"), hx = Symbol.for("react.offscreen"), hd;
hd = Symbol.for("react.module.reference");
function st(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ju:
        switch (e = e.type, e) {
          case io:
          case oo:
          case ao:
          case lo:
          case fo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case fx:
              case uo:
              case co:
              case po:
              case ho:
              case so:
                return e;
              default:
                return t;
            }
        }
      case Qu:
        return t;
    }
  }
}
ie.ContextConsumer = uo;
ie.ContextProvider = so;
ie.Element = Ju;
ie.ForwardRef = co;
ie.Fragment = io;
ie.Lazy = po;
ie.Memo = ho;
ie.Portal = Qu;
ie.Profiler = oo;
ie.StrictMode = ao;
ie.Suspense = lo;
ie.SuspenseList = fo;
ie.isAsyncMode = function() {
  return !1;
};
ie.isConcurrentMode = function() {
  return !1;
};
ie.isContextConsumer = function(e) {
  return st(e) === uo;
};
ie.isContextProvider = function(e) {
  return st(e) === so;
};
ie.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ju;
};
ie.isForwardRef = function(e) {
  return st(e) === co;
};
ie.isFragment = function(e) {
  return st(e) === io;
};
ie.isLazy = function(e) {
  return st(e) === po;
};
ie.isMemo = function(e) {
  return st(e) === ho;
};
ie.isPortal = function(e) {
  return st(e) === Qu;
};
ie.isProfiler = function(e) {
  return st(e) === oo;
};
ie.isStrictMode = function(e) {
  return st(e) === ao;
};
ie.isSuspense = function(e) {
  return st(e) === lo;
};
ie.isSuspenseList = function(e) {
  return st(e) === fo;
};
ie.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === io || e === oo || e === ao || e === lo || e === fo || e === hx || typeof e == "object" && e !== null && (e.$$typeof === po || e.$$typeof === ho || e.$$typeof === so || e.$$typeof === uo || e.$$typeof === co || e.$$typeof === hd || e.getModuleId !== void 0);
};
ie.typeOf = st;
fd.exports = ie;
var px = fd.exports, dx = Rt, vx = Ft, yx = "[object Number]";
function mx(e) {
  return typeof e == "number" || vx(e) && dx(e) == yx;
}
var pd = mx;
const gx = /* @__PURE__ */ ce(pd);
var bx = pd;
function xx(e) {
  return bx(e) && e != +e;
}
var wx = xx;
const Oi = /* @__PURE__ */ ce(wx);
var pt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, or = function(t) {
  return dr(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return gx(t) && !Oi(t);
}, _x = function(t) {
  return X(t);
}, Ae = function(t) {
  return L(t) || dr(t);
}, Ox = 0, hn = function(t) {
  var r = ++Ox;
  return "".concat(t || "").concat(r);
}, vr = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!L(t) && !dr(t))
    return n;
  var a;
  if (or(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Oi(a) && (a = n), i && a > r && (a = r), a;
}, Kt = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, Sx = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, Re = function(t, r) {
  return L(t) && L(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Xi(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : at(n, t)) === r;
  });
}
var Ax = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, s = 1 / 0, u = -1 / 0, c = 0, f = 0, l = 0; l < r; l++)
    c = t[l].cx || 0, f = t[l].cy || 0, n += c, i += f, a += c * f, o += c * c, s = Math.min(s, c), u = Math.max(u, c);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return {
    xmin: s,
    xmax: u,
    a: h,
    b: (i - h * n) / r
  };
}, Px = function(t, r) {
  return L(t) && L(r) ? t - r : dr(t) && dr(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function kr(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function ms(e) {
  "@babel/helpers - typeof";
  return ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ms(e);
}
var $x = ["viewBox", "children"], jx = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], ll = ["points", "pathLength"], Ko = {
  svg: $x,
  polygon: ll,
  polyline: ll
}, ec = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Yi = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ gt(t) && (n = t.props), !un(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    ec.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, Tx = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Fn = function(t, r, n) {
  if (!un(t) || ms(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    ec.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = Tx(o, r, n));
  }), i;
}, Ex = ["children"], Mx = ["children"];
function fl(e, t) {
  if (e == null) return {};
  var r = Cx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Cx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function gs(e) {
  "@babel/helpers - typeof";
  return gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gs(e);
}
var hl = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, Et = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, pl = null, qo = null, tc = function e(t) {
  if (t === pl && Array.isArray(qo))
    return qo;
  var r = [];
  return lr.forEach(t, function(n) {
    X(n) || (px.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), qo = r, pl = t, r;
};
function Ke(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Et(i);
  }) : n = [Et(t)], tc(e).forEach(function(i) {
    var a = at(i, "type.displayName") || at(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Xe(e, t) {
  var r = Ke(e, t);
  return r && r[0];
}
var dl = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, kx = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Nx = function(t) {
  return t && t.type && dr(t.type) && kx.indexOf(t.type) >= 0;
}, Dx = function(t) {
  return t && gs(t) === "object" && "clipDot" in t;
}, Ix = function(t, r, n, i) {
  var a, o = (a = Ko == null ? void 0 : Ko[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Z(t) && (i && o.includes(r) || jx.includes(r)) || n && ec.includes(r);
}, Q = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ gt(t) && (i = t.props), !un(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    Ix((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, bs = function e(t, r) {
  if (t === r)
    return !0;
  var n = lr.count(t);
  if (n !== lr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return vl(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!vl(a, o))
      return !1;
  }
  return !0;
}, vl = function(t, r) {
  if (X(t) && X(r))
    return !0;
  if (!X(t) && !X(r)) {
    var n = t.props || {}, i = n.children, a = fl(n, Ex), o = r.props || {}, s = o.children, u = fl(o, Mx);
    return i && s ? kr(a, u) && bs(i, s) : !i && !s ? kr(a, u) : !1;
  }
  return !1;
}, yl = function(t, r) {
  var n = [], i = {};
  return tc(t).forEach(function(a, o) {
    if (Nx(a))
      n.push(a);
    else if (a) {
      var s = Et(a.type), u = r[s] || {}, c = u.handler, f = u.once;
      if (c && (!f || !i[s])) {
        var l = c(a, s, o);
        n.push(l), i[s] = !0;
      }
    }
  }), n;
}, Bx = function(t) {
  var r = t && t.type;
  return r && hl[r] ? hl[r] : null;
}, Lx = function(t, r) {
  return tc(r).indexOf(t);
}, Rx = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function xs() {
  return xs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xs.apply(this, arguments);
}
function Fx(e, t) {
  if (e == null) return {};
  var r = zx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ws(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = e.title, u = e.desc, c = Fx(e, Rx), f = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = ee("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", xs({}, Q(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ P.createElement("title", null, s), /* @__PURE__ */ P.createElement("desc", null, u), t);
}
var Wx = ["children", "className"];
function _s() {
  return _s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _s.apply(this, arguments);
}
function Ux(e, t) {
  if (e == null) return {};
  var r = Kx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Kx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ue = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = Ux(e, Wx), a = ee("recharts-layer", n);
  return /* @__PURE__ */ P.createElement("g", _s({
    className: a
  }, Q(i, !0), {
    ref: t
  }), r);
}), Mt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
};
function qx(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var Hx = qx, Gx = Hx;
function Vx(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Gx(e, t, r);
}
var Xx = Vx, Yx = "\\ud800-\\udfff", Zx = "\\u0300-\\u036f", Jx = "\\ufe20-\\ufe2f", Qx = "\\u20d0-\\u20ff", ew = Zx + Jx + Qx, tw = "\\ufe0e\\ufe0f", rw = "\\u200d", nw = RegExp("[" + rw + Yx + ew + tw + "]");
function iw(e) {
  return nw.test(e);
}
var dd = iw;
function aw(e) {
  return e.split("");
}
var ow = aw, vd = "\\ud800-\\udfff", sw = "\\u0300-\\u036f", uw = "\\ufe20-\\ufe2f", cw = "\\u20d0-\\u20ff", lw = sw + uw + cw, fw = "\\ufe0e\\ufe0f", hw = "[" + vd + "]", Os = "[" + lw + "]", Ss = "\\ud83c[\\udffb-\\udfff]", pw = "(?:" + Os + "|" + Ss + ")", yd = "[^" + vd + "]", md = "(?:\\ud83c[\\udde6-\\uddff]){2}", gd = "[\\ud800-\\udbff][\\udc00-\\udfff]", dw = "\\u200d", bd = pw + "?", xd = "[" + fw + "]?", vw = "(?:" + dw + "(?:" + [yd, md, gd].join("|") + ")" + xd + bd + ")*", yw = xd + bd + vw, mw = "(?:" + [yd + Os + "?", Os, md, gd, hw].join("|") + ")", gw = RegExp(Ss + "(?=" + Ss + ")|" + mw + yw, "g");
function bw(e) {
  return e.match(gw) || [];
}
var xw = bw, ww = ow, _w = dd, Ow = xw;
function Sw(e) {
  return _w(e) ? Ow(e) : ww(e);
}
var Aw = Sw, Pw = Xx, $w = dd, jw = Aw, Tw = ud;
function Ew(e) {
  return function(t) {
    t = Tw(t);
    var r = $w(t) ? jw(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Pw(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var Mw = Ew, Cw = Mw, kw = Cw("toUpperCase"), Nw = kw;
const vo = /* @__PURE__ */ ce(Nw);
function se(e) {
  return function() {
    return e;
  };
}
const wd = Math.cos, Zi = Math.sin, vt = Math.sqrt, Ji = Math.PI, yo = 2 * Ji, As = Math.PI, Ps = 2 * As, nr = 1e-6, Dw = Ps - nr;
function _d(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Iw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _d;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class Bw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _d : Iw(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, u = n - t, c = i - r, f = o - t, l = s - r, h = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (h > nr) if (!(Math.abs(l * u - c * f) > nr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - o, y = i - s, p = u * u + c * c, v = d * d + y * y, g = Math.sqrt(p), _ = Math.sqrt(h), x = a * Math.tan((As - Math.acos((p + h - v) / (2 * g * _))) / 2), w = x / _, m = x / g;
      Math.abs(w - 1) > nr && this._append`L${t + w * f},${r + w * l}`, this._append`A${a},${a},0,0,${+(l * d > f * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), u = n * Math.sin(i), c = t + s, f = r + u, l = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > nr || Math.abs(this._y1 - f) > nr) && this._append`L${c},${f}`, n && (h < 0 && (h = h % Ps + Ps), h > Dw ? this._append`A${n},${n},0,1,${l},${t - s},${r - u}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : h > nr && this._append`A${n},${n},0,${+(h >= As)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function rc(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new Bw(t);
}
function nc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Od(e) {
  this._context = e;
}
Od.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function mo(e) {
  return new Od(e);
}
function Sd(e) {
  return e[0];
}
function Ad(e) {
  return e[1];
}
function Pd(e, t) {
  var r = se(!0), n = null, i = mo, a = null, o = rc(s);
  e = typeof e == "function" ? e : e === void 0 ? Sd : se(e), t = typeof t == "function" ? t : t === void 0 ? Ad : se(t);
  function s(u) {
    var c, f = (u = nc(u)).length, l, h = !1, d;
    for (n == null && (a = i(d = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = u[c], c, u)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e(l, c, u), +t(l, c, u));
    if (d) return a = null, d + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : se(+u), s) : e;
  }, s.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : se(+u), s) : t;
  }, s.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : se(!!u), s) : r;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, n != null && (a = i(n)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? n = a = null : a = i(n = u), s) : n;
  }, s;
}
function Ni(e, t, r) {
  var n = null, i = se(!0), a = null, o = mo, s = null, u = rc(c);
  e = typeof e == "function" ? e : e === void 0 ? Sd : se(+e), t = typeof t == "function" ? t : se(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ad : se(+r);
  function c(l) {
    var h, d, y, p = (l = nc(l)).length, v, g = !1, _, x = new Array(p), w = new Array(p);
    for (a == null && (s = o(_ = u())), h = 0; h <= p; ++h) {
      if (!(h < p && i(v = l[h], h, l)) === g)
        if (g = !g)
          d = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), y = h - 1; y >= d; --y)
            s.point(x[y], w[y]);
          s.lineEnd(), s.areaEnd();
        }
      g && (x[h] = +e(v, h, l), w[h] = +t(v, h, l), s.point(n ? +n(v, h, l) : x[h], r ? +r(v, h, l) : w[h]));
    }
    if (_) return s = null, _ + "" || null;
  }
  function f() {
    return Pd().defined(i).curve(o).context(a);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : se(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : se(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : se(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : se(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : se(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : se(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : se(!!l), c) : i;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, a != null && (s = o(a)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? a = s = null : s = o(a = l), c) : a;
  }, c;
}
class $d {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Lw(e) {
  return new $d(e, !0);
}
function Rw(e) {
  return new $d(e, !1);
}
const ic = {
  draw(e, t) {
    const r = vt(t / Ji);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, yo);
  }
}, Fw = {
  draw(e, t) {
    const r = vt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, jd = vt(1 / 3), zw = jd * 2, Ww = {
  draw(e, t) {
    const r = vt(t / zw), n = r * jd;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Uw = {
  draw(e, t) {
    const r = vt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Kw = 0.8908130915292852, Td = Zi(Ji / 10) / Zi(7 * Ji / 10), qw = Zi(yo / 10) * Td, Hw = -wd(yo / 10) * Td, Gw = {
  draw(e, t) {
    const r = vt(t * Kw), n = qw * r, i = Hw * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = yo * a / 5, s = wd(o), u = Zi(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * i, u * n + s * i);
    }
    e.closePath();
  }
}, Ho = vt(3), Vw = {
  draw(e, t) {
    const r = -vt(t / (Ho * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ho * r, -r), e.lineTo(Ho * r, -r), e.closePath();
  }
}, Je = -0.5, Qe = vt(3) / 2, $s = 1 / vt(12), Xw = ($s / 2 + 1) * 3, Yw = {
  draw(e, t) {
    const r = vt(t / Xw), n = r / 2, i = r * $s, a = n, o = r * $s + r, s = -a, u = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, u), e.lineTo(Je * n - Qe * i, Qe * n + Je * i), e.lineTo(Je * a - Qe * o, Qe * a + Je * o), e.lineTo(Je * s - Qe * u, Qe * s + Je * u), e.lineTo(Je * n + Qe * i, Je * i - Qe * n), e.lineTo(Je * a + Qe * o, Je * o - Qe * a), e.lineTo(Je * s + Qe * u, Je * u - Qe * s), e.closePath();
  }
};
function Zw(e, t) {
  let r = null, n = rc(i);
  e = typeof e == "function" ? e : se(e || ic), t = typeof t == "function" ? t : se(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : se(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : se(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Qi() {
}
function ea(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Ed(e) {
  this._context = e;
}
Ed.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ea(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        ea(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Jw(e) {
  return new Ed(e);
}
function Md(e) {
  this._context = e;
}
Md.prototype = {
  areaStart: Qi,
  areaEnd: Qi,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        ea(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Qw(e) {
  return new Md(e);
}
function Cd(e) {
  this._context = e;
}
Cd.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        ea(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function e_(e) {
  return new Cd(e);
}
function kd(e) {
  this._context = e;
}
kd.prototype = {
  areaStart: Qi,
  areaEnd: Qi,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function t_(e) {
  return new kd(e);
}
function ml(e) {
  return e < 0 ? -1 : 1;
}
function gl(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (ml(a) + ml(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function bl(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Go(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function ta(e) {
  this._context = e;
}
ta.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Go(this, this._t0, bl(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Go(this, bl(this, r = gl(this, e, t)), r);
          break;
        default:
          Go(this, this._t0, r = gl(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Nd(e) {
  this._context = new Dd(e);
}
(Nd.prototype = Object.create(ta.prototype)).point = function(e, t) {
  ta.prototype.point.call(this, t, e);
};
function Dd(e) {
  this._context = e;
}
Dd.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function r_(e) {
  return new ta(e);
}
function n_(e) {
  return new Nd(e);
}
function Id(e) {
  this._context = e;
}
Id.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = xl(e), i = xl(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function xl(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function i_(e) {
  return new Id(e);
}
function go(e, t) {
  this._context = e, this._t = t;
}
go.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function a_(e) {
  return new go(e, 0.5);
}
function o_(e) {
  return new go(e, 0);
}
function s_(e) {
  return new go(e, 1);
}
function Ir(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function js(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function u_(e, t) {
  return e[t];
}
function c_(e) {
  const t = [];
  return t.key = e, t;
}
function l_() {
  var e = se([]), t = js, r = Ir, n = u_;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), c_), s, u = o.length, c = -1, f;
    for (const l of a)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(l, o[s].key, c, a)]).data = l;
    for (s = 0, f = nc(t(o)); s < u; ++s)
      o[f[s]].index = s;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : se(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : se(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? js : typeof a == "function" ? a : se(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Ir, i) : r;
  }, i;
}
function f_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ir(e, t);
  }
}
function h_(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Ir(e, t);
  }
}
function p_(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, u = 0, c = 0; s < o; ++s) {
        for (var f = e[t[s]], l = f[n][1] || 0, h = f[n - 1][1] || 0, d = (l - h) / 2, y = 0; y < s; ++y) {
          var p = e[t[y]], v = p[n][1] || 0, g = p[n - 1][1] || 0;
          d += v - g;
        }
        u += l, c += d * l;
      }
      i[n - 1][1] += i[n - 1][0] = r, u && (r -= c / u);
    }
    i[n - 1][1] += i[n - 1][0] = r, Ir(e, t);
  }
}
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
var d_ = ["type", "size", "sizeType"];
function Ts() {
  return Ts = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ts.apply(this, arguments);
}
function wl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wl(Object(r), !0).forEach(function(n) {
      v_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v_(e, t, r) {
  return t = y_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y_(e) {
  var t = m_(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function m_(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g_(e, t) {
  if (e == null) return {};
  var r = b_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Bd = {
  symbolCircle: ic,
  symbolCross: Fw,
  symbolDiamond: Ww,
  symbolSquare: Uw,
  symbolStar: Gw,
  symbolTriangle: Vw,
  symbolWye: Yw
}, x_ = Math.PI / 180, w_ = function(t) {
  var r = "symbol".concat(vo(t));
  return Bd[r] || ic;
}, __ = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * x_;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, O_ = function(t, r) {
  Bd["symbol".concat(vo(t))] = r;
}, bo = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, u = g_(t, d_), c = _l(_l({}, u), {}, {
    type: n,
    size: a,
    sizeType: s
  }), f = function() {
    var v = w_(n), g = Zw().type(v).size(__(a, s, n));
    return g();
  }, l = c.className, h = c.cx, d = c.cy, y = Q(c, !0);
  return h === +h && d === +d && a === +a ? /* @__PURE__ */ P.createElement("path", Ts({}, y, {
    className: ee("recharts-symbols", l),
    transform: "translate(".concat(h, ", ").concat(d, ")"),
    d: f()
  })) : null;
};
bo.registerSymbol = O_;
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Es.apply(this, arguments);
}
function Ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function S_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ol(Object(r), !0).forEach(function(n) {
      Wn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ol(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Rd(n.key), n);
  }
}
function $_(e, t, r) {
  return t && P_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function j_(e, t, r) {
  return t = ra(t), T_(e, Ld() ? Reflect.construct(t, r || [], ra(e).constructor) : t.apply(e, r));
}
function T_(e, t) {
  if (t && (Br(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return E_(e);
}
function E_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ld() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ld = function() {
    return !!e;
  })();
}
function ra(e) {
  return ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ra(e);
}
function M_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ms(e, t);
}
function Ms(e, t) {
  return Ms = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ms(e, t);
}
function Wn(e, t, r) {
  return t = Rd(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rd(e) {
  var t = C_(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function C_(e, t) {
  if (Br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var et = 32, ac = /* @__PURE__ */ function(e) {
  function t() {
    return A_(this, t), j_(this, t, arguments);
  }
  return M_(t, e), $_(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = et / 2, o = et / 6, s = et / 3, u = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ P.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: et,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ P.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(et, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ P.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(et / 8, "h").concat(et, "v").concat(et * 3 / 4, "h").concat(-et, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ P.isValidElement(n.legendIcon)) {
          var c = S_({}, n);
          return delete c.legendIcon, /* @__PURE__ */ P.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ P.createElement(bo, {
          fill: u,
          cx: a,
          cy: a,
          size: et,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, u = i.formatter, c = i.inactiveColor, f = {
        x: 0,
        y: 0,
        width: et,
        height: et
      }, l = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, h = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(d, y) {
        var p = d.formatter || u, v = ee(Wn(Wn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", d.inactive));
        if (d.type === "none")
          return null;
        var g = Z(d.value) ? null : d.value;
        Mt(
          !Z(d.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var _ = d.inactive ? c : d.color;
        return /* @__PURE__ */ P.createElement("li", Es({
          className: v,
          style: l,
          key: "legend-item-".concat(y)
        }, Fn(n.props, d, y)), /* @__PURE__ */ P.createElement(ws, {
          width: o,
          height: o,
          viewBox: f,
          style: h
        }, n.renderIcon(d)), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: _
          }
        }, p ? p(g, d, y) : g));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Bt);
Wn(ac, "displayName", "Legend");
Wn(ac, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var k_ = to;
function N_() {
  this.__data__ = new k_(), this.size = 0;
}
var D_ = N_;
function I_(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var B_ = I_;
function L_(e) {
  return this.__data__.get(e);
}
var R_ = L_;
function F_(e) {
  return this.__data__.has(e);
}
var z_ = F_, W_ = to, U_ = Gu, K_ = Vu, q_ = 200;
function H_(e, t) {
  var r = this.__data__;
  if (r instanceof W_) {
    var n = r.__data__;
    if (!U_ || n.length < q_ - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new K_(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var G_ = H_, V_ = to, X_ = D_, Y_ = B_, Z_ = R_, J_ = z_, Q_ = G_;
function pn(e) {
  var t = this.__data__ = new V_(e);
  this.size = t.size;
}
pn.prototype.clear = X_;
pn.prototype.delete = Y_;
pn.prototype.get = Z_;
pn.prototype.has = J_;
pn.prototype.set = Q_;
var Fd = pn, eO = "__lodash_hash_undefined__";
function tO(e) {
  return this.__data__.set(e, eO), this;
}
var rO = tO;
function nO(e) {
  return this.__data__.has(e);
}
var iO = nO, aO = Vu, oO = rO, sO = iO;
function na(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new aO(); ++t < r; )
    this.add(e[t]);
}
na.prototype.add = na.prototype.push = oO;
na.prototype.has = sO;
var zd = na;
function uO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Wd = uO;
function cO(e, t) {
  return e.has(t);
}
var Ud = cO, lO = zd, fO = Wd, hO = Ud, pO = 1, dO = 2;
function vO(e, t, r, n, i, a) {
  var o = r & pO, s = e.length, u = t.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var l = -1, h = !0, d = r & dO ? new lO() : void 0;
  for (a.set(e, t), a.set(t, e); ++l < s; ) {
    var y = e[l], p = t[l];
    if (n)
      var v = o ? n(p, y, l, t, e, a) : n(y, p, l, e, t, a);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (d) {
      if (!fO(t, function(g, _) {
        if (!hO(d, _) && (y === g || i(y, g, r, n, a)))
          return d.push(_);
      })) {
        h = !1;
        break;
      }
    } else if (!(y === p || i(y, p, r, n, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
var Kd = vO, yO = Ot, mO = yO.Uint8Array, gO = mO;
function bO(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var xO = bO;
function wO(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var oc = wO, Sl = _i, Al = gO, _O = Hu, OO = Kd, SO = xO, AO = oc, PO = 1, $O = 2, jO = "[object Boolean]", TO = "[object Date]", EO = "[object Error]", MO = "[object Map]", CO = "[object Number]", kO = "[object RegExp]", NO = "[object Set]", DO = "[object String]", IO = "[object Symbol]", BO = "[object ArrayBuffer]", LO = "[object DataView]", Pl = Sl ? Sl.prototype : void 0, Vo = Pl ? Pl.valueOf : void 0;
function RO(e, t, r, n, i, a, o) {
  switch (r) {
    case LO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case BO:
      return !(e.byteLength != t.byteLength || !a(new Al(e), new Al(t)));
    case jO:
    case TO:
    case CO:
      return _O(+e, +t);
    case EO:
      return e.name == t.name && e.message == t.message;
    case kO:
    case DO:
      return e == t + "";
    case MO:
      var s = SO;
    case NO:
      var u = n & PO;
      if (s || (s = AO), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= $O, o.set(e, t);
      var f = OO(s(e), s(t), n, i, a, o);
      return o.delete(e), f;
    case IO:
      if (Vo)
        return Vo.call(e) == Vo.call(t);
  }
  return !1;
}
var FO = RO;
function zO(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var qd = zO, WO = qd, UO = qe;
function KO(e, t, r) {
  var n = t(e);
  return UO(e) ? n : WO(n, r(e));
}
var qO = KO;
function HO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var GO = HO;
function VO() {
  return [];
}
var XO = VO, YO = GO, ZO = XO, JO = Object.prototype, QO = JO.propertyIsEnumerable, $l = Object.getOwnPropertySymbols, e1 = $l ? function(e) {
  return e == null ? [] : (e = Object(e), YO($l(e), function(t) {
    return QO.call(e, t);
  }));
} : ZO, t1 = e1;
function r1(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var n1 = r1, i1 = Rt, a1 = Ft, o1 = "[object Arguments]";
function s1(e) {
  return a1(e) && i1(e) == o1;
}
var u1 = s1, jl = u1, c1 = Ft, Hd = Object.prototype, l1 = Hd.hasOwnProperty, f1 = Hd.propertyIsEnumerable, h1 = jl(/* @__PURE__ */ function() {
  return arguments;
}()) ? jl : function(e) {
  return c1(e) && l1.call(e, "callee") && !f1.call(e, "callee");
}, sc = h1, ia = { exports: {} };
function p1() {
  return !1;
}
var d1 = p1;
ia.exports;
(function(e, t) {
  var r = Ot, n = d1, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
  e.exports = c;
})(ia, ia.exports);
var Gd = ia.exports, v1 = 9007199254740991, y1 = /^(?:0|[1-9]\d*)$/;
function m1(e, t) {
  var r = typeof e;
  return t = t ?? v1, !!t && (r == "number" || r != "symbol" && y1.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var uc = m1, g1 = 9007199254740991;
function b1(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= g1;
}
var cc = b1, x1 = Rt, w1 = cc, _1 = Ft, O1 = "[object Arguments]", S1 = "[object Array]", A1 = "[object Boolean]", P1 = "[object Date]", $1 = "[object Error]", j1 = "[object Function]", T1 = "[object Map]", E1 = "[object Number]", M1 = "[object Object]", C1 = "[object RegExp]", k1 = "[object Set]", N1 = "[object String]", D1 = "[object WeakMap]", I1 = "[object ArrayBuffer]", B1 = "[object DataView]", L1 = "[object Float32Array]", R1 = "[object Float64Array]", F1 = "[object Int8Array]", z1 = "[object Int16Array]", W1 = "[object Int32Array]", U1 = "[object Uint8Array]", K1 = "[object Uint8ClampedArray]", q1 = "[object Uint16Array]", H1 = "[object Uint32Array]", fe = {};
fe[L1] = fe[R1] = fe[F1] = fe[z1] = fe[W1] = fe[U1] = fe[K1] = fe[q1] = fe[H1] = !0;
fe[O1] = fe[S1] = fe[I1] = fe[A1] = fe[B1] = fe[P1] = fe[$1] = fe[j1] = fe[T1] = fe[E1] = fe[M1] = fe[C1] = fe[k1] = fe[N1] = fe[D1] = !1;
function G1(e) {
  return _1(e) && w1(e.length) && !!fe[x1(e)];
}
var V1 = G1;
function X1(e) {
  return function(t) {
    return e(t);
  };
}
var Vd = X1, aa = { exports: {} };
aa.exports;
(function(e, t) {
  var r = rd, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(aa, aa.exports);
var Y1 = aa.exports, Z1 = V1, J1 = Vd, Tl = Y1, El = Tl && Tl.isTypedArray, Q1 = El ? J1(El) : Z1, Xd = Q1, eS = n1, tS = sc, rS = qe, nS = Gd, iS = uc, aS = Xd, oS = Object.prototype, sS = oS.hasOwnProperty;
function uS(e, t) {
  var r = rS(e), n = !r && tS(e), i = !r && !n && nS(e), a = !r && !n && !i && aS(e), o = r || n || i || a, s = o ? eS(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || sS.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    iS(c, u))) && s.push(c);
  return s;
}
var cS = uS, lS = Object.prototype;
function fS(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || lS;
  return e === r;
}
var hS = fS;
function pS(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Yd = pS, dS = Yd, vS = dS(Object.keys, Object), yS = vS, mS = hS, gS = yS, bS = Object.prototype, xS = bS.hasOwnProperty;
function wS(e) {
  if (!mS(e))
    return gS(e);
  var t = [];
  for (var r in Object(e))
    xS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var _S = wS, OS = qu, SS = cc;
function AS(e) {
  return e != null && SS(e.length) && !OS(e);
}
var Si = AS, PS = cS, $S = _S, jS = Si;
function TS(e) {
  return jS(e) ? PS(e) : $S(e);
}
var xo = TS, ES = qO, MS = t1, CS = xo;
function kS(e) {
  return ES(e, CS, MS);
}
var NS = kS, Ml = NS, DS = 1, IS = Object.prototype, BS = IS.hasOwnProperty;
function LS(e, t, r, n, i, a) {
  var o = r & DS, s = Ml(e), u = s.length, c = Ml(t), f = c.length;
  if (u != f && !o)
    return !1;
  for (var l = u; l--; ) {
    var h = s[l];
    if (!(o ? h in t : BS.call(t, h)))
      return !1;
  }
  var d = a.get(e), y = a.get(t);
  if (d && y)
    return d == t && y == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var v = o; ++l < u; ) {
    h = s[l];
    var g = e[h], _ = t[h];
    if (n)
      var x = o ? n(_, g, h, t, e, a) : n(g, _, h, e, t, a);
    if (!(x === void 0 ? g === _ || i(g, _, r, n, a) : x)) {
      p = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (p && !v) {
    var w = e.constructor, m = t.constructor;
    w != m && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof m == "function" && m instanceof m) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var RS = LS, FS = xr, zS = Ot, WS = FS(zS, "DataView"), US = WS, KS = xr, qS = Ot, HS = KS(qS, "Promise"), GS = HS, VS = xr, XS = Ot, YS = VS(XS, "Set"), Zd = YS, ZS = xr, JS = Ot, QS = ZS(JS, "WeakMap"), eA = QS, Cs = US, ks = Gu, Ns = GS, Ds = Zd, Is = eA, Jd = Rt, dn = id, Cl = "[object Map]", tA = "[object Object]", kl = "[object Promise]", Nl = "[object Set]", Dl = "[object WeakMap]", Il = "[object DataView]", rA = dn(Cs), nA = dn(ks), iA = dn(Ns), aA = dn(Ds), oA = dn(Is), ir = Jd;
(Cs && ir(new Cs(new ArrayBuffer(1))) != Il || ks && ir(new ks()) != Cl || Ns && ir(Ns.resolve()) != kl || Ds && ir(new Ds()) != Nl || Is && ir(new Is()) != Dl) && (ir = function(e) {
  var t = Jd(e), r = t == tA ? e.constructor : void 0, n = r ? dn(r) : "";
  if (n)
    switch (n) {
      case rA:
        return Il;
      case nA:
        return Cl;
      case iA:
        return kl;
      case aA:
        return Nl;
      case oA:
        return Dl;
    }
  return t;
});
var sA = ir, Xo = Fd, uA = Kd, cA = FO, lA = RS, Bl = sA, Ll = qe, Rl = Gd, fA = Xd, hA = 1, Fl = "[object Arguments]", zl = "[object Array]", Di = "[object Object]", pA = Object.prototype, Wl = pA.hasOwnProperty;
function dA(e, t, r, n, i, a) {
  var o = Ll(e), s = Ll(t), u = o ? zl : Bl(e), c = s ? zl : Bl(t);
  u = u == Fl ? Di : u, c = c == Fl ? Di : c;
  var f = u == Di, l = c == Di, h = u == c;
  if (h && Rl(e)) {
    if (!Rl(t))
      return !1;
    o = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new Xo()), o || fA(e) ? uA(e, t, r, n, i, a) : cA(e, t, u, r, n, i, a);
  if (!(r & hA)) {
    var d = f && Wl.call(e, "__wrapped__"), y = l && Wl.call(t, "__wrapped__");
    if (d || y) {
      var p = d ? e.value() : e, v = y ? t.value() : t;
      return a || (a = new Xo()), i(p, v, r, n, a);
    }
  }
  return h ? (a || (a = new Xo()), lA(e, t, r, n, i, a)) : !1;
}
var vA = dA, yA = vA, Ul = Ft;
function Qd(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Ul(e) && !Ul(t) ? e !== e && t !== t : yA(e, t, r, n, Qd, i);
}
var lc = Qd, mA = Fd, gA = lc, bA = 1, xA = 2;
function wA(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var u = s[0], c = e[u], f = s[1];
    if (o && s[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var l = new mA();
      if (n)
        var h = n(c, f, u, e, t, l);
      if (!(h === void 0 ? gA(f, c, bA | xA, n, l) : h))
        return !1;
    }
  }
  return !0;
}
var _A = wA, OA = Vt;
function SA(e) {
  return e === e && !OA(e);
}
var ev = SA, AA = ev, PA = xo;
function $A(e) {
  for (var t = PA(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, AA(i)];
  }
  return t;
}
var jA = $A;
function TA(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var tv = TA, EA = _A, MA = jA, CA = tv;
function kA(e) {
  var t = MA(e);
  return t.length == 1 && t[0][2] ? CA(t[0][0], t[0][1]) : function(r) {
    return r === e || EA(r, e, t);
  };
}
var NA = kA;
function DA(e, t) {
  return e != null && t in Object(e);
}
var IA = DA, BA = cd, LA = sc, RA = qe, FA = uc, zA = cc, WA = no;
function UA(e, t, r) {
  t = BA(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = WA(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && zA(i) && FA(o, i) && (RA(e) || LA(e)));
}
var KA = UA, qA = IA, HA = KA;
function GA(e, t) {
  return e != null && HA(e, t, qA);
}
var VA = GA, XA = lc, YA = ld, ZA = VA, JA = Ku, QA = ev, eP = tv, tP = no, rP = 1, nP = 2;
function iP(e, t) {
  return JA(e) && QA(t) ? eP(tP(e), t) : function(r) {
    var n = YA(r, e);
    return n === void 0 && n === t ? ZA(r, e) : XA(t, n, rP | nP);
  };
}
var aP = iP;
function oP(e) {
  return e;
}
var vn = oP;
function sP(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var uP = sP, cP = Zu;
function lP(e) {
  return function(t) {
    return cP(t, e);
  };
}
var fP = lP, hP = uP, pP = fP, dP = Ku, vP = no;
function yP(e) {
  return dP(e) ? hP(vP(e)) : pP(e);
}
var mP = yP, gP = NA, bP = aP, xP = vn, wP = qe, _P = mP;
function OP(e) {
  return typeof e == "function" ? e : e == null ? xP : typeof e == "object" ? wP(e) ? bP(e[0], e[1]) : gP(e) : _P(e);
}
var Xt = OP;
function SP(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var rv = SP;
function AP(e) {
  return e !== e;
}
var PP = AP;
function $P(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var jP = $P, TP = rv, EP = PP, MP = jP;
function CP(e, t, r) {
  return t === t ? MP(e, t, r) : TP(e, EP, r);
}
var kP = CP, NP = kP;
function DP(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && NP(e, t, 0) > -1;
}
var IP = DP;
function BP(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var LP = BP;
function RP() {
}
var FP = RP, Yo = Zd, zP = FP, WP = oc, UP = 1 / 0, KP = Yo && 1 / WP(new Yo([, -0]))[1] == UP ? function(e) {
  return new Yo(e);
} : zP, qP = KP, HP = zd, GP = IP, VP = LP, XP = Ud, YP = qP, ZP = oc, JP = 200;
function QP(e, t, r) {
  var n = -1, i = GP, a = e.length, o = !0, s = [], u = s;
  if (r)
    o = !1, i = VP;
  else if (a >= JP) {
    var c = t ? null : YP(e);
    if (c)
      return ZP(c);
    o = !1, i = XP, u = new HP();
  } else
    u = t ? [] : s;
  e:
    for (; ++n < a; ) {
      var f = e[n], l = t ? t(f) : f;
      if (f = r || f !== 0 ? f : 0, o && l === l) {
        for (var h = u.length; h--; )
          if (u[h] === l)
            continue e;
        t && u.push(l), s.push(f);
      } else i(u, l, r) || (u !== s && u.push(l), s.push(f));
    }
  return s;
}
var e$ = QP, t$ = Xt, r$ = e$;
function n$(e, t) {
  return e && e.length ? r$(e, t$(t)) : [];
}
var i$ = n$;
const Kl = /* @__PURE__ */ ce(i$);
function nv(e, t, r) {
  return t === !0 ? Kl(e, r) : Z(t) ? Kl(e, t) : e;
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
var a$ = ["ref"];
function ql(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ql(Object(r), !0).forEach(function(n) {
      wo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ql(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, av(n.key), n);
  }
}
function s$(e, t, r) {
  return t && Hl(e.prototype, t), r && Hl(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u$(e, t, r) {
  return t = oa(t), c$(e, iv() ? Reflect.construct(t, r || [], oa(e).constructor) : t.apply(e, r));
}
function c$(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return l$(e);
}
function l$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iv = function() {
    return !!e;
  })();
}
function oa(e) {
  return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oa(e);
}
function f$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bs(e, t);
}
function Bs(e, t) {
  return Bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bs(e, t);
}
function wo(e, t, r) {
  return t = av(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function av(e) {
  var t = h$(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function h$(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function p$(e, t) {
  if (e == null) return {};
  var r = d$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function d$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function v$(e) {
  return e.value;
}
function y$(e, t) {
  if (/* @__PURE__ */ P.isValidElement(e))
    return /* @__PURE__ */ P.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ P.createElement(e, t);
  t.ref;
  var r = p$(t, a$);
  return /* @__PURE__ */ P.createElement(ac, r);
}
var Gl = 1, Ze = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    o$(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = u$(this, t, [].concat(i)), wo(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return f$(t, e), s$(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > Gl || Math.abs(i.height - this.lastBoundingBox.height) > Gl) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? St({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, u = i.margin, c = i.chartWidth, f = i.chartHeight, l, h;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var d = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - d.width) / 2
          };
        } else
          l = o === "right" ? {
            right: u && u.right || 0
          } : {
            left: u && u.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          h = {
            top: ((f || 0) - y.height) / 2
          };
        } else
          h = s === "bottom" ? {
            bottom: u && u.bottom || 0
          } : {
            top: u && u.top || 0
          };
      return St(St({}, l), h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, s = i.height, u = i.wrapperStyle, c = i.payloadUniqBy, f = i.payload, l = St(St({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(u)), u);
      return /* @__PURE__ */ P.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(d) {
          n.wrapperNode = d;
        }
      }, y$(a, St(St({}, this.props), {}, {
        payload: nv(f, c, v$)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = St(St({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && L(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
}(Bt);
wo(Ze, "displayName", "Legend");
wo(Ze, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Vl = _i, m$ = sc, g$ = qe, Xl = Vl ? Vl.isConcatSpreadable : void 0;
function b$(e) {
  return g$(e) || m$(e) || !!(Xl && e && e[Xl]);
}
var x$ = b$, w$ = qd, _$ = x$;
function ov(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = _$), i || (i = []); ++a < o; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? ov(s, t - 1, r, n, i) : w$(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var sv = ov;
function O$(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var u = o[e ? s : ++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var S$ = O$, A$ = S$, P$ = A$(), $$ = P$, j$ = $$, T$ = xo;
function E$(e, t) {
  return e && j$(e, t, T$);
}
var uv = E$, M$ = Si;
function C$(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!M$(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var k$ = C$, N$ = uv, D$ = k$, I$ = D$(N$), fc = I$, B$ = fc, L$ = Si;
function R$(e, t) {
  var r = -1, n = L$(e) ? Array(e.length) : [];
  return B$(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var cv = R$;
function F$(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var z$ = F$, Yl = sn;
function W$(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = Yl(e), o = t !== void 0, s = t === null, u = t === t, c = Yl(t);
    if (!s && !c && !a && e > t || a && o && u && !s && !c || n && o && u || !r && u || !i)
      return 1;
    if (!n && !a && !c && e < t || c && r && i && !n && !a || s && r && i || !o && i || !u)
      return -1;
  }
  return 0;
}
var U$ = W$, K$ = U$;
function q$(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var u = K$(i[n], a[n]);
    if (u) {
      if (n >= s)
        return u;
      var c = r[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var H$ = q$, Zo = Yu, G$ = Zu, V$ = Xt, X$ = cv, Y$ = z$, Z$ = Vd, J$ = H$, Q$ = vn, ej = qe;
function tj(e, t, r) {
  t.length ? t = Zo(t, function(a) {
    return ej(a) ? function(o) {
      return G$(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [Q$];
  var n = -1;
  t = Zo(t, Z$(V$));
  var i = X$(e, function(a, o, s) {
    var u = Zo(t, function(c) {
      return c(a);
    });
    return { criteria: u, index: ++n, value: a };
  });
  return Y$(i, function(a, o) {
    return J$(a, o, r);
  });
}
var rj = tj;
function nj(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var ij = nj, aj = ij, Zl = Math.max;
function oj(e, t, r) {
  return t = Zl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Zl(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), aj(e, this, s);
  };
}
var sj = oj;
function uj(e) {
  return function() {
    return e;
  };
}
var cj = uj, lj = xr, fj = function() {
  try {
    var e = lj(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), lv = fj, hj = cj, Jl = lv, pj = vn, dj = Jl ? function(e, t) {
  return Jl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hj(t),
    writable: !0
  });
} : pj, vj = dj, yj = 800, mj = 16, gj = Date.now;
function bj(e) {
  var t = 0, r = 0;
  return function() {
    var n = gj(), i = mj - (n - r);
    if (r = n, i > 0) {
      if (++t >= yj)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var xj = bj, wj = vj, _j = xj, Oj = _j(wj), Sj = Oj, Aj = vn, Pj = sj, $j = Sj;
function jj(e, t) {
  return $j(Pj(e, t, Aj), e + "");
}
var Tj = jj, Ej = Hu, Mj = Si, Cj = uc, kj = Vt;
function Nj(e, t, r) {
  if (!kj(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Mj(r) && Cj(t, r.length) : n == "string" && t in r) ? Ej(r[t], e) : !1;
}
var _o = Nj, Dj = sv, Ij = rj, Bj = Tj, Ql = _o, Lj = Bj(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Ql(e, t[0], t[1]) ? t = [] : r > 2 && Ql(t[0], t[1], t[2]) && (t = [t[0]]), Ij(e, Dj(t, 1), []);
}), Rj = Lj;
const hc = /* @__PURE__ */ ce(Rj);
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function Ls() {
  return Ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ls.apply(this, arguments);
}
function Fj(e, t) {
  return Kj(e) || Uj(e, t) || Wj(e, t) || zj();
}
function zj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wj(e, t) {
  if (e) {
    if (typeof e == "string") return ef(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ef(e, t);
  }
}
function ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Uj(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function Kj(e) {
  if (Array.isArray(e)) return e;
}
function tf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tf(Object(r), !0).forEach(function(n) {
      qj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qj(e, t, r) {
  return t = Hj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hj(e) {
  var t = Gj(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function Gj(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vj(e) {
  return Array.isArray(e) && Ae(e[0]) && Ae(e[1]) ? e.join(" ~ ") : e;
}
var Xj = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, f = t.payload, l = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, p = t.label, v = t.labelFormatter, g = t.accessibilityLayer, _ = g === void 0 ? !1 : g, x = function() {
    if (f && f.length) {
      var T = {
        padding: 0,
        margin: 0
      }, N = (h ? hc(f, h) : f).map(function(k, C) {
        if (k.type === "none")
          return null;
        var D = Jo({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: k.color || "#000"
        }, s), I = k.formatter || l || Vj, R = k.value, F = k.name, q = R, G = F;
        if (I && q != null && G != null) {
          var W = I(R, F, k, C, f);
          if (Array.isArray(W)) {
            var V = Fj(W, 2);
            q = V[0], G = V[1];
          } else
            q = W;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ P.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(C),
            style: D
          }, Ae(G) ? /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, G) : null, Ae(G) ? /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, q), /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, k.unit || ""))
        );
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: T
      }, N);
    }
    return null;
  }, w = Jo({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = Jo({
    margin: 0
  }, c), b = !X(p), O = b ? p : "", A = ee("recharts-default-tooltip", d), $ = ee("recharts-tooltip-label", y);
  b && v && f !== void 0 && f !== null && (O = v(p, f));
  var M = _ ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", Ls({
    className: A,
    style: w
  }, M), /* @__PURE__ */ P.createElement("p", {
    className: $,
    style: m
  }, /* @__PURE__ */ P.isValidElement(O) ? O : "".concat(O)), x());
};
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function Ii(e, t, r) {
  return t = Yj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Yj(e) {
  var t = Zj(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function Zj(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var On = "recharts-tooltip-wrapper", Jj = {
  visibility: "hidden"
};
function Qj(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return ee(On, Ii(Ii(Ii(Ii({}, "".concat(On, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat(On, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat(On, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat(On, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function rf(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, u = e.viewBox, c = e.viewBoxDimension;
  if (a && L(a[n]))
    return a[n];
  var f = r[n] - s - i, l = r[n] + i;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var h = f, d = u[n];
    return h < d ? Math.max(l, u[n]) : Math.max(f, u[n]);
  }
  var y = l + s, p = u[n] + c;
  return y > p ? Math.max(f, u[n]) : Math.max(l, u[n]);
}
function eT(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function tT(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, u = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = rf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), l = rf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = eT({
    translateX: f,
    translateY: l,
    useTranslate3d: s
  })) : c = Jj, {
    cssProperties: c,
    cssClasses: Qj({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function nf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nf(Object(r), !0).forEach(function(n) {
      Fs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hv(n.key), n);
  }
}
function iT(e, t, r) {
  return t && nT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function aT(e, t, r) {
  return t = sa(t), oT(e, fv() ? Reflect.construct(t, r || [], sa(e).constructor) : t.apply(e, r));
}
function oT(e, t) {
  if (t && (Rr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sT(e);
}
function sT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fv = function() {
    return !!e;
  })();
}
function sa(e) {
  return sa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sa(e);
}
function uT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rs(e, t);
}
function Rs(e, t) {
  return Rs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rs(e, t);
}
function Fs(e, t, r) {
  return t = hv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hv(e) {
  var t = cT(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function cT(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var of = 1, lT = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    rT(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = aT(this, t, [].concat(i)), Fs(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Fs(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, u, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.x) !== null && s !== void 0 ? s : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return uT(t, e), iT(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > of || Math.abs(n.height - this.state.lastBoundingBox.height) > of) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, u = i.animationEasing, c = i.children, f = i.coordinate, l = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, p = i.reverseDirection, v = i.useTranslate3d, g = i.viewBox, _ = i.wrapperStyle, x = tT({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: d,
        position: y,
        reverseDirection: p,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: g
      }), w = x.cssClasses, m = x.cssProperties, b = af(af({
        transition: h && a ? "transform ".concat(s, "ms ").concat(u) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, _);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ P.createElement("div", {
          tabIndex: -1,
          className: w,
          style: b,
          ref: function(A) {
            n.wrapperNode = A;
          }
        }, c)
      );
    }
  }]);
}(Bt), fT = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wr = {
  isSsr: fT()
};
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sf(Object(r), !0).forEach(function(n) {
      pc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dv(n.key), n);
  }
}
function dT(e, t, r) {
  return t && pT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vT(e, t, r) {
  return t = ua(t), yT(e, pv() ? Reflect.construct(t, r || [], ua(e).constructor) : t.apply(e, r));
}
function yT(e, t) {
  if (t && (Fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mT(e);
}
function mT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pv = function() {
    return !!e;
  })();
}
function ua(e) {
  return ua = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ua(e);
}
function gT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zs(e, t);
}
function zs(e, t) {
  return zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zs(e, t);
}
function pc(e, t, r) {
  return t = dv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dv(e) {
  var t = bT(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function bT(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function xT(e) {
  return e.dataKey;
}
function wT(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(Xj, t);
}
var ge = /* @__PURE__ */ function(e) {
  function t() {
    return hT(this, t), vT(this, t, arguments);
  }
  return gT(t, e), dT(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, u = i.animationEasing, c = i.content, f = i.coordinate, l = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, p = i.payloadUniqBy, v = i.position, g = i.reverseDirection, _ = i.useTranslate3d, x = i.viewBox, w = i.wrapperStyle, m = y ?? [];
      l && m.length && (m = nv(y.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), p, xT));
      var b = m.length > 0;
      return /* @__PURE__ */ P.createElement(lT, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: u,
        isAnimationActive: h,
        active: a,
        coordinate: f,
        hasPayload: b,
        offset: d,
        position: v,
        reverseDirection: g,
        useTranslate3d: _,
        viewBox: x,
        wrapperStyle: w
      }, wT(c, uf(uf({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
}(Bt);
pc(ge, "displayName", "Tooltip");
pc(ge, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !wr.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var _T = Ot, OT = function() {
  return _T.Date.now();
}, ST = OT, AT = /\s/;
function PT(e) {
  for (var t = e.length; t-- && AT.test(e.charAt(t)); )
    ;
  return t;
}
var $T = PT, jT = $T, TT = /^\s+/;
function ET(e) {
  return e && e.slice(0, jT(e) + 1).replace(TT, "");
}
var MT = ET, CT = MT, cf = Vt, kT = sn, lf = NaN, NT = /^[-+]0x[0-9a-f]+$/i, DT = /^0b[01]+$/i, IT = /^0o[0-7]+$/i, BT = parseInt;
function LT(e) {
  if (typeof e == "number")
    return e;
  if (kT(e))
    return lf;
  if (cf(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cf(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = CT(e);
  var r = DT.test(e);
  return r || IT.test(e) ? BT(e.slice(2), r ? 2 : 8) : NT.test(e) ? lf : +e;
}
var vv = LT, RT = Vt, Qo = ST, ff = vv, FT = "Expected a function", zT = Math.max, WT = Math.min;
function UT(e, t, r) {
  var n, i, a, o, s, u, c = 0, f = !1, l = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(FT);
  t = ff(t) || 0, RT(r) && (f = !!r.leading, l = "maxWait" in r, a = l ? zT(ff(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(b) {
    var O = n, A = i;
    return n = i = void 0, c = b, o = e.apply(A, O), o;
  }
  function y(b) {
    return c = b, s = setTimeout(g, t), f ? d(b) : o;
  }
  function p(b) {
    var O = b - u, A = b - c, $ = t - O;
    return l ? WT($, a - A) : $;
  }
  function v(b) {
    var O = b - u, A = b - c;
    return u === void 0 || O >= t || O < 0 || l && A >= a;
  }
  function g() {
    var b = Qo();
    if (v(b))
      return _(b);
    s = setTimeout(g, p(b));
  }
  function _(b) {
    return s = void 0, h && n ? d(b) : (n = i = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), c = 0, n = u = i = s = void 0;
  }
  function w() {
    return s === void 0 ? o : _(Qo());
  }
  function m() {
    var b = Qo(), O = v(b);
    if (n = arguments, i = this, u = b, O) {
      if (s === void 0)
        return y(u);
      if (l)
        return clearTimeout(s), s = setTimeout(g, t), d(u);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return m.cancel = x, m.flush = w, m;
}
var KT = UT, qT = KT, HT = Vt, GT = "Expected a function";
function VT(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(GT);
  return HT(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), qT(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var XT = VT;
const yv = /* @__PURE__ */ ce(XT);
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hf(Object(r), !0).forEach(function(n) {
      YT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YT(e, t, r) {
  return t = ZT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZT(e) {
  var t = JT(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function JT(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QT(e, t) {
  return nE(e) || rE(e, t) || tE(e, t) || eE();
}
function eE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tE(e, t) {
  if (e) {
    if (typeof e == "string") return pf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pf(e, t);
  }
}
function pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function nE(e) {
  if (Array.isArray(e)) return e;
}
var dt = /* @__PURE__ */ Xp(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, h = e.maxHeight, d = e.children, y = e.debounce, p = y === void 0 ? 0 : y, v = e.id, g = e.className, _ = e.onResize, x = e.style, w = x === void 0 ? {} : x, m = Vi(null), b = Vi();
  b.current = _, km(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var O = At({
    containerWidth: i.width,
    containerHeight: i.height
  }), A = QT(O, 2), $ = A[0], M = A[1], j = Nm(function(N, k) {
    M(function(C) {
      var D = Math.round(N), I = Math.round(k);
      return C.containerWidth === D && C.containerHeight === I ? C : {
        containerWidth: D,
        containerHeight: I
      };
    });
  }, []);
  Za(function() {
    var N = function(F) {
      var q, G = F[0].contentRect, W = G.width, V = G.height;
      j(W, V), (q = b.current) === null || q === void 0 || q.call(b, W, V);
    };
    p > 0 && (N = yv(N, p, {
      trailing: !0,
      leading: !1
    }));
    var k = new ResizeObserver(N), C = m.current.getBoundingClientRect(), D = C.width, I = C.height;
    return j(D, I), k.observe(m.current), function() {
      k.disconnect();
    };
  }, [j, p]);
  var T = Yp(function() {
    var N = $.containerWidth, k = $.containerHeight;
    if (N < 0 || k < 0)
      return null;
    Mt(or(o) || or(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Mt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var C = or(o) ? N : o, D = or(u) ? k : u;
    r && r > 0 && (C ? D = C / r : D && (C = D * r), h && D > h && (D = h)), Mt(C > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, C, D, o, u, f, l, r);
    var I = !Array.isArray(d) && Et(d.type).endsWith("Chart");
    return P.Children.map(d, function(R) {
      return /* @__PURE__ */ P.isValidElement(R) ? /* @__PURE__ */ Se(R, Bi({
        width: C,
        height: D
      }, I ? {
        style: Bi({
          height: "100%",
          width: "100%",
          maxHeight: D,
          maxWidth: C
        }, R.props.style)
      } : {})) : R;
    });
  }, [r, d, u, h, l, f, $, o]);
  return /* @__PURE__ */ P.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: ee("recharts-responsive-container", g),
    style: Bi(Bi({}, w), {}, {
      width: o,
      height: u,
      minWidth: f,
      minHeight: l,
      maxHeight: h
    }),
    ref: m
  }, T);
}), Ai = function(t) {
  return null;
};
Ai.displayName = "Cell";
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function df(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? df(Object(r), !0).forEach(function(n) {
      iE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : df(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iE(e, t, r) {
  return t = aE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aE(e) {
  var t = oE(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function oE(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pr = {
  widthCache: {},
  cacheCount: 0
}, sE = 2e3, uE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, vf = "recharts_measurement_span";
function cE(e) {
  var t = Ws({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var kn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || wr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = cE(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Pr.widthCache[i])
    return Pr.widthCache[i];
  try {
    var a = document.getElementById(vf);
    a || (a = document.createElement("span"), a.setAttribute("id", vf), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Ws(Ws({}, uE), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return Pr.widthCache[i] = u, ++Pr.cacheCount > sE && (Pr.cacheCount = 0, Pr.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, lE = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
function ca(e, t) {
  return dE(e) || pE(e, t) || hE(e, t) || fE();
}
function fE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hE(e, t) {
  if (e) {
    if (typeof e == "string") return yf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yf(e, t);
  }
}
function yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function dE(e) {
  if (Array.isArray(e)) return e;
}
function vE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mE(n.key), n);
  }
}
function yE(e, t, r) {
  return t && mf(e.prototype, t), r && mf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mE(e) {
  var t = gE(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function gE(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, bf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, bE = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, xE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, mv = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, wE = Object.keys(mv), Er = "NaN";
function _E(e, t) {
  return e * mv[t];
}
var Li = /* @__PURE__ */ function() {
  function e(t, r) {
    vE(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !bE.test(r) && (this.num = NaN, this.unit = ""), wE.includes(r) && (this.num = _E(t, r), this.unit = "px");
  }
  return yE(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = xE.exec(r)) !== null && n !== void 0 ? n : [], a = ca(i, 3), o = a[1], s = a[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function gv(e) {
  if (e.includes(Er))
    return Er;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = gf.exec(t)) !== null && r !== void 0 ? r : [], i = ca(n, 4), a = i[1], o = i[2], s = i[3], u = Li.parse(a ?? ""), c = Li.parse(s ?? ""), f = o === "*" ? u.multiply(c) : u.divide(c);
    if (f.isNaN())
      return Er;
    t = t.replace(gf, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, h = (l = bf.exec(t)) !== null && l !== void 0 ? l : [], d = ca(h, 4), y = d[1], p = d[2], v = d[3], g = Li.parse(y ?? ""), _ = Li.parse(v ?? ""), x = p === "+" ? g.add(_) : g.subtract(_);
    if (x.isNaN())
      return Er;
    t = t.replace(bf, x.toString());
  }
  return t;
}
var xf = /\(([^()]*)\)/;
function OE(e) {
  for (var t = e; t.includes("("); ) {
    var r = xf.exec(t), n = ca(r, 2), i = n[1];
    t = t.replace(xf, gv(i));
  }
  return t;
}
function SE(e) {
  var t = e.replace(/\s+/g, "");
  return t = OE(t), t = gv(t), t;
}
function AE(e) {
  try {
    return SE(e);
  } catch {
    return Er;
  }
}
function es(e) {
  var t = AE(e.slice(5, -1));
  return t === Er ? "" : t;
}
var PE = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], $E = ["dx", "dy", "angle", "className", "breakAll"];
function Us() {
  return Us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Us.apply(this, arguments);
}
function wf(e, t) {
  if (e == null) return {};
  var r = jE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _f(e, t) {
  return CE(e) || ME(e, t) || EE(e, t) || TE();
}
function TE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EE(e, t) {
  if (e) {
    if (typeof e == "string") return Of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Of(e, t);
  }
}
function Of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ME(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function CE(e) {
  if (Array.isArray(e)) return e;
}
var bv = /[ \f\n\r\t\v\u2028\u2029]+/, xv = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    X(r) || (n ? a = r.toString().split("") : a = r.toString().split(bv));
    var o = a.map(function(u) {
      return {
        word: u,
        width: kn(u, i).width
      };
    }), s = n ? 0 : kn(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, kE = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, u = t.style, c = t.breakAll, f = L(o), l = s, h = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return C.reduce(function(D, I) {
      var R = I.word, F = I.width, q = D[D.length - 1];
      if (q && (i == null || a || q.width + F + n < Number(i)))
        q.words.push(R), q.width += F + n;
      else {
        var G = {
          words: [R],
          width: F
        };
        D.push(G);
      }
      return D;
    }, []);
  }, d = h(r), y = function(C) {
    return C.reduce(function(D, I) {
      return D.width > I.width ? D : I;
    });
  };
  if (!f)
    return d;
  for (var p = "…", v = function(C) {
    var D = l.slice(0, C), I = xv({
      breakAll: c,
      style: u,
      children: D + p
    }).wordsWithComputedWidth, R = h(I), F = R.length > o || y(R).width > Number(i);
    return [F, R];
  }, g = 0, _ = l.length - 1, x = 0, w; g <= _ && x <= l.length - 1; ) {
    var m = Math.floor((g + _) / 2), b = m - 1, O = v(b), A = _f(O, 2), $ = A[0], M = A[1], j = v(m), T = _f(j, 1), N = T[0];
    if (!$ && !N && (g = m + 1), $ && N && (_ = m - 1), !$ && N) {
      w = M;
      break;
    }
    x++;
  }
  return w || d;
}, Sf = function(t) {
  var r = X(t) ? [] : t.toString().split(bv);
  return [{
    words: r
  }];
}, NE = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !wr.isSsr) {
    var u, c, f = xv({
      breakAll: o,
      children: i,
      style: a
    });
    if (f) {
      var l = f.wordsWithComputedWidth, h = f.spaceWidth;
      u = l, c = h;
    } else
      return Sf(i);
    return kE({
      breakAll: o,
      children: i,
      maxLines: s,
      style: a
    }, u, c, r, n);
  }
  return Sf(i);
}, Af = "#808080", la = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, f = t.scaleToFit, l = f === void 0 ? !1 : f, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, p = y === void 0 ? "end" : y, v = t.fill, g = v === void 0 ? Af : v, _ = wf(t, PE), x = Yp(function() {
    return NE({
      breakAll: _.breakAll,
      children: _.children,
      maxLines: _.maxLines,
      scaleToFit: l,
      style: _.style,
      width: _.width
    });
  }, [_.breakAll, _.children, _.maxLines, l, _.style, _.width]), w = _.dx, m = _.dy, b = _.angle, O = _.className, A = _.breakAll, $ = wf(_, $E);
  if (!Ae(n) || !Ae(a))
    return null;
  var M = n + (L(w) ? w : 0), j = a + (L(m) ? m : 0), T;
  switch (p) {
    case "start":
      T = es("calc(".concat(c, ")"));
      break;
    case "middle":
      T = es("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      T = es("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var N = [];
  if (l) {
    var k = x[0].width, C = _.width;
    N.push("scale(".concat((L(C) ? C / k : 1) / k, ")"));
  }
  return b && N.push("rotate(".concat(b, ", ").concat(M, ", ").concat(j, ")")), N.length && ($.transform = N.join(" ")), /* @__PURE__ */ P.createElement("text", Us({}, Q($, !0), {
    x: M,
    y: j,
    className: ee("recharts-text", O),
    textAnchor: d,
    fill: g.includes("url") ? Af : g
  }), x.map(function(D, I) {
    var R = D.words.join(A ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ P.createElement("tspan", {
        x: M,
        dy: I === 0 ? T : s,
        key: "".concat(R, "-").concat(I)
      }, R)
    );
  }));
};
function Gt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function DE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function dc(e) {
  let t, r, n;
  e.length !== 2 ? (t = Gt, r = (s, u) => Gt(e(s), u), n = (s, u) => e(s) - u) : (t = e === Gt || e === DE ? e : IE, r = e, n = e);
  function i(s, u, c = 0, f = s.length) {
    if (c < f) {
      if (t(u, u) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(s[l], u) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function a(s, u, c = 0, f = s.length) {
    if (c < f) {
      if (t(u, u) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(s[l], u) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(s, u, c = 0, f = s.length) {
    const l = i(s, u, c, f - 1);
    return l > c && n(s[l - 1], u) > -n(s[l], u) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function IE() {
  return 0;
}
function wv(e) {
  return e === null ? NaN : +e;
}
function* BE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const LE = dc(Gt), Pi = LE.right;
dc(wv).center;
class Pf extends Map {
  constructor(t, r = zE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get($f(this, t));
  }
  has(t) {
    return super.has($f(this, t));
  }
  set(t, r) {
    return super.set(RE(this, t), r);
  }
  delete(t) {
    return super.delete(FE(this, t));
  }
}
function $f({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function RE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function FE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function zE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function WE(e = Gt) {
  if (e === Gt) return _v;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function _v(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const UE = Math.sqrt(50), KE = Math.sqrt(10), qE = Math.sqrt(2);
function fa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= UE ? 10 : a >= KE ? 5 : a >= qE ? 2 : 1;
  let s, u, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, i) * o, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= r && r < 2 ? fa(e, t, r * 2) : [s, u, c];
}
function Ks(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? fa(t, e, r) : fa(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, u = new Array(s);
  if (n)
    if (o < 0) for (let c = 0; c < s; ++c) u[c] = (a - c) / -o;
    else for (let c = 0; c < s; ++c) u[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < s; ++c) u[c] = (i + c) / -o;
  else for (let c = 0; c < s; ++c) u[c] = (i + c) * o;
  return u;
}
function qs(e, t, r) {
  return t = +t, e = +e, r = +r, fa(e, t, r)[2];
}
function Hs(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? qs(t, e, r) : qs(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function jf(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Tf(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ov(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? _v : WE(i); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, f = Math.log(u), l = 0.5 * Math.exp(2 * f / 3), h = 0.5 * Math.sqrt(f * l * (u - l) / u) * (c - u / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - c * l / u + h)), y = Math.min(n, Math.floor(t + (u - c) * l / u + h));
      Ov(e, t, d, y, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Sn(e, r, t), i(e[n], a) > 0 && Sn(e, r, n); o < s; ) {
      for (Sn(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[r], a) === 0 ? Sn(e, r, s) : (++s, Sn(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Sn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function HE(e, t, r) {
  if (e = Float64Array.from(BE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Tf(e);
    if (t >= 1) return jf(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = jf(Ov(e, a).subarray(0, a + 1)), s = Tf(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function GE(e, t, r = wv) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function VE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function ut(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function zt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Gs = Symbol("implicit");
function vc() {
  var e = new Pf(), t = [], r = [], n = Gs;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Gs) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new Pf();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return vc(t, r).unknown(n);
  }, ut.apply(i, arguments), i;
}
function Vn() {
  var e = vc().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, u = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var h = t().length, d = i < n, y = d ? i : n, p = d ? n : i;
    a = (p - y) / Math.max(1, h - u + c * 2), s && (a = Math.floor(a)), y += (p - y - a * (h - u)) * f, o = a * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = VE(h).map(function(g) {
      return y + a * g;
    });
    return r(d ? v.reverse() : v);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), l()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([n, i] = h, n = +n, i = +i, l()) : [n, i];
  }, e.rangeRound = function(h) {
    return [n, i] = h, n = +n, i = +i, s = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(h) {
    return arguments.length ? (s = !!h, l()) : s;
  }, e.padding = function(h) {
    return arguments.length ? (u = Math.min(1, c = +h), l()) : u;
  }, e.paddingInner = function(h) {
    return arguments.length ? (u = Math.min(1, h), l()) : u;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, l()) : c;
  }, e.align = function(h) {
    return arguments.length ? (f = Math.max(0, Math.min(1, h)), l()) : f;
  }, e.copy = function() {
    return Vn(t(), [n, i]).round(s).paddingInner(u).paddingOuter(c).align(f);
  }, ut.apply(l(), arguments);
}
function Sv(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Sv(t());
  }, e;
}
function Nn() {
  return Sv(Vn.apply(null, arguments).paddingInner(1));
}
function yc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Av(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function $i() {
}
var Xn = 0.7, ha = 1 / Xn, Nr = "\\s*([+-]?\\d+)\\s*", Yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", XE = /^#([0-9a-f]{3,8})$/, YE = new RegExp(`^rgb\\(${Nr},${Nr},${Nr}\\)$`), ZE = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), JE = new RegExp(`^rgba\\(${Nr},${Nr},${Nr},${Yn}\\)$`), QE = new RegExp(`^rgba\\(${bt},${bt},${bt},${Yn}\\)$`), eM = new RegExp(`^hsl\\(${Yn},${bt},${bt}\\)$`), tM = new RegExp(`^hsla\\(${Yn},${bt},${bt},${Yn}\\)$`), Ef = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
yc($i, Zn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Mf,
  // Deprecated! Use color.formatHex.
  formatHex: Mf,
  formatHex8: rM,
  formatHsl: nM,
  formatRgb: Cf,
  toString: Cf
});
function Mf() {
  return this.rgb().formatHex();
}
function rM() {
  return this.rgb().formatHex8();
}
function nM() {
  return Pv(this).formatHsl();
}
function Cf() {
  return this.rgb().formatRgb();
}
function Zn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = XE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? kf(t) : r === 3 ? new Ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ri(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ri(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = YE.exec(e)) ? new Ue(t[1], t[2], t[3], 1) : (t = ZE.exec(e)) ? new Ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = JE.exec(e)) ? Ri(t[1], t[2], t[3], t[4]) : (t = QE.exec(e)) ? Ri(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = eM.exec(e)) ? If(t[1], t[2] / 100, t[3] / 100, 1) : (t = tM.exec(e)) ? If(t[1], t[2] / 100, t[3] / 100, t[4]) : Ef.hasOwnProperty(e) ? kf(Ef[e]) : e === "transparent" ? new Ue(NaN, NaN, NaN, 0) : null;
}
function kf(e) {
  return new Ue(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ri(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ue(e, t, r, n);
}
function iM(e) {
  return e instanceof $i || (e = Zn(e)), e ? (e = e.rgb(), new Ue(e.r, e.g, e.b, e.opacity)) : new Ue();
}
function Vs(e, t, r, n) {
  return arguments.length === 1 ? iM(e) : new Ue(e, t, r, n ?? 1);
}
function Ue(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
yc(Ue, Vs, Av($i, {
  brighter(e) {
    return e = e == null ? ha : Math.pow(ha, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ue(fr(this.r), fr(this.g), fr(this.b), pa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Nf,
  // Deprecated! Use color.formatHex.
  formatHex: Nf,
  formatHex8: aM,
  formatRgb: Df,
  toString: Df
}));
function Nf() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function aM() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Df() {
  const e = pa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fr(this.r)}, ${fr(this.g)}, ${fr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function pa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function sr(e) {
  return e = fr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function If(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ht(e, t, r, n);
}
function Pv(e) {
  if (e instanceof ht) return new ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof $i || (e = Zn(e)), !e) return new ht();
  if (e instanceof ht) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new ht(o, s, u, e.opacity);
}
function oM(e, t, r, n) {
  return arguments.length === 1 ? Pv(e) : new ht(e, t, r, n ?? 1);
}
function ht(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
yc(ht, oM, Av($i, {
  brighter(e) {
    return e = e == null ? ha : Math.pow(ha, e), new ht(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new ht(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Ue(
      ts(e >= 240 ? e - 240 : e + 120, i, n),
      ts(e, i, n),
      ts(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new ht(Bf(this.h), Fi(this.s), Fi(this.l), pa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = pa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Bf(this.h)}, ${Fi(this.s) * 100}%, ${Fi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Bf(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Fi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ts(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const mc = (e) => () => e;
function sM(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function uM(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function cM(e) {
  return (e = +e) == 1 ? $v : function(t, r) {
    return r - t ? uM(t, r, e) : mc(isNaN(t) ? r : t);
  };
}
function $v(e, t) {
  var r = t - e;
  return r ? sM(e, r) : mc(isNaN(e) ? t : e);
}
const Lf = function e(t) {
  var r = cM(t);
  function n(i, a) {
    var o = r((i = Vs(i)).r, (a = Vs(a)).r), s = r(i.g, a.g), u = r(i.b, a.b), c = $v(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = s(f), i.b = u(f), i.opacity = c(f), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function lM(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function fM(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function hM(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = yn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function pM(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function da(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function dM(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = yn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Xs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rs = new RegExp(Xs.source, "g");
function vM(e) {
  return function() {
    return e;
  };
}
function yM(e) {
  return function(t) {
    return e(t) + "";
  };
}
function mM(e, t) {
  var r = Xs.lastIndex = rs.lastIndex = 0, n, i, a, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = Xs.exec(e)) && (i = rs.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: da(n, i) })), r = rs.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? yM(u[0].x) : vM(t) : (t = u.length, function(c) {
    for (var f = 0, l; f < t; ++f) s[(l = u[f]).i] = l.x(c);
    return s.join("");
  });
}
function yn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? mc(t) : (r === "number" ? da : r === "string" ? (n = Zn(t)) ? (t = n, Lf) : mM : t instanceof Zn ? Lf : t instanceof Date ? pM : fM(t) ? lM : Array.isArray(t) ? hM : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? dM : da)(e, t);
}
function gc(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function gM(e, t) {
  t === void 0 && (t = e, e = yn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function bM(e) {
  return function() {
    return e;
  };
}
function va(e) {
  return +e;
}
var Rf = [0, 1];
function Fe(e) {
  return e;
}
function Ys(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : bM(isNaN(t) ? NaN : 0.5);
}
function xM(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function wM(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Ys(i, n), a = r(o, a)) : (n = Ys(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function _M(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Ys(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = Pi(e, s, 1, n) - 1;
    return a[u](i[u](s));
  };
}
function ji(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Oo() {
  var e = Rf, t = Rf, r = yn, n, i, a, o = Fe, s, u, c;
  function f() {
    var h = Math.min(e.length, t.length);
    return o !== Fe && (o = xM(e[0], e[h - 1])), s = h > 2 ? _M : wM, u = c = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? a : (u || (u = s(e.map(n), t, r)))(n(o(h)));
  }
  return l.invert = function(h) {
    return o(i((c || (c = s(t, e.map(n), da)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (e = Array.from(h, va), f()) : e.slice();
  }, l.range = function(h) {
    return arguments.length ? (t = Array.from(h), f()) : t.slice();
  }, l.rangeRound = function(h) {
    return t = Array.from(h), r = gc, f();
  }, l.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : Fe, f()) : o !== Fe;
  }, l.interpolate = function(h) {
    return arguments.length ? (r = h, f()) : r;
  }, l.unknown = function(h) {
    return arguments.length ? (a = h, l) : a;
  }, function(h, d) {
    return n = h, i = d, f();
  };
}
function bc() {
  return Oo()(Fe, Fe);
}
function OM(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ya(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function zr(e) {
  return e = ya(Math.abs(e)), e ? e[1] : NaN;
}
function SM(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), a.push(r.substring(i -= s, i + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function AM(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var PM = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Jn(e) {
  if (!(t = PM.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new xc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Jn.prototype = xc.prototype;
function xc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
xc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $M(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var jv;
function jM(e, t) {
  var r = ya(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (jv = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + ya(e, Math.max(0, t + a - 1))[0];
}
function Ff(e, t) {
  var r = ya(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const zf = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: OM,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ff(e * 100, t),
  r: Ff,
  s: jM,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Wf(e) {
  return e;
}
var Uf = Array.prototype.map, Kf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function TM(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Wf : SM(Uf.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Wf : AM(Uf.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l) {
    l = Jn(l);
    var h = l.fill, d = l.align, y = l.sign, p = l.symbol, v = l.zero, g = l.width, _ = l.comma, x = l.precision, w = l.trim, m = l.type;
    m === "n" ? (_ = !0, m = "g") : zf[m] || (x === void 0 && (x = 12), w = !0, m = "g"), (v || h === "0" && d === "=") && (v = !0, h = "0", d = "=");
    var b = p === "$" ? r : p === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", O = p === "$" ? n : /[%p]/.test(m) ? o : "", A = zf[m], $ = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function M(j) {
      var T = b, N = O, k, C, D;
      if (m === "c")
        N = A(j) + N, j = "";
      else {
        j = +j;
        var I = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? u : A(Math.abs(j), x), w && (j = $M(j)), I && +j == 0 && y !== "+" && (I = !1), T = (I ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + T, N = (m === "s" ? Kf[8 + jv / 3] : "") + N + (I && y === "(" ? ")" : ""), $) {
          for (k = -1, C = j.length; ++k < C; )
            if (D = j.charCodeAt(k), 48 > D || D > 57) {
              N = (D === 46 ? i + j.slice(k + 1) : j.slice(k)) + N, j = j.slice(0, k);
              break;
            }
        }
      }
      _ && !v && (j = t(j, 1 / 0));
      var R = T.length + j.length + N.length, F = R < g ? new Array(g - R + 1).join(h) : "";
      switch (_ && v && (j = t(F + j, F.length ? g - N.length : 1 / 0), F = ""), d) {
        case "<":
          j = T + j + N + F;
          break;
        case "=":
          j = T + F + j + N;
          break;
        case "^":
          j = F.slice(0, R = F.length >> 1) + T + j + N + F.slice(R);
          break;
        default:
          j = F + T + j + N;
          break;
      }
      return a(j);
    }
    return M.toString = function() {
      return l + "";
    }, M;
  }
  function f(l, h) {
    var d = c((l = Jn(l), l.type = "f", l)), y = Math.max(-8, Math.min(8, Math.floor(zr(h) / 3))) * 3, p = Math.pow(10, -y), v = Kf[8 + y / 3];
    return function(g) {
      return d(p * g) + v;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var zi, wc, Tv;
EM({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function EM(e) {
  return zi = TM(e), wc = zi.format, Tv = zi.formatPrefix, zi;
}
function MM(e) {
  return Math.max(0, -zr(Math.abs(e)));
}
function CM(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zr(t) / 3))) * 3 - zr(Math.abs(e)));
}
function kM(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, zr(t) - zr(e)) + 1;
}
function Ev(e, t, r, n) {
  var i = Hs(e, t, r), a;
  switch (n = Jn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = CM(i, o)) && (n.precision = a), Tv(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = kM(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = MM(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return wc(n);
}
function Yt(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Ks(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Ev(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], u, c, f = 10;
    for (s < o && (c = o, o = s, s = c, c = i, i = a, a = c); f-- > 0; ) {
      if (c = qs(o, s, r), c === u)
        return n[i] = o, n[a] = s, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function ma() {
  var e = bc();
  return e.copy = function() {
    return ji(e, ma());
  }, ut.apply(e, arguments), Yt(e);
}
function Mv(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, va), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Mv(e).unknown(t);
  }, e = arguments.length ? Array.from(e, va) : [0, 1], Yt(r);
}
function Cv(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function qf(e) {
  return Math.log(e);
}
function Hf(e) {
  return Math.exp(e);
}
function NM(e) {
  return -Math.log(-e);
}
function DM(e) {
  return -Math.exp(-e);
}
function IM(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function BM(e) {
  return e === 10 ? IM : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function LM(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Gf(e) {
  return (t, r) => -e(-t, r);
}
function _c(e) {
  const t = e(qf, Hf), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = LM(n), a = BM(n), r()[0] < 0 ? (i = Gf(i), a = Gf(a), e(NM, DM)) : e(qf, Hf), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const u = r();
    let c = u[0], f = u[u.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let h = i(c), d = i(f), y, p;
    const v = s == null ? 10 : +s;
    let g = [];
    if (!(n % 1) && d - h < v) {
      if (h = Math.floor(h), d = Math.ceil(d), c > 0) {
        for (; h <= d; ++h)
          for (y = 1; y < n; ++y)
            if (p = h < 0 ? y / a(-h) : y * a(h), !(p < c)) {
              if (p > f) break;
              g.push(p);
            }
      } else for (; h <= d; ++h)
        for (y = n - 1; y >= 1; --y)
          if (p = h > 0 ? y / a(-h) : y * a(h), !(p < c)) {
            if (p > f) break;
            g.push(p);
          }
      g.length * 2 < v && (g = Ks(c, f, v));
    } else
      g = Ks(h, d, Math.min(d - h, v)).map(a);
    return l ? g.reverse() : g;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = Jn(u)).precision == null && (u.trim = !0), u = wc(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? u(f) : "";
    };
  }, t.nice = () => r(Cv(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function kv() {
  const e = _c(Oo()).domain([1, 10]);
  return e.copy = () => ji(e, kv()).base(e.base()), ut.apply(e, arguments), e;
}
function Vf(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Xf(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Oc(e) {
  var t = 1, r = e(Vf(t), Xf(t));
  return r.constant = function(n) {
    return arguments.length ? e(Vf(t = +n), Xf(t)) : t;
  }, Yt(r);
}
function Nv() {
  var e = Oc(Oo());
  return e.copy = function() {
    return ji(e, Nv()).constant(e.constant());
  }, ut.apply(e, arguments);
}
function Yf(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function RM(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function FM(e) {
  return e < 0 ? -e * e : e * e;
}
function Sc(e) {
  var t = e(Fe, Fe), r = 1;
  function n() {
    return r === 1 ? e(Fe, Fe) : r === 0.5 ? e(RM, FM) : e(Yf(r), Yf(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yt(t);
}
function Ac() {
  var e = Sc(Oo());
  return e.copy = function() {
    return ji(e, Ac()).exponent(e.exponent());
  }, ut.apply(e, arguments), e;
}
function zM() {
  return Ac.apply(null, arguments).exponent(0.5);
}
function Zf(e) {
  return Math.sign(e) * e * e;
}
function WM(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Dv() {
  var e = bc(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = WM(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Zf(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, va)).map(Zf)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Dv(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ut.apply(i, arguments), Yt(i);
}
function Iv() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = GE(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Pi(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Gt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Iv().domain(e).range(t).unknown(n);
  }, ut.apply(a, arguments);
}
function Bv() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(u) {
    return u != null && u <= u ? i[Pi(n, u, 0, r)] : a;
  }
  function s() {
    var u = -1;
    for (n = new Array(r); ++u < r; ) n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(u) {
    return arguments.length ? (r = (i = Array.from(u)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(u) {
    var c = i.indexOf(u);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(u) {
    return arguments.length && (a = u), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Bv().domain([e, t]).range(i).unknown(a);
  }, ut.apply(Yt(o), arguments);
}
function Lv() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Pi(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Lv().domain(e).range(t).unknown(r);
  }, ut.apply(i, arguments);
}
const ns = /* @__PURE__ */ new Date(), is = /* @__PURE__ */ new Date();
function Pe(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const u = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+a)), t(a, s), e(a);
    while (c < a && a < o);
    return u;
  }, i.filter = (a) => Pe((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (ns.setTime(+a), is.setTime(+o), e(ns), e(is), Math.floor(r(ns, is))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ga = Pe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ga.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Pe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ga);
ga.range;
const $t = 1e3, rt = $t * 60, jt = rt * 60, Nt = jt * 24, Pc = Nt * 7, Jf = Nt * 30, as = Nt * 365, ur = Pe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCSeconds());
ur.range;
const $c = Pe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t);
}, (e, t) => {
  e.setTime(+e + t * rt);
}, (e, t) => (t - e) / rt, (e) => e.getMinutes());
$c.range;
const jc = Pe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * rt);
}, (e, t) => (t - e) / rt, (e) => e.getUTCMinutes());
jc.range;
const Tc = Pe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t - e.getMinutes() * rt);
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getHours());
Tc.range;
const Ec = Pe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getUTCHours());
Ec.range;
const Ti = Pe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / Nt,
  (e) => e.getDate() - 1
);
Ti.range;
const So = Pe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nt, (e) => e.getUTCDate() - 1);
So.range;
const Rv = Pe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nt, (e) => Math.floor(e / Nt));
Rv.range;
function _r(e) {
  return Pe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * rt) / Pc);
}
const Ao = _r(0), ba = _r(1), UM = _r(2), KM = _r(3), Wr = _r(4), qM = _r(5), HM = _r(6);
Ao.range;
ba.range;
UM.range;
KM.range;
Wr.range;
qM.range;
HM.range;
function Or(e) {
  return Pe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Pc);
}
const Po = Or(0), xa = Or(1), GM = Or(2), VM = Or(3), Ur = Or(4), XM = Or(5), YM = Or(6);
Po.range;
xa.range;
GM.range;
VM.range;
Ur.range;
XM.range;
YM.range;
const Mc = Pe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Mc.range;
const Cc = Pe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Cc.range;
const Dt = Pe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Dt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Pe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Dt.range;
const It = Pe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
It.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Pe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
It.range;
function Fv(e, t, r, n, i, a) {
  const o = [
    [ur, 1, $t],
    [ur, 5, 5 * $t],
    [ur, 15, 15 * $t],
    [ur, 30, 30 * $t],
    [a, 1, rt],
    [a, 5, 5 * rt],
    [a, 15, 15 * rt],
    [a, 30, 30 * rt],
    [i, 1, jt],
    [i, 3, 3 * jt],
    [i, 6, 6 * jt],
    [i, 12, 12 * jt],
    [n, 1, Nt],
    [n, 2, 2 * Nt],
    [r, 1, Pc],
    [t, 1, Jf],
    [t, 3, 3 * Jf],
    [e, 1, as]
  ];
  function s(c, f, l) {
    const h = f < c;
    h && ([c, f] = [f, c]);
    const d = l && typeof l.range == "function" ? l : u(c, f, l), y = d ? d.range(c, +f + 1) : [];
    return h ? y.reverse() : y;
  }
  function u(c, f, l) {
    const h = Math.abs(f - c) / l, d = dc(([, , v]) => v).right(o, h);
    if (d === o.length) return e.every(Hs(c / as, f / as, l));
    if (d === 0) return ga.every(Math.max(Hs(c, f, l), 1));
    const [y, p] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(p);
  }
  return [s, u];
}
const [ZM, JM] = Fv(It, Cc, Po, Rv, Ec, jc), [QM, eC] = Fv(Dt, Mc, Ao, Ti, Tc, $c);
function os(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ss(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function An(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function tC(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Pn(i), f = $n(i), l = Pn(a), h = $n(a), d = Pn(o), y = $n(o), p = Pn(s), v = $n(s), g = Pn(u), _ = $n(u), x = {
    a: I,
    A: R,
    b: F,
    B: q,
    c: null,
    d: ih,
    e: ih,
    f: SC,
    g: NC,
    G: IC,
    H: wC,
    I: _C,
    j: OC,
    L: zv,
    m: AC,
    M: PC,
    p: G,
    q: W,
    Q: sh,
    s: uh,
    S: $C,
    u: jC,
    U: TC,
    V: EC,
    w: MC,
    W: CC,
    x: null,
    X: null,
    y: kC,
    Y: DC,
    Z: BC,
    "%": oh
  }, w = {
    a: V,
    A: le,
    b: ye,
    B: He,
    c: null,
    d: ah,
    e: ah,
    f: zC,
    g: ZC,
    G: QC,
    H: LC,
    I: RC,
    j: FC,
    L: Uv,
    m: WC,
    M: UC,
    p: Qt,
    q: ze,
    Q: sh,
    s: uh,
    S: KC,
    u: qC,
    U: HC,
    V: GC,
    w: VC,
    W: XC,
    x: null,
    X: null,
    y: YC,
    Y: JC,
    Z: ek,
    "%": oh
  }, m = {
    a: M,
    A: j,
    b: T,
    B: N,
    c: k,
    d: rh,
    e: rh,
    f: mC,
    g: th,
    G: eh,
    H: nh,
    I: nh,
    j: pC,
    L: yC,
    m: hC,
    M: dC,
    p: $,
    q: fC,
    Q: bC,
    s: xC,
    S: vC,
    u: oC,
    U: sC,
    V: uC,
    w: aC,
    W: cC,
    x: C,
    X: D,
    y: th,
    Y: eh,
    Z: lC,
    "%": gC
  };
  x.x = b(r, x), x.X = b(n, x), x.c = b(t, x), w.x = b(r, w), w.X = b(n, w), w.c = b(t, w);
  function b(z, Y) {
    return function(J) {
      var B = [], de = -1, te = 0, xe = z.length, we, We, Wt;
      for (J instanceof Date || (J = /* @__PURE__ */ new Date(+J)); ++de < xe; )
        z.charCodeAt(de) === 37 && (B.push(z.slice(te, de)), (We = Qf[we = z.charAt(++de)]) != null ? we = z.charAt(++de) : We = we === "e" ? " " : "0", (Wt = Y[we]) && (we = Wt(J, We)), B.push(we), te = de + 1);
      return B.push(z.slice(te, de)), B.join("");
    };
  }
  function O(z, Y) {
    return function(J) {
      var B = An(1900, void 0, 1), de = A(B, z, J += "", 0), te, xe;
      if (de != J.length) return null;
      if ("Q" in B) return new Date(B.Q);
      if ("s" in B) return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (Y && !("Z" in B) && (B.Z = 0), "p" in B && (B.H = B.H % 12 + B.p * 12), B.m === void 0 && (B.m = "q" in B ? B.q : 0), "V" in B) {
        if (B.V < 1 || B.V > 53) return null;
        "w" in B || (B.w = 1), "Z" in B ? (te = ss(An(B.y, 0, 1)), xe = te.getUTCDay(), te = xe > 4 || xe === 0 ? xa.ceil(te) : xa(te), te = So.offset(te, (B.V - 1) * 7), B.y = te.getUTCFullYear(), B.m = te.getUTCMonth(), B.d = te.getUTCDate() + (B.w + 6) % 7) : (te = os(An(B.y, 0, 1)), xe = te.getDay(), te = xe > 4 || xe === 0 ? ba.ceil(te) : ba(te), te = Ti.offset(te, (B.V - 1) * 7), B.y = te.getFullYear(), B.m = te.getMonth(), B.d = te.getDate() + (B.w + 6) % 7);
      } else ("W" in B || "U" in B) && ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0), xe = "Z" in B ? ss(An(B.y, 0, 1)).getUTCDay() : os(An(B.y, 0, 1)).getDay(), B.m = 0, B.d = "W" in B ? (B.w + 6) % 7 + B.W * 7 - (xe + 5) % 7 : B.w + B.U * 7 - (xe + 6) % 7);
      return "Z" in B ? (B.H += B.Z / 100 | 0, B.M += B.Z % 100, ss(B)) : os(B);
    };
  }
  function A(z, Y, J, B) {
    for (var de = 0, te = Y.length, xe = J.length, we, We; de < te; ) {
      if (B >= xe) return -1;
      if (we = Y.charCodeAt(de++), we === 37) {
        if (we = Y.charAt(de++), We = m[we in Qf ? Y.charAt(de++) : we], !We || (B = We(z, J, B)) < 0) return -1;
      } else if (we != J.charCodeAt(B++))
        return -1;
    }
    return B;
  }
  function $(z, Y, J) {
    var B = c.exec(Y.slice(J));
    return B ? (z.p = f.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function M(z, Y, J) {
    var B = d.exec(Y.slice(J));
    return B ? (z.w = y.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function j(z, Y, J) {
    var B = l.exec(Y.slice(J));
    return B ? (z.w = h.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function T(z, Y, J) {
    var B = g.exec(Y.slice(J));
    return B ? (z.m = _.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function N(z, Y, J) {
    var B = p.exec(Y.slice(J));
    return B ? (z.m = v.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function k(z, Y, J) {
    return A(z, t, Y, J);
  }
  function C(z, Y, J) {
    return A(z, r, Y, J);
  }
  function D(z, Y, J) {
    return A(z, n, Y, J);
  }
  function I(z) {
    return o[z.getDay()];
  }
  function R(z) {
    return a[z.getDay()];
  }
  function F(z) {
    return u[z.getMonth()];
  }
  function q(z) {
    return s[z.getMonth()];
  }
  function G(z) {
    return i[+(z.getHours() >= 12)];
  }
  function W(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function V(z) {
    return o[z.getUTCDay()];
  }
  function le(z) {
    return a[z.getUTCDay()];
  }
  function ye(z) {
    return u[z.getUTCMonth()];
  }
  function He(z) {
    return s[z.getUTCMonth()];
  }
  function Qt(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function ze(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var Y = b(z += "", x);
      return Y.toString = function() {
        return z;
      }, Y;
    },
    parse: function(z) {
      var Y = O(z += "", !1);
      return Y.toString = function() {
        return z;
      }, Y;
    },
    utcFormat: function(z) {
      var Y = b(z += "", w);
      return Y.toString = function() {
        return z;
      }, Y;
    },
    utcParse: function(z) {
      var Y = O(z += "", !0);
      return Y.toString = function() {
        return z;
      }, Y;
    }
  };
}
var Qf = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, rC = /^%/, nC = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function iC(e) {
  return e.replace(nC, "\\$&");
}
function Pn(e) {
  return new RegExp("^(?:" + e.map(iC).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function aC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function oC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function sC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function uC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function cC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function eh(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function th(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function lC(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function fC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function hC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function rh(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function pC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function nh(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function dC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function vC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function yC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function mC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function gC(e, t, r) {
  var n = rC.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function bC(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function xC(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function ih(e, t) {
  return re(e.getDate(), t, 2);
}
function wC(e, t) {
  return re(e.getHours(), t, 2);
}
function _C(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function OC(e, t) {
  return re(1 + Ti.count(Dt(e), e), t, 3);
}
function zv(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function SC(e, t) {
  return zv(e, t) + "000";
}
function AC(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function PC(e, t) {
  return re(e.getMinutes(), t, 2);
}
function $C(e, t) {
  return re(e.getSeconds(), t, 2);
}
function jC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function TC(e, t) {
  return re(Ao.count(Dt(e) - 1, e), t, 2);
}
function Wv(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Wr(e) : Wr.ceil(e);
}
function EC(e, t) {
  return e = Wv(e), re(Wr.count(Dt(e), e) + (Dt(e).getDay() === 4), t, 2);
}
function MC(e) {
  return e.getDay();
}
function CC(e, t) {
  return re(ba.count(Dt(e) - 1, e), t, 2);
}
function kC(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function NC(e, t) {
  return e = Wv(e), re(e.getFullYear() % 100, t, 2);
}
function DC(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function IC(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Wr(e) : Wr.ceil(e), re(e.getFullYear() % 1e4, t, 4);
}
function BC(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + re(t / 60 | 0, "0", 2) + re(t % 60, "0", 2);
}
function ah(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function LC(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function RC(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function FC(e, t) {
  return re(1 + So.count(It(e), e), t, 3);
}
function Uv(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function zC(e, t) {
  return Uv(e, t) + "000";
}
function WC(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function UC(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function KC(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function qC(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function HC(e, t) {
  return re(Po.count(It(e) - 1, e), t, 2);
}
function Kv(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function GC(e, t) {
  return e = Kv(e), re(Ur.count(It(e), e) + (It(e).getUTCDay() === 4), t, 2);
}
function VC(e) {
  return e.getUTCDay();
}
function XC(e, t) {
  return re(xa.count(It(e) - 1, e), t, 2);
}
function YC(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function ZC(e, t) {
  return e = Kv(e), re(e.getUTCFullYear() % 100, t, 2);
}
function JC(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function QC(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ur(e) : Ur.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function ek() {
  return "+0000";
}
function oh() {
  return "%";
}
function sh(e) {
  return +e;
}
function uh(e) {
  return Math.floor(+e / 1e3);
}
var $r, qv, Hv;
tk({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function tk(e) {
  return $r = tC(e), qv = $r.format, $r.parse, Hv = $r.utcFormat, $r.utcParse, $r;
}
function rk(e) {
  return new Date(e);
}
function nk(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function kc(e, t, r, n, i, a, o, s, u, c) {
  var f = bc(), l = f.invert, h = f.domain, d = c(".%L"), y = c(":%S"), p = c("%I:%M"), v = c("%I %p"), g = c("%a %d"), _ = c("%b %d"), x = c("%B"), w = c("%Y");
  function m(b) {
    return (u(b) < b ? d : s(b) < b ? y : o(b) < b ? p : a(b) < b ? v : n(b) < b ? i(b) < b ? g : _ : r(b) < b ? x : w)(b);
  }
  return f.invert = function(b) {
    return new Date(l(b));
  }, f.domain = function(b) {
    return arguments.length ? h(Array.from(b, nk)) : h().map(rk);
  }, f.ticks = function(b) {
    var O = h();
    return e(O[0], O[O.length - 1], b ?? 10);
  }, f.tickFormat = function(b, O) {
    return O == null ? m : c(O);
  }, f.nice = function(b) {
    var O = h();
    return (!b || typeof b.range != "function") && (b = t(O[0], O[O.length - 1], b ?? 10)), b ? h(Cv(O, b)) : f;
  }, f.copy = function() {
    return ji(f, kc(e, t, r, n, i, a, o, s, u, c));
  }, f;
}
function ik() {
  return ut.apply(kc(QM, eC, Dt, Mc, Ao, Ti, Tc, $c, ur, qv).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function ak() {
  return ut.apply(kc(ZM, JM, It, Cc, Po, So, Ec, jc, ur, Hv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function $o() {
  var e = 0, t = 1, r, n, i, a, o = Fe, s = !1, u;
  function c(l) {
    return l == null || isNaN(l = +l) ? u : o(i === 0 ? 0.5 : (l = (a(l) - r) * i, s ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (s = !!l, c) : s;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(h) {
      var d, y;
      return arguments.length ? ([d, y] = h, o = l(d, y), c) : [o(0), o(1)];
    };
  }
  return c.range = f(yn), c.rangeRound = f(gc), c.unknown = function(l) {
    return arguments.length ? (u = l, c) : u;
  }, function(l) {
    return a = l, r = l(e), n = l(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function Zt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Gv() {
  var e = Yt($o()(Fe));
  return e.copy = function() {
    return Zt(e, Gv());
  }, zt.apply(e, arguments);
}
function Vv() {
  var e = _c($o()).domain([1, 10]);
  return e.copy = function() {
    return Zt(e, Vv()).base(e.base());
  }, zt.apply(e, arguments);
}
function Xv() {
  var e = Oc($o());
  return e.copy = function() {
    return Zt(e, Xv()).constant(e.constant());
  }, zt.apply(e, arguments);
}
function Nc() {
  var e = Sc($o());
  return e.copy = function() {
    return Zt(e, Nc()).exponent(e.exponent());
  }, zt.apply(e, arguments);
}
function ok() {
  return Nc.apply(null, arguments).exponent(0.5);
}
function Yv() {
  var e = [], t = Fe;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Pi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Gt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => HE(e, a / n));
  }, r.copy = function() {
    return Yv(t).domain(e);
  }, zt.apply(r, arguments);
}
function jo() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, u, c = Fe, f, l = !1, h;
  function d(p) {
    return isNaN(p = +p) ? h : (p = 0.5 + ((p = +f(p)) - a) * (n * p < n * a ? s : u), c(l ? Math.max(0, Math.min(1, p)) : p));
  }
  d.domain = function(p) {
    return arguments.length ? ([e, t, r] = p, i = f(e = +e), a = f(t = +t), o = f(r = +r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d) : [e, t, r];
  }, d.clamp = function(p) {
    return arguments.length ? (l = !!p, d) : l;
  }, d.interpolator = function(p) {
    return arguments.length ? (c = p, d) : c;
  };
  function y(p) {
    return function(v) {
      var g, _, x;
      return arguments.length ? ([g, _, x] = v, c = gM(p, [g, _, x]), d) : [c(0), c(0.5), c(1)];
    };
  }
  return d.range = y(yn), d.rangeRound = y(gc), d.unknown = function(p) {
    return arguments.length ? (h = p, d) : h;
  }, function(p) {
    return f = p, i = p(e), a = p(t), o = p(r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function Zv() {
  var e = Yt(jo()(Fe));
  return e.copy = function() {
    return Zt(e, Zv());
  }, zt.apply(e, arguments);
}
function Jv() {
  var e = _c(jo()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Zt(e, Jv()).base(e.base());
  }, zt.apply(e, arguments);
}
function Qv() {
  var e = Oc(jo());
  return e.copy = function() {
    return Zt(e, Qv()).constant(e.constant());
  }, zt.apply(e, arguments);
}
function Dc() {
  var e = Sc(jo());
  return e.copy = function() {
    return Zt(e, Dc()).exponent(e.exponent());
  }, zt.apply(e, arguments);
}
function sk() {
  return Dc.apply(null, arguments).exponent(0.5);
}
const ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Vn,
  scaleDiverging: Zv,
  scaleDivergingLog: Jv,
  scaleDivergingPow: Dc,
  scaleDivergingSqrt: sk,
  scaleDivergingSymlog: Qv,
  scaleIdentity: Mv,
  scaleImplicit: Gs,
  scaleLinear: ma,
  scaleLog: kv,
  scaleOrdinal: vc,
  scalePoint: Nn,
  scalePow: Ac,
  scaleQuantile: Iv,
  scaleQuantize: Bv,
  scaleRadial: Dv,
  scaleSequential: Gv,
  scaleSequentialLog: Vv,
  scaleSequentialPow: Nc,
  scaleSequentialQuantile: Yv,
  scaleSequentialSqrt: ok,
  scaleSequentialSymlog: Xv,
  scaleSqrt: zM,
  scaleSymlog: Nv,
  scaleThreshold: Lv,
  scaleTime: ik,
  scaleUtc: ak,
  tickFormat: Ev
}, Symbol.toStringTag, { value: "Module" }));
var uk = sn;
function ck(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !uk(o) : r(o, s)))
      var s = o, u = a;
  }
  return u;
}
var ey = ck;
function lk(e, t) {
  return e > t;
}
var fk = lk, hk = ey, pk = fk, dk = vn;
function vk(e) {
  return e && e.length ? hk(e, dk, pk) : void 0;
}
var yk = vk;
const To = /* @__PURE__ */ ce(yk);
function mk(e, t) {
  return e < t;
}
var gk = mk, bk = ey, xk = gk, wk = vn;
function _k(e) {
  return e && e.length ? bk(e, wk, xk) : void 0;
}
var Ok = _k;
const Eo = /* @__PURE__ */ ce(Ok);
var Sk = Yu, Ak = Xt, Pk = cv, $k = qe;
function jk(e, t) {
  var r = $k(e) ? Sk : Pk;
  return r(e, Ak(t));
}
var Tk = jk, Ek = sv, Mk = Tk;
function Ck(e, t) {
  return Ek(Mk(e, t), 1);
}
var kk = Ck;
const Nk = /* @__PURE__ */ ce(kk);
var Dk = lc;
function Ik(e, t) {
  return Dk(e, t);
}
var Bk = Ik;
const Ei = /* @__PURE__ */ ce(Bk);
var mn = 1e9, Lk = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Bc, pe = !0, ot = "[DecimalError] ", hr = ot + "Invalid argument: ", Ic = ot + "Exponent out of range: ", gn = Math.floor, ar = Math.pow, Rk = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ye, $e = 1e7, he = 7, ty = 9007199254740991, wa = gn(ty / he), U = {};
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
U.decimalPlaces = U.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * he;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function(e) {
  return Ct(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function(e) {
  var t = this, r = t.constructor;
  return oe(Ct(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function(e) {
  return !this.cmp(e);
};
U.exponent = function() {
  return be(this);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function() {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function() {
  return this.s < 0;
};
U.isPositive = U.ispos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return this.s === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Ye)) throw Error(ot + "NaN");
  if (r.s < 1) throw Error(ot + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ye) ? new n(0) : (pe = !1, t = Ct(Qn(r, a), Qn(e, a), a), pe = !0, oe(t, i));
};
U.minus = U.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? iy(t, e) : ry(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ot + "NaN");
  return r.s ? (pe = !1, t = Ct(r, e, 0, 1).times(e), pe = !0, r.minus(t)) : oe(new n(r), i);
};
U.naturalExponential = U.exp = function() {
  return ny(this);
};
U.naturalLogarithm = U.ln = function() {
  return Qn(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
U.plus = U.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? ry(t, e) : iy(t, (e.s = -e.s, e));
};
U.precision = U.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(hr + e);
  if (t = be(i) + 1, n = i.d.length - 1, r = n * he + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, i, a, o, s = this, u = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new u(0);
    throw Error(ot + "NaN");
  }
  for (e = be(s), pe = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = yt(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = gn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Ct(s, a, o + 2)).times(0.5), yt(a.d).slice(0, o) === (t = yt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (oe(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return pe = !0, oe(n, r);
};
U.times = U.mul = function(e) {
  var t, r, n, i, a, o, s, u, c, f = this, l = f.constructor, h = f.d, d = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, u = h.length, c = d.length, u < c && (a = h, h = d, d = a, o = u, u = c, c = o), a = [], o = u + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      s = a[i] + d[n] * h[i - n - 1] + t, a[i--] = s % $e | 0, t = s / $e | 0;
    a[i] = (a[i] + t) % $e | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, pe ? oe(e, l.precision) : e;
};
U.toDecimalPlaces = U.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (wt(e, 0, mn), t === void 0 ? t = n.rounding : wt(t, 0, 8), oe(r, e + be(r) + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = yr(n, !0) : (wt(e, 0, mn), t === void 0 ? t = i.rounding : wt(t, 0, 8), n = oe(new i(n), e + 1, t), r = yr(n, !0, e + 1)), r;
};
U.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? yr(i) : (wt(e, 0, mn), t === void 0 ? t = a.rounding : wt(t, 0, 8), n = oe(new a(i), e + be(i) + 1, t), r = yr(n.abs(), !1, e + be(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function() {
  var e = this, t = e.constructor;
  return oe(new t(e), be(e) + 1, t.rounding);
};
U.toNumber = function() {
  return +this;
};
U.toPower = U.pow = function(e) {
  var t, r, n, i, a, o, s = this, u = s.constructor, c = 12, f = +(e = new u(e));
  if (!e.s) return new u(Ye);
  if (s = new u(s), !s.s) {
    if (e.s < 1) throw Error(ot + "Infinity");
    return s;
  }
  if (s.eq(Ye)) return s;
  if (n = u.precision, e.eq(Ye)) return oe(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = f < 0 ? -f : f) <= ty) {
      for (i = new u(Ye), t = Math.ceil(n / he + 4), pe = !1; r % 2 && (i = i.times(s), fh(i.d, t)), r = gn(r / 2), r !== 0; )
        s = s.times(s), fh(s.d, t);
      return pe = !0, e.s < 0 ? new u(Ye).div(i) : oe(i, n);
    }
  } else if (a < 0) throw Error(ot + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, pe = !1, i = e.times(Qn(s, n + c)), pe = !0, i = ny(i), i.s = a, i;
};
U.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = be(i), n = yr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (wt(e, 1, mn), t === void 0 ? t = a.rounding : wt(t, 0, 8), i = oe(new a(i), e, t), r = be(i), n = yr(i, e <= r || r <= a.toExpNeg, e)), n;
};
U.toSignificantDigits = U.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (wt(e, 1, mn), t === void 0 ? t = n.rounding : wt(t, 0, 8)), oe(new n(r), e, t);
};
U.toString = U.valueOf = U.val = U.toJSON = U[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = be(e), r = e.constructor;
  return yr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function ry(e, t) {
  var r, n, i, a, o, s, u, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), pe ? oe(t, l) : t;
  if (u = e.d, c = t.d, o = e.e, i = t.e, u = u.slice(), a = o - i, a) {
    for (a < 0 ? (n = u, a = -a, s = c.length) : (n = c, i = o, s = u.length), o = Math.ceil(l / he), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = u.length, a = c.length, s - a < 0 && (a = s, n = c, c = u, u = n), r = 0; a; )
    r = (u[--a] = u[a] + c[a] + r) / $e | 0, u[a] %= $e;
  for (r && (u.unshift(r), ++i), s = u.length; u[--s] == 0; ) u.pop();
  return t.d = u, t.e = i, pe ? oe(t, l) : t;
}
function wt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(hr + e);
}
function yt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = he - n.length, r && (a += Ut(r)), a += n;
    o = e[t], n = o + "", r = he - n.length, r && (a += Ut(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Ct = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * i + o, n[s] = a % $e | 0, o = a / $e | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, u;
    if (a != o)
      u = a > o ? 1 : -1;
    else
      for (s = u = 0; s < a; s++)
        if (n[s] != i[s]) {
          u = n[s] > i[s] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * $e + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, u, c, f, l, h, d, y, p, v, g, _, x, w, m, b, O, A, $ = n.constructor, M = n.s == i.s ? 1 : -1, j = n.d, T = i.d;
    if (!n.s) return new $(n);
    if (!i.s) throw Error(ot + "Division by zero");
    for (u = n.e - i.e, O = T.length, m = j.length, d = new $(M), y = d.d = [], c = 0; T[c] == (j[c] || 0); ) ++c;
    if (T[c] > (j[c] || 0) && --u, a == null ? _ = a = $.precision : o ? _ = a + (be(n) - be(i)) + 1 : _ = a, _ < 0) return new $(0);
    if (_ = _ / he + 2 | 0, c = 0, O == 1)
      for (f = 0, T = T[0], _++; (c < m || f) && _--; c++)
        x = f * $e + (j[c] || 0), y[c] = x / T | 0, f = x % T | 0;
    else {
      for (f = $e / (T[0] + 1) | 0, f > 1 && (T = e(T, f), j = e(j, f), O = T.length, m = j.length), w = O, p = j.slice(0, O), v = p.length; v < O; ) p[v++] = 0;
      A = T.slice(), A.unshift(0), b = T[0], T[1] >= $e / 2 && ++b;
      do
        f = 0, s = t(T, p, O, v), s < 0 ? (g = p[0], O != v && (g = g * $e + (p[1] || 0)), f = g / b | 0, f > 1 ? (f >= $e && (f = $e - 1), l = e(T, f), h = l.length, v = p.length, s = t(l, p, h, v), s == 1 && (f--, r(l, O < h ? A : T, h))) : (f == 0 && (s = f = 1), l = T.slice()), h = l.length, h < v && l.unshift(0), r(p, l, v), s == -1 && (v = p.length, s = t(T, p, O, v), s < 1 && (f++, r(p, O < v ? A : T, v))), v = p.length) : s === 0 && (f++, p = [0]), y[c++] = f, s && p[0] ? p[v++] = j[w] || 0 : (p = [j[w]], v = 1);
      while ((w++ < m || p[0] !== void 0) && _--);
    }
    return y[0] || y.shift(), d.e = u, oe(d, o ? a + be(d) + 1 : a);
  };
}();
function ny(e, t) {
  var r, n, i, a, o, s, u = 0, c = 0, f = e.constructor, l = f.precision;
  if (be(e) > 16) throw Error(Ic + be(e));
  if (!e.s) return new f(Ye);
  for (pe = !1, s = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(ar(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new f(Ye), f.precision = s; ; ) {
    if (i = oe(i.times(e), s), r = r.times(++u), o = a.plus(Ct(i, r, s)), yt(o.d).slice(0, s) === yt(a.d).slice(0, s)) {
      for (; c--; ) a = oe(a.times(a), s);
      return f.precision = l, t == null ? (pe = !0, oe(a, l)) : a;
    }
    a = o;
  }
}
function be(e) {
  for (var t = e.e * he, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function us(e, t, r) {
  if (t > e.LN10.sd())
    throw pe = !0, r && (e.precision = r), Error(ot + "LN10 precision limit exceeded");
  return oe(new e(e.LN10), t);
}
function Ut(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Qn(e, t) {
  var r, n, i, a, o, s, u, c, f, l = 1, h = 10, d = e, y = d.d, p = d.constructor, v = p.precision;
  if (d.s < 1) throw Error(ot + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Ye)) return new p(0);
  if (t == null ? (pe = !1, c = v) : c = t, d.eq(10))
    return t == null && (pe = !0), us(p, c);
  if (c += h, p.precision = c, r = yt(y), n = r.charAt(0), a = be(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      d = d.times(e), r = yt(d.d), n = r.charAt(0), l++;
    a = be(d), n > 1 ? (d = new p("0." + r), a++) : d = new p(n + "." + r.slice(1));
  } else
    return u = us(p, c + 2, v).times(a + ""), d = Qn(new p(n + "." + r.slice(1)), c - h).plus(u), p.precision = v, t == null ? (pe = !0, oe(d, v)) : d;
  for (s = o = d = Ct(d.minus(Ye), d.plus(Ye), c), f = oe(d.times(d), c), i = 3; ; ) {
    if (o = oe(o.times(f), c), u = s.plus(Ct(o, new p(i), c)), yt(u.d).slice(0, c) === yt(s.d).slice(0, c))
      return s = s.times(2), a !== 0 && (s = s.plus(us(p, c + 2, v).times(a + ""))), s = Ct(s, new p(l), c), p.precision = v, t == null ? (pe = !0, oe(s, v)) : s;
    s = u, i += 2;
  }
}
function lh(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = gn(r / he), e.d = [], n = (r + 1) % he, r < 0 && (n += he), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= he; n < i; ) e.d.push(+t.slice(n, n += he));
      t = t.slice(n), n = he - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), pe && (e.e > wa || e.e < -wa)) throw Error(Ic + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function oe(e, t, r) {
  var n, i, a, o, s, u, c, f, l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += he, i = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / he), a = l.length, f >= a) return e;
    for (c = a = l[f], o = 1; a >= 10; a /= 10) o++;
    n %= he, i = n - he + o;
  }
  if (r !== void 0 && (a = ar(10, o - i - 1), s = c / a % 10 | 0, u = t < 0 || l[f + 1] !== void 0 || c % a, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / ar(10, o - i) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return u ? (a = be(e), l.length = 1, t = t - a - 1, l[0] = ar(10, (he - t % he) % he), e.e = gn(-t / he) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, a = 1, f--) : (l.length = f + 1, a = ar(10, he - n), l[f] = i > 0 ? (c / ar(10, o - i) % ar(10, i) | 0) * a : 0), u)
    for (; ; )
      if (f == 0) {
        (l[0] += a) == $e && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += a, l[f] != $e) break;
        l[f--] = 0, a = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (pe && (e.e > wa || e.e < -wa))
    throw Error(Ic + be(e));
  return e;
}
function iy(e, t) {
  var r, n, i, a, o, s, u, c, f, l, h = e.constructor, d = h.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new h(e), pe ? oe(t, d) : t;
  if (u = e.d, l = t.d, n = t.e, c = e.e, u = u.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = u, o = -o, s = l.length) : (r = l, n = c, s = u.length), i = Math.max(Math.ceil(d / he), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = u.length, s = l.length, f = i < s, f && (s = i), i = 0; i < s; i++)
      if (u[i] != l[i]) {
        f = u[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && (r = u, u = l, l = r, t.s = -t.s), s = u.length, i = l.length - s; i > 0; --i) u[s++] = 0;
  for (i = l.length; i > o; ) {
    if (u[--i] < l[i]) {
      for (a = i; a && u[--a] === 0; ) u[a] = $e - 1;
      --u[a], u[i] += $e;
    }
    u[i] -= l[i];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (t.d = u, t.e = n, pe ? oe(t, d) : t) : new h(0);
}
function yr(e, t, r) {
  var n, i = be(e), a = yt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ut(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Ut(-i - 1) + a, r && (n = r - o) > 0 && (a += Ut(n))) : i >= o ? (a += Ut(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Ut(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Ut(n))), e.s < 0 ? "-" + a : a;
}
function fh(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function ay(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(hr + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return lh(o, a.toString());
    } else if (typeof a != "string")
      throw Error(hr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, Rk.test(a)) lh(o, a);
    else throw Error(hr + a);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = ay, i.config = i.set = Fk, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function Fk(e) {
  if (!e || typeof e != "object")
    throw Error(ot + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    mn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (gn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(hr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(hr + r + ": " + n);
  return this;
}
var Bc = ay(Lk);
Ye = new Bc(1);
const ae = Bc;
function zk(e) {
  return qk(e) || Kk(e) || Uk(e) || Wk();
}
function Wk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uk(e, t) {
  if (e) {
    if (typeof e == "string") return Zs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zs(e, t);
  }
}
function Kk(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function qk(e) {
  if (Array.isArray(e)) return Zs(e);
}
function Zs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Hk = function(t) {
  return t;
}, oy = {}, sy = function(t) {
  return t === oy;
}, hh = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && sy(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, Gk = function e(t, r) {
  return t === 1 ? r : hh(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== oy;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, hh(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var f = i.map(function(l) {
        return sy(l) ? u.shift() : l;
      });
      return r.apply(void 0, zk(f).concat(u));
    }));
  });
}, Mo = function(t) {
  return Gk(t.length, t);
}, Js = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, Vk = Mo(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), Xk = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return Hk;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, a.apply(void 0, arguments));
  };
}, Qs = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, uy = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, u) {
      return s === r[u];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function Yk(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ae(e).abs().log(10).toNumber()) + 1, t;
}
function Zk(e, t, r) {
  for (var n = new ae(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Jk = Mo(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), Qk = Mo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), eN = Mo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Co = {
  rangeStep: Zk,
  getDigitCount: Yk,
  interpolateNumber: Jk,
  uninterpolateNumber: Qk,
  uninterpolateTruncation: eN
};
function eu(e) {
  return nN(e) || rN(e) || cy(e) || tN();
}
function tN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rN(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function nN(e) {
  if (Array.isArray(e)) return tu(e);
}
function ei(e, t) {
  return oN(e) || aN(e, t) || cy(e, t) || iN();
}
function iN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cy(e, t) {
  if (e) {
    if (typeof e == "string") return tu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tu(e, t);
  }
}
function tu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function aN(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function oN(e) {
  if (Array.isArray(e)) return e;
}
function ly(e) {
  var t = ei(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function fy(e, t, r) {
  if (e.lte(0))
    return new ae(0);
  var n = Co.getDigitCount(e.toNumber()), i = new ae(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new ae(Math.ceil(a.div(o).toNumber())).add(r).mul(o), u = s.mul(i);
  return t ? u : new ae(Math.ceil(u));
}
function sN(e, t, r) {
  var n = 1, i = new ae(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ae(10).pow(Co.getDigitCount(e) - 1), i = new ae(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ae(Math.floor(e)));
  } else e === 0 ? i = new ae(Math.floor((t - 1) / 2)) : r || (i = new ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = Xk(Vk(function(u) {
    return i.add(new ae(u - o).mul(n)).toNumber();
  }), Js);
  return s(0, t);
}
function hy(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ae(0),
      tickMin: new ae(0),
      tickMax: new ae(0)
    };
  var a = fy(new ae(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ae(0) : (o = new ae(e).add(t).div(2), o = o.sub(new ae(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), u = Math.ceil(new ae(t).sub(o).div(a).toNumber()), c = s + u + 1;
  return c > r ? hy(e, t, r, n, i + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: a,
    tickMin: o.sub(new ae(s).mul(a)),
    tickMax: o.add(new ae(u).mul(a))
  });
}
function uN(e) {
  var t = ei(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = ly([r, n]), u = ei(s, 2), c = u[0], f = u[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(eu(Js(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(eu(Js(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? Qs(l) : l;
  }
  if (c === f)
    return sN(c, i, a);
  var h = hy(c, f, o, a), d = h.step, y = h.tickMin, p = h.tickMax, v = Co.rangeStep(y, p.add(new ae(0.1).mul(d)), d);
  return r > n ? Qs(v) : v;
}
function cN(e, t) {
  var r = ei(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = ly([n, i]), s = ei(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (u === c)
    return [u];
  var f = Math.max(t, 2), l = fy(new ae(c).sub(u).div(f - 1), a, 0), h = [].concat(eu(Co.rangeStep(new ae(u), new ae(c).sub(new ae(0.99).mul(l)), l)), [c]);
  return n > i ? Qs(h) : h;
}
var lN = uy(uN), fN = uy(cN), hN = "Invariant failed";
function mr(e, t) {
  throw new Error(hN);
}
var pN = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _a.apply(this, arguments);
}
function dN(e, t) {
  return gN(e) || mN(e, t) || yN(e, t) || vN();
}
function vN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yN(e, t) {
  if (e) {
    if (typeof e == "string") return ph(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ph(e, t);
  }
}
function ph(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function gN(e) {
  if (Array.isArray(e)) return e;
}
function bN(e, t) {
  if (e == null) return {};
  var r = xN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _N(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vy(n.key), n);
  }
}
function ON(e, t, r) {
  return t && _N(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SN(e, t, r) {
  return t = Oa(t), AN(e, py() ? Reflect.construct(t, r || [], Oa(e).constructor) : t.apply(e, r));
}
function AN(e, t) {
  if (t && (Kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PN(e);
}
function PN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function py() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (py = function() {
    return !!e;
  })();
}
function Oa(e) {
  return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oa(e);
}
function $N(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ru(e, t);
}
function ru(e, t) {
  return ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ru(e, t);
}
function dy(e, t, r) {
  return t = vy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vy(e) {
  var t = jN(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function jN(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var bn = /* @__PURE__ */ function(e) {
  function t() {
    return wN(this, t), SN(this, t, arguments);
  }
  return $N(t, e), ON(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, h = bN(n, pN), d = Q(h, !1);
      this.props.direction === "x" && f.type !== "number" && mr();
      var y = u.map(function(p) {
        var v = c(p, s), g = v.x, _ = v.y, x = v.value, w = v.errorVal;
        if (!w)
          return null;
        var m = [], b, O;
        if (Array.isArray(w)) {
          var A = dN(w, 2);
          b = A[0], O = A[1];
        } else
          b = O = w;
        if (a === "vertical") {
          var $ = f.scale, M = _ + i, j = M + o, T = M - o, N = $(x - b), k = $(x + O);
          m.push({
            x1: k,
            y1: j,
            x2: k,
            y2: T
          }), m.push({
            x1: N,
            y1: M,
            x2: k,
            y2: M
          }), m.push({
            x1: N,
            y1: j,
            x2: N,
            y2: T
          });
        } else if (a === "horizontal") {
          var C = l.scale, D = g + i, I = D - o, R = D + o, F = C(x - b), q = C(x + O);
          m.push({
            x1: I,
            y1: q,
            x2: R,
            y2: q
          }), m.push({
            x1: D,
            y1: F,
            x2: D,
            y2: q
          }), m.push({
            x1: I,
            y1: F,
            x2: R,
            y2: F
          });
        }
        return /* @__PURE__ */ P.createElement(ue, _a({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(G) {
            return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
          }))
        }, d), m.map(function(G) {
          return /* @__PURE__ */ P.createElement("line", _a({}, G, {
            key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
          }));
        }));
      });
      return /* @__PURE__ */ P.createElement(ue, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
}(P.Component);
dy(bn, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
dy(bn, "displayName", "ErrorBar");
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(r), !0).forEach(function(n) {
      TN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TN(e, t, r) {
  return t = EN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EN(e) {
  var t = MN(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function MN(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yy = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Xe(r, Ze);
  if (!o)
    return null;
  var s = Ze.defaultProps, u = s !== void 0 ? rr(rr({}, s), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : a === "children" ? c = (n || []).reduce(function(f, l) {
    var h = l.item, d = l.props, y = d.sectors || d.data || [];
    return f.concat(y.map(function(p) {
      return {
        type: o.props.iconType || h.props.legendType,
        value: p.name,
        color: p.fill,
        payload: p
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, h = l.type.defaultProps, d = h !== void 0 ? rr(rr({}, h), l.props) : {}, y = d.dataKey, p = d.name, v = d.legendType, g = d.hide;
    return {
      inactive: g,
      dataKey: y,
      type: u.iconType || v || "square",
      color: Lc(l),
      value: p || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: d
    };
  }), rr(rr(rr({}, u), Ze.getWithHeight(o, i)), {}, {
    payload: c,
    item: o
  });
};
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function vh(e) {
  return DN(e) || NN(e) || kN(e) || CN();
}
function CN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kN(e, t) {
  if (e) {
    if (typeof e == "string") return nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nu(e, t);
  }
}
function NN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function DN(e) {
  if (Array.isArray(e)) return nu(e);
}
function nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yh(Object(r), !0).forEach(function(n) {
      Dr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dr(e, t, r) {
  return t = IN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IN(e) {
  var t = BN(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function BN(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ke(e, t, r) {
  return X(e) || X(t) ? r : Ae(t) ? at(e, t, r) : Z(t) ? t(e) : r;
}
function Dn(e, t, r, n) {
  var i = Nk(e, function(s) {
    return ke(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return L(s) || parseFloat(s);
    });
    return a.length ? [Eo(a), To(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !X(s);
  }) : i;
  return o.map(function(s) {
    return Ae(s) || s instanceof Date ? s : "";
  });
}
var LN = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var u = a.range, c = 0; c < s; c++) {
      var f = c > 0 ? i[c - 1].coordinate : i[s - 1].coordinate, l = i[c].coordinate, h = c >= s - 1 ? i[0].coordinate : i[c + 1].coordinate, d = void 0;
      if (pt(l - f) !== pt(h - l)) {
        var y = [];
        if (pt(h - l) === pt(u[1] - u[0])) {
          d = h;
          var p = l + u[1] - u[0];
          y[0] = Math.min(p, (p + f) / 2), y[1] = Math.max(p, (p + f) / 2);
        } else {
          d = f;
          var v = h + u[1] - u[0];
          y[0] = Math.min(l, (v + l) / 2), y[1] = Math.max(l, (v + l) / 2);
        }
        var g = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
        if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
          o = i[c].index;
          break;
        }
      } else {
        var _ = Math.min(f, h), x = Math.max(f, h);
        if (t > (_ + l) / 2 && t <= (x + l) / 2) {
          o = i[c].index;
          break;
        }
      }
    }
  else
    for (var w = 0; w < s; w++)
      if (w === 0 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w > 0 && w < s - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w === s - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2) {
        o = n[w].index;
        break;
      }
  return o;
}, Lc = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, u;
  switch (i) {
    case "Line":
      u = o;
      break;
    case "Area":
    case "Radar":
      u = o && o !== "none" ? o : s;
      break;
    default:
      u = s;
      break;
  }
  return u;
}, RN = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, s = Object.keys(a), u = 0, c = s.length; u < c; u++)
    for (var f = a[s[u]].stackGroups, l = Object.keys(f), h = 0, d = l.length; h < d; h++) {
      var y = f[l[h]], p = y.items, v = y.cateAxisId, g = p.filter(function(O) {
        return Et(O.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var _ = g[0].type.defaultProps, x = _ !== void 0 ? ve(ve({}, _), g[0].props) : g[0].props, w = x.barSize, m = x[v];
        o[m] || (o[m] = []);
        var b = X(w) ? r : w;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: X(b) ? void 0 : vr(b, n, 0)
        });
      }
    }
  return o;
}, FN = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, u = o.length;
  if (u < 1) return null;
  var c = vr(r, i, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = !1, d = i / u, y = o.reduce(function(w, m) {
      return w + m.barSize || 0;
    }, 0);
    y += (u - 1) * c, y >= i && (y -= (u - 1) * c, c = 0), y >= i && d > 0 && (h = !0, d *= 0.9, y = u * d);
    var p = (i - y) / 2 >> 0, v = {
      offset: p - c,
      size: 0
    };
    f = o.reduce(function(w, m) {
      var b = {
        item: m.item,
        position: {
          offset: v.offset + v.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: h ? d : m.barSize
        }
      }, O = [].concat(vh(w), [b]);
      return v = O[O.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        O.push({
          item: A,
          position: v
        });
      }), O;
    }, l);
  } else {
    var g = vr(n, i, 0, !0);
    i - 2 * g - (u - 1) * c <= 0 && (c = 0);
    var _ = (i - 2 * g - (u - 1) * c) / u;
    _ > 1 && (_ >>= 0);
    var x = s === +s ? Math.min(_, s) : _;
    f = o.reduce(function(w, m, b) {
      var O = [].concat(vh(w), [{
        item: m.item,
        position: {
          offset: g + (_ + c) * b + (_ - x) / 2,
          size: x
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        O.push({
          item: A,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, zN = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = yy({
    children: a,
    legendWidth: u
  });
  if (c) {
    var f = i || {}, l = f.width, h = f.height, d = c.align, y = c.verticalAlign, p = c.layout;
    if ((p === "vertical" || p === "horizontal" && y === "middle") && d !== "center" && L(t[d]))
      return ve(ve({}, t), {}, Dr({}, d, t[d] + (l || 0)));
    if ((p === "horizontal" || p === "vertical" && d === "center") && y !== "middle" && L(t[y]))
      return ve(ve({}, t), {}, Dr({}, y, t[y] + (h || 0)));
  }
  return t;
}, WN = function(t, r, n) {
  return X(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, my = function(t, r, n, i, a) {
  var o = r.props.children, s = Ke(o, bn).filter(function(c) {
    return WN(i, a, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = ke(f, n);
      if (X(l)) return c;
      var h = Array.isArray(l) ? [Eo(l), To(l)] : [l, l], d = u.reduce(function(y, p) {
        var v = ke(f, p, 0), g = h[0] - Math.abs(Array.isArray(v) ? v[0] : v), _ = h[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(g, y[0]), Math.max(_, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], c[0]), Math.max(d[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, UN = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return my(t, s, n, a, i);
  }).filter(function(s) {
    return !X(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, gy = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && my(t, u, c, i) || Dn(t, c, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(u, c) {
        return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(u, c) {
    for (var f = 0, l = c.length; f < l; f++)
      s[c[f]] || (s[c[f]] = !0, u.push(c[f]));
    return u;
  }, []);
}, by = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, xy = function(t, r, n, i) {
  if (i)
    return t.map(function(u) {
      return u.coordinate;
    });
  var a, o, s = t.map(function(u) {
    return u.coordinate === r && (a = !0), u.coordinate === n && (o = !0), u.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, Tt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / u : 0;
  if (c = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? pt(s[0] - s[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var h = a ? a.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(h) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !Oi(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, h) {
    return {
      coordinate: i(l) + c,
      value: l,
      index: h,
      offset: c
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: i(l) + c,
      value: l,
      offset: c
    };
  }) : i.domain().map(function(l, h) {
    return {
      coordinate: i(l) + c,
      value: a ? a[l] : l,
      index: h,
      offset: c
    };
  });
}, cs = /* @__PURE__ */ new WeakMap(), Wi = function(t, r) {
  if (typeof r != "function")
    return t;
  cs.has(t) || cs.set(t, /* @__PURE__ */ new WeakMap());
  var n = cs.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, KN = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: Vn(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: ma(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Nn(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Vn(),
      realScaleType: "band"
    } : {
      scale: ma(),
      realScaleType: "linear"
    };
  if (dr(i)) {
    var u = "scale".concat(vo(i));
    return {
      scale: (ch[u] || Nn)(),
      realScaleType: ch[u] ? u : "point"
    };
  }
  return Z(i) ? {
    scale: i
  } : {
    scale: Nn(),
    realScaleType: "point"
  };
}, mh = 1e-4, qN = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - mh, o = Math.max(i[0], i[1]) + mh, s = t(r[0]), u = t(r[n - 1]);
    (s < a || s > o || u < a || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, HN = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, GN = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, VN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var u = Oi(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + u, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, XN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = Oi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, YN = {
  sign: VN,
  // @ts-expect-error definitelytyped types are incorrect
  expand: f_,
  // @ts-expect-error definitelytyped types are incorrect
  none: Ir,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: h_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: p_,
  positive: XN
}, ZN = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = YN[n], o = l_().keys(i).value(function(s, u) {
    return +ke(s, u, 0);
  }).order(js).offset(a);
  return o(t);
}, JN = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = {}, c = s.reduce(function(l, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? ve(ve({}, h.type.defaultProps), h.props) : h.props, p = y.stackId, v = y.hide;
    if (v)
      return l;
    var g = y[n], _ = l[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ae(p)) {
      var x = _.stackGroups[p] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      x.items.push(h), _.hasStack = !0, _.stackGroups[p] = x;
    } else
      _.stackGroups[hn("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [h]
      };
    return ve(ve({}, l), {}, Dr({}, g, _));
  }, u), f = {};
  return Object.keys(c).reduce(function(l, h) {
    var d = c[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(p, v) {
        var g = d.stackGroups[v];
        return ve(ve({}, p), {}, Dr({}, v, {
          numericAxisId: n,
          cateAxisId: i,
          items: g.items,
          stackedData: ZN(t, g.items, a)
        }));
      }, y);
    }
    return ve(ve({}, l), {}, Dr({}, h, d));
  }, f);
}, QN = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = lN(c, a, s);
    return t.domain([Eo(f), To(f)]), {
      niceTicks: f
    };
  }
  if (a && i === "number") {
    var l = t.domain(), h = fN(l, a, s);
    return {
      niceTicks: h
    };
  }
  return null;
};
function Sa(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !X(i[t.dataKey])) {
      var s = Xi(r, "value", i[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var u = ke(i, X(o) ? t.dataKey : o);
  return X(u) ? null : t.scale(u);
}
var gh = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var u = ke(o, r.dataKey, r.domain[s]);
  return X(u) ? null : r.scale(u) - a / 2 + i;
}, eD = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, tD = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Ae(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, rD = function(t) {
  return t.reduce(function(r, n) {
    return [Eo(n.concat([r[0]]).filter(L)), To(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, wy = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, u = s.reduce(function(c, f) {
      var l = rD(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, bh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, xh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, iu = function(t, r, n) {
  if (Z(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (L(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (bh.test(t[0])) {
    var a = +bh.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Z(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (xh.test(t[1])) {
    var o = +xh.exec(t[1])[1];
    i[1] = r[1] + o;
  } else Z(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Aa = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = hc(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, s = 1, u = a.length; s < u; s++) {
      var c = a[s], f = a[s - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, wh = function(t, r, n) {
  return !t || !t.length || Ei(t, at(n, "type.defaultProps.domain")) ? r : t;
}, _y = function(t, r) {
  var n = t.type.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType, f = n.hide;
  return ve(ve({}, Q(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: Lc(t),
    value: ke(r, i),
    type: u,
    payload: r,
    chartType: c,
    hide: f
  });
};
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function _h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _h(Object(r), !0).forEach(function(n) {
      nD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nD(e, t, r) {
  return t = iD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iD(e) {
  var t = aD(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function aD(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pa = Math.PI / 180, oD = function(t) {
  return t * 180 / Math.PI;
}, Ce = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Pa * i) * n,
    y: r + Math.sin(-Pa * i) * n
  };
}, sD = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, uD = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = sD({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var u = (n - a) / s, c = Math.acos(u);
  return i > o && (c = 2 * Math.PI - c), {
    radius: s,
    angle: oD(c),
    angleInRadian: c
  };
}, cD = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, lD = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Sh = function(t, r) {
  var n = t.x, i = t.y, a = uD({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = cD(r), l = f.startAngle, h = f.endAngle, d = s, y;
  if (l <= h) {
    for (; d > h; )
      d -= 360;
    for (; d < l; )
      d += 360;
    y = d >= l && d <= h;
  } else {
    for (; d > l; )
      d -= 360;
    for (; d < h; )
      d += 360;
    y = d >= h && d <= l;
  }
  return y ? Oh(Oh({}, r), {}, {
    radius: o,
    angle: lD(d, r)
  }) : null;
};
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
var fD = ["offset"];
function hD(e) {
  return yD(e) || vD(e) || dD(e) || pD();
}
function pD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dD(e, t) {
  if (e) {
    if (typeof e == "string") return au(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return au(e, t);
  }
}
function vD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yD(e) {
  if (Array.isArray(e)) return au(e);
}
function au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mD(e, t) {
  if (e == null) return {};
  var r = gD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      bD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bD(e, t, r) {
  return t = xD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xD(e) {
  var t = wD(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function wD(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var _D = function(t) {
  var r = t.value, n = t.formatter, i = X(t.children) ? r : t.children;
  return Z(n) ? n(i) : i;
}, OD = function(t, r) {
  var n = pt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, SD = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, u = a, c = u.cx, f = u.cy, l = u.innerRadius, h = u.outerRadius, d = u.startAngle, y = u.endAngle, p = u.clockWise, v = (l + h) / 2, g = OD(d, y), _ = g >= 0 ? 1 : -1, x, w;
  i === "insideStart" ? (x = d + _ * o, w = p) : i === "insideEnd" ? (x = y - _ * o, w = !p) : i === "end" && (x = y + _ * o, w = p), w = g <= 0 ? w : !w;
  var m = Ce(c, f, v, x), b = Ce(c, f, v, x + (w ? 1 : -1) * 359), O = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), A = X(t.id) ? hn("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ P.createElement("text", ai({}, n, {
    dominantBaseline: "central",
    className: ee("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: A,
    d: O
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(A)
  }, r));
}, AD = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, u = a.innerRadius, c = a.outerRadius, f = a.startAngle, l = a.endAngle, h = (f + l) / 2;
  if (i === "outside") {
    var d = Ce(o, s, c + n, h), y = d.x, p = d.y;
    return {
      x: y,
      y: p,
      textAnchor: y >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var v = (u + c) / 2, g = Ce(o, s, v, h), _ = g.x, x = g.y;
  return {
    x: _,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, PD = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, u = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, h = l * i, d = l > 0 ? "end" : "start", y = l > 0 ? "start" : "end", p = c >= 0 ? 1 : -1, v = p * i, g = p > 0 ? "end" : "start", _ = p > 0 ? "start" : "end";
  if (a === "top") {
    var x = {
      x: s + c / 2,
      y: u - l * i,
      textAnchor: "middle",
      verticalAnchor: d
    };
    return Oe(Oe({}, x), n ? {
      height: Math.max(u - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var w = {
      x: s + c / 2,
      y: u + f + h,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Oe(Oe({}, w), n ? {
      height: Math.max(n.y + n.height - (u + f), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var m = {
      x: s - v,
      y: u + f / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Oe(Oe({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: f
    } : {});
  }
  if (a === "right") {
    var b = {
      x: s + c + v,
      y: u + f / 2,
      textAnchor: _,
      verticalAnchor: "middle"
    };
    return Oe(Oe({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: f
    } : {});
  }
  var O = n ? {
    width: c,
    height: f
  } : {};
  return a === "insideLeft" ? Oe({
    x: s + v,
    y: u + f / 2,
    textAnchor: _,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? Oe({
    x: s + c - v,
    y: u + f / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? Oe({
    x: s + c / 2,
    y: u + h,
    textAnchor: "middle",
    verticalAnchor: y
  }, O) : a === "insideBottom" ? Oe({
    x: s + c / 2,
    y: u + f - h,
    textAnchor: "middle",
    verticalAnchor: d
  }, O) : a === "insideTopLeft" ? Oe({
    x: s + v,
    y: u + h,
    textAnchor: _,
    verticalAnchor: y
  }, O) : a === "insideTopRight" ? Oe({
    x: s + c - v,
    y: u + h,
    textAnchor: g,
    verticalAnchor: y
  }, O) : a === "insideBottomLeft" ? Oe({
    x: s + v,
    y: u + f - h,
    textAnchor: _,
    verticalAnchor: d
  }, O) : a === "insideBottomRight" ? Oe({
    x: s + c - v,
    y: u + f - h,
    textAnchor: g,
    verticalAnchor: d
  }, O) : un(a) && (L(a.x) || or(a.x)) && (L(a.y) || or(a.y)) ? Oe({
    x: s + vr(a.x, c),
    y: u + vr(a.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : Oe({
    x: s + c / 2,
    y: u + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, $D = function(t) {
  return "cx" in t && L(t.cx);
};
function De(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = mD(e, fD), i = Oe({
    offset: r
  }, n), a = i.viewBox, o = i.position, s = i.value, u = i.children, c = i.content, f = i.className, l = f === void 0 ? "" : f, h = i.textBreakAll;
  if (!a || X(s) && X(u) && !/* @__PURE__ */ gt(c) && !Z(c))
    return null;
  if (/* @__PURE__ */ gt(c))
    return /* @__PURE__ */ Se(c, i);
  var d;
  if (Z(c)) {
    if (d = /* @__PURE__ */ Zp(c, i), /* @__PURE__ */ gt(d))
      return d;
  } else
    d = _D(i);
  var y = $D(a), p = Q(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return SD(i, d, p);
  var v = y ? AD(i) : PD(i);
  return /* @__PURE__ */ P.createElement(la, ai({
    className: ee("recharts-label", l)
  }, p, v, {
    breakAll: h
  }), d);
}
De.displayName = "Label";
var Oy = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, u = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, h = t.y, d = t.top, y = t.left, p = t.width, v = t.height, g = t.clockWise, _ = t.labelViewBox;
  if (_)
    return _;
  if (L(p) && L(v)) {
    if (L(l) && L(h))
      return {
        x: l,
        y: h,
        width: p,
        height: v
      };
    if (L(d) && L(y))
      return {
        x: d,
        y,
        width: p,
        height: v
      };
  }
  return L(l) && L(h) ? {
    x: l,
    y: h,
    width: 0,
    height: 0
  } : L(r) && L(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: c || 0,
    outerRadius: f || u || s || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, jD = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(De, {
    key: "label-implicit",
    viewBox: r
  }) : Ae(t) ? /* @__PURE__ */ P.createElement(De, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ gt(t) ? t.type === De ? /* @__PURE__ */ Se(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ P.createElement(De, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Z(t) ? /* @__PURE__ */ P.createElement(De, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : un(t) ? /* @__PURE__ */ P.createElement(De, ai({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, TD = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = Oy(t), o = Ke(i, De).map(function(u, c) {
    return /* @__PURE__ */ Se(u, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = jD(t.label, r || a);
  return [s].concat(hD(o));
};
De.parseViewBox = Oy;
De.renderCallByParent = TD;
function ED(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var MD = ED;
const CD = /* @__PURE__ */ ce(MD);
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
var kD = ["valueAccessor"], ND = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function DD(e) {
  return RD(e) || LD(e) || BD(e) || ID();
}
function ID() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BD(e, t) {
  if (e) {
    if (typeof e == "string") return ou(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ou(e, t);
  }
}
function LD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RD(e) {
  if (Array.isArray(e)) return ou(e);
}
function ou(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function Ph(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ph(Object(r), !0).forEach(function(n) {
      FD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FD(e, t, r) {
  return t = zD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zD(e) {
  var t = WD(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function WD(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jh(e, t) {
  if (e == null) return {};
  var r = UD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function UD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var KD = function(t) {
  return Array.isArray(t.value) ? CD(t.value) : t.value;
};
function kt(e) {
  var t = e.valueAccessor, r = t === void 0 ? KD : t, n = jh(e, kD), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = jh(n, ND);
  return !i || !i.length ? null : /* @__PURE__ */ P.createElement(ue, {
    className: "recharts-label-list"
  }, i.map(function(f, l) {
    var h = X(a) ? r(f, l) : ke(f && f.payload, a), d = X(s) ? {} : {
      id: "".concat(s, "-").concat(l)
    };
    return /* @__PURE__ */ P.createElement(De, $a({}, Q(f, !0), c, d, {
      parentViewBox: f.parentViewBox,
      value: h,
      textBreakAll: u,
      viewBox: De.parseViewBox(X(o) ? f : $h($h({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
kt.displayName = "LabelList";
function qD(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ P.createElement(kt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ P.isValidElement(e) || Z(e) ? /* @__PURE__ */ P.createElement(kt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : un(e) ? /* @__PURE__ */ P.createElement(kt, $a({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function HD(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Ke(n, kt).map(function(o, s) {
    return /* @__PURE__ */ Se(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = qD(e.label, t);
  return [a].concat(DD(i));
}
kt.renderCallByParent = HD;
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, su.apply(this, arguments);
}
function Th(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(r), !0).forEach(function(n) {
      GD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Th(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GD(e, t, r) {
  return t = VD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VD(e) {
  var t = XD(e, "string");
  return si(t) == "symbol" ? t : t + "";
}
function XD(e, t) {
  if (si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var YD = function(t, r) {
  var n = pt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Ui = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, f = u * (s ? 1 : -1) + i, l = Math.asin(u / f) / Pa, h = c ? a : a + o * l, d = Ce(r, n, f, h), y = Ce(r, n, i, h), p = c ? a - o * l : a, v = Ce(r, n, f * Math.cos(l * Pa), p);
  return {
    center: d,
    circleTangency: y,
    lineTangency: v,
    theta: l
  };
}, Sy = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, u = YD(o, s), c = o + u, f = Ce(r, n, a, o), l = Ce(r, n, a, c), h = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var d = Ce(r, n, i, o), y = Ce(r, n, i, c);
    h += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= c), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else
    h += "L ".concat(r, ",").concat(n, " Z");
  return h;
}, ZD = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = pt(f - c), h = Ui({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: u
  }), d = h.circleTangency, y = h.lineTangency, p = h.theta, v = Ui({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: u
  }), g = v.circleTangency, _ = v.lineTangency, x = v.theta, w = u ? Math.abs(c - f) : Math.abs(c - f) - p - x;
  if (w < 0)
    return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Sy({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: f
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(w > 180), ",").concat(+(l < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(_.x, ",").concat(_.y, `
  `);
  if (i > 0) {
    var b = Ui({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), O = b.circleTangency, A = b.lineTangency, $ = b.theta, M = Ui({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), j = M.circleTangency, T = M.lineTangency, N = M.theta, k = u ? Math.abs(c - f) : Math.abs(c - f) - $ - N;
    if (k < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(j.x, ",").concat(j.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(k > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, JD = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Ay = function(t) {
  var r = Eh(Eh({}, JD), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, h = r.className;
  if (o < a || f === l)
    return null;
  var d = ee("recharts-sector", h), y = o - a, p = vr(s, y, 0, !0), v;
  return p > 0 && Math.abs(f - l) < 360 ? v = ZD({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(p, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : v = Sy({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ P.createElement("path", su({}, Q(r, !0), {
    className: d,
    d: v,
    role: "img"
  }));
};
function ui(e) {
  "@babel/helpers - typeof";
  return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ui(e);
}
function uu() {
  return uu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uu.apply(this, arguments);
}
function Mh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ch(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mh(Object(r), !0).forEach(function(n) {
      QD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QD(e, t, r) {
  return t = eI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eI(e) {
  var t = tI(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function tI(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kh = {
  curveBasisClosed: Qw,
  curveBasisOpen: e_,
  curveBasis: Jw,
  curveBumpX: Lw,
  curveBumpY: Rw,
  curveLinearClosed: t_,
  curveLinear: mo,
  curveMonotoneX: r_,
  curveMonotoneY: n_,
  curveNatural: i_,
  curveStep: a_,
  curveStepAfter: s_,
  curveStepBefore: o_
}, Ki = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, jn = function(t) {
  return t.x;
}, Tn = function(t) {
  return t.y;
}, rI = function(t, r) {
  if (Z(t))
    return t;
  var n = "curve".concat(vo(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? kh["".concat(n).concat(r === "vertical" ? "Y" : "X")] : kh[n] || mo;
}, nI = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, f = rI(n, s), l = c ? a.filter(function(p) {
    return Ki(p);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = c ? o.filter(function(p) {
      return Ki(p);
    }) : o, y = l.map(function(p, v) {
      return Ch(Ch({}, p), {}, {
        base: d[v]
      });
    });
    return s === "vertical" ? h = Ni().y(Tn).x1(jn).x0(function(p) {
      return p.base.x;
    }) : h = Ni().x(jn).y1(Tn).y0(function(p) {
      return p.base.y;
    }), h.defined(Ki).curve(f), h(y);
  }
  return s === "vertical" && L(o) ? h = Ni().y(Tn).x1(jn).x0(o) : L(o) ? h = Ni().x(jn).y1(Tn).y0(o) : h = Pd().x(jn).y(Tn), h.defined(Ki).curve(f), h(l);
}, ja = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? nI(t) : i;
  return /* @__PURE__ */ it.createElement("path", uu({}, Q(t, !1), Yi(t), {
    className: ee("recharts-curve", r),
    d: o,
    ref: a
  }));
}, Py = { exports: {} }, iI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", aI = iI, oI = aI;
function $y() {
}
function jy() {
}
jy.resetWarningCache = $y;
var sI = function() {
  function e(n, i, a, o, s, u) {
    if (u !== oI) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: jy,
    resetWarningCache: $y
  };
  return r.PropTypes = r, r;
};
Py.exports = sI();
var uI = Py.exports;
const ne = /* @__PURE__ */ ce(uI);
var cI = Object.getOwnPropertyNames, lI = Object.getOwnPropertySymbols, fI = Object.prototype.hasOwnProperty;
function Nh(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function qi(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), s = a.get(n);
    if (o && s)
      return o === n && s === r;
    a.set(r, n), a.set(n, r);
    var u = e(r, n, i);
    return a.delete(r), a.delete(n), u;
  };
}
function hI(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function Dh(e) {
  return cI(e).concat(lI(e));
}
var pI = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || function(e, t) {
    return fI.call(e, t);
  }
);
function Sr(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var dI = "__v", vI = "__o", yI = "_owner", Ih = Object.getOwnPropertyDescriptor, Bh = Object.keys;
function mI(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function gI(e, t) {
  return Sr(e.getTime(), t.getTime());
}
function bI(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function xI(e, t) {
  return e === t;
}
function Lh(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, s, u = 0; (o = a.next()) && !o.done; ) {
    for (var c = t.entries(), f = !1, l = 0; (s = c.next()) && !s.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      var h = o.value, d = s.value;
      if (r.equals(h[0], d[0], u, l, e, t, r) && r.equals(h[1], d[1], h[0], d[0], e, t, r)) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    u++;
  }
  return !0;
}
var wI = Sr;
function _I(e, t, r) {
  var n = Bh(e), i = n.length;
  if (Bh(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!Ty(e, t, r, n[i]))
      return !1;
  return !0;
}
function En(e, t, r) {
  var n = Dh(e), i = n.length;
  if (Dh(t).length !== i)
    return !1;
  for (var a, o, s; i-- > 0; )
    if (a = n[i], !Ty(e, t, r, a) || (o = Ih(e, a), s = Ih(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function OI(e, t) {
  return Sr(e.valueOf(), t.valueOf());
}
function SI(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Rh(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, s; (o = a.next()) && !o.done; ) {
    for (var u = t.values(), c = !1, f = 0; (s = u.next()) && !s.done; ) {
      if (!i[f] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        c = i[f] = !0;
        break;
      }
      f++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function AI(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function PI(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function Ty(e, t, r, n) {
  return (n === yI || n === vI || n === dI) && (e.$$typeof || t.$$typeof) ? !0 : pI(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var $I = "[object Arguments]", jI = "[object Boolean]", TI = "[object Date]", EI = "[object Error]", MI = "[object Map]", CI = "[object Number]", kI = "[object Object]", NI = "[object RegExp]", DI = "[object Set]", II = "[object String]", BI = "[object URL]", LI = Array.isArray, Fh = typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView : null, zh = Object.assign, RI = Object.prototype.toString.call.bind(Object.prototype.toString);
function FI(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, u = e.arePrimitiveWrappersEqual, c = e.areRegExpsEqual, f = e.areSetsEqual, l = e.areTypedArraysEqual, h = e.areUrlsEqual, d = e.unknownTagComparators;
  return function(p, v, g) {
    if (p === v)
      return !0;
    if (p == null || v == null)
      return !1;
    var _ = typeof p;
    if (_ !== typeof v)
      return !1;
    if (_ !== "object")
      return _ === "number" ? o(p, v, g) : _ === "function" ? i(p, v, g) : !1;
    var x = p.constructor;
    if (x !== v.constructor)
      return !1;
    if (x === Object)
      return s(p, v, g);
    if (LI(p))
      return t(p, v, g);
    if (Fh != null && Fh(p))
      return l(p, v, g);
    if (x === Date)
      return r(p, v, g);
    if (x === RegExp)
      return c(p, v, g);
    if (x === Map)
      return a(p, v, g);
    if (x === Set)
      return f(p, v, g);
    var w = RI(p);
    if (w === TI)
      return r(p, v, g);
    if (w === NI)
      return c(p, v, g);
    if (w === MI)
      return a(p, v, g);
    if (w === DI)
      return f(p, v, g);
    if (w === kI)
      return typeof p.then != "function" && typeof v.then != "function" && s(p, v, g);
    if (w === BI)
      return h(p, v, g);
    if (w === EI)
      return n(p, v, g);
    if (w === $I)
      return s(p, v, g);
    if (w === jI || w === CI || w === II)
      return u(p, v, g);
    if (d) {
      var m = d[w];
      if (!m) {
        var b = hI(p);
        b && (m = d[b]);
      }
      if (m)
        return m(p, v, g);
    }
    return !1;
  };
}
function zI(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? En : mI,
    areDatesEqual: gI,
    areErrorsEqual: bI,
    areFunctionsEqual: xI,
    areMapsEqual: n ? Nh(Lh, En) : Lh,
    areNumbersEqual: wI,
    areObjectsEqual: n ? En : _I,
    arePrimitiveWrappersEqual: OI,
    areRegExpsEqual: SI,
    areSetsEqual: n ? Nh(Rh, En) : Rh,
    areTypedArraysEqual: n ? En : AI,
    areUrlsEqual: PI,
    unknownTagComparators: void 0
  };
  if (r && (i = zh({}, i, r(i))), t) {
    var a = qi(i.areArraysEqual), o = qi(i.areMapsEqual), s = qi(i.areObjectsEqual), u = qi(i.areSetsEqual);
    i = zh({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return i;
}
function WI(e) {
  return function(t, r, n, i, a, o, s) {
    return e(t, r, s);
  };
}
function UI(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(u, c) {
      var f = n(), l = f.cache, h = l === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : l, d = f.meta;
      return r(u, c, {
        cache: h,
        equals: i,
        meta: d,
        strict: a
      });
    };
  if (t)
    return function(u, c) {
      return r(u, c, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(u, c) {
    return r(u, c, o);
  };
}
var KI = Jt();
Jt({ strict: !0 });
Jt({ circular: !0 });
Jt({
  circular: !0,
  strict: !0
});
Jt({
  createInternalComparator: function() {
    return Sr;
  }
});
Jt({
  strict: !0,
  createInternalComparator: function() {
    return Sr;
  }
});
Jt({
  circular: !0,
  createInternalComparator: function() {
    return Sr;
  }
});
Jt({
  circular: !0,
  createInternalComparator: function() {
    return Sr;
  },
  strict: !0
});
function Jt(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, s = zI(e), u = FI(s), c = n ? n(u) : WI(u);
  return UI({ circular: r, comparator: u, createState: i, equals: c, strict: o });
}
function qI(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Wh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : qI(i);
  };
  requestAnimationFrame(n);
}
function cu(e) {
  "@babel/helpers - typeof";
  return cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cu(e);
}
function HI(e) {
  return YI(e) || XI(e) || VI(e) || GI();
}
function GI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VI(e, t) {
  if (e) {
    if (typeof e == "string") return Uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uh(e, t);
  }
}
function Uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function XI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function YI(e) {
  if (Array.isArray(e)) return e;
}
function ZI() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = HI(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          Wh(i.bind(null, c), u);
          return;
        }
        i(u), Wh(i.bind(null, c));
        return;
      }
      cu(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function ci(e) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ci(e);
}
function Kh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kh(Object(r), !0).forEach(function(n) {
      Ey(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ey(e, t, r) {
  return t = JI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JI(e) {
  var t = QI(e, "string");
  return ci(t) === "symbol" ? t : String(t);
}
function QI(e, t) {
  if (ci(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var e2 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, t2 = function(t) {
  return t;
}, r2 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, In = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return qh(qh({}, n), {}, Ey({}, i, t(i, r[i])));
  }, {});
}, Hh = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(r2(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function n2(e, t) {
  return o2(e) || a2(e, t) || My(e, t) || i2();
}
function i2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function o2(e) {
  if (Array.isArray(e)) return e;
}
function s2(e) {
  return l2(e) || c2(e) || My(e) || u2();
}
function u2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function My(e, t) {
  if (e) {
    if (typeof e == "string") return lu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lu(e, t);
  }
}
function c2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function l2(e) {
  if (Array.isArray(e)) return lu(e);
}
function lu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ta = 1e-4, Cy = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, ky = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Gh = function(t, r) {
  return function(n) {
    var i = Cy(t, r);
    return ky(i, n);
  };
}, f2 = function(t, r) {
  return function(n) {
    var i = Cy(t, r), a = [].concat(s2(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return ky(a, n);
  };
}, Vh = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, s = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, s = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, s = 1;
        break;
      default: {
        var u = r[0].split("(");
        if (u[0] === "cubic-bezier" && u[1].split(")")[0].split(",").length === 4) {
          var c = u[1].split(")")[0].split(",").map(function(v) {
            return parseFloat(v);
          }), f = n2(c, 4);
          i = f[0], a = f[1], o = f[2], s = f[3];
        }
      }
    }
  var l = Gh(i, o), h = Gh(a, s), d = f2(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, p = function(g) {
    for (var _ = g > 1 ? 1 : g, x = _, w = 0; w < 8; ++w) {
      var m = l(x) - _, b = d(x);
      if (Math.abs(m - _) < Ta || b < Ta)
        return h(x);
      x = y(x - m / b);
    }
    return h(x);
  };
  return p.isStepper = !1, p;
}, h2 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, u = function(f, l, h) {
    var d = -(f - l) * n, y = h * a, p = h + (d - y) * s / 1e3, v = h * s / 1e3 + f;
    return Math.abs(v - l) < Ta && Math.abs(p) < Ta ? [l, 0] : [v, p];
  };
  return u.isStepper = !0, u.dt = s, u;
}, p2 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Vh(i);
      case "spring":
        return h2();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Vh(i);
    }
  return typeof i == "function" ? i : null;
};
function li(e) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, li(e);
}
function Xh(e) {
  return y2(e) || v2(e) || Ny(e) || d2();
}
function d2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function y2(e) {
  if (Array.isArray(e)) return hu(e);
}
function Yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yh(Object(r), !0).forEach(function(n) {
      fu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fu(e, t, r) {
  return t = m2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m2(e) {
  var t = g2(e, "string");
  return li(t) === "symbol" ? t : String(t);
}
function g2(e, t) {
  if (li(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b2(e, t) {
  return _2(e) || w2(e, t) || Ny(e, t) || x2();
}
function x2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ny(e, t) {
  if (e) {
    if (typeof e == "string") return hu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hu(e, t);
  }
}
function hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function w2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function _2(e) {
  if (Array.isArray(e)) return e;
}
var Ea = function(t, r, n) {
  return t + (r - t) * n;
}, pu = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, O2 = function e(t, r, n) {
  var i = In(function(a, o) {
    if (pu(o)) {
      var s = t(o.from, o.to, o.velocity), u = b2(s, 2), c = u[0], f = u[1];
      return Me(Me({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? In(function(a, o) {
    return pu(o) ? Me(Me({}, o), {}, {
      velocity: Ea(o.velocity, i[a].velocity, n),
      from: Ea(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const S2 = function(e, t, r, n, i) {
  var a = e2(e, t), o = a.reduce(function(v, g) {
    return Me(Me({}, v), {}, fu({}, g, [e[g], t[g]]));
  }, {}), s = a.reduce(function(v, g) {
    return Me(Me({}, v), {}, fu({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), u = -1, c, f, l = function() {
    return null;
  }, h = function() {
    return In(function(g, _) {
      return _.from;
    }, s);
  }, d = function() {
    return !Object.values(s).filter(pu).length;
  }, y = function(g) {
    c || (c = g);
    var _ = g - c, x = _ / r.dt;
    s = O2(r, s, x), i(Me(Me(Me({}, e), t), h())), c = g, d() || (u = requestAnimationFrame(l));
  }, p = function(g) {
    f || (f = g);
    var _ = (g - f) / n, x = In(function(m, b) {
      return Ea.apply(void 0, Xh(b).concat([r(_)]));
    }, o);
    if (i(Me(Me(Me({}, e), t), x)), _ < 1)
      u = requestAnimationFrame(l);
    else {
      var w = In(function(m, b) {
        return Ea.apply(void 0, Xh(b).concat([r(1)]));
      }, o);
      i(Me(Me(Me({}, e), t), w));
    }
  };
  return l = r.isStepper ? y : p, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(u);
    };
  };
};
function qr(e) {
  "@babel/helpers - typeof";
  return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qr(e);
}
var A2 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function P2(e, t) {
  if (e == null) return {};
  var r = $2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $2(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ls(e) {
  return M2(e) || E2(e) || T2(e) || j2();
}
function j2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function T2(e, t) {
  if (e) {
    if (typeof e == "string") return du(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return du(e, t);
  }
}
function E2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function M2(e) {
  if (Array.isArray(e)) return du(e);
}
function du(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zh(Object(r), !0).forEach(function(n) {
      Cn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cn(e, t, r) {
  return t = Dy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Dy(n.key), n);
  }
}
function N2(e, t, r) {
  return t && k2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Dy(e) {
  var t = D2(e, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function D2(e, t) {
  if (qr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vu(e, t);
}
function vu(e, t) {
  return vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, vu(e, t);
}
function B2(e) {
  var t = L2();
  return function() {
    var n = Ma(e), i;
    if (t) {
      var a = Ma(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return yu(this, i);
  };
}
function yu(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mu(e);
}
function mu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ma(e) {
  return Ma = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ma(e);
}
var _t = /* @__PURE__ */ function(e) {
  I2(r, e);
  var t = B2(r);
  function r(n, i) {
    var a;
    C2(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, u = o.attributeName, c = o.from, f = o.to, l = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(mu(a)), a.changeStyle = a.changeStyle.bind(mu(a)), !s || d <= 0)
      return a.state = {
        style: {}
      }, typeof h == "function" && (a.state = {
        style: f
      }), yu(a);
    if (l && l.length)
      a.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof h == "function")
        return a.state = {
          style: c
        }, yu(a);
      a.state = {
        style: u ? Cn({}, u, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return N2(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, s = a.canBegin, u = a.attributeName, c = a.shouldReAnimate, f = a.to, l = a.from, h = this.state.style;
      if (s) {
        if (!o) {
          var d = {
            style: u ? Cn({}, u, f) : f
          };
          this.state && h && (u && h[u] !== f || !u && h !== f) && this.setState(d);
          return;
        }
        if (!(KI(i.to, f) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var p = y || c ? l : i.to;
          if (this.state && h) {
            var v = {
              style: u ? Cn({}, u, p) : p
            };
            (u && h[u] !== p || !u && h !== p) && this.setState(v);
          }
          this.runAnimation(ct(ct({}, this.props), {}, {
            from: p,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, s = i.to, u = i.duration, c = i.easing, f = i.begin, l = i.onAnimationEnd, h = i.onAnimationStart, d = S2(o, s, p2(c), u, this.changeStyle), y = function() {
        a.stopJSAnimation = d();
      };
      this.manager.start([h, f, y, u, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, u = i.onAnimationStart, c = o[0], f = c.style, l = c.duration, h = l === void 0 ? 0 : l, d = function(p, v, g) {
        if (g === 0)
          return p;
        var _ = v.duration, x = v.easing, w = x === void 0 ? "ease" : x, m = v.style, b = v.properties, O = v.onAnimationEnd, A = g > 0 ? o[g - 1] : v, $ = b || Object.keys(m);
        if (typeof w == "function" || w === "spring")
          return [].concat(ls(p), [a.runJSAnimation.bind(a, {
            from: A.style,
            to: m,
            duration: _,
            easing: w
          }), _]);
        var M = Hh($, _, w), j = ct(ct(ct({}, A.style), m), {}, {
          transition: M
        });
        return [].concat(ls(p), [j, _, O]).filter(t2);
      };
      return this.manager.start([u].concat(ls(o.reduce(d, [f, Math.max(h, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = ZI());
      var a = i.begin, o = i.duration, s = i.attributeName, u = i.to, c = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof d == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (h.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var p = s ? Cn({}, s, u) : u, v = Hh(Object.keys(p), o, c);
      y.start([f, a, ct(ct({}, p), {}, {
        transition: v
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var s = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var u = P2(i, A2), c = lr.count(a), f = this.state.style;
      if (typeof a == "function")
        return a(f);
      if (!s || c === 0 || o <= 0)
        return a;
      var l = function(d) {
        var y = d.props, p = y.style, v = p === void 0 ? {} : p, g = y.className, _ = /* @__PURE__ */ Se(d, ct(ct({}, u), {}, {
          style: ct(ct({}, v), f),
          className: g
        }));
        return _;
      };
      return c === 1 ? l(lr.only(a)) : /* @__PURE__ */ P.createElement("div", null, lr.map(a, function(h) {
        return l(h);
      }));
    }
  }]), r;
}(Bt);
_t.displayName = "Animate";
_t.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
_t.propTypes = {
  from: ne.oneOfType([ne.object, ne.string]),
  to: ne.oneOfType([ne.object, ne.string]),
  attributeName: ne.string,
  // animation duration
  duration: ne.number,
  begin: ne.number,
  easing: ne.oneOfType([ne.string, ne.func]),
  steps: ne.arrayOf(ne.shape({
    duration: ne.number.isRequired,
    style: ne.object.isRequired,
    easing: ne.oneOfType([ne.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ne.func]),
    // transition css properties(dash case), optional
    properties: ne.arrayOf("string"),
    onAnimationEnd: ne.func
  })),
  children: ne.oneOfType([ne.node, ne.func]),
  isActive: ne.bool,
  canBegin: ne.bool,
  onAnimationEnd: ne.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: ne.bool,
  onAnimationStart: ne.func,
  onAnimationReStart: ne.func
};
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function Ca() {
  return Ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ca.apply(this, arguments);
}
function R2(e, t) {
  return U2(e) || W2(e, t) || z2(e, t) || F2();
}
function F2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z2(e, t) {
  if (e) {
    if (typeof e == "string") return Jh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jh(e, t);
  }
}
function Jh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function W2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function U2(e) {
  if (Array.isArray(e)) return e;
}
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(n) {
      K2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K2(e, t, r) {
  return t = q2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q2(e) {
  var t = H2(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function H2(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tp = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, u = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], h = 0, d = 4; h < d; h++)
      l[h] = a[h] > o ? o : a[h];
    f = "M".concat(t, ",").concat(r + s * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + u * l[0], ",").concat(r)), f += "L ".concat(t + n - u * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + s * l[1])), f += "L ".concat(t + n, ",").concat(r + i - s * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - u * l[2], ",").concat(r + i)), f += "L ".concat(t + u * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - s * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + u * y, ",").concat(r, `
            L `).concat(t + n - u * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + i - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n - u * y, ",").concat(r + i, `
            L `).concat(t + u * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - s * y, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, G2 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(a, a + s), f = Math.max(a, a + s), l = Math.min(o, o + u), h = Math.max(o, o + u);
    return n >= c && n <= f && i >= l && i <= h;
  }
  return !1;
}, V2 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Rc = function(t) {
  var r = ep(ep({}, V2), t), n = Vi(), i = At(-1), a = R2(i, 2), o = a[0], s = a[1];
  Za(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && s(w);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, f = r.width, l = r.height, h = r.radius, d = r.className, y = r.animationEasing, p = r.animationDuration, v = r.animationBegin, g = r.isAnimationActive, _ = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var x = ee("recharts-rectangle", d);
  return _ ? /* @__PURE__ */ P.createElement(_t, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: u,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: u,
      y: c
    },
    duration: p,
    animationEasing: y,
    isActive: _
  }, function(w) {
    var m = w.width, b = w.height, O = w.x, A = w.y;
    return /* @__PURE__ */ P.createElement(_t, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: p,
      isActive: g,
      easing: y
    }, /* @__PURE__ */ P.createElement("path", Ca({}, Q(r, !0), {
      className: x,
      d: tp(O, A, m, b, h),
      ref: n
    })));
  }) : /* @__PURE__ */ P.createElement("path", Ca({}, Q(r, !0), {
    className: x,
    d: tp(u, c, f, l, h)
  }));
};
function gu() {
  return gu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gu.apply(this, arguments);
}
var Fc = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = ee("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ it.createElement("circle", gu({}, Q(t, !1), Yi(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
var X2 = ["x", "y", "top", "left", "width", "height", "className"];
function bu() {
  return bu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bu.apply(this, arguments);
}
function rp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Y2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rp(Object(r), !0).forEach(function(n) {
      Z2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z2(e, t, r) {
  return t = J2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J2(e) {
  var t = Q2(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function Q2(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eB(e, t) {
  if (e == null) return {};
  var r = tB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var rB = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, nB = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, f = t.width, l = f === void 0 ? 0 : f, h = t.height, d = h === void 0 ? 0 : h, y = t.className, p = eB(t, X2), v = Y2({
    x: n,
    y: a,
    top: s,
    left: c,
    width: l,
    height: d
  }, p);
  return !L(n) || !L(a) || !L(l) || !L(d) || !L(s) || !L(c) ? null : /* @__PURE__ */ P.createElement("path", bu({}, Q(v, !0), {
    className: ee("recharts-cross", y),
    d: rB(n, a, l, d, s, c)
  }));
}, iB = Yd, aB = iB(Object.getPrototypeOf, Object), oB = aB, sB = Rt, uB = oB, cB = Ft, lB = "[object Object]", fB = Function.prototype, hB = Object.prototype, Iy = fB.toString, pB = hB.hasOwnProperty, dB = Iy.call(Object);
function vB(e) {
  if (!cB(e) || sB(e) != lB)
    return !1;
  var t = uB(e);
  if (t === null)
    return !0;
  var r = pB.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Iy.call(r) == dB;
}
var yB = vB;
const mB = /* @__PURE__ */ ce(yB);
var gB = Rt, bB = Ft, xB = "[object Boolean]";
function wB(e) {
  return e === !0 || e === !1 || bB(e) && gB(e) == xB;
}
var _B = wB;
const OB = /* @__PURE__ */ ce(_B);
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function ka() {
  return ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ka.apply(this, arguments);
}
function SB(e, t) {
  return jB(e) || $B(e, t) || PB(e, t) || AB();
}
function AB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PB(e, t) {
  if (e) {
    if (typeof e == "string") return np(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return np(e, t);
  }
}
function np(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $B(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function jB(e) {
  if (Array.isArray(e)) return e;
}
function ip(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ap(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ip(Object(r), !0).forEach(function(n) {
      TB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ip(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TB(e, t, r) {
  return t = EB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EB(e) {
  var t = MB(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function MB(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var op = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, CB = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, kB = function(t) {
  var r = ap(ap({}, CB), t), n = Vi(), i = At(-1), a = SB(i, 2), o = a[0], s = a[1];
  Za(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var x = n.current.getTotalLength();
        x && s(x);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, h = r.height, d = r.className, y = r.animationEasing, p = r.animationDuration, v = r.animationBegin, g = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || f !== +f || l !== +l || h !== +h || f === 0 && l === 0 || h === 0)
    return null;
  var _ = ee("recharts-trapezoid", d);
  return g ? /* @__PURE__ */ P.createElement(_t, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: h,
      x: u,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: h,
      x: u,
      y: c
    },
    duration: p,
    animationEasing: y,
    isActive: g
  }, function(x) {
    var w = x.upperWidth, m = x.lowerWidth, b = x.height, O = x.x, A = x.y;
    return /* @__PURE__ */ P.createElement(_t, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: p,
      easing: y
    }, /* @__PURE__ */ P.createElement("path", ka({}, Q(r, !0), {
      className: _,
      d: op(O, A, w, m, b),
      ref: n
    })));
  }) : /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", ka({}, Q(r, !0), {
    className: _,
    d: op(u, c, f, l, h)
  })));
}, NB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function DB(e, t) {
  if (e == null) return {};
  var r = IB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sp(Object(r), !0).forEach(function(n) {
      BB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BB(e, t, r) {
  return t = LB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LB(e) {
  var t = RB(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function RB(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FB(e, t) {
  return Na(Na({}, t), e);
}
function zB(e, t) {
  return e === "symbols";
}
function up(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement(Rc, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(kB, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(Ay, r);
    case "symbols":
      if (zB(t))
        return /* @__PURE__ */ P.createElement(bo, r);
      break;
    default:
      return null;
  }
}
function WB(e) {
  return /* @__PURE__ */ gt(e) ? e.props : e;
}
function xu(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? FB : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, u = DB(e, NB), c;
  if (/* @__PURE__ */ gt(t))
    c = /* @__PURE__ */ Se(t, Na(Na({}, u), WB(t)));
  else if (Z(t))
    c = t(u);
  else if (mB(t) && !OB(t)) {
    var f = i(t, u);
    c = /* @__PURE__ */ P.createElement(up, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = u;
    c = /* @__PURE__ */ P.createElement(up, {
      shapeType: r,
      elementProps: l
    });
  }
  return s ? /* @__PURE__ */ P.createElement(ue, {
    className: o
  }, c) : c;
}
function ko(e, t) {
  return t != null && "trapezoids" in e.props;
}
function No(e, t) {
  return t != null && "sectors" in e.props;
}
function vi(e, t) {
  return t != null && "points" in e.props;
}
function UB(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function KB(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function qB(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function HB(e, t) {
  var r;
  return ko(e, t) ? r = UB : No(e, t) ? r = KB : vi(e, t) && (r = qB), r;
}
function GB(e, t) {
  var r;
  return ko(e, t) ? r = "trapezoids" : No(e, t) ? r = "sectors" : vi(e, t) && (r = "points"), r;
}
function VB(e, t) {
  if (ko(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (No(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return vi(e, t) ? t.payload : {};
}
function XB(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = GB(r, t), a = VB(r, t), o = n.filter(function(u, c) {
    var f = Ei(a, u), l = r.props[i].filter(function(y) {
      var p = HB(r, t);
      return p(y, t);
    }), h = r.props[i].indexOf(l[l.length - 1]), d = c === h;
    return f && d;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var YB = Math.ceil, ZB = Math.max;
function JB(e, t, r, n) {
  for (var i = -1, a = ZB(YB((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var QB = JB, eL = vv, cp = 1 / 0, tL = 17976931348623157e292;
function rL(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = eL(e), e === cp || e === -cp) {
    var t = e < 0 ? -1 : 1;
    return t * tL;
  }
  return e === e ? e : 0;
}
var By = rL, nL = QB, iL = _o, fs = By;
function aL(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && iL(t, r, n) && (r = n = void 0), t = fs(t), r === void 0 ? (r = t, t = 0) : r = fs(r), n = n === void 0 ? t < r ? 1 : -1 : fs(n), nL(t, r, n, e);
  };
}
var oL = aL, sL = oL, uL = sL(), cL = uL;
const Da = /* @__PURE__ */ ce(cL);
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lp(Object(r), !0).forEach(function(n) {
      Ly(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ly(e, t, r) {
  return t = lL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lL(e) {
  var t = fL(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function fL(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hL = ["Webkit", "Moz", "O", "ms"], pL = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = hL.reduce(function(a, o) {
    return fp(fp({}, a), {}, Ly({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
function Ia() {
  return Ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ia.apply(this, arguments);
}
function hp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hp(Object(r), !0).forEach(function(n) {
      Ve(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Fy(n.key), n);
  }
}
function vL(e, t, r) {
  return t && pp(e.prototype, t), r && pp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yL(e, t, r) {
  return t = Ba(t), mL(e, Ry() ? Reflect.construct(t, r || [], Ba(e).constructor) : t.apply(e, r));
}
function mL(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gL(e);
}
function gL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ry() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ry = function() {
    return !!e;
  })();
}
function Ba(e) {
  return Ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ba(e);
}
function bL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wu(e, t);
}
function wu(e, t) {
  return wu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, wu(e, t);
}
function Ve(e, t, r) {
  return t = Fy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fy(e) {
  var t = xL(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function xL(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wL = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = Nn().domain(Da(0, u)).range([a, a + o - s]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(i),
    scale: c,
    scaleValues: f
  };
}, dp = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Gr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return dL(this, t), n = yL(this, t, [r]), Ve(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Ve(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Ve(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null || o({
          endIndex: a,
          startIndex: s
        });
      }), n.detachDragEndListener();
    }), Ve(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Ve(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Ve(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Ve(n, "handleSlideDragStart", function(i) {
      var a = dp(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return bL(t, e), vL(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, u = s.gap, c = s.data, f = c.length - 1, l = Math.min(i, a), h = Math.max(i, a), d = t.getIndexInRange(o, l), y = t.getIndexInRange(o, h);
      return {
        startIndex: d - d % u,
        endIndex: y === f ? f : y - y % u
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, u = ke(a[n], s, n);
      return Z(o) ? o(u, n) : u;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, u = this.props, c = u.x, f = u.width, l = u.travellerWidth, h = u.startIndex, d = u.endIndex, y = u.onChange, p = n.pageX - a;
      p > 0 ? p = Math.min(p, c + f - l - s, c + f - l - o) : p < 0 && (p = Math.max(p, c - o, c - s));
      var v = this.getIndex({
        startX: o + p,
        endX: s + p
      });
      (v.startIndex !== h || v.endIndex !== d) && y && y(v), this.setState({
        startX: o + p,
        endX: s + p,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = dp(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, u = i.startX, c = this.state[o], f = this.props, l = f.x, h = f.width, d = f.travellerWidth, y = f.onChange, p = f.gap, v = f.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, _ = n.pageX - a;
      _ > 0 ? _ = Math.min(_, l + h - d - c) : _ < 0 && (_ = Math.max(_, l - c)), g[o] = c + _;
      var x = this.getIndex(g), w = x.startIndex, m = x.endIndex, b = function() {
        var A = v.length - 1;
        return o === "startX" && (s > u ? w % p === 0 : m % p === 0) || s < u && m === A || o === "endX" && (s > u ? m % p === 0 : w % p === 0) || s > u && m === A;
      };
      this.setState(Ve(Ve({}, o, c + _), "brushMoveStartX", n.pageX), function() {
        y && b() && y(x);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, s = o.scaleValues, u = o.startX, c = o.endX, f = this.state[i], l = s.indexOf(f);
      if (l !== -1) {
        var h = l + n;
        if (!(h === -1 || h >= s.length)) {
          var d = s[h];
          i === "startX" && d >= c || i === "endX" && d <= u || this.setState(Ve({}, i, d), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, u = n.fill, c = n.stroke;
      return /* @__PURE__ */ P.createElement("rect", {
        stroke: c,
        fill: u,
        x: i,
        y: a,
        width: o,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, u = n.data, c = n.children, f = n.padding, l = lr.only(c);
      return l ? /* @__PURE__ */ P.cloneElement(l, {
        x: i,
        y: a,
        width: o,
        height: s,
        margin: f,
        compact: !0,
        data: u
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, s = this, u = this.props, c = u.y, f = u.travellerWidth, l = u.height, h = u.traveller, d = u.ariaLabel, y = u.data, p = u.startIndex, v = u.endIndex, g = Math.max(n, this.props.x), _ = hs(hs({}, Q(this.props, !1)), {}, {
        x: g,
        y: c,
        width: f,
        height: l
      }), x = d || "Min value: ".concat((a = y[p]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[v]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ P.createElement(ue, {
        tabIndex: 0,
        role: "slider",
        "aria-label": x,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), s.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(h, _));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, s = a.height, u = a.stroke, c = a.travellerWidth, f = Math.min(n, i) + c, l = Math.max(Math.abs(i - n) - c, 0);
      return /* @__PURE__ */ P.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: u,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, u = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, h = f.endX, d = 5, y = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ P.createElement(ue, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ P.createElement(la, Ia({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, h) - d,
        y: o + s / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ P.createElement(la, Ia({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, h) + u + d,
        y: o + s / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, u = n.y, c = n.width, f = n.height, l = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, p = h.isTextActive, v = h.isSlideMoving, g = h.isTravellerMoving, _ = h.isTravellerFocused;
      if (!i || !i.length || !L(s) || !L(u) || !L(c) || !L(f) || c <= 0 || f <= 0)
        return null;
      var x = ee("recharts-brush", a), w = P.Children.count(o) === 1, m = pL("userSelect", "none");
      return /* @__PURE__ */ P.createElement(ue, {
        className: x,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), w && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (p || v || g || _ || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, s = n.height, u = n.stroke, c = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: s,
        fill: u,
        stroke: "none"
      }), /* @__PURE__ */ P.createElement("line", {
        x1: i + 1,
        y1: c,
        x2: i + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ P.createElement("line", {
        x1: i + 1,
        y1: c + 2,
        x2: i + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ P.isValidElement(n) ? a = /* @__PURE__ */ P.cloneElement(n, i) : Z(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, s = n.x, u = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (a !== i.prevData || c !== i.prevUpdateId)
        return hs({
          prevData: a,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o
        }, a && a.length ? wL({
          data: a,
          width: o,
          x: s,
          travellerWidth: u,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || s !== i.prevX || u !== i.prevTravellerWidth)) {
        i.scale.range([s, s + o - u]);
        var h = i.scale.domain().map(function(d) {
          return i.scale(d);
        });
        return {
          prevData: a,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: h
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
        var u = Math.floor((o + s) / 2);
        n[u] > i ? s = u : o = u;
      }
      return i >= n[s] ? s : o;
    }
  }]);
}(Bt);
Ve(Gr, "displayName", "Brush");
Ve(Gr, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var _L = fc;
function OL(e, t) {
  var r;
  return _L(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var SL = OL, AL = Wd, PL = Xt, $L = SL, jL = qe, TL = _o;
function EL(e, t, r) {
  var n = jL(e) ? AL : $L;
  return r && TL(e, t, r) && (t = void 0), n(e, PL(t));
}
var ML = EL;
const CL = /* @__PURE__ */ ce(ML);
var xt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, vp = lv;
function kL(e, t, r) {
  t == "__proto__" && vp ? vp(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var NL = kL, DL = NL, IL = uv, BL = Xt;
function LL(e, t) {
  var r = {};
  return t = BL(t), IL(e, function(n, i, a) {
    DL(r, i, t(n, i, a));
  }), r;
}
var RL = LL;
const FL = /* @__PURE__ */ ce(RL);
function zL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var WL = zL, UL = fc;
function KL(e, t) {
  var r = !0;
  return UL(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var qL = KL, HL = WL, GL = qL, VL = Xt, XL = qe, YL = _o;
function ZL(e, t, r) {
  var n = XL(e) ? HL : GL;
  return r && YL(e, t, r) && (t = void 0), n(e, VL(t));
}
var JL = ZL;
const zy = /* @__PURE__ */ ce(JL);
var QL = ["x", "y"];
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function _u() {
  return _u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _u.apply(this, arguments);
}
function yp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(r), !0).forEach(function(n) {
      eR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eR(e, t, r) {
  return t = tR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tR(e) {
  var t = rR(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function rR(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nR(e, t) {
  if (e == null) return {};
  var r = iR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function aR(e, t) {
  var r = e.x, n = e.y, i = nR(e, QL), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || i.height), f = parseInt(c, 10), l = "".concat(t.width || i.width), h = parseInt(l, 10);
  return Mn(Mn(Mn(Mn(Mn({}, t), i), o ? {
    x: o
  } : {}), u ? {
    y: u
  } : {}), {}, {
    height: f,
    width: h,
    name: t.name,
    radius: t.radius
  });
}
function mp(e) {
  return /* @__PURE__ */ P.createElement(xu, _u({
    shapeType: "rectangle",
    propTransformer: aR,
    activeClassName: "recharts-active-bar"
  }, e));
}
var oR = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || _x(n);
    return a ? t(n, i) : (a || mr(), r);
  };
}, sR = ["value", "background"], Wy;
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function uR(e, t) {
  if (e == null) return {};
  var r = cR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(this, arguments);
}
function gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(r), !0).forEach(function(n) {
      qt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ky(n.key), n);
  }
}
function fR(e, t, r) {
  return t && bp(e.prototype, t), r && bp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hR(e, t, r) {
  return t = Ra(t), pR(e, Uy() ? Reflect.construct(t, r || [], Ra(e).constructor) : t.apply(e, r));
}
function pR(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dR(e);
}
function dR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Uy = function() {
    return !!e;
  })();
}
function Ra(e) {
  return Ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ra(e);
}
function vR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ou(e, t);
}
function Ou(e, t) {
  return Ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ou(e, t);
}
function qt(e, t, r) {
  return t = Ky(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ky(e) {
  var t = yR(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function yR(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Te = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    lR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = hR(this, t, [].concat(i)), qt(r, "state", {
      isAnimationFinished: !1
    }), qt(r, "id", hn("recharts-bar-")), qt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), qt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return vR(t, e), fR(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.dataKey, u = a.activeIndex, c = a.activeBar, f = Q(this.props, !1);
      return n && n.map(function(l, h) {
        var d = h === u, y = d ? c : o, p = me(me(me({}, f), l), {}, {
          isActive: d,
          option: y,
          index: h,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ P.createElement(ue, La({
          className: "recharts-bar-rectangle"
        }, Fn(i.props, l, h), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l == null ? void 0 : l.x, "-").concat(l == null ? void 0 : l.y, "-").concat(l == null ? void 0 : l.value, "-").concat(h)
        }), /* @__PURE__ */ P.createElement(mp, p));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, f = i.animationEasing, l = i.animationId, h = this.state.prevData;
      return /* @__PURE__ */ P.createElement(_t, {
        begin: u,
        duration: c,
        isActive: s,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var y = d.t, p = a.map(function(v, g) {
          var _ = h && h[g];
          if (_) {
            var x = Re(_.x, v.x), w = Re(_.y, v.y), m = Re(_.width, v.width), b = Re(_.height, v.height);
            return me(me({}, v), {}, {
              x: x(y),
              y: w(y),
              width: m(y),
              height: b(y)
            });
          }
          if (o === "horizontal") {
            var O = Re(0, v.height), A = O(y);
            return me(me({}, v), {}, {
              y: v.y + v.height - A,
              height: A
            });
          }
          var $ = Re(0, v.width), M = $(y);
          return me(me({}, v), {}, {
            width: M
          });
        });
        return /* @__PURE__ */ P.createElement(ue, null, n.renderRectanglesStatically(p));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !Ei(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, u = Q(this.props.background, !1);
      return a.map(function(c, f) {
        c.value;
        var l = c.background, h = uR(c, sR);
        if (!l)
          return null;
        var d = me(me(me(me(me({}, h), {}, {
          fill: "#eee"
        }, l), u), Fn(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ P.createElement(mp, La({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === s
        }, d));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, s = a.xAxis, u = a.yAxis, c = a.layout, f = a.children, l = Ke(f, bn);
      if (!l)
        return null;
      var h = c === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(v, g) {
        var _ = Array.isArray(v.value) ? v.value[1] : v.value;
        return {
          x: v.x,
          y: v.y,
          value: _,
          errorVal: ke(v, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ P.createElement(ue, y, l.map(function(p) {
        return /* @__PURE__ */ P.cloneElement(p, {
          key: "error-bar-".concat(i, "-").concat(p.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: u,
          layout: c,
          offset: h,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, u = n.yAxis, c = n.left, f = n.top, l = n.width, h = n.height, d = n.isAnimationActive, y = n.background, p = n.id;
      if (i || !a || !a.length)
        return null;
      var v = this.state.isAnimationFinished, g = ee("recharts-bar", o), _ = s && s.allowDataOverflow, x = u && u.allowDataOverflow, w = _ || x, m = X(p) ? this.id : p;
      return /* @__PURE__ */ P.createElement(ue, {
        className: g
      }, _ || x ? /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: _ ? c : c - l / 2,
        y: x ? f : f - h / 2,
        width: _ ? l : l * 2,
        height: x ? h : h * 2
      }))) : null, /* @__PURE__ */ P.createElement(ue, {
        className: "recharts-bar-rectangles",
        clipPath: w ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(w, m), (!d || v) && kt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
}(Bt);
Wy = Te;
qt(Te, "displayName", "Bar");
qt(Te, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !wr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
qt(Te, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, h = e.offset, d = HN(n, r);
  if (!d)
    return null;
  var y = t.layout, p = r.type.defaultProps, v = p !== void 0 ? me(me({}, p), r.props) : r.props, g = v.dataKey, _ = v.children, x = v.minPointSize, w = y === "horizontal" ? o : a, m = c ? w.scale.domain() : null, b = eD({
    numericAxis: w
  }), O = Ke(_, Ai), A = l.map(function($, M) {
    var j, T, N, k, C, D;
    c ? j = GN(c[f + M], m) : (j = ke($, g), Array.isArray(j) || (j = [b, j]));
    var I = oR(x, Wy.defaultProps.minPointSize)(j[1], M);
    if (y === "horizontal") {
      var R, F = [o.scale(j[0]), o.scale(j[1])], q = F[0], G = F[1];
      T = gh({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: d.offset,
        entry: $,
        index: M
      }), N = (R = G ?? q) !== null && R !== void 0 ? R : void 0, k = d.size;
      var W = q - G;
      if (C = Number.isNaN(W) ? 0 : W, D = {
        x: T,
        y: o.y,
        width: k,
        height: o.height
      }, Math.abs(I) > 0 && Math.abs(C) < Math.abs(I)) {
        var V = pt(C || I) * (Math.abs(I) - Math.abs(C));
        N -= V, C += V;
      }
    } else {
      var le = [a.scale(j[0]), a.scale(j[1])], ye = le[0], He = le[1];
      if (T = ye, N = gh({
        axis: o,
        ticks: u,
        bandSize: i,
        offset: d.offset,
        entry: $,
        index: M
      }), k = He - ye, C = d.size, D = {
        x: a.x,
        y: N,
        width: a.width,
        height: C
      }, Math.abs(I) > 0 && Math.abs(k) < Math.abs(I)) {
        var Qt = pt(k || I) * (Math.abs(I) - Math.abs(k));
        k += Qt;
      }
    }
    return me(me(me({}, $), {}, {
      x: T,
      y: N,
      width: k,
      height: C,
      value: c ? j : j[1],
      payload: $,
      background: D
    }, O && O[M] && O[M].props), {}, {
      tooltipPayload: [_y(r, $)],
      tooltipPosition: {
        x: T + k / 2,
        y: N + C / 2
      }
    });
  });
  return me({
    data: A,
    layout: y
  }, h);
});
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function mR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qy(n.key), n);
  }
}
function gR(e, t, r) {
  return t && xp(e.prototype, t), r && xp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wp(Object(r), !0).forEach(function(n) {
      Do(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Do(e, t, r) {
  return t = qy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qy(e) {
  var t = bR(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function bR(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zc = function(t, r, n, i, a) {
  var o = t.width, s = t.height, u = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, h = !!Xe(c, Te);
  return f.reduce(function(d, y) {
    var p = r[y], v = p.orientation, g = p.domain, _ = p.padding, x = _ === void 0 ? {} : _, w = p.mirror, m = p.reversed, b = "".concat(v).concat(w ? "Mirror" : ""), O, A, $, M, j;
    if (p.type === "number" && (p.padding === "gap" || p.padding === "no-gap")) {
      var T = g[1] - g[0], N = 1 / 0, k = p.categoricalDomain.sort(Px);
      if (k.forEach(function(le, ye) {
        ye > 0 && (N = Math.min((le || 0) - (k[ye - 1] || 0), N));
      }), Number.isFinite(N)) {
        var C = N / T, D = p.layout === "vertical" ? n.height : n.width;
        if (p.padding === "gap" && (O = C * D / 2), p.padding === "no-gap") {
          var I = vr(t.barCategoryGap, C * D), R = C * D / 2;
          O = R - I - (R - I) / D * I;
        }
      }
    }
    i === "xAxis" ? A = [n.left + (x.left || 0) + (O || 0), n.left + n.width - (x.right || 0) - (O || 0)] : i === "yAxis" ? A = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (O || 0), n.top + n.height - (x.bottom || 0) - (O || 0)] : A = p.range, m && (A = [A[1], A[0]]);
    var F = KN(p, a, h), q = F.scale, G = F.realScaleType;
    q.domain(g).range(A), qN(q);
    var W = QN(q, lt(lt({}, p), {}, {
      realScaleType: G
    }));
    i === "xAxis" ? (j = v === "top" && !w || v === "bottom" && w, $ = n.left, M = l[b] - j * p.height) : i === "yAxis" && (j = v === "left" && !w || v === "right" && w, $ = l[b] - j * p.width, M = n.top);
    var V = lt(lt(lt({}, p), W), {}, {
      realScaleType: G,
      x: $,
      y: M,
      scale: q,
      width: i === "xAxis" ? n.width : p.width,
      height: i === "yAxis" ? n.height : p.height
    });
    return V.bandSize = Aa(V, W), !p.hide && i === "xAxis" ? l[b] += (j ? -1 : 1) * V.height : p.hide || (l[b] += (j ? -1 : 1) * V.width), lt(lt({}, d), {}, Do({}, y, V));
  }, {});
}, Hy = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, xR = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return Hy({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Gy = /* @__PURE__ */ function() {
  function e(t) {
    mR(this, e), this.scale = t;
  }
  return gR(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var u = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + u;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
}();
Do(Gy, "EPS", 1e-4);
var Wc = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return lt(lt({}, n), {}, Do({}, i, Gy.create(t[i])));
  }, {});
  return lt(lt({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return FL(i, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return zy(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function wR(e) {
  return (e % 180 + 180) % 180;
}
var _R = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = wR(i), o = a * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, OR = Xt, SR = Si, AR = xo;
function PR(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!SR(t)) {
      var a = OR(r);
      t = AR(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var $R = PR, jR = By;
function TR(e) {
  var t = jR(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ER = TR, MR = rv, CR = Xt, kR = ER, NR = Math.max;
function DR(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : kR(r);
  return i < 0 && (i = NR(n + i, 0)), MR(e, CR(t), i);
}
var IR = DR, BR = $R, LR = IR, RR = BR(LR), FR = RR;
const zR = /* @__PURE__ */ ce(FR);
var WR = j0(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), Uc = /* @__PURE__ */ br(void 0), Kc = /* @__PURE__ */ br(void 0), Vy = /* @__PURE__ */ br(void 0), Xy = /* @__PURE__ */ br({}), Yy = /* @__PURE__ */ br(void 0), Zy = /* @__PURE__ */ br(0), Jy = /* @__PURE__ */ br(0), _p = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, f = WR(a);
  return /* @__PURE__ */ P.createElement(Uc.Provider, {
    value: n
  }, /* @__PURE__ */ P.createElement(Kc.Provider, {
    value: i
  }, /* @__PURE__ */ P.createElement(Xy.Provider, {
    value: a
  }, /* @__PURE__ */ P.createElement(Vy.Provider, {
    value: f
  }, /* @__PURE__ */ P.createElement(Yy.Provider, {
    value: o
  }, /* @__PURE__ */ P.createElement(Zy.Provider, {
    value: c
  }, /* @__PURE__ */ P.createElement(Jy.Provider, {
    value: u
  }, s)))))));
}, UR = function() {
  return Lt(Yy);
}, Qy = function(t) {
  var r = Lt(Uc);
  r == null && mr();
  var n = r[t];
  return n == null && mr(), n;
}, KR = function() {
  var t = Lt(Uc);
  return Kt(t);
}, qR = function() {
  var t = Lt(Kc), r = zR(t, function(n) {
    return zy(n.domain, Number.isFinite);
  });
  return r || Kt(t);
}, em = function(t) {
  var r = Lt(Kc);
  r == null && mr();
  var n = r[t];
  return n == null && mr(), n;
}, HR = function() {
  var t = Lt(Vy);
  return t;
}, GR = function() {
  return Lt(Xy);
}, qc = function() {
  return Lt(Jy);
}, Hc = function() {
  return Lt(Zy);
};
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function VR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function XR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rm(n.key), n);
  }
}
function YR(e, t, r) {
  return t && XR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZR(e, t, r) {
  return t = Fa(t), JR(e, tm() ? Reflect.construct(t, r || [], Fa(e).constructor) : t.apply(e, r));
}
function JR(e, t) {
  if (t && (Xr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QR(e);
}
function QR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tm = function() {
    return !!e;
  })();
}
function Fa(e) {
  return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fa(e);
}
function e3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Su(e, t);
}
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Su(e, t);
}
function Op(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Op(Object(r), !0).forEach(function(n) {
      Gc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Op(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gc(e, t, r) {
  return t = rm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rm(e) {
  var t = t3(e, "string");
  return Xr(t) == "symbol" ? t : t + "";
}
function t3(e, t) {
  if (Xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function r3(e, t) {
  return o3(e) || a3(e, t) || i3(e, t) || n3();
}
function n3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i3(e, t) {
  if (e) {
    if (typeof e == "string") return Ap(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ap(e, t);
  }
}
function Ap(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function a3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function o3(e) {
  if (Array.isArray(e)) return e;
}
function Au() {
  return Au = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Au.apply(this, arguments);
}
var s3 = function(t, r) {
  var n;
  return /* @__PURE__ */ P.isValidElement(t) ? n = /* @__PURE__ */ P.cloneElement(t, r) : Z(t) ? n = t(r) : n = /* @__PURE__ */ P.createElement("line", Au({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, u3 = function(t, r, n, i, a, o, s, u, c) {
  var f = a.x, l = a.y, h = a.width, d = a.height;
  if (n) {
    var y = c.y, p = t.y.apply(y, {
      position: o
    });
    if (xt(c, "discard") && !t.y.isInRange(p))
      return null;
    var v = [{
      x: f + h,
      y: p
    }, {
      x: f,
      y: p
    }];
    return u === "left" ? v.reverse() : v;
  }
  if (r) {
    var g = c.x, _ = t.x.apply(g, {
      position: o
    });
    if (xt(c, "discard") && !t.x.isInRange(_))
      return null;
    var x = [{
      x: _,
      y: l + d
    }, {
      x: _,
      y: l
    }];
    return s === "top" ? x.reverse() : x;
  }
  if (i) {
    var w = c.segment, m = w.map(function(b) {
      return t.apply(b, {
        position: o
      });
    });
    return xt(c, "discard") && CL(m, function(b) {
      return !t.isInRange(b);
    }) ? null : m;
  }
  return null;
};
function c3(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = UR(), f = Qy(i), l = em(a), h = HR();
  if (!c || !h)
    return null;
  Mt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = Wc({
    x: f.scale,
    y: l.scale
  }), y = Ae(t), p = Ae(r), v = n && n.length === 2, g = u3(d, y, p, v, h, e.position, f.orientation, l.orientation, e);
  if (!g)
    return null;
  var _ = r3(g, 2), x = _[0], w = x.x, m = x.y, b = _[1], O = b.x, A = b.y, $ = xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, M = Sp(Sp({
    clipPath: $
  }, Q(e, !0)), {}, {
    x1: w,
    y1: m,
    x2: O,
    y2: A
  });
  return /* @__PURE__ */ P.createElement(ue, {
    className: ee("recharts-reference-line", s)
  }, s3(o, M), De.renderCallByParent(e, xR({
    x1: w,
    y1: m,
    x2: O,
    y2: A
  })));
}
var Vc = /* @__PURE__ */ function(e) {
  function t() {
    return VR(this, t), ZR(this, t, arguments);
  }
  return e3(t, e), YR(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ P.createElement(c3, this.props);
    }
  }]);
}(P.Component);
Gc(Vc, "displayName", "ReferenceLine");
Gc(Vc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function Pu() {
  return Pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pu.apply(this, arguments);
}
function Yr(e) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(e);
}
function Pp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pp(Object(r), !0).forEach(function(n) {
      Io(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, im(n.key), n);
  }
}
function h3(e, t, r) {
  return t && f3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p3(e, t, r) {
  return t = za(t), d3(e, nm() ? Reflect.construct(t, r || [], za(e).constructor) : t.apply(e, r));
}
function d3(e, t) {
  if (t && (Yr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return v3(e);
}
function v3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nm = function() {
    return !!e;
  })();
}
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, za(e);
}
function y3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $u(e, t);
}
function $u(e, t) {
  return $u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $u(e, t);
}
function Io(e, t, r) {
  return t = im(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function im(e) {
  var t = m3(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
function m3(e, t) {
  if (Yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var g3 = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Wc({
    x: i.scale,
    y: a.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return xt(t, "discard") && !o.isInRange(s) ? null : s;
}, Bo = /* @__PURE__ */ function(e) {
  function t() {
    return l3(this, t), p3(this, t, arguments);
  }
  return y3(t, e), h3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ae(i), f = Ae(a);
      if (Mt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = g3(this.props);
      if (!l)
        return null;
      var h = l.x, d = l.y, y = this.props, p = y.shape, v = y.className, g = xt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, _ = $p($p({
        clipPath: g
      }, Q(this.props, !0)), {}, {
        cx: h,
        cy: d
      });
      return /* @__PURE__ */ P.createElement(ue, {
        className: ee("recharts-reference-dot", v)
      }, t.renderDot(p, _), De.renderCallByParent(this.props, {
        x: h - o,
        y: d - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(P.Component);
Io(Bo, "displayName", "ReferenceDot");
Io(Bo, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Io(Bo, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ P.isValidElement(e) ? r = /* @__PURE__ */ P.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ P.createElement(Fc, Pu({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function ju() {
  return ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ju.apply(this, arguments);
}
function Zr(e) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
}
function jp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(r), !0).forEach(function(n) {
      Lo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function x3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, om(n.key), n);
  }
}
function w3(e, t, r) {
  return t && x3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _3(e, t, r) {
  return t = Wa(t), O3(e, am() ? Reflect.construct(t, r || [], Wa(e).constructor) : t.apply(e, r));
}
function O3(e, t) {
  if (t && (Zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return S3(e);
}
function S3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function am() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (am = function() {
    return !!e;
  })();
}
function Wa(e) {
  return Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wa(e);
}
function A3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tu(e, t);
}
function Tu(e, t) {
  return Tu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Tu(e, t);
}
function Lo(e, t, r) {
  return t = om(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function om(e) {
  var t = P3(e, "string");
  return Zr(t) == "symbol" ? t : t + "";
}
function P3(e, t) {
  if (Zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var $3 = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, u = a.y1, c = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l) return null;
  var h = Wc({
    x: f.scale,
    y: l.scale
  }), d = {
    x: t ? h.x.apply(o, {
      position: "start"
    }) : h.x.rangeMin,
    y: n ? h.y.apply(u, {
      position: "start"
    }) : h.y.rangeMin
  }, y = {
    x: r ? h.x.apply(s, {
      position: "end"
    }) : h.x.rangeMax,
    y: i ? h.y.apply(c, {
      position: "end"
    }) : h.y.rangeMax
  };
  return xt(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : Hy(d, y);
}, Ro = /* @__PURE__ */ function(e) {
  function t() {
    return b3(this, t), _3(this, t, arguments);
  }
  return A3(t, e), w3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, f = n.clipPathId;
      Mt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = Ae(i), h = Ae(a), d = Ae(o), y = Ae(s), p = this.props.shape;
      if (!l && !h && !d && !y && !p)
        return null;
      var v = $3(l, h, d, y, this.props);
      if (!v && !p)
        return null;
      var g = xt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ P.createElement(ue, {
        className: ee("recharts-reference-area", u)
      }, t.renderRect(p, Tp(Tp({
        clipPath: g
      }, Q(this.props, !0)), v)), De.renderCallByParent(this.props, v));
    }
  }]);
}(P.Component);
Lo(Ro, "displayName", "ReferenceArea");
Lo(Ro, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
Lo(Ro, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ P.isValidElement(e) ? r = /* @__PURE__ */ P.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ P.createElement(Rc, ju({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function sm(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function j3(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return _R(n, r);
}
function T3(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + s
  } : {
    start: n ? i + o : a + s,
    end: n ? i : a
  };
}
function Ua(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function E3(e, t) {
  return sm(e, t + 1);
}
function M3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, f = o, l = function() {
    var y = n == null ? void 0 : n[u];
    if (y === void 0)
      return {
        v: sm(n, c)
      };
    var p = u, v, g = function() {
      return v === void 0 && (v = r(y, p)), v;
    }, _ = y.coordinate, x = u === 0 || Ua(e, _, g, f, s);
    x || (u = 0, f = o, c += 1), x && (f = _ + e * (g() / 2 + i), u += c);
  }, h; c <= a.length; )
    if (h = l(), h) return h.v;
  return [];
}
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function Ep(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ep(Object(r), !0).forEach(function(n) {
      C3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ep(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C3(e, t, r) {
  return t = k3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k3(e) {
  var t = N3(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function N3(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, u = t.end, c = function(h) {
    var d = a[h], y, p = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var v = e * (d.coordinate + e * p() / 2 - u);
      a[h] = d = Ne(Ne({}, d), {}, {
        tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
      });
    } else
      a[h] = d = Ne(Ne({}, d), {}, {
        tickCoord: d.coordinate
      });
    var g = Ua(e, d.tickCoord, p, s, u);
    g && (u = d.tickCoord - e * (p() / 2 + i), a[h] = Ne(Ne({}, d), {}, {
      isShow: !0
    }));
  }, f = o - 1; f >= 0; f--)
    c(f);
  return a;
}
function I3(e, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (a) {
    var f = n[s - 1], l = r(f, s - 1), h = e * (f.coordinate + e * l / 2 - c);
    o[s - 1] = f = Ne(Ne({}, f), {}, {
      tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate
    });
    var d = Ua(e, f.tickCoord, function() {
      return l;
    }, u, c);
    d && (c = f.tickCoord - e * (l / 2 + i), o[s - 1] = Ne(Ne({}, f), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? s - 1 : s, p = function(_) {
    var x = o[_], w, m = function() {
      return w === void 0 && (w = r(x, _)), w;
    };
    if (_ === 0) {
      var b = e * (x.coordinate - e * m() / 2 - u);
      o[_] = x = Ne(Ne({}, x), {}, {
        tickCoord: b < 0 ? x.coordinate - b * e : x.coordinate
      });
    } else
      o[_] = x = Ne(Ne({}, x), {}, {
        tickCoord: x.coordinate
      });
    var O = Ua(e, x.tickCoord, m, u, c);
    O && (u = x.tickCoord + e * (m() / 2 + i), o[_] = Ne(Ne({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    p(v);
  return o;
}
function Xc(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, f = e.unit, l = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (L(u) || wr.isSsr)
    return E3(i, typeof u == "number" && L(u) ? u : 0);
  var h = [], d = s === "top" || s === "bottom" ? "width" : "height", y = f && d === "width" ? kn(f, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, p = function(x, w) {
    var m = Z(c) ? c(x.value, w) : x.value;
    return d === "width" ? j3(kn(m, {
      fontSize: t,
      letterSpacing: r
    }), y, l) : kn(m, {
      fontSize: t,
      letterSpacing: r
    })[d];
  }, v = i.length >= 2 ? pt(i[1].coordinate - i[0].coordinate) : 1, g = T3(a, v, d);
  return u === "equidistantPreserveStart" ? M3(v, g, p, i, o) : (u === "preserveStart" || u === "preserveStartEnd" ? h = I3(v, g, p, i, o, u === "preserveStartEnd") : h = D3(v, g, p, i, o), h.filter(function(_) {
    return _.isShow;
  }));
}
var B3 = ["viewBox"], L3 = ["viewBox"], R3 = ["ticks"];
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function Mr() {
  return Mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mr.apply(this, arguments);
}
function Mp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mp(Object(r), !0).forEach(function(n) {
      Yc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ps(e, t) {
  if (e == null) return {};
  var r = F3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function F3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function z3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cm(n.key), n);
  }
}
function W3(e, t, r) {
  return t && Cp(e.prototype, t), r && Cp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U3(e, t, r) {
  return t = Ka(t), K3(e, um() ? Reflect.construct(t, r || [], Ka(e).constructor) : t.apply(e, r));
}
function K3(e, t) {
  if (t && (Jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q3(e);
}
function q3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function um() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (um = function() {
    return !!e;
  })();
}
function Ka(e) {
  return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ka(e);
}
function H3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Eu(e, t);
}
function Eu(e, t) {
  return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eu(e, t);
}
function Yc(e, t, r) {
  return t = cm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cm(e) {
  var t = G3(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function G3(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var xn = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return z3(this, t), n = U3(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return H3(t, e), W3(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = ps(n, B3), s = this.props, u = s.viewBox, c = ps(s, L3);
      return !kr(a, u) || !kr(o, c) || !kr(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.orientation, f = i.tickSize, l = i.mirror, h = i.tickMargin, d, y, p, v, g, _, x = l ? -1 : 1, w = n.tickSize || f, m = L(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          d = y = n.coordinate, v = o + +!l * u, p = v - x * w, _ = p - x * h, g = m;
          break;
        case "left":
          p = v = n.coordinate, y = a + +!l * s, d = y - x * w, g = d - x * h, _ = m;
          break;
        case "right":
          p = v = n.coordinate, y = a + +l * s, d = y + x * w, g = d + x * h, _ = m;
          break;
        default:
          d = y = n.coordinate, v = o + +l * u, p = v + x * w, _ = p + x * h, g = m;
          break;
      }
      return {
        line: {
          x1: d,
          y1: p,
          x2: y,
          y2: v
        },
        tick: {
          x: g,
          y: _
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, u = n.orientation, c = n.mirror, f = n.axisLine, l = _e(_e(_e({}, Q(this.props, !1)), Q(f, !1)), {}, {
        fill: "none"
      });
      if (u === "top" || u === "bottom") {
        var h = +(u === "top" && !c || u === "bottom" && c);
        l = _e(_e({}, l), {}, {
          x1: i,
          y1: a + h * s,
          x2: i + o,
          y2: a + h * s
        });
      } else {
        var d = +(u === "left" && !c || u === "right" && c);
        l = _e(_e({}, l), {}, {
          x1: i + d * o,
          y1: a,
          x2: i + d * o,
          y2: a + s
        });
      }
      return /* @__PURE__ */ P.createElement("line", Mr({}, l, {
        className: ee("recharts-cartesian-axis-line", at(f, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, f = s.tick, l = s.tickFormatter, h = s.unit, d = Xc(_e(_e({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), p = this.getTickVerticalAnchor(), v = Q(this.props, !1), g = Q(f, !1), _ = _e(_e({}, v), {}, {
          fill: "none"
        }, Q(u, !1)), x = d.map(function(w, m) {
          var b = o.getTickLineCoord(w), O = b.line, A = b.tick, $ = _e(_e(_e(_e({
            textAnchor: y,
            verticalAnchor: p
          }, v), {}, {
            stroke: "none",
            fill: c
          }, g), A), {}, {
            index: m,
            payload: w,
            visibleTicksCount: d.length,
            tickFormatter: l
          });
          return /* @__PURE__ */ P.createElement(ue, Mr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(w.value, "-").concat(w.coordinate, "-").concat(w.tickCoord)
          }, Fn(o.props, w, m)), u && /* @__PURE__ */ P.createElement("line", Mr({}, _, O, {
            className: ee("recharts-cartesian-axis-tick-line", at(u, "className"))
          })), f && t.renderTickItem(f, $, "".concat(Z(l) ? l(w.value, m) : w.value).concat(h || "")));
        });
        return /* @__PURE__ */ P.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, x);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, u = i.ticksGenerator, c = i.className, f = i.hide;
      if (f)
        return null;
      var l = this.props, h = l.ticks, d = ps(l, R3), y = h;
      return Z(u) && (y = h && h.length > 0 ? u(this.props) : u(d)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ P.createElement(ue, {
        className: ee("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), De.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o, s = ee(i.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ P.isValidElement(n) ? o = /* @__PURE__ */ P.cloneElement(n, _e(_e({}, i), {}, {
        className: s
      })) : Z(n) ? o = n(_e(_e({}, i), {}, {
        className: s
      })) : o = /* @__PURE__ */ P.createElement(la, Mr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(Jp);
Yc(xn, "displayName", "CartesianAxis");
Yc(xn, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var V3 = ["x1", "y1", "x2", "y2", "key"], X3 = ["offset"];
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function kp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kp(Object(r), !0).forEach(function(n) {
      Y3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y3(e, t, r) {
  return t = Z3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z3(e) {
  var t = J3(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function J3(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cr.apply(this, arguments);
}
function Np(e, t) {
  if (e == null) return {};
  var r = Q3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Q3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var eF = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, u = t.ry;
  return /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: a,
    ry: u,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function lm(e, t) {
  var r;
  if (/* @__PURE__ */ P.isValidElement(e))
    r = /* @__PURE__ */ P.cloneElement(e, t);
  else if (Z(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, u = Np(t, V3), c = Q(u, !1);
    c.offset;
    var f = Np(c, X3);
    r = /* @__PURE__ */ P.createElement("line", cr({}, f, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function tF(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, u) {
    var c = Ie(Ie({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(u),
      index: u
    });
    return lm(i, c);
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function rF(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, u) {
    var c = Ie(Ie({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return lm(i, c);
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function nF(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, u = e.horizontal, c = u === void 0 ? !0 : u;
  if (!c || !t || !t.length)
    return null;
  var f = s.map(function(h) {
    return Math.round(h + i - i);
  }).sort(function(h, d) {
    return h - d;
  });
  i !== f[0] && f.unshift(0);
  var l = f.map(function(h, d) {
    var y = !f[d + 1], p = y ? i + o - h : f[d + 1] - h;
    if (p <= 0)
      return null;
    var v = d % t.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(d),
      y: h,
      x: n,
      height: p,
      width: a,
      stroke: "none",
      fill: t[v],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function iF(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, u = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var f = c.map(function(h) {
    return Math.round(h + a - a);
  }).sort(function(h, d) {
    return h - d;
  });
  a !== f[0] && f.unshift(0);
  var l = f.map(function(h, d) {
    var y = !f[d + 1], p = y ? a + s - h : f[d + 1] - h;
    if (p <= 0)
      return null;
    var v = d % n.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(d),
      x: h,
      y: o,
      width: p,
      height: u,
      stroke: "none",
      fill: n[v],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var aF = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return xy(Xc(Ie(Ie(Ie({}, xn.defaultProps), n), {}, {
    ticks: Tt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, oF = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return xy(Xc(Ie(Ie(Ie({}, xn.defaultProps), n), {}, {
    ticks: Tt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, jr = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function nt(e) {
  var t, r, n, i, a, o, s = qc(), u = Hc(), c = GR(), f = Ie(Ie({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : jr.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : jr.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : jr.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : jr.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : jr.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : jr.verticalFill,
    x: L(e.x) ? e.x : c.left,
    y: L(e.y) ? e.y : c.top,
    width: L(e.width) ? e.width : c.width,
    height: L(e.height) ? e.height : c.height
  }), l = f.x, h = f.y, d = f.width, y = f.height, p = f.syncWithTicks, v = f.horizontalValues, g = f.verticalValues, _ = KR(), x = qR();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(l) || l !== +l || !L(h) || h !== +h)
    return null;
  var w = f.verticalCoordinatesGenerator || aF, m = f.horizontalCoordinatesGenerator || oF, b = f.horizontalPoints, O = f.verticalPoints;
  if ((!b || !b.length) && Z(m)) {
    var A = v && v.length, $ = m({
      yAxis: x ? Ie(Ie({}, x), {}, {
        ticks: A ? v : x.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, A ? !0 : p);
    Mt(Array.isArray($), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(gr($), "]")), Array.isArray($) && (b = $);
  }
  if ((!O || !O.length) && Z(w)) {
    var M = g && g.length, j = w({
      xAxis: _ ? Ie(Ie({}, _), {}, {
        ticks: M ? g : _.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, M ? !0 : p);
    Mt(Array.isArray(j), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(gr(j), "]")), Array.isArray(j) && (O = j);
  }
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ P.createElement(eF, {
    fill: f.fill,
    fillOpacity: f.fillOpacity,
    x: f.x,
    y: f.y,
    width: f.width,
    height: f.height,
    ry: f.ry
  }), /* @__PURE__ */ P.createElement(tF, cr({}, f, {
    offset: c,
    horizontalPoints: b,
    xAxis: _,
    yAxis: x
  })), /* @__PURE__ */ P.createElement(rF, cr({}, f, {
    offset: c,
    verticalPoints: O,
    xAxis: _,
    yAxis: x
  })), /* @__PURE__ */ P.createElement(nF, cr({}, f, {
    horizontalPoints: b
  })), /* @__PURE__ */ P.createElement(iF, cr({}, f, {
    verticalPoints: O
  })));
}
nt.displayName = "CartesianGrid";
var sF = ["type", "layout", "connectNulls", "ref"], uF = ["key"];
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function Dp(e, t) {
  if (e == null) return {};
  var r = cF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Bn() {
  return Bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bn.apply(this, arguments);
}
function Ip(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ip(Object(r), !0).forEach(function(n) {
      ft(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ip(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tr(e) {
  return pF(e) || hF(e) || fF(e) || lF();
}
function lF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fF(e, t) {
  if (e) {
    if (typeof e == "string") return Mu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mu(e, t);
  }
}
function hF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function pF(e) {
  if (Array.isArray(e)) return Mu(e);
}
function Mu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hm(n.key), n);
  }
}
function vF(e, t, r) {
  return t && Bp(e.prototype, t), r && Bp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yF(e, t, r) {
  return t = qa(t), mF(e, fm() ? Reflect.construct(t, r || [], qa(e).constructor) : t.apply(e, r));
}
function mF(e, t) {
  if (t && (Qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gF(e);
}
function gF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fm = function() {
    return !!e;
  })();
}
function qa(e) {
  return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qa(e);
}
function bF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cu(e, t);
}
function Cu(e, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cu(e, t);
}
function ft(e, t, r) {
  return t = hm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hm(e) {
  var t = xF(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function xF(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Pt = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    dF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = yF(this, t, [].concat(i)), ft(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), ft(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ft(r, "getStrokeDasharray", function(o, s, u) {
      var c = u.reduce(function(g, _) {
        return g + _;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var f = Math.floor(o / c), l = o % c, h = s - o, d = [], y = 0, p = 0; y < u.length; p += u[y], ++y)
        if (p + u[y] > l) {
          d = [].concat(Tr(u.slice(0, y)), [l - p]);
          break;
        }
      var v = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(Tr(t.repeat(u, f)), Tr(d), v).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), ft(r, "id", hn("recharts-line-")), ft(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), ft(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), ft(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return bF(t, e), vF(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.points, s = a.xAxis, u = a.yAxis, c = a.layout, f = a.children, l = Ke(f, bn);
      if (!l)
        return null;
      var h = function(p, v) {
        return {
          x: p.x,
          y: p.y,
          value: p.value,
          errorVal: ke(p.payload, v)
        };
      }, d = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ P.createElement(ue, d, l.map(function(y) {
        return /* @__PURE__ */ P.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: u,
          layout: c,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var s = this.props, u = s.dot, c = s.points, f = s.dataKey, l = Q(this.props, !1), h = Q(u, !0), d = c.map(function(p, v) {
        var g = Ge(Ge(Ge({
          key: "dot-".concat(v),
          r: 3
        }, l), h), {}, {
          index: v,
          cx: p.x,
          cy: p.y,
          value: p.value,
          dataKey: f,
          payload: p.payload,
          points: c
        });
        return t.renderDotItem(u, g);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ P.createElement(ue, Bn({
        className: "recharts-line-dots",
        key: "dots"
      }, y), d);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var s = this.props, u = s.type, c = s.layout, f = s.connectNulls;
      s.ref;
      var l = Dp(s, sF), h = Ge(Ge(Ge({}, Q(l, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: f
      });
      return /* @__PURE__ */ P.createElement(ja, Bn({}, h, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, s = o.points, u = o.strokeDasharray, c = o.isAnimationActive, f = o.animationBegin, l = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, p = o.width, v = o.height, g = this.state, _ = g.prevPoints, x = g.totalLength;
      return /* @__PURE__ */ P.createElement(_t, {
        begin: f,
        duration: l,
        isActive: c,
        easing: h,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(d),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(w) {
        var m = w.t;
        if (_) {
          var b = _.length / s.length, O = s.map(function(T, N) {
            var k = Math.floor(N * b);
            if (_[k]) {
              var C = _[k], D = Re(C.x, T.x), I = Re(C.y, T.y);
              return Ge(Ge({}, T), {}, {
                x: D(m),
                y: I(m)
              });
            }
            if (y) {
              var R = Re(p * 2, T.x), F = Re(v / 2, T.y);
              return Ge(Ge({}, T), {}, {
                x: R(m),
                y: F(m)
              });
            }
            return Ge(Ge({}, T), {}, {
              x: T.x,
              y: T.y
            });
          });
          return a.renderCurveStatically(O, n, i);
        }
        var A = Re(0, x), $ = A(m), M;
        if (u) {
          var j = "".concat(u).split(/[,\s]+/gim).map(function(T) {
            return parseFloat(T);
          });
          M = a.getStrokeDasharray($, x, j);
        } else
          M = a.generateSimpleStrokeDasharray(x, $);
        return a.renderCurveStatically(s, n, i, {
          strokeDasharray: M
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, o = a.points, s = a.isAnimationActive, u = this.state, c = u.prevPoints, f = u.totalLength;
      return s && o && o.length && (!c && f > 0 || !Ei(c, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, u = i.className, c = i.xAxis, f = i.yAxis, l = i.top, h = i.left, d = i.width, y = i.height, p = i.isAnimationActive, v = i.id;
      if (a || !s || !s.length)
        return null;
      var g = this.state.isAnimationFinished, _ = s.length === 1, x = ee("recharts-line", u), w = c && c.allowDataOverflow, m = f && f.allowDataOverflow, b = w || m, O = X(v) ? this.id : v, A = (n = Q(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, $ = A.r, M = $ === void 0 ? 3 : $, j = A.strokeWidth, T = j === void 0 ? 2 : j, N = Dx(o) ? o : {}, k = N.clipDot, C = k === void 0 ? !0 : k, D = M * 2 + T;
      return /* @__PURE__ */ P.createElement(ue, {
        className: x
      }, w || m ? /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-".concat(O)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: w ? h : h - d / 2,
        y: m ? l : l - y / 2,
        width: w ? d : d * 2,
        height: m ? y : y * 2
      })), !C && /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-dots-".concat(O)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: h - D / 2,
        y: l - D / 2,
        width: d + D,
        height: y + D
      }))) : null, !_ && this.renderCurve(b, O), this.renderErrorBar(b, O), (_ || o) && this.renderDots(b, C, O), (!p || g) && kt.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, i) {
      for (var a = n.length % 2 !== 0 ? [].concat(Tr(n), [0]) : n, o = [], s = 0; s < i; ++s)
        o = [].concat(Tr(o), Tr(a));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ P.isValidElement(n))
        a = /* @__PURE__ */ P.cloneElement(n, i);
      else if (Z(n))
        a = n(i);
      else {
        var o = i.key, s = Dp(i, uF), u = ee("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ P.createElement(Fc, Bn({
          key: o
        }, s, {
          className: u
        }));
      }
      return a;
    }
  }]);
}(Bt);
ft(Pt, "displayName", "Line");
ft(Pt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !wr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
ft(Pt, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, f = t.layout, l = u.map(function(h, d) {
    var y = ke(h, o);
    return f === "horizontal" ? {
      x: Sa({
        axis: r,
        ticks: i,
        bandSize: s,
        entry: h,
        index: d
      }),
      y: X(y) ? null : n.scale(y),
      value: y,
      payload: h
    } : {
      x: X(y) ? null : r.scale(y),
      y: Sa({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: h,
        index: d
      }),
      value: y,
      payload: h
    };
  });
  return Ge({
    points: l,
    layout: f
  }, c);
});
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function wF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _F(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vm(n.key), n);
  }
}
function OF(e, t, r) {
  return t && _F(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SF(e, t, r) {
  return t = Ha(t), AF(e, pm() ? Reflect.construct(t, r || [], Ha(e).constructor) : t.apply(e, r));
}
function AF(e, t) {
  if (t && (en(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PF(e);
}
function PF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pm = function() {
    return !!e;
  })();
}
function Ha(e) {
  return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ha(e);
}
function $F(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ku(e, t);
}
function ku(e, t) {
  return ku = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ku(e, t);
}
function dm(e, t, r) {
  return t = vm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vm(e) {
  var t = jF(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function jF(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Fo = /* @__PURE__ */ function(e) {
  function t() {
    return wF(this, t), SF(this, t, arguments);
  }
  return $F(t, e), OF(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(it.Component);
dm(Fo, "displayName", "ZAxis");
dm(Fo, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var TF = ["option", "isActive"];
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ln.apply(this, arguments);
}
function EF(e, t) {
  if (e == null) return {};
  var r = MF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function MF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function CF(e) {
  var t = e.option, r = e.isActive, n = EF(e, TF);
  return typeof t == "string" ? /* @__PURE__ */ it.createElement(xu, Ln({
    option: /* @__PURE__ */ it.createElement(bo, Ln({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ it.createElement(xu, Ln({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, n));
}
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rn.apply(this, arguments);
}
function Lp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lp(Object(r), !0).forEach(function(n) {
      Ht(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mm(n.key), n);
  }
}
function NF(e, t, r) {
  return t && Rp(e.prototype, t), r && Rp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function DF(e, t, r) {
  return t = Ga(t), IF(e, ym() ? Reflect.construct(t, r || [], Ga(e).constructor) : t.apply(e, r));
}
function IF(e, t) {
  if (t && (tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BF(e);
}
function BF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ym() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ym = function() {
    return !!e;
  })();
}
function Ga(e) {
  return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ga(e);
}
function LF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nu(e, t);
}
function Nu(e, t) {
  return Nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Nu(e, t);
}
function Ht(e, t, r) {
  return t = mm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mm(e) {
  var t = RF(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function RF(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    kF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = DF(this, t, [].concat(i)), Ht(r, "state", {
      isAnimationFinished: !1
    }), Ht(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), Ht(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), Ht(r, "id", hn("recharts-scatter-")), r;
  }
  return LF(t, e), NF(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.activeShape, u = a.activeIndex, c = Q(this.props, !1);
      return n.map(function(f, l) {
        var h = u === l, d = h ? s : o, y = tt(tt({}, c), f);
        return /* @__PURE__ */ P.createElement(ue, Rn({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(f == null ? void 0 : f.cx, "-").concat(f == null ? void 0 : f.cy, "-").concat(f == null ? void 0 : f.size, "-").concat(l)
        }, Fn(i.props, f, l), {
          role: "img"
        }), /* @__PURE__ */ P.createElement(CF, Rn({
          option: d,
          isActive: h,
          key: "symbol-".concat(l)
        }, y)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, s = i.animationBegin, u = i.animationDuration, c = i.animationEasing, f = i.animationId, l = this.state.prevPoints;
      return /* @__PURE__ */ P.createElement(_t, {
        begin: s,
        duration: u,
        isActive: o,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var d = h.t, y = a.map(function(p, v) {
          var g = l && l[v];
          if (g) {
            var _ = Re(g.cx, p.cx), x = Re(g.cy, p.cy), w = Re(g.size, p.size);
            return tt(tt({}, p), {}, {
              cx: _(d),
              cy: x(d),
              size: w(d)
            });
          }
          var m = Re(0, p.size);
          return tt(tt({}, p), {}, {
            size: m(d)
          });
        });
        return /* @__PURE__ */ P.createElement(ue, null, n.renderSymbolsStatically(y));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, a = n.isAnimationActive, o = this.state.prevPoints;
      return a && i && i.length && (!o || !Ei(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, a = i.points, o = i.xAxis, s = i.yAxis, u = i.children, c = Ke(u, bn);
      return c ? c.map(function(f, l) {
        var h = f.props, d = h.direction, y = h.dataKey;
        return /* @__PURE__ */ P.cloneElement(f, {
          key: "".concat(d, "-").concat(y, "-").concat(a[l]),
          data: a,
          xAxis: o,
          yAxis: s,
          layout: d === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(v, g) {
            return {
              x: v.cx,
              y: v.cy,
              value: d === "x" ? +v.node.x : +v.node.y,
              errorVal: ke(v, g)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, a = n.line, o = n.lineType, s = n.lineJointType, u = Q(this.props, !1), c = Q(a, !1), f, l;
      if (o === "joint")
        f = i.map(function(x) {
          return {
            x: x.cx,
            y: x.cy
          };
        });
      else if (o === "fitting") {
        var h = Ax(i), d = h.xmin, y = h.xmax, p = h.a, v = h.b, g = function(w) {
          return p * w + v;
        };
        f = [{
          x: d,
          y: g(d)
        }, {
          x: y,
          y: g(y)
        }];
      }
      var _ = tt(tt(tt({}, u), {}, {
        fill: "none",
        stroke: u && u.fill
      }, c), {}, {
        points: f
      });
      return /* @__PURE__ */ P.isValidElement(a) ? l = /* @__PURE__ */ P.cloneElement(a, _) : Z(a) ? l = a(_) : l = /* @__PURE__ */ P.createElement(ja, Rn({}, _, {
        type: s
      })), /* @__PURE__ */ P.createElement(ue, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, l);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, u = n.xAxis, c = n.yAxis, f = n.left, l = n.top, h = n.width, d = n.height, y = n.id, p = n.isAnimationActive;
      if (i || !a || !a.length)
        return null;
      var v = this.state.isAnimationFinished, g = ee("recharts-scatter", s), _ = u && u.allowDataOverflow, x = c && c.allowDataOverflow, w = _ || x, m = X(y) ? this.id : y;
      return /* @__PURE__ */ P.createElement(ue, {
        className: g,
        clipPath: w ? "url(#clipPath-".concat(m, ")") : null
      }, _ || x ? /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: _ ? f : f - h / 2,
        y: x ? l : l - d / 2,
        width: _ ? h : h * 2,
        height: x ? d : d * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ P.createElement(ue, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!p || v) && kt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }]);
}(Bt);
Ht(wn, "displayName", "Scatter");
Ht(wn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !wr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Ht(wn, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, u = e.offset, c = i.props.tooltipType, f = Ke(i.props.children, Ai), l = X(t.dataKey) ? i.props.dataKey : t.dataKey, h = X(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : Fo.defaultProps.range, p = y && y[0], v = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, _ = a.map(function(x, w) {
    var m = ke(x, l), b = ke(x, h), O = !X(d) && ke(x, d) || "-", A = [{
      name: X(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: m,
      payload: x,
      dataKey: l,
      type: c
    }, {
      name: X(r.dataKey) ? i.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: b,
      payload: x,
      dataKey: h,
      type: c
    }];
    O !== "-" && A.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: O,
      payload: x,
      dataKey: d,
      type: c
    });
    var $ = Sa({
      axis: t,
      ticks: o,
      bandSize: v,
      entry: x,
      index: w,
      dataKey: l
    }), M = Sa({
      axis: r,
      ticks: s,
      bandSize: g,
      entry: x,
      index: w,
      dataKey: h
    }), j = O !== "-" ? n.scale(O) : p, T = Math.sqrt(Math.max(j, 0) / Math.PI);
    return tt(tt({}, x), {}, {
      cx: $,
      cy: M,
      x: $ - T,
      y: M - T,
      xAxis: t,
      yAxis: r,
      zAxis: n,
      width: 2 * T,
      height: 2 * T,
      size: j,
      node: {
        x: m,
        y: b,
        z: O
      },
      tooltipPayload: A,
      tooltipPosition: {
        x: $,
        y: M
      },
      payload: x
    }, f && f[w] && f[w].props);
  });
  return tt({
    points: _
  }, u);
});
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function FF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xm(n.key), n);
  }
}
function WF(e, t, r) {
  return t && zF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UF(e, t, r) {
  return t = Va(t), KF(e, gm() ? Reflect.construct(t, r || [], Va(e).constructor) : t.apply(e, r));
}
function KF(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qF(e);
}
function qF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gm = function() {
    return !!e;
  })();
}
function Va(e) {
  return Va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Va(e);
}
function HF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Du(e, t);
}
function Du(e, t) {
  return Du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Du(e, t);
}
function bm(e, t, r) {
  return t = xm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xm(e) {
  var t = GF(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function GF(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Iu() {
  return Iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Iu.apply(this, arguments);
}
function VF(e) {
  var t = e.xAxisId, r = qc(), n = Hc(), i = Qy(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ it.createElement(xn, Iu({}, i, {
      className: ee("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return Tt(o, !0);
      }
    }))
  );
}
var Be = /* @__PURE__ */ function(e) {
  function t() {
    return FF(this, t), UF(this, t, arguments);
  }
  return HF(t, e), WF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(VF, this.props);
    }
  }]);
}(it.Component);
bm(Be, "displayName", "XAxis");
bm(Be, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function XF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Om(n.key), n);
  }
}
function ZF(e, t, r) {
  return t && YF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function JF(e, t, r) {
  return t = Xa(t), QF(e, wm() ? Reflect.construct(t, r || [], Xa(e).constructor) : t.apply(e, r));
}
function QF(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ez(e);
}
function ez(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wm = function() {
    return !!e;
  })();
}
function Xa(e) {
  return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xa(e);
}
function tz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bu(e, t);
}
function Bu(e, t) {
  return Bu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bu(e, t);
}
function _m(e, t, r) {
  return t = Om(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Om(e) {
  var t = rz(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function rz(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Lu() {
  return Lu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lu.apply(this, arguments);
}
var nz = function(t) {
  var r = t.yAxisId, n = qc(), i = Hc(), a = em(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ it.createElement(xn, Lu({}, a, {
      className: ee("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return Tt(s, !0);
      }
    }))
  );
}, Le = /* @__PURE__ */ function(e) {
  function t() {
    return XF(this, t), JF(this, t, arguments);
  }
  return tz(t, e), ZF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(nz, this.props);
    }
  }]);
}(it.Component);
_m(Le, "displayName", "YAxis");
_m(Le, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function Fp(e) {
  return sz(e) || oz(e) || az(e) || iz();
}
function iz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function az(e, t) {
  if (e) {
    if (typeof e == "string") return Ru(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ru(e, t);
  }
}
function oz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sz(e) {
  if (Array.isArray(e)) return Ru(e);
}
function Ru(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Fu = function(t, r, n, i, a) {
  var o = Ke(t, Vc), s = Ke(t, Bo), u = [].concat(Fp(o), Fp(s)), c = Ke(t, Ro), f = "".concat(i, "Id"), l = i[0], h = r;
  if (u.length && (h = u.reduce(function(p, v) {
    if (v.props[f] === n && xt(v.props, "extendDomain") && L(v.props[l])) {
      var g = v.props[l];
      return [Math.min(p[0], g), Math.max(p[1], g)];
    }
    return p;
  }, h)), c.length) {
    var d = "".concat(l, "1"), y = "".concat(l, "2");
    h = c.reduce(function(p, v) {
      if (v.props[f] === n && xt(v.props, "extendDomain") && L(v.props[d]) && L(v.props[y])) {
        var g = v.props[d], _ = v.props[y];
        return [Math.min(p[0], g, _), Math.max(p[1], g, _)];
      }
      return p;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(p, v) {
    return L(v) ? [Math.min(p[0], v), Math.max(p[1], v)] : p;
  }, h)), h;
}, Sm = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(u, c, f) {
    this.fn = u, this.context = c, this.once = f || !1;
  }
  function a(u, c, f, l, h) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var d = new i(f, l || u, h), y = r ? r + c : c;
    return u._events[y] ? u._events[y].fn ? u._events[y] = [u._events[y], d] : u._events[y].push(d) : (u._events[y] = d, u._eventsCount++), u;
  }
  function o(u, c) {
    --u._eventsCount === 0 ? u._events = new n() : delete u._events[c];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var c = [], f, l;
    if (this._eventsCount === 0) return c;
    for (l in f = this._events)
      t.call(f, l) && c.push(r ? l.slice(1) : l);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
  }, s.prototype.listeners = function(c) {
    var f = r ? r + c : c, l = this._events[f];
    if (!l) return [];
    if (l.fn) return [l.fn];
    for (var h = 0, d = l.length, y = new Array(d); h < d; h++)
      y[h] = l[h].fn;
    return y;
  }, s.prototype.listenerCount = function(c) {
    var f = r ? r + c : c, l = this._events[f];
    return l ? l.fn ? 1 : l.length : 0;
  }, s.prototype.emit = function(c, f, l, h, d, y) {
    var p = r ? r + c : c;
    if (!this._events[p]) return !1;
    var v = this._events[p], g = arguments.length, _, x;
    if (v.fn) {
      switch (v.once && this.removeListener(c, v.fn, void 0, !0), g) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, f), !0;
        case 3:
          return v.fn.call(v.context, f, l), !0;
        case 4:
          return v.fn.call(v.context, f, l, h), !0;
        case 5:
          return v.fn.call(v.context, f, l, h, d), !0;
        case 6:
          return v.fn.call(v.context, f, l, h, d, y), !0;
      }
      for (x = 1, _ = new Array(g - 1); x < g; x++)
        _[x - 1] = arguments[x];
      v.fn.apply(v.context, _);
    } else {
      var w = v.length, m;
      for (x = 0; x < w; x++)
        switch (v[x].once && this.removeListener(c, v[x].fn, void 0, !0), g) {
          case 1:
            v[x].fn.call(v[x].context);
            break;
          case 2:
            v[x].fn.call(v[x].context, f);
            break;
          case 3:
            v[x].fn.call(v[x].context, f, l);
            break;
          case 4:
            v[x].fn.call(v[x].context, f, l, h);
            break;
          default:
            if (!_) for (m = 1, _ = new Array(g - 1); m < g; m++)
              _[m - 1] = arguments[m];
            v[x].fn.apply(v[x].context, _);
        }
    }
    return !0;
  }, s.prototype.on = function(c, f, l) {
    return a(this, c, f, l, !1);
  }, s.prototype.once = function(c, f, l) {
    return a(this, c, f, l, !0);
  }, s.prototype.removeListener = function(c, f, l, h) {
    var d = r ? r + c : c;
    if (!this._events[d]) return this;
    if (!f)
      return o(this, d), this;
    var y = this._events[d];
    if (y.fn)
      y.fn === f && (!h || y.once) && (!l || y.context === l) && o(this, d);
    else {
      for (var p = 0, v = [], g = y.length; p < g; p++)
        (y[p].fn !== f || h && !y[p].once || l && y[p].context !== l) && v.push(y[p]);
      v.length ? this._events[d] = v.length === 1 ? v[0] : v : o(this, d);
    }
    return this;
  }, s.prototype.removeAllListeners = function(c) {
    var f;
    return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(Sm);
var uz = Sm.exports;
const cz = /* @__PURE__ */ ce(uz);
var ds = new cz(), vs = "recharts.syncMouseEvents";
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function lz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Am(n.key), n);
  }
}
function hz(e, t, r) {
  return t && fz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ys(e, t, r) {
  return t = Am(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Am(e) {
  var t = pz(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function pz(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var dz = /* @__PURE__ */ function() {
  function e() {
    lz(this, e), ys(this, "activeIndex", 0), ys(this, "coordinateList", []), ys(this, "layout", "horizontal");
  }
  return hz(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, u = r.layout, c = u === void 0 ? null : u, f = r.offset, l = f === void 0 ? null : f, h = r.mouseHandlerCallback, d = h === void 0 ? null : h;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = d ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, s = i.height, u = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = a + u + c, h = o + this.offset.top + s / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: h
        });
      }
    }
  }]);
}();
function vz(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && L(n) && L(i))
      return !0;
  }
  return !1;
}
function yz(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Pm(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = Ce(t, r, n, i), s = Ce(t, r, n, a);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function mz(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, u = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, h = Ce(s, u, c, l), d = Ce(s, u, f, l);
      n = h.x, i = h.y, a = d.x, o = d.y;
    } else
      return Pm(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function zp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zp(Object(r), !0).forEach(function(n) {
      gz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gz(e, t, r) {
  return t = bz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bz(e) {
  var t = xz(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function xz(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wz(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, h = e.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis")
    return null;
  var y, p = ja;
  if (h === "ScatterChart")
    y = o, p = nB;
  else if (h === "BarChart")
    y = yz(l, o, u, f), p = Rc;
  else if (l === "radial") {
    var v = Pm(o), g = v.cx, _ = v.cy, x = v.radius, w = v.startAngle, m = v.endAngle;
    y = {
      cx: g,
      cy: _,
      startAngle: w,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, p = Ay;
  } else
    y = {
      points: mz(l, o, u)
    }, p = ja;
  var b = Hi(Hi(Hi(Hi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), Q(d, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: ee("recharts-tooltip-cursor", d.className)
  });
  return /* @__PURE__ */ gt(d) ? /* @__PURE__ */ Se(d, b) : /* @__PURE__ */ Zp(p, b);
}
var _z = ["item"], Oz = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function Cr() {
  return Cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cr.apply(this, arguments);
}
function Wp(e, t) {
  return Pz(e) || Az(e, t) || jm(e, t) || Sz();
}
function Sz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Az(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function Pz(e) {
  if (Array.isArray(e)) return e;
}
function Up(e, t) {
  if (e == null) return {};
  var r = $z(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $z(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tm(n.key), n);
  }
}
function Ez(e, t, r) {
  return t && Tz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mz(e, t, r) {
  return t = Ya(t), Cz(e, $m() ? Reflect.construct(t, r || [], Ya(e).constructor) : t.apply(e, r));
}
function Cz(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kz(e);
}
function kz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $m() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($m = function() {
    return !!e;
  })();
}
function Ya(e) {
  return Ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ya(e);
}
function Nz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zu(e, t);
}
function zu(e, t) {
  return zu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zu(e, t);
}
function on(e) {
  return Bz(e) || Iz(e) || jm(e) || Dz();
}
function Dz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jm(e, t) {
  if (e) {
    if (typeof e == "string") return Wu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wu(e, t);
  }
}
function Iz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Bz(e) {
  if (Array.isArray(e)) return Wu(e);
}
function Wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Kp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kp(Object(r), !0).forEach(function(n) {
      H(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H(e, t, r) {
  return t = Tm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tm(e) {
  var t = Lz(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function Lz(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rz = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Fz = {
  width: "100%",
  height: "100%"
}, Em = {
  x: 0,
  y: 0
};
function Gi(e) {
  return e;
}
var zz = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, Wz = function(t, r, n, i) {
  var a = r.find(function(f) {
    return f && f.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return E(E(E({}, i), Ce(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var u = a.coordinate, c = i.angle;
    return E(E(E({}, i), Ce(i.cx, i.cy, u, c)), {}, {
      angle: c,
      radius: u
    });
  }
  return Em;
}, zo = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(on(s), on(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function Mm(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Uu = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = zo(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(u, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = l === void 0 ? s : l;
      h = Xi(d, o.dataKey, i);
    } else
      h = l && l[n] || s[n];
    return h ? [].concat(on(u), [_y(c, h)]) : u;
  }, []);
}, qp = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = zz(a, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, f = LN(o, s, c, u);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, h = Uu(t, r, f, l), d = Wz(n, s, f, a);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: h,
      activeCoordinate: d
    };
  }
  return null;
}, Uz = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = t.stackOffset, d = by(f, a);
  return n.reduce(function(y, p) {
    var v, g = p.type.defaultProps !== void 0 ? E(E({}, p.type.defaultProps), p.props) : p.props, _ = g.type, x = g.dataKey, w = g.allowDataOverflow, m = g.allowDuplicatedCategory, b = g.scale, O = g.ticks, A = g.includeHidden, $ = g[o];
    if (y[$])
      return y;
    var M = zo(t.data, {
      graphicalItems: i.filter(function(W) {
        var V, le = o in W.props ? W.props[o] : (V = W.type.defaultProps) === null || V === void 0 ? void 0 : V[o];
        return le === $;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), j = M.length, T, N, k;
    vz(g.domain, w, _) && (T = iu(g.domain, null, w), d && (_ === "number" || b !== "auto") && (k = Dn(M, x, "category")));
    var C = Mm(_);
    if (!T || T.length === 0) {
      var D, I = (D = g.domain) !== null && D !== void 0 ? D : C;
      if (x) {
        if (T = Dn(M, x, _), _ === "category" && d) {
          var R = Sx(T);
          m && R ? (N = T, T = Da(0, j)) : m || (T = wh(I, T, p).reduce(function(W, V) {
            return W.indexOf(V) >= 0 ? W : [].concat(on(W), [V]);
          }, []));
        } else if (_ === "category")
          m ? T = T.filter(function(W) {
            return W !== "" && !X(W);
          }) : T = wh(I, T, p).reduce(function(W, V) {
            return W.indexOf(V) >= 0 || V === "" || X(V) ? W : [].concat(on(W), [V]);
          }, []);
        else if (_ === "number") {
          var F = UN(M, i.filter(function(W) {
            var V, le, ye = o in W.props ? W.props[o] : (V = W.type.defaultProps) === null || V === void 0 ? void 0 : V[o], He = "hide" in W.props ? W.props.hide : (le = W.type.defaultProps) === null || le === void 0 ? void 0 : le.hide;
            return ye === $ && (A || !He);
          }), x, a, f);
          F && (T = F);
        }
        d && (_ === "number" || b !== "auto") && (k = Dn(M, x, "category"));
      } else d ? T = Da(0, j) : s && s[$] && s[$].hasStack && _ === "number" ? T = h === "expand" ? [0, 1] : wy(s[$].stackGroups, u, c) : T = gy(M, i.filter(function(W) {
        var V = o in W.props ? W.props[o] : W.type.defaultProps[o], le = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return V === $ && (A || !le);
      }), _, f, !0);
      if (_ === "number")
        T = Fu(l, T, $, a, O), I && (T = iu(I, T, w));
      else if (_ === "category" && I) {
        var q = I, G = T.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        G && (T = q);
      }
    }
    return E(E({}, y), {}, H({}, $, E(E({}, g), {}, {
      axisType: a,
      domain: T,
      categoricalDomain: k,
      duplicateDomain: N,
      originalDomain: (v = g.domain) !== null && v !== void 0 ? v : C,
      isCategorical: d,
      layout: f
    })));
  }, {});
}, Kz = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = zo(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), d = h.length, y = by(f, a), p = -1;
  return n.reduce(function(v, g) {
    var _ = g.type.defaultProps !== void 0 ? E(E({}, g.type.defaultProps), g.props) : g.props, x = _[o], w = Mm("number");
    if (!v[x]) {
      p++;
      var m;
      return y ? m = Da(0, d) : s && s[x] && s[x].hasStack ? (m = wy(s[x].stackGroups, u, c), m = Fu(l, m, x, a)) : (m = iu(w, gy(h, n.filter(function(b) {
        var O, A, $ = o in b.props ? b.props[o] : (O = b.type.defaultProps) === null || O === void 0 ? void 0 : O[o], M = "hide" in b.props ? b.props.hide : (A = b.type.defaultProps) === null || A === void 0 ? void 0 : A.hide;
        return $ === x && !M;
      }), "number", f), i.defaultProps.allowDataOverflow), m = Fu(l, m, x, a)), E(E({}, v), {}, H({}, x, E(E({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: at(Rz, "".concat(a, ".").concat(p % 2), null),
        domain: m,
        originalDomain: w,
        isCategorical: y,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return v;
  }, {});
}, qz = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), h = Ke(f, a), d = {};
  return h && h.length ? d = Uz(t, {
    axes: h,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (d = Kz(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), d;
}, Hz = function(t) {
  var r = Kt(t), n = Tt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: hc(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Aa(r, n)
  };
}, Hp = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Xe(r, Gr), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Gz = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Et(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Gp = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, Vz = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, f = n.height, l = n.children, h = n.margin || {}, d = Xe(l, Gr), y = Xe(l, Ze), p = Object.keys(u).reduce(function(m, b) {
    var O = u[b], A = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, m), {}, H({}, A, m[A] + O.width)) : m;
  }, {
    left: h.left || 0,
    right: h.right || 0
  }), v = Object.keys(o).reduce(function(m, b) {
    var O = o[b], A = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, m), {}, H({}, A, at(m, "".concat(A)) + O.height)) : m;
  }, {
    top: h.top || 0,
    bottom: h.bottom || 0
  }), g = E(E({}, v), p), _ = g.bottom;
  d && (g.bottom += d.props.height || Gr.defaultProps.height), y && r && (g = zN(g, i, n, r));
  var x = c - g.left - g.right, w = f - g.top - g.bottom;
  return E(E({
    brushBottom: _
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(w, 0)
  });
}, Xz = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Zc = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, h = function(g, _) {
    var x = _.graphicalItems, w = _.stackGroups, m = _.offset, b = _.updateId, O = _.dataStartIndex, A = _.dataEndIndex, $ = g.barSize, M = g.layout, j = g.barGap, T = g.barCategoryGap, N = g.maxBarSize, k = Gp(M), C = k.numericAxisName, D = k.cateAxisName, I = Gz(x), R = [];
    return x.forEach(function(F, q) {
      var G = zo(g.data, {
        graphicalItems: [F],
        dataStartIndex: O,
        dataEndIndex: A
      }), W = F.type.defaultProps !== void 0 ? E(E({}, F.type.defaultProps), F.props) : F.props, V = W.dataKey, le = W.maxBarSize, ye = W["".concat(C, "Id")], He = W["".concat(D, "Id")], Qt = {}, ze = u.reduce(function(er, tr) {
        var Wo = _["".concat(tr.axisType, "Map")], Qc = W["".concat(tr.axisType, "Id")];
        Wo && Wo[Qc] || tr.axisType === "zAxis" || mr();
        var el = Wo[Qc];
        return E(E({}, er), {}, H(H({}, tr.axisType, el), "".concat(tr.axisType, "Ticks"), Tt(el)));
      }, Qt), z = ze[D], Y = ze["".concat(D, "Ticks")], J = w && w[ye] && w[ye].hasStack && tD(F, w[ye].stackGroups), B = Et(F.type).indexOf("Bar") >= 0, de = Aa(z, Y), te = [], xe = I && RN({
        barSize: $,
        stackGroups: w,
        totalSize: Xz(ze, D)
      });
      if (B) {
        var we, We, Wt = X(le) ? N : le, Ar = (we = (We = Aa(z, Y, !0)) !== null && We !== void 0 ? We : Wt) !== null && we !== void 0 ? we : 0;
        te = FN({
          barGap: j,
          barCategoryGap: T,
          bandSize: Ar !== de ? Ar : de,
          sizeList: xe[He],
          maxBarSize: Wt
        }), Ar !== de && (te = te.map(function(er) {
          return E(E({}, er), {}, {
            position: E(E({}, er.position), {}, {
              offset: er.position.offset - Ar / 2
            })
          });
        }));
      }
      var Mi = F && F.type && F.type.getComposedData;
      Mi && R.push({
        props: E(E({}, Mi(E(E({}, ze), {}, {
          displayedData: G,
          props: g,
          dataKey: V,
          item: F,
          bandSize: de,
          barPosition: te,
          offset: m,
          stackedData: J,
          layout: M,
          dataStartIndex: O,
          dataEndIndex: A
        }))), {}, H(H(H({
          key: F.key || "item-".concat(q)
        }, C, ze[C]), D, ze[D]), "animationId", b)),
        childIndex: Lx(F, g.children),
        item: F
      });
    }), R;
  }, d = function(g, _) {
    var x = g.props, w = g.dataStartIndex, m = g.dataEndIndex, b = g.updateId;
    if (!dl({
      props: x
    }))
      return null;
    var O = x.children, A = x.layout, $ = x.stackOffset, M = x.data, j = x.reverseStackOrder, T = Gp(A), N = T.numericAxisName, k = T.cateAxisName, C = Ke(O, n), D = JN(M, C, "".concat(N, "Id"), "".concat(k, "Id"), $, j), I = u.reduce(function(W, V) {
      var le = "".concat(V.axisType, "Map");
      return E(E({}, W), {}, H({}, le, qz(x, E(E({}, V), {}, {
        graphicalItems: C,
        stackGroups: V.axisType === N && D,
        dataStartIndex: w,
        dataEndIndex: m
      }))));
    }, {}), R = Vz(E(E({}, I), {}, {
      props: x,
      graphicalItems: C
    }), _ == null ? void 0 : _.legendBBox);
    Object.keys(I).forEach(function(W) {
      I[W] = f(x, I[W], R, W.replace("Map", ""), r);
    });
    var F = I["".concat(k, "Map")], q = Hz(F), G = h(x, E(E({}, I), {}, {
      dataStartIndex: w,
      dataEndIndex: m,
      updateId: b,
      graphicalItems: C,
      stackGroups: D,
      offset: R
    }));
    return E(E({
      formattedGraphicalItems: G,
      graphicalItems: C,
      offset: R,
      stackGroups: D
    }, q), I);
  }, y = /* @__PURE__ */ function(v) {
    function g(_) {
      var x, w, m;
      return jz(this, g), m = Mz(this, g, [_]), H(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), H(m, "accessibilityManager", new dz()), H(m, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var O = m.state, A = O.dataStartIndex, $ = O.dataEndIndex, M = O.updateId;
          m.setState(E({
            legendBBox: b
          }, d({
            props: m.props,
            dataStartIndex: A,
            dataEndIndex: $,
            updateId: M
          }, E(E({}, m.state), {}, {
            legendBBox: b
          }))));
        }
      }), H(m, "handleReceiveSyncEvent", function(b, O, A) {
        if (m.props.syncId === b) {
          if (A === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(O);
        }
      }), H(m, "handleBrushChange", function(b) {
        var O = b.startIndex, A = b.endIndex;
        if (O !== m.state.dataStartIndex || A !== m.state.dataEndIndex) {
          var $ = m.state.updateId;
          m.setState(function() {
            return E({
              dataStartIndex: O,
              dataEndIndex: A
            }, d({
              props: m.props,
              dataStartIndex: O,
              dataEndIndex: A,
              updateId: $
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: A
          });
        }
      }), H(m, "handleMouseEnter", function(b) {
        var O = m.getMouseInfo(b);
        if (O) {
          var A = E(E({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var $ = m.props.onMouseEnter;
          Z($) && $(A, b);
        }
      }), H(m, "triggeredAfterMouseMove", function(b) {
        var O = m.getMouseInfo(b), A = O ? E(E({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(A), m.triggerSyncEvent(A);
        var $ = m.props.onMouseMove;
        Z($) && $(A, b);
      }), H(m, "handleItemMouseEnter", function(b) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), H(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), H(m, "handleMouseMove", function(b) {
        b.persist(), m.throttleTriggeredAfterMouseMove(b);
      }), H(m, "handleMouseLeave", function(b) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        m.setState(O), m.triggerSyncEvent(O);
        var A = m.props.onMouseLeave;
        Z(A) && A(O, b);
      }), H(m, "handleOuterEvent", function(b) {
        var O = Bx(b), A = at(m.props, "".concat(O));
        if (O && Z(A)) {
          var $, M;
          /.*touch.*/i.test(O) ? M = m.getMouseInfo(b.changedTouches[0]) : M = m.getMouseInfo(b), A(($ = M) !== null && $ !== void 0 ? $ : {}, b);
        }
      }), H(m, "handleClick", function(b) {
        var O = m.getMouseInfo(b);
        if (O) {
          var A = E(E({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var $ = m.props.onClick;
          Z($) && $(A, b);
        }
      }), H(m, "handleMouseDown", function(b) {
        var O = m.props.onMouseDown;
        if (Z(O)) {
          var A = m.getMouseInfo(b);
          O(A, b);
        }
      }), H(m, "handleMouseUp", function(b) {
        var O = m.props.onMouseUp;
        if (Z(O)) {
          var A = m.getMouseInfo(b);
          O(A, b);
        }
      }), H(m, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), H(m, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && m.handleMouseDown(b.changedTouches[0]);
      }), H(m, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && m.handleMouseUp(b.changedTouches[0]);
      }), H(m, "handleDoubleClick", function(b) {
        var O = m.props.onDoubleClick;
        if (Z(O)) {
          var A = m.getMouseInfo(b);
          O(A, b);
        }
      }), H(m, "handleContextMenu", function(b) {
        var O = m.props.onContextMenu;
        if (Z(O)) {
          var A = m.getMouseInfo(b);
          O(A, b);
        }
      }), H(m, "triggerSyncEvent", function(b) {
        m.props.syncId !== void 0 && ds.emit(vs, m.props.syncId, b, m.eventEmitterSymbol);
      }), H(m, "applySyncEvent", function(b) {
        var O = m.props, A = O.layout, $ = O.syncMethod, M = m.state.updateId, j = b.dataStartIndex, T = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          m.setState(E({
            dataStartIndex: j,
            dataEndIndex: T
          }, d({
            props: m.props,
            dataStartIndex: j,
            dataEndIndex: T,
            updateId: M
          }, m.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var N = b.chartX, k = b.chartY, C = b.activeTooltipIndex, D = m.state, I = D.offset, R = D.tooltipTicks;
          if (!I)
            return;
          if (typeof $ == "function")
            C = $(R, b);
          else if ($ === "value") {
            C = -1;
            for (var F = 0; F < R.length; F++)
              if (R[F].value === b.activeLabel) {
                C = F;
                break;
              }
          }
          var q = E(E({}, I), {}, {
            x: I.left,
            y: I.top
          }), G = Math.min(N, q.x + q.width), W = Math.min(k, q.y + q.height), V = R[C] && R[C].value, le = Uu(m.state, m.props.data, C), ye = R[C] ? {
            x: A === "horizontal" ? R[C].coordinate : G,
            y: A === "horizontal" ? W : R[C].coordinate
          } : Em;
          m.setState(E(E({}, b), {}, {
            activeLabel: V,
            activeCoordinate: ye,
            activePayload: le,
            activeTooltipIndex: C
          }));
        } else
          m.setState(b);
      }), H(m, "renderCursor", function(b) {
        var O, A = m.state, $ = A.isTooltipActive, M = A.activeCoordinate, j = A.activePayload, T = A.offset, N = A.activeTooltipIndex, k = A.tooltipAxisBandSize, C = m.getTooltipEventType(), D = (O = b.props.active) !== null && O !== void 0 ? O : $, I = m.props.layout, R = b.key || "_recharts-cursor";
        return /* @__PURE__ */ P.createElement(wz, {
          key: R,
          activeCoordinate: M,
          activePayload: j,
          activeTooltipIndex: N,
          chartName: r,
          element: b,
          isActive: D,
          layout: I,
          offset: T,
          tooltipAxisBandSize: k,
          tooltipEventType: C
        });
      }), H(m, "renderPolarAxis", function(b, O, A) {
        var $ = at(b, "type.axisType"), M = at(m.state, "".concat($, "Map")), j = b.type.defaultProps, T = j !== void 0 ? E(E({}, j), b.props) : b.props, N = M && M[T["".concat($, "Id")]];
        return /* @__PURE__ */ Se(b, E(E({}, N), {}, {
          className: ee($, N.className),
          key: b.key || "".concat(O, "-").concat(A),
          ticks: Tt(N, !0)
        }));
      }), H(m, "renderPolarGrid", function(b) {
        var O = b.props, A = O.radialLines, $ = O.polarAngles, M = O.polarRadius, j = m.state, T = j.radiusAxisMap, N = j.angleAxisMap, k = Kt(T), C = Kt(N), D = C.cx, I = C.cy, R = C.innerRadius, F = C.outerRadius;
        return /* @__PURE__ */ Se(b, {
          polarAngles: Array.isArray($) ? $ : Tt(C, !0).map(function(q) {
            return q.coordinate;
          }),
          polarRadius: Array.isArray(M) ? M : Tt(k, !0).map(function(q) {
            return q.coordinate;
          }),
          cx: D,
          cy: I,
          innerRadius: R,
          outerRadius: F,
          key: b.key || "polar-grid",
          radialLines: A
        });
      }), H(m, "renderLegend", function() {
        var b = m.state.formattedGraphicalItems, O = m.props, A = O.children, $ = O.width, M = O.height, j = m.props.margin || {}, T = $ - (j.left || 0) - (j.right || 0), N = yy({
          children: A,
          formattedGraphicalItems: b,
          legendWidth: T,
          legendContent: c
        });
        if (!N)
          return null;
        var k = N.item, C = Up(N, _z);
        return /* @__PURE__ */ Se(k, E(E({}, C), {}, {
          chartWidth: $,
          chartHeight: M,
          margin: j,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), H(m, "renderTooltip", function() {
        var b, O = m.props, A = O.children, $ = O.accessibilityLayer, M = Xe(A, ge);
        if (!M)
          return null;
        var j = m.state, T = j.isTooltipActive, N = j.activeCoordinate, k = j.activePayload, C = j.activeLabel, D = j.offset, I = (b = M.props.active) !== null && b !== void 0 ? b : T;
        return /* @__PURE__ */ Se(M, {
          viewBox: E(E({}, D), {}, {
            x: D.left,
            y: D.top
          }),
          active: I,
          label: C,
          payload: I ? k : [],
          coordinate: N,
          accessibilityLayer: $
        });
      }), H(m, "renderBrush", function(b) {
        var O = m.props, A = O.margin, $ = O.data, M = m.state, j = M.offset, T = M.dataStartIndex, N = M.dataEndIndex, k = M.updateId;
        return /* @__PURE__ */ Se(b, {
          key: b.key || "_recharts-brush",
          onChange: Wi(m.handleBrushChange, b.props.onChange),
          data: $,
          x: L(b.props.x) ? b.props.x : j.left,
          y: L(b.props.y) ? b.props.y : j.top + j.height + j.brushBottom - (A.bottom || 0),
          width: L(b.props.width) ? b.props.width : j.width,
          startIndex: T,
          endIndex: N,
          updateId: "brush-".concat(k)
        });
      }), H(m, "renderReferenceElement", function(b, O, A) {
        if (!b)
          return null;
        var $ = m, M = $.clipPathId, j = m.state, T = j.xAxisMap, N = j.yAxisMap, k = j.offset, C = b.type.defaultProps || {}, D = b.props, I = D.xAxisId, R = I === void 0 ? C.xAxisId : I, F = D.yAxisId, q = F === void 0 ? C.yAxisId : F;
        return /* @__PURE__ */ Se(b, {
          key: b.key || "".concat(O, "-").concat(A),
          xAxis: T[R],
          yAxis: N[q],
          viewBox: {
            x: k.left,
            y: k.top,
            width: k.width,
            height: k.height
          },
          clipPathId: M
        });
      }), H(m, "renderActivePoints", function(b) {
        var O = b.item, A = b.activePoint, $ = b.basePoint, M = b.childIndex, j = b.isRange, T = [], N = O.props.key, k = O.item.type.defaultProps !== void 0 ? E(E({}, O.item.type.defaultProps), O.item.props) : O.item.props, C = k.activeDot, D = k.dataKey, I = E(E({
          index: M,
          dataKey: D,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: Lc(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value
        }, Q(C, !1)), Yi(C));
        return T.push(g.renderActiveDot(C, I, "".concat(N, "-activePoint-").concat(M))), $ ? T.push(g.renderActiveDot(C, E(E({}, I), {}, {
          cx: $.x,
          cy: $.y
        }), "".concat(N, "-basePoint-").concat(M))) : j && T.push(null), T;
      }), H(m, "renderGraphicChild", function(b, O, A) {
        var $ = m.filterFormatItem(b, O, A);
        if (!$)
          return null;
        var M = m.getTooltipEventType(), j = m.state, T = j.isTooltipActive, N = j.tooltipAxis, k = j.activeTooltipIndex, C = j.activeLabel, D = m.props.children, I = Xe(D, ge), R = $.props, F = R.points, q = R.isRange, G = R.baseLine, W = $.item.type.defaultProps !== void 0 ? E(E({}, $.item.type.defaultProps), $.item.props) : $.item.props, V = W.activeDot, le = W.hide, ye = W.activeBar, He = W.activeShape, Qt = !!(!le && T && I && (V || ye || He)), ze = {};
        M !== "axis" && I && I.props.trigger === "click" ? ze = {
          onClick: Wi(m.handleItemMouseEnter, b.props.onClick)
        } : M !== "axis" && (ze = {
          onMouseLeave: Wi(m.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Wi(m.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var z = /* @__PURE__ */ Se(b, E(E({}, $.props), ze));
        function Y(tr) {
          return typeof N.dataKey == "function" ? N.dataKey(tr.payload) : null;
        }
        if (Qt)
          if (k >= 0) {
            var J, B;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var de = typeof N.dataKey == "function" ? Y : "payload.".concat(N.dataKey.toString());
              J = Xi(F, de, C), B = q && G && Xi(G, de, C);
            } else
              J = F == null ? void 0 : F[k], B = q && G && G[k];
            if (He || ye) {
              var te = b.props.activeIndex !== void 0 ? b.props.activeIndex : k;
              return [/* @__PURE__ */ Se(b, E(E(E({}, $.props), ze), {}, {
                activeIndex: te
              })), null, null];
            }
            if (!X(J))
              return [z].concat(on(m.renderActivePoints({
                item: $,
                activePoint: J,
                basePoint: B,
                childIndex: k,
                isRange: q
              })));
          } else {
            var xe, we = (xe = m.getItemByXY(m.state.activeCoordinate)) !== null && xe !== void 0 ? xe : {
              graphicalItem: z
            }, We = we.graphicalItem, Wt = We.item, Ar = Wt === void 0 ? b : Wt, Mi = We.childIndex, er = E(E(E({}, $.props), ze), {}, {
              activeIndex: Mi
            });
            return [/* @__PURE__ */ Se(Ar, er), null, null];
          }
        return q ? [z, null, null] : [z, null];
      }), H(m, "renderCustomized", function(b, O, A) {
        return /* @__PURE__ */ Se(b, E(E({
          key: "recharts-customized-".concat(A)
        }, m.props), m.state));
      }), H(m, "renderMap", {
        CartesianGrid: {
          handler: Gi,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: Gi
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: Gi
        },
        YAxis: {
          handler: Gi
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((x = _.id) !== null && x !== void 0 ? x : hn("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = yv(m.triggeredAfterMouseMove, (w = _.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60), m.state = {}, m;
    }
    return Nz(g, v), Ez(g, [{
      key: "componentDidMount",
      value: function() {
        var x, w;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
            top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var x = this.props, w = x.children, m = x.data, b = x.height, O = x.layout, A = Xe(w, ge);
        if (A) {
          var $ = A.props.defaultIndex;
          if (!(typeof $ != "number" || $ < 0 || $ > this.state.tooltipTicks.length - 1)) {
            var M = this.state.tooltipTicks[$] && this.state.tooltipTicks[$].value, j = Uu(this.state, m, $, M), T = this.state.tooltipTicks[$].coordinate, N = (this.state.offset.top + b) / 2, k = O === "horizontal", C = k ? {
              x: T,
              y: N
            } : {
              y: T,
              x: N
            }, D = this.state.formattedGraphicalItems.find(function(R) {
              var F = R.item;
              return F.type.name === "Scatter";
            });
            D && (C = E(E({}, C), D.props.points[$].tooltipPosition), j = D.props.points[$].tooltipPayload);
            var I = {
              activeTooltipIndex: $,
              isTooltipActive: !0,
              activeLabel: M,
              activePayload: j,
              activeCoordinate: C
            };
            this.setState(I), this.renderCursor(A), this.accessibilityManager.setIndex($);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(x, w) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== w.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== x.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== x.margin) {
          var m, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(x) {
        bs([Xe(x.children, ge)], [Xe(this.props.children, ge)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = Xe(this.props.children, ge);
        if (x && typeof x.props.shared == "boolean") {
          var w = x.props.shared ? "axis" : "item";
          return s.indexOf(w) >= 0 ? w : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(x) {
        if (!this.container)
          return null;
        var w = this.container, m = w.getBoundingClientRect(), b = lE(m), O = {
          chartX: Math.round(x.pageX - b.left),
          chartY: Math.round(x.pageY - b.top)
        }, A = m.width / w.offsetWidth || 1, $ = this.inRange(O.chartX, O.chartY, A);
        if (!$)
          return null;
        var M = this.state, j = M.xAxisMap, T = M.yAxisMap, N = this.getTooltipEventType(), k = qp(this.state, this.props.data, this.props.layout, $);
        if (N !== "axis" && j && T) {
          var C = Kt(j).scale, D = Kt(T).scale, I = C && C.invert ? C.invert(O.chartX) : null, R = D && D.invert ? D.invert(O.chartY) : null;
          return E(E({}, O), {}, {
            xValue: I,
            yValue: R
          }, k);
        }
        return k ? E(E({}, O), k) : null;
      }
    }, {
      key: "inRange",
      value: function(x, w) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, O = x / m, A = w / m;
        if (b === "horizontal" || b === "vertical") {
          var $ = this.state.offset, M = O >= $.left && O <= $.left + $.width && A >= $.top && A <= $.top + $.height;
          return M ? {
            x: O,
            y: A
          } : null;
        }
        var j = this.state, T = j.angleAxisMap, N = j.radiusAxisMap;
        if (T && N) {
          var k = Kt(T);
          return Sh({
            x: O,
            y: A
          }, k);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, w = this.getTooltipEventType(), m = Xe(x, ge), b = {};
        m && w === "axis" && (m.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var O = Yi(this.props, this.handleOuterEvent);
        return E(E({}, O), b);
      }
    }, {
      key: "addListener",
      value: function() {
        ds.on(vs, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        ds.removeListener(vs, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, w, m) {
        for (var b = this.state.formattedGraphicalItems, O = 0, A = b.length; O < A; O++) {
          var $ = b[O];
          if ($.item === x || $.props.key === x.key || w === Et($.item.type) && m === $.childIndex)
            return $;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, w = this.state.offset, m = w.left, b = w.top, O = w.height, A = w.width;
        return /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ P.createElement("rect", {
          x: m,
          y: b,
          height: O,
          width: A
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(w, m) {
          var b = Wp(m, 2), O = b[0], A = b[1];
          return E(E({}, w), {}, H({}, O, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(w, m) {
          var b = Wp(m, 2), O = b[0], A = b[1];
          return E(E({}, w), {}, H({}, O, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(x) {
        var w;
        return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[x]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(x) {
        var w;
        return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[x]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(x) {
        var w = this.state, m = w.formattedGraphicalItems, b = w.activeItem;
        if (m && m.length)
          for (var O = 0, A = m.length; O < A; O++) {
            var $ = m[O], M = $.props, j = $.item, T = j.type.defaultProps !== void 0 ? E(E({}, j.type.defaultProps), j.props) : j.props, N = Et(j.type);
            if (N === "Bar") {
              var k = (M.data || []).find(function(R) {
                return G2(x, R);
              });
              if (k)
                return {
                  graphicalItem: $,
                  payload: k
                };
            } else if (N === "RadialBar") {
              var C = (M.data || []).find(function(R) {
                return Sh(x, R);
              });
              if (C)
                return {
                  graphicalItem: $,
                  payload: C
                };
            } else if (ko($, b) || No($, b) || vi($, b)) {
              var D = XB({
                graphicalItem: $,
                activeTooltipItem: b,
                itemData: T.data
              }), I = T.activeIndex === void 0 ? D : T.activeIndex;
              return {
                graphicalItem: E(E({}, $), {}, {
                  childIndex: I
                }),
                payload: vi($, b) ? T.data[D] : $.props.data[D]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!dl(this))
          return null;
        var w = this.props, m = w.children, b = w.className, O = w.width, A = w.height, $ = w.style, M = w.compact, j = w.title, T = w.desc, N = Up(w, Oz), k = Q(N, !1);
        if (M)
          return /* @__PURE__ */ P.createElement(_p, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ P.createElement(ws, Cr({}, k, {
            width: O,
            height: A,
            title: j,
            desc: T
          }), this.renderClipPath(), yl(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var C, D;
          k.tabIndex = (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0, k.role = (D = this.props.role) !== null && D !== void 0 ? D : "application", k.onKeyDown = function(R) {
            x.accessibilityManager.keyboardEvent(R);
          }, k.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var I = this.parseEventsOfWrapper();
        return /* @__PURE__ */ P.createElement(_p, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ P.createElement("div", Cr({
          className: ee("recharts-wrapper", b),
          style: E({
            position: "relative",
            cursor: "default",
            width: O,
            height: A
          }, $)
        }, I, {
          ref: function(F) {
            x.container = F;
          }
        }), /* @__PURE__ */ P.createElement(ws, Cr({}, k, {
          width: O,
          height: A,
          title: j,
          desc: T,
          style: Fz
        }), this.renderClipPath(), yl(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(Jp);
  H(y, "displayName", r), H(y, "defaultProps", E({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, l)), H(y, "getDerivedStateFromProps", function(v, g) {
    var _ = v.dataKey, x = v.data, w = v.children, m = v.width, b = v.height, O = v.layout, A = v.stackOffset, $ = v.margin, M = g.dataStartIndex, j = g.dataEndIndex;
    if (g.updateId === void 0) {
      var T = Hp(v);
      return E(E(E({}, T), {}, {
        updateId: 0
      }, d(E(E({
        props: v
      }, T), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: _,
        prevData: x,
        prevWidth: m,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: A,
        prevMargin: $,
        prevChildren: w
      });
    }
    if (_ !== g.prevDataKey || x !== g.prevData || m !== g.prevWidth || b !== g.prevHeight || O !== g.prevLayout || A !== g.prevStackOffset || !kr($, g.prevMargin)) {
      var N = Hp(v), k = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, C = E(E({}, qp(g, x, O)), {}, {
        updateId: g.updateId + 1
      }), D = E(E(E({}, N), k), C);
      return E(E(E({}, D), d(E({
        props: v
      }, D), g)), {}, {
        prevDataKey: _,
        prevData: x,
        prevWidth: m,
        prevHeight: b,
        prevLayout: O,
        prevStackOffset: A,
        prevMargin: $,
        prevChildren: w
      });
    }
    if (!bs(w, g.prevChildren)) {
      var I, R, F, q, G = Xe(w, Gr), W = G && (I = (R = G.props) === null || R === void 0 ? void 0 : R.startIndex) !== null && I !== void 0 ? I : M, V = G && (F = (q = G.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && F !== void 0 ? F : j, le = W !== M || V !== j, ye = !X(x), He = ye && !le ? g.updateId : g.updateId + 1;
      return E(E({
        updateId: He
      }, d(E(E({
        props: v
      }, g), {}, {
        updateId: He,
        dataStartIndex: W,
        dataEndIndex: V
      }), g)), {}, {
        prevChildren: w,
        dataStartIndex: W,
        dataEndIndex: V
      });
    }
    return null;
  }), H(y, "renderActiveDot", function(v, g, _) {
    var x;
    return /* @__PURE__ */ gt(v) ? x = /* @__PURE__ */ Se(v, g) : Z(v) ? x = v(g) : x = /* @__PURE__ */ P.createElement(Fc, g), /* @__PURE__ */ P.createElement(ue, {
      className: "recharts-active-dot",
      key: _
    }, x);
  });
  var p = /* @__PURE__ */ Xp(function(g, _) {
    return /* @__PURE__ */ P.createElement(y, Cr({}, g, {
      ref: _
    }));
  });
  return p.displayName = y.displayName, p;
}, Vp = Zc({
  chartName: "LineChart",
  GraphicalChild: Pt,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Be
  }, {
    axisType: "yAxis",
    AxisComp: Le
  }],
  formatAxisMap: zc
}), pr = Zc({
  chartName: "BarChart",
  GraphicalChild: Te,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Be
  }, {
    axisType: "yAxis",
    AxisComp: Le
  }],
  formatAxisMap: zc
}), Cm = Zc({
  chartName: "ScatterChart",
  GraphicalChild: wn,
  defaultTooltipEventType: "item",
  validateTooltipEventTypes: ["item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Be
  }, {
    axisType: "yAxis",
    AxisComp: Le
  }, {
    axisType: "zAxis",
    AxisComp: Fo
  }],
  formatAxisMap: zc
});
function je(e) {
  return e >= 1e9 ? (e / 1e9).toFixed(2) + "B" : e >= 1e6 ? (e / 1e6).toFixed(2) + "M" : e >= 1e3 ? (e / 1e3).toFixed(2) + "K" : e.toFixed(0);
}
function mt(e, t) {
  if (t === 0 || isNaN(t) || !isFinite(t))
    return 0;
  const r = e / t;
  return isNaN(r) || !isFinite(r) ? 0 : r;
}
const Jc = ({ children: e }) => {
  const [t, r] = At(0), n = () => {
    r(
      (a) => a === e.length - 1 ? 0 : a + 1
    );
  }, i = () => {
    r(
      (a) => a === 0 ? e.length - 1 : a - 1
    );
  };
  return !e || e.length === 0 ? /* @__PURE__ */ S.jsx("div", { children: "No charts available" }) : /* @__PURE__ */ S.jsxs("div", { className: "chart-carousel-container", children: [
    /* @__PURE__ */ S.jsx("div", { className: "chart-carousel-slide", children: e[t] }),
    /* @__PURE__ */ S.jsxs("div", { className: "carousel-controls", children: [
      /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "carousel-button carousel-prev",
          onClick: i,
          "aria-label": "Previous chart",
          children: /* @__PURE__ */ S.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ S.jsx("path", { d: "M15 18l-6-6 6-6" }) })
        }
      ),
      /* @__PURE__ */ S.jsx("div", { className: "carousel-dots", children: e.map((a, o) => /* @__PURE__ */ S.jsx(
        "button",
        {
          className: `carousel-dot ${o === t ? "active" : ""}`,
          onClick: () => r(o),
          "aria-label": `Go to chart ${o + 1}`
        },
        o
      )) }),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          className: "carousel-button carousel-next",
          onClick: n,
          "aria-label": "Next chart",
          children: /* @__PURE__ */ S.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ S.jsx("path", { d: "M9 18l6-6-6-6" }) })
        }
      )
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "carousel-counter", children: [
      t + 1,
      " / ",
      e.length
    ] })
  ] });
}, Yz = ({ data: e, year: t }) => {
  if (e.length === 0)
    return /* @__PURE__ */ S.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = e.reduce((p, v) => p + v.total_views, 0), n = e.reduce((p, v) => p + v.total_uploads, 0), i = e.reduce((p, v) => p + v.shorts_uploads, 0), a = e.reduce((p, v) => p + v.views_from_shorts_total, 0), o = mt(i, n), s = mt(a, r), u = mt(
    e.reduce((p, v) => p + v.engagement_per_1k_views * v.total_views, 0),
    r
  ), c = e.map((p) => ({
    channel: p.channelKey.replace("@", ""),
    views: p.total_views
  })).sort((p, v) => v.views - p.views), f = e.map((p) => ({
    channel: p.channelKey.replace("@", ""),
    Shorts: p.shorts_uploads,
    Normal: p.normal_uploads
  })), l = e.map((p) => ({
    channel: p.channelKey.replace("@", ""),
    Shorts: p.views_from_shorts_total,
    Normal: p.normal_views
  })), h = e.map((p) => ({
    channel: p.channelKey.replace("@", ""),
    x: p.uploads_shorts_share * 100,
    y: p.percent_views_from_shorts_from_total * 100,
    size: p.total_views
  })), d = {
    shorts: "#FF4444",
    normal: "#4488FF"
  }, y = [
    // Chart 1: Views by Channel
    /* @__PURE__ */ S.jsxs("div", { className: "carousel-chart-full", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "kpi-row", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: je(r) }),
          /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Total Views" })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: je(n) }),
          /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Total Uploads" })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "kpi-value", children: [
            (o * 100).toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Shorts Share (Uploads)" })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "kpi-value", children: [
            (s * 100).toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Shorts Share (Views)" })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: u.toFixed(2) }),
          /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Engagement / 1K Views" })
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsxs("h3", { className: "chart-title", children: [
          "Total Views by Channel (",
          t,
          ")"
        ] }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ S.jsxs(pr, { data: c, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(
            Be,
            {
              dataKey: "channel",
              angle: -45,
              textAnchor: "end",
              height: 80,
              stroke: "#C4CDDD"
            }
          ),
          /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (p) => je(p) }),
          /* @__PURE__ */ S.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (p) => je(p)
            }
          ),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "views", fill: "#4488FF" })
        ] }) })
      ] })
    ] }, "views-by-channel"),
    // Chart 2: Uploads Comparison
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Uploads: Shorts vs Normal" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(pr, { data: f, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(
          Be,
          {
            dataKey: "channel",
            angle: -45,
            textAnchor: "end",
            height: 80,
            stroke: "#C4CDDD"
          }
        ),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD" }),
        /* @__PURE__ */ S.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
        /* @__PURE__ */ S.jsx(Ze, {}),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: d.shorts }),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", stackId: "a", fill: d.normal })
      ] }) })
    ] }, "uploads-comparison"),
    // Chart 3: Views Comparison
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Views: Shorts vs Normal" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(pr, { data: l, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(
          Be,
          {
            dataKey: "channel",
            angle: -45,
            textAnchor: "end",
            height: 80,
            stroke: "#C4CDDD"
          }
        ),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (p) => je(p) }),
        /* @__PURE__ */ S.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p) => je(p)
          }
        ),
        /* @__PURE__ */ S.jsx(Ze, {}),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: d.shorts }),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", stackId: "a", fill: d.normal })
      ] }) })
    ] }, "views-comparison"),
    // Chart 4: Scatter Plot
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Shorts Supply vs Impact" }),
      /* @__PURE__ */ S.jsx("p", { className: "chart-subtitle", children: "X-axis: % of uploads that are Shorts | Y-axis: % of views from Shorts | Size: Total views" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(Cm, { margin: { top: 20, right: 30, left: 60, bottom: 40 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(
          Be,
          {
            type: "number",
            dataKey: "x",
            name: "Shorts Upload %",
            stroke: "#C4CDDD",
            label: { value: "Shorts Upload Share (%)", position: "insideBottom", offset: -10, fill: "#E8EAEF" }
          }
        ),
        /* @__PURE__ */ S.jsx(
          Le,
          {
            type: "number",
            dataKey: "y",
            name: "Shorts Views %",
            stroke: "#C4CDDD",
            label: { value: "Shorts Views Share (%)", angle: -90, position: "insideLeft", fill: "#E8EAEF" }
          }
        ),
        /* @__PURE__ */ S.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p, v) => v === "size" ? je(p) : `${p.toFixed(1)}%`
          }
        ),
        /* @__PURE__ */ S.jsx(wn, { data: h, fill: "#FF4444", children: h.map((p, v) => /* @__PURE__ */ S.jsx(
          Ai,
          {
            fill: "#FF4444",
            opacity: 0.7,
            r: Math.sqrt(p.size) / 1e4
          },
          `cell-${v}`
        )) })
      ] }) })
    ] }, "scatter-plot")
  ];
  return /* @__PURE__ */ S.jsx("div", { className: "overview-charts", children: /* @__PURE__ */ S.jsx(Jc, { children: y }) });
}, Zz = ({
  data: e,
  year: t,
  selectedChannels: r
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ S.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const n = r[0], i = e.filter((w) => w.channelKey === n).sort((w, m) => w.month.localeCompare(m.month));
  if (i.length === 0)
    return /* @__PURE__ */ S.jsxs("div", { className: "no-data", children: [
      "No monthly data available for ",
      n,
      "."
    ] });
  const a = i.reduce((w, m) => w + m.views_total, 0), o = i.reduce((w, m) => w + m.uploads_count, 0), s = i.reduce((w, m) => w + m.uploads_short_count, 0), u = i.reduce((w, m) => w + m.views_shorts, 0), c = mt(a, o), f = mt(s, o), l = mt(u, a), h = mt(
    i.reduce((w, m) => w + m.engagement_per_1k_views * m.views_total, 0),
    a
  ), d = i.map((w) => ({
    month: w.month,
    "Total Views": w.views_total,
    "Shorts Views": w.views_shorts,
    "Normal Views": w.views_normal
  })), y = i.map((w) => ({
    month: w.month,
    Shorts: w.uploads_short_count,
    Normal: w.uploads_normal
  })), p = i.map((w) => ({
    month: w.month,
    "Upload Share (%)": (w.uploads_shorts_share * 100).toFixed(1),
    "View Share (%)": (w.percent_views_from_shorts_from_total * 100).toFixed(1)
  })), v = {
    shorts: "#FF4444",
    normal: "#4488FF",
    total: "#44FF88"
  }, g = r.length > 1 ? /* @__PURE__ */ S.jsxs("div", { className: "drilldown-note", children: [
    "Drill-down shown for: ",
    /* @__PURE__ */ S.jsx("strong", { children: n.replace("@", "") }),
    " ",
    "(you have ",
    r.length,
    " channels selected)"
  ] }) : null, _ = /* @__PURE__ */ S.jsxs("div", { className: "kpi-row", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: je(a) }),
      /* @__PURE__ */ S.jsxs("div", { className: "kpi-label", children: [
        "Total Views (",
        t,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: o }),
      /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Total Uploads" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: je(c) }),
      /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Avg Views/Video" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "kpi-value", children: [
        (f * 100).toFixed(1),
        "%"
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Shorts Share (Uploads)" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "kpi-value", children: [
        (l * 100).toFixed(1),
        "%"
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Shorts Share (Views)" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ S.jsx("div", { className: "kpi-value", children: h.toFixed(2) }),
      /* @__PURE__ */ S.jsx("div", { className: "kpi-label", children: "Engagement / 1K Views" })
    ] })
  ] }), x = [
    // Chart 1: Monthly Views with KPIs
    /* @__PURE__ */ S.jsxs("div", { className: "carousel-chart-full", children: [
      g,
      _,
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Monthly Views" }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 350, children: /* @__PURE__ */ S.jsxs(Vp, { data: d, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD", tickFormatter: (w) => je(w) }),
          /* @__PURE__ */ S.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (w) => je(w)
            }
          ),
          /* @__PURE__ */ S.jsx(Ze, {}),
          /* @__PURE__ */ S.jsx(Pt, { type: "monotone", dataKey: "Total Views", stroke: v.total, strokeWidth: 2 }),
          /* @__PURE__ */ S.jsx(Pt, { type: "monotone", dataKey: "Shorts Views", stroke: v.shorts, strokeWidth: 2 }),
          /* @__PURE__ */ S.jsx(Pt, { type: "monotone", dataKey: "Normal Views", stroke: v.normal, strokeWidth: 2 })
        ] }) })
      ] })
    ] }, "monthly-views"),
    // Chart 2: Monthly Uploads Stacked
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Monthly Uploads by Type" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ S.jsxs(pr, { data: y, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD" }),
        /* @__PURE__ */ S.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
        /* @__PURE__ */ S.jsx(Ze, {}),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: v.shorts }),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", stackId: "a", fill: v.normal })
      ] }) })
    ] }, "monthly-uploads"),
    // Chart 3: Shorts Share Over Time
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Shorts Share Over Time" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ S.jsxs(Vp, { data: p, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
        /* @__PURE__ */ S.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
        /* @__PURE__ */ S.jsx(Ze, {}),
        /* @__PURE__ */ S.jsx(Pt, { type: "monotone", dataKey: "Upload Share (%)", stroke: "#FFB344", strokeWidth: 2 }),
        /* @__PURE__ */ S.jsx(Pt, { type: "monotone", dataKey: "View Share (%)", stroke: "#FF44B3", strokeWidth: 2 })
      ] }) })
    ] }, "shorts-share")
  ];
  return /* @__PURE__ */ S.jsx("div", { className: "drilldown-charts", children: /* @__PURE__ */ S.jsx(Jc, { children: x }) });
}, Jz = ({
  data: e,
  selectedChannels: t
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ S.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = t.map((p) => {
    const v = e.filter((A) => A.channelKey === p), g = v.reduce((A, $) => A + $.uploads_count_Normal, 0), _ = v.reduce((A, $) => A + $.uploads_count_Short, 0), x = v.reduce((A, $) => A + $.views_total_Normal, 0), w = v.reduce((A, $) => A + $.views_total_Short, 0), m = mt(x, g), b = mt(w, _), O = mt(b, m);
    return {
      channel: p.replace("@", ""),
      avgViewsNormal: m,
      avgViewsShort: b,
      multiplier: O,
      totalViewsNormal: x,
      totalViewsShort: w
    };
  }).filter((p) => p.avgViewsNormal > 0 || p.avgViewsShort > 0), n = r.map((p) => ({
    channel: p.channel,
    Normal: p.avgViewsNormal,
    Shorts: p.avgViewsShort
  })), i = r.map((p) => ({
    channel: p.channel,
    multiplier: p.multiplier,
    avgViewsNormal: p.avgViewsNormal,
    avgViewsShort: p.avgViewsShort
  })), o = e.map((p) => ({
    channel: p.channelKey.replace("@", ""),
    durationNormal: p.avg_duration_seconds_Normal,
    viewsNormal: p.avg_views_per_video_Normal,
    durationShort: p.avg_duration_seconds_Short,
    viewsShort: p.avg_views_per_video_Short,
    totalViewsNormal: p.views_total_Normal,
    totalViewsShort: p.views_total_Short
  })).flatMap((p) => [
    {
      type: "Normal",
      duration: p.durationNormal,
      views: p.viewsNormal,
      size: p.totalViewsNormal,
      channel: p.channel
    },
    {
      type: "Shorts",
      duration: p.durationShort,
      views: p.viewsShort,
      size: p.totalViewsShort,
      channel: p.channel
    }
  ]).filter((p) => p.duration > 0 && p.views > 0), s = o.map((p) => p.duration), u = Math.min(...s), c = Math.max(...s), f = (c - u) * 0.1, l = [
    Math.max(0, u - f),
    c + f
  ], h = {
    shorts: "#FF4444",
    normal: "#4488FF"
  }, d = ({ active: p, payload: v }) => {
    if (p && v && v.length) {
      const g = v[0].payload;
      return /* @__PURE__ */ S.jsxs("div", { style: { backgroundColor: "#1a1a2e", border: "1px solid #333", padding: "10px" }, children: [
        /* @__PURE__ */ S.jsx("p", { style: { margin: 0, color: "#fff" }, children: /* @__PURE__ */ S.jsx("strong", { children: g.channel }) }),
        /* @__PURE__ */ S.jsxs("p", { style: { margin: "5px 0", color: h.shorts }, children: [
          "Shorts: ",
          je(g.avgViewsShort),
          " avg views"
        ] }),
        /* @__PURE__ */ S.jsxs("p", { style: { margin: "5px 0", color: h.normal }, children: [
          "Normal: ",
          je(g.avgViewsNormal),
          " avg views"
        ] }),
        /* @__PURE__ */ S.jsxs("p", { style: { margin: "5px 0", color: "#FFB344" }, children: [
          "Multiplier: ",
          g.multiplier.toFixed(2),
          "x"
        ] })
      ] });
    }
    return null;
  }, y = [
    // Chart 1: Average Views Per Video by Type
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Average Views Per Video: Shorts vs Normal" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(pr, { data: n, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(Be, { dataKey: "channel", stroke: "#C4CDDD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (p) => je(p) }),
        /* @__PURE__ */ S.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p) => je(p)
          }
        ),
        /* @__PURE__ */ S.jsx(Ze, {}),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", fill: h.normal }),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", fill: h.shorts })
      ] }) })
    ] }, "avg-views"),
    // Chart 2: Multiplier Chart
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Shorts vs Normal Performance Multiplier" }),
      /* @__PURE__ */ S.jsx("p", { className: "chart-subtitle", children: "How many times more (or less) views does a Short get on average compared to a normal video?" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(pr, { data: i, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(Be, { dataKey: "channel", stroke: "#C4CDDD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", label: { value: "Multiplier (x)", angle: -90, position: "insideLeft", fill: "#E8EAEF" } }),
        /* @__PURE__ */ S.jsx(ge, { content: /* @__PURE__ */ S.jsx(d, {}) }),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "multiplier", fill: "#FFB344" })
      ] }) })
    ] }, "multiplier"),
    // Chart 3: Duration vs Performance Scatter
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Duration vs Performance" }),
      /* @__PURE__ */ S.jsx("p", { className: "chart-subtitle", children: "Each point represents a channel-month. Blue = Normal videos, Red = Shorts." }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(Cm, { margin: { top: 20, right: 30, left: 80, bottom: 60 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(
          Be,
          {
            type: "number",
            dataKey: "duration",
            name: "Duration (sec)",
            stroke: "#C4CDDD",
            domain: l,
            label: { value: "Avg Duration (seconds)", position: "insideBottom", offset: -10, fill: "#E8EAEF" }
          }
        ),
        /* @__PURE__ */ S.jsx(
          Le,
          {
            type: "number",
            dataKey: "views",
            name: "Avg Views",
            stroke: "#C4CDDD",
            label: { value: "Avg Views Per Video", angle: -90, position: "insideLeft", fill: "#E8EAEF" },
            tickFormatter: (p) => je(p)
          }
        ),
        /* @__PURE__ */ S.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p, v) => v === "views" || v === "size" ? je(p) : p
          }
        ),
        /* @__PURE__ */ S.jsx(wn, { data: o, fill: "#8884d8", children: o.map((p, v) => /* @__PURE__ */ S.jsx(
          Ai,
          {
            fill: p.type === "Shorts" ? h.shorts : h.normal,
            opacity: 0.6,
            r: Math.sqrt(p.size) / 8e3
          },
          `cell-${v}`
        )) })
      ] }) })
    ] }, "duration-performance")
  ];
  return t.length === 1 && y.push(
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsxs("h3", { className: "chart-title", children: [
        "Shorts Share Over Time: ",
        t[0].replace("@", "")
      ] }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(
        pr,
        {
          data: e.filter((p) => p.channelKey === t[0]).sort((p, v) => p.month.localeCompare(v.month)),
          margin: { top: 20, right: 30, left: 20, bottom: 60 },
          children: [
            /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
            /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
            /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
            /* @__PURE__ */ S.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
            /* @__PURE__ */ S.jsx(Ze, {}),
            /* @__PURE__ */ S.jsx(
              Te,
              {
                dataKey: "uploads_share_within_channel_month_Short",
                name: "Upload Share (%)",
                fill: "#FFB344"
              }
            ),
            /* @__PURE__ */ S.jsx(
              Te,
              {
                dataKey: "views_share_within_channel_month_Short",
                name: "View Share (%)",
                fill: "#FF44B3"
              }
            )
          ]
        }
      ) })
    ] }, "share-over-time")
  ), /* @__PURE__ */ S.jsx("div", { className: "short-vs-long-charts", children: /* @__PURE__ */ S.jsx(Jc, { children: y }) });
}, eW = ({
  initialViewMode: e = "overview",
  hideControls: t = !1,
  showMainHeader: r = !0
  // Default to true for backward compatibility
}) => {
  const [n, i] = At(!0), [a, o] = At([]), [s, u] = At([]), [c, f] = At([]), [l, h] = At({
    year: 2024,
    selectedChannels: [],
    viewMode: e
  });
  Za(() => {
    Km().then(({ annual: x, monthly: w, shortVsLong: m }) => {
      o(x), u(w), f(m);
      const b = Array.from(new Set(x.map((O) => O.channelKey)));
      h((O) => ({ ...O, selectedChannels: b })), i(!1);
    });
  }, []);
  const d = (x) => {
    h((w) => ({ ...w, ...x }));
  };
  if (n)
    return /* @__PURE__ */ S.jsx("div", { className: "dashboard-slide loading", children: /* @__PURE__ */ S.jsx("div", { className: "loading-spinner", children: "Loading dashboard data..." }) });
  const y = Array.from(new Set(a.map((x) => x.channelKey))), p = a.filter(
    (x) => x.year === l.year && l.selectedChannels.includes(x.channelKey)
  ), v = s.filter(
    (x) => x.year === l.year && l.selectedChannels.includes(x.channelKey)
  ), g = c.filter(
    (x) => x.year === l.year && l.selectedChannels.includes(x.channelKey)
  ), _ = {
    overview: "Overview",
    "channel-drilldown": "Channel Drill-down",
    "short-vs-long": "Short vs Long"
  };
  return /* @__PURE__ */ S.jsx("section", { className: "slide-section media-dashboard-slide", id: "dashboard", children: /* @__PURE__ */ S.jsxs("div", { className: "dashboard-container", children: [
    r && /* @__PURE__ */ S.jsxs("div", { className: "dashboard-header", children: [
      /* @__PURE__ */ S.jsx("h2", { className: "dashboard-title", children: "Interactive Media Analytics" }),
      /* @__PURE__ */ S.jsx("p", { className: "dashboard-subtitle", children: "Explore how top YouTube channels balance short-form and long-form content strategies" })
    ] }),
    !r && /* @__PURE__ */ S.jsx("div", { className: "dashboard-view-label", children: /* @__PURE__ */ S.jsx("h3", { className: "view-mode-name", children: _[e] }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "dashboard-content", children: [
      !t && /* @__PURE__ */ S.jsx(
        qm,
        {
          filters: l,
          allChannels: y,
          onFilterChange: d
        }
      ),
      /* @__PURE__ */ S.jsxs("div", { className: "dashboard-charts", children: [
        l.viewMode === "overview" && /* @__PURE__ */ S.jsx(Yz, { data: p, year: l.year }),
        l.viewMode === "channel-drilldown" && /* @__PURE__ */ S.jsx(
          Zz,
          {
            data: v,
            year: l.year,
            selectedChannels: l.selectedChannels
          }
        ),
        l.viewMode === "short-vs-long" && /* @__PURE__ */ S.jsx(
          Jz,
          {
            data: g,
            year: l.year,
            selectedChannels: l.selectedChannels
          }
        )
      ] })
    ] })
  ] }) });
};
export {
  eW as MediaDashboardSlide,
  eW as default
};
