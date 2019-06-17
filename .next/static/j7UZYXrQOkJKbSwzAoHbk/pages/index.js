(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
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
          return f;
        });
      var a = n("0iUn"),
        c = n("sLSF"),
        r = n("MI3g"),
        u = n("a7VT"),
        o = n("Tit0"),
        l = n("q1tI"),
        i = n("kDDq"),
        s = Object(i.a)({ color: "#777" }),
        d = Object(i.a)({ color: "#999" }),
        f = (function(e) {
          function t() {
            return (
              Object(a.default)(this, t),
              Object(r.default)(
                this,
                Object(u.default)(t).apply(this, arguments)
              )
            );
          }
          return (
            Object(o.default)(t, e),
            Object(c.default)(t, [
              {
                key: "render",
                value: function() {
                  return l.createElement(
                    "div",
                    null,
                    l.createElement("h1", { className: s }, "Hello World!!"),
                    l.createElement(
                      "p",
                      { className: d },
                      "This is the content"
                    ),
                    l.createElement(
                      "p",
                      { className: d },
                      "This is more content"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.PureComponent);
    }
  },
  [["/EDR", 1, 0]]
]);
