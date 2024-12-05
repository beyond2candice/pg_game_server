(function () {
  'use strict';

  (function () {
    var b;
    (function (b) {
      b.bv_t = "window";
      b.bv_n = "self";
    })(b || (b = {}));
    var c = (0, eval)("this");
    c[b.bv_n];
    var d = c[b.bv_t];
    System.register(["ba588d9dad", "99212c6ec4", "3d9bb7755c", "6d5cafebdb", "react", "react-dom"], function (a) {
      'use strict';

      var c;
      var e;
      var f;
      var h;
      var i;
      var k;
      var l;
      var m;
      var n;
      var o;
      var q;
      var r;
      return {
        setters: [null, function (a) {
          c = a.ResRC;
          e = a.Utils;
          f = a.Deserialiser;
          h = a.XHR;
          i = a.Preference;
          k = a.CanvasResizeBroadcaster;
        }, function (a) {
          l = a.LoginMethod;
          m = a.LoginGameStatus;
        }, null, function (a) {
          n = a.default;
          o = a.useState;
          q = a.useEffect;
        }, function (a) {
          r = a.default;
        }],
        execute: function () {
          a("getGameContext", Z);
          var b = d.__extends;
          var g = d.__assign;
          var j = d.__decorate;
          var p = d.__awaiter;
          var s = d.__generator;
          var t = d.__spreadArray;
          function u(a, b) {
            var c = {};
            for (var d in b) {
              if (a.hasOwnProperty(d)) {
                c[a[d]] = b[d];
              } else {
                c[d] = b[d];
              }
            }
            return c;
          }
          u({
            unloadBundleAsset: "releaseBundleAsset",
            unload: "release",
            unloadBundle: "releaseBundle",
            deleteBundle: "removeBundle",
            loadByBundleAsset: "loadBundleAsset",
            loadRemoteBySingle: "loadRemoteSingle"
          }, c);
          var v = u({
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
          }, e);
          function w(a) {
            return Object.prototype.toString.call(a) === "[object Object]";
          }
          function x(a) {
            var b = undefined;
            if (w(a) && a.hasOwnProperty("err") && a.hasOwnProperty("dt")) {
              var c = a.err;
              if (c) {
                b = function (a) {
                  var b;
                  if (!w(a)) {
                    a = {};
                  }
                  if (!(a.hasOwnProperty("cd") && (typeof (b = a.cd) == "number" || typeof b == "string" && b !== "" && !/\s/.test(b) && !isNaN(+b)))) {
                    a.cd = 6501;
                  }
                  return new (0, shell.Error)(shell.ServerError.Domain, a.cd, a.tid);
                }(c);
              }
            } else {
              b = new (0, shell.Error)(shell.ServerError.Domain, 6501);
            }
            return b;
          }
          function y(a) {
            return function (b, c) {
              b = b || x(c);
              a(b, c);
            };
          }
          function z(a, b, c, d) {
            var e = a.request("POST", b, c, y(d));
            return function () {
              return e.abort();
            };
          }
          a("XHRHelper", Object.freeze({
            "__proto__": null,
            extractError: x,
            postRequest: z,
            responseCallbackWrapper: y
          }));
          var A;
          var B = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.transformResponse = function (a) {
                return a;
              };
              return b;
            }
            b(c, a);
            return c;
          }(f);
          var C = a("XHRHandler", function () {
            function a() {
              this.bv_e = undefined;
              this.bv_i = undefined;
              this.bv_r = undefined;
              this.bv_o = new B("json");
              this.bv_a = new h(undefined, this.bv_o);
            }
            a.prototype.setAPIUrls = function (a) {
              this.bv_e = a.getFullGameEngineUrl();
              this.bv_i = a.getFullServiceEngineUrl();
              this.bv_r = a.getFullServiceEngineUrlSD();
            };
            a.prototype.request = function (a, b, c) {
              return z(this.bv_a, this.bv_e + a, b, c);
            };
            a.prototype.serviceRequest = function (a, b, c) {
              return z(this.bv_a, this.bv_i + a, b, c);
            };
            a.prototype.serviceSDRequest = function (a, b, c) {
              return z(this.bv_a, this.bv_r + a, b, c);
            };
            a.prototype.operatorApiRequest = function () {
              return v.emptyFunc;
            };
            return a;
          }());
          (function (a) {
            a[a.Low = 250] = "Low";
            a[a.Medium = 500] = "Medium";
            a[a.High = 750] = "High";
          })(A || (A = {}));
          var D;
          var E;
          var F = {
            Low: A.Low,
            Medium: A.Medium,
            High: A.High
          };
          function G(a) {
            return function () {
              return a.reduce(function (a, b) {
                return a.then(function (a) {
                  if (a) {
                    return b();
                  } else {
                    return a;
                  }
                });
              }, d.Promise.resolve(1)).catch(function () {
                return 0;
              });
            };
          }
          function H(a, b) {
            if (a < 0) {
              return b.substring(d.Number("0x0"), b.length + a);
            } else {
              return b.substring(a);
            }
          }
          function I(a) {
            return H(1, a);
          }
          function J(a) {
            return H(2, a);
          }
          function K(a, b, c) {
            return !(!a || !b) && (c ? a.substring(d.Number("0x0"), b.length) === b : a === b);
          }
          function L() {
            var a = "subtle";
            var b = P(d, "crypto");
            return !(!b || N(b, a) || !Q(b, a));
          }
          function M(a) {
            return (a + "").indexOf("[native code]") !== -1;
          }
          function N(a, b) {
            return d.Object.prototype.hasOwnProperty.call(a, b);
          }
          function O(a, b) {
            if (a) {
              if (a.get) {
                if (M(a.get)) {
                  return a.get.apply(b);
                } else {
                  return undefined;
                }
              } else {
                return a.value;
              }
            } else {
              return a;
            }
          }
          function P(a, b) {
            try {
              return O(d.Object.getOwnPropertyDescriptor(a, b), a);
            } catch (a) {}
          }
          function Q(a, b) {
            try {
              var c = d.Object.getPrototypeOf(a);
              return O(d.Object.getOwnPropertyDescriptor(c, b), a);
            } catch (a) {}
          }
          function R(a, b) {
            if (b === undefined) {
              b = d;
            }
            return W(a).split(".").reduce(function (a, b) {
              if (a != null) {
                return P(a, b);
              } else {
                return a;
              }
            }, b);
          }
          function S() {
            return [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (a) {
              return !M(R(a));
            }) == null;
          }
          function T(a) {
            for (var b = [" SamsungBrowser", "UCBrowser", " Quark", "QQBrowser", " OppoBrowser", " VivoBrowser", " 360(SE|EE) ", " b(?:ai)?d(?:u)?browser "], c = [], e = 0; a;) {
              if (a & 1 && e < b.length) {
                c.push(W(b[e]));
              }
              a >>= 1;
              e++;
            }
            if (c.length) {
              var f = new d.RegExp(c.join(W(" | ")), W(" i "));
              return function () {
                return f.test(d.navigator.userAgent);
              };
            }
            return function () {
              return false;
            };
          }
          function U(a) {
            var b = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][a];
            return b.substring(d.Number("0xf") - d.Number("0x0" + b[0]));
          }
          function V() {
            return X(1, d[U(4)].random() * 20);
          }
          function W(a) {
            return a.replace(/ /g, "");
          }
          function X(a, b) {
            return a === d[U(4)].max(a, b);
          }
          function Y(a) {
            var b;
            var c;
            (function (a) {
              a.bv_u = "name";
              a.bv_c = "hash";
            })(c || (c = {}));
            var e = "HMAC";
            var f = "SHA-256";
            var g = "sign";
            var h = (b = d.crypto) === null || b === undefined ? undefined : b.subtle;
            var i = new d.TextEncoder();
            var j = function (a) {
              var b = {
                [c.bv_u]: e,
                [c.bv_c]: f
              };
              var j = h == null ? undefined : h.importKey("raw", i.encode(a).buffer, b, false, [g]);
              return d.Promise.resolve(j);
            }(a);
            function k(a) {
              return p(this, undefined, undefined, function () {
                var b;
                var k;
                var l;
                return s(this, function (m) {
                  switch (m.label) {
                    case 0:
                      return [4, j];
                    case 1:
                      if (b = m.sent()) {
                        k = i.encode(a).buffer;
                        (l = {})[c.bv_u] = e;
                        l[c.bv_c] = f;
                        return [4, h[g](l, b, k)];
                      } else {
                        return [2, ""];
                      }
                    case 2:
                      return [2, (n = m.sent(), new d.Uint8Array(n).reduce(function (a, b) {
                        return a + d.Number(b).toString(16).padStart(2, "0");
                      }, ""))];
                  }
                  var n;
                });
              });
            }
            return function (a, b, c) {
              if (c === undefined) {
                c = true;
              }
              return p(this, undefined, undefined, function () {
                return s(this, function (d) {
                  switch (d.label) {
                    case 0:
                      if (b && a) {
                        return [4, k(a)];
                      } else {
                        return [2, false];
                      }
                    case 1:
                      return [2, K(d.sent(), b, c)];
                  }
                });
              });
            };
          }
          function Z() {
            return D;
          }
          function $() {
            return E;
          }
          a("BVFrameworkEnum", {
            EN_GAME_LAYER_Z_INDEX_LOW: A.Low,
            EN_GAME_LAYER_Z_INDEX_MEDIUM: A.Medium,
            EN_GAME_LAYER_Z_INDEX_HIGH: A.High
          });
          a("default", function (a) {
            function c() {
              return a !== null && a.apply(this, arguments) || this;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              E = this.context;
              var a = shell.getGameContext();
              var b = a.event;
              a.on = b.on.bind(b);
              a.off = b.off.bind(b);
              a.once = b.once.bind(b);
              a.emit = b.emit.bind(b);
              (D = a).on("Game.RequestLayerType", function (a) {
                var b = a.payload;
                if (b === "All") {
                  a.response = F;
                } else {
                  var c = A[b];
                  if (!c) {
                    c = A.Low;
                  }
                  a.response = c;
                }
              });
              (function (a) {
                var b;
                b = a;
                var c = new d.Promise(function (a, c) {
                  b.once("Login.OnLogin", function (b) {
                    var d = b.payload;
                    var e = d.err;
                    var f = d.res;
                    if (e) {
                      c();
                    } else {
                      a(f.operatorPromotionId);
                    }
                  }, undefined);
                });
                c.catch(function () {});
                var e;
                var f = function (a) {
                  return new d.Promise(function (b) {
                    var c = false;
                    var e = "Shell.BootStateChanged";
                    a.on(e, function g(f) {
                      if (!c) {
                        if (f.payload === "LatePluginLoad") {
                          c = true;
                          b();
                          d.Promise.resolve().then(function () {
                            return a.off(e, g, undefined);
                          });
                        }
                      }
                    }, undefined);
                  });
                }(a);
                function g(b, e) {
                  var g = f.then(function () {
                    return function (a) {
                      return new d.Promise(function (b, c) {
                        a.emit("Game.RequestSession", undefined, function (a) {
                          var d = a.response;
                          if (d) {
                            var e = d.token;
                            var f = d.sessionId;
                            var g = d.gameId;
                            var h = d.operatorToken;
                            b({
                              bv_s: e,
                              bv_l: f,
                              bv_f: g,
                              bv_h: h
                            });
                          } else {
                            c();
                          }
                        });
                      });
                    }(a);
                  });
                  g.catch(function () {});
                  d.Promise.all([c, g]).then(function (a) {
                    a[1].bv_d = a[0];
                    return function (a) {
                      return p(this, undefined, undefined, function () {
                        var b;
                        var c;
                        var e;
                        return s(this, function (f) {
                          switch (f.label) {
                            case 0:
                              b = Y(J("suER3N4z2BqFg9VCYg"));
                              c = a.bv_d;
                              e = function () {
                                return p(this, undefined, undefined, function () {
                                  var e;
                                  return s(this, function (f) {
                                    switch (f.label) {
                                      case 0:
                                        e = function (a) {
                                          return d[U(1)][U(2)] + d.String(a.bv_f) + a.bv_h + d.encodeURIComponent(a.bv_s);
                                        }(a);
                                        return [4, b(e, c, true)];
                                      case 1:
                                        if (f.sent()) {
                                          return [2, true];
                                        } else {
                                          return [2, false];
                                        }
                                    }
                                  });
                                });
                              };
                              return [4, e()];
                            case 1:
                              return [2, f.sent()];
                          }
                        });
                      });
                    }(a[1]);
                  }, function () {
                    return d.Promise.resolve(true);
                  }).then(function (a) {
                    b(a);
                  }, e);
                }
                a.on("Game.SendApiResponse", function (a) {
                  a.intercept();
                  if (!e) {
                    e = function () {
                      return p(this, undefined, undefined, function () {
                        var a;
                        return s(this, function (b) {
                          switch (b.label) {
                            case 0:
                              (a = [S]).push(L);
                              return [4, G(a = a.concat([V]))()];
                            case 1:
                              if (b.sent()) {
                                return [2, new d.Promise(g)];
                              } else {
                                return [2, true];
                              }
                          }
                        });
                      });
                    }();
                  }
                  e.then(function (b) {
                    a.response = b;
                    a.propagate();
                  }, function () {
                    a.response = false;
                    a.propagate();
                  });
                }, undefined);
              })(E.event);
              this.complete();
            };
            return j([plugin.PluginMainComponent("f72f5b9e6e")], c);
          }(plugin.AbstractPluginComponent));
          var _;
          var aa = false;
          var ba = 0;
          (function (a) {
            a[a.SLOT = 1] = "SLOT";
            a[a.CARD = 2] = "CARD";
          })(_ || (_ = {}));
          var ca;
          var da = {
            label: shell.I18n.t("General.ResourceLoadingMessage"),
            isFullBackground: true,
            enableBackground: true,
            opacity: 1,
            inAnimate: "Fade",
            inDuration: 0.3,
            inValue: 0,
            outAnimate: "Fade",
            outValue: 0,
            outDuration: 0.3
          };
          function ea(a) {
            var b;
            var c = a.theme;
            var d = a.backgroundColor;
            var e = a.titleColor;
            var f = a.messageColor;
            var h = a.buttonColor;
            var i = a.buttonTitleColor;
            var j = a.buttonFontWeight;
            var k = a.buttonFontStyle;
            var l = Z();
            l.on("Shell.BootStateChanged", ia);
            switch (c) {
              case _.SLOT:
                b = "Slot";
                break;
              case _.CARD:
                b = "Card";
                break;
              default:
                throw Error("Notify - invalid theme");
            }
            var m = {};
            m = h.gradient ? {
              gradient: h.gradient
            } : {
              color: h
            };
            m = g({
              fontColor: i,
              fontWeight: j,
              fontStyle: k
            }, m);
            l.emit("Alert.UpdateTheme", {
              theme: b,
              style: {
                backgroundColor: d,
                titleColor: e,
                contentColor: f,
                button: m
              }
            });
          }
          function fa(a, b) {
            if (aa) {
              Z().emit("Toast.Show", {
                toastStyle: "Message",
                message: a,
                duration: b,
                imageSrc: "",
                toastPosition: "Bottom"
              });
            } else {
              shell.setProgressMessage(a);
            }
          }
          function ha(a) {
            var b = [];
            var c = function (a, b) {
              var c = [];
              var d = 0;
              if (a.actions) {
                a.actions.forEach(function (a) {
                  c.push({
                    label: a.title,
                    handler: d
                  });
                  b.push(a.handler);
                  d++;
                });
              }
              return {
                title: a.title_message,
                content: a.content_message,
                actions: c
              };
            }(a, b);
            Z().emit("Alert.Show", c, function (a) {
              var c = a.response;
              var d = b[c];
              if (d) {
                d();
              }
            });
            return c;
          }
          function ia(a) {
            if (a.payload === "GameStarted") {
              aa = true;
              Z().off("Shell.BootStateChanged", ia);
            }
          }
          function ja(a) {
            if (ba === 0) {
              var b = false;
              if (a) {
                var c = {
                  backgroundColor: a.backgroundColor,
                  iconColor: a.iconColor,
                  labelColor: a.labelColor
                };
                Z().emit("Loading.UpdateTheme", c);
                b = !(!a.iconColor && !a.labelColor);
              }
              var d = b ? da : Object.assign(da, {
                color: shell.uiAppearance.v("game.theme_color")
              });
              Z().emit("Loading.Show", d);
            }
            ba++;
          }
          function ka() {
            if (ba !== 0 && --ba == 0) {
              Z().emit("Loading.Hide");
            }
          }
          a("Notify", Object.freeze({
            "__proto__": null,
            get ThemeType() {
              return _;
            },
            hideFullLoadingPage: ka,
            initNotify: ea,
            showDialog: ha,
            showFullLoadingPage: ja,
            showMessage: fa,
            showNotification: function (a) {
              if (aa) {
                Z().emit("Toast.Show", {
                  toastStyle: "Notification",
                  imageSrc: a.imageSrc,
                  message: a.message,
                  duration: a.duration,
                  toastPosition: "Bottom"
                }, a.eventCallback);
              }
            },
            showToast: function (a) {
              if (aa) {
                Z().emit("Toast.Show", {
                  toastStyle: "Notification",
                  message: a.message,
                  duration: a.duration,
                  toastPosition: "Bottom",
                  imageSrc: ""
                }, a.eventCallback);
              }
            }
          }));
          (function (a) {
            a[a.NORMAL = 1] = "NORMAL";
            a[a.TRIAL = 2] = "TRIAL";
            a[a.TOURNAMENT = 3] = "TOURNAMENT";
          })(ca || (ca = {}));
          var la = v.timeoutCallback;
          function ma(a) {
            shell.ga.sendTiming(shell.ga.CATEGORY_ACCESS, shell.ga.EVENT_LOGIN, Date.now() - a);
          }
          function na(a, b) {
            var c = Z();
            var d = {
              category: shell.ga.CATEGORY_ACCESS,
              domain: a.domain,
              code: a.code,
              error: "Login Failed",
              retry: b > 0 ? b : undefined
            };
            c.emit("Error.Report", d);
          }
          var oa;
          var pa;
          var qa;
          var ra;
          function sa(a) {
            switch (a.loginMethod) {
              case l.Web:
                (function (a) {
                  var b = Date.now();
                  var c = a.on_complete;
                  var d = a.on_error;
                  var e = a.on_show;
                  var f = a.on_dismiss;
                  var g = Z();
                  if (e) {
                    g.once("Login.OnShow", e);
                  }
                  if (f) {
                    g.once("Login.OnDismiss", f);
                  }
                  g.once("Login.OnLogin", function (a) {
                    var e = a.payload;
                    var f = e.err;
                    var g = e.res;
                    if (f) {
                      na(f, 0);
                      d(f);
                    } else {
                      ma(b);
                      c(g);
                    }
                  });
                  g.emit("Login.Login", {
                    apiDomain: a.apiDomain,
                    loginMethod: a.loginMethod,
                    gameId: a.gameId,
                    bundleId: a.bundleId,
                    operatorToken: a.operatorToken,
                    operatorPlayerSession: a.operatorPlayerSession,
                    playerSession: a.playerSession,
                    operatorParam: a.operatorParam,
                    betType: a.betType,
                    redirectOption: a.redirectOption
                  });
                })(a);
                break;
              case l.Session:
              default:
                (function (a) {
                  var b = Date.now();
                  var c = a.on_complete;
                  var d = a.on_error;
                  var e = a.on_show;
                  var f = a.on_dismiss;
                  var g = a.maxRetryCount === undefined ? 5 : a.maxRetryCount;
                  var h = Z();
                  if (a.betType === ca.TRIAL || a.operatorPlayerSession || a.playerSession) {
                    var i = 0;
                    function j() {
                      if (e) {
                        h.once("Login.OnShow", e);
                      }
                      if (f) {
                        h.once("Login.OnDismiss", f);
                      }
                      h.once("Login.OnLogin", function (a) {
                        var e = a.payload;
                        var f = e.err;
                        var k = e.res;
                        if (f) {
                          na(f, i);
                          if (!function (a) {
                            return a.shouldRetry;
                          }(f) || i >= g) {
                            d(f);
                          } else {
                            (function (a) {
                              fa(shell.I18n.t("Login.LoginFail", {
                                times: {
                                  ordinal: a
                                }
                              }), 2);
                            })(++i);
                            la(1 << i)(function () {
                              h.emit("Shell.PWDReset");
                              j();
                            });
                          }
                        } else {
                          ma(b);
                          c(k);
                        }
                      });
                      h.emit("Login.Login", {
                        apiDomain: a.apiDomain,
                        loginMethod: a.loginMethod,
                        gameId: a.gameId,
                        bundleId: a.bundleId,
                        operatorToken: a.operatorToken,
                        operatorPlayerSession: a.operatorPlayerSession,
                        playerSession: a.playerSession,
                        operatorParam: a.operatorParam,
                        betType: a.betType,
                        redirectOption: a.redirectOption
                      });
                    }
                    j();
                  } else {
                    var j = shell.ClientError;
                    var k = new (0, shell.Error)(j.Domain, j.AuthenticationError);
                    d(k);
                  }
                })(a);
            }
          }
          a("LoginHelper", Object.freeze({
            "__proto__": null,
            GameStatus: {
              INACTIVE: 0,
              ACTIVE: 1,
              SUSPENDED: 2
            },
            login: sa
          }));
          function ta() {}
          pa = ta;
          qa = ta;
          ra = ta;
          oa = ta;
          a("Printer", Object.freeze({
            "__proto__": null,
            get enablePrinter() {
              return pa;
            },
            get print() {
              return qa;
            },
            get setActiveNode() {},
            get setHolder() {
              return oa;
            },
            get setPrinterVisible() {
              return ra;
            }
          }));
          var ua;
          var va;
          var wa = {};
          var xa = v.emptyFunc;
          var ya = v.toDecimalWithExp;
          var za = new (function () {
            function a() {
              this.bv_v = 0;
            }
            a.prototype.init = function (a, b, c) {
              this.bv_m = a;
              this.bv_b = b;
              this.bv_p = c;
            };
            Object.defineProperty(a.prototype, "insufficientFundResult", {
              set: function (a) {
                this.bv_g = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "balance", {
              set: function (a) {
                this.bv_v = a;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.hasSufficientFund = function (a) {
              if (this.bv_m.transactionModel.stateTransitionTo !== 1 || this.bv_g === undefined || this.bv_m.lastTransactionRawData.wt === "G") {
                return true;
              }
              var b = this.bv_S(a);
              return this.bv_v >= b;
            };
            a.prototype.getInsufficientFundResult = function (a, b, c) {
              var d = this;
              var e = this.bv_m.lastTransactionRawData;
              var f = this.bv_b;
              if (e.wk.substring(0, 3) === "0_C") {
                this.bv_y = f.getWalletBalance(function (e, f) {
                  if (e) {
                    c(e, undefined);
                  } else {
                    if (!f || !f.dt) {
                      throw Error("Wallet Data Invalid");
                    }
                    var g = f.dt.cb;
                    d.bv_v = g;
                    d.bv_p(g);
                    d.bv_G(a, b, c);
                  }
                });
              } else {
                this.bv_G(a, b, c);
              }
              return function () {
                if (d.bv_y) {
                  d.bv_y();
                }
              };
            };
            a.prototype.bv_G = function (a, b, c) {
              var d = this.bv_S(a);
              var e = this.bv_m.lastTransactionRawData;
              if (this.bv_v < d) {
                this.bv_w(a, e);
                var f = this.bv_g;
                c(f.error, f.result);
                this.bv_y = xa;
              } else {
                this.bv_y = b();
              }
            };
            a.prototype.bv_S = function (a) {
              var b = this.bv_m;
              return ya(a.ml * a.cs * b.lastGameInfoRawData.dt.mxl, 2);
            };
            a.prototype.bv_w = function (a, b) {
              var c = this.bv_g.result.dt.si;
              c.ml = a.ml;
              c.cs = a.cs;
              c.fb = a.fb === undefined ? null : a.fb;
              c.wk = a.wk;
              c.wt = b.wt;
              c.wbn = b.wbn;
              c.bl = c.blab = c.blb = this.bv_v;
              c.ctw = b.ctw;
              c.cwc = b.cwc;
              c.fstc = b.fstc;
              c.ge = b.ge;
              c.hashr = b.hashr;
              c.psid = b.psid;
              c.sid = b.sid;
            };
            return a;
          }())();
          var Aa = v.getPlatform;
          var Ba = v.timeoutCallback;
          var Ca = v.emptyFunc;
          var Da = Aa();
          var Ea = {
            getGameInfo: "v2/GameInfo/Get",
            updateSystemInfo: "v2/GameInfo/Update",
            markRead: "v2/MarkRead"
          };
          var Fa = "v2/GameRule/Get";
          var Ga = "v2/GameName/Get";
          var Ha = "v2/GameWallet/Get";
          a("APIClient", function () {
            function a(a) {
              this.dataSource = a;
              this.bv_C = new C();
            }
            Object.defineProperty(a.prototype, "xhrHandler", {
              get: function () {
                return this.bv_C;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.login = function (a) {
              var b = this;
              var c = this.dataSource.systemModel;
              var d = c.apiDomain;
              var e = c.loginMethod;
              var f = c.gameId;
              var g = c.bundleId;
              var h = c.operatorToken;
              var i = c.operatorPlayerSession;
              var j = c.playerSession;
              var k = c.operatorParam;
              var l = c.betType;
              var m = c.redirectOption;
              sa({
                on_complete: function (c) {
                  var d = c;
                  b.dataSource.updateLoginInfo(d);
                  var e = b.dataSource.playerModel.playerId;
                  shell.ga.setUserId(e);
                  b.bv_C.setAPIUrls(b.dataSource.systemModel);
                  if (a) {
                    a();
                  }
                },
                on_error: function (b) {
                  if (a) {
                    a(b, undefined);
                  }
                },
                apiDomain: d,
                loginMethod: e,
                gameId: f,
                bundleId: g,
                operatorToken: h,
                operatorPlayerSession: i,
                playerSession: j,
                operatorParam: k,
                betType: l,
                redirectOption: m
              });
            };
            a.prototype.getGameInfo = function (a, b) {
              var c = this;
              if (b === undefined) {
                b = {};
              }
              return this.requestEngine(Ea.getGameInfo, b, function (b, d) {
                c.logResult("getGameInfo", d);
                if (d && d.dt) {
                  var e = d.dt.ls.si;
                  var f = c.dataSource.transactionModel.transactionId;
                  var g = c.dataSource.playerModel.walletKey;
                  if (!(e.sid === f && e.wk === g)) {
                    c.print(e.sid);
                    c.dataSource.updateGameInfo(d);
                  }
                }
                if (a) {
                  a(b, d);
                }
              });
            };
            a.prototype.updateGameInfo = function (a, b) {
              var c = this;
              if (b === undefined) {
                b = {};
              }
              return this.requestEngine(Ea.updateSystemInfo, b, function (b, d) {
                c.logResult("updateGameInfo", d);
                if (d && d.dt) {
                  var e = d.dt.ls.si;
                  c.print(e.sid);
                  c.dataSource.updateGameInfo(d);
                }
                if (a) {
                  a(b, d);
                }
              });
            };
            a.prototype.getGameRule = function (a) {
              var b = this;
              return this.requestServiceEngine(Fa, {}, function (c, d) {
                b.logResult("getGameRule", d);
                if (a) {
                  a(c, d);
                }
              });
            };
            a.prototype.getGameName = function (a) {
              var b = this;
              var c = {
                lang: shell.I18n.locale()
              };
              return this.requestServiceEngine(Ga, c, function (c, d) {
                b.logResult("gameNameResult", d);
                if (a) {
                  a(c, d);
                }
              });
            };
            a.prototype.markRead = function (a) {
              var b = this;
              if (a === undefined) {
                a = 1;
              }
              var c = {
                id: this.dataSource.transactionModel.transactionId,
                ts: a
              };
              return this.requestEngine(Ea.markRead, c, function (a, c) {
                b.logResult("markRead", c);
              });
            };
            a.prototype.transferMoney = function () {
              return Ca;
            };
            a.prototype.getWalletBalance = function (a) {
              var b = this;
              return this.requestServiceSDEngine(Ha, {}, function (c, d) {
                b.logResult("getWalletBalance", d);
                if (a) {
                  a(c, d);
                }
              });
            };
            a.prototype._logResult = function () {};
            a.prototype._print = function (a) {
              var b = this.dataSource.playerModel.playerName;
              qa("version: " + this.dataSource.systemModel.version + "\nuser: " + b + "\nspinid: " + a);
            };
            a.prototype._requestEngine = function (a, b, c) {
              if (this.dataSource.isGameReplaying && wa.GameReplay && !Object.values(Ea).includes(a)) {
                var d = wa.GameReplay.gameReplayHandler;
                Ba(0.2)(function () {
                  var a = d.nextReplayAPIResponse;
                  c(undefined, a);
                });
                return Ca;
              }
              b = this.handleCommonParams(b);
              return this.bv_C.request(a, b, c);
            };
            a.prototype._requestServiceEngine = function (a, b, c) {
              (b = this.handleCommonParams(b)).gid = this.dataSource.systemModel.gameId;
              return this.bv_C.serviceRequest(a, b, c);
            };
            a.prototype._handleCommonParams = function (a) {
              if (a === undefined) {
                a = {};
              }
              var b = this.dataSource.systemModel.betType;
              var c = this.dataSource.playerModel;
              var d = c.token;
              var e = c.walletKey;
              a.btt = b;
              if (!a.wk) {
                a.wk = e;
              }
              a.atk = d;
              a.pf = Da;
              return a;
            };
            a.prototype.logResult = function () {};
            a.prototype.print = function (a) {
              var b = this.dataSource.playerModel.playerName;
              qa("version: " + this.dataSource.systemModel.version + "\nuser: " + b + "\nspinid: " + a);
            };
            a.prototype.requestEngine = function (a, b, c) {
              var d = this;
              if (this.dataSource.isGameReplaying && wa.GameReplay && !Object.values(Ea).includes(a)) {
                var e = wa.GameReplay.gameReplayHandler;
                Ba(0.2)(function () {
                  var a = e.nextReplayAPIResponse;
                  c(undefined, a);
                });
                return Ca;
              }
              b = this.handleCommonParams(b);
              function f() {
                return d.bv_C.request(a, b, function (a, b) {
                  if (a) {
                    var d = shell.ServerError;
                    if (!(a.domain !== d.Domain || a.canDismiss)) {
                      b = undefined;
                    }
                  }
                  c(a, b);
                });
              }
              if (a.toLowerCase() !== "v2/spin" || za.hasSufficientFund(b)) {
                return f();
              } else {
                return za.getInsufficientFundResult(b, f, c);
              }
            };
            a.prototype.requestServiceEngine = function (a, b, c) {
              (b = this.handleCommonParams(b)).gid = this.dataSource.systemModel.gameId;
              return this.bv_C.serviceRequest(a, b, c);
            };
            a.prototype.requestServiceSDEngine = function (a, b, c) {
              (b = this.handleCommonParams(b)).gid = this.dataSource.systemModel.gameId;
              return this.bv_C.serviceSDRequest(a, b, c);
            };
            a.prototype.handleCommonParams = function (a) {
              if (a === undefined) {
                a = {};
              }
              var b = this.dataSource.systemModel.betType;
              var c = this.dataSource.playerModel;
              var d = c.token;
              var e = c.walletKey;
              a.btt = b;
              if (!a.wk) {
                a.wk = e;
              }
              a.atk = d;
              a.pf = Da;
              return a;
            };
            j([shell.deprecated("logResult")], a.prototype, "_logResult", null);
            j([shell.deprecated("print")], a.prototype, "_print", null);
            j([shell.deprecated("requestEngine")], a.prototype, "_requestEngine", null);
            j([shell.deprecated("requestServiceEngine")], a.prototype, "_requestServiceEngine", null);
            j([shell.deprecated("handleCommonParams")], a.prototype, "_handleCommonParams", null);
            return a;
          }());
          var Ia = v.setDefaultCurrencyFormat;
          a("DataSource", function () {
            function a(a) {
              this.bv_T = false;
              if (a) {
                this.bv_O = a.playerModel;
                this.bv_R = a.systemModel;
                this.bv_E = a.transactionModel;
              }
            }
            Object.defineProperty(a.prototype, "playerModel", {
              get: function () {
                return this.bv_O;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "systemModel", {
              get: function () {
                return this.bv_R;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "transactionModel", {
              get: function () {
                return this.bv_E;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "lastTransactionRawData", {
              get: function () {
                return this.bv_x;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "lastGameInfoRawData", {
              get: function () {
                return this.bv_k;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "isGameReplaying", {
              get: function () {
                return this.bv_T;
              },
              set: function (a) {
                this.bv_T = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "nextGameReplayInfo", {
              get: function () {
                return this.bv_j;
              },
              set: function (a) {
                this.bv_j = a;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.updateLoginInfo = function (a) {
              var b = this.bv_O;
              var c = this.bv_R;
              b.updatePlayerInfo(a);
              c.updateSystemInfo(a);
              Ia({
                groupSeparator: undefined,
                decimalSeparator: undefined,
                currencyCode: b.currency,
                currencySymbol: b.currencySymbol,
                baseUnit: c.operatorJurisdiction.currencyBaseUnit,
                hideDecimal: c.operatorJurisdiction.hideCurrencyDecimal
              });
            };
            a.prototype.updateGameInfo = function (a) {
              var b = Z();
              var c = this.bv_O;
              var d = this.bv_R;
              this.bv_k = a;
              var e = a.dt;
              var f = e.ls;
              var g = e.gcs;
              d.updateGameInfo(e);
              c.updateMinimumBetAmount(g);
              this.updateTransactionInfo(f.si);
              c.balance = e.bl;
              b.emit("Game.GameInfoUpdated", a);
            };
            a.prototype.updateTransactionInfo = function (a) {
              var b = Z();
              var c = this.bv_E;
              var d = this.bv_O;
              this.bv_x = a;
              c.updateTransactionDetails(a);
              d.updatePlayerWalletInfo(a);
              d.balance = a.bl;
              b.emit("Game.TransactionInfoUpdated", a);
            };
            return a;
          }());
          var Ja = v.formatDate;
          var Ka = a("GameMaintenanceModel", function () {
            function a() {}
            Object.defineProperty(a.prototype, "readableMaintenanceStartDate", {
              get: function () {
                return Ja(new Date(this.maintenanceStartDate));
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "readableMaintenanceEndDate", {
              get: function () {
                return Ja(new Date(this.maintenanceEndDate));
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.setGameMaintenanceData = function (a) {
              if (a) {
                var b = a.gid;
                var c = a.msdt;
                var d = a.medt;
                this.gameId = b;
                this.gameStatus = a.st;
                this.maintenanceStartDate = c;
                this.maintenanceEndDate = d;
              }
            };
            a.prototype.isGameActive = function () {
              return this.gameStatus === m.Active;
            };
            a.prototype.isGameMaintenenceApproaching = function () {
              var a = this.maintenanceStartDate;
              var b = this.maintenanceEndDate;
              if (a && b) {
                var c = Date.now();
                return c < a && c >= a - 7200000;
              }
              return false;
            };
            return a;
          }());
          (function (a) {
            a[a.EURO = 0] = "EURO";
            a[a.ASIA = 1] = "ASIA";
            a[a.PORTUGAL = 2] = "PORTUGAL";
            a[a.GERMANY = 3] = "GERMANY";
            a[a.LITHUANIA = 4] = "LITHUANIA";
            a[a.ITALY = 5] = "ITALY";
            a[a.SWEDEN = 6] = "SWEDEN";
            a[a.UK = 7] = "UK";
            a[a.UKLOW = 8] = "UKLOW";
            a[a.UKHIGH = 9] = "UKHIGH";
            a[a.SPAIN = 10] = "SPAIN";
          })(ua || (ua = {}));
          (function (a) {
            a[a.AUTO_PLAY_MAX = 0] = "AUTO_PLAY_MAX";
            a[a.AUTO_PLAY_CONFIG = 1] = "AUTO_PLAY_CONFIG";
            a[a.SINGLE_PLAY_TIME = 2] = "SINGLE_PLAY_TIME";
            a[a.HIDE_NON_PROFIT = 3] = "HIDE_NON_PROFIT";
            a[a.TURBO_SPIN = 4] = "TURBO_SPIN";
            a[a.MAX_PAYOUT = 5] = "MAX_PAYOUT";
            a[a.NET_PROFIT = 6] = "NET_PROFIT";
            a[a.ELAPSED_TIME = 7] = "ELAPSED_TIME";
            a[a.UNFINISHED_RULE = 8] = "UNFINISHED_RULE";
          })(va || (va = {}));
          var La;
          var Ma;
          var Na;
          var Oa;
          var Pa;
          var Qa = [0, 0, 3, 1, 0, 0, 1, 1, 0];
          var Ra = [[100, 2, 0, 0, 1, 0, 0, 0, 0], [1000, 1, 0, 0, 1, 0, 0, 0, 0], Qa, [0, 0, 5, 1, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 5, 1, 0, 1, 1, 1, 0], [100, 2, 3, 1, 0, 0, 1, 1, 0], t([], Qa, true), t([], Qa, true), t([], Qa, true), [0, 0, 3, 1, 0, 0, 1, 1, 1]];
          function Sa(a, b) {
            var c = Ra[b];
            if (c && c[a] !== undefined) {
              return c[a];
            }
            throw Error(`RegionUtils :: unsupported jurisdiction(region) ${b}${c && c[a] === undefined ? " feature type " + a : ""} requested`);
          }
          function Ta(a) {
            switch (a) {
              case ua.PORTUGAL:
                return La;
              case ua.EURO:
                return Ma;
              case ua.ASIA:
                return Na;
              case ua.GERMANY:
                return Oa;
              case ua.LITHUANIA:
                return Pa;
              default:
                return;
            }
          }
          var Ua;
          var Va;
          var Wa = Object.freeze({
            "__proto__": null,
            get Region() {
              return ua;
            },
            get RegionFeatureType() {
              return va;
            },
            getJurisdictionFeatureParam: Sa,
            getRegionConfig: Ta,
            setGameRegionConfigs: function (a, b, c, d, e) {
              La = a;
              Ma = b;
              Na = c;
              Oa = d;
              Pa = e;
            }
          });
          a("RegionUtils", Wa);
          (function (a) {
            a[a.VERTICAL = 0] = "VERTICAL";
            a[a.HORIZONTAL = 1] = "HORIZONTAL";
            a[a.UNIVERSAL = 2] = "UNIVERSAL";
          })(Ua || (Ua = {}));
          (function (a) {
            a[a.Default = -1] = "Default";
            a[a.Disabled = 0] = "Disabled";
            a[a.Enabled = 1] = "Enabled";
          })(Va || (Va = {}));
          var Xa = a("GamePluginModel", function () {
            function a(a) {
              var b = a.n;
              var c = a.v;
              var d = a.il;
              var e = a.om;
              var f = a.uie;
              this.bv_u = b;
              this.bv_I = c;
              this.bv_A = d;
              this.bv_N = f;
              this.bv_L = e;
            }
            Object.defineProperty(a.prototype, "name", {
              get: function () {
                return this.bv_u;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "version", {
              get: function () {
                return this.bv_I;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "configuration", {
              get: function () {
                return this.bv_N;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "instantLoad", {
              get: function () {
                return this.bv_A;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "orientationMode", {
              get: function () {
                return this.bv_L;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.overrideVersion = function (a) {
              this.bv_I = a;
            };
            return a;
          }());
          var Ya = d.shell.urlSearch;
          function Za(a) {
            var b;
            b = b || a;
            return Ya.get(b);
          }
          var $a = d.shell && d.shell.environment ? d.shell.environment.audioSupported : undefined;
          var _a = Object.freeze({
            definition: Za("definition"),
            betType: Za("type"),
            language: Za("language"),
            redirectUrl: Za("from"),
            playerSession: Za("t"),
            timeElapsed: Za("time_elapsed"),
            reminderInterval: Za("reminder_interval"),
            reminderUrl: Za("reminder_quit"),
            operatorPlayerSession: Za("session"),
            operatorParam: Za("operator_param"),
            tournamentId: Za("tourid"),
            operatorToken: Za("token"),
            realModeUrl: Za("real"),
            noAudio: $a === undefined ? Za("no_audio") : $a ? "0" : "1",
            noBalanceCheck: Za("no_bl_chk"),
            redirectOption: Za("redirect_option") || undefined,
            loginMethod: Za("login_method")
          });
          Ya = undefined;
          a("LaunchConfig", Object.freeze({
            "__proto__": null,
            cs_Launch: _a
          }));
          var ab;
          var bb = v.joinPath;
          (function (a) {
            a[a.REAL_MODE = 0] = "REAL_MODE";
            a[a.FEATURE_GAME = 3] = "FEATURE_GAME";
          })(ab || (ab = {}));
          var cb = {
            bv_P: "",
            setCustomRedirectUrl: function (a) {
              this.bv_P = a;
            },
            getRedirectUrl: function (a, b) {
              var c;
              switch (a) {
                case ab.REAL_MODE:
                  c = b || _a.realModeUrl;
                  break;
                case ab.FEATURE_GAME:
                  b = b || "";
                  c = bb(d.location.origin, b) + d.location.search;
                  break;
                default:
                  c = this.bv_P ? this.bv_P : _a.redirectUrl;
              }
              return c;
            },
            quitGame: function (a, b) {
              var c = this.getRedirectUrl(a, b);
              shell.enablePromBeforeUnload(false);
              var d = Z();
              if (c) {
                d.emit("Window.Redirect", c);
              } else {
                d.emit("Window.Quit");
              }
            }
          };
          var eb = a("QuitGame", {
            refreshGame: function () {
              shell.enablePromBeforeUnload(false);
              Z().emit("Window.Reload");
            },
            quitGame: function () {
              cb.quitGame();
            },
            quitGameRealMode: function (a) {
              cb.quitGame(ab.REAL_MODE, a);
            },
            quitGameFeatureTrigger: function (a) {
              cb.quitGame(ab.FEATURE_GAME, a);
            },
            setCustomRedirectUrl: function (a) {
              cb.setCustomRedirectUrl(a);
            }
          });
          var fb = v.timeoutCallback;
          function gb(a, b, c) {
            shell.ga.sendEvent(a, b, c);
          }
          function hb(a, b, c, d, e) {
            var f = {
              category: shell.ga.CATEGORY_GAME,
              domain: b,
              code: c,
              error: a,
              retry: d,
              messages: e
            };
            Z().emit("Error.Report", f);
          }
          var ib;
          var jb;
          var kb = a("AnalyticsHelper", {
            init: function () {
              shell.ga.setFrequentErrorHandler(function () {
                shell.ga.setFrequentErrorHandler(undefined);
                d.alert(shell.I18n.t("General.ErrorOccur"));
                gb(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  reason: "Frequent Error"
                });
                fb(0.5)(eb.refreshGame);
              });
            },
            sendErrorReport: hb,
            sendLoadFailReport: function (a) {
              var b = shell.Error;
              var c = shell.ClientError;
              var d = new b(c.Domain, c.GameLoadResourceError);
              hb("load resource fail", d.domain, d.code, a);
            },
            sendScreen: function (a) {
              shell.ga.sendScreen(a);
            },
            sendEvent: gb,
            sendAnalyticsEvent: function (a) {
              Z().emit("Analytics.Event", a);
            },
            sendAnalyticsTiming: function (a) {
              Z().emit("Analytics.Timing", a);
            }
          });
          var lb = v.timeoutCallback;
          var mb = a("QuitGameWithEvent", {
            quitGameWithEvent: function (a) {
              return function () {
                kb.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  reason: a
                });
                lb(0.5)(eb.quitGame);
              };
            },
            quitGameWithEventForRealMode: function (a) {
              return function () {
                kb.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  reason: "Real Mode"
                });
                lb(0.5)(function () {
                  eb.quitGameRealMode(a);
                });
              };
            },
            quitGameWithEventForFeatureGame: function (a) {
              kb.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                reason: "Feature Game Redirect"
              });
              lb(0.5)(function () {
                eb.quitGameFeatureTrigger(a);
              });
            },
            refreshGameWithEvent: function (a) {
              return function () {
                kb.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  reason: a
                });
                lb(0.5)(eb.refreshGame);
              };
            }
          });
          function nb(a, b, c, d, e) {
            if (b === undefined) {
              b = ib.Transaction;
            }
            if (e === undefined) {
              e = false;
            }
            Z().emit("Error.Occurred", {
              context: b,
              info: {
                category: shell.ga.CATEGORY_GAME,
                domain: a.domain,
                code: a.code,
                trace: a.traceId,
                error: a,
                messages: d
              },
              report: e
            }, function (a) {
              switch (a.response) {
                case "Default":
                  if (c) {
                    c(jb.Default);
                  }
                  break;
                case "Quit":
                  if (c) {
                    c(jb.Quit);
                  }
                  break;
                case "Retry":
                  if (c) {
                    c(jb.Retry);
                  }
                  break;
                case "Reload":
                  if (c) {
                    c(jb.Reload);
                  }
                  break;
                case "Dismiss":
                  if (c) {
                    c(jb.Dismiss);
                  }
              }
            });
          }
          (function (a) {
            a.Transaction = "Transaction";
            a.Preload = "Preload";
            a.Launch = "Launch";
            a.Login = "Login";
            a.Change = "Change";
            a.Unknown = "Unknown";
          })(ib || (ib = {}));
          (function (a) {
            a[a.Default = 0] = "Default";
            a[a.Quit = 1] = "Quit";
            a[a.Retry = 2] = "Retry";
            a[a.Reload = 3] = "Reload";
            a[a.Dismiss = 4] = "Dismiss";
          })(jb || (jb = {}));
          var ob = a("ErrorHandler", {
            handleCommonError: function (a, b, c, d, e) {
              if (c === undefined) {
                c = ib.Transaction;
              }
              nb(b, c, function (b) {
                switch (b) {
                  case jb.Reload:
                    mb.refreshGameWithEvent(a)();
                    break;
                  case jb.Quit:
                    mb.quitGameWithEvent(a)();
                    break;
                  case jb.Retry:
                    if (d) {
                      d();
                    }
                    break;
                  case jb.Dismiss:
                    if (e) {
                      e();
                    }
                }
              });
            },
            showError: nb,
            getErrorContext: function (a) {
              switch (a) {
                case shell.I18n.t("General.ErrorPreloadError"):
                  return "Preload";
                case shell.I18n.t("General.ErrorLaunchFailed"):
                  return "Launch";
                case shell.I18n.t("General.ErrorLoginFailed"):
                  return "Login";
                case shell.I18n.t("General.ErrorChangeFailed"):
                  return "Change";
                case "":
                  return "Unknown";
                default:
                  return "Transaction";
              }
            },
            ErrContext: ib,
            ErrAction: jb
          });
          function pb(a, b) {
            var c = $();
            var d = [];
            var e = false;
            var f = {
              onComplete: function () {
                if (!e) {
                  if (b) {
                    b();
                  }
                }
              },
              onError: function (a) {
                if (!e) {
                  e = true;
                  var b = shell.Error;
                  var c = shell.GameShellError;
                  var d = new b(c.Domain, c.LoadResourceError);
                  kb.sendErrorReport("load plugin failed", d.domain, d.code, undefined, `src: ${a.src}`);
                  ob.handleCommonError(a.err, d, ib.Launch);
                }
              }
            };
            a.forEach(function (a) {
              var b = a.name;
              if (!c.queryBundle(b)) {
                d.push(b);
              }
            });
            if (d.length > 0) {
              c.plugin.load(d, f);
            } else if (b) {
              b();
            }
          }
          var qb = function () {
            function a(a) {
              var b = a.gid;
              var c = a.ft;
              var d = a.url;
              this.bv_f = b;
              this.bv_M = c;
              this.bv__ = d;
            }
            Object.defineProperty(a.prototype, "gameId", {
              get: function () {
                return this.bv_f;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "featureType", {
              get: function () {
                return this.bv_M;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "url", {
              get: function () {
                return this.bv__;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }();
          var rb = function () {
            function a(a) {
              var b = a.dt;
              var c = a.ugd;
              this.bv_D = b;
              this.bv_U = this.bv_H(c);
            }
            Object.defineProperty(a.prototype, "displayType", {
              get: function () {
                return this.bv_D;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "unfinishedGameDetails", {
              get: function () {
                return this.bv_U;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.bv_H = function (a) {
              return a.map(function (a) {
                return new qb(a);
              });
            };
            return a;
          }();
          var sb = function () {
            function a(a) {
              var b = a.n;
              var c = a.v;
              this.bv_u = b;
              this.bv_F = c;
            }
            Object.defineProperty(a.prototype, "name", {
              get: function () {
                return this.bv_u;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "value", {
              get: function () {
                return this.bv_F;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }();
          a("TweaksData", {
            configStore: undefined
          });
          var tb;
          var ub;
          var vb = function () {
            function a(a) {
              var b = a.rurl;
              var c = a.tcm;
              var d = a.tsc;
              var e = a.ttp;
              var f = a.tlb;
              var g = a.trb;
              this.bv_B = decodeURIComponent(b);
              this.bv_W = c;
              this.bv_q = d;
              this.bv_V = e;
              this.bv_Q = f;
              this.bv_z = g;
            }
            Object.defineProperty(a.prototype, "realURL", {
              get: function () {
                return this.bv_B;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "dialogMessage", {
              get: function () {
                return this.bv_W;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "triggerSpinCount", {
              get: function () {
                return this.bv_q;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "triggerDuration", {
              get: function () {
                return this.bv_V;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "leftButtonLabel", {
              get: function () {
                return this.bv_Q;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "rightButtonLabel", {
              get: function () {
                return this.bv_z;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }();
          var wb = {
            0: "",
            1: "K"
          };
          var xb = a("OperatorJurisdictionModel", function () {
            function a(a) {
              this.bv_Y = [];
              this.bv_K = [];
              this.bv_X = [];
              this.bv_Z = 0;
              var b;
              var c;
              var d = a.oj;
              var e = a.ufg;
              var f = a.uiogc;
              var g = a.ec;
              var h = a.ocdr;
              var i = a.gm;
              var j = a.occ;
              var k = a.opl;
              var l = a.ioph;
              var m = d.jid;
              var n = f;
              var o = n.bb;
              var p = n.grtp;
              var q = n.gec;
              var r = n.bf;
              var s = n.cbu;
              var t = n.mr;
              var u = n.rp;
              var v = n.ign;
              var w = n.igv;
              var x = n.gc;
              var y = n.tsn;
              var z = n.we;
              var A = n.gsc;
              var B = n.bu;
              var C = n.pwr;
              var D = n.hd;
              var E = n.np;
              var F = n.et;
              var G = n.ir;
              var H = n.as;
              var I = n.asc;
              var J = n.std;
              var K = n.hnp;
              var L = n.ts;
              var M = n.smpo;
              var N = n.ivs;
              var O = i[0];
              var P = O.rtp;
              var Q = O.mxe;
              var R = O.mxehr;
              this.bv_J = m;
              this.bv_$ = o;
              this.bv_tt = p;
              this.bv_nt = q;
              this.bv_et = x;
              this.bv_it = v;
              this.bv_rt = w;
              if (!r) {
                this.bv_ot = 0;
              }
              this.bv_at = P;
              this.bv_ut = Q;
              this.bv_ct = R;
              this.bv_st = G;
              this.bv_lt = E ? E === 1 : Sa(va.NET_PROFIT, this.bv_J) === 1;
              this.bv_ft = F ? F === 1 : Sa(va.ELAPSED_TIME, this.bv_J) === 1;
              this.bv_ht = H || Sa(va.AUTO_PLAY_MAX, this.bv_J);
              this.bv_dt = I || Sa(va.AUTO_PLAY_CONFIG, this.bv_J);
              this.bv_vt = J || Sa(va.SINGLE_PLAY_TIME, this.bv_J);
              this.bv_mt = K ? K === 1 : Sa(va.HIDE_NON_PROFIT, this.bv_J) === 1;
              this.bv_bt = !(this.bv_vt > 0) && (L ? L === 1 : Sa(va.TURBO_SPIN, this.bv_J) === 1);
              this.bv_pt = M ? M === 1 : Sa(va.MAX_PAYOUT, this.bv_J) === 1;
              this.bv_gt = Sa(va.UNFINISHED_RULE, this.bv_J) === 1;
              this.bv_St = Ta(this.bv_J);
              this.bv_yt = s ? wb[s] : undefined;
              this.bv_Gt = t;
              this.bv_wt = u;
              this.bv_Ct = y;
              this.bv_Tt = z;
              this.bv_Ot = A;
              this.bv_Rt = B;
              this.bv_Et = C;
              this.bv_xt = D;
              this.bv_kt = N;
              this.bv_jt = k;
              this.bv_It = l;
              if (g) {
                this.bv_Y = (b = [], g.forEach(function (a) {
                  var c = new Xa(a);
                  if (function (a) {
                    var b = a.orientationMode;
                    var c = shell.environment.getOrientationMode();
                    if (b !== Ua.UNIVERSAL) {
                      if (b !== Ua.VERTICAL && c === "port") {
                        return false;
                      }
                      if (b !== Ua.HORIZONTAL && c === "land") {
                        return false;
                      }
                    }
                    return true;
                  }(c)) {
                    b.push(c);
                  }
                }), b);
              }
              if (e) {
                var S = function (a) {
                  var b = 0;
                  return {
                    unfinishedFeatureGame: a.map(function (a) {
                      var c = new rb(a);
                      if (c.displayType !== 0) {
                        b += c.unfinishedGameDetails.length;
                      }
                      return c;
                    }),
                    featureGameCount: b
                  };
                }(e);
                var T = S.unfinishedFeatureGame;
                var U = S.featureGameCount;
                this.bv_X = T;
                this.bv_Z = U;
              }
              if (j) {
                this.bv_At = new vb(j);
              }
              if (h) {
                this.bv_K = (c = [], h.forEach(function (a) {
                  var b = new sb(a);
                  c.push(b);
                }), c);
              }
            }
            Object.defineProperty(a.prototype, "jurisdictionId", {
              get: function () {
                return this.bv_J;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "regionFeature", {
              get: function () {
                return this.bv_St;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "backButton", {
              get: function () {
                return this.bv_$;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameReturnToPlayer", {
              get: function () {
                return this.bv_tt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameExitConfirmation", {
              get: function () {
                return this.bv_nt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "buyFeature", {
              get: function () {
                return this.bv_ot;
              },
              set: function (a) {
                this.bv_ot = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "currencyBaseUnit", {
              get: function () {
                return this.bv_yt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "markRead", {
              get: function () {
                return this.bv_Gt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "replayVersion", {
              get: function () {
                return this.bv_wt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "turboSpinSuggest", {
              get: function () {
                return this.bv_Ct;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "walletSocketEnable", {
              get: function () {
                return this.bv_Tt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "globalSocketEnable", {
              get: function () {
                return this.bv_Ot;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "balanceUpdateEnable", {
              get: function () {
                return this.bv_Rt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "newWalletNotificationEnable", {
              get: function () {
                return this.bv_Et;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "hideCurrencyDecimal", {
              get: function () {
                return this.bv_xt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "netProfitState", {
              get: function () {
                return this.bv_lt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "elapsedTimeState", {
              get: function () {
                return this.bv_ft;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "isRegulated", {
              get: function () {
                return this.bv_st;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "autoPlayMaxNum", {
              get: function () {
                return this.bv_ht;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "autoPlayConfig", {
              get: function () {
                return this.bv_dt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "singlePlayMinDuration", {
              get: function () {
                return this.bv_vt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "hideNonProfitEffect", {
              get: function () {
                return this.bv_mt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "turboSpinEnable", {
              get: function () {
                return this.bv_bt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "maxPayoutEnable", {
              get: function () {
                return this.bv_pt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "unfinishedFeatureRuleContinue", {
              get: function () {
                return this.bv_gt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "isOK", {
              get: function () {
                return this.bv_kt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gamePluginList", {
              get: function () {
                return this.bv_Y;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "unfinishedFeatureGame", {
              get: function () {
                return this.bv_X;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "unfinishedOnGoingFeatureGameCount", {
              get: function () {
                return this.bv_Z;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "operatorCustomDisplayList", {
              get: function () {
                return this.bv_K;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameName", {
              get: function () {
                return this.bv_it;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameClock", {
              get: function () {
                return this.bv_et;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "rtp", {
              get: function () {
                return this.bv_at;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "maxPayout", {
              get: function () {
                return this.bv_ut;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "maxPayoutProbability", {
              get: function () {
                return this.bv_ct;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "customDemoConfig", {
              get: function () {
                return this.bv_At;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "operatorPromotionLink", {
              get: function () {
                return this.bv_jt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "idH", {
              get: function () {
                return this.bv_It;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameVersion", {
              get: function () {
                return this.bv_rt;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }());
          var yb = v.resolvePath;
          var zb = v.getPlatform;
          a("SystemModel", function () {
            function a(a) {
              this.bv_Nt = a;
              this.bv_Lt = _a.betType ? parseInt(_a.betType, 10) : 0;
              this.bv_Pt = _a.operatorPlayerSession;
              this.bv_Mt = _a.playerSession;
              this.bv__t = _a.operatorParam;
              this.bv_h = _a.operatorToken;
              this.bv_Dt = "";
              this.bv_Ut = !(!_a.noAudio || _a.noAudio !== "1");
              this.bv_Ht = _a.redirectOption;
              this.bv_Ft = _a.loginMethod ? parseInt(_a.loginMethod, 10) : this.bv_Nt.loginMethod;
              this.bv_Ft = this.bv_Ft || 2;
            }
            a.prototype.updateSystemInfo = function (a) {
              var b = a.operatorJurisdiction;
              var c = a.gameEngineUrl;
              var d = a.betHistoryApiUrl;
              var e = a.gamesMaintanence;
              var f = a.unfinishGamesFeature;
              var g = a.uiOperatorGameComponents;
              var h = a.elementCategory;
              var i = a.operatorCustomDisplayResponse;
              var j = a.operatorCustomConfiguration;
              var k = a.operatorPromotionLink;
              var l = a.gameCertificateVersion;
              var m = a.operatorPromotionId;
              var n = a.gameApiSubdomain;
              var o = a.extraAssetTableKey;
              if (!c) {
                throw Error("Login: Game Engine URL is empty");
              }
              if (!d) {
                throw Error("Login: Service Engine URL is empty");
              }
              this.bv_Bt = b ? new xb({
                oj: b,
                ufg: f,
                uiogc: g,
                ec: h,
                ocdr: i,
                gm: e,
                occ: j,
                opl: k,
                ioph: m
              }) : undefined;
              this.bv_e = c;
              this.bv_i = d;
              var p = this.bv_Nt.apiDomain;
              if (n) {
                var q = this.bv_Nt.apiDomain;
                p = "https://" + n + "." + (q = q.substr(q.indexOf(".") + 1));
              }
              this.bv_Wt = yb(p, this.bv_e);
              this.bv_qt = yb(p, this.bv_i);
              this.bv_Vt = yb(this.bv_Nt.apiDomain, this.bv_i);
              (this.bv_Qt = new Ka()).setGameMaintenanceData(e[0]);
              if (this.bv_Bt) {
                shell.enablePromBeforeUnload(!!this.bv_Bt.gameExitConfirmation);
              }
              this.bv_zt = l;
              this.bv_Yt = n;
              this.bv_Kt = o;
            };
            Object.defineProperty(a.prototype, "operatorJurisdiction", {
              get: function () {
                return this.bv_Bt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameEngineUrl", {
              get: function () {
                return this.bv_e;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "serviceEngineUrl", {
              get: function () {
                return this.bv_i;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameMaintenanceInfo", {
              get: function () {
                return this.bv_Qt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameId", {
              get: function () {
                return this.bv_Nt.gameId;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "version", {
              get: function () {
                return this.bv_Nt.version;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "certifiedVersion", {
              get: function () {
                return this.bv_zt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "platform", {
              get: function () {
                if (!this.bv_Xt) {
                  this.bv_Xt = zb().toString();
                }
                return this.bv_Xt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "betType", {
              get: function () {
                return this.bv_Lt;
              },
              set: function (a) {
                this.bv_Lt = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "operatorPlayerSession", {
              get: function () {
                return this.bv_Pt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "playerSession", {
              get: function () {
                return this.bv_Mt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "operatorParam", {
              get: function () {
                return this.bv__t;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "operatorToken", {
              get: function () {
                return this.bv_h;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "bundleId", {
              get: function () {
                return this.bv_Nt.bundleId;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "apiDomain", {
              get: function () {
                return this.bv_Nt.apiDomain;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "loginMethod", {
              get: function () {
                return this.bv_Ft;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "noAudio", {
              get: function () {
                return this.bv_Ut;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "redirectOption", {
              get: function () {
                return this.bv_Ht;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameTitle", {
              get: function () {
                return this.bv_Dt;
              },
              set: function (a) {
                this.bv_Dt = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "globalDomain", {
              get: function () {
                return this.bv_Nt.globalDomain;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.getFullGameEngineUrl = function () {
              return this.bv_Wt;
            };
            a.prototype.getFullServiceEngineUrl = function () {
              return this.bv_Vt;
            };
            a.prototype.getFullServiceEngineUrlSD = function () {
              return this.bv_qt;
            };
            Object.defineProperty(a.prototype, "gameApiSubdomain", {
              get: function () {
                return this.bv_Yt;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "extraAssetTableKey", {
              get: function () {
                return this.bv_Kt;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }());
          a("PlayerModel", function () {
            function a() {
              this.bv_Zt = 0;
              this.bv_Jt = _a.tournamentId || undefined;
            }
            Object.defineProperty(a.prototype, "walletId", {
              get: function () {
                return this.bv_$t;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "walletType", {
              get: function () {
                return this.bv_tn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "walletKey", {
              get: function () {
                return this.bv_Jt;
              },
              set: function (a) {
                this.bv_Jt = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "playerId", {
              get: function () {
                return this.bv_nn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "playerName", {
              get: function () {
                return this.bv_en;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "playerNickname", {
              get: function () {
                return this.bv_in;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "token", {
              get: function () {
                return this.bv_s;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "sessionStatus", {
              get: function () {
                return this.bv_rn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "currency", {
              get: function () {
                return this.bv_on;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "currencySymbol", {
              get: function () {
                return this.bv_an;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "minimumBetAmount", {
              get: function () {
                return this.bv_Zt;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.updateMinimumBetAmount = function (a) {
              var b = a ? a.ns : undefined;
              this.bv_Zt = b && b.is ? b.t : 0;
            };
            a.prototype.updatePlayerInfo = function (a) {
              var b = a.playerId;
              var c = a.playerName;
              var d = a.nickname;
              var e = a.sessionToken;
              var f = a.sessionStatus;
              var g = a.currencyCode;
              var h = a.currencySymbol;
              this.bv_nn = b;
              this.bv_en = c;
              this.bv_in = d;
              this.bv_s = e;
              this.bv_rn = f;
              this.bv_on = g;
              this.bv_an = h;
            };
            a.prototype.updatePlayerWalletInfo = function (a) {
              var b = a.wid;
              var c = a.wt;
              var d = a.wk;
              this.bv_$t = b;
              this.bv_tn = c;
              this.bv_Jt = d;
            };
            return a;
          }());
          a("TransactionModel", function () {
            function a() {}
            Object.defineProperty(a.prototype, "transactionId", {
              get: function () {
                return this.bv_un;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "parentTransactionId", {
              get: function () {
                return this.bv_cn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "stateTransitionFrom", {
              get: function () {
                return this.bv_sn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "stateTransitionTo", {
              get: function () {
                return this.bv_ln;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "accumulatedWinAmount", {
              get: function () {
                return this.bv_fn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "totalWinAmount", {
              get: function () {
                return this.bv_hn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "balanceBefore", {
              get: function () {
                return this.bv_dn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "balanceAfterBet", {
              get: function () {
                return this.bv_vn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "markReadIndex", {
              get: function () {
                return this.bv_mn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "totalBet", {
              get: function () {
                return this.bv_bn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "totalBaseBet", {
              get: function () {
                return this.bv_pn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "previousGameState", {
              get: function () {
                return this.bv_gn;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.updateTransactionDetails = function (a) {
              var b = a.sid;
              var c = a.psid;
              var d = a.st;
              var e = a.nst;
              var f = a.aw;
              var g = a.tw;
              var h = a.blb;
              var i = a.blab;
              var j = a.mr;
              var k = a.tb;
              var l = a.tbb;
              this.bv_gn = this.bv_ln;
              this.bv_un = b;
              this.bv_cn = c;
              this.bv_sn = d;
              this.bv_ln = e;
              this.bv_fn = f;
              this.bv_hn = g;
              this.bv_dn = h;
              this.bv_vn = i;
              this.bv_mn = j ? j.ts : 1;
              this.bv_bn = k;
              this.bv_pn = l;
              this.updateTransactionInfo(a);
            };
            return a;
          }());
          var Ab = v.timeoutCallback;
          function Bb(a) {
            return 1 << a;
          }
          var Cb = function () {
            function a(a, b) {
              this.retryCount = 0;
              this.bv_Sn = a;
              this.bv_yn = b;
            }
            a.prototype.execute = function () {
              this.retryCount++;
              var a = typeof this.bv_yn == "function" ? this.bv_yn(this.retryCount) : this.bv_yn;
              Ab(a)(this.bv_Gn.bind(this));
            };
            a.prototype.bv_Gn = function () {
              this.bv_Sn(this.retryCount);
            };
            return a;
          }();
          var Db = a("RetryHandler", function () {
            function a() {
              this.bv_wn = 5;
              this._id = "0";
              this.bv_Cn = false;
            }
            a.setRetryHandlerConfig = function (a) {
              if (a) {
                this.retrySchemeConfig = a.retrySchemeConfig ? a.retrySchemeConfig : Bb;
                this.maxRetries = a.maxRetries ? a.maxRetries : 5;
              }
            };
            Object.defineProperty(a.prototype, "id", {
              get: function () {
                return this._id;
              },
              set: function (a) {
                this._id = a;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "isDestroyed", {
              get: function () {
                return this.bv_Cn;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.init = function (b, c, d) {
              this.bv_Sn = c;
              this.bv_wn = d && d.maxRetries ? d.maxRetries : a.maxRetries;
              this.bv_Tn = d && d.retrySchemeConfig ? d.retrySchemeConfig : a.retrySchemeConfig;
              this.bv_yn = new Cb(c, this.bv_Tn);
              this.bv_On = b;
            };
            a.prototype.execute = function () {
              if (!this.bv_Cn) {
                Z().emit("Shell.PWDReset");
                if (this.bv_yn.retryCount >= this.bv_wn) {
                  this.bv_yn = new Cb(this.bv_Sn, this.bv_Tn);
                }
                this.bv_yn.execute();
                this.bv_Rn();
              }
            };
            a.prototype.getRetryCount = function () {
              return this.bv_yn.retryCount;
            };
            a.prototype.getMaxRetryCount = function () {
              return this.bv_wn;
            };
            a.prototype.canRetry = function () {
              return this.bv_yn.retryCount < this.bv_wn && !this.bv_Cn;
            };
            a.prototype.reset = function () {
              if (this.bv_yn) {
                this.bv_yn.retryCount = 0;
              }
            };
            a.prototype.destroy = function () {
              this.bv_Cn = true;
              Z().emit("Shell.PWDReset");
            };
            a.prototype.bv_Rn = function () {
              var a = this.bv_yn.retryCount;
              fa(this.bv_On + " " + shell.I18n.t("RetryHandler.Times", {
                times: {
                  ordinal: a
                }
              }), 2);
            };
            a.retrySchemeConfig = Bb;
            a.maxRetries = 5;
            return a;
          }());
          (function (a) {
            a[a.LEFT = 1] = "LEFT";
            a[a.CENTER = 2] = "CENTER";
            a[a.RIGHT = 3] = "RIGHT";
          })(tb || (tb = {}));
          var Eb = tb.LEFT;
          var Fb = 11.5;
          var Hb = 300;
          function Jb() {
            return shell.environment.getOrientationMode() === "land";
          }
          function Kb() {
            return shell.environment.isIOS();
          }
          var Lb;
          var Mb;
          var Nb = d.devicePixelRatio || 1;
          var Ob = d.screen.width * Nb;
          var Pb = d.screen.height * Nb;
          var Qb = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.rootElement = Object.create(null);
              b.bv_En = Object.create(null);
              b.bv_xn = 300;
              b.bv_kn = [];
              return b;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              var a = this;
              Hb = Jb() ? 580 : 300;
              this.bv_jn("game-title-css", ".game-title {        width : 300px;        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        white-space: nowrap;        z-index: 250;}");
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute("id", "game-title");
              this.rootElement.classList.add("game-title");
              this.rootElement.style.visibility = "hidden";
              this.context.event.emit("Shell.GetScale", undefined, function (b) {
                if (!b.error && b.response) {
                  a.rootElement.style.width = b.response.width + "px";
                  a.bv_xn = b.response.width;
                }
              });
              this.bv_En = document.createElement("div");
              this.bv_En.style.paddingLeft = "12px";
              this.bv_En.style.display = "flex";
              this.bv_En.style.alignItems = "center";
              if (shell.isRTLLanguage && shell.isRTLLanguage()) {
                this.bv_En.style.direction = "rtl";
              }
              this.rootElement.appendChild(this.bv_En);
            };
            c.prototype.updatePosition = function (a) {
              if (a === tb.CENTER) {
                this.rootElement.style.justifyContent = "center";
                this.rootElement.style.width = `${this.bv_xn}px`;
              } else if (a === tb.LEFT) {
                this.rootElement.style.justifyContent = "flex-start";
                this.rootElement.style.width = `${Hb}px`;
              } else {
                this.rootElement.style.justifyContent = "flex-end";
                this.rootElement.style.width = `${Hb}px`;
              }
              this.bv_In();
            };
            c.prototype.updateFontSize = function (a) {
              if (a > 0) {
                this.rootElement.style.fontSize = `${a}px`;
              }
            };
            c.prototype.updateZindex = function (a) {
              this.rootElement.style.zIndex = a.toString();
            };
            c.prototype.getFontSize = function () {
              return parseFloat(this.bv_En.style.fontSize.split("px")[0]);
            };
            c.prototype.toggleVisibility = function (a) {
              var b = a ? "visible" : "hidden";
              this.rootElement.style.visibility = b;
            };
            c.prototype.setGameTitle = function (a) {
              var b = this.bv_En;
              if (b) {
                b.textContent = a;
              }
            };
            c.prototype.resizeTextToFitWidth = function () {
              var a = this.bv_En;
              var b = parseFloat(d.getComputedStyle(a).fontSize);
              if (a.parentElement && a.offsetWidth > a.parentElement.offsetWidth) {
                for (; a.offsetWidth > a.parentElement.offsetWidth;) {
                  b -= 0.5;
                  a.style.fontSize = b.toString() + "px";
                }
              }
            };
            c.prototype.bv_jn = function (a, b) {
              if (!this.bv_kn.includes(a)) {
                var c = document.createElement("style");
                c.id = a;
                c.textContent = b;
                document.head.appendChild(c);
                this.bv_kn.push(a);
              }
            };
            c.prototype.bv_In = function () {
              var a = 18;
              var b = shell.environment.hasNotch();
              var c = Kb() && Ob === 640 && Pb === 1136;
              if (d.navigator.standalone || d.shell.getEnvironment() === "app") {
                if (b) {
                  a = 43;
                } else if (c) {
                  a = 31;
                } else if (Kb()) {
                  a = 29;
                }
              }
              this.rootElement.style.height = `${a}px`;
            };
            return c;
          }(plugin.AbstractViewComponent);
          function Rb(a, b, c, d, e, f) {
            if (c === undefined) {
              c = false;
            }
            var g = b.name;
            Fb = Jb() ? 11 : Fb;
            if (e !== undefined) {
              Eb = e;
            }
            if (f !== undefined) {
              Fb = f;
            }
            a.component.create(Qb);
            ub = a.component.getInstance(Qb);
            if (d) {
              d.appendChild(ub.rootElement);
            } else {
              a.view.appendTo(Qb, "overlay");
            }
            ub.updatePosition(Eb);
            ub.updateFontSize(Fb);
            if (c) {
              ub.setGameTitle(g + " - " + shell.I18n.t("GameTitleTrial.Title"));
            } else {
              ub.setGameTitle(g);
            }
            ub.resizeTextToFitWidth();
          }
          function Ub(a) {
            if (ub) {
              ub.updateZindex(a);
            }
          }
          function Vb() {
            return ub && ub.getFontSize();
          }
          function Xb(a) {
            if (ub) {
              ub.updatePosition(a);
            }
          }
          function Yb(a) {
            if (a === undefined) {
              a = false;
            }
            if (ub) {
              ub.toggleVisibility(a);
            }
          }
          a("GameTitle", Object.freeze({
            "__proto__": null,
            GameTitle: Qb,
            get GameTitlePosition() {
              return tb;
            },
            getTitleFontSize: Vb,
            initGameTitle: Rb,
            toggleVisibleGameTitleNode: Yb,
            updateTitleFontSize: function (a) {
              if (ub) {
                ub.updateFontSize(a);
              }
            },
            updateTitlePosition: Xb,
            updateTitleZIndex: Ub
          }));
          (function (a) {
            a[a.LEFT = 1] = "LEFT";
            a[a.CENTER = 2] = "CENTER";
            a[a.RIGHT = 3] = "RIGHT";
          })(Lb || (Lb = {}));
          var Zb = Lb.RIGHT;
          var $b = 11.5;
          var _b = d.devicePixelRatio || 1;
          var ac = d.screen.width * _b;
          var bc = d.screen.height * _b;
          function ec() {
            return shell.environment.isIOS();
          }
          var fc;
          var gc = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.rootElement = Object.create(null);
              b.bv_En = Object.create(null);
              b.bv_kn = [];
              return b;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              var a = this;
              this.bv_jn("time-stamp-css", ".time_stamp {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        font-family: monospace;        z-index: 250;}");
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute("id", "time-stamp");
              this.rootElement.classList.add("time_stamp");
              this.context.event.emit("Shell.GetScale", undefined, function (b) {
                if (!b.error && b.response) {
                  a.rootElement.style.width = b.response.width + "px";
                }
              });
              this.bv_En = document.createElement("div");
              this.bv_En.style.paddingRight = "12px";
              this.bv_En.style.display = "flex";
              this.bv_En.style.alignItems = "center";
              this.rootElement.appendChild(this.bv_En);
              this.bv_An();
            };
            c.prototype.updatePosition = function (a) {
              if (a === Lb.CENTER) {
                this.rootElement.style.justifyContent = "center";
              } else if (a === Lb.LEFT) {
                this.rootElement.style.justifyContent = "flex-start";
              } else {
                this.rootElement.style.justifyContent = "flex-end";
              }
              this.bv_In();
            };
            c.prototype.updateFontSize = function (a) {
              if (a > 0) {
                this.rootElement.style.fontSize = `${a}px`;
              }
            };
            c.prototype.updateZindex = function (a) {
              this.rootElement.style.zIndex = a.toString();
            };
            c.prototype.toggleVisibility = function (a) {
              var b = a ? "visible" : "hidden";
              this.rootElement.style.visibility = b;
            };
            c.prototype.bv_jn = function (a, b) {
              if (!this.bv_kn.includes(a)) {
                var c = document.createElement("style");
                c.id = a;
                c.textContent = b;
                document.head.appendChild(c);
                this.bv_kn.push(a);
              }
            };
            c.prototype.bv_An = function () {
              var a = this.bv_En;
              if (a) {
                // TOLOOK
                setInterval(function () {
                  var b = new Date();
                  var c = b.getHours();
                  var d = b.getMinutes();
                  var e = b.getSeconds();
                  var f = c < 10 ? `0${c}` : c;
                  var g = d < 10 ? `0${d}` : d;
                  var h = e < 10 ? `0${e}` : e;
                  if (a) {
                    a.textContent = `${f}:${g}:${h}`;
                  }
                }, 1000);
              }
            };
            c.prototype.bv_In = function () {
              var a = 18;
              var b = d.navigator.standalone || d.shell.getEnvironment() === "app";
              var c = shell.environment.hasNotch();
              var e = ec() && ac === 640 && bc === 1136;
              if (b) {
                if (c) {
                  a = 43;
                } else if (e) {
                  a = 31;
                } else if (ec()) {
                  a = 29;
                }
              }
              this.rootElement.style.height = `${a}px`;
            };
            return c;
          }(plugin.AbstractViewComponent);
          function hc(a) {
            if (a === undefined) {
              a = false;
            }
            if (Mb) {
              Mb.toggleVisibility(a);
            }
          }
          (function (a) {
            a[a.LEFT = 1] = "LEFT";
            a[a.CENTER = 2] = "CENTER";
            a[a.RIGHT = 3] = "RIGHT";
          })(fc || (fc = {}));
          var ic = d.devicePixelRatio || 1;
          var jc = d.screen.width * ic;
          var kc = d.screen.height * ic;
          function lc() {
            return shell.environment.getOrientationMode() === "land";
          }
          function mc() {
            return shell.environment.isIOS();
          }
          function nc() {
            return shell.environment.hasNotch();
          }
          function oc() {
            return mc() && jc === 640 && kc === 1136;
          }
          function dc() {
            return d.navigator.standalone || d.shell.getEnvironment() === "app";
          }
          var pc;
          var qc = "game-base-header-css";
          var rc = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.rootElement = Object.create(null);
              b.textDiv = Object.create(null);
              b.styleIDs = [];
              b.customCSSPropertiesList = [];
              b.bv_Nn = 0;
              return b;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              var a = this;
              this.bv_Nn = lc() ? this.landScapeMaxWidth : this.portraitMaxWidth;
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute("id", this.elementID);
              if (document.head.getElementsByTagName("style").namedItem(qc)) {
                this.styleIDs.push(qc);
              }
              this.bv_jn(qc, ".game-base-header-css {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        z-index: 250;}");
              this.rootElement.classList.add(qc);
              var b = `${this.elementID}-css`;
              var c = this.bv_Ln(b, this.customCSSPropertiesList);
              if (c) {
                this.bv_jn(b, c);
                this.rootElement.classList.add(b);
              }
              this.context.event.emit("Shell.GetScale", undefined, function (b) {
                if (!b.error && b.response) {
                  a.rootElement.style.width = b.response.width + "px";
                  if (a.defaultWidth != null) {
                    a.defaultWidth = b.response.width;
                  }
                }
              });
              this.textDiv = document.createElement("div");
              this.textDiv.style.paddingLeft = "12px";
              this.textDiv.style.paddingRight = "12px";
              this.textDiv.style.display = "flex";
              this.textDiv.style.alignItems = "center";
              if (shell.isRTLLanguage && shell.isRTLLanguage()) {
                this.textDiv.style.direction = "rtl";
              }
              this.rootElement.appendChild(this.textDiv);
            };
            c.prototype.updatePosition = function (a) {
              if (a === fc.CENTER) {
                this.rootElement.style.justifyContent = "center";
                this.bv_Pn(this.defaultWidth);
              } else if (a === fc.LEFT) {
                this.rootElement.style.justifyContent = "flex-start";
                this.bv_Pn(this.bv_Nn);
              } else {
                this.rootElement.style.justifyContent = "flex-end";
                this.bv_Pn(this.bv_Nn);
              }
              this.bv_In();
            };
            c.prototype.updateFontSize = function (a) {
              if (a > 0) {
                this.rootElement.style.fontSize = `${a}px`;
              }
            };
            c.prototype.updateZindex = function (a) {
              this.rootElement.style.zIndex = a.toString();
            };
            c.prototype.getFontSize = function () {
              return parseFloat(this.textDiv.style.fontSize.split("px")[0]);
            };
            c.prototype.toggleVisibility = function (a) {
              var b = a ? "visible" : "hidden";
              this.rootElement.style.visibility = b;
            };
            c.prototype.resizeTextToFitWidth = function () {
              var a = this.textDiv;
              var b = parseFloat(d.getComputedStyle(a).fontSize);
              if (a.parentElement && a.offsetWidth > a.parentElement.offsetWidth) {
                for (; a.offsetWidth > a.parentElement.offsetWidth;) {
                  b -= 0.5;
                  a.style.fontSize = b.toString() + "px";
                }
              }
            };
            c.prototype.updateText = function (a) {
              var b = this.textDiv;
              if (b) {
                b.textContent = a;
              }
            };
            c.prototype.bv_jn = function (a, b) {
              if (!this.styleIDs.includes(a)) {
                var c = document.createElement("style");
                c.id = a;
                c.textContent = b;
                document.head.appendChild(c);
                this.styleIDs.push(a);
              }
            };
            c.prototype.bv_In = function () {
              var a = 18;
              var b = dc();
              var c = nc();
              var d = oc();
              if (b) {
                if (c) {
                  a = 43;
                } else if (d) {
                  a = 31;
                } else if (mc()) {
                  a = 29;
                }
              }
              this.rootElement.style.height = `${a}px`;
            };
            c.prototype.bv_Pn = function (a) {
              if (a != null) {
                this.rootElement.style.width = `${this.bv_Nn}px`;
              }
            };
            c.prototype.bv_Ln = function (a, b) {
              var c = [];
              b.forEach(function (a) {
                var b = a.endsWith(";") ? a : `${a};`;
                c.push(b);
              });
              if (c.length <= 0) {
                return "";
              } else {
                return `.${a} { ` + c.join(" ") + " }";
              }
            };
            return c;
          }(plugin.AbstractViewComponent);
          var sc = function () {
            function a() {}
            a.prototype.isLandscape = function () {
              return lc();
            };
            a.prototype.isIOS = function () {
              return mc();
            };
            a.prototype.isIphoneX = function () {
              return nc();
            };
            a.prototype.isIphoneSE = function () {
              return oc();
            };
            a.prototype.isNotBrowserMode = function () {
              return dc();
            };
            return a;
          }();
          var tc = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.elementID = "game-session-time";
              b.bv_Mn = 0;
              b.bv__n = {
                hours: 0,
                minutes: 0,
                seconds: 0
              };
              return b;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              a.prototype.onCreate.call(this);
            };
            c.prototype.startSessionTime = function () {
              var a = this;
              if (!this.bv_Dn) {
                this.bv_Dn = // TOLOOK
                setInterval(function () {
                  var b = ++a.bv_Mn;
                  var c = Math.floor(b / 3600);
                  var d = Math.floor((b - c * 3600) / 60);
                  var e = b - (c * 3600 + d * 60);
                  a.bv__n = {
                    hours: c,
                    minutes: d,
                    seconds: e
                  };
                  a.updateTime();
                }, 1000);
              }
            };
            c.prototype.stopSessionTime = function () {
              if (this.bv_Dn) {
                clearInterval(this.bv_Dn);
              }
              this.bv_Dn = undefined;
            };
            c.prototype.getSessionTime = function () {
              return this.bv__n;
            };
            c.prototype.updateTime = function () {
              var a = this.bv__n;
              var b = a.hours;
              var c = a.minutes;
              var d = a.seconds;
              var e = b < 10 ? `0${b}` : b + "";
              var f = c < 10 ? `0${c}` : c + "";
              var g = d < 10 ? `0${d}` : d + "";
              var h = b > 0 ? `${e}:${f}:${g}` : `${f}:${g}`;
              var i = shell.I18n.t("GameCustomDisplay.SessionTime") + " " + h;
              this.updateText(i);
            };
            return c;
          }(rc);
          var uc = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.position = fc.RIGHT;
              b.fontSize = 11.5;
              b.landscapeFontSize = 11;
              return b;
            }
            b(c, a);
            c.prototype.initGameSessionTime = function (a, b, c, d) {
              this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
              if (c !== undefined) {
                this.position = c;
              }
              if (d !== undefined) {
                this.fontSize = d;
              }
              a.component.create(tc);
              this.bv_Un = a.component.getInstance(tc);
              if (b) {
                b.appendChild(this.bv_Un.rootElement);
              } else {
                a.view.appendTo(tc, "overlay");
              }
              this.bv_Un.updateTime();
              this.bv_Un.updatePosition(this.position);
              this.bv_Un.updateFontSize(this.fontSize);
            };
            c.prototype.updateGameSessionTimeZIndex = function (a) {
              if (this.bv_Un) {
                this.bv_Un.updateZindex(a);
              }
            };
            c.prototype.updateGameSessionTimeFontSize = function (a) {
              if (this.bv_Un) {
                this.bv_Un.updateFontSize(a);
              }
            };
            c.prototype.updateGameSessionTimePosition = function (a) {
              if (this.bv_Un) {
                this.bv_Un.updatePosition(a);
              }
            };
            c.prototype.toggleVisibleGameSessionTimeNode = function (a) {
              if (a === undefined) {
                a = false;
              }
              if (this.bv_Un) {
                this.bv_Un.toggleVisibility(a);
              }
            };
            c.prototype.startGameSessionTime = function () {
              if (this.bv_Un) {
                this.bv_Un.startSessionTime();
              }
            };
            c.prototype.stopGameSessionTime = function () {
              if (this.bv_Un) {
                this.bv_Un.stopSessionTime();
              }
            };
            c.prototype.getGameSessionTime = function () {
              return this.bv_Un && this.bv_Un.getSessionTime();
            };
            return c;
          }(sc);
          var vc = v.formatCurrency;
          var wc = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.elementID = "game-session-net-profit";
              b.bv_Hn = true;
              b.bv_Fn = 0;
              b.bv_Bn = 0;
              b.bv_Wn = 0;
              return b;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              a.prototype.onCreate.call(this);
            };
            c.prototype.getGameSessionNetProfit = function () {
              return this.bv_Wn;
            };
            c.prototype.updateGameSessionNetProfit = function (a) {
              this.setLatestBalance(a);
              this.bv_Wn = this.bv_Bn - this.bv_Fn;
              this.updateNetProfit();
            };
            c.prototype.setLatestBalance = function (a) {
              if (this.bv_Hn) {
                this.bv_Fn = a;
                this.bv_Hn = false;
              }
              this.bv_Bn = a;
            };
            c.prototype.updateNetProfit = function () {
              var a = shell.I18n.t("GameCustomDisplay.SessionNetPosition") + " " + vc(this.bv_Wn);
              this.updateText(a);
              this.resizeTextToFitWidth();
            };
            return c;
          }(rc);
          var xc = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.position = fc.LEFT;
              b.fontSize = 11.5;
              b.landscapeFontSize = 11;
              return b;
            }
            b(c, a);
            c.prototype.initGameSessionNetProfit = function (a, b, c, d) {
              this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
              if (c !== undefined) {
                this.position = c;
              }
              if (d !== undefined) {
                this.fontSize = d;
              }
              a.component.create(wc);
              this.bv_qn = a.component.getInstance(wc);
              if (b) {
                b.appendChild(this.bv_qn.rootElement);
              } else {
                a.view.appendTo(wc, "overlay");
              }
              this.bv_qn.updatePosition(this.position);
              this.bv_qn.updateFontSize(this.fontSize);
              this.bv_qn.updateNetProfit();
            };
            c.prototype.updateSessionNetProfitZIndex = function (a) {
              if (this.bv_qn) {
                this.bv_qn.updateZindex(a);
              }
            };
            c.prototype.updateSessionNetProfitFontSize = function (a) {
              if (this.bv_qn) {
                this.bv_qn.updateFontSize(a);
              }
            };
            c.prototype.getSessionNetProfitFontSize = function () {
              return this.bv_qn && this.bv_qn.getFontSize() || 0;
            };
            c.prototype.updateSessionNetProfitPosition = function (a) {
              if (this.bv_qn) {
                this.bv_qn.updatePosition(a);
              }
            };
            c.prototype.updateBalance = function (a) {
              if (this.bv_qn) {
                this.bv_qn.updateGameSessionNetProfit(a);
              }
            };
            c.prototype.toggleVisibleGameSessionNetProfitNode = function (a) {
              if (a === undefined) {
                a = false;
              }
              if (this.bv_qn) {
                this.bv_qn.toggleVisibility(a);
              }
            };
            c.prototype.getSessionNetProfit = function () {
              return this.bv_qn && this.bv_qn.getGameSessionNetProfit() || 0;
            };
            return c;
          }(sc);
          var yc = new (function () {
            function a() {
              this.bv_Vn = new uc();
              this.bv_Qn = new xc();
            }
            Object.defineProperty(a.prototype, "gameSessionTimeHelper", {
              get: function () {
                return this.bv_Vn;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "gameSessionNetProfitHelper", {
              get: function () {
                return this.bv_Qn;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }())();
          (function (a) {
            a[a.LEGACY = 0] = "LEGACY";
            a[a.NEW = 1] = "NEW";
          })(pc || (pc = {}));
          var zc;
          var Ac;
          var Bc;
          var Cc = [];
          function Dc(a, b) {
            var c = v.timeoutCallback;
            var d = a;
            c(2)(function () {
              var a = Bc.getComponent(cc.Label);
              Bc.setScale(cc.v2(1, 0));
              a.string = b[d];
              d++;
              d %= b.length;
              Bc.runAction(cc.sequence(cc.scaleTo(0.125, 1).easing(cc.easeIn(1)), cc.callFunc(function () {
                Dc(d, b);
              })));
            });
          }
          var Ec;
          var Fc;
          var Hc;
          var Jc;
          var Kc = function () {
            function a() {}
            a.prototype.initGameOperatorDisplay = function (a, b, c, d) {
              var e;
              var f;
              var g;
              var h;
              if (zc === undefined) {
                zc = new cc.Node("operator_display_holder");
                Ac = new cc.Node("operator_display");
                Bc = new cc.Node("content");
                Ac.parent = zc;
                Bc.parent = Ac;
                if (!cc.game.isPersistRootNode(zc)) {
                  cc.game.addPersistRootNode(zc);
                }
              }
              f = (e = zc).addComponent(cc.Widget);
              g = cc.view.getViewportRect().height;
              h = cc.view.getViewportRect().width;
              e.anchorX = 0.5;
              e.anchorY = 0.5;
              e.zIndex = 1000;
              e.width = h;
              e.height = g;
              f.top = 0;
              f.left = 0;
              f.right = 0;
              f.isAlignTop = true;
              f.isAlignLeft = true;
              f.isAlignRight = true;
              f.isAlignVerticalCenter = true;
              f.isAlignHorizontalCenter = true;
              f.updateAlignment();
              (function (a) {
                var b = a.addComponent(cc.Layout);
                a.width = 1080;
                a.height = 25;
                a.anchorX = 0.5;
                a.anchorY = 1;
                a.setPosition(cc.v2(0, -865));
                b.type = cc.Layout.Type.HORIZONTAL;
                b.paddingLeft = 20;
              })(Ac);
              (function (a, b) {
                var c = a.addComponent(cc.Label);
                var d = a.addComponent(cc.LabelOutline);
                a.width = 1040;
                a.anchorX = 0;
                a.anchorY = 0.5;
                c.overflow = cc.Label.Overflow.CLAMP;
                c.lineHeight = 25;
                c.fontSize = b || 25;
                c.node.opacity = 153;
                c.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
                c.verticalAlign = cc.Label.VerticalAlign.CENTER;
                d.color = new cc.Color(65, 50, 24, 255);
                d.width = 0.5;
              })(Bc, d);
              (function (a) {
                if (a && a.length > 0) {
                  Cc.push(a);
                }
              })(c);
              (function (a) {
                if (a && a.length > 0) {
                  for (var b = function (b) {
                      for (var c = a[b], d = Object.keys(c).map(function (a) {
                          return c[a];
                        }), e = [], f = 0, g = d.length; f < g; f++) {
                        e.push(d[f]);
                      }
                      Cc.push(e.join(": "));
                    }, c = 0, d = a.length; c < d; c++) {
                    b(c);
                  }
                }
                if (Cc && Cc.length > 0) {
                  Bc.getComponent(cc.Label).string = Cc[0];
                  if (Cc.length > 1) {
                    Dc(1, Cc);
                  }
                }
              })(b);
              this.bv_zn(Cc);
              a.event.on("Shell.Scaled", function (a) {
                if (!a.error) {
                  (function () {
                    var a = cc.view.getViewportRect().height;
                    var b = cc.view.getViewportRect().width;
                    zc.width = a;
                    zc.height = b;
                  })();
                }
              }, undefined);
              a.event.emit("Game.GetSettingMenuType", undefined, function (a) {
                if (!a.error) {
                  if (a.response === pc.LEGACY) {
                    Ac.setPosition(cc.v2(0, -885));
                  } else if (shell.environment.getOrientationMode() === "land") {
                    Ac.setPosition(cc.v2(-430, -368));
                  }
                }
              });
              a.event.emit("Game.RequestLayoutInfo", undefined, function (a) {
                if (!a.error && a.response) {
                  var b = a.response;
                  if (b.uiOperatorDisplaySpace) {
                    Ac.setPosition(cc.v2(0, b.uiOperatorDisplaySpace.position.y));
                  }
                }
              });
            };
            a.prototype.toggleVisibleGameOperatorDisplayNode = function (a) {
              if (a === undefined) {
                a = false;
              }
              if (zc) {
                zc.active = a;
              }
            };
            a.prototype.bv_zn = function (a) {
              if (!(a && a.length !== 0)) {
                this.toggleVisibleGameOperatorDisplayNode(false);
              }
            };
            return a;
          }();
          var Lc = new (function () {
            function a() {
              this.bv_Yn = new Kc();
            }
            Object.defineProperty(a.prototype, "gameOperatorDisplayHelper", {
              get: function () {
                return this.bv_Yn;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }())();
          (function (a) {
            a[a.LEFT = 1] = "LEFT";
            a[a.CENTER = 2] = "CENTER";
            a[a.RIGHT = 3] = "RIGHT";
          })(Ec || (Ec = {}));
          (function (a) {
            a.GameTitle = "gameTitle";
            a.TimeStamp = "timeStamp";
            a.GameSessionNetProfit = "gameSessionNetProfit";
            a.GameSessionTime = "gameSessionTime";
          })(Fc || (Fc = {}));
          (function (a) {
            a[a.TITLE_TIMESTAMP = 0] = "TITLE_TIMESTAMP";
            a[a.SESSION_NET_PROFIT_TIME = 1] = "SESSION_NET_PROFIT_TIME";
          })(Hc || (Hc = {}));
          (function (a) {
            a.BONUS_WALLET = "B";
            a.FREE_GAMES = "G";
            a.CASH = "C";
            a.TOURNAMENT = "P";
            a.REMOTE = "I";
          })(Jc || (Jc = {}));
          var Mc;
          var Nc;
          var Oc;
          var Pc;
          var Qc;
          var Rc = false;
          var Uc = {
            gameTitle: {
              show: false,
              order: Hc.TITLE_TIMESTAMP
            },
            timeStamp: {
              show: false,
              order: Hc.TITLE_TIMESTAMP
            },
            gameSessionNetProfit: {
              show: false,
              order: Hc.SESSION_NET_PROFIT_TIME
            },
            gameSessionTime: {
              show: false,
              order: Hc.SESSION_NET_PROFIT_TIME
            }
          };
          var Vc = undefined;
          var Xc = false;
          var Yc = yc.gameSessionNetProfitHelper;
          var Zc = yc.gameSessionTimeHelper;
          var $c = Lc.gameOperatorDisplayHelper;
          var _c = false;
          var ad = false;
          var bd = false;
          var cd = false;
          var dd = {};
          var ed = false;
          var fd = false;
          var gd = false;
          function hd(a, b) {
            if (b === undefined) {
              b = true;
            }
            switch (a) {
              case "None":
                Uc.gameTitle = {
                  show: false,
                  order: Hc.TITLE_TIMESTAMP
                };
                Uc.timeStamp = {
                  show: false,
                  order: Hc.TITLE_TIMESTAMP
                };
                break;
              case "Time":
                Uc.gameTitle = {
                  show: false,
                  order: 1
                };
                Uc.timeStamp = {
                  show: true,
                  position: Ec.RIGHT,
                  order: Hc.TITLE_TIMESTAMP
                };
                break;
              case "Title":
                Uc.gameTitle = {
                  show: true,
                  position: Ec.CENTER,
                  order: Hc.TITLE_TIMESTAMP
                };
                Uc.timeStamp = {
                  show: false,
                  order: Hc.TITLE_TIMESTAMP
                };
                break;
              case "All":
                Uc.gameTitle = {
                  show: true,
                  position: Ec.LEFT,
                  order: Hc.TITLE_TIMESTAMP
                };
                Uc.timeStamp = {
                  show: true,
                  position: Ec.RIGHT,
                  order: Hc.TITLE_TIMESTAMP
                };
            }
            Uc.gameSessionNetProfit = {
              show: !bd && _c,
              position: Ec.LEFT,
              order: Hc.SESSION_NET_PROFIT_TIME
            };
            Uc.gameSessionTime = {
              show: !cd && ad,
              position: Ec.RIGHT,
              order: Hc.SESSION_NET_PROFIT_TIME
            };
            Oc = a;
            if (b) {
              id();
            }
          }
          function id() {
            if (ld(true).length <= 0) {
              fd = true;
              Mc.style.visibility = "hidden";
              ld(false).forEach(function (a) {
                md(a);
              });
            } else {
              gd = true;
              (function () {
                Mc.style.visibility = "visible";
                od();
                if (ed && gd) {
                  gd = false;
                  Tc();
                  ud();
                  pd(0, true);
                  return;
                }
                if (!ed) {
                  ed = true;
                  gd = false;
                  pd(0, true);
                }
              })();
            }
          }
          function jd(a) {
            if (_c) {
              bd = a;
              Uc.gameSessionNetProfit.show = !bd && _c;
            }
            if (ad) {
              cd = a;
              Uc.gameSessionTime.show = !cd && ad;
            }
            id();
          }
          function kd() {
            return Object.values(Fc);
          }
          function ld(a) {
            return kd().filter(function (b) {
              var c = b;
              if (a) {
                return Uc[c].show;
              } else {
                return !Uc[c].show;
              }
            });
          }
          function md(a) {
            switch (a) {
              case Fc.GameTitle:
                Yb(false);
                break;
              case Fc.TimeStamp:
                hc(false);
                break;
              case Fc.GameSessionNetProfit:
                Yc.toggleVisibleGameSessionNetProfitNode(false);
                break;
              case Fc.GameSessionTime:
                Zc.toggleVisibleGameSessionTimeNode(false);
            }
          }
          function nd(a, b, c, d) {
            if (!a[b]) {
              a[b] = {};
            }
            function e(e) {
              if (a[b][e]) {
                nd(a, b + 1, c, d);
              } else {
                a[b][e] = c;
              }
            }
            switch (d) {
              case Ec.LEFT:
                e("left");
                break;
              case Ec.CENTER:
                e("center");
                break;
              case Ec.RIGHT:
                e("right");
            }
          }
          function od() {
            dd = {};
            ld(true).forEach(function (a) {
              var b = a;
              var c = Uc[b];
              var d = c.position;
              var e = c.order;
              var f = d || Ec.LEFT;
              nd(dd, e, b, f);
            });
            return dd;
          }
          function pd(a, b) {
            var c = Object.keys(dd);
            var d = c[a];
            var e = dd[d];
            (function (a, b, c) {
              function d() {
                var a = kd().filter(function (a) {
                  var c = a;
                  return !b.some(function (a) {
                    var b = a.key;
                    return b && b === c;
                  });
                });
                a.forEach(function (a) {
                  md(a);
                });
              }
              function e() {
                b.forEach(function (a) {
                  var b = a.key;
                  var c = a.position;
                  if (b) {
                    (function (a, b) {
                      switch (a) {
                        case Fc.GameTitle:
                          Yb(true);
                          Xb(b);
                          break;
                        case Fc.TimeStamp:
                          hc(true);
                          (function (a) {
                            if (Mb) {
                              Mb.updatePosition(a);
                            }
                          })(b);
                          break;
                        case Fc.GameSessionNetProfit:
                          Yc.toggleVisibleGameSessionNetProfitNode(true);
                          Yc.updateSessionNetProfitPosition(b);
                          break;
                        case Fc.GameSessionTime:
                          Zc.toggleVisibleGameSessionTimeNode(true);
                          Zc.updateGameSessionTimePosition(b);
                      }
                    })(b, c);
                  }
                });
                (function (a) {
                  if (!Nc || fd || gd) {
                    return a();
                  }
                  (function (a) {
                    Nc.style.transform = "scaleY(1)";
                    Qc = // TOLOOK
                    setTimeout(function () {
                      ud();
                      a();
                    }, 3000);
                  })(a);
                })(c);
              }
              if (a) {
                d();
                e();
                return;
              }
              (function (a) {
                if (!Nc || fd || gd) {
                  return a();
                }
                (function (a) {
                  Nc.style.transform = "scaleY(0)";
                  Pc = // TOLOOK
                  setTimeout(function () {
                    Tc();
                    a();
                  }, 200);
                })(a);
              })(function () {
                d();
                e();
              });
            })(b, [{
              key: e.left,
              position: Ec.LEFT
            }, {
              key: e.center,
              position: Ec.CENTER
            }, {
              key: e.right,
              position: Ec.RIGHT
            }], function () {
              if (c.length <= 1) {
                ed = false;
              } else {
                if (fd) {
                  ed = false;
                  fd = false;
                  return;
                }
                if (++a >= Object.keys(dd).length) {
                  a = 0;
                }
                pd(a, false);
              }
            });
          }
          function qd() {
            return Vc === Jc.CASH;
          }
          function rd(a) {
            if (a) {
              var b = a.k;
              Xc = b.substring(0, 3) === "0_C";
            } else {
              Xc = false;
            }
          }
          function sd(a) {
            if (qd() || Xc) {
              jd(a);
            }
          }
          function td() {
            if (qd()) {
              jd(false);
            } else {
              jd(!Xc);
            }
          }
          function Tc() {
            if (Pc) {
              clearTimeout(Pc);
              Pc = undefined;
            }
          }
          function ud() {
            if (Qc) {
              clearTimeout(Qc);
              Qc = undefined;
            }
          }
          var vd = a("GameHeaderHelper", {
            initGameHeader: function (a) {
              if (!Rc) {
                var b = document.getElementById("game-overlay");
                (Mc = document.createElement("div")).setAttribute("id", "game-header-holder");
                Mc.style.zIndex = "99";
                Mc.style.pointerEvents = "none";
                Mc.style.position = "absolute";
                var c = Mc;
                var d = function (a) {
                  var b = a.systemModel.operatorJurisdiction;
                  var c = b.gameClock;
                  var d = b.gameName;
                  var e = b.netProfitState;
                  var f = b.elapsedTimeState;
                  var g = c;
                  var h = d;
                  var i = "All";
                  _c = e;
                  ad = f;
                  if (!(c !== undefined && d !== undefined)) {
                    g = true;
                    h = true;
                  }
                  if (g) {
                    if (!h) {
                      i = "Time";
                    }
                  } else {
                    i = h ? "Title" : "None";
                  }
                  return i;
                }(a.dataSource);
                hd(d, false);
                var e = od();
                if (Object.keys(e).length > 1) {
                  (Nc = document.createElement("div")).setAttribute("id", "game-header-animate-holder");
                  Nc.style.height = "18px";
                  Nc.style.transform = "scaleY(1)";
                  Nc.style.transformOrigin = "center";
                  Nc.style.transition = "transform 0.2s ease-in";
                  c = Nc;
                  Mc.appendChild(Nc);
                }
                if (b) {
                  b.appendChild(Mc);
                }
                var f = a.context;
                var g = a.gameTitle;
                var h = a.dataSource.systemModel.operatorJurisdiction.operatorCustomDisplayList;
                var i = a.dataSource.systemModel.betType === 2;
                var j = a.dataSource.systemModel.operatorJurisdiction.gameVersion;
                var k = a.dataSource.systemModel.certifiedVersion;
                f.event.emit("Shell.GetScale", undefined, function (a) {
                  if (!a.error && a.response) {
                    Mc.style.height = a.response.height + "px";
                    Mc.style.width = a.response.width + "px";
                  }
                });
                f.event.on("Shell.Scaled", function (a) {
                  var b = a.payload;
                  Mc.style.height = `${b.height}px`;
                  Mc.style.width = `${b.width}px`;
                }, f);
                Rb(f, g, i, c);
                (function (a, b, c, d) {
                  $b = shell.environment.getOrientationMode() === "land" ? 11 : $b;
                  if (c !== undefined) {
                    Zb = c;
                  }
                  if (d !== undefined) {
                    $b = d;
                  }
                  a.component.create(gc);
                  Mb = a.component.getInstance(gc);
                  if (b) {
                    b.appendChild(Mb.rootElement);
                  } else {
                    a.view.appendTo(gc, "overlay");
                  }
                  Mb.updatePosition(Zb);
                  Mb.updateFontSize($b);
                })(f, c);
                var l = j ? k : undefined;
                $c.initGameOperatorDisplay(f, h, l);
                var m;
                var n = Vb();
                m = n;
                if (Mb) {
                  Mb.updateFontSize(m);
                }
                Yb(false);
                hc(false);
                $c.toggleVisibleGameOperatorDisplayNode(false);
                f.event.once("Game.GameInfoUpdated", function (a) {
                  var b = a.payload.dt.ls.si;
                  Vc = b.wt;
                  rd(b.wbn);
                }, f);
                if (_c) {
                  Yc.initGameSessionNetProfit(f, c);
                  Yc.updateSessionNetProfitFontSize(n);
                  Yc.toggleVisibleGameSessionNetProfitNode(false);
                  f.event.on("Game.TransactionInfoChanged", function (a) {
                    var b = a.payload;
                    if (b && b.balance && (qd() || Xc)) {
                      Yc.updateBalance(b.balance);
                    }
                  }, f);
                }
                if (ad) {
                  Zc.initGameSessionTime(f, c);
                  Zc.updateGameSessionTimeFontSize(n);
                  Zc.toggleVisibleGameSessionTimeNode(false);
                }
                function o(a) {
                  if (a.payload === "GameStarted") {
                    $c.toggleVisibleGameOperatorDisplayNode(true);
                    if (ad) {
                      Zc.startGameSessionTime();
                    }
                    (function (a) {
                      a.event.on("Game.UpdateHeaderType", function (a) {
                        var b = a.payload;
                        if (!b) {
                          b = "All";
                        }
                        hd(b);
                      }, a);
                      a.event.on("Game.UpdateHeaderZIndex", function (a) {
                        var b = a.payload;
                        Ub(b);
                        (function (a) {
                          if (Mb) {
                            Mb.updateZindex(a);
                          }
                        })(b);
                        Yc.updateSessionNetProfitZIndex(b);
                        Zc.updateGameSessionTimeZIndex(b);
                      }, a);
                      a.event.on("Game.RequestHeaderType", function (a) {
                        a.response = Oc;
                      }, a);
                      a.event.on("Game.ShowCustomDisplay", function () {
                        $c.toggleVisibleGameOperatorDisplayNode(true);
                      }, a);
                      a.event.on("Game.HideCustomDisplay", function () {
                        $c.toggleVisibleGameOperatorDisplayNode(false);
                      }, a);
                      if (_c || ad) {
                        a.event.on("Game.ReplayInitiated", function () {
                          sd(true);
                        }, a);
                        a.event.on("Game.ReplayQuit", function () {
                          sd(false);
                        }, a);
                        a.event.on("Game.GameInfoUpdated", function (a) {
                          var b = a.payload.dt.ls.si;
                          Vc = b.wt;
                          rd(b.wbn);
                          td();
                        }, a);
                      }
                    })(f);
                    td();
                    hd(d);
                    f.event.off("Shell.BootStateChanged", o, f);
                  }
                }
                f.event.on("Shell.BootStateChanged", o, f);
                Rc = true;
              }
            },
            updateHeaderPositions: hd,
            emitShowCustomDisplayEvent: function () {
              Z().emit("Game.ShowCustomDisplay");
            },
            emitHideCustomDisplayEvent: function () {
              Z().emit("Game.HideCustomDisplay");
            }
          });
          var wd = a("GameMaintenanceHandler", {
            checkGameMaintenance: function (a, b) {
              if (a.isGameActive()) {
                var c = a.maintenanceStartDate;
                var d = a.maintenanceEndDate;
                if (c && d && a.isGameMaintenenceApproaching()) {
                  ha({
                    title_message: shell.I18n.t("General.MaintenanceTitle"),
                    content_message: shell.I18n.t("General.MaintenanceMessage", {
                      startDate: a.readableMaintenanceStartDate,
                      endDate: a.readableMaintenanceEndDate
                    }),
                    actions: [{
                      title: shell.I18n.t("General.DialogOk"),
                      handler: b
                    }]
                  });
                  return;
                }
                if (b) {
                  b();
                }
              } else {
                var e = shell.Error;
                var f = shell.ClientError;
                var g = new e(f.Domain, f.GameMaintenanceError);
                kb.sendErrorReport("game inactive", g.domain, g.code);
                ob.showError(g, "Launch", function (a) {
                  if (jb.Quit === a) {
                    eb.quitGame();
                  }
                });
              }
            }
          });
          var xd = false;
          function yd(a, b) {
            if (!b) {
              b = function (b, c) {
                if (b) {
                  var d = a.failCallback;
                  if (d) {
                    d(b, c);
                  }
                } else {
                  var e = a.finalCallback;
                  if (e) {
                    e(undefined, c);
                  }
                }
              };
            }
            var c;
            var d = new Db();
            var e = function (a, b, c) {
              return function (d, e) {
                var f = a.slowNetworkHandler;
                if (d) {
                  if (b.isDestroyed) {
                    return;
                  }
                  var g = b.getRetryCount();
                  var h = g > 0 ? g : undefined;
                  if (!d.canDismiss) {
                    kb.sendErrorReport(a.name + " failed", d.domain, d.code, h);
                  }
                  if (d.shouldRetry && b.canRetry()) {
                    b.execute();
                  } else {
                    if (f) {
                      f.cancel();
                    }
                    if (xd) {
                      return;
                    }
                    var i = a.errorContext ? a.errorContext : ob.getErrorContext(a.errorTitle);
                    ob.handleCommonError(a.name + " failed", d, i, function () {
                      if (f) {
                        f.start();
                      }
                      b.reset();
                      b.execute();
                    }, function () {
                      var a = shell.ServerError;
                      if (a.isInsufficientCashFundError(d.code) || a.isInsufficientBonusFundError(d.code)) {
                        za.insufficientFundResult = {
                          error: d,
                          result: e
                        };
                      }
                      if (c) {
                        c(d, e);
                      }
                    });
                  }
                } else {
                  if (f) {
                    f.cancel();
                  }
                  b.destroy();
                  if (xd) {
                    return;
                  }
                  if (c) {
                    c(undefined, e);
                  }
                }
                kb.sendAnalyticsTiming({
                  actionName: "GAME_API_REQUEST",
                  state: "End"
                });
              };
            }(a, d, b);
            var f = function (a, b, c) {
              return function () {
                a(b, c);
                kb.sendAnalyticsTiming({
                  actionName: "GAME_API_REQUEST",
                  state: "Start"
                });
              };
            }(a.apiRequest, e, a.apiRequestParam);
            c = a.fallbackRequest ? function () {
              var b = a.fallbackRequest;
              if (b) {
                var c = function (a, b, c) {
                  return function (d, e) {
                    if (d) {
                      b(d, e);
                    } else if (c && c(e)) {
                      kb.sendAnalyticsTiming({
                        actionName: "GAME_API_REQUEST",
                        state: "End"
                      });
                      a();
                    } else {
                      b(undefined, e);
                    }
                  };
                }(f, e, a.shouldRetryApiRequest);
                b(c, a.fallbackRequestParam);
                kb.sendAnalyticsTiming({
                  actionName: "GAME_API_REQUEST",
                  state: "Start"
                });
              }
            } : f;
            d.id = `handler_${a.name}`;
            d.init(a.retryMessage ? a.retryMessage : shell.I18n.t("General.RetryNetwork"), c);
            var g = a.slowNetworkHandler;
            if (g) {
              g.start();
            }
            f();
          }
          var zd;
          var Ad = a("RequestHandler", {
            doAPIRequest: yd,
            doTransactionAPIRequest: function (a, b, c) {
              var d = b.transactionModel.transactionId;
              a.errorContext = "Transaction";
              a.name = "game api";
              a.shouldRetryApiRequest = function () {
                var a = b.transactionModel.transactionId;
                return d === a;
              };
              yd(a, c);
            },
            reportCriticalError: function () {
              xd = true;
            }
          });
          function Bd() {
            return i.getPreference(zd).getItem("gameName");
          }
          var Cd = {
            getGameName: function (a, b) {
              a.getGameName(function (a, c) {
                var d;
                if (!(a || c === undefined)) {
                  d = c;
                  i.getPreference(zd).setItem("gameName", d.dt);
                }
                if (b) {
                  b();
                }
              });
            },
            getGameNamesFromStorage: Bd,
            getGameNameWithId: function (a) {
              var b = Bd();
              if (b && b[a]) {
                return b[a];
              } else {
                return a.toString();
              }
            },
            setupGameNameDomain: function (a) {
              zd = a;
            }
          };
          var Dd = function () {
            function a() {
              return [200, 10, 300].reduce(function (a, b) {
                return a * b;
              }, 144);
            }
            function b(b, c, e) {
              if (function (a) {
                return X(d[U(0)].now(), a);
              }(b)) {
                if (!c) {
                  c = d.Number("0.0005") * 100;
                }
                if (e) {
                  var f = function (b, c) {
                    var e = (d[U(0)].now() - b) / (c * a());
                    return d[U(4)].min(1, e * e);
                  }(b, e);
                  c *= f;
                }
                return X(d[("Mathew", H(-2, "Mathew"))].random(), c);
              }
              return true;
            }
            return [function () {
              return b(["0x4c72"].reduce(function (a, b) {
                return a + d.Number(b);
              }, 469) * a(), d.Number("0.0005") * 100, 28);
            }, b];
          }();
          var Ed = Dd[0];
          function Fd() {
            return (Ed() + "EQ").substring(1) === "rueEQ";
          }
          function Hd(a) {
            a.response = function () {
              var a = 0;
              if (M(R(" Math.random"))) {
                a |= 1;
              }
              var b = T(6);
              if (M(R(" setTimeout ")) || b()) {
                a |= 2;
              }
              var c = T(0);
              if (M(R(" Date.now")) || c()) {
                a |= 4;
              }
              var e = function () {
                var a = -1;
                try {
                  var b = d.Object.getOwnPropertyDescriptor(d, "isSecureContext");
                  if (b === undefined) {
                    a = 2;
                  } else if (M(b.get)) {
                    a = b.get.apply(d) ? 1 : 0;
                  }
                } catch (a) {}
                return a;
              }();
              var f = function () {
                var a = "subtle";
                var b = P(d, "crypto");
                if (!b) {
                  return -1;
                }
                if (N(b, a)) {
                  return -1;
                }
                var c = Q(b, a);
                if (c != null) {
                  if (["digest", "sign", "importKey"].reduce(function (a, b) {
                    return a + (N(c, b) || !M(Q(c, b)) ? 1 : 0);
                  }, 0)) {
                    return -1;
                  } else {
                    return 1;
                  }
                } else {
                  return 0;
                }
              }();
              if (!(f < 0 || f && !e || !f && e)) {
                a |= 8;
              }
              return a;
            }();
          }
          var Jd;
          var Kd = v.tickCallback;
          var Ld = v.setDefaultCurrencyFormat;
          (function (a) {
            a[a.PAUSE_GAME = 0] = "PAUSE_GAME";
            a[a.RESUME_GAME = 1] = "RESUME_GAME";
          })(Jd || (Jd = {}));
          var Md = Jd.RESUME_GAME;
          var Nd = false;
          var Od = Object.create(null);
          var Pd = Object.create(null);
          var Qd = Object.create(null);
          var Rd = Object.create(null);
          var Td = Object.create(null);
          var Ud = Object.create(null);
          var Vd = Object.create(null);
          var Wd = false;
          var Xd = false;
          var Yd = [];
          var Zd = "Resume";
          var $d = 0;
          var _d = 0;
          var ae = Object.create(null);
          var be = undefined;
          var ce = undefined;
          function de(a) {
            var b;
            var c;
            var d = a.payload;
            if (typeof d == "boolean") {
              b = d;
              c = false;
            } else {
              b = d.isBlocked;
              c = d.shouldFreeze;
            }
            if (b) {
              _d++;
              if (c && !cc.game.isPaused()) {
                Kd(true)(function () {
                  if (_d > 0) {
                    cc.game.pause();
                  }
                });
              }
              if (_d > 1) {
                return;
              }
            } else {
              if (_d === 0) {
                return;
              }
              _d--;
              if (cc.game.isPaused()) {
                cc.game.resume();
              }
              if (_d > 0) {
                return;
              }
            }
            Object.keys(Qd).forEach(function (a) {
              var c = Qd[a];
              if (c) {
                c(b);
              }
            });
          }
          var ee = 0;
          function fe(a) {
            Z().emit("Game.StateChanged", a);
            Zd = a;
          }
          function ge(a, b) {
            Td[a] = b;
          }
          var he = a("GameEventHandler", {
            subscribeTransactionInfoChangedEvent: function () {
              Z().on("Game.TransactionInfoChanged", function (a) {
                Object.keys(Td).forEach(function (b) {
                  var c = Td[b];
                  if (c) {
                    c(a.payload);
                  }
                });
              });
            },
            subscribeTransactionInfoRequestEvent: function () {
              ge("saveInfo", function (a) {
                Object.keys(a).forEach(function (b) {
                  ae[b] = a[b];
                });
              });
              Z().on("Game.RequestCurrentTransactionInfo", function (a) {
                a.response = ae;
              });
            },
            subscribeGameSessionRequestEvent: function (a) {
              var b = Z();
              b.on("Game.RequestSession", function (b) {
                var c = a.systemModel;
                var d = c.gameId;
                var e = c.operatorToken;
                var f = c.operatorPlayerSession;
                var g = c.betType;
                var h = c.platform;
                var i = c.apiDomain;
                var j = c.operatorJurisdiction;
                var k = c.gameApiSubdomain;
                var l = a.playerModel;
                var m = l.token;
                var n = l.playerName;
                var o = l.playerId;
                var p = l.currencySymbol;
                b.response = {
                  gameId: d,
                  token: m,
                  operatorToken: e,
                  sessionId: f,
                  playerName: n,
                  playerId: o,
                  betType: g,
                  platform: h,
                  apiDomain: i,
                  gameApiSubdomain: k,
                  currencySymbol: p,
                  operatorJurisdictionConfig: j,
                  serviceEngineUrl: a.systemModel.getFullServiceEngineUrl(),
                  gameEngineUrl: a.systemModel.getFullGameEngineUrl()
                };
              });
              (function (a, b) {
                a.on("Game.TransactionStateStarted", function (a) {
                  return function (b) {
                    b.response = a();
                  };
                }(b), undefined);
              })(b, Fd);
            },
            addGamePlayUIBlockEventCallback: function (a, b) {
              if (typeof a == "function") {
                b = a;
                Qd.default = b;
              } else {
                Qd[a] = b;
              }
            },
            subscribeOperatorCurrencyFormatUpdateEvent: function () {
              var a = Z();
              a.on("Game.UpdateLocaleCurrencyFormat", function (b) {
                var c = b.payload;
                Ld({
                  groupSeparator: c.group,
                  decimalSeparator: c.separator
                });
                a.emit("Game.LocaleCurrencyFormatChanged", c);
              });
            },
            subscribeGameInfoUpdateSuccessEvent: function (a, b) {
              var c = Z();
              c.on("Game.GameInfoUpdateSuccess", function (d) {
                var e = d.payload;
                a.updateGameInfo(e);
                var f = a.playerModel.playerName;
                var g = e.dt.ls.si.sid;
                qa("version: " + a.systemModel.version + "\nuser: " + f + "\nspinid: " + g);
                b(function () {
                  c.emit("Game.WalletChangedSuccess");
                });
              });
            },
            subscribeGameBalanceUpdateEvent: function (a, b) {
              var c = Z();
              c.on("Game.UpdateTransactionInfo", function (d) {
                var e = d.payload;
                var f = (e.balance || 0) + (e.freeBalance || 0);
                if (a.isGameReplaying) {
                  Yd.push(f);
                  if (Yd.length === 1) {
                    c.once("Game.ReplayQuit", function () {
                      for (var c = 0, d = Yd.length; c < d; c++) {
                        var e = Yd[c];
                        a.playerModel.balance = e;
                        b(e);
                      }
                      Yd = [];
                    });
                  }
                } else {
                  a.playerModel.balance = f;
                  b(f);
                }
              });
            },
            subscribeGameLoginEvent: function (a, b) {
              var c = Z();
              c.on("Game.RequestLogin", function (c) {
                var d = c.payload;
                a.systemModel.betType = d.betType;
                a.playerModel.walletKey = d.walletKey;
                if (b) {
                  b();
                }
              });
              c.on("Game.LoginStateChanged", function (b) {
                if (b.payload === "Complete") {
                  var c = a.playerModel.playerName;
                  var d = a.transactionModel.transactionId;
                  qa("version: " + a.systemModel.version + "\nuser: " + c + "\nspinid: " + d);
                }
              });
            },
            subscribeTweaksOnShowEvent: function () {},
            subscribeTweaksOnDismissEvent: function () {},
            subscribeGameLayoutInfoRequestEvent: function (a) {
              Z().on("Game.RequestLayoutInfo", function (b) {
                b.response = a;
              });
            },
            subscribeGamePlayUIBlockEvent: function () {
              var a = Z();
              a.on("Game.BlockUI", de);
              (function (a) {
                a.on("Game.TransactionStatePaused", Hd, undefined);
              })(a);
            },
            subscribeGameConfigRequestEvent: function (a) {
              var b = Z();
              var c = a.systemModel;
              var d = c.version;
              var e = c.certifiedVersion;
              var f = c.gameTitle;
              var g = c.noAudio;
              var h = c.operatorJurisdiction.replayVersion;
              b.on("Game.RequestConfig", function (a) {
                a.response = {
                  version: d,
                  certifiedVersion: e,
                  gameTitle: f,
                  noAudio: g,
                  replaySupported: h > 0,
                  replayVersion: h
                };
              });
            },
            subscribeGameConfigUpdateEvent: function () {
              Z().on("Game.UpdateConfig", function (a) {
                var b = a.payload;
                if (b) {
                  if (b.retryConfig) {
                    Db.setRetryHandlerConfig(b.retryConfig);
                  }
                  if (b.redirectUrl) {
                    eb.setCustomRedirectUrl(b.redirectUrl);
                  }
                }
              });
            },
            subscribePlayerInfoRequestEvent: function (a) {
              Z().on("Game.RequestPlayerInfo", function (b) {
                var c = a.playerModel;
                var d = c.playerId;
                var e = c.playerName;
                var f = c.playerNickname;
                var g = c.currencySymbol;
                var h = c.walletKey;
                b.response = {
                  playerId: d,
                  playerName: e,
                  playerNickname: f,
                  currencySymbol: g,
                  walletKey: h
                };
              });
            },
            subscribeGameReadyEvent: function () {
              var a = Z();
              a.on("Shell.BootStateChanged", function (b) {
                if (b.payload === "GameReady") {
                  a.emit("Analytics.Event", {
                    actionName: "LoadGameComplete"
                  });
                }
              });
            },
            subscribeGameInfoUpdateEvent: function (a, b) {
              var c = Z();
              c.on("Game.UpdateGameInfo", function (d) {
                var e = d.payload;
                var f = e.param;
                var g = e.callback;
                Ad.doAPIRequest({
                  name: "update game info",
                  apiRequest: a.updateGameInfo.bind(a),
                  apiRequestParam: f,
                  errorTitle: shell.I18n.t("General.ErrorChangeFailed")
                }, function (a, d) {
                  if (g) {
                    g(a, d);
                  }
                  if (!a && d) {
                    b(function () {
                      c.emit("Game.WalletChangedSuccess");
                    });
                  }
                });
              });
            },
            subscribeAudioPlayRateUpdateEvent: function (a) {
              if (a) {
                Z().on("Game.SetAudioPlayRate", function (b) {
                  a(b.payload);
                });
              }
            },
            subscribeStoredGamesNameRequestEvent: function () {
              Z().on("Game.RequestGameNames", function (a) {
                a.response = Cd.getGameNamesFromStorage();
              });
            },
            subscribeSessionSocketErrorEvent: function (a) {
              Z().on("Game.OperatorSocketError", function (b) {
                if (a) {
                  a(b.payload);
                }
              });
            },
            subscribeSessionSocketConnectedEvent: function (a) {
              Z().on("Game.OperatorSocketConnected", function (b) {
                if (a) {
                  a(b.payload);
                }
              });
            },
            subscribeSessionSocketConnectionStatusRequestEvent: function () {
              Z().on("Game.RequestOperatorSocketConnectionStatus", function (a) {
                var b = wa.WebSocket;
                a.response = !!b && b.checkOperationSocketConnectionStatus();
              });
            },
            subscribeInUIIdleStateStatusUpdateEvent: function () {
              Z().on("Game.InUIIdleState", function (a) {
                Nd = a.payload;
                Object.keys(Vd).forEach(function (a) {
                  var b = Vd[a];
                  if (b) {
                    b(Nd);
                  }
                });
                if (Nd) {
                  var b = Object.keys(Ud);
                  if (b.length === 0) {
                    return;
                  }
                  ee = 0;
                  function a(b) {
                    var c = Ud[b];
                    ee++;
                    function d() {
                      var b = Object.keys(Ud);
                      if (ee < b.length) {
                        a(b[ee]);
                      }
                    }
                    if (c) {
                      c(true, function () {
                        if (Nd) {
                          d();
                        }
                      });
                    } else {
                      d();
                    }
                  }
                  a(b[0]);
                } else {
                  for (var c = Object.keys(Ud), d = 0; d < ee; d++) {
                    var e = Ud[c[d]];
                    if (e) {
                      e(false);
                    }
                  }
                }
              });
            },
            subscribeGameRequestQuitEvent: function () {
              Z().on("Game.Quit", function (a) {
                mb.quitGameWithEvent(a.payload || "unknown");
              });
            },
            subscribeGameFlowStateRequestEvent: function () {
              Z().on("Game.RequestGameFlowState", function (a) {
                a.response = be;
              });
            },
            subscribeGameEffectStateRequestEvent: function () {
              Z().on("Game.RequestGameDisplayState", function (a) {
                a.response = ce;
              });
            },
            subscribeUIIdleStateRequestEvent: function () {
              Z().on("Game.RequestUIIdleState", function (a) {
                a.response = Nd;
              });
            },
            subscribeRequestPlayEvent: function (a) {
              Z().on("Game.RequestPlay", function (b) {
                var c = b.payload.totalBet;
                function d(a, c) {
                  var d;
                  if (c) {
                    d = new (0, shell.Error)(shell.ClientError.Domain, c);
                  }
                  if (b.response) {
                    b.response.result = a;
                    b.response.error = d;
                  } else {
                    b.response = {
                      result: a,
                      error: d
                    };
                  }
                }
                if (!a.isGameReplaying && c < a.playerModel.minimumBetAmount) {
                  d("InvalidAmount", 1017);
                } else if (!b.response) {
                  d("NoError");
                }
              });
            },
            emitGameStateChangedEvent: fe,
            emitGameFlowStateChangedEvent: function (a) {
              be = a;
              Z().emit("Game.FlowStateChanged", a);
            },
            emitGameEffectStateChangedEvent: function (a) {
              ce = a;
              Z().emit("Game.DisplayStateChanged", a);
            },
            emitGameWinAnnouncement: function () {},
            emitLoginDoneEvent: function (a) {
              var b = Z();
              var c = a.systemModel;
              var d = c.gameId;
              var e = c.operatorToken;
              var f = c.operatorPlayerSession;
              var g = c.betType;
              var h = c.platform;
              var i = c.apiDomain;
              var j = c.operatorJurisdiction;
              var k = a.playerModel;
              var l = {
                gameId: d,
                token: k.token,
                operatorToken: e,
                sessionId: f,
                playerName: k.playerName,
                playerId: k.playerId,
                betType: g,
                platform: h,
                apiDomain: i,
                currencySymbol: k.currencySymbol,
                operatorJurisdictionConfig: j,
                serviceEngineUrl: a.systemModel.getFullServiceEngineUrl(),
                gameEngineUrl: a.systemModel.getFullGameEngineUrl()
              };
              b.emit("Game.SessionChanged", l);
            },
            emitGameLoginEvent: function (a) {
              Z().emit("Game.LoginStateChanged", a);
            },
            emitGameNotifyPauseEvent: function () {
              if (Md === Jd.PAUSE_GAME) {
                fe("Pause");
              }
            },
            emitAutoplayStartedEvent: function (a) {
              if (!Xd) {
                var b = Z();
                Rd = function () {
                  Xd = false;
                  if (a) {
                    a();
                  }
                  b.emit("Game.AutoplayStateChanged", "Stop");
                };
                Xd = true;
                b.emit("Game.AutoplayStateChanged", "Start");
                b.once("Game.StopAutoplay", Rd);
              }
            },
            emitAutoplayStoppedEvent: function () {
              if (Xd) {
                Xd = false;
                var a = Z();
                a.emit("Game.AutoplayStateChanged", "Stop");
                a.off("Game.StopAutoplay", Rd);
              }
            },
            emitErrorLogEvent: function (a, b) {
              Z().emit("Error.Log", {
                tag: a,
                message: b
              });
            },
            emitGamePlayUIBlockEvent: function (a) {
              Z().emit("Game.BlockUI", a);
            },
            emitRequestPlayEvent: function (a, b) {
              Z().emit("Game.RequestPlay", a, function (a) {
                if (b) {
                  b(!a.response || a.response.result === "NoError");
                }
              });
            },
            subscribeGamePauseEvent: function () {
              var a = Z();
              a.on("Game.Pause", function (b) {
                $d++;
                if (Md !== Jd.PAUSE_GAME) {
                  Md = Jd.PAUSE_GAME;
                  var c = b.payload;
                  if (!!c && c.isBlocked && !Wd) {
                    a.emit("Shell.EnableUIBlock", true);
                    Wd = true;
                  }
                  Object.keys(Od).forEach(function (a) {
                    var b = Od[a];
                    if (b) {
                      b();
                    }
                  });
                }
              });
            },
            subscribeGameResumeEvent: function () {
              var a = Z();
              a.on("Game.Resume", function () {
                if (Md !== Jd.RESUME_GAME) {
                  if (!(--$d > 0)) {
                    Md = Jd.RESUME_GAME;
                    if (Wd) {
                      a.emit("Shell.EnableUIBlock", false);
                      Wd = false;
                    }
                    Object.keys(Pd).forEach(function (a) {
                      var b = Pd[a];
                      if (b) {
                        b();
                      }
                    });
                    if (Zd === "Pause") {
                      fe("Resume");
                    }
                  }
                }
              });
            },
            addGamePauseEventCallback: function (a, b) {
              Od[a] = b;
              if (Md === Jd.PAUSE_GAME && b) {
                b();
              }
            },
            addGameResumeEventCallback: function (a, b) {
              Pd[a] = b;
              if (Md === Jd.RESUME_GAME && b) {
                b();
              }
            },
            removeGamePauseEventCallback: function (a) {
              if (Object.keys(Od).indexOf(a) !== -1) {
                Od[a] = undefined;
              }
            },
            removeGameResumeEventCallback: function (a) {
              if (Object.keys(Pd).indexOf(a) !== -1) {
                Pd[a] = undefined;
              }
            },
            addTransactionInfoChangedEventCallback: ge,
            removeTransactionInfoChangedEventCallback: function (a) {
              if (Object.keys(Td).indexOf(a) !== -1) {
                Td[a] = undefined;
              }
            },
            addInUIIdleStateCallback: function (a, b, c) {
              if (b) {
                Vd[a] = c;
              } else {
                Ud[a] = c;
              }
            },
            removeInUIIdleStateCallback: function (a) {
              if (Object.keys(Ud).indexOf(a) !== -1) {
                Ud[a] = undefined;
              }
              if (Object.keys(Vd).indexOf(a) !== -1) {
                Vd[a] = undefined;
              }
            },
            isGameStatePaused: function () {
              return Md === Jd.PAUSE_GAME;
            }
          });
          function ie(a) {
            (function (a) {
              return p(this, undefined, undefined, function () {
                var b;
                var c;
                return s(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (b = [S])[1] = L;
                      b[2] = V;
                      return [4, G(b)()];
                    case 1:
                      if (e.sent()) {
                        c = function (a) {
                          return function (b) {
                            return p(this, undefined, undefined, function () {
                              var c;
                              var e;
                              var f;
                              return s(this, function (g) {
                                switch (g.label) {
                                  case 0:
                                    if (typeof b == "string") {
                                      if ((c = d.document[I("rgetElementById")](b)) == null) {
                                        return [2, false];
                                      }
                                      b = c;
                                    }
                                    if (!(e = b[J("endataset")].rev) || e.length <= d.Number("0x4")) {
                                      return [2, false];
                                    } else {
                                      f = (f = b[I("etextContent")] || "").trim();
                                      return [4, a(f, e)];
                                    }
                                  case 1:
                                    return [2, g.sent()];
                                }
                              });
                            });
                          };
                        }(Y(a));
                        return [4, c(I("imain-script"))];
                      } else {
                        return [3, 3];
                      }
                    case 2:
                      return [2, e.sent()];
                    case 3:
                      return [2, true];
                  }
                });
              });
            })(J("stQ22cRMoV3wAHqv52")).then(function (b) {
              a.response = b;
              a.propagate();
            }, function () {
              a.response = false;
              a.propagate();
            });
            a.intercept();
          }
          function je(a, b, c) {
            function d() {
              a.login(function (a) {
                var e;
                if (a) {
                  ob.handleCommonError("Login Error", a, "Launch", d);
                } else {
                  e = b;
                  he.emitLoginDoneEvent(e);
                  (Z().on("Game.TransactionStateEnded", ie, undefined), function (a) {
                    if (a) {
                      a();
                    }
                  })(c);
                }
              });
            }
            d();
          }
          var ke = v.sequenceCallback;
          function le(a) {
            var b = document.getElementById("game-overlay");
            var c = b ? parseFloat(b.style.height) * 0.5 : 0;
            var d = {
              label: shell.I18n.t("General.ResourceLoadingMessage"),
              y: c,
              opacity: 1,
              enableBackground: true,
              isFullBackground: true,
              inValue: 0,
              inDuration: 0.3,
              outValue: 0,
              outDuration: 0.3
            };
            Z().emit("Loading.Show", d);
            if (a) {
              a();
            }
          }
          function me() {
            he.emitGameLoginEvent("Complete");
            Z().emit("Loading.Hide");
          }
          var ne;
          var oe;
          function pe(a) {
            var b;
            var c;
            var d;
            ke(le, function (a) {
              return function (b) {
                var c;
                var d;
                c = a.systemModel.operatorJurisdiction.gamePluginList;
                d = $();
                c.forEach(function (a) {
                  var b = d.queryBundle(a.name);
                  if (b) {
                    d.destroyBundle(b);
                  }
                });
                if (b) {
                  b();
                }
              };
            }(a.dataSource), (c = a.apiClient, d = a.dataSource, function (a) {
              je(c, d, a);
            }), function (a) {
              return function (b) {
                pb(a.systemModel.operatorJurisdiction.gamePluginList, b);
              };
            }(a.dataSource), function (a) {
              return function (b) {
                Ad.doAPIRequest({
                  name: "get game info",
                  apiRequest: a.getGameInfo.bind(a),
                  apiRequestParam: {},
                  errorTitle: shell.I18n.t("General.ErrorChangeFailed"),
                  finalCallback: b
                });
              };
            }(a.apiClient), (b = a.refreshWorldCallback, function (a) {
              b(a);
            }))(me);
          }
          (function (a) {
            a.bv_Kn = "_config";
            a.bv_Xn = "_map";
          })(ne || (ne = {}));
          var qe;
          var re = [];
          function se() {
            if (!oe) {
              throw Error("ResourceQualifierHelper :: instance is not init!");
            }
          }
          function te(a) {
            var b = cc.assetManager.getBundle(a);
            if (!b) {
              throw Error(`ResourceQualifierHelper :: bundle ${a} doesn't exist!`);
            }
            return b;
          }
          function ue(a, b) {
            if (!b || !b.language) {
              var c = shell.I18n.locale();
              var d = c.indexOf("-");
              if (d !== -1) {
                b = b || Object.create(null);
                var e = c.substring(d + 1);
                b.language = function (a) {
                  if (a === e) {
                    return 1;
                  } else {
                    return 0;
                  }
                };
              }
            }
            (function (a) {
              delete a.browser;
              delete a.os;
            })(a);
            oe = new shell.ResourceQualifier(a, b);
            ve(cc.resources.name);
          }
          function ve(a) {
            se();
            if (re.indexOf(a) === -1) {
              var b = te(a);
              var c = oe.assetTable;
              var d = `@${b.name}/`;
              var e = Object.keys(b[ne.bv_Kn].paths[ne.bv_Xn]).map(function (a) {
                return `${d}${a}`;
              });
              re.push(a);
              if (c && Array.isArray(c)) {
                c.push.apply(c, e);
              } else {
                oe.setAssetTable(e, true);
              }
            }
          }
          a("ResourceQualifierHelper", Object.freeze({
            "__proto__": null,
            addBuiltinBundles: function () {
              var a = cc.AssetManager.BuiltinBundleName;
              for (var b in a) {
                var c = a[b];
                if (cc.assetManager.getBundle(c)) {
                  ve(c);
                }
              }
            },
            addBundle: ve,
            getResourceURL: function (a, b) {
              se();
              if (typeof a != "string") {
                throw Error(`ResourceQualifierHelper :: getResourceURL : url ${a} is not string type!`);
              }
              var c;
              var d = !a.startsWith("@");
              var e = a;
              if (d) {
                c = `@${cc.resources.name}/`;
                e = `${c}${a}`;
              }
              var f = oe.getResourceURL(e, b);
              if (f && d) {
                f = f.substring(c.length);
              }
              return f;
            },
            init: ue,
            removeBundle: function (a) {
              se();
              if (re.indexOf(a) !== -1) {
                var b = te(a);
                var c = `@${b.name}/`;
                var d = oe.assetTable;
                re.splice(re.indexOf(a), 1);
                oe.setAssetTable(d.filter(function (a) {
                  return !a.startsWith(c);
                }), true);
              }
            }
          }));
          (function (a) {
            a.Slot = "slot";
            a.Card = "card";
            a.Others = "others";
            a.RealTime = "rt";
          })(qe || (qe = {}));
          var we = ["GameReplay", "SlotServices", "TSMServices", "TransactionStateMachine", "WebSocket"];
          var Wc = ["TSMServices", "TransactionStateMachine", "WebSocket"];
          var xe = ["WebSocket"];
          var ye = new (function () {
            function a() {}
            Object.defineProperty(a.prototype, "context", {
              get: function () {
                return this.bv_Zn;
              },
              set: function (a) {
                this.bv_Zn = a;
              },
              enumerable: false,
              configurable: true
            });
            return a;
          }())();
          var ze = {
            position: "relative",
            fontSize: "12px",
            color: "white",
            right: "-15px",
            animation: "fade 0.5s linear 0s 1 normal forwards",
            textAlign: "center",
            width: "25px"
          };
          var Ae = {
            position: "relative",
            fontSize: "12px",
            color: "white",
            right: "-38px",
            bottom: "18px",
            animation: "fadeAway 0.25s linear 0s 1 normal forwards"
          };
          var Be = function (a) {
            function c(b) {
              var c = a.call(this, b) || this;
              c.bv_Jn = false;
              c.bv_$n = false;
              c.bv_te = false;
              c.bv_ne = 0;
              c.bv_ee = 0;
              c.bv_ie = function (a) {
                var b = document[c.bv_re];
                if (b = b || a.hidden) {
                  c.bv_oe();
                } else {
                  c.bv_ae();
                }
              };
              c.bv_ue = function () {
                if (c.bv_ce.current) {
                  c.bv_ce.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                  c.bv_ce.current.removeEventListener("animationend", c.bv_ue);
                }
              };
              c.bv_se = b.recordTimeLimit;
              c.bv_le = b.recordTimeLimit;
              c.state = {
                timer: c.bv_se
              };
              c.bv_fe = c.bv_ae.bind(c);
              c.bv_he = c.bv_oe.bind(c);
              var d = ye.context.event;
              d.on("Game.PauseReplay", c.bv_oe, c);
              d.on("Game.ResumeReplay", c.bv_ae, c);
              c.bv_ce = n.createRef();
              return c;
            }
            b(c, a);
            c.prototype.shouldComponentUpdate = function (a, b) {
              return !(this.state.timer > 0 && this.state.timer === b.timer);
            };
            c.prototype.componentDidUpdate = function () {
              if (this.props.recordState === 3) {
                if (this.state.timer === 10) {
                  if (this.props.updateRecordBtnStyleCallback) {
                    this.props.updateRecordBtnStyleCallback();
                  }
                } else if (this.state.timer === 5 && this.bv_ce.current) {
                  this.bv_ce.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                }
              }
              if (this.state.timer <= 0) {
                this.bv_de();
                clearInterval(this.bv_ve);
                this.props.updateRecordBtnCallback();
                return;
              }
              if (this.props.recordState === 4) {
                this.bv_de();
                clearInterval(this.bv_ve);
                if (this.bv_ce.current) {
                  this.bv_ce.current.removeEventListener("animationend", this.bv_ue);
                }
              }
            };
            c.prototype.componentDidMount = function () {
              this.bv_me();
              this.bv_be();
              if (this.state.timer <= 10) {
                if (this.props.updateRecordBtnStyleCallback) {
                  this.props.updateRecordBtnStyleCallback();
                }
                if (this.state.timer <= 5 && this.bv_ce.current) {
                  this.bv_ce.current.addEventListener("animationend", this.bv_ue);
                }
              }
            };
            c.prototype.componentWillUnmount = function () {
              this.bv_de();
              clearInterval(this.bv_ve);
              var a = ye.context.event;
              a.off("Game.PauseReplay", this.bv_oe, this);
              a.off("Game.ResumeReplay", this.bv_ae, this);
            };
            c.prototype.render = function () {
              if (this.state.timer > 10) {
                return null;
              }
              var a = function (a) {
                switch (a) {
                  case 3:
                    return ze;
                  case 4:
                    return Ae;
                  default:
                    return;
                }
              }(this.props.recordState);
              return n.createElement("span", {
                className: "replay-record-time",
                style: a,
                ref: this.bv_ce
              }, this.state.timer);
            };
            c.prototype.bv_be = function () {
              this.bv_ne = Date.now();
              this.bv_pe();
            };
            c.prototype.bv_pe = function () {
              this.bv_ge();
              this.bv_ve = d.setInterval(this.bv_ge.bind(this), 1000);
            };
            c.prototype.bv_ge = function () {
              var a = Date.now() - this.bv_ne;
              var b = Math.floor(a / 1000);
              this.bv_se = this.bv_le - b;
              if (this.bv_se <= 10) {
                this.setState({
                  timer: this.bv_se
                });
              }
            };
            c.prototype.bv_ae = function (a) {
              this.bv_te = a !== undefined;
              if (!(this.bv_$n && !this.bv_te)) {
                if (this.bv_Jn) {
                  this.bv_Jn = false;
                  this.bv_ne = Date.now() - this.bv_ee;
                  this.bv_pe();
                }
                this.bv_$n = false;
              }
            };
            c.prototype.bv_oe = function (a) {
              if (!this.bv_$n) {
                if (!this.bv_Jn) {
                  this.bv_Jn = true;
                  this.bv_ee = Date.now() - this.bv_ne;
                  clearInterval(this.bv_ve);
                }
                this.bv_$n = a !== undefined;
              }
            };
            c.prototype.bv_me = function () {
              if (document.hidden !== undefined) {
                this.bv_re = "hidden";
              } else if (document.mozHidden !== undefined) {
                this.bv_re = "mozHidden";
              } else if (document.msHidden !== undefined) {
                this.bv_re = "msHidden";
              } else if (document.webkitHidden !== undefined) {
                this.bv_re = "webkitHidden";
              }
              if (this.bv_re) {
                this.bv_Se = ["visibilitychange", "mozvisibilitychange", "msvisibilitychange", "webkitvisibilitychange", "qbrowserVisibilityChange"];
                for (var a = 0, b = this.bv_Se.length; a < b; a++) {
                  document.addEventListener(this.bv_Se[a], this.bv_ie);
                }
              } else {
                d.addEventListener("blur", this.bv_he);
                d.addEventListener("focus", this.bv_fe);
              }
            };
            c.prototype.bv_de = function () {
              if (this.bv_re) {
                for (var a = 0, b = this.bv_Se.length; a < b; a++) {
                  document.removeEventListener(this.bv_Se[a], this.bv_ie);
                }
              } else {
                d.removeEventListener("blur", this.bv_he);
                d.removeEventListener("focus", this.bv_fe);
              }
            };
            return c;
          }(n.Component);
          var Ce = {
            backgroundColor: "rgb(48, 48, 60, 0)"
          };
          var De = {
            animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
            backgroundColor: "rgb(48, 48, 60, 0)"
          };
          var Ee = {
            backgroundColor: "rgb(48, 48, 60, 1)"
          };
          var Fe = {
            animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
            backgroundColor: "rgb(48, 48, 60, 1)"
          };
          var Ge = {
            pointerEvents: "none",
            opacity: "0.5"
          };
          var He = {
            animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
            pointerEvents: "none",
            opacity: "0.5"
          };
          var Ie = {
            animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
            pointerEvents: "none"
          };
          var Je = {
            pointerEvents: "none"
          };
          var Ke = {
            position: "relative",
            display: "flex",
            width: "36px",
            height: "inherit",
            justifyContent: "center",
            alignItems: "center"
          };
          var Le = {
            position: "relative",
            width: "36px",
            height: "inherit",
            justifyContent: "center",
            alignItems: "center"
          };
          var Me = {
            width: "36px",
            height: "inherit"
          };
          var Ne = {
            position: "absolute",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "white",
            transform: "translate(4px, 4px)"
          };
          var Oe = {
            position: "absolute",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "rgb(48, 48, 60)",
            transform: "translate(6px, 6px)"
          };
          var Pe = {
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "rgb(255, 8, 69)",
            transform: "translate(8px, 8px)"
          };
          var Qe = {
            position: "absolute",
            width: "12px",
            height: "12px",
            borderRadius: "2px",
            backgroundColor: "rgb(255, 8, 69)",
            animation: "fading 0.5s linear 0s infinite alternate",
            transform: "translate(12px, 12px)"
          };
          function Id(a) {
            switch (a) {
              case 1:
                return 2;
              case 3:
                return 4;
              case 2:
              case 4:
                return a;
              default:
                return 1;
            }
          }
          var Re = function (a) {
            function c(b) {
              var c = a.call(this, b) || this;
              c.bv_le = 0;
              c.state = {
                recordState: 1,
                isPause: false
              };
              var d = ye.context.event;
              d.on("Game.RecordingStopped", c.bv_ye, c);
              d.on("Game.PauseReplay", c.bv_oe, c);
              d.on("Game.ResumeReplay", c.bv_ae, c);
              c.bv_Ge = n.createRef();
              c.bv_we = n.createRef();
              return c;
            }
            b(c, a);
            c.prototype.componentWillUnmount = function () {
              var a = ye.context.event;
              a.off("Game.RecordingStopped", this.bv_ye, this);
              a.off("Game.PauseReplay", this.bv_oe, this);
              a.off("Game.ResumeReplay", this.bv_ae, this);
            };
            c.prototype.render = function () {
              var a = this;
              var b = this.state.isPause;
              var c = this.state.recordState;
              var d = function (a) {
                switch (a) {
                  case 1:
                  case 2:
                    return 3;
                  default:
                    return 1;
                }
              }(c);
              return n.createElement("div", {
                id: "replay-record-btn-bg",
                style: this.bv_Ce(c, b),
                ref: this.bv_Ge
              }, n.createElement("div", {
                id: "replay-record-btn",
                onClick: function () {
                  a.setState({
                    recordState: Id(c)
                  });
                  a.props.onClickCallback(d, function (b) {
                    a.bv_le = b || -1;
                    a.setState({
                      recordState: d
                    });
                  }, true);
                },
                style: this.bv_Te(c, b),
                ref: this.bv_we
              }, this.bv_Oe(c)));
            };
            c.prototype.bv_Ce = function (a, b) {
              switch (a) {
                case 1:
                case 3:
                case 2:
                  if (b) {
                    return Ee;
                  } else {
                    return Ce;
                  }
                case 4:
                  if (this.bv_Ge.current && this.bv_Ge.current.style.animation) {
                    if (b) {
                      return Fe;
                    } else {
                      return De;
                    }
                  } else if (b) {
                    return Ee;
                  } else {
                    return Ce;
                  }
                default:
                  return;
              }
            };
            c.prototype.bv_Te = function (a, b) {
              switch (a) {
                case 1:
                case 3:
                  if (b) {
                    return Ge;
                  } else {
                    return undefined;
                  }
                case 2:
                  if (b) {
                    return Ge;
                  } else {
                    return Je;
                  }
                case 4:
                  if (this.bv_we.current && this.bv_we.current.style.animation) {
                    if (b) {
                      return He;
                    } else {
                      return Ie;
                    }
                  } else if (b) {
                    return Ge;
                  } else {
                    return Je;
                  }
                default:
                  return;
              }
            };
            c.prototype.bv_Oe = function (a) {
              var b = this;
              switch (a) {
                case 1:
                  return n.createElement("span", {
                    className: "replay-record-icon-wrapper",
                    style: Me
                  }, n.createElement("span", {
                    className: "replay-record-base-icon",
                    style: Ne
                  }), n.createElement("span", {
                    className: "replay-record-base-circle-icon",
                    style: Oe
                  }), n.createElement("span", {
                    className: "replay-record-circle-icon",
                    style: Pe
                  }));
                case 2:
                  return n.createElement("div", {
                    className: "loader"
                  });
                case 3:
                  return n.createElement("span", {
                    className: "replay-record-container",
                    style: Ke
                  }, n.createElement("span", {
                    className: "replay-record-icon-wrapper",
                    style: Me
                  }, n.createElement("span", {
                    className: "replay-record-base-icon",
                    style: Ne
                  }), n.createElement("span", {
                    className: "replay-record-base-circle-icon",
                    style: Oe
                  }), n.createElement("span", {
                    className: "replay-record-square-icon",
                    style: Qe
                  })), this.bv_le !== -1 && n.createElement(Be, {
                    recordState: 3,
                    recordTimeLimit: this.bv_le,
                    updateRecordBtnCallback: function () {
                      b.setState({
                        recordState: 4
                      });
                    },
                    updateRecordBtnStyleCallback: function () {
                      if (b.bv_Ge.current) {
                        b.bv_Ge.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                      }
                      if (b.bv_we.current) {
                        b.bv_we.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                        b.bv_we.current.style.pointerEvents = "auto";
                      }
                    }
                  }));
                case 4:
                  return n.createElement("span", {
                    className: "replay-record-container",
                    style: Le
                  }, n.createElement("div", {
                    className: "loader"
                  }), this.bv_le !== -1 && n.createElement(Be, {
                    recordState: 4,
                    recordTimeLimit: this.bv_le,
                    updateRecordBtnCallback: function () {
                      b.props.onClickCallback(1, function () {
                        b.setState({
                          recordState: 1
                        });
                      }, true);
                    }
                  }));
                default:
                  return null;
              }
            };
            c.prototype.bv_ye = function () {
              var a = this;
              if (this.bv_Ge.current) {
                this.bv_Ge.current.style.removeProperty("animation");
              }
              if (this.bv_we.current) {
                this.bv_we.current.style.removeProperty("animation");
              }
              this.props.onClickCallback(1, function () {
                a.setState({
                  recordState: 1
                });
              }, false);
            };
            c.prototype.bv_oe = function () {
              this.setState({
                isPause: true
              });
            };
            c.prototype.bv_ae = function () {
              this.setState({
                isPause: false
              });
            };
            return c;
          }(n.Component);
          var Se = {
            pointerEvents: "none"
          };
          var Te = {
            position: "absolute",
            width: "16px",
            height: "16px",
            borderRadius: "1px",
            backgroundColor: "rgb(255, 255, 255)",
            transform: "translate(10.5px, 10.5px)"
          };
          var Ue = {
            position: "absolute",
            width: "12px",
            height: "12px",
            backgroundColor: "rgb(48, 48, 60)",
            transform: "translate(12.5px, 12.5px)"
          };
          var Ve = {
            position: "absolute",
            width: "6px",
            height: "18px",
            backgroundColor: "rgb(48, 48, 60)",
            transform: "translate(15.5px, 9.5px)"
          };
          var We = {
            position: "absolute",
            width: "18px",
            height: "6px",
            backgroundColor: "rgb(48, 48, 60)",
            transform: "translate(9.5px, 15.5px)"
          };
          function Ib() {
            var a = document.getElementById("replay-capture-effect");
            if (a) {
              var b = document.getElementById("game-replay");
              a.removeEventListener("animationend", Ib);
              if (b) {
                b.removeChild(a);
              }
            }
          }
          function Xe(a) {
            var b = o(true);
            var c = b[0];
            var d = b[1];
            q(function () {
              return function () {
                Ib();
              };
            }, []);
            return n.createElement("div", {
              id: "replay-capture-btn",
              onClick: function () {
                d(false);
                (function () {
                  var a = document.getElementById("game-replay");
                  if (a) {
                    var b = document.createElement("div");
                    var c = document.createAttribute("id");
                    c.value = "replay-capture-effect";
                    b.setAttributeNode(c);
                    a.appendChild(b);
                    b.style.width = a.style.width;
                    b.style.height = a.style.height;
                    b.style.background = "white";
                    b.style.borderRadius = "5px";
                    b.style.animation = "captureEffect 0.2s ease-in-out 0s 2 alternate forwards";
                    b.addEventListener("animationend", Ib);
                  }
                })();
                a.onClickCallback(function () {
                  d(true);
                });
              },
              style: c ? undefined : Se
            }, function (a) {
              if (a) {
                return n.createElement("span", {
                  className: "replay-capture-container"
                }, n.createElement("span", {
                  className: "replay-capture-base-icon",
                  style: Te
                }), n.createElement("span", {
                  className: "replay-capture-square-icon",
                  style: Ue
                }), n.createElement("span", {
                  className: "replay-capture-vertical-rec-icon",
                  style: Ve
                }), n.createElement("span", {
                  className: "replay-capture-horizontal-rec-icon",
                  style: We
                }));
              } else {
                return n.createElement("div", {
                  className: "loader"
                });
              }
            }(c));
          }
          var Ye = {
            display: "flex",
            height: "36px",
            position: "absolute",
            width: "inherit",
            justifyContent: "space-between"
          };
          var Ze = function (a) {
            function c(b) {
              var c = a.call(this, b) || this;
              c.state = {
                isShow: false
              };
              ye.context.event.on("Game.ShowRecordingUI", c.bv_Re, c);
              return c;
            }
            b(c, a);
            c.prototype.shouldComponentUpdate = function (a, b) {
              return this.state.isShow !== b.isShow;
            };
            c.prototype.componentWillUnmount = function () {
              ye.context.event.off("Game.ShowRecordingUI", this.bv_Re, this);
            };
            c.prototype.render = function () {
              if (this.state.isShow) {
                return n.createElement("div", {
                  id: "replay-recording-container-wrapper",
                  style: Ye
                }, n.createElement(Re, {
                  onClickCallback: this.props.onReplayRecordClickCallback
                }), n.createElement(Xe, {
                  onClickCallback: this.props.onReplayCaptureClickCallback
                }));
              } else {
                return null;
              }
            };
            c.prototype.bv_Re = function (a) {
              this.setState({
                isShow: a.payload
              });
            };
            return c;
          }(n.Component);
          var $e = {
            color: "white",
            cursor: "pointer"
          };
          var _e = ["½", "1", "2", "4"];
          var af = [0.5, 1, 2, 4];
          function bf(a) {
            var b = o(1);
            var c = b[0];
            var d = b[1];
            return n.createElement("div", {
              id: "replay-fast-forward-btn",
              onClick: function () {
                var b = (c + 1) % _e.length;
                a.onClickCallback(af[b]);
                d(b);
              }
            }, n.createElement("span", {
              className: "replay-fast-forword-container"
            }, n.createElement("label", {
              style: $e
            }, `${_e[c]}x`)));
          }
          var cf = {
            width: "4px",
            height: "16px",
            borderRadius: "1.5px",
            backgroundColor: "rgb(255, 255, 255)",
            margin: "3px"
          };
          var df = {
            borderStyle: "solid",
            borderWidth: "7px 0 7px 14px",
            borderColor: "transparent transparent transparent rgb(255, 255, 255)"
          };
          function ef(a) {
            var b = o(false);
            var c = b[0];
            var d = b[1];
            var e = c ? "replay-play-btn" : "replay-pause-btn";
            return n.createElement("div", {
              id: e,
              onClick: function () {
                a.onClickCallback(!c);
                d(!c);
              }
            }, function (a) {
              if (a) {
                return n.createElement("span", {
                  className: "replay-play-container"
                }, n.createElement("span", {
                  className: "replay-play-icon",
                  style: df
                }));
              } else {
                return n.createElement("span", {
                  className: "replay-pause-container"
                }, n.createElement("span", {
                  className: "replay-pause-icon",
                  style: cf
                }), n.createElement("span", {
                  className: "replay-pause-icon",
                  style: cf
                }));
              }
            }(c));
          }
          var ff = {
            width: "12px",
            height: "12px",
            borderRadius: "2px",
            backgroundColor: "rgb(255, 255, 255)"
          };
          function gf(a) {
            return n.createElement("div", {
              id: "replay-stop-btn",
              onClick: a.onClickCallback
            }, n.createElement("span", {
              className: "replay-stop-container"
            }, n.createElement("span", {
              className: "replay-stop-icon",
              style: ff
            })));
          }
          var hf = {
            display: "flex",
            position: "relative",
            height: "36px",
            width: "inherit",
            justifyContent: "center",
            margin: "0px 36px"
          };
          var jf = function (a) {
            function c(b) {
              var c = a.call(this, b) || this;
              c.state = {
                isShow: false
              };
              ye.context.event.emit("Game.RequestConfig", undefined, function (a) {
                var b = a.response.replayVersion;
                c.setState({
                  isShow: b === 2
                });
              });
              return c;
            }
            b(c, a);
            c.prototype.shouldComponentUpdate = function (a, b) {
              return this.state.isShow !== b.isShow;
            };
            c.prototype.render = function () {
              if (this.state.isShow) {
                return n.createElement("div", {
                  id: "replay-container-wrapper",
                  style: hf
                }, n.createElement("div", {
                  id: "replay-container"
                }, n.createElement(bf, {
                  onClickCallback: this.props.onFastForwardClickCallback
                }), n.createElement(ef, {
                  onClickCallback: this.props.onPauseClickCallback
                }), n.createElement(gf, {
                  onClickCallback: this.props.onStopClickCallback
                })));
              } else {
                return null;
              }
            };
            return c;
          }(n.Component);
          var kf = {
            display: "flex",
            width: "inherit",
            height: "inherit",
            flexDirection: "column",
            justifyContent: "space-between"
          };
          var lf = {
            position: "relative",
            height: "calc(100% - 15%)",
            width: "100%"
          };
          var mf = {
            display: "flex",
            width: "100%",
            height: "7%",
            justifyContent: "space-between"
          };
          var nf = {
            position: "relative",
            height: "100%",
            width: "4%"
          };
          var of = {
            display: "flex",
            width: "65%",
            justifyContent: "space-between"
          };
          var pf = {
            position: "relative",
            height: "100%",
            width: "18%"
          };
          var qf = {
            position: "relative",
            height: "calc(100% - 92%)",
            width: "100%",
            bottom: 0
          };
          var rf = {
            position: "relative",
            height: "100%",
            width: "100%"
          };
          var sf = function (a) {
            function c(b) {
              return a.call(this, b) || this;
            }
            b(c, a);
            c.prototype.render = function () {
              if (this.props.isShow) {
                return n.createElement("div", {
                  id: "replay-bg-wrapper",
                  style: kf
                }, n.createElement("span", {
                  id: "replay-top-bg",
                  style: lf,
                  onClick: this.props.onClickCallback
                }), n.createElement("span", {
                  id: "replay-center-bg-container-wrapper",
                  style: mf
                }, n.createElement("span", {
                  id: "replay-left-bg",
                  style: nf,
                  onClick: this.props.onClickCallback
                }), n.createElement("span", {
                  id: "replay-center-bg-wrapper",
                  style: of
                }, n.createElement("span", {
                  id: "replay-left-center-bg",
                  style: pf,
                  onClick: this.props.onClickCallback
                }), n.createElement("span", {
                  id: "replay-right-center-bg",
                  style: pf,
                  onClick: this.props.onClickCallback
                })), n.createElement("span", {
                  id: "replay-right-bg",
                  style: nf,
                  onClick: this.props.onClickCallback
                })), n.createElement("span", {
                  id: "replay-btm-bg",
                  style: qf,
                  onClick: this.props.onClickCallback
                }));
              } else {
                return n.createElement("div", {
                  id: "replay-bg",
                  style: rf,
                  onClick: this.props.onClickCallback
                });
              }
            };
            return c;
          }(n.Component);
          var tf = {
            position: "absolute",
            width: "inherit",
            height: "inherit"
          };
          var uf = {
            animation: "show 0.25s linear 0s 1 normal forwards"
          };
          var vf = {
            animation: "hide 0.25s linear 0s 1 normal forwards"
          };
          var Ic = function (a) {
            function c(b) {
              var c = a.call(this, b) || this;
              c.state = {
                isShow: true
              };
              return c;
            }
            b(c, a);
            c.prototype.render = function () {
              var a = this;
              var b = this.state.isShow ? uf : vf;
              return n.createElement("div", {
                id: "replay-view-wrapper",
                style: tf
              }, n.createElement("div", {
                id: "replay-view",
                style: b
              }, n.createElement(Ze, {
                onReplayRecordClickCallback: this.props.onReplayRecordClickCallback,
                onReplayCaptureClickCallback: this.props.onReplayCaptureClickCallback
              }), n.createElement(jf, {
                onFastForwardClickCallback: this.props.onFastForwardClickCallback,
                onPauseClickCallback: this.props.onPauseClickCallback,
                onStopClickCallback: this.props.onStopClickCallback
              })), n.createElement(sf, {
                isShow: this.state.isShow,
                onClickCallback: function () {
                  a.setState({
                    isShow: !a.state.isShow
                  });
                }
              }));
            };
            return c;
          }(n.Component);
          function wf(a, b) {
            var c = [];
            a.forEach(function (a) {
              c.push(function (a, b, c) {
                if (b === undefined) {
                  b = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    isRotate: false
                  };
                }
                return new Promise(function (d, e) {
                  var f = new plugin.Loader();
                  f.onLoad = function (a) {
                    var f = document.createElement("canvas");
                    var g = f.getContext("2d");
                    if (g !== null) {
                      var h = new Image();
                      h.onload = function () {
                        URL.revokeObjectURL(h.src);
                        var a = b.width === 0 ? h.width : b.width;
                        var e = b.height === 0 ? h.height : b.height;
                        f.width = a;
                        f.height = e;
                        g.clearRect(0, 0, a, e);
                        g.translate(a / 2, e / 2);
                        if (b.isRotate) {
                          g.rotate(Math.PI * 270 / 180);
                          g.drawImage(h, b.x, b.y, e, a, -e / 2, -a / 2, e, a);
                        } else {
                          g.drawImage(h, b.x, b.y, a, e, -a / 2, -e / 2, a, e);
                        }
                        var i = g.getImageData(0, 0, a, e);
                        var j = i.data;
                        if (c) {
                          for (var k = 0, l = j.length; k < l; k += 4) {
                            j[k] = c.r;
                            j[k + 1] = c.g;
                            j[k + 2] = c.b;
                          }
                        }
                        g.putImageData(i, 0, 0);
                        d(f.toDataURL());
                      };
                      h.onerror = function () {
                        e(Error("ImageBase64 load image failed"));
                      };
                      h.src = URL.createObjectURL(a.response);
                    }
                  };
                  f.onError = function (a) {
                    e(a);
                  };
                  f.load([{
                    src: a,
                    type: plugin.LoadType.Blob
                  }]);
                });
              }(a.resolvePath, {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              }, a.colour));
            });
            Promise.all(c).then(function (a) {
              var c = [];
              a.forEach(function (a) {
                c.push(a);
              });
              if (b) {
                b(c, undefined);
              }
            }).catch(function (a) {
              if (b) {
                b(undefined, a);
              }
            });
          }
          var xf = {};
          function yf(a, b) {
            var c = new plugin.Loader();
            return new Promise(function (d, e) {
              c.onLoad = function (a) {
                d(a.response);
              };
              c.onError = function (a) {
                e(a);
              };
              c.load([{
                src: a,
                type: plugin.LoadType.Image,
                maxAttemptCount: b
              }]);
            });
          }
          function zf(a, b, c) {
            var d = new plugin.Loader();
            return new Promise(function (e, f) {
              d.onLoad = function (a) {
                var c = function (a, b) {
                  return a.replace(/url\((.*?)\)/g, function (a, c) {
                    return "url(" + b.resource.resolveUrl(c) + ")";
                  });
                }(a.response, b);
                e(c);
              };
              d.onError = function (a) {
                f(a);
              };
              d.load([{
                src: a,
                type: plugin.LoadType.Text,
                maxAttemptCount: c
              }]);
            });
          }
          var Af = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.rootElement = Object.create(null);
              b.bv_Ee = undefined;
              b.bv_xe = undefined;
              return b;
            }
            b(c, a);
            c.prototype.onCreate = function () {
              var a = this;
              this.rootElement = document.createElement("div");
              var b = document.createAttribute("id");
              b.value = "game-replay";
              this.rootElement.setAttributeNode(b);
              this.rootElement.style.visibility = "hidden";
              this.rootElement.style.position = "relative";
              this.rootElement.setAttribute("tabindex", "100");
              (function (a, b, c) {
                var d;
                var e = this;
                var f = a.src;
                var g = "unknown";
                g = f.indexOf(".css") !== -1 ? "css" : g;
                g = (d = f).indexOf(".jpg") !== -1 || d.indexOf(".png") !== -1 ? "image" : g;
                var h = shell.Error;
                var i = shell.ClientError;
                var j = h && new h(i.Domain, i.GameLoadResourceError);
                var k = b.resource.resolveUrl(f);
                return new Promise(function (d, f) {
                  return __awaiter(e, undefined, undefined, function () {
                    var e;
                    return __generator(this, function (h) {
                      switch (h.label) {
                        case 0:
                          h.trys.push([0, 9,, 10]);
                          if (g !== "image") {
                            return [3, 5];
                          } else if (a.tint) {
                            return [4, (i = [{
                              resolvePath: k,
                              colour: a.tint
                            }], new Promise(function (a, b) {
                              wf(i, function (c, d) {
                                if (d || c && c.length === 0) {
                                  var e = shell.Error;
                                  var f = shell.ClientError;
                                  var g = e && new e(f.Domain, f.GameLoadResourceError);
                                  b(d || g);
                                }
                                a(c);
                              });
                            }))];
                          } else {
                            return [3, 2];
                          }
                        case 1:
                          e = h.sent();
                          d(e[0]);
                          return [3, 4];
                        case 2:
                          return [4, yf(k, c)];
                        case 3:
                          e = h.sent();
                          d(e);
                          h.label = 4;
                        case 4:
                          return [3, 8];
                        case 5:
                          if (g !== "css") {
                            return [3, 7];
                          } else {
                            return [4, zf(k, b, c)];
                          }
                        case 6:
                          e = h.sent();
                          d(e);
                          return [3, 8];
                        case 7:
                          f(j);
                          h.label = 8;
                        case 8:
                          return [3, 10];
                        case 9:
                          h.sent();
                          f(j);
                          return [3, 10];
                        case 10:
                          return [2];
                      }
                      var i;
                    });
                  });
                });
              })({
                src: "game_replay.css"
              }, this.context).then(function (b) {
                (function (a, b) {
                  var c = [];
                  var d = b.bundleInfo.name;
                  if (!xf[d]) {
                    xf[d] = [];
                  }
                  if (!Array.isArray(a)) {
                    a = [a];
                  }
                  var e = xf[d].length + 1;
                  a.forEach(function (a, d) {
                    var f = e + d;
                    var g = "$CSS-" + b.bundleInfo.name + "-" + f;
                    c.push(g);
                    (function (a, b, c) {
                      if (xf[b].indexOf(a) === -1) {
                        var d = document.createElement("style");
                        d.id = a;
                        d.innerHTML = c;
                        document.head.appendChild(d);
                        xf[b].push(a);
                      }
                    })(g, b.bundleInfo.name, a);
                  });
                })(b, a.context);
              });
              var c = this.context.event;
              c.on("Shell.Scaled", this.bv_ke, this);
              c.on("Game.ReplayStarting", this.bv_je, this);
              c.on("Game.ReplayEnded", this.bv_Ie, this);
              ye.context = this.context;
            };
            c.prototype.bv_ke = function (a) {
              var b = a.payload;
              this.rootElement.style.width = `${b.width}px`;
              this.rootElement.style.height = `${b.height}px`;
            };
            c.prototype.bv_Ae = function (a) {
              a.stopPropagation();
            };
            c.prototype.bv_je = function () {
              var a = this;
              this.context.view.appendTo(c, "overlay");
              this.rootElement.style.visibility = "visible";
              this.rootElement.focus();
              this.context.event.on("Shell.FocusCanvas", this.bv_Ae, this, "High");
              r.render(n.createElement(Ic, {
                onReplayCaptureClickCallback: function (b) {
                  a.bv_Ee = b;
                  a.context.event.emit("Game.Screenshot", undefined, function () {
                    a.context.event.emit("Analytics.Event", {
                      actionName: "CaptureReplay"
                    });
                    var b = a.bv_Ee;
                    if (b) {
                      b();
                    }
                    a.bv_Ee = undefined;
                  });
                },
                onReplayRecordClickCallback: function (b, c, d) {
                  a.bv_xe = c;
                  function e(c) {
                    if (b === 3) {
                      a.context.event.emit("Analytics.Event", {
                        actionName: "RecordReplay"
                      });
                    }
                    var d = a.bv_xe;
                    if (d) {
                      d(c);
                    }
                    a.bv_xe = undefined;
                  }
                  if (d) {
                    var f = function (a) {
                      switch (a) {
                        case 1:
                          return "Game.StopRecording";
                        case 3:
                          return "Game.StartRecording";
                        default:
                          return;
                      }
                    }(b);
                    if (f) {
                      a.context.event.emit(f, undefined, function (a) {
                        var b = a.response && a.response.timeLimit;
                        e(b);
                      });
                    }
                  } else {
                    e();
                  }
                },
                onFastForwardClickCallback: function (b) {
                  a.context.event.emit("Game.SetReplaySpeed", b);
                },
                onPauseClickCallback: function (b) {
                  var c = b ? "Game.PauseReplay" : "Game.ResumeReplay";
                  a.context.event.emit(c);
                },
                onStopClickCallback: function () {
                  a.context.event.emit("Game.StopReplay");
                  a.context.event.emit("Analytics.Event", {
                    actionName: "ManualStopReplay"
                  });
                }
              }), this.rootElement);
            };
            c.prototype.bv_Ie = function () {
              this.rootElement.style.visibility = "hidden";
              this.bv_Ee = undefined;
              this.bv_xe = undefined;
              r.unmountComponentAtNode(this.rootElement);
              this.view.removeFromParent(c);
              this.context.event.off("Shell.FocusCanvas", this.bv_Ae, this);
            };
            return c;
          }(plugin.AbstractViewComponent);
          var Bf = undefined;
          var Df = undefined;
          var Ef = undefined;
          var Ff = undefined;
          function Hf(a) {
            if (wa.TransactionStateMachine && a) {
              return a(wa.TransactionStateMachine);
            }
            throw Error("[BVFramework] ERROR: TransactionStateMachine function called but module not found!");
          }
          function If() {
            Bf = undefined;
            Df = undefined;
          }
          var Jf = a("TransactionStateMachineHandler", {
            initTransactionStateMachine: function (a) {
              Hf(function (b) {
                b.initTransactionStateMachine(a);
              });
            },
            goTo: function (a, b, c) {
              Hf(function (d) {
                d.goTo(a, b, c);
              });
            },
            subscribeStateEvent: function (a, b) {
              Hf(function (c) {
                c.subscribeStateEvent(a, b);
              });
            },
            unsubscribeStateEvent: function (a, b) {
              Hf(function (c) {
                c.unsubscribeStateEvent(a, b);
              });
            },
            getState: function () {
              return Hf(function (a) {
                return a.getState();
              });
            },
            getNextState: function () {
              return Hf(function (a) {
                return a.getNextState();
              });
            },
            addTransition: function (a, b) {
              if (b === undefined) {
                b = false;
              }
              Hf(function (c) {
                c.addTransition(a, b);
              });
            },
            pause: function () {
              Hf(function (a) {
                a.pause();
              });
            },
            resume: function () {
              Hf(function (a) {
                a.resume();
              });
            },
            initState: function (a) {
              Hf(function (b) {
                b.initTransactionStateMachine(a);
              });
            },
            setTransitionData: function (a) {
              Bf = a;
            },
            getTransitionData: function () {
              return Bf;
            },
            hasOnHoldTransition: function () {
              return Df !== undefined;
            },
            goToStateCallback: function (a, b, c) {
              if (b === undefined) {
                b = false;
              }
              return function (d) {
                Hf(function (e) {
                  if (Df) {
                    throw Error("TransactionStateMachineHandler info: goToStateCallback : cannot go to next state (" + a + ") when previous state transition (" + e.getNextState() + ") is not complete.");
                  }
                  if (b) {
                    e.goTo(a, function (a, b) {
                      Bf = g(g(g({}, Bf), a), c);
                      Df = b;
                      d();
                    }, function () {
                      var a = Ef;
                      Ef = undefined;
                      if (a) {
                        a();
                      }
                    });
                  } else {
                    e.goTo(a, function (a, b) {
                      a = g(g(g({}, Bf), a), c);
                      If();
                      b(undefined, a);
                    }, d);
                  }
                });
              };
            },
            transitionCompleteCallback: function (a, b) {
              return function (c) {
                Hf(function (d) {
                  Ef = c;
                  var e = Df;
                  if (!e) {
                    throw Error("TransactionStateMachineHandler info: transitionCompleteWrapper : no transition to complete. Current completed state: " + d.getState());
                  }
                  if (a && a !== d.getNextState()) {
                    throw Error("TransactionStateMachineHandler info: transitionCompleteWrapper : complete incorrect state. Attempted complete state: " + a + ". State suppose to complete: " + d.getNextState());
                  }
                  var f = g(g({}, Bf), b);
                  If();
                  e(undefined, f);
                });
              };
            },
            clearTransition: If,
            cacheTransitionCallback: function () {
              Ff = Df;
            },
            retrieveTransitionCallback: function () {
              if (Ff) {
                Df = Ff;
                Ff = undefined;
              }
            }
          });
          var Kf = he.emitGameFlowStateChangedEvent;
          var Lf = v.timeoutCallback;
          var Mf = v.getSharedScheduler;
          var Nf = v.delayCallback;
          var Of = function () {
            function a() {
              this.bv_Ne = 0;
              this.bv_Le = false;
              this.bv_Pe = false;
              this.bv_Me = false;
              this.bv__e = false;
              this.bv_De = false;
              this.bv_Ue = undefined;
              this.bv_He = false;
              this.bv_Fe = this.bv_Be.bind(this);
            }
            a.prototype.initGameReplay = function (a, b) {
              var c = this;
              if (b === undefined) {
                b = this.bv_Fe;
              }
              var d = Z();
              this.bv_m = a;
              d.on("Game.RequestReplay", function (e) {
                d.emit("Game.ReplayInitiated");
                c.bv_We();
                var f = c.bv_qe(e.payload);
                var g = c.bv_Ve(f);
                Jf.pause();
                a.isGameReplaying = true;
                a.nextGameReplayInfo = c.bv_Qe[0];
                c.bv_Ne = 0;
                c.bv_Le = false;
                c.bv_Pe = false;
                c.bv_De = false;
                d.once("Game.WalletChangedSuccess", function () {
                  Qf();
                  d.on("Game.DummyTransactionStateTransition", c.bv_ze, c);
                  d.emit("Game.ReplayStarting", undefined, function () {
                    d.emit("Game.BlockUI", false, function () {
                      if (a.transactionModel.stateTransitionTo === 1) {
                        c.bv_Ye = Nf(1)(function () {
                          c.bv_Ye = undefined;
                          b();
                        });
                      } else {
                        d.once("Game.DummyTransactionStateComplete", c.bv_Ke, c, "High");
                      }
                      d.once("Game.StopReplay", c.bv_Xe, c);
                    });
                  });
                  d.on("Game.PauseReplay", c.bv_Ze, c);
                  d.on("Game.ResumeReplay", c.bv_Je, c);
                  d.on("Game.SetReplaySpeed", c.bv_$e, c);
                });
                d.emit("Game.BlockUI", true);
                Pf(function () {
                  d.emit("Game.GameInfoUpdateSuccess", g);
                });
                Kf({
                  displayState: "Start",
                  flowType: "Replay"
                });
                d.on("Game.TransactionInfoChanged", c.bv_ti, c, "High");
                d.on("Game.GameInfoUpdated", c.bv_ti, c, "High");
                d.on("Game.TransactionInfoUpdated", c.bv_ti, c, "High");
              });
            };
            Object.defineProperty(a.prototype, "nextReplayAPIResponse", {
              get: function () {
                var a = this.bv_Qe;
                if (this.bv_Ne >= a.length) {
                  throw Error("GameReplayHandler :: nextReplayAPIResponse : no next data to fetch! Invalid replay data length.");
                }
                var b = a[this.bv_Ne];
                this.bv_Ne++;
                if (this.bv_Ne < a.length) {
                  this.bv_m.nextGameReplayInfo = a[this.bv_Ne];
                } else {
                  this.bv_m.nextGameReplayInfo = undefined;
                  this.bv_Le = true;
                }
                var c = Object.create(null);
                c.dt = Object.create(null);
                c.dt.si = b;
                c.dt.err = null;
                return c;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.bv_ni = function (a) {
              var b = this;
              Pf(function () {
                b.bv_ei();
                if (b.bv_Me) {
                  cc.game.resume();
                  b.bv_Me = false;
                }
                cc.director.setTimeScale(1);
                var c = Z();
                c.emit("Game.SetAudioPlayRate", 1);
                c.emit("Game.ReplayEnding", undefined, function () {
                  var c = b.bv_Ue;
                  if (c) {
                    c.propagate();
                  }
                  b.bv_Ue = undefined;
                  a();
                });
              });
            };
            a.prototype.bv_ii = function (a) {
              if (!this.bv_He) {
                this.bv_Ue = a;
                a.intercept();
              }
            };
            a.prototype.bv_Xe = function (a, b) {
              var c = this;
              if (b === undefined) {
                b = false;
              }
              var d = Z();
              d.emit("Game.ReplayEnded");
              d.off("Game.PauseReplay", this.bv_Ze, this);
              d.off("Game.ResumeReplay", this.bv_Je, this);
              d.off("Game.SetReplaySpeed", this.bv_$e, this);
              d.off("Game.StopReplay", this.bv_Xe, this);
              if (this.bv_ri) {
                var e = this.bv_ri;
                this.bv_ri = undefined;
                e();
                this.bv_ni(this.bv_oi.bind(this));
                return;
              }
              if (this.bv_Ye) {
                this.bv_Ye();
                this.bv_Ye = undefined;
                this.bv_ni(this.bv_oi.bind(this));
                return;
              }
              this.bv_Le = true;
              this.bv_Pe = true;
              this.bv_He = false;
              if (Jf.getNextState() === undefined) {
                d.once("Game.DummyTransactionStateTransition", this.bv_ii, this, "High");
              } else {
                d.once("Game.DummyTransactionStateComplete", this.bv_ii, this);
              }
              this.bv_ni(function () {
                if (!c.bv_De) {
                  c.bv_Fe();
                  Mf().schedule(c.bv_Fe, 0.5, cc.macro.REPEAT_FOREVER, 0);
                }
                c.bv_He = true;
                if (b) {
                  c.bv_oi();
                }
              });
            };
            a.prototype.bv_$e = function (a) {
              cc.director.setTimeScale(a.payload);
              if (a.payload >= 0) {
                Z().emit("Game.SetAudioPlayRate", a.payload);
              }
            };
            a.prototype.bv_Ze = function () {
              if (!this.bv_Me) {
                this.bv_Me = true;
                cc.game.pause();
              }
            };
            a.prototype.bv_Je = function () {
              if (this.bv_Me) {
                this.bv_Me = false;
                cc.game.resume();
              }
            };
            a.prototype.bv_Ke = function (a) {
              a.intercept();
              Lf(1)(function () {
                a.propagate();
              });
            };
            a.prototype.bv_Be = function () {
              Z().emit("Game.SkipEvent");
            };
            a.prototype.bv_qe = function (a) {
              var b = this.bv_m.lastTransactionRawData;
              if (typeof a == "object" && a !== null) {
                if (a.replayType === "Spin" || a.replayData.length === 1) {
                  this.bv_Qe = a.replayData;
                } else {
                  this.bv_Qe = function (a, b, c) {
                    for (var d = b, e = b, f = b; f >= 0; f--) {
                      if (Rf(a[f].st, c)) {
                        e = f;
                        break;
                      }
                    }
                    f = b;
                    for (var g = a.length; f < g; f++) {
                      if (Rf(a[f].nst, c)) {
                        d = f;
                        break;
                      }
                    }
                    return a.slice(e, d + 1);
                  }(a.replayData, a.selectedIndex, this.bv_m.systemModel.gameId);
                  var c = a.replayData.indexOf(this.bv_Qe[0]);
                  if (c !== 0) {
                    b = a.replayData[c - 1];
                  }
                }
              } else {
                this.bv_Qe = a;
              }
              return b;
            };
            a.prototype.bv_ze = function (a) {
              var b = this;
              if (!this.bv_De) {
                if (a.payload.to === "action" && this.bv_Le) {
                  this.bv_De = true;
                  Mf().unschedule(this.bv_Fe);
                  a.intercept();
                  this.bv_ai = function () {
                    a.propagate();
                  };
                  if (this.bv_Pe) {
                    this.bv_oi();
                  } else {
                    this.bv_ri = Nf(1)(function () {
                      b.bv_ri = undefined;
                      Z().emit("Analytics.Event", {
                        actionName: "AutoStopReplay"
                      });
                      b.bv_Xe(undefined, true);
                    });
                  }
                }
              }
            };
            a.prototype.bv_oi = function () {
              var a = this;
              var b = Z();
              b.once("Game.WalletChangedSuccess", function () {
                a.bv_m.isGameReplaying = false;
                a.bv_ui();
                b.emit("Game.ReplayQuit");
                Kf({
                  displayState: "End",
                  flowType: "Replay"
                });
                Qf();
                Jf.resume();
                b.off("Game.DummyTransactionStateTransition", a.bv_ze, a);
                b.off("Game.DummyTransactionStateTransition", a.bv_ii, a);
                b.off("Game.DummyTransactionStateComplete", a.bv_ii, a);
                b.off("Game.TransactionInfoChanged", a.bv_ti, a);
                b.off("Game.GameInfoUpdated", a.bv_ti, a);
                b.off("Game.TransactionInfoUpdated", a.bv_ti, a);
                var c = a.bv_ai;
                a.bv_ai = undefined;
                if (c) {
                  c();
                }
              });
              b.emit("Game.GameInfoUpdateSuccess", this.bv_ci);
            };
            a.prototype.bv_We = function () {
              var a = this.bv_m;
              var b = Object.assign({}, a.lastGameInfoRawData);
              var c = Object.assign({}, a.lastTransactionRawData);
              var d = b.dt;
              d.ls.si = c;
              d.bl = c.bl;
              this.bv_ci = b;
            };
            a.prototype.bv_Ve = function (a) {
              var b = this.bv_m;
              var c = this.bv_Qe;
              var d = b.lastGameInfoRawData.dt;
              var e = c[0];
              var f = Object.assign({}, a);
              f.cs = e.cs;
              f.ml = e.ml;
              f.wt = e.wt;
              f.wk = e.wk;
              f.wid = e.wid;
              if (e.wbn) {
                f.wbn = Object.assign({}, e.wbn);
                f.wbn.bra = f.wbn.bra + e.tbb;
              } else {
                f.wbn = null;
              }
              if (e.wfg) {
                f.wfg = Object.assign({}, e.wfg);
                f.wfg.gc++;
              } else {
                f.wfg = null;
              }
              return {
                dt: {
                  bl: e.blb,
                  cs: [e.cs],
                  fb: {
                    is: false,
                    bm: 0,
                    t: 0
                  },
                  ls: {
                    si: f
                  },
                  ml: [e.ml],
                  mxl: d.mxl,
                  wt: d.wt
                }
              };
            };
            a.prototype.bv_ti = function (a) {
              a.stopPropagation();
            };
            a.prototype.bv_ei = function () {
              var a = this;
              var b = Z();
              b.emit("Game.RequestAudioState", undefined, function (c) {
                if (c.response === "On") {
                  a.bv__e = true;
                  b.emit("Game.OffAudio");
                }
              });
            };
            a.prototype.bv_ui = function () {
              if (this.bv__e) {
                Z().emit("Game.OnAudio");
                this.bv__e = false;
              }
            };
            return a;
          }();
          function Pf(a) {
            ja({
              backgroundColor: {
                r: 47,
                g: 47,
                b: 59,
                a: 255
              }
            });
            Lf(0.6)(a);
          }
          function Qf() {
            ka();
          }
          function Rf(a, b) {
            switch (a) {
              case 1:
              case 2:
              case 21:
                return true;
              case 3:
                return b === 44;
              case 31:
                return b === 73 || b === 1 || b === 9;
              case 32:
                return b === 67 || b === 1 || b === 9;
              case 33:
                return b === 18 || b === 1 || b === 9;
              case 34:
                return b === 18;
              default:
                return false;
            }
          }
          var Gd;
          var Tf;
          var Uf;
          var Vf;
          var Wf = new Of();
          var Xf = Object.freeze({
            ON_TRANSITION: "onTransition",
            ON_TRANSITION_FAILED: "onTransitionFailed",
            ON_TRANSITION_SUCCEED: "onTransitionSucceed"
          });
          var Yf = function () {
            function a(a) {
              this.bv_si = undefined;
              this.bv_li = false;
              for (var b = this.bv_fi = Object.create(null), c = 0, d = a.length; c < d; c++) {
                var e = a[c].from;
                if (!b[e]) {
                  b[e] = Object.create(null);
                }
                b[e][a[c].to] = [[], []];
              }
              this.bv_hi = Object.create(null);
            }
            Object.defineProperty(a.prototype, "state", {
              get: function () {
                return this.bv_di;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "nextState", {
              get: function () {
                return this.bv_vi;
              },
              enumerable: false,
              configurable: true
            });
            Object.defineProperty(a.prototype, "data", {
              get: function () {
                return this.bv_si;
              },
              enumerable: false,
              configurable: true
            });
            a.prototype.emit = function (a, b) {
              var c = this.bv_hi[a];
              if (c) {
                for (var d = [], e = 0, f = c.length; e < f; e++) {
                  var g = c[e];
                  var h = g.func;
                  var i = g.bindedFunc;
                  if (g.once) {
                    d.push(this.off.bind(this, a, h));
                  }
                  if (i) {
                    i(b);
                  } else {
                    h(b);
                  }
                }
                d.forEach(function (a) {
                  return a();
                });
              }
            };
            a.prototype.once = function (a, b, c) {
              this._on(a, b, c, true);
            };
            a.prototype.on = function (a, b, c) {
              this._on(a, b, c, false);
            };
            a.prototype.off = function (a, b) {
              var c = this.bv_hi[a];
              if (c) {
                if (b) {
                  for (var d = 0, e = c.length; d < e; d++) {
                    if (c[d].func === b) {
                      c.splice(d, 1);
                      break;
                    }
                  }
                } else {
                  c.length = 0;
                }
              }
            };
            a.prototype._on = function (a, b, c, d) {
              var e = this.bv_hi;
              var f = e[a];
              if (!f) {
                f = e[a] = [];
              }
              f.push({
                func: b,
                bindedFunc: c ? b.bind(c) : undefined,
                once: d
              });
            };
            a.prototype.start = function (a) {
              this.bv_li = true;
              this.bv_di = a;
              var b = {
                from: undefined,
                to: a,
                data: undefined
              };
              this.emit(Xf.ON_TRANSITION_SUCCEED, b);
            };
            a.prototype.goTo = function (a, b, c) {
              var d = this;
              if (this.bv_vi) {
                throw Error("TransactionStateMachine :: goTo : cannot change state during transition.");
              }
              if (!this.bv_mi(a)) {
                throw Error("TransactionStateMachine :: goTo : Invalid transition from " + this.bv_di + " to " + a + ".");
              }
              var e = {
                from: this.state,
                to: a
              };
              this.emit(Xf.ON_TRANSITION, e);
              this.bv_vi = a;
              var f = this.bv_fi[this.bv_di][a];
              var g = t(b ? t(t([], f[1], true), [b], false) : t([], f[1], true), f[0], true);
              if (g.length) {
                var h = g.length - 1;
                function a(b, e) {
                  h--;
                  if (b) {
                    d.bv_bi(b || Error("abort"));
                    if (c) {
                      c(b || Error("abort"));
                    }
                  } else if (h < 0) {
                    d.bv_bi(undefined, e);
                    if (c) {
                      c(undefined, e);
                    }
                  } else {
                    g[h](e, a);
                  }
                }
                g[h](undefined, a);
              } else {
                this.bv_bi();
                if (c) {
                  c();
                }
              }
            };
            a.prototype.addTransitionHook = function (a, b) {
              if (b === undefined) {
                b = false;
              }
              if (this.bv_li) {
                throw Error("TransactionStateMachine :: addTransitionHook : cannot add hook after state machine is started.");
              }
              var c = this.bv_fi;
              Object.keys(c).forEach(function (d) {
                Object.keys(c[d]).forEach(function (e) {
                  var f = a({
                    state: d,
                    nextState: e
                  });
                  if (f) {
                    c[d][e][b ? 1 : 0].push(f);
                  }
                });
              });
            };
            a.prototype.bv_mi = function (a) {
              return Object.keys(this.bv_fi[this.state]).indexOf(a) !== -1;
            };
            a.prototype.bv_bi = function (a, b) {
              var c = this.bv_vi;
              this.bv_vi = undefined;
              if (a) {
                var d = {
                  from: this.bv_di,
                  to: c,
                  error: a
                };
                this.emit(Xf.ON_TRANSITION_FAILED, d);
              } else {
                var e = {
                  from: this.bv_di,
                  to: c,
                  data: b
                };
                this.bv_di = c;
                this.bv_si = b;
                this.emit(Xf.ON_TRANSITION_SUCCEED, e);
              }
            };
            return a;
          }();
          var Gb = new Yf([{
            from: "setup",
            to: "idle"
          }, {
            from: "idle",
            to: "action"
          }, {
            from: "action",
            to: "result"
          }, {
            from: "result",
            to: "prize"
          }, {
            from: "prize",
            to: "idle"
          }, {
            from: "result",
            to: "idle"
          }, {
            from: "prize",
            to: "setup"
          }]);
          var Zf = false;
          function $f(a, b) {
            Gb.on(a, b);
          }
          function _f(a, b) {
            Gb.off(a, b);
          }
          function bg(a) {
            var b = Z();
            Gb.addTransitionHook(function (a) {
              return function (c, d) {
                function e(a) {
                  return d(undefined, a);
                }
                function f(b) {
                  a.nextState;
                  b.message;
                  d(b);
                }
                var g = {
                  to: a.nextState,
                  reply: function (a) {
                    var b = e;
                    e = function (c) {
                      a(c).then(b, f);
                    };
                  }
                };
                b.emit("Game.TransactionStateTransition", g, function () {
                  e(c);
                });
              };
            });
            Gb.addTransitionHook(function (a) {
              return function (c, d) {
                function e(a) {
                  return d(undefined, a);
                }
                function f(b) {
                  a.nextState;
                  b.message;
                  d(b);
                }
                var g = {
                  to: a.nextState,
                  reply: function (a) {
                    var b = e;
                    e = function (c) {
                      a(c).then(b, f);
                    };
                  }
                };
                b.emit("Game.TransactionStateComplete", g, function () {
                  e(c);
                });
              };
            }, true);
            $f("onTransitionSucceed", function (a) {
              b.emit("Game.TransactionStateChanged", a);
            });
            Gb.start(a);
          }
          function cg(a, b) {
            if (b === undefined) {
              b = false;
            }
            Gb.addTransitionHook(a, b);
          }
          function dg(a, b, c) {
            if (Zf) {
              var d = Z();
              var e = {
                to: a,
                reply: function () {}
              };
              Vf = a;
              d.emit("Game.DummyTransactionStateTransition", e, function () {
                if (b) {
                  b(undefined, function (b, d) {
                    if (Zf) {
                      ig(a, c);
                    } else {
                      Tf = c;
                      var e = Gd;
                      Gd = undefined;
                      if (e) {
                        e(b, d);
                      }
                    }
                  });
                } else {
                  ig(a, c);
                }
              });
            } else {
              Gb.goTo(a, function (d, e) {
                if (b) {
                  b(d, function (b, d) {
                    if (Zf) {
                      Gd = e;
                      ig(a, c);
                    } else {
                      e(b, d);
                    }
                  });
                }
              }, function () {
                if (Tf) {
                  var a = Tf;
                  Tf = undefined;
                  a();
                } else if (c) {
                  c();
                }
              });
            }
          }
          function eg() {
            if (Zf) {
              return Uf;
            } else {
              return Gb.state;
            }
          }
          function fg() {
            if (Zf) {
              return Vf;
            } else {
              return Gb.nextState;
            }
          }
          function gg() {
            Uf = eg();
            Vf = fg();
            Zf = true;
          }
          function hg() {
            Zf = false;
          }
          function ig(a, b) {
            if (!Zf) {
              throw Error("TransactionStateMachineManager :: dummyTransactionStateComplete : Not in paused mode to call");
            }
            var c = Z();
            var d = {
              to: a,
              reply: function () {}
            };
            c.emit("Game.DummyTransactionStateComplete", d, function () {
              var d = Uf;
              Uf = Vf;
              Vf = undefined;
              c.emit("Game.DummyTransactionStateChanged", {
                from: d,
                to: a
              });
              if (b) {
                b();
              }
            });
          }
          function jg(a, b) {
            return function (c) {
              var d = Z();
              d.on("Game.TransactionStateChanged", function (c) {
                var e = c.payload;
                var f = a.transactionModel;
                var g = f.stateTransitionTo;
                var h = f.transactionId;
                var i = f.parentTransactionId;
                var j = f.accumulatedWinAmount;
                var k = f.betSizeValue;
                var l = f.betLevelValue;
                var m = f.totalBaseBet;
                var n = a.systemModel;
                var o = 0;
                if (b) {
                  o = Math.floor(b());
                } else if (n.maxLineNumber) {
                  var p = n.maxLineNumber;
                  o = Math.floor(j / (k * l * p));
                } else if (m > 0) {
                  o = Math.floor(j / m);
                }
                if (e.from === "prize" && g === 1 && o > 0) {
                  var q = {
                    parentTransactionId: i,
                    transactionId: h,
                    totalWinAmount: j,
                    winMultiplier: o
                  };
                  d.emit("Game.WinAnnouncement", q);
                }
              });
              if (c) {
                c();
              }
            };
          }
          var kg = v.deferCallback;
          var lg = new (function () {
            function a() {
              this.bv_pi = 0;
              this.bv_gi = 0;
              this.bv_Si = false;
              this.bv_De = false;
            }
            a.prototype.initTurboSuggest = function (a) {
              var b = this;
              this.bv_gi = this.bv_pi = 0;
              var c = Z();
              function d(e) {
                if (b.bv_De) {
                  b.bv_De = false;
                  c.off("Game.TransactionStateComplete", d);
                  return;
                }
                if (e.payload.to === "action" && !a.isGameReplaying) {
                  b.bv_De = true;
                  var g = shell.I18n;
                  var h = {
                    label: g.t("TurboSpinSuggest.Later"),
                    type: "Neutral",
                    handler: "later"
                  };
                  var i = {
                    label: g.t("TurboSpinSuggest.Enable"),
                    type: "Neutral",
                    handler: "enable"
                  };
                  e.intercept();
                  var j = {
                    content: g.t("TurboSpinSuggest.Message"),
                    actions: [h, i],
                    interceptable: false
                  };
                  c.emit("Alert.Show", j, function (a) {
                    if (a.response === "enable") {
                      c.emit("Game.OnTurboSpin");
                    }
                    e.propagate();
                  });
                  c.off("Game.TurboSpinStateChanged", f);
                }
              }
              function e(f) {
                if (f.payload.to === "action" && a.transactionModel.stateTransitionTo === 1 && b.bv_gi > 0) {
                  var g = b.bv_gi;
                  if (g === b.bv_pi) {
                    b.bv_gi = b.bv_pi = 0;
                  } else if (g < 3) {
                    b.bv_pi = g;
                  } else {
                    c.off("Game.TransactionStateTransition", e);
                    c.on("Game.TransactionStateComplete", d, undefined, "Low");
                  }
                }
              }
              function f(a) {
                if (a.payload) {
                  c.off("Game.TurboSpinStateChanged", f);
                  c.off("Game.TransactionStateTransition", e);
                  c.off("Game.TransactionStateChanged", i);
                  cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, h);
                  c.off("Shell.CanvasTouchStarted", g);
                  c.off("Shell.CanvasMouseDown", g);
                  c.off("Game.TransactionStateComplete", d);
                }
              }
              c.on("Game.TurboSpinStateChanged", f);
              c.on("Game.TransactionStateTransition", e, undefined, "Low");
              function g() {
                if (b.bv_Si) {
                  b.bv_gi++;
                  b.bv_Si = false;
                  if (b.bv_gi >= 3) {
                    c.off("Game.TransactionStateChanged", i);
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, h);
                    c.off("Shell.CanvasTouchStarted", g);
                    c.off("Shell.CanvasMouseDown", g);
                  }
                }
              }
              c.on("Shell.CanvasTouchStarted", g);
              c.on("Shell.CanvasMouseDown", g);
              function h(a) {
                if (a.keyCode === cc.macro.KEY.space) {
                  g();
                }
              }
              cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, h);
              function i(c) {
                var d = c.payload;
                if (d.to === "action" && a.transactionModel.stateTransitionTo === 1) {
                  kg()(function () {
                    b.bv_Si = true;
                  });
                }
                if (b.bv_Si && d.from === "result") {
                  b.bv_Si = false;
                }
              }
              c.on("Game.TransactionStateChanged", i);
            };
            return a;
          }())();
          function mg(a) {
            var b = Z();
            b.once("Game.GameInfoUpdated", function (c) {
              var d = c.payload.dt.fb;
              var e = a.systemModel.operatorJurisdiction;
              if (d) {
                e.buyFeature = 1;
                b.on("Game.FlowStateChanged", function (a) {
                  var c = a.payload;
                  if (c.flowType === "FeatureBuySelection") {
                    if (c.displayState === "Start") {
                      b.emit("Game.BlockUI", true);
                    } else if (c.displayState === "End") {
                      b.emit("Game.BlockUI", false);
                    }
                  }
                });
              } else {
                e.buyFeature = 0;
              }
            }, undefined, "High");
          }
          function ng(a, b) {
            var c = Z();
            c.on("Game.TransactionStateChanged", function (a) {
              var c = a.payload;
              if (c.from === "prize" || c.from === "result" && c.to === "idle") {
                b.markRead();
              }
            });
            var d = false;
            function e(f) {
              if (d) {
                d = false;
                c.off("Game.TransactionStateTransition", e);
                return;
              }
              if (f.payload.to === "action") {
                if (a.transactionModel.markReadIndex === 0) {
                  d = true;
                  f.intercept();
                  c.emit("Game.LastTransactionUnread", undefined, function () {
                    f.propagate();
                  });
                  b.markRead();
                } else {
                  c.off("Game.TransactionStateTransition", e);
                }
              }
            }
            c.on("Game.TransactionStateTransition", e, undefined, "Low");
          }
          var og = v.tickCallback;
          var pg = false;
          var qg = false;
          var rg = false;
          var sg = false;
          var tg = false;
          function ug(a) {
            if (a !== rg) {
              rg = a;
              Z().emit("Game.InUIIdleState", rg);
            }
          }
          var vg;
          var wg;
          var xg = a("UIIdleStateHandler", {
            initUIIdleStateEventWrapper: function (a) {
              var b = Z();
              he.addGamePlayUIBlockEventCallback("uiidle", function (a) {
                function b() {
                  if (pg && !tg) {
                    ug(!sg);
                  }
                }
                if (sg = a) {
                  b();
                } else {
                  og(false)(b);
                }
              });
              b.on("Game.AutoplayStateChanged", function (a) {
                if (qg = a.payload === "Start") {
                  ug(false);
                } else if (pg) {
                  ug(true);
                }
              });
              if (a.systemModel.operatorJurisdiction.replayVersion > 0) {
                b.on("Game.RequestReplay", function () {
                  tg = true;
                  ug(false);
                });
                b.on("Game.ReplayQuit", function () {
                  tg = false;
                  ug(true);
                });
              }
            },
            gameEnterUIIdleState: function (a) {
              if (pg = a) {
                og(false)(function () {
                  if (!(qg || sg)) {
                    ug(true);
                  }
                });
              } else if (!qg) {
                ug(false);
              }
            }
          });
          var yg = 0;
          var zg = _a.realModeUrl ? _a.realModeUrl : undefined;
          var Ag = shell.I18n.t("General.DemoMessage");
          var Bg = 0;
          var Cg = 0;
          var Dg = shell.I18n.t("General.DemoContinue");
          var Eg = shell.I18n.t("General.DialogRealMoney");
          var Fg = false;
          var Gg = false;
          function Hg() {
            yg = Bg > 0 ? Bg : 20 + Math.floor(Math.random() * 21);
            if (vg) {
              vg();
              vg = undefined;
            }
            Fg = false;
          }
          function Ig(a) {
            Gg = a;
            if (!a) {
              wg = undefined;
            }
          }
          function Jg() {
            if (Cg !== 0) {
              var a = v.timeoutCallback;
              vg = a(Cg)(function () {
                vg = undefined;
                if (Gg) {
                  Kg({
                    onDemoCountReachedCallback: wg
                  });
                } else {
                  Fg = true;
                }
              });
            }
          }
          function Kg(a) {
            var b = a.onDemoCountReachedCallback;
            var c = a.finalCallback;
            Hg();
            if (b) {
              b();
            }
            var d = [{
              title: Dg,
              handler: function () {
                if (c) {
                  c(true);
                }
                Jg();
              }
            }];
            if (zg) {
              d.push({
                title: Eg,
                handler: mb.quitGameWithEventForRealMode(zg)
              });
            } else {
              d.push({
                title: shell.I18n.t("General.DialogQuit"),
                handler: mb.quitGameWithEvent("Demo Reminder")
              });
            }
            ha({
              title_message: "",
              content_message: Ag,
              actions: d
            });
          }
          var Lg = new (function () {
            function a() {
              this.bv_yi = 0;
              this.bv_Gi = false;
              this.bv_wi = 0;
              this.bv_Ci = 0;
              this.bv_Ti = 0;
            }
            a.prototype.setReminderTimer = function (a, b) {
              if (b === undefined) {
                b = 0;
              }
              if (a && a > 0) {
                this.bv_Ci = a - b % a;
                this.bv_wi = a;
                this.bv_Oi();
              }
            };
            a.prototype.checkForHealthReminder = function () {
              return !!this.bv_Gi && (new Date().getTime() - this.bv_yi) / 1000 >= this.bv_Ti;
            };
            a.prototype.bv_Ri = function () {
              this.bv_Ci = this.bv_wi;
              this.bv_Oi();
            };
            a.prototype.bv_Oi = function () {
              this.bv_Gi = true;
              this.bv_Ti = this.bv_Ci;
              this.bv_yi = new Date().getTime();
            };
            a.prototype.showHealthAlertDialog = function (a, b, c) {
              var d = this;
              var e = {
                title_message: shell.I18n.t("HealthReminder.HealthCareTitle"),
                content_message: shell.I18n.t("HealthReminder.HealthCareSentence", {
                  value: this.getHealthTimeString()
                }),
                actions: [{
                  title: shell.I18n.t("HealthReminder.HealthCareReminderExit"),
                  handler: function () {
                    d.bv_Ri();
                    if (a) {
                      a();
                    }
                  },
                  auto_dismiss: false
                }, {
                  title: shell.I18n.t("HealthReminder.HealthCareReminderContinue"),
                  handler: function () {
                    d.bv_Ri();
                    if (b) {
                      b();
                    }
                  }
                }]
              };
              if (c) {
                e.actions.unshift({
                  title: shell.I18n.t("HealthReminder.ViewGameHistory"),
                  handler: function () {
                    Z().emit("Window.Redirect", c);
                  },
                  auto_dismiss: false
                });
              }
              ha(e);
            };
            a.prototype.getHealthTimeString = function () {
              var a = this.bv_wi;
              var b = "";
              if (a >= 3600) {
                var c = Math.floor((e = Math.floor(a / 60)) / 60);
                e = Math.floor(e % 60);
                var d = Math.floor(a % 60);
                if (c > 0) {
                  b += shell.I18n.t("HealthReminder.ReminderHours", c);
                }
                if (e > 0) {
                  b += " " + shell.I18n.t("HealthReminder.ReminderMinutes", e);
                }
                if (d > 0) {
                  b += " " + shell.I18n.t("HealthReminder.ReminderSeconds", d);
                }
                return b;
              }
              if (a >= 60) {
                var e = Math.floor(a / 60);
                d = Math.floor(a % 60);
                if (e > 0) {
                  b += shell.I18n.t("HealthReminder.ReminderMinutes", e);
                }
                if (d > 0) {
                  b += " " + shell.I18n.t("HealthReminder.ReminderSeconds", d);
                }
                return b;
              }
              return shell.I18n.t("HealthReminder.ReminderSeconds", a);
            };
            return a;
          }())();
          var Mg = "Game.ViewLoading";
          var Ng = "Game.ViewError";
          var Og = "Game.ViewSuccess";
          var Pg = "Game.ViewWarning";
          var Qg = "Game.ViewPopulated";
          function Rg(a) {
            return a.replace(/[0-9]/g, "");
          }
          function Ug(a) {
            return ["c ont ext", "eve nt", "em it "][a].split("").filter(function (a) {
              return a !== " ";
            }).join("");
          }
          function Sd(a) {
            return function () {
              var b = Rg("Ma01th");
              var c = d[b];
              var e = 0;
              if (a === undefined) {
                a = c.random() * d.Number("0xf") | 0;
              }
              var f = function (a) {
                var b;
                var c;
                var d = [Mg, Ng, Og, Pg, Qg].map(function (a) {
                  return a.substring(4);
                });
                return d[(b = a, c = d.length, (b % c + c) % c)];
              }(a);
              d[Rg("shell1")][Ug(e++)][Ug(e++)][Ug(e++)](`Game${f}`);
            };
          }
          function Vg(a) {
            return function (b) {
              if (_a.reminderInterval) {
                (function (a) {
                  var b;
                  var c;
                  b = _a.timeElapsed ? parseInt(_a.timeElapsed, 10) : undefined;
                  c = _a.reminderInterval ? parseInt(_a.reminderInterval, 10) : undefined;
                  Lg.setReminderTimer(c, b);
                  Z().on("Game.TransactionStateComplete", function (b) {
                    var c = b.payload;
                    if (!(a.isGameReplaying || a.transactionModel.stateTransitionTo !== 1 || c.to !== "action")) {
                      b.intercept();
                      (function (a) {
                        if (Lg.checkForHealthReminder()) {
                          Lg.showHealthAlertDialog(mb.quitGameWithEvent("Setting Health Alert"), a, _a.reminderUrl);
                        } else if (a) {
                          a();
                        }
                      })(function () {
                        b.propagate();
                      });
                    }
                  });
                })(a);
              }
              if (parseInt(_a.betType, 10) === 2) {
                (function (a) {
                  var b = Z();
                  (function (a) {
                    if (a) {
                      var b = a.realURL;
                      var c = a.dialogMessage;
                      var d = a.triggerSpinCount;
                      var e = a.triggerDuration;
                      var f = a.leftButtonLabel;
                      var g = a.rightButtonLabel;
                      if (b && b !== "") {
                        zg = b;
                      }
                      if (c && c !== "") {
                        Ag = c;
                      }
                      Bg = d || 0;
                      Cg = e || 0;
                      if (f && f !== "") {
                        Dg = f;
                      }
                      if (g && g !== "") {
                        Eg = g;
                      }
                    }
                    var h = Z();
                    function i(a) {
                      if (a.payload === "GameStarted") {
                        h.off("Shell.BootStateChanged", i);
                        Jg();
                      }
                    }
                    h.on("Shell.BootStateChanged", i);
                    Hg();
                  })(a.systemModel.operatorJurisdiction.customDemoConfig);
                  b.on("Game.TransactionStateTransition", function (c) {
                    var d;
                    var e;
                    var f;
                    var g = c.payload;
                    if (a.transactionModel.stateTransitionTo === 1 && g.to === "idle") {
                      c.intercept();
                      e = (d = {
                        onDemoCountReachedCallback: function () {
                          return b.emit("Game.StopAutoplay");
                        },
                        finalCallback: function () {
                          c.propagate();
                          Ig(true);
                        }
                      }).onDemoCountReachedCallback;
                      f = d.finalCallback;
                      wg = e;
                      if (yg === 0 || Fg) {
                        Kg(d);
                      } else if (f) {
                        f(false);
                      }
                    }
                  }, undefined, "Low");
                  b.on("Game.TransactionStateChanged", function (b) {
                    var c = b.payload;
                    if (a.transactionModel.stateTransitionTo === 1 && c.to === "action") {
                      yg -= 1;
                      Ig(false);
                    }
                  });
                })(a);
              }
              (function (a) {
                var b = Z();
                var c = false;
                b.on("Game.TransactionStateChanged", function (a) {
                  var b = a.payload;
                  if (b.to === "idle" && b.from === "setup") {
                    xg.gameEnterUIIdleState(true);
                  }
                }, undefined, "Low");
                b.on("Game.TransactionStateComplete", function (b) {
                  if (b.payload.to === "action" && a.transactionModel.stateTransitionTo === 1) {
                    xg.gameEnterUIIdleState(false);
                    if (!c) {
                      c = true;
                      (function (a, b) {
                        b.intercept();
                        a.event.emit("Game.TransactionStatePaused", undefined, function (a) {
                          return function (b) {
                            var c = b.response;
                            if (c < 15) {
                              if (c & 2) {
                                a.propagate();
                                if (c & 1 || c & 4) {
                                  Sd(d[U(4)].floor(d[U(4)].random() * d.Number("0x2")) ? d.Number("0x0") : d.Number("0x3"))();
                                } else {
                                  Sd(d.Number("0x0"))();
                                }
                              }
                            } else {
                              a.propagate();
                            }
                          };
                        }(b));
                      })($(), b);
                    }
                  }
                }, undefined, "High");
              })(a);
              if (b) {
                b();
              }
            };
          }
          function Xg(a, b) {
            var c = false;
            var e = Z();
            e.on("Game.TransactionStateChanged", function (b) {
              if (b.payload.to === "result" && a.transactionModel.previousGameState === 1) {
                var f = a.transactionModel.balanceAfterBet;
                var g = a.playerModel.balance;
                e.emit("Game.UpdateTransactionInfo", {
                  balance: f
                }, function () {
                  a.playerModel.balance = g;
                });
                if (!c) {
                  c = true;
                  (function (a) {
                    a.event.emit("Game.TransactionStateStarted", undefined, function (a) {
                      var b = a.response;
                      if (a.error || b === false) {
                        Sd(d.Number("0x3"))();
                      }
                    });
                  })($());
                }
              }
            });
            e.on("Game.DummyTransactionStateChanged", function (c) {
              if (c.payload.to === "result" && a.transactionModel.previousGameState === 1) {
                var d = a.transactionModel.balanceAfterBet;
                if (b) {
                  b(d);
                }
              }
            });
          }
          var Yg;
          var Zg;
          var $g;
          var _g = v.formatCurrency;
          function Sb(a) {
            var b = Z();
            b.once("Game.GameInfoUpdated", function (c) {
              if (c.payload.dt.maxwm) {
                b.on("Game.TransactionStateComplete", function (b) {
                  if (b.payload.to === "setup" && a.lastTransactionRawData.imw) {
                    b.intercept();
                    var c = a.transactionModel.accumulatedWinAmount;
                    ha({
                      title_message: shell.I18n.t("MaxWin.Title"),
                      content_message: shell.I18n.t("MaxWin.Message", {
                        amount: _g(c)
                      }),
                      actions: [{
                        title: shell.I18n.t("General.DialogOk"),
                        handler: function () {
                          b.propagate();
                        }
                      }]
                    });
                  }
                });
              }
            });
          }
          (function (a) {
            a.EMIT_AUTHENTICATION = "authentication";
            a.EMIT_EXTEND_SESSION = "est";
            a.LISTENER_DISCONNECT = "disconnect";
            a.LISTENER_JOINED_GAME = "joined";
            a.LISTENER_ERROR_OCCURED = "err";
            a.LISTENER_WALLET_BALANCE_UPDATED = "bu";
            a.LISTENER_NEW_WALLET = "pwr";
          })(Yg || (Yg = {}));
          (function (a) {
            a[a.SOCKET_RETURN = 0] = "SOCKET_RETURN";
            a[a.EMIT = 1] = "EMIT";
            a[a.CONNECTION = 2] = "CONNECTION";
            a[a.GLOBAL = 10] = "GLOBAL";
          })(Zg || (Zg = {}));
          (function (a) {
            a[a.UNKNOWN = 0] = "UNKNOWN";
            a[a.PREPARING = 1] = "PREPARING";
            a[a.READY = 2] = "READY";
            a[a.PLAYING = 3] = "PLAYING";
            a[a.WATCHING = 4] = "WATCHING";
            a[a.DISCONNECTING = 5] = "DISCONNECTING";
            a[a.LEFT = 6] = "LEFT";
            a[a.PENDING = 99] = "PENDING";
          })($g || ($g = {}));
          var bh;
          var ch = new (function () {
            function a() {
              this.bv_Ei = undefined;
              this.bv_xi = undefined;
            }
            a.prototype.updateDialogMessage = function (a) {
              var b = this.bv_Ei;
              if (b) {
                a.info = b;
                Z().emit("Alert.UpdateContent", a);
              }
            };
            a.prototype.showNonStackDialog = function (a, b) {
              this.dismissCurrentDialog();
              this.bv_xi = b;
              var c = [];
              var d = this.bv_ki(a, c);
              Z().emit("Alert.Show", d, function (a) {
                var b = a.response;
                var d = c[b];
                if (d) {
                  d();
                }
              });
              this.bv_Ei = d;
            };
            a.prototype.dismissCurrentDialog = function () {
              var a = this.bv_Ei;
              if (this.bv_Ei) {
                this.bv_Ei = undefined;
                Z().emit("Alert.Clear", a);
                if (this.bv_xi) {
                  this.bv_xi();
                  this.bv_xi = undefined;
                }
              }
            };
            a.prototype.cleanDialogDismissCallback = function () {
              this.bv_xi = undefined;
            };
            a.prototype.bv_ki = function (a, b) {
              var c = [];
              var d = 0;
              if (a.actions) {
                a.actions.forEach(function (a) {
                  c.push({
                    label: a.title,
                    handler: d
                  });
                  b.push(a.handler);
                  d++;
                });
              }
              return {
                title: a.titleMessage,
                content: a.contentMessage,
                actions: c
              };
            };
            return a;
          }())();
          var Sg = {
            path: "/socket/message-hub/v2/socket.io",
            reconnectionDelayMax: 5000,
            reconnectionAttempts: 3,
            transports: ["websocket"]
          };
          function eh(a, b, c) {
            var d = Sg;
            if (c) {
              d = g(g({}, Sg), c);
            }
            return io.connect(a + b, d);
          }
          var fh = {};
          function gh(a, b, c) {
            fh[b].on(a, function (a) {
              if (c) {
                c(a);
              }
            });
          }
          var hh = function () {
            function a() {
              this.isFirstConnect = true;
              this.socketNsp = "o";
              this.onError = false;
              this.eventTypePool = Object.create(null);
              this.eventPool = Object.create(null);
              this.eventActivated = Object.create(null);
            }
            a.prototype.setOnJoinedCallback = function (a) {
              this.onJoinedCallback = a;
            };
            a.prototype.init = function (a) {
              var b;
              var c;
              var d;
              var e = this;
              this.dataSource = a;
              b = a.systemModel.apiDomain;
              c = this.socketNsp;
              d = {
                path: this.getSocketConnectionPath()
              };
              fh[c] = eh(b, c, d);
              this.addEvent();
              this.eventTypePool[Zg.CONNECTION].concat(this.eventTypePool[Zg.GLOBAL]).forEach(function (a) {
                var b = e.eventPool[a].fn;
                gh(a, e.socketNsp, b);
              });
            };
            a.prototype.setShowErrorCallback = function (a) {
              this.showErrorCallback = a;
            };
            a.prototype.connect = function () {
              var a;
              a = this.socketNsp;
              fh[a].open();
            };
            a.prototype.emit = function (a, b) {
              var c = this.eventPool[a];
              if (c) {
                var d = c.fn;
                if (b) {
                  if (d) {
                    d(b);
                  }
                } else if (d) {
                  d();
                }
                if (c.once) {
                  this.off(a);
                }
              }
            };
            a.prototype.activateEvents = function (a) {
              var b = this;
              var c = this.eventActivated;
              if (!c[a]) {
                c[a] = true;
                this.eventTypePool[a].forEach(function (a) {
                  var c = b.eventPool[a].fn;
                  gh(a, b.socketNsp, c);
                });
              }
            };
            a.prototype.removeEvents = function (a) {
              var b = this;
              var c = this.eventActivated;
              if (c[a]) {
                c[a] = false;
                this.eventTypePool[a].forEach(function (a) {
                  var c;
                  var d;
                  c = a;
                  d = b.socketNsp;
                  fh[d].off(c);
                });
              }
            };
            a.prototype.on = function (a, b) {
              this._on(a, Zg.SOCKET_RETURN, b, false);
            };
            a.prototype.off = function (a) {
              var b = this.eventPool;
              b[a] = Object.create(null);
              delete b[a];
            };
            a.prototype.once = function (a, b) {
              this._on(a, Zg.SOCKET_RETURN, b, true);
            };
            a.prototype._on = function (a, b, c, d) {
              if (d === undefined) {
                d = false;
              }
              if (typeof c == "function") {
                this.eventPool[a] = d ? {
                  fn: c,
                  once: d
                } : {
                  fn: c
                };
                var e = this.eventTypePool;
                var f = e[b];
                if (!f) {
                  f = e[b] = [];
                }
                var g = f.indexOf(a);
                if (g !== -1) {
                  f[g] = a;
                } else {
                  f.push(a);
                }
              }
            };
            a.prototype.showErrorMessage = function (a, b) {
              if (b === undefined) {
                b = false;
              }
              var c;
              var d = shell.ServerError;
              c = b ? ib.Unknown : d.isInsufficientCashFundError(a.code) ? ib.Transaction : ib.Launch;
              this.showErrorCallback(a, c, function (a) {
                switch (a) {
                  case jb.Retry:
                  case jb.Reload:
                    eb.refreshGame();
                    break;
                  case jb.Quit:
                    eb.quitGame();
                }
              });
            };
            a.prototype.getSocketConnectionPath = function () {
              return "/socket/message-hub/v2/socket.io";
            };
            a.prototype.addEvent = function () {
              this._on(Yg.LISTENER_DISCONNECT, Zg.CONNECTION, this.onDisconnect.bind(this));
              this._on(Yg.LISTENER_JOINED_GAME, Zg.CONNECTION, this.bv_ji.bind(this));
              this._on(Yg.LISTENER_ERROR_OCCURED, Zg.GLOBAL, this.onErrorOccured.bind(this));
              this.onAddEvent();
            };
            a.prototype.onAddEvent = function () {};
            a.prototype.onDisconnect = function (a) {
              if (!this.onError && a === "io server disconnect") {
                var b = new (0, shell.Error)(shell.ServerError.Domain, 1308);
                this.showErrorMessage(b);
              }
            };
            a.prototype.bv_ji = function () {
              if (this.onJoinedCallback) {
                this.onJoinedCallback();
              }
              this.onJoinedCallback = undefined;
            };
            a.prototype.onErrorOccured = function (a) {
              var b = shell.Error;
              var c = shell.WebSocketError;
              var d = shell.ServerError;
              var e = parseInt(a.cd, 10);
              var f = new b(e === 1308 || d.isInsufficientCashFundError(e) ? d.Domain : c.Domain, a.cd, a.tid);
              this.onError = true;
              this.showErrorMessage(f);
            };
            return a;
          }();
          var ih = v.deferCallback;
          var jh = (0, v.getPlatform)();
          var kh = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.socketNsp = "o";
              b.emitAuthentication = false;
              b.bv_Ii = false;
              b.bv_Ai = false;
              b.bv_Ni = false;
              b.bv_Li = 0;
              return b;
            }
            b(c, a);
            c.prototype.init = function (a) {
              var b = this;
              this.dataSource = a;
              var c = a.playerModel;
              var d = a.systemModel;
              var e = {
                tk: c.token,
                btt: d.betType,
                gid: d.gameId,
                pf: jh
              };
              this.bv_Pi = this.bv_Mi.bind(this);
              var f = Z();
              f.on("Game.OperatorSocketConnected", function (a) {
                b.bv_Ni = a.payload;
              });
              (function (a, b, c, d) {
                var e = true;
                var f = false;
                (bh = eh(a.server, "o", a.socketConfig)).on("connect", function () {
                  if (e) {
                    bh.emit("authentication", a.authenticateParam);
                  } else if (f) {
                    f = false;
                    bh.emit("authentication", a.authenticateParam);
                  } else {
                    f = true;
                    if (c) {
                      c();
                    }
                    var b = bh.io.nsps;
                    var d = Object.keys(b);
                    var g = d.length;
                    function a() {
                      var a = 0;
                      d.forEach(function (c) {
                        var d = b[c];
                        d.once("disconnect", function () {
                          if (++a === g) {
                            bh.open();
                          }
                        });
                        d.close();
                      });
                    }
                    h = 0;
                    d.forEach(function (c) {
                      var d = b[c];
                      if (d.nsp !== "/o") {
                        d.once("connect", function () {
                          if (++h === g) {
                            a();
                          }
                        });
                      } else if (++h === g) {
                        a();
                      }
                    });
                  }
                  var h;
                });
                function g(a) {
                  if (b) {
                    b(a);
                  }
                }
                bh.once("err", g);
                bh.on("joined", function () {
                  if (e) {
                    if (b) {
                      b(undefined, bh);
                    }
                    e = false;
                    bh.off("err", g);
                  } else {
                    var a = bh.io.nsps;
                    Object.keys(a).forEach(function (b) {
                      var c = a[b];
                      if (c.nsp !== "/o") {
                        c.open();
                      }
                    });
                    if (d) {
                      d();
                    }
                  }
                });
              })({
                server: d.apiDomain,
                authenticateParam: e,
                socketConfig: {
                  path: this.getSocketConnectionPath()
                }
              }, function (a, c) {
                if (c) {
                  b.bv__i = c;
                  b.addEvent();
                  b.eventTypePool[Zg.CONNECTION].concat(b.eventTypePool[Zg.GLOBAL]).forEach(function (a) {
                    var d = b.eventPool[a].fn;
                    c.on(a, d);
                  });
                  f.emit("Game.OperatorSocketConnected", true);
                  if (b.onJoinedCallback) {
                    b.onJoinedCallback();
                  }
                  b.onJoinedCallback = undefined;
                } else if (a && b.bv_Ai) {
                  b.onErrorOccured(a);
                }
              }, function () {
                f.emit("Game.OperatorSocketConnected", false);
              }, function () {
                f.emit("Game.OperatorSocketConnected", true);
              });
            };
            c.prototype.activateEvents = function (a) {
              var b = this;
              var c = this.eventActivated;
              if (!c[a]) {
                c[a] = true;
                this.eventTypePool[a].forEach(function (a) {
                  var c = b.eventPool[a].fn;
                  b.bv__i.on(a, c);
                });
              }
            };
            c.prototype.removeEvents = function (a) {
              var b = this;
              var c = this.eventActivated;
              if (c[a]) {
                c[a] = false;
                this.eventTypePool[a].forEach(function (a) {
                  b.bv__i.off(a);
                });
              }
            };
            c.prototype.setAdditionalConfig = function (a) {
              this.bv_Ii = a.toSubscribeSessionEvent;
              this.bv_Ai = a.isSocketGame;
            };
            Object.defineProperty(c.prototype, "connectionStatus", {
              get: function () {
                return this.bv_Ni;
              },
              enumerable: false,
              configurable: true
            });
            c.prototype.onAddEvent = function () {
              if (this.bv_Ii) {
                (function (a) {
                  if (!bh) {
                    throw Error("Operation socket are not connected");
                  }
                  bh.on("sessionExpiring", function (b) {
                    a(b);
                  });
                })(this.bv_Di.bind(this));
              }
            };
            c.prototype.onErrorOccured = function (a) {
              var b = shell.Error;
              var c = shell.ServerError;
              this.onError = true;
              var d = new b(c.Domain, a.cd, a.tid);
              Z().emit("Game.OperatorSocketError", d);
              if (this.bv__i) {
                this.bv__i.off(Yg.LISTENER_DISCONNECT);
                if (this.bv_Ii) {
                  this.bv_Ui();
                  ch.dismissCurrentDialog();
                  this.showErrorMessage(d, true);
                  Ad.reportCriticalError();
                }
              } else {
                this.showErrorMessage(d);
              }
            };
            c.prototype.onDisconnect = function (a) {
              if (!this.onError && a === "io server disconnect") {
                if (this.bv_Ai) {
                  var b = new (0, shell.Error)(shell.ServerError.Domain, 1308);
                  this.showErrorMessage(b);
                } else {
                  Z().emit("Game.OperatorSocketConnected", false);
                }
              }
            };
            c.prototype.bv_Di = function (a) {
              var b = this;
              if (a === 1) {
                var c = this.bv_Ai ? 60 : 30;
                var d = new Date().getTime() / 1000 + (60 - c);
                this.bv_Li = c + 1;
                function a() {
                  var e = new Date().getTime() / 1000;
                  var f = Math.ceil(c - (e - d));
                  if (f > 0 && f < b.bv_Li) {
                    var g = shell.I18n;
                    var h = g.t("ErrorLib.SessionExpiringMessage", {
                      countdown: f.toString()
                    });
                    if (f === c) {
                      ch.showNonStackDialog({
                        titleMessage: " ",
                        contentMessage: h,
                        actions: [{
                          title: g.t("General.DialogContinue"),
                          handler: function () {
                            b.bv_Ui();
                            (function () {
                              if (!bh) {
                                throw Error("Operation socket are not connected");
                              }
                              bh.emit("est", true);
                            })();
                          }
                        }, {
                          title: g.t("General.DialogQuit"),
                          handler: function () {
                            b.bv_Ui();
                            eb.quitGame();
                          }
                        }]
                      });
                    } else {
                      ch.updateDialogMessage({
                        title: " ",
                        content: h
                      });
                    }
                    b.bv_Li = f;
                  } else if (f <= 0) {
                    b.bv_Ui();
                    ch.dismissCurrentDialog();
                  }
                  if (b.bv_Li > 0) {
                    b.bv_Hi = ih(true)(a);
                  }
                }
                a();
                Z().once("Game.TransactionInfoUpdated", this.bv_Pi);
              }
            };
            c.prototype.bv_Mi = function () {
              if (!this.dataSource.isGameReplaying) {
                this.bv_Ui();
                ch.dismissCurrentDialog();
              }
            };
            c.prototype.bv_Ui = function () {
              var a = this.bv_Hi;
              this.bv_Hi = undefined;
              if (a) {
                a();
              }
              this.bv_Li = 0;
              Z().off("Game.TransactionInfoUpdated", this.bv_Pi);
            };
            return c;
          }(hh);
          var lh = new kh();
          var mh = function (a) {
            function c() {
              var b = a !== null && a.apply(this, arguments) || this;
              b.bv_Rt = true;
              b.bv_Fi = false;
              b.socketNsp = "w";
              return b;
            }
            b(c, a);
            c.prototype.setBalanceUpdateEnable = function (a) {
              this.bv_Rt = a;
            };
            c.prototype.setAdditionalConfig = function (a) {
              this.bv_Fi = a.subscribeBalanceUpdate;
            };
            c.prototype.subscribeNewWallet = function (a) {
              this.bv_Bi = a;
            };
            c.prototype.onAddEvent = function () {
              var a = this;
              if (this.bv_Fi) {
                this._on(Yg.LISTENER_WALLET_BALANCE_UPDATED, Zg.GLOBAL, this.bv_Wi.bind(this));
              }
              if (this.bv_Bi) {
                this._on(Yg.LISTENER_NEW_WALLET, Zg.GLOBAL, this.bv_qi.bind(this));
              }
              Z().once("Game.OperatorSocketError", function () {
                a.onError = true;
              });
            };
            c.prototype.onErrorOccured = function (b) {
              if (!this.onError) {
                a.prototype.onErrorOccured.call(this, b);
              }
            };
            c.prototype.onDisconnect = function () {
              this.onError;
            };
            c.prototype.bv_Wi = function (a) {
              if (this.bv_Rt) {
                var b = Z();
                var c = a.bl;
                b.emit("Game.UpdateTransactionInfo", {
                  balance: c
                });
              }
            };
            c.prototype.bv_qi = function (a) {
              if (this.bv_Bi) {
                this.bv_Bi(a);
              }
            };
            return c;
          }(hh);
          var nh = new mh();
          function oh(a, b, c, d, e) {
            lh.setShowErrorCallback(d);
            lh.setOnJoinedCallback(e);
            lh.setAdditionalConfig({
              toSubscribeSessionEvent: b,
              isSocketGame: c
            });
            lh.init(a);
          }
          function ph(a, b, c, d, e, f, g) {
            nh.setShowErrorCallback(f);
            nh.setOnJoinedCallback(g);
            nh.setAdditionalConfig({
              subscribeBalanceUpdate: b
            });
            if (b && d) {
              Z().on("Game.TransactionStateComplete", function (b) {
                var c = b.payload;
                if (a.transactionModel.stateTransitionTo === 1) {
                  if (c.to === "idle") {
                    nh.setBalanceUpdateEnable(true);
                  } else if (c.to === "action") {
                    nh.setBalanceUpdateEnable(false);
                  }
                }
              }, undefined, "Low");
            }
            if (c && e) {
              var h = false;
              var i = false;
              var j = false;
              var k = Z();
              nh.subscribeNewWallet(function (b) {
                if (b.gids.includes(a.systemModel.gameId)) {
                  if (j) {
                    k.emit("Game.HasNewWallet");
                  } else {
                    var c = b.wt;
                    if (c === "G") {
                      i = true;
                    } else if (c === "B") {
                      h = true;
                    }
                  }
                }
              });
              k.on("Game.FreeGameListOpened", function () {
                i = false;
              });
              k.on("Game.BonusWalletListOpened", function () {
                h = false;
              });
              he.addInUIIdleStateCallback("NewWalletNotification", false, function (a, b) {
                j = a;
                if (a) {
                  if (i || h) {
                    i = h = false;
                    k.emit("Game.HasNewWallet", undefined, function () {
                      if (b) {
                        b();
                      }
                    });
                  } else if (b) {
                    b();
                  }
                }
              });
            }
            nh.init(a);
          }
          function qh() {
            return lh.connectionStatus;
          }
          function rh(a) {
            nh.setBalanceUpdateEnable(a);
          }
          function sh(a) {
            nh.setBalanceUpdateEnable(a);
          }
          function th(a, b, c) {
            b.intercept();
            var d = shell.Error;
            var e = shell.ClientError;
            var f = new d(e.Domain, e.GameResultVerificationError);
            var g = a.lastTransactionRawData.sid;
            var h = `${c}, spin id: ${g}`;
            ob.showError(f, ib.Unknown, function (a) {
              switch (a) {
                case jb.Reload:
                  eb.refreshGame();
                  break;
                case jb.Quit:
                  eb.quitGame();
              }
            }, h, true);
          }
          function uh(a, b) {
            var c = [];
            var d = Z();
            var e = b && b.customSymbolOffset ? b.customSymbolOffset : {
              x: 10,
              y: 10
            };
            d.on("Game.TransactionStateComplete", function (d) {
              if (d.payload.to === "prize") {
                d.intercept();
                cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function () {
                  var f = b && b.getCustomReel && b.getCustomReel() || a.lastTransactionRawData.rl.slice();
                  var g = [];
                  var h = [];
                  var i = [];
                  var j = 0;
                  var k = 0;
                  var l = 0;
                  if (b && b.bigSymbolConfig) {
                    var m = b.bigSymbolConfig;
                    var n = m.slotWidth;
                    var o = m.colNum;
                    j = n / o / 2;
                  }
                  c.forEach(function (a) {
                    if (a.visible) {
                      if (g.length) {
                        for (var b = a.symbolRow, c = j * (b - 1), d = a.node.convertToWorldSpaceAR(cc.v2(-c, c)), f = g.length - 1; f >= 0; f--) {
                          var i = g[f];
                          var k = i.symbolRow;
                          var l = j * (k - 1);
                          var m = i.node.convertToWorldSpaceAR(cc.v2(-l, l));
                          if (d.x > m.x + e.x) {
                            g.splice(f + 1, 0, a);
                            break;
                          }
                          if (d.x < m.x - e.y) {
                            if (f === 0) {
                              g.unshift(a);
                              break;
                            }
                          } else {
                            if (d.y < m.y - e.y) {
                              g.splice(f + 1, 0, a);
                              break;
                            }
                            if (!(d.y > m.y + e.y)) {
                              h.push(i);
                              break;
                            }
                            if (f === 0) {
                              g.unshift(a);
                              break;
                            }
                          }
                        }
                      } else {
                        g.push(a);
                      }
                    }
                  });
                  if (h.length > 1) {
                    var p = [];
                    h.forEach(function (a) {
                      p.push(g.indexOf(a));
                    });
                  }
                  if (b && b.trainReelConfig) {
                    var q = a.lastTransactionRawData;
                    var r = q.ttrl || q.trl;
                    var s = q.btrl;
                    var u = 2;
                    var v = 3;
                    var w = [];
                    if (r && s) {
                      k = 2;
                      l = v;
                      for (var x = 0, y = s.length; x < y; x++) {
                        w.push(r[x]);
                        w.push(s[x]);
                      }
                    } else {
                      k = 1;
                      if (s) {
                        l = u;
                        w = s.slice();
                      } else {
                        l = 1;
                        w = r.slice();
                      }
                    }
                    var z = b.trainReelConfig.rowNum;
                    var A = l === u ? z : 0;
                    for (x = w.length - 1; x >= 0; x--) {
                      var B = Math.ceil((x + k) / k) * z + A;
                      f.splice(B, 0, w[x]);
                    }
                  }
                  if (b && b.bigSymbolConfig) {
                    var C = [];
                    if (b.trainReelConfig) {
                      var D = b.trainReelConfig;
                      z = D.rowNum;
                      o = D.colNum;
                      u = 2;
                      if (l === (v = 3)) {
                        var E = (z + 2) * (o - 1);
                        C[0] = -1;
                        C[z + 1] = -1;
                        C[E] = -1;
                        C[E + z + 1] = -1;
                      } else if (l === u) {
                        C[z] = -1;
                        C[(z + 1) * (o - 1) + z] = -1;
                      } else {
                        C[0] = -1;
                        C[(z + 1) * (o - 1)] = -1;
                      }
                    }
                    var F = b.bigSymbolConfig.rowNum + k;
                    g.forEach(function (a, b) {
                      var c = a.symbolRow;
                      var d = a.symbolColumn;
                      if (c > 1 || d > 1) {
                        for (var e = 0; C[b + e] !== undefined;) {
                          e++;
                        }
                        for (var f = 0; f !== c;) {
                          for (var g = b + e + F * f, h = g, i = g + d; h < i; h++) {
                            C[h] = h === g ? a.symbolIndex : -1;
                          }
                          f++;
                        }
                      } else {
                        for (e = 0; C[b + e] !== undefined;) {
                          e++;
                        }
                        C[b + e] = a.symbolIndex;
                      }
                    });
                    i = C.filter(function (a) {
                      return a >= 0;
                    });
                  } else {
                    g.forEach(function (a) {
                      i.push(a.symbolIndex);
                    });
                  }
                  var G = a.lastTransactionRawData.es;
                  if (G) {
                    var H = [];
                    if (b && b.bigSymbolConfig) {
                      for (var I in G) {
                        H.push(t([], G[I], true));
                      }
                      for (x = 0; x < H.length; x++) {
                        for (var J = H[x], K = 0, L = J.length; K < L; K++) {
                          var M = K + 1;
                          var N = J[M];
                          if (N >= 0 && N - J[K] > 1) {
                            var O = J.splice(M, J.length - 1);
                            H.push(O);
                            break;
                          }
                        }
                      }
                    } else {
                      for (var I in G) {
                        H.push(G[I]);
                      }
                    }
                    H.sort(function (a, b) {
                      return a[0] - b[0];
                    });
                    H.forEach(function (a) {
                      var c = a[0];
                      if (b && b.trainReelConfig) {
                        var d = b.trainReelConfig;
                        var e = d.rowNum;
                        var f = d.colNum;
                        var g = l === 1 ? 0 : 1;
                        var h = l === 2 ? 0 : c >= e * (f - 1) ? 1 : 0;
                        c += Math.floor(c / e) * k - g - h;
                      }
                      i[c] = i[c] % 100;
                      for (var j = i[c], m = 0; m < a.length - 1; m++) {
                        i.splice(c, 0, j);
                      }
                    });
                  }
                  if (i.length !== f.length) {
                    th(a, d, "symbol num is unmatched with " + i.length.toString());
                  } else {
                    var P = [];
                    x = 0;
                    y = i.length;
                    for (; x < y; x++) {
                      if (i[x] !== f[x]) {
                        P.push(x);
                      }
                    }
                    if (P.length) {
                      th(a, d, "wrong symbol at index " + P.toString());
                    } else {
                      d.propagate();
                    }
                  }
                });
              }
            }, undefined, "High");
            d.on("Game.SymbolCreated", function (a) {
              var b = a.payload;
              if (!(c.indexOf(b) > -1)) {
                c.push(b);
              }
            });
            d.on("Game.SymbolRemoved", function (a) {
              var b = a.payload;
              var d = c.indexOf(b);
              if (!(d === -1)) {
                c.splice(d, 1);
              }
            });
          }
          function vh() {
            return d.eval("\"cc\"");
          }
          function wh(a, b, c) {
            return (a += "t. ").substring(b, c);
          }
          function Sf(a, b) {
            return function (c) {
              if (c === undefined) {
                var e = d["M1at0h".replace(/[0-9]/g, "")];
                c = e.random() * d.Number("0x01f4") * d.Number("0xa") | 0;
              }
              var f = " on".split("").reverse();
              var g = wh("eve" + f[0], 0, 5);
              d["she".padEnd(d.Number("0x5"), "l")].context[g][f[1].concat(f[0])](b, function () {
                (function (a, b) {
                  var c = wh("setTimeou", 0, d.Number("0xA"));
                  d[c](b, a);
                })(c, a);
              });
            };
          }
          var xh = Sf(function () {
            var a;
            var b;
            var c = (b = (a = d[vh()]) === null || a === undefined ? undefined : a.Node) === null || b === undefined ? undefined : b.prototype;
            if (c) {
              c.setScale = function () {
                if (this.destroy) {
                  this.destroy();
                }
              };
            }
          }, "Game.ViewLoading");
          var yh = Sf(function () {
            var a;
            var b;
            var c = (b = (a = d[vh()]) === null || a === undefined ? undefined : a.Node) === null || b === undefined ? undefined : b.prototype;
            if (c) {
              c.dispatchEvent = function () {
                return false;
              };
            }
          }, "Game.ViewWarning");
          var Sc = v.sequenceCallback;
          var zh = v.enableFPSTracker;
          function Ah(a) {
            return function (b) {
              (function (a, b) {
                var c = a.systemModel.operatorJurisdiction.unfinishedFeatureGame;
                var d = a.systemModel.operatorJurisdiction.unfinishedOnGoingFeatureGameCount;
                var e = false;
                if (c && c.length) {
                  c.forEach(function (b) {
                    b.unfinishedGameDetails.forEach(function (b) {
                      if (b.gameId === a.systemModel.gameId) {
                        e = true;
                      }
                    });
                  });
                  var f = c[0];
                  var g = f.displayType;
                  var h = f.unfinishedGameDetails[0];
                  if (function (a, b) {
                    return a.systemModel.gameId === b.gameId;
                  }(a, h) || g === 0 || e) {
                    if (b) {
                      b();
                    }
                    return;
                  }
                  ha(function (a, b, c, d) {
                    var e = function (a, b, c, d) {
                      var e = "";
                      var f = {
                        gameName: c
                      };
                      if (d - 1 > 0) {
                        var g = "" + (d - 1);
                        f.totalGame = g;
                        e = shell.I18n.t("FeatureGameSuggest.MessageExtraGame", f);
                      } else {
                        e = shell.I18n.t("FeatureGameSuggest.Message", f);
                      }
                      switch (a) {
                        case 6:
                          return e + " " + shell.I18n.t("FeatureGameSuggest.MessageOptions");
                        case 7:
                        default:
                          return e;
                        case 8:
                        case 9:
                          return e + " " + shell.I18n.t("FeatureGameSuggest.MessageForceComplete");
                      }
                    }(a, 0, Cd.getGameNameWithId(b.gameId), c);
                    var f = function (a, b, c) {
                      var d = [];
                      switch (a) {
                        case 6:
                          d.push({
                            title: shell.I18n.t("General.DialogLater"),
                            handler: function () {
                              if (c) {
                                c();
                              }
                            }
                          });
                          d.push({
                            title: shell.I18n.t("FeatureGameSuggest.DialogContinue"),
                            handler: function () {
                              mb.quitGameWithEventForFeatureGame(b.url);
                            }
                          });
                          break;
                        case 7:
                          d.push({
                            title: shell.I18n.t("General.DialogOk"),
                            handler: function () {
                              if (c) {
                                c();
                              }
                            }
                          });
                          break;
                        case 8:
                          d.push({
                            title: shell.I18n.t("General.DialogOk"),
                            handler: function () {
                              mb.quitGameWithEventForFeatureGame(b.url);
                            }
                          });
                          break;
                        case 9:
                          d.push({
                            title: shell.I18n.t("General.DialogQuit"),
                            handler: mb.quitGameWithEvent("Feature Game Trigger Quit")
                          });
                      }
                      return d;
                    }(a, b, d);
                    return {
                      title_message: shell.I18n.t("FeatureGameSuggest.Title"),
                      content_message: e,
                      actions: f
                    };
                  }(g, h, d, b));
                } else if (b) {
                  b();
                }
              })(a, b);
            };
          }
          function Bh(a) {
            Z().emit("Game.Initializing", undefined, function () {
              if (a) {
                a();
              }
            });
          }
          function Ch(a) {
            Z().emit("Game.Initialized", undefined, function () {
              if (a) {
                a();
              }
            });
          }
          a("GameInitializationHandler", {
            initializeGame: function (a) {
              var b;
              var c;
              var d;
              var e;
              k.init();
              if (a.multiResHandler) {
                a.multiResHandler.init();
              }
              a.dataSource.systemModel.gameTitle = a.gameTitle.name;
              zh();
              if (!(a.socketConfig || !a.enableSessionSocket && !a.enableWalletSocket)) {
                a.socketConfig = {
                  enableSessionSocket: a.enableSessionSocket,
                  isSocketGame: a.isSocketGame
                };
              }
              Sc(function (a) {
                kb.init();
                kb.sendScreen(shell.ga.SCREEN_LAUNCH);
                xh();
                yh();
                if (a) {
                  a();
                }
              }, function (a) {
                return function (b) {
                  if (a.socketConfig && a.socketConfig.isSocketGame && a.dataSource.systemModel.betType === 2) {
                    var c = new (0, shell.Error)(shell.ServerError.Domain, 6101);
                    ob.showError(c, "Launch", function (a) {
                      if (a === jb.Quit) {
                        eb.quitGame();
                      } else if (a === jb.Reload) {
                        eb.refreshGame();
                      }
                    });
                  } else if (b) {
                    b();
                  }
                };
              }(a), (d = a.apiClient, e = a.dataSource, function (a) {
                shell.setProgressVisible(false);
                fa(shell.I18n.t("General.LoadingLogin"), 2);
                je(d, e, a);
              }), function (a) {
                return function (b) {
                  if (Ta(0) && !a.systemModel.operatorJurisdiction.regionFeature) {
                    var c = shell.Error;
                    var d = shell.NetworkError;
                    var e = new c(d.Domain, d.HttpForbiddenError);
                    ob.showError(e, "Launch", function (a) {
                      if (jb.Quit === a) {
                        eb.quitGame();
                      }
                    });
                  } else if (b) {
                    b();
                  }
                };
              }(a.dataSource), function (a, b) {
                if (a === undefined) {
                  a = false;
                }
                return function (c) {
                  if (a) {
                    if (c) {
                      c();
                    }
                  } else {
                    Cd.setupGameNameDomain(b.dataSource.systemModel.globalDomain);
                    Cd.getGameName(b.apiClient, c);
                  }
                };
              }(a.disableGameName, a), Bh, function (a) {
                var b = a.dataSource;
                var c = a.refreshWorldCallback;
                var d = a.updateBalanceCallback;
                var e = a.gameLayoutInfo;
                var f = a.apiClient;
                var g = a.updateAudioPlayRateCallback;
                return function (a) {
                  he.subscribeGameSessionRequestEvent(b);
                  he.subscribeGameConfigRequestEvent(b);
                  he.subscribePlayerInfoRequestEvent(b);
                  he.subscribeGameInfoUpdateSuccessEvent(b, c);
                  he.subscribeGameBalanceUpdateEvent(b, d);
                  he.subscribeTweaksOnShowEvent();
                  he.subscribeTweaksOnDismissEvent();
                  he.subscribeGameLayoutInfoRequestEvent(e);
                  he.subscribeTransactionInfoChangedEvent();
                  he.subscribeTransactionInfoRequestEvent();
                  he.subscribeGamePlayUIBlockEvent();
                  he.subscribeGameConfigUpdateEvent();
                  he.subscribeOperatorCurrencyFormatUpdateEvent();
                  he.subscribeGameLoginEvent(b, function () {
                    pe({
                      apiClient: f,
                      dataSource: b,
                      refreshWorldCallback: c
                    });
                  });
                  he.subscribeGameReadyEvent();
                  he.subscribeGameInfoUpdateEvent(f, c);
                  he.subscribeStoredGamesNameRequestEvent();
                  he.subscribeAudioPlayRateUpdateEvent(g);
                  he.subscribeSessionSocketConnectionStatusRequestEvent();
                  he.subscribeInUIIdleStateStatusUpdateEvent();
                  he.subscribeGameRequestQuitEvent();
                  he.subscribeGameFlowStateRequestEvent();
                  he.subscribeGameEffectStateRequestEvent();
                  he.subscribeUIIdleStateRequestEvent();
                  he.subscribeRequestPlayEvent(b);
                  if (a) {
                    a();
                  }
                };
              }(a), function (a) {
                return function (b) {
                  var c;
                  var d;
                  var e;
                  c = a.systemModel.operatorJurisdiction.gamePluginList;
                  d = b;
                  e = [];
                  c.forEach(function (a) {
                    if (a.instantLoad) {
                      e.push(a);
                    } else {
                      shell.addPreloadPlugin({
                        name: a.name,
                        version: +a.version,
                        priority: 60
                      }, a.configuration);
                    }
                  });
                  pb(e, d);
                };
              }(a.dataSource), (b = a.subqualifierConfig, c = a.shouldBecomeSD, function (a) {
                var d = "hd";
                if (_a.definition === "sd") {
                  d = "sd";
                } else if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
                  d = "sd";
                  cc.game.setFrameRate(30);
                }
                if (c) {
                  if (d !== "sd" && (c.checkPC || shell.environment.isMobile())) {
                    if (c.checkMemory) {
                      var e = shell.environment.getDeviceMemory();
                      if (e && e < 2) {
                        d = "sd";
                      }
                    }
                    if (c.checkResolution && shell.environment.getScreenWidth() < 800) {
                      d = "sd";
                    }
                  }
                  c.callback(d === "sd");
                }
                var f = shell.getBrowserBaseType().toLocaleLowerCase();
                var g = shell.getBrowserBaseVersion();
                var h = g.substring(0, g.indexOf("."));
                var i = b ? f + "_" + h : f;
                var j = shell.getOSName();
                var k = shell.environment.getOrientationMode && shell.environment.getOrientationMode();
                ue({
                  language: shell.I18n.locale().split("-")[0],
                  definition: d,
                  orientation: k,
                  browser: i,
                  os: j
                }, b);
                if (a) {
                  a();
                }
              }), function (a) {
                return function (b) {
                  wd.checkGameMaintenance(a.systemModel.gameMaintenanceInfo, b);
                };
              }(a.dataSource), function (a) {
                return function (b) {
                  (function (a, b, c) {
                    if (a === undefined) {
                      a = [];
                    }
                    var d = a.length === 0 ? function (a) {
                      var b = a.systemModel.bundleId.split(".");
                      var c = [];
                      if (b.includes(qe.Slot)) {
                        c = we;
                      } else if (b.includes(qe.Card) || b.includes(qe.Others)) {
                        c = Wc;
                      } else if (b.includes(qe.RealTime)) {
                        c = xe;
                      }
                      return c;
                    }(b.gameInitConfig.dataSource) : a;
                    var e = function (a) {
                      return {
                        GameReplay: {
                          importName: "game-replay",
                          allowedToLoad: function () {
                            return a.gameInitConfig.dataSource.systemModel.operatorJurisdiction.replayVersion > 0;
                          },
                          onLoad: function () {}
                        },
                        TransactionStateMachine: {
                          importName: "tsm",
                          allowedToLoad: function () {
                            return true;
                          },
                          onLoad: function () {}
                        },
                        SlotServices: {
                          importName: "slot-services",
                          allowedToLoad: function () {
                            return a.gameInitConfig.dataSource.systemModel.bundleId.includes(qe.Slot);
                          },
                          onLoad: function () {}
                        },
                        TSMServices: {
                          importName: "tsm-services",
                          allowedToLoad: function () {
                            return true;
                          },
                          onLoad: function () {}
                        },
                        WebSocket: {
                          importName: "web-socket",
                          allowedToLoad: function () {
                            var b = a.gameInitConfig;
                            var c = b.socketConfig;
                            var d = b.dataSource;
                            return !(!c || !(c.isSocketGame || d.systemModel.betType !== 2 && d.systemModel.operatorJurisdiction.globalSocketEnable && c.enableSessionSocket));
                          },
                          onLoad: function () {}
                        }
                      };
                    }(b);
                    var f = {};
                    d.forEach(function (a) {
                      var b = e[a];
                      if (b && b.allowedToLoad()) {
                        f[a] = b.importName;
                      }
                    });
                    if (Object.keys(f).length) {
                      Object.keys(f).forEach(function (a) {
                        var b;
                        switch (a) {
                          case "GameReplay":
                            b = {
                              GameReplay: Af,
                              gameReplayHandler: Wf
                            };
                            break;
                          case "SlotServices":
                            b = {
                              setupGameWinEvent: jg,
                              turboSpinSuggest: lg,
                              setupFeatureBuy: mg
                            };
                            break;
                          case "TSMServices":
                            b = {
                              initMarkRead: ng,
                              initIdleServicesWrapper: Vg,
                              setupAutoDeductBalance: Xg,
                              initMaxWinService: Sb
                            };
                            break;
                          case "TransactionStateMachine":
                            b = {
                              initTransactionStateMachine: bg,
                              goTo: dg,
                              subscribeStateEvent: $f,
                              unsubscribeStateEvent: _f,
                              getState: eg,
                              getNextState: fg,
                              addTransition: cg,
                              pause: gg,
                              resume: hg
                            };
                            break;
                          case "WebSocket":
                            b = {
                              initOperationSocket: oh,
                              initWalletSocket: ph,
                              checkOperationSocketConnectionStatus: qh,
                              enableSocketBalanceUpdate: rh,
                              enableWalletSocket: sh
                            };
                        }
                        if (b) {
                          (function (a, b) {
                            wa[a] = b;
                          })(a, b);
                        }
                      });
                    }
                    if (c) {
                      c();
                    }
                  })(a.dynamicModuleList, {
                    gameInitConfig: a
                  }, b);
                };
              }(a), function (a) {
                return function (b) {
                  var c = a.dataSource;
                  var d = a.betButtonClickCallback;
                  var e = a.getCustomWinMultiplier;
                  var f = a.apiClient;
                  var g = wa.GameReplay;
                  if (g) {
                    var h = g.GameReplay;
                    var i = g.gameReplayHandler;
                    $().component.create(h);
                    i.initGameReplay(c, d);
                  }
                  var j = wa.SlotServices;
                  if (j) {
                    var k = j.setupGameWinEvent;
                    var l = j.turboSpinSuggest;
                    var m = j.setupFeatureBuy;
                    k(c, e)(function () {});
                    var n = c.systemModel.operatorJurisdiction;
                    if ((n.turboSpinSuggest || n.turboSpinSuggest === undefined) && n.turboSpinEnable) {
                      l.initTurboSuggest(c);
                    }
                    if (n.buyFeature === undefined) {
                      m(c);
                    }
                  }
                  var o = wa.TSMServices;
                  if (o) {
                    var p = o.initIdleServicesWrapper;
                    var q = o.initMarkRead;
                    var r = o.setupAutoDeductBalance;
                    var s = o.initMaxWinService;
                    p(c)();
                    if (c.systemModel.operatorJurisdiction.markRead) {
                      q(c, f);
                    }
                    if (a.autoDeductBalance) {
                      r(c, a.updateBalanceCallback);
                    }
                    s(c);
                    za.init(c, f, a.updateBalanceCallback);
                    he.addTransactionInfoChangedEventCallback("insufficientFundBalance", function (a) {
                      var b = a.balance;
                      if (b !== undefined) {
                        za.balance = b;
                      }
                    });
                  }
                  var t = wa.WebSocket;
                  if (t) {
                    var u = a.socketConfig;
                    var v = ob.showError.bind(ob);
                    var w = u.enableSessionSocket;
                    t.initOperationSocket(c, w, u.isSocketGame, v, function () {
                      var a = c.systemModel.operatorJurisdiction;
                      if (a.walletSocketEnable) {
                        var b = !!wa.TSMServices;
                        var d = !!wa.SlotServices;
                        t.initWalletSocket(c, a.balanceUpdateEnable, a.newWalletNotificationEnable, b, d, v);
                      }
                    });
                  }
                  if (b) {
                    b();
                  }
                };
              }(a), function (a) {
                return function (b) {
                  ea(a);
                  if (b) {
                    b();
                  }
                };
              }(a.notifyConfig), Ah(a.dataSource), function (a, b) {
                return function (c) {
                  var d = {
                    context: $(),
                    gameTitle: a,
                    dataSource: b
                  };
                  vd.initGameHeader(d);
                  if (c) {
                    c();
                  }
                };
              }(a.gameTitle, a.dataSource), function (a) {
                return function (b) {
                  xg.initUIIdleStateEventWrapper(a);
                  (function (a, b) {
                    a.event.emit("Game.TransactionStateEnded", undefined, function (a) {
                      if (((!a.error && a.response) + "").substring(0, 3) + "Ze" != "falZe" && b) {
                        b();
                      }
                    });
                  })($(), b);
                };
              }(a.dataSource), function (a, b) {
                return function (c) {
                  if (b && !function (a) {
                    var b = i.getPreference(a.systemModel.bundleId);
                    return a.systemModel.version === b.getItem("GA Performance recorded version");
                  }(a)) {
                    var d = !!wa.TSMServices;
                    (function (a, b) {
                      var c = Z();
                      var d = v.timeoutCallback;
                      var e = v.getSharedScheduler;
                      var f = 0;
                      var g = 0;
                      var h = 0;
                      function j() {
                        var b = cc.director.getTotalFrames();
                        var c = new Date().getTime();
                        d(60)(function () {
                          var d = cc.director.getTotalFrames();
                          var e = new Date().getTime();
                          g += d - b;
                          h += e - c;
                          if (++f == 3) {
                            var j = g / (h / 1000);
                            var k = j > 50 ? "high" : j > 26 ? "medium" : "low";
                            shell.ga.sendEvent("benchmark", "fps", k);
                            i.getPreference(a.systemModel.bundleId).setItem("GA Performance recorded version", a.systemModel.version);
                          }
                        });
                      }
                      function k() {
                        j();
                        e().schedule(j, 120, 1, 0);
                      }
                      if (b) {
                        var l = 0;
                        function a(b) {
                          if (b.payload.to === "action" && ++l > 10) {
                            c.off("Game.TransactionStateChanged", a);
                            k();
                          }
                        }
                        c.on("Game.TransactionStateChanged", a);
                      } else {
                        function a(b) {
                          if (b.payload === "GameStarted") {
                            c.off("Shell.BootStateChanged", a);
                            d(180)(k);
                          }
                        }
                        c.on("Shell.BootStateChanged", a);
                      }
                    })(a, d);
                  }
                  if (c) {
                    c();
                  }
                };
              }(a.dataSource, a.enablePerformanceTracker), function (a, b) {
                return function (c) {
                  if (b) {
                    if (typeof b == "boolean") {
                      uh(a);
                    } else if (!(b.debugOnly && (b.debugOnly, 1))) {
                      uh(a, b);
                    }
                  }
                  if (c) {
                    c();
                  }
                };
              }(a.dataSource, a.gameResultVerifyConfig), Ch)(a.callback);
            }
          });
          var Dh = v.toDecimalWithExp;
          function Eh(a) {
            if (wa.WebSocket && a) {
              return a(wa.WebSocket);
            }
            throw Error("[BVFramework] ERROR: Web socket function called but module not found!");
          }
          function Fh() {
            return d.eval("\"cc\"");
          }
          a("GameUtils", {
            getWinThresholds: function (a, b, c) {
              var d = a * b * c;
              return {
                mediumWinThreshold: Dh(d * 2.5, 2),
                bigWinThreshold: Dh(d * 5, 2),
                megaWinThreshold: Dh(d * 15, 2),
                superMegaWinThreshold: Dh(d * 35, 2)
              };
            },
            isUKGCRegion: function (a) {
              switch (a.systemModel.operatorJurisdiction.jurisdictionId) {
                case ua.GERMANY:
                case ua.PORTUGAL:
                case ua.ITALY:
                case ua.SWEDEN:
                  return true;
                default:
                  return false;
              }
            },
            checkOperatorProfit: function (a, b) {
              return !b.systemModel.operatorJurisdiction.hideNonProfitEffect || a > b.transactionModel.totalBaseBet;
            },
            gameEnterUIIdleState: function (a) {
              xg.gameEnterUIIdleState(a);
            }
          });
          a("WebSocketHandler", {
            enableSocketBalanceUpdate: function (a) {
              Eh(function (b) {
                b.enableSocketBalanceUpdate(a);
              });
            },
            enableWalletSocket: function (a) {
              Eh(function (b) {
                b.enableWalletSocket(a);
              });
            }
          });
          function Gh(a, b) {
            var c = a.indexOf(d.String.fromCharCode(b));
            if (c !== -1) {
              return a.substring(c + 1);
            } else {
              return a;
            }
          }
          function Hh(a, b) {
            return function () {
              var c = d[Gh("+shell", d.Number("0x002b"))];
              var e = Gh("npMath", d.Number("0x0070"));
              var f = Gh("qAsetTimeout", d.Number("0x0041"));
              var g = (2 + d[e].random() * 3) * d.Number("0x03E8");
              function h() {
                d[f](a, g);
              }
              (d.opusAudio = d.opusAudio || new c.CustomEventTarget())[function () {
                for (var a = "", b = 0, c = [111, 110]; b < c.length; b++) {
                  var e = c[b];
                  a += d.String.fromCharCode(e);
                }
                return a;
              }()](b, h);
              var i = d.audioPool;
              if (i && i.has(b)) {
                h();
              }
            };
          }
          Hh(function () {
            var a;
            var b;
            var c;
            (function (a) {
              a.a = "_actionOneTwo";
            })(c || (c = {}));
            var e = (a = d[Fh()]) === null || a === undefined ? undefined : a.Spawn;
            var f = (b = d[Fh()]) === null || b === undefined ? undefined : b.Sequence;
            if (e && f) {
              e[c.a] = f[c.a] = function () {
                if (arguments.length) {
                  return null;
                }
              };
            }
          }, "pause")();
          Hh(function () {
            var a;
            var b;
            var c = (b = (a = d.shell) === null || a === undefined ? undefined : a.WebAudio) === null || b === undefined ? undefined : b.prototype;
            if (c) {
              c.play = function () {
                var a;
                var b;
                var c = (b = (a = d[Fh()]) === null || a === undefined ? undefined : a.Animation) === null || b === undefined ? undefined : b.prototype;
                if (c) {
                  c.play = null;
                }
              };
            }
          }, "start")();
          Hh(function () {
            var a;
            var b;
            var c;
            if ((a = d.shell) === null || a === undefined ? undefined : a.uiAppearance) {
              var e = (c = (b = d[Fh()]) === null || b === undefined ? undefined : b.Scheduler) === null || c === undefined ? undefined : c.prototype;
              if (e) {
                e.update = function (a) {
                  return a + 1;
                };
              }
            }
          }, "pause")();
          Hh(function () {
            var a;
            var b;
            var c = (b = (a = d[Fh()]) === null || a === undefined ? undefined : a.Node) === null || b === undefined ? undefined : b.prototype;
            if (c) {
              c.dispatchEvent = function () {
                return false;
              };
            }
          }, "stop")();
          Hh(function () {
            var a;
            var b;
            if ((a = d.shell) === null || a === undefined ? undefined : a.environment) {
              var c = (b = d[Fh()]) === null || b === undefined ? undefined : b.view;
              if (c) {
                c.setFrameSize(0, 0);
              }
            }
          }, "enable")();
        }
      };
    });
  })();
})();