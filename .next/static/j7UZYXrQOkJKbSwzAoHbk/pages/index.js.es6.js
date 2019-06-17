!(function(e) {
  function t(t) {
    for (
      var r, l, a = t[0], c = t[1], i = t[2], s = 0, p = [];
      s < a.length;
      s++
    )
      (l = a[s]), o[l] && p.push(o[l][0]), (o[l] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (f && f(t); p.length; ) p.shift()();
    return u.push.apply(u, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 3: 0 },
    u = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} }),
      o = !0;
    try {
      e[t].call(n.exports, n, n.exports, l), (o = !1);
    } finally {
      o && delete r[t];
    }
    return (n.l = !0), n.exports;
  }
  (l.m = e),
    (l.c = r),
    (l.d = function(e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function(e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var i = 0; i < a.length; i++) t(a[i]);
  var f = c;
  u.push(["/EDR", 0]), n();
})({
  "/EDR": function(e, t, n) {
    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function() {
        var e = n("23aj");
        return { page: e.default || e };
      }
    ]);
  },
  "23aj": function(e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "default", function() {
        return a;
      });
    var r = n("q1tI"),
      o = n("kDDq");
    const u = Object(o.a)({ color: "#777" }),
      l = Object(o.a)({ color: "#999" });
    class a extends r.PureComponent {
      render() {
        return r.createElement(
          "div",
          null,
          r.createElement("h1", { className: u }, "Hello World!!"),
          r.createElement("p", { className: l }, "This is the content"),
          r.createElement("p", { className: l }, "This is more content")
        );
      }
    }
  }
});
