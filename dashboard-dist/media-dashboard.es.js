import * as it from "react";
import A, { isValidElement as gt, Children as lr, PureComponent as It, forwardRef as Vp, useRef as Vi, useImperativeHandle as Cm, useState as Ut, useCallback as km, useEffect as Za, useMemo as Xp, cloneElement as Se, createElement as Yp, useContext as Bt, createContext as br, Component as Zp } from "react";
var Ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jp = { exports: {} }, Ja = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm = A, Dm = Symbol.for("react.element"), Im = Symbol.for("react.fragment"), Bm = Object.prototype.hasOwnProperty, Lm = Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qp(e, t, r) {
  var n, i = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Bm.call(t, n) && !Rm.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Dm, type: e, key: a, ref: o, props: i, _owner: Lm.current };
}
Ja.Fragment = Im;
Ja.jsx = Qp;
Ja.jsxs = Qp;
Jp.exports = Ja;
var S = Jp.exports;
function K(e) {
  if (typeof e == "number") return e;
  const t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
async function Fm() {
  try {
    const r = (await (await fetch("/tbl_AnnualChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((l, h) => {
        var p;
        o[l.trim()] = ((p = a[h]) == null ? void 0 : p.trim()) || "";
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
async function zm() {
  try {
    const r = (await (await fetch("/tbl_MonthlyChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((p, v) => {
        var d;
        o[p.trim()] = ((d = a[v]) == null ? void 0 : d.trim()) || "";
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
async function Wm() {
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
async function Um() {
  const [e, t, r] = await Promise.all([
    Fm(),
    zm(),
    Wm()
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
}, Km = ({
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
function ed(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = ed(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ee() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = ed(e)) && (n && (n += " "), n += t);
  return n;
}
var qm = Array.isArray, qe = qm, Hm = typeof Ci == "object" && Ci && Ci.Object === Object && Ci, td = Hm, Gm = td, Vm = typeof self == "object" && self && self.Object === Object && self, Xm = Gm || Vm || Function("return this")(), Ot = Xm, Ym = Ot, Zm = Ym.Symbol, _i = Zm, el = _i, rd = Object.prototype, Jm = rd.hasOwnProperty, Qm = rd.toString, _n = el ? el.toStringTag : void 0;
function eg(e) {
  var t = Jm.call(e, _n), r = e[_n];
  try {
    e[_n] = void 0;
    var n = !0;
  } catch {
  }
  var i = Qm.call(e);
  return n && (t ? e[_n] = r : delete e[_n]), i;
}
var tg = eg, rg = Object.prototype, ng = rg.toString;
function ig(e) {
  return ng.call(e);
}
var ag = ig, tl = _i, og = tg, sg = ag, ug = "[object Null]", cg = "[object Undefined]", rl = tl ? tl.toStringTag : void 0;
function lg(e) {
  return e == null ? e === void 0 ? cg : ug : rl && rl in Object(e) ? og(e) : sg(e);
}
var Lt = lg;
function fg(e) {
  return e != null && typeof e == "object";
}
var Rt = fg, hg = Lt, pg = Rt, dg = "[object Symbol]";
function vg(e) {
  return typeof e == "symbol" || pg(e) && hg(e) == dg;
}
var sn = vg, yg = qe, mg = sn, gg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bg = /^\w*$/;
function xg(e, t) {
  if (yg(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || mg(e) ? !0 : bg.test(e) || !gg.test(e) || t != null && e in Object(t);
}
var Ku = xg;
function wg(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vt = wg;
const un = /* @__PURE__ */ ce(Vt);
var _g = Lt, Og = Vt, Sg = "[object AsyncFunction]", Ag = "[object Function]", Pg = "[object GeneratorFunction]", $g = "[object Proxy]";
function jg(e) {
  if (!Og(e))
    return !1;
  var t = _g(e);
  return t == Ag || t == Pg || t == Sg || t == $g;
}
var qu = jg;
const Z = /* @__PURE__ */ ce(qu);
var Tg = Ot, Eg = Tg["__core-js_shared__"], Mg = Eg, Uo = Mg, nl = function() {
  var e = /[^.]+$/.exec(Uo && Uo.keys && Uo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cg(e) {
  return !!nl && nl in e;
}
var kg = Cg, Ng = Function.prototype, Dg = Ng.toString;
function Ig(e) {
  if (e != null) {
    try {
      return Dg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nd = Ig, Bg = qu, Lg = kg, Rg = Vt, Fg = nd, zg = /[\\^$.*+?()[\]{}|]/g, Wg = /^\[object .+?Constructor\]$/, Ug = Function.prototype, Kg = Object.prototype, qg = Ug.toString, Hg = Kg.hasOwnProperty, Gg = RegExp(
  "^" + qg.call(Hg).replace(zg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vg(e) {
  if (!Rg(e) || Lg(e))
    return !1;
  var t = Bg(e) ? Gg : Wg;
  return t.test(Fg(e));
}
var Xg = Vg;
function Yg(e, t) {
  return e == null ? void 0 : e[t];
}
var Zg = Yg, Jg = Xg, Qg = Zg;
function eb(e, t) {
  var r = Qg(e, t);
  return Jg(r) ? r : void 0;
}
var xr = eb, tb = xr, rb = tb(Object, "create"), Qa = rb, il = Qa;
function nb() {
  this.__data__ = il ? il(null) : {}, this.size = 0;
}
var ib = nb;
function ab(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ob = ab, sb = Qa, ub = "__lodash_hash_undefined__", cb = Object.prototype, lb = cb.hasOwnProperty;
function fb(e) {
  var t = this.__data__;
  if (sb) {
    var r = t[e];
    return r === ub ? void 0 : r;
  }
  return lb.call(t, e) ? t[e] : void 0;
}
var hb = fb, pb = Qa, db = Object.prototype, vb = db.hasOwnProperty;
function yb(e) {
  var t = this.__data__;
  return pb ? t[e] !== void 0 : vb.call(t, e);
}
var mb = yb, gb = Qa, bb = "__lodash_hash_undefined__";
function xb(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = gb && t === void 0 ? bb : t, this;
}
var wb = xb, _b = ib, Ob = ob, Sb = hb, Ab = mb, Pb = wb;
function cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cn.prototype.clear = _b;
cn.prototype.delete = Ob;
cn.prototype.get = Sb;
cn.prototype.has = Ab;
cn.prototype.set = Pb;
var $b = cn;
function jb() {
  this.__data__ = [], this.size = 0;
}
var Tb = jb;
function Eb(e, t) {
  return e === t || e !== e && t !== t;
}
var Hu = Eb, Mb = Hu;
function Cb(e, t) {
  for (var r = e.length; r--; )
    if (Mb(e[r][0], t))
      return r;
  return -1;
}
var eo = Cb, kb = eo, Nb = Array.prototype, Db = Nb.splice;
function Ib(e) {
  var t = this.__data__, r = kb(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Db.call(t, r, 1), --this.size, !0;
}
var Bb = Ib, Lb = eo;
function Rb(e) {
  var t = this.__data__, r = Lb(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Fb = Rb, zb = eo;
function Wb(e) {
  return zb(this.__data__, e) > -1;
}
var Ub = Wb, Kb = eo;
function qb(e, t) {
  var r = this.__data__, n = Kb(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Hb = qb, Gb = Tb, Vb = Bb, Xb = Fb, Yb = Ub, Zb = Hb;
function ln(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ln.prototype.clear = Gb;
ln.prototype.delete = Vb;
ln.prototype.get = Xb;
ln.prototype.has = Yb;
ln.prototype.set = Zb;
var to = ln, Jb = xr, Qb = Ot, e0 = Jb(Qb, "Map"), Gu = e0, al = $b, t0 = to, r0 = Gu;
function n0() {
  this.size = 0, this.__data__ = {
    hash: new al(),
    map: new (r0 || t0)(),
    string: new al()
  };
}
var i0 = n0;
function a0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var o0 = a0, s0 = o0;
function u0(e, t) {
  var r = e.__data__;
  return s0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ro = u0, c0 = ro;
function l0(e) {
  var t = c0(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var f0 = l0, h0 = ro;
function p0(e) {
  return h0(this, e).get(e);
}
var d0 = p0, v0 = ro;
function y0(e) {
  return v0(this, e).has(e);
}
var m0 = y0, g0 = ro;
function b0(e, t) {
  var r = g0(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var x0 = b0, w0 = i0, _0 = f0, O0 = d0, S0 = m0, A0 = x0;
function fn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = w0;
fn.prototype.delete = _0;
fn.prototype.get = O0;
fn.prototype.has = S0;
fn.prototype.set = A0;
var Vu = fn, id = Vu, P0 = "Expected a function";
function Xu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(P0);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Xu.Cache || id)(), r;
}
Xu.Cache = id;
var ad = Xu;
const $0 = /* @__PURE__ */ ce(ad);
var j0 = ad, T0 = 500;
function E0(e) {
  var t = j0(e, function(n) {
    return r.size === T0 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var M0 = E0, C0 = M0, k0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, N0 = /\\(\\)?/g, D0 = C0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(k0, function(r, n, i, a) {
    t.push(i ? a.replace(N0, "$1") : n || r);
  }), t;
}), I0 = D0;
function B0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Yu = B0, ol = _i, L0 = Yu, R0 = qe, F0 = sn, sl = ol ? ol.prototype : void 0, ul = sl ? sl.toString : void 0;
function od(e) {
  if (typeof e == "string")
    return e;
  if (R0(e))
    return L0(e, od) + "";
  if (F0(e))
    return ul ? ul.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var z0 = od, W0 = z0;
function U0(e) {
  return e == null ? "" : W0(e);
}
var sd = U0, K0 = qe, q0 = Ku, H0 = I0, G0 = sd;
function V0(e, t) {
  return K0(e) ? e : q0(e, t) ? [e] : H0(G0(e));
}
var ud = V0, X0 = sn;
function Y0(e) {
  if (typeof e == "string" || X0(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var no = Y0, Z0 = ud, J0 = no;
function Q0(e, t) {
  t = Z0(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[J0(t[r++])];
  return r && r == n ? e : void 0;
}
var Zu = Q0, ex = Zu;
function tx(e, t, r) {
  var n = e == null ? void 0 : ex(e, t);
  return n === void 0 ? r : n;
}
var cd = tx;
const at = /* @__PURE__ */ ce(cd);
function rx(e) {
  return e == null;
}
var nx = rx;
const X = /* @__PURE__ */ ce(nx);
var ix = Lt, ax = qe, ox = Rt, sx = "[object String]";
function ux(e) {
  return typeof e == "string" || !ax(e) && ox(e) && ix(e) == sx;
}
var cx = ux;
const dr = /* @__PURE__ */ ce(cx);
var ld = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ju = Symbol.for("react.element"), Qu = Symbol.for("react.portal"), io = Symbol.for("react.fragment"), ao = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), so = Symbol.for("react.provider"), uo = Symbol.for("react.context"), lx = Symbol.for("react.server_context"), co = Symbol.for("react.forward_ref"), lo = Symbol.for("react.suspense"), fo = Symbol.for("react.suspense_list"), ho = Symbol.for("react.memo"), po = Symbol.for("react.lazy"), fx = Symbol.for("react.offscreen"), fd;
fd = Symbol.for("react.module.reference");
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
              case lx:
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
  return typeof e == "string" || typeof e == "function" || e === io || e === oo || e === ao || e === lo || e === fo || e === fx || typeof e == "object" && e !== null && (e.$$typeof === po || e.$$typeof === ho || e.$$typeof === so || e.$$typeof === uo || e.$$typeof === co || e.$$typeof === fd || e.getModuleId !== void 0);
};
ie.typeOf = st;
ld.exports = ie;
var hx = ld.exports, px = Lt, dx = Rt, vx = "[object Number]";
function yx(e) {
  return typeof e == "number" || dx(e) && px(e) == vx;
}
var hd = yx;
const mx = /* @__PURE__ */ ce(hd);
var gx = hd;
function bx(e) {
  return gx(e) && e != +e;
}
var xx = bx;
const Oi = /* @__PURE__ */ ce(xx);
var pt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, or = function(t) {
  return dr(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return mx(t) && !Oi(t);
}, wx = function(t) {
  return X(t);
}, Ae = function(t) {
  return L(t) || dr(t);
}, _x = 0, hn = function(t) {
  var r = ++_x;
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
}, Ox = function(t) {
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
var Sx = function(t) {
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
}, Ax = function(t, r) {
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
var Px = ["viewBox", "children"], $x = [
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
], cl = ["points", "pathLength"], Ko = {
  svg: Px,
  polygon: cl,
  polyline: cl
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
}, jx = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Fn = function(t, r, n) {
  if (!un(t) || ms(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    ec.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = jx(o, r, n));
  }), i;
}, Tx = ["children"], Ex = ["children"];
function ll(e, t) {
  if (e == null) return {};
  var r = Mx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Mx(e, t) {
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
var fl = {
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
}, Tt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, hl = null, qo = null, tc = function e(t) {
  if (t === hl && Array.isArray(qo))
    return qo;
  var r = [];
  return lr.forEach(t, function(n) {
    X(n) || (hx.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), qo = r, hl = t, r;
};
function Ke(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Tt(i);
  }) : n = [Tt(t)], tc(e).forEach(function(i) {
    var a = at(i, "type.displayName") || at(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Xe(e, t) {
  var r = Ke(e, t);
  return r && r[0];
}
var pl = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!L(n) || n <= 0 || !L(i) || i <= 0);
}, Cx = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], kx = function(t) {
  return t && t.type && dr(t.type) && Cx.indexOf(t.type) >= 0;
}, Nx = function(t) {
  return t && gs(t) === "object" && "clipDot" in t;
}, Dx = function(t, r, n, i) {
  var a, o = (a = Ko == null ? void 0 : Ko[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Z(t) && (i && o.includes(r) || $x.includes(r)) || n && ec.includes(r);
}, Q = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ gt(t) && (i = t.props), !un(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    Dx((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
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
    return dl(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!dl(a, o))
      return !1;
  }
  return !0;
}, dl = function(t, r) {
  if (X(t) && X(r))
    return !0;
  if (!X(t) && !X(r)) {
    var n = t.props || {}, i = n.children, a = ll(n, Tx), o = r.props || {}, s = o.children, u = ll(o, Ex);
    return i && s ? kr(a, u) && bs(i, s) : !i && !s ? kr(a, u) : !1;
  }
  return !1;
}, vl = function(t, r) {
  var n = [], i = {};
  return tc(t).forEach(function(a, o) {
    if (kx(a))
      n.push(a);
    else if (a) {
      var s = Tt(a.type), u = r[s] || {}, c = u.handler, f = u.once;
      if (c && (!f || !i[s])) {
        var l = c(a, s, o);
        n.push(l), i[s] = !0;
      }
    }
  }), n;
}, Ix = function(t) {
  var r = t && t.type;
  return r && fl[r] ? fl[r] : null;
}, Bx = function(t, r) {
  return tc(r).indexOf(t);
}, Lx = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function Rx(e, t) {
  if (e == null) return {};
  var r = Fx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Fx(e, t) {
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
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = e.title, u = e.desc, c = Rx(e, Lx), f = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = ee("recharts-surface", a);
  return /* @__PURE__ */ A.createElement("svg", xs({}, Q(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ A.createElement("title", null, s), /* @__PURE__ */ A.createElement("desc", null, u), t);
}
var zx = ["children", "className"];
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
function Wx(e, t) {
  if (e == null) return {};
  var r = Ux(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ux(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ue = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = Wx(e, zx), a = ee("recharts-layer", n);
  return /* @__PURE__ */ A.createElement("g", _s({
    className: a
  }, Q(i, !0), {
    ref: t
  }), r);
}), Et = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
};
function Kx(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var qx = Kx, Hx = qx;
function Gx(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Hx(e, t, r);
}
var Vx = Gx, Xx = "\\ud800-\\udfff", Yx = "\\u0300-\\u036f", Zx = "\\ufe20-\\ufe2f", Jx = "\\u20d0-\\u20ff", Qx = Yx + Zx + Jx, ew = "\\ufe0e\\ufe0f", tw = "\\u200d", rw = RegExp("[" + tw + Xx + Qx + ew + "]");
function nw(e) {
  return rw.test(e);
}
var pd = nw;
function iw(e) {
  return e.split("");
}
var aw = iw, dd = "\\ud800-\\udfff", ow = "\\u0300-\\u036f", sw = "\\ufe20-\\ufe2f", uw = "\\u20d0-\\u20ff", cw = ow + sw + uw, lw = "\\ufe0e\\ufe0f", fw = "[" + dd + "]", Os = "[" + cw + "]", Ss = "\\ud83c[\\udffb-\\udfff]", hw = "(?:" + Os + "|" + Ss + ")", vd = "[^" + dd + "]", yd = "(?:\\ud83c[\\udde6-\\uddff]){2}", md = "[\\ud800-\\udbff][\\udc00-\\udfff]", pw = "\\u200d", gd = hw + "?", bd = "[" + lw + "]?", dw = "(?:" + pw + "(?:" + [vd, yd, md].join("|") + ")" + bd + gd + ")*", vw = bd + gd + dw, yw = "(?:" + [vd + Os + "?", Os, yd, md, fw].join("|") + ")", mw = RegExp(Ss + "(?=" + Ss + ")|" + yw + vw, "g");
function gw(e) {
  return e.match(mw) || [];
}
var bw = gw, xw = aw, ww = pd, _w = bw;
function Ow(e) {
  return ww(e) ? _w(e) : xw(e);
}
var Sw = Ow, Aw = Vx, Pw = pd, $w = Sw, jw = sd;
function Tw(e) {
  return function(t) {
    t = jw(t);
    var r = Pw(t) ? $w(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Aw(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var Ew = Tw, Mw = Ew, Cw = Mw("toUpperCase"), kw = Cw;
const vo = /* @__PURE__ */ ce(kw);
function se(e) {
  return function() {
    return e;
  };
}
const xd = Math.cos, Zi = Math.sin, vt = Math.sqrt, Ji = Math.PI, yo = 2 * Ji, As = Math.PI, Ps = 2 * As, nr = 1e-6, Nw = Ps - nr;
function wd(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Dw(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return wd;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class Iw {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? wd : Dw(t);
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
      let p = n - o, v = i - s, d = u * u + c * c, y = p * p + v * v, g = Math.sqrt(d), w = Math.sqrt(h), b = a * Math.tan((As - Math.acos((d + h - y) / (2 * g * w))) / 2), _ = b / w, m = b / g;
      Math.abs(_ - 1) > nr && this._append`L${t + _ * f},${r + _ * l}`, this._append`A${a},${a},0,0,${+(l * p > f * v)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), u = n * Math.sin(i), c = t + s, f = r + u, l = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > nr || Math.abs(this._y1 - f) > nr) && this._append`L${c},${f}`, n && (h < 0 && (h = h % Ps + Ps), h > Nw ? this._append`A${n},${n},0,1,${l},${t - s},${r - u}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : h > nr && this._append`A${n},${n},0,${+(h >= As)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
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
  }, () => new Iw(t);
}
function nc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _d(e) {
  this._context = e;
}
_d.prototype = {
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
  return new _d(e);
}
function Od(e) {
  return e[0];
}
function Sd(e) {
  return e[1];
}
function Ad(e, t) {
  var r = se(!0), n = null, i = mo, a = null, o = rc(s);
  e = typeof e == "function" ? e : e === void 0 ? Od : se(e), t = typeof t == "function" ? t : t === void 0 ? Sd : se(t);
  function s(u) {
    var c, f = (u = nc(u)).length, l, h = !1, p;
    for (n == null && (a = i(p = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = u[c], c, u)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e(l, c, u), +t(l, c, u));
    if (p) return a = null, p + "" || null;
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
  e = typeof e == "function" ? e : e === void 0 ? Od : se(+e), t = typeof t == "function" ? t : se(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Sd : se(+r);
  function c(l) {
    var h, p, v, d = (l = nc(l)).length, y, g = !1, w, b = new Array(d), _ = new Array(d);
    for (a == null && (s = o(w = u())), h = 0; h <= d; ++h) {
      if (!(h < d && i(y = l[h], h, l)) === g)
        if (g = !g)
          p = h, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), v = h - 1; v >= p; --v)
            s.point(b[v], _[v]);
          s.lineEnd(), s.areaEnd();
        }
      g && (b[h] = +e(y, h, l), _[h] = +t(y, h, l), s.point(n ? +n(y, h, l) : b[h], r ? +r(y, h, l) : _[h]));
    }
    if (w) return s = null, w + "" || null;
  }
  function f() {
    return Ad().defined(i).curve(o).context(a);
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
class Pd {
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
function Bw(e) {
  return new Pd(e, !0);
}
function Lw(e) {
  return new Pd(e, !1);
}
const ic = {
  draw(e, t) {
    const r = vt(t / Ji);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, yo);
  }
}, Rw = {
  draw(e, t) {
    const r = vt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, $d = vt(1 / 3), Fw = $d * 2, zw = {
  draw(e, t) {
    const r = vt(t / Fw), n = r * $d;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Ww = {
  draw(e, t) {
    const r = vt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Uw = 0.8908130915292852, jd = Zi(Ji / 10) / Zi(7 * Ji / 10), Kw = Zi(yo / 10) * jd, qw = -xd(yo / 10) * jd, Hw = {
  draw(e, t) {
    const r = vt(t * Uw), n = Kw * r, i = qw * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = yo * a / 5, s = xd(o), u = Zi(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * i, u * n + s * i);
    }
    e.closePath();
  }
}, Ho = vt(3), Gw = {
  draw(e, t) {
    const r = -vt(t / (Ho * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ho * r, -r), e.lineTo(Ho * r, -r), e.closePath();
  }
}, Je = -0.5, Qe = vt(3) / 2, $s = 1 / vt(12), Vw = ($s / 2 + 1) * 3, Xw = {
  draw(e, t) {
    const r = vt(t / Vw), n = r / 2, i = r * $s, a = n, o = r * $s + r, s = -a, u = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, u), e.lineTo(Je * n - Qe * i, Qe * n + Je * i), e.lineTo(Je * a - Qe * o, Qe * a + Je * o), e.lineTo(Je * s - Qe * u, Qe * s + Je * u), e.lineTo(Je * n + Qe * i, Je * i - Qe * n), e.lineTo(Je * a + Qe * o, Je * o - Qe * a), e.lineTo(Je * s + Qe * u, Je * u - Qe * s), e.closePath();
  }
};
function Yw(e, t) {
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
function Td(e) {
  this._context = e;
}
Td.prototype = {
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
function Zw(e) {
  return new Td(e);
}
function Ed(e) {
  this._context = e;
}
Ed.prototype = {
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
function Jw(e) {
  return new Ed(e);
}
function Md(e) {
  this._context = e;
}
Md.prototype = {
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
function Qw(e) {
  return new Md(e);
}
function Cd(e) {
  this._context = e;
}
Cd.prototype = {
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
function e_(e) {
  return new Cd(e);
}
function yl(e) {
  return e < 0 ? -1 : 1;
}
function ml(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (yl(a) + yl(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function gl(e, t) {
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
        Go(this, this._t0, gl(this, this._t0));
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
          this._point = 3, Go(this, gl(this, r = ml(this, e, t)), r);
          break;
        default:
          Go(this, this._t0, r = ml(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function kd(e) {
  this._context = new Nd(e);
}
(kd.prototype = Object.create(ta.prototype)).point = function(e, t) {
  ta.prototype.point.call(this, t, e);
};
function Nd(e) {
  this._context = e;
}
Nd.prototype = {
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
function t_(e) {
  return new ta(e);
}
function r_(e) {
  return new kd(e);
}
function Dd(e) {
  this._context = e;
}
Dd.prototype = {
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
        for (var n = bl(e), i = bl(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function bl(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function n_(e) {
  return new Dd(e);
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
function i_(e) {
  return new go(e, 0.5);
}
function a_(e) {
  return new go(e, 0);
}
function o_(e) {
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
function s_(e, t) {
  return e[t];
}
function u_(e) {
  const t = [];
  return t.key = e, t;
}
function c_() {
  var e = se([]), t = js, r = Ir, n = s_;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), u_), s, u = o.length, c = -1, f;
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
function l_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ir(e, t);
  }
}
function f_(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Ir(e, t);
  }
}
function h_(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, u = 0, c = 0; s < o; ++s) {
        for (var f = e[t[s]], l = f[n][1] || 0, h = f[n - 1][1] || 0, p = (l - h) / 2, v = 0; v < s; ++v) {
          var d = e[t[v]], y = d[n][1] || 0, g = d[n - 1][1] || 0;
          p += y - g;
        }
        u += l, c += p * l;
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
var p_ = ["type", "size", "sizeType"];
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
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xl(Object(r), !0).forEach(function(n) {
      d_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d_(e, t, r) {
  return t = v_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v_(e) {
  var t = y_(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function y_(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m_(e, t) {
  if (e == null) return {};
  var r = g_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function g_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Id = {
  symbolCircle: ic,
  symbolCross: Rw,
  symbolDiamond: zw,
  symbolSquare: Ww,
  symbolStar: Hw,
  symbolTriangle: Gw,
  symbolWye: Xw
}, b_ = Math.PI / 180, x_ = function(t) {
  var r = "symbol".concat(vo(t));
  return Id[r] || ic;
}, w_ = function(t, r, n) {
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
      var i = 18 * b_;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, __ = function(t, r) {
  Id["symbol".concat(vo(t))] = r;
}, bo = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, u = m_(t, p_), c = wl(wl({}, u), {}, {
    type: n,
    size: a,
    sizeType: s
  }), f = function() {
    var y = x_(n), g = Yw().type(y).size(w_(a, s, n));
    return g();
  }, l = c.className, h = c.cx, p = c.cy, v = Q(c, !0);
  return h === +h && p === +p && a === +a ? /* @__PURE__ */ A.createElement("path", Ts({}, v, {
    className: ee("recharts-symbols", l),
    transform: "translate(".concat(h, ", ").concat(p, ")"),
    d: f()
  })) : null;
};
bo.registerSymbol = __;
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
function _l(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function O_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _l(Object(r), !0).forEach(function(n) {
      Wn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _l(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ld(n.key), n);
  }
}
function P_(e, t, r) {
  return t && A_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $_(e, t, r) {
  return t = ra(t), j_(e, Bd() ? Reflect.construct(t, r || [], ra(e).constructor) : t.apply(e, r));
}
function j_(e, t) {
  if (t && (Br(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T_(e);
}
function T_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bd() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bd = function() {
    return !!e;
  })();
}
function ra(e) {
  return ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ra(e);
}
function E_(e, t) {
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
  return t = Ld(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ld(e) {
  var t = M_(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function M_(e, t) {
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
    return S_(this, t), $_(this, t, arguments);
  }
  return E_(t, e), P_(t, [{
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
          return /* @__PURE__ */ A.createElement("line", {
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
          return /* @__PURE__ */ A.createElement("path", {
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
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(et / 8, "h").concat(et, "v").concat(et * 3 / 4, "h").concat(-et, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(n.legendIcon)) {
          var c = O_({}, n);
          return delete c.legendIcon, /* @__PURE__ */ A.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ A.createElement(bo, {
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
      return a.map(function(p, v) {
        var d = p.formatter || u, y = ee(Wn(Wn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var g = Z(p.value) ? null : p.value;
        Et(
          !Z(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = p.inactive ? c : p.color;
        return /* @__PURE__ */ A.createElement("li", Es({
          className: y,
          style: l,
          key: "legend-item-".concat(v)
        }, Fn(n.props, p, v)), /* @__PURE__ */ A.createElement(ws, {
          width: o,
          height: o,
          viewBox: f,
          style: h
        }, n.renderIcon(p)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, d ? d(g, p, v) : g));
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
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(It);
Wn(ac, "displayName", "Legend");
Wn(ac, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var C_ = to;
function k_() {
  this.__data__ = new C_(), this.size = 0;
}
var N_ = k_;
function D_(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var I_ = D_;
function B_(e) {
  return this.__data__.get(e);
}
var L_ = B_;
function R_(e) {
  return this.__data__.has(e);
}
var F_ = R_, z_ = to, W_ = Gu, U_ = Vu, K_ = 200;
function q_(e, t) {
  var r = this.__data__;
  if (r instanceof z_) {
    var n = r.__data__;
    if (!W_ || n.length < K_ - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new U_(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var H_ = q_, G_ = to, V_ = N_, X_ = I_, Y_ = L_, Z_ = F_, J_ = H_;
function pn(e) {
  var t = this.__data__ = new G_(e);
  this.size = t.size;
}
pn.prototype.clear = V_;
pn.prototype.delete = X_;
pn.prototype.get = Y_;
pn.prototype.has = Z_;
pn.prototype.set = J_;
var Rd = pn, Q_ = "__lodash_hash_undefined__";
function eO(e) {
  return this.__data__.set(e, Q_), this;
}
var tO = eO;
function rO(e) {
  return this.__data__.has(e);
}
var nO = rO, iO = Vu, aO = tO, oO = nO;
function na(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new iO(); ++t < r; )
    this.add(e[t]);
}
na.prototype.add = na.prototype.push = aO;
na.prototype.has = oO;
var Fd = na;
function sO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var zd = sO;
function uO(e, t) {
  return e.has(t);
}
var Wd = uO, cO = Fd, lO = zd, fO = Wd, hO = 1, pO = 2;
function dO(e, t, r, n, i, a) {
  var o = r & hO, s = e.length, u = t.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var l = -1, h = !0, p = r & pO ? new cO() : void 0;
  for (a.set(e, t), a.set(t, e); ++l < s; ) {
    var v = e[l], d = t[l];
    if (n)
      var y = o ? n(d, v, l, t, e, a) : n(v, d, l, e, t, a);
    if (y !== void 0) {
      if (y)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!lO(t, function(g, w) {
        if (!fO(p, w) && (v === g || i(v, g, r, n, a)))
          return p.push(w);
      })) {
        h = !1;
        break;
      }
    } else if (!(v === d || i(v, d, r, n, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
var Ud = dO, vO = Ot, yO = vO.Uint8Array, mO = yO;
function gO(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var bO = gO;
function xO(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var oc = xO, Ol = _i, Sl = mO, wO = Hu, _O = Ud, OO = bO, SO = oc, AO = 1, PO = 2, $O = "[object Boolean]", jO = "[object Date]", TO = "[object Error]", EO = "[object Map]", MO = "[object Number]", CO = "[object RegExp]", kO = "[object Set]", NO = "[object String]", DO = "[object Symbol]", IO = "[object ArrayBuffer]", BO = "[object DataView]", Al = Ol ? Ol.prototype : void 0, Vo = Al ? Al.valueOf : void 0;
function LO(e, t, r, n, i, a, o) {
  switch (r) {
    case BO:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case IO:
      return !(e.byteLength != t.byteLength || !a(new Sl(e), new Sl(t)));
    case $O:
    case jO:
    case MO:
      return wO(+e, +t);
    case TO:
      return e.name == t.name && e.message == t.message;
    case CO:
    case NO:
      return e == t + "";
    case EO:
      var s = OO;
    case kO:
      var u = n & AO;
      if (s || (s = SO), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= PO, o.set(e, t);
      var f = _O(s(e), s(t), n, i, a, o);
      return o.delete(e), f;
    case DO:
      if (Vo)
        return Vo.call(e) == Vo.call(t);
  }
  return !1;
}
var RO = LO;
function FO(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Kd = FO, zO = Kd, WO = qe;
function UO(e, t, r) {
  var n = t(e);
  return WO(e) ? n : zO(n, r(e));
}
var KO = UO;
function qO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var HO = qO;
function GO() {
  return [];
}
var VO = GO, XO = HO, YO = VO, ZO = Object.prototype, JO = ZO.propertyIsEnumerable, Pl = Object.getOwnPropertySymbols, QO = Pl ? function(e) {
  return e == null ? [] : (e = Object(e), XO(Pl(e), function(t) {
    return JO.call(e, t);
  }));
} : YO, e1 = QO;
function t1(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var r1 = t1, n1 = Lt, i1 = Rt, a1 = "[object Arguments]";
function o1(e) {
  return i1(e) && n1(e) == a1;
}
var s1 = o1, $l = s1, u1 = Rt, qd = Object.prototype, c1 = qd.hasOwnProperty, l1 = qd.propertyIsEnumerable, f1 = $l(/* @__PURE__ */ function() {
  return arguments;
}()) ? $l : function(e) {
  return u1(e) && c1.call(e, "callee") && !l1.call(e, "callee");
}, sc = f1, ia = { exports: {} };
function h1() {
  return !1;
}
var p1 = h1;
ia.exports;
(function(e, t) {
  var r = Ot, n = p1, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
  e.exports = c;
})(ia, ia.exports);
var Hd = ia.exports, d1 = 9007199254740991, v1 = /^(?:0|[1-9]\d*)$/;
function y1(e, t) {
  var r = typeof e;
  return t = t ?? d1, !!t && (r == "number" || r != "symbol" && v1.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var uc = y1, m1 = 9007199254740991;
function g1(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= m1;
}
var cc = g1, b1 = Lt, x1 = cc, w1 = Rt, _1 = "[object Arguments]", O1 = "[object Array]", S1 = "[object Boolean]", A1 = "[object Date]", P1 = "[object Error]", $1 = "[object Function]", j1 = "[object Map]", T1 = "[object Number]", E1 = "[object Object]", M1 = "[object RegExp]", C1 = "[object Set]", k1 = "[object String]", N1 = "[object WeakMap]", D1 = "[object ArrayBuffer]", I1 = "[object DataView]", B1 = "[object Float32Array]", L1 = "[object Float64Array]", R1 = "[object Int8Array]", F1 = "[object Int16Array]", z1 = "[object Int32Array]", W1 = "[object Uint8Array]", U1 = "[object Uint8ClampedArray]", K1 = "[object Uint16Array]", q1 = "[object Uint32Array]", fe = {};
fe[B1] = fe[L1] = fe[R1] = fe[F1] = fe[z1] = fe[W1] = fe[U1] = fe[K1] = fe[q1] = !0;
fe[_1] = fe[O1] = fe[D1] = fe[S1] = fe[I1] = fe[A1] = fe[P1] = fe[$1] = fe[j1] = fe[T1] = fe[E1] = fe[M1] = fe[C1] = fe[k1] = fe[N1] = !1;
function H1(e) {
  return w1(e) && x1(e.length) && !!fe[b1(e)];
}
var G1 = H1;
function V1(e) {
  return function(t) {
    return e(t);
  };
}
var Gd = V1, aa = { exports: {} };
aa.exports;
(function(e, t) {
  var r = td, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(aa, aa.exports);
var X1 = aa.exports, Y1 = G1, Z1 = Gd, jl = X1, Tl = jl && jl.isTypedArray, J1 = Tl ? Z1(Tl) : Y1, Vd = J1, Q1 = r1, eS = sc, tS = qe, rS = Hd, nS = uc, iS = Vd, aS = Object.prototype, oS = aS.hasOwnProperty;
function sS(e, t) {
  var r = tS(e), n = !r && eS(e), i = !r && !n && rS(e), a = !r && !n && !i && iS(e), o = r || n || i || a, s = o ? Q1(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || oS.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    nS(c, u))) && s.push(c);
  return s;
}
var uS = sS, cS = Object.prototype;
function lS(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || cS;
  return e === r;
}
var fS = lS;
function hS(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Xd = hS, pS = Xd, dS = pS(Object.keys, Object), vS = dS, yS = fS, mS = vS, gS = Object.prototype, bS = gS.hasOwnProperty;
function xS(e) {
  if (!yS(e))
    return mS(e);
  var t = [];
  for (var r in Object(e))
    bS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var wS = xS, _S = qu, OS = cc;
function SS(e) {
  return e != null && OS(e.length) && !_S(e);
}
var Si = SS, AS = uS, PS = wS, $S = Si;
function jS(e) {
  return $S(e) ? AS(e) : PS(e);
}
var xo = jS, TS = KO, ES = e1, MS = xo;
function CS(e) {
  return TS(e, MS, ES);
}
var kS = CS, El = kS, NS = 1, DS = Object.prototype, IS = DS.hasOwnProperty;
function BS(e, t, r, n, i, a) {
  var o = r & NS, s = El(e), u = s.length, c = El(t), f = c.length;
  if (u != f && !o)
    return !1;
  for (var l = u; l--; ) {
    var h = s[l];
    if (!(o ? h in t : IS.call(t, h)))
      return !1;
  }
  var p = a.get(e), v = a.get(t);
  if (p && v)
    return p == t && v == e;
  var d = !0;
  a.set(e, t), a.set(t, e);
  for (var y = o; ++l < u; ) {
    h = s[l];
    var g = e[h], w = t[h];
    if (n)
      var b = o ? n(w, g, h, t, e, a) : n(g, w, h, e, t, a);
    if (!(b === void 0 ? g === w || i(g, w, r, n, a) : b)) {
      d = !1;
      break;
    }
    y || (y = h == "constructor");
  }
  if (d && !y) {
    var _ = e.constructor, m = t.constructor;
    _ != m && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (d = !1);
  }
  return a.delete(e), a.delete(t), d;
}
var LS = BS, RS = xr, FS = Ot, zS = RS(FS, "DataView"), WS = zS, US = xr, KS = Ot, qS = US(KS, "Promise"), HS = qS, GS = xr, VS = Ot, XS = GS(VS, "Set"), Yd = XS, YS = xr, ZS = Ot, JS = YS(ZS, "WeakMap"), QS = JS, Cs = WS, ks = Gu, Ns = HS, Ds = Yd, Is = QS, Zd = Lt, dn = nd, Ml = "[object Map]", eA = "[object Object]", Cl = "[object Promise]", kl = "[object Set]", Nl = "[object WeakMap]", Dl = "[object DataView]", tA = dn(Cs), rA = dn(ks), nA = dn(Ns), iA = dn(Ds), aA = dn(Is), ir = Zd;
(Cs && ir(new Cs(new ArrayBuffer(1))) != Dl || ks && ir(new ks()) != Ml || Ns && ir(Ns.resolve()) != Cl || Ds && ir(new Ds()) != kl || Is && ir(new Is()) != Nl) && (ir = function(e) {
  var t = Zd(e), r = t == eA ? e.constructor : void 0, n = r ? dn(r) : "";
  if (n)
    switch (n) {
      case tA:
        return Dl;
      case rA:
        return Ml;
      case nA:
        return Cl;
      case iA:
        return kl;
      case aA:
        return Nl;
    }
  return t;
});
var oA = ir, Xo = Rd, sA = Ud, uA = RO, cA = LS, Il = oA, Bl = qe, Ll = Hd, lA = Vd, fA = 1, Rl = "[object Arguments]", Fl = "[object Array]", Di = "[object Object]", hA = Object.prototype, zl = hA.hasOwnProperty;
function pA(e, t, r, n, i, a) {
  var o = Bl(e), s = Bl(t), u = o ? Fl : Il(e), c = s ? Fl : Il(t);
  u = u == Rl ? Di : u, c = c == Rl ? Di : c;
  var f = u == Di, l = c == Di, h = u == c;
  if (h && Ll(e)) {
    if (!Ll(t))
      return !1;
    o = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new Xo()), o || lA(e) ? sA(e, t, r, n, i, a) : uA(e, t, u, r, n, i, a);
  if (!(r & fA)) {
    var p = f && zl.call(e, "__wrapped__"), v = l && zl.call(t, "__wrapped__");
    if (p || v) {
      var d = p ? e.value() : e, y = v ? t.value() : t;
      return a || (a = new Xo()), i(d, y, r, n, a);
    }
  }
  return h ? (a || (a = new Xo()), cA(e, t, r, n, i, a)) : !1;
}
var dA = pA, vA = dA, Wl = Rt;
function Jd(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Wl(e) && !Wl(t) ? e !== e && t !== t : vA(e, t, r, n, Jd, i);
}
var lc = Jd, yA = Rd, mA = lc, gA = 1, bA = 2;
function xA(e, t, r, n) {
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
      var l = new yA();
      if (n)
        var h = n(c, f, u, e, t, l);
      if (!(h === void 0 ? mA(f, c, gA | bA, n, l) : h))
        return !1;
    }
  }
  return !0;
}
var wA = xA, _A = Vt;
function OA(e) {
  return e === e && !_A(e);
}
var Qd = OA, SA = Qd, AA = xo;
function PA(e) {
  for (var t = AA(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, SA(i)];
  }
  return t;
}
var $A = PA;
function jA(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var ev = jA, TA = wA, EA = $A, MA = ev;
function CA(e) {
  var t = EA(e);
  return t.length == 1 && t[0][2] ? MA(t[0][0], t[0][1]) : function(r) {
    return r === e || TA(r, e, t);
  };
}
var kA = CA;
function NA(e, t) {
  return e != null && t in Object(e);
}
var DA = NA, IA = ud, BA = sc, LA = qe, RA = uc, FA = cc, zA = no;
function WA(e, t, r) {
  t = IA(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = zA(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && FA(i) && RA(o, i) && (LA(e) || BA(e)));
}
var UA = WA, KA = DA, qA = UA;
function HA(e, t) {
  return e != null && qA(e, t, KA);
}
var GA = HA, VA = lc, XA = cd, YA = GA, ZA = Ku, JA = Qd, QA = ev, eP = no, tP = 1, rP = 2;
function nP(e, t) {
  return ZA(e) && JA(t) ? QA(eP(e), t) : function(r) {
    var n = XA(r, e);
    return n === void 0 && n === t ? YA(r, e) : VA(t, n, tP | rP);
  };
}
var iP = nP;
function aP(e) {
  return e;
}
var vn = aP;
function oP(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var sP = oP, uP = Zu;
function cP(e) {
  return function(t) {
    return uP(t, e);
  };
}
var lP = cP, fP = sP, hP = lP, pP = Ku, dP = no;
function vP(e) {
  return pP(e) ? fP(dP(e)) : hP(e);
}
var yP = vP, mP = kA, gP = iP, bP = vn, xP = qe, wP = yP;
function _P(e) {
  return typeof e == "function" ? e : e == null ? bP : typeof e == "object" ? xP(e) ? gP(e[0], e[1]) : mP(e) : wP(e);
}
var Xt = _P;
function OP(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var tv = OP;
function SP(e) {
  return e !== e;
}
var AP = SP;
function PP(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var $P = PP, jP = tv, TP = AP, EP = $P;
function MP(e, t, r) {
  return t === t ? EP(e, t, r) : jP(e, TP, r);
}
var CP = MP, kP = CP;
function NP(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && kP(e, t, 0) > -1;
}
var DP = NP;
function IP(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var BP = IP;
function LP() {
}
var RP = LP, Yo = Yd, FP = RP, zP = oc, WP = 1 / 0, UP = Yo && 1 / zP(new Yo([, -0]))[1] == WP ? function(e) {
  return new Yo(e);
} : FP, KP = UP, qP = Fd, HP = DP, GP = BP, VP = Wd, XP = KP, YP = oc, ZP = 200;
function JP(e, t, r) {
  var n = -1, i = HP, a = e.length, o = !0, s = [], u = s;
  if (r)
    o = !1, i = GP;
  else if (a >= ZP) {
    var c = t ? null : XP(e);
    if (c)
      return YP(c);
    o = !1, i = VP, u = new qP();
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
var QP = JP, e$ = Xt, t$ = QP;
function r$(e, t) {
  return e && e.length ? t$(e, e$(t)) : [];
}
var n$ = r$;
const Ul = /* @__PURE__ */ ce(n$);
function rv(e, t, r) {
  return t === !0 ? Ul(e, r) : Z(t) ? Ul(e, t) : e;
}
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
var i$ = ["ref"];
function Kl(e, t) {
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
    t % 2 ? Kl(Object(r), !0).forEach(function(n) {
      wo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function a$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ql(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, iv(n.key), n);
  }
}
function o$(e, t, r) {
  return t && ql(e.prototype, t), r && ql(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s$(e, t, r) {
  return t = oa(t), u$(e, nv() ? Reflect.construct(t, r || [], oa(e).constructor) : t.apply(e, r));
}
function u$(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return c$(e);
}
function c$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nv = function() {
    return !!e;
  })();
}
function oa(e) {
  return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oa(e);
}
function l$(e, t) {
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
  return t = iv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iv(e) {
  var t = f$(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function f$(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function h$(e, t) {
  if (e == null) return {};
  var r = p$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function d$(e) {
  return e.value;
}
function v$(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var r = h$(t, i$);
  return /* @__PURE__ */ A.createElement(ac, r);
}
var Hl = 1, Ze = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    a$(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = s$(this, t, [].concat(i)), wo(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return l$(t, e), o$(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > Hl || Math.abs(i.height - this.lastBoundingBox.height) > Hl) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
          var p = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - p.width) / 2
          };
        } else
          l = o === "right" ? {
            right: u && u.right || 0
          } : {
            left: u && u.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var v = this.getBBoxSnapshot();
          h = {
            top: ((f || 0) - v.height) / 2
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
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, v$(a, St(St({}, this.props), {}, {
        payload: rv(f, c, d$)
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
}(It);
wo(Ze, "displayName", "Legend");
wo(Ze, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Gl = _i, y$ = sc, m$ = qe, Vl = Gl ? Gl.isConcatSpreadable : void 0;
function g$(e) {
  return m$(e) || y$(e) || !!(Vl && e && e[Vl]);
}
var b$ = g$, x$ = Kd, w$ = b$;
function av(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = w$), i || (i = []); ++a < o; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? av(s, t - 1, r, n, i) : x$(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var ov = av;
function _$(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var u = o[e ? s : ++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var O$ = _$, S$ = O$, A$ = S$(), P$ = A$, $$ = P$, j$ = xo;
function T$(e, t) {
  return e && $$(e, t, j$);
}
var sv = T$, E$ = Si;
function M$(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!E$(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var C$ = M$, k$ = sv, N$ = C$, D$ = N$(k$), fc = D$, I$ = fc, B$ = Si;
function L$(e, t) {
  var r = -1, n = B$(e) ? Array(e.length) : [];
  return I$(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var uv = L$;
function R$(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var F$ = R$, Xl = sn;
function z$(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = Xl(e), o = t !== void 0, s = t === null, u = t === t, c = Xl(t);
    if (!s && !c && !a && e > t || a && o && u && !s && !c || n && o && u || !r && u || !i)
      return 1;
    if (!n && !a && !c && e < t || c && r && i && !n && !a || s && r && i || !o && i || !u)
      return -1;
  }
  return 0;
}
var W$ = z$, U$ = W$;
function K$(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var u = U$(i[n], a[n]);
    if (u) {
      if (n >= s)
        return u;
      var c = r[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var q$ = K$, Zo = Yu, H$ = Zu, G$ = Xt, V$ = uv, X$ = F$, Y$ = Gd, Z$ = q$, J$ = vn, Q$ = qe;
function ej(e, t, r) {
  t.length ? t = Zo(t, function(a) {
    return Q$(a) ? function(o) {
      return H$(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [J$];
  var n = -1;
  t = Zo(t, Y$(G$));
  var i = V$(e, function(a, o, s) {
    var u = Zo(t, function(c) {
      return c(a);
    });
    return { criteria: u, index: ++n, value: a };
  });
  return X$(i, function(a, o) {
    return Z$(a, o, r);
  });
}
var tj = ej;
function rj(e, t, r) {
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
var nj = rj, ij = nj, Yl = Math.max;
function aj(e, t, r) {
  return t = Yl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Yl(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), ij(e, this, s);
  };
}
var oj = aj;
function sj(e) {
  return function() {
    return e;
  };
}
var uj = sj, cj = xr, lj = function() {
  try {
    var e = cj(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cv = lj, fj = uj, Zl = cv, hj = vn, pj = Zl ? function(e, t) {
  return Zl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fj(t),
    writable: !0
  });
} : hj, dj = pj, vj = 800, yj = 16, mj = Date.now;
function gj(e) {
  var t = 0, r = 0;
  return function() {
    var n = mj(), i = yj - (n - r);
    if (r = n, i > 0) {
      if (++t >= vj)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var bj = gj, xj = dj, wj = bj, _j = wj(xj), Oj = _j, Sj = vn, Aj = oj, Pj = Oj;
function $j(e, t) {
  return Pj(Aj(e, t, Sj), e + "");
}
var jj = $j, Tj = Hu, Ej = Si, Mj = uc, Cj = Vt;
function kj(e, t, r) {
  if (!Cj(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Ej(r) && Mj(t, r.length) : n == "string" && t in r) ? Tj(r[t], e) : !1;
}
var _o = kj, Nj = ov, Dj = tj, Ij = jj, Jl = _o, Bj = Ij(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Jl(e, t[0], t[1]) ? t = [] : r > 2 && Jl(t[0], t[1], t[2]) && (t = [t[0]]), Dj(e, Nj(t, 1), []);
}), Lj = Bj;
const hc = /* @__PURE__ */ ce(Lj);
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
function Rj(e, t) {
  return Uj(e) || Wj(e, t) || zj(e, t) || Fj();
}
function Fj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zj(e, t) {
  if (e) {
    if (typeof e == "string") return Ql(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ql(e, t);
  }
}
function Ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Wj(e, t) {
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
function Uj(e) {
  if (Array.isArray(e)) return e;
}
function ef(e, t) {
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
    t % 2 ? ef(Object(r), !0).forEach(function(n) {
      Kj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kj(e, t, r) {
  return t = qj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qj(e) {
  var t = Hj(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function Hj(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gj(e) {
  return Array.isArray(e) && Ae(e[0]) && Ae(e[1]) ? e.join(" ~ ") : e;
}
var Vj = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, f = t.payload, l = t.formatter, h = t.itemSorter, p = t.wrapperClassName, v = t.labelClassName, d = t.label, y = t.labelFormatter, g = t.accessibilityLayer, w = g === void 0 ? !1 : g, b = function() {
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
        }, s), I = k.formatter || l || Gj, R = k.value, F = k.name, q = R, G = F;
        if (I && q != null && G != null) {
          var W = I(R, F, k, C, f);
          if (Array.isArray(W)) {
            var V = Rj(W, 2);
            q = V[0], G = V[1];
          } else
            q = W;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(C),
            style: D
          }, Ae(G) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, G) : null, Ae(G) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, q), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, k.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: T
      }, N);
    }
    return null;
  }, _ = Jo({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = Jo({
    margin: 0
  }, c), x = !X(d), O = x ? d : "", P = ee("recharts-default-tooltip", p), $ = ee("recharts-tooltip-label", v);
  x && y && f !== void 0 && f !== null && (O = y(d, f));
  var M = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", Ls({
    className: P,
    style: _
  }, M), /* @__PURE__ */ A.createElement("p", {
    className: $,
    style: m
  }, /* @__PURE__ */ A.isValidElement(O) ? O : "".concat(O)), b());
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
  return t = Xj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xj(e) {
  var t = Yj(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function Yj(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var On = "recharts-tooltip-wrapper", Zj = {
  visibility: "hidden"
};
function Jj(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return ee(On, Ii(Ii(Ii(Ii({}, "".concat(On, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat(On, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat(On, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat(On, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function tf(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, u = e.viewBox, c = e.viewBoxDimension;
  if (a && L(a[n]))
    return a[n];
  var f = r[n] - s - i, l = r[n] + i;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var h = f, p = u[n];
    return h < p ? Math.max(l, u[n]) : Math.max(f, u[n]);
  }
  var v = l + s, d = u[n] + c;
  return v > d ? Math.max(f, u[n]) : Math.max(l, u[n]);
}
function Qj(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function eT(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, u = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = tf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), l = tf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = Qj({
    translateX: f,
    translateY: l,
    useTranslate3d: s
  })) : c = Zj, {
    cssProperties: c,
    cssClasses: Jj({
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
function rf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rf(Object(r), !0).forEach(function(n) {
      Fs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fv(n.key), n);
  }
}
function nT(e, t, r) {
  return t && rT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iT(e, t, r) {
  return t = sa(t), aT(e, lv() ? Reflect.construct(t, r || [], sa(e).constructor) : t.apply(e, r));
}
function aT(e, t) {
  if (t && (Rr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oT(e);
}
function oT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lv = function() {
    return !!e;
  })();
}
function sa(e) {
  return sa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sa(e);
}
function sT(e, t) {
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
  return t = fv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fv(e) {
  var t = uT(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function uT(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var af = 1, cT = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    tT(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = iT(this, t, [].concat(i)), Fs(r, "state", {
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
  return sT(t, e), nT(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > af || Math.abs(n.height - this.state.lastBoundingBox.height) > af) && this.setState({
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
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, u = i.animationEasing, c = i.children, f = i.coordinate, l = i.hasPayload, h = i.isAnimationActive, p = i.offset, v = i.position, d = i.reverseDirection, y = i.useTranslate3d, g = i.viewBox, w = i.wrapperStyle, b = eT({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: p,
        position: v,
        reverseDirection: d,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: y,
        viewBox: g
      }), _ = b.cssClasses, m = b.cssProperties, x = nf(nf({
        transition: h && a ? "transform ".concat(s, "ms ").concat(u) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: _,
          style: x,
          ref: function(P) {
            n.wrapperNode = P;
          }
        }, c)
      );
    }
  }]);
}(It), lT = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wr = {
  isSsr: lT()
};
function Fr(e) {
  "@babel/helpers - typeof";
  return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fr(e);
}
function of(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? of(Object(r), !0).forEach(function(n) {
      pc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : of(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pv(n.key), n);
  }
}
function pT(e, t, r) {
  return t && hT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dT(e, t, r) {
  return t = ua(t), vT(e, hv() ? Reflect.construct(t, r || [], ua(e).constructor) : t.apply(e, r));
}
function vT(e, t) {
  if (t && (Fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yT(e);
}
function yT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hv = function() {
    return !!e;
  })();
}
function ua(e) {
  return ua = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ua(e);
}
function mT(e, t) {
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
  return t = pv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pv(e) {
  var t = gT(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function gT(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function bT(e) {
  return e.dataKey;
}
function xT(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement(Vj, t);
}
var ge = /* @__PURE__ */ function(e) {
  function t() {
    return fT(this, t), dT(this, t, arguments);
  }
  return mT(t, e), pT(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, u = i.animationEasing, c = i.content, f = i.coordinate, l = i.filterNull, h = i.isAnimationActive, p = i.offset, v = i.payload, d = i.payloadUniqBy, y = i.position, g = i.reverseDirection, w = i.useTranslate3d, b = i.viewBox, _ = i.wrapperStyle, m = v ?? [];
      l && m.length && (m = rv(v.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), d, bT));
      var x = m.length > 0;
      return /* @__PURE__ */ A.createElement(cT, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: u,
        isAnimationActive: h,
        active: a,
        coordinate: f,
        hasPayload: x,
        offset: p,
        position: y,
        reverseDirection: g,
        useTranslate3d: w,
        viewBox: b,
        wrapperStyle: _
      }, xT(c, sf(sf({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
}(It);
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
var wT = Ot, _T = function() {
  return wT.Date.now();
}, OT = _T, ST = /\s/;
function AT(e) {
  for (var t = e.length; t-- && ST.test(e.charAt(t)); )
    ;
  return t;
}
var PT = AT, $T = PT, jT = /^\s+/;
function TT(e) {
  return e && e.slice(0, $T(e) + 1).replace(jT, "");
}
var ET = TT, MT = ET, uf = Vt, CT = sn, cf = NaN, kT = /^[-+]0x[0-9a-f]+$/i, NT = /^0b[01]+$/i, DT = /^0o[0-7]+$/i, IT = parseInt;
function BT(e) {
  if (typeof e == "number")
    return e;
  if (CT(e))
    return cf;
  if (uf(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = uf(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = MT(e);
  var r = NT.test(e);
  return r || DT.test(e) ? IT(e.slice(2), r ? 2 : 8) : kT.test(e) ? cf : +e;
}
var dv = BT, LT = Vt, Qo = OT, lf = dv, RT = "Expected a function", FT = Math.max, zT = Math.min;
function WT(e, t, r) {
  var n, i, a, o, s, u, c = 0, f = !1, l = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(RT);
  t = lf(t) || 0, LT(r) && (f = !!r.leading, l = "maxWait" in r, a = l ? FT(lf(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function p(x) {
    var O = n, P = i;
    return n = i = void 0, c = x, o = e.apply(P, O), o;
  }
  function v(x) {
    return c = x, s = setTimeout(g, t), f ? p(x) : o;
  }
  function d(x) {
    var O = x - u, P = x - c, $ = t - O;
    return l ? zT($, a - P) : $;
  }
  function y(x) {
    var O = x - u, P = x - c;
    return u === void 0 || O >= t || O < 0 || l && P >= a;
  }
  function g() {
    var x = Qo();
    if (y(x))
      return w(x);
    s = setTimeout(g, d(x));
  }
  function w(x) {
    return s = void 0, h && n ? p(x) : (n = i = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), c = 0, n = u = i = s = void 0;
  }
  function _() {
    return s === void 0 ? o : w(Qo());
  }
  function m() {
    var x = Qo(), O = y(x);
    if (n = arguments, i = this, u = x, O) {
      if (s === void 0)
        return v(u);
      if (l)
        return clearTimeout(s), s = setTimeout(g, t), p(u);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return m.cancel = b, m.flush = _, m;
}
var UT = WT, KT = UT, qT = Vt, HT = "Expected a function";
function GT(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(HT);
  return qT(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), KT(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var VT = GT;
const vv = /* @__PURE__ */ ce(VT);
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function ff(e, t) {
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
    t % 2 ? ff(Object(r), !0).forEach(function(n) {
      XT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ff(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XT(e, t, r) {
  return t = YT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YT(e) {
  var t = ZT(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function ZT(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JT(e, t) {
  return rE(e) || tE(e, t) || eE(e, t) || QT();
}
function QT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eE(e, t) {
  if (e) {
    if (typeof e == "string") return hf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hf(e, t);
  }
}
function hf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tE(e, t) {
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
function rE(e) {
  if (Array.isArray(e)) return e;
}
var dt = /* @__PURE__ */ Vp(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, h = e.maxHeight, p = e.children, v = e.debounce, d = v === void 0 ? 0 : v, y = e.id, g = e.className, w = e.onResize, b = e.style, _ = b === void 0 ? {} : b, m = Vi(null), x = Vi();
  x.current = w, Cm(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var O = Ut({
    containerWidth: i.width,
    containerHeight: i.height
  }), P = JT(O, 2), $ = P[0], M = P[1], j = km(function(N, k) {
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
      j(W, V), (q = x.current) === null || q === void 0 || q.call(x, W, V);
    };
    d > 0 && (N = vv(N, d, {
      trailing: !0,
      leading: !1
    }));
    var k = new ResizeObserver(N), C = m.current.getBoundingClientRect(), D = C.width, I = C.height;
    return j(D, I), k.observe(m.current), function() {
      k.disconnect();
    };
  }, [j, d]);
  var T = Xp(function() {
    var N = $.containerWidth, k = $.containerHeight;
    if (N < 0 || k < 0)
      return null;
    Et(or(o) || or(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Et(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var C = or(o) ? N : o, D = or(u) ? k : u;
    r && r > 0 && (C ? D = C / r : D && (C = D * r), h && D > h && (D = h)), Et(C > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, C, D, o, u, f, l, r);
    var I = !Array.isArray(p) && Tt(p.type).endsWith("Chart");
    return A.Children.map(p, function(R) {
      return /* @__PURE__ */ A.isValidElement(R) ? /* @__PURE__ */ Se(R, Bi({
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
  }, [r, p, u, h, l, f, $, o]);
  return /* @__PURE__ */ A.createElement("div", {
    id: y ? "".concat(y) : void 0,
    className: ee("recharts-responsive-container", g),
    style: Bi(Bi({}, _), {}, {
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
function pf(e, t) {
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
    t % 2 ? pf(Object(r), !0).forEach(function(n) {
      nE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nE(e, t, r) {
  return t = iE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iE(e) {
  var t = aE(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function aE(e, t) {
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
}, oE = 2e3, sE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, df = "recharts_measurement_span";
function uE(e) {
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
  var n = uE(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Pr.widthCache[i])
    return Pr.widthCache[i];
  try {
    var a = document.getElementById(df);
    a || (a = document.createElement("span"), a.setAttribute("id", df), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Ws(Ws({}, sE), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return Pr.widthCache[i] = u, ++Pr.cacheCount > oE && (Pr.cacheCount = 0, Pr.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, cE = function(t) {
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
  return pE(e) || hE(e, t) || fE(e, t) || lE();
}
function lE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fE(e, t) {
  if (e) {
    if (typeof e == "string") return vf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vf(e, t);
  }
}
function vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hE(e, t) {
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
function pE(e) {
  if (Array.isArray(e)) return e;
}
function dE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, yE(n.key), n);
  }
}
function vE(e, t, r) {
  return t && yf(e.prototype, t), r && yf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yE(e) {
  var t = mE(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function mE(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var mf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, gf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, gE = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, bE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, yv = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, xE = Object.keys(yv), Er = "NaN";
function wE(e, t) {
  return e * yv[t];
}
var Li = /* @__PURE__ */ function() {
  function e(t, r) {
    dE(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !gE.test(r) && (this.num = NaN, this.unit = ""), xE.includes(r) && (this.num = wE(t, r), this.unit = "px");
  }
  return vE(e, [{
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
      var n, i = (n = bE.exec(r)) !== null && n !== void 0 ? n : [], a = ca(i, 3), o = a[1], s = a[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function mv(e) {
  if (e.includes(Er))
    return Er;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = mf.exec(t)) !== null && r !== void 0 ? r : [], i = ca(n, 4), a = i[1], o = i[2], s = i[3], u = Li.parse(a ?? ""), c = Li.parse(s ?? ""), f = o === "*" ? u.multiply(c) : u.divide(c);
    if (f.isNaN())
      return Er;
    t = t.replace(mf, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, h = (l = gf.exec(t)) !== null && l !== void 0 ? l : [], p = ca(h, 4), v = p[1], d = p[2], y = p[3], g = Li.parse(v ?? ""), w = Li.parse(y ?? ""), b = d === "+" ? g.add(w) : g.subtract(w);
    if (b.isNaN())
      return Er;
    t = t.replace(gf, b.toString());
  }
  return t;
}
var bf = /\(([^()]*)\)/;
function _E(e) {
  for (var t = e; t.includes("("); ) {
    var r = bf.exec(t), n = ca(r, 2), i = n[1];
    t = t.replace(bf, mv(i));
  }
  return t;
}
function OE(e) {
  var t = e.replace(/\s+/g, "");
  return t = _E(t), t = mv(t), t;
}
function SE(e) {
  try {
    return OE(e);
  } catch {
    return Er;
  }
}
function es(e) {
  var t = SE(e.slice(5, -1));
  return t === Er ? "" : t;
}
var AE = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], PE = ["dx", "dy", "angle", "className", "breakAll"];
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
function xf(e, t) {
  if (e == null) return {};
  var r = $E(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $E(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wf(e, t) {
  return ME(e) || EE(e, t) || TE(e, t) || jE();
}
function jE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TE(e, t) {
  if (e) {
    if (typeof e == "string") return _f(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _f(e, t);
  }
}
function _f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function EE(e, t) {
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
function ME(e) {
  if (Array.isArray(e)) return e;
}
var gv = /[ \f\n\r\t\v\u2028\u2029]+/, bv = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    X(r) || (n ? a = r.toString().split("") : a = r.toString().split(gv));
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
}, CE = function(t, r, n, i, a) {
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
  }, p = h(r), v = function(C) {
    return C.reduce(function(D, I) {
      return D.width > I.width ? D : I;
    });
  };
  if (!f)
    return p;
  for (var d = "…", y = function(C) {
    var D = l.slice(0, C), I = bv({
      breakAll: c,
      style: u,
      children: D + d
    }).wordsWithComputedWidth, R = h(I), F = R.length > o || v(R).width > Number(i);
    return [F, R];
  }, g = 0, w = l.length - 1, b = 0, _; g <= w && b <= l.length - 1; ) {
    var m = Math.floor((g + w) / 2), x = m - 1, O = y(x), P = wf(O, 2), $ = P[0], M = P[1], j = y(m), T = wf(j, 1), N = T[0];
    if (!$ && !N && (g = m + 1), $ && N && (w = m - 1), !$ && N) {
      _ = M;
      break;
    }
    b++;
  }
  return _ || p;
}, Of = function(t) {
  var r = X(t) ? [] : t.toString().split(gv);
  return [{
    words: r
  }];
}, kE = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !wr.isSsr) {
    var u, c, f = bv({
      breakAll: o,
      children: i,
      style: a
    });
    if (f) {
      var l = f.wordsWithComputedWidth, h = f.spaceWidth;
      u = l, c = h;
    } else
      return Of(i);
    return CE({
      breakAll: o,
      children: i,
      maxLines: s,
      style: a
    }, u, c, r, n);
  }
  return Of(i);
}, Sf = "#808080", la = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, f = t.scaleToFit, l = f === void 0 ? !1 : f, h = t.textAnchor, p = h === void 0 ? "start" : h, v = t.verticalAnchor, d = v === void 0 ? "end" : v, y = t.fill, g = y === void 0 ? Sf : y, w = xf(t, AE), b = Xp(function() {
    return kE({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: l,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, l, w.style, w.width]), _ = w.dx, m = w.dy, x = w.angle, O = w.className, P = w.breakAll, $ = xf(w, PE);
  if (!Ae(n) || !Ae(a))
    return null;
  var M = n + (L(_) ? _ : 0), j = a + (L(m) ? m : 0), T;
  switch (d) {
    case "start":
      T = es("calc(".concat(c, ")"));
      break;
    case "middle":
      T = es("calc(".concat((b.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      T = es("calc(".concat(b.length - 1, " * -").concat(s, ")"));
      break;
  }
  var N = [];
  if (l) {
    var k = b[0].width, C = w.width;
    N.push("scale(".concat((L(C) ? C / k : 1) / k, ")"));
  }
  return x && N.push("rotate(".concat(x, ", ").concat(M, ", ").concat(j, ")")), N.length && ($.transform = N.join(" ")), /* @__PURE__ */ A.createElement("text", Us({}, Q($, !0), {
    x: M,
    y: j,
    className: ee("recharts-text", O),
    textAnchor: p,
    fill: g.includes("url") ? Sf : g
  }), b.map(function(D, I) {
    var R = D.words.join(P ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ A.createElement("tspan", {
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
function NE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function dc(e) {
  let t, r, n;
  e.length !== 2 ? (t = Gt, r = (s, u) => Gt(e(s), u), n = (s, u) => e(s) - u) : (t = e === Gt || e === NE ? e : DE, r = e, n = e);
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
function DE() {
  return 0;
}
function xv(e) {
  return e === null ? NaN : +e;
}
function* IE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const BE = dc(Gt), Pi = BE.right;
dc(xv).center;
class Af extends Map {
  constructor(t, r = FE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Pf(this, t));
  }
  has(t) {
    return super.has(Pf(this, t));
  }
  set(t, r) {
    return super.set(LE(this, t), r);
  }
  delete(t) {
    return super.delete(RE(this, t));
  }
}
function Pf({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function LE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function RE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function FE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function zE(e = Gt) {
  if (e === Gt) return wv;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function wv(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const WE = Math.sqrt(50), UE = Math.sqrt(10), KE = Math.sqrt(2);
function fa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= WE ? 10 : a >= UE ? 5 : a >= KE ? 2 : 1;
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
function $f(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function jf(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function _v(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? wv : zE(i); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, f = Math.log(u), l = 0.5 * Math.exp(2 * f / 3), h = 0.5 * Math.sqrt(f * l * (u - l) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * l / u + h)), v = Math.min(n, Math.floor(t + (u - c) * l / u + h));
      _v(e, t, p, v, i);
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
function qE(e, t, r) {
  if (e = Float64Array.from(IE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return jf(e);
    if (t >= 1) return $f(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = $f(_v(e, a).subarray(0, a + 1)), s = jf(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function HE(e, t, r = xv) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function GE(e, t, r) {
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
function Ft(e, t) {
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
  var e = new Af(), t = [], r = [], n = Gs;
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
    t = [], e = new Af();
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
    var h = t().length, p = i < n, v = p ? i : n, d = p ? n : i;
    a = (d - v) / Math.max(1, h - u + c * 2), s && (a = Math.floor(a)), v += (d - v - a * (h - u)) * f, o = a * (1 - u), s && (v = Math.round(v), o = Math.round(o));
    var y = GE(h).map(function(g) {
      return v + a * g;
    });
    return r(p ? y.reverse() : y);
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
function Ov(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Ov(t());
  }, e;
}
function Nn() {
  return Ov(Vn.apply(null, arguments).paddingInner(1));
}
function yc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Sv(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function $i() {
}
var Xn = 0.7, ha = 1 / Xn, Nr = "\\s*([+-]?\\d+)\\s*", Yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", VE = /^#([0-9a-f]{3,8})$/, XE = new RegExp(`^rgb\\(${Nr},${Nr},${Nr}\\)$`), YE = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), ZE = new RegExp(`^rgba\\(${Nr},${Nr},${Nr},${Yn}\\)$`), JE = new RegExp(`^rgba\\(${bt},${bt},${bt},${Yn}\\)$`), QE = new RegExp(`^hsl\\(${Yn},${bt},${bt}\\)$`), eM = new RegExp(`^hsla\\(${Yn},${bt},${bt},${Yn}\\)$`), Tf = {
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
  hex: Ef,
  // Deprecated! Use color.formatHex.
  formatHex: Ef,
  formatHex8: tM,
  formatHsl: rM,
  formatRgb: Mf,
  toString: Mf
});
function Ef() {
  return this.rgb().formatHex();
}
function tM() {
  return this.rgb().formatHex8();
}
function rM() {
  return Av(this).formatHsl();
}
function Mf() {
  return this.rgb().formatRgb();
}
function Zn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = VE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Cf(t) : r === 3 ? new Ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ri(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ri(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = XE.exec(e)) ? new Ue(t[1], t[2], t[3], 1) : (t = YE.exec(e)) ? new Ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ZE.exec(e)) ? Ri(t[1], t[2], t[3], t[4]) : (t = JE.exec(e)) ? Ri(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = QE.exec(e)) ? Df(t[1], t[2] / 100, t[3] / 100, 1) : (t = eM.exec(e)) ? Df(t[1], t[2] / 100, t[3] / 100, t[4]) : Tf.hasOwnProperty(e) ? Cf(Tf[e]) : e === "transparent" ? new Ue(NaN, NaN, NaN, 0) : null;
}
function Cf(e) {
  return new Ue(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ri(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ue(e, t, r, n);
}
function nM(e) {
  return e instanceof $i || (e = Zn(e)), e ? (e = e.rgb(), new Ue(e.r, e.g, e.b, e.opacity)) : new Ue();
}
function Vs(e, t, r, n) {
  return arguments.length === 1 ? nM(e) : new Ue(e, t, r, n ?? 1);
}
function Ue(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
yc(Ue, Vs, Sv($i, {
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
  hex: kf,
  // Deprecated! Use color.formatHex.
  formatHex: kf,
  formatHex8: iM,
  formatRgb: Nf,
  toString: Nf
}));
function kf() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function iM() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Nf() {
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
function Df(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ht(e, t, r, n);
}
function Av(e) {
  if (e instanceof ht) return new ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof $i || (e = Zn(e)), !e) return new ht();
  if (e instanceof ht) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new ht(o, s, u, e.opacity);
}
function aM(e, t, r, n) {
  return arguments.length === 1 ? Av(e) : new ht(e, t, r, n ?? 1);
}
function ht(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
yc(ht, aM, Sv($i, {
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
    return new ht(If(this.h), Fi(this.s), Fi(this.l), pa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = pa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${If(this.h)}, ${Fi(this.s) * 100}%, ${Fi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function If(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Fi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ts(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const mc = (e) => () => e;
function oM(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function sM(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function uM(e) {
  return (e = +e) == 1 ? Pv : function(t, r) {
    return r - t ? sM(t, r, e) : mc(isNaN(t) ? r : t);
  };
}
function Pv(e, t) {
  var r = t - e;
  return r ? oM(e, r) : mc(isNaN(e) ? t : e);
}
const Bf = function e(t) {
  var r = uM(t);
  function n(i, a) {
    var o = r((i = Vs(i)).r, (a = Vs(a)).r), s = r(i.g, a.g), u = r(i.b, a.b), c = Pv(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = s(f), i.b = u(f), i.opacity = c(f), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function cM(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function lM(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function fM(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = yn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function hM(e, t) {
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
function pM(e, t) {
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
function dM(e) {
  return function() {
    return e;
  };
}
function vM(e) {
  return function(t) {
    return e(t) + "";
  };
}
function yM(e, t) {
  var r = Xs.lastIndex = rs.lastIndex = 0, n, i, a, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = Xs.exec(e)) && (i = rs.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: da(n, i) })), r = rs.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? vM(u[0].x) : dM(t) : (t = u.length, function(c) {
    for (var f = 0, l; f < t; ++f) s[(l = u[f]).i] = l.x(c);
    return s.join("");
  });
}
function yn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? mc(t) : (r === "number" ? da : r === "string" ? (n = Zn(t)) ? (t = n, Bf) : yM : t instanceof Zn ? Bf : t instanceof Date ? hM : lM(t) ? cM : Array.isArray(t) ? fM : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? pM : da)(e, t);
}
function gc(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function mM(e, t) {
  t === void 0 && (t = e, e = yn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function gM(e) {
  return function() {
    return e;
  };
}
function va(e) {
  return +e;
}
var Lf = [0, 1];
function Fe(e) {
  return e;
}
function Ys(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : gM(isNaN(t) ? NaN : 0.5);
}
function bM(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function xM(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Ys(i, n), a = r(o, a)) : (n = Ys(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function wM(e, t, r) {
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
  var e = Lf, t = Lf, r = yn, n, i, a, o = Fe, s, u, c;
  function f() {
    var h = Math.min(e.length, t.length);
    return o !== Fe && (o = bM(e[0], e[h - 1])), s = h > 2 ? wM : xM, u = c = null, l;
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
  }, function(h, p) {
    return n = h, i = p, f();
  };
}
function bc() {
  return Oo()(Fe, Fe);
}
function _M(e) {
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
function OM(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), a.push(r.substring(i -= s, i + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function SM(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var AM = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Jn(e) {
  if (!(t = AM.exec(e))) throw new Error("invalid format: " + e);
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
function PM(e) {
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
var $v;
function $M(e, t) {
  var r = ya(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - ($v = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + ya(e, Math.max(0, t + a - 1))[0];
}
function Rf(e, t) {
  var r = ya(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Ff = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: _M,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Rf(e * 100, t),
  r: Rf,
  s: $M,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function zf(e) {
  return e;
}
var Wf = Array.prototype.map, Uf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function jM(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? zf : OM(Wf.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? zf : SM(Wf.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l) {
    l = Jn(l);
    var h = l.fill, p = l.align, v = l.sign, d = l.symbol, y = l.zero, g = l.width, w = l.comma, b = l.precision, _ = l.trim, m = l.type;
    m === "n" ? (w = !0, m = "g") : Ff[m] || (b === void 0 && (b = 12), _ = !0, m = "g"), (y || h === "0" && p === "=") && (y = !0, h = "0", p = "=");
    var x = d === "$" ? r : d === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", O = d === "$" ? n : /[%p]/.test(m) ? o : "", P = Ff[m], $ = /[defgprs%]/.test(m);
    b = b === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function M(j) {
      var T = x, N = O, k, C, D;
      if (m === "c")
        N = P(j) + N, j = "";
      else {
        j = +j;
        var I = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? u : P(Math.abs(j), b), _ && (j = PM(j)), I && +j == 0 && v !== "+" && (I = !1), T = (I ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + T, N = (m === "s" ? Uf[8 + $v / 3] : "") + N + (I && v === "(" ? ")" : ""), $) {
          for (k = -1, C = j.length; ++k < C; )
            if (D = j.charCodeAt(k), 48 > D || D > 57) {
              N = (D === 46 ? i + j.slice(k + 1) : j.slice(k)) + N, j = j.slice(0, k);
              break;
            }
        }
      }
      w && !y && (j = t(j, 1 / 0));
      var R = T.length + j.length + N.length, F = R < g ? new Array(g - R + 1).join(h) : "";
      switch (w && y && (j = t(F + j, F.length ? g - N.length : 1 / 0), F = ""), p) {
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
    var p = c((l = Jn(l), l.type = "f", l)), v = Math.max(-8, Math.min(8, Math.floor(zr(h) / 3))) * 3, d = Math.pow(10, -v), y = Uf[8 + v / 3];
    return function(g) {
      return p(d * g) + y;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var zi, wc, jv;
TM({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function TM(e) {
  return zi = jM(e), wc = zi.format, jv = zi.formatPrefix, zi;
}
function EM(e) {
  return Math.max(0, -zr(Math.abs(e)));
}
function MM(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zr(t) / 3))) * 3 - zr(Math.abs(e)));
}
function CM(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, zr(t) - zr(e)) + 1;
}
function Tv(e, t, r, n) {
  var i = Hs(e, t, r), a;
  switch (n = Jn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = MM(i, o)) && (n.precision = a), jv(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = CM(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = EM(i)) && (n.precision = a - (n.type === "%") * 2);
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
    return Tv(i[0], i[i.length - 1], r ?? 10, n);
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
function Ev(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, va), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Ev(e).unknown(t);
  }, e = arguments.length ? Array.from(e, va) : [0, 1], Yt(r);
}
function Mv(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Kf(e) {
  return Math.log(e);
}
function qf(e) {
  return Math.exp(e);
}
function kM(e) {
  return -Math.log(-e);
}
function NM(e) {
  return -Math.exp(-e);
}
function DM(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function IM(e) {
  return e === 10 ? DM : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function BM(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Hf(e) {
  return (t, r) => -e(-t, r);
}
function _c(e) {
  const t = e(Kf, qf), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = BM(n), a = IM(n), r()[0] < 0 ? (i = Hf(i), a = Hf(a), e(kM, NM)) : e(Kf, qf), t;
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
    let h = i(c), p = i(f), v, d;
    const y = s == null ? 10 : +s;
    let g = [];
    if (!(n % 1) && p - h < y) {
      if (h = Math.floor(h), p = Math.ceil(p), c > 0) {
        for (; h <= p; ++h)
          for (v = 1; v < n; ++v)
            if (d = h < 0 ? v / a(-h) : v * a(h), !(d < c)) {
              if (d > f) break;
              g.push(d);
            }
      } else for (; h <= p; ++h)
        for (v = n - 1; v >= 1; --v)
          if (d = h > 0 ? v / a(-h) : v * a(h), !(d < c)) {
            if (d > f) break;
            g.push(d);
          }
      g.length * 2 < y && (g = Ks(c, f, y));
    } else
      g = Ks(h, p, Math.min(p - h, y)).map(a);
    return l ? g.reverse() : g;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = Jn(u)).precision == null && (u.trim = !0), u = wc(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? u(f) : "";
    };
  }, t.nice = () => r(Mv(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function Cv() {
  const e = _c(Oo()).domain([1, 10]);
  return e.copy = () => ji(e, Cv()).base(e.base()), ut.apply(e, arguments), e;
}
function Gf(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Vf(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Oc(e) {
  var t = 1, r = e(Gf(t), Vf(t));
  return r.constant = function(n) {
    return arguments.length ? e(Gf(t = +n), Vf(t)) : t;
  }, Yt(r);
}
function kv() {
  var e = Oc(Oo());
  return e.copy = function() {
    return ji(e, kv()).constant(e.constant());
  }, ut.apply(e, arguments);
}
function Xf(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function LM(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function RM(e) {
  return e < 0 ? -e * e : e * e;
}
function Sc(e) {
  var t = e(Fe, Fe), r = 1;
  function n() {
    return r === 1 ? e(Fe, Fe) : r === 0.5 ? e(LM, RM) : e(Xf(r), Xf(1 / r));
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
function FM() {
  return Ac.apply(null, arguments).exponent(0.5);
}
function Yf(e) {
  return Math.sign(e) * e * e;
}
function zM(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Nv() {
  var e = bc(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = zM(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Yf(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, va)).map(Yf)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Nv(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ut.apply(i, arguments), Yt(i);
}
function Dv() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = HE(e, o / s);
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
    return Dv().domain(e).range(t).unknown(n);
  }, ut.apply(a, arguments);
}
function Iv() {
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
    return Iv().domain([e, t]).range(i).unknown(a);
  }, ut.apply(Yt(o), arguments);
}
function Bv() {
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
    return Bv().domain(e).range(t).unknown(r);
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
const Pt = 1e3, rt = Pt * 60, $t = rt * 60, kt = $t * 24, Pc = kt * 7, Zf = kt * 30, as = kt * 365, ur = Pe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getUTCSeconds());
ur.range;
const $c = Pe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Pt);
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
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Pt - e.getMinutes() * rt);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getHours());
Tc.range;
const Ec = Pe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCHours());
Ec.range;
const Ti = Pe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / kt,
  (e) => e.getDate() - 1
);
Ti.range;
const So = Pe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / kt, (e) => e.getUTCDate() - 1);
So.range;
const Lv = Pe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / kt, (e) => Math.floor(e / kt));
Lv.range;
function _r(e) {
  return Pe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * rt) / Pc);
}
const Ao = _r(0), ba = _r(1), WM = _r(2), UM = _r(3), Wr = _r(4), KM = _r(5), qM = _r(6);
Ao.range;
ba.range;
WM.range;
UM.range;
Wr.range;
KM.range;
qM.range;
function Or(e) {
  return Pe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Pc);
}
const Po = Or(0), xa = Or(1), HM = Or(2), GM = Or(3), Ur = Or(4), VM = Or(5), XM = Or(6);
Po.range;
xa.range;
HM.range;
GM.range;
Ur.range;
VM.range;
XM.range;
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
const Nt = Pe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Nt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Pe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Nt.range;
const Dt = Pe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Dt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Pe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Dt.range;
function Rv(e, t, r, n, i, a) {
  const o = [
    [ur, 1, Pt],
    [ur, 5, 5 * Pt],
    [ur, 15, 15 * Pt],
    [ur, 30, 30 * Pt],
    [a, 1, rt],
    [a, 5, 5 * rt],
    [a, 15, 15 * rt],
    [a, 30, 30 * rt],
    [i, 1, $t],
    [i, 3, 3 * $t],
    [i, 6, 6 * $t],
    [i, 12, 12 * $t],
    [n, 1, kt],
    [n, 2, 2 * kt],
    [r, 1, Pc],
    [t, 1, Zf],
    [t, 3, 3 * Zf],
    [e, 1, as]
  ];
  function s(c, f, l) {
    const h = f < c;
    h && ([c, f] = [f, c]);
    const p = l && typeof l.range == "function" ? l : u(c, f, l), v = p ? p.range(c, +f + 1) : [];
    return h ? v.reverse() : v;
  }
  function u(c, f, l) {
    const h = Math.abs(f - c) / l, p = dc(([, , y]) => y).right(o, h);
    if (p === o.length) return e.every(Hs(c / as, f / as, l));
    if (p === 0) return ga.every(Math.max(Hs(c, f, l), 1));
    const [v, d] = o[h / o[p - 1][2] < o[p][2] / h ? p - 1 : p];
    return v.every(d);
  }
  return [s, u];
}
const [YM, ZM] = Rv(Dt, Cc, Po, Lv, Ec, jc), [JM, QM] = Rv(Nt, Mc, Ao, Ti, Tc, $c);
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
function eC(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Pn(i), f = $n(i), l = Pn(a), h = $n(a), p = Pn(o), v = $n(o), d = Pn(s), y = $n(s), g = Pn(u), w = $n(u), b = {
    a: I,
    A: R,
    b: F,
    B: q,
    c: null,
    d: nh,
    e: nh,
    f: OC,
    g: kC,
    G: DC,
    H: xC,
    I: wC,
    j: _C,
    L: Fv,
    m: SC,
    M: AC,
    p: G,
    q: W,
    Q: oh,
    s: sh,
    S: PC,
    u: $C,
    U: jC,
    V: TC,
    w: EC,
    W: MC,
    x: null,
    X: null,
    y: CC,
    Y: NC,
    Z: IC,
    "%": ah
  }, _ = {
    a: V,
    A: le,
    b: ye,
    B: He,
    c: null,
    d: ih,
    e: ih,
    f: FC,
    g: YC,
    G: JC,
    H: BC,
    I: LC,
    j: RC,
    L: Wv,
    m: zC,
    M: WC,
    p: Qt,
    q: ze,
    Q: oh,
    s: sh,
    S: UC,
    u: KC,
    U: qC,
    V: HC,
    w: GC,
    W: VC,
    x: null,
    X: null,
    y: XC,
    Y: ZC,
    Z: QC,
    "%": ah
  }, m = {
    a: M,
    A: j,
    b: T,
    B: N,
    c: k,
    d: th,
    e: th,
    f: yC,
    g: eh,
    G: Qf,
    H: rh,
    I: rh,
    j: hC,
    L: vC,
    m: fC,
    M: pC,
    p: $,
    q: lC,
    Q: gC,
    s: bC,
    S: dC,
    u: aC,
    U: oC,
    V: sC,
    w: iC,
    W: uC,
    x: C,
    X: D,
    y: eh,
    Y: Qf,
    Z: cC,
    "%": mC
  };
  b.x = x(r, b), b.X = x(n, b), b.c = x(t, b), _.x = x(r, _), _.X = x(n, _), _.c = x(t, _);
  function x(z, Y) {
    return function(J) {
      var B = [], de = -1, te = 0, xe = z.length, we, We, zt;
      for (J instanceof Date || (J = /* @__PURE__ */ new Date(+J)); ++de < xe; )
        z.charCodeAt(de) === 37 && (B.push(z.slice(te, de)), (We = Jf[we = z.charAt(++de)]) != null ? we = z.charAt(++de) : We = we === "e" ? " " : "0", (zt = Y[we]) && (we = zt(J, We)), B.push(we), te = de + 1);
      return B.push(z.slice(te, de)), B.join("");
    };
  }
  function O(z, Y) {
    return function(J) {
      var B = An(1900, void 0, 1), de = P(B, z, J += "", 0), te, xe;
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
  function P(z, Y, J, B) {
    for (var de = 0, te = Y.length, xe = J.length, we, We; de < te; ) {
      if (B >= xe) return -1;
      if (we = Y.charCodeAt(de++), we === 37) {
        if (we = Y.charAt(de++), We = m[we in Jf ? Y.charAt(de++) : we], !We || (B = We(z, J, B)) < 0) return -1;
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
    var B = p.exec(Y.slice(J));
    return B ? (z.w = v.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function j(z, Y, J) {
    var B = l.exec(Y.slice(J));
    return B ? (z.w = h.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function T(z, Y, J) {
    var B = g.exec(Y.slice(J));
    return B ? (z.m = w.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function N(z, Y, J) {
    var B = d.exec(Y.slice(J));
    return B ? (z.m = y.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function k(z, Y, J) {
    return P(z, t, Y, J);
  }
  function C(z, Y, J) {
    return P(z, r, Y, J);
  }
  function D(z, Y, J) {
    return P(z, n, Y, J);
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
      var Y = x(z += "", b);
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
      var Y = x(z += "", _);
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
var Jf = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, tC = /^%/, rC = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function nC(e) {
  return e.replace(rC, "\\$&");
}
function Pn(e) {
  return new RegExp("^(?:" + e.map(nC).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function iC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function aC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function oC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function sC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function uC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Qf(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function eh(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function cC(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function lC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function fC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function th(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function hC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function rh(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function pC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function dC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function vC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function yC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function mC(e, t, r) {
  var n = tC.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function gC(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function bC(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function nh(e, t) {
  return re(e.getDate(), t, 2);
}
function xC(e, t) {
  return re(e.getHours(), t, 2);
}
function wC(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function _C(e, t) {
  return re(1 + Ti.count(Nt(e), e), t, 3);
}
function Fv(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function OC(e, t) {
  return Fv(e, t) + "000";
}
function SC(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function AC(e, t) {
  return re(e.getMinutes(), t, 2);
}
function PC(e, t) {
  return re(e.getSeconds(), t, 2);
}
function $C(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function jC(e, t) {
  return re(Ao.count(Nt(e) - 1, e), t, 2);
}
function zv(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Wr(e) : Wr.ceil(e);
}
function TC(e, t) {
  return e = zv(e), re(Wr.count(Nt(e), e) + (Nt(e).getDay() === 4), t, 2);
}
function EC(e) {
  return e.getDay();
}
function MC(e, t) {
  return re(ba.count(Nt(e) - 1, e), t, 2);
}
function CC(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function kC(e, t) {
  return e = zv(e), re(e.getFullYear() % 100, t, 2);
}
function NC(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function DC(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Wr(e) : Wr.ceil(e), re(e.getFullYear() % 1e4, t, 4);
}
function IC(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + re(t / 60 | 0, "0", 2) + re(t % 60, "0", 2);
}
function ih(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function BC(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function LC(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function RC(e, t) {
  return re(1 + So.count(Dt(e), e), t, 3);
}
function Wv(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function FC(e, t) {
  return Wv(e, t) + "000";
}
function zC(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function WC(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function UC(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function KC(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function qC(e, t) {
  return re(Po.count(Dt(e) - 1, e), t, 2);
}
function Uv(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function HC(e, t) {
  return e = Uv(e), re(Ur.count(Dt(e), e) + (Dt(e).getUTCDay() === 4), t, 2);
}
function GC(e) {
  return e.getUTCDay();
}
function VC(e, t) {
  return re(xa.count(Dt(e) - 1, e), t, 2);
}
function XC(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function YC(e, t) {
  return e = Uv(e), re(e.getUTCFullYear() % 100, t, 2);
}
function ZC(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function JC(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ur(e) : Ur.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function QC() {
  return "+0000";
}
function ah() {
  return "%";
}
function oh(e) {
  return +e;
}
function sh(e) {
  return Math.floor(+e / 1e3);
}
var $r, Kv, qv;
ek({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ek(e) {
  return $r = eC(e), Kv = $r.format, $r.parse, qv = $r.utcFormat, $r.utcParse, $r;
}
function tk(e) {
  return new Date(e);
}
function rk(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function kc(e, t, r, n, i, a, o, s, u, c) {
  var f = bc(), l = f.invert, h = f.domain, p = c(".%L"), v = c(":%S"), d = c("%I:%M"), y = c("%I %p"), g = c("%a %d"), w = c("%b %d"), b = c("%B"), _ = c("%Y");
  function m(x) {
    return (u(x) < x ? p : s(x) < x ? v : o(x) < x ? d : a(x) < x ? y : n(x) < x ? i(x) < x ? g : w : r(x) < x ? b : _)(x);
  }
  return f.invert = function(x) {
    return new Date(l(x));
  }, f.domain = function(x) {
    return arguments.length ? h(Array.from(x, rk)) : h().map(tk);
  }, f.ticks = function(x) {
    var O = h();
    return e(O[0], O[O.length - 1], x ?? 10);
  }, f.tickFormat = function(x, O) {
    return O == null ? m : c(O);
  }, f.nice = function(x) {
    var O = h();
    return (!x || typeof x.range != "function") && (x = t(O[0], O[O.length - 1], x ?? 10)), x ? h(Mv(O, x)) : f;
  }, f.copy = function() {
    return ji(f, kc(e, t, r, n, i, a, o, s, u, c));
  }, f;
}
function nk() {
  return ut.apply(kc(JM, QM, Nt, Mc, Ao, Ti, Tc, $c, ur, Kv).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function ik() {
  return ut.apply(kc(YM, ZM, Dt, Cc, Po, So, Ec, jc, ur, qv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
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
      var p, v;
      return arguments.length ? ([p, v] = h, o = l(p, v), c) : [o(0), o(1)];
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
function Hv() {
  var e = Yt($o()(Fe));
  return e.copy = function() {
    return Zt(e, Hv());
  }, Ft.apply(e, arguments);
}
function Gv() {
  var e = _c($o()).domain([1, 10]);
  return e.copy = function() {
    return Zt(e, Gv()).base(e.base());
  }, Ft.apply(e, arguments);
}
function Vv() {
  var e = Oc($o());
  return e.copy = function() {
    return Zt(e, Vv()).constant(e.constant());
  }, Ft.apply(e, arguments);
}
function Nc() {
  var e = Sc($o());
  return e.copy = function() {
    return Zt(e, Nc()).exponent(e.exponent());
  }, Ft.apply(e, arguments);
}
function ak() {
  return Nc.apply(null, arguments).exponent(0.5);
}
function Xv() {
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
    return Array.from({ length: n + 1 }, (i, a) => qE(e, a / n));
  }, r.copy = function() {
    return Xv(t).domain(e);
  }, Ft.apply(r, arguments);
}
function jo() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, u, c = Fe, f, l = !1, h;
  function p(d) {
    return isNaN(d = +d) ? h : (d = 0.5 + ((d = +f(d)) - a) * (n * d < n * a ? s : u), c(l ? Math.max(0, Math.min(1, d)) : d));
  }
  p.domain = function(d) {
    return arguments.length ? ([e, t, r] = d, i = f(e = +e), a = f(t = +t), o = f(r = +r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(d) {
    return arguments.length ? (l = !!d, p) : l;
  }, p.interpolator = function(d) {
    return arguments.length ? (c = d, p) : c;
  };
  function v(d) {
    return function(y) {
      var g, w, b;
      return arguments.length ? ([g, w, b] = y, c = mM(d, [g, w, b]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = v(yn), p.rangeRound = v(gc), p.unknown = function(d) {
    return arguments.length ? (h = d, p) : h;
  }, function(d) {
    return f = d, i = d(e), a = d(t), o = d(r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function Yv() {
  var e = Yt(jo()(Fe));
  return e.copy = function() {
    return Zt(e, Yv());
  }, Ft.apply(e, arguments);
}
function Zv() {
  var e = _c(jo()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Zt(e, Zv()).base(e.base());
  }, Ft.apply(e, arguments);
}
function Jv() {
  var e = Oc(jo());
  return e.copy = function() {
    return Zt(e, Jv()).constant(e.constant());
  }, Ft.apply(e, arguments);
}
function Dc() {
  var e = Sc(jo());
  return e.copy = function() {
    return Zt(e, Dc()).exponent(e.exponent());
  }, Ft.apply(e, arguments);
}
function ok() {
  return Dc.apply(null, arguments).exponent(0.5);
}
const uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Vn,
  scaleDiverging: Yv,
  scaleDivergingLog: Zv,
  scaleDivergingPow: Dc,
  scaleDivergingSqrt: ok,
  scaleDivergingSymlog: Jv,
  scaleIdentity: Ev,
  scaleImplicit: Gs,
  scaleLinear: ma,
  scaleLog: Cv,
  scaleOrdinal: vc,
  scalePoint: Nn,
  scalePow: Ac,
  scaleQuantile: Dv,
  scaleQuantize: Iv,
  scaleRadial: Nv,
  scaleSequential: Hv,
  scaleSequentialLog: Gv,
  scaleSequentialPow: Nc,
  scaleSequentialQuantile: Xv,
  scaleSequentialSqrt: ak,
  scaleSequentialSymlog: Vv,
  scaleSqrt: FM,
  scaleSymlog: kv,
  scaleThreshold: Bv,
  scaleTime: nk,
  scaleUtc: ik,
  tickFormat: Tv
}, Symbol.toStringTag, { value: "Module" }));
var sk = sn;
function uk(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !sk(o) : r(o, s)))
      var s = o, u = a;
  }
  return u;
}
var Qv = uk;
function ck(e, t) {
  return e > t;
}
var lk = ck, fk = Qv, hk = lk, pk = vn;
function dk(e) {
  return e && e.length ? fk(e, pk, hk) : void 0;
}
var vk = dk;
const To = /* @__PURE__ */ ce(vk);
function yk(e, t) {
  return e < t;
}
var mk = yk, gk = Qv, bk = mk, xk = vn;
function wk(e) {
  return e && e.length ? gk(e, xk, bk) : void 0;
}
var _k = wk;
const Eo = /* @__PURE__ */ ce(_k);
var Ok = Yu, Sk = Xt, Ak = uv, Pk = qe;
function $k(e, t) {
  var r = Pk(e) ? Ok : Ak;
  return r(e, Sk(t));
}
var jk = $k, Tk = ov, Ek = jk;
function Mk(e, t) {
  return Tk(Ek(e, t), 1);
}
var Ck = Mk;
const kk = /* @__PURE__ */ ce(Ck);
var Nk = lc;
function Dk(e, t) {
  return Nk(e, t);
}
var Ik = Dk;
const Ei = /* @__PURE__ */ ce(Ik);
var mn = 1e9, Bk = {
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
}, Bc, pe = !0, ot = "[DecimalError] ", hr = ot + "Invalid argument: ", Ic = ot + "Exponent out of range: ", gn = Math.floor, ar = Math.pow, Lk = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ye, $e = 1e7, he = 7, ey = 9007199254740991, wa = gn(ey / he), U = {};
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
  return Mt(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function(e) {
  var t = this, r = t.constructor;
  return oe(Mt(t, new r(e), 0, 1), r.precision);
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
  return r.eq(Ye) ? new n(0) : (pe = !1, t = Mt(Qn(r, a), Qn(e, a), a), pe = !0, oe(t, i));
};
U.minus = U.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? ny(t, e) : ty(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ot + "NaN");
  return r.s ? (pe = !1, t = Mt(r, e, 0, 1).times(e), pe = !0, r.minus(t)) : oe(new n(r), i);
};
U.naturalExponential = U.exp = function() {
  return ry(this);
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
  return e = new t.constructor(e), t.s == e.s ? ty(t, e) : ny(t, (e.s = -e.s, e));
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
    if (a = n, n = a.plus(Mt(s, a, o + 2)).times(0.5), yt(a.d).slice(0, o) === (t = yt(n.d)).slice(0, o)) {
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
  var t, r, n, i, a, o, s, u, c, f = this, l = f.constructor, h = f.d, p = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, u = h.length, c = p.length, u < c && (a = h, h = p, p = a, o = u, u = c, c = o), a = [], o = u + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      s = a[i] + p[n] * h[i - n - 1] + t, a[i--] = s % $e | 0, t = s / $e | 0;
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
    if ((r = f < 0 ? -f : f) <= ey) {
      for (i = new u(Ye), t = Math.ceil(n / he + 4), pe = !1; r % 2 && (i = i.times(s), lh(i.d, t)), r = gn(r / 2), r !== 0; )
        s = s.times(s), lh(s.d, t);
      return pe = !0, e.s < 0 ? new u(Ye).div(i) : oe(i, n);
    }
  } else if (a < 0) throw Error(ot + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, pe = !1, i = e.times(Qn(s, n + c)), pe = !0, i = ry(i), i.s = a, i;
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
function ty(e, t) {
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
      n = e[t] + "", r = he - n.length, r && (a += Wt(r)), a += n;
    o = e[t], n = o + "", r = he - n.length, r && (a += Wt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Mt = /* @__PURE__ */ function() {
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
    var s, u, c, f, l, h, p, v, d, y, g, w, b, _, m, x, O, P, $ = n.constructor, M = n.s == i.s ? 1 : -1, j = n.d, T = i.d;
    if (!n.s) return new $(n);
    if (!i.s) throw Error(ot + "Division by zero");
    for (u = n.e - i.e, O = T.length, m = j.length, p = new $(M), v = p.d = [], c = 0; T[c] == (j[c] || 0); ) ++c;
    if (T[c] > (j[c] || 0) && --u, a == null ? w = a = $.precision : o ? w = a + (be(n) - be(i)) + 1 : w = a, w < 0) return new $(0);
    if (w = w / he + 2 | 0, c = 0, O == 1)
      for (f = 0, T = T[0], w++; (c < m || f) && w--; c++)
        b = f * $e + (j[c] || 0), v[c] = b / T | 0, f = b % T | 0;
    else {
      for (f = $e / (T[0] + 1) | 0, f > 1 && (T = e(T, f), j = e(j, f), O = T.length, m = j.length), _ = O, d = j.slice(0, O), y = d.length; y < O; ) d[y++] = 0;
      P = T.slice(), P.unshift(0), x = T[0], T[1] >= $e / 2 && ++x;
      do
        f = 0, s = t(T, d, O, y), s < 0 ? (g = d[0], O != y && (g = g * $e + (d[1] || 0)), f = g / x | 0, f > 1 ? (f >= $e && (f = $e - 1), l = e(T, f), h = l.length, y = d.length, s = t(l, d, h, y), s == 1 && (f--, r(l, O < h ? P : T, h))) : (f == 0 && (s = f = 1), l = T.slice()), h = l.length, h < y && l.unshift(0), r(d, l, y), s == -1 && (y = d.length, s = t(T, d, O, y), s < 1 && (f++, r(d, O < y ? P : T, y))), y = d.length) : s === 0 && (f++, d = [0]), v[c++] = f, s && d[0] ? d[y++] = j[_] || 0 : (d = [j[_]], y = 1);
      while ((_++ < m || d[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), p.e = u, oe(p, o ? a + be(p) + 1 : a);
  };
}();
function ry(e, t) {
  var r, n, i, a, o, s, u = 0, c = 0, f = e.constructor, l = f.precision;
  if (be(e) > 16) throw Error(Ic + be(e));
  if (!e.s) return new f(Ye);
  for (pe = !1, s = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(ar(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new f(Ye), f.precision = s; ; ) {
    if (i = oe(i.times(e), s), r = r.times(++u), o = a.plus(Mt(i, r, s)), yt(o.d).slice(0, s) === yt(a.d).slice(0, s)) {
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
function Wt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Qn(e, t) {
  var r, n, i, a, o, s, u, c, f, l = 1, h = 10, p = e, v = p.d, d = p.constructor, y = d.precision;
  if (p.s < 1) throw Error(ot + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Ye)) return new d(0);
  if (t == null ? (pe = !1, c = y) : c = t, p.eq(10))
    return t == null && (pe = !0), us(d, c);
  if (c += h, d.precision = c, r = yt(v), n = r.charAt(0), a = be(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = yt(p.d), n = r.charAt(0), l++;
    a = be(p), n > 1 ? (p = new d("0." + r), a++) : p = new d(n + "." + r.slice(1));
  } else
    return u = us(d, c + 2, y).times(a + ""), p = Qn(new d(n + "." + r.slice(1)), c - h).plus(u), d.precision = y, t == null ? (pe = !0, oe(p, y)) : p;
  for (s = o = p = Mt(p.minus(Ye), p.plus(Ye), c), f = oe(p.times(p), c), i = 3; ; ) {
    if (o = oe(o.times(f), c), u = s.plus(Mt(o, new d(i), c)), yt(u.d).slice(0, c) === yt(s.d).slice(0, c))
      return s = s.times(2), a !== 0 && (s = s.plus(us(d, c + 2, y).times(a + ""))), s = Mt(s, new d(l), c), d.precision = y, t == null ? (pe = !0, oe(s, y)) : s;
    s = u, i += 2;
  }
}
function ch(e, t) {
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
function ny(e, t) {
  var r, n, i, a, o, s, u, c, f, l, h = e.constructor, p = h.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new h(e), pe ? oe(t, p) : t;
  if (u = e.d, l = t.d, n = t.e, c = e.e, u = u.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = u, o = -o, s = l.length) : (r = l, n = c, s = u.length), i = Math.max(Math.ceil(p / he), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
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
  return u[0] ? (t.d = u, t.e = n, pe ? oe(t, p) : t) : new h(0);
}
function yr(e, t, r) {
  var n, i = be(e), a = yt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Wt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Wt(-i - 1) + a, r && (n = r - o) > 0 && (a += Wt(n))) : i >= o ? (a += Wt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Wt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Wt(n))), e.s < 0 ? "-" + a : a;
}
function lh(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function iy(e) {
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
      return ch(o, a.toString());
    } else if (typeof a != "string")
      throw Error(hr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, Lk.test(a)) ch(o, a);
    else throw Error(hr + a);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = iy, i.config = i.set = Rk, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function Rk(e) {
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
var Bc = iy(Bk);
Ye = new Bc(1);
const ae = Bc;
function Fk(e) {
  return Kk(e) || Uk(e) || Wk(e) || zk();
}
function zk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wk(e, t) {
  if (e) {
    if (typeof e == "string") return Zs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zs(e, t);
  }
}
function Uk(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Kk(e) {
  if (Array.isArray(e)) return Zs(e);
}
function Zs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var qk = function(t) {
  return t;
}, ay = {}, oy = function(t) {
  return t === ay;
}, fh = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && oy(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, Hk = function e(t, r) {
  return t === 1 ? r : fh(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== ay;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, fh(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var f = i.map(function(l) {
        return oy(l) ? u.shift() : l;
      });
      return r.apply(void 0, Fk(f).concat(u));
    }));
  });
}, Mo = function(t) {
  return Hk(t.length, t);
}, Js = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, Gk = Mo(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), Vk = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return qk;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, a.apply(void 0, arguments));
  };
}, Qs = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, sy = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, u) {
      return s === r[u];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function Xk(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ae(e).abs().log(10).toNumber()) + 1, t;
}
function Yk(e, t, r) {
  for (var n = new ae(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Zk = Mo(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), Jk = Mo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), Qk = Mo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Co = {
  rangeStep: Yk,
  getDigitCount: Xk,
  interpolateNumber: Zk,
  uninterpolateNumber: Jk,
  uninterpolateTruncation: Qk
};
function eu(e) {
  return rN(e) || tN(e) || uy(e) || eN();
}
function eN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tN(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function rN(e) {
  if (Array.isArray(e)) return tu(e);
}
function ei(e, t) {
  return aN(e) || iN(e, t) || uy(e, t) || nN();
}
function nN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uy(e, t) {
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
function iN(e, t) {
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
function aN(e) {
  if (Array.isArray(e)) return e;
}
function cy(e) {
  var t = ei(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function ly(e, t, r) {
  if (e.lte(0))
    return new ae(0);
  var n = Co.getDigitCount(e.toNumber()), i = new ae(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new ae(Math.ceil(a.div(o).toNumber())).add(r).mul(o), u = s.mul(i);
  return t ? u : new ae(Math.ceil(u));
}
function oN(e, t, r) {
  var n = 1, i = new ae(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ae(10).pow(Co.getDigitCount(e) - 1), i = new ae(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ae(Math.floor(e)));
  } else e === 0 ? i = new ae(Math.floor((t - 1) / 2)) : r || (i = new ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = Vk(Gk(function(u) {
    return i.add(new ae(u - o).mul(n)).toNumber();
  }), Js);
  return s(0, t);
}
function fy(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ae(0),
      tickMin: new ae(0),
      tickMax: new ae(0)
    };
  var a = ly(new ae(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ae(0) : (o = new ae(e).add(t).div(2), o = o.sub(new ae(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), u = Math.ceil(new ae(t).sub(o).div(a).toNumber()), c = s + u + 1;
  return c > r ? fy(e, t, r, n, i + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: a,
    tickMin: o.sub(new ae(s).mul(a)),
    tickMax: o.add(new ae(u).mul(a))
  });
}
function sN(e) {
  var t = ei(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = cy([r, n]), u = ei(s, 2), c = u[0], f = u[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(eu(Js(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(eu(Js(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? Qs(l) : l;
  }
  if (c === f)
    return oN(c, i, a);
  var h = fy(c, f, o, a), p = h.step, v = h.tickMin, d = h.tickMax, y = Co.rangeStep(v, d.add(new ae(0.1).mul(p)), p);
  return r > n ? Qs(y) : y;
}
function uN(e, t) {
  var r = ei(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = cy([n, i]), s = ei(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (u === c)
    return [u];
  var f = Math.max(t, 2), l = ly(new ae(c).sub(u).div(f - 1), a, 0), h = [].concat(eu(Co.rangeStep(new ae(u), new ae(c).sub(new ae(0.99).mul(l)), l)), [c]);
  return n > i ? Qs(h) : h;
}
var cN = sy(sN), lN = sy(uN), fN = "Invariant failed";
function mr(e, t) {
  throw new Error(fN);
}
var hN = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
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
function pN(e, t) {
  return mN(e) || yN(e, t) || vN(e, t) || dN();
}
function dN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vN(e, t) {
  if (e) {
    if (typeof e == "string") return hh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hh(e, t);
  }
}
function hh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yN(e, t) {
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
function mN(e) {
  if (Array.isArray(e)) return e;
}
function gN(e, t) {
  if (e == null) return {};
  var r = bN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dy(n.key), n);
  }
}
function _N(e, t, r) {
  return t && wN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ON(e, t, r) {
  return t = Oa(t), SN(e, hy() ? Reflect.construct(t, r || [], Oa(e).constructor) : t.apply(e, r));
}
function SN(e, t) {
  if (t && (Kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AN(e);
}
function AN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hy = function() {
    return !!e;
  })();
}
function Oa(e) {
  return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oa(e);
}
function PN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ru(e, t);
}
function ru(e, t) {
  return ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ru(e, t);
}
function py(e, t, r) {
  return t = dy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dy(e) {
  var t = $N(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function $N(e, t) {
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
    return xN(this, t), ON(this, t, arguments);
  }
  return PN(t, e), _N(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, h = gN(n, hN), p = Q(h, !1);
      this.props.direction === "x" && f.type !== "number" && mr();
      var v = u.map(function(d) {
        var y = c(d, s), g = y.x, w = y.y, b = y.value, _ = y.errorVal;
        if (!_)
          return null;
        var m = [], x, O;
        if (Array.isArray(_)) {
          var P = pN(_, 2);
          x = P[0], O = P[1];
        } else
          x = O = _;
        if (a === "vertical") {
          var $ = f.scale, M = w + i, j = M + o, T = M - o, N = $(b - x), k = $(b + O);
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
          var C = l.scale, D = g + i, I = D - o, R = D + o, F = C(b - x), q = C(b + O);
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
        return /* @__PURE__ */ A.createElement(ue, _a({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(G) {
            return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
          }))
        }, p), m.map(function(G) {
          return /* @__PURE__ */ A.createElement("line", _a({}, G, {
            key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
          }));
        }));
      });
      return /* @__PURE__ */ A.createElement(ue, {
        className: "recharts-errorBars"
      }, v);
    }
  }]);
}(A.Component);
py(bn, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
py(bn, "displayName", "ErrorBar");
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function ph(e, t) {
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
    t % 2 ? ph(Object(r), !0).forEach(function(n) {
      jN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jN(e, t, r) {
  return t = TN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TN(e) {
  var t = EN(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function EN(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vy = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Xe(r, Ze);
  if (!o)
    return null;
  var s = Ze.defaultProps, u = s !== void 0 ? rr(rr({}, s), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : a === "children" ? c = (n || []).reduce(function(f, l) {
    var h = l.item, p = l.props, v = p.sectors || p.data || [];
    return f.concat(v.map(function(d) {
      return {
        type: o.props.iconType || h.props.legendType,
        value: d.name,
        color: d.fill,
        payload: d
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, h = l.type.defaultProps, p = h !== void 0 ? rr(rr({}, h), l.props) : {}, v = p.dataKey, d = p.name, y = p.legendType, g = p.hide;
    return {
      inactive: g,
      dataKey: v,
      type: u.iconType || y || "square",
      color: Lc(l),
      value: d || v,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
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
function dh(e) {
  return NN(e) || kN(e) || CN(e) || MN();
}
function MN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CN(e, t) {
  if (e) {
    if (typeof e == "string") return nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nu(e, t);
  }
}
function kN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function NN(e) {
  if (Array.isArray(e)) return nu(e);
}
function nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vh(e, t) {
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
    t % 2 ? vh(Object(r), !0).forEach(function(n) {
      Dr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dr(e, t, r) {
  return t = DN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DN(e) {
  var t = IN(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function IN(e, t) {
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
  var i = kk(e, function(s) {
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
var BN = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var u = a.range, c = 0; c < s; c++) {
      var f = c > 0 ? i[c - 1].coordinate : i[s - 1].coordinate, l = i[c].coordinate, h = c >= s - 1 ? i[0].coordinate : i[c + 1].coordinate, p = void 0;
      if (pt(l - f) !== pt(h - l)) {
        var v = [];
        if (pt(h - l) === pt(u[1] - u[0])) {
          p = h;
          var d = l + u[1] - u[0];
          v[0] = Math.min(d, (d + f) / 2), v[1] = Math.max(d, (d + f) / 2);
        } else {
          p = f;
          var y = h + u[1] - u[0];
          v[0] = Math.min(l, (y + l) / 2), v[1] = Math.max(l, (y + l) / 2);
        }
        var g = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
        if (t > g[0] && t <= g[1] || t >= v[0] && t <= v[1]) {
          o = i[c].index;
          break;
        }
      } else {
        var w = Math.min(f, h), b = Math.max(f, h);
        if (t > (w + l) / 2 && t <= (b + l) / 2) {
          o = i[c].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < s; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < s - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === s - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        o = n[_].index;
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
}, LN = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, s = Object.keys(a), u = 0, c = s.length; u < c; u++)
    for (var f = a[s[u]].stackGroups, l = Object.keys(f), h = 0, p = l.length; h < p; h++) {
      var v = f[l[h]], d = v.items, y = v.cateAxisId, g = d.filter(function(O) {
        return Tt(O.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var w = g[0].type.defaultProps, b = w !== void 0 ? ve(ve({}, w), g[0].props) : g[0].props, _ = b.barSize, m = b[y];
        o[m] || (o[m] = []);
        var x = X(_) ? r : _;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: X(x) ? void 0 : vr(x, n, 0)
        });
      }
    }
  return o;
}, RN = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, u = o.length;
  if (u < 1) return null;
  var c = vr(r, i, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = !1, p = i / u, v = o.reduce(function(_, m) {
      return _ + m.barSize || 0;
    }, 0);
    v += (u - 1) * c, v >= i && (v -= (u - 1) * c, c = 0), v >= i && p > 0 && (h = !0, p *= 0.9, v = u * p);
    var d = (i - v) / 2 >> 0, y = {
      offset: d - c,
      size: 0
    };
    f = o.reduce(function(_, m) {
      var x = {
        item: m.item,
        position: {
          offset: y.offset + y.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: h ? p : m.barSize
        }
      }, O = [].concat(dh(_), [x]);
      return y = O[O.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
        O.push({
          item: P,
          position: y
        });
      }), O;
    }, l);
  } else {
    var g = vr(n, i, 0, !0);
    i - 2 * g - (u - 1) * c <= 0 && (c = 0);
    var w = (i - 2 * g - (u - 1) * c) / u;
    w > 1 && (w >>= 0);
    var b = s === +s ? Math.min(w, s) : w;
    f = o.reduce(function(_, m, x) {
      var O = [].concat(dh(_), [{
        item: m.item,
        position: {
          offset: g + (w + c) * x + (w - b) / 2,
          size: b
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
        O.push({
          item: P,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, FN = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = vy({
    children: a,
    legendWidth: u
  });
  if (c) {
    var f = i || {}, l = f.width, h = f.height, p = c.align, v = c.verticalAlign, d = c.layout;
    if ((d === "vertical" || d === "horizontal" && v === "middle") && p !== "center" && L(t[p]))
      return ve(ve({}, t), {}, Dr({}, p, t[p] + (l || 0)));
    if ((d === "horizontal" || d === "vertical" && p === "center") && v !== "middle" && L(t[v]))
      return ve(ve({}, t), {}, Dr({}, v, t[v] + (h || 0)));
  }
  return t;
}, zN = function(t, r, n) {
  return X(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, yy = function(t, r, n, i, a) {
  var o = r.props.children, s = Ke(o, bn).filter(function(c) {
    return zN(i, a, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = ke(f, n);
      if (X(l)) return c;
      var h = Array.isArray(l) ? [Eo(l), To(l)] : [l, l], p = u.reduce(function(v, d) {
        var y = ke(f, d, 0), g = h[0] - Math.abs(Array.isArray(y) ? y[0] : y), w = h[1] + Math.abs(Array.isArray(y) ? y[1] : y);
        return [Math.min(g, v[0]), Math.max(w, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, WN = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return yy(t, s, n, a, i);
  }).filter(function(s) {
    return !X(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, my = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && yy(t, u, c, i) || Dn(t, c, n, a);
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
}, gy = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, by = function(t, r, n, i) {
  if (i)
    return t.map(function(u) {
      return u.coordinate;
    });
  var a, o, s = t.map(function(u) {
    return u.coordinate === r && (a = !0), u.coordinate === n && (o = !0), u.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, jt = function(t, r, n) {
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
}, UN = function(t, r, n) {
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
      scale: (uh[u] || Nn)(),
      realScaleType: uh[u] ? u : "point"
    };
  }
  return Z(i) ? {
    scale: i
  } : {
    scale: Nn(),
    realScaleType: "point"
  };
}, yh = 1e-4, KN = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - yh, o = Math.max(i[0], i[1]) + yh, s = t(r[0]), u = t(r[n - 1]);
    (s < a || s > o || u < a || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, qN = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, HN = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, GN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var u = Oi(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + u, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, VN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = Oi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, XN = {
  sign: GN,
  // @ts-expect-error definitelytyped types are incorrect
  expand: l_,
  // @ts-expect-error definitelytyped types are incorrect
  none: Ir,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: f_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: h_,
  positive: VN
}, YN = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = XN[n], o = c_().keys(i).value(function(s, u) {
    return +ke(s, u, 0);
  }).order(js).offset(a);
  return o(t);
}, ZN = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = {}, c = s.reduce(function(l, h) {
    var p, v = (p = h.type) !== null && p !== void 0 && p.defaultProps ? ve(ve({}, h.type.defaultProps), h.props) : h.props, d = v.stackId, y = v.hide;
    if (y)
      return l;
    var g = v[n], w = l[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ae(d)) {
      var b = w.stackGroups[d] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      b.items.push(h), w.hasStack = !0, w.stackGroups[d] = b;
    } else
      w.stackGroups[hn("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [h]
      };
    return ve(ve({}, l), {}, Dr({}, g, w));
  }, u), f = {};
  return Object.keys(c).reduce(function(l, h) {
    var p = c[h];
    if (p.hasStack) {
      var v = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(d, y) {
        var g = p.stackGroups[y];
        return ve(ve({}, d), {}, Dr({}, y, {
          numericAxisId: n,
          cateAxisId: i,
          items: g.items,
          stackedData: YN(t, g.items, a)
        }));
      }, v);
    }
    return ve(ve({}, l), {}, Dr({}, h, p));
  }, f);
}, JN = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = cN(c, a, s);
    return t.domain([Eo(f), To(f)]), {
      niceTicks: f
    };
  }
  if (a && i === "number") {
    var l = t.domain(), h = lN(l, a, s);
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
var mh = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var u = ke(o, r.dataKey, r.domain[s]);
  return X(u) ? null : r.scale(u) - a / 2 + i;
}, QN = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, eD = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Ae(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, tD = function(t) {
  return t.reduce(function(r, n) {
    return [Eo(n.concat([r[0]]).filter(L)), To(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, xy = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, u = s.reduce(function(c, f) {
      var l = tD(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, gh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, bh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, iu = function(t, r, n) {
  if (Z(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (L(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (gh.test(t[0])) {
    var a = +gh.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Z(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (L(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (bh.test(t[1])) {
    var o = +bh.exec(t[1])[1];
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
}, xh = function(t, r, n) {
  return !t || !t.length || Ei(t, at(n, "type.defaultProps.domain")) ? r : t;
}, wy = function(t, r) {
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
function wh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wh(Object(r), !0).forEach(function(n) {
      rD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rD(e, t, r) {
  return t = nD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nD(e) {
  var t = iD(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function iD(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pa = Math.PI / 180, aD = function(t) {
  return t * 180 / Math.PI;
}, Ce = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Pa * i) * n,
    y: r + Math.sin(-Pa * i) * n
  };
}, oD = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, sD = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = oD({
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
    angle: aD(c),
    angleInRadian: c
  };
}, uD = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, cD = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Oh = function(t, r) {
  var n = t.x, i = t.y, a = sD({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = uD(r), l = f.startAngle, h = f.endAngle, p = s, v;
  if (l <= h) {
    for (; p > h; )
      p -= 360;
    for (; p < l; )
      p += 360;
    v = p >= l && p <= h;
  } else {
    for (; p > l; )
      p -= 360;
    for (; p < h; )
      p += 360;
    v = p >= h && p <= l;
  }
  return v ? _h(_h({}, r), {}, {
    radius: o,
    angle: cD(p, r)
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
var lD = ["offset"];
function fD(e) {
  return vD(e) || dD(e) || pD(e) || hD();
}
function hD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pD(e, t) {
  if (e) {
    if (typeof e == "string") return au(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return au(e, t);
  }
}
function dD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vD(e) {
  if (Array.isArray(e)) return au(e);
}
function au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yD(e, t) {
  if (e == null) return {};
  var r = mD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Sh(e, t) {
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
    t % 2 ? Sh(Object(r), !0).forEach(function(n) {
      gD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gD(e, t, r) {
  return t = bD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bD(e) {
  var t = xD(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function xD(e, t) {
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
var wD = function(t) {
  var r = t.value, n = t.formatter, i = X(t.children) ? r : t.children;
  return Z(n) ? n(i) : i;
}, _D = function(t, r) {
  var n = pt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, OD = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, u = a, c = u.cx, f = u.cy, l = u.innerRadius, h = u.outerRadius, p = u.startAngle, v = u.endAngle, d = u.clockWise, y = (l + h) / 2, g = _D(p, v), w = g >= 0 ? 1 : -1, b, _;
  i === "insideStart" ? (b = p + w * o, _ = d) : i === "insideEnd" ? (b = v - w * o, _ = !d) : i === "end" && (b = v + w * o, _ = d), _ = g <= 0 ? _ : !_;
  var m = Ce(c, f, y, b), x = Ce(c, f, y, b + (_ ? 1 : -1) * 359), O = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(y, ",").concat(y, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), P = X(t.id) ? hn("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ A.createElement("text", ai({}, n, {
    dominantBaseline: "central",
    className: ee("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("path", {
    id: P,
    d: O
  })), /* @__PURE__ */ A.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, SD = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, u = a.innerRadius, c = a.outerRadius, f = a.startAngle, l = a.endAngle, h = (f + l) / 2;
  if (i === "outside") {
    var p = Ce(o, s, c + n, h), v = p.x, d = p.y;
    return {
      x: v,
      y: d,
      textAnchor: v >= o ? "start" : "end",
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
  var y = (u + c) / 2, g = Ce(o, s, y, h), w = g.x, b = g.y;
  return {
    x: w,
    y: b,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, AD = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, u = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, h = l * i, p = l > 0 ? "end" : "start", v = l > 0 ? "start" : "end", d = c >= 0 ? 1 : -1, y = d * i, g = d > 0 ? "end" : "start", w = d > 0 ? "start" : "end";
  if (a === "top") {
    var b = {
      x: s + c / 2,
      y: u - l * i,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return Oe(Oe({}, b), n ? {
      height: Math.max(u - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: s + c / 2,
      y: u + f + h,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return Oe(Oe({}, _), n ? {
      height: Math.max(n.y + n.height - (u + f), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var m = {
      x: s - y,
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
    var x = {
      x: s + c + y,
      y: u + f / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return Oe(Oe({}, x), n ? {
      width: Math.max(n.x + n.width - x.x, 0),
      height: f
    } : {});
  }
  var O = n ? {
    width: c,
    height: f
  } : {};
  return a === "insideLeft" ? Oe({
    x: s + y,
    y: u + f / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? Oe({
    x: s + c - y,
    y: u + f / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? Oe({
    x: s + c / 2,
    y: u + h,
    textAnchor: "middle",
    verticalAnchor: v
  }, O) : a === "insideBottom" ? Oe({
    x: s + c / 2,
    y: u + f - h,
    textAnchor: "middle",
    verticalAnchor: p
  }, O) : a === "insideTopLeft" ? Oe({
    x: s + y,
    y: u + h,
    textAnchor: w,
    verticalAnchor: v
  }, O) : a === "insideTopRight" ? Oe({
    x: s + c - y,
    y: u + h,
    textAnchor: g,
    verticalAnchor: v
  }, O) : a === "insideBottomLeft" ? Oe({
    x: s + y,
    y: u + f - h,
    textAnchor: w,
    verticalAnchor: p
  }, O) : a === "insideBottomRight" ? Oe({
    x: s + c - y,
    y: u + f - h,
    textAnchor: g,
    verticalAnchor: p
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
}, PD = function(t) {
  return "cx" in t && L(t.cx);
};
function De(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = yD(e, lD), i = Oe({
    offset: r
  }, n), a = i.viewBox, o = i.position, s = i.value, u = i.children, c = i.content, f = i.className, l = f === void 0 ? "" : f, h = i.textBreakAll;
  if (!a || X(s) && X(u) && !/* @__PURE__ */ gt(c) && !Z(c))
    return null;
  if (/* @__PURE__ */ gt(c))
    return /* @__PURE__ */ Se(c, i);
  var p;
  if (Z(c)) {
    if (p = /* @__PURE__ */ Yp(c, i), /* @__PURE__ */ gt(p))
      return p;
  } else
    p = wD(i);
  var v = PD(a), d = Q(i, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return OD(i, p, d);
  var y = v ? SD(i) : AD(i);
  return /* @__PURE__ */ A.createElement(la, ai({
    className: ee("recharts-label", l)
  }, d, y, {
    breakAll: h
  }), p);
}
De.displayName = "Label";
var _y = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, u = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, h = t.y, p = t.top, v = t.left, d = t.width, y = t.height, g = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (L(d) && L(y)) {
    if (L(l) && L(h))
      return {
        x: l,
        y: h,
        width: d,
        height: y
      };
    if (L(p) && L(v))
      return {
        x: p,
        y: v,
        width: d,
        height: y
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
}, $D = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ A.createElement(De, {
    key: "label-implicit",
    viewBox: r
  }) : Ae(t) ? /* @__PURE__ */ A.createElement(De, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ gt(t) ? t.type === De ? /* @__PURE__ */ Se(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ A.createElement(De, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Z(t) ? /* @__PURE__ */ A.createElement(De, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : un(t) ? /* @__PURE__ */ A.createElement(De, ai({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, jD = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = _y(t), o = Ke(i, De).map(function(u, c) {
    return /* @__PURE__ */ Se(u, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = $D(t.label, r || a);
  return [s].concat(fD(o));
};
De.parseViewBox = _y;
De.renderCallByParent = jD;
function TD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var ED = TD;
const MD = /* @__PURE__ */ ce(ED);
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
var CD = ["valueAccessor"], kD = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function ND(e) {
  return LD(e) || BD(e) || ID(e) || DD();
}
function DD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ID(e, t) {
  if (e) {
    if (typeof e == "string") return ou(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ou(e, t);
  }
}
function BD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function LD(e) {
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
function Ph(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      RD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RD(e, t, r) {
  return t = FD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FD(e) {
  var t = zD(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function zD(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $h(e, t) {
  if (e == null) return {};
  var r = WD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var UD = function(t) {
  return Array.isArray(t.value) ? MD(t.value) : t.value;
};
function Ct(e) {
  var t = e.valueAccessor, r = t === void 0 ? UD : t, n = $h(e, CD), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = $h(n, kD);
  return !i || !i.length ? null : /* @__PURE__ */ A.createElement(ue, {
    className: "recharts-label-list"
  }, i.map(function(f, l) {
    var h = X(a) ? r(f, l) : ke(f && f.payload, a), p = X(s) ? {} : {
      id: "".concat(s, "-").concat(l)
    };
    return /* @__PURE__ */ A.createElement(De, $a({}, Q(f, !0), c, p, {
      parentViewBox: f.parentViewBox,
      value: h,
      textBreakAll: u,
      viewBox: De.parseViewBox(X(o) ? f : Ph(Ph({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
Ct.displayName = "LabelList";
function KD(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ A.createElement(Ct, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ A.isValidElement(e) || Z(e) ? /* @__PURE__ */ A.createElement(Ct, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : un(e) ? /* @__PURE__ */ A.createElement(Ct, $a({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function qD(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Ke(n, Ct).map(function(o, s) {
    return /* @__PURE__ */ Se(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = KD(e.label, t);
  return [a].concat(ND(i));
}
Ct.renderCallByParent = qD;
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
function jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jh(Object(r), !0).forEach(function(n) {
      HD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HD(e, t, r) {
  return t = GD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GD(e) {
  var t = VD(e, "string");
  return si(t) == "symbol" ? t : t + "";
}
function VD(e, t) {
  if (si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var XD = function(t, r) {
  var n = pt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Ui = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, f = u * (s ? 1 : -1) + i, l = Math.asin(u / f) / Pa, h = c ? a : a + o * l, p = Ce(r, n, f, h), v = Ce(r, n, i, h), d = c ? a - o * l : a, y = Ce(r, n, f * Math.cos(l * Pa), d);
  return {
    center: p,
    circleTangency: v,
    lineTangency: y,
    theta: l
  };
}, Oy = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, u = XD(o, s), c = o + u, f = Ce(r, n, a, o), l = Ce(r, n, a, c), h = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var p = Ce(r, n, i, o), v = Ce(r, n, i, c);
    h += "L ".concat(v.x, ",").concat(v.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    h += "L ".concat(r, ",").concat(n, " Z");
  return h;
}, YD = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = pt(f - c), h = Ui({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = h.circleTangency, v = h.lineTangency, d = h.theta, y = Ui({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: u
  }), g = y.circleTangency, w = y.lineTangency, b = y.theta, _ = u ? Math.abs(c - f) : Math.abs(c - f) - d - b;
  if (_ < 0)
    return s ? "M ".concat(v.x, ",").concat(v.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Oy({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: f
    });
  var m = "M ".concat(v.x, ",").concat(v.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(l < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (i > 0) {
    var x = Ui({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), O = x.circleTangency, P = x.lineTangency, $ = x.theta, M = Ui({
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
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, ZD = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Sy = function(t) {
  var r = Th(Th({}, ZD), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, h = r.className;
  if (o < a || f === l)
    return null;
  var p = ee("recharts-sector", h), v = o - a, d = vr(s, v, 0, !0), y;
  return d > 0 && Math.abs(f - l) < 360 ? y = YD({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(d, v / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : y = Oy({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ A.createElement("path", su({}, Q(r, !0), {
    className: p,
    d: y,
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
function Eh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eh(Object(r), !0).forEach(function(n) {
      JD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JD(e, t, r) {
  return t = QD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QD(e) {
  var t = eI(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function eI(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ch = {
  curveBasisClosed: Jw,
  curveBasisOpen: Qw,
  curveBasis: Zw,
  curveBumpX: Bw,
  curveBumpY: Lw,
  curveLinearClosed: e_,
  curveLinear: mo,
  curveMonotoneX: t_,
  curveMonotoneY: r_,
  curveNatural: n_,
  curveStep: i_,
  curveStepAfter: o_,
  curveStepBefore: a_
}, Ki = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, jn = function(t) {
  return t.x;
}, Tn = function(t) {
  return t.y;
}, tI = function(t, r) {
  if (Z(t))
    return t;
  var n = "curve".concat(vo(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Ch["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Ch[n] || mo;
}, rI = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, f = tI(n, s), l = c ? a.filter(function(d) {
    return Ki(d);
  }) : a, h;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(d) {
      return Ki(d);
    }) : o, v = l.map(function(d, y) {
      return Mh(Mh({}, d), {}, {
        base: p[y]
      });
    });
    return s === "vertical" ? h = Ni().y(Tn).x1(jn).x0(function(d) {
      return d.base.x;
    }) : h = Ni().x(jn).y1(Tn).y0(function(d) {
      return d.base.y;
    }), h.defined(Ki).curve(f), h(v);
  }
  return s === "vertical" && L(o) ? h = Ni().y(Tn).x1(jn).x0(o) : L(o) ? h = Ni().x(jn).y1(Tn).y0(o) : h = Ad().x(jn).y(Tn), h.defined(Ki).curve(f), h(l);
}, ja = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? rI(t) : i;
  return /* @__PURE__ */ it.createElement("path", uu({}, Q(t, !1), Yi(t), {
    className: ee("recharts-curve", r),
    d: o,
    ref: a
  }));
}, Ay = { exports: {} }, nI = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", iI = nI, aI = iI;
function Py() {
}
function $y() {
}
$y.resetWarningCache = Py;
var oI = function() {
  function e(n, i, a, o, s, u) {
    if (u !== aI) {
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
    checkPropTypes: $y,
    resetWarningCache: Py
  };
  return r.PropTypes = r, r;
};
Ay.exports = oI();
var sI = Ay.exports;
const ne = /* @__PURE__ */ ce(sI);
var uI = Object.getOwnPropertyNames, cI = Object.getOwnPropertySymbols, lI = Object.prototype.hasOwnProperty;
function kh(e, t) {
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
function fI(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function Nh(e) {
  return uI(e).concat(cI(e));
}
var hI = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || function(e, t) {
    return lI.call(e, t);
  }
);
function Sr(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var pI = "__v", dI = "__o", vI = "_owner", Dh = Object.getOwnPropertyDescriptor, Ih = Object.keys;
function yI(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function mI(e, t) {
  return Sr(e.getTime(), t.getTime());
}
function gI(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function bI(e, t) {
  return e === t;
}
function Bh(e, t, r) {
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
      var h = o.value, p = s.value;
      if (r.equals(h[0], p[0], u, l, e, t, r) && r.equals(h[1], p[1], h[0], p[0], e, t, r)) {
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
var xI = Sr;
function wI(e, t, r) {
  var n = Ih(e), i = n.length;
  if (Ih(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!jy(e, t, r, n[i]))
      return !1;
  return !0;
}
function En(e, t, r) {
  var n = Nh(e), i = n.length;
  if (Nh(t).length !== i)
    return !1;
  for (var a, o, s; i-- > 0; )
    if (a = n[i], !jy(e, t, r, a) || (o = Dh(e, a), s = Dh(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function _I(e, t) {
  return Sr(e.valueOf(), t.valueOf());
}
function OI(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Lh(e, t, r) {
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
function SI(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function AI(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function jy(e, t, r, n) {
  return (n === vI || n === dI || n === pI) && (e.$$typeof || t.$$typeof) ? !0 : hI(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var PI = "[object Arguments]", $I = "[object Boolean]", jI = "[object Date]", TI = "[object Error]", EI = "[object Map]", MI = "[object Number]", CI = "[object Object]", kI = "[object RegExp]", NI = "[object Set]", DI = "[object String]", II = "[object URL]", BI = Array.isArray, Rh = typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView : null, Fh = Object.assign, LI = Object.prototype.toString.call.bind(Object.prototype.toString);
function RI(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, u = e.arePrimitiveWrappersEqual, c = e.areRegExpsEqual, f = e.areSetsEqual, l = e.areTypedArraysEqual, h = e.areUrlsEqual, p = e.unknownTagComparators;
  return function(d, y, g) {
    if (d === y)
      return !0;
    if (d == null || y == null)
      return !1;
    var w = typeof d;
    if (w !== typeof y)
      return !1;
    if (w !== "object")
      return w === "number" ? o(d, y, g) : w === "function" ? i(d, y, g) : !1;
    var b = d.constructor;
    if (b !== y.constructor)
      return !1;
    if (b === Object)
      return s(d, y, g);
    if (BI(d))
      return t(d, y, g);
    if (Rh != null && Rh(d))
      return l(d, y, g);
    if (b === Date)
      return r(d, y, g);
    if (b === RegExp)
      return c(d, y, g);
    if (b === Map)
      return a(d, y, g);
    if (b === Set)
      return f(d, y, g);
    var _ = LI(d);
    if (_ === jI)
      return r(d, y, g);
    if (_ === kI)
      return c(d, y, g);
    if (_ === EI)
      return a(d, y, g);
    if (_ === NI)
      return f(d, y, g);
    if (_ === CI)
      return typeof d.then != "function" && typeof y.then != "function" && s(d, y, g);
    if (_ === II)
      return h(d, y, g);
    if (_ === TI)
      return n(d, y, g);
    if (_ === PI)
      return s(d, y, g);
    if (_ === $I || _ === MI || _ === DI)
      return u(d, y, g);
    if (p) {
      var m = p[_];
      if (!m) {
        var x = fI(d);
        x && (m = p[x]);
      }
      if (m)
        return m(d, y, g);
    }
    return !1;
  };
}
function FI(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? En : yI,
    areDatesEqual: mI,
    areErrorsEqual: gI,
    areFunctionsEqual: bI,
    areMapsEqual: n ? kh(Bh, En) : Bh,
    areNumbersEqual: xI,
    areObjectsEqual: n ? En : wI,
    arePrimitiveWrappersEqual: _I,
    areRegExpsEqual: OI,
    areSetsEqual: n ? kh(Lh, En) : Lh,
    areTypedArraysEqual: n ? En : SI,
    areUrlsEqual: AI,
    unknownTagComparators: void 0
  };
  if (r && (i = Fh({}, i, r(i))), t) {
    var a = qi(i.areArraysEqual), o = qi(i.areMapsEqual), s = qi(i.areObjectsEqual), u = qi(i.areSetsEqual);
    i = Fh({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return i;
}
function zI(e) {
  return function(t, r, n, i, a, o, s) {
    return e(t, r, s);
  };
}
function WI(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(u, c) {
      var f = n(), l = f.cache, h = l === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : l, p = f.meta;
      return r(u, c, {
        cache: h,
        equals: i,
        meta: p,
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
var UI = Jt();
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
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, s = FI(e), u = RI(s), c = n ? n(u) : zI(u);
  return WI({ circular: r, comparator: u, createState: i, equals: c, strict: o });
}
function KI(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function zh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : KI(i);
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
function qI(e) {
  return XI(e) || VI(e) || GI(e) || HI();
}
function HI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GI(e, t) {
  if (e) {
    if (typeof e == "string") return Wh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wh(e, t);
  }
}
function Wh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function XI(e) {
  if (Array.isArray(e)) return e;
}
function YI() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = qI(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          zh(i.bind(null, c), u);
          return;
        }
        i(u), zh(i.bind(null, c));
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
function Uh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uh(Object(r), !0).forEach(function(n) {
      Ty(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ty(e, t, r) {
  return t = ZI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZI(e) {
  var t = JI(e, "string");
  return ci(t) === "symbol" ? t : String(t);
}
function JI(e, t) {
  if (ci(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var QI = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, e2 = function(t) {
  return t;
}, t2 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, In = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Kh(Kh({}, n), {}, Ty({}, i, t(i, r[i])));
  }, {});
}, qh = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(t2(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function r2(e, t) {
  return a2(e) || i2(e, t) || Ey(e, t) || n2();
}
function n2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i2(e, t) {
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
function a2(e) {
  if (Array.isArray(e)) return e;
}
function o2(e) {
  return c2(e) || u2(e) || Ey(e) || s2();
}
function s2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ey(e, t) {
  if (e) {
    if (typeof e == "string") return lu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lu(e, t);
  }
}
function u2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function c2(e) {
  if (Array.isArray(e)) return lu(e);
}
function lu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ta = 1e-4, My = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, Cy = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Hh = function(t, r) {
  return function(n) {
    var i = My(t, r);
    return Cy(i, n);
  };
}, l2 = function(t, r) {
  return function(n) {
    var i = My(t, r), a = [].concat(o2(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return Cy(a, n);
  };
}, Gh = function() {
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
          var c = u[1].split(")")[0].split(",").map(function(y) {
            return parseFloat(y);
          }), f = r2(c, 4);
          i = f[0], a = f[1], o = f[2], s = f[3];
        }
      }
    }
  var l = Hh(i, o), h = Hh(a, s), p = l2(i, o), v = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, d = function(g) {
    for (var w = g > 1 ? 1 : g, b = w, _ = 0; _ < 8; ++_) {
      var m = l(b) - w, x = p(b);
      if (Math.abs(m - w) < Ta || x < Ta)
        return h(b);
      b = v(b - m / x);
    }
    return h(b);
  };
  return d.isStepper = !1, d;
}, f2 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, u = function(f, l, h) {
    var p = -(f - l) * n, v = h * a, d = h + (p - v) * s / 1e3, y = h * s / 1e3 + f;
    return Math.abs(y - l) < Ta && Math.abs(d) < Ta ? [l, 0] : [y, d];
  };
  return u.isStepper = !0, u.dt = s, u;
}, h2 = function() {
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
        return Gh(i);
      case "spring":
        return f2();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Gh(i);
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
function Vh(e) {
  return v2(e) || d2(e) || ky(e) || p2();
}
function p2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function v2(e) {
  if (Array.isArray(e)) return hu(e);
}
function Xh(e, t) {
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
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      fu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fu(e, t, r) {
  return t = y2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y2(e) {
  var t = m2(e, "string");
  return li(t) === "symbol" ? t : String(t);
}
function m2(e, t) {
  if (li(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g2(e, t) {
  return w2(e) || x2(e, t) || ky(e, t) || b2();
}
function b2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ky(e, t) {
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
function x2(e, t) {
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
function w2(e) {
  if (Array.isArray(e)) return e;
}
var Ea = function(t, r, n) {
  return t + (r - t) * n;
}, pu = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, _2 = function e(t, r, n) {
  var i = In(function(a, o) {
    if (pu(o)) {
      var s = t(o.from, o.to, o.velocity), u = g2(s, 2), c = u[0], f = u[1];
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
const O2 = function(e, t, r, n, i) {
  var a = QI(e, t), o = a.reduce(function(y, g) {
    return Me(Me({}, y), {}, fu({}, g, [e[g], t[g]]));
  }, {}), s = a.reduce(function(y, g) {
    return Me(Me({}, y), {}, fu({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), u = -1, c, f, l = function() {
    return null;
  }, h = function() {
    return In(function(g, w) {
      return w.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(pu).length;
  }, v = function(g) {
    c || (c = g);
    var w = g - c, b = w / r.dt;
    s = _2(r, s, b), i(Me(Me(Me({}, e), t), h())), c = g, p() || (u = requestAnimationFrame(l));
  }, d = function(g) {
    f || (f = g);
    var w = (g - f) / n, b = In(function(m, x) {
      return Ea.apply(void 0, Vh(x).concat([r(w)]));
    }, o);
    if (i(Me(Me(Me({}, e), t), b)), w < 1)
      u = requestAnimationFrame(l);
    else {
      var _ = In(function(m, x) {
        return Ea.apply(void 0, Vh(x).concat([r(1)]));
      }, o);
      i(Me(Me(Me({}, e), t), _));
    }
  };
  return l = r.isStepper ? v : d, function() {
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
var S2 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function A2(e, t) {
  if (e == null) return {};
  var r = P2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function P2(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ls(e) {
  return E2(e) || T2(e) || j2(e) || $2();
}
function $2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j2(e, t) {
  if (e) {
    if (typeof e == "string") return du(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return du(e, t);
  }
}
function T2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function E2(e) {
  if (Array.isArray(e)) return du(e);
}
function du(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yh(Object(r), !0).forEach(function(n) {
      Cn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cn(e, t, r) {
  return t = Ny(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function C2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ny(n.key), n);
  }
}
function k2(e, t, r) {
  return t && C2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ny(e) {
  var t = N2(e, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function N2(e, t) {
  if (qr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vu(e, t);
}
function vu(e, t) {
  return vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, vu(e, t);
}
function I2(e) {
  var t = B2();
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
function B2() {
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
  D2(r, e);
  var t = I2(r);
  function r(n, i) {
    var a;
    M2(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, u = o.attributeName, c = o.from, f = o.to, l = o.steps, h = o.children, p = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(mu(a)), a.changeStyle = a.changeStyle.bind(mu(a)), !s || p <= 0)
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
  return k2(r, [{
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
          var p = {
            style: u ? Cn({}, u, f) : f
          };
          this.state && h && (u && h[u] !== f || !u && h !== f) && this.setState(p);
          return;
        }
        if (!(UI(i.to, f) && i.canBegin && i.isActive)) {
          var v = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var d = v || c ? l : i.to;
          if (this.state && h) {
            var y = {
              style: u ? Cn({}, u, d) : d
            };
            (u && h[u] !== d || !u && h !== d) && this.setState(y);
          }
          this.runAnimation(ct(ct({}, this.props), {}, {
            from: d,
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
      var a = this, o = i.from, s = i.to, u = i.duration, c = i.easing, f = i.begin, l = i.onAnimationEnd, h = i.onAnimationStart, p = O2(o, s, h2(c), u, this.changeStyle), v = function() {
        a.stopJSAnimation = p();
      };
      this.manager.start([h, f, v, u, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, u = i.onAnimationStart, c = o[0], f = c.style, l = c.duration, h = l === void 0 ? 0 : l, p = function(d, y, g) {
        if (g === 0)
          return d;
        var w = y.duration, b = y.easing, _ = b === void 0 ? "ease" : b, m = y.style, x = y.properties, O = y.onAnimationEnd, P = g > 0 ? o[g - 1] : y, $ = x || Object.keys(m);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(ls(d), [a.runJSAnimation.bind(a, {
            from: P.style,
            to: m,
            duration: w,
            easing: _
          }), w]);
        var M = qh($, w, _), j = ct(ct(ct({}, P.style), m), {}, {
          transition: M
        });
        return [].concat(ls(d), [j, w, O]).filter(e2);
      };
      return this.manager.start([u].concat(ls(o.reduce(p, [f, Math.max(h, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = YI());
      var a = i.begin, o = i.duration, s = i.attributeName, u = i.to, c = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, h = i.steps, p = i.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (h.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var d = s ? Cn({}, s, u) : u, y = qh(Object.keys(d), o, c);
      v.start([f, a, ct(ct({}, d), {}, {
        transition: y
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
      var u = A2(i, S2), c = lr.count(a), f = this.state.style;
      if (typeof a == "function")
        return a(f);
      if (!s || c === 0 || o <= 0)
        return a;
      var l = function(p) {
        var v = p.props, d = v.style, y = d === void 0 ? {} : d, g = v.className, w = /* @__PURE__ */ Se(p, ct(ct({}, u), {}, {
          style: ct(ct({}, y), f),
          className: g
        }));
        return w;
      };
      return c === 1 ? l(lr.only(a)) : /* @__PURE__ */ A.createElement("div", null, lr.map(a, function(h) {
        return l(h);
      }));
    }
  }]), r;
}(It);
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
function L2(e, t) {
  return W2(e) || z2(e, t) || F2(e, t) || R2();
}
function R2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F2(e, t) {
  if (e) {
    if (typeof e == "string") return Zh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zh(e, t);
  }
}
function Zh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function z2(e, t) {
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
function W2(e) {
  if (Array.isArray(e)) return e;
}
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      U2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U2(e, t, r) {
  return t = K2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K2(e) {
  var t = q2(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function q2(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ep = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, u = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], h = 0, p = 4; h < p; h++)
      l[h] = a[h] > o ? o : a[h];
    f = "M".concat(t, ",").concat(r + s * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + u * l[0], ",").concat(r)), f += "L ".concat(t + n - u * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + s * l[1])), f += "L ".concat(t + n, ",").concat(r + i - s * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - u * l[2], ",").concat(r + i)), f += "L ".concat(t + u * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - s * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var v = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + s * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + u * v, ",").concat(r, `
            L `).concat(t + n - u * v, ",").concat(r, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + s * v, `
            L `).concat(t + n, ",").concat(r + i - s * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + n - u * v, ",").concat(r + i, `
            L `).concat(t + u * v, ",").concat(r + i, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - s * v, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, H2 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(a, a + s), f = Math.max(a, a + s), l = Math.min(o, o + u), h = Math.max(o, o + u);
    return n >= c && n <= f && i >= l && i <= h;
  }
  return !1;
}, G2 = {
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
  var r = Qh(Qh({}, G2), t), n = Vi(), i = Ut(-1), a = L2(i, 2), o = a[0], s = a[1];
  Za(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && s(_);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, f = r.width, l = r.height, h = r.radius, p = r.className, v = r.animationEasing, d = r.animationDuration, y = r.animationBegin, g = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var b = ee("recharts-rectangle", p);
  return w ? /* @__PURE__ */ A.createElement(_t, {
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
    duration: d,
    animationEasing: v,
    isActive: w
  }, function(_) {
    var m = _.width, x = _.height, O = _.x, P = _.y;
    return /* @__PURE__ */ A.createElement(_t, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: y,
      duration: d,
      isActive: g,
      easing: v
    }, /* @__PURE__ */ A.createElement("path", Ca({}, Q(r, !0), {
      className: b,
      d: ep(O, P, m, x, h),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("path", Ca({}, Q(r, !0), {
    className: b,
    d: ep(u, c, f, l, h)
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
var V2 = ["x", "y", "top", "left", "width", "height", "className"];
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
function tp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function X2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tp(Object(r), !0).forEach(function(n) {
      Y2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y2(e, t, r) {
  return t = Z2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z2(e) {
  var t = J2(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function J2(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q2(e, t) {
  if (e == null) return {};
  var r = eB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var tB = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, rB = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, f = t.width, l = f === void 0 ? 0 : f, h = t.height, p = h === void 0 ? 0 : h, v = t.className, d = Q2(t, V2), y = X2({
    x: n,
    y: a,
    top: s,
    left: c,
    width: l,
    height: p
  }, d);
  return !L(n) || !L(a) || !L(l) || !L(p) || !L(s) || !L(c) ? null : /* @__PURE__ */ A.createElement("path", bu({}, Q(y, !0), {
    className: ee("recharts-cross", v),
    d: tB(n, a, l, p, s, c)
  }));
}, nB = Xd, iB = nB(Object.getPrototypeOf, Object), aB = iB, oB = Lt, sB = aB, uB = Rt, cB = "[object Object]", lB = Function.prototype, fB = Object.prototype, Dy = lB.toString, hB = fB.hasOwnProperty, pB = Dy.call(Object);
function dB(e) {
  if (!uB(e) || oB(e) != cB)
    return !1;
  var t = sB(e);
  if (t === null)
    return !0;
  var r = hB.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Dy.call(r) == pB;
}
var vB = dB;
const yB = /* @__PURE__ */ ce(vB);
var mB = Lt, gB = Rt, bB = "[object Boolean]";
function xB(e) {
  return e === !0 || e === !1 || gB(e) && mB(e) == bB;
}
var wB = xB;
const _B = /* @__PURE__ */ ce(wB);
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
function OB(e, t) {
  return $B(e) || PB(e, t) || AB(e, t) || SB();
}
function SB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AB(e, t) {
  if (e) {
    if (typeof e == "string") return rp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rp(e, t);
  }
}
function rp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PB(e, t) {
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
function $B(e) {
  if (Array.isArray(e)) return e;
}
function np(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ip(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? np(Object(r), !0).forEach(function(n) {
      jB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jB(e, t, r) {
  return t = TB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TB(e) {
  var t = EB(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function EB(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ap = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, MB = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, CB = function(t) {
  var r = ip(ip({}, MB), t), n = Vi(), i = Ut(-1), a = OB(i, 2), o = a[0], s = a[1];
  Za(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var b = n.current.getTotalLength();
        b && s(b);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, h = r.height, p = r.className, v = r.animationEasing, d = r.animationDuration, y = r.animationBegin, g = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || f !== +f || l !== +l || h !== +h || f === 0 && l === 0 || h === 0)
    return null;
  var w = ee("recharts-trapezoid", p);
  return g ? /* @__PURE__ */ A.createElement(_t, {
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
    duration: d,
    animationEasing: v,
    isActive: g
  }, function(b) {
    var _ = b.upperWidth, m = b.lowerWidth, x = b.height, O = b.x, P = b.y;
    return /* @__PURE__ */ A.createElement(_t, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: y,
      duration: d,
      easing: v
    }, /* @__PURE__ */ A.createElement("path", ka({}, Q(r, !0), {
      className: w,
      d: ap(O, P, _, m, x),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", ka({}, Q(r, !0), {
    className: w,
    d: ap(u, c, f, l, h)
  })));
}, kB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function NB(e, t) {
  if (e == null) return {};
  var r = DB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function op(e, t) {
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
    t % 2 ? op(Object(r), !0).forEach(function(n) {
      IB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : op(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IB(e, t, r) {
  return t = BB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BB(e) {
  var t = LB(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function LB(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RB(e, t) {
  return Na(Na({}, t), e);
}
function FB(e, t) {
  return e === "symbols";
}
function sp(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ A.createElement(Rc, r);
    case "trapezoid":
      return /* @__PURE__ */ A.createElement(CB, r);
    case "sector":
      return /* @__PURE__ */ A.createElement(Sy, r);
    case "symbols":
      if (FB(t))
        return /* @__PURE__ */ A.createElement(bo, r);
      break;
    default:
      return null;
  }
}
function zB(e) {
  return /* @__PURE__ */ gt(e) ? e.props : e;
}
function xu(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? RB : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, u = NB(e, kB), c;
  if (/* @__PURE__ */ gt(t))
    c = /* @__PURE__ */ Se(t, Na(Na({}, u), zB(t)));
  else if (Z(t))
    c = t(u);
  else if (yB(t) && !_B(t)) {
    var f = i(t, u);
    c = /* @__PURE__ */ A.createElement(sp, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = u;
    c = /* @__PURE__ */ A.createElement(sp, {
      shapeType: r,
      elementProps: l
    });
  }
  return s ? /* @__PURE__ */ A.createElement(ue, {
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
function WB(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function UB(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function KB(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function qB(e, t) {
  var r;
  return ko(e, t) ? r = WB : No(e, t) ? r = UB : vi(e, t) && (r = KB), r;
}
function HB(e, t) {
  var r;
  return ko(e, t) ? r = "trapezoids" : No(e, t) ? r = "sectors" : vi(e, t) && (r = "points"), r;
}
function GB(e, t) {
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
function VB(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = HB(r, t), a = GB(r, t), o = n.filter(function(u, c) {
    var f = Ei(a, u), l = r.props[i].filter(function(v) {
      var d = qB(r, t);
      return d(v, t);
    }), h = r.props[i].indexOf(l[l.length - 1]), p = c === h;
    return f && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var XB = Math.ceil, YB = Math.max;
function ZB(e, t, r, n) {
  for (var i = -1, a = YB(XB((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var JB = ZB, QB = dv, up = 1 / 0, eL = 17976931348623157e292;
function tL(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = QB(e), e === up || e === -up) {
    var t = e < 0 ? -1 : 1;
    return t * eL;
  }
  return e === e ? e : 0;
}
var Iy = tL, rL = JB, nL = _o, fs = Iy;
function iL(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && nL(t, r, n) && (r = n = void 0), t = fs(t), r === void 0 ? (r = t, t = 0) : r = fs(r), n = n === void 0 ? t < r ? 1 : -1 : fs(n), rL(t, r, n, e);
  };
}
var aL = iL, oL = aL, sL = oL(), uL = sL;
const Da = /* @__PURE__ */ ce(uL);
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cp(Object(r), !0).forEach(function(n) {
      By(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function By(e, t, r) {
  return t = cL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cL(e) {
  var t = lL(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function lL(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fL = ["Webkit", "Moz", "O", "ms"], hL = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = fL.reduce(function(a, o) {
    return lp(lp({}, a), {}, By({}, o + n, r));
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
function fp(e, t) {
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
    t % 2 ? fp(Object(r), !0).forEach(function(n) {
      Ve(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ry(n.key), n);
  }
}
function dL(e, t, r) {
  return t && hp(e.prototype, t), r && hp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vL(e, t, r) {
  return t = Ba(t), yL(e, Ly() ? Reflect.construct(t, r || [], Ba(e).constructor) : t.apply(e, r));
}
function yL(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mL(e);
}
function mL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ly() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ly = function() {
    return !!e;
  })();
}
function Ba(e) {
  return Ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ba(e);
}
function gL(e, t) {
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
  return t = Ry(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ry(e) {
  var t = bL(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function bL(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var xL = function(t) {
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
}, pp = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Gr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return pL(this, t), n = vL(this, t, [r]), Ve(n, "handleDrag", function(i) {
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
      var a = pp(i) ? i.changedTouches[0] : i;
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
  return gL(t, e), dL(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, u = s.gap, c = s.data, f = c.length - 1, l = Math.min(i, a), h = Math.max(i, a), p = t.getIndexInRange(o, l), v = t.getIndexInRange(o, h);
      return {
        startIndex: p - p % u,
        endIndex: v === f ? f : v - v % u
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
      var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, u = this.props, c = u.x, f = u.width, l = u.travellerWidth, h = u.startIndex, p = u.endIndex, v = u.onChange, d = n.pageX - a;
      d > 0 ? d = Math.min(d, c + f - l - s, c + f - l - o) : d < 0 && (d = Math.max(d, c - o, c - s));
      var y = this.getIndex({
        startX: o + d,
        endX: s + d
      });
      (y.startIndex !== h || y.endIndex !== p) && v && v(y), this.setState({
        startX: o + d,
        endX: s + d,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = pp(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, u = i.startX, c = this.state[o], f = this.props, l = f.x, h = f.width, p = f.travellerWidth, v = f.onChange, d = f.gap, y = f.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = n.pageX - a;
      w > 0 ? w = Math.min(w, l + h - p - c) : w < 0 && (w = Math.max(w, l - c)), g[o] = c + w;
      var b = this.getIndex(g), _ = b.startIndex, m = b.endIndex, x = function() {
        var P = y.length - 1;
        return o === "startX" && (s > u ? _ % d === 0 : m % d === 0) || s < u && m === P || o === "endX" && (s > u ? m % d === 0 : _ % d === 0) || s > u && m === P;
      };
      this.setState(Ve(Ve({}, o, c + w), "brushMoveStartX", n.pageX), function() {
        v && x() && v(b);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, s = o.scaleValues, u = o.startX, c = o.endX, f = this.state[i], l = s.indexOf(f);
      if (l !== -1) {
        var h = l + n;
        if (!(h === -1 || h >= s.length)) {
          var p = s[h];
          i === "startX" && p >= c || i === "endX" && p <= u || this.setState(Ve({}, i, p), function() {
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
      return /* @__PURE__ */ A.createElement("rect", {
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
      return l ? /* @__PURE__ */ A.cloneElement(l, {
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
      var a, o, s = this, u = this.props, c = u.y, f = u.travellerWidth, l = u.height, h = u.traveller, p = u.ariaLabel, v = u.data, d = u.startIndex, y = u.endIndex, g = Math.max(n, this.props.x), w = hs(hs({}, Q(this.props, !1)), {}, {
        x: g,
        y: c,
        width: f,
        height: l
      }), b = p || "Min value: ".concat((a = v[d]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = v[y]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ A.createElement(ue, {
        tabIndex: 0,
        role: "slider",
        "aria-label": b,
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
      }, t.renderTraveller(h, w));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, s = a.height, u = a.stroke, c = a.travellerWidth, f = Math.min(n, i) + c, l = Math.max(Math.abs(i - n) - c, 0);
      return /* @__PURE__ */ A.createElement("rect", {
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
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, u = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, h = f.endX, p = 5, v = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ A.createElement(ue, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ A.createElement(la, Ia({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, h) - p,
        y: o + s / 2
      }, v), this.getTextOfTick(i)), /* @__PURE__ */ A.createElement(la, Ia({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, h) + u + p,
        y: o + s / 2
      }, v), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, u = n.y, c = n.width, f = n.height, l = n.alwaysShowText, h = this.state, p = h.startX, v = h.endX, d = h.isTextActive, y = h.isSlideMoving, g = h.isTravellerMoving, w = h.isTravellerFocused;
      if (!i || !i.length || !L(s) || !L(u) || !L(c) || !L(f) || c <= 0 || f <= 0)
        return null;
      var b = ee("recharts-brush", a), _ = A.Children.count(o) === 1, m = hL("userSelect", "none");
      return /* @__PURE__ */ A.createElement(ue, {
        className: b,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(p, v), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(v, "endX"), (d || y || g || w || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, s = n.height, u = n.stroke, c = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: s,
        fill: u,
        stroke: "none"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: i + 1,
        y1: c,
        x2: i + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ A.createElement("line", {
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
      return /* @__PURE__ */ A.isValidElement(n) ? a = /* @__PURE__ */ A.cloneElement(n, i) : Z(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
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
        }, a && a.length ? xL({
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
        var h = i.scale.domain().map(function(p) {
          return i.scale(p);
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
}(It);
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
var wL = fc;
function _L(e, t) {
  var r;
  return wL(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var OL = _L, SL = zd, AL = Xt, PL = OL, $L = qe, jL = _o;
function TL(e, t, r) {
  var n = $L(e) ? SL : PL;
  return r && jL(e, t, r) && (t = void 0), n(e, AL(t));
}
var EL = TL;
const ML = /* @__PURE__ */ ce(EL);
var xt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, dp = cv;
function CL(e, t, r) {
  t == "__proto__" && dp ? dp(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var kL = CL, NL = kL, DL = sv, IL = Xt;
function BL(e, t) {
  var r = {};
  return t = IL(t), DL(e, function(n, i, a) {
    NL(r, i, t(n, i, a));
  }), r;
}
var LL = BL;
const RL = /* @__PURE__ */ ce(LL);
function FL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var zL = FL, WL = fc;
function UL(e, t) {
  var r = !0;
  return WL(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var KL = UL, qL = zL, HL = KL, GL = Xt, VL = qe, XL = _o;
function YL(e, t, r) {
  var n = VL(e) ? qL : HL;
  return r && XL(e, t, r) && (t = void 0), n(e, GL(t));
}
var ZL = YL;
const Fy = /* @__PURE__ */ ce(ZL);
var JL = ["x", "y"];
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
function vp(e, t) {
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
    t % 2 ? vp(Object(r), !0).forEach(function(n) {
      QL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QL(e, t, r) {
  return t = eR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eR(e) {
  var t = tR(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function tR(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rR(e, t) {
  if (e == null) return {};
  var r = nR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function iR(e, t) {
  var r = e.x, n = e.y, i = rR(e, JL), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || i.height), f = parseInt(c, 10), l = "".concat(t.width || i.width), h = parseInt(l, 10);
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
function yp(e) {
  return /* @__PURE__ */ A.createElement(xu, _u({
    shapeType: "rectangle",
    propTransformer: iR,
    activeClassName: "recharts-active-bar"
  }, e));
}
var aR = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || wx(n);
    return a ? t(n, i) : (a || mr(), r);
  };
}, oR = ["value", "background"], zy;
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function sR(e, t) {
  if (e == null) return {};
  var r = uR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uR(e, t) {
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
function mp(e, t) {
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
    t % 2 ? mp(Object(r), !0).forEach(function(n) {
      qt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Uy(n.key), n);
  }
}
function lR(e, t, r) {
  return t && gp(e.prototype, t), r && gp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fR(e, t, r) {
  return t = Ra(t), hR(e, Wy() ? Reflect.construct(t, r || [], Ra(e).constructor) : t.apply(e, r));
}
function hR(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pR(e);
}
function pR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wy = function() {
    return !!e;
  })();
}
function Ra(e) {
  return Ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ra(e);
}
function dR(e, t) {
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
  return t = Uy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uy(e) {
  var t = vR(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function vR(e, t) {
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
    cR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = fR(this, t, [].concat(i)), qt(r, "state", {
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
  return dR(t, e), lR(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.dataKey, u = a.activeIndex, c = a.activeBar, f = Q(this.props, !1);
      return n && n.map(function(l, h) {
        var p = h === u, v = p ? c : o, d = me(me(me({}, f), l), {}, {
          isActive: p,
          option: v,
          index: h,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ A.createElement(ue, La({
          className: "recharts-bar-rectangle"
        }, Fn(i.props, l, h), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l == null ? void 0 : l.x, "-").concat(l == null ? void 0 : l.y, "-").concat(l == null ? void 0 : l.value, "-").concat(h)
        }), /* @__PURE__ */ A.createElement(yp, d));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, f = i.animationEasing, l = i.animationId, h = this.state.prevData;
      return /* @__PURE__ */ A.createElement(_t, {
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
      }, function(p) {
        var v = p.t, d = a.map(function(y, g) {
          var w = h && h[g];
          if (w) {
            var b = Re(w.x, y.x), _ = Re(w.y, y.y), m = Re(w.width, y.width), x = Re(w.height, y.height);
            return me(me({}, y), {}, {
              x: b(v),
              y: _(v),
              width: m(v),
              height: x(v)
            });
          }
          if (o === "horizontal") {
            var O = Re(0, y.height), P = O(v);
            return me(me({}, y), {}, {
              y: y.y + y.height - P,
              height: P
            });
          }
          var $ = Re(0, y.width), M = $(v);
          return me(me({}, y), {}, {
            width: M
          });
        });
        return /* @__PURE__ */ A.createElement(ue, null, n.renderRectanglesStatically(d));
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
        var l = c.background, h = sR(c, oR);
        if (!l)
          return null;
        var p = me(me(me(me(me({}, h), {}, {
          fill: "#eee"
        }, l), u), Fn(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ A.createElement(yp, La({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === s
        }, p));
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
      var h = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(y, g) {
        var w = Array.isArray(y.value) ? y.value[1] : y.value;
        return {
          x: y.x,
          y: y.y,
          value: w,
          errorVal: ke(y, g)
        };
      }, v = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ue, v, l.map(function(d) {
        return /* @__PURE__ */ A.cloneElement(d, {
          key: "error-bar-".concat(i, "-").concat(d.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: u,
          layout: c,
          offset: h,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, u = n.yAxis, c = n.left, f = n.top, l = n.width, h = n.height, p = n.isAnimationActive, v = n.background, d = n.id;
      if (i || !a || !a.length)
        return null;
      var y = this.state.isAnimationFinished, g = ee("recharts-bar", o), w = s && s.allowDataOverflow, b = u && u.allowDataOverflow, _ = w || b, m = X(d) ? this.id : d;
      return /* @__PURE__ */ A.createElement(ue, {
        className: g
      }, w || b ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? c : c - l / 2,
        y: b ? f : f - h / 2,
        width: w ? l : l * 2,
        height: b ? h : h * 2
      }))) : null, /* @__PURE__ */ A.createElement(ue, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(m, ")") : null
      }, v ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, m), (!p || y) && Ct.renderCallByParent(this.props, a));
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
}(It);
zy = Te;
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
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, h = e.offset, p = qN(n, r);
  if (!p)
    return null;
  var v = t.layout, d = r.type.defaultProps, y = d !== void 0 ? me(me({}, d), r.props) : r.props, g = y.dataKey, w = y.children, b = y.minPointSize, _ = v === "horizontal" ? o : a, m = c ? _.scale.domain() : null, x = QN({
    numericAxis: _
  }), O = Ke(w, Ai), P = l.map(function($, M) {
    var j, T, N, k, C, D;
    c ? j = HN(c[f + M], m) : (j = ke($, g), Array.isArray(j) || (j = [x, j]));
    var I = aR(b, zy.defaultProps.minPointSize)(j[1], M);
    if (v === "horizontal") {
      var R, F = [o.scale(j[0]), o.scale(j[1])], q = F[0], G = F[1];
      T = mh({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: p.offset,
        entry: $,
        index: M
      }), N = (R = G ?? q) !== null && R !== void 0 ? R : void 0, k = p.size;
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
      if (T = ye, N = mh({
        axis: o,
        ticks: u,
        bandSize: i,
        offset: p.offset,
        entry: $,
        index: M
      }), k = He - ye, C = p.size, D = {
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
      tooltipPayload: [wy(r, $)],
      tooltipPosition: {
        x: T + k / 2,
        y: N + C / 2
      }
    });
  });
  return me({
    data: P,
    layout: v
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
function yR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ky(n.key), n);
  }
}
function mR(e, t, r) {
  return t && bp(e.prototype, t), r && bp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xp(e, t) {
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
    t % 2 ? xp(Object(r), !0).forEach(function(n) {
      Do(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Do(e, t, r) {
  return t = Ky(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ky(e) {
  var t = gR(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function gR(e, t) {
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
  return f.reduce(function(p, v) {
    var d = r[v], y = d.orientation, g = d.domain, w = d.padding, b = w === void 0 ? {} : w, _ = d.mirror, m = d.reversed, x = "".concat(y).concat(_ ? "Mirror" : ""), O, P, $, M, j;
    if (d.type === "number" && (d.padding === "gap" || d.padding === "no-gap")) {
      var T = g[1] - g[0], N = 1 / 0, k = d.categoricalDomain.sort(Ax);
      if (k.forEach(function(le, ye) {
        ye > 0 && (N = Math.min((le || 0) - (k[ye - 1] || 0), N));
      }), Number.isFinite(N)) {
        var C = N / T, D = d.layout === "vertical" ? n.height : n.width;
        if (d.padding === "gap" && (O = C * D / 2), d.padding === "no-gap") {
          var I = vr(t.barCategoryGap, C * D), R = C * D / 2;
          O = R - I - (R - I) / D * I;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (b.left || 0) + (O || 0), n.left + n.width - (b.right || 0) - (O || 0)] : i === "yAxis" ? P = u === "horizontal" ? [n.top + n.height - (b.bottom || 0), n.top + (b.top || 0)] : [n.top + (b.top || 0) + (O || 0), n.top + n.height - (b.bottom || 0) - (O || 0)] : P = d.range, m && (P = [P[1], P[0]]);
    var F = UN(d, a, h), q = F.scale, G = F.realScaleType;
    q.domain(g).range(P), KN(q);
    var W = JN(q, lt(lt({}, d), {}, {
      realScaleType: G
    }));
    i === "xAxis" ? (j = y === "top" && !_ || y === "bottom" && _, $ = n.left, M = l[x] - j * d.height) : i === "yAxis" && (j = y === "left" && !_ || y === "right" && _, $ = l[x] - j * d.width, M = n.top);
    var V = lt(lt(lt({}, d), W), {}, {
      realScaleType: G,
      x: $,
      y: M,
      scale: q,
      width: i === "xAxis" ? n.width : d.width,
      height: i === "yAxis" ? n.height : d.height
    });
    return V.bandSize = Aa(V, W), !d.hide && i === "xAxis" ? l[x] += (j ? -1 : 1) * V.height : d.hide || (l[x] += (j ? -1 : 1) * V.width), lt(lt({}, p), {}, Do({}, v, V));
  }, {});
}, qy = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, bR = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return qy({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Hy = /* @__PURE__ */ function() {
  function e(t) {
    yR(this, e), this.scale = t;
  }
  return mR(e, [{
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
Do(Hy, "EPS", 1e-4);
var Wc = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return lt(lt({}, n), {}, Do({}, i, Hy.create(t[i])));
  }, {});
  return lt(lt({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return RL(i, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return Fy(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function xR(e) {
  return (e % 180 + 180) % 180;
}
var wR = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = xR(i), o = a * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, _R = Xt, OR = Si, SR = xo;
function AR(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!OR(t)) {
      var a = _R(r);
      t = SR(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var PR = AR, $R = Iy;
function jR(e) {
  var t = $R(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var TR = jR, ER = tv, MR = Xt, CR = TR, kR = Math.max;
function NR(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : CR(r);
  return i < 0 && (i = kR(n + i, 0)), ER(e, MR(t), i);
}
var DR = NR, IR = PR, BR = DR, LR = IR(BR), RR = LR;
const FR = /* @__PURE__ */ ce(RR);
var zR = $0(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), Uc = /* @__PURE__ */ br(void 0), Kc = /* @__PURE__ */ br(void 0), Gy = /* @__PURE__ */ br(void 0), Vy = /* @__PURE__ */ br({}), Xy = /* @__PURE__ */ br(void 0), Yy = /* @__PURE__ */ br(0), Zy = /* @__PURE__ */ br(0), wp = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, f = zR(a);
  return /* @__PURE__ */ A.createElement(Uc.Provider, {
    value: n
  }, /* @__PURE__ */ A.createElement(Kc.Provider, {
    value: i
  }, /* @__PURE__ */ A.createElement(Vy.Provider, {
    value: a
  }, /* @__PURE__ */ A.createElement(Gy.Provider, {
    value: f
  }, /* @__PURE__ */ A.createElement(Xy.Provider, {
    value: o
  }, /* @__PURE__ */ A.createElement(Yy.Provider, {
    value: c
  }, /* @__PURE__ */ A.createElement(Zy.Provider, {
    value: u
  }, s)))))));
}, WR = function() {
  return Bt(Xy);
}, Jy = function(t) {
  var r = Bt(Uc);
  r == null && mr();
  var n = r[t];
  return n == null && mr(), n;
}, UR = function() {
  var t = Bt(Uc);
  return Kt(t);
}, KR = function() {
  var t = Bt(Kc), r = FR(t, function(n) {
    return Fy(n.domain, Number.isFinite);
  });
  return r || Kt(t);
}, Qy = function(t) {
  var r = Bt(Kc);
  r == null && mr();
  var n = r[t];
  return n == null && mr(), n;
}, qR = function() {
  var t = Bt(Gy);
  return t;
}, HR = function() {
  return Bt(Vy);
}, qc = function() {
  return Bt(Zy);
}, Hc = function() {
  return Bt(Yy);
};
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function GR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tm(n.key), n);
  }
}
function XR(e, t, r) {
  return t && VR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function YR(e, t, r) {
  return t = Fa(t), ZR(e, em() ? Reflect.construct(t, r || [], Fa(e).constructor) : t.apply(e, r));
}
function ZR(e, t) {
  if (t && (Xr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JR(e);
}
function JR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function em() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (em = function() {
    return !!e;
  })();
}
function Fa(e) {
  return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fa(e);
}
function QR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Su(e, t);
}
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Su(e, t);
}
function _p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _p(Object(r), !0).forEach(function(n) {
      Gc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gc(e, t, r) {
  return t = tm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tm(e) {
  var t = e3(e, "string");
  return Xr(t) == "symbol" ? t : t + "";
}
function e3(e, t) {
  if (Xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function t3(e, t) {
  return a3(e) || i3(e, t) || n3(e, t) || r3();
}
function r3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n3(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sp(e, t);
  }
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i3(e, t) {
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
function a3(e) {
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
var o3 = function(t, r) {
  var n;
  return /* @__PURE__ */ A.isValidElement(t) ? n = /* @__PURE__ */ A.cloneElement(t, r) : Z(t) ? n = t(r) : n = /* @__PURE__ */ A.createElement("line", Au({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, s3 = function(t, r, n, i, a, o, s, u, c) {
  var f = a.x, l = a.y, h = a.width, p = a.height;
  if (n) {
    var v = c.y, d = t.y.apply(v, {
      position: o
    });
    if (xt(c, "discard") && !t.y.isInRange(d))
      return null;
    var y = [{
      x: f + h,
      y: d
    }, {
      x: f,
      y: d
    }];
    return u === "left" ? y.reverse() : y;
  }
  if (r) {
    var g = c.x, w = t.x.apply(g, {
      position: o
    });
    if (xt(c, "discard") && !t.x.isInRange(w))
      return null;
    var b = [{
      x: w,
      y: l + p
    }, {
      x: w,
      y: l
    }];
    return s === "top" ? b.reverse() : b;
  }
  if (i) {
    var _ = c.segment, m = _.map(function(x) {
      return t.apply(x, {
        position: o
      });
    });
    return xt(c, "discard") && ML(m, function(x) {
      return !t.isInRange(x);
    }) ? null : m;
  }
  return null;
};
function u3(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = WR(), f = Jy(i), l = Qy(a), h = qR();
  if (!c || !h)
    return null;
  Et(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Wc({
    x: f.scale,
    y: l.scale
  }), v = Ae(t), d = Ae(r), y = n && n.length === 2, g = s3(p, v, d, y, h, e.position, f.orientation, l.orientation, e);
  if (!g)
    return null;
  var w = t3(g, 2), b = w[0], _ = b.x, m = b.y, x = w[1], O = x.x, P = x.y, $ = xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, M = Op(Op({
    clipPath: $
  }, Q(e, !0)), {}, {
    x1: _,
    y1: m,
    x2: O,
    y2: P
  });
  return /* @__PURE__ */ A.createElement(ue, {
    className: ee("recharts-reference-line", s)
  }, o3(o, M), De.renderCallByParent(e, bR({
    x1: _,
    y1: m,
    x2: O,
    y2: P
  })));
}
var Vc = /* @__PURE__ */ function(e) {
  function t() {
    return GR(this, t), YR(this, t, arguments);
  }
  return QR(t, e), XR(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(u3, this.props);
    }
  }]);
}(A.Component);
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
function Ap(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ap(Object(r), !0).forEach(function(n) {
      Io(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ap(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nm(n.key), n);
  }
}
function f3(e, t, r) {
  return t && l3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function h3(e, t, r) {
  return t = za(t), p3(e, rm() ? Reflect.construct(t, r || [], za(e).constructor) : t.apply(e, r));
}
function p3(e, t) {
  if (t && (Yr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d3(e);
}
function d3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rm = function() {
    return !!e;
  })();
}
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, za(e);
}
function v3(e, t) {
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
  return t = nm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nm(e) {
  var t = y3(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
function y3(e, t) {
  if (Yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var m3 = function(t) {
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
    return c3(this, t), h3(this, t, arguments);
  }
  return v3(t, e), f3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ae(i), f = Ae(a);
      if (Et(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = m3(this.props);
      if (!l)
        return null;
      var h = l.x, p = l.y, v = this.props, d = v.shape, y = v.className, g = xt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, w = Pp(Pp({
        clipPath: g
      }, Q(this.props, !0)), {}, {
        cx: h,
        cy: p
      });
      return /* @__PURE__ */ A.createElement(ue, {
        className: ee("recharts-reference-dot", y)
      }, t.renderDot(d, w), De.renderCallByParent(this.props, {
        x: h - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(A.Component);
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
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Fc, Pu({}, t, {
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
function $p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $p(Object(r), !0).forEach(function(n) {
      Lo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, am(n.key), n);
  }
}
function x3(e, t, r) {
  return t && b3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function w3(e, t, r) {
  return t = Wa(t), _3(e, im() ? Reflect.construct(t, r || [], Wa(e).constructor) : t.apply(e, r));
}
function _3(e, t) {
  if (t && (Zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O3(e);
}
function O3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function im() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (im = function() {
    return !!e;
  })();
}
function Wa(e) {
  return Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wa(e);
}
function S3(e, t) {
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
  return t = am(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function am(e) {
  var t = A3(e, "string");
  return Zr(t) == "symbol" ? t : t + "";
}
function A3(e, t) {
  if (Zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var P3 = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, u = a.y1, c = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l) return null;
  var h = Wc({
    x: f.scale,
    y: l.scale
  }), p = {
    x: t ? h.x.apply(o, {
      position: "start"
    }) : h.x.rangeMin,
    y: n ? h.y.apply(u, {
      position: "start"
    }) : h.y.rangeMin
  }, v = {
    x: r ? h.x.apply(s, {
      position: "end"
    }) : h.x.rangeMax,
    y: i ? h.y.apply(c, {
      position: "end"
    }) : h.y.rangeMax
  };
  return xt(a, "discard") && (!h.isInRange(p) || !h.isInRange(v)) ? null : qy(p, v);
}, Ro = /* @__PURE__ */ function(e) {
  function t() {
    return g3(this, t), w3(this, t, arguments);
  }
  return S3(t, e), x3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, f = n.clipPathId;
      Et(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = Ae(i), h = Ae(a), p = Ae(o), v = Ae(s), d = this.props.shape;
      if (!l && !h && !p && !v && !d)
        return null;
      var y = P3(l, h, p, v, this.props);
      if (!y && !d)
        return null;
      var g = xt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ A.createElement(ue, {
        className: ee("recharts-reference-area", u)
      }, t.renderRect(d, jp(jp({
        clipPath: g
      }, Q(this.props, !0)), y)), De.renderCallByParent(this.props, y));
    }
  }]);
}(A.Component);
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
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Rc, ju({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function om(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function $3(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return wR(n, r);
}
function j3(e, t, r) {
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
function T3(e, t) {
  return om(e, t + 1);
}
function E3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, f = o, l = function() {
    var v = n == null ? void 0 : n[u];
    if (v === void 0)
      return {
        v: om(n, c)
      };
    var d = u, y, g = function() {
      return y === void 0 && (y = r(v, d)), y;
    }, w = v.coordinate, b = u === 0 || Ua(e, w, g, f, s);
    b || (u = 0, f = o, c += 1), b && (f = w + e * (g() / 2 + i), u += c);
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
function Tp(e, t) {
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
    t % 2 ? Tp(Object(r), !0).forEach(function(n) {
      M3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function M3(e, t, r) {
  return t = C3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C3(e) {
  var t = k3(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function k3(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function N3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, u = t.end, c = function(h) {
    var p = a[h], v, d = function() {
      return v === void 0 && (v = r(p, h)), v;
    };
    if (h === o - 1) {
      var y = e * (p.coordinate + e * d() / 2 - u);
      a[h] = p = Ne(Ne({}, p), {}, {
        tickCoord: y > 0 ? p.coordinate - y * e : p.coordinate
      });
    } else
      a[h] = p = Ne(Ne({}, p), {}, {
        tickCoord: p.coordinate
      });
    var g = Ua(e, p.tickCoord, d, s, u);
    g && (u = p.tickCoord - e * (d() / 2 + i), a[h] = Ne(Ne({}, p), {}, {
      isShow: !0
    }));
  }, f = o - 1; f >= 0; f--)
    c(f);
  return a;
}
function D3(e, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (a) {
    var f = n[s - 1], l = r(f, s - 1), h = e * (f.coordinate + e * l / 2 - c);
    o[s - 1] = f = Ne(Ne({}, f), {}, {
      tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate
    });
    var p = Ua(e, f.tickCoord, function() {
      return l;
    }, u, c);
    p && (c = f.tickCoord - e * (l / 2 + i), o[s - 1] = Ne(Ne({}, f), {}, {
      isShow: !0
    }));
  }
  for (var v = a ? s - 1 : s, d = function(w) {
    var b = o[w], _, m = function() {
      return _ === void 0 && (_ = r(b, w)), _;
    };
    if (w === 0) {
      var x = e * (b.coordinate - e * m() / 2 - u);
      o[w] = b = Ne(Ne({}, b), {}, {
        tickCoord: x < 0 ? b.coordinate - x * e : b.coordinate
      });
    } else
      o[w] = b = Ne(Ne({}, b), {}, {
        tickCoord: b.coordinate
      });
    var O = Ua(e, b.tickCoord, m, u, c);
    O && (u = b.tickCoord + e * (m() / 2 + i), o[w] = Ne(Ne({}, b), {}, {
      isShow: !0
    }));
  }, y = 0; y < v; y++)
    d(y);
  return o;
}
function Xc(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, f = e.unit, l = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (L(u) || wr.isSsr)
    return T3(i, typeof u == "number" && L(u) ? u : 0);
  var h = [], p = s === "top" || s === "bottom" ? "width" : "height", v = f && p === "width" ? kn(f, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, d = function(b, _) {
    var m = Z(c) ? c(b.value, _) : b.value;
    return p === "width" ? $3(kn(m, {
      fontSize: t,
      letterSpacing: r
    }), v, l) : kn(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, y = i.length >= 2 ? pt(i[1].coordinate - i[0].coordinate) : 1, g = j3(a, y, p);
  return u === "equidistantPreserveStart" ? E3(y, g, d, i, o) : (u === "preserveStart" || u === "preserveStartEnd" ? h = D3(y, g, d, i, o, u === "preserveStartEnd") : h = N3(y, g, d, i, o), h.filter(function(w) {
    return w.isShow;
  }));
}
var I3 = ["viewBox"], B3 = ["viewBox"], L3 = ["ticks"];
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
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ep(Object(r), !0).forEach(function(n) {
      Yc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ep(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ps(e, t) {
  if (e == null) return {};
  var r = R3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function R3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function F3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, um(n.key), n);
  }
}
function z3(e, t, r) {
  return t && Mp(e.prototype, t), r && Mp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W3(e, t, r) {
  return t = Ka(t), U3(e, sm() ? Reflect.construct(t, r || [], Ka(e).constructor) : t.apply(e, r));
}
function U3(e, t) {
  if (t && (Jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return K3(e);
}
function K3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sm = function() {
    return !!e;
  })();
}
function Ka(e) {
  return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ka(e);
}
function q3(e, t) {
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
  return t = um(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function um(e) {
  var t = H3(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function H3(e, t) {
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
    return F3(this, t), n = W3(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return q3(t, e), z3(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = ps(n, I3), s = this.props, u = s.viewBox, c = ps(s, B3);
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
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.orientation, f = i.tickSize, l = i.mirror, h = i.tickMargin, p, v, d, y, g, w, b = l ? -1 : 1, _ = n.tickSize || f, m = L(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          p = v = n.coordinate, y = o + +!l * u, d = y - b * _, w = d - b * h, g = m;
          break;
        case "left":
          d = y = n.coordinate, v = a + +!l * s, p = v - b * _, g = p - b * h, w = m;
          break;
        case "right":
          d = y = n.coordinate, v = a + +l * s, p = v + b * _, g = p + b * h, w = m;
          break;
        default:
          p = v = n.coordinate, y = o + +l * u, d = y + b * _, w = d + b * h, g = m;
          break;
      }
      return {
        line: {
          x1: p,
          y1: d,
          x2: v,
          y2: y
        },
        tick: {
          x: g,
          y: w
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
        var p = +(u === "left" && !c || u === "right" && c);
        l = _e(_e({}, l), {}, {
          x1: i + p * o,
          y1: a,
          x2: i + p * o,
          y2: a + s
        });
      }
      return /* @__PURE__ */ A.createElement("line", Mr({}, l, {
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
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, f = s.tick, l = s.tickFormatter, h = s.unit, p = Xc(_e(_e({}, this.props), {}, {
          ticks: n
        }), i, a), v = this.getTickTextAnchor(), d = this.getTickVerticalAnchor(), y = Q(this.props, !1), g = Q(f, !1), w = _e(_e({}, y), {}, {
          fill: "none"
        }, Q(u, !1)), b = p.map(function(_, m) {
          var x = o.getTickLineCoord(_), O = x.line, P = x.tick, $ = _e(_e(_e(_e({
            textAnchor: v,
            verticalAnchor: d
          }, y), {}, {
            stroke: "none",
            fill: c
          }, g), P), {}, {
            index: m,
            payload: _,
            visibleTicksCount: p.length,
            tickFormatter: l
          });
          return /* @__PURE__ */ A.createElement(ue, Mr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(_.value, "-").concat(_.coordinate, "-").concat(_.tickCoord)
          }, Fn(o.props, _, m)), u && /* @__PURE__ */ A.createElement("line", Mr({}, w, O, {
            className: ee("recharts-cartesian-axis-tick-line", at(u, "className"))
          })), f && t.renderTickItem(f, $, "".concat(Z(l) ? l(_.value, m) : _.value).concat(h || "")));
        });
        return /* @__PURE__ */ A.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, b);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, u = i.ticksGenerator, c = i.className, f = i.hide;
      if (f)
        return null;
      var l = this.props, h = l.ticks, p = ps(l, L3), v = h;
      return Z(u) && (v = h && h.length > 0 ? u(this.props) : u(p)), o <= 0 || s <= 0 || !v || !v.length ? null : /* @__PURE__ */ A.createElement(ue, {
        className: ee("recharts-cartesian-axis", c),
        ref: function(y) {
          n.layerReference = y;
        }
      }, a && this.renderAxisLine(), this.renderTicks(v, this.state.fontSize, this.state.letterSpacing), De.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o, s = ee(i.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, _e(_e({}, i), {}, {
        className: s
      })) : Z(n) ? o = n(_e(_e({}, i), {}, {
        className: s
      })) : o = /* @__PURE__ */ A.createElement(la, Mr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(Zp);
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
var G3 = ["x1", "y1", "x2", "y2", "key"], V3 = ["offset"];
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function Cp(e, t) {
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
    t % 2 ? Cp(Object(r), !0).forEach(function(n) {
      X3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X3(e, t, r) {
  return t = Y3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y3(e) {
  var t = Z3(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function Z3(e, t) {
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
function kp(e, t) {
  if (e == null) return {};
  var r = J3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function J3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Q3 = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, u = t.ry;
  return /* @__PURE__ */ A.createElement("rect", {
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
function cm(e, t) {
  var r;
  if (/* @__PURE__ */ A.isValidElement(e))
    r = /* @__PURE__ */ A.cloneElement(e, t);
  else if (Z(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, u = kp(t, G3), c = Q(u, !1);
    c.offset;
    var f = kp(c, V3);
    r = /* @__PURE__ */ A.createElement("line", cr({}, f, {
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
function eF(e) {
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
    return cm(i, c);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function tF(e) {
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
    return cm(i, c);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function rF(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, u = e.horizontal, c = u === void 0 ? !0 : u;
  if (!c || !t || !t.length)
    return null;
  var f = s.map(function(h) {
    return Math.round(h + i - i);
  }).sort(function(h, p) {
    return h - p;
  });
  i !== f[0] && f.unshift(0);
  var l = f.map(function(h, p) {
    var v = !f[p + 1], d = v ? i + o - h : f[p + 1] - h;
    if (d <= 0)
      return null;
    var y = p % t.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(p),
      y: h,
      x: n,
      height: d,
      width: a,
      stroke: "none",
      fill: t[y],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function nF(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, u = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var f = c.map(function(h) {
    return Math.round(h + a - a);
  }).sort(function(h, p) {
    return h - p;
  });
  a !== f[0] && f.unshift(0);
  var l = f.map(function(h, p) {
    var v = !f[p + 1], d = v ? a + s - h : f[p + 1] - h;
    if (d <= 0)
      return null;
    var y = p % n.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(p),
      x: h,
      y: o,
      width: d,
      height: u,
      stroke: "none",
      fill: n[y],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var iF = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return by(Xc(Ie(Ie(Ie({}, xn.defaultProps), n), {}, {
    ticks: jt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, aF = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return by(Xc(Ie(Ie(Ie({}, xn.defaultProps), n), {}, {
    ticks: jt(n, !0),
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
  var t, r, n, i, a, o, s = qc(), u = Hc(), c = HR(), f = Ie(Ie({}, e), {}, {
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
  }), l = f.x, h = f.y, p = f.width, v = f.height, d = f.syncWithTicks, y = f.horizontalValues, g = f.verticalValues, w = UR(), b = KR();
  if (!L(p) || p <= 0 || !L(v) || v <= 0 || !L(l) || l !== +l || !L(h) || h !== +h)
    return null;
  var _ = f.verticalCoordinatesGenerator || iF, m = f.horizontalCoordinatesGenerator || aF, x = f.horizontalPoints, O = f.verticalPoints;
  if ((!x || !x.length) && Z(m)) {
    var P = y && y.length, $ = m({
      yAxis: b ? Ie(Ie({}, b), {}, {
        ticks: P ? y : b.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, P ? !0 : d);
    Et(Array.isArray($), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(gr($), "]")), Array.isArray($) && (x = $);
  }
  if ((!O || !O.length) && Z(_)) {
    var M = g && g.length, j = _({
      xAxis: w ? Ie(Ie({}, w), {}, {
        ticks: M ? g : w.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, M ? !0 : d);
    Et(Array.isArray(j), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(gr(j), "]")), Array.isArray(j) && (O = j);
  }
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ A.createElement(Q3, {
    fill: f.fill,
    fillOpacity: f.fillOpacity,
    x: f.x,
    y: f.y,
    width: f.width,
    height: f.height,
    ry: f.ry
  }), /* @__PURE__ */ A.createElement(eF, cr({}, f, {
    offset: c,
    horizontalPoints: x,
    xAxis: w,
    yAxis: b
  })), /* @__PURE__ */ A.createElement(tF, cr({}, f, {
    offset: c,
    verticalPoints: O,
    xAxis: w,
    yAxis: b
  })), /* @__PURE__ */ A.createElement(rF, cr({}, f, {
    horizontalPoints: x
  })), /* @__PURE__ */ A.createElement(nF, cr({}, f, {
    verticalPoints: O
  })));
}
nt.displayName = "CartesianGrid";
var oF = ["type", "layout", "connectNulls", "ref"], sF = ["key"];
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function Np(e, t) {
  if (e == null) return {};
  var r = uF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uF(e, t) {
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
function Dp(e, t) {
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
    t % 2 ? Dp(Object(r), !0).forEach(function(n) {
      ft(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tr(e) {
  return hF(e) || fF(e) || lF(e) || cF();
}
function cF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lF(e, t) {
  if (e) {
    if (typeof e == "string") return Mu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mu(e, t);
  }
}
function fF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hF(e) {
  if (Array.isArray(e)) return Mu(e);
}
function Mu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ip(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fm(n.key), n);
  }
}
function dF(e, t, r) {
  return t && Ip(e.prototype, t), r && Ip(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vF(e, t, r) {
  return t = qa(t), yF(e, lm() ? Reflect.construct(t, r || [], qa(e).constructor) : t.apply(e, r));
}
function yF(e, t) {
  if (t && (Qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return mF(e);
}
function mF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lm = function() {
    return !!e;
  })();
}
function qa(e) {
  return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qa(e);
}
function gF(e, t) {
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
  return t = fm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fm(e) {
  var t = bF(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function bF(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var At = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    pF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = vF(this, t, [].concat(i)), ft(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), ft(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), ft(r, "getStrokeDasharray", function(o, s, u) {
      var c = u.reduce(function(g, w) {
        return g + w;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var f = Math.floor(o / c), l = o % c, h = s - o, p = [], v = 0, d = 0; v < u.length; d += u[v], ++v)
        if (d + u[v] > l) {
          p = [].concat(Tr(u.slice(0, v)), [l - d]);
          break;
        }
      var y = p.length % 2 === 0 ? [0, h] : [h];
      return [].concat(Tr(t.repeat(u, f)), Tr(p), y).map(function(g) {
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
  return gF(t, e), dF(t, [{
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
      var h = function(d, y) {
        return {
          x: d.x,
          y: d.y,
          value: d.value,
          errorVal: ke(d.payload, y)
        };
      }, p = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ue, p, l.map(function(v) {
        return /* @__PURE__ */ A.cloneElement(v, {
          key: "bar-".concat(v.props.dataKey),
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
      var s = this.props, u = s.dot, c = s.points, f = s.dataKey, l = Q(this.props, !1), h = Q(u, !0), p = c.map(function(d, y) {
        var g = Ge(Ge(Ge({
          key: "dot-".concat(y),
          r: 3
        }, l), h), {}, {
          index: y,
          cx: d.x,
          cy: d.y,
          value: d.value,
          dataKey: f,
          payload: d.payload,
          points: c
        });
        return t.renderDotItem(u, g);
      }), v = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ue, Bn({
        className: "recharts-line-dots",
        key: "dots"
      }, v), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var s = this.props, u = s.type, c = s.layout, f = s.connectNulls;
      s.ref;
      var l = Np(s, oF), h = Ge(Ge(Ge({}, Q(l, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: f
      });
      return /* @__PURE__ */ A.createElement(ja, Bn({}, h, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, s = o.points, u = o.strokeDasharray, c = o.isAnimationActive, f = o.animationBegin, l = o.animationDuration, h = o.animationEasing, p = o.animationId, v = o.animateNewValues, d = o.width, y = o.height, g = this.state, w = g.prevPoints, b = g.totalLength;
      return /* @__PURE__ */ A.createElement(_t, {
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
        key: "line-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_) {
        var m = _.t;
        if (w) {
          var x = w.length / s.length, O = s.map(function(T, N) {
            var k = Math.floor(N * x);
            if (w[k]) {
              var C = w[k], D = Re(C.x, T.x), I = Re(C.y, T.y);
              return Ge(Ge({}, T), {}, {
                x: D(m),
                y: I(m)
              });
            }
            if (v) {
              var R = Re(d * 2, T.x), F = Re(y / 2, T.y);
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
        var P = Re(0, b), $ = P(m), M;
        if (u) {
          var j = "".concat(u).split(/[,\s]+/gim).map(function(T) {
            return parseFloat(T);
          });
          M = a.getStrokeDasharray($, b, j);
        } else
          M = a.generateSimpleStrokeDasharray(b, $);
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
      var n, i = this.props, a = i.hide, o = i.dot, s = i.points, u = i.className, c = i.xAxis, f = i.yAxis, l = i.top, h = i.left, p = i.width, v = i.height, d = i.isAnimationActive, y = i.id;
      if (a || !s || !s.length)
        return null;
      var g = this.state.isAnimationFinished, w = s.length === 1, b = ee("recharts-line", u), _ = c && c.allowDataOverflow, m = f && f.allowDataOverflow, x = _ || m, O = X(y) ? this.id : y, P = (n = Q(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, $ = P.r, M = $ === void 0 ? 3 : $, j = P.strokeWidth, T = j === void 0 ? 2 : j, N = Nx(o) ? o : {}, k = N.clipDot, C = k === void 0 ? !0 : k, D = M * 2 + T;
      return /* @__PURE__ */ A.createElement(ue, {
        className: b
      }, _ || m ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(O)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: _ ? h : h - p / 2,
        y: m ? l : l - v / 2,
        width: _ ? p : p * 2,
        height: m ? v : v * 2
      })), !C && /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-dots-".concat(O)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: h - D / 2,
        y: l - D / 2,
        width: p + D,
        height: v + D
      }))) : null, !w && this.renderCurve(x, O), this.renderErrorBar(x, O), (w || o) && this.renderDots(x, C, O), (!d || g) && Ct.renderCallByParent(this.props, s));
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
      if (/* @__PURE__ */ A.isValidElement(n))
        a = /* @__PURE__ */ A.cloneElement(n, i);
      else if (Z(n))
        a = n(i);
      else {
        var o = i.key, s = Np(i, sF), u = ee("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ A.createElement(Fc, Bn({
          key: o
        }, s, {
          className: u
        }));
      }
      return a;
    }
  }]);
}(It);
ft(At, "displayName", "Line");
ft(At, "defaultProps", {
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
ft(At, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, f = t.layout, l = u.map(function(h, p) {
    var v = ke(h, o);
    return f === "horizontal" ? {
      x: Sa({
        axis: r,
        ticks: i,
        bandSize: s,
        entry: h,
        index: p
      }),
      y: X(v) ? null : n.scale(v),
      value: v,
      payload: h
    } : {
      x: X(v) ? null : r.scale(v),
      y: Sa({
        axis: n,
        ticks: a,
        bandSize: s,
        entry: h,
        index: p
      }),
      value: v,
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
function xF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dm(n.key), n);
  }
}
function _F(e, t, r) {
  return t && wF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function OF(e, t, r) {
  return t = Ha(t), SF(e, hm() ? Reflect.construct(t, r || [], Ha(e).constructor) : t.apply(e, r));
}
function SF(e, t) {
  if (t && (en(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AF(e);
}
function AF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hm = function() {
    return !!e;
  })();
}
function Ha(e) {
  return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ha(e);
}
function PF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ku(e, t);
}
function ku(e, t) {
  return ku = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ku(e, t);
}
function pm(e, t, r) {
  return t = dm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dm(e) {
  var t = $F(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function $F(e, t) {
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
    return xF(this, t), OF(this, t, arguments);
  }
  return PF(t, e), _F(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(it.Component);
pm(Fo, "displayName", "ZAxis");
pm(Fo, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var jF = ["option", "isActive"];
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
function TF(e, t) {
  if (e == null) return {};
  var r = EF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function MF(e) {
  var t = e.option, r = e.isActive, n = TF(e, jF);
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
function Bp(e, t) {
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
    t % 2 ? Bp(Object(r), !0).forEach(function(n) {
      Ht(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ym(n.key), n);
  }
}
function kF(e, t, r) {
  return t && Lp(e.prototype, t), r && Lp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NF(e, t, r) {
  return t = Ga(t), DF(e, vm() ? Reflect.construct(t, r || [], Ga(e).constructor) : t.apply(e, r));
}
function DF(e, t) {
  if (t && (tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IF(e);
}
function IF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vm = function() {
    return !!e;
  })();
}
function Ga(e) {
  return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ga(e);
}
function BF(e, t) {
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
  return t = ym(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ym(e) {
  var t = LF(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function LF(e, t) {
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
    CF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = NF(this, t, [].concat(i)), Ht(r, "state", {
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
  return BF(t, e), kF(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.activeShape, u = a.activeIndex, c = Q(this.props, !1);
      return n.map(function(f, l) {
        var h = u === l, p = h ? s : o, v = tt(tt({}, c), f);
        return /* @__PURE__ */ A.createElement(ue, Rn({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(f == null ? void 0 : f.cx, "-").concat(f == null ? void 0 : f.cy, "-").concat(f == null ? void 0 : f.size, "-").concat(l)
        }, Fn(i.props, f, l), {
          role: "img"
        }), /* @__PURE__ */ A.createElement(MF, Rn({
          option: p,
          isActive: h,
          key: "symbol-".concat(l)
        }, v)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, s = i.animationBegin, u = i.animationDuration, c = i.animationEasing, f = i.animationId, l = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(_t, {
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
        var p = h.t, v = a.map(function(d, y) {
          var g = l && l[y];
          if (g) {
            var w = Re(g.cx, d.cx), b = Re(g.cy, d.cy), _ = Re(g.size, d.size);
            return tt(tt({}, d), {}, {
              cx: w(p),
              cy: b(p),
              size: _(p)
            });
          }
          var m = Re(0, d.size);
          return tt(tt({}, d), {}, {
            size: m(p)
          });
        });
        return /* @__PURE__ */ A.createElement(ue, null, n.renderSymbolsStatically(v));
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
        var h = f.props, p = h.direction, v = h.dataKey;
        return /* @__PURE__ */ A.cloneElement(f, {
          key: "".concat(p, "-").concat(v, "-").concat(a[l]),
          data: a,
          xAxis: o,
          yAxis: s,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(y, g) {
            return {
              x: y.cx,
              y: y.cy,
              value: p === "x" ? +y.node.x : +y.node.y,
              errorVal: ke(y, g)
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
        f = i.map(function(b) {
          return {
            x: b.cx,
            y: b.cy
          };
        });
      else if (o === "fitting") {
        var h = Sx(i), p = h.xmin, v = h.xmax, d = h.a, y = h.b, g = function(_) {
          return d * _ + y;
        };
        f = [{
          x: p,
          y: g(p)
        }, {
          x: v,
          y: g(v)
        }];
      }
      var w = tt(tt(tt({}, u), {}, {
        fill: "none",
        stroke: u && u.fill
      }, c), {}, {
        points: f
      });
      return /* @__PURE__ */ A.isValidElement(a) ? l = /* @__PURE__ */ A.cloneElement(a, w) : Z(a) ? l = a(w) : l = /* @__PURE__ */ A.createElement(ja, Rn({}, w, {
        type: s
      })), /* @__PURE__ */ A.createElement(ue, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, l);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.points, o = n.line, s = n.className, u = n.xAxis, c = n.yAxis, f = n.left, l = n.top, h = n.width, p = n.height, v = n.id, d = n.isAnimationActive;
      if (i || !a || !a.length)
        return null;
      var y = this.state.isAnimationFinished, g = ee("recharts-scatter", s), w = u && u.allowDataOverflow, b = c && c.allowDataOverflow, _ = w || b, m = X(v) ? this.id : v;
      return /* @__PURE__ */ A.createElement(ue, {
        className: g,
        clipPath: _ ? "url(#clipPath-".concat(m, ")") : null
      }, w || b ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? f : f - h / 2,
        y: b ? l : l - p / 2,
        width: w ? h : h * 2,
        height: b ? p : p * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ A.createElement(ue, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!d || y) && Ct.renderCallByParent(this.props, a));
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
}(It);
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
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, u = e.offset, c = i.props.tooltipType, f = Ke(i.props.children, Ai), l = X(t.dataKey) ? i.props.dataKey : t.dataKey, h = X(r.dataKey) ? i.props.dataKey : r.dataKey, p = n && n.dataKey, v = n ? n.range : Fo.defaultProps.range, d = v && v[0], y = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, w = a.map(function(b, _) {
    var m = ke(b, l), x = ke(b, h), O = !X(p) && ke(b, p) || "-", P = [{
      name: X(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: m,
      payload: b,
      dataKey: l,
      type: c
    }, {
      name: X(r.dataKey) ? i.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: b,
      dataKey: h,
      type: c
    }];
    O !== "-" && P.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: O,
      payload: b,
      dataKey: p,
      type: c
    });
    var $ = Sa({
      axis: t,
      ticks: o,
      bandSize: y,
      entry: b,
      index: _,
      dataKey: l
    }), M = Sa({
      axis: r,
      ticks: s,
      bandSize: g,
      entry: b,
      index: _,
      dataKey: h
    }), j = O !== "-" ? n.scale(O) : d, T = Math.sqrt(Math.max(j, 0) / Math.PI);
    return tt(tt({}, b), {}, {
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
        y: x,
        z: O
      },
      tooltipPayload: P,
      tooltipPosition: {
        x: $,
        y: M
      },
      payload: b
    }, f && f[_] && f[_].props);
  });
  return tt({
    points: w
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
function RF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bm(n.key), n);
  }
}
function zF(e, t, r) {
  return t && FF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function WF(e, t, r) {
  return t = Va(t), UF(e, mm() ? Reflect.construct(t, r || [], Va(e).constructor) : t.apply(e, r));
}
function UF(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return KF(e);
}
function KF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mm = function() {
    return !!e;
  })();
}
function Va(e) {
  return Va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Va(e);
}
function qF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Du(e, t);
}
function Du(e, t) {
  return Du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Du(e, t);
}
function gm(e, t, r) {
  return t = bm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bm(e) {
  var t = HF(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function HF(e, t) {
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
function GF(e) {
  var t = e.xAxisId, r = qc(), n = Hc(), i = Jy(t);
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
        return jt(o, !0);
      }
    }))
  );
}
var Be = /* @__PURE__ */ function(e) {
  function t() {
    return RF(this, t), WF(this, t, arguments);
  }
  return qF(t, e), zF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(GF, this.props);
    }
  }]);
}(it.Component);
gm(Be, "displayName", "XAxis");
gm(Be, "defaultProps", {
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
function VF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function XF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _m(n.key), n);
  }
}
function YF(e, t, r) {
  return t && XF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZF(e, t, r) {
  return t = Xa(t), JF(e, xm() ? Reflect.construct(t, r || [], Xa(e).constructor) : t.apply(e, r));
}
function JF(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QF(e);
}
function QF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xm = function() {
    return !!e;
  })();
}
function Xa(e) {
  return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xa(e);
}
function ez(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bu(e, t);
}
function Bu(e, t) {
  return Bu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bu(e, t);
}
function wm(e, t, r) {
  return t = _m(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _m(e) {
  var t = tz(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function tz(e, t) {
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
var rz = function(t) {
  var r = t.yAxisId, n = qc(), i = Hc(), a = Qy(r);
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
        return jt(s, !0);
      }
    }))
  );
}, Le = /* @__PURE__ */ function(e) {
  function t() {
    return VF(this, t), ZF(this, t, arguments);
  }
  return ez(t, e), YF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(rz, this.props);
    }
  }]);
}(it.Component);
wm(Le, "displayName", "YAxis");
wm(Le, "defaultProps", {
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
function Rp(e) {
  return oz(e) || az(e) || iz(e) || nz();
}
function nz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iz(e, t) {
  if (e) {
    if (typeof e == "string") return Ru(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ru(e, t);
  }
}
function az(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oz(e) {
  if (Array.isArray(e)) return Ru(e);
}
function Ru(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Fu = function(t, r, n, i, a) {
  var o = Ke(t, Vc), s = Ke(t, Bo), u = [].concat(Rp(o), Rp(s)), c = Ke(t, Ro), f = "".concat(i, "Id"), l = i[0], h = r;
  if (u.length && (h = u.reduce(function(d, y) {
    if (y.props[f] === n && xt(y.props, "extendDomain") && L(y.props[l])) {
      var g = y.props[l];
      return [Math.min(d[0], g), Math.max(d[1], g)];
    }
    return d;
  }, h)), c.length) {
    var p = "".concat(l, "1"), v = "".concat(l, "2");
    h = c.reduce(function(d, y) {
      if (y.props[f] === n && xt(y.props, "extendDomain") && L(y.props[p]) && L(y.props[v])) {
        var g = y.props[p], w = y.props[v];
        return [Math.min(d[0], g, w), Math.max(d[1], g, w)];
      }
      return d;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(d, y) {
    return L(y) ? [Math.min(d[0], y), Math.max(d[1], y)] : d;
  }, h)), h;
}, Om = { exports: {} };
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
    var p = new i(f, l || u, h), v = r ? r + c : c;
    return u._events[v] ? u._events[v].fn ? u._events[v] = [u._events[v], p] : u._events[v].push(p) : (u._events[v] = p, u._eventsCount++), u;
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
    for (var h = 0, p = l.length, v = new Array(p); h < p; h++)
      v[h] = l[h].fn;
    return v;
  }, s.prototype.listenerCount = function(c) {
    var f = r ? r + c : c, l = this._events[f];
    return l ? l.fn ? 1 : l.length : 0;
  }, s.prototype.emit = function(c, f, l, h, p, v) {
    var d = r ? r + c : c;
    if (!this._events[d]) return !1;
    var y = this._events[d], g = arguments.length, w, b;
    if (y.fn) {
      switch (y.once && this.removeListener(c, y.fn, void 0, !0), g) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, f), !0;
        case 3:
          return y.fn.call(y.context, f, l), !0;
        case 4:
          return y.fn.call(y.context, f, l, h), !0;
        case 5:
          return y.fn.call(y.context, f, l, h, p), !0;
        case 6:
          return y.fn.call(y.context, f, l, h, p, v), !0;
      }
      for (b = 1, w = new Array(g - 1); b < g; b++)
        w[b - 1] = arguments[b];
      y.fn.apply(y.context, w);
    } else {
      var _ = y.length, m;
      for (b = 0; b < _; b++)
        switch (y[b].once && this.removeListener(c, y[b].fn, void 0, !0), g) {
          case 1:
            y[b].fn.call(y[b].context);
            break;
          case 2:
            y[b].fn.call(y[b].context, f);
            break;
          case 3:
            y[b].fn.call(y[b].context, f, l);
            break;
          case 4:
            y[b].fn.call(y[b].context, f, l, h);
            break;
          default:
            if (!w) for (m = 1, w = new Array(g - 1); m < g; m++)
              w[m - 1] = arguments[m];
            y[b].fn.apply(y[b].context, w);
        }
    }
    return !0;
  }, s.prototype.on = function(c, f, l) {
    return a(this, c, f, l, !1);
  }, s.prototype.once = function(c, f, l) {
    return a(this, c, f, l, !0);
  }, s.prototype.removeListener = function(c, f, l, h) {
    var p = r ? r + c : c;
    if (!this._events[p]) return this;
    if (!f)
      return o(this, p), this;
    var v = this._events[p];
    if (v.fn)
      v.fn === f && (!h || v.once) && (!l || v.context === l) && o(this, p);
    else {
      for (var d = 0, y = [], g = v.length; d < g; d++)
        (v[d].fn !== f || h && !v[d].once || l && v[d].context !== l) && y.push(v[d]);
      y.length ? this._events[p] = y.length === 1 ? y[0] : y : o(this, p);
    }
    return this;
  }, s.prototype.removeAllListeners = function(c) {
    var f;
    return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(Om);
var sz = Om.exports;
const uz = /* @__PURE__ */ ce(sz);
var ds = new uz(), vs = "recharts.syncMouseEvents";
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function cz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sm(n.key), n);
  }
}
function fz(e, t, r) {
  return t && lz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ys(e, t, r) {
  return t = Sm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sm(e) {
  var t = hz(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function hz(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var pz = /* @__PURE__ */ function() {
  function e() {
    cz(this, e), ys(this, "activeIndex", 0), ys(this, "coordinateList", []), ys(this, "layout", "horizontal");
  }
  return fz(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, u = r.layout, c = u === void 0 ? null : u, f = r.offset, l = f === void 0 ? null : f, h = r.mouseHandlerCallback, p = h === void 0 ? null : h;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
function dz(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && L(n) && L(i))
      return !0;
  }
  return !1;
}
function vz(e, t, r, n) {
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
function Am(e) {
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
function yz(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, u = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, h = Ce(s, u, c, l), p = Ce(s, u, f, l);
      n = h.x, i = h.y, a = p.x, o = p.y;
    } else
      return Am(t);
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
function Fp(e, t) {
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
    t % 2 ? Fp(Object(r), !0).forEach(function(n) {
      mz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mz(e, t, r) {
  return t = gz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gz(e) {
  var t = bz(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function bz(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xz(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, h = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !a || !o || h !== "ScatterChart" && i !== "axis")
    return null;
  var v, d = ja;
  if (h === "ScatterChart")
    v = o, d = rB;
  else if (h === "BarChart")
    v = vz(l, o, u, f), d = Rc;
  else if (l === "radial") {
    var y = Am(o), g = y.cx, w = y.cy, b = y.radius, _ = y.startAngle, m = y.endAngle;
    v = {
      cx: g,
      cy: w,
      startAngle: _,
      endAngle: m,
      innerRadius: b,
      outerRadius: b
    }, d = Sy;
  } else
    v = {
      points: yz(l, o, u)
    }, d = ja;
  var x = Hi(Hi(Hi(Hi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), v), Q(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: ee("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ gt(p) ? /* @__PURE__ */ Se(p, x) : /* @__PURE__ */ Yp(d, x);
}
var wz = ["item"], _z = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
function zp(e, t) {
  return Az(e) || Sz(e, t) || $m(e, t) || Oz();
}
function Oz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sz(e, t) {
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
function Az(e) {
  if (Array.isArray(e)) return e;
}
function Wp(e, t) {
  if (e == null) return {};
  var r = Pz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Pz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function $z(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jm(n.key), n);
  }
}
function Tz(e, t, r) {
  return t && jz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ez(e, t, r) {
  return t = Ya(t), Mz(e, Pm() ? Reflect.construct(t, r || [], Ya(e).constructor) : t.apply(e, r));
}
function Mz(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Cz(e);
}
function Cz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pm = function() {
    return !!e;
  })();
}
function Ya(e) {
  return Ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ya(e);
}
function kz(e, t) {
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
  return Iz(e) || Dz(e) || $m(e) || Nz();
}
function Nz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $m(e, t) {
  if (e) {
    if (typeof e == "string") return Wu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wu(e, t);
  }
}
function Dz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Iz(e) {
  if (Array.isArray(e)) return Wu(e);
}
function Wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Up(e, t) {
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
    t % 2 ? Up(Object(r), !0).forEach(function(n) {
      H(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Up(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H(e, t, r) {
  return t = jm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jm(e) {
  var t = Bz(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function Bz(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lz = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Rz = {
  width: "100%",
  height: "100%"
}, Tm = {
  x: 0,
  y: 0
};
function Gi(e) {
  return e;
}
var Fz = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, zz = function(t, r, n, i) {
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
  return Tm;
}, zo = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(on(s), on(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function Em(e) {
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
      var p = l === void 0 ? s : l;
      h = Xi(p, o.dataKey, i);
    } else
      h = l && l[n] || s[n];
    return h ? [].concat(on(u), [wy(c, h)]) : u;
  }, []);
}, Kp = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = Fz(a, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, f = BN(o, s, c, u);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, h = Uu(t, r, f, l), p = zz(n, s, f, a);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: h,
      activeCoordinate: p
    };
  }
  return null;
}, Wz = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = t.stackOffset, p = gy(f, a);
  return n.reduce(function(v, d) {
    var y, g = d.type.defaultProps !== void 0 ? E(E({}, d.type.defaultProps), d.props) : d.props, w = g.type, b = g.dataKey, _ = g.allowDataOverflow, m = g.allowDuplicatedCategory, x = g.scale, O = g.ticks, P = g.includeHidden, $ = g[o];
    if (v[$])
      return v;
    var M = zo(t.data, {
      graphicalItems: i.filter(function(W) {
        var V, le = o in W.props ? W.props[o] : (V = W.type.defaultProps) === null || V === void 0 ? void 0 : V[o];
        return le === $;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), j = M.length, T, N, k;
    dz(g.domain, _, w) && (T = iu(g.domain, null, _), p && (w === "number" || x !== "auto") && (k = Dn(M, b, "category")));
    var C = Em(w);
    if (!T || T.length === 0) {
      var D, I = (D = g.domain) !== null && D !== void 0 ? D : C;
      if (b) {
        if (T = Dn(M, b, w), w === "category" && p) {
          var R = Ox(T);
          m && R ? (N = T, T = Da(0, j)) : m || (T = xh(I, T, d).reduce(function(W, V) {
            return W.indexOf(V) >= 0 ? W : [].concat(on(W), [V]);
          }, []));
        } else if (w === "category")
          m ? T = T.filter(function(W) {
            return W !== "" && !X(W);
          }) : T = xh(I, T, d).reduce(function(W, V) {
            return W.indexOf(V) >= 0 || V === "" || X(V) ? W : [].concat(on(W), [V]);
          }, []);
        else if (w === "number") {
          var F = WN(M, i.filter(function(W) {
            var V, le, ye = o in W.props ? W.props[o] : (V = W.type.defaultProps) === null || V === void 0 ? void 0 : V[o], He = "hide" in W.props ? W.props.hide : (le = W.type.defaultProps) === null || le === void 0 ? void 0 : le.hide;
            return ye === $ && (P || !He);
          }), b, a, f);
          F && (T = F);
        }
        p && (w === "number" || x !== "auto") && (k = Dn(M, b, "category"));
      } else p ? T = Da(0, j) : s && s[$] && s[$].hasStack && w === "number" ? T = h === "expand" ? [0, 1] : xy(s[$].stackGroups, u, c) : T = my(M, i.filter(function(W) {
        var V = o in W.props ? W.props[o] : W.type.defaultProps[o], le = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return V === $ && (P || !le);
      }), w, f, !0);
      if (w === "number")
        T = Fu(l, T, $, a, O), I && (T = iu(I, T, _));
      else if (w === "category" && I) {
        var q = I, G = T.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        G && (T = q);
      }
    }
    return E(E({}, v), {}, H({}, $, E(E({}, g), {}, {
      axisType: a,
      domain: T,
      categoricalDomain: k,
      duplicateDomain: N,
      originalDomain: (y = g.domain) !== null && y !== void 0 ? y : C,
      isCategorical: p,
      layout: f
    })));
  }, {});
}, Uz = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = zo(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = h.length, v = gy(f, a), d = -1;
  return n.reduce(function(y, g) {
    var w = g.type.defaultProps !== void 0 ? E(E({}, g.type.defaultProps), g.props) : g.props, b = w[o], _ = Em("number");
    if (!y[b]) {
      d++;
      var m;
      return v ? m = Da(0, p) : s && s[b] && s[b].hasStack ? (m = xy(s[b].stackGroups, u, c), m = Fu(l, m, b, a)) : (m = iu(_, my(h, n.filter(function(x) {
        var O, P, $ = o in x.props ? x.props[o] : (O = x.type.defaultProps) === null || O === void 0 ? void 0 : O[o], M = "hide" in x.props ? x.props.hide : (P = x.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return $ === b && !M;
      }), "number", f), i.defaultProps.allowDataOverflow), m = Fu(l, m, b, a)), E(E({}, y), {}, H({}, b, E(E({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: at(Lz, "".concat(a, ".").concat(d % 2), null),
        domain: m,
        originalDomain: _,
        isCategorical: v,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return y;
  }, {});
}, Kz = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), h = Ke(f, a), p = {};
  return h && h.length ? p = Wz(t, {
    axes: h,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = Uz(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, qz = function(t) {
  var r = Kt(t), n = jt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: hc(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Aa(r, n)
  };
}, qp = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Xe(r, Gr), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Hz = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Tt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Hp = function(t) {
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
}, Gz = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, f = n.height, l = n.children, h = n.margin || {}, p = Xe(l, Gr), v = Xe(l, Ze), d = Object.keys(u).reduce(function(m, x) {
    var O = u[x], P = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, m), {}, H({}, P, m[P] + O.width)) : m;
  }, {
    left: h.left || 0,
    right: h.right || 0
  }), y = Object.keys(o).reduce(function(m, x) {
    var O = o[x], P = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, m), {}, H({}, P, at(m, "".concat(P)) + O.height)) : m;
  }, {
    top: h.top || 0,
    bottom: h.bottom || 0
  }), g = E(E({}, y), d), w = g.bottom;
  p && (g.bottom += p.props.height || Gr.defaultProps.height), v && r && (g = FN(g, i, n, r));
  var b = c - g.left - g.right, _ = f - g.top - g.bottom;
  return E(E({
    brushBottom: w
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(b, 0),
    height: Math.max(_, 0)
  });
}, Vz = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Zc = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, h = function(g, w) {
    var b = w.graphicalItems, _ = w.stackGroups, m = w.offset, x = w.updateId, O = w.dataStartIndex, P = w.dataEndIndex, $ = g.barSize, M = g.layout, j = g.barGap, T = g.barCategoryGap, N = g.maxBarSize, k = Hp(M), C = k.numericAxisName, D = k.cateAxisName, I = Hz(b), R = [];
    return b.forEach(function(F, q) {
      var G = zo(g.data, {
        graphicalItems: [F],
        dataStartIndex: O,
        dataEndIndex: P
      }), W = F.type.defaultProps !== void 0 ? E(E({}, F.type.defaultProps), F.props) : F.props, V = W.dataKey, le = W.maxBarSize, ye = W["".concat(C, "Id")], He = W["".concat(D, "Id")], Qt = {}, ze = u.reduce(function(er, tr) {
        var Wo = w["".concat(tr.axisType, "Map")], Jc = W["".concat(tr.axisType, "Id")];
        Wo && Wo[Jc] || tr.axisType === "zAxis" || mr();
        var Qc = Wo[Jc];
        return E(E({}, er), {}, H(H({}, tr.axisType, Qc), "".concat(tr.axisType, "Ticks"), jt(Qc)));
      }, Qt), z = ze[D], Y = ze["".concat(D, "Ticks")], J = _ && _[ye] && _[ye].hasStack && eD(F, _[ye].stackGroups), B = Tt(F.type).indexOf("Bar") >= 0, de = Aa(z, Y), te = [], xe = I && LN({
        barSize: $,
        stackGroups: _,
        totalSize: Vz(ze, D)
      });
      if (B) {
        var we, We, zt = X(le) ? N : le, Ar = (we = (We = Aa(z, Y, !0)) !== null && We !== void 0 ? We : zt) !== null && we !== void 0 ? we : 0;
        te = RN({
          barGap: j,
          barCategoryGap: T,
          bandSize: Ar !== de ? Ar : de,
          sizeList: xe[He],
          maxBarSize: zt
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
          dataEndIndex: P
        }))), {}, H(H(H({
          key: F.key || "item-".concat(q)
        }, C, ze[C]), D, ze[D]), "animationId", x)),
        childIndex: Bx(F, g.children),
        item: F
      });
    }), R;
  }, p = function(g, w) {
    var b = g.props, _ = g.dataStartIndex, m = g.dataEndIndex, x = g.updateId;
    if (!pl({
      props: b
    }))
      return null;
    var O = b.children, P = b.layout, $ = b.stackOffset, M = b.data, j = b.reverseStackOrder, T = Hp(P), N = T.numericAxisName, k = T.cateAxisName, C = Ke(O, n), D = ZN(M, C, "".concat(N, "Id"), "".concat(k, "Id"), $, j), I = u.reduce(function(W, V) {
      var le = "".concat(V.axisType, "Map");
      return E(E({}, W), {}, H({}, le, Kz(b, E(E({}, V), {}, {
        graphicalItems: C,
        stackGroups: V.axisType === N && D,
        dataStartIndex: _,
        dataEndIndex: m
      }))));
    }, {}), R = Gz(E(E({}, I), {}, {
      props: b,
      graphicalItems: C
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(I).forEach(function(W) {
      I[W] = f(b, I[W], R, W.replace("Map", ""), r);
    });
    var F = I["".concat(k, "Map")], q = qz(F), G = h(b, E(E({}, I), {}, {
      dataStartIndex: _,
      dataEndIndex: m,
      updateId: x,
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
  }, v = /* @__PURE__ */ function(y) {
    function g(w) {
      var b, _, m;
      return $z(this, g), m = Ez(this, g, [w]), H(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), H(m, "accessibilityManager", new pz()), H(m, "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var O = m.state, P = O.dataStartIndex, $ = O.dataEndIndex, M = O.updateId;
          m.setState(E({
            legendBBox: x
          }, p({
            props: m.props,
            dataStartIndex: P,
            dataEndIndex: $,
            updateId: M
          }, E(E({}, m.state), {}, {
            legendBBox: x
          }))));
        }
      }), H(m, "handleReceiveSyncEvent", function(x, O, P) {
        if (m.props.syncId === x) {
          if (P === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(O);
        }
      }), H(m, "handleBrushChange", function(x) {
        var O = x.startIndex, P = x.endIndex;
        if (O !== m.state.dataStartIndex || P !== m.state.dataEndIndex) {
          var $ = m.state.updateId;
          m.setState(function() {
            return E({
              dataStartIndex: O,
              dataEndIndex: P
            }, p({
              props: m.props,
              dataStartIndex: O,
              dataEndIndex: P,
              updateId: $
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: P
          });
        }
      }), H(m, "handleMouseEnter", function(x) {
        var O = m.getMouseInfo(x);
        if (O) {
          var P = E(E({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(P), m.triggerSyncEvent(P);
          var $ = m.props.onMouseEnter;
          Z($) && $(P, x);
        }
      }), H(m, "triggeredAfterMouseMove", function(x) {
        var O = m.getMouseInfo(x), P = O ? E(E({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(P), m.triggerSyncEvent(P);
        var $ = m.props.onMouseMove;
        Z($) && $(P, x);
      }), H(m, "handleItemMouseEnter", function(x) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: x,
            activePayload: x.tooltipPayload,
            activeCoordinate: x.tooltipPosition || {
              x: x.cx,
              y: x.cy
            }
          };
        });
      }), H(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), H(m, "handleMouseMove", function(x) {
        x.persist(), m.throttleTriggeredAfterMouseMove(x);
      }), H(m, "handleMouseLeave", function(x) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        m.setState(O), m.triggerSyncEvent(O);
        var P = m.props.onMouseLeave;
        Z(P) && P(O, x);
      }), H(m, "handleOuterEvent", function(x) {
        var O = Ix(x), P = at(m.props, "".concat(O));
        if (O && Z(P)) {
          var $, M;
          /.*touch.*/i.test(O) ? M = m.getMouseInfo(x.changedTouches[0]) : M = m.getMouseInfo(x), P(($ = M) !== null && $ !== void 0 ? $ : {}, x);
        }
      }), H(m, "handleClick", function(x) {
        var O = m.getMouseInfo(x);
        if (O) {
          var P = E(E({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(P), m.triggerSyncEvent(P);
          var $ = m.props.onClick;
          Z($) && $(P, x);
        }
      }), H(m, "handleMouseDown", function(x) {
        var O = m.props.onMouseDown;
        if (Z(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), H(m, "handleMouseUp", function(x) {
        var O = m.props.onMouseUp;
        if (Z(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), H(m, "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), H(m, "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseDown(x.changedTouches[0]);
      }), H(m, "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseUp(x.changedTouches[0]);
      }), H(m, "handleDoubleClick", function(x) {
        var O = m.props.onDoubleClick;
        if (Z(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), H(m, "handleContextMenu", function(x) {
        var O = m.props.onContextMenu;
        if (Z(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), H(m, "triggerSyncEvent", function(x) {
        m.props.syncId !== void 0 && ds.emit(vs, m.props.syncId, x, m.eventEmitterSymbol);
      }), H(m, "applySyncEvent", function(x) {
        var O = m.props, P = O.layout, $ = O.syncMethod, M = m.state.updateId, j = x.dataStartIndex, T = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          m.setState(E({
            dataStartIndex: j,
            dataEndIndex: T
          }, p({
            props: m.props,
            dataStartIndex: j,
            dataEndIndex: T,
            updateId: M
          }, m.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var N = x.chartX, k = x.chartY, C = x.activeTooltipIndex, D = m.state, I = D.offset, R = D.tooltipTicks;
          if (!I)
            return;
          if (typeof $ == "function")
            C = $(R, x);
          else if ($ === "value") {
            C = -1;
            for (var F = 0; F < R.length; F++)
              if (R[F].value === x.activeLabel) {
                C = F;
                break;
              }
          }
          var q = E(E({}, I), {}, {
            x: I.left,
            y: I.top
          }), G = Math.min(N, q.x + q.width), W = Math.min(k, q.y + q.height), V = R[C] && R[C].value, le = Uu(m.state, m.props.data, C), ye = R[C] ? {
            x: P === "horizontal" ? R[C].coordinate : G,
            y: P === "horizontal" ? W : R[C].coordinate
          } : Tm;
          m.setState(E(E({}, x), {}, {
            activeLabel: V,
            activeCoordinate: ye,
            activePayload: le,
            activeTooltipIndex: C
          }));
        } else
          m.setState(x);
      }), H(m, "renderCursor", function(x) {
        var O, P = m.state, $ = P.isTooltipActive, M = P.activeCoordinate, j = P.activePayload, T = P.offset, N = P.activeTooltipIndex, k = P.tooltipAxisBandSize, C = m.getTooltipEventType(), D = (O = x.props.active) !== null && O !== void 0 ? O : $, I = m.props.layout, R = x.key || "_recharts-cursor";
        return /* @__PURE__ */ A.createElement(xz, {
          key: R,
          activeCoordinate: M,
          activePayload: j,
          activeTooltipIndex: N,
          chartName: r,
          element: x,
          isActive: D,
          layout: I,
          offset: T,
          tooltipAxisBandSize: k,
          tooltipEventType: C
        });
      }), H(m, "renderPolarAxis", function(x, O, P) {
        var $ = at(x, "type.axisType"), M = at(m.state, "".concat($, "Map")), j = x.type.defaultProps, T = j !== void 0 ? E(E({}, j), x.props) : x.props, N = M && M[T["".concat($, "Id")]];
        return /* @__PURE__ */ Se(x, E(E({}, N), {}, {
          className: ee($, N.className),
          key: x.key || "".concat(O, "-").concat(P),
          ticks: jt(N, !0)
        }));
      }), H(m, "renderPolarGrid", function(x) {
        var O = x.props, P = O.radialLines, $ = O.polarAngles, M = O.polarRadius, j = m.state, T = j.radiusAxisMap, N = j.angleAxisMap, k = Kt(T), C = Kt(N), D = C.cx, I = C.cy, R = C.innerRadius, F = C.outerRadius;
        return /* @__PURE__ */ Se(x, {
          polarAngles: Array.isArray($) ? $ : jt(C, !0).map(function(q) {
            return q.coordinate;
          }),
          polarRadius: Array.isArray(M) ? M : jt(k, !0).map(function(q) {
            return q.coordinate;
          }),
          cx: D,
          cy: I,
          innerRadius: R,
          outerRadius: F,
          key: x.key || "polar-grid",
          radialLines: P
        });
      }), H(m, "renderLegend", function() {
        var x = m.state.formattedGraphicalItems, O = m.props, P = O.children, $ = O.width, M = O.height, j = m.props.margin || {}, T = $ - (j.left || 0) - (j.right || 0), N = vy({
          children: P,
          formattedGraphicalItems: x,
          legendWidth: T,
          legendContent: c
        });
        if (!N)
          return null;
        var k = N.item, C = Wp(N, wz);
        return /* @__PURE__ */ Se(k, E(E({}, C), {}, {
          chartWidth: $,
          chartHeight: M,
          margin: j,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), H(m, "renderTooltip", function() {
        var x, O = m.props, P = O.children, $ = O.accessibilityLayer, M = Xe(P, ge);
        if (!M)
          return null;
        var j = m.state, T = j.isTooltipActive, N = j.activeCoordinate, k = j.activePayload, C = j.activeLabel, D = j.offset, I = (x = M.props.active) !== null && x !== void 0 ? x : T;
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
      }), H(m, "renderBrush", function(x) {
        var O = m.props, P = O.margin, $ = O.data, M = m.state, j = M.offset, T = M.dataStartIndex, N = M.dataEndIndex, k = M.updateId;
        return /* @__PURE__ */ Se(x, {
          key: x.key || "_recharts-brush",
          onChange: Wi(m.handleBrushChange, x.props.onChange),
          data: $,
          x: L(x.props.x) ? x.props.x : j.left,
          y: L(x.props.y) ? x.props.y : j.top + j.height + j.brushBottom - (P.bottom || 0),
          width: L(x.props.width) ? x.props.width : j.width,
          startIndex: T,
          endIndex: N,
          updateId: "brush-".concat(k)
        });
      }), H(m, "renderReferenceElement", function(x, O, P) {
        if (!x)
          return null;
        var $ = m, M = $.clipPathId, j = m.state, T = j.xAxisMap, N = j.yAxisMap, k = j.offset, C = x.type.defaultProps || {}, D = x.props, I = D.xAxisId, R = I === void 0 ? C.xAxisId : I, F = D.yAxisId, q = F === void 0 ? C.yAxisId : F;
        return /* @__PURE__ */ Se(x, {
          key: x.key || "".concat(O, "-").concat(P),
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
      }), H(m, "renderActivePoints", function(x) {
        var O = x.item, P = x.activePoint, $ = x.basePoint, M = x.childIndex, j = x.isRange, T = [], N = O.props.key, k = O.item.type.defaultProps !== void 0 ? E(E({}, O.item.type.defaultProps), O.item.props) : O.item.props, C = k.activeDot, D = k.dataKey, I = E(E({
          index: M,
          dataKey: D,
          cx: P.x,
          cy: P.y,
          r: 4,
          fill: Lc(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: P.payload,
          value: P.value
        }, Q(C, !1)), Yi(C));
        return T.push(g.renderActiveDot(C, I, "".concat(N, "-activePoint-").concat(M))), $ ? T.push(g.renderActiveDot(C, E(E({}, I), {}, {
          cx: $.x,
          cy: $.y
        }), "".concat(N, "-basePoint-").concat(M))) : j && T.push(null), T;
      }), H(m, "renderGraphicChild", function(x, O, P) {
        var $ = m.filterFormatItem(x, O, P);
        if (!$)
          return null;
        var M = m.getTooltipEventType(), j = m.state, T = j.isTooltipActive, N = j.tooltipAxis, k = j.activeTooltipIndex, C = j.activeLabel, D = m.props.children, I = Xe(D, ge), R = $.props, F = R.points, q = R.isRange, G = R.baseLine, W = $.item.type.defaultProps !== void 0 ? E(E({}, $.item.type.defaultProps), $.item.props) : $.item.props, V = W.activeDot, le = W.hide, ye = W.activeBar, He = W.activeShape, Qt = !!(!le && T && I && (V || ye || He)), ze = {};
        M !== "axis" && I && I.props.trigger === "click" ? ze = {
          onClick: Wi(m.handleItemMouseEnter, x.props.onClick)
        } : M !== "axis" && (ze = {
          onMouseLeave: Wi(m.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: Wi(m.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var z = /* @__PURE__ */ Se(x, E(E({}, $.props), ze));
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
              var te = x.props.activeIndex !== void 0 ? x.props.activeIndex : k;
              return [/* @__PURE__ */ Se(x, E(E(E({}, $.props), ze), {}, {
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
            }, We = we.graphicalItem, zt = We.item, Ar = zt === void 0 ? x : zt, Mi = We.childIndex, er = E(E(E({}, $.props), ze), {}, {
              activeIndex: Mi
            });
            return [/* @__PURE__ */ Se(Ar, er), null, null];
          }
        return q ? [z, null, null] : [z, null];
      }), H(m, "renderCustomized", function(x, O, P) {
        return /* @__PURE__ */ Se(x, E(E({
          key: "recharts-customized-".concat(P)
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
      }), m.clipPathId = "".concat((b = w.id) !== null && b !== void 0 ? b : hn("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = vv(m.triggeredAfterMouseMove, (_ = w.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60), m.state = {}, m;
    }
    return kz(g, y), Tz(g, [{
      key: "componentDidMount",
      value: function() {
        var b, _;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
            top: (_ = this.props.margin.top) !== null && _ !== void 0 ? _ : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var b = this.props, _ = b.children, m = b.data, x = b.height, O = b.layout, P = Xe(_, ge);
        if (P) {
          var $ = P.props.defaultIndex;
          if (!(typeof $ != "number" || $ < 0 || $ > this.state.tooltipTicks.length - 1)) {
            var M = this.state.tooltipTicks[$] && this.state.tooltipTicks[$].value, j = Uu(this.state, m, $, M), T = this.state.tooltipTicks[$].coordinate, N = (this.state.offset.top + x) / 2, k = O === "horizontal", C = k ? {
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
            this.setState(I), this.renderCursor(P), this.accessibilityManager.setIndex($);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(b, _) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== _.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== b.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== b.margin) {
          var m, x;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(b) {
        bs([Xe(b.children, ge)], [Xe(this.props.children, ge)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var b = Xe(this.props.children, ge);
        if (b && typeof b.props.shared == "boolean") {
          var _ = b.props.shared ? "axis" : "item";
          return s.indexOf(_) >= 0 ? _ : a;
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
      value: function(b) {
        if (!this.container)
          return null;
        var _ = this.container, m = _.getBoundingClientRect(), x = cE(m), O = {
          chartX: Math.round(b.pageX - x.left),
          chartY: Math.round(b.pageY - x.top)
        }, P = m.width / _.offsetWidth || 1, $ = this.inRange(O.chartX, O.chartY, P);
        if (!$)
          return null;
        var M = this.state, j = M.xAxisMap, T = M.yAxisMap, N = this.getTooltipEventType(), k = Kp(this.state, this.props.data, this.props.layout, $);
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
      value: function(b, _) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, O = b / m, P = _ / m;
        if (x === "horizontal" || x === "vertical") {
          var $ = this.state.offset, M = O >= $.left && O <= $.left + $.width && P >= $.top && P <= $.top + $.height;
          return M ? {
            x: O,
            y: P
          } : null;
        }
        var j = this.state, T = j.angleAxisMap, N = j.radiusAxisMap;
        if (T && N) {
          var k = Kt(T);
          return Oh({
            x: O,
            y: P
          }, k);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, _ = this.getTooltipEventType(), m = Xe(b, ge), x = {};
        m && _ === "axis" && (m.props.trigger === "click" ? x = {
          onClick: this.handleClick
        } : x = {
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
        return E(E({}, O), x);
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
      value: function(b, _, m) {
        for (var x = this.state.formattedGraphicalItems, O = 0, P = x.length; O < P; O++) {
          var $ = x[O];
          if ($.item === b || $.props.key === b.key || _ === Tt($.item.type) && m === $.childIndex)
            return $;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var b = this.clipPathId, _ = this.state.offset, m = _.left, x = _.top, O = _.height, P = _.width;
        return /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
          id: b
        }, /* @__PURE__ */ A.createElement("rect", {
          x: m,
          y: x,
          height: O,
          width: P
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var b = this.state.xAxisMap;
        return b ? Object.entries(b).reduce(function(_, m) {
          var x = zp(m, 2), O = x[0], P = x[1];
          return E(E({}, _), {}, H({}, O, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(_, m) {
          var x = zp(m, 2), O = x[0], P = x[1];
          return E(E({}, _), {}, H({}, O, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(b) {
        var _;
        return (_ = this.state.xAxisMap) === null || _ === void 0 || (_ = _[b]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(b) {
        var _;
        return (_ = this.state.yAxisMap) === null || _ === void 0 || (_ = _[b]) === null || _ === void 0 ? void 0 : _.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(b) {
        var _ = this.state, m = _.formattedGraphicalItems, x = _.activeItem;
        if (m && m.length)
          for (var O = 0, P = m.length; O < P; O++) {
            var $ = m[O], M = $.props, j = $.item, T = j.type.defaultProps !== void 0 ? E(E({}, j.type.defaultProps), j.props) : j.props, N = Tt(j.type);
            if (N === "Bar") {
              var k = (M.data || []).find(function(R) {
                return H2(b, R);
              });
              if (k)
                return {
                  graphicalItem: $,
                  payload: k
                };
            } else if (N === "RadialBar") {
              var C = (M.data || []).find(function(R) {
                return Oh(b, R);
              });
              if (C)
                return {
                  graphicalItem: $,
                  payload: C
                };
            } else if (ko($, x) || No($, x) || vi($, x)) {
              var D = VB({
                graphicalItem: $,
                activeTooltipItem: x,
                itemData: T.data
              }), I = T.activeIndex === void 0 ? D : T.activeIndex;
              return {
                graphicalItem: E(E({}, $), {}, {
                  childIndex: I
                }),
                payload: vi($, x) ? T.data[D] : $.props.data[D]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!pl(this))
          return null;
        var _ = this.props, m = _.children, x = _.className, O = _.width, P = _.height, $ = _.style, M = _.compact, j = _.title, T = _.desc, N = Wp(_, _z), k = Q(N, !1);
        if (M)
          return /* @__PURE__ */ A.createElement(wp, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ A.createElement(ws, Cr({}, k, {
            width: O,
            height: P,
            title: j,
            desc: T
          }), this.renderClipPath(), vl(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var C, D;
          k.tabIndex = (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0, k.role = (D = this.props.role) !== null && D !== void 0 ? D : "application", k.onKeyDown = function(R) {
            b.accessibilityManager.keyboardEvent(R);
          }, k.onFocus = function() {
            b.accessibilityManager.focus();
          };
        }
        var I = this.parseEventsOfWrapper();
        return /* @__PURE__ */ A.createElement(wp, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ A.createElement("div", Cr({
          className: ee("recharts-wrapper", x),
          style: E({
            position: "relative",
            cursor: "default",
            width: O,
            height: P
          }, $)
        }, I, {
          ref: function(F) {
            b.container = F;
          }
        }), /* @__PURE__ */ A.createElement(ws, Cr({}, k, {
          width: O,
          height: P,
          title: j,
          desc: T,
          style: Rz
        }), this.renderClipPath(), vl(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(Zp);
  H(v, "displayName", r), H(v, "defaultProps", E({
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
  }, l)), H(v, "getDerivedStateFromProps", function(y, g) {
    var w = y.dataKey, b = y.data, _ = y.children, m = y.width, x = y.height, O = y.layout, P = y.stackOffset, $ = y.margin, M = g.dataStartIndex, j = g.dataEndIndex;
    if (g.updateId === void 0) {
      var T = qp(y);
      return E(E(E({}, T), {}, {
        updateId: 0
      }, p(E(E({
        props: y
      }, T), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: w,
        prevData: b,
        prevWidth: m,
        prevHeight: x,
        prevLayout: O,
        prevStackOffset: P,
        prevMargin: $,
        prevChildren: _
      });
    }
    if (w !== g.prevDataKey || b !== g.prevData || m !== g.prevWidth || x !== g.prevHeight || O !== g.prevLayout || P !== g.prevStackOffset || !kr($, g.prevMargin)) {
      var N = qp(y), k = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, C = E(E({}, Kp(g, b, O)), {}, {
        updateId: g.updateId + 1
      }), D = E(E(E({}, N), k), C);
      return E(E(E({}, D), p(E({
        props: y
      }, D), g)), {}, {
        prevDataKey: w,
        prevData: b,
        prevWidth: m,
        prevHeight: x,
        prevLayout: O,
        prevStackOffset: P,
        prevMargin: $,
        prevChildren: _
      });
    }
    if (!bs(_, g.prevChildren)) {
      var I, R, F, q, G = Xe(_, Gr), W = G && (I = (R = G.props) === null || R === void 0 ? void 0 : R.startIndex) !== null && I !== void 0 ? I : M, V = G && (F = (q = G.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && F !== void 0 ? F : j, le = W !== M || V !== j, ye = !X(b), He = ye && !le ? g.updateId : g.updateId + 1;
      return E(E({
        updateId: He
      }, p(E(E({
        props: y
      }, g), {}, {
        updateId: He,
        dataStartIndex: W,
        dataEndIndex: V
      }), g)), {}, {
        prevChildren: _,
        dataStartIndex: W,
        dataEndIndex: V
      });
    }
    return null;
  }), H(v, "renderActiveDot", function(y, g, w) {
    var b;
    return /* @__PURE__ */ gt(y) ? b = /* @__PURE__ */ Se(y, g) : Z(y) ? b = y(g) : b = /* @__PURE__ */ A.createElement(Fc, g), /* @__PURE__ */ A.createElement(ue, {
      className: "recharts-active-dot",
      key: w
    }, b);
  });
  var d = /* @__PURE__ */ Vp(function(g, w) {
    return /* @__PURE__ */ A.createElement(v, Cr({}, g, {
      ref: w
    }));
  });
  return d.displayName = v.displayName, d;
}, Gp = Zc({
  chartName: "LineChart",
  GraphicalChild: At,
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
}), Mm = Zc({
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
const Xz = ({ data: e, year: t }) => {
  if (e.length === 0)
    return /* @__PURE__ */ S.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = e.reduce((v, d) => v + d.total_views, 0), n = e.reduce((v, d) => v + d.total_uploads, 0), i = e.reduce((v, d) => v + d.shorts_uploads, 0), a = e.reduce((v, d) => v + d.views_from_shorts_total, 0), o = mt(i, n), s = mt(a, r), u = mt(
    e.reduce((v, d) => v + d.engagement_per_1k_views * d.total_views, 0),
    r
  ), c = e.map((v) => ({
    channel: v.channelKey.replace("@", ""),
    views: v.total_views
  })).sort((v, d) => d.views - v.views), f = e.map((v) => ({
    channel: v.channelKey.replace("@", ""),
    Shorts: v.shorts_uploads,
    Normal: v.normal_uploads
  })), l = e.map((v) => ({
    channel: v.channelKey.replace("@", ""),
    Shorts: v.views_from_shorts_total,
    Normal: v.normal_views
  })), h = e.map((v) => ({
    channel: v.channelKey.replace("@", ""),
    x: v.uploads_shorts_share * 100,
    y: v.percent_views_from_shorts_from_total * 100,
    size: v.total_views
  })), p = {
    shorts: "#FF4444",
    normal: "#4488FF"
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "overview-charts", children: [
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
        /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (v) => je(v) }),
        /* @__PURE__ */ S.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (v) => je(v)
          }
        ),
        /* @__PURE__ */ S.jsx(Te, { dataKey: "views", fill: "#4488FF" })
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chart-grid-2", children: [
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
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: p.shorts }),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", stackId: "a", fill: p.normal })
        ] }) })
      ] }),
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
          /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (v) => je(v) }),
          /* @__PURE__ */ S.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (v) => je(v)
            }
          ),
          /* @__PURE__ */ S.jsx(Ze, {}),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: p.shorts }),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", stackId: "a", fill: p.normal })
        ] }) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Shorts Supply vs Impact" }),
        /* @__PURE__ */ S.jsx("p", { className: "chart-subtitle", children: "X-axis: % of uploads that are Shorts | Y-axis: % of views from Shorts | Size: Total views" }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(Mm, { margin: { top: 20, right: 30, left: 60, bottom: 40 }, children: [
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
              formatter: (v, d) => d === "size" ? je(v) : `${v.toFixed(1)}%`
            }
          ),
          /* @__PURE__ */ S.jsx(wn, { data: h, fill: "#FF4444", children: h.map((v, d) => /* @__PURE__ */ S.jsx(
            Ai,
            {
              fill: "#FF4444",
              opacity: 0.7,
              r: Math.sqrt(v.size) / 1e4
            },
            `cell-${d}`
          )) })
        ] }) })
      ] })
    ] })
  ] });
}, Yz = ({
  data: e,
  year: t,
  selectedChannels: r
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ S.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const n = r[0], i = e.filter((g) => g.channelKey === n).sort((g, w) => g.month.localeCompare(w.month));
  if (i.length === 0)
    return /* @__PURE__ */ S.jsxs("div", { className: "no-data", children: [
      "No monthly data available for ",
      n,
      "."
    ] });
  const a = i.reduce((g, w) => g + w.views_total, 0), o = i.reduce((g, w) => g + w.uploads_count, 0), s = i.reduce((g, w) => g + w.uploads_short_count, 0), u = i.reduce((g, w) => g + w.views_shorts, 0), c = mt(a, o), f = mt(s, o), l = mt(u, a), h = mt(
    i.reduce((g, w) => g + w.engagement_per_1k_views * w.views_total, 0),
    a
  ), p = i.map((g) => ({
    month: g.month,
    "Total Views": g.views_total,
    "Shorts Views": g.views_shorts,
    "Normal Views": g.views_normal
  })), v = i.map((g) => ({
    month: g.month,
    Shorts: g.uploads_short_count,
    Normal: g.uploads_normal
  })), d = i.map((g) => ({
    month: g.month,
    "Upload Share (%)": (g.uploads_shorts_share * 100).toFixed(1),
    "View Share (%)": (g.percent_views_from_shorts_from_total * 100).toFixed(1)
  })), y = {
    shorts: "#FF4444",
    normal: "#4488FF",
    total: "#44FF88"
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "drilldown-charts", children: [
    r.length > 1 && /* @__PURE__ */ S.jsxs("div", { className: "drilldown-note", children: [
      "Drill-down shown for: ",
      /* @__PURE__ */ S.jsx("strong", { children: n.replace("@", "") }),
      " ",
      "(you have ",
      r.length,
      " channels selected)"
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kpi-row", children: [
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
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Monthly Views" }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 350, children: /* @__PURE__ */ S.jsxs(Gp, { data: p, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [
        /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD", tickFormatter: (g) => je(g) }),
        /* @__PURE__ */ S.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (g) => je(g)
          }
        ),
        /* @__PURE__ */ S.jsx(Ze, {}),
        /* @__PURE__ */ S.jsx(At, { type: "monotone", dataKey: "Total Views", stroke: y.total, strokeWidth: 2 }),
        /* @__PURE__ */ S.jsx(At, { type: "monotone", dataKey: "Shorts Views", stroke: y.shorts, strokeWidth: 2 }),
        /* @__PURE__ */ S.jsx(At, { type: "monotone", dataKey: "Normal Views", stroke: y.normal, strokeWidth: 2 })
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chart-grid-2", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Monthly Uploads by Type" }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ S.jsxs(pr, { data: v, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD" }),
          /* @__PURE__ */ S.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
          /* @__PURE__ */ S.jsx(Ze, {}),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: y.shorts }),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", stackId: "a", fill: y.normal })
        ] }) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Shorts Share Over Time" }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ S.jsxs(Gp, { data: d, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ S.jsx(Le, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
          /* @__PURE__ */ S.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
          /* @__PURE__ */ S.jsx(Ze, {}),
          /* @__PURE__ */ S.jsx(At, { type: "monotone", dataKey: "Upload Share (%)", stroke: "#FFB344", strokeWidth: 2 }),
          /* @__PURE__ */ S.jsx(At, { type: "monotone", dataKey: "View Share (%)", stroke: "#FF44B3", strokeWidth: 2 })
        ] }) })
      ] })
    ] })
  ] });
}, Zz = ({
  data: e,
  selectedChannels: t
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ S.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = t.map((c) => {
    const f = e.filter((w) => w.channelKey === c), l = f.reduce((w, b) => w + b.uploads_count_Normal, 0), h = f.reduce((w, b) => w + b.uploads_count_Short, 0), p = f.reduce((w, b) => w + b.views_total_Normal, 0), v = f.reduce((w, b) => w + b.views_total_Short, 0), d = mt(p, l), y = mt(v, h), g = mt(y, d);
    return {
      channel: c.replace("@", ""),
      avgViewsNormal: d,
      avgViewsShort: y,
      multiplier: g,
      totalViewsNormal: p,
      totalViewsShort: v
    };
  }).filter((c) => c.avgViewsNormal > 0 || c.avgViewsShort > 0), n = r.map((c) => ({
    channel: c.channel,
    Normal: c.avgViewsNormal,
    Shorts: c.avgViewsShort
  })), i = r.map((c) => ({
    channel: c.channel,
    multiplier: c.multiplier,
    avgViewsNormal: c.avgViewsNormal,
    avgViewsShort: c.avgViewsShort
  })), o = e.map((c) => ({
    channel: c.channelKey.replace("@", ""),
    durationNormal: c.avg_duration_seconds_Normal,
    viewsNormal: c.avg_views_per_video_Normal,
    durationShort: c.avg_duration_seconds_Short,
    viewsShort: c.avg_views_per_video_Short,
    totalViewsNormal: c.views_total_Normal,
    totalViewsShort: c.views_total_Short
  })).flatMap((c) => [
    {
      type: "Normal",
      duration: c.durationNormal,
      views: c.viewsNormal,
      size: c.totalViewsNormal,
      channel: c.channel
    },
    {
      type: "Shorts",
      duration: c.durationShort,
      views: c.viewsShort,
      size: c.totalViewsShort,
      channel: c.channel
    }
  ]).filter((c) => c.duration > 0 && c.views > 0), s = {
    shorts: "#FF4444",
    normal: "#4488FF"
  }, u = ({ active: c, payload: f }) => {
    if (c && f && f.length) {
      const l = f[0].payload;
      return /* @__PURE__ */ S.jsxs("div", { style: { backgroundColor: "#1a1a2e", border: "1px solid #333", padding: "10px" }, children: [
        /* @__PURE__ */ S.jsx("p", { style: { margin: 0, color: "#fff" }, children: /* @__PURE__ */ S.jsx("strong", { children: l.channel }) }),
        /* @__PURE__ */ S.jsxs("p", { style: { margin: "5px 0", color: s.shorts }, children: [
          "Shorts: ",
          je(l.avgViewsShort),
          " avg views"
        ] }),
        /* @__PURE__ */ S.jsxs("p", { style: { margin: "5px 0", color: s.normal }, children: [
          "Normal: ",
          je(l.avgViewsNormal),
          " avg views"
        ] }),
        /* @__PURE__ */ S.jsxs("p", { style: { margin: "5px 0", color: "#FFB344" }, children: [
          "Multiplier: ",
          l.multiplier.toFixed(2),
          "x"
        ] })
      ] });
    }
    return null;
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "short-vs-long-charts", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chart-grid-2", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Average Views Per Video: Shorts vs Normal" }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(pr, { data: n, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(Be, { dataKey: "channel", stroke: "#C4CDDD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (c) => je(c) }),
          /* @__PURE__ */ S.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (c) => je(c)
            }
          ),
          /* @__PURE__ */ S.jsx(Ze, {}),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Normal", fill: s.normal }),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "Shorts", fill: s.shorts })
        ] }) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Shorts vs Normal Performance Multiplier" }),
        /* @__PURE__ */ S.jsx("p", { className: "chart-subtitle", children: "How many times more (or less) views does a Short get on average compared to a normal video?" }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(pr, { data: i, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(Be, { dataKey: "channel", stroke: "#C4CDDD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ S.jsx(Le, { stroke: "#C4CDDD", label: { value: "Multiplier (x)", angle: -90, position: "insideLeft", fill: "#E8EAEF" } }),
          /* @__PURE__ */ S.jsx(ge, { content: /* @__PURE__ */ S.jsx(u, {}) }),
          /* @__PURE__ */ S.jsx(Te, { dataKey: "multiplier", fill: "#FFB344" })
        ] }) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ S.jsx("h3", { className: "chart-title", children: "Duration vs Performance" }),
        /* @__PURE__ */ S.jsx("p", { className: "chart-subtitle", children: "Each point represents a channel-month. Blue = Normal videos, Red = Shorts." }),
        /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(Mm, { margin: { top: 20, right: 30, left: 80, bottom: 60 }, children: [
          /* @__PURE__ */ S.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ S.jsx(
            Be,
            {
              type: "number",
              dataKey: "duration",
              name: "Duration (sec)",
              stroke: "#C4CDDD",
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
              tickFormatter: (c) => je(c)
            }
          ),
          /* @__PURE__ */ S.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (c, f) => f === "views" || f === "size" ? je(c) : c
            }
          ),
          /* @__PURE__ */ S.jsx(wn, { data: o, fill: "#8884d8", children: o.map((c, f) => /* @__PURE__ */ S.jsx(
            Ai,
            {
              fill: c.type === "Shorts" ? s.shorts : s.normal,
              opacity: 0.6,
              r: Math.sqrt(c.size) / 8e3
            },
            `cell-${f}`
          )) })
        ] }) })
      ] })
    ] }),
    t.length === 1 && /* @__PURE__ */ S.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ S.jsxs("h3", { className: "chart-title", children: [
        "Shorts Share Over Time: ",
        t[0].replace("@", "")
      ] }),
      /* @__PURE__ */ S.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ S.jsxs(
        pr,
        {
          data: e.filter((c) => c.channelKey === t[0]).sort((c, f) => c.month.localeCompare(f.month)),
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
    ] })
  ] });
}, Qz = ({
  initialViewMode: e = "overview",
  hideControls: t = !1,
  showMainHeader: r = !0
  // Default to true for backward compatibility
}) => {
  const [n, i] = Ut(!0), [a, o] = Ut([]), [s, u] = Ut([]), [c, f] = Ut([]), [l, h] = Ut({
    year: 2024,
    selectedChannels: [],
    viewMode: e
  });
  Za(() => {
    Um().then(({ annual: b, monthly: _, shortVsLong: m }) => {
      o(b), u(_), f(m);
      const x = Array.from(new Set(b.map((O) => O.channelKey)));
      h((O) => ({ ...O, selectedChannels: x })), i(!1);
    });
  }, []);
  const p = (b) => {
    h((_) => ({ ..._, ...b }));
  };
  if (n)
    return /* @__PURE__ */ S.jsx("div", { className: "dashboard-slide loading", children: /* @__PURE__ */ S.jsx("div", { className: "loading-spinner", children: "Loading dashboard data..." }) });
  const v = Array.from(new Set(a.map((b) => b.channelKey))), d = a.filter(
    (b) => b.year === l.year && l.selectedChannels.includes(b.channelKey)
  ), y = s.filter(
    (b) => b.year === l.year && l.selectedChannels.includes(b.channelKey)
  ), g = c.filter(
    (b) => b.year === l.year && l.selectedChannels.includes(b.channelKey)
  ), w = {
    overview: "Overview",
    "channel-drilldown": "Channel Drill-down",
    "short-vs-long": "Short vs Long"
  };
  return /* @__PURE__ */ S.jsx("section", { className: "slide-section media-dashboard-slide", id: "dashboard", children: /* @__PURE__ */ S.jsxs("div", { className: "dashboard-container", children: [
    r && /* @__PURE__ */ S.jsxs("div", { className: "dashboard-header", children: [
      /* @__PURE__ */ S.jsx("h2", { className: "dashboard-title", children: "Interactive Media Analytics" }),
      /* @__PURE__ */ S.jsx("p", { className: "dashboard-subtitle", children: "Explore how top YouTube channels balance short-form and long-form content strategies" })
    ] }),
    !r && /* @__PURE__ */ S.jsx("div", { className: "dashboard-view-label", children: /* @__PURE__ */ S.jsx("h3", { className: "view-mode-name", children: w[e] }) }),
    /* @__PURE__ */ S.jsxs("div", { className: "dashboard-content", children: [
      !t && /* @__PURE__ */ S.jsx(
        Km,
        {
          filters: l,
          allChannels: v,
          onFilterChange: p
        }
      ),
      /* @__PURE__ */ S.jsxs("div", { className: "dashboard-charts", children: [
        l.viewMode === "overview" && /* @__PURE__ */ S.jsx(Xz, { data: d, year: l.year }),
        l.viewMode === "channel-drilldown" && /* @__PURE__ */ S.jsx(
          Yz,
          {
            data: y,
            year: l.year,
            selectedChannels: l.selectedChannels
          }
        ),
        l.viewMode === "short-vs-long" && /* @__PURE__ */ S.jsx(
          Zz,
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
  Qz as MediaDashboardSlide,
  Qz as default
};
