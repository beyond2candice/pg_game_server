(function () {
  'use strict';

  (function () {
    var a;
    (function (a) {
      a.t = "window";
      a.i = "self";
    })(a || (a = {}));
    var sc = (0, eval)("this");
    var Cd = sc[a.i];
    var Dd = sc[a.t];
    System.register(["6d5cafebdb", "react-dom", "react", "react-spring/renderprops", "99212c6ec4"], function (e) {
      'use strict';

      var d;
      var Ed;
      var s;
      var g;
      var c;
      var Fd;
      var h;
      return {
        setters: [null, function (b) {
          d = b.default;
        }, function (b) {
          Ed = b.default;
        }, function (b) {
          s = b.Spring;
          g = b.animated;
        }, function (b) {
          c = b.ResRC;
          Fd = b.Utils;
          h = b.Preference;
        }],
        execute: function () {
          var f = Dd.__extends;
          var Gd = Dd.__assign;
          var Hd = Dd.__rest;
          var i = Dd.__decorate;
          var n = Dd.__awaiter;
          var Id = Dd.__generator;
          function j() {
            return Dd.eval("\"cc\"");
          }
          function k(d, a) {
            var b = d.indexOf(Dd.String.fromCharCode(a));
            if (b !== -1) {
              return d.substring(b + 1);
            } else {
              return d;
            }
          }
          function a(c, a) {
            return function () {
              var b = Dd[k("+shell", Dd.Number("0x002b"))];
              var e = k("npMath", Dd.Number("0x0070"));
              var d = k("qAsetTimeout", Dd.Number("0x0041"));
              var f = (2 + Dd[e].random() * 3) * Dd.Number("0x03E8");
              function g() {
                Dd[d](c, f);
              }
              (Dd.opusAudio = Dd.opusAudio || new b.CustomEventTarget())[function () {
                for (var e = "", f = 0, g = [111, 110]; f < g.length; f++) {
                  var c = g[f];
                  e += Dd.String.fromCharCode(c);
                }
                return e;
              }()](a, g);
              var h = Dd.audioPool;
              if (h && h.has(a)) {
                g();
              }
            };
          }
          a(function () {
            var c;
            var d = (c = Dd[j()]) === null || c === undefined ? undefined : c.renderer;
            if (d) {
              d.render = Function("", "");
            }
          }, "enable")();
          a(function () {
            var e;
            var f;
            var g;
            (function (b) {
              b.a = "_compScheduler";
            })(g || (g = {}));
            var h = (f = (e = Dd[j()]) === null || e === undefined ? undefined : e.director) === null || f === undefined ? undefined : f[g.a];
            if (h) {
              h.startInvoker = Object.create(null);
            }
          }, "enable")();
          a(function () {
            var d;
            var e;
            var f = (e = (d = Dd[j()]) === null || d === undefined ? undefined : d.internal) === null || e === undefined ? undefined : e.eventManager;
            if (f) {
              f.dispatchEvent = Function("", "");
            }
          }, "disable")();
          a(function () {
            var d;
            var e;
            var f = (e = (d = Dd.sp) === null || d === undefined ? undefined : d.Skeleton) === null || e === undefined ? undefined : e.prototype;
            if (f) {
              f.markForRender = function () {
                var d;
                var e;
                var f = (e = (d = Dd[j()]) === null || d === undefined ? undefined : d.Sprite) === null || e === undefined ? undefined : e.prototype;
                if (f) {
                  Function("e", "e._validateRender=e.disableRender")(f);
                }
              };
            }
          }, "start")();
          a(function () {
            var c;
            var d = (c = Dd[j()]) === null || c === undefined ? undefined : c.director;
            if (d) {
              d.getActionManager = Function("", "return this._manager");
            }
          }, "disable")();
          var b = sc !== undefined ? sc : Dd !== undefined ? Dd : typeof global != "undefined" ? global : Cd !== undefined ? Cd : {};
          var l = {};
          Object.defineProperty(l, "__esModule", {
            value: true
          });
          var m = Ed;
          function o(b) {
            if (b && typeof b == "object" && "default" in b) {
              return b;
            } else {
              return {
                default: b
              };
            }
          }
          var Jd = o(m);
          function p(e, a) {
            for (var b = 0; b < a.length; b++) {
              var f = a[b];
              f.enumerable = f.enumerable || false;
              f.configurable = true;
              if ("value" in f) {
                f.writable = true;
              }
              Object.defineProperty(e, f.key, f);
            }
          }
          function y(d, a, b) {
            if (a in d) {
              Object.defineProperty(d, a, {
                value: b,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              d[a] = b;
            }
            return d;
          }
          function q(b) {
            q = Object.setPrototypeOf ? Object.getPrototypeOf : function (b) {
              return b.__proto__ || Object.getPrototypeOf(b);
            };
            return q(b);
          }
          function r(c, a) {
            r = Object.setPrototypeOf || function (c, a) {
              c.__proto__ = a;
              return c;
            };
            return r(c, a);
          }
          function t(b) {
            if (b === undefined) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return b;
          }
          function u(c, a) {
            if (!a || typeof a != "object" && typeof a != "function") {
              return t(c);
            } else {
              return a;
            }
          }
          function v(e, a) {
            if (a == null || a > e.length) {
              a = e.length;
            }
            for (var f = 0, g = Array(a); f < a; f++) {
              g[f] = e[f];
            }
            return g;
          }
          function w(d, a, e) {
            d(e = {
              path: a,
              exports: {},
              require: function (c, a) {
                return function () {
                  throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                }(a == null && e.path);
              }
            }, e.exports);
            return e.exports;
          }
          var A = w(function (d) {
            (function () {
              var f = {}.hasOwnProperty;
              function b() {
                for (var c = [], a = 0; a < arguments.length; a++) {
                  var i = arguments[a];
                  if (i) {
                    var j = typeof i;
                    if (j === "string" || j === "number") {
                      c.push(i);
                    } else if (Array.isArray(i) && i.length) {
                      var k = b.apply(null, i);
                      if (k) {
                        c.push(k);
                      }
                    } else if (j === "object") {
                      for (var l in i) {
                        if (f.call(i, l) && i[l]) {
                          c.push(l);
                        }
                      }
                    }
                  }
                }
                return c.join(" ");
              }
              if (d.exports) {
                b.default = b;
                d.exports = b;
              } else {
                Dd.classNames = b;
              }
            })();
          });
          var x = typeof Symbol == "function" && Symbol.for;
          var z = x ? Symbol.for("react.element") : 60103;
          var D = x ? Symbol.for("react.portal") : 60106;
          var E = x ? Symbol.for("react.fragment") : 60107;
          var F = x ? Symbol.for("react.strict_mode") : 60108;
          var G = x ? Symbol.for("react.profiler") : 60114;
          var H = x ? Symbol.for("react.provider") : 60109;
          var I = x ? Symbol.for("react.context") : 60110;
          var J = x ? Symbol.for("react.async_mode") : 60111;
          var K = x ? Symbol.for("react.concurrent_mode") : 60111;
          var L = x ? Symbol.for("react.forward_ref") : 60112;
          var M = x ? Symbol.for("react.suspense") : 60113;
          var N = x ? Symbol.for("react.suspense_list") : 60120;
          var O = x ? Symbol.for("react.memo") : 60115;
          var P = x ? Symbol.for("react.lazy") : 60116;
          var Q = x ? Symbol.for("react.block") : 60121;
          var R = x ? Symbol.for("react.fundamental") : 60117;
          var S = x ? Symbol.for("react.responder") : 60118;
          var T = x ? Symbol.for("react.scope") : 60119;
          function U(c) {
            if (typeof c == "object" && c !== null) {
              var d = c.$$typeof;
              switch (d) {
                case z:
                  switch (c = c.type) {
                    case J:
                    case K:
                    case E:
                    case G:
                    case F:
                    case M:
                      return c;
                    default:
                      switch (c = c && c.$$typeof) {
                        case I:
                        case L:
                        case P:
                        case O:
                        case H:
                          return c;
                        default:
                          return d;
                      }
                  }
                case D:
                  return d;
              }
            }
          }
          function V(b) {
            return U(b) === K;
          }
          var W = {
            AsyncMode: J,
            ConcurrentMode: K,
            ContextConsumer: I,
            ContextProvider: H,
            Element: z,
            ForwardRef: L,
            Fragment: E,
            Lazy: P,
            Memo: O,
            Portal: D,
            Profiler: G,
            StrictMode: F,
            Suspense: M,
            isAsyncMode: function (b) {
              return V(b) || U(b) === J;
            },
            isConcurrentMode: V,
            isContextConsumer: function (b) {
              return U(b) === I;
            },
            isContextProvider: function (b) {
              return U(b) === H;
            },
            isElement: function (b) {
              return typeof b == "object" && b !== null && b.$$typeof === z;
            },
            isForwardRef: function (b) {
              return U(b) === L;
            },
            isFragment: function (b) {
              return U(b) === E;
            },
            isLazy: function (b) {
              return U(b) === P;
            },
            isMemo: function (b) {
              return U(b) === O;
            },
            isPortal: function (b) {
              return U(b) === D;
            },
            isProfiler: function (b) {
              return U(b) === G;
            },
            isStrictMode: function (b) {
              return U(b) === F;
            },
            isSuspense: function (b) {
              return U(b) === M;
            },
            isValidElementType: function (b) {
              return typeof b == "string" || typeof b == "function" || b === E || b === K || b === G || b === F || b === M || b === N || typeof b == "object" && b !== null && (b.$$typeof === P || b.$$typeof === O || b.$$typeof === H || b.$$typeof === I || b.$$typeof === L || b.$$typeof === R || b.$$typeof === S || b.$$typeof === T || b.$$typeof === Q);
            },
            typeOf: U
          };
          function X() {}
          function Y() {}
          w(function () {});
          w(function (b) {
            b.exports = W;
          });
          Object.prototype.hasOwnProperty;
          Object.prototype.propertyIsEnumerable;
          (function () {
            try {
              if (!Object.assign) {
                return false;
              }
              var f = new String("abc");
              f[5] = "de";
              if (Object.getOwnPropertyNames(f)[0] === "5") {
                return false;
              }
              for (var g = {}, a = 0; a < 10; a++) {
                g["_" + String.fromCharCode(a)] = a;
              }
              var b = Object.getOwnPropertyNames(g).map(function (b) {
                return g[b];
              });
              if (b.join("") !== "0123456789") {
                return false;
              }
              var d = {};
              "abcdefghijklmnopqrst".split("").forEach(function (b) {
                d[b] = b;
              });
              Object.keys(Object.assign({}, d)).join("");
            } catch (b) {
              return false;
            }
          })();
          Function.call.bind(Object.prototype.hasOwnProperty);
          Y.resetWarningCache = X;
          var Z = w(function (d) {
            d.exports = function () {
              function a() {
                return d;
              }
              d.isRequired = d;
              var b = {
                array: d,
                bool: d,
                func: d,
                number: d,
                object: d,
                string: d,
                symbol: d,
                any: d,
                arrayOf: a,
                element: d,
                elementType: d,
                instanceOf: a,
                node: d,
                objectOf: a,
                oneOf: a,
                oneOfType: a,
                shape: a,
                exact: a,
                checkPropTypes: Y,
                resetWarningCache: X
              };
              b.PropTypes = b;
              return b;
            }();
          });
          var $ = function () {
            if (typeof Map != "undefined") {
              return Map;
            }
            return function () {
              function a() {
                this.__entries__ = [];
              }
              Object.defineProperty(a.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
              });
              a.prototype.get = function (a) {
                var b = e(this.__entries__, a);
                var c = this.__entries__[b];
                return c && c[1];
              };
              a.prototype.set = function (a, b) {
                var c = e(this.__entries__, a);
                if (~c) {
                  this.__entries__[c][1] = b;
                } else {
                  this.__entries__.push([a, b]);
                }
              };
              a.prototype.delete = function (a) {
                var b = this.__entries__;
                var c = e(b, a);
                if (~c) {
                  b.splice(c, 1);
                }
              };
              a.prototype.has = function (a) {
                return !!~e(this.__entries__, a);
              };
              a.prototype.clear = function () {
                this.__entries__.splice(0);
              };
              a.prototype.forEach = function (f, a) {
                if (a === undefined) {
                  a = null;
                }
                for (var g = 0, h = this.__entries__; g < h.length; g++) {
                  var d = h[g];
                  f.call(a, d[1], d[0]);
                }
              };
              return a;
            }();
          }();
          var _ = Dd !== undefined && typeof document != "undefined" && Dd.document === document;
          var aa = b !== undefined && b.Math === Math ? b : Cd !== undefined && Cd.Math === Math ? Cd : Dd !== undefined && Dd.Math === Math ? Dd : Function("", "return this")();
          var ba = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(aa) : function (b) {
            return (// TOLOOK
              // TOLOOK
              setTimeout(function () {
                return b(Date.now());
              }, 1000 / 60)
            );
          };
          var ca = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
          var da = typeof MutationObserver != "undefined";
          var ea = function () {
            e.prototype.addObserver = function (b) {
              if (!~this.observers_.indexOf(b)) {
                this.observers_.push(b);
              }
              if (!this.connected_) {
                this.connect_();
              }
            };
            e.prototype.removeObserver = function (d) {
              var a = this.observers_;
              var b = a.indexOf(d);
              if (~b) {
                a.splice(b, 1);
              }
              if (!a.length && this.connected_) {
                this.disconnect_();
              }
            };
            e.prototype.refresh = function () {
              if (this.updateObservers_()) {
                this.refresh();
              }
            };
            e.prototype.updateObservers_ = function () {
              var b = this.observers_.filter(function (b) {
                b.gatherActive();
                return b.hasActive();
              });
              b.forEach(function (b) {
                return b.broadcastActive();
              });
              return b.length > 0;
            };
            e.prototype.connect_ = function () {
              if (_ && !this.connected_) {
                document.addEventListener("transitionend", this.onTransitionEnd_);
                Dd.addEventListener("resize", this.refresh);
                if (da) {
                  this.mutationsObserver_ = new MutationObserver(this.refresh);
                  this.mutationsObserver_.observe(document, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                  });
                } else {
                  document.addEventListener("DOMSubtreeModified", this.refresh);
                  this.mutationEventsAdded_ = true;
                }
                this.connected_ = true;
              }
            };
            e.prototype.disconnect_ = function () {
              if (_ && this.connected_) {
                document.removeEventListener("transitionend", this.onTransitionEnd_);
                Dd.removeEventListener("resize", this.refresh);
                if (this.mutationsObserver_) {
                  this.mutationsObserver_.disconnect();
                }
                if (this.mutationEventsAdded_) {
                  document.removeEventListener("DOMSubtreeModified", this.refresh);
                }
                this.mutationsObserver_ = null;
                this.mutationEventsAdded_ = false;
                this.connected_ = false;
              }
            };
            e.prototype.onTransitionEnd_ = function (d) {
              var a = d.propertyName;
              var b = a === undefined ? "" : a;
              if (ca.some(function (c) {
                return !!~b.indexOf(c);
              })) {
                this.refresh();
              }
            };
            e.getInstance = function () {
              if (!this.instance_) {
                this.instance_ = new e();
              }
              return this.instance_;
            };
            e.instance_ = null;
            return e;
          }();
          function fa(f, a) {
            for (var b = 0, g = Object.keys(a); b < g.length; b++) {
              var d = g[b];
              Object.defineProperty(f, d, {
                value: a[d],
                enumerable: false,
                writable: false,
                configurable: true
              });
            }
            return f;
          }
          function ga(b) {
            return b && b.ownerDocument && b.ownerDocument.defaultView || aa;
          }
          var ha = ma(0, 0, 0, 0);
          function ia(b) {
            return parseFloat(b) || 0;
          }
          function ja(d) {
            for (var a = [], b = 1; b < arguments.length; b++) {
              a[b - 1] = arguments[b];
            }
            return a.reduce(function (a, b) {
              return a + ia(d["border-" + b + "-width"]);
            }, 0);
          }
          var ka = typeof SVGGraphicsElement != "undefined" ? function (b) {
            return b instanceof ga(b).SVGGraphicsElement;
          } : function (b) {
            return b instanceof ga(b).SVGElement && typeof b.getBBox == "function";
          };
          function la(b) {
            if (_) {
              if (ka(b)) {
                return function (c) {
                  var a = c.getBBox();
                  return ma(0, 0, a.width, a.height);
                }(b);
              } else {
                return function (l) {
                  var a = l.clientWidth;
                  var b = l.clientHeight;
                  if (!a && !b) {
                    return ha;
                  }
                  var c = ga(l).getComputedStyle(l);
                  var d = function (g) {
                    for (var a = {}, b = 0, h = ["top", "right", "bottom", "left"]; b < h.length; b++) {
                      var d = h[b];
                      var i = g["padding-" + d];
                      a[d] = ia(i);
                    }
                    return a;
                  }(c);
                  var e = d.left + d.right;
                  var f = d.top + d.bottom;
                  var g = ia(c.width);
                  var m = ia(c.height);
                  if (c.boxSizing === "border-box") {
                    if (Math.round(g + e) !== a) {
                      g -= ja(c, "left", "right") + e;
                    }
                    if (Math.round(m + f) !== b) {
                      m -= ja(c, "top", "bottom") + f;
                    }
                  }
                  if (!function (b) {
                    return b === ga(b).document.documentElement;
                  }(l)) {
                    var n = Math.round(g + e) - a;
                    var j = Math.round(m + f) - b;
                    if (Math.abs(n) !== 1) {
                      g -= n;
                    }
                    if (Math.abs(j) !== 1) {
                      m -= j;
                    }
                  }
                  return ma(d.left, d.top, g, m);
                }(b);
              }
            } else {
              return ha;
            }
          }
          function ma(e, a, b, c) {
            return {
              x: e,
              y: a,
              width: b,
              height: c
            };
          }
          var na = function () {
            e.prototype.isActive = function () {
              var b = la(this.target);
              this.contentRect_ = b;
              return b.width !== this.broadcastWidth || b.height !== this.broadcastHeight;
            };
            e.prototype.broadcastRect = function () {
              var b = this.contentRect_;
              this.broadcastWidth = b.width;
              this.broadcastHeight = b.height;
              return b;
            };
            return e;
          }();
          function oa(d, a) {
            var b = function (h) {
              var a = h.x;
              var b = h.y;
              var c = h.width;
              var d = h.height;
              var e = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object;
              var f = Object.create(e.prototype);
              fa(f, {
                x: a,
                y: b,
                width: c,
                height: d,
                top: b,
                right: a + c,
                bottom: d + b,
                left: a
              });
              return f;
            }(a);
            fa(this, {
              target: d,
              contentRect: b
            });
          }
          var pa = function () {
            e.prototype.observe = function (c) {
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              if (typeof Element != "undefined" && Element instanceof Object) {
                if (!(c instanceof ga(c).Element)) {
                  throw new TypeError("parameter 1 is not of type \"Element\".");
                }
                var a = this.observations_;
                if (!a.has(c)) {
                  a.set(c, new na(c));
                  this.controller_.addObserver(this);
                  this.controller_.refresh();
                }
              }
            };
            e.prototype.unobserve = function (c) {
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              if (typeof Element != "undefined" && Element instanceof Object) {
                if (!(c instanceof ga(c).Element)) {
                  throw new TypeError("parameter 1 is not of type \"Element\".");
                }
                var a = this.observations_;
                if (a.has(c)) {
                  a.delete(c);
                  if (!a.size) {
                    this.controller_.removeObserver(this);
                  }
                }
              }
            };
            e.prototype.disconnect = function () {
              this.clearActive();
              this.observations_.clear();
              this.controller_.removeObserver(this);
            };
            e.prototype.gatherActive = function () {
              var c = this;
              this.clearActive();
              this.observations_.forEach(function (a) {
                if (a.isActive()) {
                  c.activeObservations_.push(a);
                }
              });
            };
            e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var c = this.callbackCtx_;
                var a = this.activeObservations_.map(function (b) {
                  return new oa(b.target, b.broadcastRect());
                });
                this.callback_.call(c, a, c);
                this.clearActive();
              }
            };
            e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            };
            e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            };
            return e;
          }();
          var qa = typeof WeakMap != "undefined" ? new WeakMap() : new $();
          var ra = function a(e) {
            if (!(this instanceof a)) {
              throw new TypeError("Cannot call a class as a function.");
            }
            if (!arguments.length) {
              throw new TypeError("1 argument required, but only 0 present.");
            }
            var b = ea.getInstance();
            var c = new pa(e, b, this);
            qa.set(this, c);
          };
          ["observe", "unobserve", "disconnect"].forEach(function (c) {
            ra.prototype[c] = function () {
              var a;
              return (a = qa.get(this))[c].apply(a, arguments);
            };
          });
          var ta = aa.ResizeObserver !== undefined ? aa.ResizeObserver : ra;
          function ua(b) {
            return b.charAt(0).toUpperCase() + b.substr(1);
          }
          function va(d, a, b) {
            return Math.min(Math.max(d, a), b);
          }
          var wa = {
            orientation: {
              horizontal: {
                dimension: "width",
                direction: "left",
                reverseDirection: "right",
                coordinate: "x"
              },
              vertical: {
                dimension: "height",
                direction: "top",
                reverseDirection: "bottom",
                coordinate: "y"
              }
            }
          };
          var xa = function (h) {
            (function (c, a) {
              if (typeof a != "function" && a !== null) {
                throw new TypeError("Super expression must either be null or a function");
              }
              c.prototype = Object.create(a && a.prototype, {
                constructor: {
                  value: c,
                  writable: true,
                  configurable: true
                }
              });
              if (a) {
                r(c, a);
              }
            })(f, h);
            var a;
            var i;
            var j;
            var k;
            j = f;
            k = function () {
              if (typeof Reflect == "undefined" || !Reflect.construct) {
                return false;
              }
              if (Reflect.construct.sham) {
                return false;
              }
              if (typeof Proxy == "function") {
                return true;
              }
              try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                return true;
              } catch (b) {
                return false;
              }
            }();
            function l() {
              var d;
              var e = q(j);
              if (k) {
                var b = q(this).constructor;
                d = Reflect.construct(e, arguments, b);
              } else {
                d = e.apply(this, arguments);
              }
              return u(this, d);
            }
            function f(d, a) {
              var o;
              (function (c, a) {
                if (!(c instanceof a)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              })(this, f);
              y(t(o = l.call(this, d, a)), "handleFormat", function (c) {
                var a = o.props.format;
                if (a) {
                  return a(c);
                } else {
                  return c;
                }
              });
              y(t(o), "handleUpdate", function () {
                if (o.slider) {
                  var c = o.props.orientation;
                  var a = ua(wa.orientation[c].dimension);
                  var b = o.slider[`offset${a}`];
                  var d = o.handle[`offset${a}`];
                  o.setState({
                    limit: b - d,
                    grab: d / 2
                  });
                }
              });
              y(t(o), "handleStart", function (c) {
                c.preventDefault();
                var a = o.props.onChangeStart;
                document.addEventListener("mousemove", o.handleDrag, {
                  passive: false
                });
                document.addEventListener("mouseup", o.handleEnd, {
                  passive: false
                });
                o.setState({
                  active: true
                }, function () {
                  if (a) {
                    a(c);
                  }
                });
              });
              y(t(o), "handleDrag", function (c) {
                c.preventDefault();
                c.stopPropagation();
                var a = o.props.onChange;
                if (o.handle && o.fill) {
                  o.handle.style.transition = undefined;
                  o.fill.style.transition = undefined;
                }
                var b = c.target;
                var d = b.className;
                var e = b.classList;
                var f = b.dataset;
                if (a && d !== "rangeslider__labels") {
                  var g = o.position(c);
                  if (e && e.contains("rangeslider__label-item") && f.value) {
                    g = parseFloat(f.value);
                  }
                  if (a) {
                    a(g, c);
                  }
                }
              });
              y(t(o), "handleEnd", function (c) {
                c.preventDefault();
                var a = o.props.onChangeComplete;
                if (o.handle && o.fill) {
                  o.handle.style.transition = "left 0.1s linear";
                  o.fill.style.transition = "width 0.1s linear";
                }
                o.setState({
                  active: false
                }, function () {
                  if (a) {
                    a(c);
                  }
                });
                document.removeEventListener("mousemove", o.handleDrag, {
                  passive: false
                });
                document.removeEventListener("mouseup", o.handleEnd, {
                  passive: false
                });
              });
              y(t(o), "handleKeyDown", function (c) {
                c.preventDefault();
                var a;
                var k = c.keyCode;
                var d = o.props;
                var e = d.value;
                var f = d.min;
                var g = d.max;
                var h = d.step;
                var i = d.onChange;
                switch (k) {
                  case 38:
                  case 39:
                    a = e + h > g ? g : e + h;
                    if (i) {
                      i(a, c);
                    }
                    break;
                  case 37:
                  case 40:
                    a = e - h < f ? f : e - h;
                    if (i) {
                      i(a, c);
                    }
                }
              });
              y(t(o), "getPositionFromValue", function (c) {
                var a = o.state.limit;
                var b = o.props;
                var d = b.min;
                var e = b.max;
                return Math.round((c - d) / (e - d) * a);
              });
              y(t(o), "getValueFromPosition", function (c) {
                var a = o.state.limit;
                var b = o.props;
                var d = b.orientation;
                var e = b.min;
                var f = b.max;
                var g = b.step;
                var h = va(c, 0, a) / (a || 1);
                var i = g * Math.round(h * (f - e) / g);
                return va(d === "horizontal" ? i + e : f - i, e, f);
              });
              y(t(o), "position", function (c) {
                var a = o.state.grab;
                var b = o.props;
                var d = b.orientation;
                var e = b.reverse;
                var f = b.scale;
                var g = o.slider;
                var h = wa.orientation[d].coordinate;
                var i = e ? wa.orientation[d].reverseDirection : wa.orientation[d].direction;
                var j = `client${ua(h)}`;
                var k = c.touches ? c.changedTouches[0][j] : c[j];
                var l = g.getBoundingClientRect()[i];
                var m = (e ? l - k - a : k - l - a) / f;
                return o.getValueFromPosition(m);
              });
              y(t(o), "coordinates", function (c) {
                var a = o.state;
                var b = a.limit;
                var d = a.grab;
                var e = o.props.orientation;
                var f = o.getValueFromPosition(c);
                var g = o.getPositionFromValue(f);
                var h = e === "horizontal" ? g + d : g;
                return {
                  fill: e === "horizontal" ? h - d : b - h,
                  handle: h,
                  label: h
                };
              });
              y(t(o), "renderLabels", function (b) {
                return Jd.default.createElement("ul", {
                  ref: function (b) {
                    o.labels = b;
                  },
                  className: A("rangeslider__labels")
                }, b);
              });
              o.state = {
                active: false,
                limit: 0,
                grab: 0
              };
              return o;
            }
            a = f;
            i = [{
              key: "componentDidMount",
              value: function () {
                this.handleUpdate();
                new ta(this.handleUpdate).observe(this.slider);
                if (this.handle) {
                  this.handle.addEventListener("touchmove", this.handleDrag, {
                    passive: false
                  });
                }
              }
            }, {
              key: "componentWillUnmount",
              value: function () {
                if (this.handle) {
                  this.handle.removeEventListener("touchmove", this.handleDrag, {
                    passive: false
                  });
                }
                document.removeEventListener("mousemove", this.handleDrag, {
                  passive: false
                });
                document.removeEventListener("mouseup", this.handleEnd, {
                  passive: false
                });
              }
            }, {
              key: "render",
              value: function () {
                var F;
                var H;
                var M = this;
                var c = this.props;
                var d = c.backgroundColor;
                var e = c.fillColor;
                var f = c.handleColor;
                var g = c.isDisabled;
                var h = c.value;
                var i = c.orientation;
                var j = c.className;
                var k = c.tooltip;
                var l = c.reverse;
                var m = c.labels;
                var n = c.min;
                var o = c.max;
                var p = c.handleLabel;
                var q = this.state.active;
                var r = wa.orientation[i].dimension;
                var s = l ? wa.orientation[i].reverseDirection : wa.orientation[i].direction;
                var t = this.getPositionFromValue(h);
                var u = this.coordinates(t);
                var N = {
                  backgroundColor: d
                };
                y(F = {}, r, `${u.fill}px`);
                y(F, "backgroundColor", e);
                y(F, "opacity", g ? 0.5 : 1);
                var w = F;
                y(H = {}, s, `${u.handle}px`);
                y(H, "backgroundColor", f);
                y(H, "opacity", g ? 0.5 : 0.9);
                var x = H;
                var z = k && q;
                var B = [];
                var C = m ? Object.keys(m) : [];
                if (C.length > 0) {
                  C = C.sort(function (c, a) {
                    if (l) {
                      return c - a;
                    } else {
                      return a - c;
                    }
                  });
                  var O;
                  var P = function (h, i) {
                    var j;
                    if (typeof Symbol == "undefined" || h[Symbol.iterator] == null) {
                      if (Array.isArray(h) || (j = function (d, a) {
                        if (d) {
                          if (typeof d == "string") {
                            return v(d, a);
                          }
                          var b = Object.prototype.toString.call(d).slice(8, -1);
                          if (b === "Object" && d.constructor) {
                            b = d.constructor.name;
                          }
                          if (b === "Map" || b === "Set") {
                            return Array.from(d);
                          } else if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) {
                            return v(d, a);
                          } else {
                            return undefined;
                          }
                        }
                      }(h)) || i && h && typeof h.length == "number") {
                        if (j) {
                          h = j;
                        }
                        var b = 0;
                        function a() {}
                        return {
                          s: a,
                          n: function () {
                            if (b >= h.length) {
                              return {
                                done: true
                              };
                            } else {
                              return {
                                done: false,
                                value: h[b++]
                              };
                            }
                          },
                          e: function (b) {
                            throw b;
                          },
                          f: a
                        };
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var k;
                    var l = true;
                    var m = false;
                    return {
                      s: function () {
                        j = h[Symbol.iterator]();
                      },
                      n: function () {
                        var b = j.next();
                        l = b.done;
                        return b;
                      },
                      e: function (b) {
                        m = true;
                        k = b;
                      },
                      f: function () {
                        try {
                          if (!(l || j.return == null)) {
                            j.return();
                          }
                        } finally {
                          if (m) {
                            throw k;
                          }
                        }
                      }
                    };
                  }(C);
                  try {
                    for (P.s(); !(O = P.n()).done;) {
                      var G = O.value;
                      var Q = this.getPositionFromValue(G);
                      var R = this.coordinates(Q);
                      var S = y({}, s, `${R.label}px`);
                      B.push(Jd.default.createElement("li", {
                        key: G,
                        className: A("rangeslider__label-item"),
                        "data-value": G,
                        onMouseDown: this.handleDrag,
                        onTouchStart: this.handleStart,
                        onTouchEnd: this.handleEnd,
                        style: S
                      }, this.props.labels[G]));
                    }
                  } catch (b) {
                    P.e(b);
                  } finally {
                    P.f();
                  }
                }
                return Jd.default.createElement("div", {
                  ref: function (b) {
                    M.slider = b;
                  },
                  className: A("rangeslider", `rangeslider-${i}`, {
                    "rangeslider-reverse": l
                  }, j),
                  onMouseDown: this.handleDrag,
                  onMouseUp: this.handleEnd,
                  onTouchEnd: this.handleDrag,
                  "aria-valuemin": n,
                  "aria-valuemax": o,
                  "aria-valuenow": h,
                  "aria-orientation": i
                }, Jd.default.createElement("div", {
                  className: "rangeslider__background",
                  style: N
                }), Jd.default.createElement("div", {
                  className: "rangeslider__fill",
                  ref: function (b) {
                    M.fill = b;
                  },
                  style: w
                }), Jd.default.createElement("div", {
                  ref: function (b) {
                    M.handle = b;
                  },
                  className: "rangeslider__handle",
                  onMouseDown: this.handleStart,
                  onTouchEnd: this.handleEnd,
                  onKeyDown: this.handleKeyDown,
                  style: x,
                  tabIndex: 0
                }, z ? Jd.default.createElement("div", {
                  ref: function (b) {
                    M.tooltip = b;
                  },
                  className: "rangeslider__handle-tooltip"
                }, Jd.default.createElement("span", null, this.handleFormat(h))) : null, Jd.default.createElement("div", {
                  className: "rangeslider__handle-label"
                }, p)), m ? this.renderLabels(B) : null);
              }
            }];
            if (i) {
              p(a.prototype, i);
            }
            return f;
          }(m.Component);
          y(xa, "propTypes", {
            min: Z.number,
            max: Z.number,
            step: Z.number,
            value: Z.number,
            orientation: Z.string,
            tooltip: Z.bool,
            reverse: Z.bool,
            labels: Z.object,
            handleLabel: Z.string,
            format: Z.func,
            onChangeStart: Z.func,
            onChange: Z.func,
            onChangeComplete: Z.func
          });
          y(xa, "defaultProps", {
            backgroundColor: "rgba(255,255,255,1)",
            fillColor: "rgba(255,255,255,1)",
            handleColor: "rgba(255,255,255,1)",
            isDisabled: false,
            min: 0,
            max: 100,
            step: 1,
            value: 0,
            orientation: "horizontal",
            tooltip: true,
            reverse: false,
            labels: {},
            handleLabel: ""
          });
          var ya = l.default = xa;
          function za(d, e) {
            var f = [];
            d.forEach(function (c) {
              var g;
              var m;
              var n;
              f.push((g = c.resolvePath, m = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              }, n = c.colour, m === undefined && (m = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                isRotate: false
              }), new Promise(function (d, b) {
                var a = new plugin.Loader();
                a.onLoad = function (a) {
                  var e = document.createElement("canvas");
                  var f = e.getContext("2d");
                  if (f !== null) {
                    var g = new Image();
                    g.onload = function () {
                      URL.revokeObjectURL(g.src);
                      var a = m.width === 0 ? g.width : m.width;
                      var b = m.height === 0 ? g.height : m.height;
                      e.width = a;
                      e.height = b;
                      f.clearRect(0, 0, a, b);
                      f.translate(a / 2, b / 2);
                      if (m.isRotate) {
                        f.rotate(Math.PI * 270 / 180);
                        f.drawImage(g, m.x, m.y, b, a, -b / 2, -a / 2, b, a);
                      } else {
                        f.drawImage(g, m.x, m.y, a, b, -a / 2, -b / 2, a, b);
                      }
                      var c = f.getImageData(0, 0, a, b);
                      var h = c.data;
                      if (n) {
                        for (var i = 0, j = h.length; i < j; i += 4) {
                          h[i] = n.r;
                          h[i + 1] = n.g;
                          h[i + 2] = n.b;
                        }
                      }
                      f.putImageData(c, 0, 0);
                      d(e.toDataURL());
                    };
                    g.onerror = function () {
                      b(Error("ImageBase64 load image failed"));
                    };
                    g.src = URL.createObjectURL(a.response);
                  }
                };
                a.onError = function (c) {
                  b(c);
                };
                a.load([{
                  src: g,
                  type: plugin.LoadType.Blob
                }]);
              })));
            });
            Promise.all(f).then(function (b) {
              var d = [];
              b.forEach(function (b) {
                d.push(b);
              });
              if (e) {
                e(d, undefined);
              }
            }).catch(function (b) {
              if (e) {
                e(undefined, b);
              }
            });
          }
          var Aa = {};
          function Ba(l, a, b) {
            var c;
            var m = this;
            var e = l.src;
            var n = "unknown";
            n = e.indexOf(".css") !== -1 ? "css" : n;
            n = (c = e).indexOf(".jpg") !== -1 || c.indexOf(".png") !== -1 ? "image" : n;
            var f = shell.Error;
            var h = shell.ClientError;
            var o = f && new f(h.Domain, h.GameLoadResourceError);
            var j = a.resource.resolveUrl(e);
            return new Promise(function (c, d) {
              return __awaiter(m, undefined, undefined, function () {
                var f;
                return __generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      e.trys.push([0, 9,, 10]);
                      if (n !== "image") {
                        return [3, 5];
                      } else if (l.tint) {
                        return [4, (g = [{
                          resolvePath: j,
                          colour: l.tint
                        }], new Promise(function (h, a) {
                          za(g, function (b, c) {
                            if (c || b && b.length === 0) {
                              var d = shell.Error;
                              var e = shell.ClientError;
                              var f = d && new d(e.Domain, e.GameLoadResourceError);
                              a(c || f);
                            }
                            h(b);
                          });
                        }))];
                      } else {
                        return [3, 2];
                      }
                    case 1:
                      f = e.sent();
                      c(f[0]);
                      return [3, 4];
                    case 2:
                      return [4, Ea(j, b)];
                    case 3:
                      f = e.sent();
                      c(f);
                      e.label = 4;
                    case 4:
                      return [3, 8];
                    case 5:
                      if (n !== "css") {
                        return [3, 7];
                      } else {
                        return [4, Fa(j, a, b)];
                      }
                    case 6:
                      f = e.sent();
                      c(f);
                      return [3, 8];
                    case 7:
                      d(o);
                      e.label = 8;
                    case 8:
                      return [3, 10];
                    case 9:
                      e.sent();
                      d(o);
                      return [3, 10];
                    case 10:
                      return [2];
                  }
                  var g;
                });
              });
            });
          }
          function Ca(g, a, b) {
            return __awaiter(this, undefined, undefined, function () {
              var c;
              var h;
              return __generator(this, function (d) {
                switch (d.label) {
                  case 0:
                    if (g.cssFile.endsWith(".css")) {
                      return [4, Ba({
                        src: g.cssFile
                      }, a, b)];
                    } else {
                      return [3, 2];
                    }
                  case 1:
                    c = d.sent();
                    return [3, 3];
                  case 2:
                    c = g.cssFile;
                    d.label = 3;
                  case 3:
                    if (g.tint) {
                      return [4, Ba({
                        src: g.imageFile,
                        tint: g.tint
                      }, a, b)];
                    } else {
                      return [3, 6];
                    }
                  case 4:
                    h = d.sent();
                    return [4, Da(c, a, h, true, b)];
                  case 5:
                    c = d.sent();
                    return [3, 8];
                  case 6:
                    return [4, Da(c, a, g.imageFile, false, b)];
                  case 7:
                    c = d.sent();
                    d.label = 8;
                  case 8:
                    if (g.appendHeader) {
                      (function (f, h) {
                        var b = [];
                        var c = h.bundleInfo.name;
                        if (!Aa[c]) {
                          Aa[c] = [];
                        }
                        if (!Array.isArray(f)) {
                          f = [f];
                        }
                        var i = Aa[c].length + 1;
                        f.forEach(function (c, a) {
                          var d = i + a;
                          var e = "$CSS-" + h.bundleInfo.name + "-" + d;
                          b.push(e);
                          (function (e, a, b) {
                            if (Aa[a].indexOf(e) === -1) {
                              var c = document.createElement("style");
                              c.id = e;
                              c.innerHTML = b;
                              document.head.appendChild(c);
                              Aa[a].push(e);
                            }
                          })(e, h.bundleInfo.name, c);
                        });
                      })(c, a);
                    }
                    return [2, c];
                }
              });
            });
          }
          function Da(g, h, b, c, i) {
            if (c === undefined) {
              c = false;
            }
            return new Promise(function (a, d) {
              if (c) {
                g = g.replace(/url\((.*?)\)/g, function () {
                  return "url(" + b + ")";
                });
                a(g);
              } else {
                (function (h, a) {
                  var b = this;
                  var c = shell.Error;
                  var d = shell.ClientError;
                  var i = c && new c(d.Domain, d.GameLoadResourceError);
                  return new Promise(function (f, d) {
                    return __awaiter(b, undefined, undefined, function () {
                      var b;
                      return __generator(this, function (c) {
                        switch (c.label) {
                          case 0:
                            c.trys.push([0, 2,, 3]);
                            return [4, Ga(h, a)];
                          case 1:
                            b = c.sent();
                            f(b);
                            return [3, 3];
                          case 2:
                            c.sent();
                            d(i);
                            return [3, 3];
                          case 3:
                            return [2];
                        }
                      });
                    });
                  });
                })(h.resource.resolveUrl(b), i).then(function (c) {
                  g = g.replace(/url\((.*?)\)/g, function () {
                    return "url(" + URL.createObjectURL(c) + ")";
                  });
                  a(g);
                }).catch(d);
              }
            });
          }
          function Ea(f, a) {
            var b = new plugin.Loader();
            return new Promise(function (c, d) {
              b.onLoad = function (b) {
                c(b.response);
              };
              b.onError = function (b) {
                d(b);
              };
              b.load([{
                src: f,
                type: plugin.LoadType.Image,
                maxAttemptCount: a
              }]);
            });
          }
          function Fa(g, f, a) {
            var b = new plugin.Loader();
            return new Promise(function (d, c) {
              b.onLoad = function (b) {
                var a = function (c, d) {
                  return c.replace(/url\((.*?)\)/g, function (b, a) {
                    return "url(" + d.resource.resolveUrl(a) + ")";
                  });
                }(b.response, f);
                d(a);
              };
              b.onError = function (b) {
                c(b);
              };
              b.load([{
                src: g,
                type: plugin.LoadType.Text,
                maxAttemptCount: a
              }]);
            });
          }
          function Ga(f, a) {
            var b = new plugin.Loader();
            return new Promise(function (c, d) {
              b.onLoad = function (b) {
                c(b.response);
              };
              b.onError = function (b) {
                d(b);
              };
              b.load([{
                src: f,
                type: plugin.LoadType.Blob,
                maxAttemptCount: a
              }]);
            });
          }
          function Ha(e, a) {
            var b = {};
            for (var c in a) {
              if (e.hasOwnProperty(c)) {
                b[e[c]] = a[c];
              } else {
                b[c] = a[c];
              }
            }
            return b;
          }
          Ha({
            unloadBundleAsset: "releaseBundleAsset",
            unload: "release",
            unloadBundle: "releaseBundle",
            deleteBundle: "removeBundle",
            loadByBundleAsset: "loadBundleAsset",
            loadRemoteBySingle: "loadRemoteSingle"
          }, c);
          var Ia = Ha({
            convertNodeSpace: "convertToNodeSpace",
            convertNodeSpaceAR: "convertToNodeSpaceAR",
            getAbsolutePos: "getAbsolutePosition",
            getAbsoluteXPos: "getAbsoluteX",
            getAbsoluteYPos: "getAbsoluteY",
            setAbsolutePos: "setAbsolutePosition",
            setAbsoluteXPos: "setAbsoluteX",
            setAbsoluteYPos: "setAbsoluteY",
            transferToNewParent: "transferToParent",
            getSharedSimpleScheduler: "getSharedScheduler",
            delay: "delayCallback",
            timeout: "timeoutCallback",
            selector: "selectorCallback",
            sequence: "sequenceCallback",
            spawn: "spawnCallback",
            waterfall: "waterfCallback",
            condition: "condCallback",
            defer: "deferCallback",
            tick: "tickCallback",
            observe: "observeCallback",
            formatLeadingZero: "formatTwoDigit",
            formatDateTime: "formatDate",
            isRightToLeft: "isRTL",
            getLocationProtocol: "getProtocol",
            getLocationOrigin: "getOrigin"
          }, Fd);
          function Ja(i, a) {
            if (i.parentElement && i.offsetWidth !== 0) {
              for (var b = i.parentElement.offsetWidth, c = function (a) {
                  i.style.fontSize = `${a}px`;
                }, d = 1, j = a, k = d; d <= j;) {
                var l = Math.floor((d + j) / 2);
                c(l);
                if (i.offsetWidth <= b) {
                  k = l;
                  d = l + 1;
                } else {
                  j = l - 1;
                }
              }
              c(k);
            }
          }
          function Ka(c, a) {
            if (a === undefined) {
              a = 1;
            }
            return `rgba(${c.r},${c.g},${c.b},${(c.a / 255 * a).toFixed(2)})`;
          }
          var La;
          var Ma;
          var Na;
          var Oa;
          var Pa;
          var Qa;
          var Ra;
          var Kd = function () {
            e.prototype.setupContext = function (b) {
              this.o = b;
            };
            Object.defineProperty(e.prototype, "context", {
              get: function () {
                return this.o;
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.setupAudio = function (b) {
              this.p = b;
            };
            e.prototype.playClick = function () {
              if (h.getPreference("setting_menu").soundOn && this.p) {
                this.p.play();
              }
            };
            e.prototype.resolveCSS = function (c) {
              var d = this;
              return c.replace(/url\((.*?)\)/g, function (b, a) {
                return `url(${d.o.resource.resolveUrl(a)})`;
              });
            };
            e.prototype.setupColoredImages = function (e, a) {
              var b;
              var f;
              if (a) {
                b = "texture/legacy/slot_menu_legacy.png";
                f = ".ic_nav_bonus_wallet_small{background-position:59.78260869565217% 99.45652173913044%}.ic_nav_bonus_wallet_small,.ic_nav_free_game_small{background-image:url(slotMenuImage);background-size:483.3333333333333% 483.3333333333333%;height:48px;width:48px}.ic_nav_free_game_small{background-position:86.41304347826087% 99.45652173913044%}.ic_nav_spin_turbo_off{background-position:.8064516129032258% .8064516129032258%}.ic_nav_spin_turbo_off,.ic_nav_spin_turbo_on{background-image:url(slotMenuImage);background-size:214.8148148148148% 214.8148148148148%;height:108px;width:108px}.ic_nav_spin_turbo_on{background-position:.8064516129032258% 88.70967741935483%}.ic_nav_wallet_small{background-image:url(slotMenuImage);background-position:99.45652173913044% 59.78260869565217%;background-size:483.3333333333333% 483.3333333333333%;height:48px;width:48px}.icon_auto_spin_menu{background-image:url(slotMenuImage);background-position:88.70967741935483% .8064516129032258%;background-size:214.8148148148148% 214.8148148148148%;height:108px;width:108px}";
              } else {
                b = "texture/slot_menu.png";
                f = ".ic_chip{background-position:37.414965986394556% 1.5873015873015872%}.ic_chip,.ic_coupon{background-image:url(slotMenuImage);background-size:590% 205%;height:60px;width:60px}.ic_coupon{background-position:37.414965986394556% 98.41269841269842%}.ic_free_game{background-position:58.16326530612245% 1.5873015873015872%}.ic_free_game,.ic_rollover{background-image:url(slotMenuImage);background-size:590% 205%;height:60px;width:60px}.ic_rollover{background-position:58.16326530612245% 98.41269841269842%}.ic_spin{background-position:78.91156462585035% 1.5873015873015872%}.ic_spin,.ic_wallet_open{background-image:url(slotMenuImage);background-size:590% 205%;height:60px;width:60px}.ic_wallet_open{background-position:78.91156462585035% 98.41269841269842%}.ic_win{background-position:99.65986394557824% 1.5873015873015872%;background-size:590% 205%;height:60px;width:60px}.ic_win,.menu_close_button{background-image:url(slotMenuImage)}.menu_close_button{background-position:68.75% 68.75%;background-size:322.22222222222223% 322.22222222222223%;height:72px;width:72px}";
              }
              Ca({
                cssFile: f,
                tint: e,
                imageFile: b,
                appendHeader: true
              }, this.context);
              Ca({
                cssFile: ".rangeslider{display:block;position:relative}.rangeslider-horizontal,.rangeslider__handle{height:16px}.rangeslider__background{background-color:#fff;width:100%}.rangeslider__background,.rangeslider__fill{height:1.5px;position:absolute;top:50%;touch-action:none}.rangeslider__fill{background-color:#1e88e5;display:block}.rangeslider__handle{background:#fff;background-clip:content-box;border-radius:50%;box-shadow:0 1px 1px transparent;display:inline-block;position:absolute;top:54%;touch-action:none;width:16px}.ltr-slider-holder .slider-horizontal .rangeslider .rangeslider__handle{transform:translate3d(-50%,-50%,0)}.rtl-slider-holder .slider-horizontal .rangeslider .rangeslider__handle{transform:translate3d(50%,-50%,0)}.rangeslider__handle:after{bottom:-16px;content:\"\";left:-16px;position:absolute;right:-16px;top:-16px}#slot-menu-container{color:#888;left:0;overflow:hidden;position:absolute;text-align:center;top:0}.ic_close{background-image:url(texture/slot_menu.png)}.menu_close_button{background-image:url(texture/legacy/slot_menu_legacy.png)}.slot_menu_scroller{content:\"allscroll button[disabled]{pointer-events:none;}` \"}",
                imageFile: b,
                appendHeader: true
              }, this.context);
            };
            e.prototype.getImage = function (b) {
              return this.u[b];
            };
            Object.defineProperty(e.prototype, "clickEvent", {
              get: function () {
                return this.l;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "isRTL", {
              get: function () {
                return shell.isRTLLanguage();
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.m = function () {
              var c = ["data:image/jpeg;base64", "1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g", "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="];
              return function (a) {
                return c[Dd.Number(a)];
              };
            };
            e.prototype.S = function (b) {
              return [1, 3][b];
            };
            e.prototype.O = function (c) {
              var a;
              return [10, 11][(a = c, a ? 0 : 1)];
            };
            e.prototype.C = function (c) {
              var a;
              return [fb.min, fb.max][(a = c, a ? 1 : 0)];
            };
            return e;
          }();
          var $a = new Kd();
          var _a = shell.environment.getOrientationMode() === "land";
          var ab = _a ? 20 : 32;
          var bb = _a ? 12 : 16;
          var cb = _a ? 9 : 12;
          var db = new (function () {
            e.prototype.enable = function () {
              if (!this.k) {
                $a.context.event.emit("Shell.ToggleNoSleep", true);
                this.k = true;
              }
            };
            e.prototype.disable = function () {
              if (this.k) {
                $a.context.event.emit("Shell.ToggleNoSleep", false);
                this.k = false;
              }
            };
            return e;
          }())();
          var eb = {
            isFinish: false
          };
          var fb = {
            frequency: 120,
            min: 96,
            max: 120
          };
          (function (b) {
            b[b.Normal = 0] = "Normal";
            b[b.Expanded = 1] = "Expanded";
          })(La || (La = {}));
          (function (b) {
            b[b.Hide = 0] = "Hide";
            b[b.Show = 1] = "Show";
          })(Ma || (Ma = {}));
          (function (b) {
            b[b.Hide = 0] = "Hide";
            b[b.Show = 1] = "Show";
          })(Na || (Na = {}));
          (function (b) {
            b[b.LEGACY = 0] = "LEGACY";
            b[b.NEW = 1] = "NEW";
          })(Oa || (Oa = {}));
          e("RegionMode", Pa);
          (function (b) {
            b[b.EURO = 0] = "EURO";
            b[b.ASIA = 1] = "ASIA";
            b[b.PORTUGAL = 2] = "PORTUGAL";
            b[b.GERMANY = 3] = "GERMANY";
            b[b.LITHUANIA = 4] = "LITHUANIA";
          })(Pa || e("RegionMode", Pa = {}));
          (function (b) {
            b[b.CASH = 1] = "CASH";
            b[b.FREE_GAME = 2] = "FREE_GAME";
            b[b.BONUS = 3] = "BONUS";
          })(Qa || (Qa = {}));
          (function (b) {
            b[b.BalanceLessThan = 0] = "BalanceLessThan";
            b[b.BalanceMoreThan = 1] = "BalanceMoreThan";
            b[b.SingleWinMoreThan = 2] = "SingleWinMoreThan";
          })(Ra || (Ra = {}));
          var gb;
          var Ld = new (function () {
            Object.defineProperty(e.prototype, "slotMenuDimBg", {
              get: function () {
                return {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: "0",
                  backgroundColor: "rgb(12, 18, 35)",
                  transition: "0.2s"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "slotMenuTitleTxt", {
              get: function () {
                return {
                  margin: "auto",
                  marginTop: "15px",
                  color: "white",
                  fontSize: "14px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "footerHolderCont", {
              get: function () {
                return {
                  height: "28px",
                  width: "98%",
                  paddingLeft: "1%",
                  paddingRight: "1%",
                  position: "absolute",
                  marginTop: "16px",
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "footerObjCont", {
              get: function () {
                return {
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  width: "116px",
                  height: "28px",
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: "8px 8px 8px 8px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "footerImgCont", {
              get: function () {
                return {
                  maxWidth: "20px",
                  maxHeight: "20px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "footerAmtCont", {
              get: function () {
                return {
                  justifyContent: "center",
                  display: "flex",
                  width: "90px",
                  height: "24px",
                  whiteSpace: "nowrap"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinOptHeader", {
              get: function () {
                return {
                  width: "100%",
                  height: "51px",
                  display: "flex"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinOptSubtitleHolder", {
              get: function () {
                return {
                  textAlign: "left",
                  fontSize: "12.5px",
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  flexDirection: "row"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinAmtSelect", {
              get: function () {
                return {
                  width: "100%",
                  height: "68px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                  paddingTop: "10px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "commonDisplayContent", {
              get: function () {
                return {
                  display: "flex",
                  justifyContent: "space-between"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "alignCenter", {
              get: function () {
                return {
                  alignSelf: "center"
                };
              },
              enumerable: false,
              configurable: true
            });
            return e;
          }())();
          var ib = new (function () {
            e.prototype.updateAppearanceInfo = function (b) {
              if (b.themeColor) {
                this._ = Ka(b.themeColor);
              }
              if (b.halfThemeColor) {
                this.j = Ka(b.halfThemeColor);
              }
              if (b.spinStartLabelColor) {
                this.M = Ka(b.spinStartLabelColor);
              }
              if (b.spinStartLabelHalfColor) {
                this.T = Ka(b.spinStartLabelHalfColor);
              }
              if (b.normalButtonColor) {
                this.A = Ka(b.normalButtonColor);
              }
              if (b.disabledButtonColor) {
                this.L = Ka(b.disabledButtonColor);
              }
              if (b.disabledButtonColor) {
                this.R = Ka(b.disabledButtonColor, 0.5);
              }
              if (b.disabledSpinStartLabelColor) {
                this.N = Ka(b.disabledSpinStartLabelColor);
              }
              if (b.labelColor) {
                this.F = Ka(b.labelColor);
              }
              if (b.disabledLabelColor) {
                this.I = Ka(b.disabledLabelColor);
              }
              if (b.enabledSwitchButtonColor) {
                this.D = Ka(b.enabledSwitchButtonColor);
              }
              if (b.disabledSwitchButtonColor) {
                this.P = Ka(b.disabledSwitchButtonColor);
              }
              if (b.sliderLineColorTrue) {
                this.V = Ka(b.sliderLineColorTrue);
              }
              if (b.sliderLineColorFalse) {
                this.W = Ka(b.sliderLineColorFalse);
              }
            };
            Object.defineProperty(e.prototype, "themeColor", {
              get: function () {
                return this._;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "halfThemeColor", {
              get: function () {
                return this.j;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinStartLabelColor", {
              get: function () {
                return this.M;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinStartLabelHalfColor", {
              get: function () {
                return this.T;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "borderRadius", {
              get: function () {
                return this.B;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "normalButtonColor", {
              get: function () {
                return this.A;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "disabledButtonColor", {
              get: function () {
                return this.L;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "disabledButtonColorHalfOpacity", {
              get: function () {
                return this.R;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "disabledSpinStartLabelColor", {
              get: function () {
                return this.N;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "enabledSwitchButtonColor", {
              get: function () {
                return this.D;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "disabledSwitchButtonColor", {
              get: function () {
                return this.P;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "labelColor", {
              get: function () {
                return this.F;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "disabledLabelColor", {
              get: function () {
                return this.I;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "sliderLineColorTrue", {
              get: function () {
                return this.V;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "sliderLineColorFalse", {
              get: function () {
                return this.W;
              },
              enumerable: false,
              configurable: true
            });
            return e;
          }())();
          var jb = new (function () {
            e.prototype.getAutoSpinMaxCount = function () {
              var c = kb.regionMode === Pa.ASIA ? 1000 : 100;
              var a = kb.autoPlayMaxNum;
              if (a !== undefined && a > 0) {
                return kb.autoPlayMaxNum;
              } else {
                return c || 100;
              }
            };
            e.prototype.isAutoSpinStopEnable = function () {
              if (kb.autoPlayConfig !== undefined) {
                return kb.autoPlayConfig === 2;
              } else {
                return kb.regionMode !== Pa.ASIA;
              }
            };
            e.prototype.isTurboSpinEnable = function () {
              if (kb.turboSpinEnable !== undefined) {
                return kb.turboSpinEnable;
              } else {
                return kb.regionMode !== Pa.PORTUGAL;
              }
            };
            e.prototype.isMaxPayoutEnable = function () {
              var b = kb.regionMode === Pa.GERMANY || kb.regionMode === Pa.LITHUANIA;
              if (kb.maxPayoutEnable !== undefined) {
                return kb.maxPayoutEnable;
              } else {
                return b;
              }
            };
            e.prototype.isMaxPayoutDescriptionEnable = function () {
              return this.isMaxPayoutEnable() && kb.rtp && kb.maxPayout && kb.maxPayoutProbability;
            };
            return e;
          }())();
          var kb = new (function () {
            e.prototype.updateSessionInfo = function (c) {
              if (c.operatorJurisdictionConfig) {
                var a = c.operatorJurisdictionConfig.rtp;
                this.tt = c.operatorJurisdictionConfig.maxPayout;
                this.it = c.operatorJurisdictionConfig.maxPayoutProbability;
                this.regionMode = c.operatorJurisdictionConfig.jurisdictionId;
                if (a && a.df) {
                  if (a.df.max !== a.df.min) {
                    this.nt = a.df.min + "% - " + a.df.max + "%";
                  } else {
                    this.nt = a.df.min + "%";
                  }
                }
                this.et = c.operatorJurisdictionConfig.autoPlayMaxNum;
                this.ot = c.operatorJurisdictionConfig.autoPlayConfig;
                this.rt = c.operatorJurisdictionConfig.turboSpinEnable;
                this.st = c.operatorJurisdictionConfig.maxPayoutEnable;
              }
            };
            Object.defineProperty(e.prototype, "isLegacyMode", {
              get: function () {
                return this.H;
              },
              set: function (b) {
                this.H = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "currentBalance", {
              get: function () {
                return this.Y;
              },
              set: function (b) {
                this.Y = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "gameThemeColor", {
              get: function () {
                return this.G;
              },
              set: function (b) {
                this.G = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLineValue", {
              get: function () {
                return this.$;
              },
              set: function (b) {
                this.$ = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLevelValue", {
              get: function () {
                return this.K;
              },
              set: function (b) {
                this.K = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betSizeValue", {
              get: function () {
                return this.J;
              },
              set: function (b) {
                this.J = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "winAmount", {
              get: function () {
                return this.U;
              },
              set: function (b) {
                this.U = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "additionalData", {
              get: function () {
                return this.q;
              },
              set: function (b) {
                this.q = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "totalAdditionalData", {
              get: function () {
                return this.Z;
              },
              set: function (b) {
                this.Z = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "walletState", {
              get: function () {
                return this.X;
              },
              set: function (b) {
                this.X = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "playClickSound", {
              get: function () {
                return this.ut;
              },
              set: function (b) {
                this.ut = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "rtp", {
              get: function () {
                return this.nt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "maxPayout", {
              get: function () {
                return this.tt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "maxPayoutProbability", {
              get: function () {
                return this.it;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "autoPlayMaxNum", {
              get: function () {
                return this.et;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "autoPlayConfig", {
              get: function () {
                return this.ot;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "turboSpinEnable", {
              get: function () {
                return this.rt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "maxPayoutEnable", {
              get: function () {
                return this.st;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "isAutoSpinStop", {
              get: function () {
                return this.X !== Qa.FREE_GAME && jb.isAutoSpinStopEnable();
              },
              enumerable: false,
              configurable: true
            });
            return e;
          }())();
          var lb = function () {
            Object.defineProperty(e.prototype, "baseBetOptContText", {
              get: function () {
                return {
                  width: "25%",
                  color: "white",
                  fontSize: "12px",
                  whiteSpace: "pre-line",
                  margin: "0 1% 0 1%"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "baseBetSelector", {
              get: function () {
                return {
                  position: "absolute",
                  borderColor: "rgb(38, 38, 51)",
                  borderStyle: "solid",
                  borderWidth: "thin",
                  marginBottom: "20px",
                  height: `${ab + ab * 0.125}px`,
                  lineHeight: `${ab + ab * 0.125}px`
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "baseBetScrollerHolder", {
              get: function () {
                return {
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  paddingBottom: "10px",
                  transform: "translateZ(0)"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betOptContView", {
              get: function () {
                return this.betOptContViewStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betSelector", {
              get: function () {
                return this.betSelectorStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betScrollerHolder", {
              get: function () {
                return this.betScrollerHolderStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLabelHolder", {
              get: function () {
                return {
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  paddingTop: "3%",
                  paddingBottom: "3%",
                  transform: "translateZ(0)",
                  height: "34px",
                  alignItems: "center"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betOptCont", {
              get: function () {
                return Gd(Gd({}, this.baseBetOptContText), {
                  fontSize: `${cb}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.betAmtCont = function (b) {
              return Gd(Gd({}, this.baseBetOptContText), {
                color: `${b}`,
                margin: "auto",
                fontSize: `${cb}px`
              });
            };
            Object.defineProperty(e.prototype, "betSymText", {
              get: function () {
                return {
                  display: "block",
                  position: "relative",
                  width: "5%",
                  fontSize: `${ab * 0.5}px`,
                  marginTop: `${ab * 2.1}px`
                };
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.ct = function (b) {
              return {
                position: "absolute",
                opacity: `${b}`,
                pointerEvents: "none",
                transform: "translateZ(0)"
              };
            };
            Object.defineProperty(e.prototype, "mask", {
              get: function () {
                return this.ct(0.5);
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.lt = function () {
              return Gd(Gd({}, this.ct(1)), {
                height: `${ab}px`
              });
            };
            Object.defineProperty(e.prototype, "baseTopGradientMask", {
              get: function () {
                return Gd(Gd({}, this.lt()), {
                  marginTop: `${-ab * 0.09375}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "baseBtmGradientMask", {
              get: function () {
                return Gd(Gd({}, this.lt()), {
                  marginTop: `${ab * 4.09375}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "topMask", {
              get: function () {
                return this.topMaskStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "btmMask", {
              get: function () {
                return this.btmMaskStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "topGradientMask", {
              get: function () {
                return this.topGradientMaskStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "btmGradientMask", {
              get: function () {
                return this.btmGradientMaskStyle;
              },
              enumerable: false,
              configurable: true
            });
            return e;
          }();
          var mb = function () {
            e.prototype.commonContainer = function (b) {
              return {
                transition: "opacity 0.5s ease-in-out",
                opacity: `${b}`,
                backgroundColor: "rgb(48, 48, 61)"
              };
            };
            e.prototype.betOptHeader = function (c) {
              var a = this.commonContainer(c);
              return Gd(Gd({}, a), {
                marginTop: `${_a ? 10 : 0}px`,
                width: "100%",
                height: "53px",
                display: "flex"
              });
            };
            Object.defineProperty(e.prototype, "titleTxt", {
              get: function () {
                var b = bb;
                return Gd(Gd({}, Ld.slotMenuTitleTxt), {
                  fontSize: `${b}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.betOptFooter = function (c) {
              var a = this.commonContainer(c);
              return Gd(Gd({}, a), {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              });
            };
            e.prototype.footerStyle = function () {
              return {};
            };
            e.prototype.footer = function (b) {
              return this.footerStyle(b);
            };
            e.prototype.reminderBoardStyle = function () {
              return {};
            };
            e.prototype.getReminderBoardStyle = function () {
              return Gd(Gd({}, {
                pointerEvents: "none",
                position: "absolute",
                backgroundColor: "rgb(48, 48, 61)",
                width: "88%",
                borderRadius: "8px",
                height: "auto",
                borderColor: "rgb(38, 38, 51)",
                borderStyle: "solid",
                borderWidth: "thin",
                marginLeft: "20px",
                marginRight: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                zIndex: -1
              }), this.reminderBoardStyle());
            };
            e.prototype.getFeatureBuyReminderBoardStyle = function () {
              return Gd(Gd({}, {
                pointerEvents: "none",
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0,0.8)",
                width: "65%",
                borderRadius: "5px",
                height: "auto",
                marginLeft: "17.5%",
                marginRight: "17.5%",
                paddingTop: "10px",
                paddingBottom: "10px",
                zIndex: -1
              }), this.reminderBoardStyle());
            };
            e.prototype.ht = function () {
              return {
                margin: "5px 2px 5px 2px",
                color: "white",
                fontSize: "12px"
              };
            };
            Object.defineProperty(e.prototype, "topBetAmt", {
              get: function () {
                if (_a) {
                  return {};
                } else {
                  return {
                    display: "flex",
                    justifyContent: "center",
                    margin: "0px 21px 0px 21px"
                  };
                }
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "progRemindTxt", {
              get: function () {
                var c = Gd(Gd({}, this.ht()), {
                  opacity: 0.5
                });
                var a = Gd(Gd({}, this.ht()), {
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "10px"
                });
                if (_a) {
                  return a;
                } else {
                  return c;
                }
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "btmBetAmt", {
              get: function () {
                return {
                  display: "flex",
                  justifyContent: "center",
                  margin: "0px 30px 0px 30px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betAmtTitleTxt", {
              get: function () {
                return Gd(Gd({}, this.ht()), {
                  fontSize: `${_a ? "" : "10px"}`
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betAmtTxt", {
              get: function () {
                return Gd(Gd({}, this.ht()), {
                  color: `${ib.themeColor}`,
                  fontSize: `${_a ? "" : "10px"}`
                });
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.dimBg = function (b) {
              return Gd(Gd({}, Ld.slotMenuDimBg), {
                opacity: "0",
                pointerEvents: b ? "auto" : "none"
              });
            };
            e.prototype.betOptViewStyle = function () {
              return {};
            };
            e.prototype.betOptView = function (b) {
              return Gd(Gd({}, {
                paddingBottom: b,
                transform: "translateZ(0)",
                height: "auto",
                width: "100%",
                position: "absolute"
              }), this.betOptViewStyle());
            };
            return e;
          }();
          var nb = function () {
            e.prototype.spinOptViewStyle = function () {
              return {};
            };
            Object.defineProperty(e.prototype, "spinOpt", {
              get: function () {
                return {
                  width: "100%",
                  backgroundColor: "rgb(40, 40, 51)",
                  height: "auto",
                  paddingBottom: `${kb.walletState === Qa.FREE_GAME ? 10 : 5}px`,
                  direction: $a.isRTL ? "rtl" : "ltr"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinOptCont", {
              get: function () {
                return this.spinOptContStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinAmtSelect", {
              get: function () {
                return this.spinAmtSelectStyle;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "spinOptFooter", {
              get: function () {
                return {
                  fontSize: "14px",
                  marginTop: "5%",
                  marginLeft: "2.5%",
                  marginRight: "2.5%",
                  display: "flex",
                  justifyContent: "space-between"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "dimBg", {
              get: function () {
                return Gd(Gd({}, Ld.slotMenuDimBg), {
                  opacity: "0"
                });
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.spinOptView = function (d, a) {
              if (a === undefined) {
                a = La.Normal;
              }
              var e = {
                borderRadius: ib.borderRadius,
                paddingBottom: d,
                transform: "translateZ(0)",
                height: "auto",
                width: "100%",
                position: "absolute",
                bottom: "-100%"
              };
              return Gd(Gd({}, e), this.spinOptViewStyle(a));
            };
            e.prototype.opacityHolder = function (b) {
              return {
                transition: "opacity 200ms",
                transitionDelay: "100ms",
                opacity: `${b}`
              };
            };
            return e;
          }();
          var ob = function () {
            e.prototype.betOptExitBtnStyle = function () {
              return {};
            };
            e.prototype.maxBetBtnStyle = function () {
              return {};
            };
            e.prototype.confrimBtnStyle = function () {
              return {};
            };
            e.prototype.betOptExitBtn = function (b) {
              return this.betOptExitBtnStyle(b);
            };
            e.prototype.maxBetBtn = function (b) {
              return this.maxBetBtnStyle(b);
            };
            e.prototype.confrimBtn = function (b) {
              return this.confrimBtnStyle(b);
            };
            e.prototype.spinOptExitBtnStyle = function () {
              return {};
            };
            e.prototype.autoSpinAmtBtnStyle = function () {
              return {};
            };
            Object.defineProperty(e.prototype, "spinOptExitBtn", {
              get: function () {
                return this.spinOptExitBtnStyle();
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.autoSpinAmtBtn = function (b) {
              return this.autoSpinAmtBtnStyle(b);
            };
            return e;
          }();
          var pb = function () {
            e.prototype.sliderStyle = function () {
              return {};
            };
            e.prototype.titleHolderStyle = function () {
              return {};
            };
            e.prototype.baseSlider = function () {
              return {
                height: "84px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "0.2s"
              };
            };
            e.prototype.slider = function (c, a) {
              return this.sliderStyle(c, a);
            };
            e.prototype.titleHolder = function (b) {
              return this.titleHolderStyle(b);
            };
            Object.defineProperty(e.prototype, "mainTitle", {
              get: function () {
                return {
                  width: "67%",
                  display: "flex",
                  marginTop: "auto",
                  marginBottom: "auto",
                  textAlign: "left"
                };
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.resizeContainer = function (b) {
              return {
                marginTop: "auto",
                marginBottom: "auto",
                textAlign: "right",
                width: "106px",
                height: "11px",
                display: "flex",
                flexDirection: "row-reverse",
                color: `${b}`
              };
            };
            return e;
          }();
          var qb = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.betOptContViewStyle = {
                width: "100%",
                height: "auto",
                backgroundColor: "rgb(48, 48, 61)",
                borderTopStyle: "solid",
                borderTopColor: "rgba(56, 55, 64, 0.7)",
                borderWidth: "1px",
                direction: $a.isRTL ? "rtl" : "ltr"
              };
              a.betSelectorStyle = Gd(Gd({}, a.baseBetSelector), {
                backgroundColor: "rgb(52, 52, 61)",
                width: "100%",
                borderRadius: "0px",
                marginLeft: "0px",
                marginRight: "0px",
                marginTop: `${a.scrollViewItemHeight * 2.8125}px`
              });
              a.betScrollerHolderStyle = Gd(Gd({}, a.baseBetScrollerHolder), {
                marginTop: `${a.scrollViewItemHeight * 0.9375}px`
              });
              a.topMaskStyle = Gd(Gd({}, a.mask), {
                backgroundColor: "rgb(48, 48, 61)",
                height: `${a.scrollViewItemHeight * 1.90625}px`,
                width: "100%"
              });
              a.btmMaskStyle = Gd(Gd({}, a.mask), {
                backgroundColor: "rgb(48, 48, 61)",
                marginTop: `${a.scrollViewItemHeight * 3.09375}px`,
                height: `${a.scrollViewItemHeight * 2}px`,
                width: "100%"
              });
              a.topGradientMaskStyle = Gd(Gd({}, a.baseTopGradientMask), {
                background: "linear-gradient(180deg, rgb(48, 48, 61) 10%, rgba(48, 48, 61, 0.03))",
                width: "100%"
              });
              a.btmGradientMaskStyle = Gd(Gd({}, a.baseBtmGradientMask), {
                background: "linear-gradient(0deg, rgb(48, 48, 61) 10%, rgba(48, 48, 61, 0.03))",
                width: "100%"
              });
              return a;
            }
            f(a, c);
            return a;
          }(lb);
          var rb = function (c) {
            function a() {
              return c !== null && c.apply(this, arguments) || this;
            }
            f(a, c);
            a.prototype.footerStyle = function (c) {
              var a = this.betOptFooter(c);
              return Gd(Gd({}, a), {
                marginBottom: "10px",
                marginTop: "20px",
                marginLeft: "10px",
                marginRight: "10px"
              });
            };
            a.prototype.betOptViewStyle = function () {
              return {
                borderRadius: "0px",
                backgroundColor: "rgb(48, 48, 61)",
                height: jb.isMaxPayoutEnable() ? "79%" : "68.4%"
              };
            };
            a.prototype.reminderBoardStyle = function () {
              return {};
            };
            return a;
          }(mb);
          var sb = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.spinOptContStyle = {
                padding: "10px"
              };
              a.spinAmtSelectStyle = Gd(Gd({}, Ld.spinAmtSelect), {
                height: "68px",
                paddingTop: "8px",
                paddingBottom: "5px"
              });
              return a;
            }
            f(a, c);
            Object.defineProperty(a.prototype, "turboSpinSelect", {
              get: function () {
                return {
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "turboSpinInnerLayer", {
              get: function () {
                return {
                  backgroundColor: "rgb(49, 49, 60)",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  height: "68px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  border: "thin solid rgb(40, 40, 50)"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "turboSpinInnerItem", {
              get: function () {
                return {
                  textAlign: "left",
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "flex",
                  flexDirection: "row"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "turboSpinOnOff", {
              get: function () {
                return {
                  width: "25px",
                  height: "25px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "turboSpinTitle", {
              get: function () {
                return {
                  marginTop: "auto",
                  marginBottom: "auto",
                  paddingLeft: $a.isRTL ? "0px" : "5px",
                  paddingRight: $a.isRTL ? "5px" : "0px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "spinOptContInner", {
              get: function () {
                return {
                  backgroundColor: "rgb(49, 49, 60)",
                  paddingLeft: "15px",
                  paddingRight: "15px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "startAutoSpin", {
              get: function () {
                return {
                  fontSize: "14px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  display: "flex",
                  justifyContent: "space-between"
                };
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.spinOptViewStyle = function () {
              return {
                borderRadius: "0px 0px 0px 0px",
                backgroundColor: "rgb(48, 48, 61)",
                transition: "transform 200ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                height: this.ft()
              };
            };
            a.prototype.ft = function () {
              var b = jb.isTurboSpinEnable();
              if (kb.isAutoSpinStop) {
                if (b) {
                  return "64.2%";
                } else {
                  return "49%";
                }
              } else if (!kb.isAutoSpinStop && b) {
                return "47.7%";
              } else {
                return "32.5%";
              }
            };
            return a;
          }(nb);
          var tb = function () {
            e.prototype.footerHolder = function (b) {
              return Gd(Gd({}, Ld.footerHolderCont), {
                marginTop: "0px",
                borderTopStyle: "solid",
                borderTopColor: "rgba(56, 55, 64, 0.7)",
                borderWidth: "1px",
                justifyContent: "space-between",
                backgroundColor: b ? "rgba(40, 40, 51, 1)" : undefined
              });
            };
            Object.defineProperty(e.prototype, "footerObj", {
              get: function () {
                return Gd(Gd({}, Ld.footerObjCont), {
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  justifyContent: "space-between",
                  width: "auto",
                  paddingLeft: "5px",
                  direction: $a.isRTL ? "rtl" : "ltr"
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "footerAmt", {
              get: function () {
                return Gd(Gd({}, Ld.footerAmtCont), {
                  width: "auto"
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "flexFooterAmot", {
              get: function () {
                return Gd(Gd({}, this.footerAmt), {
                  justifyContent: "flex-end"
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "footerAmtItem", {
              get: function () {
                return {
                  alignSelf: "center",
                  color: "white",
                  fontSize: "11px",
                  marginTop: "auto",
                  marginBottom: "auto"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "fullFooterAmtItem", {
              get: function () {
                return Gd(Gd({}, this.footerAmtItem), {
                  opacity: 1
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "halfFooterAmtItem", {
              get: function () {
                return Gd(Gd({}, this.footerAmtItem), {
                  opacity: 0.5
                });
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.transFooterObj = function (b) {
              return Gd(Gd({}, this.footerObj), {
                transition: "transform 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) 0s",
                transform: b ? "scale(1,1)" : "scale(1,0)"
              });
            };
            Object.defineProperty(e.prototype, "footerImg", {
              get: function () {
                return Gd(Gd({}, Ld.footerImgCont), {
                  width: "15px",
                  height: "15px",
                  opacity: "0.5",
                  alignSelf: "center"
                });
              },
              enumerable: false,
              configurable: true
            });
            return e;
          }();
          var ub = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.dt = Gd(Gd({}, a.exitBtn), {
                margin: "7px",
                width: "36px",
                height: "36px",
                backgroundSize: "120px 120px",
                backgroundPosition: "-57px -57px"
              });
              return a;
            }
            f(a, c);
            a.prototype.betOptExitBtnStyle = function (b) {
              return Gd(Gd({}, this.dt), {
                pointerEvents: b ? "auto" : "none",
                opacity: b ? 0.6 : 0.3
              });
            };
            a.prototype.maxBetBtnStyle = function (d) {
              var a = ib.themeColor;
              var b = ib.halfThemeColor;
              return Gd(Gd({}, this.baseBtn), {
                pointerEvents: d ? "auto" : "none",
                color: d ? a : b,
                width: "30%",
                height: "43px",
                borderStyle: "solid",
                backgroundColor: d ? "rgba(57,58,70,1)" : "rgba(57,58,70,0.5)",
                borderRadius: "2px",
                fontSize: `${cb}px`
              });
            };
            a.prototype.confrimBtnStyle = function (f) {
              var a = ib.themeColor;
              var b = ib.halfThemeColor;
              var c = ib.spinStartLabelColor;
              var d = ib.spinStartLabelHalfColor;
              return Gd(Gd({}, this.baseBtn), {
                pointerEvents: f ? "auto" : "none",
                backgroundColor: f ? a : b,
                color: f ? c : d,
                width: "67%",
                height: "43px",
                borderRadius: "2px",
                fontSize: `${cb}px`
              });
            };
            a.prototype.spinOptExitBtnStyle = function () {
              return this.dt;
            };
            a.prototype.autoSpinAmtBtnStyle = function (b) {
              return Gd(Gd({}, this.baseBtn), {
                color: `${b}`,
                borderRadius: "2px",
                width: "54px",
                height: "35px",
                lineHeight: "35px",
                fontSize: "14px",
                position: "relative"
              });
            };
            a.prototype.startAutoSpinBtn = function (g) {
              var a = ib.normalButtonColor;
              var b = ib.disabledButtonColorHalfOpacity;
              var c = ib.disabledButtonColor;
              var d = ib.spinStartLabelColor;
              var e = ib.disabledSpinStartLabelColor;
              return Gd(Gd({}, this.baseBtn), {
                borderRadius: "2px",
                pointerEvents: g ? "auto" : "none",
                border: g ? a : b,
                backgroundColor: g ? a : c,
                color: g ? d : e,
                width: "100%"
              });
            };
            Object.defineProperty(a.prototype, "highlightTSBtn", {
              get: function () {
                var b = ib.normalButtonColor;
                return {
                  backgroundColor: b,
                  borderColor: b,
                  color: ib.spinStartLabelColor,
                  borderStyle: "solid",
                  borderWidth: "thin",
                  width: "48%",
                  borderRadius: "2px",
                  height: "35px",
                  lineHeight: "35px",
                  fontSize: "14px"
                };
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "normalTSBtn", {
              get: function () {
                return {
                  width: "48%",
                  borderRadius: "2px",
                  borderColor: "rgb(38, 38, 51)",
                  borderStyle: "solid",
                  borderWidth: "thin",
                  height: "35px",
                  lineHeight: "35px",
                  fontSize: "14px"
                };
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }(ob);
          var sa = function (c) {
            function a() {
              return c !== null && c.apply(this, arguments) || this;
            }
            f(a, c);
            a.prototype.sliderStyle = function (c, a) {
              return Gd(Gd({}, this.baseSlider()), {
                pointerEvents: c ? "none" : "auto",
                height: a ? "28px" : "50px"
              });
            };
            a.prototype.titleHolderStyle = function (b) {
              return Gd(Gd({}, this.baseTitleHolder), {
                fontSize: "11px",
                height: "30px",
                minHeight: "30px",
                opacity: `${b}`
              });
            };
            return a;
          }(pb);
          var vb = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.betOptContViewStyle = {
                width: "100%",
                backgroundColor: "rgb(40, 40, 51)",
                height: "auto",
                direction: $a.isRTL ? "rtl" : "ltr"
              };
              a.betSelectorStyle = Gd(Gd({}, a.baseBetSelector), {
                backgroundColor: "rgb(48, 48, 61)",
                width: "96%",
                borderRadius: "8px",
                marginLeft: "5px",
                marginRight: "4px",
                marginTop: `${a.scrollViewItemHeight * 1.875}px`
              });
              a.betScrollerHolderStyle = a.baseBetScrollerHolder;
              a.topMaskStyle = Gd(Gd({}, a.mask), {
                backgroundColor: "rgb(40, 40, 51)",
                height: `${a.scrollViewItemHeight * 1.90625}px`,
                width: "91%"
              });
              a.btmMaskStyle = Gd(Gd({}, a.mask), {
                backgroundColor: "rgb(40, 40, 51)",
                marginTop: `${a.scrollViewItemHeight * 3.09375}px`,
                height: `${a.scrollViewItemHeight * 2}px`,
                width: "91%"
              });
              a.topGradientMaskStyle = Gd(Gd({}, a.baseTopGradientMask), {
                background: "linear-gradient(180deg, rgb(40, 40, 51) 10%, rgba(40, 40, 51, 0.03))",
                width: "91%"
              });
              a.btmGradientMaskStyle = Gd(Gd({}, a.baseBtmGradientMask), {
                background: "linear-gradient(0deg, rgb(40, 40, 51) 10%, rgba(40, 40, 51, 0.03))",
                width: "91%"
              });
              return a;
            }
            f(a, c);
            return a;
          }(lb);
          var wb = function (c) {
            function a() {
              return c !== null && c.apply(this, arguments) || this;
            }
            f(a, c);
            a.prototype.footerStyle = function (c) {
              var a = this.betOptFooter(c);
              return Gd(Gd({}, a), {
                marginTop: `${_a || jb.isMaxPayoutEnable() ? "10px" : "20px"}`,
                marginLeft: "10px",
                marginRight: "10px"
              });
            };
            a.prototype.reminderBoardStyle = function () {
              if (_a) {
                return {
                  margin: "auto",
                  paddingTop: "43%",
                  height: "100%",
                  width: "40%",
                  backgroundColor: "rgb(0,0,0,0)",
                  borderColor: "rgb(0,0,0,0)"
                };
              } else {
                return {};
              }
            };
            a.prototype.betOptViewStyle = function () {
              var b = {
                borderRadius: "8px 8px 0px 0px",
                backgroundColor: "rgb(48, 48, 60)",
                height: jb.isMaxPayoutEnable() ? "62%" : "53.6%"
              };
              if (_a) {
                return Gd(Gd({}, b), {
                  height: "100%",
                  width: "45%",
                  marginLeft: "60%",
                  borderRadius: "0px"
                });
              } else {
                return b;
              }
            };
            return a;
          }(mb);
          var xb = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.spinOptContStyle = {
                paddingLeft: "20px",
                paddingRight: "20px"
              };
              a.spinAmtSelectStyle = Gd(Gd({}, Ld.spinAmtSelect), {
                height: `${_a ? 50 : 68}`
              });
              return a;
            }
            f(a, c);
            Object.defineProperty(a.prototype, "spinOptHeader", {
              get: function () {
                return Gd(Gd({}, Ld.spinOptHeader), {
                  marginTop: `${_a ? 10 : 0}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "slotMenuTitle", {
              get: function () {
                var b = bb;
                return Gd(Gd({}, Ld.slotMenuTitleTxt), {
                  fontSize: `${b}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "spinOptSubtitle", {
              get: function () {
                return Gd(Gd({}, Ld.spinOptSubtitleHolder), {
                  fontSize: `${_a ? 10 : 12.5}px`
                });
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.spinOptViewStyle = function (c) {
              var a = {
                backgroundColor: "rgb(48, 48, 60)"
              };
              return Gd(Gd({}, a), _a ? {
                height: "100%",
                width: "45%",
                marginLeft: "60%",
                borderRadius: "0px",
                bottom: "0%"
              } : {
                height: kb.isAutoSpinStop ? c === La.Expanded ? "69.2%" : "43%" : "29.5%"
              });
            };
            return a;
          }(nb);
          var yb = function () {
            Object.defineProperty(e.prototype, "footerAmt", {
              get: function () {
                return {
                  alignSelf: "center",
                  color: "white"
                };
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.footerObj = function (b) {
              return Gd(Gd({}, Ld.footerObjCont), {
                transition: "transform 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) 0s",
                transform: b ? "scale(1,1)" : "scale(1,0)"
              });
            };
            return e;
          }();
          var zb = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.bt = Gd(Gd({}, a.exitBtn), {
                width: "54px",
                height: "54px",
                backgroundSize: "184px 64px",
                backgroundPosition: "-1px -1px",
                transform: "scale(0.67)"
              });
              return a;
            }
            f(a, c);
            a.prototype.betOptExitBtnStyle = function (c) {
              var a = Gd(Gd({}, this.bt), {
                pointerEvents: c ? "auto" : "none",
                opacity: c ? 0.6 : 0.3
              });
              if (_a) {
                a = Gd(Gd({}, a), {
                  transform: "scale(0.5625)",
                  marginTop: "-3px"
                });
              }
              return a;
            };
            a.prototype.maxBetBtnStyle = function (d) {
              var a = ib.themeColor;
              var b = ib.halfThemeColor;
              return Gd(Gd({}, this.baseBtn), {
                pointerEvents: d ? "auto" : "none",
                color: d ? a : b,
                width: "30%",
                height: _a ? "25px" : "40px",
                borderRadius: _a ? "4px" : "8px",
                borderStyle: "solid",
                borderWidth: _a ? "1px" : "2px",
                borderColor: d ? a : b,
                fontSize: `${cb}px`
              });
            };
            a.prototype.confrimBtnStyle = function (f) {
              var a = ib.themeColor;
              var b = ib.halfThemeColor;
              var c = ib.spinStartLabelColor;
              var d = ib.spinStartLabelHalfColor;
              return Gd(Gd({}, this.baseBtn), {
                pointerEvents: f ? "auto" : "none",
                backgroundColor: f ? a : b,
                color: f ? c : d,
                width: "67%",
                height: _a ? "27px" : "40px",
                fontSize: `${cb}px`,
                borderRadius: _a ? "4px" : "8px"
              });
            };
            a.prototype.spinOptExitBtnStyle = function () {
              var b = this.bt;
              if (_a) {
                b = Gd(Gd({}, this.bt), {
                  transform: "scale(0.5625)",
                  marginTop: "-3px"
                });
              }
              return b;
            };
            a.prototype.autoSpinAmtBtnStyle = function (b) {
              return Gd(Gd({}, this.baseBtn), {
                color: `${b}`,
                height: _a ? "27px" : "38px"
              });
            };
            Object.defineProperty(a.prototype, "spinOptBtn", {
              get: function () {
                return Gd(Gd({}, this.baseBtn), {
                  transition: "0.2s",
                  color: "rgba(255, 255, 255, 0.6)",
                  width: "33%",
                  height: _a ? "27px" : "38px",
                  borderRadius: _a ? "4px" : "8px"
                });
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.autoSpinsBtn = function (g) {
              var a = ib.normalButtonColor;
              var b = ib.disabledButtonColorHalfOpacity;
              var c = ib.disabledButtonColor;
              var d = ib.disabledSpinStartLabelColor;
              var e = ib.spinStartLabelColor;
              return Gd(Gd({}, this.baseBtn), {
                pointerEvents: g ? "auto" : "none",
                border: g ? a : b,
                backgroundColor: g ? a : c,
                color: g ? e : d,
                width: kb.isAutoSpinStop ? "63%" : "100%",
                height: _a ? "27px" : "38px",
                borderRadius: _a ? "4px" : "8px"
              });
            };
            return a;
          }(ob);
          var Ab = function (c) {
            function a() {
              return c !== null && c.apply(this, arguments) || this;
            }
            f(a, c);
            a.prototype.sliderStyle = function (b) {
              return Gd(Gd({}, this.baseSlider()), {
                pointerEvents: b ? "none" : "auto",
                height: _a ? "55px" : "84px"
              });
            };
            a.prototype.titleHolderStyle = function (d) {
              var a = Gd(Gd({}, this.baseTitleHolder), {
                fontSize: "11px",
                height: "30px",
                minHeight: "30px",
                opacity: `${d}`
              });
              var b = Gd(Gd({}, this.baseTitleHolder), {
                fontSize: "9.75px",
                height: "20px",
                minHeight: "20px",
                opacity: `${d}`
              });
              if (_a) {
                return b;
              } else {
                return a;
              }
            };
            return a;
          }(pb);
          var Bb = Ia.formatCurrency;
          var Cb = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.vt = Ed.createRef();
              b.gt = false;
              b.xt = false;
              b.yt = 0;
              b.St = "None";
              b.wt = undefined;
              b.Ot = 0;
              b.handleChange = function (c) {
                b.gt = true;
                if (b.xt === false) {
                  b.props.enableStartAutoSpin();
                  b.xt = true;
                }
                b.setState({
                  value: c
                });
              };
              b.state = {
                value: 0,
                scale: 1
              };
              b.wt = Ed.createRef();
              b.Ot = 10;
              var c = kb.isLegacyMode;
              b.Ct = c ? new sa() : new Ab();
              return b;
            }
            f(a, e);
            a.prototype.onFinishTouch = function () {
              if (this.state.value % this.Ot != 0) {
                var b = Math.round(this.state.value / this.Ot) * this.Ot;
                this.setState({
                  value: b
                });
              }
            };
            a.prototype.kt = function () {
              this.props.onClick(Ra.BalanceLessThan);
            };
            a.prototype._t = function (g, a) {
              var b = this.props.model;
              var c = (0, b.additionalBetCalculationCallback)(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
              var d = Math.round(g / this.Ot);
              var e = c * b.autoSpinCount * (1 - (a - d) / 100);
              b.balanceAmountLessThan = e;
              return e;
            };
            a.prototype.jt = function () {
              var d = this.props.selectedSlider;
              var a = shell.I18n.t("SpinOptions.SettingSliderNumNone");
              var b = shell.I18n.t("SpinOptions.ChooseValue");
              this.St = Bb(this.yt);
              if (this.gt) {
                return this.St;
              } else if (kb.isLegacyMode && d !== Ra.BalanceLessThan) {
                return b;
              } else {
                return a;
              }
            };
            a.prototype.Mt = function () {
              var d = this.props.selectedSlider;
              var a = ib.disabledLabelColor;
              var b = ib.labelColor;
              if (kb.isLegacyMode && d !== Ra.BalanceLessThan && !this.gt) {
                return a;
              } else {
                return b;
              }
            };
            a.prototype.Tt = function (b) {
              this.setState({
                scale: b.payload.scale
              });
            };
            a.prototype.componentDidMount = function () {
              var c = this;
              if (this.vt.current && kb.isLegacyMode) {
                this.vt.current.addEventListener($a.clickEvent, this.kt.bind(this));
              }
              $a.context.event.emit("Shell.GetScale", undefined, function (a) {
                if (!a.error) {
                  c.setState({
                    scale: a.response.scale
                  });
                }
              });
              $a.context.event.on("Shell.Scaled", this.Tt, this);
              Ja(this.wt.current, 11);
            };
            a.prototype.componentDidUpdate = function () {
              Ja(this.wt.current, 11);
            };
            a.prototype.componentWillUnmount = function () {
              $a.context.event.off("Shell.Scaled", this.Tt, this);
            };
            a.prototype.render = function () {
              var f = this.state;
              var a = f.value;
              var b = f.scale;
              var c = this.props;
              var d = c.config;
              var e = c.isDisabled;
              var g = c.selectedSlider;
              var h = shell.I18n.t("SpinOptions.OnceCashLessThanTitle");
              var i = shell.I18n.t("SpinOptions.RequiredTitle");
              this.yt = this._t(a, d.max);
              var j = kb.isLegacyMode && g !== Ra.BalanceLessThan;
              var k = Ka(kb.gameThemeColor);
              var l = this.Ct.slider(e, g !== Ra.BalanceLessThan);
              var m = this.Ct.titleHolder(e ? 0.5 : 1);
              var n = this.Ct.mainTitle;
              var o = this.Ct.resizeContainer(this.Mt());
              var p = ib.sliderLineColorFalse;
              var q = ib.sliderLineColorTrue;
              return Ed.createElement("div", {
                className: "spin-options-slider",
                style: l
              }, Ed.createElement("div", {
                style: m,
                className: "so-slider-title-holder",
                ref: this.vt
              }, Ed.createElement("div", {
                style: n,
                className: "so-slider-main-title"
              }, Ed.createElement("div", null, h + " ", Ed.createElement("span", {
                style: {
                  color: k
                }
              }, i))), Ed.createElement("div", {
                style: o,
                className: "resize-container"
              }, Ed.createElement("div", {
                ref: this.wt,
                className: "resize-content",
                style: {
                  alignSelf: "center"
                }
              }, this.jt()))), Ed.createElement("div", {
                className: `${$a.isRTL ? "rtl" : "ltr"}-slider-holder`
              }, Ed.createElement("div", {
                className: "slider-horizontal",
                style: {
                  pointerEvents: e || j ? "none" : "auto"
                }
              }, Ed.createElement(ya, {
                isDisabled: e,
                backgroundColor: p,
                fillColor: q,
                handleColor: Ka(kb.gameThemeColor),
                scale: b,
                min: d.min,
                max: d.max * this.Ot,
                value: a,
                tooltip: false,
                orientation: "horizontal",
                onChange: this.handleChange,
                onChangeComplete: this.onFinishTouch.bind(this),
                labels: !kb.isLegacyMode && {},
                reverse: $a.isRTL
              }))));
            };
            return a;
          }(Ed.Component);
          var Db = Ia.tickCallback;
          var Eb = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.wt = Ed.createRef();
              b.Bt = Ed.createRef();
              b.state = {
                onHover: false
              };
              return b;
            }
            f(a, d);
            a.prototype.At = function () {
              this.Lt();
              this.props.callback();
            };
            a.prototype.render = function () {
              var f = this;
              var a = this.props;
              var b = a.additionalStyle;
              var c = a.buttonText;
              var d = a.bottomHighlight;
              var e = a.hoverEffect;
              var g = a.hoverColor;
              var h = a.id;
              var i = e ? {
                color: this.state.onHover ? g : b.color
              } : {};
              var j = Gd(Gd({}, b), i);
              return Ed.createElement("div", {
                id: h,
                ref: this.Bt,
                className: "spin-amount-button",
                style: j,
                onTouchStart: function () {
                  f.Rt();
                  f.Nt();
                },
                onClick: function () {
                  f.Lt();
                },
                onMouseEnter: this.Nt.bind(this),
                onMouseLeave: this.Lt.bind(this)
              }, d ? Ed.createElement("div", {
                style: {
                  position: "absolute",
                  width: "inherit",
                  height: "33px",
                  top: "0px",
                  left: "0px",
                  borderRadius: "2px",
                  borderBottom: "2px solid blue",
                  borderColor: b.color
                }
              }) : null, Ed.createElement("div", {
                className: "spin-amount-button-text",
                ref: this.wt
              }, c));
            };
            a.prototype.componentDidMount = function () {
              var d = this;
              if (this.Bt && this.Bt.current) {
                this.Bt.current.addEventListener($a.clickEvent, this.At.bind(this));
              }
              Db(true)(function () {
                var a = d.props.defaultFontSize;
                var b = 16;
                if (a) {
                  b = a;
                }
                if (d.wt && d.wt.current) {
                  Ja(d.wt.current, b);
                }
                if (d.wt && d.wt.current) {
                  (function (c) {
                    if (c.offsetHeight > c.parentElement.offsetHeight) {
                      for (var a = parseInt(Dd.getComputedStyle(c).fontSize, 10); c.offsetHeight > c.parentElement.offsetHeight;) {
                        a -= 1;
                        c.style.lineHeight = a.toString() + "px";
                        c.style.fontSize = a.toString() + "px";
                      }
                    }
                  })(d.wt.current);
                }
              });
            };
            a.prototype.componentWillUnmount = function () {
              if (this.Bt && this.Bt.current) {
                this.Bt.current.removeEventListener($a.clickEvent, this.At.bind(this));
              }
            };
            a.prototype.Nt = function () {
              if (this.props.hoverEffect) {
                this.Rt();
                this.setState({
                  onHover: true
                });
              }
            };
            a.prototype.Lt = function () {
              if (this.props.hoverEffect) {
                this.setState({
                  onHover: false
                });
              }
            };
            a.prototype.Rt = function () {
              if (this.props.resetHoverCallback) {
                this.props.resetHoverCallback();
              }
            };
            a.prototype.disableHoverEffect = function () {
              if (this.state.onHover) {
                this.Lt();
              }
            };
            return a;
          }(Ed.Component);
          var Fb = Ia.formatCurrency;
          var Gb = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.vt = Ed.createRef();
              b.yt = 0;
              b.St = "None";
              b.wt = undefined;
              b.Ot = 0;
              b.handleChange = function (c) {
                b.setState({
                  value: c
                });
              };
              b.Ot = 10;
              b.state = {
                value: b.zt() * b.Ot,
                scale: 1
              };
              b.wt = Ed.createRef();
              var c = kb.isLegacyMode;
              b.Ct = c ? new sa() : new Ab();
              return b;
            }
            f(a, e);
            a.prototype.onFinishTouch = function () {
              if (this.state.value % this.Ot != 0) {
                var b = Math.round(this.state.value / this.Ot) * this.Ot;
                this.setState({
                  value: b
                });
              }
            };
            a.prototype.kt = function () {
              this.props.onClick(Ra.BalanceMoreThan);
            };
            a.prototype.Dt = function () {
              var d = this.props.model;
              var a = (0, d.additionalBetCalculationCallback)(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
              var b = Math.round(this.state.value / this.Ot) * 100 * a;
              d.balanceAmountMoreThan = b;
              return b;
            };
            a.prototype.zt = function () {
              var d = this.props.model;
              var a = 0;
              if (d.balanceAmountMoreThan) {
                var e = (0, d.additionalBetCalculationCallback)(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
                a = d.balanceAmountMoreThan / e / 100;
              }
              return a;
            };
            a.prototype.jt = function () {
              var d = this.props.selectedSlider;
              var a = shell.I18n.t("SpinOptions.SettingSliderNumNone");
              var b = shell.I18n.t("SpinOptions.ChooseValue");
              this.St = Fb(this.yt);
              if (this.yt > 0) {
                return this.St;
              } else if (kb.isLegacyMode && d !== Ra.BalanceMoreThan) {
                return b;
              } else {
                return a;
              }
            };
            a.prototype.Mt = function () {
              var d = this.props.selectedSlider;
              var a = ib.disabledLabelColor;
              var b = ib.labelColor;
              if (kb.isLegacyMode && d !== Ra.BalanceMoreThan && this.yt < 1) {
                return a;
              } else {
                return b;
              }
            };
            a.prototype.Tt = function (b) {
              this.setState({
                scale: b.payload.scale
              });
            };
            a.prototype.componentDidMount = function () {
              var c = this;
              if (this.vt.current && kb.isLegacyMode) {
                this.vt.current.addEventListener($a.clickEvent, this.kt.bind(this));
              }
              $a.context.event.emit("Shell.GetScale", undefined, function (a) {
                if (!a.error) {
                  c.setState({
                    scale: a.response.scale
                  });
                }
              });
              $a.context.event.on("Shell.Scaled", this.Tt, this);
              Ja(this.wt.current, 11);
            };
            a.prototype.componentDidUpdate = function () {
              Ja(this.wt.current, 11);
            };
            a.prototype.componentWillUnmount = function () {
              $a.context.event.off("Shell.Scaled", this.Tt, this);
            };
            a.prototype.render = function () {
              var f = this.state;
              var a = f.value;
              var b = f.scale;
              var c = this.props;
              var d = c.config;
              var e = c.isDisabled;
              var g = c.selectedSlider;
              var h = shell.I18n.t("SpinOptions.OnceCashMoreThanTitle");
              this.yt = this.Dt(a);
              this.St = Fb(this.yt);
              var i = kb.isLegacyMode && g !== Ra.BalanceMoreThan;
              var j = this.Ct.slider(e, g !== Ra.BalanceMoreThan);
              var k = this.Ct.titleHolder(e ? 0.5 : 1);
              var l = this.Ct.mainTitle;
              var m = this.Ct.resizeContainer(this.Mt());
              var n = ib.sliderLineColorFalse;
              var o = ib.sliderLineColorTrue;
              return Ed.createElement("div", {
                className: "spin-options-slider",
                style: j
              }, Ed.createElement("div", {
                style: k,
                className: "so-slider-title-holder",
                ref: this.vt
              }, Ed.createElement("div", {
                style: l,
                className: "so-slider-main-title"
              }, Ed.createElement("div", null, h)), Ed.createElement("div", {
                style: m,
                className: "resize-container"
              }, Ed.createElement("div", {
                ref: this.wt,
                className: "resize-content",
                style: {
                  alignSelf: "center"
                }
              }, this.jt()))), Ed.createElement("div", {
                className: `${$a.isRTL ? "rtl" : "ltr"}-slider-holder`
              }, Ed.createElement("div", {
                className: "slider-horizontal",
                style: {
                  pointerEvents: e || i ? "none" : "auto"
                }
              }, Ed.createElement(ya, {
                isDisabled: e,
                backgroundColor: n,
                fillColor: o,
                handleColor: Ka(kb.gameThemeColor),
                scale: b,
                min: d.min,
                max: d.max * this.Ot,
                value: a,
                tooltip: false,
                orientation: "horizontal",
                onChange: this.handleChange,
                onChangeComplete: this.onFinishTouch.bind(this),
                labels: !kb.isLegacyMode && {},
                reverse: $a.isRTL
              }))));
            };
            return a;
          }(Ed.Component);
          var Hb = Ia.formatCurrency;
          var Ib = Ia.toDecimalWithExp;
          var Kb = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.vt = Ed.createRef();
              b.yt = 0;
              b.St = "None";
              b.wt = undefined;
              b.Ot = 0;
              b.handleChange = function (c) {
                b.setState({
                  value: c
                });
              };
              b.Ot = 10;
              b.state = {
                value: b.zt() * b.Ot,
                scale: 1
              };
              b.wt = Ed.createRef();
              var c = kb.isLegacyMode;
              b.Ct = c ? new sa() : new Ab();
              return b;
            }
            f(a, e);
            a.prototype.onFinishTouch = function () {
              if (this.state.value % this.Ot != 0) {
                var b = Math.round(this.state.value / this.Ot) * this.Ot;
                this.setState({
                  value: b
                });
              }
            };
            a.prototype.kt = function () {
              this.props.onClick(Ra.SingleWinMoreThan);
            };
            a.prototype.Dt = function () {
              var d = this.props.model;
              var a = (0, d.additionalBetCalculationCallback)(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
              var b = Math.round(this.state.value / this.Ot) * 10 * a;
              d.singleWinAmount = Ib(b, 2);
              return b;
            };
            a.prototype.zt = function () {
              var d = this.props.model;
              var a = 0;
              if (d.singleWinAmount) {
                var e = (0, d.additionalBetCalculationCallback)(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
                a = d.singleWinAmount / e / 10;
              }
              return a;
            };
            a.prototype.jt = function () {
              var d = this.props.selectedSlider;
              var a = shell.I18n.t("SpinOptions.SettingSliderNumNone");
              var b = shell.I18n.t("SpinOptions.ChooseValue");
              this.St = Hb(this.yt);
              if (this.yt > 0) {
                return this.St;
              } else if (kb.isLegacyMode && d !== Ra.SingleWinMoreThan) {
                return b;
              } else {
                return a;
              }
            };
            a.prototype.Mt = function () {
              var d = this.props.selectedSlider;
              var a = ib.disabledLabelColor;
              var b = ib.labelColor;
              if (kb.isLegacyMode && d !== Ra.SingleWinMoreThan && this.yt < 1) {
                return a;
              } else {
                return b;
              }
            };
            a.prototype.Tt = function (b) {
              this.setState({
                scale: b.payload.scale
              });
            };
            a.prototype.componentDidMount = function () {
              var c = this;
              if (this.vt.current && kb.isLegacyMode) {
                this.vt.current.addEventListener($a.clickEvent, this.kt.bind(this));
              }
              $a.context.event.emit("Shell.GetScale", undefined, function (a) {
                if (!a.error) {
                  c.setState({
                    scale: a.response.scale
                  });
                }
              });
              $a.context.event.on("Shell.Scaled", this.Tt, this);
              Ja(this.wt.current, 11);
            };
            a.prototype.componentDidUpdate = function () {
              Ja(this.wt.current, 11);
            };
            a.prototype.componentWillUnmount = function () {
              $a.context.event.off("Shell.Scaled", this.Tt, this);
            };
            a.prototype.render = function () {
              var f = this.state;
              var a = f.value;
              var b = f.scale;
              var c = this.props;
              var d = c.config;
              var e = c.isDisabled;
              var g = c.selectedSlider;
              var h = shell.I18n.t("SpinOptions.OnceWinAmountTargetTitle");
              this.yt = this.Dt(a);
              this.St = Hb(this.yt);
              var i = kb.isLegacyMode && g !== Ra.SingleWinMoreThan;
              var j = this.Ct.slider(e, g !== Ra.SingleWinMoreThan);
              var k = this.Ct.titleHolder(e ? 0.5 : 1);
              var l = this.Ct.mainTitle;
              var m = this.Ct.resizeContainer(this.Mt());
              var n = ib.sliderLineColorFalse;
              var o = ib.sliderLineColorTrue;
              return Ed.createElement("div", {
                className: "spin-options-slider",
                style: j
              }, Ed.createElement("div", {
                style: k,
                ref: this.vt
              }, Ed.createElement("div", {
                style: l,
                className: "so-slider-main-title"
              }, Ed.createElement("div", null, h)), Ed.createElement("div", {
                style: m,
                className: "resize-container"
              }, Ed.createElement("div", {
                ref: this.wt,
                className: "resize-content",
                style: {
                  alignSelf: "center"
                }
              }, this.jt()))), Ed.createElement("div", {
                className: `${$a.isRTL ? "rtl" : "ltr"}-slider-holder`
              }, Ed.createElement("div", {
                className: "slider-horizontal",
                style: {
                  pointerEvents: e || i ? "none" : "auto"
                }
              }, Ed.createElement(ya, {
                isDisabled: e,
                backgroundColor: n,
                fillColor: o,
                handleColor: Ka(kb.gameThemeColor),
                scale: b,
                min: d.min,
                max: d.max * this.Ot,
                value: a,
                tooltip: false,
                orientation: "horizontal",
                onChange: this.handleChange,
                onChangeComplete: this.onFinishTouch.bind(this),
                labels: !kb.isLegacyMode && {},
                reverse: $a.isRTL
              }))));
            };
            return a;
          }(Ed.Component);
          var Lb = Ia.formatCurrency;
          (function (b) {
            b[b.Win = 0] = "Win";
            b[b.Other = 1] = "Other";
          })(gb || (gb = {}));
          var Mb;
          var Md = function (g) {
            function a(a) {
              var b = g.call(this, a) || this;
              b.Et = [];
              b.Pt = undefined;
              b.Ft = undefined;
              b.It = new yb();
              b.Vt = Ld;
              for (var c = 0; c < 3; c++) {
                var f = Ed.createRef();
                b.Et.push(f);
              }
              if (b.props.additionalData) {
                b.Pt = gb.Other;
              } else {
                b.Pt = gb.Win;
              }
              b.state = {
                isOpen: true
              };
              return b;
            }
            f(a, g);
            a.prototype.Wt = function () {
              if (!this.state.isOpen) {
                this.setState({
                  isOpen: true
                });
              }
            };
            a.prototype.Gt = function () {
              if (this.props.walletState === Qa.FREE_GAME) {
                return "ic_free_game";
              } else if (this.props.walletState === Qa.BONUS) {
                return "ic_coupon";
              } else {
                return "ic_wallet_open";
              }
            };
            a.prototype.Ht = function () {
              if (this.Pt === gb.Win) {
                return "ic_win";
              } else if (this.props.walletState === Qa.BONUS) {
                return "ic_rollover";
              } else {
                return "ic_spin";
              }
            };
            a.prototype.Ut = function () {
              var c = "";
              if (this.Pt === gb.Win) {
                var d = this.props.winAmount ? this.props.winAmount : 0;
                c = Lb(d);
              } else {
                c = this.props.walletState === Qa.BONUS ? Lb(this.props.additionalData) : this.props.additionalData.toString();
              }
              return c;
            };
            a.prototype.componentDidMount = function () {
              var b = this;
              this.Et.forEach(function (b) {
                Ja(b.current, 14);
              });
              if (this.props.walletState !== Qa.CASH && this.props.additionalData !== this.props.totalAdditionalData) {
                this.Ft = // TOLOOK
                // TOLOOK
                setInterval(function () {
                  b.Pt = b.Pt === gb.Other ? gb.Win : gb.Other;
                  b.setState({
                    isOpen: false
                  });
                }, 5000);
              }
            };
            a.prototype.componentDidUpdate = function () {
              this.Et.forEach(function (b) {
                Ja(b.current, 14);
              });
            };
            a.prototype.componentWillUnmount = function () {
              clearInterval(this.Ft);
            };
            a.prototype.render = function () {
              var f = this.props;
              var a = f.balance;
              var b = f.betAmount;
              var c = this.Vt.footerHolderCont;
              var d = this.Vt.footerObjCont;
              var e = this.Vt.footerImgCont;
              var g = this.Vt.footerAmtCont;
              var h = this.It.footerAmt;
              var i = this.It.footerObj(this.state.isOpen);
              return Ed.createElement("div", {
                style: c,
                className: "slot-menu-footer-holder"
              }, Ed.createElement("div", {
                style: d,
                className: "slot-menu-footer-object"
              }, Ed.createElement("div", {
                style: e,
                className: "slot-menu-footer-image " + this.Gt()
              }), Ed.createElement("div", {
                style: g,
                className: "slot-menu-footer-amount"
              }, Ed.createElement("div", {
                style: h,
                ref: this.Et[0]
              }, Lb(a)))), Ed.createElement("div", {
                style: d,
                className: "slot-menu-footer-object"
              }, Ed.createElement("div", {
                style: e,
                className: "slot-menu-footer-image ic_chip"
              }), Ed.createElement("div", {
                style: g,
                className: "slot-menu-footer-amount"
              }, Ed.createElement("div", {
                style: h,
                ref: this.Et[1]
              }, Lb(b)))), Ed.createElement("div", {
                style: i,
                className: "slot-menu-footer-object",
                onTransitionEnd: this.Wt.bind(this)
              }, Ed.createElement("div", {
                style: e,
                className: "slot-menu-footer-image " + this.Ht()
              }), Ed.createElement("div", {
                style: g,
                className: "slot-menu-footer-amount"
              }, Ed.createElement("div", {
                style: h,
                ref: this.Et[2]
              }, this.Ut()))));
            };
            return a;
          }(Ed.Component);
          var Ob = function (c) {
            function a(a) {
              return c.call(this, a) || this;
            }
            f(a, c);
            a.prototype.render = function () {
              var b = this.props.style;
              return Ed.createElement("div", {
                className: "exit-button " + this.props.name,
                style: b,
                onClick: this.props.onCLick
              });
            };
            return a;
          }(Ed.Component);
          var Pb = Ia.formatCurrency;
          (function (b) {
            b[b.Win = 0] = "Win";
            b[b.Other = 1] = "Other";
          })(Mb || (Mb = {}));
          var Qb = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.qt = new tb();
              var c = Ed.createRef();
              b.Et.push(c);
              return b;
            }
            f(a, e);
            a.prototype.Zt = function () {
              return (this.Pt === Mb.Win ? shell.I18n.t("SettingMenu.WinPrizeWord") : this.props.walletState === Qa.BONUS ? shell.I18n.t("WalletHelper.RollOver", {
                amount: ""
              }) : shell.I18n.t("WalletHelper.FreeGameCounter", {
                count: ""
              })) + " ";
            };
            a.prototype.Yt = function () {
              return shell.I18n.t("WalletHelper.Balance") + " ";
            };
            a.prototype.Gt = function () {
              if (this.props.walletState === Qa.FREE_GAME) {
                return "ic_nav_free_game_small";
              } else if (this.props.walletState === Qa.BONUS) {
                return "ic_nav_bonus_wallet_small";
              } else {
                return "ic_nav_wallet_small";
              }
            };
            a.prototype.componentDidMount = function () {
              var b = this;
              this.Et.forEach(function (b) {
                Ja(b.current, 11);
              });
              if (this.props.walletState !== Qa.CASH && this.props.additionalData !== this.props.totalAdditionalData) {
                this.Ft = // TOLOOK
                // TOLOOK
                setInterval(function () {
                  b.Pt = b.Pt === Mb.Other ? Mb.Win : Mb.Other;
                  b.setState({
                    isOpen: false
                  });
                }, 5000);
              }
            };
            a.prototype.componentDidUpdate = function () {
              this.Et.forEach(function (b) {
                Ja(b.current, 11);
              });
            };
            a.prototype.render = function () {
              var f = this.props.balance;
              var a = this.qt.footerHolder(this.props.color);
              var b = this.qt.footerObj;
              var c = this.qt.transFooterObj(this.state.isOpen);
              var d = this.qt.footerAmt;
              var e = this.qt.flexFooterAmot;
              var g = this.qt.footerAmtItem;
              var h = this.qt.halfFooterAmtItem;
              var i = this.Pt === Mb.Win ? this.qt.fullFooterAmtItem : this.qt.halfFooterAmtItem;
              var j = this.qt.footerImg;
              return Ed.createElement("div", {
                style: a,
                className: "slot-menu-footer-holder"
              }, Ed.createElement("div", {
                style: b,
                className: "slot-menu-footer-object"
              }, Ed.createElement("div", {
                style: d,
                className: "slot-menu-footer-amount"
              }, Ed.createElement("div", {
                style: j,
                className: "slot-menu-footer-image " + this.Gt()
              }), Ed.createElement("div", {
                style: h,
                ref: this.Et[0]
              }, this.Yt()), Ed.createElement("div", {
                style: g,
                ref: this.Et[1]
              }, Pb(f)))), Ed.createElement("div", {
                style: c,
                className: "slot-menu-footer-object",
                onTransitionEnd: this.Wt.bind(this)
              }, Ed.createElement("div", {
                style: e,
                className: "slot-menu-footer-amount"
              }, Ed.createElement("div", {
                style: h,
                ref: this.Et[2]
              }, this.Zt()), Ed.createElement("div", {
                style: i,
                ref: this.Et[3]
              }, this.Ut()))));
            };
            return a;
          }(Md);
          var Rb = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.Vt = Ld;
              b.Xt = [10, 30, 50, 80, 100];
              b.Jt = [];
              b.Xt[b.Xt.length - 1] = jb.getAutoSpinMaxCount();
              return b;
            }
            f(a, d);
            a.prototype.Rt = function () {
              for (var b = 0; b < this.Xt.length; b++) {
                this.Jt[b].current.disableHoverEffect();
              }
            };
            a.prototype.Kt = function () {
              var b = {
                min: 0,
                max: 50,
                currentValue: 0,
                onChangeCallback: function () {}
              };
              if (kb.walletState !== Qa.FREE_GAME && jb.isAutoSpinStopEnable()) {
                if (this.props.mode === La.Normal) {
                  return Ed.createElement(Ed.Fragment, null, Ed.createElement(Cb, {
                    model: this.props.model,
                    isDisabled: this.props.isDisabled,
                    config: b,
                    enableStartAutoSpin: this.props.enableStartAutoSpin
                  }));
                } else {
                  return Ed.createElement(Ed.Fragment, null, Ed.createElement(Cb, {
                    model: this.props.model,
                    isDisabled: this.props.isDisabled,
                    config: b,
                    enableStartAutoSpin: this.props.enableStartAutoSpin
                  }), Ed.createElement(Gb, {
                    model: this.props.model,
                    isDisabled: this.props.isDisabled,
                    config: b
                  }), Ed.createElement(Kb, {
                    model: this.props.model,
                    isDisabled: this.props.isDisabled,
                    config: b
                  }));
                }
              } else {
                return undefined;
              }
            };
            a.prototype.Qt = function () {
              var f = this;
              var a = [];
              var b = ib.enabledSwitchButtonColor;
              var c = ib.disabledSwitchButtonColor;
              var d = ib.disabledButtonColor;
              this.Xt.forEach(function (e, g) {
                var h = "";
                var l = true;
                if (f.props.selectedAmount === e) {
                  h = b;
                  l = false;
                } else {
                  h = c;
                }
                f.Jt[g] = Ed.createRef();
                var m = f.props.btnCss.autoSpinAmtBtn(h);
                a.push(Ed.createElement(Eb, {
                  id: "autoSpinAmount" + g,
                  ref: f.Jt[g],
                  key: "autospinNumber" + g,
                  additionalStyle: m,
                  defaultFontSize: _a ? 11 : 16,
                  buttonText: e.toString(),
                  callback: f.props.onAmountClick.bind(f, e),
                  hoverEffect: l,
                  hoverColor: d,
                  resetHoverCallback: f.Rt.bind(f)
                }));
              });
              return a;
            };
            a.prototype.$t = function () {
              var f = this;
              var a = shell.I18n.t("SpinOptions.AutoSpinWord");
              var b = this.props.sovCss;
              var c = this.props.btnCss;
              var d = b.spinOptHeader;
              var e = b.slotMenuTitle;
              var g = c.spinOptExitBtn;
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: d,
                id: "spin-options-header"
              }, Ed.createElement("div", {
                style: e,
                className: "slot-menu-title-text"
              }, a), Ed.createElement(Ob, {
                name: "ic_close",
                onCLick: function () {
                  var a = $a.playClick.bind($a);
                  if (a) {
                    a();
                  }
                  db.disable();
                  f.props.closeSpinOptions();
                },
                style: g
              })));
            };
            a.prototype.tn = function () {
              var f = shell.I18n.t("SpinOptions.AutoSpin");
              var a = this.props.sovCss;
              var b = a.spinOpt;
              var c = a.spinOptCont;
              var d = a.spinAmtSelect;
              var e = a.spinOptSubtitle;
              var g = this.Vt.commonDisplayContent;
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: b,
                id: "spin-options-content"
              }, Ed.createElement("div", {
                style: c,
                id: "spin-options-content-container"
              }, Ed.createElement("div", {
                style: d,
                id: "spin-amount-select"
              }, Ed.createElement("div", {
                style: e,
                className: "spin-options-subtitle-holder"
              }, Ed.createElement("div", null, f)), Ed.createElement("div", {
                style: g,
                className: "multiple-button-holder"
              }, this.Qt())), this.Kt())));
            };
            a.prototype.nn = function () {
              var f = this.props;
              var a = f.mode;
              var b = f.swapModes;
              var c = f.canClickStart;
              var d = f.closeAndStartAutoSpin;
              var e = this.props.sovCss;
              var g = this.props.btnCss;
              var h = e.spinOptFooter;
              var i = g.spinOptBtn;
              var j = g.autoSpinsBtn(c);
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: h,
                id: "spin-options-footer"
              }, kb.walletState !== Qa.FREE_GAME && jb.isAutoSpinStopEnable() ? Ed.createElement(Eb, {
                buttonText: a === La.Normal ? shell.I18n.t("SpinOptions.MoreOptions") : shell.I18n.t("SpinOptions.HideOptions"),
                clickEffect: true,
                additionalStyle: i,
                defaultFontSize: _a ? 11 : 16,
                callback: b
              }) : undefined, Ed.createElement(Eb, {
                buttonText: shell.I18n.t("SpinOptions.StartAutoSpin"),
                additionalStyle: j,
                defaultFontSize: _a ? 11 : 16,
                clickEffect: true,
                callback: function () {
                  d();
                }
              })), this.en());
            };
            a.prototype.en = function () {
              if (!_a) {
                var b = this.props.model.additionalBetCalculationCallback(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
                return Ed.createElement(Md, {
                  balance: kb.currentBalance,
                  winAmount: kb.winAmount,
                  betAmount: b,
                  additionalData: kb.additionalData,
                  totalAdditionalData: kb.totalAdditionalData,
                  walletState: kb.walletState
                });
              }
            };
            a.prototype.componentDidMount = function () {
              for (var c = document.getElementsByClassName("spin-options-view-content"), a = 0; a < c.length; a++) {
                c[a].style.opacity = 1;
              }
            };
            a.prototype.render = function () {
              return Ed.createElement("div", {
                id: "spin-options-view-content",
                className: "spin-options-view-content",
                key: "spin-options-view-content",
                style: {
                  opacity: 0,
                  transition: "opacity 0.2s linear 0.1s"
                }
              }, this.$t(), this.tn(), this.nn());
            };
            return a;
          }(Ed.Component);
          var Sb = function (c) {
            function a() {
              var a = c !== null && c.apply(this, arguments) || this;
              a.rn = 30;
              a.B = "0px";
              return a;
            }
            f(a, c);
            a.prototype.sn = function () {
              var f = shell.I18n.t("SpinOptionsLegacy.SpinSpeed");
              var a = shell.I18n.t("SpinOptionsLegacy.NormalSpeed");
              var b = shell.I18n.t("SpinOptionsLegacy.FastSpeed");
              var c = this.props;
              var d = c.onTurboSpinClick;
              var e = c.model;
              var g = this.props.sovCss;
              var h = g.turboSpinSelect;
              var i = g.turboSpinInnerLayer;
              var j = g.turboSpinInnerItem;
              var k = g.turboSpinOnOff;
              var l = g.turboSpinTitle;
              var m = this.Vt.commonDisplayContent;
              var n = this.props.btnCss;
              var o = n.highlightTSBtn;
              var p = n.normalTSBtn;
              var q = e.turboSpinOn ? p : o;
              var r = e.turboSpinOn ? o : p;
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: h,
                id: "turbo-spin-select"
              }, Ed.createElement("div", {
                style: i,
                id: "turbo-spin-inner-layer"
              }, Ed.createElement("div", {
                style: j
              }, Ed.createElement("div", {
                style: k,
                className: e.turboSpinOn ? "ic_nav_spin_turbo_on" : "ic_nav_spin_turbo_off"
              }), Ed.createElement("div", {
                style: l
              }, f)), Ed.createElement("div", {
                style: Gd(Gd({}, m), {
                  direction: "ltr"
                })
              }, Ed.createElement(Eb, {
                additionalStyle: q,
                buttonText: a,
                callback: d.bind(undefined, false)
              }), Ed.createElement(Eb, {
                additionalStyle: r,
                buttonText: b,
                callback: d.bind(undefined, true)
              })))));
            };
            a.prototype.Qt = function () {
              var f = this;
              var a = [];
              var b = ib.enabledSwitchButtonColor;
              var c = ib.disabledSwitchButtonColor;
              this.Xt.forEach(function (d, e) {
                var g;
                g = f.props.selectedAmount === d ? b : c;
                var j = f.props.btnCss.autoSpinAmtBtn(g);
                a.push(Ed.createElement(Eb, {
                  id: "autoSpinAmount" + e,
                  key: "autospinNumber" + e,
                  additionalStyle: j,
                  buttonText: d.toString(),
                  callback: f.props.onAmountClick.bind(f, d),
                  bottomHighlight: f.props.selectedAmount === d
                }));
              });
              return a;
            };
            a.prototype.Kt = function () {
              var b = {
                min: 0,
                max: 50,
                currentValue: 0,
                onChangeCallback: function () {}
              };
              if (this.props.slotMenuModel.walletState !== Qa.FREE_GAME && jb.isAutoSpinStopEnable()) {
                return Ed.createElement(Ed.Fragment, null, Ed.createElement(Cb, {
                  model: this.props.model,
                  isDisabled: this.props.isDisabled,
                  config: b,
                  enableStartAutoSpin: this.props.enableStartAutoSpin,
                  selectedSlider: this.props.selectedSlider,
                  onClick: this.props.onSelectedSlider
                }), Ed.createElement(Gb, {
                  model: this.props.model,
                  isDisabled: this.props.isDisabled,
                  config: b,
                  selectedSlider: this.props.selectedSlider,
                  onClick: this.props.onSelectedSlider
                }), Ed.createElement(Kb, {
                  model: this.props.model,
                  isDisabled: this.props.isDisabled,
                  config: b,
                  selectedSlider: this.props.selectedSlider,
                  onClick: this.props.onSelectedSlider
                }));
              } else {
                return undefined;
              }
            };
            a.prototype.$t = function () {
              var f = this;
              var a = shell.I18n.t("SpinOptionsLegacy.AutoSpinWord");
              var b = this.Vt.spinOptHeader;
              var c = this.Vt.slotMenuTitleTxt;
              var d = this.props.btnCss.spinOptExitBtn;
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: b,
                id: "spin-options-header"
              }, Ed.createElement("div", {
                style: c,
                className: "slot-menu-title-text"
              }, a), Ed.createElement(Ob, {
                name: "menu_close_button",
                onCLick: function () {
                  var a = $a.playClick.bind($a);
                  if (a) {
                    a();
                  }
                  db.disable();
                  f.props.closeSpinOptions();
                },
                style: d
              })));
            };
            a.prototype.tn = function () {
              var f = shell.I18n.t("SpinOptionsLegacy.AutoSpin");
              var a = this.props;
              var b = a.canClickStart;
              var c = a.closeAndStartAutoSpin;
              var d = this.props.sovCss;
              var e = d.spinOpt;
              var g = d.spinOptCont;
              var h = d.spinOptContInner;
              var i = d.spinAmtSelect;
              var j = this.Vt.commonDisplayContent;
              var k = d.startAutoSpin;
              var l = this.props.btnCss.startAutoSpinBtn(b);
              var m = this.Vt.spinOptSubtitleHolder;
              var n = {
                fontSize: "14px",
                marginTop: "auto",
                marginBottom: "auto",
                paddingLeft: $a.isRTL ? "0px" : "5px",
                paddingRight: $a.isRTL ? "5px" : "0px"
              };
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: e,
                id: "spin-options-content"
              }, jb.isTurboSpinEnable() ? this.sn() : undefined, Ed.createElement("div", {
                style: g,
                id: "spin-options-content-container"
              }, Ed.createElement("div", {
                style: h,
                id: "spin-options-content-inner-layer"
              }, Ed.createElement("div", {
                style: i,
                id: "spin-amount-select"
              }, Ed.createElement("div", {
                style: m,
                className: "spin-options-subtitle-holder"
              }, Ed.createElement("div", {
                className: "icon_auto_spin_menu",
                style: {
                  width: "25px",
                  height: "25px"
                }
              }), Ed.createElement("div", {
                style: n
              }, f)), Ed.createElement("div", {
                style: j,
                className: "multiple-button-holder"
              }, this.Qt())), this.Kt(), Ed.createElement("div", {
                style: k,
                id: "start-auto-spin"
              }, " ", Ed.createElement(Eb, {
                buttonText: shell.I18n.t("SpinOptionsLegacy.StartAutoSpin"),
                additionalStyle: l,
                clickEffect: true,
                callback: function () {
                  c();
                }
              }))))));
            };
            a.prototype.nn = function () {
              var b = this.props.model.additionalBetCalculationCallback(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
              return Ed.createElement(Qb, {
                color: true,
                balance: kb.currentBalance,
                winAmount: kb.winAmount,
                betAmount: b,
                additionalData: kb.additionalData,
                totalAdditionalData: kb.totalAdditionalData,
                walletState: kb.walletState
              });
            };
            return a;
          }(Rb);
          var Tb = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.Xt = [10, 30, 50, 80, 100];
              b.rn = _a ? 0 : 47;
              b.Vt = Ld;
              b.state = {
                visible: false
              };
              var c = kb.isLegacyMode;
              b.un = c ? new sb() : new xb();
              b.an = c ? new ub() : new zb();
              return b;
            }
            f(a, e);
            a.prototype.cn = function (b) {
              if (b) {
                if (kb.isLegacyMode) {
                  return Ed.createElement(Sb, Gd({}, Gd(Gd({}, this.props), {
                    sovCss: this.un,
                    btnCss: this.an
                  })));
                } else {
                  return Ed.createElement(Rb, Gd({}, Gd(Gd({}, this.props), {
                    sovCss: this.un,
                    btnCss: this.an
                  })));
                }
              } else {
                return undefined;
              }
            };
            a.prototype.render = function () {
              var f;
              var h = this;
              var b = this.props;
              var c = b.showState;
              var d = b.closeSpinOptions;
              var e = b.shouldPlayAnimation;
              var i = b.startAutoSpinCallback;
              var j = b.quitSpinOptionsCallback;
              var k = b.shouldAutoSpin;
              var l = b.mode;
              var m = b.additionalPadding;
              var n = _a ? "landscape-spin-options" : "spin-options";
              f = kb.isLegacyMode ? "-75%" : l === La.Normal ? "-60%" : "-80%";
              var o = this.un.dimBg;
              var p = this.un.spinOptView(this.rn + m, l);
              return Ed.createElement("div", {
                id: "spin-options-container",
                style: {
                  position: "relative",
                  width: "100%",
                  height: "100%"
                }
              }, Ed.createElement("div", {
                style: o,
                className: "slot-menu-dim-bg",
                onClick: function () {
                  if (c === Ma.Show) {
                    db.disable();
                    d();
                  }
                }
              }), Ed.createElement(s, {
                native: true,
                immediate: !e,
                to: _a ? {
                  right: c === Ma.Show ? "0%" : "-45%"
                } : {
                  bottom: c === Ma.Show ? "0%" : f
                },
                config: {
                  tension: 163,
                  friction: 21,
                  clamp: true,
                  velocity: 10
                },
                onRest: function () {
                  if (c === Ma.Hide) {
                    if (k === true) {
                      i();
                    }
                    j();
                  } else if (c === Ma.Show) {
                    h.setState({
                      visible: true
                    });
                  }
                }
              }, function (b) {
                return Ed.createElement(g.div, {
                  id: n,
                  style: Gd(Gd({}, p), b)
                }, h.cn(h.state.visible));
              }));
            };
            return a;
          }(Ed.Component);
          var Ub = new (function () {
            Object.defineProperty(e.prototype, "singleWinAmount", {
              get: function () {
                return this.ln;
              },
              set: function (b) {
                this.ln = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "balanceAmountMoreThan", {
              get: function () {
                return this.hn;
              },
              set: function (b) {
                this.hn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "balanceAmountLessThan", {
              get: function () {
                return this.fn;
              },
              set: function (b) {
                this.fn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "autoSpinStartBalance", {
              get: function () {
                return this.dn;
              },
              set: function (b) {
                this.dn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "autoSpinCount", {
              get: function () {
                return this.bn;
              },
              set: function (b) {
                this.bn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "additionalBetCalculationCallback", {
              get: function () {
                return this.pn;
              },
              set: function (b) {
                this.pn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "turboSpinOn", {
              get: function () {
                return this.vn;
              },
              set: function (b) {
                this.vn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "onChangeTurboSpin", {
              get: function () {
                return this.gn;
              },
              set: function (b) {
                this.gn = b;
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.mn = function (h, a) {
              var b = false;
              var i = this.ln;
              var d = this.hn;
              var e = this.fn;
              var f = this.dn;
              if (i && h > i) {
                b = true;
              }
              if (d && a >= f + d) {
                b = true;
              }
              if (e && a <= f - e) {
                b = true;
              }
              return b;
            };
            Object.defineProperty(e.prototype, "isBalanceHitTargetInAutoSpinMode", {
              get: function () {
                return this.mn.bind(this);
              },
              enumerable: false,
              configurable: true
            });
            return e;
          }())();
          var Vb = Ia.toDecimalWithExp;
          var Wb = Ia.tickCallback;
          var Yb = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.xn = false;
              b.state = {
                mode: La.Normal,
                showState: Ma.Hide,
                additionalPadding: 0,
                shouldPlayAnimation: false,
                canClickStart: false,
                isDisabled: true,
                shouldAutoSpin: false,
                turboSpinOn: Ub.turboSpinOn,
                selectedSlider: Ra.BalanceLessThan
              };
              return b;
            }
            f(a, d);
            a.prototype.startAutoSpin = function () {
              if (!this.xn) {
                var d = $a.playClick.bind($a);
                if (d) {
                  d();
                }
                var a = Vb(kb.betSizeValue * kb.betLevelValue * kb.betLineValue, 2);
                var b = {
                  totalSpins: Ub.autoSpinCount,
                  totalBet: a,
                  limitLoss: Vb(Ub.balanceAmountLessThan, 2),
                  limitGain: Vb(Ub.balanceAmountMoreThan, 2),
                  singleWinLimit: Vb(Ub.singleWinAmount, 2)
                };
                $a.context.event.emit("Game.AutoplaySettingChanged", b);
                this.yn(function (b) {
                  if (b) {
                    $a.context.event.emit("SlotMenu.StartAutoSpin", {
                      autoSpinCount: Ub.autoSpinCount,
                      balanceAmountLessThan: Ub.balanceAmountLessThan,
                      balanceAmountMoreThan: Ub.balanceAmountMoreThan,
                      singleWinAmount: Ub.singleWinAmount,
                      autoSpinStartBalance: kb.currentBalance
                    });
                    Ub.autoSpinStartBalance = kb.currentBalance;
                  }
                });
                this.xn = true;
              }
            };
            a.prototype.yn = function (e) {
              var a = "NoError";
              $a.context.event.emit("Game.StartAutoplay", undefined, function (b) {
                var c = b.response ? b.response.result : a;
                if (e) {
                  e(c === a);
                }
              });
            };
            a.prototype.setAmount = function (c) {
              var a = $a.playClick.bind($a);
              if (a) {
                a();
              }
              Ub.autoSpinCount = c;
              this.setState({
                isDisabled: false
              });
              if (!(kb.walletState !== Qa.FREE_GAME && jb.isAutoSpinStopEnable())) {
                this.enableSpinOptions();
              }
              db.enable();
            };
            a.prototype.enableSpinOptions = function () {
              if (this.state.canClickStart === false) {
                this.setState({
                  canClickStart: true
                });
              }
            };
            a.prototype.onTurboSpinClick = function (c) {
              Ub.turboSpinOn = c;
              var a = Ub.onChangeTurboSpin;
              if (a) {
                a(c);
              } else {
                $a.context.event.emit("SlotMenu.onTurboSpinChange", c);
              }
              this.setState({
                turboSpinOn: c
              });
            };
            a.prototype.closeSpinOptions = function () {
              var b = this;
              this.setState({
                showState: Ma.Hide,
                shouldPlayAnimation: true,
                isDisabled: true,
                shouldAutoSpin: false
              }, function () {
                b.props.emitGamePlayUIBlockCallback(false);
              });
            };
            a.prototype.closeAndStartAutoSpin = function () {
              var b = this;
              this.setState({
                showState: Ma.Hide,
                shouldPlayAnimation: true,
                isDisabled: true,
                shouldAutoSpin: true
              }, function () {
                b.props.emitGamePlayUIBlockCallback(false);
              });
            };
            a.prototype.swapModes = function () {
              if (this.state.mode === La.Normal) {
                this.setState({
                  mode: La.Expanded
                });
              } else {
                this.setState({
                  mode: La.Normal
                });
              }
            };
            a.prototype.swapSelectedSlider = function (b) {
              this.setState({
                selectedSlider: b
              });
            };
            a.prototype.Tt = function () {
              this.setState({
                additionalPadding: 0,
                shouldPlayAnimation: false
              });
            };
            a.prototype.render = function () {
              var f = this.state;
              var a = f.isDisabled;
              var b = f.mode;
              var c = f.showState;
              var d = f.additionalPadding;
              var e = f.shouldPlayAnimation;
              var g = f.canClickStart;
              var h = f.selectedSlider;
              var i = f.shouldAutoSpin;
              return Ed.createElement(Tb, {
                slotMenuModel: kb,
                model: Ub,
                mode: b,
                selectedAmount: Ub.autoSpinCount,
                isDisabled: a,
                showState: c,
                additionalPadding: d,
                shouldPlayAnimation: e,
                shouldAutoSpin: i,
                canClickStart: g,
                quitSpinOptionsCallback: this.props.quitSpinOptionsCallback,
                startAutoSpinCallback: this.startAutoSpin.bind(this),
                closeSpinOptions: this.closeSpinOptions.bind(this),
                closeAndStartAutoSpin: this.closeAndStartAutoSpin.bind(this),
                onAmountClick: this.setAmount.bind(this),
                swapModes: this.swapModes.bind(this),
                enableStartAutoSpin: this.enableSpinOptions.bind(this),
                selectedSlider: h,
                onTurboSpinClick: this.onTurboSpinClick.bind(this),
                onSelectedSlider: this.swapSelectedSlider.bind(this)
              });
            };
            a.prototype.componentDidMount = function () {
              var b = this;
              $a.context.event.on("Shell.Scaled", this.Tt, this);
              $a.context.event.emit("Shell.GetScale", undefined, function (a) {
                if (!a.error) {
                  b.setState({
                    additionalPadding: 0
                  });
                }
              });
              Wb(true)(function () {
                b.setState({
                  showState: Ma.Show,
                  shouldPlayAnimation: true
                });
              });
            };
            a.prototype.componentWillUnmount = function () {
              $a.context.event.off("Shell.Scaled", this.Tt, this);
            };
            return a;
          }(Ed.Component);
          function Zb(c, a) {
            if (c < 0) {
              return a.substring(Dd.Number("0x0"), a.length + c);
            } else {
              return a.substring(c);
            }
          }
          function $b(b) {
            return Zb(1, b);
          }
          function _b(b) {
            return Zb(2, b);
          }
          function ac(d, a, b) {
            return !(!d || !a) && (b ? d.substring(Dd.Number("0x0"), a.length) === a : d === a);
          }
          function bc() {
            var e;
            var f;
            var g = "subtle";
            var c = ec(Dd, "crypto");
            return !(!c || (e = c, f = g, Dd.Object.prototype.hasOwnProperty.call(e, f)) || !function (d, a) {
              try {
                var b = Dd.Object.getPrototypeOf(d);
                return dc(Dd.Object.getOwnPropertyDescriptor(b, a), d);
              } catch (b) {}
            }(c, g));
          }
          function cc(b) {
            return (b + "").indexOf("[native code]") !== -1;
          }
          function dc(c, a) {
            if (c) {
              if (c.get) {
                if (cc(c.get)) {
                  return c.get.apply(a);
                } else {
                  return undefined;
                }
              } else {
                return c.value;
              }
            } else {
              return c;
            }
          }
          function ec(c, a) {
            try {
              return dc(Dd.Object.getOwnPropertyDescriptor(c, a), c);
            } catch (b) {}
          }
          function Xb() {
            return [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (d) {
              return !cc((a = d, e === undefined && (e = Dd), a.replace(/ /g, "").split(".").reduce(function (c, a) {
                if (c != null) {
                  return ec(c, a);
                } else {
                  return c;
                }
              }, e)));
              var a;
              var e;
            }) == null;
          }
          function fc(c) {
            var a = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][c];
            return a.substring(Dd.Number("0xf") - Dd.Number("0x0" + a[0]));
          }
          function gc(c, a) {
            return c === Dd[fc(4)].max(c, a);
          }
          function hc(e) {
            for (var a = "", f = 0, g = e.length; f < g; f++) {
              a += e[f] || "";
            }
            return a;
          }
          function ic(e) {
            for (var a = Dd.atob(e), b = new Dd.Uint8Array(a.length), c = 0; c < a.length; c++) {
              b[c] = a.charCodeAt(c);
            }
            return b;
          }
          function jc() {
            var e = [95, 95].map(function (b) {
              return Dd.String.fromCharCode(b);
            }).join("");
            var o = e + "refer or " + e + $b("ahv");
            var b = fc(1);
            var c = $b("esplit");
            function a(d) {
              var a = new Dd.URLSearchParams(Dd[b].search);
              var e = o[c](" ")[d];
              if (e) {
                return a.get(e);
              } else {
                return null;
              }
            }
            var d = fc(3);
            var f = Dd[b][d];
            var g = a(0);
            var h = a(1);
            var i = a(2);
            var j = i == null ? undefined : i.substring(Dd.Number("0x0"), Dd.Number("0x2"));
            var k = i == null ? undefined : i.substring(Dd.Number("0x2"));
            var l = Object.create(null);
            l.Sn = j;
            l.wn = f;
            l.On = g;
            l.Cn = h;
            l.kn = i;
            l._n = k;
            return l;
          }
          var kc = function () {
            function a(a, b, e) {
              if (function (b) {
                return gc(Dd[fc(0)].now(), b);
              }(a)) {
                if (!b) {
                  b = Dd.Number("0.0005") * 100;
                }
                if (e) {
                  var d = function (a, b) {
                    var c = (Dd[fc(0)].now() - a) / (b * undefined);
                    return Dd[fc(4)].min(1, c * c);
                  }(a, e);
                  b *= d;
                }
                return gc(Dd[("Mathew", Zb(-2, "Mathew"))].random(), b);
              }
              return true;
            }
            return [function () {
              return a(["0x4c72"].reduce(function (c, a) {
                return c + Dd.Number(a);
              }, 469) * undefined, Dd.Number("0.0005") * 100, 28);
            }, a];
          }()[0];
          function lc(c) {
            var a = kc();
            if (c) {
              c(!a);
            }
          }
          var mc = Ia.toDecimalWithExp;
          var nc = function () {
            Object.defineProperty(e.prototype, "betSizeList", {
              get: function () {
                return this.jn;
              },
              set: function (b) {
                this.jn = b || [];
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "validBetSizeList", {
              get: function () {
                return this.Dn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLevelList", {
              get: function () {
                return this.Mn;
              },
              set: function (b) {
                this.Mn = b || [];
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "baseBet", {
              get: function () {
                return this.Tn;
              },
              set: function (b) {
                this.Tn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "showChangeBetReminder", {
              get: function () {
                return this.En;
              },
              set: function (b) {
                this.En = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "showForfeitProgressReminder", {
              get: function () {
                return this.Pn;
              },
              set: function (b) {
                this.Pn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betCombinationDict", {
              get: function () {
                return this.Nn;
              },
              set: function (b) {
                this.Nn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betBiggestAmount", {
              get: function () {
                return this.Bn;
              },
              set: function (b) {
                this.Bn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betAmountKeysList", {
              get: function () {
                return this.An;
              },
              set: function (b) {
                this.An = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "miniumumBet", {
              get: function () {
                return this.Ln;
              },
              set: function (b) {
                this.Ln = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "featureBuyThreshold", {
              get: function () {
                return this.Rn;
              },
              set: function (b) {
                this.Rn = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "validBetLevelListByBetSize", {
              get: function () {
                return this.zn;
              },
              set: function (b) {
                this.zn = b;
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.generateBetCombinationDict = function (k) {
              var l = this;
              this.Nn = {};
              this.zn = {};
              for (var a, b = this.jn, d = this.Mn, e = k || 25, f = 0, m = b.length; f < m; f++) {
                for (var h = 0, n = d.length; h < n; h++) {
                  a = mc(e * b[f] * d[h], 2);
                  if (!oc.miniumumBet || a >= oc.miniumumBet || a <= oc.featureBuyThreshold) {
                    this.Bn = Math.max(0, a);
                    if (!oc.betCombinationDict[a]) {
                      oc.betCombinationDict[a] = {
                        betSize: b[f],
                        betLevel: d[h]
                      };
                    }
                    if (!this.zn[b[f]]) {
                      this.zn[b[f]] = [];
                    }
                    this.zn[b[f]].push(d[h]);
                  }
                }
              }
              this.Dn = [];
              this.jn.forEach(function (b) {
                if (l.zn[b] && l.zn[b].length > 0) {
                  l.Dn.push(b);
                }
              });
            };
            return e;
          }();
          var oc = new nc();
          var pc = {
            overflow: "hidden",
            position: "relative"
          };
          var qc = {
            position: "absolute",
            top: "0px",
            left: "0px"
          };
          var rc = function (d) {
            function a(a) {
              var h = d.call(this, a) || this;
              h.isMouseDown = false;
              h.startY = 0;
              h.startTime = 0;
              h.autoScrollForce = 0;
              h.latestY = 0;
              h.previousY = 0;
              h.latestTime = 0;
              h.previousTime = 0;
              h.processMoveCount = 0;
              h.scrollReportTime = 0;
              h.isMouseOverElement = false;
              h.translateTop = 0;
              h.disableScroll = false;
              h.getScrollPosition = function () {
                return Math.abs(h.translateTop);
              };
              h.Fn = function (b) {
                if (h.processMoveCount > 2) {
                  b.preventDefault();
                  b.stopPropagation();
                }
              };
              h.In = function (b) {
                h.start(b);
              };
              h.Vn = function (b) {
                h.stop(b);
              };
              h.Wn = function (b) {
                if (h.Gn(b)) {
                  b.preventDefault();
                }
              };
              h.Hn = function (b) {
                if (!h.isMouseDown) {
                  h.isMouseDown = true;
                  h.start(b);
                }
              };
              h.Un = function (b) {
                if (h.isMouseDown) {
                  h.stop(b);
                  h.isMouseDown = false;
                }
              };
              h.qn = function (b) {
                if (h.isMouseDown && h.Gn(b)) {
                  b.preventDefault();
                }
              };
              h.Zn = function () {
                h.isMouseOverElement = true;
              };
              h.Yn = function () {
                h.isMouseOverElement = false;
              };
              h.wheel = function (c) {
                if (!h.disableScroll && h.isMouseOverElement) {
                  h.animating = false;
                  var a = h.container.current;
                  var b = h.content.current;
                  if (a && b) {
                    var d = c.deltaY;
                    var e = h.translateTop - d;
                    var i = true;
                    if (e >= 0) {
                      e = 0;
                      i = false;
                    } else if (e < a.clientHeight - b.clientHeight) {
                      e = a.clientHeight - b.clientHeight;
                      i = false;
                    }
                    if (e >= 0) {
                      e = 0;
                    }
                    h.translateTop = e;
                    b.style.transform = "translateY(" + e + "px)";
                    h.reportPos(e);
                    if (i) {
                      c.preventDefault();
                    }
                  }
                }
              };
              h.animating = false;
              h.tickFrame = function () {
                if (h.animating) {
                  var c = h.moveBy(h.autoScrollForce);
                  var a = h.autoScrollForce > 0;
                  var b = Math.min(Math.abs(h.autoScrollForce / 30), 3);
                  b = Math.max(b, 0.2);
                  if (a) {
                    h.autoScrollForce -= b;
                  } else {
                    h.autoScrollForce += b;
                  }
                  if (c || h.autoScrollForce > 0 !== a) {
                    h.animating = false;
                  }
                  if (h.animating) {
                    requestAnimationFrame(h.tickFrame);
                  }
                }
              };
              h.moveBy = function (c) {
                var a = h.translateTop + c;
                var e = false;
                if (a > 0) {
                  a = 0;
                  e = true;
                } else if (a < h.diffHeight) {
                  a = h.diffHeight;
                  e = true;
                }
                if (a > 0) {
                  a = 0;
                }
                h.translateTop = a;
                h.contentDiv.style.transform = "translateY(" + h.translateTop + "px)";
                h.reportPos(a);
                return e;
              };
              h.Xn = function () {
                h.containerHeight = h.containerDiv.clientHeight;
                h.diffHeight = h.containerHeight - h.contentHeight;
                if (h.translateTop < h.diffHeight) {
                  h.translateTop = h.diffHeight;
                  if (h.translateTop > 0) {
                    h.translateTop = 0;
                  }
                  h.contentDiv.style.transform = `translateY(${h.translateTop}px)`;
                }
              };
              h.container = Ed.createRef();
              h.content = Ed.createRef();
              h.containerDiv = document.createElement("div");
              h.containerHeight = 0;
              h.contentDiv = document.createElement("div");
              h.contentHeight = 0;
              h.diffHeight = 0;
              h.throttleResize = function (e, a, n) {
                var o;
                var p;
                var q;
                var r;
                if (n === undefined) {
                  n = false;
                }
                function b() {
                  o = null;
                  if (!n) {
                    r = e.apply(q, p);
                    q = p = null;
                  }
                }
                function i() {
                  q = this;
                  p = arguments;
                  var a = n && !o;
                  if (!o) {
                    o = Dd.setTimeout(b, 250);
                  }
                  if (a) {
                    r = e.apply(q, p);
                    q = p = null;
                  }
                  return r;
                }
                function j() {
                  if (o) {
                    clearTimeout(o);
                    o = null;
                  }
                }
                function k() {
                  if (o) {
                    r = e.apply(q, p);
                    q = p = null;
                    clearTimeout(o);
                    o = null;
                  }
                }
                var l = function () {
                  var b = i;
                  b.clear = j;
                  b.flush = k;
                  return b;
                }();
                return l;
              }(h.Xn);
              return h;
            }
            f(a, d);
            a.prototype.scrollToTop = function () {
              this.autoScrollForce = -this.diffHeight / 15 * 0.8;
              this.animating = true;
              requestAnimationFrame(this.tickFrame);
            };
            a.prototype.scrollToBottom = function () {
              this.autoScrollForce = this.diffHeight / 15 * 0.8;
              this.animating = true;
              requestAnimationFrame(this.tickFrame);
            };
            a.prototype.setScrollPosition = function (b) {
              this.translateTop = -b;
              this.contentDiv.style.transform = `translateY(${this.translateTop}px)`;
            };
            a.prototype.componentDidMount = function () {
              var d = this;
              var a = this.container.current;
              var b = this.content.current;
              if (b && a) {
                this.contentObserver = new MutationObserver(function () {
                  if (d.contentHeight !== b.clientHeight) {
                    d.contentHeight = b.clientHeight;
                    d.Xn();
                  }
                  d.diffHeight = d.containerHeight - d.contentHeight;
                });
                this.contentObserver.observe(b, {
                  attributes: true,
                  childList: true,
                  subtree: this.props.observeContentChange || false
                });
                this.containerObserver = new MutationObserver(function () {
                  if (d.containerHeight !== d.containerDiv.clientHeight) {
                    d.Xn();
                  }
                });
                this.containerObserver.observe(a, {
                  attributes: true
                });
                this.Jn(b);
                this.containerDiv = a;
                this.containerHeight = a.clientHeight;
                this.contentDiv = b;
                this.contentHeight = b.clientHeight;
                this.diffHeight = this.containerHeight - this.contentHeight;
              }
            };
            a.prototype.componentWillUnmount = function () {
              if (this.contentObserver) {
                this.contentObserver.disconnect();
              }
              if (this.containerObserver) {
                this.containerObserver.disconnect();
              }
              var b = this.content.current;
              if (b) {
                this.Kn(b);
              }
            };
            a.prototype.Jn = function (b) {
              b.addEventListener("touchstart", this.In);
              b.addEventListener("touchend", this.Vn);
              b.addEventListener("touchmove", this.Wn, {
                passive: false
              });
              b.addEventListener("click", this.Fn);
              b.addEventListener("mousedown", this.Hn);
              Dd.addEventListener("mouseup", this.Un);
              Dd.addEventListener("mousemove", this.qn, {
                passive: false
              });
              b.addEventListener("mouseover", this.Zn);
              b.addEventListener("mouseout", this.Yn);
              Dd.addEventListener("wheel", this.wheel, {
                passive: false
              });
              Dd.addEventListener("resize", this.throttleResize);
            };
            a.prototype.Kn = function (b) {
              b.removeEventListener("touchmove", this.Wn);
              b.removeEventListener("touchstart", this.In);
              b.removeEventListener("touchend", this.Vn);
              b.removeEventListener("mousedown", this.Hn);
              Dd.removeEventListener("mousemove", this.qn);
              Dd.removeEventListener("mouseup", this.Un);
              b.removeEventListener("mouseover", this.Zn);
              b.removeEventListener("mouseout", this.Yn);
              Dd.removeEventListener("wheel", this.wheel);
              Dd.removeEventListener("resize", this.throttleResize);
            };
            a.prototype.start = function (c) {
              this.animating = false;
              this.processMoveCount = 0;
              if (this.content.current) {
                var a;
                a = c instanceof MouseEvent ? c : c.touches[0];
                this.startY = a.clientY - this.translateTop;
                this.latestY = this.previousY = a.clientY;
                this.startTime = Date.now();
                this.latestTime = this.previousTime = this.startTime;
              }
            };
            a.prototype.stop = function (e) {
              var a;
              if (e instanceof MouseEvent) {
                a = e;
              } else if ((a = e.touches[0]) === undefined) {
                a = {
                  clientY: this.latestY
                };
              }
              this.startY = -1;
              var f = Date.now() - this.previousTime;
              var c = a.clientY - this.previousY;
              if (f < 60 && Math.abs(c) > 3) {
                this.autoScrollForce = c * 0.8;
                this.animating = true;
                requestAnimationFrame(this.tickFrame);
              }
            };
            a.prototype.Gn = function (e) {
              if (this.disableScroll) {
                return true;
              }
              var a;
              this.processMoveCount++;
              var f = (a = e instanceof MouseEvent ? e : e.touches[0]).clientY - this.startY;
              var g = true;
              if (f > 0) {
                f = 0;
                g = false;
              } else if (f < this.diffHeight) {
                f = this.diffHeight;
                g = false;
              }
              if (f > 0) {
                f = 0;
              }
              this.translateTop = f;
              this.contentDiv.style.transform = "translateY(" + this.translateTop + "px)";
              this.reportPos(f);
              this.previousY = this.latestY;
              this.latestY = a.clientY;
              this.previousTime = this.latestTime;
              this.latestTime = Date.now();
              return g;
            };
            a.prototype.reportPos = function (f) {
              var a = this.props.onScroll;
              if (a) {
                var b = this.props.onScrollThrottle ? this.props.onScrollThrottle : 0;
                var c = Date.now();
                if (c - this.scrollReportTime > b) {
                  if (this.diffHeight > 0) {
                    a(1);
                  } else {
                    var d = f / this.diffHeight;
                    a(Math.round(Math.abs(d) * 100) / 100);
                  }
                  this.scrollReportTime = c;
                }
              }
            };
            a.prototype.render = function () {
              return Ed.createElement("div", {
                ref: this.container,
                id: "VScrollContainer.Container",
                className: "slot_menu_scroller",
                style: Object.assign({}, pc, this.props.containerStyle)
              }, Ed.createElement("div", {
                id: "VScrollContainer.Content",
                ref: this.content,
                style: Object.assign({}, qc, this.props.contentStyle)
              }, this.props.children, this.props.showFooter && this.props.footerComponent));
            };
            return a;
          }(Ed.Component);
          var tc = Ia.sequenceCallback;
          var uc = Ia.timeoutCallback;
          var vc = Ia.tickCallback;
          var wc = function (d) {
            function a(a) {
              var h = d.call(this, a) || this;
              h.wheelFactor = 0.1;
              h.abort = undefined;
              h.itemSelected = false;
              h.selectedItemIndex = undefined;
              h.wheel = function (c) {
                if (!h.disableScroll && h.isMouseOverElement) {
                  h.animating = false;
                  var a = h.container.current;
                  var b = h.content.current;
                  if (a && b) {
                    if (!h.disableScroll) {
                      h.Qn();
                    }
                    var d = c.deltaY;
                    var e = h.translateTop - d * h.wheelFactor;
                    var i = true;
                    if (e >= 0) {
                      e = 0;
                      i = false;
                    } else if (e < a.clientHeight - b.clientHeight) {
                      e = a.clientHeight - b.clientHeight;
                      i = false;
                    }
                    if (e >= 0) {
                      e = 0;
                    }
                    h.translateTop = e;
                    b.style.transform = "translateY(" + e + "px)";
                    h.reportPos(e);
                    h.$n();
                    if (i) {
                      c.preventDefault();
                    }
                  }
                }
              };
              h.tickFrame = function () {
                var c = h.moveBy(h.autoScrollForce);
                var a = h.autoScrollForce > 0;
                var b = Math.min(Math.abs(h.autoScrollForce / 120), 0.5);
                b = Math.max(b, 0.2);
                if (a) {
                  h.autoScrollForce -= b;
                } else {
                  h.autoScrollForce += b;
                }
                if (c || h.autoScrollForce > 0 !== a) {
                  h.animating = false;
                }
                if (h.animating) {
                  requestAnimationFrame(h.tickFrame);
                } else {
                  h.$n();
                }
              };
              h.state = {
                enableScrollAnimation: true
              };
              return h;
            }
            f(a, d);
            a.prototype.stop = function (e) {
              var a;
              if (e instanceof MouseEvent) {
                a = e;
              } else if ((a = e.touches[0]) === undefined) {
                a = {
                  clientY: this.latestY
                };
              }
              this.startY = -1;
              var f = Date.now() - this.previousTime;
              var c = a.clientY - this.previousY;
              if (f < 60 && Math.abs(c) > 3) {
                this.autoScrollForce = c * 0.1;
                this.animating = true;
                requestAnimationFrame(this.tickFrame);
              } else if (this.itemSelected) {
                this.ti();
              } else {
                this.$n();
              }
            };
            a.prototype.Qn = function () {
              (0, this.props.userStartInteractCallback)(this);
            };
            a.prototype.start = function (d) {
              this.animating = false;
              this.processMoveCount = 0;
              if (this.content.current) {
                var a;
                a = d instanceof MouseEvent ? d : d.touches[0];
                this.startY = a.clientY - this.translateTop;
                this.latestY = this.previousY = a.clientY;
                this.startTime = Date.now();
                this.latestTime = this.previousTime = this.startTime;
                var e = this.abort;
                if (e) {
                  e();
                }
                if (!this.disableScroll) {
                  if (this.Qn) {
                    this.Qn();
                  }
                  this.itemSelected = true;
                }
              }
            };
            a.prototype.ni = function (f) {
              var a = this.props.setCurrentNumber;
              var b = this.translateTop;
              var g = Math.abs(b % ab);
              if (g !== 0) {
                if (g >= 16) {
                  b -= ab - g;
                } else {
                  b += g;
                }
                this.reportPos(b);
              }
              var d = Math.abs(b);
              if (b === this.translateTop) {
                if (f) {
                  f();
                }
              } else {
                this.setScrollPositionWithTransition(d, f);
              }
              if (a) {
                a(d);
              }
            };
            a.prototype.ii = function (f) {
              var a;
              var g;
              var h = this.props.setCurrentNumber;
              if (this.selectedItemIndex !== undefined) {
                a = this.selectedItemIndex * -ab;
                g = Math.abs(a);
                this.selectedItemIndex = undefined;
                if (a === this.translateTop) {
                  if (f) {
                    f();
                  }
                } else {
                  this.setScrollPositionWithTransition(g, f);
                }
              } else {
                a = this.translateTop;
                var d = Math.abs(a % ab);
                if (d !== 0) {
                  if (d >= 16) {
                    a -= ab - d;
                  } else {
                    a += d;
                  }
                  this.reportPos(a);
                }
                g = Math.abs(a);
                this.setScrollPosition(g);
                if (f) {
                  f();
                }
              }
              if (h) {
                h(g);
              }
            };
            a.prototype.ti = function () {
              var f = this;
              if (!this.disableScroll) {
                var a = this.props;
                var b = a.updateAllOtherScroller;
                var c = a.userFinishInteractCallback;
                var d = this.abort;
                if (d) {
                  d();
                }
                this.abort = tc(uc(0.1), this.ii.bind(this), uc(0.2), b)(function () {
                  f.itemSelected = false;
                  c();
                });
              }
            };
            a.prototype.$n = function () {
              var g = this;
              if (!this.disableScroll) {
                var a = this.props;
                var b = a.updateAllOtherScroller;
                var c = a.userFinishInteractCallback;
                var d = a.isTouching;
                var e = this.abort;
                if (e) {
                  e();
                }
                this.abort = tc(uc(0.1), this.ni.bind(this), uc(0.2), b)(function () {
                  if (!d) {
                    g.itemSelected = false;
                    c();
                  }
                });
              }
            };
            a.prototype.reportPos = function (f) {
              var a = this.props.onScroll;
              if (a) {
                var b = this.props.onScrollThrottle ? this.props.onScrollThrottle : 0;
                var c = Date.now();
                if (c - this.scrollReportTime > b) {
                  if (this.diffHeight > 0) {
                    a(1);
                  } else {
                    var d = f / this.diffHeight;
                    a(Math.round(Math.abs(d) * 100) / 100);
                  }
                  this.scrollReportTime = c;
                }
              }
              this.itemSelected = false;
            };
            a.prototype.setScrollPosition = function (b) {
              this.translateTop = -b;
              this.contentDiv.style.transform = this.state.enableScrollAnimation ? `translateY(${this.translateTop}px)` : undefined;
            };
            a.prototype.setScrollPositionWithTransition = function (f, e) {
              var a = this;
              this.translateTop = -f;
              vc(true)(function () {
                var b = a.contentDiv;
                var c = b.style;
                c.transform = a.state.enableScrollAnimation ? `translateY(${-f}px)` : undefined;
                c.transitionProperty = "all";
                c.transitionDuration = "200ms";
                c.transitionTimingFunction = "cubic-bezier(0.215,0.61, 0.355, 1)";
                b.addEventListener("transitionend", function (b) {
                  var a = b.target;
                  var c = a.style;
                  a.animating = false;
                  c.transitionProperty = undefined;
                  c.transitionDuration = undefined;
                  c.transitionTimingFunction = undefined;
                  if (e) {
                    e();
                  }
                }, {
                  once: true
                });
              });
            };
            a.prototype.setSeletedItemIdex = function (b) {
              this.selectedItemIndex = b;
            };
            a.prototype.abortProcessCallback = function () {
              if (this.abort) {
                this.abort();
              }
            };
            a.prototype.componentWillUnmount = function () {
              d.prototype.componentWillUnmount.call(this);
              this.setState({
                enableScrollAnimation: false
              });
              this.animating = false;
              if (this.abort) {
                this.abort();
              }
            };
            return a;
          }(rc);
          var xc = b.process;
          var yc = 0;
          function Nd(c, a) {
            return c.scrollWidth - 1 <= a;
          }
          function Ac(c, a) {
            return c.scrollHeight - 1 <= a;
          }
          function Xa() {}
          function Bc() {
            return yc++;
          }
          function Cc(h, a, b) {
            if (b === undefined) {
              b = Xa;
            }
            if (h()) {
              a(function d(c) {
                for (var e = [], f = 1; f < arguments.length; f++) {
                  e[f - 1] = arguments[f];
                }
                if (c) {
                  b(c);
                } else if (h.apply(this, e)) {
                  a(d);
                } else {
                  b(null);
                }
              });
            } else {
              b(null);
            }
          }
          var Dc = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.state = {
                fontSize: null,
                ready: false
              };
              b.handleWindowResize = function () {
                b.process();
              };
              b.handleWindowResize = function (i, j) {
                var b;
                var k;
                var l;
                var m;
                var n = 0;
                function o() {
                  m = 0;
                  n = +new Date();
                  l = i.apply(b, k);
                  b = null;
                  k = null;
                }
                return function () {
                  b = this;
                  k = arguments;
                  var c = new Date() - n;
                  if (!m) {
                    if (c >= j) {
                      o();
                    } else {
                      m = // TOLOOK
                      // TOLOOK
                      setTimeout(o, j - c);
                    }
                  }
                  return l;
                };
              }(b.handleWindowResize, a.throttle);
              return b;
            }
            f(a, d);
            a.prototype.componentDidMount = function () {
              if (this.props.autoResize) {
                Dd.addEventListener("resize", this.handleWindowResize);
              }
              this.process();
            };
            a.prototype.componentDidUpdate = function (b) {
              if (this.state.ready) {
                if (!function (g, a) {
                  if (g === a) {
                    return true;
                  }
                  var b = Object.keys(g);
                  var c = Object.keys(a);
                  if (b.length !== c.length) {
                    return false;
                  }
                  for (var d = Object.prototype.hasOwnProperty, e = 0; e < b.length; e++) {
                    if (!d.call(a, b[e]) || g[b[e]] !== a[b[e]]) {
                      return false;
                    }
                  }
                  return true;
                }(this.props, b)) {
                  this.process();
                }
              }
            };
            a.prototype.componentWillUnmount = function () {
              if (this.props.autoResize) {
                Dd.removeEventListener("resize", this.handleWindowResize);
              }
              this.pid = Bc();
            };
            a.prototype.process = function () {
              var s = this;
              var a = this.props;
              var t = a.min;
              var c = a.max;
              var e = a.mode;
              var f = a.forceSingleModeWidth;
              var b = a.onReady;
              var d = this.ei;
              var g = this.oi;
              var h = function (c) {
                var a = Dd.getComputedStyle(c, null);
                if (a) {
                  return c.clientWidth - parseInt(a.getPropertyValue("padding-left"), 10) - parseInt(a.getPropertyValue("padding-right"), 10);
                } else {
                  return c.clientWidth;
                }
              }(d);
              var i = function (c) {
                var a = Dd.getComputedStyle(c, null);
                if (a) {
                  return c.clientHeight - parseInt(a.getPropertyValue("padding-top"), 10) - parseInt(a.getPropertyValue("padding-bottom"), 10);
                } else {
                  return c.clientHeight;
                }
              }(d);
              if (!(i <= 0 || isNaN(i) || h <= 0 || isNaN(h))) {
                var j = Bc();
                this.pid = j;
                var k;
                function a() {
                  return j !== s.pid;
                }
                var l = e === "multi" ? function () {
                  return Ac(g, i);
                } : function () {
                  return Nd(g, h);
                };
                var m = e === "multi" ? function () {
                  return Nd(g, h);
                } : function () {
                  return Ac(g, i);
                };
                var o = t;
                var p = c;
                this.setState({
                  ready: false
                });
                (function (h, g) {
                  var a = [];
                  var c = 0;
                  var b = true;
                  function i(d) {
                    function a() {
                      if (g) {
                        g(d);
                      }
                    }
                    if (b) {
                      if (xc && xc.nextTick) {
                        xc.nextTick(a);
                      } else {
                        // TOLOOK
                        // TOLOOK
                        setTimeout(a);
                      }
                    } else {
                      a();
                    }
                  }
                  if (h.length > 0) {
                    h[0](function e(d, b) {
                      a.push(b);
                      if (++c >= h.length || d) {
                        i(d);
                      } else {
                        h[c](e);
                      }
                    });
                  } else {
                    i(null);
                  }
                  b = false;
                })([function (b) {
                  return Cc(function () {
                    return o <= p;
                  }, function (b) {
                    if (a()) {
                      return b(true);
                    }
                    k = (o + p) / 2;
                    s.setState({
                      fontSize: k
                    }, function () {
                      if (a()) {
                        return b(true);
                      } else {
                        if (l()) {
                          o = k + 1;
                        } else {
                          p = k - 1;
                        }
                        return b();
                      }
                    });
                  }, b);
                }, function (b) {
                  if (e === "single" && f || m()) {
                    return b();
                  } else {
                    o = t;
                    p = k;
                    return Cc(function () {
                      return o < p;
                    }, function (b) {
                      if (a()) {
                        return b(true);
                      }
                      k = (o + p) / 2;
                      s.setState({
                        fontSize: k
                      }, function () {
                        if (j !== s.pid) {
                          return b(true);
                        } else {
                          if (m()) {
                            o = k + 1;
                          } else {
                            p = k - 1;
                          }
                          return b();
                        }
                      });
                    }, b);
                  }
                }, function (b) {
                  k = Math.max(k = Math.min(k = Math.max(k = Math.min(o, p), t), c), 0);
                  if (a()) {
                    return b(true);
                  }
                  s.setState({
                    fontSize: k
                  }, b);
                }], function (d) {
                  if (!(d || a())) {
                    s.setState({
                      ready: true
                    }, function () {
                      return b(k);
                    });
                  }
                });
              }
            };
            a.prototype.render = function () {
              var f = this;
              var a = this.props;
              var b = a.children;
              var c = a.text;
              var d = a.style;
              a.min;
              a.max;
              var e = a.mode;
              a.forceSingleModeWidth;
              a.throttle;
              a.autoResize;
              a.onReady;
              var g = Hd(a, ["children", "text", "style", "min", "max", "mode", "forceSingleModeWidth", "throttle", "autoResize", "onReady"]);
              var h = this.state;
              var i = h.fontSize;
              var j = h.ready;
              var k = Gd(Gd({}, d), {
                fontSize: i
              });
              var l = {
                display: j ? "block" : "inline-block"
              };
              if (e === "single") {
                l.whiteSpace = "nowrap";
              }
              return Ed.createElement("div", Gd({
                ref: function (a) {
                  return f.ei = a;
                },
                style: k
              }, g), Ed.createElement("div", {
                ref: function (a) {
                  return f.oi = a;
                },
                style: l
              }, c && typeof b == "function" ? j ? b(c) : c : b));
            };
            a.defaultProps = {
              min: 1,
              max: 100,
              mode: "multi",
              forceSingleModeWidth: true,
              throttle: 50,
              autoResize: true,
              onReady: Xa
            };
            return a;
          }(Ed.Component);
          var Ec = Ia.formatCurrency;
          var Fc = Ia.tickCallback;
          var Gc = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.Vt = Ld;
              b.ri = Ed.createRef();
              b.si = [];
              b.ui = undefined;
              b.state = {
                isDefaultDisable: a.additionalContentText.listViewDataArr.length <= 1,
                listViewDataArr: a.additionalContentText.listViewDataArr
              };
              return b;
            }
            f(a, d);
            a.prototype.updateListViewDataArr = function (b) {
              this.setState({
                listViewDataArr: b,
                isDefaultDisable: b.length <= 1
              });
            };
            a.prototype.ai = function (f, a, h, c) {
              var d = this;
              var b = this.props.additionalContentText;
              var e = b.needCurrency;
              var i = b.decimal;
              if (f && f.length !== 0) {
                this.ci = JSON.parse(JSON.stringify(f));
                var j = [];
                var g = "";
                if (a) {
                  g = "-";
                }
                this.ci.unshift("", g);
                this.ci.push(g, "");
                var k = this.Vt.alignCenter;
                this.si = [];
                this.ci.forEach(function (f, a) {
                  var b = f;
                  if (typeof b == "number") {
                    if (i) {
                      b = b.toFixed(i);
                    }
                    if (e) {
                      b = Ec(b);
                    }
                  }
                  d.si[a] = Ed.createRef();
                  j.push(Ed.createElement("div", {
                    key: a,
                    className: "bet-options-scroll-content-text",
                    style: Gd({
                      height: `${ab}px`,
                      fontSize: `${ab * 0.5}px`,
                      lineHeight: `${ab}px`
                    }, c)
                  }, Ed.createElement("div", {
                    style: Gd(Gd({}, k), {
                      display: "flex"
                    }),
                    ref: d.si[a],
                    className: "resize-content"
                  }, b.length === 0 ? Ed.createElement("div", null, b) : Ed.createElement(Dc, {
                    mode: "single",
                    forceSingleModeWidth: false,
                    max: 16,
                    autoResize: false,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: `${h}px`,
                      height: `${ab}px`
                    }
                  }, b))));
                });
                return j;
              }
            };
            a.prototype.li = function () {
              this.si.forEach(function (b) {
                Ja(b.current, ab * 0.5);
              });
            };
            a.prototype.getVScrollRef = function () {
              return this.ri;
            };
            a.prototype.getCurrentNumber = function () {
              return this.ui;
            };
            a.prototype.getAbortProcessCallback = function () {
              return this.ri.current.abortProcessCallback();
            };
            a.prototype.setCurrentNumber = function (c) {
              var a = Math.round(c / ab);
              this.ui = this.state.listViewDataArr[a];
            };
            a.prototype.render = function () {
              var f = this.props;
              var a = f.additionalContainerStyle;
              var b = f.additionalContentStyle;
              var c = f.additionalContentText;
              var d = f.autoResizeTextBoxWidth;
              var e = f.updateAllOtherScroller;
              var g = f.userStartInteractCallback;
              var h = f.userFinishInteractCallback;
              return Ed.createElement(wc, {
                ref: this.ri,
                containerStyle: Gd({
                  height: `${ab * 5}px`,
                  transform: "translateZ(0)"
                }, a),
                contentStyle: Gd({
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  lineHeight: "2"
                }, b),
                setCurrentNumber: this.setCurrentNumber.bind(this),
                updateAllOtherScroller: e,
                userStartInteractCallback: g,
                userFinishInteractCallback: h
              }, this.state.listViewDataArr && this.state.listViewDataArr.length >= 1 ? this.ai(this.state.listViewDataArr, c.needLineBlock, d, c.extraStyle) : undefined);
            };
            a.prototype.componentDidMount = function () {
              var e = this;
              var a = this.props;
              var f = a.additionalContentText;
              var b = a.requestResizeTextFitParent;
              if (this.state.listViewDataArr.length <= 1) {
                this.ri.current.disableScroll = true;
              }
              Fc(true)(function () {
                if (b) {
                  e.li();
                }
                e.si.forEach(function (a, b) {
                  if (b >= 2 && b < e.si.length - 2) {
                    a.current.onclick = e.ri.current.setSeletedItemIdex.bind(e.ri.current, b - 2);
                  }
                });
              });
              this.state.listViewDataArr.forEach(function (a, b) {
                if (a === f.listViewData) {
                  e.ri.current.setScrollPosition(ab * b);
                  e.ui = e.state.listViewDataArr[b];
                }
              });
            };
            a.prototype.componentDidUpdate = function () {
              var e = this;
              if (this.state.listViewDataArr.length <= 1) {
                this.ri.current.disableScroll = true;
              }
              var a = false;
              this.state.listViewDataArr.forEach(function (b, c) {
                if (b === e.ui) {
                  e.ri.current.setScrollPosition(ab * c);
                  e.ui = e.state.listViewDataArr[c];
                  a = true;
                }
              });
              if (!a) {
                this.ri.current.setScrollPosition(ab * 0);
                this.ui = this.state.listViewDataArr[0];
              }
            };
            return a;
          }(Ed.Component);
          var Hc = Ia.formatCurrency;
          var Ic = Ia.sequenceCallback;
          var Kc = Ia.spawnCallback;
          var Lc = Ia.tickCallback;
          var Mc = Ia.toDecimalWithExp;
          var Nc = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.hi = Ed.createRef();
              b.fi = Ed.createRef();
              b.di = Ed.createRef();
              b.bi = Ed.createRef();
              b.pi = Ed.createRef();
              b.vi = undefined;
              b.gi = undefined;
              b.mi = undefined;
              b.xi = undefined;
              b.yi = undefined;
              b.Si = [];
              b.wi();
              b.Oi();
              var c = kb.isLegacyMode;
              b.Ci = c ? new qb() : new vb();
              b.state = {
                betLevelList: a.betLevelList
              };
              return b;
            }
            f(a, e);
            a.prototype.wi = function () {
              this.vi = shell.I18n.t("BetOptions.BetCurrencyRate");
              this.gi = shell.I18n.t("BetOptions.BetMultiple");
              this.mi = oc.baseBet ? oc.baseBet : shell.I18n.t("BetOptions.BetLines");
              this.xi = shell.I18n.t("BetOptions.BetAmountTitle");
              this.yi = shell.I18n.t("BetOptions.BetAmount");
            };
            a.prototype.getBetSizePickerRef = function () {
              return this.fi;
            };
            a.prototype.getBetLevelPickerRef = function () {
              return this.di;
            };
            a.prototype.getBaseBetPickerRef = function () {
              return this.bi;
            };
            a.prototype.getBetAmountPickerRef = function () {
              return this.pi;
            };
            a.prototype.Oi = function () {
              var b = Object.keys(oc.betCombinationDict).sort(function (c, a) {
                return c - a;
              });
              this.Si = b.map(function (b) {
                return Mc(b, 2);
              });
            };
            a.prototype.autoSelectBiggest = function (j, a) {
              var b = this.props;
              var c = b.betSizeList;
              var d = b.userStartInteractCallback;
              var e = b.userFinishInteractCallback;
              if (j !== this.pi.current.getCurrentNumber()) {
                var f = c[c.length - 1];
                var g = oc.validBetLevelListByBetSize[f];
                var h = g[g.length - 1];
                d();
                Ic(this.ki.bind(this, h, g), Kc(this._i.bind(this, f), this.ji.bind(this, h), this.Mi.bind(this, j)))(function () {
                  if (e) {
                    e();
                  }
                  if (a) {
                    a();
                  }
                });
              }
            };
            a.prototype.Ti = function (e) {
              var a = this.fi.current.getCurrentNumber();
              var b = this.di.current.getCurrentNumber();
              var c = oc.validBetLevelListByBetSize[a];
              this.ki(b, c, e);
            };
            a.prototype.ki = function (f, a, b) {
              var g = this;
              function c() {
                if (b) {
                  b();
                }
              }
              Lc(true)(function () {
                var b;
                g.setState({
                  betLevelList: a
                });
                if (!((b = g.di.current) === null || b === undefined)) {
                  b.updateListViewDataArr(a);
                }
                Lc(true)(function () {
                  if (a.includes(f)) {
                    c();
                  } else {
                    g.ji(a[0], c);
                  }
                });
              });
            };
            a.prototype.Bi = function (b) {
              Ic(this.Ti.bind(this), this.Ai.bind(this))(function () {
                if (b) {
                  b();
                }
              });
            };
            a.prototype.Ai = function (e) {
              var a = this.props.betLineValue;
              var b = this.fi.current.getCurrentNumber();
              var c = this.di.current.getCurrentNumber();
              this.Mi(Mc(a * c * b, 2), e);
            };
            a.prototype.Li = function (d) {
              var a = this.pi.current.getCurrentNumber();
              var b = oc.betCombinationDict[a];
              Ic(this._i.bind(this, b.betSize), this.Ti.bind(this), this.ji.bind(this, b.betLevel))(d);
            };
            a.prototype.Mi = function (g, a) {
              var b = this.pi.current;
              function c() {
                if (a) {
                  a();
                }
              }
              if (b.getCurrentNumber() === g) {
                c();
              } else {
                var d = this.Si.indexOf(g);
                var e = this.Ri(d);
                b.setCurrentNumber(e);
                b.getVScrollRef().current.setScrollPositionWithTransition(e, c);
              }
            };
            a.prototype._i = function (f, a) {
              var b = this.fi.current;
              if (b.getCurrentNumber() === f) {
                if (a) {
                  a();
                }
              } else {
                var c = this.props.betSizeList.indexOf(f);
                var d = this.Ri(c);
                b.setCurrentNumber(d);
                b.getVScrollRef().current.setScrollPositionWithTransition(d, a);
              }
            };
            a.prototype.ji = function (f, a) {
              var b = this.di.current;
              if (b.getCurrentNumber() === f) {
                if (a) {
                  a();
                }
              } else {
                var c = this.state.betLevelList.indexOf(f);
                var d = this.Ri(c);
                b.setCurrentNumber(d);
                b.getVScrollRef().current.setScrollPositionWithTransition(d, a);
              }
            };
            a.prototype.Ri = function (b) {
              return Math.abs(b * -ab);
            };
            a.prototype.Ni = function () {
              if (kb.isLegacyMode) {
                var f = this.props;
                var a = f.themeColor;
                var b = f.betAmountValue;
                var c = this.pi.current ? this.pi.current.getCurrentNumber() : b;
                var d = Hc(c);
                var e = Gd(Gd({}, this.Ci.baseBetOptContText), {
                  width: "100%",
                  fontSize: "14px"
                });
                var g = {
                  color: `${a}`,
                  marginTop: "3px",
                  marginBottom: "3px",
                  fontSize: "22px"
                };
                return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                  id: "old-bet-amount-display-box"
                }, Ed.createElement("div", {
                  className: "bet-options-content-text",
                  style: e
                }, this.yi), Ed.createElement("div", {
                  style: g
                }, d), Ed.createElement("div", null)));
              }
            };
            a.prototype.render = function () {
              var f = this.props;
              var a = f.themeColor;
              var b = f.betSizeList;
              var c = f.betSizeValue;
              var d = f.betLevelValue;
              var e = f.betLineValue;
              var g = f.betAmountValue;
              var h = f.userStartInteractCallback;
              var i = f.userFinishInteractCallback;
              var j = kb.isLegacyMode ? "white" : a;
              var k = this.Ci.betOptContView;
              var l = this.Ci.betSelector;
              var m = this.Ci.betScrollerHolder;
              var n = {
                flexDirection: "column",
                color: "white"
              };
              var o = {
                flexDirection: "row-reverse",
                color: `${j}`
              };
              var p = this.Ci.betLabelHolder;
              var q = this.Ci.betOptCont;
              var r = this.Ci.betAmtCont(j);
              var s = this.Ci.betSymText;
              var t = this.Ci.topMask;
              var u = this.Ci.btmMask;
              var v = this.Ci.topGradientMask;
              var w = this.Ci.btmGradientMask;
              return Ed.createElement("div", {
                style: k,
                id: "bet-options-content"
              }, Ed.createElement("div", {
                style: p,
                className: "bet-label-holder"
              }, Ed.createElement("div", {
                className: "bet-options-content-text",
                style: q
              }, this.vi), Ed.createElement("div", {
                className: "bet-options-content-text",
                style: q
              }, this.gi), Ed.createElement("div", {
                className: "bet-options-content-text",
                style: q
              }, this.mi), Ed.createElement("div", {
                className: "bet-options-content-text",
                style: r
              }, this.xi)), Ed.createElement("div", {
                style: l,
                className: "bet-selector-bg",
                ref: this.hi
              }), Ed.createElement("div", {
                style: m,
                id: "bet-scroller-holder"
              }, Ed.createElement(Gc, {
                key: "betSizePicker",
                ref: this.fi,
                additionalContainerStyle: {
                  width: "22.32%"
                },
                additionalContentText: {
                  listViewDataArr: b,
                  listViewData: c,
                  needLineBlock: true,
                  extraStyle: n,
                  decimal: 2,
                  needCurrency: true
                },
                autoResizeTextBoxWidth: _a ? 55 : 70,
                requestResizeTextFitParent: true,
                userStartInteractCallback: h,
                userFinishInteractCallback: i,
                updateAllOtherScroller: this.Bi.bind(this)
              }), Ed.createElement("div", {
                className: "bet-symbol-text",
                style: s
              }, "x"), Ed.createElement(Gc, {
                key: "betLevelPicker",
                ref: this.di,
                additionalContainerStyle: {
                  width: "22.855%"
                },
                additionalContentText: {
                  listViewDataArr: this.state.betLevelList,
                  listViewData: d,
                  needLineBlock: true,
                  extraStyle: n
                },
                autoResizeTextBoxWidth: _a ? 55 : 70,
                requestResizeTextFitParent: true,
                userStartInteractCallback: h,
                userFinishInteractCallback: i,
                updateAllOtherScroller: this.Ai.bind(this)
              }), Ed.createElement("div", {
                className: "bet-symbol-text",
                style: s
              }, "x"), Ed.createElement(Gc, {
                key: "baseBetPicker",
                ref: this.bi,
                additionalContainerStyle: {
                  width: "17.67%"
                },
                additionalContentText: {
                  listViewDataArr: [e],
                  listViewData: e,
                  needLineBlock: false,
                  extraStyle: n
                },
                autoResizeTextBoxWidth: _a ? 40 : 55,
                requestResizeTextFitParent: true,
                userStartInteractCallback: h,
                userFinishInteractCallback: i
              }), Ed.createElement("div", {
                className: "bet-symbol-text",
                style: s
              }, "="), Ed.createElement(Gc, {
                key: "betAmountPicker",
                ref: this.pi,
                additionalContainerStyle: {
                  width: "23.715%"
                },
                additionalContentText: {
                  listViewDataArr: this.Si,
                  listViewData: g,
                  needLineBlock: true,
                  extraStyle: o,
                  decimal: 2,
                  needCurrency: true
                },
                autoResizeTextBoxWidth: _a ? 60 : 75,
                requestResizeTextFitParent: true,
                userStartInteractCallback: h,
                userFinishInteractCallback: i,
                updateAllOtherScroller: this.Li.bind(this)
              }), Ed.createElement("div", {
                style: v,
                className: "top-gradient-mask"
              }), Ed.createElement("div", {
                style: t,
                className: "mask"
              }), Ed.createElement("div", {
                style: u,
                className: "mask"
              }), Ed.createElement("div", {
                style: w,
                className: "bottom-gradient-mask"
              })), Ed.createElement("div", null, this.Ni()));
            };
            return a;
          }(Ed.Component);
          var Oc = Ia.toDecimalWithExp;
          var Pc = Ia.formatGroup;
          var Qc = Ia.formatCurrency;
          var Rc = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.Vt = Ld;
              b.zi = 0;
              b.Di = {
                betOptionsLabel: shell.I18n.t("BetOptions.BetSettingWord"),
                comfirmLabel: shell.I18n.t("BetOptions.Confirm"),
                maxBetLabel: shell.I18n.t("BetOptions.BiggestBet"),
                maxPayoutText: shell.I18n.t("BetOptions.MaxPayout"),
                rtpText: shell.I18n.t("BetOptions.RTP")
              };
              b.zi = 0;
              b.state = {
                uiBlock: a.uiBlock
              };
              return b;
            }
            f(a, d);
            a.prototype.Ei = function (f) {
              var a = this.props;
              var b = a.maxBetAmount;
              var c = a.showReminderCallback;
              var d = $a.playClick.bind($a);
              if (d) {
                d();
              }
              this.props.viewRef.current.autoSelectBiggest(b, f);
              if (c) {
                c();
              }
            };
            a.prototype.$t = function () {
              var f = this.props;
              var j = f.closeBetOptions;
              var a = f.canClickExit;
              var b = f.bovCss;
              var c = f.btnCss;
              var d = b.betOptHeader(this.zi);
              var e = b.titleTxt;
              var g = c.betOptExitBtn(a && !this.state.uiBlock);
              return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                style: d,
                id: "bet-options-header",
                className: "bet-options-opacity-change"
              }, Ed.createElement("div", {
                style: e,
                className: "slot-menu-title-text"
              }, this.Di.betOptionsLabel), Ed.createElement(Ob, {
                name: kb.isLegacyMode ? "menu_close_button" : "ic_close",
                onCLick: this.state.uiBlock ? undefined : function () {
                  var b = $a.playClick.bind($a);
                  if (b) {
                    b();
                  }
                  j();
                  var a = oc.cancelBetPanelCallback;
                  if (a) {
                    a();
                  } else {
                    $a.context.event.emit("SlotMenu.CancelBetPanelCallback");
                  }
                },
                style: g
              })));
            };
            a.prototype.tn = function () {
              var f = ib.themeColor;
              var a = this.props;
              var b = a.betSizeList;
              var c = a.betSizeValue;
              var d = a.betLevelList;
              var e = a.betLevelValue;
              var g = a.betLineValue;
              var h = a.userStartInteractCallback;
              var i = a.userFinishInteractCallback;
              var j = a.showFeatureBuyReminderCallback;
              var k = a.showState;
              if (k === Na.Show) {
                var l = Oc(c * e * g, 2);
                return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                  className: "bet-options-opacity-change",
                  style: {
                    opacity: this.zi,
                    transition: "opacity 0.5s ease-in-out"
                  }
                }, Ed.createElement(Nc, {
                  showState: k,
                  ref: this.props.viewRef,
                  themeColor: f,
                  betSizeList: b,
                  betSizeValue: c,
                  betLevelList: d,
                  betLevelValue: e,
                  betLineValue: g,
                  betAmountValue: l,
                  userStartInteractCallback: h,
                  userFinishInteractCallback: i,
                  showFeatureBuyReminderCallback: j
                })));
              }
              return Ed.createElement("div", {
                id: "filler",
                style: {
                  backgroundColor: "rgb(40, 40, 51)",
                  width: "100%",
                  height: "218px"
                }
              });
            };
            a.prototype.Pi = function () {
              if (!_a) {
                var d = Ub.additionalBetCalculationCallback(kb.betLineValue, kb.betLevelValue, kb.betSizeValue);
                var a = kb.isLegacyMode ? Qb : Md;
                var b = this.props.bovCss.commonContainer(this.zi);
                return Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                  style: b,
                  className: "bet-options-opacity-change"
                }, Ed.createElement(a, {
                  balance: kb.currentBalance,
                  winAmount: kb.winAmount,
                  betAmount: d,
                  additionalData: kb.additionalData,
                  totalAdditionalData: kb.totalAdditionalData,
                  walletState: kb.walletState
                })));
              }
            };
            a.prototype.Fi = function () {
              var f = undefined;
              if (jb.isMaxPayoutDescriptionEnable()) {
                var h = kb.maxPayout * this.props.betAmount;
                var b = "(" + shell.I18n.t("BetOptions.PayoutProbabilities", {
                  value: Pc(kb.maxPayoutProbability)
                }) + ")";
                var c = Gd(Gd({}, this.props.bovCss.commonContainer(this.zi)), {
                  fontSize: `${_a ? 9 : 13}px`,
                  margin: "0px 26px 0px 26px"
                });
                var d = this.Vt.commonDisplayContent;
                var e = Gd(Gd({}, this.Vt.commonDisplayContent), {
                  paddingBottom: "4px",
                  paddingTop: "10px"
                });
                var g = this.Vt.alignCenter;
                var i = this.Di;
                var j = i.maxPayoutText;
                var k = i.rtpText;
                f = Ed.createElement(Ed.Fragment, null, Ed.createElement("div", {
                  style: c,
                  className: "slot-menu-rtp bet-options-opacity-change"
                }, Ed.createElement("div", {
                  style: e,
                  className: "slot-menu-rtp-text"
                }, Ed.createElement("div", {
                  style: g
                }, j), Ed.createElement("div", {
                  className: "text-container-style",
                  style: {
                    textAlign: "end"
                  }
                }, Ed.createElement("div", null, h), Ed.createElement("div", {
                  style: {
                    fontSize: _a ? "6px" : "10px"
                  }
                }, b))), Ed.createElement("div", {
                  style: d,
                  className: "slot-menu-rtp-text"
                }, Ed.createElement("div", null, k), " ", Ed.createElement("div", null, kb.rtp))));
              }
              return f;
            };
            a.prototype.nn = function () {
              var f = this;
              var a = this.props;
              var b = a.confrimCallback;
              var c = a.canClickConfrim;
              var d = a.canClickMaxBet;
              var e = a.closeBetOptions;
              var g = a.btnCss;
              var h = a.bovCss;
              var i = g.maxBetBtn(d && !this.state.uiBlock);
              var j = g.confrimBtn(c && !this.state.uiBlock);
              var k = h.footer(this.zi);
              var l = this.Di;
              var m = l.maxBetLabel;
              var n = l.comfirmLabel;
              return Ed.createElement(Ed.Fragment, null, this.Fi(), Ed.createElement("div", {
                style: k,
                id: "bet-options-footer",
                className: "bet-options-opacity-change"
              }, Ed.createElement(Eb, {
                buttonText: m,
                additionalStyle: i,
                defaultFontSize: _a ? 11 : 15.33,
                callback: this.state.uiBlock ? undefined : function () {
                  f.setState({
                    uiBlock: true
                  });
                  f.Ei(function () {
                    f.setState({
                      uiBlock: false
                    });
                  });
                }
              }), Ed.createElement(Eb, {
                buttonText: n,
                additionalStyle: j,
                defaultFontSize: _a ? 11 : 15.33,
                callback: this.state.uiBlock ? undefined : function () {
                  f.setState({
                    uiBlock: true
                  });
                  e();
                  b();
                },
                clickEffect: true
              })), this.Pi());
            };
            a.prototype.componentDidMount = function () {
              for (var c = document.getElementsByClassName("bet-options-opacity-change"), a = 0; a < c.length; a++) {
                c[a].style.opacity = 1;
              }
            };
            a.prototype.render = function () {
              return Ed.createElement("div", {
                id: "bet-options-view-content",
                key: "bet-options-view-content"
              }, this.$t(), this.tn(), this.nn());
            };
            return a;
          }(Ed.Component);
          var Sc = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.rn = kb.isLegacyMode ? 30 : 47;
              b.Ii = Ed.createRef();
              b.Vi = undefined;
              b.Wi = undefined;
              b.fbtxt = Ed.createRef();
              b.wi();
              var c = kb.isLegacyMode;
              b.Gi = c ? new rb() : new wb();
              b.an = c ? new ub() : new zb();
              b.state = {
                visible: false,
                uiBlock: false
              };
              return b;
            }
            f(a, e);
            a.prototype.wi = function () {
              if (oc.showForfeitProgressReminder) {
                this.Vi = shell.I18n.t("BetOptions.BetChangeForfeitProgressRemind");
              } else if (oc.showChangeBetReminder) {
                this.Vi = shell.I18n.t("BetOptions.BetChangeProgressRemind");
              }
              this.Wi = shell.I18n.t("BetOptions.BetOriginalAmountTitle");
            };
            a.prototype.getBetOptionContentViewRef = function () {
              return this.Ii;
            };
            a.prototype.Hi = function () {
              var f = this;
              var a = this.props;
              var h = a.originalBetAmount;
              var b = a.showState;
              var c = a.shouldPlayAnimation;
              var d = a.showReminder;
              if (oc.showChangeBetReminder || oc.showForfeitProgressReminder) {
                var e = this.Gi.getReminderBoardStyle();
                var i = this.Gi.topBetAmt;
                var j = this.Gi.progRemindTxt;
                var k = this.Gi.btmBetAmt;
                var l = this.Gi.betAmtTitleTxt;
                var m = this.Gi.betAmtTxt;
                var n = jb.isMaxPayoutEnable();
                return Ed.createElement(s, {
                  native: true,
                  immediate: !c,
                  to: {
                    bottom: b === Na.Show && d ? kb.isLegacyMode ? n ? "84%" : "76%" : n ? "72%" : "64%" : "-100%"
                  },
                  config: {
                    tension: 163,
                    friction: 21,
                    clamp: true,
                    velocity: 10
                  }
                }, function (a) {
                  return Ed.createElement(g.div, {
                    id: "bet-reminder-board",
                    style: Gd(Gd({}, e), a)
                  }, Ed.createElement("div", {
                    style: i,
                    className: "bet-reminder-original-bet-amount-holder"
                  }, Ed.createElement("div", {
                    style: j,
                    className: "original-bet-amount-text"
                  }, f.Vi)), Ed.createElement("div", {
                    style: k,
                    className: "bet-reminder-original-bet-amount-holder"
                  }, Ed.createElement("div", {
                    style: l,
                    className: "original-bet-amount-text"
                  }, f.Wi), Ed.createElement("div", {
                    style: m,
                    className: "original-bet-amount-text"
                  }, h)), function () {
                    if (!_a) {
                      return Ed.createElement("div", {
                        style: {
                          position: "absolute",
                          marginLeft: "47.25%",
                          marginRight: "47.25%",
                          marginTop: "10px",
                          width: "0",
                          height: "0",
                          borderLeft: "10px solid transparent",
                          borderRight: " 10px solid transparent",
                          borderTop: "15px solid rgb(48, 48, 61)"
                        },
                        className: "triangle-down "
                      });
                    }
                  }());
                });
              }
            };
            a.prototype.Ui = function () {
              var e = this.props;
              e.shouldPlayAnimation;
              var a = e.showFeatureBuyMessage;
              var b = this.Gi.getFeatureBuyReminderBoardStyle();
              var c = this.Gi.topBetAmt;
              this.Gi.btmBetAmt;
              return Ed.createElement("div", {
                id: "feature-buy-bet-reminder-board",
                style: Gd(Gd({}, b), {
                  bottom: this.state.visible && a ? "61%" : "40%",
                  opacity: this.state.visible && a ? 1 : 0,
                  transition: "bottom 0.3s ease-out, opacity 0.3s ease-out"
                })
              }, Ed.createElement("div", {
                style: Gd(Gd({}, c), {
                  margin: "0px 10px 0px 10px"
                }),
                className: "bet-reminder-original-bet-amount-holder"
              }, Ed.createElement("div", {
                style: {
                  fontSize: "11px"
                },
                className: "original-bet-amount-text",
                ref: this.fbtxt
              })));
            };
            a.prototype.createContent = function (g, a, h, c) {
              var d;
              var i = document.createElement("div");
              i.style.whiteSpace = "normal";
              i.style.wordBreak = "break-word";
              a = a.replace(/\n/g, "<br/>");
              if (c) {
                a = "<b>" + a + "</b>";
              }
              i.className = h;
              i.innerHTML = a;
              if (!((d = g.current) === null || d === undefined)) {
                d.appendChild(i);
              }
            };
            a.prototype.cn = function (b) {
              if (b) {
                return Ed.createElement(Rc, Gd({}, Gd(Gd({}, this.props), {
                  uiBlock: this.state.uiBlock,
                  viewRef: this.getBetOptionContentViewRef(),
                  themeColor: ib.themeColor,
                  bovCss: this.Gi,
                  btnCss: this.an
                })));
              } else {
                return undefined;
              }
            };
            a.prototype.render = function () {
              var f = this;
              var a = this.props;
              var b = a.quitBetOptionsCallback;
              var c = a.showState;
              var d = a.shouldPlayAnimation;
              var e = a.closeBetOptions;
              var h = a.canClickExit;
              var i = a.additionalPadding;
              var j = _a ? "landscape-bet-options" : "bet-options";
              var k = this.Gi.dimBg(h && !this.state.uiBlock);
              var l = this.Gi.betOptView(this.rn + i);
              return Ed.createElement("div", {
                id: "bet-options-container"
              }, Ed.createElement("div", {
                style: k,
                className: "slot-menu-dim-bg",
                onClick: function () {
                  if (!(c !== Na.Show || f.state.uiBlock)) {
                    f.setState({
                      uiBlock: true
                    });
                    e();
                  }
                }
              }), Ed.createElement(s, {
                native: true,
                immediate: !d,
                to: _a ? {
                  right: c === Na.Show ? "0%" : "-45%"
                } : {
                  bottom: c === Na.Show ? "0%" : "-80%"
                },
                config: {
                  tension: 163,
                  friction: 21,
                  clamp: true,
                  velocity: 10
                },
                onRest: function () {
                  if (c === Na.Hide) {
                    b();
                  } else {
                    f.setState({
                      visible: true
                    });
                  }
                }
              }, function (a) {
                return Ed.createElement(g.div, {
                  id: j,
                  style: Gd(Gd({}, l), a)
                }, f.cn(f.state.visible));
              }), this.Hi(), this.Ui());
            };
            a.prototype.componentDidMount = function () {
              if (this.fbtxt && this.fbtxt.current) {
                this.createContent(this.fbtxt, shell.I18n.t("FeatureBuy.BetForFeatureBuyOnly") + "\n" + shell.I18n.t("FeatureBuy.BetSuggestion", {
                  amount: `${Qc(oc.miniumumBet)}`
                }), "original-bet-amount-text");
              }
            };
            return a;
          }(Ed.Component);
          var Tc = Ia.formatCurrency;
          var Uc = Ia.tickCallback;
          var Vc = Ia.toDecimalWithExp;
          var Wc = function (e) {
            function a(a) {
              var b = e.call(this, a) || this;
              b.qi = Ed.createRef();
              b.Zi = [];
              b.J = undefined;
              b.K = undefined;
              b.$ = undefined;
              b.Yi = undefined;
              b.Xi = undefined;
              b.Ji = undefined;
              b.Ki = undefined;
              b.Qi = undefined;
              b.$i();
              var c = Vc(b.J * b.K * b.$, 2);
              b.state = {
                showState: Na.Hide,
                shouldPlayAnimation: true,
                canClickConfrim: true,
                canClickMaxBet: c !== oc.betBiggestAmount,
                canClickExit: true,
                betAmount: c,
                showReminder: false,
                showFeatureBuyMessage: false,
                additionalPadding: 0
              };
              return b;
            }
            f(a, e);
            a.prototype.$i = function () {
              this.Qi = this.Yi = this.J = kb.betSizeValue;
              this.Ki = this.Xi = this.K = kb.betLevelValue;
              this.$ = kb.betLineValue;
              oc.generateBetCombinationDict(this.$);
              this.Ji = Tc(this.J * this.K * this.$);
            };
            a.prototype.startSpin = function () {
              var g = $a.playClick.bind($a);
              if (g) {
                g();
              }
              var a = this.Qi;
              var b = this.Ki;
              if (this.Yi !== a || this.Xi !== b) {
                var c = oc.manualUpdateBetFactorCallBack;
                if (c) {
                  c(a, b);
                } else {
                  $a.context.event.emit("SlotMenu.ManualUpdateBetFactorCallback", {
                    betSize: a,
                    betLevel: b
                  });
                }
                $a.context.event.emit("SlotMenu.ChangeBet", this.Qi * this.Ki * this.$);
              }
              var d = oc.finishBetPickCallback;
              if (d) {
                d(this.Qi, this.Ki);
              } else {
                $a.context.event.emit("SlotMenu.FinishBetPickCallback", {
                  betSize: this.Qi,
                  betLevel: this.Ki
                });
              }
              var e = document.getElementById("bet-scroller-holder");
              if (e) {
                e.style.pointerEvents = "none";
              }
            };
            a.prototype.closeBetOptions = function () {
              var b = this;
              this.setState({
                showState: Na.Hide,
                shouldPlayAnimation: true,
                showReminder: false,
                showFeatureBuyMessage: false
              }, function () {
                b.props.emitGamePlayUIBlockCallback(false);
              });
            };
            a.prototype.te = function (c) {
              var a = true;
              if (c === oc.betBiggestAmount) {
                a = false;
              }
              this.setState({
                canClickConfrim: true,
                canClickMaxBet: a,
                canClickExit: true,
                betAmount: c
              }, function () {});
            };
            a.prototype.ne = function (b) {
              this.setState({
                canClickConfrim: false,
                canClickMaxBet: false,
                canClickExit: false
              }, function () {});
              this.ie(true, b);
              this.ee();
            };
            a.prototype.oe = function () {
              var c = this.Zi[3].current.getCurrentNumber();
              this.te(c);
              this.ie(false);
              var a = oc.featureBuyThreshold && oc.miniumumBet && c <= oc.featureBuyThreshold && oc.featureBuyThreshold < oc.miniumumBet;
              this.re(a);
              this.se();
            };
            a.prototype.ie = function (d, a) {
              this.Zi.forEach(function (b) {
                if (a) {
                  if (b.current.state.isDefaultDisable === false) {
                    if (a !== b.current.getVScrollRef().current) {
                      b.current.getVScrollRef().current.disableScroll = d;
                    } else {
                      b.current.getVScrollRef().current.disableScroll = !d;
                    }
                  }
                } else if (b.current.state.isDefaultDisable === false) {
                  b.current.getVScrollRef().current.disableScroll = d;
                }
              });
            };
            a.prototype.ee = function () {
              var b = this.state.showReminder;
              if (!(!oc.showChangeBetReminder && !oc.showForfeitProgressReminder || b)) {
                this.setState({
                  showReminder: true
                }, function () {});
              }
            };
            a.prototype.re = function () {
              var d;
              if (oc.featureBuyThreshold && oc.miniumumBet) {
                var e = 0;
                var f = (e = this.Zi[3] ? (d = this.Zi[3].current) === null || d === undefined ? undefined : d.getCurrentNumber() : (0, Ub.additionalBetCalculationCallback)(kb.betLineValue, kb.betLevelValue, kb.betSizeValue)) < oc.miniumumBet && e <= oc.featureBuyThreshold;
                this.setState({
                  showFeatureBuyMessage: f
                }, function () {});
              }
            };
            a.prototype.se = function () {
              var c = this.Zi[0].current;
              var a = this.Zi[1].current;
              this.Qi = c.getCurrentNumber();
              this.Ki = a.getCurrentNumber();
            };
            a.prototype.Tt = function () {
              this.setState({
                shouldPlayAnimation: false
              }, function () {});
            };
            a.prototype.render = function () {
              var f = this.props.quitBetOptionsCallback;
              var a = this.state;
              var b = a.canClickConfrim;
              var c = a.canClickMaxBet;
              var d = a.canClickExit;
              var e = a.showState;
              var g = a.additionalPadding;
              var h = a.shouldPlayAnimation;
              var i = a.showReminder;
              var j = a.showFeatureBuyMessage;
              return Ed.createElement(Sc, {
                ref: this.qi,
                showState: e,
                additionalPadding: g,
                quitBetOptionsCallback: f,
                closeBetOptions: this.closeBetOptions.bind(this),
                betSizeList: oc.validBetSizeList,
                betSizeValue: this.J,
                betLevelList: this.ue(),
                betLevelValue: this.K,
                betAmountDict: oc.betCombinationDict,
                betLineValue: this.$,
                maxBetAmount: oc.betBiggestAmount,
                confrimCallback: this.startSpin.bind(this),
                canClickConfrim: b,
                canClickMaxBet: c,
                canClickExit: d,
                userStartInteractCallback: this.ne.bind(this),
                userFinishInteractCallback: this.oe.bind(this),
                shouldPlayAnimation: h,
                originalBetAmount: this.Ji,
                showReminder: i,
                showFeatureBuyMessage: j,
                showReminderCallback: this.ee.bind(this),
                betAmount: this.state.betAmount
              });
            };
            a.prototype.ue = function () {
              if (!oc.miniumumBet) {
                return oc.betLevelList;
              }
              for (var i, j = [], b = 0, k = Object.entries(oc.betCombinationDict); b < k.length; b++) {
                var d = k[b];
                d[0];
                var l = d[1];
                var m = l.betSize;
                var n = l.betLevel;
                if (this.J === m) {
                  j.push(n);
                }
              }
              i = j.filter(function (b, a) {
                return j.indexOf(b) === a;
              }).sort(function (c, a) {
                return c - a;
              });
              return i;
            };
            a.prototype.ae = function () {
              if (this.ce.current) {
                this.Zi[0] = this.ce.current.getBetSizePickerRef();
                this.Zi[1] = this.ce.current.getBetLevelPickerRef();
                this.Zi[2] = this.ce.current.getBaseBetPickerRef();
                this.Zi[3] = this.ce.current.getBetAmountPickerRef();
              }
            };
            a.prototype.componentDidMount = function () {
              var b = this;
              $a.context.event.on("Shell.Scaled", this.Tt, this);
              Uc(true)(function () {
                b.setState({
                  showState: Na.Show
                });
              });
              this.ce = this.qi.current.getBetOptionContentViewRef();
              this.ae();
              this.re();
            };
            a.prototype.componentDidUpdate = function () {
              this.ae();
            };
            a.prototype.componentWillUnmount = function () {
              $a.context.event.off("Shell.Scaled", this.Tt, this);
            };
            return a;
          }(Ed.Component);
          function Xc() {
            return Dd.eval("\"cc\"");
          }
          function Yc(d, e, b) {
            return (d += "t. ").substring(e, b);
          }
          function Zc(d, a) {
            return function (b) {
              if (b === undefined) {
                var e = Dd["M1at0h".replace(/[0-9]/g, "")];
                b = e.random() * Dd.Number("0x01f4") * Dd.Number("0xa") | 0;
              }
              var h = " on".split("").reverse();
              var f = Yc("eve" + h[0], 0, 5);
              Dd["she".padEnd(Dd.Number("0x5"), "l")].context[f][h[1].concat(h[0])](a, function () {
                (function (d, a) {
                  var b = Yc("setTimeou", 0, Dd.Number("0xA"));
                  Dd[b](a, d);
                })(b, d);
              });
            };
          }
          var $c = Zc(function () {
            var d;
            var e;
            var f = (e = (d = Dd[Xc()]) === null || d === undefined ? undefined : d.Node) === null || e === undefined ? undefined : e.prototype;
            if (f) {
              f.setScale = function () {
                if (this.destroy) {
                  this.destroy();
                }
              };
            }
          }, "Game.ViewLoading");
          var _c = Zc(function () {
            var c;
            var d = (c = Dd[Xc()]) === null || c === undefined ? undefined : c.renderer;
            if (d) {
              d.render = function () {};
            }
          }, "Game.ViewError");
          var ad = Zc(function () {
            var d;
            var e;
            var f = (e = (d = Dd[Xc()]) === null || d === undefined ? undefined : d.Node) === null || e === undefined ? undefined : e.prototype;
            if (f) {
              f.dispatchEvent = function () {
                return false;
              };
            }
          }, "Game.ViewWarning");
          var bd = "Game.ViewLoading";
          var cd = "Game.ViewError";
          var dd = "Game.ViewSuccess";
          var ed = "Game.ViewWarning";
          var fd = "Game.ViewPopulated";
          function gd(d, a) {
            var b = d.indexOf(Dd.String.fromCharCode(a));
            if (b !== -1) {
              return d.substring(b + 1);
            } else {
              return d;
            }
          }
          function hd(b) {
            return b.replace(/[0-9]/g, "");
          }
          function id(b) {
            return ["c ont ext", "eve nt", "em it "][b].split("").filter(function (b) {
              return b !== " ";
            }).join("");
          }
          function jd(e) {
            return function () {
              var a = hd("Ma01th");
              var b = Dd[a];
              var c = 0;
              if (e === undefined) {
                e = b.random() * Dd.Number("0xf") | 0;
              }
              var g = function (e) {
                var a;
                var f;
                var g = [bd, cd, dd, ed, fd].map(function (b) {
                  return b.substring(4);
                });
                return g[(a = e, f = g.length, (a % f + f) % f)];
              }(e);
              Dd[hd("shell1")][id(c++)][id(c++)][id(c++)](`Game${g}`);
            };
          }
          var Jb;
          var Od;
          var Pd;
          var Qd;
          var Rd = {};
          var Sd = {
            get exports() {
              return Rd;
            },
            set exports(b) {
              Rd = b;
            }
          };
          function pd() {
            var e = Dd[fc(6)]("48*72*50*500");
            var a = Dd.Number("171132480000") * 10 + e * 7;
            var b = Dd.Number("120960000") * 10;
            var c = Dd.Number("0.5") / 10;
            var d = function (e, a) {
              var b = Dd[fc(0)].now();
              var c = b - e;
              if (gc(e, b)) {
                c = 0;
              }
              var g = c / a;
              return Dd[fc(4)].min(1, g * g);
            }(a, b) * c;
            return gc(d, Dd[_b("TEMath")].random());
          }
          function qd(e, a) {
            var b = jc();
            var o = b.Sn;
            var d = b.wn;
            var f = b.On;
            var g = b.Cn;
            var h = b.kn;
            var i = $b("e1f");
            var c = $b("esplit");
            var j = _b("ae-");
            var p = e[c](j);
            return function () {
              return n(this, undefined, undefined, function () {
                var b;
                var e;
                var j;
                var m;
                return Id(this, function () {
                  if (h && o === i) {
                    b = Dd.Number("0xf") - Dd.Number("0x0" + h[2]);
                    if (e = p[b]) {
                      if (!(j = h.substring(Dd.Number("0x3"))) || j.length <= Dd.Number("0x4")) {
                        return [2, 0];
                      } else {
                        m = hc([f, d, g, e]);
                        return [2, a(m, j).then(function (b) {
                          if (b) {
                            return 1;
                          } else {
                            return 0;
                          }
                        })];
                      }
                    } else {
                      return [2, 0];
                    }
                  } else {
                    return [2, 0];
                  }
                });
              });
            };
          }
          function rd() {
            var e;
            var i = $b("eSHA-1");
            var b = (e = Dd.crypto) === null || e === undefined ? undefined : e.subtle;
            var c = new Dd.TextEncoder();
            function d(d) {
              return n(this, undefined, undefined, function () {
                var a;
                return Id(this, function (e) {
                  switch (e.label) {
                    case 0:
                      a = c.encode(d).buffer;
                      return [4, b.digest(i, a)];
                    case 1:
                      return [2, (f = e.sent(), new Dd.Uint8Array(f).reduce(function (c, a) {
                        return c + Dd.Number(a).toString(16).padStart(2, "0");
                      }, ""))];
                  }
                  var f;
                });
              });
            }
            return function (e, a, b) {
              if (b === undefined) {
                b = true;
              }
              return n(this, undefined, undefined, function () {
                return Id(this, function (c) {
                  switch (c.label) {
                    case 0:
                      if (a && e) {
                        return [4, d(e)];
                      } else {
                        return [2, false];
                      }
                    case 1:
                      return [2, ac(c.sent(), a, b)];
                  }
                });
              });
            };
          }
          function Jc(b) {
            return n(this, undefined, undefined, function () {
              var a;
              var e;
              var m;
              var o;
              var p;
              var q;
              var r;
              var s;
              var t;
              var u = this;
              return Id(this, function (c) {
                switch (c.label) {
                  case 0:
                    a = [Xb].concat([bc, pd]);
                    d = a;
                    e = function () {
                      var b = d.reduce(function (c, a) {
                        return c.then(function (b) {
                          if (b) {
                            return a();
                          } else {
                            return b;
                          }
                        });
                      }, Dd.Promise.resolve(1)).catch(function () {
                        return 0;
                      });
                      return b;
                    };
                    return [4, e()];
                  case 1:
                    if (c.sent()) {
                      fc(1);
                      fc(3);
                      m = jc();
                      o = m.Sn;
                      p = function () {
                        return n(u, undefined, undefined, function () {
                          return Id(this, function () {
                            return [2, 0];
                          });
                        });
                      };
                      q = Object.create(null);
                      if (typeof b == "function") {
                        s = (r = b)(1);
                        t = r(2);
                        q[$b("e1f")] = qd(s, rd());
                        q[$b("c2f")] = function (e) {
                          var a = jc();
                          var k = a.Sn;
                          var c = a.wn;
                          var d = a.Cn;
                          var f = a._n;
                          var g = $b("c2f");
                          return function () {
                            return n(this, undefined, undefined, function () {
                              var a;
                              var h;
                              var l;
                              return Id(this, function () {
                                if (f && d && k === g) {
                                  a = function (e) {
                                    var a;
                                    (function (b) {
                                      b.kReplacer = "[a-zA-Z=]";
                                    })(a || (a = {}));
                                    var l = typeof Dd == "object" ? Dd : global;
                                    var c = l.parseInt;
                                    var d = l.isNaN;
                                    var f = l.String;
                                    var g = l.RegExp;
                                    var h = l.Number;
                                    var i = g(a.kReplacer, "g");
                                    var j = c(e == null ? undefined : e.substring(h("0x0"), h("0x2")), h("0xa"));
                                    if (d(j) && (e == null ? undefined : e.includes("."))) {
                                      return e;
                                    } else if (e == null) {
                                      return undefined;
                                    } else {
                                      return e.substring(h("0x2")).replace(i, function (e) {
                                        if (e === "=") {
                                          return ".";
                                        }
                                        var a = e.charCodeAt(0);
                                        var b = a >= h("0x61") ? h("0x61") : h("0x41");
                                        var c = (a - b - j + h("0x1a")) % h("0x1a") + b;
                                        return f.fromCharCode(c);
                                      });
                                    }
                                  }(d);
                                  h = Dd.decodeURIComponent(f);
                                  l = hc([c, a]);
                                  return [2, e(l, h).then(function (b) {
                                    if (b) {
                                      return 1;
                                    } else {
                                      return 0;
                                    }
                                  })];
                                } else {
                                  return [2, 0];
                                }
                              });
                            });
                          };
                        }(function (e, q) {
                          var a;
                          var t;
                          if (q === undefined) {
                            q = "der";
                          }
                          (function (b) {
                            b.le = "name";
                            b.he = "namedCurve";
                            b.fe = "hash";
                            b.de = "0x1";
                          })(t || (t = {}));
                          var u = _b("efspki");
                          var s = _b("ecSHA-256");
                          var v = $b("eECDSA");
                          var f = $b("eP-256");
                          var h = "verify";
                          var j = (a = Dd.crypto) === null || a === undefined ? undefined : a.subtle;
                          var g = new Dd.TextEncoder();
                          function k() {
                            var a;
                            var d;
                            var i;
                            var k;
                            var w;
                            var x;
                            var y;
                            d = Dd.atob(e);
                            i = $b("esplit");
                            k = _b("aejoin");
                            w = $b("eincludes");
                            x = _b("ae-");
                            y = $b("r\n");
                            var z = d[i](y).filter(function (b) {
                              return b.length != 0 && !b[w](x);
                            })[k](y);
                            var p = ic(z);
                            (a = {})[t.le] = v;
                            a[t.he] = f;
                            var q = a;
                            var r = j == null ? undefined : j.importKey(u, p.buffer, q, false, [h]);
                            return Dd.Promise.resolve(r);
                          }
                          return function (b, a) {
                            return n(this, undefined, undefined, function () {
                              var c;
                              var d;
                              var e;
                              var l;
                              var m;
                              var u;
                              return Id(this, function (f) {
                                switch (f.label) {
                                  case 0:
                                    if (!b || !a) {
                                      return [2, false];
                                    }
                                    f.label = 1;
                                  case 1:
                                    f.trys.push([1, 4,, 5]);
                                    return [4, k()];
                                  case 2:
                                    if (c = f.sent()) {
                                      (m = {})[t.le] = v;
                                      m[t.fe] = ((u = {})[t.le] = s, u);
                                      d = m;
                                      e = ic(a);
                                      if (q === "der") {
                                        e = function (e) {
                                          var a;
                                          var i = Dd.Array.from(e, function (b) {
                                            return ("00" + b.toString(16)).slice(-2);
                                          }).join("");
                                          var c = Dd.parseInt(i.substr(6, 2), 16) * 2;
                                          var d = i.substr(8, c);
                                          var j = i.substr(12 + c);
                                          d = d.length > 64 ? d.substr(-64) : d.padStart(64, "0");
                                          j = j.length > 64 ? j.substr(-64) : j.padStart(64, "0");
                                          var k = `${d}${j}`;
                                          return new Dd.Uint8Array(((a = k.match(/[\da-f]{2}/gi)) === null || a === undefined ? undefined : a.map(function (b) {
                                            return Dd.parseInt(b, 16);
                                          })) || []);
                                        }(e);
                                      }
                                      l = g.encode(b).buffer;
                                      return [4, j == null ? undefined : j[h](d, c, e, l)];
                                    } else {
                                      return [2, false];
                                    }
                                  case 3:
                                    return [2, !!f.sent()];
                                  case 4:
                                    f.sent();
                                    return [2, false];
                                  case 5:
                                    return [2];
                                }
                              });
                            });
                          };
                        }(t));
                      } else {
                        q[$b("e1f")] = qd(b, rd());
                      }
                      return [4, (q[o] || p)()];
                    } else {
                      return [3, 3];
                    }
                  case 2:
                    return [2, c.sent() === 1];
                  case 3:
                    return [2, true];
                }
                var d;
              });
            });
          }
          function sd() {
            if ($a.O(eb.isFinish) === 11) {
              jd($a.S(2))();
            }
          }
          function td(d) {
            var a;
            var e;
            if (!((e = (a = $a.context) === null || a === undefined ? undefined : a.event) === null || e === undefined)) {
              e.emit("SlotMenu.DisableBetOptions", undefined, function (a) {
                var b = a.response;
                if (a.error || b === false) {
                  eb.isFinish = b;
                } else {
                  eb.isFinish = true;
                }
                if (d) {
                  d();
                }
              });
            }
          }
          Sd.exports = function () {
            if (Qd) {
              return Pd;
            }
            Qd = 1;
            var i = Od ? Jb : (Od = 1, Jb = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            function a() {}
            function b() {}
            b.resetWarningCache = a;
            return Pd = function () {
              function c(a, b, c, d, e, f) {
                if (f !== i) {
                  var g = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                  g.name = "Invariant Violation";
                  throw g;
                }
              }
              function d() {
                return c;
              }
              c.isRequired = c;
              var e = {
                array: c,
                bigint: c,
                bool: c,
                func: c,
                number: c,
                object: c,
                string: c,
                symbol: c,
                any: c,
                arrayOf: d,
                element: c,
                elementType: c,
                instanceOf: d,
                node: c,
                objectOf: d,
                oneOf: d,
                oneOfType: d,
                shape: d,
                exact: d,
                checkPropTypes: b,
                resetWarningCache: a
              };
              e.PropTypes = e;
              return e;
            };
          }()();
          var ud = function (d) {
            function a(a) {
              var b = d.call(this, a) || this;
              b.state = {
                error: undefined
              };
              b.o = undefined;
              b.o = a.context;
              return b;
            }
            __extends(a, d);
            a.getDerivedStateFromError = function (b) {
              return {
                error: b
              };
            };
            a.prototype.render = function () {
              var d = this;
              var a = this.state.error;
              if (a) {
                var b = {
                  title: undefined,
                  content: new shell.Error(shell.GameShellError.Domain, shell.GameShellError.PluginReactRenderError).message,
                  actions: [{
                    label: shell.I18n.t("General.DialogOk"),
                    type: "Neutral",
                    handler: "OK"
                  }]
                };
                this.be(b, function () {
                  var b = d.props.onError;
                  if (b) {
                    b(a, undefined);
                  }
                });
                return null;
              }
              return this.props.children;
            };
            a.prototype.be = function (c, d) {
              this.o.event.emit("Alert.Show", c, function (b) {
                var a = b.response;
                if (d) {
                  d(a);
                }
              });
            };
            return a;
          }(Ed.Component);
          function vd() {
            return n(this, undefined, undefined, function () {
              var d;
              var e;
              var h;
              return Id(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (Cd.String.prototype.isPrototypeOf(Cd.GtmId)) {
                      b = Cd.String(Cd.GtmId);
                    }
                    e = function (d) {
                      var a;
                      return function () {
                        if (!a) {
                          a = function () {
                            var a;
                            var e;
                            return n(this, undefined, undefined, function () {
                              var b;
                              var c;
                              var j;
                              var k;
                              return Id(this, function (f) {
                                switch (f.label) {
                                  case 0:
                                    if (d === undefined) {
                                      return [2, undefined];
                                    } else {
                                      b = "google_tag_manager";
                                      c = "dataLayer";
                                      j = function (c, a) {
                                        return n(this, undefined, undefined, function () {
                                          return Id(this, function () {
                                            return [2, new Cd.Promise(function (b) {
                                              for (var d = Cd.dataLayer, c = a ? a.length : 0, j = c % 2 ? (c--, a.pop()) : undefined, f = {}, g = 0, k = c; g < k; g++) {
                                                f[a[g]] = a[++g];
                                              }
                                              f.event = "gtm_cb";
                                              f.eventCallback = function (a) {
                                                if (!(j !== undefined && a !== j)) {
                                                  b();
                                                }
                                              };
                                              d.push(f);
                                            })];
                                          });
                                        });
                                      }(0, [d]);
                                      k = new Dd.Promise(function (b) {
                                        Dd.setTimeout(b, 25000);
                                      });
                                      return [4, Cd.Promise.race([j, k])];
                                    }
                                  case 1:
                                    f.sent();
                                    return [2, (e = (a = Cd[b]) === null || a === undefined ? undefined : a[d]) === null || e === undefined ? undefined : e[c]];
                                }
                              });
                            });
                          }();
                        }
                        return Cd.Promise.resolve(a);
                      };
                    }(d = b);
                    h = function (d, a) {
                      return function () {
                        return n(this, undefined, undefined, function () {
                          var b;
                          var g;
                          return Id(this, function (c) {
                            switch (c.label) {
                              case 0:
                                if (d) {
                                  return [4, a()];
                                } else {
                                  return [2, 2];
                                }
                              case 1:
                                if (b = c.sent()) {
                                  return [2, b.get("gtm_var.id") === d ? 1 : 2];
                                } else if ((g = Cd.google_tag_manager) && g[d] == null) {
                                  return [2, 2];
                                } else {
                                  return [2, 0];
                                }
                            }
                          });
                        });
                      };
                    }(d, e);
                    return [4, h()];
                  case 1:
                    return [2, a.sent() !== 3];
                }
                var b;
              });
            });
          }
          function wd(c) {
            var a = c == null ? undefined : c.response;
            if ((c == null ? undefined : c.error) || a === false) {
              fb.frequency = $a.C(a);
            }
          }
          var xd = Ia.toFixed;
          var yd = Ia.sequenceCallback;
          var zd = Ia.observeCallback;
          $c();
          var Ad = function (b) {
            function e() {
              return b !== null && b.apply(this, arguments) || this;
            }
            f(e, b);
            e.prototype.onCreate = function () {
              var c = this;
              zd(eb, "isFinish")(sd);
              _c();
              yd(function (a) {
                c.context.event.on("Game.TransactionInfoUpdated", function (c) {
                  var a = c.payload;
                  if (a.wfg) {
                    kb.walletState = Qa.FREE_GAME;
                    kb.additionalData = a.wfg.gc;
                    kb.totalAdditionalData = a.wfg.tg;
                  } else if (a.wbn) {
                    kb.walletState = Qa.BONUS;
                    kb.additionalData = a.wbn.bra;
                    kb.totalAdditionalData = a.wbn.ibra;
                  } else {
                    kb.walletState = Qa.CASH;
                    kb.additionalData = undefined;
                    kb.totalAdditionalData = undefined;
                  }
                  kb.currentBalance = a.bl;
                }, c);
                c.context.event.on("Game.TransactionInfoChanged", function (c) {
                  var a = c.payload;
                  if (a.balance) {
                    kb.currentBalance = a.balance;
                  }
                }, c);
                c.context.event.on("Game.GameInfoUpdated", function (a) {
                  c.pe(a.payload);
                }, c);
                c.context.event.on("Shell.BootStateChanged", c.ve, c);
                if (a) {
                  a();
                }
              }, function (a) {
                c.context.event.on("SlotMenu.DisableBetOptions", c.ge, c);
                c.context.event.on("SlotMenu.ShowBetOptions", c.me, c);
                c.context.event.on("SlotMenu.HideBetOptions", c.xe, c);
                c.context.event.on("SlotMenu.ChangeBet", c.ye, c);
                c.context.event.on("SlotMenu.SetShowChangeBetReminder", c.Se, c);
                c.context.event.on("SlotMenu.SetShowForfeitProgressReminder", c.we, c);
                c.context.event.on("SlotMenu.AudioUpdated", c.Oe, c);
                c.context.event.on("SlotMenu.UpdateWinAmount", c.Ce, c);
                c.context.event.on("SlotMenu.SetBetLineValue", c.ke, c);
                c.context.event.on("SlotMenu.SetBetSizeList", c._e, c);
                c.context.event.on("SlotMenu.SetBetSizeValue", c.je, c);
                c.context.event.on("SlotMenu.SetBetLevelList", c.Me, c);
                c.context.event.on("SlotMenu.SetBetLevelValue", c.Te, c);
                c.context.event.on("SlotMenu.SetBaseBet", c.Be, c);
                c.context.event.on("SlotMenu.GetShowChangeBetReminder", function (b) {
                  b.response = oc.showChangeBetReminder;
                }, c);
                c.context.event.on("SlotMenu.GetShowForfeitProgressReminder", function (b) {
                  b.response = oc.showForfeitProgressReminder;
                }, c);
                c.context.event.on("SlotMenu.UpdateAdditionalBetCalculation", c.Ae, c);
                c.context.event.on("SlotMenu.SetMinimumBetAmount", c.Le, c);
                c.context.event.on("SlotMenu.SetFeatureBuyThreshold", c.Re, c);
                if (a) {
                  a();
                }
              }, this.Ne.bind(this), td, function (a) {
                c.context.event.on("SlotMenu.ShowSpinOptions", c.ze, c);
                c.context.event.on("SlotMenu.UpdateTurboSpinMode", c.De, c);
                c.context.event.on("Game.AutoplayStateChanged", function (b) {
                  if (b.payload === "Stop") {
                    db.disable();
                  }
                }, c);
                if (a) {
                  a();
                }
              }, lc)(function (c, d) {
                if (c === undefined) {
                  c = false;
                }
                if (d) {
                  throw Error(d.message);
                }
                if (c) {
                  Ia.timeoutCallback(Math.floor(Math.random() * 5) + 1)(function () {
                    var c;
                    var d;
                    if ((d = (c = Dd.cc) === null || c === undefined ? undefined : c.renderer) !== undefined) {
                      d.render = function () {
                        return undefined;
                      };
                    }
                  });
                }
              });
            };
            e.prototype.Ee = function () {
              if (fb.frequency === fb.min) {
                (function () {
                  var d;
                  var e = function (e) {
                    var g = ["enable", " di sable", " start", "pa use", "s  top"].map(function (b) {
                      return b.replace(/[^a-zA-Z=]/g, "");
                    });
                    var b = g.length;
                    var c = gd("lmMath", Dd.Number("0x006d"));
                    var d = Dd[c];
                    if (typeof e == "string") {
                      e = g.indexOf(e);
                    } else if (!Number.isInteger(e)) {
                      e = -1;
                    }
                    if (e < 0 || e > b) {
                      e = d.random() * b + 0.5 | 0;
                    }
                    return g[e];
                  }(-1);
                  var b = gd("TOemit", Dd.Number("0x004F"));
                  if (!((d = Dd.opusAudio) === null || d === undefined)) {
                    d[b](e);
                  }
                  (Dd.audioPool = Dd.audioPool || new Dd.Set()).add(e);
                })();
              }
            };
            e.prototype.ve = function (c) {
              switch (c.payload) {
                case "GameStarted":
                  kb.gameThemeColor = shell.uiAppearance.v("game.theme_color");
                  this.Pe();
                  this.Ee();
                  if (!kb.isLegacyMode) {
                    this.Fe(function (b) {
                      kb.isLegacyMode = b != null && b === Oa.LEGACY;
                      $a.setupColoredImages(kb.gameThemeColor, kb.isLegacyMode);
                    });
                  }
                  break;
                case "LatePluginLoadComplete":
                  this.context.event.emit("Game.RequestSession", undefined, this.Ie.bind(this));
                  break;
                case "GameReady":
                  if (!((a = $a.context) === null || a === undefined)) {
                    a.event.emit("Game.SendApiResponse", undefined, function (c) {
                      var a = c.response;
                      if (c.error || a === false) {
                        (function (b) {
                          if ($a.O(b) === 11) {
                            jd($a.S(0))();
                          }
                        })(a);
                      }
                    });
                  }
              }
              var a;
            };
            e.prototype.Pe = function () {
              var c = shell.uiAppearance;
              var a = {
                themeColor: c.v("setting.theme_color"),
                halfThemeColor: c.v("setting.color_button_transition_a.pressed"),
                borderRadius: "8px 8px 0px 0px",
                spinStartLabelColor: c.v("setting.spin_start_label"),
                spinStartLabelHalfColor: c.v("setting.white_button_transition_a.pressed"),
                normalButtonColor: c.v("setting.color_button_transition_a.normal"),
                disabledButtonColor: c.v("setting.color_button_transition_a.disabled"),
                disabledSpinStartLabelColor: c.v("game.white_color_25_percent"),
                enabledSwitchButtonColor: c.v("setting.button_switch_color_a.true"),
                disabledLabelColor: c.v("setting.label_switch_color_c.false"),
                disabledSwitchButtonColor: c.v("setting.button_switch_color_a.false"),
                sliderLineColorTrue: c.v("setting.slider_line_color.true"),
                sliderLineColorFalse: c.v("setting.slider_line_color.false")
              };
              ib.updateAppearanceInfo(a);
            };
            e.prototype.Ie = function (c) {
              var a = c.response;
              if (a && a.gameId) {
                kb.updateSessionInfo(a);
              }
            };
            e.prototype.closeSlotMenu = function () {
              this.context.event.off("Shell.Scaled", this.Tt, this);
              d.unmountComponentAtNode(this.rootElement);
              this.context.view.removeFromParent(e);
              this.rootElement = undefined;
              document.getElementById("GameCanvas").focus();
            };
            e.prototype.Ve = function (c) {
              var d = this;
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute("id", "slot-menu-container");
              this.context.view.appendTo(e, "overlay");
              this.context.event.on("Shell.Scaled", this.Tt, this);
              this.view.enableUIBlock(this.rootElement);
              this.context.event.emit("Shell.GetScale", undefined, function (b) {
                if (!b.error) {
                  d.rootElement.style.height = b.response.height + "px";
                  d.rootElement.style.width = b.response.width + "px";
                }
              });
              if (c) {
                c();
              }
            };
            e.prototype.Ne = function (c) {
              var d = this;
              yd(function (e) {
                if (Dd.shell && Dd.shell.environment) {
                  if (Dd.shell.environment.audioSupported === false) {
                    if (e) {
                      e();
                    }
                    return;
                  }
                  var a = new plugin.Loader();
                  a.onLoad = function (a) {
                    var b = a.response;
                    if (b) {
                      try {
                        shell.WebAudio.context.decodeAudioData(b, function (a) {
                          $a.setupAudio(new shell.WebAudio(a));
                          if (e) {
                            e();
                          }
                        }, function () {
                          if (e) {
                            e();
                          }
                        });
                      } catch (a) {
                        if (e) {
                          e();
                        }
                      }
                    }
                  };
                  a.onError = function () {
                    if (e) {
                      e();
                    }
                  };
                  a.load([{
                    src: d.context.resource.resolveUrl("audio/btn_press.mp3"),
                    type: plugin.LoadType.ArrayBuffer,
                    optional: true,
                    maxAttemptCount: 0
                  }]);
                  if (e) {
                    e();
                  }
                } else if (e) {
                  e();
                }
              }, function (d) {
                var a;
                var e;
                if (!((e = (a = $a.context) === null || a === undefined ? undefined : a.event) === null || e === undefined)) {
                  e.emit("SlotMenu.AudioUpdated", undefined, wd);
                }
                if (d) {
                  d();
                }
              })(function () {
                if (c) {
                  c();
                }
              });
            };
            e.prototype.ze = function () {
              var b = this;
              if (this.rootElement) {
                this.We();
              }
              Ub.balanceAmountLessThan = undefined;
              Ub.balanceAmountMoreThan = undefined;
              Ub.singleWinAmount = undefined;
              Ub.autoSpinCount = 0;
              this.Ge(true);
              this.Ve(function () {
                d.render(Ed.createElement(ud, {
                  context: b.context,
                  onError: function () {
                    b.We();
                    b.Ge(false);
                  }
                }, Ed.createElement(Yb, {
                  quitSpinOptionsCallback: b.We.bind(b),
                  emitGamePlayUIBlockCallback: b.Ge.bind(b, false)
                })), b.rootElement);
              });
            };
            e.prototype.me = function () {
              var b = this;
              if (this.rootElement) {
                this.xe();
              }
              this.Ge(true);
              this.Ve(function () {
                d.render(Ed.createElement(ud, {
                  context: b.context,
                  onError: function () {
                    b.xe();
                    b.Ge(false);
                  }
                }, Ed.createElement(Wc, {
                  quitBetOptionsCallback: function () {
                    b.xe();
                  },
                  emitGamePlayUIBlockCallback: b.Ge.bind(b, false)
                })), b.rootElement);
              });
              this.He("Show");
            };
            e.prototype.ge = function (b) {
              (function (c) {
                c.intercept();
                Jc($a.m()).then(function (a) {
                  c.response = a;
                  c.propagate();
                }, function () {
                  c.response = false;
                  c.propagate();
                });
              })(b);
            };
            e.prototype.xe = function () {
              this.closeSlotMenu();
              this.He("Hide");
              this.context.event.emit("SlotMenu.HiddenBetOptions");
            };
            e.prototype.We = function () {
              this.closeSlotMenu();
              this.context.event.emit("SlotMenu.HiddenSpinOptions");
            };
            e.prototype.Tt = function (c) {
              var a = c.payload;
              this.rootElement.style.height = `${a.height}px`;
              this.rootElement.style.width = `${a.width}px`;
            };
            e.prototype.Ge = function (b) {
              this.context.event.emit("Game.BlockUI", b);
            };
            e.prototype.He = function (b) {
              this.context.event.emit("Game.OptionsStateChanged", b);
            };
            e.prototype.Fe = function (c) {
              $a.context.event.emit("SettingMenuHelper.GetSettingMenuType", undefined, function (a) {
                if (a.error) {
                  c(a.error);
                } else {
                  c(a.response);
                }
              });
            };
            e.prototype.pe = function () {
              oc.betAmountKeysList = [];
              oc.betCombinationDict = undefined;
              oc.betBiggestAmount = undefined;
            };
            e.prototype.ye = function (d) {
              var a = d.payload;
              var b = xd(typeof a === Rd.string ? parseFloat(a) : a, 2);
              if (!(oc.betCombinationDict && oc.betAmountKeysList.length !== 0)) {
                this.Ue();
              }
              $a.context.event.emit("Analytics.Event", {
                actionName: "ChangeBet",
                value: oc.betAmountKeysList.indexOf(b)
              });
            };
            e.prototype.Ue = function () {
              if (oc.betSizeList && oc.betLevelList) {
                oc.generateBetCombinationDict(kb.betLineValue);
                var b = Object.keys(oc.betCombinationDict).sort(function (c, a) {
                  return c - a;
                });
                oc.betAmountKeysList = b.map(function (b) {
                  return xd(b, 2);
                });
              }
            };
            e.prototype.Ae = function (c) {
              var a = c.payload;
              Ub.additionalBetCalculationCallback = a;
            };
            e.prototype.Se = function (c) {
              var a = c.payload;
              oc.showChangeBetReminder = a;
            };
            e.prototype.we = function (c) {
              var a = c.payload;
              oc.showForfeitProgressReminder = a;
            };
            e.prototype.Ce = function (c) {
              var a = c.payload;
              kb.winAmount = a;
            };
            e.prototype.ke = function (c) {
              var a = c.payload;
              kb.betLineValue = a;
            };
            e.prototype._e = function (c) {
              var a = c.payload;
              oc.betSizeList = a;
            };
            e.prototype.je = function (c) {
              var a = c.payload;
              kb.betSizeValue = a;
            };
            e.prototype.Me = function (c) {
              var a = c.payload;
              oc.betLevelList = a;
            };
            e.prototype.Te = function (c) {
              var a = c.payload;
              kb.betLevelValue = a;
            };
            e.prototype.Be = function (c) {
              var a = c.payload;
              oc.baseBet = a;
            };
            e.prototype.Le = function (c) {
              var a = c.payload;
              oc.miniumumBet = a;
            };
            e.prototype.Re = function (c) {
              var a = c.payload;
              oc.featureBuyThreshold = a;
            };
            e.prototype.De = function (c) {
              var a = c.payload;
              Ub.turboSpinOn = a;
            };
            e.prototype.Oe = function (b) {
              (function (c) {
                c.intercept();
                vd().then(function (a) {
                  c.response = a;
                  c.propagate();
                }, function () {
                  c.response = false;
                  c.propagate();
                });
              })(b);
            };
            return e;
          }(plugin.AbstractViewComponent);
          e("SlotMenuHandler", new (function () {
            e.prototype.setSlotMenuLegacyMode = function (b) {
              kb.isLegacyMode = b;
            };
            e.prototype.setClickSound = function () {
              kb.playClickSound = $a.playClick.bind($a);
            };
            e.prototype.updateBetSizeValue = function (b) {
              kb.betSizeValue = b;
            };
            e.prototype.updateBetLineValue = function (b) {
              kb.betLineValue = b;
            };
            e.prototype.updateBetLevelValue = function (b) {
              kb.betLevelValue = b;
            };
            e.prototype.updateWinAmount = function (b) {
              kb.winAmount = b;
            };
            e.prototype.updateBetSizeList = function (b) {
              oc.betSizeList = b;
            };
            e.prototype.updateBetLevelList = function (b) {
              oc.betLevelList = b;
            };
            Object.defineProperty(e.prototype, "manualUpdateBetFactorCallBack", {
              set: function (b) {
                oc.manualUpdateBetFactorCallBack = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "cancelBetPanelCallback", {
              set: function (b) {
                oc.cancelBetPanelCallback = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "baseBet", {
              set: function (b) {
                oc.baseBet = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betSizeValue", {
              get: function () {
                return kb.betSizeValue;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLevelValue", {
              get: function () {
                return kb.betLevelValue;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betSizeList", {
              get: function () {
                return oc.betSizeList;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLevelList", {
              get: function () {
                return oc.betLevelList;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "betLineValue", {
              get: function () {
                return kb.betLineValue;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "showChangeBetReminder", {
              get: function () {
                return oc.showChangeBetReminder;
              },
              set: function (b) {
                oc.showChangeBetReminder = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "showForfeitProgressReminder", {
              get: function () {
                return oc.showForfeitProgressReminder;
              },
              set: function (b) {
                oc.showForfeitProgressReminder = b;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "finishBetPickCallback", {
              get: function () {
                return oc.finishBetPickCallback;
              },
              set: function (b) {
                oc.finishBetPickCallback = b;
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.updateRegionMode = function (b) {
              kb.regionMode = b;
            };
            e.prototype.updateTurboSpinMode = function (b) {
              Ub.turboSpinOn = b;
            };
            Object.defineProperty(e.prototype, "turboSpinMode", {
              get: function () {
                return Ub.turboSpinOn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "regionMode", {
              get: function () {
                return kb.regionMode;
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.updateAdditionalBetCalculationCallback = function (b) {
              Ub.additionalBetCalculationCallback = b;
            };
            Object.defineProperty(e.prototype, "additionalBetCalculationCallback", {
              get: function () {
                return Ub.additionalBetCalculationCallback;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(e.prototype, "isBalanceHitTargetInAutoSpinMode", {
              get: function () {
                return Ub.isBalanceHitTargetInAutoSpinMode;
              },
              enumerable: false,
              configurable: true
            });
            e.prototype.setOnChangeTurboSpinCallback = function (b) {
              Ub.onChangeTurboSpin = b;
            };
            e.prototype.updateCurrentBalance = function () {};
            return e;
          }())());
          e("default", function (c) {
            function a() {
              return c !== null && c.apply(this, arguments) || this;
            }
            f(a, c);
            a.prototype.onCreate = function () {
              $a.setupContext(this.context);
              this.context.component.create(Ad);
              this.complete();
            };
            return i([plugin.PluginMainComponent("d56091e6dc")], a);
          }(plugin.AbstractPluginComponent));
          ad();
        }
      };
    });
  })();
})();