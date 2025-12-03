import * as it from "react";
import P, { isValidElement as gt, Children as lr, PureComponent as Bt, forwardRef as Vp, useRef as Gi, useImperativeHandle as Cm, useState as At, useCallback as km, useEffect as Ya, useMemo as Xp, cloneElement as Se, createElement as Yp, useContext as Lt, createContext as br, Component as Zp } from "react";
var Ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jp = { exports: {} }, Za = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nm = P, Im = Symbol.for("react.element"), Dm = Symbol.for("react.fragment"), Bm = Object.prototype.hasOwnProperty, Lm = Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qp(e, t, r) {
  var n, i = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) Bm.call(t, n) && !Rm.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps) for (n in t = e.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: Im, type: e, key: a, ref: o, props: i, _owner: Lm.current };
}
Za.Fragment = Dm;
Za.jsx = Qp;
Za.jsxs = Qp;
Jp.exports = Za;
var A = Jp.exports;
function K(e) {
  if (typeof e == "number") return e;
  const t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
async function Fm() {
  try {
    const r = (await (await fetch("./tbl_AnnualChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((l, h) => {
        var d;
        o[l.trim()] = ((d = a[h]) == null ? void 0 : d.trim()) || "";
      });
      const u = K(o.shorts_uploads), s = K(o.total_uploads), c = K(o.views_from_shorts_total || 0), f = K(o.total_views);
      return {
        channelKey: o.channelKey,
        year: K(o.year),
        is_ytd: o.is_ytd === "True" || o.is_ytd === "true",
        total_uploads: s,
        shorts_uploads: u,
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
    const r = (await (await fetch("./tbl_MonthlyChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((d, y) => {
        var p;
        o[d.trim()] = ((p = a[y]) == null ? void 0 : p.trim()) || "";
      });
      const u = K(o.uploads_short_count), s = K(o.uploads_count), c = K(o.uploads_normal), f = K(o.views_shorts), l = K(o.views_total), h = K(o.views_normal);
      return {
        channelKey: o.channelKey,
        year: K(o.year),
        month: o.month,
        uploads_count: s,
        uploads_short_count: u,
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
    const r = (await (await fetch("./tbl_MonthlyShortVsLong.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      return n.forEach((u, s) => {
        var c;
        o[u.trim()] = ((c = a[s]) == null ? void 0 : c.trim()) || "";
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
var Km = Array.isArray, qe = Km, qm = typeof Ci == "object" && Ci && Ci.Object === Object && Ci, td = qm, Hm = td, Gm = typeof self == "object" && self && self.Object === Object && self, Vm = Hm || Gm || Function("return this")(), Ot = Vm, Xm = Ot, Ym = Xm.Symbol, _i = Ym, el = _i, rd = Object.prototype, Zm = rd.hasOwnProperty, Jm = rd.toString, _n = el ? el.toStringTag : void 0;
function Qm(e) {
  var t = Zm.call(e, _n), r = e[_n];
  try {
    e[_n] = void 0;
    var n = !0;
  } catch {
  }
  var i = Jm.call(e);
  return n && (t ? e[_n] = r : delete e[_n]), i;
}
var eg = Qm, tg = Object.prototype, rg = tg.toString;
function ng(e) {
  return rg.call(e);
}
var ig = ng, tl = _i, ag = eg, og = ig, ug = "[object Null]", sg = "[object Undefined]", rl = tl ? tl.toStringTag : void 0;
function cg(e) {
  return e == null ? e === void 0 ? sg : ug : rl && rl in Object(e) ? ag(e) : og(e);
}
var Rt = cg;
function lg(e) {
  return e != null && typeof e == "object";
}
var Ft = lg, fg = Rt, hg = Ft, pg = "[object Symbol]";
function dg(e) {
  return typeof e == "symbol" || hg(e) && fg(e) == pg;
}
var un = dg, vg = qe, yg = un, mg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gg = /^\w*$/;
function bg(e, t) {
  if (vg(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || yg(e) ? !0 : gg.test(e) || !mg.test(e) || t != null && e in Object(t);
}
var Us = bg;
function xg(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vt = xg;
const sn = /* @__PURE__ */ ce(Vt);
var wg = Rt, _g = Vt, Og = "[object AsyncFunction]", Sg = "[object Function]", Ag = "[object GeneratorFunction]", Pg = "[object Proxy]";
function $g(e) {
  if (!_g(e))
    return !1;
  var t = wg(e);
  return t == Sg || t == Ag || t == Og || t == Pg;
}
var Ks = $g;
const Z = /* @__PURE__ */ ce(Ks);
var jg = Ot, Tg = jg["__core-js_shared__"], Eg = Tg, Wo = Eg, nl = function() {
  var e = /[^.]+$/.exec(Wo && Wo.keys && Wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mg(e) {
  return !!nl && nl in e;
}
var Cg = Mg, kg = Function.prototype, Ng = kg.toString;
function Ig(e) {
  if (e != null) {
    try {
      return Ng.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var nd = Ig, Dg = Ks, Bg = Cg, Lg = Vt, Rg = nd, Fg = /[\\^$.*+?()[\]{}|]/g, zg = /^\[object .+?Constructor\]$/, Wg = Function.prototype, Ug = Object.prototype, Kg = Wg.toString, qg = Ug.hasOwnProperty, Hg = RegExp(
  "^" + Kg.call(qg).replace(Fg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gg(e) {
  if (!Lg(e) || Bg(e))
    return !1;
  var t = Dg(e) ? Hg : zg;
  return t.test(Rg(e));
}
var Vg = Gg;
function Xg(e, t) {
  return e == null ? void 0 : e[t];
}
var Yg = Xg, Zg = Vg, Jg = Yg;
function Qg(e, t) {
  var r = Jg(e, t);
  return Zg(r) ? r : void 0;
}
var xr = Qg, eb = xr, tb = eb(Object, "create"), Ja = tb, il = Ja;
function rb() {
  this.__data__ = il ? il(null) : {}, this.size = 0;
}
var nb = rb;
function ib(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ab = ib, ob = Ja, ub = "__lodash_hash_undefined__", sb = Object.prototype, cb = sb.hasOwnProperty;
function lb(e) {
  var t = this.__data__;
  if (ob) {
    var r = t[e];
    return r === ub ? void 0 : r;
  }
  return cb.call(t, e) ? t[e] : void 0;
}
var fb = lb, hb = Ja, pb = Object.prototype, db = pb.hasOwnProperty;
function vb(e) {
  var t = this.__data__;
  return hb ? t[e] !== void 0 : db.call(t, e);
}
var yb = vb, mb = Ja, gb = "__lodash_hash_undefined__";
function bb(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = mb && t === void 0 ? gb : t, this;
}
var xb = bb, wb = nb, _b = ab, Ob = fb, Sb = yb, Ab = xb;
function cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cn.prototype.clear = wb;
cn.prototype.delete = _b;
cn.prototype.get = Ob;
cn.prototype.has = Sb;
cn.prototype.set = Ab;
var Pb = cn;
function $b() {
  this.__data__ = [], this.size = 0;
}
var jb = $b;
function Tb(e, t) {
  return e === t || e !== e && t !== t;
}
var qs = Tb, Eb = qs;
function Mb(e, t) {
  for (var r = e.length; r--; )
    if (Eb(e[r][0], t))
      return r;
  return -1;
}
var Qa = Mb, Cb = Qa, kb = Array.prototype, Nb = kb.splice;
function Ib(e) {
  var t = this.__data__, r = Cb(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Nb.call(t, r, 1), --this.size, !0;
}
var Db = Ib, Bb = Qa;
function Lb(e) {
  var t = this.__data__, r = Bb(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Rb = Lb, Fb = Qa;
function zb(e) {
  return Fb(this.__data__, e) > -1;
}
var Wb = zb, Ub = Qa;
function Kb(e, t) {
  var r = this.__data__, n = Ub(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var qb = Kb, Hb = jb, Gb = Db, Vb = Rb, Xb = Wb, Yb = qb;
function ln(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ln.prototype.clear = Hb;
ln.prototype.delete = Gb;
ln.prototype.get = Vb;
ln.prototype.has = Xb;
ln.prototype.set = Yb;
var eo = ln, Zb = xr, Jb = Ot, Qb = Zb(Jb, "Map"), Hs = Qb, al = Pb, e0 = eo, t0 = Hs;
function r0() {
  this.size = 0, this.__data__ = {
    hash: new al(),
    map: new (t0 || e0)(),
    string: new al()
  };
}
var n0 = r0;
function i0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var a0 = i0, o0 = a0;
function u0(e, t) {
  var r = e.__data__;
  return o0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var to = u0, s0 = to;
function c0(e) {
  var t = s0(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var l0 = c0, f0 = to;
function h0(e) {
  return f0(this, e).get(e);
}
var p0 = h0, d0 = to;
function v0(e) {
  return d0(this, e).has(e);
}
var y0 = v0, m0 = to;
function g0(e, t) {
  var r = m0(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var b0 = g0, x0 = n0, w0 = l0, _0 = p0, O0 = y0, S0 = b0;
function fn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
fn.prototype.clear = x0;
fn.prototype.delete = w0;
fn.prototype.get = _0;
fn.prototype.has = O0;
fn.prototype.set = S0;
var Gs = fn, id = Gs, A0 = "Expected a function";
function Vs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(A0);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Vs.Cache || id)(), r;
}
Vs.Cache = id;
var ad = Vs;
const P0 = /* @__PURE__ */ ce(ad);
var $0 = ad, j0 = 500;
function T0(e) {
  var t = $0(e, function(n) {
    return r.size === j0 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var E0 = T0, M0 = E0, C0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, k0 = /\\(\\)?/g, N0 = M0(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(C0, function(r, n, i, a) {
    t.push(i ? a.replace(k0, "$1") : n || r);
  }), t;
}), I0 = N0;
function D0(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Xs = D0, ol = _i, B0 = Xs, L0 = qe, R0 = un, ul = ol ? ol.prototype : void 0, sl = ul ? ul.toString : void 0;
function od(e) {
  if (typeof e == "string")
    return e;
  if (L0(e))
    return B0(e, od) + "";
  if (R0(e))
    return sl ? sl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var F0 = od, z0 = F0;
function W0(e) {
  return e == null ? "" : z0(e);
}
var ud = W0, U0 = qe, K0 = Us, q0 = I0, H0 = ud;
function G0(e, t) {
  return U0(e) ? e : K0(e, t) ? [e] : q0(H0(e));
}
var sd = G0, V0 = un;
function X0(e) {
  if (typeof e == "string" || V0(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ro = X0, Y0 = sd, Z0 = ro;
function J0(e, t) {
  t = Y0(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Z0(t[r++])];
  return r && r == n ? e : void 0;
}
var Ys = J0, Q0 = Ys;
function ex(e, t, r) {
  var n = e == null ? void 0 : Q0(e, t);
  return n === void 0 ? r : n;
}
var cd = ex;
const at = /* @__PURE__ */ ce(cd);
function tx(e) {
  return e == null;
}
var rx = tx;
const X = /* @__PURE__ */ ce(rx);
var nx = Rt, ix = qe, ax = Ft, ox = "[object String]";
function ux(e) {
  return typeof e == "string" || !ix(e) && ax(e) && nx(e) == ox;
}
var sx = ux;
const dr = /* @__PURE__ */ ce(sx);
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
var Zs = Symbol.for("react.element"), Js = Symbol.for("react.portal"), no = Symbol.for("react.fragment"), io = Symbol.for("react.strict_mode"), ao = Symbol.for("react.profiler"), oo = Symbol.for("react.provider"), uo = Symbol.for("react.context"), cx = Symbol.for("react.server_context"), so = Symbol.for("react.forward_ref"), co = Symbol.for("react.suspense"), lo = Symbol.for("react.suspense_list"), fo = Symbol.for("react.memo"), ho = Symbol.for("react.lazy"), lx = Symbol.for("react.offscreen"), fd;
fd = Symbol.for("react.module.reference");
function ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zs:
        switch (e = e.type, e) {
          case no:
          case ao:
          case io:
          case co:
          case lo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case cx:
              case uo:
              case so:
              case ho:
              case fo:
              case oo:
                return e;
              default:
                return t;
            }
        }
      case Js:
        return t;
    }
  }
}
ie.ContextConsumer = uo;
ie.ContextProvider = oo;
ie.Element = Zs;
ie.ForwardRef = so;
ie.Fragment = no;
ie.Lazy = ho;
ie.Memo = fo;
ie.Portal = Js;
ie.Profiler = ao;
ie.StrictMode = io;
ie.Suspense = co;
ie.SuspenseList = lo;
ie.isAsyncMode = function() {
  return !1;
};
ie.isConcurrentMode = function() {
  return !1;
};
ie.isContextConsumer = function(e) {
  return ut(e) === uo;
};
ie.isContextProvider = function(e) {
  return ut(e) === oo;
};
ie.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
};
ie.isForwardRef = function(e) {
  return ut(e) === so;
};
ie.isFragment = function(e) {
  return ut(e) === no;
};
ie.isLazy = function(e) {
  return ut(e) === ho;
};
ie.isMemo = function(e) {
  return ut(e) === fo;
};
ie.isPortal = function(e) {
  return ut(e) === Js;
};
ie.isProfiler = function(e) {
  return ut(e) === ao;
};
ie.isStrictMode = function(e) {
  return ut(e) === io;
};
ie.isSuspense = function(e) {
  return ut(e) === co;
};
ie.isSuspenseList = function(e) {
  return ut(e) === lo;
};
ie.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === no || e === ao || e === io || e === co || e === lo || e === lx || typeof e == "object" && e !== null && (e.$$typeof === ho || e.$$typeof === fo || e.$$typeof === oo || e.$$typeof === uo || e.$$typeof === so || e.$$typeof === fd || e.getModuleId !== void 0);
};
ie.typeOf = ut;
ld.exports = ie;
var fx = ld.exports, hx = Rt, px = Ft, dx = "[object Number]";
function vx(e) {
  return typeof e == "number" || px(e) && hx(e) == dx;
}
var hd = vx;
const yx = /* @__PURE__ */ ce(hd);
var mx = hd;
function gx(e) {
  return mx(e) && e != +e;
}
var bx = gx;
const Oi = /* @__PURE__ */ ce(bx);
var pt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, or = function(t) {
  return dr(t) && t.indexOf("%") === t.length - 1;
}, L = function(t) {
  return yx(t) && !Oi(t);
}, xx = function(t) {
  return X(t);
}, Ae = function(t) {
  return L(t) || dr(t);
}, wx = 0, hn = function(t) {
  var r = ++wx;
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
}, _x = function(t) {
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
function Vi(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : at(n, t)) === r;
  });
}
var Ox = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, u = 1 / 0, s = -1 / 0, c = 0, f = 0, l = 0; l < r; l++)
    c = t[l].cx || 0, f = t[l].cy || 0, n += c, i += f, a += c * f, o += c * c, u = Math.min(u, c), s = Math.max(s, c);
  var h = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return {
    xmin: u,
    xmax: s,
    a: h,
    b: (i - h * n) / r
  };
}, Sx = function(t, r) {
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
function yu(e) {
  "@babel/helpers - typeof";
  return yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yu(e);
}
var Ax = ["viewBox", "children"], Px = [
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
], cl = ["points", "pathLength"], Uo = {
  svg: Ax,
  polygon: cl,
  polyline: cl
}, Qs = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Xi = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ gt(t) && (n = t.props), !sn(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Qs.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, $x = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Fn = function(t, r, n) {
  if (!sn(t) || yu(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Qs.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = $x(o, r, n));
  }), i;
}, jx = ["children"], Tx = ["children"];
function ll(e, t) {
  if (e == null) return {};
  var r = Ex(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ex(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mu(e) {
  "@babel/helpers - typeof";
  return mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mu(e);
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
}, Et = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, hl = null, Ko = null, ec = function e(t) {
  if (t === hl && Array.isArray(Ko))
    return Ko;
  var r = [];
  return lr.forEach(t, function(n) {
    X(n) || (fx.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Ko = r, hl = t, r;
};
function Ke(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Et(i);
  }) : n = [Et(t)], ec(e).forEach(function(i) {
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
}, Mx = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Cx = function(t) {
  return t && t.type && dr(t.type) && Mx.indexOf(t.type) >= 0;
}, kx = function(t) {
  return t && mu(t) === "object" && "clipDot" in t;
}, Nx = function(t, r, n, i) {
  var a, o = (a = Uo == null ? void 0 : Uo[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Z(t) && (i && o.includes(r) || Px.includes(r)) || n && Qs.includes(r);
}, Q = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ gt(t) && (i = t.props), !sn(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    Nx((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, gu = function e(t, r) {
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
    var n = t.props || {}, i = n.children, a = ll(n, jx), o = r.props || {}, u = o.children, s = ll(o, Tx);
    return i && u ? kr(a, s) && gu(i, u) : !i && !u ? kr(a, s) : !1;
  }
  return !1;
}, vl = function(t, r) {
  var n = [], i = {};
  return ec(t).forEach(function(a, o) {
    if (Cx(a))
      n.push(a);
    else if (a) {
      var u = Et(a.type), s = r[u] || {}, c = s.handler, f = s.once;
      if (c && (!f || !i[u])) {
        var l = c(a, u, o);
        n.push(l), i[u] = !0;
      }
    }
  }), n;
}, Ix = function(t) {
  var r = t && t.type;
  return r && fl[r] ? fl[r] : null;
}, Dx = function(t, r) {
  return ec(r).indexOf(t);
}, Bx = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function Lx(e, t) {
  if (e == null) return {};
  var r = Rx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Rx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xu(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, s = e.desc, c = Lx(e, Bx), f = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = ee("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", bu({}, Q(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ P.createElement("title", null, u), /* @__PURE__ */ P.createElement("desc", null, s), t);
}
var Fx = ["children", "className"];
function wu() {
  return wu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wu.apply(this, arguments);
}
function zx(e, t) {
  if (e == null) return {};
  var r = Wx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Wx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var se = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = zx(e, Fx), a = ee("recharts-layer", n);
  return /* @__PURE__ */ P.createElement("g", wu({
    className: a
  }, Q(i, !0), {
    ref: t
  }), r);
}), Mt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
};
function Ux(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var Kx = Ux, qx = Kx;
function Hx(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : qx(e, t, r);
}
var Gx = Hx, Vx = "\\ud800-\\udfff", Xx = "\\u0300-\\u036f", Yx = "\\ufe20-\\ufe2f", Zx = "\\u20d0-\\u20ff", Jx = Xx + Yx + Zx, Qx = "\\ufe0e\\ufe0f", ew = "\\u200d", tw = RegExp("[" + ew + Vx + Jx + Qx + "]");
function rw(e) {
  return tw.test(e);
}
var pd = rw;
function nw(e) {
  return e.split("");
}
var iw = nw, dd = "\\ud800-\\udfff", aw = "\\u0300-\\u036f", ow = "\\ufe20-\\ufe2f", uw = "\\u20d0-\\u20ff", sw = aw + ow + uw, cw = "\\ufe0e\\ufe0f", lw = "[" + dd + "]", _u = "[" + sw + "]", Ou = "\\ud83c[\\udffb-\\udfff]", fw = "(?:" + _u + "|" + Ou + ")", vd = "[^" + dd + "]", yd = "(?:\\ud83c[\\udde6-\\uddff]){2}", md = "[\\ud800-\\udbff][\\udc00-\\udfff]", hw = "\\u200d", gd = fw + "?", bd = "[" + cw + "]?", pw = "(?:" + hw + "(?:" + [vd, yd, md].join("|") + ")" + bd + gd + ")*", dw = bd + gd + pw, vw = "(?:" + [vd + _u + "?", _u, yd, md, lw].join("|") + ")", yw = RegExp(Ou + "(?=" + Ou + ")|" + vw + dw, "g");
function mw(e) {
  return e.match(yw) || [];
}
var gw = mw, bw = iw, xw = pd, ww = gw;
function _w(e) {
  return xw(e) ? ww(e) : bw(e);
}
var Ow = _w, Sw = Gx, Aw = pd, Pw = Ow, $w = ud;
function jw(e) {
  return function(t) {
    t = $w(t);
    var r = Aw(t) ? Pw(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? Sw(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var Tw = jw, Ew = Tw, Mw = Ew("toUpperCase"), Cw = Mw;
const po = /* @__PURE__ */ ce(Cw);
function ue(e) {
  return function() {
    return e;
  };
}
const xd = Math.cos, Yi = Math.sin, vt = Math.sqrt, Zi = Math.PI, vo = 2 * Zi, Su = Math.PI, Au = 2 * Su, nr = 1e-6, kw = Au - nr;
function wd(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Nw(e) {
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? wd : Nw(t);
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
    let o = this._x1, u = this._y1, s = n - t, c = i - r, f = o - t, l = u - r, h = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (h > nr) if (!(Math.abs(l * s - c * f) > nr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = n - o, y = i - u, p = s * s + c * c, v = d * d + y * y, b = Math.sqrt(p), _ = Math.sqrt(h), g = a * Math.tan((Su - Math.acos((p + h - v) / (2 * b * _))) / 2), w = g / _, m = g / b;
      Math.abs(w - 1) > nr && this._append`L${t + w * f},${r + w * l}`, this._append`A${a},${a},0,0,${+(l * d > f * y)},${this._x1 = t + m * s},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, f = r + s, l = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > nr || Math.abs(this._y1 - f) > nr) && this._append`L${c},${f}`, n && (h < 0 && (h = h % Au + Au), h > kw ? this._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : h > nr && this._append`A${n},${n},0,${+(h >= Su)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function tc(e) {
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
function rc(e) {
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
function yo(e) {
  return new _d(e);
}
function Od(e) {
  return e[0];
}
function Sd(e) {
  return e[1];
}
function Ad(e, t) {
  var r = ue(!0), n = null, i = yo, a = null, o = tc(u);
  e = typeof e == "function" ? e : e === void 0 ? Od : ue(e), t = typeof t == "function" ? t : t === void 0 ? Sd : ue(t);
  function u(s) {
    var c, f = (s = rc(s)).length, l, h = !1, d;
    for (n == null && (a = i(d = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = s[c], c, s)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e(l, c, s), +t(l, c, s));
    if (d) return a = null, d + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ue(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ue(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : ue(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function ki(e, t, r) {
  var n = null, i = ue(!0), a = null, o = yo, u = null, s = tc(c);
  e = typeof e == "function" ? e : e === void 0 ? Od : ue(+e), t = typeof t == "function" ? t : ue(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Sd : ue(+r);
  function c(l) {
    var h, d, y, p = (l = rc(l)).length, v, b = !1, _, g = new Array(p), w = new Array(p);
    for (a == null && (u = o(_ = s())), h = 0; h <= p; ++h) {
      if (!(h < p && i(v = l[h], h, l)) === b)
        if (b = !b)
          d = h, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), y = h - 1; y >= d; --y)
            u.point(g[y], w[y]);
          u.lineEnd(), u.areaEnd();
        }
      b && (g[h] = +e(v, h, l), w[h] = +t(v, h, l), u.point(n ? +n(v, h, l) : g[h], r ? +r(v, h, l) : w[h]));
    }
    if (_) return u = null, _ + "" || null;
  }
  function f() {
    return Ad().defined(i).curve(o).context(a);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ue(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : ue(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : ue(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ue(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : ue(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : ue(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : ue(!!l), c) : i;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, a != null && (u = o(a)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? a = u = null : u = o(a = l), c) : a;
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
function Dw(e) {
  return new Pd(e, !0);
}
function Bw(e) {
  return new Pd(e, !1);
}
const nc = {
  draw(e, t) {
    const r = vt(t / Zi);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, vo);
  }
}, Lw = {
  draw(e, t) {
    const r = vt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, $d = vt(1 / 3), Rw = $d * 2, Fw = {
  draw(e, t) {
    const r = vt(t / Rw), n = r * $d;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, zw = {
  draw(e, t) {
    const r = vt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Ww = 0.8908130915292852, jd = Yi(Zi / 10) / Yi(7 * Zi / 10), Uw = Yi(vo / 10) * jd, Kw = -xd(vo / 10) * jd, qw = {
  draw(e, t) {
    const r = vt(t * Ww), n = Uw * r, i = Kw * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = vo * a / 5, u = xd(o), s = Yi(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
    }
    e.closePath();
  }
}, qo = vt(3), Hw = {
  draw(e, t) {
    const r = -vt(t / (qo * 3));
    e.moveTo(0, r * 2), e.lineTo(-qo * r, -r), e.lineTo(qo * r, -r), e.closePath();
  }
}, Je = -0.5, Qe = vt(3) / 2, Pu = 1 / vt(12), Gw = (Pu / 2 + 1) * 3, Vw = {
  draw(e, t) {
    const r = vt(t / Gw), n = r / 2, i = r * Pu, a = n, o = r * Pu + r, u = -a, s = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, s), e.lineTo(Je * n - Qe * i, Qe * n + Je * i), e.lineTo(Je * a - Qe * o, Qe * a + Je * o), e.lineTo(Je * u - Qe * s, Qe * u + Je * s), e.lineTo(Je * n + Qe * i, Je * i - Qe * n), e.lineTo(Je * a + Qe * o, Je * o - Qe * a), e.lineTo(Je * u + Qe * s, Je * s - Qe * u), e.closePath();
  }
};
function Xw(e, t) {
  let r = null, n = tc(i);
  e = typeof e == "function" ? e : ue(e || nc), t = typeof t == "function" ? t : ue(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ue(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : ue(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Ji() {
}
function Qi(e, t, r) {
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
        Qi(this, this._x1, this._y1);
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
        Qi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Yw(e) {
  return new Td(e);
}
function Ed(e) {
  this._context = e;
}
Ed.prototype = {
  areaStart: Ji,
  areaEnd: Ji,
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
        Qi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Zw(e) {
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
        Qi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Jw(e) {
  return new Md(e);
}
function Cd(e) {
  this._context = e;
}
Cd.prototype = {
  areaStart: Ji,
  areaEnd: Ji,
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
function Qw(e) {
  return new Cd(e);
}
function yl(e) {
  return e < 0 ? -1 : 1;
}
function ml(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (yl(a) + yl(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function gl(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ho(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function ea(e) {
  this._context = e;
}
ea.prototype = {
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
        Ho(this, this._t0, gl(this, this._t0));
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
          this._point = 3, Ho(this, gl(this, r = ml(this, e, t)), r);
          break;
        default:
          Ho(this, this._t0, r = ml(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function kd(e) {
  this._context = new Nd(e);
}
(kd.prototype = Object.create(ea.prototype)).point = function(e, t) {
  ea.prototype.point.call(this, t, e);
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
function e_(e) {
  return new ea(e);
}
function t_(e) {
  return new kd(e);
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
function r_(e) {
  return new Id(e);
}
function mo(e, t) {
  this._context = e, this._t = t;
}
mo.prototype = {
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
function n_(e) {
  return new mo(e, 0.5);
}
function i_(e) {
  return new mo(e, 0);
}
function a_(e) {
  return new mo(e, 1);
}
function Dr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function $u(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function o_(e, t) {
  return e[t];
}
function u_(e) {
  const t = [];
  return t.key = e, t;
}
function s_() {
  var e = ue([]), t = $u, r = Dr, n = o_;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), u_), u, s = o.length, c = -1, f;
    for (const l of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(l, o[u].key, c, a)]).data = l;
    for (u = 0, f = rc(t(o)); u < s; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ue(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : ue(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? $u : typeof a == "function" ? a : ue(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Dr, i) : r;
  }, i;
}
function c_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Dr(e, t);
  }
}
function l_(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Dr(e, t);
  }
}
function f_(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, h = f[n - 1][1] || 0, d = (l - h) / 2, y = 0; y < u; ++y) {
          var p = e[t[y]], v = p[n][1] || 0, b = p[n - 1][1] || 0;
          d += v - b;
        }
        s += l, c += d * l;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, Dr(e, t);
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
var h_ = ["type", "size", "sizeType"];
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
      p_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p_(e, t, r) {
  return t = d_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d_(e) {
  var t = v_(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function v_(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function y_(e, t) {
  if (e == null) return {};
  var r = m_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function m_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Dd = {
  symbolCircle: nc,
  symbolCross: Lw,
  symbolDiamond: Fw,
  symbolSquare: zw,
  symbolStar: qw,
  symbolTriangle: Hw,
  symbolWye: Vw
}, g_ = Math.PI / 180, b_ = function(t) {
  var r = "symbol".concat(po(t));
  return Dd[r] || nc;
}, x_ = function(t, r, n) {
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
      var i = 18 * g_;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, w_ = function(t, r) {
  Dd["symbol".concat(po(t))] = r;
}, go = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, s = y_(t, h_), c = wl(wl({}, s), {}, {
    type: n,
    size: a,
    sizeType: u
  }), f = function() {
    var v = b_(n), b = Xw().type(v).size(x_(a, u, n));
    return b();
  }, l = c.className, h = c.cx, d = c.cy, y = Q(c, !0);
  return h === +h && d === +d && a === +a ? /* @__PURE__ */ P.createElement("path", ju({}, y, {
    className: ee("recharts-symbols", l),
    transform: "translate(".concat(h, ", ").concat(d, ")"),
    d: f()
  })) : null;
};
go.registerSymbol = w_;
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Br(e);
}
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tu.apply(this, arguments);
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
function __(e) {
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
function O_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function S_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ld(n.key), n);
  }
}
function A_(e, t, r) {
  return t && S_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function P_(e, t, r) {
  return t = ta(t), $_(e, Bd() ? Reflect.construct(t, r || [], ta(e).constructor) : t.apply(e, r));
}
function $_(e, t) {
  if (t && (Br(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j_(e);
}
function j_(e) {
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
function ta(e) {
  return ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ta(e);
}
function T_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Eu(e, t);
}
function Eu(e, t) {
  return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eu(e, t);
}
function Wn(e, t, r) {
  return t = Ld(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ld(e) {
  var t = E_(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function E_(e, t) {
  if (Br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var et = 32, ic = /* @__PURE__ */ function(e) {
  function t() {
    return O_(this, t), P_(this, t, arguments);
  }
  return T_(t, e), A_(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = et / 2, o = et / 6, u = et / 3, s = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ P.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
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
            stroke: s,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(et, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ P.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(et / 8, "h").concat(et, "v").concat(et * 3 / 4, "h").concat(-et, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ P.isValidElement(n.legendIcon)) {
          var c = __({}, n);
          return delete c.legendIcon, /* @__PURE__ */ P.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ P.createElement(go, {
          fill: s,
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
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, s = i.formatter, c = i.inactiveColor, f = {
        x: 0,
        y: 0,
        width: et,
        height: et
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, h = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(d, y) {
        var p = d.formatter || s, v = ee(Wn(Wn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", d.inactive));
        if (d.type === "none")
          return null;
        var b = Z(d.value) ? null : d.value;
        Mt(
          !Z(d.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var _ = d.inactive ? c : d.color;
        return /* @__PURE__ */ P.createElement("li", Tu({
          className: v,
          style: l,
          key: "legend-item-".concat(y)
        }, Fn(n.props, d, y)), /* @__PURE__ */ P.createElement(xu, {
          width: o,
          height: o,
          viewBox: f,
          style: h
        }, n.renderIcon(d)), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: _
          }
        }, p ? p(b, d, y) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
}(Bt);
Wn(ic, "displayName", "Legend");
Wn(ic, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var M_ = eo;
function C_() {
  this.__data__ = new M_(), this.size = 0;
}
var k_ = C_;
function N_(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var I_ = N_;
function D_(e) {
  return this.__data__.get(e);
}
var B_ = D_;
function L_(e) {
  return this.__data__.has(e);
}
var R_ = L_, F_ = eo, z_ = Hs, W_ = Gs, U_ = 200;
function K_(e, t) {
  var r = this.__data__;
  if (r instanceof F_) {
    var n = r.__data__;
    if (!z_ || n.length < U_ - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new W_(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var q_ = K_, H_ = eo, G_ = k_, V_ = I_, X_ = B_, Y_ = R_, Z_ = q_;
function pn(e) {
  var t = this.__data__ = new H_(e);
  this.size = t.size;
}
pn.prototype.clear = G_;
pn.prototype.delete = V_;
pn.prototype.get = X_;
pn.prototype.has = Y_;
pn.prototype.set = Z_;
var Rd = pn, J_ = "__lodash_hash_undefined__";
function Q_(e) {
  return this.__data__.set(e, J_), this;
}
var e1 = Q_;
function t1(e) {
  return this.__data__.has(e);
}
var r1 = t1, n1 = Gs, i1 = e1, a1 = r1;
function ra(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new n1(); ++t < r; )
    this.add(e[t]);
}
ra.prototype.add = ra.prototype.push = i1;
ra.prototype.has = a1;
var Fd = ra;
function o1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var zd = o1;
function u1(e, t) {
  return e.has(t);
}
var Wd = u1, s1 = Fd, c1 = zd, l1 = Wd, f1 = 1, h1 = 2;
function p1(e, t, r, n, i, a) {
  var o = r & f1, u = e.length, s = t.length;
  if (u != s && !(o && s > u))
    return !1;
  var c = a.get(e), f = a.get(t);
  if (c && f)
    return c == t && f == e;
  var l = -1, h = !0, d = r & h1 ? new s1() : void 0;
  for (a.set(e, t), a.set(t, e); ++l < u; ) {
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
      if (!c1(t, function(b, _) {
        if (!l1(d, _) && (y === b || i(y, b, r, n, a)))
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
var Ud = p1, d1 = Ot, v1 = d1.Uint8Array, y1 = v1;
function m1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var g1 = m1;
function b1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ac = b1, Ol = _i, Sl = y1, x1 = qs, w1 = Ud, _1 = g1, O1 = ac, S1 = 1, A1 = 2, P1 = "[object Boolean]", $1 = "[object Date]", j1 = "[object Error]", T1 = "[object Map]", E1 = "[object Number]", M1 = "[object RegExp]", C1 = "[object Set]", k1 = "[object String]", N1 = "[object Symbol]", I1 = "[object ArrayBuffer]", D1 = "[object DataView]", Al = Ol ? Ol.prototype : void 0, Go = Al ? Al.valueOf : void 0;
function B1(e, t, r, n, i, a, o) {
  switch (r) {
    case D1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case I1:
      return !(e.byteLength != t.byteLength || !a(new Sl(e), new Sl(t)));
    case P1:
    case $1:
    case E1:
      return x1(+e, +t);
    case j1:
      return e.name == t.name && e.message == t.message;
    case M1:
    case k1:
      return e == t + "";
    case T1:
      var u = _1;
    case C1:
      var s = n & S1;
      if (u || (u = O1), e.size != t.size && !s)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= A1, o.set(e, t);
      var f = w1(u(e), u(t), n, i, a, o);
      return o.delete(e), f;
    case N1:
      if (Go)
        return Go.call(e) == Go.call(t);
  }
  return !1;
}
var L1 = B1;
function R1(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Kd = R1, F1 = Kd, z1 = qe;
function W1(e, t, r) {
  var n = t(e);
  return z1(e) ? n : F1(n, r(e));
}
var U1 = W1;
function K1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var q1 = K1;
function H1() {
  return [];
}
var G1 = H1, V1 = q1, X1 = G1, Y1 = Object.prototype, Z1 = Y1.propertyIsEnumerable, Pl = Object.getOwnPropertySymbols, J1 = Pl ? function(e) {
  return e == null ? [] : (e = Object(e), V1(Pl(e), function(t) {
    return Z1.call(e, t);
  }));
} : X1, Q1 = J1;
function eO(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var tO = eO, rO = Rt, nO = Ft, iO = "[object Arguments]";
function aO(e) {
  return nO(e) && rO(e) == iO;
}
var oO = aO, $l = oO, uO = Ft, qd = Object.prototype, sO = qd.hasOwnProperty, cO = qd.propertyIsEnumerable, lO = $l(/* @__PURE__ */ function() {
  return arguments;
}()) ? $l : function(e) {
  return uO(e) && sO.call(e, "callee") && !cO.call(e, "callee");
}, oc = lO, na = { exports: {} };
function fO() {
  return !1;
}
var hO = fO;
na.exports;
(function(e, t) {
  var r = Ot, n = hO, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
  e.exports = c;
})(na, na.exports);
var Hd = na.exports, pO = 9007199254740991, dO = /^(?:0|[1-9]\d*)$/;
function vO(e, t) {
  var r = typeof e;
  return t = t ?? pO, !!t && (r == "number" || r != "symbol" && dO.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var uc = vO, yO = 9007199254740991;
function mO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yO;
}
var sc = mO, gO = Rt, bO = sc, xO = Ft, wO = "[object Arguments]", _O = "[object Array]", OO = "[object Boolean]", SO = "[object Date]", AO = "[object Error]", PO = "[object Function]", $O = "[object Map]", jO = "[object Number]", TO = "[object Object]", EO = "[object RegExp]", MO = "[object Set]", CO = "[object String]", kO = "[object WeakMap]", NO = "[object ArrayBuffer]", IO = "[object DataView]", DO = "[object Float32Array]", BO = "[object Float64Array]", LO = "[object Int8Array]", RO = "[object Int16Array]", FO = "[object Int32Array]", zO = "[object Uint8Array]", WO = "[object Uint8ClampedArray]", UO = "[object Uint16Array]", KO = "[object Uint32Array]", fe = {};
fe[DO] = fe[BO] = fe[LO] = fe[RO] = fe[FO] = fe[zO] = fe[WO] = fe[UO] = fe[KO] = !0;
fe[wO] = fe[_O] = fe[NO] = fe[OO] = fe[IO] = fe[SO] = fe[AO] = fe[PO] = fe[$O] = fe[jO] = fe[TO] = fe[EO] = fe[MO] = fe[CO] = fe[kO] = !1;
function qO(e) {
  return xO(e) && bO(e.length) && !!fe[gO(e)];
}
var HO = qO;
function GO(e) {
  return function(t) {
    return e(t);
  };
}
var Gd = GO, ia = { exports: {} };
ia.exports;
(function(e, t) {
  var r = td, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, u = function() {
    try {
      var s = i && i.require && i.require("util").types;
      return s || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(ia, ia.exports);
var VO = ia.exports, XO = HO, YO = Gd, jl = VO, Tl = jl && jl.isTypedArray, ZO = Tl ? YO(Tl) : XO, Vd = ZO, JO = tO, QO = oc, eS = qe, tS = Hd, rS = uc, nS = Vd, iS = Object.prototype, aS = iS.hasOwnProperty;
function oS(e, t) {
  var r = eS(e), n = !r && QO(e), i = !r && !n && tS(e), a = !r && !n && !i && nS(e), o = r || n || i || a, u = o ? JO(e.length, String) : [], s = u.length;
  for (var c in e)
    (t || aS.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    rS(c, s))) && u.push(c);
  return u;
}
var uS = oS, sS = Object.prototype;
function cS(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || sS;
  return e === r;
}
var lS = cS;
function fS(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Xd = fS, hS = Xd, pS = hS(Object.keys, Object), dS = pS, vS = lS, yS = dS, mS = Object.prototype, gS = mS.hasOwnProperty;
function bS(e) {
  if (!vS(e))
    return yS(e);
  var t = [];
  for (var r in Object(e))
    gS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var xS = bS, wS = Ks, _S = sc;
function OS(e) {
  return e != null && _S(e.length) && !wS(e);
}
var Si = OS, SS = uS, AS = xS, PS = Si;
function $S(e) {
  return PS(e) ? SS(e) : AS(e);
}
var bo = $S, jS = U1, TS = Q1, ES = bo;
function MS(e) {
  return jS(e, ES, TS);
}
var CS = MS, El = CS, kS = 1, NS = Object.prototype, IS = NS.hasOwnProperty;
function DS(e, t, r, n, i, a) {
  var o = r & kS, u = El(e), s = u.length, c = El(t), f = c.length;
  if (s != f && !o)
    return !1;
  for (var l = s; l--; ) {
    var h = u[l];
    if (!(o ? h in t : IS.call(t, h)))
      return !1;
  }
  var d = a.get(e), y = a.get(t);
  if (d && y)
    return d == t && y == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var v = o; ++l < s; ) {
    h = u[l];
    var b = e[h], _ = t[h];
    if (n)
      var g = o ? n(_, b, h, t, e, a) : n(b, _, h, e, t, a);
    if (!(g === void 0 ? b === _ || i(b, _, r, n, a) : g)) {
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
var BS = DS, LS = xr, RS = Ot, FS = LS(RS, "DataView"), zS = FS, WS = xr, US = Ot, KS = WS(US, "Promise"), qS = KS, HS = xr, GS = Ot, VS = HS(GS, "Set"), Yd = VS, XS = xr, YS = Ot, ZS = XS(YS, "WeakMap"), JS = ZS, Mu = zS, Cu = Hs, ku = qS, Nu = Yd, Iu = JS, Zd = Rt, dn = nd, Ml = "[object Map]", QS = "[object Object]", Cl = "[object Promise]", kl = "[object Set]", Nl = "[object WeakMap]", Il = "[object DataView]", eA = dn(Mu), tA = dn(Cu), rA = dn(ku), nA = dn(Nu), iA = dn(Iu), ir = Zd;
(Mu && ir(new Mu(new ArrayBuffer(1))) != Il || Cu && ir(new Cu()) != Ml || ku && ir(ku.resolve()) != Cl || Nu && ir(new Nu()) != kl || Iu && ir(new Iu()) != Nl) && (ir = function(e) {
  var t = Zd(e), r = t == QS ? e.constructor : void 0, n = r ? dn(r) : "";
  if (n)
    switch (n) {
      case eA:
        return Il;
      case tA:
        return Ml;
      case rA:
        return Cl;
      case nA:
        return kl;
      case iA:
        return Nl;
    }
  return t;
});
var aA = ir, Vo = Rd, oA = Ud, uA = L1, sA = BS, Dl = aA, Bl = qe, Ll = Hd, cA = Vd, lA = 1, Rl = "[object Arguments]", Fl = "[object Array]", Ni = "[object Object]", fA = Object.prototype, zl = fA.hasOwnProperty;
function hA(e, t, r, n, i, a) {
  var o = Bl(e), u = Bl(t), s = o ? Fl : Dl(e), c = u ? Fl : Dl(t);
  s = s == Rl ? Ni : s, c = c == Rl ? Ni : c;
  var f = s == Ni, l = c == Ni, h = s == c;
  if (h && Ll(e)) {
    if (!Ll(t))
      return !1;
    o = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new Vo()), o || cA(e) ? oA(e, t, r, n, i, a) : uA(e, t, s, r, n, i, a);
  if (!(r & lA)) {
    var d = f && zl.call(e, "__wrapped__"), y = l && zl.call(t, "__wrapped__");
    if (d || y) {
      var p = d ? e.value() : e, v = y ? t.value() : t;
      return a || (a = new Vo()), i(p, v, r, n, a);
    }
  }
  return h ? (a || (a = new Vo()), sA(e, t, r, n, i, a)) : !1;
}
var pA = hA, dA = pA, Wl = Ft;
function Jd(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Wl(e) && !Wl(t) ? e !== e && t !== t : dA(e, t, r, n, Jd, i);
}
var cc = Jd, vA = Rd, yA = cc, mA = 1, gA = 2;
function bA(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var s = u[0], c = e[s], f = u[1];
    if (o && u[2]) {
      if (c === void 0 && !(s in e))
        return !1;
    } else {
      var l = new vA();
      if (n)
        var h = n(c, f, s, e, t, l);
      if (!(h === void 0 ? yA(f, c, mA | gA, n, l) : h))
        return !1;
    }
  }
  return !0;
}
var xA = bA, wA = Vt;
function _A(e) {
  return e === e && !wA(e);
}
var Qd = _A, OA = Qd, SA = bo;
function AA(e) {
  for (var t = SA(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, OA(i)];
  }
  return t;
}
var PA = AA;
function $A(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var ev = $A, jA = xA, TA = PA, EA = ev;
function MA(e) {
  var t = TA(e);
  return t.length == 1 && t[0][2] ? EA(t[0][0], t[0][1]) : function(r) {
    return r === e || jA(r, e, t);
  };
}
var CA = MA;
function kA(e, t) {
  return e != null && t in Object(e);
}
var NA = kA, IA = sd, DA = oc, BA = qe, LA = uc, RA = sc, FA = ro;
function zA(e, t, r) {
  t = IA(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = FA(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && RA(i) && LA(o, i) && (BA(e) || DA(e)));
}
var WA = zA, UA = NA, KA = WA;
function qA(e, t) {
  return e != null && KA(e, t, UA);
}
var HA = qA, GA = cc, VA = cd, XA = HA, YA = Us, ZA = Qd, JA = ev, QA = ro, eP = 1, tP = 2;
function rP(e, t) {
  return YA(e) && ZA(t) ? JA(QA(e), t) : function(r) {
    var n = VA(r, e);
    return n === void 0 && n === t ? XA(r, e) : GA(t, n, eP | tP);
  };
}
var nP = rP;
function iP(e) {
  return e;
}
var vn = iP;
function aP(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var oP = aP, uP = Ys;
function sP(e) {
  return function(t) {
    return uP(t, e);
  };
}
var cP = sP, lP = oP, fP = cP, hP = Us, pP = ro;
function dP(e) {
  return hP(e) ? lP(pP(e)) : fP(e);
}
var vP = dP, yP = CA, mP = nP, gP = vn, bP = qe, xP = vP;
function wP(e) {
  return typeof e == "function" ? e : e == null ? gP : typeof e == "object" ? bP(e) ? mP(e[0], e[1]) : yP(e) : xP(e);
}
var Xt = wP;
function _P(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var tv = _P;
function OP(e) {
  return e !== e;
}
var SP = OP;
function AP(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var PP = AP, $P = tv, jP = SP, TP = PP;
function EP(e, t, r) {
  return t === t ? TP(e, t, r) : $P(e, jP, r);
}
var MP = EP, CP = MP;
function kP(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && CP(e, t, 0) > -1;
}
var NP = kP;
function IP(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var DP = IP;
function BP() {
}
var LP = BP, Xo = Yd, RP = LP, FP = ac, zP = 1 / 0, WP = Xo && 1 / FP(new Xo([, -0]))[1] == zP ? function(e) {
  return new Xo(e);
} : RP, UP = WP, KP = Fd, qP = NP, HP = DP, GP = Wd, VP = UP, XP = ac, YP = 200;
function ZP(e, t, r) {
  var n = -1, i = qP, a = e.length, o = !0, u = [], s = u;
  if (r)
    o = !1, i = HP;
  else if (a >= YP) {
    var c = t ? null : VP(e);
    if (c)
      return XP(c);
    o = !1, i = GP, s = new KP();
  } else
    s = t ? [] : u;
  e:
    for (; ++n < a; ) {
      var f = e[n], l = t ? t(f) : f;
      if (f = r || f !== 0 ? f : 0, o && l === l) {
        for (var h = s.length; h--; )
          if (s[h] === l)
            continue e;
        t && s.push(l), u.push(f);
      } else i(s, l, r) || (s !== u && s.push(l), u.push(f));
    }
  return u;
}
var JP = ZP, QP = Xt, e$ = JP;
function t$(e, t) {
  return e && e.length ? e$(e, QP(t)) : [];
}
var r$ = t$;
const Ul = /* @__PURE__ */ ce(r$);
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
var n$ = ["ref"];
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
      xo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ql(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, iv(n.key), n);
  }
}
function a$(e, t, r) {
  return t && ql(e.prototype, t), r && ql(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function o$(e, t, r) {
  return t = aa(t), u$(e, nv() ? Reflect.construct(t, r || [], aa(e).constructor) : t.apply(e, r));
}
function u$(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return s$(e);
}
function s$(e) {
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
function aa(e) {
  return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, aa(e);
}
function c$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Du(e, t);
}
function Du(e, t) {
  return Du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Du(e, t);
}
function xo(e, t, r) {
  return t = iv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iv(e) {
  var t = l$(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function l$(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function f$(e, t) {
  if (e == null) return {};
  var r = h$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function p$(e) {
  return e.value;
}
function d$(e, t) {
  if (/* @__PURE__ */ P.isValidElement(e))
    return /* @__PURE__ */ P.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ P.createElement(e, t);
  t.ref;
  var r = f$(t, n$);
  return /* @__PURE__ */ P.createElement(ic, r);
}
var Hl = 1, Ze = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    i$(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = o$(this, t, [].concat(i)), xo(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return c$(t, e), a$(t, [{
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
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, s = i.margin, c = i.chartWidth, f = i.chartHeight, l, h;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var d = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - d.width) / 2
          };
        } else
          l = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var y = this.getBBoxSnapshot();
          h = {
            top: ((f || 0) - y.height) / 2
          };
        } else
          h = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return St(St({}, l), h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, s = i.wrapperStyle, c = i.payloadUniqBy, f = i.payload, l = St(St({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ P.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(d) {
          n.wrapperNode = d;
        }
      }, d$(a, St(St({}, this.props), {}, {
        payload: rv(f, c, p$)
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
xo(Ze, "displayName", "Legend");
xo(Ze, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Gl = _i, v$ = oc, y$ = qe, Vl = Gl ? Gl.isConcatSpreadable : void 0;
function m$(e) {
  return y$(e) || v$(e) || !!(Vl && e && e[Vl]);
}
var g$ = m$, b$ = Kd, x$ = g$;
function av(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = x$), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u) ? t > 1 ? av(u, t - 1, r, n, i) : b$(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var ov = av;
function w$(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var s = o[e ? u : ++i];
      if (r(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var _$ = w$, O$ = _$, S$ = O$(), A$ = S$, P$ = A$, $$ = bo;
function j$(e, t) {
  return e && P$(e, t, $$);
}
var uv = j$, T$ = Si;
function E$(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!T$(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var M$ = E$, C$ = uv, k$ = M$, N$ = k$(C$), lc = N$, I$ = lc, D$ = Si;
function B$(e, t) {
  var r = -1, n = D$(e) ? Array(e.length) : [];
  return I$(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var sv = B$;
function L$(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var R$ = L$, Xl = un;
function F$(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = Xl(e), o = t !== void 0, u = t === null, s = t === t, c = Xl(t);
    if (!u && !c && !a && e > t || a && o && s && !u && !c || n && o && s || !r && s || !i)
      return 1;
    if (!n && !a && !c && e < t || c && r && i && !n && !a || u && r && i || !o && i || !s)
      return -1;
  }
  return 0;
}
var z$ = F$, W$ = z$;
function U$(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o; ) {
    var s = W$(i[n], a[n]);
    if (s) {
      if (n >= u)
        return s;
      var c = r[n];
      return s * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var K$ = U$, Yo = Xs, q$ = Ys, H$ = Xt, G$ = sv, V$ = R$, X$ = Gd, Y$ = K$, Z$ = vn, J$ = qe;
function Q$(e, t, r) {
  t.length ? t = Yo(t, function(a) {
    return J$(a) ? function(o) {
      return q$(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [Z$];
  var n = -1;
  t = Yo(t, X$(H$));
  var i = G$(e, function(a, o, u) {
    var s = Yo(t, function(c) {
      return c(a);
    });
    return { criteria: s, index: ++n, value: a };
  });
  return V$(i, function(a, o) {
    return Y$(a, o, r);
  });
}
var ej = Q$;
function tj(e, t, r) {
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
var rj = tj, nj = rj, Yl = Math.max;
function ij(e, t, r) {
  return t = Yl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Yl(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(o), nj(e, this, u);
  };
}
var aj = ij;
function oj(e) {
  return function() {
    return e;
  };
}
var uj = oj, sj = xr, cj = function() {
  try {
    var e = sj(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cv = cj, lj = uj, Zl = cv, fj = vn, hj = Zl ? function(e, t) {
  return Zl(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lj(t),
    writable: !0
  });
} : fj, pj = hj, dj = 800, vj = 16, yj = Date.now;
function mj(e) {
  var t = 0, r = 0;
  return function() {
    var n = yj(), i = vj - (n - r);
    if (r = n, i > 0) {
      if (++t >= dj)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var gj = mj, bj = pj, xj = gj, wj = xj(bj), _j = wj, Oj = vn, Sj = aj, Aj = _j;
function Pj(e, t) {
  return Aj(Sj(e, t, Oj), e + "");
}
var $j = Pj, jj = qs, Tj = Si, Ej = uc, Mj = Vt;
function Cj(e, t, r) {
  if (!Mj(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Tj(r) && Ej(t, r.length) : n == "string" && t in r) ? jj(r[t], e) : !1;
}
var wo = Cj, kj = ov, Nj = ej, Ij = $j, Jl = wo, Dj = Ij(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Jl(e, t[0], t[1]) ? t = [] : r > 2 && Jl(t[0], t[1], t[2]) && (t = [t[0]]), Nj(e, kj(t, 1), []);
}), Bj = Dj;
const fc = /* @__PURE__ */ ce(Bj);
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function Bu() {
  return Bu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bu.apply(this, arguments);
}
function Lj(e, t) {
  return Wj(e) || zj(e, t) || Fj(e, t) || Rj();
}
function Rj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fj(e, t) {
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
function zj(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Wj(e) {
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
function Zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ef(Object(r), !0).forEach(function(n) {
      Uj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Uj(e, t, r) {
  return t = Kj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Kj(e) {
  var t = qj(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function qj(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hj(e) {
  return Array.isArray(e) && Ae(e[0]) && Ae(e[1]) ? e.join(" ~ ") : e;
}
var Gj = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, f = t.payload, l = t.formatter, h = t.itemSorter, d = t.wrapperClassName, y = t.labelClassName, p = t.label, v = t.labelFormatter, b = t.accessibilityLayer, _ = b === void 0 ? !1 : b, g = function() {
    if (f && f.length) {
      var T = {
        padding: 0,
        margin: 0
      }, N = (h ? fc(f, h) : f).map(function(k, C) {
        if (k.type === "none")
          return null;
        var I = Zo({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: k.color || "#000"
        }, u), D = k.formatter || l || Hj, R = k.value, F = k.name, q = R, G = F;
        if (D && q != null && G != null) {
          var W = D(R, F, k, C, f);
          if (Array.isArray(W)) {
            var V = Lj(W, 2);
            q = V[0], G = V[1];
          } else
            q = W;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ P.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(C),
            style: I
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
  }, w = Zo({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = Zo({
    margin: 0
  }, c), x = !X(p), O = x ? p : "", S = ee("recharts-default-tooltip", d), $ = ee("recharts-tooltip-label", y);
  x && v && f !== void 0 && f !== null && (O = v(p, f));
  var M = _ ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", Bu({
    className: S,
    style: w
  }, M), /* @__PURE__ */ P.createElement("p", {
    className: $,
    style: m
  }, /* @__PURE__ */ P.isValidElement(O) ? O : "".concat(O)), g());
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
  return t = Vj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vj(e) {
  var t = Xj(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function Xj(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var On = "recharts-tooltip-wrapper", Yj = {
  visibility: "hidden"
};
function Zj(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return ee(On, Ii(Ii(Ii(Ii({}, "".concat(On, "-right"), L(r) && t && L(t.x) && r >= t.x), "".concat(On, "-left"), L(r) && t && L(t.x) && r < t.x), "".concat(On, "-bottom"), L(n) && t && L(t.y) && n >= t.y), "".concat(On, "-top"), L(n) && t && L(t.y) && n < t.y));
}
function tf(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (a && L(a[n]))
    return a[n];
  var f = r[n] - u - i, l = r[n] + i;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var h = f, d = s[n];
    return h < d ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var y = l + u, p = s[n] + c;
  return y > p ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function Jj(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function Qj(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, s = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = tf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), l = tf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = Jj({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : c = Yj, {
    cssProperties: c,
    cssClasses: Zj({
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
      Ru(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fv(n.key), n);
  }
}
function rT(e, t, r) {
  return t && tT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nT(e, t, r) {
  return t = oa(t), iT(e, lv() ? Reflect.construct(t, r || [], oa(e).constructor) : t.apply(e, r));
}
function iT(e, t) {
  if (t && (Rr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aT(e);
}
function aT(e) {
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
function oa(e) {
  return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oa(e);
}
function oT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lu(e, t);
}
function Lu(e, t) {
  return Lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lu(e, t);
}
function Ru(e, t, r) {
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
var af = 1, sT = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    eT(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = nT(this, t, [].concat(i)), Ru(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Ru(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return oT(t, e), rT(t, [{
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
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.children, f = i.coordinate, l = i.hasPayload, h = i.isAnimationActive, d = i.offset, y = i.position, p = i.reverseDirection, v = i.useTranslate3d, b = i.viewBox, _ = i.wrapperStyle, g = Qj({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: d,
        position: y,
        reverseDirection: p,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), w = g.cssClasses, m = g.cssProperties, x = nf(nf({
        transition: h && a ? "transform ".concat(u, "ms ").concat(s) : void 0
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
          style: x,
          ref: function(S) {
            n.wrapperNode = S;
          }
        }, c)
      );
    }
  }]);
}(Bt), cT = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wr = {
  isSsr: cT()
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
function uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? of(Object(r), !0).forEach(function(n) {
      hc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : of(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pv(n.key), n);
  }
}
function hT(e, t, r) {
  return t && fT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function pT(e, t, r) {
  return t = ua(t), dT(e, hv() ? Reflect.construct(t, r || [], ua(e).constructor) : t.apply(e, r));
}
function dT(e, t) {
  if (t && (Fr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return vT(e);
}
function vT(e) {
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
function yT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fu(e, t);
}
function Fu(e, t) {
  return Fu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fu(e, t);
}
function hc(e, t, r) {
  return t = pv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pv(e) {
  var t = mT(e, "string");
  return Fr(t) == "symbol" ? t : t + "";
}
function mT(e, t) {
  if (Fr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function gT(e) {
  return e.dataKey;
}
function bT(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(Gj, t);
}
var ge = /* @__PURE__ */ function(e) {
  function t() {
    return lT(this, t), pT(this, t, arguments);
  }
  return yT(t, e), hT(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.content, f = i.coordinate, l = i.filterNull, h = i.isAnimationActive, d = i.offset, y = i.payload, p = i.payloadUniqBy, v = i.position, b = i.reverseDirection, _ = i.useTranslate3d, g = i.viewBox, w = i.wrapperStyle, m = y ?? [];
      l && m.length && (m = rv(y.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), p, gT));
      var x = m.length > 0;
      return /* @__PURE__ */ P.createElement(sT, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: h,
        active: a,
        coordinate: f,
        hasPayload: x,
        offset: d,
        position: v,
        reverseDirection: b,
        useTranslate3d: _,
        viewBox: g,
        wrapperStyle: w
      }, bT(c, uf(uf({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
}(Bt);
hc(ge, "displayName", "Tooltip");
hc(ge, "defaultProps", {
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
var xT = Ot, wT = function() {
  return xT.Date.now();
}, _T = wT, OT = /\s/;
function ST(e) {
  for (var t = e.length; t-- && OT.test(e.charAt(t)); )
    ;
  return t;
}
var AT = ST, PT = AT, $T = /^\s+/;
function jT(e) {
  return e && e.slice(0, PT(e) + 1).replace($T, "");
}
var TT = jT, ET = TT, sf = Vt, MT = un, cf = NaN, CT = /^[-+]0x[0-9a-f]+$/i, kT = /^0b[01]+$/i, NT = /^0o[0-7]+$/i, IT = parseInt;
function DT(e) {
  if (typeof e == "number")
    return e;
  if (MT(e))
    return cf;
  if (sf(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sf(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ET(e);
  var r = kT.test(e);
  return r || NT.test(e) ? IT(e.slice(2), r ? 2 : 8) : CT.test(e) ? cf : +e;
}
var dv = DT, BT = Vt, Jo = _T, lf = dv, LT = "Expected a function", RT = Math.max, FT = Math.min;
function zT(e, t, r) {
  var n, i, a, o, u, s, c = 0, f = !1, l = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(LT);
  t = lf(t) || 0, BT(r) && (f = !!r.leading, l = "maxWait" in r, a = l ? RT(lf(r.maxWait) || 0, t) : a, h = "trailing" in r ? !!r.trailing : h);
  function d(x) {
    var O = n, S = i;
    return n = i = void 0, c = x, o = e.apply(S, O), o;
  }
  function y(x) {
    return c = x, u = setTimeout(b, t), f ? d(x) : o;
  }
  function p(x) {
    var O = x - s, S = x - c, $ = t - O;
    return l ? FT($, a - S) : $;
  }
  function v(x) {
    var O = x - s, S = x - c;
    return s === void 0 || O >= t || O < 0 || l && S >= a;
  }
  function b() {
    var x = Jo();
    if (v(x))
      return _(x);
    u = setTimeout(b, p(x));
  }
  function _(x) {
    return u = void 0, h && n ? d(x) : (n = i = void 0, o);
  }
  function g() {
    u !== void 0 && clearTimeout(u), c = 0, n = s = i = u = void 0;
  }
  function w() {
    return u === void 0 ? o : _(Jo());
  }
  function m() {
    var x = Jo(), O = v(x);
    if (n = arguments, i = this, s = x, O) {
      if (u === void 0)
        return y(s);
      if (l)
        return clearTimeout(u), u = setTimeout(b, t), d(s);
    }
    return u === void 0 && (u = setTimeout(b, t)), o;
  }
  return m.cancel = g, m.flush = w, m;
}
var WT = zT, UT = WT, KT = Vt, qT = "Expected a function";
function HT(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(qT);
  return KT(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), UT(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var GT = HT;
const vv = /* @__PURE__ */ ce(GT);
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
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ff(Object(r), !0).forEach(function(n) {
      VT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ff(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VT(e, t, r) {
  return t = XT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XT(e) {
  var t = YT(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function YT(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZT(e, t) {
  return tE(e) || eE(e, t) || QT(e, t) || JT();
}
function JT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QT(e, t) {
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
function eE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function tE(e) {
  if (Array.isArray(e)) return e;
}
var dt = /* @__PURE__ */ Vp(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, s = u === void 0 ? "100%" : u, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, h = e.maxHeight, d = e.children, y = e.debounce, p = y === void 0 ? 0 : y, v = e.id, b = e.className, _ = e.onResize, g = e.style, w = g === void 0 ? {} : g, m = Gi(null), x = Gi();
  x.current = _, Cm(t, function() {
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
  }), S = ZT(O, 2), $ = S[0], M = S[1], j = km(function(N, k) {
    M(function(C) {
      var I = Math.round(N), D = Math.round(k);
      return C.containerWidth === I && C.containerHeight === D ? C : {
        containerWidth: I,
        containerHeight: D
      };
    });
  }, []);
  Ya(function() {
    var N = function(F) {
      var q, G = F[0].contentRect, W = G.width, V = G.height;
      j(W, V), (q = x.current) === null || q === void 0 || q.call(x, W, V);
    };
    p > 0 && (N = vv(N, p, {
      trailing: !0,
      leading: !1
    }));
    var k = new ResizeObserver(N), C = m.current.getBoundingClientRect(), I = C.width, D = C.height;
    return j(I, D), k.observe(m.current), function() {
      k.disconnect();
    };
  }, [j, p]);
  var T = Xp(function() {
    var N = $.containerWidth, k = $.containerHeight;
    if (N < 0 || k < 0)
      return null;
    Mt(or(o) || or(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), Mt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var C = or(o) ? N : o, I = or(s) ? k : s;
    r && r > 0 && (C ? I = C / r : I && (C = I * r), h && I > h && (I = h)), Mt(C > 0 || I > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, C, I, o, s, f, l, r);
    var D = !Array.isArray(d) && Et(d.type).endsWith("Chart");
    return P.Children.map(d, function(R) {
      return /* @__PURE__ */ P.isValidElement(R) ? /* @__PURE__ */ Se(R, Di({
        width: C,
        height: I
      }, D ? {
        style: Di({
          height: "100%",
          width: "100%",
          maxHeight: I,
          maxWidth: C
        }, R.props.style)
      } : {})) : R;
    });
  }, [r, d, s, h, l, f, $, o]);
  return /* @__PURE__ */ P.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: ee("recharts-responsive-container", b),
    style: Di(Di({}, w), {}, {
      width: o,
      height: s,
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
function zu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pf(Object(r), !0).forEach(function(n) {
      rE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rE(e, t, r) {
  return t = nE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nE(e) {
  var t = iE(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function iE(e, t) {
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
}, aE = 2e3, oE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, df = "recharts_measurement_span";
function uE(e) {
  var t = zu({}, e);
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
    var o = zu(zu({}, oE), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return Pr.widthCache[i] = s, ++Pr.cacheCount > aE && (Pr.cacheCount = 0, Pr.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, sE = function(t) {
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
function sa(e, t) {
  return hE(e) || fE(e, t) || lE(e, t) || cE();
}
function cE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lE(e, t) {
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
function fE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function hE(e) {
  if (Array.isArray(e)) return e;
}
function pE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vE(n.key), n);
  }
}
function dE(e, t, r) {
  return t && yf(e.prototype, t), r && yf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vE(e) {
  var t = yE(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function yE(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var mf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, gf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, mE = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, gE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, yv = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, bE = Object.keys(yv), Er = "NaN";
function xE(e, t) {
  return e * yv[t];
}
var Bi = /* @__PURE__ */ function() {
  function e(t, r) {
    pE(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !mE.test(r) && (this.num = NaN, this.unit = ""), bE.includes(r) && (this.num = xE(t, r), this.unit = "px");
  }
  return dE(e, [{
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
      var n, i = (n = gE.exec(r)) !== null && n !== void 0 ? n : [], a = sa(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
}();
function mv(e) {
  if (e.includes(Er))
    return Er;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = mf.exec(t)) !== null && r !== void 0 ? r : [], i = sa(n, 4), a = i[1], o = i[2], u = i[3], s = Bi.parse(a ?? ""), c = Bi.parse(u ?? ""), f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN())
      return Er;
    t = t.replace(mf, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, h = (l = gf.exec(t)) !== null && l !== void 0 ? l : [], d = sa(h, 4), y = d[1], p = d[2], v = d[3], b = Bi.parse(y ?? ""), _ = Bi.parse(v ?? ""), g = p === "+" ? b.add(_) : b.subtract(_);
    if (g.isNaN())
      return Er;
    t = t.replace(gf, g.toString());
  }
  return t;
}
var bf = /\(([^()]*)\)/;
function wE(e) {
  for (var t = e; t.includes("("); ) {
    var r = bf.exec(t), n = sa(r, 2), i = n[1];
    t = t.replace(bf, mv(i));
  }
  return t;
}
function _E(e) {
  var t = e.replace(/\s+/g, "");
  return t = wE(t), t = mv(t), t;
}
function OE(e) {
  try {
    return _E(e);
  } catch {
    return Er;
  }
}
function Qo(e) {
  var t = OE(e.slice(5, -1));
  return t === Er ? "" : t;
}
var SE = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], AE = ["dx", "dy", "angle", "className", "breakAll"];
function Wu() {
  return Wu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wu.apply(this, arguments);
}
function xf(e, t) {
  if (e == null) return {};
  var r = PE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PE(e, t) {
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
  return EE(e) || TE(e, t) || jE(e, t) || $E();
}
function $E() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jE(e, t) {
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
function TE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function EE(e) {
  if (Array.isArray(e)) return e;
}
var gv = /[ \f\n\r\t\v\u2028\u2029]+/, bv = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    X(r) || (n ? a = r.toString().split("") : a = r.toString().split(gv));
    var o = a.map(function(s) {
      return {
        word: s,
        width: kn(s, i).width
      };
    }), u = n ? 0 : kn(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, ME = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, s = t.style, c = t.breakAll, f = L(o), l = u, h = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return C.reduce(function(I, D) {
      var R = D.word, F = D.width, q = I[I.length - 1];
      if (q && (i == null || a || q.width + F + n < Number(i)))
        q.words.push(R), q.width += F + n;
      else {
        var G = {
          words: [R],
          width: F
        };
        I.push(G);
      }
      return I;
    }, []);
  }, d = h(r), y = function(C) {
    return C.reduce(function(I, D) {
      return I.width > D.width ? I : D;
    });
  };
  if (!f)
    return d;
  for (var p = "…", v = function(C) {
    var I = l.slice(0, C), D = bv({
      breakAll: c,
      style: s,
      children: I + p
    }).wordsWithComputedWidth, R = h(D), F = R.length > o || y(R).width > Number(i);
    return [F, R];
  }, b = 0, _ = l.length - 1, g = 0, w; b <= _ && g <= l.length - 1; ) {
    var m = Math.floor((b + _) / 2), x = m - 1, O = v(x), S = wf(O, 2), $ = S[0], M = S[1], j = v(m), T = wf(j, 1), N = T[0];
    if (!$ && !N && (b = m + 1), $ && N && (_ = m - 1), !$ && N) {
      w = M;
      break;
    }
    g++;
  }
  return w || d;
}, Of = function(t) {
  var r = X(t) ? [] : t.toString().split(gv);
  return [{
    words: r
  }];
}, CE = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !wr.isSsr) {
    var s, c, f = bv({
      breakAll: o,
      children: i,
      style: a
    });
    if (f) {
      var l = f.wordsWithComputedWidth, h = f.spaceWidth;
      s = l, c = h;
    } else
      return Of(i);
    return ME({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, s, c, r, n);
  }
  return Of(i);
}, Sf = "#808080", ca = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, f = t.scaleToFit, l = f === void 0 ? !1 : f, h = t.textAnchor, d = h === void 0 ? "start" : h, y = t.verticalAnchor, p = y === void 0 ? "end" : y, v = t.fill, b = v === void 0 ? Sf : v, _ = xf(t, SE), g = Xp(function() {
    return CE({
      breakAll: _.breakAll,
      children: _.children,
      maxLines: _.maxLines,
      scaleToFit: l,
      style: _.style,
      width: _.width
    });
  }, [_.breakAll, _.children, _.maxLines, l, _.style, _.width]), w = _.dx, m = _.dy, x = _.angle, O = _.className, S = _.breakAll, $ = xf(_, AE);
  if (!Ae(n) || !Ae(a))
    return null;
  var M = n + (L(w) ? w : 0), j = a + (L(m) ? m : 0), T;
  switch (p) {
    case "start":
      T = Qo("calc(".concat(c, ")"));
      break;
    case "middle":
      T = Qo("calc(".concat((g.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      T = Qo("calc(".concat(g.length - 1, " * -").concat(u, ")"));
      break;
  }
  var N = [];
  if (l) {
    var k = g[0].width, C = _.width;
    N.push("scale(".concat((L(C) ? C / k : 1) / k, ")"));
  }
  return x && N.push("rotate(".concat(x, ", ").concat(M, ", ").concat(j, ")")), N.length && ($.transform = N.join(" ")), /* @__PURE__ */ P.createElement("text", Wu({}, Q($, !0), {
    x: M,
    y: j,
    className: ee("recharts-text", O),
    textAnchor: d,
    fill: b.includes("url") ? Sf : b
  }), g.map(function(I, D) {
    var R = I.words.join(S ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ P.createElement("tspan", {
        x: M,
        dy: D === 0 ? T : u,
        key: "".concat(R, "-").concat(D)
      }, R)
    );
  }));
};
function Gt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function kE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function pc(e) {
  let t, r, n;
  e.length !== 2 ? (t = Gt, r = (u, s) => Gt(e(u), s), n = (u, s) => e(u) - s) : (t = e === Gt || e === kE ? e : NE, r = e, n = e);
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = i(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function NE() {
  return 0;
}
function xv(e) {
  return e === null ? NaN : +e;
}
function* IE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const DE = pc(Gt), Pi = DE.right;
pc(xv).center;
class Af extends Map {
  constructor(t, r = RE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Pf(this, t));
  }
  has(t) {
    return super.has(Pf(this, t));
  }
  set(t, r) {
    return super.set(BE(this, t), r);
  }
  delete(t) {
    return super.delete(LE(this, t));
  }
}
function Pf({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function BE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function LE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function RE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function FE(e = Gt) {
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
const zE = Math.sqrt(50), WE = Math.sqrt(10), UE = Math.sqrt(2);
function la(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= zE ? 10 : a >= WE ? 5 : a >= UE ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? la(e, t, r * 2) : [u, s, c];
}
function Uu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? la(t, e, r) : la(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function Ku(e, t, r) {
  return t = +t, e = +e, r = +r, la(e, t, r)[2];
}
function qu(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Ku(t, e, r) : Ku(e, t, r);
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
  for (i = i === void 0 ? wv : FE(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), h = 0.5 * Math.sqrt(f * l * (s - l) / s) * (c - s / 2 < 0 ? -1 : 1), d = Math.max(r, Math.floor(t - c * l / s + h)), y = Math.min(n, Math.floor(t + (s - c) * l / s + h));
      _v(e, t, d, y, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Sn(e, r, t), i(e[n], a) > 0 && Sn(e, r, n); o < u; ) {
      for (Sn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Sn(e, r, u) : (++u, Sn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Sn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function KE(e, t, r) {
  if (e = Float64Array.from(IE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return jf(e);
    if (t >= 1) return $f(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = $f(_v(e, a).subarray(0, a + 1)), u = jf(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function qE(e, t, r = xv) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function HE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function st(e, t) {
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
const Hu = Symbol("implicit");
function dc() {
  var e = new Af(), t = [], r = [], n = Hu;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Hu) return n;
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
    return dc(t, r).unknown(n);
  }, st.apply(i, arguments), i;
}
function Vn() {
  var e = dc().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var h = t().length, d = i < n, y = d ? i : n, p = d ? n : i;
    a = (p - y) / Math.max(1, h - s + c * 2), u && (a = Math.floor(a)), y += (p - y - a * (h - s)) * f, o = a * (1 - s), u && (y = Math.round(y), o = Math.round(o));
    var v = HE(h).map(function(b) {
      return y + a * b;
    });
    return r(d ? v.reverse() : v);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), l()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([n, i] = h, n = +n, i = +i, l()) : [n, i];
  }, e.rangeRound = function(h) {
    return [n, i] = h, n = +n, i = +i, u = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(h) {
    return arguments.length ? (u = !!h, l()) : u;
  }, e.padding = function(h) {
    return arguments.length ? (s = Math.min(1, c = +h), l()) : s;
  }, e.paddingInner = function(h) {
    return arguments.length ? (s = Math.min(1, h), l()) : s;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, l()) : c;
  }, e.align = function(h) {
    return arguments.length ? (f = Math.max(0, Math.min(1, h)), l()) : f;
  }, e.copy = function() {
    return Vn(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(f);
  }, st.apply(l(), arguments);
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
function vc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Sv(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function $i() {
}
var Xn = 0.7, fa = 1 / Xn, Nr = "\\s*([+-]?\\d+)\\s*", Yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", GE = /^#([0-9a-f]{3,8})$/, VE = new RegExp(`^rgb\\(${Nr},${Nr},${Nr}\\)$`), XE = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), YE = new RegExp(`^rgba\\(${Nr},${Nr},${Nr},${Yn}\\)$`), ZE = new RegExp(`^rgba\\(${bt},${bt},${bt},${Yn}\\)$`), JE = new RegExp(`^hsl\\(${Yn},${bt},${bt}\\)$`), QE = new RegExp(`^hsla\\(${Yn},${bt},${bt},${Yn}\\)$`), Tf = {
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
vc($i, Zn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ef,
  // Deprecated! Use color.formatHex.
  formatHex: Ef,
  formatHex8: eM,
  formatHsl: tM,
  formatRgb: Mf,
  toString: Mf
});
function Ef() {
  return this.rgb().formatHex();
}
function eM() {
  return this.rgb().formatHex8();
}
function tM() {
  return Av(this).formatHsl();
}
function Mf() {
  return this.rgb().formatRgb();
}
function Zn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = GE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Cf(t) : r === 3 ? new Ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Li(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Li(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = VE.exec(e)) ? new Ue(t[1], t[2], t[3], 1) : (t = XE.exec(e)) ? new Ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = YE.exec(e)) ? Li(t[1], t[2], t[3], t[4]) : (t = ZE.exec(e)) ? Li(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = JE.exec(e)) ? If(t[1], t[2] / 100, t[3] / 100, 1) : (t = QE.exec(e)) ? If(t[1], t[2] / 100, t[3] / 100, t[4]) : Tf.hasOwnProperty(e) ? Cf(Tf[e]) : e === "transparent" ? new Ue(NaN, NaN, NaN, 0) : null;
}
function Cf(e) {
  return new Ue(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Li(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ue(e, t, r, n);
}
function rM(e) {
  return e instanceof $i || (e = Zn(e)), e ? (e = e.rgb(), new Ue(e.r, e.g, e.b, e.opacity)) : new Ue();
}
function Gu(e, t, r, n) {
  return arguments.length === 1 ? rM(e) : new Ue(e, t, r, n ?? 1);
}
function Ue(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
vc(Ue, Gu, Sv($i, {
  brighter(e) {
    return e = e == null ? fa : Math.pow(fa, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new Ue(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ue(fr(this.r), fr(this.g), fr(this.b), ha(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: kf,
  // Deprecated! Use color.formatHex.
  formatHex: kf,
  formatHex8: nM,
  formatRgb: Nf,
  toString: Nf
}));
function kf() {
  return `#${ur(this.r)}${ur(this.g)}${ur(this.b)}`;
}
function nM() {
  return `#${ur(this.r)}${ur(this.g)}${ur(this.b)}${ur((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Nf() {
  const e = ha(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fr(this.r)}, ${fr(this.g)}, ${fr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ha(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ur(e) {
  return e = fr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function If(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ht(e, t, r, n);
}
function Av(e) {
  if (e instanceof ht) return new ht(e.h, e.s, e.l, e.opacity);
  if (e instanceof $i || (e = Zn(e)), !e) return new ht();
  if (e instanceof ht) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new ht(o, u, s, e.opacity);
}
function iM(e, t, r, n) {
  return arguments.length === 1 ? Av(e) : new ht(e, t, r, n ?? 1);
}
function ht(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
vc(ht, iM, Sv($i, {
  brighter(e) {
    return e = e == null ? fa : Math.pow(fa, e), new ht(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new ht(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Ue(
      eu(e >= 240 ? e - 240 : e + 120, i, n),
      eu(e, i, n),
      eu(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new ht(Df(this.h), Ri(this.s), Ri(this.l), ha(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ha(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Df(this.h)}, ${Ri(this.s) * 100}%, ${Ri(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Df(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ri(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function eu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const yc = (e) => () => e;
function aM(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function oM(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function uM(e) {
  return (e = +e) == 1 ? Pv : function(t, r) {
    return r - t ? oM(t, r, e) : yc(isNaN(t) ? r : t);
  };
}
function Pv(e, t) {
  var r = t - e;
  return r ? aM(e, r) : yc(isNaN(e) ? t : e);
}
const Bf = function e(t) {
  var r = uM(t);
  function n(i, a) {
    var o = r((i = Gu(i)).r, (a = Gu(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), c = Pv(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = u(f), i.b = s(f), i.opacity = c(f), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function sM(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function cM(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function lM(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = yn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function fM(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function pa(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function hM(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = yn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Vu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, tu = new RegExp(Vu.source, "g");
function pM(e) {
  return function() {
    return e;
  };
}
function dM(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vM(e, t) {
  var r = Vu.lastIndex = tu.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = Vu.exec(e)) && (i = tu.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: pa(n, i) })), r = tu.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? dM(s[0].x) : pM(t) : (t = s.length, function(c) {
    for (var f = 0, l; f < t; ++f) u[(l = s[f]).i] = l.x(c);
    return u.join("");
  });
}
function yn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? yc(t) : (r === "number" ? pa : r === "string" ? (n = Zn(t)) ? (t = n, Bf) : vM : t instanceof Zn ? Bf : t instanceof Date ? fM : cM(t) ? sM : Array.isArray(t) ? lM : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? hM : pa)(e, t);
}
function mc(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function yM(e, t) {
  t === void 0 && (t = e, e = yn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function mM(e) {
  return function() {
    return e;
  };
}
function da(e) {
  return +e;
}
var Lf = [0, 1];
function Fe(e) {
  return e;
}
function Xu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : mM(isNaN(t) ? NaN : 0.5);
}
function gM(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function bM(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Xu(i, n), a = r(o, a)) : (n = Xu(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function xM(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Xu(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Pi(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function ji(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function _o() {
  var e = Lf, t = Lf, r = yn, n, i, a, o = Fe, u, s, c;
  function f() {
    var h = Math.min(e.length, t.length);
    return o !== Fe && (o = gM(e[0], e[h - 1])), u = h > 2 ? xM : bM, s = c = null, l;
  }
  function l(h) {
    return h == null || isNaN(h = +h) ? a : (s || (s = u(e.map(n), t, r)))(n(o(h)));
  }
  return l.invert = function(h) {
    return o(i((c || (c = u(t, e.map(n), pa)))(h)));
  }, l.domain = function(h) {
    return arguments.length ? (e = Array.from(h, da), f()) : e.slice();
  }, l.range = function(h) {
    return arguments.length ? (t = Array.from(h), f()) : t.slice();
  }, l.rangeRound = function(h) {
    return t = Array.from(h), r = mc, f();
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
function gc() {
  return _o()(Fe, Fe);
}
function wM(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function va(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function zr(e) {
  return e = va(Math.abs(e)), e ? e[1] : NaN;
}
function _M(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function OM(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var SM = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Jn(e) {
  if (!(t = SM.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new bc({
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
Jn.prototype = bc.prototype;
function bc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
bc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function AM(e) {
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
function PM(e, t) {
  var r = va(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - ($v = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + va(e, Math.max(0, t + a - 1))[0];
}
function Rf(e, t) {
  var r = va(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Ff = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: wM,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Rf(e * 100, t),
  r: Rf,
  s: PM,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function zf(e) {
  return e;
}
var Wf = Array.prototype.map, Uf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $M(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? zf : _M(Wf.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? zf : OM(Wf.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l) {
    l = Jn(l);
    var h = l.fill, d = l.align, y = l.sign, p = l.symbol, v = l.zero, b = l.width, _ = l.comma, g = l.precision, w = l.trim, m = l.type;
    m === "n" ? (_ = !0, m = "g") : Ff[m] || (g === void 0 && (g = 12), w = !0, m = "g"), (v || h === "0" && d === "=") && (v = !0, h = "0", d = "=");
    var x = p === "$" ? r : p === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", O = p === "$" ? n : /[%p]/.test(m) ? o : "", S = Ff[m], $ = /[defgprs%]/.test(m);
    g = g === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
    function M(j) {
      var T = x, N = O, k, C, I;
      if (m === "c")
        N = S(j) + N, j = "";
      else {
        j = +j;
        var D = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? s : S(Math.abs(j), g), w && (j = AM(j)), D && +j == 0 && y !== "+" && (D = !1), T = (D ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + T, N = (m === "s" ? Uf[8 + $v / 3] : "") + N + (D && y === "(" ? ")" : ""), $) {
          for (k = -1, C = j.length; ++k < C; )
            if (I = j.charCodeAt(k), 48 > I || I > 57) {
              N = (I === 46 ? i + j.slice(k + 1) : j.slice(k)) + N, j = j.slice(0, k);
              break;
            }
        }
      }
      _ && !v && (j = t(j, 1 / 0));
      var R = T.length + j.length + N.length, F = R < b ? new Array(b - R + 1).join(h) : "";
      switch (_ && v && (j = t(F + j, F.length ? b - N.length : 1 / 0), F = ""), d) {
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
    var d = c((l = Jn(l), l.type = "f", l)), y = Math.max(-8, Math.min(8, Math.floor(zr(h) / 3))) * 3, p = Math.pow(10, -y), v = Uf[8 + y / 3];
    return function(b) {
      return d(p * b) + v;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Fi, xc, jv;
jM({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function jM(e) {
  return Fi = $M(e), xc = Fi.format, jv = Fi.formatPrefix, Fi;
}
function TM(e) {
  return Math.max(0, -zr(Math.abs(e)));
}
function EM(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zr(t) / 3))) * 3 - zr(Math.abs(e)));
}
function MM(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, zr(t) - zr(e)) + 1;
}
function Tv(e, t, r, n) {
  var i = qu(e, t, r), a;
  switch (n = Jn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = EM(i, o)) && (n.precision = a), jv(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = MM(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = TM(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return xc(n);
}
function Yt(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Uu(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Tv(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, f = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); f-- > 0; ) {
      if (c = Ku(o, u, r), c === s)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function ya() {
  var e = gc();
  return e.copy = function() {
    return ji(e, ya());
  }, st.apply(e, arguments), Yt(e);
}
function Ev(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, da), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Ev(e).unknown(t);
  }, e = arguments.length ? Array.from(e, da) : [0, 1], Yt(r);
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
function CM(e) {
  return -Math.log(-e);
}
function kM(e) {
  return -Math.exp(-e);
}
function NM(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function IM(e) {
  return e === 10 ? NM : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function DM(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Hf(e) {
  return (t, r) => -e(-t, r);
}
function wc(e) {
  const t = e(Kf, qf), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = DM(n), a = IM(n), r()[0] < 0 ? (i = Hf(i), a = Hf(a), e(CM, kM)) : e(Kf, qf), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], f = s[s.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let h = i(c), d = i(f), y, p;
    const v = u == null ? 10 : +u;
    let b = [];
    if (!(n % 1) && d - h < v) {
      if (h = Math.floor(h), d = Math.ceil(d), c > 0) {
        for (; h <= d; ++h)
          for (y = 1; y < n; ++y)
            if (p = h < 0 ? y / a(-h) : y * a(h), !(p < c)) {
              if (p > f) break;
              b.push(p);
            }
      } else for (; h <= d; ++h)
        for (y = n - 1; y >= 1; --y)
          if (p = h > 0 ? y / a(-h) : y * a(h), !(p < c)) {
            if (p > f) break;
            b.push(p);
          }
      b.length * 2 < v && (b = Uu(c, f, v));
    } else
      b = Uu(h, d, Math.min(d - h, v)).map(a);
    return l ? b.reverse() : b;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Jn(s)).precision == null && (s.trim = !0), s = xc(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "";
    };
  }, t.nice = () => r(Mv(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Cv() {
  const e = wc(_o()).domain([1, 10]);
  return e.copy = () => ji(e, Cv()).base(e.base()), st.apply(e, arguments), e;
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
function _c(e) {
  var t = 1, r = e(Gf(t), Vf(t));
  return r.constant = function(n) {
    return arguments.length ? e(Gf(t = +n), Vf(t)) : t;
  }, Yt(r);
}
function kv() {
  var e = _c(_o());
  return e.copy = function() {
    return ji(e, kv()).constant(e.constant());
  }, st.apply(e, arguments);
}
function Xf(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function BM(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function LM(e) {
  return e < 0 ? -e * e : e * e;
}
function Oc(e) {
  var t = e(Fe, Fe), r = 1;
  function n() {
    return r === 1 ? e(Fe, Fe) : r === 0.5 ? e(BM, LM) : e(Xf(r), Xf(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yt(t);
}
function Sc() {
  var e = Oc(_o());
  return e.copy = function() {
    return ji(e, Sc()).exponent(e.exponent());
  }, st.apply(e, arguments), e;
}
function RM() {
  return Sc.apply(null, arguments).exponent(0.5);
}
function Yf(e) {
  return Math.sign(e) * e * e;
}
function FM(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Nv() {
  var e = gc(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = FM(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Yf(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, da)).map(Yf)), i) : t.slice();
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
  }, st.apply(i, arguments), Yt(i);
}
function Iv() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = qE(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Pi(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(Gt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Iv().domain(e).range(t).unknown(n);
  }, st.apply(a, arguments);
}
function Dv() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[Pi(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Dv().domain([e, t]).range(i).unknown(a);
  }, st.apply(Yt(o), arguments);
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
  }, st.apply(i, arguments);
}
const ru = /* @__PURE__ */ new Date(), nu = /* @__PURE__ */ new Date();
function Pe(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => Pe((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (ru.setTime(+a), nu.setTime(+o), e(ru), e(nu), Math.floor(r(ru, nu))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ma = Pe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ma.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Pe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ma);
ma.range;
const $t = 1e3, rt = $t * 60, jt = rt * 60, Nt = jt * 24, Ac = Nt * 7, Zf = Nt * 30, iu = Nt * 365, sr = Pe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCSeconds());
sr.range;
const Pc = Pe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t);
}, (e, t) => {
  e.setTime(+e + t * rt);
}, (e, t) => (t - e) / rt, (e) => e.getMinutes());
Pc.range;
const $c = Pe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * rt);
}, (e, t) => (t - e) / rt, (e) => e.getUTCMinutes());
$c.range;
const jc = Pe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * $t - e.getMinutes() * rt);
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getHours());
jc.range;
const Tc = Pe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * jt);
}, (e, t) => (t - e) / jt, (e) => e.getUTCHours());
Tc.range;
const Ti = Pe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * rt) / Nt,
  (e) => e.getDate() - 1
);
Ti.range;
const Oo = Pe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nt, (e) => e.getUTCDate() - 1);
Oo.range;
const Lv = Pe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nt, (e) => Math.floor(e / Nt));
Lv.range;
function _r(e) {
  return Pe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * rt) / Ac);
}
const So = _r(0), ga = _r(1), zM = _r(2), WM = _r(3), Wr = _r(4), UM = _r(5), KM = _r(6);
So.range;
ga.range;
zM.range;
WM.range;
Wr.range;
UM.range;
KM.range;
function Or(e) {
  return Pe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Ac);
}
const Ao = Or(0), ba = Or(1), qM = Or(2), HM = Or(3), Ur = Or(4), GM = Or(5), VM = Or(6);
Ao.range;
ba.range;
qM.range;
HM.range;
Ur.range;
GM.range;
VM.range;
const Ec = Pe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ec.range;
const Mc = Pe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Mc.range;
const It = Pe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
It.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Pe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
It.range;
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
    [sr, 1, $t],
    [sr, 5, 5 * $t],
    [sr, 15, 15 * $t],
    [sr, 30, 30 * $t],
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
    [r, 1, Ac],
    [t, 1, Zf],
    [t, 3, 3 * Zf],
    [e, 1, iu]
  ];
  function u(c, f, l) {
    const h = f < c;
    h && ([c, f] = [f, c]);
    const d = l && typeof l.range == "function" ? l : s(c, f, l), y = d ? d.range(c, +f + 1) : [];
    return h ? y.reverse() : y;
  }
  function s(c, f, l) {
    const h = Math.abs(f - c) / l, d = pc(([, , v]) => v).right(o, h);
    if (d === o.length) return e.every(qu(c / iu, f / iu, l));
    if (d === 0) return ma.every(Math.max(qu(c, f, l), 1));
    const [y, p] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
    return y.every(p);
  }
  return [u, s];
}
const [XM, YM] = Rv(Dt, Mc, Ao, Lv, Tc, $c), [ZM, JM] = Rv(It, Ec, So, Ti, jc, Pc);
function au(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ou(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function An(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function QM(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = Pn(i), f = $n(i), l = Pn(a), h = $n(a), d = Pn(o), y = $n(o), p = Pn(u), v = $n(u), b = Pn(s), _ = $n(s), g = {
    a: D,
    A: R,
    b: F,
    B: q,
    c: null,
    d: nh,
    e: nh,
    f: _C,
    g: CC,
    G: NC,
    H: bC,
    I: xC,
    j: wC,
    L: Fv,
    m: OC,
    M: SC,
    p: G,
    q: W,
    Q: oh,
    s: uh,
    S: AC,
    u: PC,
    U: $C,
    V: jC,
    w: TC,
    W: EC,
    x: null,
    X: null,
    y: MC,
    Y: kC,
    Z: IC,
    "%": ah
  }, w = {
    a: V,
    A: le,
    b: ye,
    B: He,
    c: null,
    d: ih,
    e: ih,
    f: RC,
    g: XC,
    G: ZC,
    H: DC,
    I: BC,
    j: LC,
    L: Wv,
    m: FC,
    M: zC,
    p: Qt,
    q: ze,
    Q: oh,
    s: uh,
    S: WC,
    u: UC,
    U: KC,
    V: qC,
    w: HC,
    W: GC,
    x: null,
    X: null,
    y: VC,
    Y: YC,
    Z: JC,
    "%": ah
  }, m = {
    a: M,
    A: j,
    b: T,
    B: N,
    c: k,
    d: th,
    e: th,
    f: vC,
    g: eh,
    G: Qf,
    H: rh,
    I: rh,
    j: fC,
    L: dC,
    m: lC,
    M: hC,
    p: $,
    q: cC,
    Q: mC,
    s: gC,
    S: pC,
    u: iC,
    U: aC,
    V: oC,
    w: nC,
    W: uC,
    x: C,
    X: I,
    y: eh,
    Y: Qf,
    Z: sC,
    "%": yC
  };
  g.x = x(r, g), g.X = x(n, g), g.c = x(t, g), w.x = x(r, w), w.X = x(n, w), w.c = x(t, w);
  function x(z, Y) {
    return function(J) {
      var B = [], de = -1, te = 0, xe = z.length, we, We, Wt;
      for (J instanceof Date || (J = /* @__PURE__ */ new Date(+J)); ++de < xe; )
        z.charCodeAt(de) === 37 && (B.push(z.slice(te, de)), (We = Jf[we = z.charAt(++de)]) != null ? we = z.charAt(++de) : We = we === "e" ? " " : "0", (Wt = Y[we]) && (we = Wt(J, We)), B.push(we), te = de + 1);
      return B.push(z.slice(te, de)), B.join("");
    };
  }
  function O(z, Y) {
    return function(J) {
      var B = An(1900, void 0, 1), de = S(B, z, J += "", 0), te, xe;
      if (de != J.length) return null;
      if ("Q" in B) return new Date(B.Q);
      if ("s" in B) return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (Y && !("Z" in B) && (B.Z = 0), "p" in B && (B.H = B.H % 12 + B.p * 12), B.m === void 0 && (B.m = "q" in B ? B.q : 0), "V" in B) {
        if (B.V < 1 || B.V > 53) return null;
        "w" in B || (B.w = 1), "Z" in B ? (te = ou(An(B.y, 0, 1)), xe = te.getUTCDay(), te = xe > 4 || xe === 0 ? ba.ceil(te) : ba(te), te = Oo.offset(te, (B.V - 1) * 7), B.y = te.getUTCFullYear(), B.m = te.getUTCMonth(), B.d = te.getUTCDate() + (B.w + 6) % 7) : (te = au(An(B.y, 0, 1)), xe = te.getDay(), te = xe > 4 || xe === 0 ? ga.ceil(te) : ga(te), te = Ti.offset(te, (B.V - 1) * 7), B.y = te.getFullYear(), B.m = te.getMonth(), B.d = te.getDate() + (B.w + 6) % 7);
      } else ("W" in B || "U" in B) && ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0), xe = "Z" in B ? ou(An(B.y, 0, 1)).getUTCDay() : au(An(B.y, 0, 1)).getDay(), B.m = 0, B.d = "W" in B ? (B.w + 6) % 7 + B.W * 7 - (xe + 5) % 7 : B.w + B.U * 7 - (xe + 6) % 7);
      return "Z" in B ? (B.H += B.Z / 100 | 0, B.M += B.Z % 100, ou(B)) : au(B);
    };
  }
  function S(z, Y, J, B) {
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
    var B = d.exec(Y.slice(J));
    return B ? (z.w = y.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function j(z, Y, J) {
    var B = l.exec(Y.slice(J));
    return B ? (z.w = h.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function T(z, Y, J) {
    var B = b.exec(Y.slice(J));
    return B ? (z.m = _.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function N(z, Y, J) {
    var B = p.exec(Y.slice(J));
    return B ? (z.m = v.get(B[0].toLowerCase()), J + B[0].length) : -1;
  }
  function k(z, Y, J) {
    return S(z, t, Y, J);
  }
  function C(z, Y, J) {
    return S(z, r, Y, J);
  }
  function I(z, Y, J) {
    return S(z, n, Y, J);
  }
  function D(z) {
    return o[z.getDay()];
  }
  function R(z) {
    return a[z.getDay()];
  }
  function F(z) {
    return s[z.getMonth()];
  }
  function q(z) {
    return u[z.getMonth()];
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
    return s[z.getUTCMonth()];
  }
  function He(z) {
    return u[z.getUTCMonth()];
  }
  function Qt(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function ze(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var Y = x(z += "", g);
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
      var Y = x(z += "", w);
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
var Jf = { "-": "", _: " ", 0: "0" }, Ee = /^\s*\d+/, eC = /^%/, tC = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function rC(e) {
  return e.replace(tC, "\\$&");
}
function Pn(e) {
  return new RegExp("^(?:" + e.map(rC).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function nC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function iC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function aC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function oC(e, t, r) {
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
function sC(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function cC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function lC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function th(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function fC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function rh(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function hC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function pC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function dC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function vC(e, t, r) {
  var n = Ee.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function yC(e, t, r) {
  var n = eC.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function mC(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function gC(e, t, r) {
  var n = Ee.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function nh(e, t) {
  return re(e.getDate(), t, 2);
}
function bC(e, t) {
  return re(e.getHours(), t, 2);
}
function xC(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function wC(e, t) {
  return re(1 + Ti.count(It(e), e), t, 3);
}
function Fv(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function _C(e, t) {
  return Fv(e, t) + "000";
}
function OC(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function SC(e, t) {
  return re(e.getMinutes(), t, 2);
}
function AC(e, t) {
  return re(e.getSeconds(), t, 2);
}
function PC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $C(e, t) {
  return re(So.count(It(e) - 1, e), t, 2);
}
function zv(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Wr(e) : Wr.ceil(e);
}
function jC(e, t) {
  return e = zv(e), re(Wr.count(It(e), e) + (It(e).getDay() === 4), t, 2);
}
function TC(e) {
  return e.getDay();
}
function EC(e, t) {
  return re(ga.count(It(e) - 1, e), t, 2);
}
function MC(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function CC(e, t) {
  return e = zv(e), re(e.getFullYear() % 100, t, 2);
}
function kC(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function NC(e, t) {
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
function DC(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function BC(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function LC(e, t) {
  return re(1 + Oo.count(Dt(e), e), t, 3);
}
function Wv(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function RC(e, t) {
  return Wv(e, t) + "000";
}
function FC(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function zC(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function WC(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function UC(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function KC(e, t) {
  return re(Ao.count(Dt(e) - 1, e), t, 2);
}
function Uv(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function qC(e, t) {
  return e = Uv(e), re(Ur.count(Dt(e), e) + (Dt(e).getUTCDay() === 4), t, 2);
}
function HC(e) {
  return e.getUTCDay();
}
function GC(e, t) {
  return re(ba.count(Dt(e) - 1, e), t, 2);
}
function VC(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function XC(e, t) {
  return e = Uv(e), re(e.getUTCFullYear() % 100, t, 2);
}
function YC(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function ZC(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ur(e) : Ur.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function JC() {
  return "+0000";
}
function ah() {
  return "%";
}
function oh(e) {
  return +e;
}
function uh(e) {
  return Math.floor(+e / 1e3);
}
var $r, Kv, qv;
QC({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function QC(e) {
  return $r = QM(e), Kv = $r.format, $r.parse, qv = $r.utcFormat, $r.utcParse, $r;
}
function ek(e) {
  return new Date(e);
}
function tk(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Cc(e, t, r, n, i, a, o, u, s, c) {
  var f = gc(), l = f.invert, h = f.domain, d = c(".%L"), y = c(":%S"), p = c("%I:%M"), v = c("%I %p"), b = c("%a %d"), _ = c("%b %d"), g = c("%B"), w = c("%Y");
  function m(x) {
    return (s(x) < x ? d : u(x) < x ? y : o(x) < x ? p : a(x) < x ? v : n(x) < x ? i(x) < x ? b : _ : r(x) < x ? g : w)(x);
  }
  return f.invert = function(x) {
    return new Date(l(x));
  }, f.domain = function(x) {
    return arguments.length ? h(Array.from(x, tk)) : h().map(ek);
  }, f.ticks = function(x) {
    var O = h();
    return e(O[0], O[O.length - 1], x ?? 10);
  }, f.tickFormat = function(x, O) {
    return O == null ? m : c(O);
  }, f.nice = function(x) {
    var O = h();
    return (!x || typeof x.range != "function") && (x = t(O[0], O[O.length - 1], x ?? 10)), x ? h(Mv(O, x)) : f;
  }, f.copy = function() {
    return ji(f, Cc(e, t, r, n, i, a, o, u, s, c));
  }, f;
}
function rk() {
  return st.apply(Cc(ZM, JM, It, Ec, So, Ti, jc, Pc, sr, Kv).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function nk() {
  return st.apply(Cc(XM, YM, Dt, Mc, Ao, Oo, Tc, $c, sr, qv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Po() {
  var e = 0, t = 1, r, n, i, a, o = Fe, u = !1, s;
  function c(l) {
    return l == null || isNaN(l = +l) ? s : o(i === 0 ? 0.5 : (l = (a(l) - r) * i, u ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (u = !!l, c) : u;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(h) {
      var d, y;
      return arguments.length ? ([d, y] = h, o = l(d, y), c) : [o(0), o(1)];
    };
  }
  return c.range = f(yn), c.rangeRound = f(mc), c.unknown = function(l) {
    return arguments.length ? (s = l, c) : s;
  }, function(l) {
    return a = l, r = l(e), n = l(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function Zt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Hv() {
  var e = Yt(Po()(Fe));
  return e.copy = function() {
    return Zt(e, Hv());
  }, zt.apply(e, arguments);
}
function Gv() {
  var e = wc(Po()).domain([1, 10]);
  return e.copy = function() {
    return Zt(e, Gv()).base(e.base());
  }, zt.apply(e, arguments);
}
function Vv() {
  var e = _c(Po());
  return e.copy = function() {
    return Zt(e, Vv()).constant(e.constant());
  }, zt.apply(e, arguments);
}
function kc() {
  var e = Oc(Po());
  return e.copy = function() {
    return Zt(e, kc()).exponent(e.exponent());
  }, zt.apply(e, arguments);
}
function ik() {
  return kc.apply(null, arguments).exponent(0.5);
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
    return Array.from({ length: n + 1 }, (i, a) => KE(e, a / n));
  }, r.copy = function() {
    return Xv(t).domain(e);
  }, zt.apply(r, arguments);
}
function $o() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = Fe, f, l = !1, h;
  function d(p) {
    return isNaN(p = +p) ? h : (p = 0.5 + ((p = +f(p)) - a) * (n * p < n * a ? u : s), c(l ? Math.max(0, Math.min(1, p)) : p));
  }
  d.domain = function(p) {
    return arguments.length ? ([e, t, r] = p, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d) : [e, t, r];
  }, d.clamp = function(p) {
    return arguments.length ? (l = !!p, d) : l;
  }, d.interpolator = function(p) {
    return arguments.length ? (c = p, d) : c;
  };
  function y(p) {
    return function(v) {
      var b, _, g;
      return arguments.length ? ([b, _, g] = v, c = yM(p, [b, _, g]), d) : [c(0), c(0.5), c(1)];
    };
  }
  return d.range = y(yn), d.rangeRound = y(mc), d.unknown = function(p) {
    return arguments.length ? (h = p, d) : h;
  }, function(p) {
    return f = p, i = p(e), a = p(t), o = p(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, d;
  };
}
function Yv() {
  var e = Yt($o()(Fe));
  return e.copy = function() {
    return Zt(e, Yv());
  }, zt.apply(e, arguments);
}
function Zv() {
  var e = wc($o()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Zt(e, Zv()).base(e.base());
  }, zt.apply(e, arguments);
}
function Jv() {
  var e = _c($o());
  return e.copy = function() {
    return Zt(e, Jv()).constant(e.constant());
  }, zt.apply(e, arguments);
}
function Nc() {
  var e = Oc($o());
  return e.copy = function() {
    return Zt(e, Nc()).exponent(e.exponent());
  }, zt.apply(e, arguments);
}
function ak() {
  return Nc.apply(null, arguments).exponent(0.5);
}
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Vn,
  scaleDiverging: Yv,
  scaleDivergingLog: Zv,
  scaleDivergingPow: Nc,
  scaleDivergingSqrt: ak,
  scaleDivergingSymlog: Jv,
  scaleIdentity: Ev,
  scaleImplicit: Hu,
  scaleLinear: ya,
  scaleLog: Cv,
  scaleOrdinal: dc,
  scalePoint: Nn,
  scalePow: Sc,
  scaleQuantile: Iv,
  scaleQuantize: Dv,
  scaleRadial: Nv,
  scaleSequential: Hv,
  scaleSequentialLog: Gv,
  scaleSequentialPow: kc,
  scaleSequentialQuantile: Xv,
  scaleSequentialSqrt: ik,
  scaleSequentialSymlog: Vv,
  scaleSqrt: RM,
  scaleSymlog: kv,
  scaleThreshold: Bv,
  scaleTime: rk,
  scaleUtc: nk,
  tickFormat: Tv
}, Symbol.toStringTag, { value: "Module" }));
var ok = un;
function uk(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (u === void 0 ? o === o && !ok(o) : r(o, u)))
      var u = o, s = a;
  }
  return s;
}
var Qv = uk;
function sk(e, t) {
  return e > t;
}
var ck = sk, lk = Qv, fk = ck, hk = vn;
function pk(e) {
  return e && e.length ? lk(e, hk, fk) : void 0;
}
var dk = pk;
const jo = /* @__PURE__ */ ce(dk);
function vk(e, t) {
  return e < t;
}
var yk = vk, mk = Qv, gk = yk, bk = vn;
function xk(e) {
  return e && e.length ? mk(e, bk, gk) : void 0;
}
var wk = xk;
const To = /* @__PURE__ */ ce(wk);
var _k = Xs, Ok = Xt, Sk = sv, Ak = qe;
function Pk(e, t) {
  var r = Ak(e) ? _k : Sk;
  return r(e, Ok(t));
}
var $k = Pk, jk = ov, Tk = $k;
function Ek(e, t) {
  return jk(Tk(e, t), 1);
}
var Mk = Ek;
const Ck = /* @__PURE__ */ ce(Mk);
var kk = cc;
function Nk(e, t) {
  return kk(e, t);
}
var Ik = Nk;
const Ei = /* @__PURE__ */ ce(Ik);
var mn = 1e9, Dk = {
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
}, Dc, pe = !0, ot = "[DecimalError] ", hr = ot + "Invalid argument: ", Ic = ot + "Exponent out of range: ", gn = Math.floor, ar = Math.pow, Bk = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ye, $e = 1e7, he = 7, ey = 9007199254740991, xa = gn(ey / he), U = {};
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
  return e = new t.constructor(e), t.s == e.s ? ny(t, e) : ty(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ot + "NaN");
  return r.s ? (pe = !1, t = Ct(r, e, 0, 1).times(e), pe = !0, r.minus(t)) : oe(new n(r), i);
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
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(ot + "NaN");
  }
  for (e = be(u), pe = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = yt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = gn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Ct(u, a, o + 2)).times(0.5), yt(a.d).slice(0, o) === (t = yt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (oe(a, r + 1, 0), a.times(a).eq(u)) {
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
  var t, r, n, i, a, o, u, s, c, f = this, l = f.constructor, h = f.d, d = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, s = h.length, c = d.length, s < c && (a = h, h = d, d = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + d[n] * h[i - n - 1] + t, a[i--] = u % $e | 0, t = u / $e | 0;
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
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, f = +(e = new s(e));
  if (!e.s) return new s(Ye);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(ot + "Infinity");
    return u;
  }
  if (u.eq(Ye)) return u;
  if (n = s.precision, e.eq(Ye)) return oe(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = f < 0 ? -f : f) <= ey) {
      for (i = new s(Ye), t = Math.ceil(n / he + 4), pe = !1; r % 2 && (i = i.times(u), lh(i.d, t)), r = gn(r / 2), r !== 0; )
        u = u.times(u), lh(u.d, t);
      return pe = !0, e.s < 0 ? new s(Ye).div(i) : oe(i, n);
    }
  } else if (a < 0) throw Error(ot + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, pe = !1, i = e.times(Qn(u, n + c)), pe = !0, i = ry(i), i.s = a, i;
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
  var r, n, i, a, o, u, s, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), pe ? oe(t, l) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(l / he), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / $e | 0, s[a] %= $e;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, pe ? oe(t, l) : t;
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
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % $e | 0, o = a / $e | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o)
      s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * $e + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, f, l, h, d, y, p, v, b, _, g, w, m, x, O, S, $ = n.constructor, M = n.s == i.s ? 1 : -1, j = n.d, T = i.d;
    if (!n.s) return new $(n);
    if (!i.s) throw Error(ot + "Division by zero");
    for (s = n.e - i.e, O = T.length, m = j.length, d = new $(M), y = d.d = [], c = 0; T[c] == (j[c] || 0); ) ++c;
    if (T[c] > (j[c] || 0) && --s, a == null ? _ = a = $.precision : o ? _ = a + (be(n) - be(i)) + 1 : _ = a, _ < 0) return new $(0);
    if (_ = _ / he + 2 | 0, c = 0, O == 1)
      for (f = 0, T = T[0], _++; (c < m || f) && _--; c++)
        g = f * $e + (j[c] || 0), y[c] = g / T | 0, f = g % T | 0;
    else {
      for (f = $e / (T[0] + 1) | 0, f > 1 && (T = e(T, f), j = e(j, f), O = T.length, m = j.length), w = O, p = j.slice(0, O), v = p.length; v < O; ) p[v++] = 0;
      S = T.slice(), S.unshift(0), x = T[0], T[1] >= $e / 2 && ++x;
      do
        f = 0, u = t(T, p, O, v), u < 0 ? (b = p[0], O != v && (b = b * $e + (p[1] || 0)), f = b / x | 0, f > 1 ? (f >= $e && (f = $e - 1), l = e(T, f), h = l.length, v = p.length, u = t(l, p, h, v), u == 1 && (f--, r(l, O < h ? S : T, h))) : (f == 0 && (u = f = 1), l = T.slice()), h = l.length, h < v && l.unshift(0), r(p, l, v), u == -1 && (v = p.length, u = t(T, p, O, v), u < 1 && (f++, r(p, O < v ? S : T, v))), v = p.length) : u === 0 && (f++, p = [0]), y[c++] = f, u && p[0] ? p[v++] = j[w] || 0 : (p = [j[w]], v = 1);
      while ((w++ < m || p[0] !== void 0) && _--);
    }
    return y[0] || y.shift(), d.e = s, oe(d, o ? a + be(d) + 1 : a);
  };
}();
function ry(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, f = e.constructor, l = f.precision;
  if (be(e) > 16) throw Error(Ic + be(e));
  if (!e.s) return new f(Ye);
  for (pe = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(ar(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(Ye), f.precision = u; ; ) {
    if (i = oe(i.times(e), u), r = r.times(++s), o = a.plus(Ct(i, r, u)), yt(o.d).slice(0, u) === yt(a.d).slice(0, u)) {
      for (; c--; ) a = oe(a.times(a), u);
      return f.precision = l, t == null ? (pe = !0, oe(a, l)) : a;
    }
    a = o;
  }
}
function be(e) {
  for (var t = e.e * he, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function uu(e, t, r) {
  if (t > e.LN10.sd())
    throw pe = !0, r && (e.precision = r), Error(ot + "LN10 precision limit exceeded");
  return oe(new e(e.LN10), t);
}
function Ut(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Qn(e, t) {
  var r, n, i, a, o, u, s, c, f, l = 1, h = 10, d = e, y = d.d, p = d.constructor, v = p.precision;
  if (d.s < 1) throw Error(ot + (d.s ? "NaN" : "-Infinity"));
  if (d.eq(Ye)) return new p(0);
  if (t == null ? (pe = !1, c = v) : c = t, d.eq(10))
    return t == null && (pe = !0), uu(p, c);
  if (c += h, p.precision = c, r = yt(y), n = r.charAt(0), a = be(d), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      d = d.times(e), r = yt(d.d), n = r.charAt(0), l++;
    a = be(d), n > 1 ? (d = new p("0." + r), a++) : d = new p(n + "." + r.slice(1));
  } else
    return s = uu(p, c + 2, v).times(a + ""), d = Qn(new p(n + "." + r.slice(1)), c - h).plus(s), p.precision = v, t == null ? (pe = !0, oe(d, v)) : d;
  for (u = o = d = Ct(d.minus(Ye), d.plus(Ye), c), f = oe(d.times(d), c), i = 3; ; ) {
    if (o = oe(o.times(f), c), s = u.plus(Ct(o, new p(i), c)), yt(s.d).slice(0, c) === yt(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(uu(p, c + 2, v).times(a + ""))), u = Ct(u, new p(l), c), p.precision = v, t == null ? (pe = !0, oe(u, v)) : u;
    u = s, i += 2;
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
    if (e.d.push(+t), pe && (e.e > xa || e.e < -xa)) throw Error(Ic + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function oe(e, t, r) {
  var n, i, a, o, u, s, c, f, l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += he, i = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / he), a = l.length, f >= a) return e;
    for (c = a = l[f], o = 1; a >= 10; a /= 10) o++;
    n %= he, i = n - he + o;
  }
  if (r !== void 0 && (a = ar(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || l[f + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / ar(10, o - i) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return s ? (a = be(e), l.length = 1, t = t - a - 1, l[0] = ar(10, (he - t % he) % he), e.e = gn(-t / he) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, a = 1, f--) : (l.length = f + 1, a = ar(10, he - n), l[f] = i > 0 ? (c / ar(10, o - i) % ar(10, i) | 0) * a : 0), s)
    for (; ; )
      if (f == 0) {
        (l[0] += a) == $e && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += a, l[f] != $e) break;
        l[f--] = 0, a = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (pe && (e.e > xa || e.e < -xa))
    throw Error(Ic + be(e));
  return e;
}
function ny(e, t) {
  var r, n, i, a, o, u, s, c, f, l, h = e.constructor, d = h.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new h(e), pe ? oe(t, d) : t;
  if (s = e.d, l = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = s, o = -o, u = l.length) : (r = l, n = c, u = s.length), i = Math.max(Math.ceil(d / he), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (s[i] != l[i]) {
        f = s[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && (r = s, s = l, l = r, t.s = -t.s), u = s.length, i = l.length - u; i > 0; --i) s[u++] = 0;
  for (i = l.length; i > o; ) {
    if (s[--i] < l[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = $e - 1;
      --s[a], s[i] += $e;
    }
    s[i] -= l[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, pe ? oe(t, d) : t) : new h(0);
}
function yr(e, t, r) {
  var n, i = be(e), a = yt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ut(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Ut(-i - 1) + a, r && (n = r - o) > 0 && (a += Ut(n))) : i >= o ? (a += Ut(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Ut(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Ut(n))), e.s < 0 ? "-" + a : a;
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
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, Bk.test(a)) ch(o, a);
    else throw Error(hr + a);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = iy, i.config = i.set = Lk, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function Lk(e) {
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
var Dc = iy(Dk);
Ye = new Dc(1);
const ae = Dc;
function Rk(e) {
  return Uk(e) || Wk(e) || zk(e) || Fk();
}
function Fk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zk(e, t) {
  if (e) {
    if (typeof e == "string") return Yu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yu(e, t);
  }
}
function Wk(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Uk(e) {
  if (Array.isArray(e)) return Yu(e);
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Kk = function(t) {
  return t;
}, ay = {}, oy = function(t) {
  return t === ay;
}, fh = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && oy(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, qk = function e(t, r) {
  return t === 1 ? r : fh(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== ay;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, fh(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var f = i.map(function(l) {
        return oy(l) ? s.shift() : l;
      });
      return r.apply(void 0, Rk(f).concat(s));
    }));
  });
}, Eo = function(t) {
  return qk(t.length, t);
}, Zu = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, Hk = Eo(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), Gk = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return Kk;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, a.apply(void 0, arguments));
  };
}, Ju = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, uy = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, s) {
      return u === r[s];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function Vk(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ae(e).abs().log(10).toNumber()) + 1, t;
}
function Xk(e, t, r) {
  for (var n = new ae(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Yk = Eo(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), Zk = Eo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), Jk = Eo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Mo = {
  rangeStep: Xk,
  getDigitCount: Vk,
  interpolateNumber: Yk,
  uninterpolateNumber: Zk,
  uninterpolateTruncation: Jk
};
function Qu(e) {
  return tN(e) || eN(e) || sy(e) || Qk();
}
function Qk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eN(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function tN(e) {
  if (Array.isArray(e)) return es(e);
}
function ei(e, t) {
  return iN(e) || nN(e, t) || sy(e, t) || rN();
}
function rN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sy(e, t) {
  if (e) {
    if (typeof e == "string") return es(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return es(e, t);
  }
}
function es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function nN(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (s) {
      i = !0, a = s;
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
function iN(e) {
  if (Array.isArray(e)) return e;
}
function cy(e) {
  var t = ei(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function ly(e, t, r) {
  if (e.lte(0))
    return new ae(0);
  var n = Mo.getDigitCount(e.toNumber()), i = new ae(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ae(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? s : new ae(Math.ceil(s));
}
function aN(e, t, r) {
  var n = 1, i = new ae(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ae(10).pow(Mo.getDigitCount(e) - 1), i = new ae(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ae(Math.floor(e)));
  } else e === 0 ? i = new ae(Math.floor((t - 1) / 2)) : r || (i = new ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = Gk(Hk(function(s) {
    return i.add(new ae(s - o).mul(n)).toNumber();
  }), Zu);
  return u(0, t);
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
  var u = Math.ceil(o.sub(e).div(a).toNumber()), s = Math.ceil(new ae(t).sub(o).div(a).toNumber()), c = u + s + 1;
  return c > r ? fy(e, t, r, n, i + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, u = t > 0 ? u : u + (r - c)), {
    step: a,
    tickMin: o.sub(new ae(u).mul(a)),
    tickMax: o.add(new ae(s).mul(a))
  });
}
function oN(e) {
  var t = ei(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = cy([r, n]), s = ei(u, 2), c = s[0], f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(Qu(Zu(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Qu(Zu(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? Ju(l) : l;
  }
  if (c === f)
    return aN(c, i, a);
  var h = fy(c, f, o, a), d = h.step, y = h.tickMin, p = h.tickMax, v = Mo.rangeStep(y, p.add(new ae(0.1).mul(d)), d);
  return r > n ? Ju(v) : v;
}
function uN(e, t) {
  var r = ei(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = cy([n, i]), u = ei(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (s === c)
    return [s];
  var f = Math.max(t, 2), l = ly(new ae(c).sub(s).div(f - 1), a, 0), h = [].concat(Qu(Mo.rangeStep(new ae(s), new ae(c).sub(new ae(0.99).mul(l)), l)), [c]);
  return n > i ? Ju(h) : h;
}
var sN = uy(oN), cN = uy(uN), lN = "Invariant failed";
function mr(e, t) {
  throw new Error(lN);
}
var fN = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wa.apply(this, arguments);
}
function hN(e, t) {
  return yN(e) || vN(e, t) || dN(e, t) || pN();
}
function pN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dN(e, t) {
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
function vN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function yN(e) {
  if (Array.isArray(e)) return e;
}
function mN(e, t) {
  if (e == null) return {};
  var r = gN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function bN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dy(n.key), n);
  }
}
function wN(e, t, r) {
  return t && xN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _N(e, t, r) {
  return t = _a(t), ON(e, hy() ? Reflect.construct(t, r || [], _a(e).constructor) : t.apply(e, r));
}
function ON(e, t) {
  if (t && (Kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return SN(e);
}
function SN(e) {
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
function _a(e) {
  return _a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _a(e);
}
function AN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ts(e, t);
}
function ts(e, t) {
  return ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ts(e, t);
}
function py(e, t, r) {
  return t = dy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dy(e) {
  var t = PN(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function PN(e, t) {
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
    return bN(this, t), _N(this, t, arguments);
  }
  return AN(t, e), wN(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, h = mN(n, fN), d = Q(h, !1);
      this.props.direction === "x" && f.type !== "number" && mr();
      var y = s.map(function(p) {
        var v = c(p, u), b = v.x, _ = v.y, g = v.value, w = v.errorVal;
        if (!w)
          return null;
        var m = [], x, O;
        if (Array.isArray(w)) {
          var S = hN(w, 2);
          x = S[0], O = S[1];
        } else
          x = O = w;
        if (a === "vertical") {
          var $ = f.scale, M = _ + i, j = M + o, T = M - o, N = $(g - x), k = $(g + O);
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
          var C = l.scale, I = b + i, D = I - o, R = I + o, F = C(g - x), q = C(g + O);
          m.push({
            x1: D,
            y1: q,
            x2: R,
            y2: q
          }), m.push({
            x1: I,
            y1: F,
            x2: I,
            y2: q
          }), m.push({
            x1: D,
            y1: F,
            x2: R,
            y2: F
          });
        }
        return /* @__PURE__ */ P.createElement(se, wa({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(G) {
            return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
          }))
        }, d), m.map(function(G) {
          return /* @__PURE__ */ P.createElement("line", wa({}, G, {
            key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
          }));
        }));
      });
      return /* @__PURE__ */ P.createElement(se, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
}(P.Component);
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
      $N(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $N(e, t, r) {
  return t = jN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jN(e) {
  var t = TN(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function TN(e, t) {
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
  var u = Ze.defaultProps, s = u !== void 0 ? rr(rr({}, u), o.props) : {}, c;
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
    var l = f.item, h = l.type.defaultProps, d = h !== void 0 ? rr(rr({}, h), l.props) : {}, y = d.dataKey, p = d.name, v = d.legendType, b = d.hide;
    return {
      inactive: b,
      dataKey: y,
      type: s.iconType || v || "square",
      color: Bc(l),
      value: p || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: d
    };
  }), rr(rr(rr({}, s), Ze.getWithHeight(o, i)), {}, {
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
  return kN(e) || CN(e) || MN(e) || EN();
}
function EN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MN(e, t) {
  if (e) {
    if (typeof e == "string") return rs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rs(e, t);
  }
}
function CN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kN(e) {
  if (Array.isArray(e)) return rs(e);
}
function rs(e, t) {
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
      Ir(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ir(e, t, r) {
  return t = NN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NN(e) {
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
function In(e, t, r, n) {
  var i = Ck(e, function(u) {
    return ke(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return L(u) || parseFloat(u);
    });
    return a.length ? [To(a), jo(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !X(u);
  }) : i;
  return o.map(function(u) {
    return Ae(u) || u instanceof Date ? u : "";
  });
}
var DN = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var s = a.range, c = 0; c < u; c++) {
      var f = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate, l = i[c].coordinate, h = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate, d = void 0;
      if (pt(l - f) !== pt(h - l)) {
        var y = [];
        if (pt(h - l) === pt(s[1] - s[0])) {
          d = h;
          var p = l + s[1] - s[0];
          y[0] = Math.min(p, (p + f) / 2), y[1] = Math.max(p, (p + f) / 2);
        } else {
          d = f;
          var v = h + s[1] - s[0];
          y[0] = Math.min(l, (v + l) / 2), y[1] = Math.max(l, (v + l) / 2);
        }
        var b = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
        if (t > b[0] && t <= b[1] || t >= y[0] && t <= y[1]) {
          o = i[c].index;
          break;
        }
      } else {
        var _ = Math.min(f, h), g = Math.max(f, h);
        if (t > (_ + l) / 2 && t <= (g + l) / 2) {
          o = i[c].index;
          break;
        }
      }
    }
  else
    for (var w = 0; w < u; w++)
      if (w === 0 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w > 0 && w < u - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w === u - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2) {
        o = n[w].index;
        break;
      }
  return o;
}, Bc = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, s;
  switch (i) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, BN = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, u = Object.keys(a), s = 0, c = u.length; s < c; s++)
    for (var f = a[u[s]].stackGroups, l = Object.keys(f), h = 0, d = l.length; h < d; h++) {
      var y = f[l[h]], p = y.items, v = y.cateAxisId, b = p.filter(function(O) {
        return Et(O.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var _ = b[0].type.defaultProps, g = _ !== void 0 ? ve(ve({}, _), b[0].props) : b[0].props, w = g.barSize, m = g[v];
        o[m] || (o[m] = []);
        var x = X(w) ? r : w;
        o[m].push({
          item: b[0],
          stackList: b.slice(1),
          barSize: X(x) ? void 0 : vr(x, n, 0)
        });
      }
    }
  return o;
}, LN = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = vr(r, i, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var h = !1, d = i / s, y = o.reduce(function(w, m) {
      return w + m.barSize || 0;
    }, 0);
    y += (s - 1) * c, y >= i && (y -= (s - 1) * c, c = 0), y >= i && d > 0 && (h = !0, d *= 0.9, y = s * d);
    var p = (i - y) / 2 >> 0, v = {
      offset: p - c,
      size: 0
    };
    f = o.reduce(function(w, m) {
      var x = {
        item: m.item,
        position: {
          offset: v.offset + v.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: h ? d : m.barSize
        }
      }, O = [].concat(dh(w), [x]);
      return v = O[O.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: v
        });
      }), O;
    }, l);
  } else {
    var b = vr(n, i, 0, !0);
    i - 2 * b - (s - 1) * c <= 0 && (c = 0);
    var _ = (i - 2 * b - (s - 1) * c) / s;
    _ > 1 && (_ >>= 0);
    var g = u === +u ? Math.min(_, u) : _;
    f = o.reduce(function(w, m, x) {
      var O = [].concat(dh(w), [{
        item: m.item,
        position: {
          offset: b + (_ + c) * x + (_ - g) / 2,
          size: g
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(S) {
        O.push({
          item: S,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, RN = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = vy({
    children: a,
    legendWidth: s
  });
  if (c) {
    var f = i || {}, l = f.width, h = f.height, d = c.align, y = c.verticalAlign, p = c.layout;
    if ((p === "vertical" || p === "horizontal" && y === "middle") && d !== "center" && L(t[d]))
      return ve(ve({}, t), {}, Ir({}, d, t[d] + (l || 0)));
    if ((p === "horizontal" || p === "vertical" && d === "center") && y !== "middle" && L(t[y]))
      return ve(ve({}, t), {}, Ir({}, y, t[y] + (h || 0)));
  }
  return t;
}, FN = function(t, r, n) {
  return X(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, yy = function(t, r, n, i, a) {
  var o = r.props.children, u = Ke(o, bn).filter(function(c) {
    return FN(i, a, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = ke(f, n);
      if (X(l)) return c;
      var h = Array.isArray(l) ? [To(l), jo(l)] : [l, l], d = s.reduce(function(y, p) {
        var v = ke(f, p, 0), b = h[0] - Math.abs(Array.isArray(v) ? v[0] : v), _ = h[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(b, y[0]), Math.max(_, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(d[0], c[0]), Math.max(d[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, zN = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return yy(t, u, n, a, i);
  }).filter(function(u) {
    return !X(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, my = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && yy(t, s, c, i) || In(t, c, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(s, c) {
    for (var f = 0, l = c.length; f < l; f++)
      u[c[f]] || (u[c[f]] = !0, s.push(c[f]));
    return s;
  }, []);
}, gy = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, by = function(t, r, n, i) {
  if (i)
    return t.map(function(s) {
      return s.coordinate;
    });
  var a, o, u = t.map(function(s) {
    return s.coordinate === r && (a = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Tt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? pt(u[0] - u[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
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
}, su = /* @__PURE__ */ new WeakMap(), zi = function(t, r) {
  if (typeof r != "function")
    return t;
  su.has(t) || su.set(t, /* @__PURE__ */ new WeakMap());
  var n = su.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, WN = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: Vn(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: ya(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Nn(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Vn(),
      realScaleType: "band"
    } : {
      scale: ya(),
      realScaleType: "linear"
    };
  if (dr(i)) {
    var s = "scale".concat(po(i));
    return {
      scale: (sh[s] || Nn)(),
      realScaleType: sh[s] ? s : "point"
    };
  }
  return Z(i) ? {
    scale: i
  } : {
    scale: Nn(),
    realScaleType: "point"
  };
}, yh = 1e-4, UN = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - yh, o = Math.max(i[0], i[1]) + yh, u = t(r[0]), s = t(r[n - 1]);
    (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, KN = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, qN = function(t, r) {
  if (!r || r.length !== 2 || !L(r[0]) || !L(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!L(t[0]) || t[0] < n) && (a[0] = n), (!L(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, HN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var s = Oi(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + s, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + s, o = t[u][n][1]);
      }
}, GN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = Oi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, VN = {
  sign: HN,
  // @ts-expect-error definitelytyped types are incorrect
  expand: c_,
  // @ts-expect-error definitelytyped types are incorrect
  none: Dr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: l_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: f_,
  positive: GN
}, XN = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = VN[n], o = s_().keys(i).value(function(u, s) {
    return +ke(u, s, 0);
  }).order($u).offset(a);
  return o(t);
}, YN = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(l, h) {
    var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? ve(ve({}, h.type.defaultProps), h.props) : h.props, p = y.stackId, v = y.hide;
    if (v)
      return l;
    var b = y[n], _ = l[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ae(p)) {
      var g = _.stackGroups[p] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      g.items.push(h), _.hasStack = !0, _.stackGroups[p] = g;
    } else
      _.stackGroups[hn("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [h]
      };
    return ve(ve({}, l), {}, Ir({}, b, _));
  }, s), f = {};
  return Object.keys(c).reduce(function(l, h) {
    var d = c[h];
    if (d.hasStack) {
      var y = {};
      d.stackGroups = Object.keys(d.stackGroups).reduce(function(p, v) {
        var b = d.stackGroups[v];
        return ve(ve({}, p), {}, Ir({}, v, {
          numericAxisId: n,
          cateAxisId: i,
          items: b.items,
          stackedData: XN(t, b.items, a)
        }));
      }, y);
    }
    return ve(ve({}, l), {}, Ir({}, h, d));
  }, f);
}, ZN = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = sN(c, a, u);
    return t.domain([To(f), jo(f)]), {
      niceTicks: f
    };
  }
  if (a && i === "number") {
    var l = t.domain(), h = cN(l, a, u);
    return {
      niceTicks: h
    };
  }
  return null;
};
function Oa(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !X(i[t.dataKey])) {
      var u = Vi(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = ke(i, X(o) ? t.dataKey : o);
  return X(s) ? null : t.scale(s);
}
var mh = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var s = ke(o, r.dataKey, r.domain[u]);
  return X(s) ? null : r.scale(s) - a / 2 + i;
}, JN = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, QN = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Ae(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, eI = function(t) {
  return t.reduce(function(r, n) {
    return [To(n.concat([r[0]]).filter(L)), jo(n.concat([r[1]]).filter(L))];
  }, [1 / 0, -1 / 0]);
}, xy = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, s = u.reduce(function(c, f) {
      var l = eI(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, gh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, bh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ns = function(t, r, n) {
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
}, Sa = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = fc(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, s = a.length; u < s; u++) {
      var c = a[u], f = a[u - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, xh = function(t, r, n) {
  return !t || !t.length || Ei(t, at(n, "type.defaultProps.domain")) ? r : t;
}, wy = function(t, r) {
  var n = t.type.defaultProps ? ve(ve({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, f = n.hide;
  return ve(ve({}, Q(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: Bc(t),
    value: ke(r, i),
    type: s,
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
      tI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tI(e, t, r) {
  return t = rI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rI(e) {
  var t = nI(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function nI(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Aa = Math.PI / 180, iI = function(t) {
  return t * 180 / Math.PI;
}, Ce = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Aa * i) * n,
    y: r + Math.sin(-Aa * i) * n
  };
}, aI = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, oI = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = aI({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var s = (n - a) / u, c = Math.acos(s);
  return i > o && (c = 2 * Math.PI - c), {
    radius: u,
    angle: iI(c),
    angleInRadian: c
  };
}, uI = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, sI = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, Oh = function(t, r) {
  var n = t.x, i = t.y, a = oI({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = uI(r), l = f.startAngle, h = f.endAngle, d = u, y;
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
  return y ? _h(_h({}, r), {}, {
    radius: o,
    angle: sI(d, r)
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
var cI = ["offset"];
function lI(e) {
  return dI(e) || pI(e) || hI(e) || fI();
}
function fI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hI(e, t) {
  if (e) {
    if (typeof e == "string") return is(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return is(e, t);
  }
}
function pI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function dI(e) {
  if (Array.isArray(e)) return is(e);
}
function is(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vI(e, t) {
  if (e == null) return {};
  var r = yI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yI(e, t) {
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
      mI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mI(e, t, r) {
  return t = gI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gI(e) {
  var t = bI(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function bI(e, t) {
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
var xI = function(t) {
  var r = t.value, n = t.formatter, i = X(t.children) ? r : t.children;
  return Z(n) ? n(i) : i;
}, wI = function(t, r) {
  var n = pt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, _I = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, s = a, c = s.cx, f = s.cy, l = s.innerRadius, h = s.outerRadius, d = s.startAngle, y = s.endAngle, p = s.clockWise, v = (l + h) / 2, b = wI(d, y), _ = b >= 0 ? 1 : -1, g, w;
  i === "insideStart" ? (g = d + _ * o, w = p) : i === "insideEnd" ? (g = y - _ * o, w = !p) : i === "end" && (g = y + _ * o, w = p), w = b <= 0 ? w : !w;
  var m = Ce(c, f, v, g), x = Ce(c, f, v, g + (w ? 1 : -1) * 359), O = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), S = X(t.id) ? hn("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ P.createElement("text", ai({}, n, {
    dominantBaseline: "central",
    className: ee("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: S,
    d: O
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, OI = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, s = a.innerRadius, c = a.outerRadius, f = a.startAngle, l = a.endAngle, h = (f + l) / 2;
  if (i === "outside") {
    var d = Ce(o, u, c + n, h), y = d.x, p = d.y;
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
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var v = (s + c) / 2, b = Ce(o, u, v, h), _ = b.x, g = b.y;
  return {
    x: _,
    y: g,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, SI = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, s = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, h = l * i, d = l > 0 ? "end" : "start", y = l > 0 ? "start" : "end", p = c >= 0 ? 1 : -1, v = p * i, b = p > 0 ? "end" : "start", _ = p > 0 ? "start" : "end";
  if (a === "top") {
    var g = {
      x: u + c / 2,
      y: s - l * i,
      textAnchor: "middle",
      verticalAnchor: d
    };
    return Oe(Oe({}, g), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var w = {
      x: u + c / 2,
      y: s + f + h,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Oe(Oe({}, w), n ? {
      height: Math.max(n.y + n.height - (s + f), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var m = {
      x: u - v,
      y: s + f / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return Oe(Oe({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: f
    } : {});
  }
  if (a === "right") {
    var x = {
      x: u + c + v,
      y: s + f / 2,
      textAnchor: _,
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
    x: u + v,
    y: s + f / 2,
    textAnchor: _,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? Oe({
    x: u + c - v,
    y: s + f / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? Oe({
    x: u + c / 2,
    y: s + h,
    textAnchor: "middle",
    verticalAnchor: y
  }, O) : a === "insideBottom" ? Oe({
    x: u + c / 2,
    y: s + f - h,
    textAnchor: "middle",
    verticalAnchor: d
  }, O) : a === "insideTopLeft" ? Oe({
    x: u + v,
    y: s + h,
    textAnchor: _,
    verticalAnchor: y
  }, O) : a === "insideTopRight" ? Oe({
    x: u + c - v,
    y: s + h,
    textAnchor: b,
    verticalAnchor: y
  }, O) : a === "insideBottomLeft" ? Oe({
    x: u + v,
    y: s + f - h,
    textAnchor: _,
    verticalAnchor: d
  }, O) : a === "insideBottomRight" ? Oe({
    x: u + c - v,
    y: s + f - h,
    textAnchor: b,
    verticalAnchor: d
  }, O) : sn(a) && (L(a.x) || or(a.x)) && (L(a.y) || or(a.y)) ? Oe({
    x: u + vr(a.x, c),
    y: s + vr(a.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : Oe({
    x: u + c / 2,
    y: s + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, AI = function(t) {
  return "cx" in t && L(t.cx);
};
function Ie(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = vI(e, cI), i = Oe({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, s = i.children, c = i.content, f = i.className, l = f === void 0 ? "" : f, h = i.textBreakAll;
  if (!a || X(u) && X(s) && !/* @__PURE__ */ gt(c) && !Z(c))
    return null;
  if (/* @__PURE__ */ gt(c))
    return /* @__PURE__ */ Se(c, i);
  var d;
  if (Z(c)) {
    if (d = /* @__PURE__ */ Yp(c, i), /* @__PURE__ */ gt(d))
      return d;
  } else
    d = xI(i);
  var y = AI(a), p = Q(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return _I(i, d, p);
  var v = y ? OI(i) : SI(i);
  return /* @__PURE__ */ P.createElement(ca, ai({
    className: ee("recharts-label", l)
  }, p, v, {
    breakAll: h
  }), d);
}
Ie.displayName = "Label";
var _y = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, s = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, h = t.y, d = t.top, y = t.left, p = t.width, v = t.height, b = t.clockWise, _ = t.labelViewBox;
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
    outerRadius: f || s || u || 0,
    clockWise: b
  } : t.viewBox ? t.viewBox : {};
}, PI = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(Ie, {
    key: "label-implicit",
    viewBox: r
  }) : Ae(t) ? /* @__PURE__ */ P.createElement(Ie, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ gt(t) ? t.type === Ie ? /* @__PURE__ */ Se(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ P.createElement(Ie, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Z(t) ? /* @__PURE__ */ P.createElement(Ie, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : sn(t) ? /* @__PURE__ */ P.createElement(Ie, ai({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, $I = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = _y(t), o = Ke(i, Ie).map(function(s, c) {
    return /* @__PURE__ */ Se(s, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = PI(t.label, r || a);
  return [u].concat(lI(o));
};
Ie.parseViewBox = _y;
Ie.renderCallByParent = $I;
function jI(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var TI = jI;
const EI = /* @__PURE__ */ ce(TI);
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
var MI = ["valueAccessor"], CI = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function kI(e) {
  return BI(e) || DI(e) || II(e) || NI();
}
function NI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function II(e, t) {
  if (e) {
    if (typeof e == "string") return as(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return as(e, t);
  }
}
function DI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function BI(e) {
  if (Array.isArray(e)) return as(e);
}
function as(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(this, arguments);
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
      LI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LI(e, t, r) {
  return t = RI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RI(e) {
  var t = FI(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function FI(e, t) {
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
  var r = zI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var WI = function(t) {
  return Array.isArray(t.value) ? EI(t.value) : t.value;
};
function kt(e) {
  var t = e.valueAccessor, r = t === void 0 ? WI : t, n = $h(e, MI), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = $h(n, CI);
  return !i || !i.length ? null : /* @__PURE__ */ P.createElement(se, {
    className: "recharts-label-list"
  }, i.map(function(f, l) {
    var h = X(a) ? r(f, l) : ke(f && f.payload, a), d = X(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ P.createElement(Ie, Pa({}, Q(f, !0), c, d, {
      parentViewBox: f.parentViewBox,
      value: h,
      textBreakAll: s,
      viewBox: Ie.parseViewBox(X(o) ? f : Ph(Ph({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
kt.displayName = "LabelList";
function UI(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ P.createElement(kt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ P.isValidElement(e) || Z(e) ? /* @__PURE__ */ P.createElement(kt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : sn(e) ? /* @__PURE__ */ P.createElement(kt, Pa({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function KI(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Ke(n, kt).map(function(o, u) {
    return /* @__PURE__ */ Se(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = UI(e.label, t);
  return [a].concat(kI(i));
}
kt.renderCallByParent = KI;
function ui(e) {
  "@babel/helpers - typeof";
  return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ui(e);
}
function os() {
  return os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, os.apply(this, arguments);
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
      qI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qI(e, t, r) {
  return t = HI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HI(e) {
  var t = GI(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function GI(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var VI = function(t, r) {
  var n = pt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Wi = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, f = s * (u ? 1 : -1) + i, l = Math.asin(s / f) / Aa, h = c ? a : a + o * l, d = Ce(r, n, f, h), y = Ce(r, n, i, h), p = c ? a - o * l : a, v = Ce(r, n, f * Math.cos(l * Aa), p);
  return {
    center: d,
    circleTangency: y,
    lineTangency: v,
    theta: l
  };
}, Oy = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, s = VI(o, u), c = o + s, f = Ce(r, n, a, o), l = Ce(r, n, a, c), h = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var d = Ce(r, n, i, o), y = Ce(r, n, i, c);
    h += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(d.x, ",").concat(d.y, " Z");
  } else
    h += "L ".concat(r, ",").concat(n, " Z");
  return h;
}, XI = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = pt(f - c), h = Wi({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: s
  }), d = h.circleTangency, y = h.lineTangency, p = h.theta, v = Wi({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: s
  }), b = v.circleTangency, _ = v.lineTangency, g = v.theta, w = s ? Math.abs(c - f) : Math.abs(c - f) - p - g;
  if (w < 0)
    return u ? "M ".concat(y.x, ",").concat(y.y, `
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
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(w > 180), ",").concat(+(l < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(_.x, ",").concat(_.y, `
  `);
  if (i > 0) {
    var x = Wi({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), O = x.circleTangency, S = x.lineTangency, $ = x.theta, M = Wi({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), j = M.circleTangency, T = M.lineTangency, N = M.theta, k = s ? Math.abs(c - f) : Math.abs(c - f) - $ - N;
    if (k < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(j.x, ",").concat(j.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(k > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, YI = {
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
  var r = Th(Th({}, YI), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, h = r.className;
  if (o < a || f === l)
    return null;
  var d = ee("recharts-sector", h), y = o - a, p = vr(u, y, 0, !0), v;
  return p > 0 && Math.abs(f - l) < 360 ? v = XI({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(p, y / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : v = Oy({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ P.createElement("path", os({}, Q(r, !0), {
    className: d,
    d: v,
    role: "img"
  }));
};
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
function us() {
  return us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, us.apply(this, arguments);
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
      ZI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZI(e, t, r) {
  return t = JI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JI(e) {
  var t = QI(e, "string");
  return si(t) == "symbol" ? t : t + "";
}
function QI(e, t) {
  if (si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ch = {
  curveBasisClosed: Zw,
  curveBasisOpen: Jw,
  curveBasis: Yw,
  curveBumpX: Dw,
  curveBumpY: Bw,
  curveLinearClosed: Qw,
  curveLinear: yo,
  curveMonotoneX: e_,
  curveMonotoneY: t_,
  curveNatural: r_,
  curveStep: n_,
  curveStepAfter: a_,
  curveStepBefore: i_
}, Ui = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, jn = function(t) {
  return t.x;
}, Tn = function(t) {
  return t.y;
}, eD = function(t, r) {
  if (Z(t))
    return t;
  var n = "curve".concat(po(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Ch["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Ch[n] || yo;
}, tD = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, f = eD(n, u), l = c ? a.filter(function(p) {
    return Ui(p);
  }) : a, h;
  if (Array.isArray(o)) {
    var d = c ? o.filter(function(p) {
      return Ui(p);
    }) : o, y = l.map(function(p, v) {
      return Mh(Mh({}, p), {}, {
        base: d[v]
      });
    });
    return u === "vertical" ? h = ki().y(Tn).x1(jn).x0(function(p) {
      return p.base.x;
    }) : h = ki().x(jn).y1(Tn).y0(function(p) {
      return p.base.y;
    }), h.defined(Ui).curve(f), h(y);
  }
  return u === "vertical" && L(o) ? h = ki().y(Tn).x1(jn).x0(o) : L(o) ? h = ki().x(jn).y1(Tn).y0(o) : h = Ad().x(jn).y(Tn), h.defined(Ui).curve(f), h(l);
}, $a = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? tD(t) : i;
  return /* @__PURE__ */ it.createElement("path", us({}, Q(t, !1), Xi(t), {
    className: ee("recharts-curve", r),
    d: o,
    ref: a
  }));
}, Ay = { exports: {} }, rD = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", nD = rD, iD = nD;
function Py() {
}
function $y() {
}
$y.resetWarningCache = Py;
var aD = function() {
  function e(n, i, a, o, u, s) {
    if (s !== iD) {
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
Ay.exports = aD();
var oD = Ay.exports;
const ne = /* @__PURE__ */ ce(oD);
var uD = Object.getOwnPropertyNames, sD = Object.getOwnPropertySymbols, cD = Object.prototype.hasOwnProperty;
function kh(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Ki(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), u = a.get(n);
    if (o && u)
      return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var s = e(r, n, i);
    return a.delete(r), a.delete(n), s;
  };
}
function lD(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function Nh(e) {
  return uD(e).concat(sD(e));
}
var fD = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || function(e, t) {
    return cD.call(e, t);
  }
);
function Sr(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var hD = "__v", pD = "__o", dD = "_owner", Ih = Object.getOwnPropertyDescriptor, Dh = Object.keys;
function vD(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function yD(e, t) {
  return Sr(e.getTime(), t.getTime());
}
function mD(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function gD(e, t) {
  return e === t;
}
function Bh(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, u, s = 0; (o = a.next()) && !o.done; ) {
    for (var c = t.entries(), f = !1, l = 0; (u = c.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      var h = o.value, d = u.value;
      if (r.equals(h[0], d[0], s, l, e, t, r) && r.equals(h[1], d[1], h[0], d[0], e, t, r)) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    s++;
  }
  return !0;
}
var bD = Sr;
function xD(e, t, r) {
  var n = Dh(e), i = n.length;
  if (Dh(t).length !== i)
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
  for (var a, o, u; i-- > 0; )
    if (a = n[i], !jy(e, t, r, a) || (o = Ih(e, a), u = Ih(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function wD(e, t) {
  return Sr(e.valueOf(), t.valueOf());
}
function _D(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Lh(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, u; (o = a.next()) && !o.done; ) {
    for (var s = t.values(), c = !1, f = 0; (u = s.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
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
function OD(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function SD(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function jy(e, t, r, n) {
  return (n === dD || n === pD || n === hD) && (e.$$typeof || t.$$typeof) ? !0 : fD(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var AD = "[object Arguments]", PD = "[object Boolean]", $D = "[object Date]", jD = "[object Error]", TD = "[object Map]", ED = "[object Number]", MD = "[object Object]", CD = "[object RegExp]", kD = "[object Set]", ND = "[object String]", ID = "[object URL]", DD = Array.isArray, Rh = typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView : null, Fh = Object.assign, BD = Object.prototype.toString.call.bind(Object.prototype.toString);
function LD(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, u = e.areObjectsEqual, s = e.arePrimitiveWrappersEqual, c = e.areRegExpsEqual, f = e.areSetsEqual, l = e.areTypedArraysEqual, h = e.areUrlsEqual, d = e.unknownTagComparators;
  return function(p, v, b) {
    if (p === v)
      return !0;
    if (p == null || v == null)
      return !1;
    var _ = typeof p;
    if (_ !== typeof v)
      return !1;
    if (_ !== "object")
      return _ === "number" ? o(p, v, b) : _ === "function" ? i(p, v, b) : !1;
    var g = p.constructor;
    if (g !== v.constructor)
      return !1;
    if (g === Object)
      return u(p, v, b);
    if (DD(p))
      return t(p, v, b);
    if (Rh != null && Rh(p))
      return l(p, v, b);
    if (g === Date)
      return r(p, v, b);
    if (g === RegExp)
      return c(p, v, b);
    if (g === Map)
      return a(p, v, b);
    if (g === Set)
      return f(p, v, b);
    var w = BD(p);
    if (w === $D)
      return r(p, v, b);
    if (w === CD)
      return c(p, v, b);
    if (w === TD)
      return a(p, v, b);
    if (w === kD)
      return f(p, v, b);
    if (w === MD)
      return typeof p.then != "function" && typeof v.then != "function" && u(p, v, b);
    if (w === ID)
      return h(p, v, b);
    if (w === jD)
      return n(p, v, b);
    if (w === AD)
      return u(p, v, b);
    if (w === PD || w === ED || w === ND)
      return s(p, v, b);
    if (d) {
      var m = d[w];
      if (!m) {
        var x = lD(p);
        x && (m = d[x]);
      }
      if (m)
        return m(p, v, b);
    }
    return !1;
  };
}
function RD(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? En : vD,
    areDatesEqual: yD,
    areErrorsEqual: mD,
    areFunctionsEqual: gD,
    areMapsEqual: n ? kh(Bh, En) : Bh,
    areNumbersEqual: bD,
    areObjectsEqual: n ? En : xD,
    arePrimitiveWrappersEqual: wD,
    areRegExpsEqual: _D,
    areSetsEqual: n ? kh(Lh, En) : Lh,
    areTypedArraysEqual: n ? En : OD,
    areUrlsEqual: SD,
    unknownTagComparators: void 0
  };
  if (r && (i = Fh({}, i, r(i))), t) {
    var a = Ki(i.areArraysEqual), o = Ki(i.areMapsEqual), u = Ki(i.areObjectsEqual), s = Ki(i.areSetsEqual);
    i = Fh({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: s
    });
  }
  return i;
}
function FD(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function zD(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(s, c) {
      var f = n(), l = f.cache, h = l === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : l, d = f.meta;
      return r(s, c, {
        cache: h,
        equals: i,
        meta: d,
        strict: a
      });
    };
  if (t)
    return function(s, c) {
      return r(s, c, {
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
  return function(s, c) {
    return r(s, c, o);
  };
}
var WD = Jt();
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
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, u = RD(e), s = LD(u), c = n ? n(s) : FD(s);
  return zD({ circular: r, comparator: s, createState: i, equals: c, strict: o });
}
function UD(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function zh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : UD(i);
  };
  requestAnimationFrame(n);
}
function ss(e) {
  "@babel/helpers - typeof";
  return ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ss(e);
}
function KD(e) {
  return VD(e) || GD(e) || HD(e) || qD();
}
function qD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HD(e, t) {
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
function GD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function VD(e) {
  if (Array.isArray(e)) return e;
}
function XD() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = KD(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          zh(i.bind(null, c), s);
          return;
        }
        i(s), zh(i.bind(null, c));
        return;
      }
      ss(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
  return t = YD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YD(e) {
  var t = ZD(e, "string");
  return ci(t) === "symbol" ? t : String(t);
}
function ZD(e, t) {
  if (ci(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var JD = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, QD = function(t) {
  return t;
}, e2 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Dn = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Kh(Kh({}, n), {}, Ty({}, i, t(i, r[i])));
  }, {});
}, qh = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(e2(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function t2(e, t) {
  return i2(e) || n2(e, t) || Ey(e, t) || r2();
}
function r2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function i2(e) {
  if (Array.isArray(e)) return e;
}
function a2(e) {
  return s2(e) || u2(e) || Ey(e) || o2();
}
function o2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ey(e, t) {
  if (e) {
    if (typeof e == "string") return cs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cs(e, t);
  }
}
function u2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function s2(e) {
  if (Array.isArray(e)) return cs(e);
}
function cs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ja = 1e-4, My = function(t, r) {
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
}, c2 = function(t, r) {
  return function(n) {
    var i = My(t, r), a = [].concat(a2(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return Cy(a, n);
  };
}, Gh = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, u = 1;
        break;
      default: {
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(v) {
            return parseFloat(v);
          }), f = t2(c, 4);
          i = f[0], a = f[1], o = f[2], u = f[3];
        }
      }
    }
  var l = Hh(i, o), h = Hh(a, u), d = c2(i, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, p = function(b) {
    for (var _ = b > 1 ? 1 : b, g = _, w = 0; w < 8; ++w) {
      var m = l(g) - _, x = d(g);
      if (Math.abs(m - _) < ja || x < ja)
        return h(g);
      g = y(g - m / x);
    }
    return h(g);
  };
  return p.isStepper = !1, p;
}, l2 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, s = function(f, l, h) {
    var d = -(f - l) * n, y = h * a, p = h + (d - y) * u / 1e3, v = h * u / 1e3 + f;
    return Math.abs(v - l) < ja && Math.abs(p) < ja ? [l, 0] : [v, p];
  };
  return s.isStepper = !0, s.dt = u, s;
}, f2 = function() {
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
        return l2();
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
  return d2(e) || p2(e) || ky(e) || h2();
}
function h2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function d2(e) {
  if (Array.isArray(e)) return fs(e);
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
      ls(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ls(e, t, r) {
  return t = v2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v2(e) {
  var t = y2(e, "string");
  return li(t) === "symbol" ? t : String(t);
}
function y2(e, t) {
  if (li(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m2(e, t) {
  return x2(e) || b2(e, t) || ky(e, t) || g2();
}
function g2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ky(e, t) {
  if (e) {
    if (typeof e == "string") return fs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fs(e, t);
  }
}
function fs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function b2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function x2(e) {
  if (Array.isArray(e)) return e;
}
var Ta = function(t, r, n) {
  return t + (r - t) * n;
}, hs = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, w2 = function e(t, r, n) {
  var i = Dn(function(a, o) {
    if (hs(o)) {
      var u = t(o.from, o.to, o.velocity), s = m2(u, 2), c = s[0], f = s[1];
      return Me(Me({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? Dn(function(a, o) {
    return hs(o) ? Me(Me({}, o), {}, {
      velocity: Ta(o.velocity, i[a].velocity, n),
      from: Ta(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const _2 = function(e, t, r, n, i) {
  var a = JD(e, t), o = a.reduce(function(v, b) {
    return Me(Me({}, v), {}, ls({}, b, [e[b], t[b]]));
  }, {}), u = a.reduce(function(v, b) {
    return Me(Me({}, v), {}, ls({}, b, {
      from: e[b],
      velocity: 0,
      to: t[b]
    }));
  }, {}), s = -1, c, f, l = function() {
    return null;
  }, h = function() {
    return Dn(function(b, _) {
      return _.from;
    }, u);
  }, d = function() {
    return !Object.values(u).filter(hs).length;
  }, y = function(b) {
    c || (c = b);
    var _ = b - c, g = _ / r.dt;
    u = w2(r, u, g), i(Me(Me(Me({}, e), t), h())), c = b, d() || (s = requestAnimationFrame(l));
  }, p = function(b) {
    f || (f = b);
    var _ = (b - f) / n, g = Dn(function(m, x) {
      return Ta.apply(void 0, Vh(x).concat([r(_)]));
    }, o);
    if (i(Me(Me(Me({}, e), t), g)), _ < 1)
      s = requestAnimationFrame(l);
    else {
      var w = Dn(function(m, x) {
        return Ta.apply(void 0, Vh(x).concat([r(1)]));
      }, o);
      i(Me(Me(Me({}, e), t), w));
    }
  };
  return l = r.isStepper ? y : p, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(s);
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
var O2 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function S2(e, t) {
  if (e == null) return {};
  var r = A2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function A2(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function cu(e) {
  return T2(e) || j2(e) || $2(e) || P2();
}
function P2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $2(e, t) {
  if (e) {
    if (typeof e == "string") return ps(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ps(e, t);
  }
}
function j2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function T2(e) {
  if (Array.isArray(e)) return ps(e);
}
function ps(e, t) {
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
function E2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ny(n.key), n);
  }
}
function C2(e, t, r) {
  return t && M2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ny(e) {
  var t = k2(e, "string");
  return qr(t) === "symbol" ? t : String(t);
}
function k2(e, t) {
  if (qr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function N2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ds(e, t);
}
function ds(e, t) {
  return ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ds(e, t);
}
function I2(e) {
  var t = D2();
  return function() {
    var n = Ea(e), i;
    if (t) {
      var a = Ea(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return vs(this, i);
  };
}
function vs(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ys(e);
}
function ys(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function D2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ea(e) {
  return Ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ea(e);
}
var _t = /* @__PURE__ */ function(e) {
  N2(r, e);
  var t = I2(r);
  function r(n, i) {
    var a;
    E2(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, s = o.attributeName, c = o.from, f = o.to, l = o.steps, h = o.children, d = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(ys(a)), a.changeStyle = a.changeStyle.bind(ys(a)), !u || d <= 0)
      return a.state = {
        style: {}
      }, typeof h == "function" && (a.state = {
        style: f
      }), vs(a);
    if (l && l.length)
      a.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof h == "function")
        return a.state = {
          style: c
        }, vs(a);
      a.state = {
        style: s ? Cn({}, s, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return C2(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, s = a.attributeName, c = a.shouldReAnimate, f = a.to, l = a.from, h = this.state.style;
      if (u) {
        if (!o) {
          var d = {
            style: s ? Cn({}, s, f) : f
          };
          this.state && h && (s && h[s] !== f || !s && h !== f) && this.setState(d);
          return;
        }
        if (!(WD(i.to, f) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var p = y || c ? l : i.to;
          if (this.state && h) {
            var v = {
              style: s ? Cn({}, s, p) : p
            };
            (s && h[s] !== p || !s && h !== p) && this.setState(v);
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
      var a = this, o = i.from, u = i.to, s = i.duration, c = i.easing, f = i.begin, l = i.onAnimationEnd, h = i.onAnimationStart, d = _2(o, u, f2(c), s, this.changeStyle), y = function() {
        a.stopJSAnimation = d();
      };
      this.manager.start([h, f, y, s, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, s = i.onAnimationStart, c = o[0], f = c.style, l = c.duration, h = l === void 0 ? 0 : l, d = function(p, v, b) {
        if (b === 0)
          return p;
        var _ = v.duration, g = v.easing, w = g === void 0 ? "ease" : g, m = v.style, x = v.properties, O = v.onAnimationEnd, S = b > 0 ? o[b - 1] : v, $ = x || Object.keys(m);
        if (typeof w == "function" || w === "spring")
          return [].concat(cu(p), [a.runJSAnimation.bind(a, {
            from: S.style,
            to: m,
            duration: _,
            easing: w
          }), _]);
        var M = qh($, _, w), j = ct(ct(ct({}, S.style), m), {}, {
          transition: M
        });
        return [].concat(cu(p), [j, _, O]).filter(QD);
      };
      return this.manager.start([s].concat(cu(o.reduce(d, [f, Math.max(h, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = XD());
      var a = i.begin, o = i.duration, u = i.attributeName, s = i.to, c = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, h = i.steps, d = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof d == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (h.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var p = u ? Cn({}, u, s) : s, v = qh(Object.keys(p), o, c);
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
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var s = S2(i, O2), c = lr.count(a), f = this.state.style;
      if (typeof a == "function")
        return a(f);
      if (!u || c === 0 || o <= 0)
        return a;
      var l = function(d) {
        var y = d.props, p = y.style, v = p === void 0 ? {} : p, b = y.className, _ = /* @__PURE__ */ Se(d, ct(ct({}, s), {}, {
          style: ct(ct({}, v), f),
          className: b
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
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ma.apply(this, arguments);
}
function B2(e, t) {
  return z2(e) || F2(e, t) || R2(e, t) || L2();
}
function L2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R2(e, t) {
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
function F2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function z2(e) {
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
      W2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W2(e, t, r) {
  return t = U2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U2(e) {
  var t = K2(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function K2(e, t) {
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
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], h = 0, d = 4; h < d; h++)
      l[h] = a[h] > o ? o : a[h];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + s * l[0], ",").concat(r)), f += "L ".concat(t + n - s * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + i - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * l[2], ",").concat(r + i)), f += "L ".concat(t + s * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - u * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + s * y, ",").concat(r, `
            L `).concat(t + n - s * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + u * y, `
            L `).concat(t + n, ",").concat(r + i - u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n - s * y, ",").concat(r + i, `
            L `).concat(t + s * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - u * y, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, q2 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(a, a + u), f = Math.max(a, a + u), l = Math.min(o, o + s), h = Math.max(o, o + s);
    return n >= c && n <= f && i >= l && i <= h;
  }
  return !1;
}, H2 = {
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
}, Lc = function(t) {
  var r = Qh(Qh({}, H2), t), n = Gi(), i = At(-1), a = B2(i, 2), o = a[0], u = a[1];
  Ya(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.width, l = r.height, h = r.radius, d = r.className, y = r.animationEasing, p = r.animationDuration, v = r.animationBegin, b = r.isAnimationActive, _ = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var g = ee("recharts-rectangle", d);
  return _ ? /* @__PURE__ */ P.createElement(_t, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    duration: p,
    animationEasing: y,
    isActive: _
  }, function(w) {
    var m = w.width, x = w.height, O = w.x, S = w.y;
    return /* @__PURE__ */ P.createElement(_t, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: p,
      isActive: b,
      easing: y
    }, /* @__PURE__ */ P.createElement("path", Ma({}, Q(r, !0), {
      className: g,
      d: ep(O, S, m, x, h),
      ref: n
    })));
  }) : /* @__PURE__ */ P.createElement("path", Ma({}, Q(r, !0), {
    className: g,
    d: ep(s, c, f, l, h)
  }));
};
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ms.apply(this, arguments);
}
var Rc = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = ee("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ it.createElement("circle", ms({}, Q(t, !1), Xi(t), {
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
var G2 = ["x", "y", "top", "left", "width", "height", "className"];
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gs.apply(this, arguments);
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
function V2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tp(Object(r), !0).forEach(function(n) {
      X2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X2(e, t, r) {
  return t = Y2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y2(e) {
  var t = Z2(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function Z2(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J2(e, t) {
  if (e == null) return {};
  var r = Q2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Q2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var eB = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, tB = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, f = t.width, l = f === void 0 ? 0 : f, h = t.height, d = h === void 0 ? 0 : h, y = t.className, p = J2(t, G2), v = V2({
    x: n,
    y: a,
    top: u,
    left: c,
    width: l,
    height: d
  }, p);
  return !L(n) || !L(a) || !L(l) || !L(d) || !L(u) || !L(c) ? null : /* @__PURE__ */ P.createElement("path", gs({}, Q(v, !0), {
    className: ee("recharts-cross", y),
    d: eB(n, a, l, d, u, c)
  }));
}, rB = Xd, nB = rB(Object.getPrototypeOf, Object), iB = nB, aB = Rt, oB = iB, uB = Ft, sB = "[object Object]", cB = Function.prototype, lB = Object.prototype, Iy = cB.toString, fB = lB.hasOwnProperty, hB = Iy.call(Object);
function pB(e) {
  if (!uB(e) || aB(e) != sB)
    return !1;
  var t = oB(e);
  if (t === null)
    return !0;
  var r = fB.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Iy.call(r) == hB;
}
var dB = pB;
const vB = /* @__PURE__ */ ce(dB);
var yB = Rt, mB = Ft, gB = "[object Boolean]";
function bB(e) {
  return e === !0 || e === !1 || mB(e) && yB(e) == gB;
}
var xB = bB;
const wB = /* @__PURE__ */ ce(xB);
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
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
function _B(e, t) {
  return PB(e) || AB(e, t) || SB(e, t) || OB();
}
function OB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SB(e, t) {
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
function AB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function PB(e) {
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
      $B(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $B(e, t, r) {
  return t = jB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jB(e) {
  var t = TB(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function TB(e, t) {
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
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, EB = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, MB = function(t) {
  var r = ip(ip({}, EB), t), n = Gi(), i = At(-1), a = _B(i, 2), o = a[0], u = a[1];
  Ya(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var g = n.current.getTotalLength();
        g && u(g);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, h = r.height, d = r.className, y = r.animationEasing, p = r.animationDuration, v = r.animationBegin, b = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || h !== +h || f === 0 && l === 0 || h === 0)
    return null;
  var _ = ee("recharts-trapezoid", d);
  return b ? /* @__PURE__ */ P.createElement(_t, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: h,
      x: s,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: h,
      x: s,
      y: c
    },
    duration: p,
    animationEasing: y,
    isActive: b
  }, function(g) {
    var w = g.upperWidth, m = g.lowerWidth, x = g.height, O = g.x, S = g.y;
    return /* @__PURE__ */ P.createElement(_t, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: p,
      easing: y
    }, /* @__PURE__ */ P.createElement("path", Ca({}, Q(r, !0), {
      className: _,
      d: ap(O, S, w, m, x),
      ref: n
    })));
  }) : /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", Ca({}, Q(r, !0), {
    className: _,
    d: ap(s, c, f, l, h)
  })));
}, CB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function kB(e, t) {
  if (e == null) return {};
  var r = NB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NB(e, t) {
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
function ka(e) {
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
  return t = DB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DB(e) {
  var t = BB(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function BB(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LB(e, t) {
  return ka(ka({}, t), e);
}
function RB(e, t) {
  return e === "symbols";
}
function up(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement(Lc, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(MB, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(Sy, r);
    case "symbols":
      if (RB(t))
        return /* @__PURE__ */ P.createElement(go, r);
      break;
    default:
      return null;
  }
}
function FB(e) {
  return /* @__PURE__ */ gt(e) ? e.props : e;
}
function bs(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? LB : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, s = kB(e, CB), c;
  if (/* @__PURE__ */ gt(t))
    c = /* @__PURE__ */ Se(t, ka(ka({}, s), FB(t)));
  else if (Z(t))
    c = t(s);
  else if (vB(t) && !wB(t)) {
    var f = i(t, s);
    c = /* @__PURE__ */ P.createElement(up, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = s;
    c = /* @__PURE__ */ P.createElement(up, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ P.createElement(se, {
    className: o
  }, c) : c;
}
function Co(e, t) {
  return t != null && "trapezoids" in e.props;
}
function ko(e, t) {
  return t != null && "sectors" in e.props;
}
function vi(e, t) {
  return t != null && "points" in e.props;
}
function zB(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function WB(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function UB(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function KB(e, t) {
  var r;
  return Co(e, t) ? r = zB : ko(e, t) ? r = WB : vi(e, t) && (r = UB), r;
}
function qB(e, t) {
  var r;
  return Co(e, t) ? r = "trapezoids" : ko(e, t) ? r = "sectors" : vi(e, t) && (r = "points"), r;
}
function HB(e, t) {
  if (Co(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (ko(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return vi(e, t) ? t.payload : {};
}
function GB(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = qB(r, t), a = HB(r, t), o = n.filter(function(s, c) {
    var f = Ei(a, s), l = r.props[i].filter(function(y) {
      var p = KB(r, t);
      return p(y, t);
    }), h = r.props[i].indexOf(l[l.length - 1]), d = c === h;
    return f && d;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var VB = Math.ceil, XB = Math.max;
function YB(e, t, r, n) {
  for (var i = -1, a = XB(VB((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var ZB = YB, JB = dv, sp = 1 / 0, QB = 17976931348623157e292;
function eL(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = JB(e), e === sp || e === -sp) {
    var t = e < 0 ? -1 : 1;
    return t * QB;
  }
  return e === e ? e : 0;
}
var Dy = eL, tL = ZB, rL = wo, lu = Dy;
function nL(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && rL(t, r, n) && (r = n = void 0), t = lu(t), r === void 0 ? (r = t, t = 0) : r = lu(r), n = n === void 0 ? t < r ? 1 : -1 : lu(n), tL(t, r, n, e);
  };
}
var iL = nL, aL = iL, oL = aL(), uL = oL;
const Na = /* @__PURE__ */ ce(uL);
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
  return t = sL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sL(e) {
  var t = cL(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function cL(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lL = ["Webkit", "Moz", "O", "ms"], fL = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = lL.reduce(function(a, o) {
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
function fu(e) {
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
function hL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ry(n.key), n);
  }
}
function pL(e, t, r) {
  return t && hp(e.prototype, t), r && hp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dL(e, t, r) {
  return t = Da(t), vL(e, Ly() ? Reflect.construct(t, r || [], Da(e).constructor) : t.apply(e, r));
}
function vL(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yL(e);
}
function yL(e) {
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
function Da(e) {
  return Da = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Da(e);
}
function mL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xs(e, t);
}
function xs(e, t) {
  return xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, xs(e, t);
}
function Ve(e, t, r) {
  return t = Ry(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ry(e) {
  var t = gL(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function gL(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var bL = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = Nn().domain(Na(0, s)).range([a, a + o - u]), f = c.domain().map(function(l) {
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
    return hL(this, t), n = dL(this, t, [r]), Ve(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Ve(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Ve(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o == null || o({
          endIndex: a,
          startIndex: u
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
  return mL(t, e), pL(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, f = c.length - 1, l = Math.min(i, a), h = Math.max(i, a), d = t.getIndexInRange(o, l), y = t.getIndexInRange(o, h);
      return {
        startIndex: d - d % s,
        endIndex: y === f ? f : y - y % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, s = ke(a[n], u, n);
      return Z(o) ? o(s, n) : s;
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
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, s = this.props, c = s.x, f = s.width, l = s.travellerWidth, h = s.startIndex, d = s.endIndex, y = s.onChange, p = n.pageX - a;
      p > 0 ? p = Math.min(p, c + f - l - u, c + f - l - o) : p < 0 && (p = Math.max(p, c - o, c - u));
      var v = this.getIndex({
        startX: o + p,
        endX: u + p
      });
      (v.startIndex !== h || v.endIndex !== d) && y && y(v), this.setState({
        startX: o + p,
        endX: u + p,
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
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, s = i.startX, c = this.state[o], f = this.props, l = f.x, h = f.width, d = f.travellerWidth, y = f.onChange, p = f.gap, v = f.data, b = {
        startX: this.state.startX,
        endX: this.state.endX
      }, _ = n.pageX - a;
      _ > 0 ? _ = Math.min(_, l + h - d - c) : _ < 0 && (_ = Math.max(_, l - c)), b[o] = c + _;
      var g = this.getIndex(b), w = g.startIndex, m = g.endIndex, x = function() {
        var S = v.length - 1;
        return o === "startX" && (u > s ? w % p === 0 : m % p === 0) || u < s && m === S || o === "endX" && (u > s ? m % p === 0 : w % p === 0) || u > s && m === S;
      };
      this.setState(Ve(Ve({}, o, c + _), "brushMoveStartX", n.pageX), function() {
        y && x() && y(g);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, f = this.state[i], l = u.indexOf(f);
      if (l !== -1) {
        var h = l + n;
        if (!(h === -1 || h >= u.length)) {
          var d = u[h];
          i === "startX" && d >= c || i === "endX" && d <= s || this.setState(Ve({}, i, d), function() {
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
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ P.createElement("rect", {
        stroke: c,
        fill: s,
        x: i,
        y: a,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.data, c = n.children, f = n.padding, l = lr.only(c);
      return l ? /* @__PURE__ */ P.cloneElement(l, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, u = this, s = this.props, c = s.y, f = s.travellerWidth, l = s.height, h = s.traveller, d = s.ariaLabel, y = s.data, p = s.startIndex, v = s.endIndex, b = Math.max(n, this.props.x), _ = fu(fu({}, Q(this.props, !1)), {}, {
        x: b,
        y: c,
        width: f,
        height: l
      }), g = d || "Min value: ".concat((a = y[p]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[v]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ P.createElement(se, {
        tabIndex: 0,
        role: "slider",
        "aria-label": g,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), u.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
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
      var a = this.props, o = a.y, u = a.height, s = a.stroke, c = a.travellerWidth, f = Math.min(n, i) + c, l = Math.max(Math.abs(i - n) - c, 0);
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
        fill: s,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, h = f.endX, d = 5, y = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ P.createElement(se, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ P.createElement(ca, Ia({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, h) - d,
        y: o + u / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ P.createElement(ca, Ia({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, h) + s + d,
        y: o + u / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, s = n.y, c = n.width, f = n.height, l = n.alwaysShowText, h = this.state, d = h.startX, y = h.endX, p = h.isTextActive, v = h.isSlideMoving, b = h.isTravellerMoving, _ = h.isTravellerFocused;
      if (!i || !i.length || !L(u) || !L(s) || !L(c) || !L(f) || c <= 0 || f <= 0)
        return null;
      var g = ee("recharts-brush", a), w = P.Children.count(o) === 1, m = fL("userSelect", "none");
      return /* @__PURE__ */ P.createElement(se, {
        className: g,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), w && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (p || v || b || _ || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: s,
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
      var a = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (a !== i.prevData || c !== i.prevUpdateId)
        return fu({
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, a && a.length ? bL({
          data: a,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || s !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - s]);
        var h = i.scale.domain().map(function(d) {
          return i.scale(d);
        });
        return {
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
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
      for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
        var s = Math.floor((o + u) / 2);
        n[s] > i ? u = s : o = s;
      }
      return i >= n[u] ? u : o;
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
var xL = lc;
function wL(e, t) {
  var r;
  return xL(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var _L = wL, OL = zd, SL = Xt, AL = _L, PL = qe, $L = wo;
function jL(e, t, r) {
  var n = PL(e) ? OL : AL;
  return r && $L(e, t, r) && (t = void 0), n(e, SL(t));
}
var TL = jL;
const EL = /* @__PURE__ */ ce(TL);
var xt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, dp = cv;
function ML(e, t, r) {
  t == "__proto__" && dp ? dp(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var CL = ML, kL = CL, NL = uv, IL = Xt;
function DL(e, t) {
  var r = {};
  return t = IL(t), NL(e, function(n, i, a) {
    kL(r, i, t(n, i, a));
  }), r;
}
var BL = DL;
const LL = /* @__PURE__ */ ce(BL);
function RL(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var FL = RL, zL = lc;
function WL(e, t) {
  var r = !0;
  return zL(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var UL = WL, KL = FL, qL = UL, HL = Xt, GL = qe, VL = wo;
function XL(e, t, r) {
  var n = GL(e) ? KL : qL;
  return r && VL(e, t, r) && (t = void 0), n(e, HL(t));
}
var YL = XL;
const Fy = /* @__PURE__ */ ce(YL);
var ZL = ["x", "y"];
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ws.apply(this, arguments);
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
      JL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JL(e, t, r) {
  return t = QL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QL(e) {
  var t = eR(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function eR(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tR(e, t) {
  if (e == null) return {};
  var r = rR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function nR(e, t) {
  var r = e.x, n = e.y, i = tR(e, ZL), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || i.height), f = parseInt(c, 10), l = "".concat(t.width || i.width), h = parseInt(l, 10);
  return Mn(Mn(Mn(Mn(Mn({}, t), i), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: f,
    width: h,
    name: t.name,
    radius: t.radius
  });
}
function yp(e) {
  return /* @__PURE__ */ P.createElement(bs, ws({
    shapeType: "rectangle",
    propTransformer: nR,
    activeClassName: "recharts-active-bar"
  }, e));
}
var iR = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = L(n) || xx(n);
    return a ? t(n, i) : (a || mr(), r);
  };
}, aR = ["value", "background"], zy;
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
function oR(e, t) {
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
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ba.apply(this, arguments);
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
function sR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Uy(n.key), n);
  }
}
function cR(e, t, r) {
  return t && gp(e.prototype, t), r && gp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lR(e, t, r) {
  return t = La(t), fR(e, Wy() ? Reflect.construct(t, r || [], La(e).constructor) : t.apply(e, r));
}
function fR(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hR(e);
}
function hR(e) {
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
function La(e) {
  return La = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, La(e);
}
function pR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _s(e, t);
}
function _s(e, t) {
  return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _s(e, t);
}
function qt(e, t, r) {
  return t = Uy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uy(e) {
  var t = dR(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function dR(e, t) {
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
    sR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = lR(this, t, [].concat(i)), qt(r, "state", {
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
  return pR(t, e), cR(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.dataKey, s = a.activeIndex, c = a.activeBar, f = Q(this.props, !1);
      return n && n.map(function(l, h) {
        var d = h === s, y = d ? c : o, p = me(me(me({}, f), l), {}, {
          isActive: d,
          option: y,
          index: h,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ P.createElement(se, Ba({
          className: "recharts-bar-rectangle"
        }, Fn(i.props, l, h), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(l == null ? void 0 : l.x, "-").concat(l == null ? void 0 : l.y, "-").concat(l == null ? void 0 : l.value, "-").concat(h)
        }), /* @__PURE__ */ P.createElement(yp, p));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, f = i.animationEasing, l = i.animationId, h = this.state.prevData;
      return /* @__PURE__ */ P.createElement(_t, {
        begin: s,
        duration: c,
        isActive: u,
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
        var y = d.t, p = a.map(function(v, b) {
          var _ = h && h[b];
          if (_) {
            var g = Re(_.x, v.x), w = Re(_.y, v.y), m = Re(_.width, v.width), x = Re(_.height, v.height);
            return me(me({}, v), {}, {
              x: g(y),
              y: w(y),
              width: m(y),
              height: x(y)
            });
          }
          if (o === "horizontal") {
            var O = Re(0, v.height), S = O(y);
            return me(me({}, v), {}, {
              y: v.y + v.height - S,
              height: S
            });
          }
          var $ = Re(0, v.width), M = $(y);
          return me(me({}, v), {}, {
            width: M
          });
        });
        return /* @__PURE__ */ P.createElement(se, null, n.renderRectanglesStatically(p));
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
      var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, s = Q(this.props.background, !1);
      return a.map(function(c, f) {
        c.value;
        var l = c.background, h = oR(c, aR);
        if (!l)
          return null;
        var d = me(me(me(me(me({}, h), {}, {
          fill: "#eee"
        }, l), s), Fn(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ P.createElement(yp, Ba({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === u
        }, d));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, u = a.xAxis, s = a.yAxis, c = a.layout, f = a.children, l = Ke(f, bn);
      if (!l)
        return null;
      var h = c === "vertical" ? o[0].height / 2 : o[0].width / 2, d = function(v, b) {
        var _ = Array.isArray(v.value) ? v.value[1] : v.value;
        return {
          x: v.x,
          y: v.y,
          value: _,
          errorVal: ke(v, b)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ P.createElement(se, y, l.map(function(p) {
        return /* @__PURE__ */ P.cloneElement(p, {
          key: "error-bar-".concat(i, "-").concat(p.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: h,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, f = n.top, l = n.width, h = n.height, d = n.isAnimationActive, y = n.background, p = n.id;
      if (i || !a || !a.length)
        return null;
      var v = this.state.isAnimationFinished, b = ee("recharts-bar", o), _ = u && u.allowDataOverflow, g = s && s.allowDataOverflow, w = _ || g, m = X(p) ? this.id : p;
      return /* @__PURE__ */ P.createElement(se, {
        className: b
      }, _ || g ? /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: _ ? c : c - l / 2,
        y: g ? f : f - h / 2,
        width: _ ? l : l * 2,
        height: g ? h : h * 2
      }))) : null, /* @__PURE__ */ P.createElement(se, {
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
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, u = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, h = e.offset, d = KN(n, r);
  if (!d)
    return null;
  var y = t.layout, p = r.type.defaultProps, v = p !== void 0 ? me(me({}, p), r.props) : r.props, b = v.dataKey, _ = v.children, g = v.minPointSize, w = y === "horizontal" ? o : a, m = c ? w.scale.domain() : null, x = JN({
    numericAxis: w
  }), O = Ke(_, Ai), S = l.map(function($, M) {
    var j, T, N, k, C, I;
    c ? j = qN(c[f + M], m) : (j = ke($, b), Array.isArray(j) || (j = [x, j]));
    var D = iR(g, zy.defaultProps.minPointSize)(j[1], M);
    if (y === "horizontal") {
      var R, F = [o.scale(j[0]), o.scale(j[1])], q = F[0], G = F[1];
      T = mh({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: d.offset,
        entry: $,
        index: M
      }), N = (R = G ?? q) !== null && R !== void 0 ? R : void 0, k = d.size;
      var W = q - G;
      if (C = Number.isNaN(W) ? 0 : W, I = {
        x: T,
        y: o.y,
        width: k,
        height: o.height
      }, Math.abs(D) > 0 && Math.abs(C) < Math.abs(D)) {
        var V = pt(C || D) * (Math.abs(D) - Math.abs(C));
        N -= V, C += V;
      }
    } else {
      var le = [a.scale(j[0]), a.scale(j[1])], ye = le[0], He = le[1];
      if (T = ye, N = mh({
        axis: o,
        ticks: s,
        bandSize: i,
        offset: d.offset,
        entry: $,
        index: M
      }), k = He - ye, C = d.size, I = {
        x: a.x,
        y: N,
        width: a.width,
        height: C
      }, Math.abs(D) > 0 && Math.abs(k) < Math.abs(D)) {
        var Qt = pt(k || D) * (Math.abs(D) - Math.abs(k));
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
      background: I
    }, O && O[M] && O[M].props), {}, {
      tooltipPayload: [wy(r, $)],
      tooltipPosition: {
        x: T + k / 2,
        y: N + C / 2
      }
    });
  });
  return me({
    data: S,
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
function vR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ky(n.key), n);
  }
}
function yR(e, t, r) {
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
      No(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function No(e, t, r) {
  return t = Ky(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ky(e) {
  var t = mR(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function mR(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Fc = function(t, r, n, i, a) {
  var o = t.width, u = t.height, s = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, h = !!Xe(c, Te);
  return f.reduce(function(d, y) {
    var p = r[y], v = p.orientation, b = p.domain, _ = p.padding, g = _ === void 0 ? {} : _, w = p.mirror, m = p.reversed, x = "".concat(v).concat(w ? "Mirror" : ""), O, S, $, M, j;
    if (p.type === "number" && (p.padding === "gap" || p.padding === "no-gap")) {
      var T = b[1] - b[0], N = 1 / 0, k = p.categoricalDomain.sort(Sx);
      if (k.forEach(function(le, ye) {
        ye > 0 && (N = Math.min((le || 0) - (k[ye - 1] || 0), N));
      }), Number.isFinite(N)) {
        var C = N / T, I = p.layout === "vertical" ? n.height : n.width;
        if (p.padding === "gap" && (O = C * I / 2), p.padding === "no-gap") {
          var D = vr(t.barCategoryGap, C * I), R = C * I / 2;
          O = R - D - (R - D) / I * D;
        }
      }
    }
    i === "xAxis" ? S = [n.left + (g.left || 0) + (O || 0), n.left + n.width - (g.right || 0) - (O || 0)] : i === "yAxis" ? S = s === "horizontal" ? [n.top + n.height - (g.bottom || 0), n.top + (g.top || 0)] : [n.top + (g.top || 0) + (O || 0), n.top + n.height - (g.bottom || 0) - (O || 0)] : S = p.range, m && (S = [S[1], S[0]]);
    var F = WN(p, a, h), q = F.scale, G = F.realScaleType;
    q.domain(b).range(S), UN(q);
    var W = ZN(q, lt(lt({}, p), {}, {
      realScaleType: G
    }));
    i === "xAxis" ? (j = v === "top" && !w || v === "bottom" && w, $ = n.left, M = l[x] - j * p.height) : i === "yAxis" && (j = v === "left" && !w || v === "right" && w, $ = l[x] - j * p.width, M = n.top);
    var V = lt(lt(lt({}, p), W), {}, {
      realScaleType: G,
      x: $,
      y: M,
      scale: q,
      width: i === "xAxis" ? n.width : p.width,
      height: i === "yAxis" ? n.height : p.height
    });
    return V.bandSize = Sa(V, W), !p.hide && i === "xAxis" ? l[x] += (j ? -1 : 1) * V.height : p.hide || (l[x] += (j ? -1 : 1) * V.width), lt(lt({}, d), {}, No({}, y, V));
  }, {});
}, qy = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, gR = function(t) {
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
    vR(this, e), this.scale = t;
  }
  return yR(e, [{
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
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
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
No(Hy, "EPS", 1e-4);
var zc = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return lt(lt({}, n), {}, No({}, i, Hy.create(t[i])));
  }, {});
  return lt(lt({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return LL(i, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
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
function bR(e) {
  return (e % 180 + 180) % 180;
}
var xR = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = bR(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, wR = Xt, _R = Si, OR = bo;
function SR(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!_R(t)) {
      var a = wR(r);
      t = OR(t), r = function(u) {
        return a(i[u], u, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var AR = SR, PR = Dy;
function $R(e) {
  var t = PR(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var jR = $R, TR = tv, ER = Xt, MR = jR, CR = Math.max;
function kR(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : MR(r);
  return i < 0 && (i = CR(n + i, 0)), TR(e, ER(t), i);
}
var NR = kR, IR = AR, DR = NR, BR = IR(DR), LR = BR;
const RR = /* @__PURE__ */ ce(LR);
var FR = P0(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), Wc = /* @__PURE__ */ br(void 0), Uc = /* @__PURE__ */ br(void 0), Gy = /* @__PURE__ */ br(void 0), Vy = /* @__PURE__ */ br({}), Xy = /* @__PURE__ */ br(void 0), Yy = /* @__PURE__ */ br(0), Zy = /* @__PURE__ */ br(0), wp = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, s = t.width, c = t.height, f = FR(a);
  return /* @__PURE__ */ P.createElement(Wc.Provider, {
    value: n
  }, /* @__PURE__ */ P.createElement(Uc.Provider, {
    value: i
  }, /* @__PURE__ */ P.createElement(Vy.Provider, {
    value: a
  }, /* @__PURE__ */ P.createElement(Gy.Provider, {
    value: f
  }, /* @__PURE__ */ P.createElement(Xy.Provider, {
    value: o
  }, /* @__PURE__ */ P.createElement(Yy.Provider, {
    value: c
  }, /* @__PURE__ */ P.createElement(Zy.Provider, {
    value: s
  }, u)))))));
}, zR = function() {
  return Lt(Xy);
}, Jy = function(t) {
  var r = Lt(Wc);
  r == null && mr();
  var n = r[t];
  return n == null && mr(), n;
}, WR = function() {
  var t = Lt(Wc);
  return Kt(t);
}, UR = function() {
  var t = Lt(Uc), r = RR(t, function(n) {
    return Fy(n.domain, Number.isFinite);
  });
  return r || Kt(t);
}, Qy = function(t) {
  var r = Lt(Uc);
  r == null && mr();
  var n = r[t];
  return n == null && mr(), n;
}, KR = function() {
  var t = Lt(Gy);
  return t;
}, qR = function() {
  return Lt(Vy);
}, Kc = function() {
  return Lt(Zy);
}, qc = function() {
  return Lt(Yy);
};
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function HR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tm(n.key), n);
  }
}
function VR(e, t, r) {
  return t && GR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XR(e, t, r) {
  return t = Ra(t), YR(e, em() ? Reflect.construct(t, r || [], Ra(e).constructor) : t.apply(e, r));
}
function YR(e, t) {
  if (t && (Xr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ZR(e);
}
function ZR(e) {
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
function Ra(e) {
  return Ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ra(e);
}
function JR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Os(e, t);
}
function Os(e, t) {
  return Os = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Os(e, t);
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
      Hc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hc(e, t, r) {
  return t = tm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tm(e) {
  var t = QR(e, "string");
  return Xr(t) == "symbol" ? t : t + "";
}
function QR(e, t) {
  if (Xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function e3(e, t) {
  return i3(e) || n3(e, t) || r3(e, t) || t3();
}
function t3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r3(e, t) {
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
function n3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function i3(e) {
  if (Array.isArray(e)) return e;
}
function Ss() {
  return Ss = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ss.apply(this, arguments);
}
var a3 = function(t, r) {
  var n;
  return /* @__PURE__ */ P.isValidElement(t) ? n = /* @__PURE__ */ P.cloneElement(t, r) : Z(t) ? n = t(r) : n = /* @__PURE__ */ P.createElement("line", Ss({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, o3 = function(t, r, n, i, a, o, u, s, c) {
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
    return s === "left" ? v.reverse() : v;
  }
  if (r) {
    var b = c.x, _ = t.x.apply(b, {
      position: o
    });
    if (xt(c, "discard") && !t.x.isInRange(_))
      return null;
    var g = [{
      x: _,
      y: l + d
    }, {
      x: _,
      y: l
    }];
    return u === "top" ? g.reverse() : g;
  }
  if (i) {
    var w = c.segment, m = w.map(function(x) {
      return t.apply(x, {
        position: o
      });
    });
    return xt(c, "discard") && EL(m, function(x) {
      return !t.isInRange(x);
    }) ? null : m;
  }
  return null;
};
function u3(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, s = e.alwaysShow, c = zR(), f = Jy(i), l = Qy(a), h = KR();
  if (!c || !h)
    return null;
  Mt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var d = zc({
    x: f.scale,
    y: l.scale
  }), y = Ae(t), p = Ae(r), v = n && n.length === 2, b = o3(d, y, p, v, h, e.position, f.orientation, l.orientation, e);
  if (!b)
    return null;
  var _ = e3(b, 2), g = _[0], w = g.x, m = g.y, x = _[1], O = x.x, S = x.y, $ = xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, M = Op(Op({
    clipPath: $
  }, Q(e, !0)), {}, {
    x1: w,
    y1: m,
    x2: O,
    y2: S
  });
  return /* @__PURE__ */ P.createElement(se, {
    className: ee("recharts-reference-line", u)
  }, a3(o, M), Ie.renderCallByParent(e, gR({
    x1: w,
    y1: m,
    x2: O,
    y2: S
  })));
}
var Gc = /* @__PURE__ */ function(e) {
  function t() {
    return HR(this, t), XR(this, t, arguments);
  }
  return JR(t, e), VR(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ P.createElement(u3, this.props);
    }
  }]);
}(P.Component);
Hc(Gc, "displayName", "ReferenceLine");
Hc(Gc, "defaultProps", {
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
function As() {
  return As = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, As.apply(this, arguments);
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
function s3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nm(n.key), n);
  }
}
function l3(e, t, r) {
  return t && c3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function f3(e, t, r) {
  return t = Fa(t), h3(e, rm() ? Reflect.construct(t, r || [], Fa(e).constructor) : t.apply(e, r));
}
function h3(e, t) {
  if (t && (Yr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return p3(e);
}
function p3(e) {
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
function Fa(e) {
  return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fa(e);
}
function d3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ps(e, t);
}
function Ps(e, t) {
  return Ps = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ps(e, t);
}
function Io(e, t, r) {
  return t = nm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nm(e) {
  var t = v3(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
function v3(e, t) {
  if (Yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var y3 = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = zc({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return xt(t, "discard") && !o.isInRange(u) ? null : u;
}, Do = /* @__PURE__ */ function(e) {
  function t() {
    return s3(this, t), f3(this, t, arguments);
  }
  return d3(t, e), l3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = Ae(i), f = Ae(a);
      if (Mt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = y3(this.props);
      if (!l)
        return null;
      var h = l.x, d = l.y, y = this.props, p = y.shape, v = y.className, b = xt(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, _ = Pp(Pp({
        clipPath: b
      }, Q(this.props, !0)), {}, {
        cx: h,
        cy: d
      });
      return /* @__PURE__ */ P.createElement(se, {
        className: ee("recharts-reference-dot", v)
      }, t.renderDot(p, _), Ie.renderCallByParent(this.props, {
        x: h - o,
        y: d - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(P.Component);
Io(Do, "displayName", "ReferenceDot");
Io(Do, "defaultProps", {
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
Io(Do, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ P.isValidElement(e) ? r = /* @__PURE__ */ P.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ P.createElement(Rc, As({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function $s() {
  return $s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $s.apply(this, arguments);
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
      Bo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function g3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, am(n.key), n);
  }
}
function b3(e, t, r) {
  return t && g3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function x3(e, t, r) {
  return t = za(t), w3(e, im() ? Reflect.construct(t, r || [], za(e).constructor) : t.apply(e, r));
}
function w3(e, t) {
  if (t && (Zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _3(e);
}
function _3(e) {
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
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, za(e);
}
function O3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && js(e, t);
}
function js(e, t) {
  return js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, js(e, t);
}
function Bo(e, t, r) {
  return t = am(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function am(e) {
  var t = S3(e, "string");
  return Zr(t) == "symbol" ? t : t + "";
}
function S3(e, t) {
  if (Zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var A3 = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, s = a.y1, c = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l) return null;
  var h = zc({
    x: f.scale,
    y: l.scale
  }), d = {
    x: t ? h.x.apply(o, {
      position: "start"
    }) : h.x.rangeMin,
    y: n ? h.y.apply(s, {
      position: "start"
    }) : h.y.rangeMin
  }, y = {
    x: r ? h.x.apply(u, {
      position: "end"
    }) : h.x.rangeMax,
    y: i ? h.y.apply(c, {
      position: "end"
    }) : h.y.rangeMax
  };
  return xt(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : qy(d, y);
}, Lo = /* @__PURE__ */ function(e) {
  function t() {
    return m3(this, t), x3(this, t, arguments);
  }
  return O3(t, e), b3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, f = n.clipPathId;
      Mt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = Ae(i), h = Ae(a), d = Ae(o), y = Ae(u), p = this.props.shape;
      if (!l && !h && !d && !y && !p)
        return null;
      var v = A3(l, h, d, y, this.props);
      if (!v && !p)
        return null;
      var b = xt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ P.createElement(se, {
        className: ee("recharts-reference-area", s)
      }, t.renderRect(p, jp(jp({
        clipPath: b
      }, Q(this.props, !0)), v)), Ie.renderCallByParent(this.props, v));
    }
  }]);
}(P.Component);
Bo(Lo, "displayName", "ReferenceArea");
Bo(Lo, "defaultProps", {
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
Bo(Lo, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ P.isValidElement(e) ? r = /* @__PURE__ */ P.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ P.createElement(Lc, $s({}, t, {
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
function P3(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return xR(n, r);
}
function $3(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, u = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function Wa(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function j3(e, t) {
  return om(e, t + 1);
}
function T3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, u = t.end, s = 0, c = 1, f = o, l = function() {
    var y = n == null ? void 0 : n[s];
    if (y === void 0)
      return {
        v: om(n, c)
      };
    var p = s, v, b = function() {
      return v === void 0 && (v = r(y, p)), v;
    }, _ = y.coordinate, g = s === 0 || Wa(e, _, b, f, u);
    g || (s = 0, f = o, c += 1), g && (f = _ + e * (b() / 2 + i), s += c);
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
      E3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E3(e, t, r) {
  return t = M3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M3(e) {
  var t = C3(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function C3(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, u = t.start, s = t.end, c = function(h) {
    var d = a[h], y, p = function() {
      return y === void 0 && (y = r(d, h)), y;
    };
    if (h === o - 1) {
      var v = e * (d.coordinate + e * p() / 2 - s);
      a[h] = d = Ne(Ne({}, d), {}, {
        tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
      });
    } else
      a[h] = d = Ne(Ne({}, d), {}, {
        tickCoord: d.coordinate
      });
    var b = Wa(e, d.tickCoord, p, u, s);
    b && (s = d.tickCoord - e * (p() / 2 + i), a[h] = Ne(Ne({}, d), {}, {
      isShow: !0
    }));
  }, f = o - 1; f >= 0; f--)
    c(f);
  return a;
}
function N3(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, s = t.start, c = t.end;
  if (a) {
    var f = n[u - 1], l = r(f, u - 1), h = e * (f.coordinate + e * l / 2 - c);
    o[u - 1] = f = Ne(Ne({}, f), {}, {
      tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate
    });
    var d = Wa(e, f.tickCoord, function() {
      return l;
    }, s, c);
    d && (c = f.tickCoord - e * (l / 2 + i), o[u - 1] = Ne(Ne({}, f), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? u - 1 : u, p = function(_) {
    var g = o[_], w, m = function() {
      return w === void 0 && (w = r(g, _)), w;
    };
    if (_ === 0) {
      var x = e * (g.coordinate - e * m() / 2 - s);
      o[_] = g = Ne(Ne({}, g), {}, {
        tickCoord: x < 0 ? g.coordinate - x * e : g.coordinate
      });
    } else
      o[_] = g = Ne(Ne({}, g), {}, {
        tickCoord: g.coordinate
      });
    var O = Wa(e, g.tickCoord, m, s, c);
    O && (s = g.tickCoord + e * (m() / 2 + i), o[_] = Ne(Ne({}, g), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    p(v);
  return o;
}
function Vc(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, u = e.orientation, s = e.interval, c = e.tickFormatter, f = e.unit, l = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (L(s) || wr.isSsr)
    return j3(i, typeof s == "number" && L(s) ? s : 0);
  var h = [], d = u === "top" || u === "bottom" ? "width" : "height", y = f && d === "width" ? kn(f, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, p = function(g, w) {
    var m = Z(c) ? c(g.value, w) : g.value;
    return d === "width" ? P3(kn(m, {
      fontSize: t,
      letterSpacing: r
    }), y, l) : kn(m, {
      fontSize: t,
      letterSpacing: r
    })[d];
  }, v = i.length >= 2 ? pt(i[1].coordinate - i[0].coordinate) : 1, b = $3(a, v, d);
  return s === "equidistantPreserveStart" ? T3(v, b, p, i, o) : (s === "preserveStart" || s === "preserveStartEnd" ? h = N3(v, b, p, i, o, s === "preserveStartEnd") : h = k3(v, b, p, i, o), h.filter(function(_) {
    return _.isShow;
  }));
}
var I3 = ["viewBox"], D3 = ["viewBox"], B3 = ["ticks"];
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
      Xc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ep(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hu(e, t) {
  if (e == null) return {};
  var r = L3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function L3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function R3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sm(n.key), n);
  }
}
function F3(e, t, r) {
  return t && Mp(e.prototype, t), r && Mp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z3(e, t, r) {
  return t = Ua(t), W3(e, um() ? Reflect.construct(t, r || [], Ua(e).constructor) : t.apply(e, r));
}
function W3(e, t) {
  if (t && (Jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U3(e);
}
function U3(e) {
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
function Ua(e) {
  return Ua = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ua(e);
}
function K3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ts(e, t);
}
function Ts(e, t) {
  return Ts = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ts(e, t);
}
function Xc(e, t, r) {
  return t = sm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sm(e) {
  var t = q3(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function q3(e, t) {
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
    return R3(this, t), n = z3(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return K3(t, e), F3(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = hu(n, I3), u = this.props, s = u.viewBox, c = hu(u, D3);
      return !kr(a, s) || !kr(o, c) || !kr(i, this.state);
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
      var i = this.props, a = i.x, o = i.y, u = i.width, s = i.height, c = i.orientation, f = i.tickSize, l = i.mirror, h = i.tickMargin, d, y, p, v, b, _, g = l ? -1 : 1, w = n.tickSize || f, m = L(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          d = y = n.coordinate, v = o + +!l * s, p = v - g * w, _ = p - g * h, b = m;
          break;
        case "left":
          p = v = n.coordinate, y = a + +!l * u, d = y - g * w, b = d - g * h, _ = m;
          break;
        case "right":
          p = v = n.coordinate, y = a + +l * u, d = y + g * w, b = d + g * h, _ = m;
          break;
        default:
          d = y = n.coordinate, v = o + +l * s, p = v + g * w, _ = p + g * h, b = m;
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
          x: b,
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
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.orientation, c = n.mirror, f = n.axisLine, l = _e(_e(_e({}, Q(this.props, !1)), Q(f, !1)), {}, {
        fill: "none"
      });
      if (s === "top" || s === "bottom") {
        var h = +(s === "top" && !c || s === "bottom" && c);
        l = _e(_e({}, l), {}, {
          x1: i,
          y1: a + h * u,
          x2: i + o,
          y2: a + h * u
        });
      } else {
        var d = +(s === "left" && !c || s === "right" && c);
        l = _e(_e({}, l), {}, {
          x1: i + d * o,
          y1: a,
          x2: i + d * o,
          y2: a + u
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
        var o = this, u = this.props, s = u.tickLine, c = u.stroke, f = u.tick, l = u.tickFormatter, h = u.unit, d = Vc(_e(_e({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), p = this.getTickVerticalAnchor(), v = Q(this.props, !1), b = Q(f, !1), _ = _e(_e({}, v), {}, {
          fill: "none"
        }, Q(s, !1)), g = d.map(function(w, m) {
          var x = o.getTickLineCoord(w), O = x.line, S = x.tick, $ = _e(_e(_e(_e({
            textAnchor: y,
            verticalAnchor: p
          }, v), {}, {
            stroke: "none",
            fill: c
          }, b), S), {}, {
            index: m,
            payload: w,
            visibleTicksCount: d.length,
            tickFormatter: l
          });
          return /* @__PURE__ */ P.createElement(se, Mr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(w.value, "-").concat(w.coordinate, "-").concat(w.tickCoord)
          }, Fn(o.props, w, m)), s && /* @__PURE__ */ P.createElement("line", Mr({}, _, O, {
            className: ee("recharts-cartesian-axis-tick-line", at(s, "className"))
          })), f && t.renderTickItem(f, $, "".concat(Z(l) ? l(w.value, m) : w.value).concat(h || "")));
        });
        return /* @__PURE__ */ P.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, g);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, u = i.height, s = i.ticksGenerator, c = i.className, f = i.hide;
      if (f)
        return null;
      var l = this.props, h = l.ticks, d = hu(l, B3), y = h;
      return Z(s) && (y = h && h.length > 0 ? s(this.props) : s(d)), o <= 0 || u <= 0 || !y || !y.length ? null : /* @__PURE__ */ P.createElement(se, {
        className: ee("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Ie.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o, u = ee(i.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ P.isValidElement(n) ? o = /* @__PURE__ */ P.cloneElement(n, _e(_e({}, i), {}, {
        className: u
      })) : Z(n) ? o = n(_e(_e({}, i), {}, {
        className: u
      })) : o = /* @__PURE__ */ P.createElement(ca, Mr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(Zp);
Xc(xn, "displayName", "CartesianAxis");
Xc(xn, "defaultProps", {
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
var H3 = ["x1", "y1", "x2", "y2", "key"], G3 = ["offset"];
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
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cp(Object(r), !0).forEach(function(n) {
      V3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V3(e, t, r) {
  return t = X3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X3(e) {
  var t = Y3(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function Y3(e, t) {
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
  var r = Z3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var J3 = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, u = t.height, s = t.ry;
  return /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: a,
    ry: s,
    width: o,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function cm(e, t) {
  var r;
  if (/* @__PURE__ */ P.isValidElement(e))
    r = /* @__PURE__ */ P.cloneElement(e, t);
  else if (Z(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, u = t.key, s = kp(t, H3), c = Q(s, !1);
    c.offset;
    var f = kp(c, G3);
    r = /* @__PURE__ */ P.createElement("line", cr({}, f, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function Q3(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, s) {
    var c = De(De({}, e), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(s),
      index: s
    });
    return cm(i, c);
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function eF(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, s) {
    var c = De(De({}, e), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(s),
      index: s
    });
    return cm(i, c);
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function tF(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, u = e.horizontalPoints, s = e.horizontal, c = s === void 0 ? !0 : s;
  if (!c || !t || !t.length)
    return null;
  var f = u.map(function(h) {
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
function rF(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, u = e.width, s = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var f = c.map(function(h) {
    return Math.round(h + a - a);
  }).sort(function(h, d) {
    return h - d;
  });
  a !== f[0] && f.unshift(0);
  var l = f.map(function(h, d) {
    var y = !f[d + 1], p = y ? a + u - h : f[d + 1] - h;
    if (p <= 0)
      return null;
    var v = d % n.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(d),
      x: h,
      y: o,
      width: p,
      height: s,
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
var nF = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return by(Vc(De(De(De({}, xn.defaultProps), n), {}, {
    ticks: Tt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, iF = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return by(Vc(De(De(De({}, xn.defaultProps), n), {}, {
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
  var t, r, n, i, a, o, u = Kc(), s = qc(), c = qR(), f = De(De({}, e), {}, {
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
  }), l = f.x, h = f.y, d = f.width, y = f.height, p = f.syncWithTicks, v = f.horizontalValues, b = f.verticalValues, _ = WR(), g = UR();
  if (!L(d) || d <= 0 || !L(y) || y <= 0 || !L(l) || l !== +l || !L(h) || h !== +h)
    return null;
  var w = f.verticalCoordinatesGenerator || nF, m = f.horizontalCoordinatesGenerator || iF, x = f.horizontalPoints, O = f.verticalPoints;
  if ((!x || !x.length) && Z(m)) {
    var S = v && v.length, $ = m({
      yAxis: g ? De(De({}, g), {}, {
        ticks: S ? v : g.ticks
      }) : void 0,
      width: u,
      height: s,
      offset: c
    }, S ? !0 : p);
    Mt(Array.isArray($), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(gr($), "]")), Array.isArray($) && (x = $);
  }
  if ((!O || !O.length) && Z(w)) {
    var M = b && b.length, j = w({
      xAxis: _ ? De(De({}, _), {}, {
        ticks: M ? b : _.ticks
      }) : void 0,
      width: u,
      height: s,
      offset: c
    }, M ? !0 : p);
    Mt(Array.isArray(j), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(gr(j), "]")), Array.isArray(j) && (O = j);
  }
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ P.createElement(J3, {
    fill: f.fill,
    fillOpacity: f.fillOpacity,
    x: f.x,
    y: f.y,
    width: f.width,
    height: f.height,
    ry: f.ry
  }), /* @__PURE__ */ P.createElement(Q3, cr({}, f, {
    offset: c,
    horizontalPoints: x,
    xAxis: _,
    yAxis: g
  })), /* @__PURE__ */ P.createElement(eF, cr({}, f, {
    offset: c,
    verticalPoints: O,
    xAxis: _,
    yAxis: g
  })), /* @__PURE__ */ P.createElement(tF, cr({}, f, {
    horizontalPoints: x
  })), /* @__PURE__ */ P.createElement(rF, cr({}, f, {
    verticalPoints: O
  })));
}
nt.displayName = "CartesianGrid";
var aF = ["type", "layout", "connectNulls", "ref"], oF = ["key"];
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
  return fF(e) || lF(e) || cF(e) || sF();
}
function sF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cF(e, t) {
  if (e) {
    if (typeof e == "string") return Es(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Es(e, t);
  }
}
function lF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fF(e) {
  if (Array.isArray(e)) return Es(e);
}
function Es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fm(n.key), n);
  }
}
function pF(e, t, r) {
  return t && Dp(e.prototype, t), r && Dp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dF(e, t, r) {
  return t = Ka(t), vF(e, lm() ? Reflect.construct(t, r || [], Ka(e).constructor) : t.apply(e, r));
}
function vF(e, t) {
  if (t && (Qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yF(e);
}
function yF(e) {
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
function Ka(e) {
  return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ka(e);
}
function mF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ms(e, t);
}
function Ms(e, t) {
  return Ms = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ms(e, t);
}
function ft(e, t, r) {
  return t = fm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fm(e) {
  var t = gF(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function gF(e, t) {
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
    hF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = dF(this, t, [].concat(i)), ft(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), ft(r, "generateSimpleStrokeDasharray", function(o, u) {
      return "".concat(u, "px ").concat(o - u, "px");
    }), ft(r, "getStrokeDasharray", function(o, u, s) {
      var c = s.reduce(function(b, _) {
        return b + _;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(u, o);
      for (var f = Math.floor(o / c), l = o % c, h = u - o, d = [], y = 0, p = 0; y < s.length; p += s[y], ++y)
        if (p + s[y] > l) {
          d = [].concat(Tr(s.slice(0, y)), [l - p]);
          break;
        }
      var v = d.length % 2 === 0 ? [0, h] : [h];
      return [].concat(Tr(t.repeat(s, f)), Tr(d), v).map(function(b) {
        return "".concat(b, "px");
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
  return mF(t, e), pF(t, [{
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
      var a = this.props, o = a.points, u = a.xAxis, s = a.yAxis, c = a.layout, f = a.children, l = Ke(f, bn);
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
      return /* @__PURE__ */ P.createElement(se, d, l.map(function(y) {
        return /* @__PURE__ */ P.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
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
      var u = this.props, s = u.dot, c = u.points, f = u.dataKey, l = Q(this.props, !1), h = Q(s, !0), d = c.map(function(p, v) {
        var b = Ge(Ge(Ge({
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
        return t.renderDotItem(s, b);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ P.createElement(se, Bn({
        className: "recharts-line-dots",
        key: "dots"
      }, y), d);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var u = this.props, s = u.type, c = u.layout, f = u.connectNulls;
      u.ref;
      var l = Np(u, aF), h = Ge(Ge(Ge({}, Q(l, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: s,
        layout: c,
        connectNulls: f
      });
      return /* @__PURE__ */ P.createElement($a, Bn({}, h, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, u = o.points, s = o.strokeDasharray, c = o.isAnimationActive, f = o.animationBegin, l = o.animationDuration, h = o.animationEasing, d = o.animationId, y = o.animateNewValues, p = o.width, v = o.height, b = this.state, _ = b.prevPoints, g = b.totalLength;
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
          var x = _.length / u.length, O = u.map(function(T, N) {
            var k = Math.floor(N * x);
            if (_[k]) {
              var C = _[k], I = Re(C.x, T.x), D = Re(C.y, T.y);
              return Ge(Ge({}, T), {}, {
                x: I(m),
                y: D(m)
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
        var S = Re(0, g), $ = S(m), M;
        if (s) {
          var j = "".concat(s).split(/[,\s]+/gim).map(function(T) {
            return parseFloat(T);
          });
          M = a.getStrokeDasharray($, g, j);
        } else
          M = a.generateSimpleStrokeDasharray(g, $);
        return a.renderCurveStatically(u, n, i, {
          strokeDasharray: M
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, o = a.points, u = a.isAnimationActive, s = this.state, c = s.prevPoints, f = s.totalLength;
      return u && o && o.length && (!c && f > 0 || !Ei(c, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, u = i.points, s = i.className, c = i.xAxis, f = i.yAxis, l = i.top, h = i.left, d = i.width, y = i.height, p = i.isAnimationActive, v = i.id;
      if (a || !u || !u.length)
        return null;
      var b = this.state.isAnimationFinished, _ = u.length === 1, g = ee("recharts-line", s), w = c && c.allowDataOverflow, m = f && f.allowDataOverflow, x = w || m, O = X(v) ? this.id : v, S = (n = Q(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, $ = S.r, M = $ === void 0 ? 3 : $, j = S.strokeWidth, T = j === void 0 ? 2 : j, N = kx(o) ? o : {}, k = N.clipDot, C = k === void 0 ? !0 : k, I = M * 2 + T;
      return /* @__PURE__ */ P.createElement(se, {
        className: g
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
        x: h - I / 2,
        y: l - I / 2,
        width: d + I,
        height: y + I
      }))) : null, !_ && this.renderCurve(x, O), this.renderErrorBar(x, O), (_ || o) && this.renderDots(x, C, O), (!p || b) && kt.renderCallByParent(this.props, u));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Tr(n), [0]) : n, o = [], u = 0; u < i; ++u)
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
        var o = i.key, u = Np(i, oF), s = ee("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ P.createElement(Rc, Bn({
          key: o
        }, u, {
          className: s
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
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, u = e.bandSize, s = e.displayedData, c = e.offset, f = t.layout, l = s.map(function(h, d) {
    var y = ke(h, o);
    return f === "horizontal" ? {
      x: Oa({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: h,
        index: d
      }),
      y: X(y) ? null : n.scale(y),
      value: y,
      payload: h
    } : {
      x: X(y) ? null : r.scale(y),
      y: Oa({
        axis: n,
        ticks: a,
        bandSize: u,
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
function bF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dm(n.key), n);
  }
}
function wF(e, t, r) {
  return t && xF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _F(e, t, r) {
  return t = qa(t), OF(e, hm() ? Reflect.construct(t, r || [], qa(e).constructor) : t.apply(e, r));
}
function OF(e, t) {
  if (t && (en(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return SF(e);
}
function SF(e) {
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
function qa(e) {
  return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qa(e);
}
function AF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cs(e, t);
}
function Cs(e, t) {
  return Cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cs(e, t);
}
function pm(e, t, r) {
  return t = dm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dm(e) {
  var t = PF(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function PF(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ro = /* @__PURE__ */ function(e) {
  function t() {
    return bF(this, t), _F(this, t, arguments);
  }
  return AF(t, e), wF(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(it.Component);
pm(Ro, "displayName", "ZAxis");
pm(Ro, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var $F = ["option", "isActive"];
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
function jF(e, t) {
  if (e == null) return {};
  var r = TF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function EF(e) {
  var t = e.option, r = e.isActive, n = jF(e, $F);
  return typeof t == "string" ? /* @__PURE__ */ it.createElement(bs, Ln({
    option: /* @__PURE__ */ it.createElement(go, Ln({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ it.createElement(bs, Ln({
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
function MF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ym(n.key), n);
  }
}
function CF(e, t, r) {
  return t && Lp(e.prototype, t), r && Lp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kF(e, t, r) {
  return t = Ha(t), NF(e, vm() ? Reflect.construct(t, r || [], Ha(e).constructor) : t.apply(e, r));
}
function NF(e, t) {
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
function Ha(e) {
  return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ha(e);
}
function DF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ks(e, t);
}
function ks(e, t) {
  return ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ks(e, t);
}
function Ht(e, t, r) {
  return t = ym(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ym(e) {
  var t = BF(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function BF(e, t) {
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
    MF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = kF(this, t, [].concat(i)), Ht(r, "state", {
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
  return DF(t, e), CF(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.activeShape, s = a.activeIndex, c = Q(this.props, !1);
      return n.map(function(f, l) {
        var h = s === l, d = h ? u : o, y = tt(tt({}, c), f);
        return /* @__PURE__ */ P.createElement(se, Rn({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(f == null ? void 0 : f.cx, "-").concat(f == null ? void 0 : f.cy, "-").concat(f == null ? void 0 : f.size, "-").concat(l)
        }, Fn(i.props, f, l), {
          role: "img"
        }), /* @__PURE__ */ P.createElement(EF, Rn({
          option: d,
          isActive: h,
          key: "symbol-".concat(l)
        }, y)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, u = i.animationBegin, s = i.animationDuration, c = i.animationEasing, f = i.animationId, l = this.state.prevPoints;
      return /* @__PURE__ */ P.createElement(_t, {
        begin: u,
        duration: s,
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
          var b = l && l[v];
          if (b) {
            var _ = Re(b.cx, p.cx), g = Re(b.cy, p.cy), w = Re(b.size, p.size);
            return tt(tt({}, p), {}, {
              cx: _(d),
              cy: g(d),
              size: w(d)
            });
          }
          var m = Re(0, p.size);
          return tt(tt({}, p), {}, {
            size: m(d)
          });
        });
        return /* @__PURE__ */ P.createElement(se, null, n.renderSymbolsStatically(y));
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
      var i = this.props, a = i.points, o = i.xAxis, u = i.yAxis, s = i.children, c = Ke(s, bn);
      return c ? c.map(function(f, l) {
        var h = f.props, d = h.direction, y = h.dataKey;
        return /* @__PURE__ */ P.cloneElement(f, {
          key: "".concat(d, "-").concat(y, "-").concat(a[l]),
          data: a,
          xAxis: o,
          yAxis: u,
          layout: d === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(v, b) {
            return {
              x: v.cx,
              y: v.cy,
              value: d === "x" ? +v.node.x : +v.node.y,
              errorVal: ke(v, b)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, a = n.line, o = n.lineType, u = n.lineJointType, s = Q(this.props, !1), c = Q(a, !1), f, l;
      if (o === "joint")
        f = i.map(function(g) {
          return {
            x: g.cx,
            y: g.cy
          };
        });
      else if (o === "fitting") {
        var h = Ox(i), d = h.xmin, y = h.xmax, p = h.a, v = h.b, b = function(w) {
          return p * w + v;
        };
        f = [{
          x: d,
          y: b(d)
        }, {
          x: y,
          y: b(y)
        }];
      }
      var _ = tt(tt(tt({}, s), {}, {
        fill: "none",
        stroke: s && s.fill
      }, c), {}, {
        points: f
      });
      return /* @__PURE__ */ P.isValidElement(a) ? l = /* @__PURE__ */ P.cloneElement(a, _) : Z(a) ? l = a(_) : l = /* @__PURE__ */ P.createElement($a, Rn({}, _, {
        type: u
      })), /* @__PURE__ */ P.createElement(se, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, l);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.points, o = n.line, u = n.className, s = n.xAxis, c = n.yAxis, f = n.left, l = n.top, h = n.width, d = n.height, y = n.id, p = n.isAnimationActive;
      if (i || !a || !a.length)
        return null;
      var v = this.state.isAnimationFinished, b = ee("recharts-scatter", u), _ = s && s.allowDataOverflow, g = c && c.allowDataOverflow, w = _ || g, m = X(y) ? this.id : y;
      return /* @__PURE__ */ P.createElement(se, {
        className: b,
        clipPath: w ? "url(#clipPath-".concat(m, ")") : null
      }, _ || g ? /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: _ ? f : f - h / 2,
        y: g ? l : l - d / 2,
        width: _ ? h : h * 2,
        height: g ? d : d * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ P.createElement(se, {
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
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, u = e.yAxisTicks, s = e.offset, c = i.props.tooltipType, f = Ke(i.props.children, Ai), l = X(t.dataKey) ? i.props.dataKey : t.dataKey, h = X(r.dataKey) ? i.props.dataKey : r.dataKey, d = n && n.dataKey, y = n ? n.range : Ro.defaultProps.range, p = y && y[0], v = t.scale.bandwidth ? t.scale.bandwidth() : 0, b = r.scale.bandwidth ? r.scale.bandwidth() : 0, _ = a.map(function(g, w) {
    var m = ke(g, l), x = ke(g, h), O = !X(d) && ke(g, d) || "-", S = [{
      name: X(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: m,
      payload: g,
      dataKey: l,
      type: c
    }, {
      name: X(r.dataKey) ? i.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: g,
      dataKey: h,
      type: c
    }];
    O !== "-" && S.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: O,
      payload: g,
      dataKey: d,
      type: c
    });
    var $ = Oa({
      axis: t,
      ticks: o,
      bandSize: v,
      entry: g,
      index: w,
      dataKey: l
    }), M = Oa({
      axis: r,
      ticks: u,
      bandSize: b,
      entry: g,
      index: w,
      dataKey: h
    }), j = O !== "-" ? n.scale(O) : p, T = Math.sqrt(Math.max(j, 0) / Math.PI);
    return tt(tt({}, g), {}, {
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
      tooltipPayload: S,
      tooltipPosition: {
        x: $,
        y: M
      },
      payload: g
    }, f && f[w] && f[w].props);
  });
  return tt({
    points: _
  }, s);
});
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function LF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function RF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bm(n.key), n);
  }
}
function FF(e, t, r) {
  return t && RF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zF(e, t, r) {
  return t = Ga(t), WF(e, mm() ? Reflect.construct(t, r || [], Ga(e).constructor) : t.apply(e, r));
}
function WF(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UF(e);
}
function UF(e) {
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
function Ga(e) {
  return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ga(e);
}
function KF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ns(e, t);
}
function Ns(e, t) {
  return Ns = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ns(e, t);
}
function gm(e, t, r) {
  return t = bm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bm(e) {
  var t = qF(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function qF(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Is() {
  return Is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Is.apply(this, arguments);
}
function HF(e) {
  var t = e.xAxisId, r = Kc(), n = qc(), i = Jy(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ it.createElement(xn, Is({}, i, {
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
    return LF(this, t), zF(this, t, arguments);
  }
  return KF(t, e), FF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(HF, this.props);
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
function GF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _m(n.key), n);
  }
}
function XF(e, t, r) {
  return t && VF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function YF(e, t, r) {
  return t = Va(t), ZF(e, xm() ? Reflect.construct(t, r || [], Va(e).constructor) : t.apply(e, r));
}
function ZF(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JF(e);
}
function JF(e) {
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
function Va(e) {
  return Va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Va(e);
}
function QF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ds(e, t);
}
function Ds(e, t) {
  return Ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ds(e, t);
}
function wm(e, t, r) {
  return t = _m(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _m(e) {
  var t = ez(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function ez(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bs.apply(this, arguments);
}
var tz = function(t) {
  var r = t.yAxisId, n = Kc(), i = qc(), a = Qy(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ it.createElement(xn, Bs({}, a, {
      className: ee("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return Tt(u, !0);
      }
    }))
  );
}, Le = /* @__PURE__ */ function(e) {
  function t() {
    return GF(this, t), YF(this, t, arguments);
  }
  return QF(t, e), XF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(tz, this.props);
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
  return az(e) || iz(e) || nz(e) || rz();
}
function rz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nz(e, t) {
  if (e) {
    if (typeof e == "string") return Ls(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ls(e, t);
  }
}
function iz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function az(e) {
  if (Array.isArray(e)) return Ls(e);
}
function Ls(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Rs = function(t, r, n, i, a) {
  var o = Ke(t, Gc), u = Ke(t, Do), s = [].concat(Rp(o), Rp(u)), c = Ke(t, Lo), f = "".concat(i, "Id"), l = i[0], h = r;
  if (s.length && (h = s.reduce(function(p, v) {
    if (v.props[f] === n && xt(v.props, "extendDomain") && L(v.props[l])) {
      var b = v.props[l];
      return [Math.min(p[0], b), Math.max(p[1], b)];
    }
    return p;
  }, h)), c.length) {
    var d = "".concat(l, "1"), y = "".concat(l, "2");
    h = c.reduce(function(p, v) {
      if (v.props[f] === n && xt(v.props, "extendDomain") && L(v.props[d]) && L(v.props[y])) {
        var b = v.props[d], _ = v.props[y];
        return [Math.min(p[0], b, _), Math.max(p[1], b, _)];
      }
      return p;
    }, h);
  }
  return a && a.length && (h = a.reduce(function(p, v) {
    return L(v) ? [Math.min(p[0], v), Math.max(p[1], v)] : p;
  }, h)), h;
}, Om = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(s, c, f) {
    this.fn = s, this.context = c, this.once = f || !1;
  }
  function a(s, c, f, l, h) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var d = new i(f, l || s, h), y = r ? r + c : c;
    return s._events[y] ? s._events[y].fn ? s._events[y] = [s._events[y], d] : s._events[y].push(d) : (s._events[y] = d, s._eventsCount++), s;
  }
  function o(s, c) {
    --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var c = [], f, l;
    if (this._eventsCount === 0) return c;
    for (l in f = this._events)
      t.call(f, l) && c.push(r ? l.slice(1) : l);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
  }, u.prototype.listeners = function(c) {
    var f = r ? r + c : c, l = this._events[f];
    if (!l) return [];
    if (l.fn) return [l.fn];
    for (var h = 0, d = l.length, y = new Array(d); h < d; h++)
      y[h] = l[h].fn;
    return y;
  }, u.prototype.listenerCount = function(c) {
    var f = r ? r + c : c, l = this._events[f];
    return l ? l.fn ? 1 : l.length : 0;
  }, u.prototype.emit = function(c, f, l, h, d, y) {
    var p = r ? r + c : c;
    if (!this._events[p]) return !1;
    var v = this._events[p], b = arguments.length, _, g;
    if (v.fn) {
      switch (v.once && this.removeListener(c, v.fn, void 0, !0), b) {
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
      for (g = 1, _ = new Array(b - 1); g < b; g++)
        _[g - 1] = arguments[g];
      v.fn.apply(v.context, _);
    } else {
      var w = v.length, m;
      for (g = 0; g < w; g++)
        switch (v[g].once && this.removeListener(c, v[g].fn, void 0, !0), b) {
          case 1:
            v[g].fn.call(v[g].context);
            break;
          case 2:
            v[g].fn.call(v[g].context, f);
            break;
          case 3:
            v[g].fn.call(v[g].context, f, l);
            break;
          case 4:
            v[g].fn.call(v[g].context, f, l, h);
            break;
          default:
            if (!_) for (m = 1, _ = new Array(b - 1); m < b; m++)
              _[m - 1] = arguments[m];
            v[g].fn.apply(v[g].context, _);
        }
    }
    return !0;
  }, u.prototype.on = function(c, f, l) {
    return a(this, c, f, l, !1);
  }, u.prototype.once = function(c, f, l) {
    return a(this, c, f, l, !0);
  }, u.prototype.removeListener = function(c, f, l, h) {
    var d = r ? r + c : c;
    if (!this._events[d]) return this;
    if (!f)
      return o(this, d), this;
    var y = this._events[d];
    if (y.fn)
      y.fn === f && (!h || y.once) && (!l || y.context === l) && o(this, d);
    else {
      for (var p = 0, v = [], b = y.length; p < b; p++)
        (y[p].fn !== f || h && !y[p].once || l && y[p].context !== l) && v.push(y[p]);
      v.length ? this._events[d] = v.length === 1 ? v[0] : v : o(this, d);
    }
    return this;
  }, u.prototype.removeAllListeners = function(c) {
    var f;
    return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
})(Om);
var oz = Om.exports;
const uz = /* @__PURE__ */ ce(oz);
var pu = new uz(), du = "recharts.syncMouseEvents";
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function sz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sm(n.key), n);
  }
}
function lz(e, t, r) {
  return t && cz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vu(e, t, r) {
  return t = Sm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sm(e) {
  var t = fz(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function fz(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hz = /* @__PURE__ */ function() {
  function e() {
    sz(this, e), vu(this, "activeIndex", 0), vu(this, "coordinateList", []), vu(this, "layout", "horizontal");
  }
  return lz(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, f = r.offset, l = f === void 0 ? null : f, h = r.mouseHandlerCallback, d = h === void 0 ? null : h;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = d ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = a + s + c, h = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: h
        });
      }
    }
  }]);
}();
function pz(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && L(n) && L(i))
      return !0;
  }
  return !1;
}
function dz(e, t, r, n) {
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
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = Ce(t, r, n, i), u = Ce(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function vz(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, s = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, h = Ce(u, s, c, l), d = Ce(u, s, f, l);
      n = h.x, i = h.y, a = d.x, o = d.y;
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
function qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fp(Object(r), !0).forEach(function(n) {
      yz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yz(e, t, r) {
  return t = mz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mz(e) {
  var t = gz(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function gz(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bz(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, u = e.activePayload, s = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, h = e.chartName, d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis")
    return null;
  var y, p = $a;
  if (h === "ScatterChart")
    y = o, p = tB;
  else if (h === "BarChart")
    y = dz(l, o, s, f), p = Lc;
  else if (l === "radial") {
    var v = Am(o), b = v.cx, _ = v.cy, g = v.radius, w = v.startAngle, m = v.endAngle;
    y = {
      cx: b,
      cy: _,
      startAngle: w,
      endAngle: m,
      innerRadius: g,
      outerRadius: g
    }, p = Sy;
  } else
    y = {
      points: vz(l, o, s)
    }, p = $a;
  var x = qi(qi(qi(qi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), y), Q(d, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: ee("recharts-tooltip-cursor", d.className)
  });
  return /* @__PURE__ */ gt(d) ? /* @__PURE__ */ Se(d, x) : /* @__PURE__ */ Yp(p, x);
}
var xz = ["item"], wz = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
  return Sz(e) || Oz(e, t) || $m(e, t) || _z();
}
function _z() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oz(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function Sz(e) {
  if (Array.isArray(e)) return e;
}
function Wp(e, t) {
  if (e == null) return {};
  var r = Az(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Az(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Pz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $z(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jm(n.key), n);
  }
}
function jz(e, t, r) {
  return t && $z(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Tz(e, t, r) {
  return t = Xa(t), Ez(e, Pm() ? Reflect.construct(t, r || [], Xa(e).constructor) : t.apply(e, r));
}
function Ez(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Mz(e);
}
function Mz(e) {
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
function Xa(e) {
  return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xa(e);
}
function Cz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fs(e, t);
}
function Fs(e, t) {
  return Fs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fs(e, t);
}
function on(e) {
  return Iz(e) || Nz(e) || $m(e) || kz();
}
function kz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $m(e, t) {
  if (e) {
    if (typeof e == "string") return zs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zs(e, t);
  }
}
function Nz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Iz(e) {
  if (Array.isArray(e)) return zs(e);
}
function zs(e, t) {
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
  var t = Dz(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function Dz(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bz = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Lz = {
  width: "100%",
  height: "100%"
}, Tm = {
  x: 0,
  y: 0
};
function Hi(e) {
  return e;
}
var Rz = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, Fz = function(t, r, n, i) {
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
      var o = a.coordinate, u = i.radius;
      return E(E(E({}, i), Ce(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = a.coordinate, c = i.angle;
    return E(E(E({}, i), Ce(i.cx, i.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return Tm;
}, Fo = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(on(u), on(c)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && L(i) && L(a) ? t.slice(i, a + 1) : [];
};
function Em(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Ws = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = Fo(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(s, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var h;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var d = l === void 0 ? u : l;
      h = Vi(d, o.dataKey, i);
    } else
      h = l && l[n] || u[n];
    return h ? [].concat(on(s), [wy(c, h)]) : s;
  }, []);
}, Kp = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = Rz(a, n), u = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, f = DN(o, u, c, s);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, h = Ws(t, r, f, l), d = Fz(n, u, f, a);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: h,
      activeCoordinate: d
    };
  }
  return null;
}, zz = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = t.stackOffset, d = gy(f, a);
  return n.reduce(function(y, p) {
    var v, b = p.type.defaultProps !== void 0 ? E(E({}, p.type.defaultProps), p.props) : p.props, _ = b.type, g = b.dataKey, w = b.allowDataOverflow, m = b.allowDuplicatedCategory, x = b.scale, O = b.ticks, S = b.includeHidden, $ = b[o];
    if (y[$])
      return y;
    var M = Fo(t.data, {
      graphicalItems: i.filter(function(W) {
        var V, le = o in W.props ? W.props[o] : (V = W.type.defaultProps) === null || V === void 0 ? void 0 : V[o];
        return le === $;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), j = M.length, T, N, k;
    pz(b.domain, w, _) && (T = ns(b.domain, null, w), d && (_ === "number" || x !== "auto") && (k = In(M, g, "category")));
    var C = Em(_);
    if (!T || T.length === 0) {
      var I, D = (I = b.domain) !== null && I !== void 0 ? I : C;
      if (g) {
        if (T = In(M, g, _), _ === "category" && d) {
          var R = _x(T);
          m && R ? (N = T, T = Na(0, j)) : m || (T = xh(D, T, p).reduce(function(W, V) {
            return W.indexOf(V) >= 0 ? W : [].concat(on(W), [V]);
          }, []));
        } else if (_ === "category")
          m ? T = T.filter(function(W) {
            return W !== "" && !X(W);
          }) : T = xh(D, T, p).reduce(function(W, V) {
            return W.indexOf(V) >= 0 || V === "" || X(V) ? W : [].concat(on(W), [V]);
          }, []);
        else if (_ === "number") {
          var F = zN(M, i.filter(function(W) {
            var V, le, ye = o in W.props ? W.props[o] : (V = W.type.defaultProps) === null || V === void 0 ? void 0 : V[o], He = "hide" in W.props ? W.props.hide : (le = W.type.defaultProps) === null || le === void 0 ? void 0 : le.hide;
            return ye === $ && (S || !He);
          }), g, a, f);
          F && (T = F);
        }
        d && (_ === "number" || x !== "auto") && (k = In(M, g, "category"));
      } else d ? T = Na(0, j) : u && u[$] && u[$].hasStack && _ === "number" ? T = h === "expand" ? [0, 1] : xy(u[$].stackGroups, s, c) : T = my(M, i.filter(function(W) {
        var V = o in W.props ? W.props[o] : W.type.defaultProps[o], le = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return V === $ && (S || !le);
      }), _, f, !0);
      if (_ === "number")
        T = Rs(l, T, $, a, O), D && (T = ns(D, T, w));
      else if (_ === "category" && D) {
        var q = D, G = T.every(function(W) {
          return q.indexOf(W) >= 0;
        });
        G && (T = q);
      }
    }
    return E(E({}, y), {}, H({}, $, E(E({}, b), {}, {
      axisType: a,
      domain: T,
      categoricalDomain: k,
      duplicateDomain: N,
      originalDomain: (v = b.domain) !== null && v !== void 0 ? v : C,
      isCategorical: d,
      layout: f
    })));
  }, {});
}, Wz = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, h = Fo(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), d = h.length, y = gy(f, a), p = -1;
  return n.reduce(function(v, b) {
    var _ = b.type.defaultProps !== void 0 ? E(E({}, b.type.defaultProps), b.props) : b.props, g = _[o], w = Em("number");
    if (!v[g]) {
      p++;
      var m;
      return y ? m = Na(0, d) : u && u[g] && u[g].hasStack ? (m = xy(u[g].stackGroups, s, c), m = Rs(l, m, g, a)) : (m = ns(w, my(h, n.filter(function(x) {
        var O, S, $ = o in x.props ? x.props[o] : (O = x.type.defaultProps) === null || O === void 0 ? void 0 : O[o], M = "hide" in x.props ? x.props.hide : (S = x.type.defaultProps) === null || S === void 0 ? void 0 : S.hide;
        return $ === g && !M;
      }), "number", f), i.defaultProps.allowDataOverflow), m = Rs(l, m, g, a)), E(E({}, v), {}, H({}, g, E(E({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: at(Bz, "".concat(a, ".").concat(p % 2), null),
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
}, Uz = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), h = Ke(f, a), d = {};
  return h && h.length ? d = zz(t, {
    axes: h,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (d = Wz(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), d;
}, Kz = function(t) {
  var r = Kt(t), n = Tt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: fc(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Sa(r, n)
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
}, qz = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Et(r && r.type);
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
}, Hz = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, s = u === void 0 ? {} : u, c = n.width, f = n.height, l = n.children, h = n.margin || {}, d = Xe(l, Gr), y = Xe(l, Ze), p = Object.keys(s).reduce(function(m, x) {
    var O = s[x], S = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, m), {}, H({}, S, m[S] + O.width)) : m;
  }, {
    left: h.left || 0,
    right: h.right || 0
  }), v = Object.keys(o).reduce(function(m, x) {
    var O = o[x], S = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, m), {}, H({}, S, at(m, "".concat(S)) + O.height)) : m;
  }, {
    top: h.top || 0,
    bottom: h.bottom || 0
  }), b = E(E({}, v), p), _ = b.bottom;
  d && (b.bottom += d.props.height || Gr.defaultProps.height), y && r && (b = RN(b, i, n, r));
  var g = c - b.left - b.right, w = f - b.top - b.bottom;
  return E(E({
    brushBottom: _
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(g, 0),
    height: Math.max(w, 0)
  });
}, Gz = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Yc = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, h = function(b, _) {
    var g = _.graphicalItems, w = _.stackGroups, m = _.offset, x = _.updateId, O = _.dataStartIndex, S = _.dataEndIndex, $ = b.barSize, M = b.layout, j = b.barGap, T = b.barCategoryGap, N = b.maxBarSize, k = Hp(M), C = k.numericAxisName, I = k.cateAxisName, D = qz(g), R = [];
    return g.forEach(function(F, q) {
      var G = Fo(b.data, {
        graphicalItems: [F],
        dataStartIndex: O,
        dataEndIndex: S
      }), W = F.type.defaultProps !== void 0 ? E(E({}, F.type.defaultProps), F.props) : F.props, V = W.dataKey, le = W.maxBarSize, ye = W["".concat(C, "Id")], He = W["".concat(I, "Id")], Qt = {}, ze = s.reduce(function(er, tr) {
        var zo = _["".concat(tr.axisType, "Map")], Jc = W["".concat(tr.axisType, "Id")];
        zo && zo[Jc] || tr.axisType === "zAxis" || mr();
        var Qc = zo[Jc];
        return E(E({}, er), {}, H(H({}, tr.axisType, Qc), "".concat(tr.axisType, "Ticks"), Tt(Qc)));
      }, Qt), z = ze[I], Y = ze["".concat(I, "Ticks")], J = w && w[ye] && w[ye].hasStack && QN(F, w[ye].stackGroups), B = Et(F.type).indexOf("Bar") >= 0, de = Sa(z, Y), te = [], xe = D && BN({
        barSize: $,
        stackGroups: w,
        totalSize: Gz(ze, I)
      });
      if (B) {
        var we, We, Wt = X(le) ? N : le, Ar = (we = (We = Sa(z, Y, !0)) !== null && We !== void 0 ? We : Wt) !== null && we !== void 0 ? we : 0;
        te = LN({
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
          props: b,
          dataKey: V,
          item: F,
          bandSize: de,
          barPosition: te,
          offset: m,
          stackedData: J,
          layout: M,
          dataStartIndex: O,
          dataEndIndex: S
        }))), {}, H(H(H({
          key: F.key || "item-".concat(q)
        }, C, ze[C]), I, ze[I]), "animationId", x)),
        childIndex: Dx(F, b.children),
        item: F
      });
    }), R;
  }, d = function(b, _) {
    var g = b.props, w = b.dataStartIndex, m = b.dataEndIndex, x = b.updateId;
    if (!pl({
      props: g
    }))
      return null;
    var O = g.children, S = g.layout, $ = g.stackOffset, M = g.data, j = g.reverseStackOrder, T = Hp(S), N = T.numericAxisName, k = T.cateAxisName, C = Ke(O, n), I = YN(M, C, "".concat(N, "Id"), "".concat(k, "Id"), $, j), D = s.reduce(function(W, V) {
      var le = "".concat(V.axisType, "Map");
      return E(E({}, W), {}, H({}, le, Uz(g, E(E({}, V), {}, {
        graphicalItems: C,
        stackGroups: V.axisType === N && I,
        dataStartIndex: w,
        dataEndIndex: m
      }))));
    }, {}), R = Hz(E(E({}, D), {}, {
      props: g,
      graphicalItems: C
    }), _ == null ? void 0 : _.legendBBox);
    Object.keys(D).forEach(function(W) {
      D[W] = f(g, D[W], R, W.replace("Map", ""), r);
    });
    var F = D["".concat(k, "Map")], q = Kz(F), G = h(g, E(E({}, D), {}, {
      dataStartIndex: w,
      dataEndIndex: m,
      updateId: x,
      graphicalItems: C,
      stackGroups: I,
      offset: R
    }));
    return E(E({
      formattedGraphicalItems: G,
      graphicalItems: C,
      offset: R,
      stackGroups: I
    }, q), D);
  }, y = /* @__PURE__ */ function(v) {
    function b(_) {
      var g, w, m;
      return Pz(this, b), m = Tz(this, b, [_]), H(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), H(m, "accessibilityManager", new hz()), H(m, "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var O = m.state, S = O.dataStartIndex, $ = O.dataEndIndex, M = O.updateId;
          m.setState(E({
            legendBBox: x
          }, d({
            props: m.props,
            dataStartIndex: S,
            dataEndIndex: $,
            updateId: M
          }, E(E({}, m.state), {}, {
            legendBBox: x
          }))));
        }
      }), H(m, "handleReceiveSyncEvent", function(x, O, S) {
        if (m.props.syncId === x) {
          if (S === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(O);
        }
      }), H(m, "handleBrushChange", function(x) {
        var O = x.startIndex, S = x.endIndex;
        if (O !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
          var $ = m.state.updateId;
          m.setState(function() {
            return E({
              dataStartIndex: O,
              dataEndIndex: S
            }, d({
              props: m.props,
              dataStartIndex: O,
              dataEndIndex: S,
              updateId: $
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: S
          });
        }
      }), H(m, "handleMouseEnter", function(x) {
        var O = m.getMouseInfo(x);
        if (O) {
          var S = E(E({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var $ = m.props.onMouseEnter;
          Z($) && $(S, x);
        }
      }), H(m, "triggeredAfterMouseMove", function(x) {
        var O = m.getMouseInfo(x), S = O ? E(E({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(S), m.triggerSyncEvent(S);
        var $ = m.props.onMouseMove;
        Z($) && $(S, x);
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
        var S = m.props.onMouseLeave;
        Z(S) && S(O, x);
      }), H(m, "handleOuterEvent", function(x) {
        var O = Ix(x), S = at(m.props, "".concat(O));
        if (O && Z(S)) {
          var $, M;
          /.*touch.*/i.test(O) ? M = m.getMouseInfo(x.changedTouches[0]) : M = m.getMouseInfo(x), S(($ = M) !== null && $ !== void 0 ? $ : {}, x);
        }
      }), H(m, "handleClick", function(x) {
        var O = m.getMouseInfo(x);
        if (O) {
          var S = E(E({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var $ = m.props.onClick;
          Z($) && $(S, x);
        }
      }), H(m, "handleMouseDown", function(x) {
        var O = m.props.onMouseDown;
        if (Z(O)) {
          var S = m.getMouseInfo(x);
          O(S, x);
        }
      }), H(m, "handleMouseUp", function(x) {
        var O = m.props.onMouseUp;
        if (Z(O)) {
          var S = m.getMouseInfo(x);
          O(S, x);
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
          var S = m.getMouseInfo(x);
          O(S, x);
        }
      }), H(m, "handleContextMenu", function(x) {
        var O = m.props.onContextMenu;
        if (Z(O)) {
          var S = m.getMouseInfo(x);
          O(S, x);
        }
      }), H(m, "triggerSyncEvent", function(x) {
        m.props.syncId !== void 0 && pu.emit(du, m.props.syncId, x, m.eventEmitterSymbol);
      }), H(m, "applySyncEvent", function(x) {
        var O = m.props, S = O.layout, $ = O.syncMethod, M = m.state.updateId, j = x.dataStartIndex, T = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          m.setState(E({
            dataStartIndex: j,
            dataEndIndex: T
          }, d({
            props: m.props,
            dataStartIndex: j,
            dataEndIndex: T,
            updateId: M
          }, m.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var N = x.chartX, k = x.chartY, C = x.activeTooltipIndex, I = m.state, D = I.offset, R = I.tooltipTicks;
          if (!D)
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
          var q = E(E({}, D), {}, {
            x: D.left,
            y: D.top
          }), G = Math.min(N, q.x + q.width), W = Math.min(k, q.y + q.height), V = R[C] && R[C].value, le = Ws(m.state, m.props.data, C), ye = R[C] ? {
            x: S === "horizontal" ? R[C].coordinate : G,
            y: S === "horizontal" ? W : R[C].coordinate
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
        var O, S = m.state, $ = S.isTooltipActive, M = S.activeCoordinate, j = S.activePayload, T = S.offset, N = S.activeTooltipIndex, k = S.tooltipAxisBandSize, C = m.getTooltipEventType(), I = (O = x.props.active) !== null && O !== void 0 ? O : $, D = m.props.layout, R = x.key || "_recharts-cursor";
        return /* @__PURE__ */ P.createElement(bz, {
          key: R,
          activeCoordinate: M,
          activePayload: j,
          activeTooltipIndex: N,
          chartName: r,
          element: x,
          isActive: I,
          layout: D,
          offset: T,
          tooltipAxisBandSize: k,
          tooltipEventType: C
        });
      }), H(m, "renderPolarAxis", function(x, O, S) {
        var $ = at(x, "type.axisType"), M = at(m.state, "".concat($, "Map")), j = x.type.defaultProps, T = j !== void 0 ? E(E({}, j), x.props) : x.props, N = M && M[T["".concat($, "Id")]];
        return /* @__PURE__ */ Se(x, E(E({}, N), {}, {
          className: ee($, N.className),
          key: x.key || "".concat(O, "-").concat(S),
          ticks: Tt(N, !0)
        }));
      }), H(m, "renderPolarGrid", function(x) {
        var O = x.props, S = O.radialLines, $ = O.polarAngles, M = O.polarRadius, j = m.state, T = j.radiusAxisMap, N = j.angleAxisMap, k = Kt(T), C = Kt(N), I = C.cx, D = C.cy, R = C.innerRadius, F = C.outerRadius;
        return /* @__PURE__ */ Se(x, {
          polarAngles: Array.isArray($) ? $ : Tt(C, !0).map(function(q) {
            return q.coordinate;
          }),
          polarRadius: Array.isArray(M) ? M : Tt(k, !0).map(function(q) {
            return q.coordinate;
          }),
          cx: I,
          cy: D,
          innerRadius: R,
          outerRadius: F,
          key: x.key || "polar-grid",
          radialLines: S
        });
      }), H(m, "renderLegend", function() {
        var x = m.state.formattedGraphicalItems, O = m.props, S = O.children, $ = O.width, M = O.height, j = m.props.margin || {}, T = $ - (j.left || 0) - (j.right || 0), N = vy({
          children: S,
          formattedGraphicalItems: x,
          legendWidth: T,
          legendContent: c
        });
        if (!N)
          return null;
        var k = N.item, C = Wp(N, xz);
        return /* @__PURE__ */ Se(k, E(E({}, C), {}, {
          chartWidth: $,
          chartHeight: M,
          margin: j,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), H(m, "renderTooltip", function() {
        var x, O = m.props, S = O.children, $ = O.accessibilityLayer, M = Xe(S, ge);
        if (!M)
          return null;
        var j = m.state, T = j.isTooltipActive, N = j.activeCoordinate, k = j.activePayload, C = j.activeLabel, I = j.offset, D = (x = M.props.active) !== null && x !== void 0 ? x : T;
        return /* @__PURE__ */ Se(M, {
          viewBox: E(E({}, I), {}, {
            x: I.left,
            y: I.top
          }),
          active: D,
          label: C,
          payload: D ? k : [],
          coordinate: N,
          accessibilityLayer: $
        });
      }), H(m, "renderBrush", function(x) {
        var O = m.props, S = O.margin, $ = O.data, M = m.state, j = M.offset, T = M.dataStartIndex, N = M.dataEndIndex, k = M.updateId;
        return /* @__PURE__ */ Se(x, {
          key: x.key || "_recharts-brush",
          onChange: zi(m.handleBrushChange, x.props.onChange),
          data: $,
          x: L(x.props.x) ? x.props.x : j.left,
          y: L(x.props.y) ? x.props.y : j.top + j.height + j.brushBottom - (S.bottom || 0),
          width: L(x.props.width) ? x.props.width : j.width,
          startIndex: T,
          endIndex: N,
          updateId: "brush-".concat(k)
        });
      }), H(m, "renderReferenceElement", function(x, O, S) {
        if (!x)
          return null;
        var $ = m, M = $.clipPathId, j = m.state, T = j.xAxisMap, N = j.yAxisMap, k = j.offset, C = x.type.defaultProps || {}, I = x.props, D = I.xAxisId, R = D === void 0 ? C.xAxisId : D, F = I.yAxisId, q = F === void 0 ? C.yAxisId : F;
        return /* @__PURE__ */ Se(x, {
          key: x.key || "".concat(O, "-").concat(S),
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
        var O = x.item, S = x.activePoint, $ = x.basePoint, M = x.childIndex, j = x.isRange, T = [], N = O.props.key, k = O.item.type.defaultProps !== void 0 ? E(E({}, O.item.type.defaultProps), O.item.props) : O.item.props, C = k.activeDot, I = k.dataKey, D = E(E({
          index: M,
          dataKey: I,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: Bc(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value
        }, Q(C, !1)), Xi(C));
        return T.push(b.renderActiveDot(C, D, "".concat(N, "-activePoint-").concat(M))), $ ? T.push(b.renderActiveDot(C, E(E({}, D), {}, {
          cx: $.x,
          cy: $.y
        }), "".concat(N, "-basePoint-").concat(M))) : j && T.push(null), T;
      }), H(m, "renderGraphicChild", function(x, O, S) {
        var $ = m.filterFormatItem(x, O, S);
        if (!$)
          return null;
        var M = m.getTooltipEventType(), j = m.state, T = j.isTooltipActive, N = j.tooltipAxis, k = j.activeTooltipIndex, C = j.activeLabel, I = m.props.children, D = Xe(I, ge), R = $.props, F = R.points, q = R.isRange, G = R.baseLine, W = $.item.type.defaultProps !== void 0 ? E(E({}, $.item.type.defaultProps), $.item.props) : $.item.props, V = W.activeDot, le = W.hide, ye = W.activeBar, He = W.activeShape, Qt = !!(!le && T && D && (V || ye || He)), ze = {};
        M !== "axis" && D && D.props.trigger === "click" ? ze = {
          onClick: zi(m.handleItemMouseEnter, x.props.onClick)
        } : M !== "axis" && (ze = {
          onMouseLeave: zi(m.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: zi(m.handleItemMouseEnter, x.props.onMouseEnter)
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
              J = Vi(F, de, C), B = q && G && Vi(G, de, C);
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
            }, We = we.graphicalItem, Wt = We.item, Ar = Wt === void 0 ? x : Wt, Mi = We.childIndex, er = E(E(E({}, $.props), ze), {}, {
              activeIndex: Mi
            });
            return [/* @__PURE__ */ Se(Ar, er), null, null];
          }
        return q ? [z, null, null] : [z, null];
      }), H(m, "renderCustomized", function(x, O, S) {
        return /* @__PURE__ */ Se(x, E(E({
          key: "recharts-customized-".concat(S)
        }, m.props), m.state));
      }), H(m, "renderMap", {
        CartesianGrid: {
          handler: Hi,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: Hi
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: Hi
        },
        YAxis: {
          handler: Hi
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
      }), m.clipPathId = "".concat((g = _.id) !== null && g !== void 0 ? g : hn("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = vv(m.triggeredAfterMouseMove, (w = _.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60), m.state = {}, m;
    }
    return Cz(b, v), jz(b, [{
      key: "componentDidMount",
      value: function() {
        var g, w;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
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
        var g = this.props, w = g.children, m = g.data, x = g.height, O = g.layout, S = Xe(w, ge);
        if (S) {
          var $ = S.props.defaultIndex;
          if (!(typeof $ != "number" || $ < 0 || $ > this.state.tooltipTicks.length - 1)) {
            var M = this.state.tooltipTicks[$] && this.state.tooltipTicks[$].value, j = Ws(this.state, m, $, M), T = this.state.tooltipTicks[$].coordinate, N = (this.state.offset.top + x) / 2, k = O === "horizontal", C = k ? {
              x: T,
              y: N
            } : {
              y: T,
              x: N
            }, I = this.state.formattedGraphicalItems.find(function(R) {
              var F = R.item;
              return F.type.name === "Scatter";
            });
            I && (C = E(E({}, C), I.props.points[$].tooltipPosition), j = I.props.points[$].tooltipPayload);
            var D = {
              activeTooltipIndex: $,
              isTooltipActive: !0,
              activeLabel: M,
              activePayload: j,
              activeCoordinate: C
            };
            this.setState(D), this.renderCursor(S), this.accessibilityManager.setIndex($);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(g, w) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== w.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== g.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== g.margin) {
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
      value: function(g) {
        gu([Xe(g.children, ge)], [Xe(this.props.children, ge)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var g = Xe(this.props.children, ge);
        if (g && typeof g.props.shared == "boolean") {
          var w = g.props.shared ? "axis" : "item";
          return u.indexOf(w) >= 0 ? w : a;
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
      value: function(g) {
        if (!this.container)
          return null;
        var w = this.container, m = w.getBoundingClientRect(), x = sE(m), O = {
          chartX: Math.round(g.pageX - x.left),
          chartY: Math.round(g.pageY - x.top)
        }, S = m.width / w.offsetWidth || 1, $ = this.inRange(O.chartX, O.chartY, S);
        if (!$)
          return null;
        var M = this.state, j = M.xAxisMap, T = M.yAxisMap, N = this.getTooltipEventType(), k = Kp(this.state, this.props.data, this.props.layout, $);
        if (N !== "axis" && j && T) {
          var C = Kt(j).scale, I = Kt(T).scale, D = C && C.invert ? C.invert(O.chartX) : null, R = I && I.invert ? I.invert(O.chartY) : null;
          return E(E({}, O), {}, {
            xValue: D,
            yValue: R
          }, k);
        }
        return k ? E(E({}, O), k) : null;
      }
    }, {
      key: "inRange",
      value: function(g, w) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, O = g / m, S = w / m;
        if (x === "horizontal" || x === "vertical") {
          var $ = this.state.offset, M = O >= $.left && O <= $.left + $.width && S >= $.top && S <= $.top + $.height;
          return M ? {
            x: O,
            y: S
          } : null;
        }
        var j = this.state, T = j.angleAxisMap, N = j.radiusAxisMap;
        if (T && N) {
          var k = Kt(T);
          return Oh({
            x: O,
            y: S
          }, k);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var g = this.props.children, w = this.getTooltipEventType(), m = Xe(g, ge), x = {};
        m && w === "axis" && (m.props.trigger === "click" ? x = {
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
        var O = Xi(this.props, this.handleOuterEvent);
        return E(E({}, O), x);
      }
    }, {
      key: "addListener",
      value: function() {
        pu.on(du, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        pu.removeListener(du, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(g, w, m) {
        for (var x = this.state.formattedGraphicalItems, O = 0, S = x.length; O < S; O++) {
          var $ = x[O];
          if ($.item === g || $.props.key === g.key || w === Et($.item.type) && m === $.childIndex)
            return $;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var g = this.clipPathId, w = this.state.offset, m = w.left, x = w.top, O = w.height, S = w.width;
        return /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
          id: g
        }, /* @__PURE__ */ P.createElement("rect", {
          x: m,
          y: x,
          height: O,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var g = this.state.xAxisMap;
        return g ? Object.entries(g).reduce(function(w, m) {
          var x = zp(m, 2), O = x[0], S = x[1];
          return E(E({}, w), {}, H({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var g = this.state.yAxisMap;
        return g ? Object.entries(g).reduce(function(w, m) {
          var x = zp(m, 2), O = x[0], S = x[1];
          return E(E({}, w), {}, H({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(g) {
        var w;
        return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[g]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(g) {
        var w;
        return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[g]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(g) {
        var w = this.state, m = w.formattedGraphicalItems, x = w.activeItem;
        if (m && m.length)
          for (var O = 0, S = m.length; O < S; O++) {
            var $ = m[O], M = $.props, j = $.item, T = j.type.defaultProps !== void 0 ? E(E({}, j.type.defaultProps), j.props) : j.props, N = Et(j.type);
            if (N === "Bar") {
              var k = (M.data || []).find(function(R) {
                return q2(g, R);
              });
              if (k)
                return {
                  graphicalItem: $,
                  payload: k
                };
            } else if (N === "RadialBar") {
              var C = (M.data || []).find(function(R) {
                return Oh(g, R);
              });
              if (C)
                return {
                  graphicalItem: $,
                  payload: C
                };
            } else if (Co($, x) || ko($, x) || vi($, x)) {
              var I = GB({
                graphicalItem: $,
                activeTooltipItem: x,
                itemData: T.data
              }), D = T.activeIndex === void 0 ? I : T.activeIndex;
              return {
                graphicalItem: E(E({}, $), {}, {
                  childIndex: D
                }),
                payload: vi($, x) ? T.data[I] : $.props.data[I]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var g = this;
        if (!pl(this))
          return null;
        var w = this.props, m = w.children, x = w.className, O = w.width, S = w.height, $ = w.style, M = w.compact, j = w.title, T = w.desc, N = Wp(w, wz), k = Q(N, !1);
        if (M)
          return /* @__PURE__ */ P.createElement(wp, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ P.createElement(xu, Cr({}, k, {
            width: O,
            height: S,
            title: j,
            desc: T
          }), this.renderClipPath(), vl(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var C, I;
          k.tabIndex = (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0, k.role = (I = this.props.role) !== null && I !== void 0 ? I : "application", k.onKeyDown = function(R) {
            g.accessibilityManager.keyboardEvent(R);
          }, k.onFocus = function() {
            g.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ P.createElement(wp, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ P.createElement("div", Cr({
          className: ee("recharts-wrapper", x),
          style: E({
            position: "relative",
            cursor: "default",
            width: O,
            height: S
          }, $)
        }, D, {
          ref: function(F) {
            g.container = F;
          }
        }), /* @__PURE__ */ P.createElement(xu, Cr({}, k, {
          width: O,
          height: S,
          title: j,
          desc: T,
          style: Lz
        }), this.renderClipPath(), vl(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(Zp);
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
  }, l)), H(y, "getDerivedStateFromProps", function(v, b) {
    var _ = v.dataKey, g = v.data, w = v.children, m = v.width, x = v.height, O = v.layout, S = v.stackOffset, $ = v.margin, M = b.dataStartIndex, j = b.dataEndIndex;
    if (b.updateId === void 0) {
      var T = qp(v);
      return E(E(E({}, T), {}, {
        updateId: 0
      }, d(E(E({
        props: v
      }, T), {}, {
        updateId: 0
      }), b)), {}, {
        prevDataKey: _,
        prevData: g,
        prevWidth: m,
        prevHeight: x,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: $,
        prevChildren: w
      });
    }
    if (_ !== b.prevDataKey || g !== b.prevData || m !== b.prevWidth || x !== b.prevHeight || O !== b.prevLayout || S !== b.prevStackOffset || !kr($, b.prevMargin)) {
      var N = qp(v), k = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, C = E(E({}, Kp(b, g, O)), {}, {
        updateId: b.updateId + 1
      }), I = E(E(E({}, N), k), C);
      return E(E(E({}, I), d(E({
        props: v
      }, I), b)), {}, {
        prevDataKey: _,
        prevData: g,
        prevWidth: m,
        prevHeight: x,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: $,
        prevChildren: w
      });
    }
    if (!gu(w, b.prevChildren)) {
      var D, R, F, q, G = Xe(w, Gr), W = G && (D = (R = G.props) === null || R === void 0 ? void 0 : R.startIndex) !== null && D !== void 0 ? D : M, V = G && (F = (q = G.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && F !== void 0 ? F : j, le = W !== M || V !== j, ye = !X(g), He = ye && !le ? b.updateId : b.updateId + 1;
      return E(E({
        updateId: He
      }, d(E(E({
        props: v
      }, b), {}, {
        updateId: He,
        dataStartIndex: W,
        dataEndIndex: V
      }), b)), {}, {
        prevChildren: w,
        dataStartIndex: W,
        dataEndIndex: V
      });
    }
    return null;
  }), H(y, "renderActiveDot", function(v, b, _) {
    var g;
    return /* @__PURE__ */ gt(v) ? g = /* @__PURE__ */ Se(v, b) : Z(v) ? g = v(b) : g = /* @__PURE__ */ P.createElement(Rc, b), /* @__PURE__ */ P.createElement(se, {
      className: "recharts-active-dot",
      key: _
    }, g);
  });
  var p = /* @__PURE__ */ Vp(function(b, _) {
    return /* @__PURE__ */ P.createElement(y, Cr({}, b, {
      ref: _
    }));
  });
  return p.displayName = y.displayName, p;
}, Gp = Yc({
  chartName: "LineChart",
  GraphicalChild: Pt,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Be
  }, {
    axisType: "yAxis",
    AxisComp: Le
  }],
  formatAxisMap: Fc
}), pr = Yc({
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
  formatAxisMap: Fc
}), Mm = Yc({
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
    AxisComp: Ro
  }],
  formatAxisMap: Fc
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
const Zc = ({ children: e }) => {
  const [t, r] = At(0), n = () => {
    r(
      (a) => a === e.length - 1 ? 0 : a + 1
    );
  }, i = () => {
    r(
      (a) => a === 0 ? e.length - 1 : a - 1
    );
  };
  return !e || e.length === 0 ? /* @__PURE__ */ A.jsx("div", { children: "No charts available" }) : /* @__PURE__ */ A.jsxs("div", { className: "chart-carousel-container", children: [
    /* @__PURE__ */ A.jsx("div", { className: "chart-carousel-slide", children: e[t] }),
    /* @__PURE__ */ A.jsxs("div", { className: "carousel-controls", children: [
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "carousel-button carousel-prev",
          onClick: i,
          "aria-label": "Previous chart",
          children: /* @__PURE__ */ A.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ A.jsx("path", { d: "M15 18l-6-6 6-6" }) })
        }
      ),
      /* @__PURE__ */ A.jsx("div", { className: "carousel-dots", children: e.map((a, o) => /* @__PURE__ */ A.jsx(
        "button",
        {
          className: `carousel-dot ${o === t ? "active" : ""}`,
          onClick: () => r(o),
          "aria-label": `Go to chart ${o + 1}`
        },
        o
      )) }),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: "carousel-button carousel-next",
          onClick: n,
          "aria-label": "Next chart",
          children: /* @__PURE__ */ A.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ A.jsx("path", { d: "M9 18l6-6-6-6" }) })
        }
      )
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "carousel-counter", children: [
      t + 1,
      " / ",
      e.length
    ] })
  ] });
}, Vz = ({ data: e, year: t }) => {
  if (e.length === 0)
    return /* @__PURE__ */ A.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = e.reduce((p, v) => p + v.total_views, 0), n = e.reduce((p, v) => p + v.total_uploads, 0), i = e.reduce((p, v) => p + v.shorts_uploads, 0), a = e.reduce((p, v) => p + v.views_from_shorts_total, 0), o = mt(i, n), u = mt(a, r), s = mt(
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
    /* @__PURE__ */ A.jsxs("div", { className: "carousel-chart-full", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-row", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: je(r) }),
          /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Total Views" })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: je(n) }),
          /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Total Uploads" })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ A.jsxs("div", { className: "kpi-value", children: [
            (o * 100).toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Shorts Share (Uploads)" })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ A.jsxs("div", { className: "kpi-value", children: [
            (u * 100).toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Shorts Share (Views)" })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
          /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: s.toFixed(2) }),
          /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Engagement / 1K Views" })
        ] })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ A.jsxs("h3", { className: "chart-title", children: [
          "Total Views by Channel (",
          t,
          ")"
        ] }),
        /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(pr, { data: c, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ A.jsx(
            Be,
            {
              dataKey: "channel",
              angle: -45,
              textAnchor: "end",
              height: 80,
              stroke: "#C4CDDD"
            }
          ),
          /* @__PURE__ */ A.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (p) => je(p) }),
          /* @__PURE__ */ A.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (p) => je(p)
            }
          ),
          /* @__PURE__ */ A.jsx(Te, { dataKey: "views", fill: "#4488FF" })
        ] }) })
      ] })
    ] }, "views-by-channel"),
    // Chart 2: Uploads Comparison
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Uploads: Shorts vs Normal" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(pr, { data: f, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
          Be,
          {
            dataKey: "channel",
            angle: -45,
            textAnchor: "end",
            height: 80,
            stroke: "#C4CDDD"
          }
        ),
        /* @__PURE__ */ A.jsx(Le, { stroke: "#C4CDDD" }),
        /* @__PURE__ */ A.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
        /* @__PURE__ */ A.jsx(Ze, {}),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: d.shorts }),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Normal", stackId: "a", fill: d.normal })
      ] }) })
    ] }, "uploads-comparison"),
    // Chart 3: Views Comparison
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Views: Shorts vs Normal" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(pr, { data: l, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
          Be,
          {
            dataKey: "channel",
            angle: -45,
            textAnchor: "end",
            height: 80,
            stroke: "#C4CDDD"
          }
        ),
        /* @__PURE__ */ A.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (p) => je(p) }),
        /* @__PURE__ */ A.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p) => je(p)
          }
        ),
        /* @__PURE__ */ A.jsx(Ze, {}),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: d.shorts }),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Normal", stackId: "a", fill: d.normal })
      ] }) })
    ] }, "views-comparison"),
    // Chart 4: Scatter Plot
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Shorts Supply vs Impact" }),
      /* @__PURE__ */ A.jsx("p", { className: "chart-subtitle", children: "X-axis: % of uploads that are Shorts | Y-axis: % of views from Shorts | Size: Total views" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(Mm, { margin: { top: 20, right: 30, left: 60, bottom: 40 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
          Be,
          {
            type: "number",
            dataKey: "x",
            name: "Shorts Upload %",
            stroke: "#C4CDDD",
            label: { value: "Shorts Upload Share (%)", position: "insideBottom", offset: -10, fill: "#E8EAEF" }
          }
        ),
        /* @__PURE__ */ A.jsx(
          Le,
          {
            type: "number",
            dataKey: "y",
            name: "Shorts Views %",
            stroke: "#C4CDDD",
            label: { value: "Shorts Views Share (%)", angle: -90, position: "insideLeft", fill: "#E8EAEF" }
          }
        ),
        /* @__PURE__ */ A.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p, v) => v === "size" ? je(p) : `${p.toFixed(1)}%`
          }
        ),
        /* @__PURE__ */ A.jsx(wn, { data: h, fill: "#FF4444", children: h.map((p, v) => /* @__PURE__ */ A.jsx(
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
  return /* @__PURE__ */ A.jsx("div", { className: "overview-charts", children: /* @__PURE__ */ A.jsx(Zc, { children: y }) });
}, Xz = ({
  data: e,
  year: t,
  selectedChannels: r
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ A.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const n = r[0], i = e.filter((w) => w.channelKey === n).sort((w, m) => w.month.localeCompare(m.month));
  if (i.length === 0)
    return /* @__PURE__ */ A.jsxs("div", { className: "no-data", children: [
      "No monthly data available for ",
      n,
      "."
    ] });
  const a = i.reduce((w, m) => w + m.views_total, 0), o = i.reduce((w, m) => w + m.uploads_count, 0), u = i.reduce((w, m) => w + m.uploads_short_count, 0), s = i.reduce((w, m) => w + m.views_shorts, 0), c = mt(a, o), f = mt(u, o), l = mt(s, a), h = mt(
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
  }, b = r.length > 1 ? /* @__PURE__ */ A.jsxs("div", { className: "drilldown-note", children: [
    "Drill-down shown for: ",
    /* @__PURE__ */ A.jsx("strong", { children: n.replace("@", "") }),
    " ",
    "(you have ",
    r.length,
    " channels selected)"
  ] }) : null, _ = /* @__PURE__ */ A.jsxs("div", { className: "kpi-row", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: je(a) }),
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-label", children: [
        "Total Views (",
        t,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: o }),
      /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Total Uploads" })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: je(c) }),
      /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Avg Views/Video" })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-value", children: [
        (f * 100).toFixed(1),
        "%"
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Shorts Share (Uploads)" })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-value", children: [
        (l * 100).toFixed(1),
        "%"
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Shorts Share (Views)" })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
      /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: h.toFixed(2) }),
      /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Engagement / 1K Views" })
    ] })
  ] }), g = [
    // Chart 1: Monthly Views with KPIs
    /* @__PURE__ */ A.jsxs("div", { className: "carousel-chart-full", children: [
      b,
      _,
      /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Monthly Views" }),
        /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 350, children: /* @__PURE__ */ A.jsxs(Gp, { data: d, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [
          /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ A.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ A.jsx(Le, { stroke: "#A4ADBD", tickFormatter: (w) => je(w) }),
          /* @__PURE__ */ A.jsx(
            ge,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (w) => je(w)
            }
          ),
          /* @__PURE__ */ A.jsx(Ze, {}),
          /* @__PURE__ */ A.jsx(Pt, { type: "monotone", dataKey: "Total Views", stroke: v.total, strokeWidth: 2 }),
          /* @__PURE__ */ A.jsx(Pt, { type: "monotone", dataKey: "Shorts Views", stroke: v.shorts, strokeWidth: 2 }),
          /* @__PURE__ */ A.jsx(Pt, { type: "monotone", dataKey: "Normal Views", stroke: v.normal, strokeWidth: 2 })
        ] }) })
      ] })
    ] }, "monthly-views"),
    // Chart 2: Monthly Uploads Stacked
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Monthly Uploads by Type" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(pr, { data: y, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(Le, { stroke: "#A4ADBD" }),
        /* @__PURE__ */ A.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
        /* @__PURE__ */ A.jsx(Ze, {}),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Shorts", stackId: "a", fill: v.shorts }),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Normal", stackId: "a", fill: v.normal })
      ] }) })
    ] }, "monthly-uploads"),
    // Chart 3: Shorts Share Over Time
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Shorts Share Over Time" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(Gp, { data: p, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(Le, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
        /* @__PURE__ */ A.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
        /* @__PURE__ */ A.jsx(Ze, {}),
        /* @__PURE__ */ A.jsx(Pt, { type: "monotone", dataKey: "Upload Share (%)", stroke: "#FFB344", strokeWidth: 2 }),
        /* @__PURE__ */ A.jsx(Pt, { type: "monotone", dataKey: "View Share (%)", stroke: "#FF44B3", strokeWidth: 2 })
      ] }) })
    ] }, "shorts-share")
  ];
  return /* @__PURE__ */ A.jsx("div", { className: "drilldown-charts", children: /* @__PURE__ */ A.jsx(Zc, { children: g }) });
}, Yz = ({
  data: e,
  selectedChannels: t
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ A.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = t.map((p) => {
    const v = e.filter((S) => S.channelKey === p), b = v.reduce((S, $) => S + $.uploads_count_Normal, 0), _ = v.reduce((S, $) => S + $.uploads_count_Short, 0), g = v.reduce((S, $) => S + $.views_total_Normal, 0), w = v.reduce((S, $) => S + $.views_total_Short, 0), m = mt(g, b), x = mt(w, _), O = mt(x, m);
    return {
      channel: p.replace("@", ""),
      avgViewsNormal: m,
      avgViewsShort: x,
      multiplier: O,
      totalViewsNormal: g,
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
  ]).filter((p) => p.duration > 0 && p.views > 0), u = o.map((p) => p.duration), s = Math.min(...u), c = Math.max(...u), f = (c - s) * 0.1, l = [
    Math.max(0, s - f),
    c + f
  ], h = {
    shorts: "#FF4444",
    normal: "#4488FF"
  }, d = ({ active: p, payload: v }) => {
    if (p && v && v.length) {
      const b = v[0].payload;
      return /* @__PURE__ */ A.jsxs("div", { style: { backgroundColor: "#1a1a2e", border: "1px solid #333", padding: "10px" }, children: [
        /* @__PURE__ */ A.jsx("p", { style: { margin: 0, color: "#fff" }, children: /* @__PURE__ */ A.jsx("strong", { children: b.channel }) }),
        /* @__PURE__ */ A.jsxs("p", { style: { margin: "5px 0", color: h.shorts }, children: [
          "Shorts: ",
          je(b.avgViewsShort),
          " avg views"
        ] }),
        /* @__PURE__ */ A.jsxs("p", { style: { margin: "5px 0", color: h.normal }, children: [
          "Normal: ",
          je(b.avgViewsNormal),
          " avg views"
        ] }),
        /* @__PURE__ */ A.jsxs("p", { style: { margin: "5px 0", color: "#FFB344" }, children: [
          "Multiplier: ",
          b.multiplier.toFixed(2),
          "x"
        ] })
      ] });
    }
    return null;
  }, y = [
    // Chart 1: Average Views Per Video by Type
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Average Views Per Video: Shorts vs Normal" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(pr, { data: n, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(Be, { dataKey: "channel", stroke: "#C4CDDD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(Le, { stroke: "#C4CDDD", tickFormatter: (p) => je(p) }),
        /* @__PURE__ */ A.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p) => je(p)
          }
        ),
        /* @__PURE__ */ A.jsx(Ze, {}),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Normal", fill: h.normal }),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "Shorts", fill: h.shorts })
      ] }) })
    ] }, "avg-views"),
    // Chart 2: Multiplier Chart
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Shorts vs Normal Performance Multiplier" }),
      /* @__PURE__ */ A.jsx("p", { className: "chart-subtitle", children: "How many times more (or less) views does a Short get on average compared to a normal video?" }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(pr, { data: i, margin: { top: 20, right: 30, left: 60, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(Be, { dataKey: "channel", stroke: "#C4CDDD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(Le, { stroke: "#C4CDDD", label: { value: "Multiplier (x)", angle: -90, position: "insideLeft", fill: "#E8EAEF" } }),
        /* @__PURE__ */ A.jsx(ge, { content: /* @__PURE__ */ A.jsx(d, {}) }),
        /* @__PURE__ */ A.jsx(Te, { dataKey: "multiplier", fill: "#FFB344" })
      ] }) })
    ] }, "multiplier"),
    // Chart 3: Duration vs Performance Scatter
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Duration vs Performance" }),
      /* @__PURE__ */ A.jsx("p", { className: "chart-subtitle", children: "Each point represents a channel-month. Blue = Normal videos, Red = Shorts." }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(Mm, { margin: { top: 20, right: 30, left: 80, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
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
        /* @__PURE__ */ A.jsx(
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
        /* @__PURE__ */ A.jsx(
          ge,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (p, v) => v === "views" || v === "size" ? je(p) : p
          }
        ),
        /* @__PURE__ */ A.jsx(wn, { data: o, fill: "#8884d8", children: o.map((p, v) => /* @__PURE__ */ A.jsx(
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
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsxs("h3", { className: "chart-title", children: [
        "Shorts Share Over Time: ",
        t[0].replace("@", "")
      ] }),
      /* @__PURE__ */ A.jsx(dt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(
        pr,
        {
          data: e.filter((p) => p.channelKey === t[0]).sort((p, v) => p.month.localeCompare(v.month)),
          margin: { top: 20, right: 30, left: 20, bottom: 60 },
          children: [
            /* @__PURE__ */ A.jsx(nt, { strokeDasharray: "3 3", stroke: "#333" }),
            /* @__PURE__ */ A.jsx(Be, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
            /* @__PURE__ */ A.jsx(Le, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
            /* @__PURE__ */ A.jsx(ge, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
            /* @__PURE__ */ A.jsx(Ze, {}),
            /* @__PURE__ */ A.jsx(
              Te,
              {
                dataKey: "uploads_share_within_channel_month_Short",
                name: "Upload Share (%)",
                fill: "#FFB344"
              }
            ),
            /* @__PURE__ */ A.jsx(
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
  ), /* @__PURE__ */ A.jsx("div", { className: "short-vs-long-charts", children: /* @__PURE__ */ A.jsx(Zc, { children: y }) });
}, Jz = ({
  initialViewMode: e = "overview",
  showMainHeader: t = !0,
  // Default to true for backward compatibility
  showChannelSelector: r = !1
  // Show channel selector for drill-down
}) => {
  const [n, i] = At(!0), [a, o] = At([]), [u, s] = At([]), [c, f] = At([]), [l, h] = At({
    year: 2024,
    selectedChannels: [],
    viewMode: e
  });
  Ya(() => {
    Um().then(({ annual: g, monthly: w, shortVsLong: m }) => {
      o(g), s(w), f(m);
      const x = Array.from(new Set(g.map((O) => O.channelKey)));
      h((O) => ({ ...O, selectedChannels: x })), i(!1);
    });
  }, []);
  const d = (g) => {
    h((w) => ({ ...w, ...g }));
  };
  if (n)
    return /* @__PURE__ */ A.jsx("div", { className: "dashboard-slide loading", children: /* @__PURE__ */ A.jsx("div", { className: "loading-spinner", children: "Loading dashboard data..." }) });
  const y = Array.from(new Set(a.map((g) => g.channelKey))), p = a.filter(
    (g) => g.year === l.year && l.selectedChannels.includes(g.channelKey)
  ), v = u.filter(
    (g) => g.year === l.year && l.selectedChannels.includes(g.channelKey)
  ), b = c.filter(
    (g) => g.year === l.year && l.selectedChannels.includes(g.channelKey)
  ), _ = {
    overview: "Overview",
    "channel-drilldown": "Channel Drill-down",
    "short-vs-long": "Short vs Long"
  };
  return /* @__PURE__ */ A.jsx("section", { className: "slide-section media-dashboard-slide", id: "dashboard", children: /* @__PURE__ */ A.jsxs("div", { className: "dashboard-container", children: [
    t && /* @__PURE__ */ A.jsxs("div", { className: "dashboard-header", children: [
      /* @__PURE__ */ A.jsx("h2", { className: "dashboard-title", children: "Interactive Media Analytics" }),
      /* @__PURE__ */ A.jsx("p", { className: "dashboard-subtitle", children: "Explore how top YouTube channels balance short-form and long-form content strategies" })
    ] }),
    !t && /* @__PURE__ */ A.jsx("div", { className: "dashboard-view-label", children: /* @__PURE__ */ A.jsx("h3", { className: "view-mode-name", children: _[e] }) }),
    /* @__PURE__ */ A.jsxs("div", { className: "dashboard-content", children: [
      r && e === "channel-drilldown" && /* @__PURE__ */ A.jsxs("div", { className: "channel-selector-compact", children: [
        /* @__PURE__ */ A.jsx("label", { className: "control-label", children: "Select Channel" }),
        /* @__PURE__ */ A.jsx(
          "select",
          {
            className: "channel-select-dropdown",
            value: l.selectedChannels[0] || y[0],
            onChange: (g) => d({ selectedChannels: [g.target.value] }),
            children: y.map((g) => /* @__PURE__ */ A.jsx("option", { value: g, children: g.replace("@", "") }, g))
          }
        )
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "dashboard-charts", children: [
        e === "overview" && /* @__PURE__ */ A.jsx(Vz, { data: p, year: l.year }),
        e === "channel-drilldown" && /* @__PURE__ */ A.jsx(
          Xz,
          {
            data: v,
            year: l.year,
            selectedChannels: l.selectedChannels
          }
        ),
        e === "short-vs-long" && /* @__PURE__ */ A.jsx(
          Yz,
          {
            data: b,
            year: l.year,
            selectedChannels: l.selectedChannels
          }
        )
      ] })
    ] })
  ] }) });
};
export {
  Jz as MediaDashboardSlide,
  Jz as default
};
