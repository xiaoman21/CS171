import * as Ot from "react";
import E, { isValidElement as Lt, Children as $r, PureComponent as nr, forwardRef as Up, useRef as xa, useImperativeHandle as zg, useState as cr, useCallback as Wg, useEffect as Po, useMemo as Kp, cloneElement as ze, createElement as qp, useContext as ir, createContext as Dr, Component as Vp } from "react";
var na = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ku = { exports: {} }, Gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dl;
function Ug() {
  if (Dl) return Gn;
  Dl = 1;
  var e = E, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l, f = {}, d = null, h = null;
    c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), s.ref !== void 0 && (h = s.ref);
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (f[l] = s[l]);
    if (u && u.defaultProps) for (l in s = u.defaultProps, s) f[l] === void 0 && (f[l] = s[l]);
    return { $$typeof: t, type: u, key: d, ref: h, props: f, _owner: i.current };
  }
  return Gn.Fragment = r, Gn.jsx = o, Gn.jsxs = o, Gn;
}
var Hn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl;
function Kg() {
  return Rl || (Rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = E, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, v = "@@iterator";
    function p(S) {
      if (S === null || typeof S != "object")
        return null;
      var U = y && S[y] || S[v];
      return typeof U == "function" ? U : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(S) {
      {
        for (var U = arguments.length, Z = new Array(U > 1 ? U - 1 : 0), oe = 1; oe < U; oe++)
          Z[oe - 1] = arguments[oe];
        b("error", S, Z);
      }
    }
    function b(S, U, Z) {
      {
        var oe = g.ReactDebugCurrentFrame, me = oe.getStackAddendum();
        me !== "" && (U += "%s", Z = Z.concat([me]));
        var Se = Z.map(function(de) {
          return String(de);
        });
        Se.unshift("Warning: " + U), Function.prototype.apply.call(console[S], console, Se);
      }
    }
    var _ = !1, m = !1, x = !1, O = !1, P = !1, $;
    $ = Symbol.for("react.module.reference");
    function I(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === a || P || S === i || S === c || S === l || O || S === h || _ || m || x || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === f || S.$$typeof === o || S.$$typeof === u || S.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === $ || S.getModuleId !== void 0));
    }
    function T(S, U, Z) {
      var oe = S.displayName;
      if (oe)
        return oe;
      var me = U.displayName || U.name || "";
      return me !== "" ? Z + "(" + me + ")" : Z;
    }
    function C(S) {
      return S.displayName || "Context";
    }
    function R(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case u:
            var U = S;
            return C(U) + ".Consumer";
          case o:
            var Z = S;
            return C(Z._context) + ".Provider";
          case s:
            return T(S, S.render, "ForwardRef");
          case f:
            var oe = S.displayName || null;
            return oe !== null ? oe : R(S.type) || "Memo";
          case d: {
            var me = S, Se = me._payload, de = me._init;
            try {
              return R(de(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, k = 0, L, F, K, V, M, B, z;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function X() {
      {
        if (k === 0) {
          L = console.log, F = console.info, K = console.warn, V = console.error, M = console.group, B = console.groupCollapsed, z = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        k++;
      }
    }
    function te() {
      {
        if (k--, k === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, S, {
              value: L
            }),
            info: N({}, S, {
              value: F
            }),
            warn: N({}, S, {
              value: K
            }),
            error: N({}, S, {
              value: V
            }),
            group: N({}, S, {
              value: M
            }),
            groupCollapsed: N({}, S, {
              value: B
            }),
            groupEnd: N({}, S, {
              value: z
            })
          });
        }
        k < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = g.ReactCurrentDispatcher, ie;
    function ne(S, U, Z) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (me) {
            var oe = me.stack.trim().match(/\n( *(at )?)/);
            ie = oe && oe[1] || "";
          }
        return `
` + ie + S;
      }
    }
    var W = !1, H;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      H = new ee();
    }
    function j(S, U) {
      if (!S || W)
        return "";
      {
        var Z = H.get(S);
        if (Z !== void 0)
          return Z;
      }
      var oe;
      W = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = re.current, re.current = null, X();
      try {
        if (U) {
          var de = function() {
            throw Error();
          };
          if (Object.defineProperty(de.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(de, []);
            } catch (at) {
              oe = at;
            }
            Reflect.construct(S, [], de);
          } else {
            try {
              de.call();
            } catch (at) {
              oe = at;
            }
            S.call(de.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            oe = at;
          }
          S();
        }
      } catch (at) {
        if (at && oe && typeof at.stack == "string") {
          for (var fe = at.stack.split(`
`), rt = oe.stack.split(`
`), Ie = fe.length - 1, Ne = rt.length - 1; Ie >= 1 && Ne >= 0 && fe[Ie] !== rt[Ne]; )
            Ne--;
          for (; Ie >= 1 && Ne >= 0; Ie--, Ne--)
            if (fe[Ie] !== rt[Ne]) {
              if (Ie !== 1 || Ne !== 1)
                do
                  if (Ie--, Ne--, Ne < 0 || fe[Ie] !== rt[Ne]) {
                    var yt = `
` + fe[Ie].replace(" at new ", " at ");
                    return S.displayName && yt.includes("<anonymous>") && (yt = yt.replace("<anonymous>", S.displayName)), typeof S == "function" && H.set(S, yt), yt;
                  }
                while (Ie >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        W = !1, re.current = Se, te(), Error.prepareStackTrace = me;
      }
      var qr = S ? S.displayName || S.name : "", br = qr ? ne(qr) : "";
      return typeof S == "function" && H.set(S, br), br;
    }
    function le(S, U, Z) {
      return j(S, !1);
    }
    function q(S) {
      var U = S.prototype;
      return !!(U && U.isReactComponent);
    }
    function ve(S, U, Z) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return j(S, q(S));
      if (typeof S == "string")
        return ne(S);
      switch (S) {
        case c:
          return ne("Suspense");
        case l:
          return ne("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case s:
            return le(S.render);
          case f:
            return ve(S.type, U, Z);
          case d: {
            var oe = S, me = oe._payload, Se = oe._init;
            try {
              return ve(Se(me), U, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, ke = {}, Et = g.ReactDebugCurrentFrame;
    function $t(S) {
      if (S) {
        var U = S._owner, Z = ve(S.type, S._source, U ? U.type : null);
        Et.setExtraStackFrame(Z);
      } else
        Et.setExtraStackFrame(null);
    }
    function Wr(S, U, Z, oe, me) {
      {
        var Se = Function.call.bind(ye);
        for (var de in S)
          if (Se(S, de)) {
            var fe = void 0;
            try {
              if (typeof S[de] != "function") {
                var rt = Error((oe || "React class") + ": " + Z + " type `" + de + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[de] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw rt.name = "Invariant Violation", rt;
              }
              fe = S[de](U, de, oe, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ie) {
              fe = Ie;
            }
            fe && !(fe instanceof Error) && ($t(me), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", Z, de, typeof fe), $t(null)), fe instanceof Error && !(fe.message in ke) && (ke[fe.message] = !0, $t(me), w("Failed %s type: %s", Z, fe.message), $t(null));
          }
      }
    }
    var Kt = Array.isArray;
    function lt(S) {
      return Kt(S);
    }
    function Un(S) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, Z = U && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return Z;
      }
    }
    function Kn(S) {
      try {
        return Ur(S), !1;
      } catch {
        return !0;
      }
    }
    function Ur(S) {
      return "" + S;
    }
    function qn(S) {
      if (Kn(S))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Un(S)), Ur(S);
    }
    var Vn = g.ReactCurrentOwner, Og = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, El, $l;
    function Sg(S) {
      if (ye.call(S, "ref")) {
        var U = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Ag(S) {
      if (ye.call(S, "key")) {
        var U = Object.getOwnPropertyDescriptor(S, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Pg(S, U) {
      typeof S.ref == "string" && Vn.current;
    }
    function Eg(S, U) {
      {
        var Z = function() {
          El || (El = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Z.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function $g(S, U) {
      {
        var Z = function() {
          $l || ($l = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        Z.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var Tg = function(S, U, Z, oe, me, Se, de) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: U,
        ref: Z,
        props: de,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function jg(S, U, Z, oe, me) {
      {
        var Se, de = {}, fe = null, rt = null;
        Z !== void 0 && (qn(Z), fe = "" + Z), Ag(U) && (qn(U.key), fe = "" + U.key), Sg(U) && (rt = U.ref, Pg(U, me));
        for (Se in U)
          ye.call(U, Se) && !Og.hasOwnProperty(Se) && (de[Se] = U[Se]);
        if (S && S.defaultProps) {
          var Ie = S.defaultProps;
          for (Se in Ie)
            de[Se] === void 0 && (de[Se] = Ie[Se]);
        }
        if (fe || rt) {
          var Ne = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          fe && Eg(de, Ne), rt && $g(de, Ne);
        }
        return Tg(S, fe, rt, me, oe, Vn.current, de);
      }
    }
    var au = g.ReactCurrentOwner, Tl = g.ReactDebugCurrentFrame;
    function Kr(S) {
      if (S) {
        var U = S._owner, Z = ve(S.type, S._source, U ? U.type : null);
        Tl.setExtraStackFrame(Z);
      } else
        Tl.setExtraStackFrame(null);
    }
    var ou;
    ou = !1;
    function uu(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function jl() {
      {
        if (au.current) {
          var S = R(au.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function Cg(S) {
      return "";
    }
    var Cl = {};
    function Mg(S) {
      {
        var U = jl();
        if (!U) {
          var Z = typeof S == "string" ? S : S.displayName || S.name;
          Z && (U = `

Check the top-level render call using <` + Z + ">.");
        }
        return U;
      }
    }
    function Ml(S, U) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var Z = Mg(U);
        if (Cl[Z])
          return;
        Cl[Z] = !0;
        var oe = "";
        S && S._owner && S._owner !== au.current && (oe = " It was passed a child from " + R(S._owner.type) + "."), Kr(S), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, oe), Kr(null);
      }
    }
    function Il(S, U) {
      {
        if (typeof S != "object")
          return;
        if (lt(S))
          for (var Z = 0; Z < S.length; Z++) {
            var oe = S[Z];
            uu(oe) && Ml(oe, U);
          }
        else if (uu(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var me = p(S);
          if (typeof me == "function" && me !== S.entries)
            for (var Se = me.call(S), de; !(de = Se.next()).done; )
              uu(de.value) && Ml(de.value, U);
        }
      }
    }
    function Ig(S) {
      {
        var U = S.type;
        if (U == null || typeof U == "string")
          return;
        var Z;
        if (typeof U == "function")
          Z = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === f))
          Z = U.propTypes;
        else
          return;
        if (Z) {
          var oe = R(U);
          Wr(Z, S.props, "prop", oe, S);
        } else if (U.PropTypes !== void 0 && !ou) {
          ou = !0;
          var me = R(U);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kg(S) {
      {
        for (var U = Object.keys(S.props), Z = 0; Z < U.length; Z++) {
          var oe = U[Z];
          if (oe !== "children" && oe !== "key") {
            Kr(S), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Kr(null);
            break;
          }
        }
        S.ref !== null && (Kr(S), w("Invalid attribute `ref` supplied to `React.Fragment`."), Kr(null));
      }
    }
    var kl = {};
    function Nl(S, U, Z, oe, me, Se) {
      {
        var de = I(S);
        if (!de) {
          var fe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = Cg();
          rt ? fe += rt : fe += jl();
          var Ie;
          S === null ? Ie = "null" : lt(S) ? Ie = "array" : S !== void 0 && S.$$typeof === t ? (Ie = "<" + (R(S.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Ie = typeof S, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ie, fe);
        }
        var Ne = jg(S, U, Z, me, Se);
        if (Ne == null)
          return Ne;
        if (de) {
          var yt = U.children;
          if (yt !== void 0)
            if (oe)
              if (lt(yt)) {
                for (var qr = 0; qr < yt.length; qr++)
                  Il(yt[qr], S);
                Object.freeze && Object.freeze(yt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Il(yt, S);
        }
        if (ye.call(U, "key")) {
          var br = R(S), at = Object.keys(U).filter(function(Fg) {
            return Fg !== "key";
          }), su = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kl[br + su]) {
            var Bg = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, su, br, Bg, br), kl[br + su] = !0;
          }
        }
        return S === n ? kg(Ne) : Ig(Ne), Ne;
      }
    }
    function Ng(S, U, Z) {
      return Nl(S, U, Z, !0);
    }
    function Dg(S, U, Z) {
      return Nl(S, U, Z, !1);
    }
    var Rg = Dg, Lg = Ng;
    Hn.Fragment = n, Hn.jsx = Rg, Hn.jsxs = Lg;
  }()), Hn;
}
process.env.NODE_ENV === "production" ? Ku.exports = Ug() : Ku.exports = Kg();
var A = Ku.exports;
function Q(e) {
  if (typeof e == "number") return e;
  const t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
async function qg() {
  try {
    const r = (await (await fetch("/tbl_AnnualChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((f, d) => {
        var h;
        o[f.trim()] = ((h = a[d]) == null ? void 0 : h.trim()) || "";
      });
      const u = Q(o.shorts_uploads), s = Q(o.total_uploads), c = Q(o.views_from_shorts_total || 0), l = Q(o.total_views);
      return {
        channelKey: o.channelKey,
        year: Q(o.year),
        is_ytd: o.is_ytd === "True" || o.is_ytd === "true",
        total_uploads: s,
        shorts_uploads: u,
        total_views: l,
        views_from_shorts_total: c,
        normal_uploads: Q(o.normal_uploads),
        normal_views: Q(o.normal_views),
        uploads_shorts_share: Q(o.uploads_shorts_share),
        percent_views_from_shorts_from_total: Q(o.percent_views_from_shorts_from_total),
        engagement_per_1k_views: Q(o.engagement_per_1k_views),
        avg_duration_seconds: Q(o.avg_duration_seconds),
        likes_per_1k_views: Q(o.likes_per_1k_views),
        comments_per_1k_views: Q(o.comments_per_1k_views),
        jan_views: Q(o.jan_views),
        feb_views: Q(o.feb_views),
        mar_views: Q(o.mar_views),
        apr_views: Q(o.apr_views),
        may_views: Q(o.may_views),
        jun_views: Q(o.jun_views),
        jul_views: Q(o.jul_views),
        aug_views: Q(o.aug_views),
        sep_views: Q(o.sep_views),
        oct_views: Q(o.oct_views),
        nov_views: Q(o.nov_views),
        dec_views: Q(o.dec_views)
      };
    });
  } catch (e) {
    return console.error("Error loading annual data:", e), [];
  }
}
async function Vg() {
  try {
    const r = (await (await fetch("/tbl_MonthlyChannelSummary.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      n.forEach((h, y) => {
        var v;
        o[h.trim()] = ((v = a[y]) == null ? void 0 : v.trim()) || "";
      });
      const u = Q(o.uploads_short_count), s = Q(o.uploads_count), c = Q(o.uploads_normal), l = Q(o.views_shorts), f = Q(o.views_total), d = Q(o.views_normal);
      return {
        channelKey: o.channelKey,
        year: Q(o.year),
        month: o.month,
        uploads_count: s,
        uploads_short_count: u,
        uploads_normal: c,
        views_total: f,
        views_shorts: l,
        views_normal: d,
        avg_views_per_video: Q(o.avg_views_per_video),
        avg_duration_seconds: Q(o.avg_duration_seconds),
        likes_per_1k_views: Q(o.likes_per_1k_views),
        comments_per_1k_views: Q(o.comments_per_1k_views),
        engagement_per_1k_views: Q(o.engagement_per_1k_views),
        percent_views_from_shorts_from_total: Q(o.percent_views_from_shorts_from_total),
        views_mom_pct: Q(o.views_mom_pct),
        views_share_across_channels: Q(o.views_share_across_channels),
        uploads_shorts_share: Q(o.uploads_shorts_share)
      };
    });
  } catch (e) {
    return console.error("Error loading monthly data:", e), [];
  }
}
async function Gg() {
  try {
    const r = (await (await fetch("/tbl_MonthlyShortVsLong.csv")).text()).trim().split(`
`), n = r[0].split(",");
    return r.slice(1).map((i) => {
      const a = i.split(","), o = {};
      return n.forEach((u, s) => {
        var c;
        o[u.trim()] = ((c = a[s]) == null ? void 0 : c.trim()) || "";
      }), {
        channelKey: o.channelKey,
        year: Q(o.year),
        month: o.month,
        uploads_count_Normal: Q(o.uploads_count_Normal),
        uploads_count_Short: Q(o.uploads_count_Short),
        views_total_Normal: Q(o.views_total_Normal),
        views_total_Short: Q(o.views_total_Short),
        likes_per_1k_views_Normal: Q(o.likes_per_1k_views_Normal),
        likes_per_1k_views_Short: Q(o.likes_per_1k_views_Short),
        comments_per_1k_views_Normal: Q(o.comments_per_1k_views_Normal),
        comments_per_1k_views_Short: Q(o.comments_per_1k_views_Short),
        engagement_per_1k_views_Normal: Q(o.engagement_per_1k_views_Normal),
        engagement_per_1k_views_Short: Q(o.engagement_per_1k_views_Short),
        avg_views_per_video_Normal: Q(o.avg_views_per_video_Normal),
        avg_views_per_video_Short: Q(o.avg_views_per_video_Short),
        avg_duration_seconds_Normal: Q(o.avg_duration_seconds_Normal),
        avg_duration_seconds_Short: Q(o.avg_duration_seconds_Short),
        uploads_share_within_channel_month_Normal: Q(o.uploads_share_within_channel_month_Normal),
        uploads_share_within_channel_month_Short: Q(o.uploads_share_within_channel_month_Short),
        views_share_within_channel_month_Normal: Q(o.views_share_within_channel_month_Normal),
        views_share_within_channel_month_Short: Q(o.views_share_within_channel_month_Short),
        avg_views_per_video_short_div_normal: Q(o.avg_views_per_video_short_div_normal),
        engagement_per_1k_views_short_div_normal: Q(o.engagement_per_1k_views_short_div_normal)
      };
    });
  } catch (e) {
    return console.error("Error loading short vs long data:", e), [];
  }
}
async function Hg() {
  const [e, t, r] = await Promise.all([
    qg(),
    Vg(),
    Gg()
  ]);
  return { annual: e, monthly: t, shortVsLong: r };
}
const ia = {
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
}, Yg = ({
  filters: e,
  allChannels: t,
  onFilterChange: r
}) => {
  const n = (u) => {
    const s = e.selectedChannels.includes(u) ? e.selectedChannels.filter((c) => c !== u) : [...e.selectedChannels, u];
    r({ selectedChannels: s });
  }, i = () => {
    r({ selectedChannels: t });
  }, a = () => {
    r({ selectedChannels: [] });
  }, o = (u) => u.replace("@", "");
  return /* @__PURE__ */ A.jsxs("div", { className: "dashboard-controls", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "control-group", children: [
      /* @__PURE__ */ A.jsx("label", { className: "control-label", children: "Year" }),
      /* @__PURE__ */ A.jsxs("div", { className: "year-selector-group", children: [
        /* @__PURE__ */ A.jsx(
          "button",
          {
            className: `year-btn ${e.year === 2024 ? "active" : ""}`,
            onClick: () => r({ year: 2024 }),
            children: "2024"
          }
        ),
        /* @__PURE__ */ A.jsx(
          "button",
          {
            className: `year-btn ${e.year === 2025 ? "active" : ""}`,
            onClick: () => r({ year: 2025 }),
            children: "2025 YTD"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "control-group", children: [
      /* @__PURE__ */ A.jsx("label", { className: "control-label", children: "Channels" }),
      /* @__PURE__ */ A.jsxs("div", { className: "channel-actions", children: [
        /* @__PURE__ */ A.jsx("button", { className: "action-btn", onClick: i, children: "Select All" }),
        /* @__PURE__ */ A.jsx("button", { className: "action-btn", onClick: a, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "channel-list", children: t.map((u) => /* @__PURE__ */ A.jsxs("label", { className: "channel-checkbox", children: [
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "checkbox",
            checked: e.selectedChannels.includes(u),
            onChange: () => n(u)
          }
        ),
        /* @__PURE__ */ A.jsx("span", { className: "channel-name", children: o(u) })
      ] }, u)) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "control-group", children: [
      /* @__PURE__ */ A.jsx("label", { className: "control-label", children: "View Mode" }),
      /* @__PURE__ */ A.jsx("div", { className: "view-mode-tabs", children: Object.keys(ia).map((u) => /* @__PURE__ */ A.jsx(
        "button",
        {
          className: `view-mode-btn ${e.viewMode === u ? "active" : ""}`,
          onClick: () => r({ viewMode: u }),
          children: ia[u].title
        },
        u
      )) })
    ] }),
    /* @__PURE__ */ A.jsx("div", { className: "control-group", children: /* @__PURE__ */ A.jsxs("div", { className: "view-description", children: [
      /* @__PURE__ */ A.jsx("h4", { className: "view-description-title", children: ia[e.viewMode].title }),
      /* @__PURE__ */ A.jsx("p", { className: "view-description-text", children: ia[e.viewMode].description })
    ] }) })
  ] });
};
function Gp(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Gp(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function he() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Gp(e)) && (n && (n += " "), n += t);
  return n;
}
var Xg = Array.isArray, ct = Xg, Zg = typeof na == "object" && na && na.Object === Object && na, Hp = Zg, Jg = Hp, Qg = typeof self == "object" && self && self.Object === Object && self, eb = Jg || Qg || Function("return this")(), Ut = eb, tb = Ut, rb = tb.Symbol, Hi = rb, Ll = Hi, Yp = Object.prototype, nb = Yp.hasOwnProperty, ib = Yp.toString, Yn = Ll ? Ll.toStringTag : void 0;
function ab(e) {
  var t = nb.call(e, Yn), r = e[Yn];
  try {
    e[Yn] = void 0;
    var n = !0;
  } catch {
  }
  var i = ib.call(e);
  return n && (t ? e[Yn] = r : delete e[Yn]), i;
}
var ob = ab, ub = Object.prototype, sb = ub.toString;
function cb(e) {
  return sb.call(e);
}
var lb = cb, Bl = Hi, fb = ob, db = lb, hb = "[object Null]", pb = "[object Undefined]", Fl = Bl ? Bl.toStringTag : void 0;
function vb(e) {
  return e == null ? e === void 0 ? pb : hb : Fl && Fl in Object(e) ? fb(e) : db(e);
}
var ar = vb;
function yb(e) {
  return e != null && typeof e == "object";
}
var or = yb, mb = ar, gb = or, bb = "[object Symbol]";
function xb(e) {
  return typeof e == "symbol" || gb(e) && mb(e) == bb;
}
var $n = xb, wb = ct, _b = $n, Ob = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sb = /^\w*$/;
function Ab(e, t) {
  if (wb(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || _b(e) ? !0 : Sb.test(e) || !Ob.test(e) || t != null && e in Object(t);
}
var xc = Ab;
function Pb(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var pr = Pb;
const Tn = /* @__PURE__ */ $e(pr);
var Eb = ar, $b = pr, Tb = "[object AsyncFunction]", jb = "[object Function]", Cb = "[object GeneratorFunction]", Mb = "[object Proxy]";
function Ib(e) {
  if (!$b(e))
    return !1;
  var t = Eb(e);
  return t == jb || t == Cb || t == Tb || t == Mb;
}
var wc = Ib;
const se = /* @__PURE__ */ $e(wc);
var kb = Ut, Nb = kb["__core-js_shared__"], Db = Nb, cu = Db, zl = function() {
  var e = /[^.]+$/.exec(cu && cu.keys && cu.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rb(e) {
  return !!zl && zl in e;
}
var Lb = Rb, Bb = Function.prototype, Fb = Bb.toString;
function zb(e) {
  if (e != null) {
    try {
      return Fb.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xp = zb, Wb = wc, Ub = Lb, Kb = pr, qb = Xp, Vb = /[\\^$.*+?()[\]{}|]/g, Gb = /^\[object .+?Constructor\]$/, Hb = Function.prototype, Yb = Object.prototype, Xb = Hb.toString, Zb = Yb.hasOwnProperty, Jb = RegExp(
  "^" + Xb.call(Zb).replace(Vb, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qb(e) {
  if (!Kb(e) || Ub(e))
    return !1;
  var t = Wb(e) ? Jb : Gb;
  return t.test(qb(e));
}
var e0 = Qb;
function t0(e, t) {
  return e == null ? void 0 : e[t];
}
var r0 = t0, n0 = e0, i0 = r0;
function a0(e, t) {
  var r = i0(e, t);
  return n0(r) ? r : void 0;
}
var Rr = a0, o0 = Rr, u0 = o0(Object, "create"), Eo = u0, Wl = Eo;
function s0() {
  this.__data__ = Wl ? Wl(null) : {}, this.size = 0;
}
var c0 = s0;
function l0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var f0 = l0, d0 = Eo, h0 = "__lodash_hash_undefined__", p0 = Object.prototype, v0 = p0.hasOwnProperty;
function y0(e) {
  var t = this.__data__;
  if (d0) {
    var r = t[e];
    return r === h0 ? void 0 : r;
  }
  return v0.call(t, e) ? t[e] : void 0;
}
var m0 = y0, g0 = Eo, b0 = Object.prototype, x0 = b0.hasOwnProperty;
function w0(e) {
  var t = this.__data__;
  return g0 ? t[e] !== void 0 : x0.call(t, e);
}
var _0 = w0, O0 = Eo, S0 = "__lodash_hash_undefined__";
function A0(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = O0 && t === void 0 ? S0 : t, this;
}
var P0 = A0, E0 = c0, $0 = f0, T0 = m0, j0 = _0, C0 = P0;
function jn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
jn.prototype.clear = E0;
jn.prototype.delete = $0;
jn.prototype.get = T0;
jn.prototype.has = j0;
jn.prototype.set = C0;
var M0 = jn;
function I0() {
  this.__data__ = [], this.size = 0;
}
var k0 = I0;
function N0(e, t) {
  return e === t || e !== e && t !== t;
}
var _c = N0, D0 = _c;
function R0(e, t) {
  for (var r = e.length; r--; )
    if (D0(e[r][0], t))
      return r;
  return -1;
}
var $o = R0, L0 = $o, B0 = Array.prototype, F0 = B0.splice;
function z0(e) {
  var t = this.__data__, r = L0(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : F0.call(t, r, 1), --this.size, !0;
}
var W0 = z0, U0 = $o;
function K0(e) {
  var t = this.__data__, r = U0(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var q0 = K0, V0 = $o;
function G0(e) {
  return V0(this.__data__, e) > -1;
}
var H0 = G0, Y0 = $o;
function X0(e, t) {
  var r = this.__data__, n = Y0(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Z0 = X0, J0 = k0, Q0 = W0, ex = q0, tx = H0, rx = Z0;
function Cn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Cn.prototype.clear = J0;
Cn.prototype.delete = Q0;
Cn.prototype.get = ex;
Cn.prototype.has = tx;
Cn.prototype.set = rx;
var To = Cn, nx = Rr, ix = Ut, ax = nx(ix, "Map"), Oc = ax, Ul = M0, ox = To, ux = Oc;
function sx() {
  this.size = 0, this.__data__ = {
    hash: new Ul(),
    map: new (ux || ox)(),
    string: new Ul()
  };
}
var cx = sx;
function lx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var fx = lx, dx = fx;
function hx(e, t) {
  var r = e.__data__;
  return dx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var jo = hx, px = jo;
function vx(e) {
  var t = px(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var yx = vx, mx = jo;
function gx(e) {
  return mx(this, e).get(e);
}
var bx = gx, xx = jo;
function wx(e) {
  return xx(this, e).has(e);
}
var _x = wx, Ox = jo;
function Sx(e, t) {
  var r = Ox(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Ax = Sx, Px = cx, Ex = yx, $x = bx, Tx = _x, jx = Ax;
function Mn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Mn.prototype.clear = Px;
Mn.prototype.delete = Ex;
Mn.prototype.get = $x;
Mn.prototype.has = Tx;
Mn.prototype.set = jx;
var Sc = Mn, Zp = Sc, Cx = "Expected a function";
function Ac(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Cx);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Ac.Cache || Zp)(), r;
}
Ac.Cache = Zp;
var Jp = Ac;
const Mx = /* @__PURE__ */ $e(Jp);
var Ix = Jp, kx = 500;
function Nx(e) {
  var t = Ix(e, function(n) {
    return r.size === kx && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Dx = Nx, Rx = Dx, Lx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bx = /\\(\\)?/g, Fx = Rx(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lx, function(r, n, i, a) {
    t.push(i ? a.replace(Bx, "$1") : n || r);
  }), t;
}), zx = Fx;
function Wx(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Pc = Wx, Kl = Hi, Ux = Pc, Kx = ct, qx = $n, ql = Kl ? Kl.prototype : void 0, Vl = ql ? ql.toString : void 0;
function Qp(e) {
  if (typeof e == "string")
    return e;
  if (Kx(e))
    return Ux(e, Qp) + "";
  if (qx(e))
    return Vl ? Vl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Vx = Qp, Gx = Vx;
function Hx(e) {
  return e == null ? "" : Gx(e);
}
var ev = Hx, Yx = ct, Xx = xc, Zx = zx, Jx = ev;
function Qx(e, t) {
  return Yx(e) ? e : Xx(e, t) ? [e] : Zx(Jx(e));
}
var tv = Qx, ew = $n;
function tw(e) {
  if (typeof e == "string" || ew(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Co = tw, rw = tv, nw = Co;
function iw(e, t) {
  t = rw(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[nw(t[r++])];
  return r && r == n ? e : void 0;
}
var Ec = iw, aw = Ec;
function ow(e, t, r) {
  var n = e == null ? void 0 : aw(e, t);
  return n === void 0 ? r : n;
}
var rv = ow;
const St = /* @__PURE__ */ $e(rv);
function uw(e) {
  return e == null;
}
var sw = uw;
const ue = /* @__PURE__ */ $e(sw);
var cw = ar, lw = ct, fw = or, dw = "[object String]";
function hw(e) {
  return typeof e == "string" || !lw(e) && fw(e) && cw(e) == dw;
}
var pw = hw;
const Mr = /* @__PURE__ */ $e(pw);
var qu = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl;
function vw() {
  if (Gl) return ge;
  Gl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case n:
            case c:
            case l:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case o:
                case s:
                case d:
                case f:
                case a:
                  return p;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return ge.ContextConsumer = o, ge.ContextProvider = a, ge.Element = e, ge.ForwardRef = s, ge.Fragment = r, ge.Lazy = d, ge.Memo = f, ge.Portal = t, ge.Profiler = i, ge.StrictMode = n, ge.Suspense = c, ge.SuspenseList = l, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(p) {
    return v(p) === o;
  }, ge.isContextProvider = function(p) {
    return v(p) === a;
  }, ge.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ge.isForwardRef = function(p) {
    return v(p) === s;
  }, ge.isFragment = function(p) {
    return v(p) === r;
  }, ge.isLazy = function(p) {
    return v(p) === d;
  }, ge.isMemo = function(p) {
    return v(p) === f;
  }, ge.isPortal = function(p) {
    return v(p) === t;
  }, ge.isProfiler = function(p) {
    return v(p) === i;
  }, ge.isStrictMode = function(p) {
    return v(p) === n;
  }, ge.isSuspense = function(p) {
    return v(p) === c;
  }, ge.isSuspenseList = function(p) {
    return v(p) === l;
  }, ge.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === c || p === l || p === h || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === a || p.$$typeof === o || p.$$typeof === s || p.$$typeof === y || p.getModuleId !== void 0);
  }, ge.typeOf = v, ge;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hl;
function yw() {
  return Hl || (Hl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = !1, v = !1, p = !1, g = !1, w = !1, b;
    b = Symbol.for("react.module.reference");
    function _(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === r || q === i || w || q === n || q === c || q === l || g || q === h || y || v || p || typeof q == "object" && q !== null && (q.$$typeof === d || q.$$typeof === f || q.$$typeof === a || q.$$typeof === o || q.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === b || q.getModuleId !== void 0));
    }
    function m(q) {
      if (typeof q == "object" && q !== null) {
        var ve = q.$$typeof;
        switch (ve) {
          case e:
            var ye = q.type;
            switch (ye) {
              case r:
              case i:
              case n:
              case c:
              case l:
                return ye;
              default:
                var ke = ye && ye.$$typeof;
                switch (ke) {
                  case u:
                  case o:
                  case s:
                  case d:
                  case f:
                  case a:
                    return ke;
                  default:
                    return ve;
                }
            }
          case t:
            return ve;
        }
      }
    }
    var x = o, O = a, P = e, $ = s, I = r, T = d, C = f, R = t, N = i, k = n, L = c, F = l, K = !1, V = !1;
    function M(q) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(q) {
      return V || (V = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(q) {
      return m(q) === o;
    }
    function G(q) {
      return m(q) === a;
    }
    function X(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function te(q) {
      return m(q) === s;
    }
    function re(q) {
      return m(q) === r;
    }
    function ie(q) {
      return m(q) === d;
    }
    function ne(q) {
      return m(q) === f;
    }
    function W(q) {
      return m(q) === t;
    }
    function H(q) {
      return m(q) === i;
    }
    function ee(q) {
      return m(q) === n;
    }
    function j(q) {
      return m(q) === c;
    }
    function le(q) {
      return m(q) === l;
    }
    be.ContextConsumer = x, be.ContextProvider = O, be.Element = P, be.ForwardRef = $, be.Fragment = I, be.Lazy = T, be.Memo = C, be.Portal = R, be.Profiler = N, be.StrictMode = k, be.Suspense = L, be.SuspenseList = F, be.isAsyncMode = M, be.isConcurrentMode = B, be.isContextConsumer = z, be.isContextProvider = G, be.isElement = X, be.isForwardRef = te, be.isFragment = re, be.isLazy = ie, be.isMemo = ne, be.isPortal = W, be.isProfiler = H, be.isStrictMode = ee, be.isSuspense = j, be.isSuspenseList = le, be.isValidElementType = _, be.typeOf = m;
  }()), be;
}
process.env.NODE_ENV === "production" ? qu.exports = vw() : qu.exports = yw();
var mw = qu.exports, gw = ar, bw = or, xw = "[object Number]";
function ww(e) {
  return typeof e == "number" || bw(e) && gw(e) == xw;
}
var nv = ww;
const _w = /* @__PURE__ */ $e(nv);
var Ow = nv;
function Sw(e) {
  return Ow(e) && e != +e;
}
var Aw = Sw;
const Yi = /* @__PURE__ */ $e(Aw);
var It = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Sr = function(t) {
  return Mr(t) && t.indexOf("%") === t.length - 1;
}, Y = function(t) {
  return _w(t) && !Yi(t);
}, Pw = function(t) {
  return ue(t);
}, We = function(t) {
  return Y(t) || Mr(t);
}, Ew = 0, In = function(t) {
  var r = ++Ew;
  return "".concat(t || "").concat(r);
}, Ir = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!Y(t) && !Mr(t))
    return n;
  var a;
  if (Sr(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Yi(a) && (a = n), i && a > r && (a = r), a;
}, lr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, $w = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, nt = function(t, r) {
  return Y(t) && Y(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function wa(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : St(n, t)) === r;
  });
}
var Tw = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, u = 1 / 0, s = -1 / 0, c = 0, l = 0, f = 0; f < r; f++)
    c = t[f].cx || 0, l = t[f].cy || 0, n += c, i += l, a += c * l, o += c * c, u = Math.min(u, c), s = Math.max(s, c);
  var d = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return {
    xmin: u,
    xmax: s,
    a: d,
    b: (i - d * n) / r
  };
}, jw = function(t, r) {
  return Y(t) && Y(r) ? t - r : Mr(t) && Mr(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function Qr(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Vu(e) {
  "@babel/helpers - typeof";
  return Vu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vu(e);
}
var Cw = ["viewBox", "children"], Mw = [
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
], Yl = ["points", "pathLength"], lu = {
  svg: Cw,
  polygon: Yl,
  polyline: Yl
}, $c = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], _a = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Lt(t) && (n = t.props), !Tn(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    $c.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, Iw = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, hi = function(t, r, n) {
  if (!Tn(t) || Vu(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    $c.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = Iw(o, r, n));
  }), i;
}, kw = ["children"], Nw = ["children"];
function Xl(e, t) {
  if (e == null) return {};
  var r = Dw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Dw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Gu(e) {
  "@babel/helpers - typeof";
  return Gu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gu(e);
}
var Zl = {
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
}, Xt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Jl = null, fu = null, Tc = function e(t) {
  if (t === Jl && Array.isArray(fu))
    return fu;
  var r = [];
  return $r.forEach(t, function(n) {
    ue(n) || (mw.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), fu = r, Jl = t, r;
};
function st(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Xt(i);
  }) : n = [Xt(t)], Tc(e).forEach(function(i) {
    var a = St(i, "type.displayName") || St(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function ht(e, t) {
  var r = st(e, t);
  return r && r[0];
}
var Ql = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!Y(n) || n <= 0 || !Y(i) || i <= 0);
}, Rw = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Lw = function(t) {
  return t && t.type && Mr(t.type) && Rw.indexOf(t.type) >= 0;
}, Bw = function(t) {
  return t && Gu(t) === "object" && "clipDot" in t;
}, Fw = function(t, r, n, i) {
  var a, o = (a = lu == null ? void 0 : lu[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !se(t) && (i && o.includes(r) || Mw.includes(r)) || n && $c.includes(r);
}, ce = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Lt(t) && (i = t.props), !Tn(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    Fw((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Hu = function e(t, r) {
  if (t === r)
    return !0;
  var n = $r.count(t);
  if (n !== $r.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return ef(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!ef(a, o))
      return !1;
  }
  return !0;
}, ef = function(t, r) {
  if (ue(t) && ue(r))
    return !0;
  if (!ue(t) && !ue(r)) {
    var n = t.props || {}, i = n.children, a = Xl(n, kw), o = r.props || {}, u = o.children, s = Xl(o, Nw);
    return i && u ? Qr(a, s) && Hu(i, u) : !i && !u ? Qr(a, s) : !1;
  }
  return !1;
}, tf = function(t, r) {
  var n = [], i = {};
  return Tc(t).forEach(function(a, o) {
    if (Lw(a))
      n.push(a);
    else if (a) {
      var u = Xt(a.type), s = r[u] || {}, c = s.handler, l = s.once;
      if (c && (!l || !i[u])) {
        var f = c(a, u, o);
        n.push(f), i[u] = !0;
      }
    }
  }), n;
}, zw = function(t) {
  var r = t && t.type;
  return r && Zl[r] ? Zl[r] : null;
}, Ww = function(t, r) {
  return Tc(r).indexOf(t);
}, Uw = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Yu() {
  return Yu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yu.apply(this, arguments);
}
function Kw(e, t) {
  if (e == null) return {};
  var r = qw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Xu(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, s = e.desc, c = Kw(e, Uw), l = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = he("recharts-surface", a);
  return /* @__PURE__ */ E.createElement("svg", Yu({}, ce(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ E.createElement("title", null, u), /* @__PURE__ */ E.createElement("desc", null, s), t);
}
var Vw = ["children", "className"];
function Zu() {
  return Zu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zu.apply(this, arguments);
}
function Gw(e, t) {
  if (e == null) return {};
  var r = Hw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Hw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ee = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = Gw(e, Vw), a = he("recharts-layer", n);
  return /* @__PURE__ */ E.createElement("g", Zu({
    className: a
  }, ce(i, !0), {
    ref: t
  }), r);
}), Yw = process.env.NODE_ENV !== "production", Zt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (Yw && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
};
function Xw(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var Zw = Xw, Jw = Zw;
function Qw(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Jw(e, t, r);
}
var e_ = Qw, t_ = "\\ud800-\\udfff", r_ = "\\u0300-\\u036f", n_ = "\\ufe20-\\ufe2f", i_ = "\\u20d0-\\u20ff", a_ = r_ + n_ + i_, o_ = "\\ufe0e\\ufe0f", u_ = "\\u200d", s_ = RegExp("[" + u_ + t_ + a_ + o_ + "]");
function c_(e) {
  return s_.test(e);
}
var iv = c_;
function l_(e) {
  return e.split("");
}
var f_ = l_, av = "\\ud800-\\udfff", d_ = "\\u0300-\\u036f", h_ = "\\ufe20-\\ufe2f", p_ = "\\u20d0-\\u20ff", v_ = d_ + h_ + p_, y_ = "\\ufe0e\\ufe0f", m_ = "[" + av + "]", Ju = "[" + v_ + "]", Qu = "\\ud83c[\\udffb-\\udfff]", g_ = "(?:" + Ju + "|" + Qu + ")", ov = "[^" + av + "]", uv = "(?:\\ud83c[\\udde6-\\uddff]){2}", sv = "[\\ud800-\\udbff][\\udc00-\\udfff]", b_ = "\\u200d", cv = g_ + "?", lv = "[" + y_ + "]?", x_ = "(?:" + b_ + "(?:" + [ov, uv, sv].join("|") + ")" + lv + cv + ")*", w_ = lv + cv + x_, __ = "(?:" + [ov + Ju + "?", Ju, uv, sv, m_].join("|") + ")", O_ = RegExp(Qu + "(?=" + Qu + ")|" + __ + w_, "g");
function S_(e) {
  return e.match(O_) || [];
}
var A_ = S_, P_ = f_, E_ = iv, $_ = A_;
function T_(e) {
  return E_(e) ? $_(e) : P_(e);
}
var j_ = T_, C_ = e_, M_ = iv, I_ = j_, k_ = ev;
function N_(e) {
  return function(t) {
    t = k_(t);
    var r = M_(t) ? I_(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? C_(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var D_ = N_, R_ = D_, L_ = R_("toUpperCase"), B_ = L_;
const Mo = /* @__PURE__ */ $e(B_);
function Pe(e) {
  return function() {
    return e;
  };
}
const fv = Math.cos, Oa = Math.sin, Nt = Math.sqrt, Sa = Math.PI, Io = 2 * Sa, es = Math.PI, ts = 2 * es, wr = 1e-6, F_ = ts - wr;
function dv(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function z_(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return dv;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class W_ {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? dv : z_(t);
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
    let o = this._x1, u = this._y1, s = n - t, c = i - r, l = o - t, f = u - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > wr) if (!(Math.abs(f * s - c * l) > wr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, y = i - u, v = s * s + c * c, p = h * h + y * y, g = Math.sqrt(v), w = Math.sqrt(d), b = a * Math.tan((es - Math.acos((v + d - p) / (2 * g * w))) / 2), _ = b / w, m = b / g;
      Math.abs(_ - 1) > wr && this._append`L${t + _ * l},${r + _ * f}`, this._append`A${a},${a},0,0,${+(f * h > l * y)},${this._x1 = t + m * s},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, l = r + s, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > wr || Math.abs(this._y1 - l) > wr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % ts + ts), d > F_ ? this._append`A${n},${n},0,1,${f},${t - u},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > wr && this._append`A${n},${n},0,${+(d >= es)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function jc(e) {
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
  }, () => new W_(t);
}
function Cc(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function hv(e) {
  this._context = e;
}
hv.prototype = {
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
function ko(e) {
  return new hv(e);
}
function pv(e) {
  return e[0];
}
function vv(e) {
  return e[1];
}
function yv(e, t) {
  var r = Pe(!0), n = null, i = ko, a = null, o = jc(u);
  e = typeof e == "function" ? e : e === void 0 ? pv : Pe(e), t = typeof t == "function" ? t : t === void 0 ? vv : Pe(t);
  function u(s) {
    var c, l = (s = Cc(s)).length, f, d = !1, h;
    for (n == null && (a = i(h = o())), c = 0; c <= l; ++c)
      !(c < l && r(f = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, c, s), +t(f, c, s));
    if (h) return a = null, h + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Pe(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Pe(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Pe(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function aa(e, t, r) {
  var n = null, i = Pe(!0), a = null, o = ko, u = null, s = jc(c);
  e = typeof e == "function" ? e : e === void 0 ? pv : Pe(+e), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? vv : Pe(+r);
  function c(f) {
    var d, h, y, v = (f = Cc(f)).length, p, g = !1, w, b = new Array(v), _ = new Array(v);
    for (a == null && (u = o(w = s())), d = 0; d <= v; ++d) {
      if (!(d < v && i(p = f[d], d, f)) === g)
        if (g = !g)
          h = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), y = d - 1; y >= h; --y)
            u.point(b[y], _[y]);
          u.lineEnd(), u.areaEnd();
        }
      g && (b[d] = +e(p, d, f), _[d] = +t(p, d, f), u.point(n ? +n(p, d, f) : b[d], r ? +r(p, d, f) : _[d]));
    }
    if (w) return u = null, w + "" || null;
  }
  function l() {
    return yv().defined(i).curve(o).context(a);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Pe(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Pe(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Pe(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Pe(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Pe(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Pe(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return l().x(e).y(t);
  }, c.lineY1 = function() {
    return l().x(e).y(r);
  }, c.lineX1 = function() {
    return l().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Pe(!!f), c) : i;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), c) : a;
  }, c;
}
class mv {
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
function U_(e) {
  return new mv(e, !0);
}
function K_(e) {
  return new mv(e, !1);
}
const Mc = {
  draw(e, t) {
    const r = Nt(t / Sa);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Io);
  }
}, q_ = {
  draw(e, t) {
    const r = Nt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, gv = Nt(1 / 3), V_ = gv * 2, G_ = {
  draw(e, t) {
    const r = Nt(t / V_), n = r * gv;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, H_ = {
  draw(e, t) {
    const r = Nt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Y_ = 0.8908130915292852, bv = Oa(Sa / 10) / Oa(7 * Sa / 10), X_ = Oa(Io / 10) * bv, Z_ = -fv(Io / 10) * bv, J_ = {
  draw(e, t) {
    const r = Nt(t * Y_), n = X_ * r, i = Z_ * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Io * a / 5, u = fv(o), s = Oa(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
    }
    e.closePath();
  }
}, du = Nt(3), Q_ = {
  draw(e, t) {
    const r = -Nt(t / (du * 3));
    e.moveTo(0, r * 2), e.lineTo(-du * r, -r), e.lineTo(du * r, -r), e.closePath();
  }
}, mt = -0.5, gt = Nt(3) / 2, rs = 1 / Nt(12), eO = (rs / 2 + 1) * 3, tO = {
  draw(e, t) {
    const r = Nt(t / eO), n = r / 2, i = r * rs, a = n, o = r * rs + r, u = -a, s = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, s), e.lineTo(mt * n - gt * i, gt * n + mt * i), e.lineTo(mt * a - gt * o, gt * a + mt * o), e.lineTo(mt * u - gt * s, gt * u + mt * s), e.lineTo(mt * n + gt * i, mt * i - gt * n), e.lineTo(mt * a + gt * o, mt * o - gt * a), e.lineTo(mt * u + gt * s, mt * s - gt * u), e.closePath();
  }
};
function rO(e, t) {
  let r = null, n = jc(i);
  e = typeof e == "function" ? e : Pe(e || Mc), t = typeof t == "function" ? t : Pe(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Pe(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Pe(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Aa() {
}
function Pa(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function xv(e) {
  this._context = e;
}
xv.prototype = {
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
        Pa(this, this._x1, this._y1);
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
        Pa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function nO(e) {
  return new xv(e);
}
function wv(e) {
  this._context = e;
}
wv.prototype = {
  areaStart: Aa,
  areaEnd: Aa,
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
        Pa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function iO(e) {
  return new wv(e);
}
function _v(e) {
  this._context = e;
}
_v.prototype = {
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
        Pa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function aO(e) {
  return new _v(e);
}
function Ov(e) {
  this._context = e;
}
Ov.prototype = {
  areaStart: Aa,
  areaEnd: Aa,
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
function oO(e) {
  return new Ov(e);
}
function rf(e) {
  return e < 0 ? -1 : 1;
}
function nf(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (rf(a) + rf(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function af(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function hu(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Ea(e) {
  this._context = e;
}
Ea.prototype = {
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
        hu(this, this._t0, af(this, this._t0));
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
          this._point = 3, hu(this, af(this, r = nf(this, e, t)), r);
          break;
        default:
          hu(this, this._t0, r = nf(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Sv(e) {
  this._context = new Av(e);
}
(Sv.prototype = Object.create(Ea.prototype)).point = function(e, t) {
  Ea.prototype.point.call(this, t, e);
};
function Av(e) {
  this._context = e;
}
Av.prototype = {
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
function uO(e) {
  return new Ea(e);
}
function sO(e) {
  return new Sv(e);
}
function Pv(e) {
  this._context = e;
}
Pv.prototype = {
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
        for (var n = of(e), i = of(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function of(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function cO(e) {
  return new Pv(e);
}
function No(e, t) {
  this._context = e, this._t = t;
}
No.prototype = {
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
function lO(e) {
  return new No(e, 0.5);
}
function fO(e) {
  return new No(e, 0);
}
function dO(e) {
  return new No(e, 1);
}
function rn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function ns(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function hO(e, t) {
  return e[t];
}
function pO(e) {
  const t = [];
  return t.key = e, t;
}
function vO() {
  var e = Pe([]), t = ns, r = rn, n = hO;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), pO), u, s = o.length, c = -1, l;
    for (const f of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(f, o[u].key, c, a)]).data = f;
    for (u = 0, l = Cc(t(o)); u < s; ++u)
      o[l[u]].index = u;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Pe(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Pe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? ns : typeof a == "function" ? a : Pe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? rn, i) : r;
  }, i;
}
function yO(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    rn(e, t);
  }
}
function mO(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    rn(e, t);
  }
}
function gO(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var l = e[t[u]], f = l[n][1] || 0, d = l[n - 1][1] || 0, h = (f - d) / 2, y = 0; y < u; ++y) {
          var v = e[t[y]], p = v[n][1] || 0, g = v[n - 1][1] || 0;
          h += p - g;
        }
        s += f, c += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, rn(e, t);
  }
}
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
var bO = ["type", "size", "sizeType"];
function is() {
  return is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, is.apply(this, arguments);
}
function uf(e, t) {
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
    t % 2 ? uf(Object(r), !0).forEach(function(n) {
      xO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xO(e, t, r) {
  return t = wO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wO(e) {
  var t = _O(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function _O(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OO(e, t) {
  if (e == null) return {};
  var r = SO(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ev = {
  symbolCircle: Mc,
  symbolCross: q_,
  symbolDiamond: G_,
  symbolSquare: H_,
  symbolStar: J_,
  symbolTriangle: Q_,
  symbolWye: tO
}, AO = Math.PI / 180, PO = function(t) {
  var r = "symbol".concat(Mo(t));
  return Ev[r] || Mc;
}, EO = function(t, r, n) {
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
      var i = 18 * AO;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, $O = function(t, r) {
  Ev["symbol".concat(Mo(t))] = r;
}, Do = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, s = OO(t, bO), c = sf(sf({}, s), {}, {
    type: n,
    size: a,
    sizeType: u
  }), l = function() {
    var p = PO(n), g = rO().type(p).size(EO(a, u, n));
    return g();
  }, f = c.className, d = c.cx, h = c.cy, y = ce(c, !0);
  return d === +d && h === +h && a === +a ? /* @__PURE__ */ E.createElement("path", is({}, y, {
    className: he("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(h, ")"),
    d: l()
  })) : null;
};
Do.registerSymbol = $O;
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function as() {
  return as = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, as.apply(this, arguments);
}
function cf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function TO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cf(Object(r), !0).forEach(function(n) {
      vi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CO(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tv(n.key), n);
  }
}
function MO(e, t, r) {
  return t && CO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function IO(e, t, r) {
  return t = $a(t), kO(e, $v() ? Reflect.construct(t, r || [], $a(e).constructor) : t.apply(e, r));
}
function kO(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return NO(e);
}
function NO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $v() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($v = function() {
    return !!e;
  })();
}
function $a(e) {
  return $a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $a(e);
}
function DO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && os(e, t);
}
function os(e, t) {
  return os = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, os(e, t);
}
function vi(e, t, r) {
  return t = Tv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tv(e) {
  var t = RO(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function RO(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var bt = 32, Ic = /* @__PURE__ */ function(e) {
  function t() {
    return jO(this, t), IO(this, t, arguments);
  }
  return DO(t, e), MO(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = bt / 2, o = bt / 6, u = bt / 3, s = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: bt,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(bt, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(bt / 8, "h").concat(bt, "v").concat(bt * 3 / 4, "h").concat(-bt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(n.legendIcon)) {
          var c = TO({}, n);
          return delete c.legendIcon, /* @__PURE__ */ E.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ E.createElement(Do, {
          fill: s,
          cx: a,
          cy: a,
          size: bt,
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
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, s = i.formatter, c = i.inactiveColor, l = {
        x: 0,
        y: 0,
        width: bt,
        height: bt
      }, f = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, y) {
        var v = h.formatter || s, p = he(vi(vi({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var g = se(h.value) ? null : h.value;
        Zt(
          !se(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = h.inactive ? c : h.color;
        return /* @__PURE__ */ E.createElement("li", as({
          className: p,
          style: f,
          key: "legend-item-".concat(y)
        }, hi(n.props, h, y)), /* @__PURE__ */ E.createElement(Xu, {
          width: o,
          height: o,
          viewBox: l,
          style: d
        }, n.renderIcon(h)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, v ? v(g, h, y) : g));
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
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
}(nr);
vi(Ic, "displayName", "Legend");
vi(Ic, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var LO = To;
function BO() {
  this.__data__ = new LO(), this.size = 0;
}
var FO = BO;
function zO(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var WO = zO;
function UO(e) {
  return this.__data__.get(e);
}
var KO = UO;
function qO(e) {
  return this.__data__.has(e);
}
var VO = qO, GO = To, HO = Oc, YO = Sc, XO = 200;
function ZO(e, t) {
  var r = this.__data__;
  if (r instanceof GO) {
    var n = r.__data__;
    if (!HO || n.length < XO - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new YO(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var JO = ZO, QO = To, e1 = FO, t1 = WO, r1 = KO, n1 = VO, i1 = JO;
function kn(e) {
  var t = this.__data__ = new QO(e);
  this.size = t.size;
}
kn.prototype.clear = e1;
kn.prototype.delete = t1;
kn.prototype.get = r1;
kn.prototype.has = n1;
kn.prototype.set = i1;
var jv = kn, a1 = "__lodash_hash_undefined__";
function o1(e) {
  return this.__data__.set(e, a1), this;
}
var u1 = o1;
function s1(e) {
  return this.__data__.has(e);
}
var c1 = s1, l1 = Sc, f1 = u1, d1 = c1;
function Ta(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new l1(); ++t < r; )
    this.add(e[t]);
}
Ta.prototype.add = Ta.prototype.push = f1;
Ta.prototype.has = d1;
var Cv = Ta;
function h1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Mv = h1;
function p1(e, t) {
  return e.has(t);
}
var Iv = p1, v1 = Cv, y1 = Mv, m1 = Iv, g1 = 1, b1 = 2;
function x1(e, t, r, n, i, a) {
  var o = r & g1, u = e.length, s = t.length;
  if (u != s && !(o && s > u))
    return !1;
  var c = a.get(e), l = a.get(t);
  if (c && l)
    return c == t && l == e;
  var f = -1, d = !0, h = r & b1 ? new v1() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < u; ) {
    var y = e[f], v = t[f];
    if (n)
      var p = o ? n(v, y, f, t, e, a) : n(y, v, f, e, t, a);
    if (p !== void 0) {
      if (p)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!y1(t, function(g, w) {
        if (!m1(h, w) && (y === g || i(y, g, r, n, a)))
          return h.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(y === v || i(y, v, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var kv = x1, w1 = Ut, _1 = w1.Uint8Array, O1 = _1;
function S1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var A1 = S1;
function P1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var kc = P1, lf = Hi, ff = O1, E1 = _c, $1 = kv, T1 = A1, j1 = kc, C1 = 1, M1 = 2, I1 = "[object Boolean]", k1 = "[object Date]", N1 = "[object Error]", D1 = "[object Map]", R1 = "[object Number]", L1 = "[object RegExp]", B1 = "[object Set]", F1 = "[object String]", z1 = "[object Symbol]", W1 = "[object ArrayBuffer]", U1 = "[object DataView]", df = lf ? lf.prototype : void 0, pu = df ? df.valueOf : void 0;
function K1(e, t, r, n, i, a, o) {
  switch (r) {
    case U1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case W1:
      return !(e.byteLength != t.byteLength || !a(new ff(e), new ff(t)));
    case I1:
    case k1:
    case R1:
      return E1(+e, +t);
    case N1:
      return e.name == t.name && e.message == t.message;
    case L1:
    case F1:
      return e == t + "";
    case D1:
      var u = T1;
    case B1:
      var s = n & C1;
      if (u || (u = j1), e.size != t.size && !s)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= M1, o.set(e, t);
      var l = $1(u(e), u(t), n, i, a, o);
      return o.delete(e), l;
    case z1:
      if (pu)
        return pu.call(e) == pu.call(t);
  }
  return !1;
}
var q1 = K1;
function V1(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Nv = V1, G1 = Nv, H1 = ct;
function Y1(e, t, r) {
  var n = t(e);
  return H1(e) ? n : G1(n, r(e));
}
var X1 = Y1;
function Z1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var J1 = Z1;
function Q1() {
  return [];
}
var eS = Q1, tS = J1, rS = eS, nS = Object.prototype, iS = nS.propertyIsEnumerable, hf = Object.getOwnPropertySymbols, aS = hf ? function(e) {
  return e == null ? [] : (e = Object(e), tS(hf(e), function(t) {
    return iS.call(e, t);
  }));
} : rS, oS = aS;
function uS(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var sS = uS, cS = ar, lS = or, fS = "[object Arguments]";
function dS(e) {
  return lS(e) && cS(e) == fS;
}
var hS = dS, pf = hS, pS = or, Dv = Object.prototype, vS = Dv.hasOwnProperty, yS = Dv.propertyIsEnumerable, mS = pf(/* @__PURE__ */ function() {
  return arguments;
}()) ? pf : function(e) {
  return pS(e) && vS.call(e, "callee") && !yS.call(e, "callee");
}, Nc = mS, ja = { exports: {} };
function gS() {
  return !1;
}
var bS = gS;
ja.exports;
(function(e, t) {
  var r = Ut, n = bS, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
  e.exports = c;
})(ja, ja.exports);
var Rv = ja.exports, xS = 9007199254740991, wS = /^(?:0|[1-9]\d*)$/;
function _S(e, t) {
  var r = typeof e;
  return t = t ?? xS, !!t && (r == "number" || r != "symbol" && wS.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Dc = _S, OS = 9007199254740991;
function SS(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= OS;
}
var Rc = SS, AS = ar, PS = Rc, ES = or, $S = "[object Arguments]", TS = "[object Array]", jS = "[object Boolean]", CS = "[object Date]", MS = "[object Error]", IS = "[object Function]", kS = "[object Map]", NS = "[object Number]", DS = "[object Object]", RS = "[object RegExp]", LS = "[object Set]", BS = "[object String]", FS = "[object WeakMap]", zS = "[object ArrayBuffer]", WS = "[object DataView]", US = "[object Float32Array]", KS = "[object Float64Array]", qS = "[object Int8Array]", VS = "[object Int16Array]", GS = "[object Int32Array]", HS = "[object Uint8Array]", YS = "[object Uint8ClampedArray]", XS = "[object Uint16Array]", ZS = "[object Uint32Array]", Te = {};
Te[US] = Te[KS] = Te[qS] = Te[VS] = Te[GS] = Te[HS] = Te[YS] = Te[XS] = Te[ZS] = !0;
Te[$S] = Te[TS] = Te[zS] = Te[jS] = Te[WS] = Te[CS] = Te[MS] = Te[IS] = Te[kS] = Te[NS] = Te[DS] = Te[RS] = Te[LS] = Te[BS] = Te[FS] = !1;
function JS(e) {
  return ES(e) && PS(e.length) && !!Te[AS(e)];
}
var QS = JS;
function eA(e) {
  return function(t) {
    return e(t);
  };
}
var Lv = eA, Ca = { exports: {} };
Ca.exports;
(function(e, t) {
  var r = Hp, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, u = function() {
    try {
      var s = i && i.require && i.require("util").types;
      return s || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(Ca, Ca.exports);
var tA = Ca.exports, rA = QS, nA = Lv, vf = tA, yf = vf && vf.isTypedArray, iA = yf ? nA(yf) : rA, Bv = iA, aA = sS, oA = Nc, uA = ct, sA = Rv, cA = Dc, lA = Bv, fA = Object.prototype, dA = fA.hasOwnProperty;
function hA(e, t) {
  var r = uA(e), n = !r && oA(e), i = !r && !n && sA(e), a = !r && !n && !i && lA(e), o = r || n || i || a, u = o ? aA(e.length, String) : [], s = u.length;
  for (var c in e)
    (t || dA.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    cA(c, s))) && u.push(c);
  return u;
}
var pA = hA, vA = Object.prototype;
function yA(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || vA;
  return e === r;
}
var mA = yA;
function gA(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Fv = gA, bA = Fv, xA = bA(Object.keys, Object), wA = xA, _A = mA, OA = wA, SA = Object.prototype, AA = SA.hasOwnProperty;
function PA(e) {
  if (!_A(e))
    return OA(e);
  var t = [];
  for (var r in Object(e))
    AA.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var EA = PA, $A = wc, TA = Rc;
function jA(e) {
  return e != null && TA(e.length) && !$A(e);
}
var Xi = jA, CA = pA, MA = EA, IA = Xi;
function kA(e) {
  return IA(e) ? CA(e) : MA(e);
}
var Ro = kA, NA = X1, DA = oS, RA = Ro;
function LA(e) {
  return NA(e, RA, DA);
}
var BA = LA, mf = BA, FA = 1, zA = Object.prototype, WA = zA.hasOwnProperty;
function UA(e, t, r, n, i, a) {
  var o = r & FA, u = mf(e), s = u.length, c = mf(t), l = c.length;
  if (s != l && !o)
    return !1;
  for (var f = s; f--; ) {
    var d = u[f];
    if (!(o ? d in t : WA.call(t, d)))
      return !1;
  }
  var h = a.get(e), y = a.get(t);
  if (h && y)
    return h == t && y == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var p = o; ++f < s; ) {
    d = u[f];
    var g = e[d], w = t[d];
    if (n)
      var b = o ? n(w, g, d, t, e, a) : n(g, w, d, e, t, a);
    if (!(b === void 0 ? g === w || i(g, w, r, n, a) : b)) {
      v = !1;
      break;
    }
    p || (p = d == "constructor");
  }
  if (v && !p) {
    var _ = e.constructor, m = t.constructor;
    _ != m && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof m == "function" && m instanceof m) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var KA = UA, qA = Rr, VA = Ut, GA = qA(VA, "DataView"), HA = GA, YA = Rr, XA = Ut, ZA = YA(XA, "Promise"), JA = ZA, QA = Rr, eP = Ut, tP = QA(eP, "Set"), zv = tP, rP = Rr, nP = Ut, iP = rP(nP, "WeakMap"), aP = iP, us = HA, ss = Oc, cs = JA, ls = zv, fs = aP, Wv = ar, Nn = Xp, gf = "[object Map]", oP = "[object Object]", bf = "[object Promise]", xf = "[object Set]", wf = "[object WeakMap]", _f = "[object DataView]", uP = Nn(us), sP = Nn(ss), cP = Nn(cs), lP = Nn(ls), fP = Nn(fs), _r = Wv;
(us && _r(new us(new ArrayBuffer(1))) != _f || ss && _r(new ss()) != gf || cs && _r(cs.resolve()) != bf || ls && _r(new ls()) != xf || fs && _r(new fs()) != wf) && (_r = function(e) {
  var t = Wv(e), r = t == oP ? e.constructor : void 0, n = r ? Nn(r) : "";
  if (n)
    switch (n) {
      case uP:
        return _f;
      case sP:
        return gf;
      case cP:
        return bf;
      case lP:
        return xf;
      case fP:
        return wf;
    }
  return t;
});
var dP = _r, vu = jv, hP = kv, pP = q1, vP = KA, Of = dP, Sf = ct, Af = Rv, yP = Bv, mP = 1, Pf = "[object Arguments]", Ef = "[object Array]", oa = "[object Object]", gP = Object.prototype, $f = gP.hasOwnProperty;
function bP(e, t, r, n, i, a) {
  var o = Sf(e), u = Sf(t), s = o ? Ef : Of(e), c = u ? Ef : Of(t);
  s = s == Pf ? oa : s, c = c == Pf ? oa : c;
  var l = s == oa, f = c == oa, d = s == c;
  if (d && Af(e)) {
    if (!Af(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return a || (a = new vu()), o || yP(e) ? hP(e, t, r, n, i, a) : pP(e, t, s, r, n, i, a);
  if (!(r & mP)) {
    var h = l && $f.call(e, "__wrapped__"), y = f && $f.call(t, "__wrapped__");
    if (h || y) {
      var v = h ? e.value() : e, p = y ? t.value() : t;
      return a || (a = new vu()), i(v, p, r, n, a);
    }
  }
  return d ? (a || (a = new vu()), vP(e, t, r, n, i, a)) : !1;
}
var xP = bP, wP = xP, Tf = or;
function Uv(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Tf(e) && !Tf(t) ? e !== e && t !== t : wP(e, t, r, n, Uv, i);
}
var Lc = Uv, _P = jv, OP = Lc, SP = 1, AP = 2;
function PP(e, t, r, n) {
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
    var s = u[0], c = e[s], l = u[1];
    if (o && u[2]) {
      if (c === void 0 && !(s in e))
        return !1;
    } else {
      var f = new _P();
      if (n)
        var d = n(c, l, s, e, t, f);
      if (!(d === void 0 ? OP(l, c, SP | AP, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var EP = PP, $P = pr;
function TP(e) {
  return e === e && !$P(e);
}
var Kv = TP, jP = Kv, CP = Ro;
function MP(e) {
  for (var t = CP(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, jP(i)];
  }
  return t;
}
var IP = MP;
function kP(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var qv = kP, NP = EP, DP = IP, RP = qv;
function LP(e) {
  var t = DP(e);
  return t.length == 1 && t[0][2] ? RP(t[0][0], t[0][1]) : function(r) {
    return r === e || NP(r, e, t);
  };
}
var BP = LP;
function FP(e, t) {
  return e != null && t in Object(e);
}
var zP = FP, WP = tv, UP = Nc, KP = ct, qP = Dc, VP = Rc, GP = Co;
function HP(e, t, r) {
  t = WP(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = GP(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && VP(i) && qP(o, i) && (KP(e) || UP(e)));
}
var YP = HP, XP = zP, ZP = YP;
function JP(e, t) {
  return e != null && ZP(e, t, XP);
}
var QP = JP, eE = Lc, tE = rv, rE = QP, nE = xc, iE = Kv, aE = qv, oE = Co, uE = 1, sE = 2;
function cE(e, t) {
  return nE(e) && iE(t) ? aE(oE(e), t) : function(r) {
    var n = tE(r, e);
    return n === void 0 && n === t ? rE(r, e) : eE(t, n, uE | sE);
  };
}
var lE = cE;
function fE(e) {
  return e;
}
var Dn = fE;
function dE(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var hE = dE, pE = Ec;
function vE(e) {
  return function(t) {
    return pE(t, e);
  };
}
var yE = vE, mE = hE, gE = yE, bE = xc, xE = Co;
function wE(e) {
  return bE(e) ? mE(xE(e)) : gE(e);
}
var _E = wE, OE = BP, SE = lE, AE = Dn, PE = ct, EE = _E;
function $E(e) {
  return typeof e == "function" ? e : e == null ? AE : typeof e == "object" ? PE(e) ? SE(e[0], e[1]) : OE(e) : EE(e);
}
var vr = $E;
function TE(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Vv = TE;
function jE(e) {
  return e !== e;
}
var CE = jE;
function ME(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var IE = ME, kE = Vv, NE = CE, DE = IE;
function RE(e, t, r) {
  return t === t ? DE(e, t, r) : kE(e, NE, r);
}
var LE = RE, BE = LE;
function FE(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && BE(e, t, 0) > -1;
}
var zE = FE;
function WE(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var UE = WE;
function KE() {
}
var qE = KE, yu = zv, VE = qE, GE = kc, HE = 1 / 0, YE = yu && 1 / GE(new yu([, -0]))[1] == HE ? function(e) {
  return new yu(e);
} : VE, XE = YE, ZE = Cv, JE = zE, QE = UE, e$ = Iv, t$ = XE, r$ = kc, n$ = 200;
function i$(e, t, r) {
  var n = -1, i = JE, a = e.length, o = !0, u = [], s = u;
  if (r)
    o = !1, i = QE;
  else if (a >= n$) {
    var c = t ? null : t$(e);
    if (c)
      return r$(c);
    o = !1, i = e$, s = new ZE();
  } else
    s = t ? [] : u;
  e:
    for (; ++n < a; ) {
      var l = e[n], f = t ? t(l) : l;
      if (l = r || l !== 0 ? l : 0, o && f === f) {
        for (var d = s.length; d--; )
          if (s[d] === f)
            continue e;
        t && s.push(f), u.push(l);
      } else i(s, f, r) || (s !== u && s.push(f), u.push(l));
    }
  return u;
}
var a$ = i$, o$ = vr, u$ = a$;
function s$(e, t) {
  return e && e.length ? u$(e, o$(t)) : [];
}
var c$ = s$;
const jf = /* @__PURE__ */ $e(c$);
function Gv(e, t, r) {
  return t === !0 ? jf(e, r) : se(t) ? jf(e, t) : e;
}
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
var l$ = ["ref"];
function Cf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cf(Object(r), !0).forEach(function(n) {
      Lo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Yv(n.key), n);
  }
}
function d$(e, t, r) {
  return t && Mf(e.prototype, t), r && Mf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function h$(e, t, r) {
  return t = Ma(t), p$(e, Hv() ? Reflect.construct(t, r || [], Ma(e).constructor) : t.apply(e, r));
}
function p$(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return v$(e);
}
function v$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Hv = function() {
    return !!e;
  })();
}
function Ma(e) {
  return Ma = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ma(e);
}
function y$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ds(e, t);
}
function ds(e, t) {
  return ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ds(e, t);
}
function Lo(e, t, r) {
  return t = Yv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Yv(e) {
  var t = m$(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function m$(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function g$(e, t) {
  if (e == null) return {};
  var r = b$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function x$(e) {
  return e.value;
}
function w$(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var r = g$(t, l$);
  return /* @__PURE__ */ E.createElement(Ic, r);
}
var If = 1, vt = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    f$(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = h$(this, t, [].concat(i)), Lo(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return y$(t, e), d$(t, [{
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
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > If || Math.abs(i.height - this.lastBoundingBox.height) > If) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? qt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, s = i.margin, c = i.chartWidth, l = i.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((c || 0) - h.width) / 2
          };
        } else
          f = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((l || 0) - y.height) / 2
          };
        } else
          d = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return qt(qt({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, s = i.wrapperStyle, c = i.payloadUniqBy, l = i.payload, f = qt(qt({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, w$(a, qt(qt({}, this.props), {}, {
        payload: Gv(l, c, x$)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = qt(qt({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && Y(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
}(nr);
Lo(vt, "displayName", "Legend");
Lo(vt, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var kf = Hi, _$ = Nc, O$ = ct, Nf = kf ? kf.isConcatSpreadable : void 0;
function S$(e) {
  return O$(e) || _$(e) || !!(Nf && e && e[Nf]);
}
var A$ = S$, P$ = Nv, E$ = A$;
function Xv(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = E$), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u) ? t > 1 ? Xv(u, t - 1, r, n, i) : P$(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var Zv = Xv;
function $$(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var s = o[e ? u : ++i];
      if (r(a[s], s, a) === !1)
        break;
    }
    return t;
  };
}
var T$ = $$, j$ = T$, C$ = j$(), M$ = C$, I$ = M$, k$ = Ro;
function N$(e, t) {
  return e && I$(e, t, k$);
}
var Jv = N$, D$ = Xi;
function R$(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!D$(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var L$ = R$, B$ = Jv, F$ = L$, z$ = F$(B$), Bc = z$, W$ = Bc, U$ = Xi;
function K$(e, t) {
  var r = -1, n = U$(e) ? Array(e.length) : [];
  return W$(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Qv = K$;
function q$(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var V$ = q$, Df = $n;
function G$(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = Df(e), o = t !== void 0, u = t === null, s = t === t, c = Df(t);
    if (!u && !c && !a && e > t || a && o && s && !u && !c || n && o && s || !r && s || !i)
      return 1;
    if (!n && !a && !c && e < t || c && r && i && !n && !a || u && r && i || !o && i || !s)
      return -1;
  }
  return 0;
}
var H$ = G$, Y$ = H$;
function X$(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o; ) {
    var s = Y$(i[n], a[n]);
    if (s) {
      if (n >= u)
        return s;
      var c = r[n];
      return s * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var Z$ = X$, mu = Pc, J$ = Ec, Q$ = vr, eT = Qv, tT = V$, rT = Lv, nT = Z$, iT = Dn, aT = ct;
function oT(e, t, r) {
  t.length ? t = mu(t, function(a) {
    return aT(a) ? function(o) {
      return J$(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [iT];
  var n = -1;
  t = mu(t, rT(Q$));
  var i = eT(e, function(a, o, u) {
    var s = mu(t, function(c) {
      return c(a);
    });
    return { criteria: s, index: ++n, value: a };
  });
  return tT(i, function(a, o) {
    return nT(a, o, r);
  });
}
var uT = oT;
function sT(e, t, r) {
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
var cT = sT, lT = cT, Rf = Math.max;
function fT(e, t, r) {
  return t = Rf(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Rf(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(o), lT(e, this, u);
  };
}
var dT = fT;
function hT(e) {
  return function() {
    return e;
  };
}
var pT = hT, vT = Rr, yT = function() {
  try {
    var e = vT(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ey = yT, mT = pT, Lf = ey, gT = Dn, bT = Lf ? function(e, t) {
  return Lf(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: mT(t),
    writable: !0
  });
} : gT, xT = bT, wT = 800, _T = 16, OT = Date.now;
function ST(e) {
  var t = 0, r = 0;
  return function() {
    var n = OT(), i = _T - (n - r);
    if (r = n, i > 0) {
      if (++t >= wT)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var AT = ST, PT = xT, ET = AT, $T = ET(PT), TT = $T, jT = Dn, CT = dT, MT = TT;
function IT(e, t) {
  return MT(CT(e, t, jT), e + "");
}
var kT = IT, NT = _c, DT = Xi, RT = Dc, LT = pr;
function BT(e, t, r) {
  if (!LT(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? DT(r) && RT(t, r.length) : n == "string" && t in r) ? NT(r[t], e) : !1;
}
var Bo = BT, FT = Zv, zT = uT, WT = kT, Bf = Bo, UT = WT(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Bf(e, t[0], t[1]) ? t = [] : r > 2 && Bf(t[0], t[1], t[2]) && (t = [t[0]]), zT(e, FT(t, 1), []);
}), KT = UT;
const Fc = /* @__PURE__ */ $e(KT);
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hs.apply(this, arguments);
}
function qT(e, t) {
  return YT(e) || HT(e, t) || GT(e, t) || VT();
}
function VT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GT(e, t) {
  if (e) {
    if (typeof e == "string") return Ff(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ff(e, t);
  }
}
function Ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function HT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function YT(e) {
  if (Array.isArray(e)) return e;
}
function zf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zf(Object(r), !0).forEach(function(n) {
      XT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XT(e, t, r) {
  return t = ZT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZT(e) {
  var t = JT(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function JT(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QT(e) {
  return Array.isArray(e) && We(e[0]) && We(e[1]) ? e.join(" ~ ") : e;
}
var ej = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, l = t.payload, f = t.formatter, d = t.itemSorter, h = t.wrapperClassName, y = t.labelClassName, v = t.label, p = t.labelFormatter, g = t.accessibilityLayer, w = g === void 0 ? !1 : g, b = function() {
    if (l && l.length) {
      var C = {
        padding: 0,
        margin: 0
      }, R = (d ? Fc(l, d) : l).map(function(N, k) {
        if (N.type === "none")
          return null;
        var L = gu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: N.color || "#000"
        }, u), F = N.formatter || f || QT, K = N.value, V = N.name, M = K, B = V;
        if (F && M != null && B != null) {
          var z = F(K, V, N, k, l);
          if (Array.isArray(z)) {
            var G = qT(z, 2);
            M = G[0], B = G[1];
          } else
            M = z;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(k),
            style: L
          }, We(B) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, B) : null, We(B) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, M), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, N.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: C
      }, R);
    }
    return null;
  }, _ = gu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = gu({
    margin: 0
  }, c), x = !ue(v), O = x ? v : "", P = he("recharts-default-tooltip", h), $ = he("recharts-tooltip-label", y);
  x && p && l !== void 0 && l !== null && (O = p(v, l));
  var I = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", hs({
    className: P,
    style: _
  }, I), /* @__PURE__ */ E.createElement("p", {
    className: $,
    style: m
  }, /* @__PURE__ */ E.isValidElement(O) ? O : "".concat(O)), b());
};
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function ua(e, t, r) {
  return t = tj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tj(e) {
  var t = rj(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function rj(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xn = "recharts-tooltip-wrapper", nj = {
  visibility: "hidden"
};
function ij(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return he(Xn, ua(ua(ua(ua({}, "".concat(Xn, "-right"), Y(r) && t && Y(t.x) && r >= t.x), "".concat(Xn, "-left"), Y(r) && t && Y(t.x) && r < t.x), "".concat(Xn, "-bottom"), Y(n) && t && Y(t.y) && n >= t.y), "".concat(Xn, "-top"), Y(n) && t && Y(t.y) && n < t.y));
}
function Wf(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (a && Y(a[n]))
    return a[n];
  var l = r[n] - u - i, f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  if (o[n]) {
    var d = l, h = s[n];
    return d < h ? Math.max(f, s[n]) : Math.max(l, s[n]);
  }
  var y = f + u, v = s[n] + c;
  return y > v ? Math.max(l, s[n]) : Math.max(f, s[n]);
}
function aj(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function oj(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, s = e.viewBox, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Wf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), f = Wf({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = aj({
    translateX: l,
    translateY: f,
    useTranslate3d: u
  })) : c = nj, {
    cssProperties: c,
    cssClasses: ij({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function Uf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uf(Object(r), !0).forEach(function(n) {
      vs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ry(n.key), n);
  }
}
function cj(e, t, r) {
  return t && sj(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lj(e, t, r) {
  return t = Ia(t), fj(e, ty() ? Reflect.construct(t, r || [], Ia(e).constructor) : t.apply(e, r));
}
function fj(e, t) {
  if (t && (on(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dj(e);
}
function dj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ty() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ty = function() {
    return !!e;
  })();
}
function Ia(e) {
  return Ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ia(e);
}
function hj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ps(e, t);
}
function ps(e, t) {
  return ps = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ps(e, t);
}
function vs(e, t, r) {
  return t = ry(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ry(e) {
  var t = pj(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function pj(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qf = 1, vj = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    uj(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = lj(this, t, [].concat(i)), vs(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), vs(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, l;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return hj(t, e), cj(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > qf || Math.abs(n.height - this.state.lastBoundingBox.height) > qf) && this.setState({
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
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.children, l = i.coordinate, f = i.hasPayload, d = i.isAnimationActive, h = i.offset, y = i.position, v = i.reverseDirection, p = i.useTranslate3d, g = i.viewBox, w = i.wrapperStyle, b = oj({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: h,
        position: y,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: g
      }), _ = b.cssClasses, m = b.cssProperties, x = Kf(Kf({
        transition: d && a ? "transform ".concat(u, "ms ").concat(s) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
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
}(nr), yj = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Lr = {
  isSsr: yj()
};
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Vf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vf(Object(r), !0).forEach(function(n) {
      zc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gj(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, iy(n.key), n);
  }
}
function bj(e, t, r) {
  return t && gj(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xj(e, t, r) {
  return t = ka(t), wj(e, ny() ? Reflect.construct(t, r || [], ka(e).constructor) : t.apply(e, r));
}
function wj(e, t) {
  if (t && (un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _j(e);
}
function _j(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ny() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ny = function() {
    return !!e;
  })();
}
function ka(e) {
  return ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ka(e);
}
function Oj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ys(e, t);
}
function ys(e, t) {
  return ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ys(e, t);
}
function zc(e, t, r) {
  return t = iy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iy(e) {
  var t = Sj(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function Sj(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Aj(e) {
  return e.dataKey;
}
function Pj(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(ej, t);
}
var Re = /* @__PURE__ */ function(e) {
  function t() {
    return mj(this, t), xj(this, t, arguments);
  }
  return Oj(t, e), bj(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.content, l = i.coordinate, f = i.filterNull, d = i.isAnimationActive, h = i.offset, y = i.payload, v = i.payloadUniqBy, p = i.position, g = i.reverseDirection, w = i.useTranslate3d, b = i.viewBox, _ = i.wrapperStyle, m = y ?? [];
      f && m.length && (m = Gv(y.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), v, Aj));
      var x = m.length > 0;
      return /* @__PURE__ */ E.createElement(vj, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: d,
        active: a,
        coordinate: l,
        hasPayload: x,
        offset: h,
        position: p,
        reverseDirection: g,
        useTranslate3d: w,
        viewBox: b,
        wrapperStyle: _
      }, Pj(c, Gf(Gf({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
}(nr);
zc(Re, "displayName", "Tooltip");
zc(Re, "defaultProps", {
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
  isAnimationActive: !Lr.isSsr,
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
var Ej = Ut, $j = function() {
  return Ej.Date.now();
}, Tj = $j, jj = /\s/;
function Cj(e) {
  for (var t = e.length; t-- && jj.test(e.charAt(t)); )
    ;
  return t;
}
var Mj = Cj, Ij = Mj, kj = /^\s+/;
function Nj(e) {
  return e && e.slice(0, Ij(e) + 1).replace(kj, "");
}
var Dj = Nj, Rj = Dj, Hf = pr, Lj = $n, Yf = NaN, Bj = /^[-+]0x[0-9a-f]+$/i, Fj = /^0b[01]+$/i, zj = /^0o[0-7]+$/i, Wj = parseInt;
function Uj(e) {
  if (typeof e == "number")
    return e;
  if (Lj(e))
    return Yf;
  if (Hf(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Hf(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rj(e);
  var r = Fj.test(e);
  return r || zj.test(e) ? Wj(e.slice(2), r ? 2 : 8) : Bj.test(e) ? Yf : +e;
}
var ay = Uj, Kj = pr, bu = Tj, Xf = ay, qj = "Expected a function", Vj = Math.max, Gj = Math.min;
function Hj(e, t, r) {
  var n, i, a, o, u, s, c = 0, l = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(qj);
  t = Xf(t) || 0, Kj(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? Vj(Xf(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function h(x) {
    var O = n, P = i;
    return n = i = void 0, c = x, o = e.apply(P, O), o;
  }
  function y(x) {
    return c = x, u = setTimeout(g, t), l ? h(x) : o;
  }
  function v(x) {
    var O = x - s, P = x - c, $ = t - O;
    return f ? Gj($, a - P) : $;
  }
  function p(x) {
    var O = x - s, P = x - c;
    return s === void 0 || O >= t || O < 0 || f && P >= a;
  }
  function g() {
    var x = bu();
    if (p(x))
      return w(x);
    u = setTimeout(g, v(x));
  }
  function w(x) {
    return u = void 0, d && n ? h(x) : (n = i = void 0, o);
  }
  function b() {
    u !== void 0 && clearTimeout(u), c = 0, n = s = i = u = void 0;
  }
  function _() {
    return u === void 0 ? o : w(bu());
  }
  function m() {
    var x = bu(), O = p(x);
    if (n = arguments, i = this, s = x, O) {
      if (u === void 0)
        return y(s);
      if (f)
        return clearTimeout(u), u = setTimeout(g, t), h(s);
    }
    return u === void 0 && (u = setTimeout(g, t)), o;
  }
  return m.cancel = b, m.flush = _, m;
}
var Yj = Hj, Xj = Yj, Zj = pr, Jj = "Expected a function";
function Qj(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(Jj);
  return Zj(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Xj(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var eC = Qj;
const oy = /* @__PURE__ */ $e(eC);
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function Zf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zf(Object(r), !0).forEach(function(n) {
      tC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tC(e, t, r) {
  return t = rC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rC(e) {
  var t = nC(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function nC(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iC(e, t) {
  return sC(e) || uC(e, t) || oC(e, t) || aC();
}
function aC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oC(e, t) {
  if (e) {
    if (typeof e == "string") return Jf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jf(e, t);
  }
}
function Jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function sC(e) {
  if (Array.isArray(e)) return e;
}
var kt = /* @__PURE__ */ Up(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, s = u === void 0 ? "100%" : u, c = e.minWidth, l = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, h = e.children, y = e.debounce, v = y === void 0 ? 0 : y, p = e.id, g = e.className, w = e.onResize, b = e.style, _ = b === void 0 ? {} : b, m = xa(null), x = xa();
  x.current = w, zg(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var O = cr({
    containerWidth: i.width,
    containerHeight: i.height
  }), P = iC(O, 2), $ = P[0], I = P[1], T = Wg(function(R, N) {
    I(function(k) {
      var L = Math.round(R), F = Math.round(N);
      return k.containerWidth === L && k.containerHeight === F ? k : {
        containerWidth: L,
        containerHeight: F
      };
    });
  }, []);
  Po(function() {
    var R = function(V) {
      var M, B = V[0].contentRect, z = B.width, G = B.height;
      T(z, G), (M = x.current) === null || M === void 0 || M.call(x, z, G);
    };
    v > 0 && (R = oy(R, v, {
      trailing: !0,
      leading: !1
    }));
    var N = new ResizeObserver(R), k = m.current.getBoundingClientRect(), L = k.width, F = k.height;
    return T(L, F), N.observe(m.current), function() {
      N.disconnect();
    };
  }, [T, v]);
  var C = Kp(function() {
    var R = $.containerWidth, N = $.containerHeight;
    if (R < 0 || N < 0)
      return null;
    Zt(Sr(o) || Sr(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), Zt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var k = Sr(o) ? R : o, L = Sr(s) ? N : s;
    r && r > 0 && (k ? L = k / r : L && (k = L * r), d && L > d && (L = d)), Zt(k > 0 || L > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, k, L, o, s, l, f, r);
    var F = !Array.isArray(h) && Xt(h.type).endsWith("Chart");
    return E.Children.map(h, function(K) {
      return /* @__PURE__ */ E.isValidElement(K) ? /* @__PURE__ */ ze(K, sa({
        width: k,
        height: L
      }, F ? {
        style: sa({
          height: "100%",
          width: "100%",
          maxHeight: L,
          maxWidth: k
        }, K.props.style)
      } : {})) : K;
    });
  }, [r, h, s, d, f, l, $, o]);
  return /* @__PURE__ */ E.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: he("recharts-responsive-container", g),
    style: sa(sa({}, _), {}, {
      width: o,
      height: s,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, C);
}), Zi = function(t) {
  return null;
};
Zi.displayName = "Cell";
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function Qf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qf(Object(r), !0).forEach(function(n) {
      cC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cC(e, t, r) {
  return t = lC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lC(e) {
  var t = fC(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function fC(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vr = {
  widthCache: {},
  cacheCount: 0
}, dC = 2e3, hC = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, ed = "recharts_measurement_span";
function pC(e) {
  var t = ms({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var oi = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Lr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = pC(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Vr.widthCache[i])
    return Vr.widthCache[i];
  try {
    var a = document.getElementById(ed);
    a || (a = document.createElement("span"), a.setAttribute("id", ed), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = ms(ms({}, hC), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return Vr.widthCache[i] = s, ++Vr.cacheCount > dC && (Vr.cacheCount = 0, Vr.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, vC = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function Na(e, t) {
  return bC(e) || gC(e, t) || mC(e, t) || yC();
}
function yC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mC(e, t) {
  if (e) {
    if (typeof e == "string") return td(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return td(e, t);
  }
}
function td(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function bC(e) {
  if (Array.isArray(e)) return e;
}
function xC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _C(n.key), n);
  }
}
function wC(e, t, r) {
  return t && rd(e.prototype, t), r && rd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _C(e) {
  var t = OC(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function OC(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nd = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, id = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, SC = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, AC = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, uy = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, PC = Object.keys(uy), Xr = "NaN";
function EC(e, t) {
  return e * uy[t];
}
var ca = /* @__PURE__ */ function() {
  function e(t, r) {
    xC(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !SC.test(r) && (this.num = NaN, this.unit = ""), PC.includes(r) && (this.num = EC(t, r), this.unit = "px");
  }
  return wC(e, [{
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
      var n, i = (n = AC.exec(r)) !== null && n !== void 0 ? n : [], a = Na(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
}();
function sy(e) {
  if (e.includes(Xr))
    return Xr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = nd.exec(t)) !== null && r !== void 0 ? r : [], i = Na(n, 4), a = i[1], o = i[2], u = i[3], s = ca.parse(a ?? ""), c = ca.parse(u ?? ""), l = o === "*" ? s.multiply(c) : s.divide(c);
    if (l.isNaN())
      return Xr;
    t = t.replace(nd, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = id.exec(t)) !== null && f !== void 0 ? f : [], h = Na(d, 4), y = h[1], v = h[2], p = h[3], g = ca.parse(y ?? ""), w = ca.parse(p ?? ""), b = v === "+" ? g.add(w) : g.subtract(w);
    if (b.isNaN())
      return Xr;
    t = t.replace(id, b.toString());
  }
  return t;
}
var ad = /\(([^()]*)\)/;
function $C(e) {
  for (var t = e; t.includes("("); ) {
    var r = ad.exec(t), n = Na(r, 2), i = n[1];
    t = t.replace(ad, sy(i));
  }
  return t;
}
function TC(e) {
  var t = e.replace(/\s+/g, "");
  return t = $C(t), t = sy(t), t;
}
function jC(e) {
  try {
    return TC(e);
  } catch {
    return Xr;
  }
}
function xu(e) {
  var t = jC(e.slice(5, -1));
  return t === Xr ? "" : t;
}
var CC = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], MC = ["dx", "dy", "angle", "className", "breakAll"];
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
function od(e, t) {
  if (e == null) return {};
  var r = IC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ud(e, t) {
  return RC(e) || DC(e, t) || NC(e, t) || kC();
}
function kC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NC(e, t) {
  if (e) {
    if (typeof e == "string") return sd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sd(e, t);
  }
}
function sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function RC(e) {
  if (Array.isArray(e)) return e;
}
var cy = /[ \f\n\r\t\v\u2028\u2029]+/, ly = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    ue(r) || (n ? a = r.toString().split("") : a = r.toString().split(cy));
    var o = a.map(function(s) {
      return {
        word: s,
        width: oi(s, i).width
      };
    }), u = n ? 0 : oi(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, LC = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, s = t.style, c = t.breakAll, l = Y(o), f = u, d = function() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return k.reduce(function(L, F) {
      var K = F.word, V = F.width, M = L[L.length - 1];
      if (M && (i == null || a || M.width + V + n < Number(i)))
        M.words.push(K), M.width += V + n;
      else {
        var B = {
          words: [K],
          width: V
        };
        L.push(B);
      }
      return L;
    }, []);
  }, h = d(r), y = function(k) {
    return k.reduce(function(L, F) {
      return L.width > F.width ? L : F;
    });
  };
  if (!l)
    return h;
  for (var v = "…", p = function(k) {
    var L = f.slice(0, k), F = ly({
      breakAll: c,
      style: s,
      children: L + v
    }).wordsWithComputedWidth, K = d(F), V = K.length > o || y(K).width > Number(i);
    return [V, K];
  }, g = 0, w = f.length - 1, b = 0, _; g <= w && b <= f.length - 1; ) {
    var m = Math.floor((g + w) / 2), x = m - 1, O = p(x), P = ud(O, 2), $ = P[0], I = P[1], T = p(m), C = ud(T, 1), R = C[0];
    if (!$ && !R && (g = m + 1), $ && R && (w = m - 1), !$ && R) {
      _ = I;
      break;
    }
    b++;
  }
  return _ || h;
}, cd = function(t) {
  var r = ue(t) ? [] : t.toString().split(cy);
  return [{
    words: r
  }];
}, BC = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !Lr.isSsr) {
    var s, c, l = ly({
      breakAll: o,
      children: i,
      style: a
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      s = f, c = d;
    } else
      return cd(i);
    return LC({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, s, c, r, n);
  }
  return cd(i);
}, ld = "#808080", Da = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, h = d === void 0 ? "start" : d, y = t.verticalAnchor, v = y === void 0 ? "end" : y, p = t.fill, g = p === void 0 ? ld : p, w = od(t, CC), b = Kp(function() {
    return BC({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: f,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, f, w.style, w.width]), _ = w.dx, m = w.dy, x = w.angle, O = w.className, P = w.breakAll, $ = od(w, MC);
  if (!We(n) || !We(a))
    return null;
  var I = n + (Y(_) ? _ : 0), T = a + (Y(m) ? m : 0), C;
  switch (v) {
    case "start":
      C = xu("calc(".concat(c, ")"));
      break;
    case "middle":
      C = xu("calc(".concat((b.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      C = xu("calc(".concat(b.length - 1, " * -").concat(u, ")"));
      break;
  }
  var R = [];
  if (f) {
    var N = b[0].width, k = w.width;
    R.push("scale(".concat((Y(k) ? k / N : 1) / N, ")"));
  }
  return x && R.push("rotate(".concat(x, ", ").concat(I, ", ").concat(T, ")")), R.length && ($.transform = R.join(" ")), /* @__PURE__ */ E.createElement("text", gs({}, ce($, !0), {
    x: I,
    y: T,
    className: he("recharts-text", O),
    textAnchor: h,
    fill: g.includes("url") ? ld : g
  }), b.map(function(L, F) {
    var K = L.words.join(P ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ E.createElement("tspan", {
        x: I,
        dy: F === 0 ? C : u,
        key: "".concat(K, "-").concat(F)
      }, K)
    );
  }));
};
function hr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function FC(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wc(e) {
  let t, r, n;
  e.length !== 2 ? (t = hr, r = (u, s) => hr(e(u), s), n = (u, s) => e(u) - s) : (t = e === hr || e === FC ? e : zC, r = e, n = e);
  function i(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) < 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function a(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) <= 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function o(u, s, c = 0, l = u.length) {
    const f = i(u, s, c, l - 1);
    return f > c && n(u[f - 1], s) > -n(u[f], s) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function zC() {
  return 0;
}
function fy(e) {
  return e === null ? NaN : +e;
}
function* WC(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const UC = Wc(hr), Ji = UC.right;
Wc(fy).center;
class fd extends Map {
  constructor(t, r = VC) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(dd(this, t));
  }
  has(t) {
    return super.has(dd(this, t));
  }
  set(t, r) {
    return super.set(KC(this, t), r);
  }
  delete(t) {
    return super.delete(qC(this, t));
  }
}
function dd({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function KC({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function qC({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function VC(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function GC(e = hr) {
  if (e === hr) return dy;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function dy(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const HC = Math.sqrt(50), YC = Math.sqrt(10), XC = Math.sqrt(2);
function Ra(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= HC ? 10 : a >= YC ? 5 : a >= XC ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? Ra(e, t, r * 2) : [u, s, c];
}
function bs(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Ra(t, e, r) : Ra(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function xs(e, t, r) {
  return t = +t, e = +e, r = +r, Ra(e, t, r)[2];
}
function ws(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? xs(t, e, r) : xs(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function hd(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function pd(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function hy(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? dy : GC(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, l = Math.log(s), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - c * f / s + d)), y = Math.min(n, Math.floor(t + (s - c) * f / s + d));
      hy(e, t, h, y, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Zn(e, r, t), i(e[n], a) > 0 && Zn(e, r, n); o < u; ) {
      for (Zn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Zn(e, r, u) : (++u, Zn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Zn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function ZC(e, t, r) {
  if (e = Float64Array.from(WC(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return pd(e);
    if (t >= 1) return hd(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = hd(hy(e, a).subarray(0, a + 1)), u = pd(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function JC(e, t, r = fy) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function QC(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Pt(e, t) {
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
function ur(e, t) {
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
const _s = Symbol("implicit");
function Uc() {
  var e = new fd(), t = [], r = [], n = _s;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== _s) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new fd();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Uc(t, r).unknown(n);
  }, Pt.apply(i, arguments), i;
}
function wi() {
  var e = Uc().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, h = i < n, y = h ? i : n, v = h ? n : i;
    a = (v - y) / Math.max(1, d - s + c * 2), u && (a = Math.floor(a)), y += (v - y - a * (d - s)) * l, o = a * (1 - s), u && (y = Math.round(y), o = Math.round(o));
    var p = QC(d).map(function(g) {
      return y + a * g;
    });
    return r(h ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), f()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), f()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return wi(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(l);
  }, Pt.apply(f(), arguments);
}
function py(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return py(t());
  }, e;
}
function ui() {
  return py(wi.apply(null, arguments).paddingInner(1));
}
function Kc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function vy(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Qi() {
}
var _i = 0.7, La = 1 / _i, en = "\\s*([+-]?\\d+)\\s*", Oi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eM = /^#([0-9a-f]{3,8})$/, tM = new RegExp(`^rgb\\(${en},${en},${en}\\)$`), rM = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), nM = new RegExp(`^rgba\\(${en},${en},${en},${Oi}\\)$`), iM = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${Oi}\\)$`), aM = new RegExp(`^hsl\\(${Oi},${Bt},${Bt}\\)$`), oM = new RegExp(`^hsla\\(${Oi},${Bt},${Bt},${Oi}\\)$`), vd = {
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
Kc(Qi, Si, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: yd,
  // Deprecated! Use color.formatHex.
  formatHex: yd,
  formatHex8: uM,
  formatHsl: sM,
  formatRgb: md,
  toString: md
});
function yd() {
  return this.rgb().formatHex();
}
function uM() {
  return this.rgb().formatHex8();
}
function sM() {
  return yy(this).formatHsl();
}
function md() {
  return this.rgb().formatRgb();
}
function Si(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = eM.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? gd(t) : r === 3 ? new ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? la(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? la(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = tM.exec(e)) ? new ot(t[1], t[2], t[3], 1) : (t = rM.exec(e)) ? new ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = nM.exec(e)) ? la(t[1], t[2], t[3], t[4]) : (t = iM.exec(e)) ? la(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = aM.exec(e)) ? wd(t[1], t[2] / 100, t[3] / 100, 1) : (t = oM.exec(e)) ? wd(t[1], t[2] / 100, t[3] / 100, t[4]) : vd.hasOwnProperty(e) ? gd(vd[e]) : e === "transparent" ? new ot(NaN, NaN, NaN, 0) : null;
}
function gd(e) {
  return new ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function la(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ot(e, t, r, n);
}
function cM(e) {
  return e instanceof Qi || (e = Si(e)), e ? (e = e.rgb(), new ot(e.r, e.g, e.b, e.opacity)) : new ot();
}
function Os(e, t, r, n) {
  return arguments.length === 1 ? cM(e) : new ot(e, t, r, n ?? 1);
}
function ot(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Kc(ot, Os, vy(Qi, {
  brighter(e) {
    return e = e == null ? La : Math.pow(La, e), new ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ot(Tr(this.r), Tr(this.g), Tr(this.b), Ba(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bd,
  // Deprecated! Use color.formatHex.
  formatHex: bd,
  formatHex8: lM,
  formatRgb: xd,
  toString: xd
}));
function bd() {
  return `#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}`;
}
function lM() {
  return `#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}${Ar((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xd() {
  const e = Ba(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Tr(this.r)}, ${Tr(this.g)}, ${Tr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ba(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Tr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ar(e) {
  return e = Tr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function wd(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mt(e, t, r, n);
}
function yy(e) {
  if (e instanceof Mt) return new Mt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qi || (e = Si(e)), !e) return new Mt();
  if (e instanceof Mt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new Mt(o, u, s, e.opacity);
}
function fM(e, t, r, n) {
  return arguments.length === 1 ? yy(e) : new Mt(e, t, r, n ?? 1);
}
function Mt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Kc(Mt, fM, vy(Qi, {
  brighter(e) {
    return e = e == null ? La : Math.pow(La, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new Mt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new ot(
      wu(e >= 240 ? e - 240 : e + 120, i, n),
      wu(e, i, n),
      wu(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Mt(_d(this.h), fa(this.s), fa(this.l), Ba(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ba(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${_d(this.h)}, ${fa(this.s) * 100}%, ${fa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function _d(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fa(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function wu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const qc = (e) => () => e;
function dM(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function hM(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function pM(e) {
  return (e = +e) == 1 ? my : function(t, r) {
    return r - t ? hM(t, r, e) : qc(isNaN(t) ? r : t);
  };
}
function my(e, t) {
  var r = t - e;
  return r ? dM(e, r) : qc(isNaN(e) ? t : e);
}
const Od = function e(t) {
  var r = pM(t);
  function n(i, a) {
    var o = r((i = Os(i)).r, (a = Os(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), c = my(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = u(l), i.b = s(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function vM(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function yM(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function mM(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Rn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function gM(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Fa(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function bM(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Rn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Ss = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _u = new RegExp(Ss.source, "g");
function xM(e) {
  return function() {
    return e;
  };
}
function wM(e) {
  return function(t) {
    return e(t) + "";
  };
}
function _M(e, t) {
  var r = Ss.lastIndex = _u.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = Ss.exec(e)) && (i = _u.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: Fa(n, i) })), r = _u.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? wM(s[0].x) : xM(t) : (t = s.length, function(c) {
    for (var l = 0, f; l < t; ++l) u[(f = s[l]).i] = f.x(c);
    return u.join("");
  });
}
function Rn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? qc(t) : (r === "number" ? Fa : r === "string" ? (n = Si(t)) ? (t = n, Od) : _M : t instanceof Si ? Od : t instanceof Date ? gM : yM(t) ? vM : Array.isArray(t) ? mM : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? bM : Fa)(e, t);
}
function Vc(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function OM(e, t) {
  t === void 0 && (t = e, e = Rn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function SM(e) {
  return function() {
    return e;
  };
}
function za(e) {
  return +e;
}
var Sd = [0, 1];
function it(e) {
  return e;
}
function As(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : SM(isNaN(t) ? NaN : 0.5);
}
function AM(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function PM(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = As(i, n), a = r(o, a)) : (n = As(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function EM(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = As(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Ji(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function ea(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Fo() {
  var e = Sd, t = Sd, r = Rn, n, i, a, o = it, u, s, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== it && (o = AM(e[0], e[d - 1])), u = d > 2 ? EM : PM, s = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), Fa)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, za), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Vc, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : it, l()) : o !== it;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, h) {
    return n = d, i = h, l();
  };
}
function Gc() {
  return Fo()(it, it);
}
function $M(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Wa(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function sn(e) {
  return e = Wa(Math.abs(e)), e ? e[1] : NaN;
}
function TM(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function jM(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var CM = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ai(e) {
  if (!(t = CM.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Hc({
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
Ai.prototype = Hc.prototype;
function Hc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Hc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function MM(e) {
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
var gy;
function IM(e, t) {
  var r = Wa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (gy = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Wa(e, Math.max(0, t + a - 1))[0];
}
function Ad(e, t) {
  var r = Wa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Pd = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: $M,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ad(e * 100, t),
  r: Ad,
  s: IM,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ed(e) {
  return e;
}
var $d = Array.prototype.map, Td = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function kM(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ed : TM($d.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ed : jM($d.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ai(f);
    var d = f.fill, h = f.align, y = f.sign, v = f.symbol, p = f.zero, g = f.width, w = f.comma, b = f.precision, _ = f.trim, m = f.type;
    m === "n" ? (w = !0, m = "g") : Pd[m] || (b === void 0 && (b = 12), _ = !0, m = "g"), (p || d === "0" && h === "=") && (p = !0, d = "0", h = "=");
    var x = v === "$" ? r : v === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", O = v === "$" ? n : /[%p]/.test(m) ? o : "", P = Pd[m], $ = /[defgprs%]/.test(m);
    b = b === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function I(T) {
      var C = x, R = O, N, k, L;
      if (m === "c")
        R = P(T) + R, T = "";
      else {
        T = +T;
        var F = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? s : P(Math.abs(T), b), _ && (T = MM(T)), F && +T == 0 && y !== "+" && (F = !1), C = (F ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + C, R = (m === "s" ? Td[8 + gy / 3] : "") + R + (F && y === "(" ? ")" : ""), $) {
          for (N = -1, k = T.length; ++N < k; )
            if (L = T.charCodeAt(N), 48 > L || L > 57) {
              R = (L === 46 ? i + T.slice(N + 1) : T.slice(N)) + R, T = T.slice(0, N);
              break;
            }
        }
      }
      w && !p && (T = t(T, 1 / 0));
      var K = C.length + T.length + R.length, V = K < g ? new Array(g - K + 1).join(d) : "";
      switch (w && p && (T = t(V + T, V.length ? g - R.length : 1 / 0), V = ""), h) {
        case "<":
          T = C + T + R + V;
          break;
        case "=":
          T = C + V + T + R;
          break;
        case "^":
          T = V.slice(0, K = V.length >> 1) + C + T + R + V.slice(K);
          break;
        default:
          T = V + C + T + R;
          break;
      }
      return a(T);
    }
    return I.toString = function() {
      return f + "";
    }, I;
  }
  function l(f, d) {
    var h = c((f = Ai(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(sn(d) / 3))) * 3, v = Math.pow(10, -y), p = Td[8 + y / 3];
    return function(g) {
      return h(v * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var da, Yc, by;
NM({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function NM(e) {
  return da = kM(e), Yc = da.format, by = da.formatPrefix, da;
}
function DM(e) {
  return Math.max(0, -sn(Math.abs(e)));
}
function RM(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(sn(t) / 3))) * 3 - sn(Math.abs(e)));
}
function LM(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, sn(t) - sn(e)) + 1;
}
function xy(e, t, r, n) {
  var i = ws(e, t, r), a;
  switch (n = Ai(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = RM(i, o)) && (n.precision = a), by(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = LM(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = DM(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Yc(n);
}
function yr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return bs(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return xy(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, l = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); l-- > 0; ) {
      if (c = xs(o, u, r), c === s)
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
function Ua() {
  var e = Gc();
  return e.copy = function() {
    return ea(e, Ua());
  }, Pt.apply(e, arguments), yr(e);
}
function wy(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, za), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return wy(e).unknown(t);
  }, e = arguments.length ? Array.from(e, za) : [0, 1], yr(r);
}
function _y(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function jd(e) {
  return Math.log(e);
}
function Cd(e) {
  return Math.exp(e);
}
function BM(e) {
  return -Math.log(-e);
}
function FM(e) {
  return -Math.exp(-e);
}
function zM(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function WM(e) {
  return e === 10 ? zM : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function UM(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Md(e) {
  return (t, r) => -e(-t, r);
}
function Xc(e) {
  const t = e(jd, Cd), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = UM(n), a = WM(n), r()[0] < 0 ? (i = Md(i), a = Md(a), e(BM, FM)) : e(jd, Cd), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], l = s[s.length - 1];
    const f = l < c;
    f && ([c, l] = [l, c]);
    let d = i(c), h = i(l), y, v;
    const p = u == null ? 10 : +u;
    let g = [];
    if (!(n % 1) && h - d < p) {
      if (d = Math.floor(d), h = Math.ceil(h), c > 0) {
        for (; d <= h; ++d)
          for (y = 1; y < n; ++y)
            if (v = d < 0 ? y / a(-d) : y * a(d), !(v < c)) {
              if (v > l) break;
              g.push(v);
            }
      } else for (; d <= h; ++d)
        for (y = n - 1; y >= 1; --y)
          if (v = d > 0 ? y / a(-d) : y * a(d), !(v < c)) {
            if (v > l) break;
            g.push(v);
          }
      g.length * 2 < p && (g = bs(c, l, p));
    } else
      g = bs(d, h, Math.min(h - d, p)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Ai(s)).precision == null && (s.trim = !0), s = Yc(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(l) : "";
    };
  }, t.nice = () => r(_y(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Oy() {
  const e = Xc(Fo()).domain([1, 10]);
  return e.copy = () => ea(e, Oy()).base(e.base()), Pt.apply(e, arguments), e;
}
function Id(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function kd(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Zc(e) {
  var t = 1, r = e(Id(t), kd(t));
  return r.constant = function(n) {
    return arguments.length ? e(Id(t = +n), kd(t)) : t;
  }, yr(r);
}
function Sy() {
  var e = Zc(Fo());
  return e.copy = function() {
    return ea(e, Sy()).constant(e.constant());
  }, Pt.apply(e, arguments);
}
function Nd(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function KM(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function qM(e) {
  return e < 0 ? -e * e : e * e;
}
function Jc(e) {
  var t = e(it, it), r = 1;
  function n() {
    return r === 1 ? e(it, it) : r === 0.5 ? e(KM, qM) : e(Nd(r), Nd(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, yr(t);
}
function Qc() {
  var e = Jc(Fo());
  return e.copy = function() {
    return ea(e, Qc()).exponent(e.exponent());
  }, Pt.apply(e, arguments), e;
}
function VM() {
  return Qc.apply(null, arguments).exponent(0.5);
}
function Dd(e) {
  return Math.sign(e) * e * e;
}
function GM(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Ay() {
  var e = Gc(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = GM(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Dd(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, za)).map(Dd)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Ay(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Pt.apply(i, arguments), yr(i);
}
function Py() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = JC(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Ji(r, o)];
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
    return e.sort(hr), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Py().domain(e).range(t).unknown(n);
  }, Pt.apply(a, arguments);
}
function Ey() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[Ji(n, s, 0, r)] : a;
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
    return Ey().domain([e, t]).range(i).unknown(a);
  }, Pt.apply(yr(o), arguments);
}
function $y() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Ji(e, a, 0, n)] : r;
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
    return $y().domain(e).range(t).unknown(r);
  }, Pt.apply(i, arguments);
}
const Ou = /* @__PURE__ */ new Date(), Su = /* @__PURE__ */ new Date();
function Ue(e, t, r, n) {
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
  }, i.filter = (a) => Ue((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Ou.setTime(+a), Su.setTime(+o), e(Ou), e(Su), Math.floor(r(Ou, Su))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Ka = Ue(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ka.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ue((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ka);
Ka.range;
const Gt = 1e3, wt = Gt * 60, Ht = wt * 60, er = Ht * 24, el = er * 7, Rd = er * 30, Au = er * 365, Pr = Ue((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Gt);
}, (e, t) => (t - e) / Gt, (e) => e.getUTCSeconds());
Pr.range;
const tl = Ue((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Gt);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getMinutes());
tl.range;
const rl = Ue((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * wt);
}, (e, t) => (t - e) / wt, (e) => e.getUTCMinutes());
rl.range;
const nl = Ue((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Gt - e.getMinutes() * wt);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getHours());
nl.range;
const il = Ue((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCHours());
il.range;
const ta = Ue(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wt) / er,
  (e) => e.getDate() - 1
);
ta.range;
const zo = Ue((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / er, (e) => e.getUTCDate() - 1);
zo.range;
const Ty = Ue((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / er, (e) => Math.floor(e / er));
Ty.range;
function Br(e) {
  return Ue((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * wt) / el);
}
const Wo = Br(0), qa = Br(1), HM = Br(2), YM = Br(3), cn = Br(4), XM = Br(5), ZM = Br(6);
Wo.range;
qa.range;
HM.range;
YM.range;
cn.range;
XM.range;
ZM.range;
function Fr(e) {
  return Ue((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / el);
}
const Uo = Fr(0), Va = Fr(1), JM = Fr(2), QM = Fr(3), ln = Fr(4), eI = Fr(5), tI = Fr(6);
Uo.range;
Va.range;
JM.range;
QM.range;
ln.range;
eI.range;
tI.range;
const al = Ue((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
al.range;
const ol = Ue((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ol.range;
const tr = Ue((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
tr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ue((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
tr.range;
const rr = Ue((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
rr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ue((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
rr.range;
function jy(e, t, r, n, i, a) {
  const o = [
    [Pr, 1, Gt],
    [Pr, 5, 5 * Gt],
    [Pr, 15, 15 * Gt],
    [Pr, 30, 30 * Gt],
    [a, 1, wt],
    [a, 5, 5 * wt],
    [a, 15, 15 * wt],
    [a, 30, 30 * wt],
    [i, 1, Ht],
    [i, 3, 3 * Ht],
    [i, 6, 6 * Ht],
    [i, 12, 12 * Ht],
    [n, 1, er],
    [n, 2, 2 * er],
    [r, 1, el],
    [t, 1, Rd],
    [t, 3, 3 * Rd],
    [e, 1, Au]
  ];
  function u(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const h = f && typeof f.range == "function" ? f : s(c, l, f), y = h ? h.range(c, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function s(c, l, f) {
    const d = Math.abs(l - c) / f, h = Wc(([, , p]) => p).right(o, d);
    if (h === o.length) return e.every(ws(c / Au, l / Au, f));
    if (h === 0) return Ka.every(Math.max(ws(c, l, f), 1));
    const [y, v] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return y.every(v);
  }
  return [u, s];
}
const [rI, nI] = jy(rr, ol, Uo, Ty, il, rl), [iI, aI] = jy(tr, al, Wo, ta, nl, tl);
function Pu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Eu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Jn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function oI(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = Qn(i), l = ei(i), f = Qn(a), d = ei(a), h = Qn(o), y = ei(o), v = Qn(u), p = ei(u), g = Qn(s), w = ei(s), b = {
    a: F,
    A: K,
    b: V,
    B: M,
    c: null,
    d: Ud,
    e: Ud,
    f: TI,
    g: BI,
    G: zI,
    H: PI,
    I: EI,
    j: $I,
    L: Cy,
    m: jI,
    M: CI,
    p: B,
    q: z,
    Q: Vd,
    s: Gd,
    S: MI,
    u: II,
    U: kI,
    V: NI,
    w: DI,
    W: RI,
    x: null,
    X: null,
    y: LI,
    Y: FI,
    Z: WI,
    "%": qd
  }, _ = {
    a: G,
    A: X,
    b: te,
    B: re,
    c: null,
    d: Kd,
    e: Kd,
    f: VI,
    g: rk,
    G: ik,
    H: UI,
    I: KI,
    j: qI,
    L: Iy,
    m: GI,
    M: HI,
    p: ie,
    q: ne,
    Q: Vd,
    s: Gd,
    S: YI,
    u: XI,
    U: ZI,
    V: JI,
    w: QI,
    W: ek,
    x: null,
    X: null,
    y: tk,
    Y: nk,
    Z: ak,
    "%": qd
  }, m = {
    a: I,
    A: T,
    b: C,
    B: R,
    c: N,
    d: zd,
    e: zd,
    f: _I,
    g: Fd,
    G: Bd,
    H: Wd,
    I: Wd,
    j: gI,
    L: wI,
    m: mI,
    M: bI,
    p: $,
    q: yI,
    Q: SI,
    s: AI,
    S: xI,
    u: fI,
    U: dI,
    V: hI,
    w: lI,
    W: pI,
    x: k,
    X: L,
    y: Fd,
    Y: Bd,
    Z: vI,
    "%": OI
  };
  b.x = x(r, b), b.X = x(n, b), b.c = x(t, b), _.x = x(r, _), _.X = x(n, _), _.c = x(t, _);
  function x(W, H) {
    return function(ee) {
      var j = [], le = -1, q = 0, ve = W.length, ye, ke, Et;
      for (ee instanceof Date || (ee = /* @__PURE__ */ new Date(+ee)); ++le < ve; )
        W.charCodeAt(le) === 37 && (j.push(W.slice(q, le)), (ke = Ld[ye = W.charAt(++le)]) != null ? ye = W.charAt(++le) : ke = ye === "e" ? " " : "0", (Et = H[ye]) && (ye = Et(ee, ke)), j.push(ye), q = le + 1);
      return j.push(W.slice(q, le)), j.join("");
    };
  }
  function O(W, H) {
    return function(ee) {
      var j = Jn(1900, void 0, 1), le = P(j, W, ee += "", 0), q, ve;
      if (le != ee.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (H && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (q = Eu(Jn(j.y, 0, 1)), ve = q.getUTCDay(), q = ve > 4 || ve === 0 ? Va.ceil(q) : Va(q), q = zo.offset(q, (j.V - 1) * 7), j.y = q.getUTCFullYear(), j.m = q.getUTCMonth(), j.d = q.getUTCDate() + (j.w + 6) % 7) : (q = Pu(Jn(j.y, 0, 1)), ve = q.getDay(), q = ve > 4 || ve === 0 ? qa.ceil(q) : qa(q), q = ta.offset(q, (j.V - 1) * 7), j.y = q.getFullYear(), j.m = q.getMonth(), j.d = q.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), ve = "Z" in j ? Eu(Jn(j.y, 0, 1)).getUTCDay() : Pu(Jn(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (ve + 5) % 7 : j.w + j.U * 7 - (ve + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, Eu(j)) : Pu(j);
    };
  }
  function P(W, H, ee, j) {
    for (var le = 0, q = H.length, ve = ee.length, ye, ke; le < q; ) {
      if (j >= ve) return -1;
      if (ye = H.charCodeAt(le++), ye === 37) {
        if (ye = H.charAt(le++), ke = m[ye in Ld ? H.charAt(le++) : ye], !ke || (j = ke(W, ee, j)) < 0) return -1;
      } else if (ye != ee.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function $(W, H, ee) {
    var j = c.exec(H.slice(ee));
    return j ? (W.p = l.get(j[0].toLowerCase()), ee + j[0].length) : -1;
  }
  function I(W, H, ee) {
    var j = h.exec(H.slice(ee));
    return j ? (W.w = y.get(j[0].toLowerCase()), ee + j[0].length) : -1;
  }
  function T(W, H, ee) {
    var j = f.exec(H.slice(ee));
    return j ? (W.w = d.get(j[0].toLowerCase()), ee + j[0].length) : -1;
  }
  function C(W, H, ee) {
    var j = g.exec(H.slice(ee));
    return j ? (W.m = w.get(j[0].toLowerCase()), ee + j[0].length) : -1;
  }
  function R(W, H, ee) {
    var j = v.exec(H.slice(ee));
    return j ? (W.m = p.get(j[0].toLowerCase()), ee + j[0].length) : -1;
  }
  function N(W, H, ee) {
    return P(W, t, H, ee);
  }
  function k(W, H, ee) {
    return P(W, r, H, ee);
  }
  function L(W, H, ee) {
    return P(W, n, H, ee);
  }
  function F(W) {
    return o[W.getDay()];
  }
  function K(W) {
    return a[W.getDay()];
  }
  function V(W) {
    return s[W.getMonth()];
  }
  function M(W) {
    return u[W.getMonth()];
  }
  function B(W) {
    return i[+(W.getHours() >= 12)];
  }
  function z(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function G(W) {
    return o[W.getUTCDay()];
  }
  function X(W) {
    return a[W.getUTCDay()];
  }
  function te(W) {
    return s[W.getUTCMonth()];
  }
  function re(W) {
    return u[W.getUTCMonth()];
  }
  function ie(W) {
    return i[+(W.getUTCHours() >= 12)];
  }
  function ne(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return {
    format: function(W) {
      var H = x(W += "", b);
      return H.toString = function() {
        return W;
      }, H;
    },
    parse: function(W) {
      var H = O(W += "", !1);
      return H.toString = function() {
        return W;
      }, H;
    },
    utcFormat: function(W) {
      var H = x(W += "", _);
      return H.toString = function() {
        return W;
      }, H;
    },
    utcParse: function(W) {
      var H = O(W += "", !0);
      return H.toString = function() {
        return W;
      }, H;
    }
  };
}
var Ld = { "-": "", _: " ", 0: "0" }, Ge = /^\s*\d+/, uI = /^%/, sI = /[\\^$*+?|[\]().{}]/g;
function pe(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function cI(e) {
  return e.replace(sI, "\\$&");
}
function Qn(e) {
  return new RegExp("^(?:" + e.map(cI).join("|") + ")", "i");
}
function ei(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function lI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function fI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function dI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function hI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function pI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Bd(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Fd(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function vI(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function yI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function mI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function zd(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function gI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Wd(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function bI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function xI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function wI(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function _I(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function OI(e, t, r) {
  var n = uI.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function SI(e, t, r) {
  var n = Ge.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function AI(e, t, r) {
  var n = Ge.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Ud(e, t) {
  return pe(e.getDate(), t, 2);
}
function PI(e, t) {
  return pe(e.getHours(), t, 2);
}
function EI(e, t) {
  return pe(e.getHours() % 12 || 12, t, 2);
}
function $I(e, t) {
  return pe(1 + ta.count(tr(e), e), t, 3);
}
function Cy(e, t) {
  return pe(e.getMilliseconds(), t, 3);
}
function TI(e, t) {
  return Cy(e, t) + "000";
}
function jI(e, t) {
  return pe(e.getMonth() + 1, t, 2);
}
function CI(e, t) {
  return pe(e.getMinutes(), t, 2);
}
function MI(e, t) {
  return pe(e.getSeconds(), t, 2);
}
function II(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function kI(e, t) {
  return pe(Wo.count(tr(e) - 1, e), t, 2);
}
function My(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? cn(e) : cn.ceil(e);
}
function NI(e, t) {
  return e = My(e), pe(cn.count(tr(e), e) + (tr(e).getDay() === 4), t, 2);
}
function DI(e) {
  return e.getDay();
}
function RI(e, t) {
  return pe(qa.count(tr(e) - 1, e), t, 2);
}
function LI(e, t) {
  return pe(e.getFullYear() % 100, t, 2);
}
function BI(e, t) {
  return e = My(e), pe(e.getFullYear() % 100, t, 2);
}
function FI(e, t) {
  return pe(e.getFullYear() % 1e4, t, 4);
}
function zI(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? cn(e) : cn.ceil(e), pe(e.getFullYear() % 1e4, t, 4);
}
function WI(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + pe(t / 60 | 0, "0", 2) + pe(t % 60, "0", 2);
}
function Kd(e, t) {
  return pe(e.getUTCDate(), t, 2);
}
function UI(e, t) {
  return pe(e.getUTCHours(), t, 2);
}
function KI(e, t) {
  return pe(e.getUTCHours() % 12 || 12, t, 2);
}
function qI(e, t) {
  return pe(1 + zo.count(rr(e), e), t, 3);
}
function Iy(e, t) {
  return pe(e.getUTCMilliseconds(), t, 3);
}
function VI(e, t) {
  return Iy(e, t) + "000";
}
function GI(e, t) {
  return pe(e.getUTCMonth() + 1, t, 2);
}
function HI(e, t) {
  return pe(e.getUTCMinutes(), t, 2);
}
function YI(e, t) {
  return pe(e.getUTCSeconds(), t, 2);
}
function XI(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ZI(e, t) {
  return pe(Uo.count(rr(e) - 1, e), t, 2);
}
function ky(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ln(e) : ln.ceil(e);
}
function JI(e, t) {
  return e = ky(e), pe(ln.count(rr(e), e) + (rr(e).getUTCDay() === 4), t, 2);
}
function QI(e) {
  return e.getUTCDay();
}
function ek(e, t) {
  return pe(Va.count(rr(e) - 1, e), t, 2);
}
function tk(e, t) {
  return pe(e.getUTCFullYear() % 100, t, 2);
}
function rk(e, t) {
  return e = ky(e), pe(e.getUTCFullYear() % 100, t, 2);
}
function nk(e, t) {
  return pe(e.getUTCFullYear() % 1e4, t, 4);
}
function ik(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ln(e) : ln.ceil(e), pe(e.getUTCFullYear() % 1e4, t, 4);
}
function ak() {
  return "+0000";
}
function qd() {
  return "%";
}
function Vd(e) {
  return +e;
}
function Gd(e) {
  return Math.floor(+e / 1e3);
}
var Gr, Ny, Dy;
ok({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ok(e) {
  return Gr = oI(e), Ny = Gr.format, Gr.parse, Dy = Gr.utcFormat, Gr.utcParse, Gr;
}
function uk(e) {
  return new Date(e);
}
function sk(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ul(e, t, r, n, i, a, o, u, s, c) {
  var l = Gc(), f = l.invert, d = l.domain, h = c(".%L"), y = c(":%S"), v = c("%I:%M"), p = c("%I %p"), g = c("%a %d"), w = c("%b %d"), b = c("%B"), _ = c("%Y");
  function m(x) {
    return (s(x) < x ? h : u(x) < x ? y : o(x) < x ? v : a(x) < x ? p : n(x) < x ? i(x) < x ? g : w : r(x) < x ? b : _)(x);
  }
  return l.invert = function(x) {
    return new Date(f(x));
  }, l.domain = function(x) {
    return arguments.length ? d(Array.from(x, sk)) : d().map(uk);
  }, l.ticks = function(x) {
    var O = d();
    return e(O[0], O[O.length - 1], x ?? 10);
  }, l.tickFormat = function(x, O) {
    return O == null ? m : c(O);
  }, l.nice = function(x) {
    var O = d();
    return (!x || typeof x.range != "function") && (x = t(O[0], O[O.length - 1], x ?? 10)), x ? d(_y(O, x)) : l;
  }, l.copy = function() {
    return ea(l, ul(e, t, r, n, i, a, o, u, s, c));
  }, l;
}
function ck() {
  return Pt.apply(ul(iI, aI, tr, al, Wo, ta, nl, tl, Pr, Ny).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function lk() {
  return Pt.apply(ul(rI, nI, rr, ol, Uo, zo, il, rl, Pr, Dy).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Ko() {
  var e = 0, t = 1, r, n, i, a, o = it, u = !1, s;
  function c(f) {
    return f == null || isNaN(f = +f) ? s : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (u = !!f, c) : u;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function l(f) {
    return function(d) {
      var h, y;
      return arguments.length ? ([h, y] = d, o = f(h, y), c) : [o(0), o(1)];
    };
  }
  return c.range = l(Rn), c.rangeRound = l(Vc), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function mr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Ry() {
  var e = yr(Ko()(it));
  return e.copy = function() {
    return mr(e, Ry());
  }, ur.apply(e, arguments);
}
function Ly() {
  var e = Xc(Ko()).domain([1, 10]);
  return e.copy = function() {
    return mr(e, Ly()).base(e.base());
  }, ur.apply(e, arguments);
}
function By() {
  var e = Zc(Ko());
  return e.copy = function() {
    return mr(e, By()).constant(e.constant());
  }, ur.apply(e, arguments);
}
function sl() {
  var e = Jc(Ko());
  return e.copy = function() {
    return mr(e, sl()).exponent(e.exponent());
  }, ur.apply(e, arguments);
}
function fk() {
  return sl.apply(null, arguments).exponent(0.5);
}
function Fy() {
  var e = [], t = it;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Ji(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(hr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => ZC(e, a / n));
  }, r.copy = function() {
    return Fy(t).domain(e);
  }, ur.apply(r, arguments);
}
function qo() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = it, l, f = !1, d;
  function h(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +l(v)) - a) * (n * v < n * a ? u : s), c(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = l(e = +e), a = l(t = +t), o = l(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function y(v) {
    return function(p) {
      var g, w, b;
      return arguments.length ? ([g, w, b] = p, c = OM(v, [g, w, b]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = y(Rn), h.rangeRound = y(Vc), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return l = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function zy() {
  var e = yr(qo()(it));
  return e.copy = function() {
    return mr(e, zy());
  }, ur.apply(e, arguments);
}
function Wy() {
  var e = Xc(qo()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return mr(e, Wy()).base(e.base());
  }, ur.apply(e, arguments);
}
function Uy() {
  var e = Zc(qo());
  return e.copy = function() {
    return mr(e, Uy()).constant(e.constant());
  }, ur.apply(e, arguments);
}
function cl() {
  var e = Jc(qo());
  return e.copy = function() {
    return mr(e, cl()).exponent(e.exponent());
  }, ur.apply(e, arguments);
}
function dk() {
  return cl.apply(null, arguments).exponent(0.5);
}
const Hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: wi,
  scaleDiverging: zy,
  scaleDivergingLog: Wy,
  scaleDivergingPow: cl,
  scaleDivergingSqrt: dk,
  scaleDivergingSymlog: Uy,
  scaleIdentity: wy,
  scaleImplicit: _s,
  scaleLinear: Ua,
  scaleLog: Oy,
  scaleOrdinal: Uc,
  scalePoint: ui,
  scalePow: Qc,
  scaleQuantile: Py,
  scaleQuantize: Ey,
  scaleRadial: Ay,
  scaleSequential: Ry,
  scaleSequentialLog: Ly,
  scaleSequentialPow: sl,
  scaleSequentialQuantile: Fy,
  scaleSequentialSqrt: fk,
  scaleSequentialSymlog: By,
  scaleSqrt: VM,
  scaleSymlog: Sy,
  scaleThreshold: $y,
  scaleTime: ck,
  scaleUtc: lk,
  tickFormat: xy
}, Symbol.toStringTag, { value: "Module" }));
var hk = $n;
function pk(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (u === void 0 ? o === o && !hk(o) : r(o, u)))
      var u = o, s = a;
  }
  return s;
}
var Ky = pk;
function vk(e, t) {
  return e > t;
}
var yk = vk, mk = Ky, gk = yk, bk = Dn;
function xk(e) {
  return e && e.length ? mk(e, bk, gk) : void 0;
}
var wk = xk;
const Vo = /* @__PURE__ */ $e(wk);
function _k(e, t) {
  return e < t;
}
var Ok = _k, Sk = Ky, Ak = Ok, Pk = Dn;
function Ek(e) {
  return e && e.length ? Sk(e, Pk, Ak) : void 0;
}
var $k = Ek;
const Go = /* @__PURE__ */ $e($k);
var Tk = Pc, jk = vr, Ck = Qv, Mk = ct;
function Ik(e, t) {
  var r = Mk(e) ? Tk : Ck;
  return r(e, jk(t));
}
var kk = Ik, Nk = Zv, Dk = kk;
function Rk(e, t) {
  return Nk(Dk(e, t), 1);
}
var Lk = Rk;
const Bk = /* @__PURE__ */ $e(Lk);
var Fk = Lc;
function zk(e, t) {
  return Fk(e, t);
}
var Wk = zk;
const ra = /* @__PURE__ */ $e(Wk);
var Ln = 1e9, Uk = {
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
}, fl, Ce = !0, At = "[DecimalError] ", jr = At + "Invalid argument: ", ll = At + "Exponent out of range: ", Bn = Math.floor, Or = Math.pow, Kk = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, pt, Ke = 1e7, je = 7, qy = 9007199254740991, Ga = Bn(qy / je), J = {};
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
J.comparedTo = J.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
J.decimalPlaces = J.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * je;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
J.dividedBy = J.div = function(e) {
  return Jt(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ae(Jt(t, new r(e), 0, 1), r.precision);
};
J.equals = J.eq = function(e) {
  return !this.cmp(e);
};
J.exponent = function() {
  return Le(this);
};
J.greaterThan = J.gt = function(e) {
  return this.cmp(e) > 0;
};
J.greaterThanOrEqualTo = J.gte = function(e) {
  return this.cmp(e) >= 0;
};
J.isInteger = J.isint = function() {
  return this.e > this.d.length - 2;
};
J.isNegative = J.isneg = function() {
  return this.s < 0;
};
J.isPositive = J.ispos = function() {
  return this.s > 0;
};
J.isZero = function() {
  return this.s === 0;
};
J.lessThan = J.lt = function(e) {
  return this.cmp(e) < 0;
};
J.lessThanOrEqualTo = J.lte = function(e) {
  return this.cmp(e) < 1;
};
J.logarithm = J.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(pt)) throw Error(At + "NaN");
  if (r.s < 1) throw Error(At + (r.s ? "NaN" : "-Infinity"));
  return r.eq(pt) ? new n(0) : (Ce = !1, t = Jt(Pi(r, a), Pi(e, a), a), Ce = !0, Ae(t, i));
};
J.minus = J.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Hy(t, e) : Vy(t, (e.s = -e.s, e));
};
J.modulo = J.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(At + "NaN");
  return r.s ? (Ce = !1, t = Jt(r, e, 0, 1).times(e), Ce = !0, r.minus(t)) : Ae(new n(r), i);
};
J.naturalExponential = J.exp = function() {
  return Gy(this);
};
J.naturalLogarithm = J.ln = function() {
  return Pi(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
J.plus = J.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Vy(t, e) : Hy(t, (e.s = -e.s, e));
};
J.precision = J.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(jr + e);
  if (t = Le(i) + 1, n = i.d.length - 1, r = n * je + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
J.squareRoot = J.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(At + "NaN");
  }
  for (e = Le(u), Ce = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Dt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Bn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Jt(u, a, o + 2)).times(0.5), Dt(a.d).slice(0, o) === (t = Dt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (Ae(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Ce = !0, Ae(n, r);
};
J.times = J.mul = function(e) {
  var t, r, n, i, a, o, u, s, c, l = this, f = l.constructor, d = l.d, h = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, s = d.length, c = h.length, s < c && (a = d, d = h, h = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + h[n] * d[i - n - 1] + t, a[i--] = u % Ke | 0, t = u / Ke | 0;
    a[i] = (a[i] + t) % Ke | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, Ce ? Ae(e, f.precision) : e;
};
J.toDecimalPlaces = J.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (zt(e, 0, Ln), t === void 0 ? t = n.rounding : zt(t, 0, 8), Ae(r, e + Le(r) + 1, t));
};
J.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = kr(n, !0) : (zt(e, 0, Ln), t === void 0 ? t = i.rounding : zt(t, 0, 8), n = Ae(new i(n), e + 1, t), r = kr(n, !0, e + 1)), r;
};
J.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? kr(i) : (zt(e, 0, Ln), t === void 0 ? t = a.rounding : zt(t, 0, 8), n = Ae(new a(i), e + Le(i) + 1, t), r = kr(n.abs(), !1, e + Le(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
J.toInteger = J.toint = function() {
  var e = this, t = e.constructor;
  return Ae(new t(e), Le(e) + 1, t.rounding);
};
J.toNumber = function() {
  return +this;
};
J.toPower = J.pow = function(e) {
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, l = +(e = new s(e));
  if (!e.s) return new s(pt);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(At + "Infinity");
    return u;
  }
  if (u.eq(pt)) return u;
  if (n = s.precision, e.eq(pt)) return Ae(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = l < 0 ? -l : l) <= qy) {
      for (i = new s(pt), t = Math.ceil(n / je + 4), Ce = !1; r % 2 && (i = i.times(u), Xd(i.d, t)), r = Bn(r / 2), r !== 0; )
        u = u.times(u), Xd(u.d, t);
      return Ce = !0, e.s < 0 ? new s(pt).div(i) : Ae(i, n);
    }
  } else if (a < 0) throw Error(At + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, Ce = !1, i = e.times(Pi(u, n + c)), Ce = !0, i = Gy(i), i.s = a, i;
};
J.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Le(i), n = kr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (zt(e, 1, Ln), t === void 0 ? t = a.rounding : zt(t, 0, 8), i = Ae(new a(i), e, t), r = Le(i), n = kr(i, e <= r || r <= a.toExpNeg, e)), n;
};
J.toSignificantDigits = J.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (zt(e, 1, Ln), t === void 0 ? t = n.rounding : zt(t, 0, 8)), Ae(new n(r), e, t);
};
J.toString = J.valueOf = J.val = J.toJSON = J[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Le(e), r = e.constructor;
  return kr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Vy(e, t) {
  var r, n, i, a, o, u, s, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Ce ? Ae(t, f) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(f / je), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / Ke | 0, s[a] %= Ke;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, Ce ? Ae(t, f) : t;
}
function zt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(jr + e);
}
function Dt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = je - n.length, r && (a += sr(r)), a += n;
    o = e[t], n = o + "", r = je - n.length, r && (a += sr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Jt = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Ke | 0, o = a / Ke | 0;
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
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ke + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, l, f, d, h, y, v, p, g, w, b, _, m, x, O, P, $ = n.constructor, I = n.s == i.s ? 1 : -1, T = n.d, C = i.d;
    if (!n.s) return new $(n);
    if (!i.s) throw Error(At + "Division by zero");
    for (s = n.e - i.e, O = C.length, m = T.length, h = new $(I), y = h.d = [], c = 0; C[c] == (T[c] || 0); ) ++c;
    if (C[c] > (T[c] || 0) && --s, a == null ? w = a = $.precision : o ? w = a + (Le(n) - Le(i)) + 1 : w = a, w < 0) return new $(0);
    if (w = w / je + 2 | 0, c = 0, O == 1)
      for (l = 0, C = C[0], w++; (c < m || l) && w--; c++)
        b = l * Ke + (T[c] || 0), y[c] = b / C | 0, l = b % C | 0;
    else {
      for (l = Ke / (C[0] + 1) | 0, l > 1 && (C = e(C, l), T = e(T, l), O = C.length, m = T.length), _ = O, v = T.slice(0, O), p = v.length; p < O; ) v[p++] = 0;
      P = C.slice(), P.unshift(0), x = C[0], C[1] >= Ke / 2 && ++x;
      do
        l = 0, u = t(C, v, O, p), u < 0 ? (g = v[0], O != p && (g = g * Ke + (v[1] || 0)), l = g / x | 0, l > 1 ? (l >= Ke && (l = Ke - 1), f = e(C, l), d = f.length, p = v.length, u = t(f, v, d, p), u == 1 && (l--, r(f, O < d ? P : C, d))) : (l == 0 && (u = l = 1), f = C.slice()), d = f.length, d < p && f.unshift(0), r(v, f, p), u == -1 && (p = v.length, u = t(C, v, O, p), u < 1 && (l++, r(v, O < p ? P : C, p))), p = v.length) : u === 0 && (l++, v = [0]), y[c++] = l, u && v[0] ? v[p++] = T[_] || 0 : (v = [T[_]], p = 1);
      while ((_++ < m || v[0] !== void 0) && w--);
    }
    return y[0] || y.shift(), h.e = s, Ae(h, o ? a + Le(h) + 1 : a);
  };
}();
function Gy(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, l = e.constructor, f = l.precision;
  if (Le(e) > 16) throw Error(ll + Le(e));
  if (!e.s) return new l(pt);
  for (Ce = !1, u = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(Or(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new l(pt), l.precision = u; ; ) {
    if (i = Ae(i.times(e), u), r = r.times(++s), o = a.plus(Jt(i, r, u)), Dt(o.d).slice(0, u) === Dt(a.d).slice(0, u)) {
      for (; c--; ) a = Ae(a.times(a), u);
      return l.precision = f, t == null ? (Ce = !0, Ae(a, f)) : a;
    }
    a = o;
  }
}
function Le(e) {
  for (var t = e.e * je, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function $u(e, t, r) {
  if (t > e.LN10.sd())
    throw Ce = !0, r && (e.precision = r), Error(At + "LN10 precision limit exceeded");
  return Ae(new e(e.LN10), t);
}
function sr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Pi(e, t) {
  var r, n, i, a, o, u, s, c, l, f = 1, d = 10, h = e, y = h.d, v = h.constructor, p = v.precision;
  if (h.s < 1) throw Error(At + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(pt)) return new v(0);
  if (t == null ? (Ce = !1, c = p) : c = t, h.eq(10))
    return t == null && (Ce = !0), $u(v, c);
  if (c += d, v.precision = c, r = Dt(y), n = r.charAt(0), a = Le(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Dt(h.d), n = r.charAt(0), f++;
    a = Le(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else
    return s = $u(v, c + 2, p).times(a + ""), h = Pi(new v(n + "." + r.slice(1)), c - d).plus(s), v.precision = p, t == null ? (Ce = !0, Ae(h, p)) : h;
  for (u = o = h = Jt(h.minus(pt), h.plus(pt), c), l = Ae(h.times(h), c), i = 3; ; ) {
    if (o = Ae(o.times(l), c), s = u.plus(Jt(o, new v(i), c)), Dt(s.d).slice(0, c) === Dt(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus($u(v, c + 2, p).times(a + ""))), u = Jt(u, new v(f), c), v.precision = p, t == null ? (Ce = !0, Ae(u, p)) : u;
    u = s, i += 2;
  }
}
function Yd(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Bn(r / je), e.d = [], n = (r + 1) % je, r < 0 && (n += je), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= je; n < i; ) e.d.push(+t.slice(n, n += je));
      t = t.slice(n), n = je - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ce && (e.e > Ga || e.e < -Ga)) throw Error(ll + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ae(e, t, r) {
  var n, i, a, o, u, s, c, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += je, i = t, c = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / je), a = f.length, l >= a) return e;
    for (c = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= je, i = n - je + o;
  }
  if (r !== void 0 && (a = Or(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || f[l + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / Or(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return s ? (a = Le(e), f.length = 1, t = t - a - 1, f[0] = Or(10, (je - t % je) % je), e.e = Bn(-t / je) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = Or(10, je - n), f[l] = i > 0 ? (c / Or(10, o - i) % Or(10, i) | 0) * a : 0), s)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == Ke && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != Ke) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ce && (e.e > Ga || e.e < -Ga))
    throw Error(ll + Le(e));
  return e;
}
function Hy(e, t) {
  var r, n, i, a, o, u, s, c, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Ce ? Ae(t, h) : t;
  if (s = e.d, f = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (l = o < 0, l ? (r = s, o = -o, u = f.length) : (r = f, n = c, u = s.length), i = Math.max(Math.ceil(h / je), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = f.length, l = i < u, l && (u = i), i = 0; i < u; i++)
      if (s[i] != f[i]) {
        l = s[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = s, s = f, f = r, t.s = -t.s), u = s.length, i = f.length - u; i > 0; --i) s[u++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Ke - 1;
      --s[a], s[i] += Ke;
    }
    s[i] -= f[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, Ce ? Ae(t, h) : t) : new d(0);
}
function kr(e, t, r) {
  var n, i = Le(e), a = Dt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + sr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + sr(-i - 1) + a, r && (n = r - o) > 0 && (a += sr(n))) : i >= o ? (a += sr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + sr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += sr(n))), e.s < 0 ? "-" + a : a;
}
function Xd(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Yy(e) {
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
        throw Error(jr + a);
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
      return Yd(o, a.toString());
    } else if (typeof a != "string")
      throw Error(jr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, Kk.test(a)) Yd(o, a);
    else throw Error(jr + a);
  }
  if (i.prototype = J, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Yy, i.config = i.set = qk, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function qk(e) {
  if (!e || typeof e != "object")
    throw Error(At + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Ln,
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
      if (Bn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(jr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(jr + r + ": " + n);
  return this;
}
var fl = Yy(Uk);
pt = new fl(1);
const Oe = fl;
function Vk(e) {
  return Xk(e) || Yk(e) || Hk(e) || Gk();
}
function Gk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hk(e, t) {
  if (e) {
    if (typeof e == "string") return Ps(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ps(e, t);
  }
}
function Yk(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Xk(e) {
  if (Array.isArray(e)) return Ps(e);
}
function Ps(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Zk = function(t) {
  return t;
}, Xy = {}, Zy = function(t) {
  return t === Xy;
}, Zd = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && Zy(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, Jk = function e(t, r) {
  return t === 1 ? r : Zd(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== Xy;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, Zd(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var l = i.map(function(f) {
        return Zy(f) ? s.shift() : f;
      });
      return r.apply(void 0, Vk(l).concat(s));
    }));
  });
}, Ho = function(t) {
  return Jk(t.length, t);
}, Es = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, Qk = Ho(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), eN = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return Zk;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, a.apply(void 0, arguments));
  };
}, $s = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Jy = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, s) {
      return u === r[s];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function tN(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Oe(e).abs().log(10).toNumber()) + 1, t;
}
function rN(e, t, r) {
  for (var n = new Oe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var nN = Ho(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), iN = Ho(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), aN = Ho(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Yo = {
  rangeStep: rN,
  getDigitCount: tN,
  interpolateNumber: nN,
  uninterpolateNumber: iN,
  uninterpolateTruncation: aN
};
function Ts(e) {
  return sN(e) || uN(e) || Qy(e) || oN();
}
function oN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uN(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function sN(e) {
  if (Array.isArray(e)) return js(e);
}
function Ei(e, t) {
  return fN(e) || lN(e, t) || Qy(e, t) || cN();
}
function cN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qy(e, t) {
  if (e) {
    if (typeof e == "string") return js(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return js(e, t);
  }
}
function js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lN(e, t) {
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
function fN(e) {
  if (Array.isArray(e)) return e;
}
function em(e) {
  var t = Ei(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function tm(e, t, r) {
  if (e.lte(0))
    return new Oe(0);
  var n = Yo.getDigitCount(e.toNumber()), i = new Oe(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new Oe(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? s : new Oe(Math.ceil(s));
}
function dN(e, t, r) {
  var n = 1, i = new Oe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Oe(10).pow(Yo.getDigitCount(e) - 1), i = new Oe(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Oe(Math.floor(e)));
  } else e === 0 ? i = new Oe(Math.floor((t - 1) / 2)) : r || (i = new Oe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = eN(Qk(function(s) {
    return i.add(new Oe(s - o).mul(n)).toNumber();
  }), Es);
  return u(0, t);
}
function rm(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Oe(0),
      tickMin: new Oe(0),
      tickMax: new Oe(0)
    };
  var a = tm(new Oe(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new Oe(0) : (o = new Oe(e).add(t).div(2), o = o.sub(new Oe(o).mod(a)));
  var u = Math.ceil(o.sub(e).div(a).toNumber()), s = Math.ceil(new Oe(t).sub(o).div(a).toNumber()), c = u + s + 1;
  return c > r ? rm(e, t, r, n, i + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, u = t > 0 ? u : u + (r - c)), {
    step: a,
    tickMin: o.sub(new Oe(u).mul(a)),
    tickMax: o.add(new Oe(s).mul(a))
  });
}
function hN(e) {
  var t = Ei(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = em([r, n]), s = Ei(u, 2), c = s[0], l = s[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(Ts(Es(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Ts(Es(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? $s(f) : f;
  }
  if (c === l)
    return dN(c, i, a);
  var d = rm(c, l, o, a), h = d.step, y = d.tickMin, v = d.tickMax, p = Yo.rangeStep(y, v.add(new Oe(0.1).mul(h)), h);
  return r > n ? $s(p) : p;
}
function pN(e, t) {
  var r = Ei(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = em([n, i]), u = Ei(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (s === c)
    return [s];
  var l = Math.max(t, 2), f = tm(new Oe(c).sub(s).div(l - 1), a, 0), d = [].concat(Ts(Yo.rangeStep(new Oe(s), new Oe(c).sub(new Oe(0.99).mul(f)), f)), [c]);
  return n > i ? $s(d) : d;
}
var vN = Jy(hN), yN = Jy(pN), mN = process.env.NODE_ENV === "production", Tu = "Invariant failed";
function ut(e, t) {
  if (mN)
    throw new Error(Tu);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Tu, ": ").concat(r) : Tu;
  throw new Error(n);
}
var gN = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function bN(e, t) {
  return ON(e) || _N(e, t) || wN(e, t) || xN();
}
function xN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wN(e, t) {
  if (e) {
    if (typeof e == "string") return Jd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jd(e, t);
  }
}
function Jd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _N(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function ON(e) {
  if (Array.isArray(e)) return e;
}
function SN(e, t) {
  if (e == null) return {};
  var r = AN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function AN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function PN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, am(n.key), n);
  }
}
function $N(e, t, r) {
  return t && EN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TN(e, t, r) {
  return t = Ya(t), jN(e, nm() ? Reflect.construct(t, r || [], Ya(e).constructor) : t.apply(e, r));
}
function jN(e, t) {
  if (t && (fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CN(e);
}
function CN(e) {
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
function Ya(e) {
  return Ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ya(e);
}
function MN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cs(e, t);
}
function Cs(e, t) {
  return Cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cs(e, t);
}
function im(e, t, r) {
  return t = am(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function am(e) {
  var t = IN(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function IN(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Fn = /* @__PURE__ */ function(e) {
  function t() {
    return PN(this, t), TN(this, t, arguments);
  }
  return MN(t, e), $N(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = SN(n, gN), h = ce(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? ut(!1, 'ErrorBar requires Axis type property to be "number".') : ut());
      var y = s.map(function(v) {
        var p = c(v, u), g = p.x, w = p.y, b = p.value, _ = p.errorVal;
        if (!_)
          return null;
        var m = [], x, O;
        if (Array.isArray(_)) {
          var P = bN(_, 2);
          x = P[0], O = P[1];
        } else
          x = O = _;
        if (a === "vertical") {
          var $ = l.scale, I = w + i, T = I + o, C = I - o, R = $(b - x), N = $(b + O);
          m.push({
            x1: N,
            y1: T,
            x2: N,
            y2: C
          }), m.push({
            x1: R,
            y1: I,
            x2: N,
            y2: I
          }), m.push({
            x1: R,
            y1: T,
            x2: R,
            y2: C
          });
        } else if (a === "horizontal") {
          var k = f.scale, L = g + i, F = L - o, K = L + o, V = k(b - x), M = k(b + O);
          m.push({
            x1: F,
            y1: M,
            x2: K,
            y2: M
          }), m.push({
            x1: L,
            y1: V,
            x2: L,
            y2: M
          }), m.push({
            x1: F,
            y1: V,
            x2: K,
            y2: V
          });
        }
        return /* @__PURE__ */ E.createElement(Ee, Ha({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(B) {
            return "".concat(B.x1, "-").concat(B.x2, "-").concat(B.y1, "-").concat(B.y2);
          }))
        }, h), m.map(function(B) {
          return /* @__PURE__ */ E.createElement("line", Ha({}, B, {
            key: "line-".concat(B.x1, "-").concat(B.x2, "-").concat(B.y1, "-").concat(B.y2)
          }));
        }));
      });
      return /* @__PURE__ */ E.createElement(Ee, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
}(E.Component);
im(Fn, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
im(Fn, "displayName", "ErrorBar");
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Qd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qd(Object(r), !0).forEach(function(n) {
      kN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kN(e, t, r) {
  return t = NN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NN(e) {
  var t = DN(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function DN(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var om = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = ht(r, vt);
  if (!o)
    return null;
  var u = vt.defaultProps, s = u !== void 0 ? xr(xr({}, u), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : a === "children" ? c = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, y = h.sectors || h.data || [];
    return l.concat(y.map(function(v) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : c = (n || []).map(function(l) {
    var f = l.item, d = f.type.defaultProps, h = d !== void 0 ? xr(xr({}, d), f.props) : {}, y = h.dataKey, v = h.name, p = h.legendType, g = h.hide;
    return {
      inactive: g,
      dataKey: y,
      type: s.iconType || p || "square",
      color: dl(f),
      value: v || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), xr(xr(xr({}, s), vt.getWithHeight(o, i)), {}, {
    payload: c,
    item: o
  });
};
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
function eh(e) {
  return FN(e) || BN(e) || LN(e) || RN();
}
function RN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LN(e, t) {
  if (e) {
    if (typeof e == "string") return Ms(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ms(e, t);
  }
}
function BN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FN(e) {
  if (Array.isArray(e)) return Ms(e);
}
function Ms(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function th(e, t) {
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
    t % 2 ? th(Object(r), !0).forEach(function(n) {
      tn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : th(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tn(e, t, r) {
  return t = zN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zN(e) {
  var t = WN(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function WN(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xe(e, t, r) {
  return ue(e) || ue(t) ? r : We(t) ? St(e, t, r) : se(t) ? t(e) : r;
}
function si(e, t, r, n) {
  var i = Bk(e, function(u) {
    return Xe(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return Y(u) || parseFloat(u);
    });
    return a.length ? [Go(a), Vo(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !ue(u);
  }) : i;
  return o.map(function(u) {
    return We(u) || u instanceof Date ? u : "";
  });
}
var UN = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var s = a.range, c = 0; c < u; c++) {
      var l = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate, f = i[c].coordinate, d = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate, h = void 0;
      if (It(f - l) !== It(d - f)) {
        var y = [];
        if (It(d - f) === It(s[1] - s[0])) {
          h = d;
          var v = f + s[1] - s[0];
          y[0] = Math.min(v, (v + l) / 2), y[1] = Math.max(v, (v + l) / 2);
        } else {
          h = l;
          var p = d + s[1] - s[0];
          y[0] = Math.min(f, (p + f) / 2), y[1] = Math.max(f, (p + f) / 2);
        }
        var g = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
        if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
          o = i[c].index;
          break;
        }
      } else {
        var w = Math.min(l, d), b = Math.max(l, d);
        if (t > (w + f) / 2 && t <= (b + f) / 2) {
          o = i[c].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < u; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        o = n[_].index;
        break;
      }
  return o;
}, dl = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Me(Me({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, s;
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
}, KN = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, u = Object.keys(a), s = 0, c = u.length; s < c; s++)
    for (var l = a[u[s]].stackGroups, f = Object.keys(l), d = 0, h = f.length; d < h; d++) {
      var y = l[f[d]], v = y.items, p = y.cateAxisId, g = v.filter(function(O) {
        return Xt(O.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var w = g[0].type.defaultProps, b = w !== void 0 ? Me(Me({}, w), g[0].props) : g[0].props, _ = b.barSize, m = b[p];
        o[m] || (o[m] = []);
        var x = ue(_) ? r : _;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: ue(x) ? void 0 : Ir(x, n, 0)
        });
      }
    }
  return o;
}, qN = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = Ir(r, i, 0, !0), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, h = i / s, y = o.reduce(function(_, m) {
      return _ + m.barSize || 0;
    }, 0);
    y += (s - 1) * c, y >= i && (y -= (s - 1) * c, c = 0), y >= i && h > 0 && (d = !0, h *= 0.9, y = s * h);
    var v = (i - y) / 2 >> 0, p = {
      offset: v - c,
      size: 0
    };
    l = o.reduce(function(_, m) {
      var x = {
        item: m.item,
        position: {
          offset: p.offset + p.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? h : m.barSize
        }
      }, O = [].concat(eh(_), [x]);
      return p = O[O.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
        O.push({
          item: P,
          position: p
        });
      }), O;
    }, f);
  } else {
    var g = Ir(n, i, 0, !0);
    i - 2 * g - (s - 1) * c <= 0 && (c = 0);
    var w = (i - 2 * g - (s - 1) * c) / s;
    w > 1 && (w >>= 0);
    var b = u === +u ? Math.min(w, u) : w;
    l = o.reduce(function(_, m, x) {
      var O = [].concat(eh(_), [{
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
    }, f);
  }
  return l;
}, VN = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = om({
    children: a,
    legendWidth: s
  });
  if (c) {
    var l = i || {}, f = l.width, d = l.height, h = c.align, y = c.verticalAlign, v = c.layout;
    if ((v === "vertical" || v === "horizontal" && y === "middle") && h !== "center" && Y(t[h]))
      return Me(Me({}, t), {}, tn({}, h, t[h] + (f || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && y !== "middle" && Y(t[y]))
      return Me(Me({}, t), {}, tn({}, y, t[y] + (d || 0)));
  }
  return t;
}, GN = function(t, r, n) {
  return ue(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, um = function(t, r, n, i, a) {
  var o = r.props.children, u = st(o, Fn).filter(function(c) {
    return GN(i, a, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Xe(l, n);
      if (ue(f)) return c;
      var d = Array.isArray(f) ? [Go(f), Vo(f)] : [f, f], h = s.reduce(function(y, v) {
        var p = Xe(l, v, 0), g = d[0] - Math.abs(Array.isArray(p) ? p[0] : p), w = d[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(g, y[0]), Math.max(w, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], c[0]), Math.max(h[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, HN = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return um(t, u, n, a, i);
  }).filter(function(u) {
    return !ue(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, sm = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && um(t, s, c, i) || si(t, c, n, a);
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
    for (var l = 0, f = c.length; l < f; l++)
      u[c[l]] || (u[c[l]] = !0, s.push(c[l]));
    return s;
  }, []);
}, cm = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, lm = function(t, r, n, i) {
  if (i)
    return t.map(function(s) {
      return s.coordinate;
    });
  var a, o, u = t.map(function(s) {
    return s.coordinate === r && (a = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Yt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? It(u[0] - u[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var d = a ? a.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(d) + c,
        value: f,
        offset: c
      };
    });
    return l.filter(function(f) {
      return !Yi(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: i(f) + c,
      value: f,
      index: d,
      offset: c
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: i(f) + c,
      value: f,
      offset: c
    };
  }) : i.domain().map(function(f, d) {
    return {
      coordinate: i(f) + c,
      value: a ? a[f] : f,
      index: d,
      offset: c
    };
  });
}, ju = /* @__PURE__ */ new WeakMap(), ha = function(t, r) {
  if (typeof r != "function")
    return t;
  ju.has(t) || ju.set(t, /* @__PURE__ */ new WeakMap());
  var n = ju.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, YN = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: wi(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: Ua(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: ui(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: wi(),
      realScaleType: "band"
    } : {
      scale: Ua(),
      realScaleType: "linear"
    };
  if (Mr(i)) {
    var s = "scale".concat(Mo(i));
    return {
      scale: (Hd[s] || ui)(),
      realScaleType: Hd[s] ? s : "point"
    };
  }
  return se(i) ? {
    scale: i
  } : {
    scale: ui(),
    realScaleType: "point"
  };
}, rh = 1e-4, XN = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - rh, o = Math.max(i[0], i[1]) + rh, u = t(r[0]), s = t(r[n - 1]);
    (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, ZN = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, JN = function(t, r) {
  if (!r || r.length !== 2 || !Y(r[0]) || !Y(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!Y(t[0]) || t[0] < n) && (a[0] = n), (!Y(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, QN = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var s = Yi(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + s, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + s, o = t[u][n][1]);
      }
}, eD = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = Yi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, tD = {
  sign: QN,
  // @ts-expect-error definitelytyped types are incorrect
  expand: yO,
  // @ts-expect-error definitelytyped types are incorrect
  none: rn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: mO,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: gO,
  positive: eD
}, rD = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = tD[n], o = vO().keys(i).value(function(u, s) {
    return +Xe(u, s, 0);
  }).order(ns).offset(a);
  return o(t);
}, nD = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(f, d) {
    var h, y = (h = d.type) !== null && h !== void 0 && h.defaultProps ? Me(Me({}, d.type.defaultProps), d.props) : d.props, v = y.stackId, p = y.hide;
    if (p)
      return f;
    var g = y[n], w = f[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (We(v)) {
      var b = w.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      b.items.push(d), w.hasStack = !0, w.stackGroups[v] = b;
    } else
      w.stackGroups[In("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [d]
      };
    return Me(Me({}, f), {}, tn({}, g, w));
  }, s), l = {};
  return Object.keys(c).reduce(function(f, d) {
    var h = c[d];
    if (h.hasStack) {
      var y = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, p) {
        var g = h.stackGroups[p];
        return Me(Me({}, v), {}, tn({}, p, {
          numericAxisId: n,
          cateAxisId: i,
          items: g.items,
          stackedData: rD(t, g.items, a)
        }));
      }, y);
    }
    return Me(Me({}, f), {}, tn({}, d, h));
  }, l);
}, iD = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = vN(c, a, u);
    return t.domain([Go(l), Vo(l)]), {
      niceTicks: l
    };
  }
  if (a && i === "number") {
    var f = t.domain(), d = yN(f, a, u);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Xa(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ue(i[t.dataKey])) {
      var u = wa(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = Xe(i, ue(o) ? t.dataKey : o);
  return ue(s) ? null : t.scale(s);
}
var nh = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var s = Xe(o, r.dataKey, r.domain[u]);
  return ue(s) ? null : r.scale(s) - a / 2 + i;
}, aD = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, oD = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Me(Me({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (We(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, uD = function(t) {
  return t.reduce(function(r, n) {
    return [Go(n.concat([r[0]]).filter(Y)), Vo(n.concat([r[1]]).filter(Y))];
  }, [1 / 0, -1 / 0]);
}, fm = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, s = u.reduce(function(c, l) {
      var f = uD(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, ih = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ah = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Is = function(t, r, n) {
  if (se(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (Y(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (ih.test(t[0])) {
    var a = +ih.exec(t[0])[1];
    i[0] = r[0] - a;
  } else se(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (Y(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (ah.test(t[1])) {
    var o = +ah.exec(t[1])[1];
    i[1] = r[1] + o;
  } else se(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Za = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Fc(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, u = 1, s = a.length; u < s; u++) {
      var c = a[u], l = a[u - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, oh = function(t, r, n) {
  return !t || !t.length || ra(t, St(n, "type.defaultProps.domain")) ? r : t;
}, dm = function(t, r) {
  var n = t.type.defaultProps ? Me(Me({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, l = n.hide;
  return Me(Me({}, ce(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: dl(t),
    value: Xe(r, i),
    type: s,
    payload: r,
    chartType: c,
    hide: l
  });
};
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function uh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uh(Object(r), !0).forEach(function(n) {
      sD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sD(e, t, r) {
  return t = cD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cD(e) {
  var t = lD(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function lD(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ja = Math.PI / 180, fD = function(t) {
  return t * 180 / Math.PI;
}, Ye = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Ja * i) * n,
    y: r + Math.sin(-Ja * i) * n
  };
}, dD = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, hD = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = dD({
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
    angle: fD(c),
    angleInRadian: c
  };
}, pD = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, vD = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, ch = function(t, r) {
  var n = t.x, i = t.y, a = hD({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = pD(r), f = l.startAngle, d = l.endAngle, h = u, y;
  if (f <= d) {
    for (; h > d; )
      h -= 360;
    for (; h < f; )
      h += 360;
    y = h >= f && h <= d;
  } else {
    for (; h > f; )
      h -= 360;
    for (; h < d; )
      h += 360;
    y = h >= d && h <= f;
  }
  return y ? sh(sh({}, r), {}, {
    radius: o,
    angle: vD(h, r)
  }) : null;
};
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
var yD = ["offset"];
function mD(e) {
  return wD(e) || xD(e) || bD(e) || gD();
}
function gD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bD(e, t) {
  if (e) {
    if (typeof e == "string") return ks(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ks(e, t);
  }
}
function xD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wD(e) {
  if (Array.isArray(e)) return ks(e);
}
function ks(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _D(e, t) {
  if (e == null) return {};
  var r = OD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function OD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lh(Object(r), !0).forEach(function(n) {
      SD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SD(e, t, r) {
  return t = AD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AD(e) {
  var t = PD(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function PD(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mi() {
  return Mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mi.apply(this, arguments);
}
var ED = function(t) {
  var r = t.value, n = t.formatter, i = ue(t.children) ? r : t.children;
  return se(n) ? n(i) : i;
}, $D = function(t, r) {
  var n = It(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, TD = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, s = a, c = s.cx, l = s.cy, f = s.innerRadius, d = s.outerRadius, h = s.startAngle, y = s.endAngle, v = s.clockWise, p = (f + d) / 2, g = $D(h, y), w = g >= 0 ? 1 : -1, b, _;
  i === "insideStart" ? (b = h + w * o, _ = v) : i === "insideEnd" ? (b = y - w * o, _ = !v) : i === "end" && (b = y + w * o, _ = v), _ = g <= 0 ? _ : !_;
  var m = Ye(c, l, p, b), x = Ye(c, l, p, b + (_ ? 1 : -1) * 359), O = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), P = ue(t.id) ? In("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ E.createElement("text", Mi({}, n, {
    dominantBaseline: "central",
    className: he("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("path", {
    id: P,
    d: O
  })), /* @__PURE__ */ E.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, jD = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, s = a.innerRadius, c = a.outerRadius, l = a.startAngle, f = a.endAngle, d = (l + f) / 2;
  if (i === "outside") {
    var h = Ye(o, u, c + n, d), y = h.x, v = h.y;
    return {
      x: y,
      y: v,
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
  var p = (s + c) / 2, g = Ye(o, u, p, d), w = g.x, b = g.y;
  return {
    x: w,
    y: b,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, CD = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, s = o.y, c = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * i, h = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, p = v * i, g = v > 0 ? "end" : "start", w = v > 0 ? "start" : "end";
  if (a === "top") {
    var b = {
      x: u + c / 2,
      y: s - f * i,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return Fe(Fe({}, b), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: u + c / 2,
      y: s + l + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Fe(Fe({}, _), n ? {
      height: Math.max(n.y + n.height - (s + l), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var m = {
      x: u - p,
      y: s + l / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Fe(Fe({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: l
    } : {});
  }
  if (a === "right") {
    var x = {
      x: u + c + p,
      y: s + l / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return Fe(Fe({}, x), n ? {
      width: Math.max(n.x + n.width - x.x, 0),
      height: l
    } : {});
  }
  var O = n ? {
    width: c,
    height: l
  } : {};
  return a === "insideLeft" ? Fe({
    x: u + p,
    y: s + l / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? Fe({
    x: u + c - p,
    y: s + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? Fe({
    x: u + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, O) : a === "insideBottom" ? Fe({
    x: u + c / 2,
    y: s + l - d,
    textAnchor: "middle",
    verticalAnchor: h
  }, O) : a === "insideTopLeft" ? Fe({
    x: u + p,
    y: s + d,
    textAnchor: w,
    verticalAnchor: y
  }, O) : a === "insideTopRight" ? Fe({
    x: u + c - p,
    y: s + d,
    textAnchor: g,
    verticalAnchor: y
  }, O) : a === "insideBottomLeft" ? Fe({
    x: u + p,
    y: s + l - d,
    textAnchor: w,
    verticalAnchor: h
  }, O) : a === "insideBottomRight" ? Fe({
    x: u + c - p,
    y: s + l - d,
    textAnchor: g,
    verticalAnchor: h
  }, O) : Tn(a) && (Y(a.x) || Sr(a.x)) && (Y(a.y) || Sr(a.y)) ? Fe({
    x: u + Ir(a.x, c),
    y: s + Ir(a.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : Fe({
    x: u + c / 2,
    y: s + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, MD = function(t) {
  return "cx" in t && Y(t.cx);
};
function Je(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = _D(e, yD), i = Fe({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, s = i.children, c = i.content, l = i.className, f = l === void 0 ? "" : l, d = i.textBreakAll;
  if (!a || ue(u) && ue(s) && !/* @__PURE__ */ Lt(c) && !se(c))
    return null;
  if (/* @__PURE__ */ Lt(c))
    return /* @__PURE__ */ ze(c, i);
  var h;
  if (se(c)) {
    if (h = /* @__PURE__ */ qp(c, i), /* @__PURE__ */ Lt(h))
      return h;
  } else
    h = ED(i);
  var y = MD(a), v = ce(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return TD(i, h, v);
  var p = y ? jD(i) : CD(i);
  return /* @__PURE__ */ E.createElement(Da, Mi({
    className: he("recharts-label", f)
  }, v, p, {
    breakAll: d
  }), h);
}
Je.displayName = "Label";
var hm = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, s = t.radius, c = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, h = t.top, y = t.left, v = t.width, p = t.height, g = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (Y(v) && Y(p)) {
    if (Y(f) && Y(d))
      return {
        x: f,
        y: d,
        width: v,
        height: p
      };
    if (Y(h) && Y(y))
      return {
        x: h,
        y,
        width: v,
        height: p
      };
  }
  return Y(f) && Y(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : Y(r) && Y(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: c || 0,
    outerRadius: l || s || u || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, ID = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ E.createElement(Je, {
    key: "label-implicit",
    viewBox: r
  }) : We(t) ? /* @__PURE__ */ E.createElement(Je, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Lt(t) ? t.type === Je ? /* @__PURE__ */ ze(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ E.createElement(Je, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : se(t) ? /* @__PURE__ */ E.createElement(Je, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Tn(t) ? /* @__PURE__ */ E.createElement(Je, Mi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, kD = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = hm(t), o = st(i, Je).map(function(s, c) {
    return /* @__PURE__ */ ze(s, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = ID(t.label, r || a);
  return [u].concat(mD(o));
};
Je.parseViewBox = hm;
Je.renderCallByParent = kD;
function ND(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var DD = ND;
const RD = /* @__PURE__ */ $e(DD);
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
var LD = ["valueAccessor"], BD = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function FD(e) {
  return KD(e) || UD(e) || WD(e) || zD();
}
function zD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WD(e, t) {
  if (e) {
    if (typeof e == "string") return Ns(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ns(e, t);
  }
}
function UD(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function KD(e) {
  if (Array.isArray(e)) return Ns(e);
}
function Ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
function fh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fh(Object(r), !0).forEach(function(n) {
      qD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qD(e, t, r) {
  return t = VD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VD(e) {
  var t = GD(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function GD(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hh(e, t) {
  if (e == null) return {};
  var r = HD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var YD = function(t) {
  return Array.isArray(t.value) ? RD(t.value) : t.value;
};
function Qt(e) {
  var t = e.valueAccessor, r = t === void 0 ? YD : t, n = hh(e, LD), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = hh(n, BD);
  return !i || !i.length ? null : /* @__PURE__ */ E.createElement(Ee, {
    className: "recharts-label-list"
  }, i.map(function(l, f) {
    var d = ue(a) ? r(l, f) : Xe(l && l.payload, a), h = ue(u) ? {} : {
      id: "".concat(u, "-").concat(f)
    };
    return /* @__PURE__ */ E.createElement(Je, Qa({}, ce(l, !0), c, h, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: s,
      viewBox: Je.parseViewBox(ue(o) ? l : dh(dh({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Qt.displayName = "LabelList";
function XD(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ E.createElement(Qt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ E.isValidElement(e) || se(e) ? /* @__PURE__ */ E.createElement(Qt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Tn(e) ? /* @__PURE__ */ E.createElement(Qt, Qa({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function ZD(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = st(n, Qt).map(function(o, u) {
    return /* @__PURE__ */ ze(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = XD(e.label, t);
  return [a].concat(FD(i));
}
Qt.renderCallByParent = ZD;
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
function Ds() {
  return Ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ds.apply(this, arguments);
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
function vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ph(Object(r), !0).forEach(function(n) {
      JD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JD(e, t, r) {
  return t = QD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QD(e) {
  var t = e2(e, "string");
  return ki(t) == "symbol" ? t : t + "";
}
function e2(e, t) {
  if (ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var t2 = function(t, r) {
  var n = It(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, pa = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, l = s * (u ? 1 : -1) + i, f = Math.asin(s / l) / Ja, d = c ? a : a + o * f, h = Ye(r, n, l, d), y = Ye(r, n, i, d), v = c ? a - o * f : a, p = Ye(r, n, l * Math.cos(f * Ja), v);
  return {
    center: h,
    circleTangency: y,
    lineTangency: p,
    theta: f
  };
}, pm = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, s = t2(o, u), c = o + s, l = Ye(r, n, a, o), f = Ye(r, n, a, c), d = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var h = Ye(r, n, i, o), y = Ye(r, n, i, c);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, r2 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = It(l - c), d = pa({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: s
  }), h = d.circleTangency, y = d.lineTangency, v = d.theta, p = pa({
    cx: r,
    cy: n,
    radius: a,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: s
  }), g = p.circleTangency, w = p.lineTangency, b = p.theta, _ = s ? Math.abs(c - l) : Math.abs(c - l) - v - b;
  if (_ < 0)
    return u ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : pm({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: l
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (i > 0) {
    var x = pa({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), O = x.circleTangency, P = x.lineTangency, $ = x.theta, I = pa({
      cx: r,
      cy: n,
      radius: i,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), T = I.circleTangency, C = I.lineTangency, R = I.theta, N = s ? Math.abs(c - l) : Math.abs(c - l) - $ - R;
    if (N < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(C.x, ",").concat(C.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(N > 180), ",").concat(+(f > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, n2 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, vm = function(t) {
  var r = vh(vh({}, n2), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < a || l === f)
    return null;
  var h = he("recharts-sector", d), y = o - a, v = Ir(u, y, 0, !0), p;
  return v > 0 && Math.abs(l - f) < 360 ? p = r2({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(v, y / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: l,
    endAngle: f
  }) : p = pm({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ E.createElement("path", Ds({}, ce(r, !0), {
    className: h,
    d: p,
    role: "img"
  }));
};
function Ni(e) {
  "@babel/helpers - typeof";
  return Ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ni(e);
}
function Rs() {
  return Rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rs.apply(this, arguments);
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
function mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yh(Object(r), !0).forEach(function(n) {
      i2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i2(e, t, r) {
  return t = a2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function a2(e) {
  var t = o2(e, "string");
  return Ni(t) == "symbol" ? t : t + "";
}
function o2(e, t) {
  if (Ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gh = {
  curveBasisClosed: iO,
  curveBasisOpen: aO,
  curveBasis: nO,
  curveBumpX: U_,
  curveBumpY: K_,
  curveLinearClosed: oO,
  curveLinear: ko,
  curveMonotoneX: uO,
  curveMonotoneY: sO,
  curveNatural: cO,
  curveStep: lO,
  curveStepAfter: dO,
  curveStepBefore: fO
}, va = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ti = function(t) {
  return t.x;
}, ri = function(t) {
  return t.y;
}, u2 = function(t, r) {
  if (se(t))
    return t;
  var n = "curve".concat(Mo(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? gh["".concat(n).concat(r === "vertical" ? "Y" : "X")] : gh[n] || ko;
}, s2 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, l = u2(n, u), f = c ? a.filter(function(v) {
    return va(v);
  }) : a, d;
  if (Array.isArray(o)) {
    var h = c ? o.filter(function(v) {
      return va(v);
    }) : o, y = f.map(function(v, p) {
      return mh(mh({}, v), {}, {
        base: h[p]
      });
    });
    return u === "vertical" ? d = aa().y(ri).x1(ti).x0(function(v) {
      return v.base.x;
    }) : d = aa().x(ti).y1(ri).y0(function(v) {
      return v.base.y;
    }), d.defined(va).curve(l), d(y);
  }
  return u === "vertical" && Y(o) ? d = aa().y(ri).x1(ti).x0(o) : Y(o) ? d = aa().x(ti).y1(ri).y0(o) : d = yv().x(ti).y(ri), d.defined(va).curve(l), d(f);
}, eo = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? s2(t) : i;
  return /* @__PURE__ */ Ot.createElement("path", Rs({}, ce(t, !1), _a(t), {
    className: he("recharts-curve", r),
    d: o,
    ref: a
  }));
}, Ls = { exports: {} }, ya = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function c2() {
  if (bh) return xe;
  bh = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case s:
            case c:
            case n:
            case a:
            case i:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case u:
                case l:
                case y:
                case h:
                case o:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function _(m) {
    return b(m) === c;
  }
  return xe.AsyncMode = s, xe.ConcurrentMode = c, xe.ContextConsumer = u, xe.ContextProvider = o, xe.Element = t, xe.ForwardRef = l, xe.Fragment = n, xe.Lazy = y, xe.Memo = h, xe.Portal = r, xe.Profiler = a, xe.StrictMode = i, xe.Suspense = f, xe.isAsyncMode = function(m) {
    return _(m) || b(m) === s;
  }, xe.isConcurrentMode = _, xe.isContextConsumer = function(m) {
    return b(m) === u;
  }, xe.isContextProvider = function(m) {
    return b(m) === o;
  }, xe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, xe.isForwardRef = function(m) {
    return b(m) === l;
  }, xe.isFragment = function(m) {
    return b(m) === n;
  }, xe.isLazy = function(m) {
    return b(m) === y;
  }, xe.isMemo = function(m) {
    return b(m) === h;
  }, xe.isPortal = function(m) {
    return b(m) === r;
  }, xe.isProfiler = function(m) {
    return b(m) === a;
  }, xe.isStrictMode = function(m) {
    return b(m) === i;
  }, xe.isSuspense = function(m) {
    return b(m) === f;
  }, xe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === a || m === i || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === h || m.$$typeof === o || m.$$typeof === u || m.$$typeof === l || m.$$typeof === p || m.$$typeof === g || m.$$typeof === w || m.$$typeof === v);
  }, xe.typeOf = b, xe;
}
var we = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xh;
function l2() {
  return xh || (xh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function b(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === c || j === a || j === i || j === f || j === d || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === h || j.$$typeof === o || j.$$typeof === u || j.$$typeof === l || j.$$typeof === p || j.$$typeof === g || j.$$typeof === w || j.$$typeof === v);
    }
    function _(j) {
      if (typeof j == "object" && j !== null) {
        var le = j.$$typeof;
        switch (le) {
          case t:
            var q = j.type;
            switch (q) {
              case s:
              case c:
              case n:
              case a:
              case i:
              case f:
                return q;
              default:
                var ve = q && q.$$typeof;
                switch (ve) {
                  case u:
                  case l:
                  case y:
                  case h:
                  case o:
                    return ve;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = s, x = c, O = u, P = o, $ = t, I = l, T = n, C = y, R = h, N = r, k = a, L = i, F = f, K = !1;
    function V(j) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(j) || _(j) === s;
    }
    function M(j) {
      return _(j) === c;
    }
    function B(j) {
      return _(j) === u;
    }
    function z(j) {
      return _(j) === o;
    }
    function G(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function X(j) {
      return _(j) === l;
    }
    function te(j) {
      return _(j) === n;
    }
    function re(j) {
      return _(j) === y;
    }
    function ie(j) {
      return _(j) === h;
    }
    function ne(j) {
      return _(j) === r;
    }
    function W(j) {
      return _(j) === a;
    }
    function H(j) {
      return _(j) === i;
    }
    function ee(j) {
      return _(j) === f;
    }
    we.AsyncMode = m, we.ConcurrentMode = x, we.ContextConsumer = O, we.ContextProvider = P, we.Element = $, we.ForwardRef = I, we.Fragment = T, we.Lazy = C, we.Memo = R, we.Portal = N, we.Profiler = k, we.StrictMode = L, we.Suspense = F, we.isAsyncMode = V, we.isConcurrentMode = M, we.isContextConsumer = B, we.isContextProvider = z, we.isElement = G, we.isForwardRef = X, we.isFragment = te, we.isLazy = re, we.isMemo = ie, we.isPortal = ne, we.isProfiler = W, we.isStrictMode = H, we.isSuspense = ee, we.isValidElementType = b, we.typeOf = _;
  }()), we;
}
var wh;
function ym() {
  return wh || (wh = 1, process.env.NODE_ENV === "production" ? ya.exports = c2() : ya.exports = l2()), ya.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Cu, _h;
function f2() {
  if (_h) return Cu;
  _h = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, u = 0; u < 10; u++)
        o["_" + String.fromCharCode(u)] = u;
      var s = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Cu = i() ? Object.assign : function(a, o) {
    for (var u, s = n(a), c, l = 1; l < arguments.length; l++) {
      u = Object(arguments[l]);
      for (var f in u)
        t.call(u, f) && (s[f] = u[f]);
      if (e) {
        c = e(u);
        for (var d = 0; d < c.length; d++)
          r.call(u, c[d]) && (s[c[d]] = u[c[d]]);
      }
    }
    return s;
  }, Cu;
}
var Mu, Oh;
function hl() {
  if (Oh) return Mu;
  Oh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mu = e, Mu;
}
var Iu, Sh;
function mm() {
  return Sh || (Sh = 1, Iu = Function.call.bind(Object.prototype.hasOwnProperty)), Iu;
}
var ku, Ah;
function d2() {
  if (Ah) return ku;
  Ah = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = hl(), r = {}, n = mm();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, u, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var f;
          try {
            if (typeof a[l] != "function") {
              var d = Error(
                (s || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[l](o, l, s, u, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (s || "React class") + ": type specification of " + u + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = c ? c() : "";
            e(
              "Failed " + u + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ku = i, ku;
}
var Nu, Ph;
function h2() {
  if (Ph) return Nu;
  Ph = 1;
  var e = ym(), t = f2(), r = hl(), n = mm(), i = d2(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var s = "Warning: " + u;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Nu = function(u, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(M) {
      var B = M && (c && M[c] || M[l]);
      if (typeof B == "function")
        return B;
    }
    var d = "<<anonymous>>", h = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: w(),
      arrayOf: b,
      element: _(),
      elementType: m(),
      instanceOf: x,
      node: I(),
      objectOf: P,
      oneOf: O,
      oneOfType: $,
      shape: C,
      exact: R
    };
    function y(M, B) {
      return M === B ? M !== 0 || 1 / M === 1 / B : M !== M && B !== B;
    }
    function v(M, B) {
      this.message = M, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function p(M) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, z = 0;
      function G(te, re, ie, ne, W, H, ee) {
        if (ne = ne || d, H = H || ie, ee !== r) {
          if (s) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = ne + ":" + ie;
            !B[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + ne + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[le] = !0, z++);
          }
        }
        return re[ie] == null ? te ? re[ie] === null ? new v("The " + W + " `" + H + "` is marked as required " + ("in `" + ne + "`, but its value is `null`.")) : new v("The " + W + " `" + H + "` is marked as required in " + ("`" + ne + "`, but its value is `undefined`.")) : null : M(re, ie, ne, W, H);
      }
      var X = G.bind(null, !1);
      return X.isRequired = G.bind(null, !0), X;
    }
    function g(M) {
      function B(z, G, X, te, re, ie) {
        var ne = z[G], W = L(ne);
        if (W !== M) {
          var H = F(ne);
          return new v(
            "Invalid " + te + " `" + re + "` of type " + ("`" + H + "` supplied to `" + X + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return p(B);
    }
    function w() {
      return p(o);
    }
    function b(M) {
      function B(z, G, X, te, re) {
        if (typeof M != "function")
          return new v("Property `" + re + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var ie = z[G];
        if (!Array.isArray(ie)) {
          var ne = L(ie);
          return new v("Invalid " + te + " `" + re + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected an array."));
        }
        for (var W = 0; W < ie.length; W++) {
          var H = M(ie, W, X, te, re + "[" + W + "]", r);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return p(B);
    }
    function _() {
      function M(B, z, G, X, te) {
        var re = B[z];
        if (!u(re)) {
          var ie = L(re);
          return new v("Invalid " + X + " `" + te + "` of type " + ("`" + ie + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(M);
    }
    function m() {
      function M(B, z, G, X, te) {
        var re = B[z];
        if (!e.isValidElementType(re)) {
          var ie = L(re);
          return new v("Invalid " + X + " `" + te + "` of type " + ("`" + ie + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(M);
    }
    function x(M) {
      function B(z, G, X, te, re) {
        if (!(z[G] instanceof M)) {
          var ie = M.name || d, ne = V(z[G]);
          return new v("Invalid " + te + " `" + re + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected ") + ("instance of `" + ie + "`."));
        }
        return null;
      }
      return p(B);
    }
    function O(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function B(z, G, X, te, re) {
        for (var ie = z[G], ne = 0; ne < M.length; ne++)
          if (y(ie, M[ne]))
            return null;
        var W = JSON.stringify(M, function(ee, j) {
          var le = F(j);
          return le === "symbol" ? String(j) : j;
        });
        return new v("Invalid " + te + " `" + re + "` of value `" + String(ie) + "` " + ("supplied to `" + X + "`, expected one of " + W + "."));
      }
      return p(B);
    }
    function P(M) {
      function B(z, G, X, te, re) {
        if (typeof M != "function")
          return new v("Property `" + re + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var ie = z[G], ne = L(ie);
        if (ne !== "object")
          return new v("Invalid " + te + " `" + re + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected an object."));
        for (var W in ie)
          if (n(ie, W)) {
            var H = M(ie, W, X, te, re + "." + W, r);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return p(B);
    }
    function $(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var B = 0; B < M.length; B++) {
        var z = M[B];
        if (typeof z != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(z) + " at index " + B + "."
          ), o;
      }
      function G(X, te, re, ie, ne) {
        for (var W = [], H = 0; H < M.length; H++) {
          var ee = M[H], j = ee(X, te, re, ie, ne, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && W.push(j.data.expectedType);
        }
        var le = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new v("Invalid " + ie + " `" + ne + "` supplied to " + ("`" + re + "`" + le + "."));
      }
      return p(G);
    }
    function I() {
      function M(B, z, G, X, te) {
        return N(B[z]) ? null : new v("Invalid " + X + " `" + te + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return p(M);
    }
    function T(M, B, z, G, X) {
      return new v(
        (M || "React class") + ": " + B + " type `" + z + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function C(M) {
      function B(z, G, X, te, re) {
        var ie = z[G], ne = L(ie);
        if (ne !== "object")
          return new v("Invalid " + te + " `" + re + "` of type `" + ne + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var W in M) {
          var H = M[W];
          if (typeof H != "function")
            return T(X, te, re, W, F(H));
          var ee = H(ie, W, X, te, re + "." + W, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return p(B);
    }
    function R(M) {
      function B(z, G, X, te, re) {
        var ie = z[G], ne = L(ie);
        if (ne !== "object")
          return new v("Invalid " + te + " `" + re + "` of type `" + ne + "` " + ("supplied to `" + X + "`, expected `object`."));
        var W = t({}, z[G], M);
        for (var H in W) {
          var ee = M[H];
          if (n(M, H) && typeof ee != "function")
            return T(X, te, re, H, F(ee));
          if (!ee)
            return new v(
              "Invalid " + te + " `" + re + "` key `" + H + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(z[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var j = ee(ie, H, X, te, re + "." + H, r);
          if (j)
            return j;
        }
        return null;
      }
      return p(B);
    }
    function N(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(N);
          if (M === null || u(M))
            return !0;
          var B = f(M);
          if (B) {
            var z = B.call(M), G;
            if (B !== M.entries) {
              for (; !(G = z.next()).done; )
                if (!N(G.value))
                  return !1;
            } else
              for (; !(G = z.next()).done; ) {
                var X = G.value;
                if (X && !N(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(M, B) {
      return M === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function L(M) {
      var B = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : k(B, M) ? "symbol" : B;
    }
    function F(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var B = L(M);
      if (B === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function K(M) {
      var B = F(M);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function V(M) {
      return !M.constructor || !M.constructor.name ? d : M.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Nu;
}
var Du, Eh;
function p2() {
  if (Eh) return Du;
  Eh = 1;
  var e = hl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Du = function() {
    function n(o, u, s, c, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Du;
}
if (process.env.NODE_ENV !== "production") {
  var v2 = ym(), y2 = !0;
  Ls.exports = h2()(v2.isElement, y2);
} else
  Ls.exports = p2()();
var m2 = Ls.exports;
const _e = /* @__PURE__ */ $e(m2);
var g2 = Object.getOwnPropertyNames, b2 = Object.getOwnPropertySymbols, x2 = Object.prototype.hasOwnProperty;
function $h(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function ma(e) {
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
function w2(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function Th(e) {
  return g2(e).concat(b2(e));
}
var _2 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || function(e, t) {
    return x2.call(e, t);
  }
);
function zr(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var O2 = "__v", S2 = "__o", A2 = "_owner", jh = Object.getOwnPropertyDescriptor, Ch = Object.keys;
function P2(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function E2(e, t) {
  return zr(e.getTime(), t.getTime());
}
function $2(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function T2(e, t) {
  return e === t;
}
function Mh(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, u, s = 0; (o = a.next()) && !o.done; ) {
    for (var c = t.entries(), l = !1, f = 0; (u = c.next()) && !u.done; ) {
      if (i[f]) {
        f++;
        continue;
      }
      var d = o.value, h = u.value;
      if (r.equals(d[0], h[0], s, f, e, t, r) && r.equals(d[1], h[1], d[0], h[0], e, t, r)) {
        l = i[f] = !0;
        break;
      }
      f++;
    }
    if (!l)
      return !1;
    s++;
  }
  return !0;
}
var j2 = zr;
function C2(e, t, r) {
  var n = Ch(e), i = n.length;
  if (Ch(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!gm(e, t, r, n[i]))
      return !1;
  return !0;
}
function ni(e, t, r) {
  var n = Th(e), i = n.length;
  if (Th(t).length !== i)
    return !1;
  for (var a, o, u; i-- > 0; )
    if (a = n[i], !gm(e, t, r, a) || (o = jh(e, a), u = jh(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function M2(e, t) {
  return zr(e.valueOf(), t.valueOf());
}
function I2(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Ih(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, u; (o = a.next()) && !o.done; ) {
    for (var s = t.values(), c = !1, l = 0; (u = s.next()) && !u.done; ) {
      if (!i[l] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = i[l] = !0;
        break;
      }
      l++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function k2(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function N2(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function gm(e, t, r, n) {
  return (n === A2 || n === S2 || n === O2) && (e.$$typeof || t.$$typeof) ? !0 : _2(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var D2 = "[object Arguments]", R2 = "[object Boolean]", L2 = "[object Date]", B2 = "[object Error]", F2 = "[object Map]", z2 = "[object Number]", W2 = "[object Object]", U2 = "[object RegExp]", K2 = "[object Set]", q2 = "[object String]", V2 = "[object URL]", G2 = Array.isArray, kh = typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView : null, Nh = Object.assign, H2 = Object.prototype.toString.call.bind(Object.prototype.toString);
function Y2(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, u = e.areObjectsEqual, s = e.arePrimitiveWrappersEqual, c = e.areRegExpsEqual, l = e.areSetsEqual, f = e.areTypedArraysEqual, d = e.areUrlsEqual, h = e.unknownTagComparators;
  return function(v, p, g) {
    if (v === p)
      return !0;
    if (v == null || p == null)
      return !1;
    var w = typeof v;
    if (w !== typeof p)
      return !1;
    if (w !== "object")
      return w === "number" ? o(v, p, g) : w === "function" ? i(v, p, g) : !1;
    var b = v.constructor;
    if (b !== p.constructor)
      return !1;
    if (b === Object)
      return u(v, p, g);
    if (G2(v))
      return t(v, p, g);
    if (kh != null && kh(v))
      return f(v, p, g);
    if (b === Date)
      return r(v, p, g);
    if (b === RegExp)
      return c(v, p, g);
    if (b === Map)
      return a(v, p, g);
    if (b === Set)
      return l(v, p, g);
    var _ = H2(v);
    if (_ === L2)
      return r(v, p, g);
    if (_ === U2)
      return c(v, p, g);
    if (_ === F2)
      return a(v, p, g);
    if (_ === K2)
      return l(v, p, g);
    if (_ === W2)
      return typeof v.then != "function" && typeof p.then != "function" && u(v, p, g);
    if (_ === V2)
      return d(v, p, g);
    if (_ === B2)
      return n(v, p, g);
    if (_ === D2)
      return u(v, p, g);
    if (_ === R2 || _ === z2 || _ === q2)
      return s(v, p, g);
    if (h) {
      var m = h[_];
      if (!m) {
        var x = w2(v);
        x && (m = h[x]);
      }
      if (m)
        return m(v, p, g);
    }
    return !1;
  };
}
function X2(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? ni : P2,
    areDatesEqual: E2,
    areErrorsEqual: $2,
    areFunctionsEqual: T2,
    areMapsEqual: n ? $h(Mh, ni) : Mh,
    areNumbersEqual: j2,
    areObjectsEqual: n ? ni : C2,
    arePrimitiveWrappersEqual: M2,
    areRegExpsEqual: I2,
    areSetsEqual: n ? $h(Ih, ni) : Ih,
    areTypedArraysEqual: n ? ni : k2,
    areUrlsEqual: N2,
    unknownTagComparators: void 0
  };
  if (r && (i = Nh({}, i, r(i))), t) {
    var a = ma(i.areArraysEqual), o = ma(i.areMapsEqual), u = ma(i.areObjectsEqual), s = ma(i.areSetsEqual);
    i = Nh({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: s
    });
  }
  return i;
}
function Z2(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function J2(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(s, c) {
      var l = n(), f = l.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, h = l.meta;
      return r(s, c, {
        cache: d,
        equals: i,
        meta: h,
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
var Q2 = gr();
gr({ strict: !0 });
gr({ circular: !0 });
gr({
  circular: !0,
  strict: !0
});
gr({
  createInternalComparator: function() {
    return zr;
  }
});
gr({
  strict: !0,
  createInternalComparator: function() {
    return zr;
  }
});
gr({
  circular: !0,
  createInternalComparator: function() {
    return zr;
  }
});
gr({
  circular: !0,
  createInternalComparator: function() {
    return zr;
  },
  strict: !0
});
function gr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, u = X2(e), s = Y2(u), c = n ? n(s) : Z2(s);
  return J2({ circular: r, comparator: s, createState: i, equals: c, strict: o });
}
function eR(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Dh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : eR(i);
  };
  requestAnimationFrame(n);
}
function Bs(e) {
  "@babel/helpers - typeof";
  return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bs(e);
}
function tR(e) {
  return aR(e) || iR(e) || nR(e) || rR();
}
function rR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nR(e, t) {
  if (e) {
    if (typeof e == "string") return Rh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rh(e, t);
  }
}
function Rh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function aR(e) {
  if (Array.isArray(e)) return e;
}
function oR() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = tR(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          Dh(i.bind(null, c), s);
          return;
        }
        i(s), Dh(i.bind(null, c));
        return;
      }
      Bs(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
function Di(e) {
  "@babel/helpers - typeof";
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
function Lh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lh(Object(r), !0).forEach(function(n) {
      bm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bm(e, t, r) {
  return t = uR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uR(e) {
  var t = sR(e, "string");
  return Di(t) === "symbol" ? t : String(t);
}
function sR(e, t) {
  if (Di(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Di(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cR = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, lR = function(t) {
  return t;
}, fR = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, ci = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Bh(Bh({}, n), {}, bm({}, i, t(i, r[i])));
  }, {});
}, Fh = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(fR(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, dR = process.env.NODE_ENV !== "production", to = function(t, r, n, i, a, o, u, s) {
  if (dR && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, i, a, o, u, s], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function hR(e, t) {
  return yR(e) || vR(e, t) || xm(e, t) || pR();
}
function pR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function yR(e) {
  if (Array.isArray(e)) return e;
}
function mR(e) {
  return xR(e) || bR(e) || xm(e) || gR();
}
function gR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xm(e, t) {
  if (e) {
    if (typeof e == "string") return Fs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fs(e, t);
  }
}
function bR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xR(e) {
  if (Array.isArray(e)) return Fs(e);
}
function Fs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ro = 1e-4, wm = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, _m = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, zh = function(t, r) {
  return function(n) {
    var i = wm(t, r);
    return _m(i, n);
  };
}, wR = function(t, r) {
  return function(n) {
    var i = wm(t, r), a = [].concat(mR(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return _m(a, n);
  };
}, Wh = function() {
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
          var c = s[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), l = hR(c, 4);
          i = l[0], a = l[1], o = l[2], u = l[3];
        } else
          to(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  to([i, o, a, u].every(function(p) {
    return typeof p == "number" && p >= 0 && p <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = zh(i, o), d = zh(a, u), h = wR(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, v = function(g) {
    for (var w = g > 1 ? 1 : g, b = w, _ = 0; _ < 8; ++_) {
      var m = f(b) - w, x = h(b);
      if (Math.abs(m - w) < ro || x < ro)
        return d(b);
      b = y(b - m / x);
    }
    return d(b);
  };
  return v.isStepper = !1, v;
}, _R = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, s = function(l, f, d) {
    var h = -(l - f) * n, y = d * a, v = d + (h - y) * u / 1e3, p = d * u / 1e3 + l;
    return Math.abs(p - f) < ro && Math.abs(v) < ro ? [f, 0] : [p, v];
  };
  return s.isStepper = !0, s.dt = u, s;
}, OR = function() {
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
        return Wh(i);
      case "spring":
        return _R();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Wh(i);
        to(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (to(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function Uh(e) {
  return PR(e) || AR(e) || Om(e) || SR();
}
function SR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function PR(e) {
  if (Array.isArray(e)) return Ws(e);
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
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kh(Object(r), !0).forEach(function(n) {
      zs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zs(e, t, r) {
  return t = ER(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ER(e) {
  var t = $R(e, "string");
  return Ri(t) === "symbol" ? t : String(t);
}
function $R(e, t) {
  if (Ri(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ri(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TR(e, t) {
  return MR(e) || CR(e, t) || Om(e, t) || jR();
}
function jR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Om(e, t) {
  if (e) {
    if (typeof e == "string") return Ws(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ws(e, t);
  }
}
function Ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function MR(e) {
  if (Array.isArray(e)) return e;
}
var no = function(t, r, n) {
  return t + (r - t) * n;
}, Us = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, IR = function e(t, r, n) {
  var i = ci(function(a, o) {
    if (Us(o)) {
      var u = t(o.from, o.to, o.velocity), s = TR(u, 2), c = s[0], l = s[1];
      return He(He({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? ci(function(a, o) {
    return Us(o) ? He(He({}, o), {}, {
      velocity: no(o.velocity, i[a].velocity, n),
      from: no(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const kR = function(e, t, r, n, i) {
  var a = cR(e, t), o = a.reduce(function(p, g) {
    return He(He({}, p), {}, zs({}, g, [e[g], t[g]]));
  }, {}), u = a.reduce(function(p, g) {
    return He(He({}, p), {}, zs({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), s = -1, c, l, f = function() {
    return null;
  }, d = function() {
    return ci(function(g, w) {
      return w.from;
    }, u);
  }, h = function() {
    return !Object.values(u).filter(Us).length;
  }, y = function(g) {
    c || (c = g);
    var w = g - c, b = w / r.dt;
    u = IR(r, u, b), i(He(He(He({}, e), t), d())), c = g, h() || (s = requestAnimationFrame(f));
  }, v = function(g) {
    l || (l = g);
    var w = (g - l) / n, b = ci(function(m, x) {
      return no.apply(void 0, Uh(x).concat([r(w)]));
    }, o);
    if (i(He(He(He({}, e), t), b)), w < 1)
      s = requestAnimationFrame(f);
    else {
      var _ = ci(function(m, x) {
        return no.apply(void 0, Uh(x).concat([r(1)]));
      }, o);
      i(He(He(He({}, e), t), _));
    }
  };
  return f = r.isStepper ? y : v, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(s);
    };
  };
};
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
var NR = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function DR(e, t) {
  if (e == null) return {};
  var r = RR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RR(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ru(e) {
  return zR(e) || FR(e) || BR(e) || LR();
}
function LR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BR(e, t) {
  if (e) {
    if (typeof e == "string") return Ks(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ks(e, t);
  }
}
function FR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zR(e) {
  if (Array.isArray(e)) return Ks(e);
}
function Ks(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qh(Object(r), !0).forEach(function(n) {
      ai(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ai(e, t, r) {
  return t = Sm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sm(n.key), n);
  }
}
function KR(e, t, r) {
  return t && UR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Sm(e) {
  var t = qR(e, "string");
  return dn(t) === "symbol" ? t : String(t);
}
function qR(e, t) {
  if (dn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qs(e, t);
}
function qs(e, t) {
  return qs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qs(e, t);
}
function GR(e) {
  var t = HR();
  return function() {
    var n = io(e), i;
    if (t) {
      var a = io(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Vs(this, i);
  };
}
function Vs(e, t) {
  if (t && (dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gs(e);
}
function Gs(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HR() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function io(e) {
  return io = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, io(e);
}
var Wt = /* @__PURE__ */ function(e) {
  VR(r, e);
  var t = GR(r);
  function r(n, i) {
    var a;
    WR(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, s = o.attributeName, c = o.from, l = o.to, f = o.steps, d = o.children, h = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Gs(a)), a.changeStyle = a.changeStyle.bind(Gs(a)), !u || h <= 0)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: l
      }), Vs(a);
    if (f && f.length)
      a.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return a.state = {
          style: c
        }, Vs(a);
      a.state = {
        style: s ? ai({}, s, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return KR(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, s = a.attributeName, c = a.shouldReAnimate, l = a.to, f = a.from, d = this.state.style;
      if (u) {
        if (!o) {
          var h = {
            style: s ? ai({}, s, l) : l
          };
          this.state && d && (s && d[s] !== l || !s && d !== l) && this.setState(h);
          return;
        }
        if (!(Q2(i.to, l) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = y || c ? f : i.to;
          if (this.state && d) {
            var p = {
              style: s ? ai({}, s, v) : v
            };
            (s && d[s] !== v || !s && d !== v) && this.setState(p);
          }
          this.runAnimation(Tt(Tt({}, this.props), {}, {
            from: v,
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
      var a = this, o = i.from, u = i.to, s = i.duration, c = i.easing, l = i.begin, f = i.onAnimationEnd, d = i.onAnimationStart, h = kR(o, u, OR(c), s, this.changeStyle), y = function() {
        a.stopJSAnimation = h();
      };
      this.manager.start([d, l, y, s, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, s = i.onAnimationStart, c = o[0], l = c.style, f = c.duration, d = f === void 0 ? 0 : f, h = function(v, p, g) {
        if (g === 0)
          return v;
        var w = p.duration, b = p.easing, _ = b === void 0 ? "ease" : b, m = p.style, x = p.properties, O = p.onAnimationEnd, P = g > 0 ? o[g - 1] : p, $ = x || Object.keys(m);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(Ru(v), [a.runJSAnimation.bind(a, {
            from: P.style,
            to: m,
            duration: w,
            easing: _
          }), w]);
        var I = Fh($, w, _), T = Tt(Tt(Tt({}, P.style), m), {}, {
          transition: I
        });
        return [].concat(Ru(v), [T, w, O]).filter(lR);
      };
      return this.manager.start([s].concat(Ru(o.reduce(h, [l, Math.max(d, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = oR());
      var a = i.begin, o = i.duration, u = i.attributeName, s = i.to, c = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, d = i.steps, h = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof h == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var v = u ? ai({}, u, s) : s, p = Fh(Object.keys(v), o, c);
      y.start([l, a, Tt(Tt({}, v), {}, {
        transition: p
      }), o, f]);
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
      var s = DR(i, NR), c = $r.count(a), l = this.state.style;
      if (typeof a == "function")
        return a(l);
      if (!u || c === 0 || o <= 0)
        return a;
      var f = function(h) {
        var y = h.props, v = y.style, p = v === void 0 ? {} : v, g = y.className, w = /* @__PURE__ */ ze(h, Tt(Tt({}, s), {}, {
          style: Tt(Tt({}, p), l),
          className: g
        }));
        return w;
      };
      return c === 1 ? f($r.only(a)) : /* @__PURE__ */ E.createElement("div", null, $r.map(a, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(nr);
Wt.displayName = "Animate";
Wt.defaultProps = {
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
Wt.propTypes = {
  from: _e.oneOfType([_e.object, _e.string]),
  to: _e.oneOfType([_e.object, _e.string]),
  attributeName: _e.string,
  // animation duration
  duration: _e.number,
  begin: _e.number,
  easing: _e.oneOfType([_e.string, _e.func]),
  steps: _e.arrayOf(_e.shape({
    duration: _e.number.isRequired,
    style: _e.object.isRequired,
    easing: _e.oneOfType([_e.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), _e.func]),
    // transition css properties(dash case), optional
    properties: _e.arrayOf("string"),
    onAnimationEnd: _e.func
  })),
  children: _e.oneOfType([_e.node, _e.func]),
  isActive: _e.bool,
  canBegin: _e.bool,
  onAnimationEnd: _e.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: _e.bool,
  onAnimationStart: _e.func,
  onAnimationReStart: _e.func
};
function Li(e) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e);
}
function ao() {
  return ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ao.apply(this, arguments);
}
function YR(e, t) {
  return QR(e) || JR(e, t) || ZR(e, t) || XR();
}
function XR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZR(e, t) {
  if (e) {
    if (typeof e == "string") return Vh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vh(e, t);
  }
}
function Vh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function QR(e) {
  if (Array.isArray(e)) return e;
}
function Gh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gh(Object(r), !0).forEach(function(n) {
      eL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eL(e, t, r) {
  return t = tL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tL(e) {
  var t = rL(e, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function rL(e, t) {
  if (Li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yh = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && a instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
      f[d] = a[d] > o ? o : a[d];
    l = "M".concat(t, ",").concat(r + u * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(c, ",").concat(t + s * f[0], ",").concat(r)), l += "L ".concat(t + n - s * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + u * f[1])), l += "L ".concat(t + n, ",").concat(r + i - u * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * f[2], ",").concat(r + i)), l += "L ".concat(t + s * f[3], ",").concat(r + i), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - u * f[3])), l += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    l = "M ".concat(t, ",").concat(r + u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + s * y, ",").concat(r, `
            L `).concat(t + n - s * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + u * y, `
            L `).concat(t + n, ",").concat(r + i - u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n - s * y, ",").concat(r + i, `
            L `).concat(t + s * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - u * y, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return l;
}, nL = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(a, a + u), l = Math.max(a, a + u), f = Math.min(o, o + s), d = Math.max(o, o + s);
    return n >= c && n <= l && i >= f && i <= d;
  }
  return !1;
}, iL = {
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
}, pl = function(t) {
  var r = Hh(Hh({}, iL), t), n = xa(), i = cr(-1), a = YR(i, 2), o = a[0], u = a[1];
  Po(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && u(_);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, l = r.width, f = r.height, d = r.radius, h = r.className, y = r.animationEasing, v = r.animationDuration, p = r.animationBegin, g = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || l !== +l || f !== +f || l === 0 || f === 0)
    return null;
  var b = he("recharts-rectangle", h);
  return w ? /* @__PURE__ */ E.createElement(Wt, {
    canBegin: o > 0,
    from: {
      width: l,
      height: f,
      x: s,
      y: c
    },
    to: {
      width: l,
      height: f,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: y,
    isActive: w
  }, function(_) {
    var m = _.width, x = _.height, O = _.x, P = _.y;
    return /* @__PURE__ */ E.createElement(Wt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      isActive: g,
      easing: y
    }, /* @__PURE__ */ E.createElement("path", ao({}, ce(r, !0), {
      className: b,
      d: Yh(O, P, m, x, d),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("path", ao({}, ce(r, !0), {
    className: b,
    d: Yh(s, c, l, f, d)
  }));
};
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hs.apply(this, arguments);
}
var vl = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = he("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ Ot.createElement("circle", Hs({}, ce(t, !1), _a(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
var aL = ["x", "y", "top", "left", "width", "height", "className"];
function Ys() {
  return Ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ys.apply(this, arguments);
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
function oL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      uL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uL(e, t, r) {
  return t = sL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sL(e) {
  var t = cL(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function cL(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lL(e, t) {
  if (e == null) return {};
  var r = fL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function fL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var dL = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, hL = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, l = t.width, f = l === void 0 ? 0 : l, d = t.height, h = d === void 0 ? 0 : d, y = t.className, v = lL(t, aL), p = oL({
    x: n,
    y: a,
    top: u,
    left: c,
    width: f,
    height: h
  }, v);
  return !Y(n) || !Y(a) || !Y(f) || !Y(h) || !Y(u) || !Y(c) ? null : /* @__PURE__ */ E.createElement("path", Ys({}, ce(p, !0), {
    className: he("recharts-cross", y),
    d: dL(n, a, f, h, u, c)
  }));
}, pL = Fv, vL = pL(Object.getPrototypeOf, Object), yL = vL, mL = ar, gL = yL, bL = or, xL = "[object Object]", wL = Function.prototype, _L = Object.prototype, Am = wL.toString, OL = _L.hasOwnProperty, SL = Am.call(Object);
function AL(e) {
  if (!bL(e) || mL(e) != xL)
    return !1;
  var t = gL(e);
  if (t === null)
    return !0;
  var r = OL.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Am.call(r) == SL;
}
var PL = AL;
const EL = /* @__PURE__ */ $e(PL);
var $L = ar, TL = or, jL = "[object Boolean]";
function CL(e) {
  return e === !0 || e === !1 || TL(e) && $L(e) == jL;
}
var ML = CL;
const IL = /* @__PURE__ */ $e(ML);
function Fi(e) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e);
}
function oo() {
  return oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oo.apply(this, arguments);
}
function kL(e, t) {
  return LL(e) || RL(e, t) || DL(e, t) || NL();
}
function NL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DL(e, t) {
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
function RL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function LL(e) {
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
      BL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BL(e, t, r) {
  return t = FL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FL(e) {
  var t = zL(e, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function zL(e, t) {
  if (Fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ep = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, WL = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, UL = function(t) {
  var r = Qh(Qh({}, WL), t), n = xa(), i = cr(-1), a = kL(i, 2), o = a[0], u = a[1];
  Po(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var b = n.current.getTotalLength();
        b && u(b);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, l = r.upperWidth, f = r.lowerWidth, d = r.height, h = r.className, y = r.animationEasing, v = r.animationDuration, p = r.animationBegin, g = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || l !== +l || f !== +f || d !== +d || l === 0 && f === 0 || d === 0)
    return null;
  var w = he("recharts-trapezoid", h);
  return g ? /* @__PURE__ */ E.createElement(Wt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: s,
      y: c
    },
    to: {
      upperWidth: l,
      lowerWidth: f,
      height: d,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: y,
    isActive: g
  }, function(b) {
    var _ = b.upperWidth, m = b.lowerWidth, x = b.height, O = b.x, P = b.y;
    return /* @__PURE__ */ E.createElement(Wt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      easing: y
    }, /* @__PURE__ */ E.createElement("path", oo({}, ce(r, !0), {
      className: w,
      d: ep(O, P, _, m, x),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", oo({}, ce(r, !0), {
    className: w,
    d: ep(s, c, l, f, d)
  })));
}, KL = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function zi(e) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e);
}
function qL(e, t) {
  if (e == null) return {};
  var r = VL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tp(Object(r), !0).forEach(function(n) {
      GL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GL(e, t, r) {
  return t = HL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HL(e) {
  var t = YL(e, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function YL(e, t) {
  if (zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XL(e, t) {
  return uo(uo({}, t), e);
}
function ZL(e, t) {
  return e === "symbols";
}
function rp(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ E.createElement(pl, r);
    case "trapezoid":
      return /* @__PURE__ */ E.createElement(UL, r);
    case "sector":
      return /* @__PURE__ */ E.createElement(vm, r);
    case "symbols":
      if (ZL(t))
        return /* @__PURE__ */ E.createElement(Do, r);
      break;
    default:
      return null;
  }
}
function JL(e) {
  return /* @__PURE__ */ Lt(e) ? e.props : e;
}
function Xs(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? XL : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, s = qL(e, KL), c;
  if (/* @__PURE__ */ Lt(t))
    c = /* @__PURE__ */ ze(t, uo(uo({}, s), JL(t)));
  else if (se(t))
    c = t(s);
  else if (EL(t) && !IL(t)) {
    var l = i(t, s);
    c = /* @__PURE__ */ E.createElement(rp, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = s;
    c = /* @__PURE__ */ E.createElement(rp, {
      shapeType: r,
      elementProps: f
    });
  }
  return u ? /* @__PURE__ */ E.createElement(Ee, {
    className: o
  }, c) : c;
}
function Xo(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Zo(e, t) {
  return t != null && "sectors" in e.props;
}
function Wi(e, t) {
  return t != null && "points" in e.props;
}
function QL(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function eB(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function tB(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function rB(e, t) {
  var r;
  return Xo(e, t) ? r = QL : Zo(e, t) ? r = eB : Wi(e, t) && (r = tB), r;
}
function nB(e, t) {
  var r;
  return Xo(e, t) ? r = "trapezoids" : Zo(e, t) ? r = "sectors" : Wi(e, t) && (r = "points"), r;
}
function iB(e, t) {
  if (Xo(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Zo(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Wi(e, t) ? t.payload : {};
}
function aB(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = nB(r, t), a = iB(r, t), o = n.filter(function(s, c) {
    var l = ra(a, s), f = r.props[i].filter(function(y) {
      var v = rB(r, t);
      return v(y, t);
    }), d = r.props[i].indexOf(f[f.length - 1]), h = c === d;
    return l && h;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var oB = Math.ceil, uB = Math.max;
function sB(e, t, r, n) {
  for (var i = -1, a = uB(oB((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var cB = sB, lB = ay, np = 1 / 0, fB = 17976931348623157e292;
function dB(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = lB(e), e === np || e === -np) {
    var t = e < 0 ? -1 : 1;
    return t * fB;
  }
  return e === e ? e : 0;
}
var Pm = dB, hB = cB, pB = Bo, Lu = Pm;
function vB(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && pB(t, r, n) && (r = n = void 0), t = Lu(t), r === void 0 ? (r = t, t = 0) : r = Lu(r), n = n === void 0 ? t < r ? 1 : -1 : Lu(n), hB(t, r, n, e);
  };
}
var yB = vB, mB = yB, gB = mB(), bB = gB;
const so = /* @__PURE__ */ $e(bB);
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
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
      Em(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ip(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Em(e, t, r) {
  return t = xB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xB(e) {
  var t = wB(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function wB(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _B = ["Webkit", "Moz", "O", "ms"], OB = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = _B.reduce(function(a, o) {
    return ap(ap({}, a), {}, Em({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function co() {
  return co = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, co.apply(this, arguments);
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
function Bu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? op(Object(r), !0).forEach(function(n) {
      dt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : op(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function up(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tm(n.key), n);
  }
}
function AB(e, t, r) {
  return t && up(e.prototype, t), r && up(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PB(e, t, r) {
  return t = lo(t), EB(e, $m() ? Reflect.construct(t, r || [], lo(e).constructor) : t.apply(e, r));
}
function EB(e, t) {
  if (t && (hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $B(e);
}
function $B(e) {
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
function lo(e) {
  return lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lo(e);
}
function TB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zs(e, t);
}
function Zs(e, t) {
  return Zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zs(e, t);
}
function dt(e, t, r) {
  return t = Tm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tm(e) {
  var t = jB(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function jB(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var CB = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = ui().domain(so(0, s)).range([a, a + o - u]), l = c.domain().map(function(f) {
    return c(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(i),
    scale: c,
    scaleValues: l
  };
}, sp = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, pn = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return SB(this, t), n = PB(this, t, [r]), dt(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), dt(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), dt(n, "handleDragEnd", function() {
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
    }), dt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), dt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), dt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), dt(n, "handleSlideDragStart", function(i) {
      var a = sp(i) ? i.changedTouches[0] : i;
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
  return TB(t, e), AB(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, l = c.length - 1, f = Math.min(i, a), d = Math.max(i, a), h = t.getIndexInRange(o, f), y = t.getIndexInRange(o, d);
      return {
        startIndex: h - h % s,
        endIndex: y === l ? l : y - y % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, s = Xe(a[n], u, n);
      return se(o) ? o(s, n) : s;
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
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, s = this.props, c = s.x, l = s.width, f = s.travellerWidth, d = s.startIndex, h = s.endIndex, y = s.onChange, v = n.pageX - a;
      v > 0 ? v = Math.min(v, c + l - f - u, c + l - f - o) : v < 0 && (v = Math.max(v, c - o, c - u));
      var p = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (p.startIndex !== d || p.endIndex !== h) && y && y(p), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = sp(i) ? i.changedTouches[0] : i;
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
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, s = i.startX, c = this.state[o], l = this.props, f = l.x, d = l.width, h = l.travellerWidth, y = l.onChange, v = l.gap, p = l.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = n.pageX - a;
      w > 0 ? w = Math.min(w, f + d - h - c) : w < 0 && (w = Math.max(w, f - c)), g[o] = c + w;
      var b = this.getIndex(g), _ = b.startIndex, m = b.endIndex, x = function() {
        var P = p.length - 1;
        return o === "startX" && (u > s ? _ % v === 0 : m % v === 0) || u < s && m === P || o === "endX" && (u > s ? m % v === 0 : _ % v === 0) || u > s && m === P;
      };
      this.setState(dt(dt({}, o, c + w), "brushMoveStartX", n.pageX), function() {
        y && x() && y(b);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, l = this.state[i], f = u.indexOf(l);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= u.length)) {
          var h = u[d];
          i === "startX" && h >= c || i === "endX" && h <= s || this.setState(dt({}, i, h), function() {
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
      return /* @__PURE__ */ E.createElement("rect", {
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
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.data, c = n.children, l = n.padding, f = $r.only(c);
      return f ? /* @__PURE__ */ E.cloneElement(f, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: l,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, u = this, s = this.props, c = s.y, l = s.travellerWidth, f = s.height, d = s.traveller, h = s.ariaLabel, y = s.data, v = s.startIndex, p = s.endIndex, g = Math.max(n, this.props.x), w = Bu(Bu({}, ce(this.props, !1)), {}, {
        x: g,
        y: c,
        width: l,
        height: f
      }), b = h || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ E.createElement(Ee, {
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
      }, t.renderTraveller(d, w));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, u = a.height, s = a.stroke, c = a.travellerWidth, l = Math.min(n, i) + c, f = Math.max(Math.abs(i - n) - c, 0);
      return /* @__PURE__ */ E.createElement("rect", {
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
        x: l,
        y: o,
        width: f,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, l = this.state, f = l.startX, d = l.endX, h = 5, y = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ E.createElement(Ee, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ E.createElement(Da, co({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - h,
        y: o + u / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ E.createElement(Da, co({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + s + h,
        y: o + u / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, s = n.y, c = n.width, l = n.height, f = n.alwaysShowText, d = this.state, h = d.startX, y = d.endX, v = d.isTextActive, p = d.isSlideMoving, g = d.isTravellerMoving, w = d.isTravellerFocused;
      if (!i || !i.length || !Y(u) || !Y(s) || !Y(c) || !Y(l) || c <= 0 || l <= 0)
        return null;
      var b = he("recharts-brush", a), _ = E.Children.count(o) === 1, m = OB("userSelect", "none");
      return /* @__PURE__ */ E.createElement(Ee, {
        className: b,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(h, y), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(y, "endX"), (v || p || g || w || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: i + 1,
        y1: c,
        x2: i + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ E.createElement("line", {
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
      return /* @__PURE__ */ E.isValidElement(n) ? a = /* @__PURE__ */ E.cloneElement(n, i) : se(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, l = n.startIndex, f = n.endIndex;
      if (a !== i.prevData || c !== i.prevUpdateId)
        return Bu({
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, a && a.length ? CB({
          data: a,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: l,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || s !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - s]);
        var d = i.scale.domain().map(function(h) {
          return i.scale(h);
        });
        return {
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: d
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
}(nr);
dt(pn, "displayName", "Brush");
dt(pn, "defaultProps", {
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
var MB = Bc;
function IB(e, t) {
  var r;
  return MB(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var kB = IB, NB = Mv, DB = vr, RB = kB, LB = ct, BB = Bo;
function FB(e, t, r) {
  var n = LB(e) ? NB : RB;
  return r && BB(e, t, r) && (t = void 0), n(e, DB(t));
}
var zB = FB;
const WB = /* @__PURE__ */ $e(zB);
var Ft = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, cp = ey;
function UB(e, t, r) {
  t == "__proto__" && cp ? cp(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var KB = UB, qB = KB, VB = Jv, GB = vr;
function HB(e, t) {
  var r = {};
  return t = GB(t), VB(e, function(n, i, a) {
    qB(r, i, t(n, i, a));
  }), r;
}
var YB = HB;
const XB = /* @__PURE__ */ $e(YB);
function ZB(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var JB = ZB, QB = Bc;
function eF(e, t) {
  var r = !0;
  return QB(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var tF = eF, rF = JB, nF = tF, iF = vr, aF = ct, oF = Bo;
function uF(e, t, r) {
  var n = aF(e) ? rF : nF;
  return r && oF(e, t, r) && (t = void 0), n(e, iF(t));
}
var sF = uF;
const jm = /* @__PURE__ */ $e(sF);
var cF = ["x", "y"];
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vn(e);
}
function Js() {
  return Js = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Js.apply(this, arguments);
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
function ii(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lp(Object(r), !0).forEach(function(n) {
      lF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lF(e, t, r) {
  return t = fF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fF(e) {
  var t = dF(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function dF(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hF(e, t) {
  if (e == null) return {};
  var r = pF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function pF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function vF(e, t) {
  var r = e.x, n = e.y, i = hF(e, cF), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || i.height), l = parseInt(c, 10), f = "".concat(t.width || i.width), d = parseInt(f, 10);
  return ii(ii(ii(ii(ii({}, t), i), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: l,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function fp(e) {
  return /* @__PURE__ */ E.createElement(Xs, Js({
    shapeType: "rectangle",
    propTransformer: vF,
    activeClassName: "recharts-active-bar"
  }, e));
}
var yF = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = Y(n) || Pw(n);
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? ut(!1, "minPointSize callback function received a value with type of ".concat(vn(n), ". Currently only numbers or null/undefined are supported.")) : ut()), r);
  };
}, mF = ["value", "background"], Cm;
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
function gF(e, t) {
  if (e == null) return {};
  var r = bF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fo() {
  return fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fo.apply(this, arguments);
}
function dp(e, t) {
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
    t % 2 ? dp(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Im(n.key), n);
  }
}
function wF(e, t, r) {
  return t && hp(e.prototype, t), r && hp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _F(e, t, r) {
  return t = ho(t), OF(e, Mm() ? Reflect.construct(t, r || [], ho(e).constructor) : t.apply(e, r));
}
function OF(e, t) {
  if (t && (yn(t) === "object" || typeof t == "function"))
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
function Mm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mm = function() {
    return !!e;
  })();
}
function ho(e) {
  return ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ho(e);
}
function AF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qs(e, t);
}
function Qs(e, t) {
  return Qs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qs(e, t);
}
function fr(e, t, r) {
  return t = Im(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Im(e) {
  var t = PF(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function PF(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ve = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    xF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = _F(this, t, [].concat(i)), fr(r, "state", {
      isAnimationFinished: !1
    }), fr(r, "id", In("recharts-bar-")), fr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), fr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return AF(t, e), wF(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.dataKey, s = a.activeIndex, c = a.activeBar, l = ce(this.props, !1);
      return n && n.map(function(f, d) {
        var h = d === s, y = h ? c : o, v = De(De(De({}, l), f), {}, {
          isActive: h,
          option: y,
          index: d,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ E.createElement(Ee, fo({
          className: "recharts-bar-rectangle"
        }, hi(i.props, f, d), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(d)
        }), /* @__PURE__ */ E.createElement(fp, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, l = i.animationEasing, f = i.animationId, d = this.state.prevData;
      return /* @__PURE__ */ E.createElement(Wt, {
        begin: s,
        duration: c,
        isActive: u,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var y = h.t, v = a.map(function(p, g) {
          var w = d && d[g];
          if (w) {
            var b = nt(w.x, p.x), _ = nt(w.y, p.y), m = nt(w.width, p.width), x = nt(w.height, p.height);
            return De(De({}, p), {}, {
              x: b(y),
              y: _(y),
              width: m(y),
              height: x(y)
            });
          }
          if (o === "horizontal") {
            var O = nt(0, p.height), P = O(y);
            return De(De({}, p), {}, {
              y: p.y + p.height - P,
              height: P
            });
          }
          var $ = nt(0, p.width), I = $(y);
          return De(De({}, p), {}, {
            width: I
          });
        });
        return /* @__PURE__ */ E.createElement(Ee, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !ra(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, s = ce(this.props.background, !1);
      return a.map(function(c, l) {
        c.value;
        var f = c.background, d = gF(c, mF);
        if (!f)
          return null;
        var h = De(De(De(De(De({}, d), {}, {
          fill: "#eee"
        }, f), s), hi(n.props, c, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ E.createElement(fp, fo({
          key: "background-bar-".concat(l),
          option: n.props.background,
          isActive: l === u
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, u = a.xAxis, s = a.yAxis, c = a.layout, l = a.children, f = st(l, Fn);
      if (!f)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(p, g) {
        var w = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: w,
          errorVal: Xe(p, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ E.createElement(Ee, y, f.map(function(v) {
        return /* @__PURE__ */ E.cloneElement(v, {
          key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: d,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, l = n.top, f = n.width, d = n.height, h = n.isAnimationActive, y = n.background, v = n.id;
      if (i || !a || !a.length)
        return null;
      var p = this.state.isAnimationFinished, g = he("recharts-bar", o), w = u && u.allowDataOverflow, b = s && s.allowDataOverflow, _ = w || b, m = ue(v) ? this.id : v;
      return /* @__PURE__ */ E.createElement(Ee, {
        className: g
      }, w || b ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: w ? c : c - f / 2,
        y: b ? l : l - d / 2,
        width: w ? f : f * 2,
        height: b ? d : d * 2
      }))) : null, /* @__PURE__ */ E.createElement(Ee, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, m), (!h || p) && Qt.renderCallByParent(this.props, a));
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
}(nr);
Cm = Ve;
fr(Ve, "displayName", "Bar");
fr(Ve, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Lr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
fr(Ve, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, u = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, h = ZN(n, r);
  if (!h)
    return null;
  var y = t.layout, v = r.type.defaultProps, p = v !== void 0 ? De(De({}, v), r.props) : r.props, g = p.dataKey, w = p.children, b = p.minPointSize, _ = y === "horizontal" ? o : a, m = c ? _.scale.domain() : null, x = aD({
    numericAxis: _
  }), O = st(w, Zi), P = f.map(function($, I) {
    var T, C, R, N, k, L;
    c ? T = JN(c[l + I], m) : (T = Xe($, g), Array.isArray(T) || (T = [x, T]));
    var F = yF(b, Cm.defaultProps.minPointSize)(T[1], I);
    if (y === "horizontal") {
      var K, V = [o.scale(T[0]), o.scale(T[1])], M = V[0], B = V[1];
      C = nh({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: h.offset,
        entry: $,
        index: I
      }), R = (K = B ?? M) !== null && K !== void 0 ? K : void 0, N = h.size;
      var z = M - B;
      if (k = Number.isNaN(z) ? 0 : z, L = {
        x: C,
        y: o.y,
        width: N,
        height: o.height
      }, Math.abs(F) > 0 && Math.abs(k) < Math.abs(F)) {
        var G = It(k || F) * (Math.abs(F) - Math.abs(k));
        R -= G, k += G;
      }
    } else {
      var X = [a.scale(T[0]), a.scale(T[1])], te = X[0], re = X[1];
      if (C = te, R = nh({
        axis: o,
        ticks: s,
        bandSize: i,
        offset: h.offset,
        entry: $,
        index: I
      }), N = re - te, k = h.size, L = {
        x: a.x,
        y: R,
        width: a.width,
        height: k
      }, Math.abs(F) > 0 && Math.abs(N) < Math.abs(F)) {
        var ie = It(N || F) * (Math.abs(F) - Math.abs(N));
        N += ie;
      }
    }
    return De(De(De({}, $), {}, {
      x: C,
      y: R,
      width: N,
      height: k,
      value: c ? T : T[1],
      payload: $,
      background: L
    }, O && O[I] && O[I].props), {}, {
      tooltipPayload: [dm(r, $)],
      tooltipPosition: {
        x: C + N / 2,
        y: R + k / 2
      }
    });
  });
  return De({
    data: P,
    layout: y
  }, d);
});
function Ki(e) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e);
}
function EF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, km(n.key), n);
  }
}
function $F(e, t, r) {
  return t && pp(e.prototype, t), r && pp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vp(Object(r), !0).forEach(function(n) {
      Jo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jo(e, t, r) {
  return t = km(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function km(e) {
  var t = TF(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function TF(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yl = function(t, r, n, i, a) {
  var o = t.width, u = t.height, s = t.layout, c = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, d = !!ht(c, Ve);
  return l.reduce(function(h, y) {
    var v = r[y], p = v.orientation, g = v.domain, w = v.padding, b = w === void 0 ? {} : w, _ = v.mirror, m = v.reversed, x = "".concat(p).concat(_ ? "Mirror" : ""), O, P, $, I, T;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var C = g[1] - g[0], R = 1 / 0, N = v.categoricalDomain.sort(jw);
      if (N.forEach(function(X, te) {
        te > 0 && (R = Math.min((X || 0) - (N[te - 1] || 0), R));
      }), Number.isFinite(R)) {
        var k = R / C, L = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = k * L / 2), v.padding === "no-gap") {
          var F = Ir(t.barCategoryGap, k * L), K = k * L / 2;
          O = K - F - (K - F) / L * F;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (b.left || 0) + (O || 0), n.left + n.width - (b.right || 0) - (O || 0)] : i === "yAxis" ? P = s === "horizontal" ? [n.top + n.height - (b.bottom || 0), n.top + (b.top || 0)] : [n.top + (b.top || 0) + (O || 0), n.top + n.height - (b.bottom || 0) - (O || 0)] : P = v.range, m && (P = [P[1], P[0]]);
    var V = YN(v, a, d), M = V.scale, B = V.realScaleType;
    M.domain(g).range(P), XN(M);
    var z = iD(M, jt(jt({}, v), {}, {
      realScaleType: B
    }));
    i === "xAxis" ? (T = p === "top" && !_ || p === "bottom" && _, $ = n.left, I = f[x] - T * v.height) : i === "yAxis" && (T = p === "left" && !_ || p === "right" && _, $ = f[x] - T * v.width, I = n.top);
    var G = jt(jt(jt({}, v), z), {}, {
      realScaleType: B,
      x: $,
      y: I,
      scale: M,
      width: i === "xAxis" ? n.width : v.width,
      height: i === "yAxis" ? n.height : v.height
    });
    return G.bandSize = Za(G, z), !v.hide && i === "xAxis" ? f[x] += (T ? -1 : 1) * G.height : v.hide || (f[x] += (T ? -1 : 1) * G.width), jt(jt({}, h), {}, Jo({}, y, G));
  }, {});
}, Nm = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, jF = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return Nm({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Dm = /* @__PURE__ */ function() {
  function e(t) {
    EF(this, e), this.scale = t;
  }
  return $F(e, [{
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
Jo(Dm, "EPS", 1e-4);
var ml = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return jt(jt({}, n), {}, Jo({}, i, Dm.create(t[i])));
  }, {});
  return jt(jt({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return XB(i, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return jm(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function CF(e) {
  return (e % 180 + 180) % 180;
}
var MF = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = CF(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, IF = vr, kF = Xi, NF = Ro;
function DF(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!kF(t)) {
      var a = IF(r);
      t = NF(t), r = function(u) {
        return a(i[u], u, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var RF = DF, LF = Pm;
function BF(e) {
  var t = LF(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var FF = BF, zF = Vv, WF = vr, UF = FF, KF = Math.max;
function qF(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : UF(r);
  return i < 0 && (i = KF(n + i, 0)), zF(e, WF(t), i);
}
var VF = qF, GF = RF, HF = VF, YF = GF(HF), XF = YF;
const ZF = /* @__PURE__ */ $e(XF);
var JF = Mx(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function po(e) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e);
}
var gl = /* @__PURE__ */ Dr(void 0), bl = /* @__PURE__ */ Dr(void 0), Rm = /* @__PURE__ */ Dr(void 0), Lm = /* @__PURE__ */ Dr({}), Bm = /* @__PURE__ */ Dr(void 0), Fm = /* @__PURE__ */ Dr(0), zm = /* @__PURE__ */ Dr(0), yp = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, s = t.width, c = t.height, l = JF(a);
  return /* @__PURE__ */ E.createElement(gl.Provider, {
    value: n
  }, /* @__PURE__ */ E.createElement(bl.Provider, {
    value: i
  }, /* @__PURE__ */ E.createElement(Lm.Provider, {
    value: a
  }, /* @__PURE__ */ E.createElement(Rm.Provider, {
    value: l
  }, /* @__PURE__ */ E.createElement(Bm.Provider, {
    value: o
  }, /* @__PURE__ */ E.createElement(Fm.Provider, {
    value: c
  }, /* @__PURE__ */ E.createElement(zm.Provider, {
    value: s
  }, u)))))));
}, QF = function() {
  return ir(Bm);
};
function Wm(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var Um = function(t) {
  var r = ir(gl);
  r == null && (process.env.NODE_ENV !== "production" ? ut(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : ut());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? ut(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(po(t), "]. ").concat(Wm(r))) : ut()), n;
}, e3 = function() {
  var t = ir(gl);
  return lr(t);
}, t3 = function() {
  var t = ir(bl), r = ZF(t, function(n) {
    return jm(n.domain, Number.isFinite);
  });
  return r || lr(t);
}, Km = function(t) {
  var r = ir(bl);
  r == null && (process.env.NODE_ENV !== "production" ? ut(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : ut());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? ut(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(po(t), "]. ").concat(Wm(r))) : ut()), n;
}, r3 = function() {
  var t = ir(Rm);
  return t;
}, n3 = function() {
  return ir(Lm);
}, xl = function() {
  return ir(zm);
}, wl = function() {
  return ir(Fm);
};
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function i3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Vm(n.key), n);
  }
}
function o3(e, t, r) {
  return t && a3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u3(e, t, r) {
  return t = vo(t), s3(e, qm() ? Reflect.construct(t, r || [], vo(e).constructor) : t.apply(e, r));
}
function s3(e, t) {
  if (t && (mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return c3(e);
}
function c3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qm = function() {
    return !!e;
  })();
}
function vo(e) {
  return vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vo(e);
}
function l3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ec(e, t);
}
function ec(e, t) {
  return ec = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ec(e, t);
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
function gp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mp(Object(r), !0).forEach(function(n) {
      _l(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _l(e, t, r) {
  return t = Vm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vm(e) {
  var t = f3(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function f3(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function d3(e, t) {
  return y3(e) || v3(e, t) || p3(e, t) || h3();
}
function h3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p3(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function v3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function y3(e) {
  if (Array.isArray(e)) return e;
}
function tc() {
  return tc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tc.apply(this, arguments);
}
var m3 = function(t, r) {
  var n;
  return /* @__PURE__ */ E.isValidElement(t) ? n = /* @__PURE__ */ E.cloneElement(t, r) : se(t) ? n = t(r) : n = /* @__PURE__ */ E.createElement("line", tc({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, g3 = function(t, r, n, i, a, o, u, s, c) {
  var l = a.x, f = a.y, d = a.width, h = a.height;
  if (n) {
    var y = c.y, v = t.y.apply(y, {
      position: o
    });
    if (Ft(c, "discard") && !t.y.isInRange(v))
      return null;
    var p = [{
      x: l + d,
      y: v
    }, {
      x: l,
      y: v
    }];
    return s === "left" ? p.reverse() : p;
  }
  if (r) {
    var g = c.x, w = t.x.apply(g, {
      position: o
    });
    if (Ft(c, "discard") && !t.x.isInRange(w))
      return null;
    var b = [{
      x: w,
      y: f + h
    }, {
      x: w,
      y: f
    }];
    return u === "top" ? b.reverse() : b;
  }
  if (i) {
    var _ = c.segment, m = _.map(function(x) {
      return t.apply(x, {
        position: o
      });
    });
    return Ft(c, "discard") && WB(m, function(x) {
      return !t.isInRange(x);
    }) ? null : m;
  }
  return null;
};
function b3(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, s = e.alwaysShow, c = QF(), l = Um(i), f = Km(a), d = r3();
  if (!c || !d)
    return null;
  Zt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = ml({
    x: l.scale,
    y: f.scale
  }), y = We(t), v = We(r), p = n && n.length === 2, g = g3(h, y, v, p, d, e.position, l.orientation, f.orientation, e);
  if (!g)
    return null;
  var w = d3(g, 2), b = w[0], _ = b.x, m = b.y, x = w[1], O = x.x, P = x.y, $ = Ft(e, "hidden") ? "url(#".concat(c, ")") : void 0, I = gp(gp({
    clipPath: $
  }, ce(e, !0)), {}, {
    x1: _,
    y1: m,
    x2: O,
    y2: P
  });
  return /* @__PURE__ */ E.createElement(Ee, {
    className: he("recharts-reference-line", u)
  }, m3(o, I), Je.renderCallByParent(e, jF({
    x1: _,
    y1: m,
    x2: O,
    y2: P
  })));
}
var Ol = /* @__PURE__ */ function(e) {
  function t() {
    return i3(this, t), u3(this, t, arguments);
  }
  return l3(t, e), o3(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ E.createElement(b3, this.props);
    }
  }]);
}(E.Component);
_l(Ol, "displayName", "ReferenceLine");
_l(Ol, "defaultProps", {
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
function rc() {
  return rc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rc.apply(this, arguments);
}
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
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
function wp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xp(Object(r), !0).forEach(function(n) {
      Qo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function w3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hm(n.key), n);
  }
}
function _3(e, t, r) {
  return t && w3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O3(e, t, r) {
  return t = yo(t), S3(e, Gm() ? Reflect.construct(t, r || [], yo(e).constructor) : t.apply(e, r));
}
function S3(e, t) {
  if (t && (gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A3(e);
}
function A3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gm = function() {
    return !!e;
  })();
}
function yo(e) {
  return yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yo(e);
}
function P3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nc(e, t);
}
function nc(e, t) {
  return nc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, nc(e, t);
}
function Qo(e, t, r) {
  return t = Hm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hm(e) {
  var t = E3(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function E3(e, t) {
  if (gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var $3 = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = ml({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Ft(t, "discard") && !o.isInRange(u) ? null : u;
}, eu = /* @__PURE__ */ function(e) {
  function t() {
    return x3(this, t), O3(this, t, arguments);
  }
  return P3(t, e), _3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = We(i), l = We(a);
      if (Zt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !l)
        return null;
      var f = $3(this.props);
      if (!f)
        return null;
      var d = f.x, h = f.y, y = this.props, v = y.shape, p = y.className, g = Ft(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, w = wp(wp({
        clipPath: g
      }, ce(this.props, !0)), {}, {
        cx: d,
        cy: h
      });
      return /* @__PURE__ */ E.createElement(Ee, {
        className: he("recharts-reference-dot", p)
      }, t.renderDot(v, w), Je.renderCallByParent(this.props, {
        x: d - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(E.Component);
Qo(eu, "displayName", "ReferenceDot");
Qo(eu, "defaultProps", {
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
Qo(eu, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : se(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(vl, rc({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ic.apply(this, arguments);
}
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
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
      tu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function j3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xm(n.key), n);
  }
}
function C3(e, t, r) {
  return t && j3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function M3(e, t, r) {
  return t = mo(t), I3(e, Ym() ? Reflect.construct(t, r || [], mo(e).constructor) : t.apply(e, r));
}
function I3(e, t) {
  if (t && (bn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k3(e);
}
function k3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ym() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ym = function() {
    return !!e;
  })();
}
function mo(e) {
  return mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mo(e);
}
function N3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ac(e, t);
}
function ac(e, t) {
  return ac = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ac(e, t);
}
function tu(e, t, r) {
  return t = Xm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xm(e) {
  var t = D3(e, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function D3(e, t) {
  if (bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var R3 = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, s = a.y1, c = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var d = ml({
    x: l.scale,
    y: f.scale
  }), h = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(s, {
      position: "start"
    }) : d.y.rangeMin
  }, y = {
    x: r ? d.x.apply(u, {
      position: "end"
    }) : d.x.rangeMax,
    y: i ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Ft(a, "discard") && (!d.isInRange(h) || !d.isInRange(y)) ? null : Nm(h, y);
}, ru = /* @__PURE__ */ function(e) {
  function t() {
    return T3(this, t), M3(this, t, arguments);
  }
  return N3(t, e), C3(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, l = n.clipPathId;
      Zt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = We(i), d = We(a), h = We(o), y = We(u), v = this.props.shape;
      if (!f && !d && !h && !y && !v)
        return null;
      var p = R3(f, d, h, y, this.props);
      if (!p && !v)
        return null;
      var g = Ft(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ E.createElement(Ee, {
        className: he("recharts-reference-area", s)
      }, t.renderRect(v, Op(Op({
        clipPath: g
      }, ce(this.props, !0)), p)), Je.renderCallByParent(this.props, p));
    }
  }]);
}(E.Component);
tu(ru, "displayName", "ReferenceArea");
tu(ru, "defaultProps", {
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
tu(ru, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : se(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(pl, ic({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function Zm(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function L3(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return MF(n, r);
}
function B3(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, u = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function go(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function F3(e, t) {
  return Zm(e, t + 1);
}
function z3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, u = t.end, s = 0, c = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[s];
    if (y === void 0)
      return {
        v: Zm(n, c)
      };
    var v = s, p, g = function() {
      return p === void 0 && (p = r(y, v)), p;
    }, w = y.coordinate, b = s === 0 || go(e, w, g, l, u);
    b || (s = 0, l = o, c += 1), b && (l = w + e * (g() / 2 + i), s += c);
  }, d; c <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function qi(e) {
  "@babel/helpers - typeof";
  return qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qi(e);
}
function Sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sp(Object(r), !0).forEach(function(n) {
      W3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W3(e, t, r) {
  return t = U3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U3(e) {
  var t = K3(e, "string");
  return qi(t) == "symbol" ? t : t + "";
}
function K3(e, t) {
  if (qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function q3(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, u = t.start, s = t.end, c = function(d) {
    var h = a[d], y, v = function() {
      return y === void 0 && (y = r(h, d)), y;
    };
    if (d === o - 1) {
      var p = e * (h.coordinate + e * v() / 2 - s);
      a[d] = h = Ze(Ze({}, h), {}, {
        tickCoord: p > 0 ? h.coordinate - p * e : h.coordinate
      });
    } else
      a[d] = h = Ze(Ze({}, h), {}, {
        tickCoord: h.coordinate
      });
    var g = go(e, h.tickCoord, v, u, s);
    g && (s = h.tickCoord - e * (v() / 2 + i), a[d] = Ze(Ze({}, h), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return a;
}
function V3(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, s = t.start, c = t.end;
  if (a) {
    var l = n[u - 1], f = r(l, u - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[u - 1] = l = Ze(Ze({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var h = go(e, l.tickCoord, function() {
      return f;
    }, s, c);
    h && (c = l.tickCoord - e * (f / 2 + i), o[u - 1] = Ze(Ze({}, l), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? u - 1 : u, v = function(w) {
    var b = o[w], _, m = function() {
      return _ === void 0 && (_ = r(b, w)), _;
    };
    if (w === 0) {
      var x = e * (b.coordinate - e * m() / 2 - s);
      o[w] = b = Ze(Ze({}, b), {}, {
        tickCoord: x < 0 ? b.coordinate - x * e : b.coordinate
      });
    } else
      o[w] = b = Ze(Ze({}, b), {}, {
        tickCoord: b.coordinate
      });
    var O = go(e, b.tickCoord, m, s, c);
    O && (s = b.tickCoord + e * (m() / 2 + i), o[w] = Ze(Ze({}, b), {}, {
      isShow: !0
    }));
  }, p = 0; p < y; p++)
    v(p);
  return o;
}
function Sl(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, u = e.orientation, s = e.interval, c = e.tickFormatter, l = e.unit, f = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (Y(s) || Lr.isSsr)
    return F3(i, typeof s == "number" && Y(s) ? s : 0);
  var d = [], h = u === "top" || u === "bottom" ? "width" : "height", y = l && h === "width" ? oi(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, v = function(b, _) {
    var m = se(c) ? c(b.value, _) : b.value;
    return h === "width" ? L3(oi(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : oi(m, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, p = i.length >= 2 ? It(i[1].coordinate - i[0].coordinate) : 1, g = B3(a, p, h);
  return s === "equidistantPreserveStart" ? z3(p, g, v, i, o) : (s === "preserveStart" || s === "preserveStartEnd" ? d = V3(p, g, v, i, o, s === "preserveStartEnd") : d = q3(p, g, v, i, o), d.filter(function(w) {
    return w.isShow;
  }));
}
var G3 = ["viewBox"], H3 = ["viewBox"], Y3 = ["ticks"];
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function Zr() {
  return Zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zr.apply(this, arguments);
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
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ap(Object(r), !0).forEach(function(n) {
      Al(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ap(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fu(e, t) {
  if (e == null) return {};
  var r = X3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function X3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Z3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qm(n.key), n);
  }
}
function J3(e, t, r) {
  return t && Pp(e.prototype, t), r && Pp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Q3(e, t, r) {
  return t = bo(t), ez(e, Jm() ? Reflect.construct(t, r || [], bo(e).constructor) : t.apply(e, r));
}
function ez(e, t) {
  if (t && (xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tz(e);
}
function tz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Jm = function() {
    return !!e;
  })();
}
function bo(e) {
  return bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bo(e);
}
function rz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && oc(e, t);
}
function oc(e, t) {
  return oc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, oc(e, t);
}
function Al(e, t, r) {
  return t = Qm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qm(e) {
  var t = nz(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function nz(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var zn = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return Z3(this, t), n = Q3(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return rz(t, e), J3(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = Fu(n, G3), u = this.props, s = u.viewBox, c = Fu(u, H3);
      return !Qr(a, s) || !Qr(o, c) || !Qr(i, this.state);
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
      var i = this.props, a = i.x, o = i.y, u = i.width, s = i.height, c = i.orientation, l = i.tickSize, f = i.mirror, d = i.tickMargin, h, y, v, p, g, w, b = f ? -1 : 1, _ = n.tickSize || l, m = Y(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          h = y = n.coordinate, p = o + +!f * s, v = p - b * _, w = v - b * d, g = m;
          break;
        case "left":
          v = p = n.coordinate, y = a + +!f * u, h = y - b * _, g = h - b * d, w = m;
          break;
        case "right":
          v = p = n.coordinate, y = a + +f * u, h = y + b * _, g = h + b * d, w = m;
          break;
        default:
          h = y = n.coordinate, p = o + +f * s, v = p + b * _, w = v + b * d, g = m;
          break;
      }
      return {
        line: {
          x1: h,
          y1: v,
          x2: y,
          y2: p
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
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.orientation, c = n.mirror, l = n.axisLine, f = Be(Be(Be({}, ce(this.props, !1)), ce(l, !1)), {}, {
        fill: "none"
      });
      if (s === "top" || s === "bottom") {
        var d = +(s === "top" && !c || s === "bottom" && c);
        f = Be(Be({}, f), {}, {
          x1: i,
          y1: a + d * u,
          x2: i + o,
          y2: a + d * u
        });
      } else {
        var h = +(s === "left" && !c || s === "right" && c);
        f = Be(Be({}, f), {}, {
          x1: i + h * o,
          y1: a,
          x2: i + h * o,
          y2: a + u
        });
      }
      return /* @__PURE__ */ E.createElement("line", Zr({}, f, {
        className: he("recharts-cartesian-axis-line", St(l, "className"))
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
        var o = this, u = this.props, s = u.tickLine, c = u.stroke, l = u.tick, f = u.tickFormatter, d = u.unit, h = Sl(Be(Be({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), p = ce(this.props, !1), g = ce(l, !1), w = Be(Be({}, p), {}, {
          fill: "none"
        }, ce(s, !1)), b = h.map(function(_, m) {
          var x = o.getTickLineCoord(_), O = x.line, P = x.tick, $ = Be(Be(Be(Be({
            textAnchor: y,
            verticalAnchor: v
          }, p), {}, {
            stroke: "none",
            fill: c
          }, g), P), {}, {
            index: m,
            payload: _,
            visibleTicksCount: h.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ E.createElement(Ee, Zr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(_.value, "-").concat(_.coordinate, "-").concat(_.tickCoord)
          }, hi(o.props, _, m)), s && /* @__PURE__ */ E.createElement("line", Zr({}, w, O, {
            className: he("recharts-cartesian-axis-tick-line", St(s, "className"))
          })), l && t.renderTickItem(l, $, "".concat(se(f) ? f(_.value, m) : _.value).concat(d || "")));
        });
        return /* @__PURE__ */ E.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, b);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, u = i.height, s = i.ticksGenerator, c = i.className, l = i.hide;
      if (l)
        return null;
      var f = this.props, d = f.ticks, h = Fu(f, Y3), y = d;
      return se(s) && (y = d && d.length > 0 ? s(this.props) : s(h)), o <= 0 || u <= 0 || !y || !y.length ? null : /* @__PURE__ */ E.createElement(Ee, {
        className: he("recharts-cartesian-axis", c),
        ref: function(p) {
          n.layerReference = p;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Je.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o, u = he(i.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ E.isValidElement(n) ? o = /* @__PURE__ */ E.cloneElement(n, Be(Be({}, i), {}, {
        className: u
      })) : se(n) ? o = n(Be(Be({}, i), {}, {
        className: u
      })) : o = /* @__PURE__ */ E.createElement(Da, Zr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(Vp);
Al(zn, "displayName", "CartesianAxis");
Al(zn, "defaultProps", {
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
var iz = ["x1", "y1", "x2", "y2", "key"], az = ["offset"];
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
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
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ep(Object(r), !0).forEach(function(n) {
      oz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ep(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oz(e, t, r) {
  return t = uz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uz(e) {
  var t = sz(e, "string");
  return Nr(t) == "symbol" ? t : t + "";
}
function sz(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function $p(e, t) {
  if (e == null) return {};
  var r = cz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var lz = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, u = t.height, s = t.ry;
  return /* @__PURE__ */ E.createElement("rect", {
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
function eg(e, t) {
  var r;
  if (/* @__PURE__ */ E.isValidElement(e))
    r = /* @__PURE__ */ E.cloneElement(e, t);
  else if (se(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, u = t.key, s = $p(t, iz), c = ce(s, !1);
    c.offset;
    var l = $p(c, az);
    r = /* @__PURE__ */ E.createElement("line", Er({}, l, {
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
function fz(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, s) {
    var c = Qe(Qe({}, e), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(s),
      index: s
    });
    return eg(i, c);
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function dz(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, s) {
    var c = Qe(Qe({}, e), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(s),
      index: s
    });
    return eg(i, c);
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function hz(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, u = e.horizontalPoints, s = e.horizontal, c = s === void 0 ? !0 : s;
  if (!c || !t || !t.length)
    return null;
  var l = u.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, h) {
    return d - h;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(d, h) {
    var y = !l[h + 1], v = y ? i + o - d : l[h + 1] - d;
    if (v <= 0)
      return null;
    var p = h % t.length;
    return /* @__PURE__ */ E.createElement("rect", {
      key: "react-".concat(h),
      y: d,
      x: n,
      height: v,
      width: a,
      stroke: "none",
      fill: t[p],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function pz(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, u = e.width, s = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var l = c.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, h) {
    return d - h;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(d, h) {
    var y = !l[h + 1], v = y ? a + u - d : l[h + 1] - d;
    if (v <= 0)
      return null;
    var p = h % n.length;
    return /* @__PURE__ */ E.createElement("rect", {
      key: "react-".concat(h),
      x: d,
      y: o,
      width: v,
      height: s,
      stroke: "none",
      fill: n[p],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var vz = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return lm(Sl(Qe(Qe(Qe({}, zn.defaultProps), n), {}, {
    ticks: Yt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, yz = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return lm(Sl(Qe(Qe(Qe({}, zn.defaultProps), n), {}, {
    ticks: Yt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, Hr = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function _t(e) {
  var t, r, n, i, a, o, u = xl(), s = wl(), c = n3(), l = Qe(Qe({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Hr.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Hr.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Hr.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Hr.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Hr.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Hr.verticalFill,
    x: Y(e.x) ? e.x : c.left,
    y: Y(e.y) ? e.y : c.top,
    width: Y(e.width) ? e.width : c.width,
    height: Y(e.height) ? e.height : c.height
  }), f = l.x, d = l.y, h = l.width, y = l.height, v = l.syncWithTicks, p = l.horizontalValues, g = l.verticalValues, w = e3(), b = t3();
  if (!Y(h) || h <= 0 || !Y(y) || y <= 0 || !Y(f) || f !== +f || !Y(d) || d !== +d)
    return null;
  var _ = l.verticalCoordinatesGenerator || vz, m = l.horizontalCoordinatesGenerator || yz, x = l.horizontalPoints, O = l.verticalPoints;
  if ((!x || !x.length) && se(m)) {
    var P = p && p.length, $ = m({
      yAxis: b ? Qe(Qe({}, b), {}, {
        ticks: P ? p : b.ticks
      }) : void 0,
      width: u,
      height: s,
      offset: c
    }, P ? !0 : v);
    Zt(Array.isArray($), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Nr($), "]")), Array.isArray($) && (x = $);
  }
  if ((!O || !O.length) && se(_)) {
    var I = g && g.length, T = _({
      xAxis: w ? Qe(Qe({}, w), {}, {
        ticks: I ? g : w.ticks
      }) : void 0,
      width: u,
      height: s,
      offset: c
    }, I ? !0 : v);
    Zt(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Nr(T), "]")), Array.isArray(T) && (O = T);
  }
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ E.createElement(lz, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ E.createElement(fz, Er({}, l, {
    offset: c,
    horizontalPoints: x,
    xAxis: w,
    yAxis: b
  })), /* @__PURE__ */ E.createElement(dz, Er({}, l, {
    offset: c,
    verticalPoints: O,
    xAxis: w,
    yAxis: b
  })), /* @__PURE__ */ E.createElement(hz, Er({}, l, {
    horizontalPoints: x
  })), /* @__PURE__ */ E.createElement(pz, Er({}, l, {
    verticalPoints: O
  })));
}
_t.displayName = "CartesianGrid";
var mz = ["type", "layout", "connectNulls", "ref"], gz = ["key"];
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
function Tp(e, t) {
  if (e == null) return {};
  var r = bz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, li.apply(this, arguments);
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
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(r), !0).forEach(function(n) {
      Ct(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yr(e) {
  return Oz(e) || _z(e) || wz(e) || xz();
}
function xz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wz(e, t) {
  if (e) {
    if (typeof e == "string") return uc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uc(e, t);
  }
}
function _z(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Oz(e) {
  if (Array.isArray(e)) return uc(e);
}
function uc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Sz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rg(n.key), n);
  }
}
function Az(e, t, r) {
  return t && Cp(e.prototype, t), r && Cp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Pz(e, t, r) {
  return t = xo(t), Ez(e, tg() ? Reflect.construct(t, r || [], xo(e).constructor) : t.apply(e, r));
}
function Ez(e, t) {
  if (t && (wn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $z(e);
}
function $z(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tg = function() {
    return !!e;
  })();
}
function xo(e) {
  return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xo(e);
}
function Tz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sc(e, t);
}
function sc(e, t) {
  return sc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sc(e, t);
}
function Ct(e, t, r) {
  return t = rg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rg(e) {
  var t = jz(e, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function jz(e, t) {
  if (wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Vt = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Sz(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = Pz(this, t, [].concat(i)), Ct(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Ct(r, "generateSimpleStrokeDasharray", function(o, u) {
      return "".concat(u, "px ").concat(o - u, "px");
    }), Ct(r, "getStrokeDasharray", function(o, u, s) {
      var c = s.reduce(function(g, w) {
        return g + w;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(u, o);
      for (var l = Math.floor(o / c), f = o % c, d = u - o, h = [], y = 0, v = 0; y < s.length; v += s[y], ++y)
        if (v + s[y] > f) {
          h = [].concat(Yr(s.slice(0, y)), [f - v]);
          break;
        }
      var p = h.length % 2 === 0 ? [0, d] : [d];
      return [].concat(Yr(t.repeat(s, l)), Yr(h), p).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), Ct(r, "id", In("recharts-line-")), Ct(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Ct(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Ct(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return Tz(t, e), Az(t, [{
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
      var a = this.props, o = a.points, u = a.xAxis, s = a.yAxis, c = a.layout, l = a.children, f = st(l, Fn);
      if (!f)
        return null;
      var d = function(v, p) {
        return {
          x: v.x,
          y: v.y,
          value: v.value,
          errorVal: Xe(v.payload, p)
        };
      }, h = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ E.createElement(Ee, h, f.map(function(y) {
        return /* @__PURE__ */ E.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var u = this.props, s = u.dot, c = u.points, l = u.dataKey, f = ce(this.props, !1), d = ce(s, !0), h = c.map(function(v, p) {
        var g = ft(ft(ft({
          key: "dot-".concat(p),
          r: 3
        }, f), d), {}, {
          index: p,
          cx: v.x,
          cy: v.y,
          value: v.value,
          dataKey: l,
          payload: v.payload,
          points: c
        });
        return t.renderDotItem(s, g);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ E.createElement(Ee, li({
        className: "recharts-line-dots",
        key: "dots"
      }, y), h);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var u = this.props, s = u.type, c = u.layout, l = u.connectNulls;
      u.ref;
      var f = Tp(u, mz), d = ft(ft(ft({}, ce(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: s,
        layout: c,
        connectNulls: l
      });
      return /* @__PURE__ */ E.createElement(eo, li({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, u = o.points, s = o.strokeDasharray, c = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, h = o.animationId, y = o.animateNewValues, v = o.width, p = o.height, g = this.state, w = g.prevPoints, b = g.totalLength;
      return /* @__PURE__ */ E.createElement(Wt, {
        begin: l,
        duration: f,
        isActive: c,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_) {
        var m = _.t;
        if (w) {
          var x = w.length / u.length, O = u.map(function(C, R) {
            var N = Math.floor(R * x);
            if (w[N]) {
              var k = w[N], L = nt(k.x, C.x), F = nt(k.y, C.y);
              return ft(ft({}, C), {}, {
                x: L(m),
                y: F(m)
              });
            }
            if (y) {
              var K = nt(v * 2, C.x), V = nt(p / 2, C.y);
              return ft(ft({}, C), {}, {
                x: K(m),
                y: V(m)
              });
            }
            return ft(ft({}, C), {}, {
              x: C.x,
              y: C.y
            });
          });
          return a.renderCurveStatically(O, n, i);
        }
        var P = nt(0, b), $ = P(m), I;
        if (s) {
          var T = "".concat(s).split(/[,\s]+/gim).map(function(C) {
            return parseFloat(C);
          });
          I = a.getStrokeDasharray($, b, T);
        } else
          I = a.generateSimpleStrokeDasharray(b, $);
        return a.renderCurveStatically(u, n, i, {
          strokeDasharray: I
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, o = a.points, u = a.isAnimationActive, s = this.state, c = s.prevPoints, l = s.totalLength;
      return u && o && o.length && (!c && l > 0 || !ra(c, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, u = i.points, s = i.className, c = i.xAxis, l = i.yAxis, f = i.top, d = i.left, h = i.width, y = i.height, v = i.isAnimationActive, p = i.id;
      if (a || !u || !u.length)
        return null;
      var g = this.state.isAnimationFinished, w = u.length === 1, b = he("recharts-line", s), _ = c && c.allowDataOverflow, m = l && l.allowDataOverflow, x = _ || m, O = ue(p) ? this.id : p, P = (n = ce(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, $ = P.r, I = $ === void 0 ? 3 : $, T = P.strokeWidth, C = T === void 0 ? 2 : T, R = Bw(o) ? o : {}, N = R.clipDot, k = N === void 0 ? !0 : N, L = I * 2 + C;
      return /* @__PURE__ */ E.createElement(Ee, {
        className: b
      }, _ || m ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(O)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: _ ? d : d - h / 2,
        y: m ? f : f - y / 2,
        width: _ ? h : h * 2,
        height: m ? y : y * 2
      })), !k && /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-dots-".concat(O)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: d - L / 2,
        y: f - L / 2,
        width: h + L,
        height: y + L
      }))) : null, !w && this.renderCurve(x, O), this.renderErrorBar(x, O), (w || o) && this.renderDots(x, k, O), (!v || g) && Qt.renderCallByParent(this.props, u));
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
      for (var a = n.length % 2 !== 0 ? [].concat(Yr(n), [0]) : n, o = [], u = 0; u < i; ++u)
        o = [].concat(Yr(o), Yr(a));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ E.isValidElement(n))
        a = /* @__PURE__ */ E.cloneElement(n, i);
      else if (se(n))
        a = n(i);
      else {
        var o = i.key, u = Tp(i, gz), s = he("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ E.createElement(vl, li({
          key: o
        }, u, {
          className: s
        }));
      }
      return a;
    }
  }]);
}(nr);
Ct(Vt, "displayName", "Line");
Ct(Vt, "defaultProps", {
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
  isAnimationActive: !Lr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Ct(Vt, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, u = e.bandSize, s = e.displayedData, c = e.offset, l = t.layout, f = s.map(function(d, h) {
    var y = Xe(d, o);
    return l === "horizontal" ? {
      x: Xa({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: d,
        index: h
      }),
      y: ue(y) ? null : n.scale(y),
      value: y,
      payload: d
    } : {
      x: ue(y) ? null : r.scale(y),
      y: Xa({
        axis: n,
        ticks: a,
        bandSize: u,
        entry: d,
        index: h
      }),
      value: y,
      payload: d
    };
  });
  return ft({
    points: f,
    layout: l
  }, c);
});
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e);
}
function Cz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ag(n.key), n);
  }
}
function Iz(e, t, r) {
  return t && Mz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kz(e, t, r) {
  return t = wo(t), Nz(e, ng() ? Reflect.construct(t, r || [], wo(e).constructor) : t.apply(e, r));
}
function Nz(e, t) {
  if (t && (_n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Dz(e);
}
function Dz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ng() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ng = function() {
    return !!e;
  })();
}
function wo(e) {
  return wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wo(e);
}
function Rz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cc(e, t);
}
function cc(e, t) {
  return cc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, cc(e, t);
}
function ig(e, t, r) {
  return t = ag(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ag(e) {
  var t = Lz(e, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function Lz(e, t) {
  if (_n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nu = /* @__PURE__ */ function(e) {
  function t() {
    return Cz(this, t), kz(this, t, arguments);
  }
  return Rz(t, e), Iz(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(Ot.Component);
ig(nu, "displayName", "ZAxis");
ig(nu, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Bz = ["option", "isActive"];
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fi.apply(this, arguments);
}
function Fz(e, t) {
  if (e == null) return {};
  var r = zz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Wz(e) {
  var t = e.option, r = e.isActive, n = Fz(e, Bz);
  return typeof t == "string" ? /* @__PURE__ */ Ot.createElement(Xs, fi({
    option: /* @__PURE__ */ Ot.createElement(Do, fi({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ Ot.createElement(Xs, fi({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, n));
}
function On(e) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, di.apply(this, arguments);
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
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mp(Object(r), !0).forEach(function(n) {
      dr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Uz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ip(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ug(n.key), n);
  }
}
function Kz(e, t, r) {
  return t && Ip(e.prototype, t), r && Ip(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qz(e, t, r) {
  return t = _o(t), Vz(e, og() ? Reflect.construct(t, r || [], _o(e).constructor) : t.apply(e, r));
}
function Vz(e, t) {
  if (t && (On(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gz(e);
}
function Gz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function og() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (og = function() {
    return !!e;
  })();
}
function _o(e) {
  return _o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _o(e);
}
function Hz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lc(e, t);
}
function lc(e, t) {
  return lc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, lc(e, t);
}
function dr(e, t, r) {
  return t = ug(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ug(e) {
  var t = Yz(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function Yz(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Wn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Uz(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = qz(this, t, [].concat(i)), dr(r, "state", {
      isAnimationFinished: !1
    }), dr(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), dr(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), dr(r, "id", In("recharts-scatter-")), r;
  }
  return Hz(t, e), Kz(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.activeShape, s = a.activeIndex, c = ce(this.props, !1);
      return n.map(function(l, f) {
        var d = s === f, h = d ? u : o, y = xt(xt({}, c), l);
        return /* @__PURE__ */ E.createElement(Ee, di({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f)
        }, hi(i.props, l, f), {
          role: "img"
        }), /* @__PURE__ */ E.createElement(Wz, di({
          option: h,
          isActive: d,
          key: "symbol-".concat(f)
        }, y)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, u = i.animationBegin, s = i.animationDuration, c = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ E.createElement(Wt, {
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
        key: "pie-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var h = d.t, y = a.map(function(v, p) {
          var g = f && f[p];
          if (g) {
            var w = nt(g.cx, v.cx), b = nt(g.cy, v.cy), _ = nt(g.size, v.size);
            return xt(xt({}, v), {}, {
              cx: w(h),
              cy: b(h),
              size: _(h)
            });
          }
          var m = nt(0, v.size);
          return xt(xt({}, v), {}, {
            size: m(h)
          });
        });
        return /* @__PURE__ */ E.createElement(Ee, null, n.renderSymbolsStatically(y));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, a = n.isAnimationActive, o = this.state.prevPoints;
      return a && i && i.length && (!o || !ra(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, a = i.points, o = i.xAxis, u = i.yAxis, s = i.children, c = st(s, Fn);
      return c ? c.map(function(l, f) {
        var d = l.props, h = d.direction, y = d.dataKey;
        return /* @__PURE__ */ E.cloneElement(l, {
          key: "".concat(h, "-").concat(y, "-").concat(a[f]),
          data: a,
          xAxis: o,
          yAxis: u,
          layout: h === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(p, g) {
            return {
              x: p.cx,
              y: p.cy,
              value: h === "x" ? +p.node.x : +p.node.y,
              errorVal: Xe(p, g)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, a = n.line, o = n.lineType, u = n.lineJointType, s = ce(this.props, !1), c = ce(a, !1), l, f;
      if (o === "joint")
        l = i.map(function(b) {
          return {
            x: b.cx,
            y: b.cy
          };
        });
      else if (o === "fitting") {
        var d = Tw(i), h = d.xmin, y = d.xmax, v = d.a, p = d.b, g = function(_) {
          return v * _ + p;
        };
        l = [{
          x: h,
          y: g(h)
        }, {
          x: y,
          y: g(y)
        }];
      }
      var w = xt(xt(xt({}, s), {}, {
        fill: "none",
        stroke: s && s.fill
      }, c), {}, {
        points: l
      });
      return /* @__PURE__ */ E.isValidElement(a) ? f = /* @__PURE__ */ E.cloneElement(a, w) : se(a) ? f = a(w) : f = /* @__PURE__ */ E.createElement(eo, di({}, w, {
        type: u
      })), /* @__PURE__ */ E.createElement(Ee, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.points, o = n.line, u = n.className, s = n.xAxis, c = n.yAxis, l = n.left, f = n.top, d = n.width, h = n.height, y = n.id, v = n.isAnimationActive;
      if (i || !a || !a.length)
        return null;
      var p = this.state.isAnimationFinished, g = he("recharts-scatter", u), w = s && s.allowDataOverflow, b = c && c.allowDataOverflow, _ = w || b, m = ue(y) ? this.id : y;
      return /* @__PURE__ */ E.createElement(Ee, {
        className: g,
        clipPath: _ ? "url(#clipPath-".concat(m, ")") : null
      }, w || b ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: w ? l : l - d / 2,
        y: b ? f : f - h / 2,
        width: w ? d : d * 2,
        height: b ? h : h * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ E.createElement(Ee, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || p) && Qt.renderCallByParent(this.props, a));
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
}(nr);
dr(Wn, "displayName", "Scatter");
dr(Wn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Lr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
dr(Wn, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, u = e.yAxisTicks, s = e.offset, c = i.props.tooltipType, l = st(i.props.children, Zi), f = ue(t.dataKey) ? i.props.dataKey : t.dataKey, d = ue(r.dataKey) ? i.props.dataKey : r.dataKey, h = n && n.dataKey, y = n ? n.range : nu.defaultProps.range, v = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, w = a.map(function(b, _) {
    var m = Xe(b, f), x = Xe(b, d), O = !ue(h) && Xe(b, h) || "-", P = [{
      name: ue(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: m,
      payload: b,
      dataKey: f,
      type: c
    }, {
      name: ue(r.dataKey) ? i.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: b,
      dataKey: d,
      type: c
    }];
    O !== "-" && P.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: O,
      payload: b,
      dataKey: h,
      type: c
    });
    var $ = Xa({
      axis: t,
      ticks: o,
      bandSize: p,
      entry: b,
      index: _,
      dataKey: f
    }), I = Xa({
      axis: r,
      ticks: u,
      bandSize: g,
      entry: b,
      index: _,
      dataKey: d
    }), T = O !== "-" ? n.scale(O) : v, C = Math.sqrt(Math.max(T, 0) / Math.PI);
    return xt(xt({}, b), {}, {
      cx: $,
      cy: I,
      x: $ - C,
      y: I - C,
      xAxis: t,
      yAxis: r,
      zAxis: n,
      width: 2 * C,
      height: 2 * C,
      size: T,
      node: {
        x: m,
        y: x,
        z: O
      },
      tooltipPayload: P,
      tooltipPosition: {
        x: $,
        y: I
      },
      payload: b
    }, l && l[_] && l[_].props);
  });
  return xt({
    points: w
  }, s);
});
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e);
}
function Xz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zz(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lg(n.key), n);
  }
}
function Jz(e, t, r) {
  return t && Zz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Qz(e, t, r) {
  return t = Oo(t), eW(e, sg() ? Reflect.construct(t, r || [], Oo(e).constructor) : t.apply(e, r));
}
function eW(e, t) {
  if (t && (Sn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tW(e);
}
function tW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sg = function() {
    return !!e;
  })();
}
function Oo(e) {
  return Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oo(e);
}
function rW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fc(e, t);
}
function fc(e, t) {
  return fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fc(e, t);
}
function cg(e, t, r) {
  return t = lg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lg(e) {
  var t = nW(e, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function nW(e, t) {
  if (Sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function dc() {
  return dc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dc.apply(this, arguments);
}
function iW(e) {
  var t = e.xAxisId, r = xl(), n = wl(), i = Um(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ Ot.createElement(zn, dc({}, i, {
      className: he("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return Yt(o, !0);
      }
    }))
  );
}
var et = /* @__PURE__ */ function(e) {
  function t() {
    return Xz(this, t), Qz(this, t, arguments);
  }
  return rW(t, e), Jz(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ Ot.createElement(iW, this.props);
    }
  }]);
}(Ot.Component);
cg(et, "displayName", "XAxis");
cg(et, "defaultProps", {
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
function An(e) {
  "@babel/helpers - typeof";
  return An = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, An(e);
}
function aW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hg(n.key), n);
  }
}
function uW(e, t, r) {
  return t && oW(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function sW(e, t, r) {
  return t = So(t), cW(e, fg() ? Reflect.construct(t, r || [], So(e).constructor) : t.apply(e, r));
}
function cW(e, t) {
  if (t && (An(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lW(e);
}
function lW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fg = function() {
    return !!e;
  })();
}
function So(e) {
  return So = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, So(e);
}
function fW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hc(e, t);
}
function hc(e, t) {
  return hc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, hc(e, t);
}
function dg(e, t, r) {
  return t = hg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hg(e) {
  var t = dW(e, "string");
  return An(t) == "symbol" ? t : t + "";
}
function dW(e, t) {
  if (An(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (An(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pc.apply(this, arguments);
}
var hW = function(t) {
  var r = t.yAxisId, n = xl(), i = wl(), a = Km(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ Ot.createElement(zn, pc({}, a, {
      className: he("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return Yt(u, !0);
      }
    }))
  );
}, tt = /* @__PURE__ */ function(e) {
  function t() {
    return aW(this, t), sW(this, t, arguments);
  }
  return fW(t, e), uW(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ Ot.createElement(hW, this.props);
    }
  }]);
}(Ot.Component);
dg(tt, "displayName", "YAxis");
dg(tt, "defaultProps", {
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
function kp(e) {
  return mW(e) || yW(e) || vW(e) || pW();
}
function pW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vW(e, t) {
  if (e) {
    if (typeof e == "string") return vc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vc(e, t);
  }
}
function yW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mW(e) {
  if (Array.isArray(e)) return vc(e);
}
function vc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var yc = function(t, r, n, i, a) {
  var o = st(t, Ol), u = st(t, eu), s = [].concat(kp(o), kp(u)), c = st(t, ru), l = "".concat(i, "Id"), f = i[0], d = r;
  if (s.length && (d = s.reduce(function(v, p) {
    if (p.props[l] === n && Ft(p.props, "extendDomain") && Y(p.props[f])) {
      var g = p.props[f];
      return [Math.min(v[0], g), Math.max(v[1], g)];
    }
    return v;
  }, d)), c.length) {
    var h = "".concat(f, "1"), y = "".concat(f, "2");
    d = c.reduce(function(v, p) {
      if (p.props[l] === n && Ft(p.props, "extendDomain") && Y(p.props[h]) && Y(p.props[y])) {
        var g = p.props[h], w = p.props[y];
        return [Math.min(v[0], g, w), Math.max(v[1], g, w)];
      }
      return v;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(v, p) {
    return Y(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v;
  }, d)), d;
}, pg = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(s, c, l) {
    this.fn = s, this.context = c, this.once = l || !1;
  }
  function a(s, c, l, f, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var h = new i(l, f || s, d), y = r ? r + c : c;
    return s._events[y] ? s._events[y].fn ? s._events[y] = [s._events[y], h] : s._events[y].push(h) : (s._events[y] = h, s._eventsCount++), s;
  }
  function o(s, c) {
    --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var c = [], l, f;
    if (this._eventsCount === 0) return c;
    for (f in l = this._events)
      t.call(l, f) && c.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
  }, u.prototype.listeners = function(c) {
    var l = r ? r + c : c, f = this._events[l];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, h = f.length, y = new Array(h); d < h; d++)
      y[d] = f[d].fn;
    return y;
  }, u.prototype.listenerCount = function(c) {
    var l = r ? r + c : c, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, u.prototype.emit = function(c, l, f, d, h, y) {
    var v = r ? r + c : c;
    if (!this._events[v]) return !1;
    var p = this._events[v], g = arguments.length, w, b;
    if (p.fn) {
      switch (p.once && this.removeListener(c, p.fn, void 0, !0), g) {
        case 1:
          return p.fn.call(p.context), !0;
        case 2:
          return p.fn.call(p.context, l), !0;
        case 3:
          return p.fn.call(p.context, l, f), !0;
        case 4:
          return p.fn.call(p.context, l, f, d), !0;
        case 5:
          return p.fn.call(p.context, l, f, d, h), !0;
        case 6:
          return p.fn.call(p.context, l, f, d, h, y), !0;
      }
      for (b = 1, w = new Array(g - 1); b < g; b++)
        w[b - 1] = arguments[b];
      p.fn.apply(p.context, w);
    } else {
      var _ = p.length, m;
      for (b = 0; b < _; b++)
        switch (p[b].once && this.removeListener(c, p[b].fn, void 0, !0), g) {
          case 1:
            p[b].fn.call(p[b].context);
            break;
          case 2:
            p[b].fn.call(p[b].context, l);
            break;
          case 3:
            p[b].fn.call(p[b].context, l, f);
            break;
          case 4:
            p[b].fn.call(p[b].context, l, f, d);
            break;
          default:
            if (!w) for (m = 1, w = new Array(g - 1); m < g; m++)
              w[m - 1] = arguments[m];
            p[b].fn.apply(p[b].context, w);
        }
    }
    return !0;
  }, u.prototype.on = function(c, l, f) {
    return a(this, c, l, f, !1);
  }, u.prototype.once = function(c, l, f) {
    return a(this, c, l, f, !0);
  }, u.prototype.removeListener = function(c, l, f, d) {
    var h = r ? r + c : c;
    if (!this._events[h]) return this;
    if (!l)
      return o(this, h), this;
    var y = this._events[h];
    if (y.fn)
      y.fn === l && (!d || y.once) && (!f || y.context === f) && o(this, h);
    else {
      for (var v = 0, p = [], g = y.length; v < g; v++)
        (y[v].fn !== l || d && !y[v].once || f && y[v].context !== f) && p.push(y[v]);
      p.length ? this._events[h] = p.length === 1 ? p[0] : p : o(this, h);
    }
    return this;
  }, u.prototype.removeAllListeners = function(c) {
    var l;
    return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
})(pg);
var gW = pg.exports;
const bW = /* @__PURE__ */ $e(gW);
var zu = new bW(), Wu = "recharts.syncMouseEvents";
function Vi(e) {
  "@babel/helpers - typeof";
  return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vi(e);
}
function xW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vg(n.key), n);
  }
}
function _W(e, t, r) {
  return t && wW(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uu(e, t, r) {
  return t = vg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vg(e) {
  var t = OW(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function OW(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var SW = /* @__PURE__ */ function() {
  function e() {
    xW(this, e), Uu(this, "activeIndex", 0), Uu(this, "coordinateList", []), Uu(this, "layout", "horizontal");
  }
  return _W(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, l = r.offset, f = l === void 0 ? null : l, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = a + s + c, d = o + this.offset.top + u / 2 + l;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function AW(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && Y(n) && Y(i))
      return !0;
  }
  return !1;
}
function PW(e, t, r, n) {
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
function yg(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = Ye(t, r, n, i), u = Ye(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function EW(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, f = t.angle, d = Ye(u, s, c, f), h = Ye(u, s, l, f);
      n = d.x, i = d.y, a = h.x, o = h.y;
    } else
      return yg(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function Gi(e) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e);
}
function Np(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Np(Object(r), !0).forEach(function(n) {
      $W(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $W(e, t, r) {
  return t = TW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TW(e) {
  var t = jW(e, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function jW(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CW(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, u = e.activePayload, s = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !a || !o || d !== "ScatterChart" && i !== "axis")
    return null;
  var y, v = eo;
  if (d === "ScatterChart")
    y = o, v = hL;
  else if (d === "BarChart")
    y = PW(f, o, s, l), v = pl;
  else if (f === "radial") {
    var p = yg(o), g = p.cx, w = p.cy, b = p.radius, _ = p.startAngle, m = p.endAngle;
    y = {
      cx: g,
      cy: w,
      startAngle: _,
      endAngle: m,
      innerRadius: b,
      outerRadius: b
    }, v = vm;
  } else
    y = {
      points: EW(f, o, s)
    }, v = eo;
  var x = ga(ga(ga(ga({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), y), ce(h, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: he("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ Lt(h) ? /* @__PURE__ */ ze(h, x) : /* @__PURE__ */ qp(v, x);
}
var MW = ["item"], IW = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jr.apply(this, arguments);
}
function Dp(e, t) {
  return DW(e) || NW(e, t) || gg(e, t) || kW();
}
function kW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (l) {
      c = !0, i = l;
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
function DW(e) {
  if (Array.isArray(e)) return e;
}
function Rp(e, t) {
  if (e == null) return {};
  var r = RW(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function LW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bg(n.key), n);
  }
}
function FW(e, t, r) {
  return t && BW(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zW(e, t, r) {
  return t = Ao(t), WW(e, mg() ? Reflect.construct(t, r || [], Ao(e).constructor) : t.apply(e, r));
}
function WW(e, t) {
  if (t && (Pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UW(e);
}
function UW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mg = function() {
    return !!e;
  })();
}
function Ao(e) {
  return Ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ao(e);
}
function KW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mc(e, t);
}
function mc(e, t) {
  return mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, mc(e, t);
}
function En(e) {
  return GW(e) || VW(e) || gg(e) || qW();
}
function qW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gg(e, t) {
  if (e) {
    if (typeof e == "string") return gc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gc(e, t);
  }
}
function VW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GW(e) {
  if (Array.isArray(e)) return gc(e);
}
function gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lp(Object(r), !0).forEach(function(n) {
      ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ae(e, t, r) {
  return t = bg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bg(e) {
  var t = HW(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function HW(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var YW = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, XW = {
  width: "100%",
  height: "100%"
}, xg = {
  x: 0,
  y: 0
};
function ba(e) {
  return e;
}
var ZW = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, JW = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
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
      return D(D(D({}, i), Ye(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = a.coordinate, c = i.angle;
    return D(D(D({}, i), Ye(i.cx, i.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return xg;
}, iu = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(En(u), En(c)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && Y(i) && Y(a) ? t.slice(i, a + 1) : [];
};
function wg(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var bc = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = iu(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(s, c) {
    var l, f = (l = c.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = f === void 0 ? u : f;
      d = wa(h, o.dataKey, i);
    } else
      d = f && f[n] || u[n];
    return d ? [].concat(En(s), [dm(c, d)]) : s;
  }, []);
}, Bp = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = ZW(a, n), u = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, l = UN(o, u, c, s);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = bc(t, r, l, f), h = JW(n, u, l, a);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: h
    };
  }
  return null;
}, QW = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, h = cm(l, a);
  return n.reduce(function(y, v) {
    var p, g = v.type.defaultProps !== void 0 ? D(D({}, v.type.defaultProps), v.props) : v.props, w = g.type, b = g.dataKey, _ = g.allowDataOverflow, m = g.allowDuplicatedCategory, x = g.scale, O = g.ticks, P = g.includeHidden, $ = g[o];
    if (y[$])
      return y;
    var I = iu(t.data, {
      graphicalItems: i.filter(function(z) {
        var G, X = o in z.props ? z.props[o] : (G = z.type.defaultProps) === null || G === void 0 ? void 0 : G[o];
        return X === $;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), T = I.length, C, R, N;
    AW(g.domain, _, w) && (C = Is(g.domain, null, _), h && (w === "number" || x !== "auto") && (N = si(I, b, "category")));
    var k = wg(w);
    if (!C || C.length === 0) {
      var L, F = (L = g.domain) !== null && L !== void 0 ? L : k;
      if (b) {
        if (C = si(I, b, w), w === "category" && h) {
          var K = $w(C);
          m && K ? (R = C, C = so(0, T)) : m || (C = oh(F, C, v).reduce(function(z, G) {
            return z.indexOf(G) >= 0 ? z : [].concat(En(z), [G]);
          }, []));
        } else if (w === "category")
          m ? C = C.filter(function(z) {
            return z !== "" && !ue(z);
          }) : C = oh(F, C, v).reduce(function(z, G) {
            return z.indexOf(G) >= 0 || G === "" || ue(G) ? z : [].concat(En(z), [G]);
          }, []);
        else if (w === "number") {
          var V = HN(I, i.filter(function(z) {
            var G, X, te = o in z.props ? z.props[o] : (G = z.type.defaultProps) === null || G === void 0 ? void 0 : G[o], re = "hide" in z.props ? z.props.hide : (X = z.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return te === $ && (P || !re);
          }), b, a, l);
          V && (C = V);
        }
        h && (w === "number" || x !== "auto") && (N = si(I, b, "category"));
      } else h ? C = so(0, T) : u && u[$] && u[$].hasStack && w === "number" ? C = d === "expand" ? [0, 1] : fm(u[$].stackGroups, s, c) : C = sm(I, i.filter(function(z) {
        var G = o in z.props ? z.props[o] : z.type.defaultProps[o], X = "hide" in z.props ? z.props.hide : z.type.defaultProps.hide;
        return G === $ && (P || !X);
      }), w, l, !0);
      if (w === "number")
        C = yc(f, C, $, a, O), F && (C = Is(F, C, _));
      else if (w === "category" && F) {
        var M = F, B = C.every(function(z) {
          return M.indexOf(z) >= 0;
        });
        B && (C = M);
      }
    }
    return D(D({}, y), {}, ae({}, $, D(D({}, g), {}, {
      axisType: a,
      domain: C,
      categoricalDomain: N,
      duplicateDomain: R,
      originalDomain: (p = g.domain) !== null && p !== void 0 ? p : k,
      isCategorical: h,
      layout: l
    })));
  }, {});
}, eU = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = iu(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), h = d.length, y = cm(l, a), v = -1;
  return n.reduce(function(p, g) {
    var w = g.type.defaultProps !== void 0 ? D(D({}, g.type.defaultProps), g.props) : g.props, b = w[o], _ = wg("number");
    if (!p[b]) {
      v++;
      var m;
      return y ? m = so(0, h) : u && u[b] && u[b].hasStack ? (m = fm(u[b].stackGroups, s, c), m = yc(f, m, b, a)) : (m = Is(_, sm(d, n.filter(function(x) {
        var O, P, $ = o in x.props ? x.props[o] : (O = x.type.defaultProps) === null || O === void 0 ? void 0 : O[o], I = "hide" in x.props ? x.props.hide : (P = x.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return $ === b && !I;
      }), "number", l), i.defaultProps.allowDataOverflow), m = yc(f, m, b, a)), D(D({}, p), {}, ae({}, b, D(D({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: St(YW, "".concat(a, ".").concat(v % 2), null),
        domain: m,
        originalDomain: _,
        isCategorical: y,
        layout: l
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, tU = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), d = st(l, a), h = {};
  return d && d.length ? h = QW(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (h = eU(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), h;
}, rU = function(t) {
  var r = lr(t), n = Yt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Fc(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Za(r, n)
  };
}, Fp = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = ht(r, pn), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, nU = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Xt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, zp = function(t) {
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
}, iU = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, s = u === void 0 ? {} : u, c = n.width, l = n.height, f = n.children, d = n.margin || {}, h = ht(f, pn), y = ht(f, vt), v = Object.keys(s).reduce(function(m, x) {
    var O = s[x], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, m), {}, ae({}, P, m[P] + O.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), p = Object.keys(o).reduce(function(m, x) {
    var O = o[x], P = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, m), {}, ae({}, P, St(m, "".concat(P)) + O.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), g = D(D({}, p), v), w = g.bottom;
  h && (g.bottom += h.props.height || pn.defaultProps.height), y && r && (g = VN(g, i, n, r));
  var b = c - g.left - g.right, _ = l - g.top - g.bottom;
  return D(D({
    brushBottom: w
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(b, 0),
    height: Math.max(_, 0)
  });
}, aU = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Pl = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(g, w) {
    var b = w.graphicalItems, _ = w.stackGroups, m = w.offset, x = w.updateId, O = w.dataStartIndex, P = w.dataEndIndex, $ = g.barSize, I = g.layout, T = g.barGap, C = g.barCategoryGap, R = g.maxBarSize, N = zp(I), k = N.numericAxisName, L = N.cateAxisName, F = nU(b), K = [];
    return b.forEach(function(V, M) {
      var B = iu(g.data, {
        graphicalItems: [V],
        dataStartIndex: O,
        dataEndIndex: P
      }), z = V.type.defaultProps !== void 0 ? D(D({}, V.type.defaultProps), V.props) : V.props, G = z.dataKey, X = z.maxBarSize, te = z["".concat(k, "Id")], re = z["".concat(L, "Id")], ie = {}, ne = s.reduce(function(Kt, lt) {
        var Un, Kn, Ur = w["".concat(lt.axisType, "Map")], qn = z["".concat(lt.axisType, "Id")];
        Ur && Ur[qn] || lt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? ut(!1, "Specifying a(n) ".concat(lt.axisType, "Id requires a corresponding ").concat(
          lt.axisType,
          "Id on the targeted graphical component "
        ).concat((Un = V == null || (Kn = V.type) === null || Kn === void 0 ? void 0 : Kn.displayName) !== null && Un !== void 0 ? Un : "")) : ut());
        var Vn = Ur[qn];
        return D(D({}, Kt), {}, ae(ae({}, lt.axisType, Vn), "".concat(lt.axisType, "Ticks"), Yt(Vn)));
      }, ie), W = ne[L], H = ne["".concat(L, "Ticks")], ee = _ && _[te] && _[te].hasStack && oD(V, _[te].stackGroups), j = Xt(V.type).indexOf("Bar") >= 0, le = Za(W, H), q = [], ve = F && KN({
        barSize: $,
        stackGroups: _,
        totalSize: aU(ne, L)
      });
      if (j) {
        var ye, ke, Et = ue(X) ? R : X, $t = (ye = (ke = Za(W, H, !0)) !== null && ke !== void 0 ? ke : Et) !== null && ye !== void 0 ? ye : 0;
        q = qN({
          barGap: T,
          barCategoryGap: C,
          bandSize: $t !== le ? $t : le,
          sizeList: ve[re],
          maxBarSize: Et
        }), $t !== le && (q = q.map(function(Kt) {
          return D(D({}, Kt), {}, {
            position: D(D({}, Kt.position), {}, {
              offset: Kt.position.offset - $t / 2
            })
          });
        }));
      }
      var Wr = V && V.type && V.type.getComposedData;
      Wr && K.push({
        props: D(D({}, Wr(D(D({}, ne), {}, {
          displayedData: B,
          props: g,
          dataKey: G,
          item: V,
          bandSize: le,
          barPosition: q,
          offset: m,
          stackedData: ee,
          layout: I,
          dataStartIndex: O,
          dataEndIndex: P
        }))), {}, ae(ae(ae({
          key: V.key || "item-".concat(M)
        }, k, ne[k]), L, ne[L]), "animationId", x)),
        childIndex: Ww(V, g.children),
        item: V
      });
    }), K;
  }, h = function(g, w) {
    var b = g.props, _ = g.dataStartIndex, m = g.dataEndIndex, x = g.updateId;
    if (!Ql({
      props: b
    }))
      return null;
    var O = b.children, P = b.layout, $ = b.stackOffset, I = b.data, T = b.reverseStackOrder, C = zp(P), R = C.numericAxisName, N = C.cateAxisName, k = st(O, n), L = nD(I, k, "".concat(R, "Id"), "".concat(N, "Id"), $, T), F = s.reduce(function(z, G) {
      var X = "".concat(G.axisType, "Map");
      return D(D({}, z), {}, ae({}, X, tU(b, D(D({}, G), {}, {
        graphicalItems: k,
        stackGroups: G.axisType === R && L,
        dataStartIndex: _,
        dataEndIndex: m
      }))));
    }, {}), K = iU(D(D({}, F), {}, {
      props: b,
      graphicalItems: k
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(F).forEach(function(z) {
      F[z] = l(b, F[z], K, z.replace("Map", ""), r);
    });
    var V = F["".concat(N, "Map")], M = rU(V), B = d(b, D(D({}, F), {}, {
      dataStartIndex: _,
      dataEndIndex: m,
      updateId: x,
      graphicalItems: k,
      stackGroups: L,
      offset: K
    }));
    return D(D({
      formattedGraphicalItems: B,
      graphicalItems: k,
      offset: K,
      stackGroups: L
    }, M), F);
  }, y = /* @__PURE__ */ function(p) {
    function g(w) {
      var b, _, m;
      return LW(this, g), m = zW(this, g, [w]), ae(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ae(m, "accessibilityManager", new SW()), ae(m, "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var O = m.state, P = O.dataStartIndex, $ = O.dataEndIndex, I = O.updateId;
          m.setState(D({
            legendBBox: x
          }, h({
            props: m.props,
            dataStartIndex: P,
            dataEndIndex: $,
            updateId: I
          }, D(D({}, m.state), {}, {
            legendBBox: x
          }))));
        }
      }), ae(m, "handleReceiveSyncEvent", function(x, O, P) {
        if (m.props.syncId === x) {
          if (P === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(O);
        }
      }), ae(m, "handleBrushChange", function(x) {
        var O = x.startIndex, P = x.endIndex;
        if (O !== m.state.dataStartIndex || P !== m.state.dataEndIndex) {
          var $ = m.state.updateId;
          m.setState(function() {
            return D({
              dataStartIndex: O,
              dataEndIndex: P
            }, h({
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
      }), ae(m, "handleMouseEnter", function(x) {
        var O = m.getMouseInfo(x);
        if (O) {
          var P = D(D({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(P), m.triggerSyncEvent(P);
          var $ = m.props.onMouseEnter;
          se($) && $(P, x);
        }
      }), ae(m, "triggeredAfterMouseMove", function(x) {
        var O = m.getMouseInfo(x), P = O ? D(D({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(P), m.triggerSyncEvent(P);
        var $ = m.props.onMouseMove;
        se($) && $(P, x);
      }), ae(m, "handleItemMouseEnter", function(x) {
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
      }), ae(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), ae(m, "handleMouseMove", function(x) {
        x.persist(), m.throttleTriggeredAfterMouseMove(x);
      }), ae(m, "handleMouseLeave", function(x) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        m.setState(O), m.triggerSyncEvent(O);
        var P = m.props.onMouseLeave;
        se(P) && P(O, x);
      }), ae(m, "handleOuterEvent", function(x) {
        var O = zw(x), P = St(m.props, "".concat(O));
        if (O && se(P)) {
          var $, I;
          /.*touch.*/i.test(O) ? I = m.getMouseInfo(x.changedTouches[0]) : I = m.getMouseInfo(x), P(($ = I) !== null && $ !== void 0 ? $ : {}, x);
        }
      }), ae(m, "handleClick", function(x) {
        var O = m.getMouseInfo(x);
        if (O) {
          var P = D(D({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(P), m.triggerSyncEvent(P);
          var $ = m.props.onClick;
          se($) && $(P, x);
        }
      }), ae(m, "handleMouseDown", function(x) {
        var O = m.props.onMouseDown;
        if (se(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), ae(m, "handleMouseUp", function(x) {
        var O = m.props.onMouseUp;
        if (se(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), ae(m, "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), ae(m, "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseDown(x.changedTouches[0]);
      }), ae(m, "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseUp(x.changedTouches[0]);
      }), ae(m, "handleDoubleClick", function(x) {
        var O = m.props.onDoubleClick;
        if (se(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), ae(m, "handleContextMenu", function(x) {
        var O = m.props.onContextMenu;
        if (se(O)) {
          var P = m.getMouseInfo(x);
          O(P, x);
        }
      }), ae(m, "triggerSyncEvent", function(x) {
        m.props.syncId !== void 0 && zu.emit(Wu, m.props.syncId, x, m.eventEmitterSymbol);
      }), ae(m, "applySyncEvent", function(x) {
        var O = m.props, P = O.layout, $ = O.syncMethod, I = m.state.updateId, T = x.dataStartIndex, C = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          m.setState(D({
            dataStartIndex: T,
            dataEndIndex: C
          }, h({
            props: m.props,
            dataStartIndex: T,
            dataEndIndex: C,
            updateId: I
          }, m.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var R = x.chartX, N = x.chartY, k = x.activeTooltipIndex, L = m.state, F = L.offset, K = L.tooltipTicks;
          if (!F)
            return;
          if (typeof $ == "function")
            k = $(K, x);
          else if ($ === "value") {
            k = -1;
            for (var V = 0; V < K.length; V++)
              if (K[V].value === x.activeLabel) {
                k = V;
                break;
              }
          }
          var M = D(D({}, F), {}, {
            x: F.left,
            y: F.top
          }), B = Math.min(R, M.x + M.width), z = Math.min(N, M.y + M.height), G = K[k] && K[k].value, X = bc(m.state, m.props.data, k), te = K[k] ? {
            x: P === "horizontal" ? K[k].coordinate : B,
            y: P === "horizontal" ? z : K[k].coordinate
          } : xg;
          m.setState(D(D({}, x), {}, {
            activeLabel: G,
            activeCoordinate: te,
            activePayload: X,
            activeTooltipIndex: k
          }));
        } else
          m.setState(x);
      }), ae(m, "renderCursor", function(x) {
        var O, P = m.state, $ = P.isTooltipActive, I = P.activeCoordinate, T = P.activePayload, C = P.offset, R = P.activeTooltipIndex, N = P.tooltipAxisBandSize, k = m.getTooltipEventType(), L = (O = x.props.active) !== null && O !== void 0 ? O : $, F = m.props.layout, K = x.key || "_recharts-cursor";
        return /* @__PURE__ */ E.createElement(CW, {
          key: K,
          activeCoordinate: I,
          activePayload: T,
          activeTooltipIndex: R,
          chartName: r,
          element: x,
          isActive: L,
          layout: F,
          offset: C,
          tooltipAxisBandSize: N,
          tooltipEventType: k
        });
      }), ae(m, "renderPolarAxis", function(x, O, P) {
        var $ = St(x, "type.axisType"), I = St(m.state, "".concat($, "Map")), T = x.type.defaultProps, C = T !== void 0 ? D(D({}, T), x.props) : x.props, R = I && I[C["".concat($, "Id")]];
        return /* @__PURE__ */ ze(x, D(D({}, R), {}, {
          className: he($, R.className),
          key: x.key || "".concat(O, "-").concat(P),
          ticks: Yt(R, !0)
        }));
      }), ae(m, "renderPolarGrid", function(x) {
        var O = x.props, P = O.radialLines, $ = O.polarAngles, I = O.polarRadius, T = m.state, C = T.radiusAxisMap, R = T.angleAxisMap, N = lr(C), k = lr(R), L = k.cx, F = k.cy, K = k.innerRadius, V = k.outerRadius;
        return /* @__PURE__ */ ze(x, {
          polarAngles: Array.isArray($) ? $ : Yt(k, !0).map(function(M) {
            return M.coordinate;
          }),
          polarRadius: Array.isArray(I) ? I : Yt(N, !0).map(function(M) {
            return M.coordinate;
          }),
          cx: L,
          cy: F,
          innerRadius: K,
          outerRadius: V,
          key: x.key || "polar-grid",
          radialLines: P
        });
      }), ae(m, "renderLegend", function() {
        var x = m.state.formattedGraphicalItems, O = m.props, P = O.children, $ = O.width, I = O.height, T = m.props.margin || {}, C = $ - (T.left || 0) - (T.right || 0), R = om({
          children: P,
          formattedGraphicalItems: x,
          legendWidth: C,
          legendContent: c
        });
        if (!R)
          return null;
        var N = R.item, k = Rp(R, MW);
        return /* @__PURE__ */ ze(N, D(D({}, k), {}, {
          chartWidth: $,
          chartHeight: I,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), ae(m, "renderTooltip", function() {
        var x, O = m.props, P = O.children, $ = O.accessibilityLayer, I = ht(P, Re);
        if (!I)
          return null;
        var T = m.state, C = T.isTooltipActive, R = T.activeCoordinate, N = T.activePayload, k = T.activeLabel, L = T.offset, F = (x = I.props.active) !== null && x !== void 0 ? x : C;
        return /* @__PURE__ */ ze(I, {
          viewBox: D(D({}, L), {}, {
            x: L.left,
            y: L.top
          }),
          active: F,
          label: k,
          payload: F ? N : [],
          coordinate: R,
          accessibilityLayer: $
        });
      }), ae(m, "renderBrush", function(x) {
        var O = m.props, P = O.margin, $ = O.data, I = m.state, T = I.offset, C = I.dataStartIndex, R = I.dataEndIndex, N = I.updateId;
        return /* @__PURE__ */ ze(x, {
          key: x.key || "_recharts-brush",
          onChange: ha(m.handleBrushChange, x.props.onChange),
          data: $,
          x: Y(x.props.x) ? x.props.x : T.left,
          y: Y(x.props.y) ? x.props.y : T.top + T.height + T.brushBottom - (P.bottom || 0),
          width: Y(x.props.width) ? x.props.width : T.width,
          startIndex: C,
          endIndex: R,
          updateId: "brush-".concat(N)
        });
      }), ae(m, "renderReferenceElement", function(x, O, P) {
        if (!x)
          return null;
        var $ = m, I = $.clipPathId, T = m.state, C = T.xAxisMap, R = T.yAxisMap, N = T.offset, k = x.type.defaultProps || {}, L = x.props, F = L.xAxisId, K = F === void 0 ? k.xAxisId : F, V = L.yAxisId, M = V === void 0 ? k.yAxisId : V;
        return /* @__PURE__ */ ze(x, {
          key: x.key || "".concat(O, "-").concat(P),
          xAxis: C[K],
          yAxis: R[M],
          viewBox: {
            x: N.left,
            y: N.top,
            width: N.width,
            height: N.height
          },
          clipPathId: I
        });
      }), ae(m, "renderActivePoints", function(x) {
        var O = x.item, P = x.activePoint, $ = x.basePoint, I = x.childIndex, T = x.isRange, C = [], R = O.props.key, N = O.item.type.defaultProps !== void 0 ? D(D({}, O.item.type.defaultProps), O.item.props) : O.item.props, k = N.activeDot, L = N.dataKey, F = D(D({
          index: I,
          dataKey: L,
          cx: P.x,
          cy: P.y,
          r: 4,
          fill: dl(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: P.payload,
          value: P.value
        }, ce(k, !1)), _a(k));
        return C.push(g.renderActiveDot(k, F, "".concat(R, "-activePoint-").concat(I))), $ ? C.push(g.renderActiveDot(k, D(D({}, F), {}, {
          cx: $.x,
          cy: $.y
        }), "".concat(R, "-basePoint-").concat(I))) : T && C.push(null), C;
      }), ae(m, "renderGraphicChild", function(x, O, P) {
        var $ = m.filterFormatItem(x, O, P);
        if (!$)
          return null;
        var I = m.getTooltipEventType(), T = m.state, C = T.isTooltipActive, R = T.tooltipAxis, N = T.activeTooltipIndex, k = T.activeLabel, L = m.props.children, F = ht(L, Re), K = $.props, V = K.points, M = K.isRange, B = K.baseLine, z = $.item.type.defaultProps !== void 0 ? D(D({}, $.item.type.defaultProps), $.item.props) : $.item.props, G = z.activeDot, X = z.hide, te = z.activeBar, re = z.activeShape, ie = !!(!X && C && F && (G || te || re)), ne = {};
        I !== "axis" && F && F.props.trigger === "click" ? ne = {
          onClick: ha(m.handleItemMouseEnter, x.props.onClick)
        } : I !== "axis" && (ne = {
          onMouseLeave: ha(m.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: ha(m.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var W = /* @__PURE__ */ ze(x, D(D({}, $.props), ne));
        function H(lt) {
          return typeof R.dataKey == "function" ? R.dataKey(lt.payload) : null;
        }
        if (ie)
          if (N >= 0) {
            var ee, j;
            if (R.dataKey && !R.allowDuplicatedCategory) {
              var le = typeof R.dataKey == "function" ? H : "payload.".concat(R.dataKey.toString());
              ee = wa(V, le, k), j = M && B && wa(B, le, k);
            } else
              ee = V == null ? void 0 : V[N], j = M && B && B[N];
            if (re || te) {
              var q = x.props.activeIndex !== void 0 ? x.props.activeIndex : N;
              return [/* @__PURE__ */ ze(x, D(D(D({}, $.props), ne), {}, {
                activeIndex: q
              })), null, null];
            }
            if (!ue(ee))
              return [W].concat(En(m.renderActivePoints({
                item: $,
                activePoint: ee,
                basePoint: j,
                childIndex: N,
                isRange: M
              })));
          } else {
            var ve, ye = (ve = m.getItemByXY(m.state.activeCoordinate)) !== null && ve !== void 0 ? ve : {
              graphicalItem: W
            }, ke = ye.graphicalItem, Et = ke.item, $t = Et === void 0 ? x : Et, Wr = ke.childIndex, Kt = D(D(D({}, $.props), ne), {}, {
              activeIndex: Wr
            });
            return [/* @__PURE__ */ ze($t, Kt), null, null];
          }
        return M ? [W, null, null] : [W, null];
      }), ae(m, "renderCustomized", function(x, O, P) {
        return /* @__PURE__ */ ze(x, D(D({
          key: "recharts-customized-".concat(P)
        }, m.props), m.state));
      }), ae(m, "renderMap", {
        CartesianGrid: {
          handler: ba,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: ba
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: ba
        },
        YAxis: {
          handler: ba
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
      }), m.clipPathId = "".concat((b = w.id) !== null && b !== void 0 ? b : In("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = oy(m.triggeredAfterMouseMove, (_ = w.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60), m.state = {}, m;
    }
    return KW(g, p), FW(g, [{
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
        var b = this.props, _ = b.children, m = b.data, x = b.height, O = b.layout, P = ht(_, Re);
        if (P) {
          var $ = P.props.defaultIndex;
          if (!(typeof $ != "number" || $ < 0 || $ > this.state.tooltipTicks.length - 1)) {
            var I = this.state.tooltipTicks[$] && this.state.tooltipTicks[$].value, T = bc(this.state, m, $, I), C = this.state.tooltipTicks[$].coordinate, R = (this.state.offset.top + x) / 2, N = O === "horizontal", k = N ? {
              x: C,
              y: R
            } : {
              y: C,
              x: R
            }, L = this.state.formattedGraphicalItems.find(function(K) {
              var V = K.item;
              return V.type.name === "Scatter";
            });
            L && (k = D(D({}, k), L.props.points[$].tooltipPosition), T = L.props.points[$].tooltipPayload);
            var F = {
              activeTooltipIndex: $,
              isTooltipActive: !0,
              activeLabel: I,
              activePayload: T,
              activeCoordinate: k
            };
            this.setState(F), this.renderCursor(P), this.accessibilityManager.setIndex($);
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
        Hu([ht(b.children, Re)], [ht(this.props.children, Re)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var b = ht(this.props.children, Re);
        if (b && typeof b.props.shared == "boolean") {
          var _ = b.props.shared ? "axis" : "item";
          return u.indexOf(_) >= 0 ? _ : a;
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
        var _ = this.container, m = _.getBoundingClientRect(), x = vC(m), O = {
          chartX: Math.round(b.pageX - x.left),
          chartY: Math.round(b.pageY - x.top)
        }, P = m.width / _.offsetWidth || 1, $ = this.inRange(O.chartX, O.chartY, P);
        if (!$)
          return null;
        var I = this.state, T = I.xAxisMap, C = I.yAxisMap, R = this.getTooltipEventType(), N = Bp(this.state, this.props.data, this.props.layout, $);
        if (R !== "axis" && T && C) {
          var k = lr(T).scale, L = lr(C).scale, F = k && k.invert ? k.invert(O.chartX) : null, K = L && L.invert ? L.invert(O.chartY) : null;
          return D(D({}, O), {}, {
            xValue: F,
            yValue: K
          }, N);
        }
        return N ? D(D({}, O), N) : null;
      }
    }, {
      key: "inRange",
      value: function(b, _) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, O = b / m, P = _ / m;
        if (x === "horizontal" || x === "vertical") {
          var $ = this.state.offset, I = O >= $.left && O <= $.left + $.width && P >= $.top && P <= $.top + $.height;
          return I ? {
            x: O,
            y: P
          } : null;
        }
        var T = this.state, C = T.angleAxisMap, R = T.radiusAxisMap;
        if (C && R) {
          var N = lr(C);
          return ch({
            x: O,
            y: P
          }, N);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, _ = this.getTooltipEventType(), m = ht(b, Re), x = {};
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
        var O = _a(this.props, this.handleOuterEvent);
        return D(D({}, O), x);
      }
    }, {
      key: "addListener",
      value: function() {
        zu.on(Wu, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        zu.removeListener(Wu, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(b, _, m) {
        for (var x = this.state.formattedGraphicalItems, O = 0, P = x.length; O < P; O++) {
          var $ = x[O];
          if ($.item === b || $.props.key === b.key || _ === Xt($.item.type) && m === $.childIndex)
            return $;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var b = this.clipPathId, _ = this.state.offset, m = _.left, x = _.top, O = _.height, P = _.width;
        return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
          id: b
        }, /* @__PURE__ */ E.createElement("rect", {
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
          var x = Dp(m, 2), O = x[0], P = x[1];
          return D(D({}, _), {}, ae({}, O, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(_, m) {
          var x = Dp(m, 2), O = x[0], P = x[1];
          return D(D({}, _), {}, ae({}, O, P.scale));
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
            var $ = m[O], I = $.props, T = $.item, C = T.type.defaultProps !== void 0 ? D(D({}, T.type.defaultProps), T.props) : T.props, R = Xt(T.type);
            if (R === "Bar") {
              var N = (I.data || []).find(function(K) {
                return nL(b, K);
              });
              if (N)
                return {
                  graphicalItem: $,
                  payload: N
                };
            } else if (R === "RadialBar") {
              var k = (I.data || []).find(function(K) {
                return ch(b, K);
              });
              if (k)
                return {
                  graphicalItem: $,
                  payload: k
                };
            } else if (Xo($, x) || Zo($, x) || Wi($, x)) {
              var L = aB({
                graphicalItem: $,
                activeTooltipItem: x,
                itemData: C.data
              }), F = C.activeIndex === void 0 ? L : C.activeIndex;
              return {
                graphicalItem: D(D({}, $), {}, {
                  childIndex: F
                }),
                payload: Wi($, x) ? C.data[L] : $.props.data[L]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!Ql(this))
          return null;
        var _ = this.props, m = _.children, x = _.className, O = _.width, P = _.height, $ = _.style, I = _.compact, T = _.title, C = _.desc, R = Rp(_, IW), N = ce(R, !1);
        if (I)
          return /* @__PURE__ */ E.createElement(yp, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ E.createElement(Xu, Jr({}, N, {
            width: O,
            height: P,
            title: T,
            desc: C
          }), this.renderClipPath(), tf(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var k, L;
          N.tabIndex = (k = this.props.tabIndex) !== null && k !== void 0 ? k : 0, N.role = (L = this.props.role) !== null && L !== void 0 ? L : "application", N.onKeyDown = function(K) {
            b.accessibilityManager.keyboardEvent(K);
          }, N.onFocus = function() {
            b.accessibilityManager.focus();
          };
        }
        var F = this.parseEventsOfWrapper();
        return /* @__PURE__ */ E.createElement(yp, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ E.createElement("div", Jr({
          className: he("recharts-wrapper", x),
          style: D({
            position: "relative",
            cursor: "default",
            width: O,
            height: P
          }, $)
        }, F, {
          ref: function(V) {
            b.container = V;
          }
        }), /* @__PURE__ */ E.createElement(Xu, Jr({}, N, {
          width: O,
          height: P,
          title: T,
          desc: C,
          style: XW
        }), this.renderClipPath(), tf(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(Vp);
  ae(y, "displayName", r), ae(y, "defaultProps", D({
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
  }, f)), ae(y, "getDerivedStateFromProps", function(p, g) {
    var w = p.dataKey, b = p.data, _ = p.children, m = p.width, x = p.height, O = p.layout, P = p.stackOffset, $ = p.margin, I = g.dataStartIndex, T = g.dataEndIndex;
    if (g.updateId === void 0) {
      var C = Fp(p);
      return D(D(D({}, C), {}, {
        updateId: 0
      }, h(D(D({
        props: p
      }, C), {}, {
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
    if (w !== g.prevDataKey || b !== g.prevData || m !== g.prevWidth || x !== g.prevHeight || O !== g.prevLayout || P !== g.prevStackOffset || !Qr($, g.prevMargin)) {
      var R = Fp(p), N = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, k = D(D({}, Bp(g, b, O)), {}, {
        updateId: g.updateId + 1
      }), L = D(D(D({}, R), N), k);
      return D(D(D({}, L), h(D({
        props: p
      }, L), g)), {}, {
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
    if (!Hu(_, g.prevChildren)) {
      var F, K, V, M, B = ht(_, pn), z = B && (F = (K = B.props) === null || K === void 0 ? void 0 : K.startIndex) !== null && F !== void 0 ? F : I, G = B && (V = (M = B.props) === null || M === void 0 ? void 0 : M.endIndex) !== null && V !== void 0 ? V : T, X = z !== I || G !== T, te = !ue(b), re = te && !X ? g.updateId : g.updateId + 1;
      return D(D({
        updateId: re
      }, h(D(D({
        props: p
      }, g), {}, {
        updateId: re,
        dataStartIndex: z,
        dataEndIndex: G
      }), g)), {}, {
        prevChildren: _,
        dataStartIndex: z,
        dataEndIndex: G
      });
    }
    return null;
  }), ae(y, "renderActiveDot", function(p, g, w) {
    var b;
    return /* @__PURE__ */ Lt(p) ? b = /* @__PURE__ */ ze(p, g) : se(p) ? b = p(g) : b = /* @__PURE__ */ E.createElement(vl, g), /* @__PURE__ */ E.createElement(Ee, {
      className: "recharts-active-dot",
      key: w
    }, b);
  });
  var v = /* @__PURE__ */ Up(function(g, w) {
    return /* @__PURE__ */ E.createElement(y, Jr({}, g, {
      ref: w
    }));
  });
  return v.displayName = y.displayName, v;
}, Wp = Pl({
  chartName: "LineChart",
  GraphicalChild: Vt,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: et
  }, {
    axisType: "yAxis",
    AxisComp: tt
  }],
  formatAxisMap: yl
}), Cr = Pl({
  chartName: "BarChart",
  GraphicalChild: Ve,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: et
  }, {
    axisType: "yAxis",
    AxisComp: tt
  }],
  formatAxisMap: yl
}), _g = Pl({
  chartName: "ScatterChart",
  GraphicalChild: Wn,
  defaultTooltipEventType: "item",
  validateTooltipEventTypes: ["item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: et
  }, {
    axisType: "yAxis",
    AxisComp: tt
  }, {
    axisType: "zAxis",
    AxisComp: nu
  }],
  formatAxisMap: yl
});
function qe(e) {
  return e >= 1e9 ? (e / 1e9).toFixed(2) + "B" : e >= 1e6 ? (e / 1e6).toFixed(2) + "M" : e >= 1e3 ? (e / 1e3).toFixed(2) + "K" : e.toFixed(0);
}
function Rt(e, t) {
  if (t === 0 || isNaN(t) || !isFinite(t))
    return 0;
  const r = e / t;
  return isNaN(r) || !isFinite(r) ? 0 : r;
}
const oU = ({ data: e, year: t }) => {
  if (e.length === 0)
    return /* @__PURE__ */ A.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = e.reduce((y, v) => y + v.total_views, 0), n = e.reduce((y, v) => y + v.total_uploads, 0), i = e.reduce((y, v) => y + v.shorts_uploads, 0), a = e.reduce((y, v) => y + v.views_from_shorts_total, 0), o = Rt(i, n), u = Rt(a, r), s = Rt(
    e.reduce((y, v) => y + v.engagement_per_1k_views * v.total_views, 0),
    r
  ), c = e.map((y) => ({
    channel: y.channelKey.replace("@", ""),
    views: y.total_views
  })).sort((y, v) => v.views - y.views), l = e.map((y) => ({
    channel: y.channelKey.replace("@", ""),
    Shorts: y.shorts_uploads,
    Normal: y.normal_uploads
  })), f = e.map((y) => ({
    channel: y.channelKey.replace("@", ""),
    Shorts: y.views_from_shorts_total,
    Normal: y.normal_views
  })), d = e.map((y) => ({
    channel: y.channelKey.replace("@", ""),
    x: y.uploads_shorts_share * 100,
    y: y.percent_views_from_shorts_from_total * 100,
    size: y.total_views
  })), h = {
    shorts: "#FF4444",
    normal: "#4488FF"
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "overview-charts", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-row", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
        /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: qe(r) }),
        /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Total Views" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
        /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: qe(n) }),
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
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(Cr, { data: c, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
          et,
          {
            dataKey: "channel",
            angle: -45,
            textAnchor: "end",
            height: 80,
            stroke: "#A4ADBD"
          }
        ),
        /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", tickFormatter: (y) => qe(y) }),
        /* @__PURE__ */ A.jsx(
          Re,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (y) => qe(y)
          }
        ),
        /* @__PURE__ */ A.jsx(Ve, { dataKey: "views", fill: "#4488FF" })
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chart-grid-2", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Uploads: Shorts vs Normal" }),
        /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(Cr, { data: l, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ A.jsx(
            et,
            {
              dataKey: "channel",
              angle: -45,
              textAnchor: "end",
              height: 80,
              stroke: "#A4ADBD"
            }
          ),
          /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD" }),
          /* @__PURE__ */ A.jsx(Re, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
          /* @__PURE__ */ A.jsx(vt, {}),
          /* @__PURE__ */ A.jsx(Ve, { dataKey: "Shorts", stackId: "a", fill: h.shorts }),
          /* @__PURE__ */ A.jsx(Ve, { dataKey: "Normal", stackId: "a", fill: h.normal })
        ] }) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Views: Shorts vs Normal" }),
        /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(Cr, { data: f, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ A.jsx(
            et,
            {
              dataKey: "channel",
              angle: -45,
              textAnchor: "end",
              height: 80,
              stroke: "#A4ADBD"
            }
          ),
          /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", tickFormatter: (y) => qe(y) }),
          /* @__PURE__ */ A.jsx(
            Re,
            {
              contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
              formatter: (y) => qe(y)
            }
          ),
          /* @__PURE__ */ A.jsx(vt, {}),
          /* @__PURE__ */ A.jsx(Ve, { dataKey: "Shorts", stackId: "a", fill: h.shorts }),
          /* @__PURE__ */ A.jsx(Ve, { dataKey: "Normal", stackId: "a", fill: h.normal })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Shorts Supply vs Impact" }),
      /* @__PURE__ */ A.jsx("p", { className: "chart-subtitle", children: "X-axis: % of uploads that are Shorts | Y-axis: % of views from Shorts | Size: Total views" }),
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 400, children: /* @__PURE__ */ A.jsxs(_g, { margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [
        /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
          et,
          {
            type: "number",
            dataKey: "x",
            name: "Shorts Upload %",
            stroke: "#A4ADBD",
            label: { value: "Shorts Upload Share (%)", position: "insideBottom", offset: -10 }
          }
        ),
        /* @__PURE__ */ A.jsx(
          tt,
          {
            type: "number",
            dataKey: "y",
            name: "Shorts Views %",
            stroke: "#A4ADBD",
            label: { value: "Shorts Views Share (%)", angle: -90, position: "insideLeft" }
          }
        ),
        /* @__PURE__ */ A.jsx(
          Re,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (y, v) => v === "size" ? qe(y) : `${y.toFixed(1)}%`
          }
        ),
        /* @__PURE__ */ A.jsx(Wn, { data: d, fill: "#FF4444", children: d.map((y, v) => /* @__PURE__ */ A.jsx(
          Zi,
          {
            fill: "#FF4444",
            opacity: 0.7,
            r: Math.sqrt(y.size) / 1e4
          },
          `cell-${v}`
        )) })
      ] }) })
    ] })
  ] });
}, uU = ({
  data: e,
  year: t,
  selectedChannels: r
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ A.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const n = r[0], i = e.filter((g) => g.channelKey === n).sort((g, w) => g.month.localeCompare(w.month));
  if (i.length === 0)
    return /* @__PURE__ */ A.jsxs("div", { className: "no-data", children: [
      "No monthly data available for ",
      n,
      "."
    ] });
  const a = i.reduce((g, w) => g + w.views_total, 0), o = i.reduce((g, w) => g + w.uploads_count, 0), u = i.reduce((g, w) => g + w.uploads_short_count, 0), s = i.reduce((g, w) => g + w.views_shorts, 0), c = Rt(a, o), l = Rt(u, o), f = Rt(s, a), d = Rt(
    i.reduce((g, w) => g + w.engagement_per_1k_views * w.views_total, 0),
    a
  ), h = i.map((g) => ({
    month: g.month,
    "Total Views": g.views_total,
    "Shorts Views": g.views_shorts,
    "Normal Views": g.views_normal
  })), y = i.map((g) => ({
    month: g.month,
    Shorts: g.uploads_short_count,
    Normal: g.uploads_normal
  })), v = i.map((g) => ({
    month: g.month,
    "Upload Share (%)": (g.uploads_shorts_share * 100).toFixed(1),
    "View Share (%)": (g.percent_views_from_shorts_from_total * 100).toFixed(1)
  })), p = {
    shorts: "#FF4444",
    normal: "#4488FF",
    total: "#44FF88"
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "drilldown-charts", children: [
    r.length > 1 && /* @__PURE__ */ A.jsxs("div", { className: "drilldown-note", children: [
      "Drill-down shown for: ",
      /* @__PURE__ */ A.jsx("strong", { children: n.replace("@", "") }),
      " ",
      "(you have ",
      r.length,
      " channels selected)"
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "kpi-row", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
        /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: qe(a) }),
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
        /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: qe(c) }),
        /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Avg Views/Video" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-value", children: [
          (l * 100).toFixed(1),
          "%"
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Shorts Share (Uploads)" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
        /* @__PURE__ */ A.jsxs("div", { className: "kpi-value", children: [
          (f * 100).toFixed(1),
          "%"
        ] }),
        /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Shorts Share (Views)" })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "kpi-card", children: [
        /* @__PURE__ */ A.jsx("div", { className: "kpi-value", children: d.toFixed(2) }),
        /* @__PURE__ */ A.jsx("div", { className: "kpi-label", children: "Engagement / 1K Views" })
      ] })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Monthly Views" }),
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 350, children: /* @__PURE__ */ A.jsxs(Wp, { data: h, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [
        /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(et, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", tickFormatter: (g) => qe(g) }),
        /* @__PURE__ */ A.jsx(
          Re,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (g) => qe(g)
          }
        ),
        /* @__PURE__ */ A.jsx(vt, {}),
        /* @__PURE__ */ A.jsx(Vt, { type: "monotone", dataKey: "Total Views", stroke: p.total, strokeWidth: 2 }),
        /* @__PURE__ */ A.jsx(Vt, { type: "monotone", dataKey: "Shorts Views", stroke: p.shorts, strokeWidth: 2 }),
        /* @__PURE__ */ A.jsx(Vt, { type: "monotone", dataKey: "Normal Views", stroke: p.normal, strokeWidth: 2 })
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chart-grid-2", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Monthly Uploads by Type" }),
        /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(Cr, { data: y, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ A.jsx(et, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD" }),
          /* @__PURE__ */ A.jsx(Re, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
          /* @__PURE__ */ A.jsx(vt, {}),
          /* @__PURE__ */ A.jsx(Ve, { dataKey: "Shorts", stackId: "a", fill: p.shorts }),
          /* @__PURE__ */ A.jsx(Ve, { dataKey: "Normal", stackId: "a", fill: p.normal })
        ] }) })
      ] }),
      /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
        /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Shorts Share Over Time" }),
        /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(Wp, { data: v, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
          /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
          /* @__PURE__ */ A.jsx(et, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
          /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
          /* @__PURE__ */ A.jsx(Re, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
          /* @__PURE__ */ A.jsx(vt, {}),
          /* @__PURE__ */ A.jsx(Vt, { type: "monotone", dataKey: "Upload Share (%)", stroke: "#FFB344", strokeWidth: 2 }),
          /* @__PURE__ */ A.jsx(Vt, { type: "monotone", dataKey: "View Share (%)", stroke: "#FF44B3", strokeWidth: 2 })
        ] }) })
      ] })
    ] })
  ] });
}, sU = ({
  data: e,
  selectedChannels: t
}) => {
  if (e.length === 0)
    return /* @__PURE__ */ A.jsx("div", { className: "no-data", children: "No data available. Please select at least one channel." });
  const r = t.map((c) => {
    const l = e.filter((w) => w.channelKey === c), f = l.reduce((w, b) => w + b.uploads_count_Normal, 0), d = l.reduce((w, b) => w + b.uploads_count_Short, 0), h = l.reduce((w, b) => w + b.views_total_Normal, 0), y = l.reduce((w, b) => w + b.views_total_Short, 0), v = Rt(h, f), p = Rt(y, d), g = Rt(p, v);
    return {
      channel: c.replace("@", ""),
      avgViewsNormal: v,
      avgViewsShort: p,
      multiplier: g,
      totalViewsNormal: h,
      totalViewsShort: y
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
  ]).filter((c) => c.duration > 0 && c.views > 0), u = {
    shorts: "#FF4444",
    normal: "#4488FF"
  }, s = ({ active: c, payload: l }) => {
    if (c && l && l.length) {
      const f = l[0].payload;
      return /* @__PURE__ */ A.jsxs("div", { style: { backgroundColor: "#1a1a2e", border: "1px solid #333", padding: "10px" }, children: [
        /* @__PURE__ */ A.jsx("p", { style: { margin: 0, color: "#fff" }, children: /* @__PURE__ */ A.jsx("strong", { children: f.channel }) }),
        /* @__PURE__ */ A.jsxs("p", { style: { margin: "5px 0", color: u.shorts }, children: [
          "Shorts: ",
          qe(f.avgViewsShort),
          " avg views"
        ] }),
        /* @__PURE__ */ A.jsxs("p", { style: { margin: "5px 0", color: u.normal }, children: [
          "Normal: ",
          qe(f.avgViewsNormal),
          " avg views"
        ] }),
        /* @__PURE__ */ A.jsxs("p", { style: { margin: "5px 0", color: "#FFB344" }, children: [
          "Multiplier: ",
          f.multiplier.toFixed(2),
          "x"
        ] })
      ] });
    }
    return null;
  };
  return /* @__PURE__ */ A.jsxs("div", { className: "short-vs-long-charts", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Average Views Per Video: Shorts vs Normal" }),
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 350, children: /* @__PURE__ */ A.jsxs(Cr, { data: n, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(et, { dataKey: "channel", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", tickFormatter: (c) => qe(c) }),
        /* @__PURE__ */ A.jsx(
          Re,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (c) => qe(c)
          }
        ),
        /* @__PURE__ */ A.jsx(vt, {}),
        /* @__PURE__ */ A.jsx(Ve, { dataKey: "Normal", fill: u.normal }),
        /* @__PURE__ */ A.jsx(Ve, { dataKey: "Shorts", fill: u.shorts })
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Shorts vs Normal Performance Multiplier" }),
      /* @__PURE__ */ A.jsx("p", { className: "chart-subtitle", children: "How many times more (or less) views does a Short get on average compared to a normal video?" }),
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 350, children: /* @__PURE__ */ A.jsxs(Cr, { data: i, margin: { top: 20, right: 30, left: 20, bottom: 60 }, children: [
        /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(et, { dataKey: "channel", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
        /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", label: { value: "Multiplier (x)", angle: -90, position: "insideLeft" } }),
        /* @__PURE__ */ A.jsx(Re, { content: /* @__PURE__ */ A.jsx(s, {}) }),
        /* @__PURE__ */ A.jsx(Ve, { dataKey: "multiplier", fill: "#FFB344" })
      ] }) })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsx("h3", { className: "chart-title", children: "Duration vs Performance" }),
      /* @__PURE__ */ A.jsx("p", { className: "chart-subtitle", children: "Each point represents a channel-month. Blue = Normal videos, Red = Shorts." }),
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 450, children: /* @__PURE__ */ A.jsxs(_g, { margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [
        /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
        /* @__PURE__ */ A.jsx(
          et,
          {
            type: "number",
            dataKey: "duration",
            name: "Duration (sec)",
            stroke: "#A4ADBD",
            label: { value: "Avg Duration (seconds)", position: "insideBottom", offset: -10 }
          }
        ),
        /* @__PURE__ */ A.jsx(
          tt,
          {
            type: "number",
            dataKey: "views",
            name: "Avg Views",
            stroke: "#A4ADBD",
            label: { value: "Avg Views Per Video", angle: -90, position: "insideLeft" },
            tickFormatter: (c) => qe(c)
          }
        ),
        /* @__PURE__ */ A.jsx(
          Re,
          {
            contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" },
            formatter: (c, l) => l === "views" || l === "size" ? qe(c) : c
          }
        ),
        /* @__PURE__ */ A.jsx(Wn, { data: o, fill: "#8884d8", children: o.map((c, l) => /* @__PURE__ */ A.jsx(
          Zi,
          {
            fill: c.type === "Shorts" ? u.shorts : u.normal,
            opacity: 0.6,
            r: Math.sqrt(c.size) / 8e3
          },
          `cell-${l}`
        )) })
      ] }) })
    ] }),
    t.length === 1 && /* @__PURE__ */ A.jsxs("div", { className: "chart-container", children: [
      /* @__PURE__ */ A.jsxs("h3", { className: "chart-title", children: [
        "Shorts Share Over Time: ",
        t[0].replace("@", "")
      ] }),
      /* @__PURE__ */ A.jsx(kt, { width: "100%", height: 300, children: /* @__PURE__ */ A.jsxs(
        Cr,
        {
          data: e.filter((c) => c.channelKey === t[0]).sort((c, l) => c.month.localeCompare(l.month)),
          margin: { top: 20, right: 30, left: 20, bottom: 60 },
          children: [
            /* @__PURE__ */ A.jsx(_t, { strokeDasharray: "3 3", stroke: "#333" }),
            /* @__PURE__ */ A.jsx(et, { dataKey: "month", stroke: "#A4ADBD", angle: -45, textAnchor: "end", height: 80 }),
            /* @__PURE__ */ A.jsx(tt, { stroke: "#A4ADBD", label: { value: "% Share", angle: -90, position: "insideLeft" } }),
            /* @__PURE__ */ A.jsx(Re, { contentStyle: { backgroundColor: "#1a1a2e", border: "1px solid #333" } }),
            /* @__PURE__ */ A.jsx(vt, {}),
            /* @__PURE__ */ A.jsx(
              Ve,
              {
                dataKey: "uploads_share_within_channel_month_Short",
                name: "Upload Share (%)",
                fill: "#FFB344"
              }
            ),
            /* @__PURE__ */ A.jsx(
              Ve,
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
}, lU = () => {
  const [e, t] = cr(!0), [r, n] = cr([]), [i, a] = cr([]), [o, u] = cr([]), [s, c] = cr({
    year: 2024,
    selectedChannels: [],
    viewMode: "overview"
  });
  Po(() => {
    Hg().then(({ annual: v, monthly: p, shortVsLong: g }) => {
      n(v), a(p), u(g);
      const w = Array.from(new Set(v.map((b) => b.channelKey)));
      c((b) => ({ ...b, selectedChannels: w })), t(!1);
    });
  }, []);
  const l = (v) => {
    c((p) => ({ ...p, ...v }));
  };
  if (e)
    return /* @__PURE__ */ A.jsx("div", { className: "dashboard-slide loading", children: /* @__PURE__ */ A.jsx("div", { className: "loading-spinner", children: "Loading dashboard data..." }) });
  const f = Array.from(new Set(r.map((v) => v.channelKey))), d = r.filter(
    (v) => v.year === s.year && s.selectedChannels.includes(v.channelKey)
  ), h = i.filter(
    (v) => v.year === s.year && s.selectedChannels.includes(v.channelKey)
  ), y = o.filter(
    (v) => v.year === s.year && s.selectedChannels.includes(v.channelKey)
  );
  return /* @__PURE__ */ A.jsx("section", { className: "slide-section media-dashboard-slide", id: "dashboard", children: /* @__PURE__ */ A.jsxs("div", { className: "dashboard-container", children: [
    /* @__PURE__ */ A.jsxs("div", { className: "dashboard-header", children: [
      /* @__PURE__ */ A.jsx("h2", { className: "dashboard-title", children: "Interactive Media Analytics" }),
      /* @__PURE__ */ A.jsx("p", { className: "dashboard-subtitle", children: "Explore how top YouTube channels balance short-form and long-form content strategies" })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: "dashboard-content", children: [
      /* @__PURE__ */ A.jsx(
        Yg,
        {
          filters: s,
          allChannels: f,
          onFilterChange: l
        }
      ),
      /* @__PURE__ */ A.jsxs("div", { className: "dashboard-charts", children: [
        s.viewMode === "overview" && /* @__PURE__ */ A.jsx(oU, { data: d, year: s.year }),
        s.viewMode === "channel-drilldown" && /* @__PURE__ */ A.jsx(
          uU,
          {
            data: h,
            year: s.year,
            selectedChannels: s.selectedChannels
          }
        ),
        s.viewMode === "short-vs-long" && /* @__PURE__ */ A.jsx(
          sU,
          {
            data: y,
            year: s.year,
            selectedChannels: s.selectedChannels
          }
        )
      ] })
    ] })
  ] }) });
};
export {
  lU as MediaDashboardSlide,
  lU as default
};
