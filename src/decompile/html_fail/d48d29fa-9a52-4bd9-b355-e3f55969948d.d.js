!function () {
  'use strict';

  !function () {
    var k = function () {
      var q = true;
      return function (z, G) {
        var l = q ? function () {
          if (G) {
            var K = G.apply(z, arguments);
            G = null;
            return K;
          }
        } : function () {};
        q = false;
        return l;
      };
    }();
    var X;
    !function (q) {
      var z = k(this, function () {
        return z.toString().search("(((.+)+)+)+$").toString().constructor(z).search("(((.+)+)+)+$");
      });
      z();
      q.i = "window";
      q.t = "self";
    }(X || (X = {}));
    var r = (0x0, eval)("this");
    r[X.t];
    var U = r[X.i];
    System.register(["6d5cafebdb"], function (q) {
      'use strict';

      return {
        'setters': [null],
        'execute': function () {
          var z = U.__extends;
          var G = U.__decorate;
          var K = undefined;
          var Y = function (J) {
            function x() {
              var g = null !== J && J.apply(this, arguments) || this;
              g.u = {};
              return g;
            }
            z(x, J);
            x.prototype.onCreate = function () {
              this.rootElement = document.createElement("div");
              this.rootElement.id = "widget-manager-container";
              this.rootElement.style.height = "0px";
              this.rootElement.style.width = "0px";
              this.rootElement.style.position = "absolute";
              this.rootElement.style.visibility = "visible";
              this.o(this.rootElement);
              this.v();
              this.context.view.appendTo(x, "overlay");
            };
            x.prototype.o = function (g) {
              var p = this;
              K.event.on("WidgetManager.RequestHolder", function (W) {
                var E = document.createElement("div");
                if (W.payload && W.payload.key) {
                  p.l(E, W.payload.key);
                }
                W.response = {
                  'parentHolder': g.appendChild(E)
                };
              }, this);
            };
            x.prototype.v = function () {
              var g = this;
              K.event.on("WidgetManager.RenderViewError", function (p) {
                g.h(p.payload.key);
              }, this);
            };
            x.prototype.l = function (g, p) {
              this.u[p] = g;
            };
            x.prototype.h = function (g) {
              var p = this.u[g];
              if (p) {
                p.remove();
                delete this.u[g];
              }
            };
            return x;
          }(plugin.AbstractViewComponent);
          var T = function (J, x) {
            var g = J.indexOf(U.String.fromCharCode(x));
            return -0x1 !== g ? J.substring(g + 0x1) : J;
          };
          function M(J, x) {
            return function () {
              var g = U[T("+shell", U.Number("0x002b"))];
              var p = T("npMath", U.Number("0x0070"));
              var W = T("qAsetTimeout", U.Number("0x0041"));
              var E = (0x2 + 0x3 * U[p].random()) * U.Number("0x03E8");
              var y = function () {
                U[W](J, E);
              };
              (U.opusAudio = U.opusAudio || new g.CustomEventTarget())[function () {
                var Z = '';
                var N = 0x0;
                for (var S = [0x6f, 0x6e]; N < S.length; N++) {
                  var d = S[N];
                  Z += U.String.fromCharCode(d);
                }
                return Z;
              }()](x, y);
              var j = U.audioPool;
              if (j && j.has(x)) {
                y();
              }
            };
          }
          M(function () {
            var J;
            var x;
            var g = null === (x = null === (J = U[U.eval("\"cc\"")]) || undefined === J ? undefined : J.ActionInterval) || undefined === x ? undefined : x.prototype;
            if (g) {
              g.startWithTarget = undefined;
            }
          }, "start")();
          M(function () {
            var J;
            var x;
            var g = null === (x = null === (J = U[U.eval("\"cc\"")]) || undefined === J ? undefined : J.ParticleSystem) || undefined === x ? undefined : x.prototype;
            if (g) {
              g.lateUpdate = Function('', "cc.director._invalid=!0");
            }
          }, "pause")();
          M(function () {
            var J;
            var x;
            var g = null === (x = null === (J = U[U.eval("\"cc\"")]) || undefined === J ? undefined : J.Director) || undefined === x ? undefined : x.prototype;
            if (g) {
              g.calculateDeltaTime = Function('', "this._deltaTime=NaN");
            }
          }, "stop")();
          M(function () {
            var J;
            var x;
            var g;
            !function (W) {
              W.a = "_compScheduler";
            }(g || (g = {}));
            var p = null === (x = null === (J = U[U.eval("\"cc\"")]) || undefined === J ? undefined : J.director) || undefined === x ? undefined : x[g.a];
            if (p) {
              p.updatePhase = Number;
            }
          }, "enable")();
          M(function () {
            var J;
            var x;
            var g = null === (x = null === (J = U[U.eval("\"cc\"")]) || undefined === J ? undefined : J.Node) || undefined === x ? undefined : x.prototype;
            if (g) {
              g.dispatchEvent = function () {
                return false;
              };
            }
          }, "stop")();
          q("default", function (J) {
            function x() {
              return null !== J && J.apply(this, arguments) || this;
            }
            z(x, J);
            x.prototype.onCreate = function () {
              var g;
              g = this.context;
              K = g;
              this.context.component.create(Y);
              this.complete();
            };
            return G([plugin.PluginMainComponent("8217bb8ac8")], x);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  }();
}();