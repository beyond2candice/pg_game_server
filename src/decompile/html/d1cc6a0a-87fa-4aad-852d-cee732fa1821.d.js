!function () {
  'use strict';

  !function () {
    var C = function () {
      var S = true;
      return function (p, o) {
        var b = S ? function () {
          if (o) {
            var w = o.apply(p, arguments);
            o = null;
            return w;
          }
        } : function () {};
        S = false;
        return b;
      };
    }();
    var W;
    !function (S) {
      var p = C(this, function () {
        return p.toString().search("(((.+)+)+)+$").toString().constructor(p).search("(((.+)+)+)+$");
      });
      p();
      S.bv_t = "window";
      S.bv_n = "self";
    }(W || (W = {}));
    var I = (0x0, eval)("this");
    I[W.bv_n];
    var G = I[W.bv_t];
    System.register(["ba588d9dad", "99212c6ec4", "3d9bb7755c", "6d5cafebdb", "react", "react-dom"], function (S) {
      'use strict';

      var p;
      var b;
      var w;
      var v;
      var g;
      var j;
      var N;
      var F;
      var D;
      var H;
      var R;
      var P;
      return {
        'setters': [null, function (Z) {
          p = Z.ResRC;
          b = Z.Utils;
          w = Z.Deserialiser;
          v = Z.XHR;
          g = Z.Preference;
          j = Z.CanvasResizeBroadcaster;
        }, function (Z) {
          N = Z.LoginMethod;
          F = Z.LoginGameStatus;
        }, null, function (Z) {
          D = Z["default"];
          H = Z.useState;
          R = Z.useEffect;
        }, function (Z) {
          P = Z["default"];
        }],
        'execute': function () {
          S("getGameContext", Ck);
          var C0 = G.__extends;
          var C1 = G.__assign;
          var C2 = G.__decorate;
          var C3 = G.__awaiter;
          var C4 = G.__generator;
          var C5 = G.__spreadArray;
          function C6(p1, p2) {
            var p3 = {};
            for (var p4 in p2) if (p1.hasOwnProperty(p4)) {
              p3[p1[p4]] = p2[p4];
            } else {
              p3[p4] = p2[p4];
            }
            return p3;
          }
          C6({
            'unloadBundleAsset': "releaseBundleAsset",
            'unload': "release",
            'unloadBundle': "releaseBundle",
            'deleteBundle': "removeBundle",
            'loadByBundleAsset': "loadBundleAsset",
            'loadRemoteBySingle': "loadRemoteSingle"
          }, p);
          var C7 = C6({
            'convertNodeSpace': "convertToNodeSpace",
            'convertNodeSpaceAR': "convertToNodeSpaceAR",
            'getAbsolutePos': "getAbsolutePosition",
            'getAbsoluteXPos': "getAbsoluteX",
            'getAbsoluteYPos': "getAbsoluteY",
            'setAbsolutePos': "setAbsolutePosition",
            'setAbsoluteXPos': "setAbsoluteX",
            'setAbsoluteYPos': "setAbsoluteY",
            'transferToNewParent': "transferToParent",
            'getSharedSimpleScheduler': "getSharedScheduler",
            'delay': "delayCallback",
            'timeout': "timeoutCallback",
            'selector': "selectorCallback",
            'sequence': "sequenceCallback",
            'spawn': "spawnCallback",
            'waterfall': "waterfCallback",
            'condition': "condCallback",
            'defer': "deferCallback",
            'tick': "tickCallback",
            'observe': "observeCallback",
            'formatLeadingZero': "formatTwoDigit",
            'formatDateTime': "formatDate",
            'isRightToLeft': "isRTL",
            'getLocationProtocol': "getProtocol",
            'getLocationOrigin': "getOrigin"
          }, b);
          function C9(p1) {
            var p2 = undefined;
            if ("[object Object]" === Object.prototype.toString.call(p1) && p1.hasOwnProperty("err") && p1.hasOwnProperty('dt')) {
              var p3 = p1.err;
              if (p3) {
                p2 = function (p4) {
                  var p5;
                  if (!("[object Object]" === Object.prototype.toString.call(p4))) {
                    p4 = {};
                  }
                  if (!(p4.hasOwnProperty('cd') && ("number" == typeof (p5 = p4.cd) || "string" == typeof p5 && '' !== p5 && !/\s/.test(p5) && !isNaN(+p5)))) {
                    p4.cd = 0x1965;
                  }
                  0x0;
                  return new shell.Error(shell.ServerError.Domain, p4.cd, p4.tid);
                }(p3);
              }
            } else {
              0x0;
              p2 = new shell.Error(shell.ServerError.Domain, 0x1965);
            }
            return p2;
          }
          function CC(p1) {
            return function (p2, p3) {
              p2 = p2 || C9(p3);
              p1(p2, p3);
            };
          }
          function Cd(p1, p2, p3, p4) {
            var p5 = p1.request("POST", p2, p3, CC(p4));
            return function () {
              return p5.abort();
            };
          }
          S("XHRHelper", Object.freeze({
            '__proto__': null,
            'extractError': C9,
            'postRequest': Cd,
            'responseCallbackWrapper': CC
          }));
          var CT;
          var CW = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.transformResponse = function (p4) {
                return p4;
              };
              return p3;
            }
            C0(p2, p1);
            return p2;
          }(w);
          var CI = S("XHRHandler", function () {
            function p1() {
              this.bv_e = undefined;
              this.bv_i = undefined;
              this.bv_r = undefined;
              this.bv_o = new CW("json");
              this.bv_a = new v(undefined, this.bv_o);
            }
            p1.prototype.setAPIUrls = function (p2) {
              this.bv_e = p2.getFullGameEngineUrl();
              this.bv_i = p2.getFullServiceEngineUrl();
              this.bv_r = p2.getFullServiceEngineUrlSD();
            };
            p1.prototype.request = function (p2, p3, p4) {
              return Cd(this.bv_a, this.bv_e + p2, p3, p4);
            };
            p1.prototype.serviceRequest = function (p2, p3, p4) {
              return Cd(this.bv_a, this.bv_i + p2, p3, p4);
            };
            p1.prototype.serviceSDRequest = function (p2, p3, p4) {
              return Cd(this.bv_a, this.bv_r + p2, p3, p4);
            };
            p1.prototype.operatorApiRequest = function () {
              return C7.emptyFunc;
            };
            return p1;
          }());
          !function (p1) {
            p1[p1.Low = 0xfa] = "Low";
            p1[p1.Medium = 0x1f4] = "Medium";
            p1[p1.High = 0x2ee] = "High";
          }(CT || (CT = {}));
          var CG;
          var CS;
          var Cp = {
            'Low': CT.Low,
            'Medium': CT.Medium,
            'High': CT.High
          };
          function Cb(p1) {
            return function () {
              return p1.reduce(function (p2, p3) {
                return p2.then(function (p4) {
                  return p4 ? p3() : p4;
                });
              }, G.Promise.resolve(0x1))["catch"](function () {
                return 0x0;
              });
            };
          }
          function CN() {
            var p2 = CH(G, "crypto");
            return !(!p2 || G.Object.prototype.hasOwnProperty.call(p2, "subtle") || !CR(p2, "subtle"));
          }
          function CH(p1, p2) {
            try {
              return G.Object.getOwnPropertyDescriptor(p1, p2) ? G.Object.getOwnPropertyDescriptor(p1, p2).get ? -0x1 !== (G.Object.getOwnPropertyDescriptor(p1, p2).get + '').indexOf("[native code]") ? G.Object.getOwnPropertyDescriptor(p1, p2).get.apply(p1) : undefined : G.Object.getOwnPropertyDescriptor(p1, p2).value : G.Object.getOwnPropertyDescriptor(p1, p2);
            } catch (p3) {}
          }
          function CR(p1, p2) {
            try {
              var p3 = G.Object.getPrototypeOf(p1);
              return G.Object.getOwnPropertyDescriptor(p3, p2) ? G.Object.getOwnPropertyDescriptor(p3, p2).get ? -0x1 !== (G.Object.getOwnPropertyDescriptor(p3, p2).get + '').indexOf("[native code]") ? G.Object.getOwnPropertyDescriptor(p3, p2).get.apply(p1) : undefined : G.Object.getOwnPropertyDescriptor(p3, p2).value : G.Object.getOwnPropertyDescriptor(p3, p2);
            } catch (p4) {}
          }
          function CP(p1, p2) {
            if (undefined === p2) {
              p2 = G;
            }
            return p1.replace(/ /g, '').split('.').reduce(function (p3, p4) {
              return null != p3 ? CH(p3, p4) : p3;
            }, p2);
          }
          function CZ() {
            return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (p1) {
              return !(-0x1 !== (CP(p1) + '').indexOf("[native code]"));
            });
          }
          function Ch(p1) {
            var p2 = [" SamsungBrowser", "UCBrowser", " Quark", "QQBrowser", " OppoBrowser", " VivoBrowser", " 360(SE|EE) ", " b(?:ai)?d(?:u)?browser "];
            var p3 = [];
            for (var p4 = 0x0; p1;) {
              if (0x1 & p1 && p4 < p2.length) {
                p3.push(p2[p4].replace(/ /g, ''));
              }
              p1 >>= 0x1;
              p4++;
            }
            if (p3.length) {
              var p5 = new G.RegExp(p3.join(" | ".replace(/ /g, '')), " i ".replace(/ /g, ''));
              return function () {
                return p5.test(G.navigator.userAgent);
              };
            }
            return function () {
              return false;
            };
          }
          function Cz(p1) {
            var p2 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][p1];
            return p2.substring(G.Number("0xf") - G.Number("0x0" + p2[0x0]));
          }
          function Cl() {
            return 0x1 === G[Cz(0x4)].max(0x1, 0x14 * G[Cz(0x4)].random());
          }
          function CL(p1) {
            var p2;
            var p3;
            !function (pd) {
              pd.bv_u = "name";
              pd.bv_c = "hash";
            }(p3 || (p3 = {}));
            var p7 = null === (p2 = G.crypto) || undefined === p2 ? undefined : p2.subtle;
            var p8 = new G.TextEncoder();
            var p9 = function (pd) {
              var pT = {
                [p3.bv_u]: "HMAC",
                [p3.bv_c]: "SHA-256"
              };
              var pW = null == p7 ? undefined : p7.importKey("raw", p8.encode(pd).buffer, pT, false, ["sign"]);
              return G.Promise.resolve(pW);
            }(p1);
            function pC(pd) {
              return C3(this, undefined, undefined, function () {
                var pT;
                var pW;
                var pI;
                return C4(this, function (pG) {
                  switch (pG.label) {
                    case 0x0:
                      return [0x4, p9];
                    case 0x1:
                      return (pT = pG.sent()) ? (pW = p8.encode(pd).buffer, (pI = {})[p3.bv_u] = "HMAC", pI[p3.bv_c] = "SHA-256", [0x4, p7.sign(pI, pT, pW)]) : [0x2, ''];
                    case 0x2:
                      pS = pG.sent();
                      return [0x2, new G.Uint8Array(pS).reduce(function (pp, pb) {
                        return pp + G.Number(pb).toString(0x10).padStart(0x2, '0');
                      }, '')];
                  }
                  var pS;
                });
              });
            }
            return function (pd, pT, pW) {
              if (undefined === pW) {
                pW = true;
              }
              return C3(this, undefined, undefined, function () {
                return C4(this, function (pI) {
                  switch (pI.label) {
                    case 0x0:
                      return pT && pd ? [0x4, pC(pd)] : [0x2, false];
                    case 0x1:
                      return [0x2, !(!pI.sent() || !pT) && (pW ? pI.sent().substring(G.Number("0x0"), pT.length) === pT : pI.sent() === pT)];
                  }
                });
              });
            };
          }
          function Ck() {
            return CG;
          }
          S("BVFrameworkEnum", {
            'EN_GAME_LAYER_Z_INDEX_LOW': CT.Low,
            'EN_GAME_LAYER_Z_INDEX_MEDIUM': CT.Medium,
            'EN_GAME_LAYER_Z_INDEX_HIGH': CT.High
          });
          S("default", function (p1) {
            function p2() {
              return null !== p1 && p1.apply(this, arguments) || this;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              CS = this.context;
              var p3 = shell.getGameContext();
              var p4 = p3.event;
              p3.on = p4.on.bind(p4);
              p3.off = p4.off.bind(p4);
              p3.once = p4.once.bind(p4);
              p3.emit = p4.emit.bind(p4);
              (CG = p3).on("Game.RequestLayerType", function (p5) {
                var p6 = p5.payload;
                if ("All" === p6) {
                  p5.response = Cp;
                } else {
                  var p7 = CT[p6];
                  if (!p7) {
                    p7 = CT.Low;
                  }
                  p5.response = p7;
                }
              });
              (function (p5) {
                var p7 = new G.Promise(function (pd, pT) {
                  p5.once("Login.OnLogin", function (pW) {
                    var pI = pW.payload;
                    var pG = pI.err;
                    var pS = pI.res;
                    if (pG) {
                      pT();
                    } else {
                      pd(pS.operatorPromotionId);
                    }
                  }, undefined);
                });
                p7["catch"](function () {});
                var p8;
                var p9 = function (pd) {
                  return new G.Promise(function (pT) {
                    var pW = false;
                    pd.on("Shell.BootStateChanged", function pG(pS) {
                      if (!pW) {
                        if ("LatePluginLoad" === pS.payload) {
                          pW = true;
                          pT();
                          G.Promise.resolve().then(function () {
                            return pd.off("Shell.BootStateChanged", pG, undefined);
                          });
                        }
                      }
                    }, undefined);
                  });
                }(p5);
                function pC(pd, pT) {
                  var pW = p9.then(function () {
                    return function (pI) {
                      return new G.Promise(function (pG, pS) {
                        pI.emit("Game.RequestSession", undefined, function (pp) {
                          var pb = pp.response;
                          if (pb) {
                            var pw = pb.token;
                            var pv = pb.sessionId;
                            var pg = pb.gameId;
                            var pj = pb.operatorToken;
                            pG({
                              'bv_s': pw,
                              'bv_l': pv,
                              'bv_f': pg,
                              'bv_h': pj
                            });
                          } else {
                            pS();
                          }
                        });
                      });
                    }(p5);
                  });
                  pW["catch"](function () {});
                  G.Promise.all([p7, pW]).then(function (pI) {
                    pI[0x1].bv_d = pI[0x0];
                    return function (pG) {
                      return C3(this, undefined, undefined, function () {
                        var pS;
                        var pp;
                        var pb;
                        return C4(this, function (pw) {
                          switch (pw.label) {
                            case 0x0:
                              pS = CL("suER3N4z2BqFg9VCYg".substring(0x2));
                              pp = pG.bv_d;
                              pb = function () {
                                return C3(this, undefined, undefined, function () {
                                  var pv;
                                  return C4(this, function (pg) {
                                    switch (pg.label) {
                                      case 0x0:
                                        pv = function (pj) {
                                          return G[Cz(0x1)][Cz(0x2)] + G.String(pj.bv_f) + pj.bv_h + G.encodeURIComponent(pj.bv_s);
                                        }(pG);
                                        return [0x4, pS(pv, pp, true)];
                                      case 0x1:
                                        return pg.sent() ? [0x2, true] : [0x2, false];
                                    }
                                  });
                                });
                              };
                              return [0x4, pb()];
                            case 0x1:
                              return [0x2, pw.sent()];
                          }
                        });
                      });
                    }(pI[0x1]);
                  }, function () {
                    return G.Promise.resolve(true);
                  }).then(function (pI) {
                    pd(pI);
                  }, pT);
                }
                p5.on("Game.SendApiResponse", function (pd) {
                  pd.intercept();
                  if (!p8) {
                    p8 = function () {
                      return C3(this, undefined, undefined, function () {
                        var pT;
                        return C4(this, function (pW) {
                          switch (pW.label) {
                            case 0x0:
                              (pT = [CZ]).push(CN);
                              return [0x4, Cb(pT = pT.concat([Cl]))()];
                            case 0x1:
                              return pW.sent() ? [0x2, new G.Promise(pC)] : [0x2, true];
                          }
                        });
                      });
                    }();
                  }
                  p8.then(function (pT) {
                    pd.response = pT;
                    pd.propagate();
                  }, function () {
                    pd.response = false;
                    pd.propagate();
                  });
                }, undefined);
              })(CS.event);
              this.complete();
            };
            return C2([plugin.PluginMainComponent("f72f5b9e6e")], p2);
          }(plugin.AbstractPluginComponent));
          var Cm;
          var CU = false;
          var CQ = 0x0;
          !function (p1) {
            p1[p1.SLOT = 0x1] = "SLOT";
            p1[p1.CARD = 0x2] = "CARD";
          }(Cm || (Cm = {}));
          var Cf;
          var Cx = {
            'label': shell.I18n.t("General.ResourceLoadingMessage"),
            'isFullBackground': true,
            'enableBackground': true,
            'opacity': 0x1,
            'inAnimate': "Fade",
            'inDuration': 0.3,
            'inValue': 0x0,
            'outAnimate': "Fade",
            'outValue': 0x0,
            'outDuration': 0.3
          };
          function Cs(p1) {
            var p2;
            var p3 = p1.theme;
            var p4 = p1.backgroundColor;
            var p5 = p1.titleColor;
            var p6 = p1.messageColor;
            var p7 = p1.buttonColor;
            var p8 = p1.buttonTitleColor;
            var p9 = p1.buttonFontWeight;
            var pC = p1.buttonFontStyle;
            CG.on("Shell.BootStateChanged", CX);
            switch (p3) {
              case Cm.SLOT:
                p2 = "Slot";
                break;
              case Cm.CARD:
                p2 = "Card";
                break;
              default:
                throw Error("Notify - invalid theme");
            }
            var pT = {};
            pT = p7.gradient ? {
              'gradient': p7.gradient
            } : {
              'color': p7
            };
            pT = C1({
              'fontColor': p8,
              'fontWeight': p9,
              'fontStyle': pC
            }, pT);
            CG.emit("Alert.UpdateTheme", {
              'theme': p2,
              'style': {
                'backgroundColor': p4,
                'titleColor': p5,
                'contentColor': p6,
                'button': pT
              }
            });
          }
          function Cc(p1, p2) {
            if (CU) {
              CG.emit("Toast.Show", {
                'toastStyle': "Message",
                'message': p1,
                'duration': p2,
                'imageSrc': '',
                'toastPosition': "Bottom"
              });
            } else {
              shell.setProgressMessage(p1);
            }
          }
          function CV(p1) {
            var p2 = [];
            var p3 = function (p4, p5) {
              var p6 = [];
              var p7 = 0x0;
              if (p4.actions) {
                p4.actions.forEach(function (p8) {
                  p6.push({
                    'label': p8.title,
                    'handler': p7
                  });
                  p5.push(p8.handler);
                  p7++;
                });
              }
              return {
                'title': p4.title_message,
                'content': p4.content_message,
                'actions': p6
              };
            }(p1, p2);
            CG.emit("Alert.Show", p3, function (p4) {
              var p5 = p4.response;
              var p6 = p2[p5];
              if (p6) {
                p6();
              }
            });
            return p3;
          }
          function CX(p1) {
            if ("GameStarted" === p1.payload) {
              CU = true;
              CG.off("Shell.BootStateChanged", CX);
            }
          }
          function CM(p1) {
            if (0x0 === CQ) {
              var p2 = false;
              if (p1) {
                var p3 = {
                  'backgroundColor': p1.backgroundColor,
                  'iconColor': p1.iconColor,
                  'labelColor': p1.labelColor
                };
                CG.emit("Loading.UpdateTheme", p3);
                p2 = !(!p1.iconColor && !p1.labelColor);
              }
              var p4 = p2 ? Cx : Object.assign(Cx, {
                'color': shell.uiAppearance.v("game.theme_color")
              });
              CG.emit("Loading.Show", p4);
            }
            CQ++;
          }
          function CK() {
            if (0x0 !== CQ && 0x0 == --CQ) {
              CG.emit("Loading.Hide");
            }
          }
          S("Notify", Object.freeze({
            '__proto__': null,
            get 'ThemeType'() {
              return Cm;
            },
            'hideFullLoadingPage': CK,
            'initNotify': Cs,
            'showDialog': CV,
            'showFullLoadingPage': CM,
            'showMessage': Cc,
            'showNotification': function (p1) {
              if (CU) {
                CG.emit("Toast.Show", {
                  'toastStyle': "Notification",
                  'imageSrc': p1.imageSrc,
                  'message': p1.message,
                  'duration': p1.duration,
                  'toastPosition': "Bottom"
                }, p1.eventCallback);
              }
            },
            'showToast': function (p1) {
              if (CU) {
                CG.emit("Toast.Show", {
                  'toastStyle': "Notification",
                  'message': p1.message,
                  'duration': p1.duration,
                  'toastPosition': "Bottom",
                  'imageSrc': ''
                }, p1.eventCallback);
              }
            }
          }));
          (function (p1) {
            p1[p1.NORMAL = 0x1] = "NORMAL";
            p1[p1.TRIAL = 0x2] = "TRIAL";
            p1[p1.TOURNAMENT = 0x3] = "TOURNAMENT";
          })(Cf || (Cf = {}));
          var CB = C7.timeoutCallback;
          function CA(p1) {
            shell.ga.sendTiming(shell.ga.CATEGORY_ACCESS, shell.ga.EVENT_LOGIN, Date.now() - p1);
          }
          function Cy(p1, p2) {
            var p4 = {
              'category': shell.ga.CATEGORY_ACCESS,
              'domain': p1.domain,
              'code': p1.code,
              'error': "Login Failed",
              'retry': p2 > 0x0 ? p2 : undefined
            };
            CG.emit("Error.Report", p4);
          }
          var a2 = function (p1) {
            switch (p1.loginMethod) {
              case N.Web:
                !function (p2) {
                  var p3 = Date.now();
                  var p4 = p2.on_complete;
                  var p5 = p2.on_error;
                  var p6 = p2.on_show;
                  var p7 = p2.on_dismiss;
                  if (p6) {
                    CG.once("Login.OnShow", p6);
                  }
                  if (p7) {
                    CG.once("Login.OnDismiss", p7);
                  }
                  CG.once("Login.OnLogin", function (p9) {
                    var pC = p9.payload;
                    var pd = pC.err;
                    var pT = pC.res;
                    if (pd) {
                      Cy(pd, 0x0);
                      p5(pd);
                    } else {
                      CA(p3);
                      p4(pT);
                    }
                  });
                  CG.emit("Login.Login", {
                    'apiDomain': p2.apiDomain,
                    'loginMethod': p2.loginMethod,
                    'gameId': p2.gameId,
                    'bundleId': p2.bundleId,
                    'operatorToken': p2.operatorToken,
                    'operatorPlayerSession': p2.operatorPlayerSession,
                    'playerSession': p2.playerSession,
                    'operatorParam': p2.operatorParam,
                    'betType': p2.betType,
                    'redirectOption': p2.redirectOption
                  });
                }(p1);
                break;
              case N.Session:
              default:
                !function (p2) {
                  var p3 = Date.now();
                  var p4 = p2.on_complete;
                  var p5 = p2.on_error;
                  var p6 = p2.on_show;
                  var p7 = p2.on_dismiss;
                  var p8 = undefined === p2.maxRetryCount ? 0x5 : p2.maxRetryCount;
                  if (p2.betType === Cf.TRIAL || p2.operatorPlayerSession || p2.playerSession) {
                    var pC = 0x0;
                    var pd = function () {
                      if (p6) {
                        CG.once("Login.OnShow", p6);
                      }
                      if (p7) {
                        CG.once("Login.OnDismiss", p7);
                      }
                      CG.once("Login.OnLogin", function (pI) {
                        var pG = pI.payload;
                        var pS = pG.err;
                        var pp = pG.res;
                        if (pS) {
                          Cy(pS, pC);
                          if (!function (pb) {
                            return pb.shouldRetry;
                          }(pS) || pC >= p8) {
                            p5(pS);
                          } else {
                            (function (pb) {
                              Cc(shell.I18n.t("Login.LoginFail", {
                                'times': {
                                  'ordinal': pb
                                }
                              }), 0x2);
                            })(++pC);
                            CB(0x1 << pC)(function () {
                              CG.emit("Shell.PWDReset");
                              pd();
                            });
                          }
                        } else {
                          CA(p3);
                          p4(pp);
                        }
                      });
                      CG.emit("Login.Login", {
                        'apiDomain': p2.apiDomain,
                        'loginMethod': p2.loginMethod,
                        'gameId': p2.gameId,
                        'bundleId': p2.bundleId,
                        'operatorToken': p2.operatorToken,
                        'operatorPlayerSession': p2.operatorPlayerSession,
                        'playerSession': p2.playerSession,
                        'operatorParam': p2.operatorParam,
                        'betType': p2.betType,
                        'redirectOption': p2.redirectOption
                      });
                    };
                    pd();
                  } else {
                    var pT = shell.ClientError;
                    0x0;
                    var pW = new shell.Error(pT.Domain, pT.AuthenticationError);
                    p5(pW);
                  }
                }(p1);
            }
          };
          S("LoginHelper", Object.freeze({
            '__proto__': null,
            'GameStatus': {
              'INACTIVE': 0x0,
              'ACTIVE': 0x1,
              'SUSPENDED': 0x2
            },
            'login': a2
          }));
          var a3 = function () {};
          S("Printer", Object.freeze({
            '__proto__': null,
            get 'enablePrinter'() {
              return a3;
            },
            get 'print'() {
              return a3;
            },
            get 'setActiveNode'() {},
            get 'setHolder'() {
              return a3;
            },
            get 'setPrinterVisible'() {
              return a3;
            }
          }));
          var a4;
          var a5;
          var a6 = {};
          var a7 = C7.emptyFunc;
          var a8 = C7.toDecimalWithExp;
          var a9 = new (function () {
            function p1() {
              this.bv_v = 0x0;
            }
            p1.prototype.init = function (p2, p3, p4) {
              this.bv_m = p2;
              this.bv_b = p3;
              this.bv_p = p4;
            };
            Object.defineProperty(p1.prototype, "insufficientFundResult", {
              'set': function (p2) {
                this.bv_g = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "balance", {
              'set': function (p2) {
                this.bv_v = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.hasSufficientFund = function (p2) {
              if (0x1 !== this.bv_m.transactionModel.stateTransitionTo || undefined === this.bv_g || 'G' === this.bv_m.lastTransactionRawData.wt) {
                return true;
              }
              var p3 = this.bv_S(p2);
              return this.bv_v >= p3;
            };
            p1.prototype.getInsufficientFundResult = function (p2, p3, p4) {
              var p5 = this;
              var p6 = this.bv_m.lastTransactionRawData;
              var p7 = this.bv_b;
              if ("0_C" === p6.wk.substring(0x0, 0x3)) {
                this.bv_y = p7.getWalletBalance(function (p8, p9) {
                  if (p8) {
                    p4(p8, undefined);
                  } else {
                    if (!p9 || !p9.dt) {
                      throw Error("Wallet Data Invalid");
                    }
                    var pC = p9.dt.cb;
                    p5.bv_v = pC;
                    p5.bv_p(pC);
                    p5.bv_G(p2, p3, p4);
                  }
                });
              } else {
                this.bv_G(p2, p3, p4);
              }
              return function () {
                if (p5.bv_y) {
                  p5.bv_y();
                }
              };
            };
            p1.prototype.bv_G = function (p2, p3, p4) {
              var p5 = this.bv_S(p2);
              var p6 = this.bv_m.lastTransactionRawData;
              if (this.bv_v < p5) {
                this.bv_w(p2, p6);
                var p7 = this.bv_g;
                p4(p7.error, p7.result);
                this.bv_y = a7;
              } else {
                this.bv_y = p3();
              }
            };
            p1.prototype.bv_S = function (p2) {
              var p3 = this.bv_m;
              return a8(p2.ml * p2.cs * p3.lastGameInfoRawData.dt.mxl, 0x2);
            };
            p1.prototype.bv_w = function (p2, p3) {
              var p4 = this.bv_g.result.dt.si;
              p4.ml = p2.ml;
              p4.cs = p2.cs;
              p4.fb = undefined === p2.fb ? null : p2.fb;
              p4.wk = p2.wk;
              p4.wt = p3.wt;
              p4.wbn = p3.wbn;
              p4.bl = p4.blab = p4.blb = this.bv_v;
              p4.ctw = p3.ctw;
              p4.cwc = p3.cwc;
              p4.fstc = p3.fstc;
              p4.ge = p3.ge;
              p4.hashr = p3.hashr;
              p4.psid = p3.psid;
              p4.sid = p3.sid;
            };
            return p1;
          }())();
          var aC = C7.getPlatform;
          var ad = C7.timeoutCallback;
          var aT = C7.emptyFunc;
          var aW = aC();
          var aI = {
            'getGameInfo': "v2/GameInfo/Get",
            'updateSystemInfo': "v2/GameInfo/Update",
            'markRead': "v2/MarkRead"
          };
          S("APIClient", function () {
            function p1(p2) {
              this.dataSource = p2;
              this.bv_C = new CI();
            }
            Object.defineProperty(p1.prototype, "xhrHandler", {
              'get': function () {
                return this.bv_C;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.login = function (p2) {
              var p3 = this;
              var p4 = this.dataSource.systemModel;
              var p5 = p4.apiDomain;
              var p6 = p4.loginMethod;
              var p7 = p4.gameId;
              var p8 = p4.bundleId;
              var p9 = p4.operatorToken;
              var pC = p4.operatorPlayerSession;
              var pd = p4.playerSession;
              var pT = p4.operatorParam;
              var pW = p4.betType;
              var pI = p4.redirectOption;
              a2({
                'on_complete': function (pG) {
                  p3.dataSource.updateLoginInfo(pG);
                  var pp = p3.dataSource.playerModel.playerId;
                  shell.ga.setUserId(pp);
                  p3.bv_C.setAPIUrls(p3.dataSource.systemModel);
                  if (p2) {
                    p2();
                  }
                },
                'on_error': function (pG) {
                  if (p2) {
                    p2(pG, undefined);
                  }
                },
                'apiDomain': p5,
                'loginMethod': p6,
                'gameId': p7,
                'bundleId': p8,
                'operatorToken': p9,
                'operatorPlayerSession': pC,
                'playerSession': pd,
                'operatorParam': pT,
                'betType': pW,
                'redirectOption': pI
              });
            };
            p1.prototype.getGameInfo = function (p2, p3) {
              var p4 = this;
              if (undefined === p3) {
                p3 = {};
              }
              return this.requestEngine("v2/GameInfo/Get", p3, function (p5, p6) {
                p4.logResult("getGameInfo", p6);
                if (p6 && p6.dt) {
                  var p7 = p6.dt.ls.si;
                  var p8 = p4.dataSource.transactionModel.transactionId;
                  var p9 = p4.dataSource.playerModel.walletKey;
                  if (!(p7.sid === p8 && p7.wk === p9)) {
                    p4.print(p7.sid);
                    p4.dataSource.updateGameInfo(p6);
                  }
                }
                if (p2) {
                  p2(p5, p6);
                }
              });
            };
            p1.prototype.updateGameInfo = function (p2, p3) {
              var p4 = this;
              if (undefined === p3) {
                p3 = {};
              }
              return this.requestEngine("v2/GameInfo/Update", p3, function (p5, p6) {
                p4.logResult("updateGameInfo", p6);
                if (p6 && p6.dt) {
                  var p7 = p6.dt.ls.si;
                  p4.print(p7.sid);
                  p4.dataSource.updateGameInfo(p6);
                }
                if (p2) {
                  p2(p5, p6);
                }
              });
            };
            p1.prototype.getGameRule = function (p2) {
              var p3 = this;
              return this.requestServiceEngine("v2/GameRule/Get", {}, function (p4, p5) {
                p3.logResult("getGameRule", p5);
                if (p2) {
                  p2(p4, p5);
                }
              });
            };
            p1.prototype.getGameName = function (p2) {
              var p3 = this;
              var p4 = {
                'lang': shell.I18n.locale()
              };
              return this.requestServiceEngine("v2/GameName/Get", p4, function (p5, p6) {
                p3.logResult("gameNameResult", p6);
                if (p2) {
                  p2(p5, p6);
                }
              });
            };
            p1.prototype.markRead = function (p2) {
              var p3 = this;
              if (undefined === p2) {
                p2 = 0x1;
              }
              var p4 = {
                'id': this.dataSource.transactionModel.transactionId,
                'ts': p2
              };
              return this.requestEngine("v2/MarkRead", p4, function (p5, p6) {
                p3.logResult("markRead", p6);
              });
            };
            p1.prototype.transferMoney = function () {
              return aT;
            };
            p1.prototype.getWalletBalance = function (p2) {
              var p3 = this;
              return this.requestServiceSDEngine("v2/GameWallet/Get", {}, function (p4, p5) {
                p3.logResult("getWalletBalance", p5);
                if (p2) {
                  p2(p4, p5);
                }
              });
            };
            p1.prototype._logResult = function () {};
            p1.prototype._print = function (p2) {
              var p3 = this.dataSource.playerModel.playerName;
              a3("version: " + this.dataSource.systemModel.version + "\nuser: " + p3 + "\nspinid: " + p2);
            };
            p1.prototype._requestEngine = function (p2, p3, p4) {
              if (this.dataSource.isGameReplaying && a6.GameReplay && !Object.values(aI).includes(p2)) {
                var p5 = a6.GameReplay.gameReplayHandler;
                ad(0.2)(function () {
                  var p6 = p5.nextReplayAPIResponse;
                  p4(undefined, p6);
                });
                return aT;
              }
              p3 = this.handleCommonParams(p3);
              return this.bv_C.request(p2, p3, p4);
            };
            p1.prototype._requestServiceEngine = function (p2, p3, p4) {
              (p3 = this.handleCommonParams(p3)).gid = this.dataSource.systemModel.gameId;
              return this.bv_C.serviceRequest(p2, p3, p4);
            };
            p1.prototype._handleCommonParams = function (p2) {
              if (undefined === p2) {
                p2 = {};
              }
              var p3 = this.dataSource.systemModel.betType;
              var p4 = this.dataSource.playerModel;
              var p5 = p4.token;
              var p6 = p4.walletKey;
              p2.btt = p3;
              if (!p2.wk) {
                p2.wk = p6;
              }
              p2.atk = p5;
              p2.pf = aW;
              return p2;
            };
            p1.prototype.logResult = function () {};
            p1.prototype.print = function (p2) {
              var p3 = this.dataSource.playerModel.playerName;
              a3("version: " + this.dataSource.systemModel.version + "\nuser: " + p3 + "\nspinid: " + p2);
            };
            p1.prototype.requestEngine = function (p2, p3, p4) {
              var p5 = this;
              if (this.dataSource.isGameReplaying && a6.GameReplay && !Object.values(aI).includes(p2)) {
                var p6 = a6.GameReplay.gameReplayHandler;
                ad(0.2)(function () {
                  var p8 = p6.nextReplayAPIResponse;
                  p4(undefined, p8);
                });
                return aT;
              }
              p3 = this.handleCommonParams(p3);
              var p7 = function () {
                return p5.bv_C.request(p2, p3, function (p8, p9) {
                  if (p8) {
                    var pC = shell.ServerError;
                    if (!(p8.domain !== pC.Domain || p8.canDismiss)) {
                      p9 = undefined;
                    }
                  }
                  p4(p8, p9);
                });
              };
              return "v2/spin" !== p2.toLowerCase() || a9.hasSufficientFund(p3) ? p7() : a9.getInsufficientFundResult(p3, p7, p4);
            };
            p1.prototype.requestServiceEngine = function (p2, p3, p4) {
              (p3 = this.handleCommonParams(p3)).gid = this.dataSource.systemModel.gameId;
              return this.bv_C.serviceRequest(p2, p3, p4);
            };
            p1.prototype.requestServiceSDEngine = function (p2, p3, p4) {
              (p3 = this.handleCommonParams(p3)).gid = this.dataSource.systemModel.gameId;
              return this.bv_C.serviceSDRequest(p2, p3, p4);
            };
            p1.prototype.handleCommonParams = function (p2) {
              if (undefined === p2) {
                p2 = {};
              }
              var p3 = this.dataSource.systemModel.betType;
              var p4 = this.dataSource.playerModel;
              var p5 = p4.token;
              var p6 = p4.walletKey;
              p2.btt = p3;
              if (!p2.wk) {
                p2.wk = p6;
              }
              p2.atk = p5;
              p2.pf = aW;
              return p2;
            };
            C2([shell.deprecated("logResult")], p1.prototype, "_logResult", null);
            C2([shell.deprecated("print")], p1.prototype, "_print", null);
            C2([shell.deprecated("requestEngine")], p1.prototype, "_requestEngine", null);
            C2([shell.deprecated("requestServiceEngine")], p1.prototype, "_requestServiceEngine", null);
            C2([shell.deprecated("handleCommonParams")], p1.prototype, "_handleCommonParams", null);
            return p1;
          }());
          var ab = C7.setDefaultCurrencyFormat;
          S("DataSource", function () {
            function p1(p2) {
              this.bv_T = false;
              if (p2) {
                this.bv_O = p2.playerModel;
                this.bv_R = p2.systemModel;
                this.bv_E = p2.transactionModel;
              }
            }
            Object.defineProperty(p1.prototype, "playerModel", {
              'get': function () {
                return this.bv_O;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "systemModel", {
              'get': function () {
                return this.bv_R;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "transactionModel", {
              'get': function () {
                return this.bv_E;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "lastTransactionRawData", {
              'get': function () {
                return this.bv_x;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "lastGameInfoRawData", {
              'get': function () {
                return this.bv_k;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "isGameReplaying", {
              'get': function () {
                return this.bv_T;
              },
              'set': function (p2) {
                this.bv_T = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "nextGameReplayInfo", {
              'get': function () {
                return this.bv_j;
              },
              'set': function (p2) {
                this.bv_j = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.updateLoginInfo = function (p2) {
              var p3 = this.bv_O;
              var p4 = this.bv_R;
              p3.updatePlayerInfo(p2);
              p4.updateSystemInfo(p2);
              ab({
                'groupSeparator': undefined,
                'decimalSeparator': undefined,
                'currencyCode': p3.currency,
                'currencySymbol': p3.currencySymbol,
                'baseUnit': p4.operatorJurisdiction.currencyBaseUnit,
                'hideDecimal': p4.operatorJurisdiction.hideCurrencyDecimal
              });
            };
            p1.prototype.updateGameInfo = function (p2) {
              var p4 = this.bv_O;
              var p5 = this.bv_R;
              this.bv_k = p2;
              var p6 = p2.dt;
              var p7 = p6.ls;
              var p8 = p6.gcs;
              p5.updateGameInfo(p6);
              p4.updateMinimumBetAmount(p8);
              this.updateTransactionInfo(p7.si);
              p4.balance = p6.bl;
              CG.emit("Game.GameInfoUpdated", p2);
            };
            p1.prototype.updateTransactionInfo = function (p2) {
              var p4 = this.bv_E;
              var p5 = this.bv_O;
              this.bv_x = p2;
              p4.updateTransactionDetails(p2);
              p5.updatePlayerWalletInfo(p2);
              p5.balance = p2.bl;
              CG.emit("Game.TransactionInfoUpdated", p2);
            };
            return p1;
          }());
          var aw = C7.formatDate;
          var av = S("GameMaintenanceModel", function () {
            function p1() {}
            Object.defineProperty(p1.prototype, "readableMaintenanceStartDate", {
              'get': function () {
                return aw(new Date(this.maintenanceStartDate));
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "readableMaintenanceEndDate", {
              'get': function () {
                return aw(new Date(this.maintenanceEndDate));
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.setGameMaintenanceData = function (p2) {
              if (p2) {
                var p3 = p2.gid;
                var p4 = p2.msdt;
                var p5 = p2.medt;
                this.gameId = p3;
                this.gameStatus = p2.st;
                this.maintenanceStartDate = p4;
                this.maintenanceEndDate = p5;
              }
            };
            p1.prototype.isGameActive = function () {
              return this.gameStatus === F.Active;
            };
            p1.prototype.isGameMaintenenceApproaching = function () {
              var p2 = this.maintenanceStartDate;
              var p3 = this.maintenanceEndDate;
              if (p2 && p3) {
                var p4 = Date.now();
                return p4 < p2 && p4 >= p2 - 0x6ddd00;
              }
              return false;
            };
            return p1;
          }());
          (function (p1) {
            p1[p1.EURO = 0x0] = "EURO";
            p1[p1.ASIA = 0x1] = "ASIA";
            p1[p1.PORTUGAL = 0x2] = "PORTUGAL";
            p1[p1.GERMANY = 0x3] = "GERMANY";
            p1[p1.LITHUANIA = 0x4] = "LITHUANIA";
            p1[p1.ITALY = 0x5] = "ITALY";
            p1[p1.SWEDEN = 0x6] = "SWEDEN";
            p1[p1.UK = 0x7] = 'UK';
            p1[p1.UKLOW = 0x8] = "UKLOW";
            p1[p1.UKHIGH = 0x9] = "UKHIGH";
            p1[p1.SPAIN = 0xa] = "SPAIN";
          })(a4 || (a4 = {}));
          (function (p1) {
            p1[p1.AUTO_PLAY_MAX = 0x0] = "AUTO_PLAY_MAX";
            p1[p1.AUTO_PLAY_CONFIG = 0x1] = "AUTO_PLAY_CONFIG";
            p1[p1.SINGLE_PLAY_TIME = 0x2] = "SINGLE_PLAY_TIME";
            p1[p1.HIDE_NON_PROFIT = 0x3] = "HIDE_NON_PROFIT";
            p1[p1.TURBO_SPIN = 0x4] = "TURBO_SPIN";
            p1[p1.MAX_PAYOUT = 0x5] = "MAX_PAYOUT";
            p1[p1.NET_PROFIT = 0x6] = "NET_PROFIT";
            p1[p1.ELAPSED_TIME = 0x7] = "ELAPSED_TIME";
            p1[p1.UNFINISHED_RULE = 0x8] = "UNFINISHED_RULE";
          })(a5 || (a5 = {}));
          var ag;
          var aj;
          var aN;
          var aF;
          var aD;
          var aH = [0x0, 0x0, 0x3, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0];
          var aR = [[0x64, 0x2, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0], [0x3e8, 0x1, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0], aH, [0x0, 0x0, 0x5, 0x1, 0x0, 0x1, 0x1, 0x1, 0x0], [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0], [0x0, 0x0, 0x5, 0x1, 0x0, 0x1, 0x1, 0x1, 0x0], [0x64, 0x2, 0x3, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0], C5([], aH, true), C5([], aH, true), C5([], aH, true), [0x0, 0x0, 0x3, 0x1, 0x0, 0x0, 0x1, 0x1, 0x1]];
          function aP(p1, p2) {
            var p3 = aR[p2];
            if (p3 && undefined !== p3[p1]) {
              return p3[p1];
            }
            throw Error("RegionUtils :: unsupported jurisdiction(region) ".concat(p2).concat(p3 && undefined === p3[p1] ? " feature type " + p1 : '', " requested"));
          }
          function aZ(p1) {
            switch (p1) {
              case a4.PORTUGAL:
                return ag;
              case a4.EURO:
                return aj;
              case a4.ASIA:
                return aN;
              case a4.GERMANY:
                return aF;
              case a4.LITHUANIA:
                return aD;
              default:
                return;
            }
          }
          var ah;
          var az;
          var al = Object.freeze({
            '__proto__': null,
            get 'Region'() {
              return a4;
            },
            get 'RegionFeatureType'() {
              return a5;
            },
            'getJurisdictionFeatureParam': aP,
            'getRegionConfig': aZ,
            'setGameRegionConfigs': function (p1, p2, p3, p4, p5) {
              ag = p1;
              aj = p2;
              aN = p3;
              aF = p4;
              aD = p5;
            }
          });
          S("RegionUtils", al);
          (function (p1) {
            p1[p1.VERTICAL = 0x0] = "VERTICAL";
            p1[p1.HORIZONTAL = 0x1] = "HORIZONTAL";
            p1[p1.UNIVERSAL = 0x2] = "UNIVERSAL";
          })(ah || (ah = {}));
          (function (p1) {
            p1[p1.Default = -0x1] = "Default";
            p1[p1.Disabled = 0x0] = "Disabled";
            p1[p1.Enabled = 0x1] = "Enabled";
          })(az || (az = {}));
          var aE = S("GamePluginModel", function () {
            function p1(p2) {
              var p3 = p2.n;
              var p4 = p2.v;
              var p5 = p2.il;
              var p6 = p2.om;
              var p7 = p2.uie;
              this.bv_u = p3;
              this.bv_I = p4;
              this.bv_A = p5;
              this.bv_N = p7;
              this.bv_L = p6;
            }
            Object.defineProperty(p1.prototype, "name", {
              'get': function () {
                return this.bv_u;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "version", {
              'get': function () {
                return this.bv_I;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "configuration", {
              'get': function () {
                return this.bv_N;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "instantLoad", {
              'get': function () {
                return this.bv_A;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "orientationMode", {
              'get': function () {
                return this.bv_L;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.overrideVersion = function (p2) {
              this.bv_I = p2;
            };
            return p1;
          }());
          var aO = G.shell.urlSearch;
          function aL(p1) {
            var p2;
            p2 = p2 || p1;
            return aO.get(p2);
          }
          var ak = G.shell && G.shell.environment ? G.shell.environment.audioSupported : undefined;
          var aJ = Object.freeze({
            'definition': aL("definition"),
            'betType': aL("type"),
            'language': aL("language"),
            'redirectUrl': aL("from"),
            'playerSession': aL('t'),
            'timeElapsed': aL("time_elapsed"),
            'reminderInterval': aL("reminder_interval"),
            'reminderUrl': aL("reminder_quit"),
            'operatorPlayerSession': aL("session"),
            'operatorParam': aL("operator_param"),
            'tournamentId': aL("tourid"),
            'operatorToken': aL("token"),
            'realModeUrl': aL("real"),
            'noAudio': undefined === ak ? aL("no_audio") : ak ? '0' : '1',
            'noBalanceCheck': aL("no_bl_chk"),
            'redirectOption': aL("redirect_option") || undefined,
            'loginMethod': aL("login_method")
          });
          aO = undefined;
          S("LaunchConfig", Object.freeze({
            '__proto__': null,
            'cs_Launch': aJ
          }));
          var am;
          var aU = C7.joinPath;
          !function (p1) {
            p1[p1.REAL_MODE = 0x0] = "REAL_MODE";
            p1[p1.FEATURE_GAME = 0x3] = "FEATURE_GAME";
          }(am || (am = {}));
          var aQ = {
            'bv_P': '',
            'setCustomRedirectUrl': function (p1) {
              this.bv_P = p1;
            },
            'getRedirectUrl': function (p1, p2) {
              var p3;
              switch (p1) {
                case am.REAL_MODE:
                  p3 = p2 || aJ.realModeUrl;
                  break;
                case am.FEATURE_GAME:
                  p2 = p2 || '';
                  p3 = aU(G.location.origin, p2) + G.location.search;
                  break;
                default:
                  p3 = this.bv_P ? this.bv_P : aJ.redirectUrl;
              }
              return p3;
            },
            'quitGame': function (p1, p2) {
              var p3 = this.getRedirectUrl(p1, p2);
              shell.enablePromBeforeUnload(false);
              if (p3) {
                CG.emit("Window.Redirect", p3);
              } else {
                CG.emit("Window.Quit");
              }
            }
          };
          var af = S("QuitGame", {
            'refreshGame': function () {
              shell.enablePromBeforeUnload(false);
              CG.emit("Window.Reload");
            },
            'quitGame': function () {
              aQ.quitGame();
            },
            'quitGameRealMode': function (p1) {
              aQ.quitGame(am.REAL_MODE, p1);
            },
            'quitGameFeatureTrigger': function (p1) {
              aQ.quitGame(am.FEATURE_GAME, p1);
            },
            'setCustomRedirectUrl': function (p1) {
              aQ.setCustomRedirectUrl(p1);
            }
          });
          var ax = C7.timeoutCallback;
          function as(p1, p2, p3) {
            shell.ga.sendEvent(p1, p2, p3);
          }
          function ac(p1, p2, p3, p4, p5) {
            var p6 = {
              'category': shell.ga.CATEGORY_GAME,
              'domain': p2,
              'code': p3,
              'error': p1,
              'retry': p4,
              'messages': p5
            };
            CG.emit("Error.Report", p6);
          }
          var aV;
          var aX;
          var aM = S("AnalyticsHelper", {
            'init': function () {
              shell.ga.setFrequentErrorHandler(function () {
                shell.ga.setFrequentErrorHandler(undefined);
                G.alert(shell.I18n.t("General.ErrorOccur"));
                as(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  'reason': "Frequent Error"
                });
                ax(0.5)(af.refreshGame);
              });
            },
            'sendErrorReport': ac,
            'sendLoadFailReport': function (p1) {
              var p2 = shell.Error;
              var p3 = shell.ClientError;
              var p4 = new p2(p3.Domain, p3.GameLoadResourceError);
              ac("load resource fail", p4.domain, p4.code, p1);
            },
            'sendScreen': function (p1) {
              shell.ga.sendScreen(p1);
            },
            'sendEvent': as,
            'sendAnalyticsEvent': function (p1) {
              CG.emit("Analytics.Event", p1);
            },
            'sendAnalyticsTiming': function (p1) {
              CG.emit("Analytics.Timing", p1);
            }
          });
          var aK = C7.timeoutCallback;
          var aB = S("QuitGameWithEvent", {
            'quitGameWithEvent': function (p1) {
              return function () {
                aM.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  'reason': p1
                });
                aK(0.5)(af.quitGame);
              };
            },
            'quitGameWithEventForRealMode': function (p1) {
              return function () {
                aM.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  'reason': "Real Mode"
                });
                aK(0.5)(function () {
                  af.quitGameRealMode(p1);
                });
              };
            },
            'quitGameWithEventForFeatureGame': function (p1) {
              aM.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                'reason': "Feature Game Redirect"
              });
              aK(0.5)(function () {
                af.quitGameFeatureTrigger(p1);
              });
            },
            'refreshGameWithEvent': function (p1) {
              return function () {
                aM.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                  'reason': p1
                });
                aK(0.5)(af.refreshGame);
              };
            }
          });
          function aA(p1, p2, p3, p4, p5) {
            if (undefined === p2) {
              p2 = aV.Transaction;
            }
            if (undefined === p5) {
              p5 = false;
            }
            CG.emit("Error.Occurred", {
              'context': p2,
              'info': {
                'category': shell.ga.CATEGORY_GAME,
                'domain': p1.domain,
                'code': p1.code,
                'trace': p1.traceId,
                'error': p1,
                'messages': p4
              },
              'report': p5
            }, function (p6) {
              switch (p6.response) {
                case "Default":
                  if (p3) {
                    p3(aX.Default);
                  }
                  break;
                case "Quit":
                  if (p3) {
                    p3(aX.Quit);
                  }
                  break;
                case "Retry":
                  if (p3) {
                    p3(aX.Retry);
                  }
                  break;
                case "Reload":
                  if (p3) {
                    p3(aX.Reload);
                  }
                  break;
                case "Dismiss":
                  if (p3) {
                    p3(aX.Dismiss);
                  }
              }
            });
          }
          !function (p1) {
            p1.Transaction = "Transaction";
            p1.Preload = "Preload";
            p1.Launch = "Launch";
            p1.Login = "Login";
            p1.Change = "Change";
            p1.Unknown = "Unknown";
          }(aV || (aV = {}));
          (function (p1) {
            p1[p1.Default = 0x0] = "Default";
            p1[p1.Quit = 0x1] = "Quit";
            p1[p1.Retry = 0x2] = "Retry";
            p1[p1.Reload = 0x3] = "Reload";
            p1[p1.Dismiss = 0x4] = "Dismiss";
          })(aX || (aX = {}));
          var ay = S("ErrorHandler", {
            'handleCommonError': function (p1, p2, p3, p4, p5) {
              if (undefined === p3) {
                p3 = aV.Transaction;
              }
              aA(p2, p3, function (p6) {
                switch (p6) {
                  case aX.Reload:
                    aB.refreshGameWithEvent(p1)();
                    break;
                  case aX.Quit:
                    aB.quitGameWithEvent(p1)();
                    break;
                  case aX.Retry:
                    if (p4) {
                      p4();
                    }
                    break;
                  case aX.Dismiss:
                    if (p5) {
                      p5();
                    }
                }
              });
            },
            'showError': aA,
            'getErrorContext': function (p1) {
              switch (p1) {
                case shell.I18n.t("General.ErrorPreloadError"):
                  return "Preload";
                case shell.I18n.t("General.ErrorLaunchFailed"):
                  return "Launch";
                case shell.I18n.t("General.ErrorLoginFailed"):
                  return "Login";
                case shell.I18n.t("General.ErrorChangeFailed"):
                  return "Change";
                case '':
                  return "Unknown";
                default:
                  return "Transaction";
              }
            },
            'ErrContext': aV,
            'ErrAction': aX
          });
          function aY(p1, p2) {
            var p4 = [];
            var p5 = false;
            var p6 = {
              'onComplete': function () {
                if (!p5) {
                  if (p2) {
                    p2();
                  }
                }
              },
              'onError': function (p7) {
                if (!p5) {
                  p5 = true;
                  var p8 = shell.Error;
                  var p9 = shell.GameShellError;
                  var pC = new p8(p9.Domain, p9.LoadResourceError);
                  aM.sendErrorReport("load plugin failed", pC.domain, pC.code, undefined, "src: ".concat(p7.src));
                  ay.handleCommonError(p7.err, pC, aV.Launch);
                }
              }
            };
            p1.forEach(function (p7) {
              var p8 = p7.name;
              if (!CS.queryBundle(p8)) {
                p4.push(p8);
              }
            });
            if (p4.length > 0x0) {
              CS.plugin.load(p4, p6);
            } else if (p2) {
              p2();
            }
          }
          var aq = function () {
            function p1(p2) {
              var p3 = p2.gid;
              var p4 = p2.ft;
              var p5 = p2.url;
              this.bv_f = p3;
              this.bv_M = p4;
              this.bv__ = p5;
            }
            Object.defineProperty(p1.prototype, "gameId", {
              'get': function () {
                return this.bv_f;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "featureType", {
              'get': function () {
                return this.bv_M;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "url", {
              'get': function () {
                return this.bv__;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }();
          var d0 = function () {
            function p1(p2) {
              var p3 = p2.dt;
              var p4 = p2.ugd;
              this.bv_D = p3;
              this.bv_U = this.bv_H(p4);
            }
            Object.defineProperty(p1.prototype, "displayType", {
              'get': function () {
                return this.bv_D;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "unfinishedGameDetails", {
              'get': function () {
                return this.bv_U;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.bv_H = function (p2) {
              return p2.map(function (p3) {
                return new aq(p3);
              });
            };
            return p1;
          }();
          var d1 = function () {
            function p1(p2) {
              var p3 = p2.n;
              var p4 = p2.v;
              this.bv_u = p3;
              this.bv_F = p4;
            }
            Object.defineProperty(p1.prototype, "name", {
              'get': function () {
                return this.bv_u;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "value", {
              'get': function () {
                return this.bv_F;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }();
          S("TweaksData", {
            'configStore': undefined
          });
          var d2;
          var d3;
          var d4 = function () {
            function p1(p2) {
              var p3 = p2.rurl;
              var p4 = p2.tcm;
              var p5 = p2.tsc;
              var p6 = p2.ttp;
              var p7 = p2.tlb;
              var p8 = p2.trb;
              this.bv_B = decodeURIComponent(p3);
              this.bv_W = p4;
              this.bv_q = p5;
              this.bv_V = p6;
              this.bv_Q = p7;
              this.bv_z = p8;
            }
            Object.defineProperty(p1.prototype, "realURL", {
              'get': function () {
                return this.bv_B;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "dialogMessage", {
              'get': function () {
                return this.bv_W;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "triggerSpinCount", {
              'get': function () {
                return this.bv_q;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "triggerDuration", {
              'get': function () {
                return this.bv_V;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "leftButtonLabel", {
              'get': function () {
                return this.bv_Q;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "rightButtonLabel", {
              'get': function () {
                return this.bv_z;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }();
          var d5 = {
            0x0: '',
            0x1: 'K'
          };
          var d6 = S("OperatorJurisdictionModel", function () {
            function p1(p2) {
              this.bv_Y = [];
              this.bv_K = [];
              this.bv_X = [];
              this.bv_Z = 0x0;
              var p3;
              var p4;
              var p5 = p2.oj;
              var p6 = p2.ufg;
              var p7 = p2.uiogc;
              var p8 = p2.ec;
              var p9 = p2.ocdr;
              var pC = p2.gm;
              var pd = p2.occ;
              var pT = p2.opl;
              var pW = p2.ioph;
              var pI = p5.jid;
              var pS = p7.bb;
              var pp = p7.grtp;
              var pb = p7.gec;
              var pw = p7.bf;
              var pv = p7.cbu;
              var pg = p7.mr;
              var pj = p7.rp;
              var pN = p7.ign;
              var pF = p7.igv;
              var pD = p7.gc;
              var pH = p7.tsn;
              var pR = p7.we;
              var pP = p7.gsc;
              var pZ = p7.bu;
              var ph = p7.pwr;
              var pz = p7.hd;
              var pl = p7.np;
              var pE = p7.et;
              var pO = p7.ir;
              var pL = p7.as;
              var pk = p7.asc;
              var pJ = p7.std;
              var pm = p7.hnp;
              var pU = p7.ts;
              var pQ = p7.smpo;
              var pf = p7.ivs;
              var px = pC[0x0];
              var ps = px.rtp;
              var pc = px.mxe;
              var pV = px.mxehr;
              this.bv_J = pI;
              this.bv_$ = pS;
              this.bv_tt = pp;
              this.bv_nt = pb;
              this.bv_et = pD;
              this.bv_it = pN;
              this.bv_rt = pF;
              if (!pw) {
                this.bv_ot = 0x0;
              }
              this.bv_at = ps;
              this.bv_ut = pc;
              this.bv_ct = pV;
              this.bv_st = pO;
              this.bv_lt = pl ? 0x1 === pl : 0x1 === aP(a5.NET_PROFIT, this.bv_J);
              this.bv_ft = pE ? 0x1 === pE : 0x1 === aP(a5.ELAPSED_TIME, this.bv_J);
              this.bv_ht = pL || aP(a5.AUTO_PLAY_MAX, this.bv_J);
              this.bv_dt = pk || aP(a5.AUTO_PLAY_CONFIG, this.bv_J);
              this.bv_vt = pJ || aP(a5.SINGLE_PLAY_TIME, this.bv_J);
              this.bv_mt = pm ? 0x1 === pm : 0x1 === aP(a5.HIDE_NON_PROFIT, this.bv_J);
              this.bv_bt = !(this.bv_vt > 0x0) && (pU ? 0x1 === pU : 0x1 === aP(a5.TURBO_SPIN, this.bv_J));
              this.bv_pt = pQ ? 0x1 === pQ : 0x1 === aP(a5.MAX_PAYOUT, this.bv_J);
              this.bv_gt = 0x1 === aP(a5.UNFINISHED_RULE, this.bv_J);
              this.bv_St = aZ(this.bv_J);
              this.bv_yt = pv ? d5[pv] : undefined;
              this.bv_Gt = pg;
              this.bv_wt = pj;
              this.bv_Ct = pH;
              this.bv_Tt = pR;
              this.bv_Ot = pP;
              this.bv_Rt = pZ;
              this.bv_Et = ph;
              this.bv_xt = pz;
              this.bv_kt = pf;
              this.bv_jt = pT;
              this.bv_It = pW;
              if (p8) {
                p3 = [];
                p8.forEach(function (pB) {
                  var pA = new aE(pB);
                  if (function (py) {
                    var pY = py.orientationMode;
                    var pq = shell.environment.getOrientationMode();
                    if (pY !== ah.UNIVERSAL) {
                      if (pY !== ah.VERTICAL && "port" === pq) {
                        return false;
                      }
                      if (pY !== ah.HORIZONTAL && "land" === pq) {
                        return false;
                      }
                    }
                    return true;
                  }(pA)) {
                    p3.push(pA);
                  }
                });
                this.bv_Y = p3;
              }
              if (p6) {
                var pX = function (pB) {
                  var pA = 0x0;
                  return {
                    'unfinishedFeatureGame': pB.map(function (py) {
                      var pY = new d0(py);
                      if (0x0 !== pY.displayType) {
                        pA += pY.unfinishedGameDetails.length;
                      }
                      return pY;
                    }),
                    'featureGameCount': pA
                  };
                }(p6);
                var pM = pX.unfinishedFeatureGame;
                var pK = pX.featureGameCount;
                this.bv_X = pM;
                this.bv_Z = pK;
              }
              if (pd) {
                this.bv_At = new d4(pd);
              }
              if (p9) {
                p4 = [];
                p9.forEach(function (pB) {
                  var pA = new d1(pB);
                  p4.push(pA);
                });
                this.bv_K = p4;
              }
            }
            Object.defineProperty(p1.prototype, "jurisdictionId", {
              'get': function () {
                return this.bv_J;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "regionFeature", {
              'get': function () {
                return this.bv_St;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "backButton", {
              'get': function () {
                return this.bv_$;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameReturnToPlayer", {
              'get': function () {
                return this.bv_tt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameExitConfirmation", {
              'get': function () {
                return this.bv_nt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "buyFeature", {
              'get': function () {
                return this.bv_ot;
              },
              'set': function (p2) {
                this.bv_ot = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "currencyBaseUnit", {
              'get': function () {
                return this.bv_yt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "markRead", {
              'get': function () {
                return this.bv_Gt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "replayVersion", {
              'get': function () {
                return this.bv_wt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "turboSpinSuggest", {
              'get': function () {
                return this.bv_Ct;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "walletSocketEnable", {
              'get': function () {
                return this.bv_Tt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "globalSocketEnable", {
              'get': function () {
                return this.bv_Ot;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "balanceUpdateEnable", {
              'get': function () {
                return this.bv_Rt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "newWalletNotificationEnable", {
              'get': function () {
                return this.bv_Et;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "hideCurrencyDecimal", {
              'get': function () {
                return this.bv_xt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "netProfitState", {
              'get': function () {
                return this.bv_lt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "elapsedTimeState", {
              'get': function () {
                return this.bv_ft;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "isRegulated", {
              'get': function () {
                return this.bv_st;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "autoPlayMaxNum", {
              'get': function () {
                return this.bv_ht;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "autoPlayConfig", {
              'get': function () {
                return this.bv_dt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "singlePlayMinDuration", {
              'get': function () {
                return this.bv_vt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "hideNonProfitEffect", {
              'get': function () {
                return this.bv_mt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "turboSpinEnable", {
              'get': function () {
                return this.bv_bt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "maxPayoutEnable", {
              'get': function () {
                return this.bv_pt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "unfinishedFeatureRuleContinue", {
              'get': function () {
                return this.bv_gt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "isOK", {
              'get': function () {
                return this.bv_kt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gamePluginList", {
              'get': function () {
                return this.bv_Y;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "unfinishedFeatureGame", {
              'get': function () {
                return this.bv_X;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "unfinishedOnGoingFeatureGameCount", {
              'get': function () {
                return this.bv_Z;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "operatorCustomDisplayList", {
              'get': function () {
                return this.bv_K;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameName", {
              'get': function () {
                return this.bv_it;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameClock", {
              'get': function () {
                return this.bv_et;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "rtp", {
              'get': function () {
                return this.bv_at;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "maxPayout", {
              'get': function () {
                return this.bv_ut;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "maxPayoutProbability", {
              'get': function () {
                return this.bv_ct;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "customDemoConfig", {
              'get': function () {
                return this.bv_At;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "operatorPromotionLink", {
              'get': function () {
                return this.bv_jt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "idH", {
              'get': function () {
                return this.bv_It;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameVersion", {
              'get': function () {
                return this.bv_rt;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }());
          var d7 = C7.resolvePath;
          var d8 = C7.getPlatform;
          S("SystemModel", function () {
            function p1(p2) {
              this.bv_Nt = p2;
              this.bv_Lt = aJ.betType ? parseInt(aJ.betType, 0xa) : 0x0;
              this.bv_Pt = aJ.operatorPlayerSession;
              this.bv_Mt = aJ.playerSession;
              this.bv__t = aJ.operatorParam;
              this.bv_h = aJ.operatorToken;
              this.bv_Dt = '';
              this.bv_Ut = !(!aJ.noAudio || '1' !== aJ.noAudio);
              this.bv_Ht = aJ.redirectOption;
              this.bv_Ft = aJ.loginMethod ? parseInt(aJ.loginMethod, 0xa) : this.bv_Nt.loginMethod;
              this.bv_Ft = this.bv_Ft || 0x2;
            }
            p1.prototype.updateSystemInfo = function (p2) {
              var p3 = p2.operatorJurisdiction;
              var p4 = p2.gameEngineUrl;
              var p5 = p2.betHistoryApiUrl;
              var p6 = p2.gamesMaintanence;
              var p7 = p2.unfinishGamesFeature;
              var p8 = p2.uiOperatorGameComponents;
              var p9 = p2.elementCategory;
              var pC = p2.operatorCustomDisplayResponse;
              var pd = p2.operatorCustomConfiguration;
              var pT = p2.operatorPromotionLink;
              var pW = p2.gameCertificateVersion;
              var pI = p2.operatorPromotionId;
              var pG = p2.gameApiSubdomain;
              var pS = p2.extraAssetTableKey;
              if (!p4) {
                throw Error("Login: Game Engine URL is empty");
              }
              if (!p5) {
                throw Error("Login: Service Engine URL is empty");
              }
              this.bv_Bt = p3 ? new d6({
                'oj': p3,
                'ufg': p7,
                'uiogc': p8,
                'ec': p9,
                'ocdr': pC,
                'gm': p6,
                'occ': pd,
                'opl': pT,
                'ioph': pI
              }) : undefined;
              this.bv_e = p4;
              this.bv_i = p5;
              var pp = this.bv_Nt.apiDomain;
              if (pG) {
                var pb = this.bv_Nt.apiDomain;
                pp = "https://" + pG + '.' + (pb = pb.substr(pb.indexOf('.') + 0x1));
              }
              this.bv_Wt = d7(pp, this.bv_e);
              this.bv_qt = d7(pp, this.bv_i);
              this.bv_Vt = d7(this.bv_Nt.apiDomain, this.bv_i);
              (this.bv_Qt = new av()).setGameMaintenanceData(p6[0x0]);
              if (this.bv_Bt) {
                shell.enablePromBeforeUnload(!!this.bv_Bt.gameExitConfirmation);
              }
              this.bv_zt = pW;
              this.bv_Yt = pG;
              this.bv_Kt = pS;
            };
            Object.defineProperty(p1.prototype, "operatorJurisdiction", {
              'get': function () {
                return this.bv_Bt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameEngineUrl", {
              'get': function () {
                return this.bv_e;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "serviceEngineUrl", {
              'get': function () {
                return this.bv_i;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameMaintenanceInfo", {
              'get': function () {
                return this.bv_Qt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameId", {
              'get': function () {
                return this.bv_Nt.gameId;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "version", {
              'get': function () {
                return this.bv_Nt.version;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "certifiedVersion", {
              'get': function () {
                return this.bv_zt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "platform", {
              'get': function () {
                if (!this.bv_Xt) {
                  this.bv_Xt = d8().toString();
                }
                return this.bv_Xt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "betType", {
              'get': function () {
                return this.bv_Lt;
              },
              'set': function (p2) {
                this.bv_Lt = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "operatorPlayerSession", {
              'get': function () {
                return this.bv_Pt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "playerSession", {
              'get': function () {
                return this.bv_Mt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "operatorParam", {
              'get': function () {
                return this.bv__t;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "operatorToken", {
              'get': function () {
                return this.bv_h;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "bundleId", {
              'get': function () {
                return this.bv_Nt.bundleId;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "apiDomain", {
              'get': function () {
                return this.bv_Nt.apiDomain;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "loginMethod", {
              'get': function () {
                return this.bv_Ft;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "noAudio", {
              'get': function () {
                return this.bv_Ut;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "redirectOption", {
              'get': function () {
                return this.bv_Ht;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameTitle", {
              'get': function () {
                return this.bv_Dt;
              },
              'set': function (p2) {
                this.bv_Dt = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "globalDomain", {
              'get': function () {
                return this.bv_Nt.globalDomain;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.getFullGameEngineUrl = function () {
              return this.bv_Wt;
            };
            p1.prototype.getFullServiceEngineUrl = function () {
              return this.bv_Vt;
            };
            p1.prototype.getFullServiceEngineUrlSD = function () {
              return this.bv_qt;
            };
            Object.defineProperty(p1.prototype, "gameApiSubdomain", {
              'get': function () {
                return this.bv_Yt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "extraAssetTableKey", {
              'get': function () {
                return this.bv_Kt;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }());
          S("PlayerModel", function () {
            function p1() {
              this.bv_Zt = 0x0;
              this.bv_Jt = aJ.tournamentId || undefined;
            }
            Object.defineProperty(p1.prototype, "walletId", {
              'get': function () {
                return this.bv_$t;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "walletType", {
              'get': function () {
                return this.bv_tn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "walletKey", {
              'get': function () {
                return this.bv_Jt;
              },
              'set': function (p2) {
                this.bv_Jt = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "playerId", {
              'get': function () {
                return this.bv_nn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "playerName", {
              'get': function () {
                return this.bv_en;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "playerNickname", {
              'get': function () {
                return this.bv_in;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "token", {
              'get': function () {
                return this.bv_s;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "sessionStatus", {
              'get': function () {
                return this.bv_rn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "currency", {
              'get': function () {
                return this.bv_on;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "currencySymbol", {
              'get': function () {
                return this.bv_an;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "minimumBetAmount", {
              'get': function () {
                return this.bv_Zt;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.updateMinimumBetAmount = function (p2) {
              var p3 = p2 ? p2.ns : undefined;
              this.bv_Zt = p3 && p3.is ? p3.t : 0x0;
            };
            p1.prototype.updatePlayerInfo = function (p2) {
              var p3 = p2.playerId;
              var p4 = p2.playerName;
              var p5 = p2.nickname;
              var p6 = p2.sessionToken;
              var p7 = p2.sessionStatus;
              var p8 = p2.currencyCode;
              var p9 = p2.currencySymbol;
              this.bv_nn = p3;
              this.bv_en = p4;
              this.bv_in = p5;
              this.bv_s = p6;
              this.bv_rn = p7;
              this.bv_on = p8;
              this.bv_an = p9;
            };
            p1.prototype.updatePlayerWalletInfo = function (p2) {
              var p3 = p2.wid;
              var p4 = p2.wt;
              var p5 = p2.wk;
              this.bv_$t = p3;
              this.bv_tn = p4;
              this.bv_Jt = p5;
            };
            return p1;
          }());
          S("TransactionModel", function () {
            function p1() {}
            Object.defineProperty(p1.prototype, "transactionId", {
              'get': function () {
                return this.bv_un;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "parentTransactionId", {
              'get': function () {
                return this.bv_cn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "stateTransitionFrom", {
              'get': function () {
                return this.bv_sn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "stateTransitionTo", {
              'get': function () {
                return this.bv_ln;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "accumulatedWinAmount", {
              'get': function () {
                return this.bv_fn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "totalWinAmount", {
              'get': function () {
                return this.bv_hn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "balanceBefore", {
              'get': function () {
                return this.bv_dn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "balanceAfterBet", {
              'get': function () {
                return this.bv_vn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "markReadIndex", {
              'get': function () {
                return this.bv_mn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "totalBet", {
              'get': function () {
                return this.bv_bn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "totalBaseBet", {
              'get': function () {
                return this.bv_pn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "previousGameState", {
              'get': function () {
                return this.bv_gn;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.updateTransactionDetails = function (p2) {
              var p3 = p2.sid;
              var p4 = p2.psid;
              var p5 = p2.st;
              var p6 = p2.nst;
              var p7 = p2.aw;
              var p8 = p2.tw;
              var p9 = p2.blb;
              var pC = p2.blab;
              var pd = p2.mr;
              var pT = p2.tb;
              var pW = p2.tbb;
              this.bv_gn = this.bv_ln;
              this.bv_un = p3;
              this.bv_cn = p4;
              this.bv_sn = p5;
              this.bv_ln = p6;
              this.bv_fn = p7;
              this.bv_hn = p8;
              this.bv_dn = p9;
              this.bv_vn = pC;
              this.bv_mn = pd ? pd.ts : 0x1;
              this.bv_bn = pT;
              this.bv_pn = pW;
              this.updateTransactionInfo(p2);
            };
            return p1;
          }());
          var d9 = C7.timeoutCallback;
          var dC = function (p1) {
            return 0x1 << p1;
          };
          var dd = function () {
            function p1(p2, p3) {
              this.retryCount = 0x0;
              this.bv_Sn = p2;
              this.bv_yn = p3;
            }
            p1.prototype.execute = function () {
              this.retryCount++;
              var p2 = "function" == typeof this.bv_yn ? this.bv_yn(this.retryCount) : this.bv_yn;
              d9(p2)(this.bv_Gn.bind(this));
            };
            p1.prototype.bv_Gn = function () {
              this.bv_Sn(this.retryCount);
            };
            return p1;
          }();
          var dT = S("RetryHandler", function () {
            function p1() {
              this.bv_wn = 0x5;
              this._id = '0';
              this.bv_Cn = false;
            }
            p1.setRetryHandlerConfig = function (p2) {
              if (p2) {
                this.retrySchemeConfig = p2.retrySchemeConfig ? p2.retrySchemeConfig : dC;
                this.maxRetries = p2.maxRetries ? p2.maxRetries : 0x5;
              }
            };
            Object.defineProperty(p1.prototype, 'id', {
              'get': function () {
                return this._id;
              },
              'set': function (p2) {
                this._id = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "isDestroyed", {
              'get': function () {
                return this.bv_Cn;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.init = function (p2, p3, p4) {
              this.bv_Sn = p3;
              this.bv_wn = p4 && p4.maxRetries ? p4.maxRetries : p1.maxRetries;
              this.bv_Tn = p4 && p4.retrySchemeConfig ? p4.retrySchemeConfig : p1.retrySchemeConfig;
              this.bv_yn = new dd(p3, this.bv_Tn);
              this.bv_On = p2;
            };
            p1.prototype.execute = function () {
              if (!this.bv_Cn) {
                CG.emit("Shell.PWDReset");
                if (this.bv_yn.retryCount >= this.bv_wn) {
                  this.bv_yn = new dd(this.bv_Sn, this.bv_Tn);
                }
                this.bv_yn.execute();
                this.bv_Rn();
              }
            };
            p1.prototype.getRetryCount = function () {
              return this.bv_yn.retryCount;
            };
            p1.prototype.getMaxRetryCount = function () {
              return this.bv_wn;
            };
            p1.prototype.canRetry = function () {
              return this.bv_yn.retryCount < this.bv_wn && !this.bv_Cn;
            };
            p1.prototype.reset = function () {
              if (this.bv_yn) {
                this.bv_yn.retryCount = 0x0;
              }
            };
            p1.prototype.destroy = function () {
              this.bv_Cn = true;
              CG.emit("Shell.PWDReset");
            };
            p1.prototype.bv_Rn = function () {
              var p2 = this.bv_yn.retryCount;
              Cc(this.bv_On + " " + shell.I18n.t("RetryHandler.Times", {
                'times': {
                  'ordinal': p2
                }
              }), 0x2);
            };
            p1.retrySchemeConfig = dC;
            p1.maxRetries = 0x5;
            return p1;
          }());
          !function (p1) {
            p1[p1.LEFT = 0x1] = "LEFT";
            p1[p1.CENTER = 0x2] = "CENTER";
            p1[p1.RIGHT = 0x3] = "RIGHT";
          }(d2 || (d2 = {}));
          var dW = d2.LEFT;
          var dI = 11.5;
          var dG = 0x12c;
          var db;
          var dw;
          var dv = G.devicePixelRatio || 0x1;
          var dg = G.screen.width * dv;
          var dj = G.screen.height * dv;
          var dN = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.rootElement = Object.create(null);
              p3.bv_En = Object.create(null);
              p3.bv_xn = 0x12c;
              p3.bv_kn = [];
              return p3;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              var p3 = this;
              dG = "land" === shell.environment.getOrientationMode() ? 0x244 : 0x12c;
              this.bv_jn("game-title-css", ".game-title {        width : 300px;        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        white-space: nowrap;        z-index: 250;}");
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute('id', "game-title");
              this.rootElement.classList.add("game-title");
              this.rootElement.style.visibility = "hidden";
              this.context.event.emit("Shell.GetScale", undefined, function (p4) {
                if (!p4.error && p4.response) {
                  p3.rootElement.style.width = p4.response.width + 'px';
                  p3.bv_xn = p4.response.width;
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
            p2.prototype.updatePosition = function (p3) {
              if (p3 === d2.CENTER) {
                this.rootElement.style.justifyContent = "center";
                this.rootElement.style.width = ''.concat(this.bv_xn, 'px');
              } else if (p3 === d2.LEFT) {
                this.rootElement.style.justifyContent = "flex-start";
                this.rootElement.style.width = ''.concat(dG, 'px');
              } else {
                this.rootElement.style.justifyContent = "flex-end";
                this.rootElement.style.width = ''.concat(dG, 'px');
              }
              this.bv_In();
            };
            p2.prototype.updateFontSize = function (p3) {
              if (p3 > 0x0) {
                this.rootElement.style.fontSize = ''.concat(p3, 'px');
              }
            };
            p2.prototype.updateZindex = function (p3) {
              this.rootElement.style.zIndex = p3.toString();
            };
            p2.prototype.getFontSize = function () {
              return parseFloat(this.bv_En.style.fontSize.split('px')[0x0]);
            };
            p2.prototype.toggleVisibility = function (p3) {
              var p4 = p3 ? "visible" : "hidden";
              this.rootElement.style.visibility = p4;
            };
            p2.prototype.setGameTitle = function (p3) {
              var p4 = this.bv_En;
              if (p4) {
                p4.textContent = p3;
              }
            };
            p2.prototype.resizeTextToFitWidth = function () {
              var p3 = this.bv_En;
              var p4 = parseFloat(G.getComputedStyle(p3).fontSize);
              if (p3.parentElement && p3.offsetWidth > p3.parentElement.offsetWidth) {
                for (; p3.offsetWidth > p3.parentElement.offsetWidth;) {
                  p4 -= 0.5;
                  p3.style.fontSize = p4.toString() + 'px';
                }
              }
            };
            p2.prototype.bv_jn = function (p3, p4) {
              if (!this.bv_kn.includes(p3)) {
                var p5 = document.createElement("style");
                p5.id = p3;
                p5.textContent = p4;
                document.head.appendChild(p5);
                this.bv_kn.push(p3);
              }
            };
            p2.prototype.bv_In = function () {
              var p3 = 0x12;
              var p4 = shell.environment.hasNotch();
              var p5 = shell.environment.isIOS() && 0x280 === dg && 0x470 === dj;
              if (G.navigator.standalone || "app" === G.shell.getEnvironment()) {
                if (p4) {
                  p3 = 0x2b;
                } else if (p5) {
                  p3 = 0x1f;
                } else if (shell.environment.isIOS()) {
                  p3 = 0x1d;
                }
              }
              this.rootElement.style.height = ''.concat(p3, 'px');
            };
            return p2;
          }(plugin.AbstractViewComponent);
          function dF(p1, p2, p3, p4, p5, p6) {
            if (undefined === p3) {
              p3 = false;
            }
            var p7 = p2.name;
            dI = "land" === shell.environment.getOrientationMode() ? 0xb : dI;
            if (undefined !== p5) {
              dW = p5;
            }
            if (undefined !== p6) {
              dI = p6;
            }
            p1.component.create(dN);
            d3 = p1.component.getInstance(dN);
            if (p4) {
              p4.appendChild(d3.rootElement);
            } else {
              p1.view.appendTo(dN, "overlay");
            }
            d3.updatePosition(dW);
            d3.updateFontSize(dI);
            if (p3) {
              d3.setGameTitle(p7 + " - " + shell.I18n.t("GameTitleTrial.Title"));
            } else {
              d3.setGameTitle(p7);
            }
            d3.resizeTextToFitWidth();
          }
          function dD(p1) {
            if (d3) {
              d3.updateZindex(p1);
            }
          }
          function dH() {
            return d3 && d3.getFontSize();
          }
          function dR(p1) {
            if (d3) {
              d3.updatePosition(p1);
            }
          }
          function dP(p1) {
            if (undefined === p1) {
              p1 = false;
            }
            if (d3) {
              d3.toggleVisibility(p1);
            }
          }
          S("GameTitle", Object.freeze({
            '__proto__': null,
            'GameTitle': dN,
            get 'GameTitlePosition'() {
              return d2;
            },
            'getTitleFontSize': dH,
            'initGameTitle': dF,
            'toggleVisibleGameTitleNode': dP,
            'updateTitleFontSize': function (p1) {
              if (d3) {
                d3.updateFontSize(p1);
              }
            },
            'updateTitlePosition': dR,
            'updateTitleZIndex': dD
          }));
          (function (p1) {
            p1[p1.LEFT = 0x1] = "LEFT";
            p1[p1.CENTER = 0x2] = "CENTER";
            p1[p1.RIGHT = 0x3] = "RIGHT";
          })(db || (db = {}));
          var dZ = db.RIGHT;
          var dh = 11.5;
          var dz = G.devicePixelRatio || 0x1;
          var dl = G.screen.width * dz;
          var dE = G.screen.height * dz;
          var dL;
          var dk = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.rootElement = Object.create(null);
              p3.bv_En = Object.create(null);
              p3.bv_kn = [];
              return p3;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              var p3 = this;
              this.bv_jn("time-stamp-css", ".time_stamp {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        font-family: monospace;        z-index: 250;}");
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute('id', "time-stamp");
              this.rootElement.classList.add("time_stamp");
              this.context.event.emit("Shell.GetScale", undefined, function (p4) {
                if (!p4.error && p4.response) {
                  p3.rootElement.style.width = p4.response.width + 'px';
                }
              });
              this.bv_En = document.createElement("div");
              this.bv_En.style.paddingRight = "12px";
              this.bv_En.style.display = "flex";
              this.bv_En.style.alignItems = "center";
              this.rootElement.appendChild(this.bv_En);
              this.bv_An();
            };
            p2.prototype.updatePosition = function (p3) {
              if (p3 === db.CENTER) {
                this.rootElement.style.justifyContent = "center";
              } else if (p3 === db.LEFT) {
                this.rootElement.style.justifyContent = "flex-start";
              } else {
                this.rootElement.style.justifyContent = "flex-end";
              }
              this.bv_In();
            };
            p2.prototype.updateFontSize = function (p3) {
              if (p3 > 0x0) {
                this.rootElement.style.fontSize = ''.concat(p3, 'px');
              }
            };
            p2.prototype.updateZindex = function (p3) {
              this.rootElement.style.zIndex = p3.toString();
            };
            p2.prototype.toggleVisibility = function (p3) {
              var p4 = p3 ? "visible" : "hidden";
              this.rootElement.style.visibility = p4;
            };
            p2.prototype.bv_jn = function (p3, p4) {
              if (!this.bv_kn.includes(p3)) {
                var p5 = document.createElement("style");
                p5.id = p3;
                p5.textContent = p4;
                document.head.appendChild(p5);
                this.bv_kn.push(p3);
              }
            };
            p2.prototype.bv_An = function () {
              var p3 = this.bv_En;
              if (p3) {
                setInterval(function () {
                  var p4 = new Date();
                  var p5 = p4.getHours();
                  var p6 = p4.getMinutes();
                  var p7 = p4.getSeconds();
                  var p8 = p5 < 0xa ? '0'.concat(p5) : p5;
                  var p9 = p6 < 0xa ? '0'.concat(p6) : p6;
                  var pC = p7 < 0xa ? '0'.concat(p7) : p7;
                  if (p3) {
                    p3.textContent = ''.concat(p8, ':').concat(p9, ':').concat(pC);
                  }
                }, 0x3e8);
              }
            };
            p2.prototype.bv_In = function () {
              var p3 = 0x12;
              var p4 = G.navigator.standalone || "app" === G.shell.getEnvironment();
              var p5 = shell.environment.hasNotch();
              var p6 = shell.environment.isIOS() && 0x280 === dl && 0x470 === dE;
              if (p4) {
                if (p5) {
                  p3 = 0x2b;
                } else if (p6) {
                  p3 = 0x1f;
                } else if (shell.environment.isIOS()) {
                  p3 = 0x1d;
                }
              }
              this.rootElement.style.height = ''.concat(p3, 'px');
            };
            return p2;
          }(plugin.AbstractViewComponent);
          function dJ(p1) {
            if (undefined === p1) {
              p1 = false;
            }
            if (dw) {
              dw.toggleVisibility(p1);
            }
          }
          !function (p1) {
            p1[p1.LEFT = 0x1] = "LEFT";
            p1[p1.CENTER = 0x2] = "CENTER";
            p1[p1.RIGHT = 0x3] = "RIGHT";
          }(dL || (dL = {}));
          var dm = G.devicePixelRatio || 0x1;
          var dU = G.screen.width * dm;
          var dQ = G.screen.height * dm;
          var dX;
          var dK = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.rootElement = Object.create(null);
              p3.textDiv = Object.create(null);
              p3.styleIDs = [];
              p3.customCSSPropertiesList = [];
              p3.bv_Nn = 0x0;
              return p3;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              var p3 = this;
              this.bv_Nn = "land" === shell.environment.getOrientationMode() ? this.landScapeMaxWidth : this.portraitMaxWidth;
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute('id', this.elementID);
              if (document.head.getElementsByTagName("style").namedItem("game-base-header-css")) {
                this.styleIDs.push("game-base-header-css");
              }
              this.bv_jn("game-base-header-css", ".game-base-header-css {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        z-index: 250;}");
              this.rootElement.classList.add("game-base-header-css");
              var p4 = ''.concat(this.elementID, "-css");
              var p5 = this.bv_Ln(p4, this.customCSSPropertiesList);
              if (p5) {
                this.bv_jn(p4, p5);
                this.rootElement.classList.add(p4);
              }
              this.context.event.emit("Shell.GetScale", undefined, function (p6) {
                if (!p6.error && p6.response) {
                  p3.rootElement.style.width = p6.response.width + 'px';
                  if (null != p3.defaultWidth) {
                    p3.defaultWidth = p6.response.width;
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
            p2.prototype.updatePosition = function (p3) {
              if (p3 === dL.CENTER) {
                this.rootElement.style.justifyContent = "center";
                this.bv_Pn(this.defaultWidth);
              } else if (p3 === dL.LEFT) {
                this.rootElement.style.justifyContent = "flex-start";
                this.bv_Pn(this.bv_Nn);
              } else {
                this.rootElement.style.justifyContent = "flex-end";
                this.bv_Pn(this.bv_Nn);
              }
              this.bv_In();
            };
            p2.prototype.updateFontSize = function (p3) {
              if (p3 > 0x0) {
                this.rootElement.style.fontSize = ''.concat(p3, 'px');
              }
            };
            p2.prototype.updateZindex = function (p3) {
              this.rootElement.style.zIndex = p3.toString();
            };
            p2.prototype.getFontSize = function () {
              return parseFloat(this.textDiv.style.fontSize.split('px')[0x0]);
            };
            p2.prototype.toggleVisibility = function (p3) {
              var p4 = p3 ? "visible" : "hidden";
              this.rootElement.style.visibility = p4;
            };
            p2.prototype.resizeTextToFitWidth = function () {
              var p3 = this.textDiv;
              var p4 = parseFloat(G.getComputedStyle(p3).fontSize);
              if (p3.parentElement && p3.offsetWidth > p3.parentElement.offsetWidth) {
                for (; p3.offsetWidth > p3.parentElement.offsetWidth;) {
                  p4 -= 0.5;
                  p3.style.fontSize = p4.toString() + 'px';
                }
              }
            };
            p2.prototype.updateText = function (p3) {
              var p4 = this.textDiv;
              if (p4) {
                p4.textContent = p3;
              }
            };
            p2.prototype.bv_jn = function (p3, p4) {
              if (!this.styleIDs.includes(p3)) {
                var p5 = document.createElement("style");
                p5.id = p3;
                p5.textContent = p4;
                document.head.appendChild(p5);
                this.styleIDs.push(p3);
              }
            };
            p2.prototype.bv_In = function () {
              var p3 = 0x12;
              var p4 = G.navigator.standalone || "app" === G.shell.getEnvironment();
              var p5 = shell.environment.hasNotch();
              var p6 = shell.environment.isIOS() && 0x280 === dU && 0x470 === dQ;
              if (p4) {
                if (p5) {
                  p3 = 0x2b;
                } else if (p6) {
                  p3 = 0x1f;
                } else if (shell.environment.isIOS()) {
                  p3 = 0x1d;
                }
              }
              this.rootElement.style.height = ''.concat(p3, 'px');
            };
            p2.prototype.bv_Pn = function (p3) {
              if (null != p3) {
                this.rootElement.style.width = ''.concat(this.bv_Nn, 'px');
              }
            };
            p2.prototype.bv_Ln = function (p3, p4) {
              var p5 = [];
              p4.forEach(function (p6) {
                var p7 = p6.endsWith(';') ? p6 : ''.concat(p6, ';');
                p5.push(p7);
              });
              return p5.length <= 0x0 ? '' : '.'.concat(p3, " { ") + p5.join(" ") + " }";
            };
            return p2;
          }(plugin.AbstractViewComponent);
          var dB = function () {
            function p1() {}
            p1.prototype.isLandscape = function () {
              return "land" === shell.environment.getOrientationMode();
            };
            p1.prototype.isIOS = function () {
              return shell.environment.isIOS();
            };
            p1.prototype.isIphoneX = function () {
              return shell.environment.hasNotch();
            };
            p1.prototype.isIphoneSE = function () {
              return shell.environment.isIOS() && 0x280 === dU && 0x470 === dQ;
            };
            p1.prototype.isNotBrowserMode = function () {
              return G.navigator.standalone || "app" === G.shell.getEnvironment();
            };
            return p1;
          }();
          var dA = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.elementID = "game-session-time";
              p3.bv_Mn = 0x0;
              p3.bv__n = {
                'hours': 0x0,
                'minutes': 0x0,
                'seconds': 0x0
              };
              return p3;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              p1.prototype.onCreate.call(this);
            };
            p2.prototype.startSessionTime = function () {
              var p3 = this;
              if (!this.bv_Dn) {
                this.bv_Dn = setInterval(function () {
                  var p4 = ++p3.bv_Mn;
                  var p5 = Math.floor(p4 / 0xe10);
                  var p6 = Math.floor((p4 - 0xe10 * p5) / 0x3c);
                  var p7 = p4 - (0xe10 * p5 + 0x3c * p6);
                  p3.bv__n = {
                    'hours': p5,
                    'minutes': p6,
                    'seconds': p7
                  };
                  p3.updateTime();
                }, 0x3e8);
              }
            };
            p2.prototype.stopSessionTime = function () {
              if (this.bv_Dn) {
                clearInterval(this.bv_Dn);
              }
              this.bv_Dn = undefined;
            };
            p2.prototype.getSessionTime = function () {
              return this.bv__n;
            };
            p2.prototype.updateTime = function () {
              var p3 = this.bv__n;
              var p4 = p3.hours;
              var p5 = p3.minutes;
              var p6 = p3.seconds;
              var p7 = p4 < 0xa ? '0'.concat(p4) : p4 + '';
              var p8 = p5 < 0xa ? '0'.concat(p5) : p5 + '';
              var p9 = p6 < 0xa ? '0'.concat(p6) : p6 + '';
              var pC = p4 > 0x0 ? ''.concat(p7, ':').concat(p8, ':').concat(p9) : ''.concat(p8, ':').concat(p9);
              var pd = shell.I18n.t("GameCustomDisplay.SessionTime") + " " + pC;
              this.updateText(pd);
            };
            return p2;
          }(dK);
          var dy = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.position = dL.RIGHT;
              p3.fontSize = 11.5;
              p3.landscapeFontSize = 0xb;
              return p3;
            }
            C0(p2, p1);
            p2.prototype.initGameSessionTime = function (p3, p4, p5, p6) {
              this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
              if (undefined !== p5) {
                this.position = p5;
              }
              if (undefined !== p6) {
                this.fontSize = p6;
              }
              p3.component.create(dA);
              this.bv_Un = p3.component.getInstance(dA);
              if (p4) {
                p4.appendChild(this.bv_Un.rootElement);
              } else {
                p3.view.appendTo(dA, "overlay");
              }
              this.bv_Un.updateTime();
              this.bv_Un.updatePosition(this.position);
              this.bv_Un.updateFontSize(this.fontSize);
            };
            p2.prototype.updateGameSessionTimeZIndex = function (p3) {
              if (this.bv_Un) {
                this.bv_Un.updateZindex(p3);
              }
            };
            p2.prototype.updateGameSessionTimeFontSize = function (p3) {
              if (this.bv_Un) {
                this.bv_Un.updateFontSize(p3);
              }
            };
            p2.prototype.updateGameSessionTimePosition = function (p3) {
              if (this.bv_Un) {
                this.bv_Un.updatePosition(p3);
              }
            };
            p2.prototype.toggleVisibleGameSessionTimeNode = function (p3) {
              if (undefined === p3) {
                p3 = false;
              }
              if (this.bv_Un) {
                this.bv_Un.toggleVisibility(p3);
              }
            };
            p2.prototype.startGameSessionTime = function () {
              if (this.bv_Un) {
                this.bv_Un.startSessionTime();
              }
            };
            p2.prototype.stopGameSessionTime = function () {
              if (this.bv_Un) {
                this.bv_Un.stopSessionTime();
              }
            };
            p2.prototype.getGameSessionTime = function () {
              return this.bv_Un && this.bv_Un.getSessionTime();
            };
            return p2;
          }(dB);
          var dY = C7.formatCurrency;
          var dq = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.elementID = "game-session-net-profit";
              p3.bv_Hn = true;
              p3.bv_Fn = 0x0;
              p3.bv_Bn = 0x0;
              p3.bv_Wn = 0x0;
              return p3;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              p1.prototype.onCreate.call(this);
            };
            p2.prototype.getGameSessionNetProfit = function () {
              return this.bv_Wn;
            };
            p2.prototype.updateGameSessionNetProfit = function (p3) {
              this.setLatestBalance(p3);
              this.bv_Wn = this.bv_Bn - this.bv_Fn;
              this.updateNetProfit();
            };
            p2.prototype.setLatestBalance = function (p3) {
              if (this.bv_Hn) {
                this.bv_Fn = p3;
                this.bv_Hn = false;
              }
              this.bv_Bn = p3;
            };
            p2.prototype.updateNetProfit = function () {
              var p3 = shell.I18n.t("GameCustomDisplay.SessionNetPosition") + " " + dY(this.bv_Wn);
              this.updateText(p3);
              this.resizeTextToFitWidth();
            };
            return p2;
          }(dK);
          var T0 = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.position = dL.LEFT;
              p3.fontSize = 11.5;
              p3.landscapeFontSize = 0xb;
              return p3;
            }
            C0(p2, p1);
            p2.prototype.initGameSessionNetProfit = function (p3, p4, p5, p6) {
              this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
              if (undefined !== p5) {
                this.position = p5;
              }
              if (undefined !== p6) {
                this.fontSize = p6;
              }
              p3.component.create(dq);
              this.bv_qn = p3.component.getInstance(dq);
              if (p4) {
                p4.appendChild(this.bv_qn.rootElement);
              } else {
                p3.view.appendTo(dq, "overlay");
              }
              this.bv_qn.updatePosition(this.position);
              this.bv_qn.updateFontSize(this.fontSize);
              this.bv_qn.updateNetProfit();
            };
            p2.prototype.updateSessionNetProfitZIndex = function (p3) {
              if (this.bv_qn) {
                this.bv_qn.updateZindex(p3);
              }
            };
            p2.prototype.updateSessionNetProfitFontSize = function (p3) {
              if (this.bv_qn) {
                this.bv_qn.updateFontSize(p3);
              }
            };
            p2.prototype.getSessionNetProfitFontSize = function () {
              return this.bv_qn && this.bv_qn.getFontSize() || 0x0;
            };
            p2.prototype.updateSessionNetProfitPosition = function (p3) {
              if (this.bv_qn) {
                this.bv_qn.updatePosition(p3);
              }
            };
            p2.prototype.updateBalance = function (p3) {
              if (this.bv_qn) {
                this.bv_qn.updateGameSessionNetProfit(p3);
              }
            };
            p2.prototype.toggleVisibleGameSessionNetProfitNode = function (p3) {
              if (undefined === p3) {
                p3 = false;
              }
              if (this.bv_qn) {
                this.bv_qn.toggleVisibility(p3);
              }
            };
            p2.prototype.getSessionNetProfit = function () {
              return this.bv_qn && this.bv_qn.getGameSessionNetProfit() || 0x0;
            };
            return p2;
          }(dB);
          var T1 = new (function () {
            function p1() {
              this.bv_Vn = new dy();
              this.bv_Qn = new T0();
            }
            Object.defineProperty(p1.prototype, "gameSessionTimeHelper", {
              'get': function () {
                return this.bv_Vn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "gameSessionNetProfitHelper", {
              'get': function () {
                return this.bv_Qn;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }())();
          !function (p1) {
            p1[p1.LEGACY = 0x0] = "LEGACY";
            p1[p1.NEW = 0x1] = "NEW";
          }(dX || (dX = {}));
          var T2;
          var T3;
          var T4;
          var T5 = [];
          function T6(p1, p2) {
            var p3 = C7.timeoutCallback;
            var p4 = p1;
            p3(0x2)(function () {
              var p5 = T4.getComponent(cc.Label);
              T4.setScale(cc.v2(0x1, 0x0));
              p5.string = p2[p4];
              p4++;
              p4 %= p2.length;
              T4.runAction(cc.sequence(cc.scaleTo(0.125, 0x1).easing(cc.easeIn(0x1)), cc.callFunc(function () {
                T6(p4, p2);
              })));
            });
          }
          var T7;
          var T8;
          var T9;
          var TC;
          var Td = function () {
            function p1() {}
            p1.prototype.initGameOperatorDisplay = function (p2, p3, p4, p5) {
              var p7;
              var p8;
              var p9;
              if (undefined === T2) {
                T2 = new cc.Node("operator_display_holder");
                T3 = new cc.Node("operator_display");
                T4 = new cc.Node("content");
                T3.parent = T2;
                T4.parent = T3;
                if (!cc.game.isPersistRootNode(T2)) {
                  cc.game.addPersistRootNode(T2);
                }
              }
              p7 = T2.addComponent(cc.Widget);
              p8 = cc.view.getViewportRect().height;
              p9 = cc.view.getViewportRect().width;
              T2.anchorX = 0.5;
              T2.anchorY = 0.5;
              T2.zIndex = 0x3e8;
              T2.width = p9;
              T2.height = p8;
              p7.top = 0x0;
              p7.left = 0x0;
              p7.right = 0x0;
              p7.isAlignTop = true;
              p7.isAlignLeft = true;
              p7.isAlignRight = true;
              p7.isAlignVerticalCenter = true;
              p7.isAlignHorizontalCenter = true;
              p7.updateAlignment();
              (function (pC) {
                var pd = pC.addComponent(cc.Layout);
                pC.width = 0x438;
                pC.height = 0x19;
                pC.anchorX = 0.5;
                pC.anchorY = 0x1;
                pC.setPosition(cc.v2(0x0, -0x361));
                pd.type = cc.Layout.Type.HORIZONTAL;
                pd.paddingLeft = 0x14;
              })(T3);
              (function (pC, pd) {
                var pT = pC.addComponent(cc.Label);
                var pW = pC.addComponent(cc.LabelOutline);
                pC.width = 0x410;
                pC.anchorX = 0x0;
                pC.anchorY = 0.5;
                pT.overflow = cc.Label.Overflow.CLAMP;
                pT.lineHeight = 0x19;
                pT.fontSize = pd || 0x19;
                pT.node.opacity = 0x99;
                pT.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
                pT.verticalAlign = cc.Label.VerticalAlign.CENTER;
                pW.color = new cc.Color(0x41, 0x32, 0x18, 0xff);
                pW.width = 0.5;
              })(T4, p5);
              (function (pC) {
                if (pC && pC.length > 0x0) {
                  T5.push(pC);
                }
              })(p4);
              (function (pC) {
                if (pC && pC.length > 0x0) {
                  var pd = function (pI) {
                    var pG = pC[pI];
                    var pS = Object.keys(pG).map(function (pv) {
                      return pG[pv];
                    });
                    var pp = [];
                    var pb = 0x0;
                    for (var pw = pS.length; pb < pw; pb++) {
                      pp.push(pS[pb]);
                    }
                    T5.push(pp.join(": "));
                  };
                  var pT = 0x0;
                  for (var pW = pC.length; pT < pW; pT++) {
                    pd(pT);
                  }
                }
                if (T5 && T5.length > 0x0) {
                  T4.getComponent(cc.Label).string = T5[0x0];
                  if (T5.length > 0x1) {
                    T6(0x1, T5);
                  }
                }
              })(p3);
              this.bv_zn(T5);
              p2.event.on("Shell.Scaled", function (pC) {
                if (!pC.error) {
                  (function () {
                    var pd = cc.view.getViewportRect().height;
                    var pT = cc.view.getViewportRect().width;
                    T2.width = pd;
                    T2.height = pT;
                  })();
                }
              }, undefined);
              p2.event.emit("Game.GetSettingMenuType", undefined, function (pC) {
                if (!pC.error) {
                  if (pC.response === dX.LEGACY) {
                    T3.setPosition(cc.v2(0x0, -0x375));
                  } else if ("land" === shell.environment.getOrientationMode()) {
                    T3.setPosition(cc.v2(-0x1ae, -0x170));
                  }
                }
              });
              p2.event.emit("Game.RequestLayoutInfo", undefined, function (pC) {
                if (!pC.error && pC.response) {
                  var pd = pC.response;
                  if (pd.uiOperatorDisplaySpace) {
                    T3.setPosition(cc.v2(0x0, pd.uiOperatorDisplaySpace.position.y));
                  }
                }
              });
            };
            p1.prototype.toggleVisibleGameOperatorDisplayNode = function (p2) {
              if (undefined === p2) {
                p2 = false;
              }
              if (T2) {
                T2.active = p2;
              }
            };
            p1.prototype.bv_zn = function (p2) {
              if (!(p2 && 0x0 !== p2.length)) {
                this.toggleVisibleGameOperatorDisplayNode(false);
              }
            };
            return p1;
          }();
          var TT = new (function () {
            function p1() {
              this.bv_Yn = new Td();
            }
            Object.defineProperty(p1.prototype, "gameOperatorDisplayHelper", {
              'get': function () {
                return this.bv_Yn;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }())();
          (function (p1) {
            p1[p1.LEFT = 0x1] = "LEFT";
            p1[p1.CENTER = 0x2] = "CENTER";
            p1[p1.RIGHT = 0x3] = "RIGHT";
          })(T7 || (T7 = {}));
          (function (p1) {
            p1.GameTitle = "gameTitle";
            p1.TimeStamp = "timeStamp";
            p1.GameSessionNetProfit = "gameSessionNetProfit";
            p1.GameSessionTime = "gameSessionTime";
          })(T8 || (T8 = {}));
          (function (p1) {
            p1[p1.TITLE_TIMESTAMP = 0x0] = "TITLE_TIMESTAMP";
            p1[p1.SESSION_NET_PROFIT_TIME = 0x1] = "SESSION_NET_PROFIT_TIME";
          })(T9 || (T9 = {}));
          (function (p1) {
            p1.BONUS_WALLET = 'B';
            p1.FREE_GAMES = 'G';
            p1.CASH = 'C';
            p1.TOURNAMENT = 'P';
            p1.REMOTE = 'I';
          })(TC || (TC = {}));
          var TW;
          var TI;
          var TG;
          var TS;
          var Tp;
          var Tb = false;
          var Tw = {
            'gameTitle': {
              'show': false,
              'order': T9.TITLE_TIMESTAMP
            },
            'timeStamp': {
              'show': false,
              'order': T9.TITLE_TIMESTAMP
            },
            'gameSessionNetProfit': {
              'show': false,
              'order': T9.SESSION_NET_PROFIT_TIME
            },
            'gameSessionTime': {
              'show': false,
              'order': T9.SESSION_NET_PROFIT_TIME
            }
          };
          var Tv = undefined;
          var Tg = false;
          var Tj = T1.gameSessionNetProfitHelper;
          var TN = T1.gameSessionTimeHelper;
          var Tu = TT.gameOperatorDisplayHelper;
          var TF = false;
          var TD = false;
          var TH = false;
          var TR = false;
          var TP = {};
          var TZ = false;
          var Th = false;
          var Tz = false;
          function Tl(p1, p2) {
            if (undefined === p2) {
              p2 = true;
            }
            switch (p1) {
              case "None":
                Tw.gameTitle = {
                  'show': false,
                  'order': T9.TITLE_TIMESTAMP
                };
                Tw.timeStamp = {
                  'show': false,
                  'order': T9.TITLE_TIMESTAMP
                };
                break;
              case "Time":
                Tw.gameTitle = {
                  'show': false,
                  'order': 0x1
                };
                Tw.timeStamp = {
                  'show': true,
                  'position': T7.RIGHT,
                  'order': T9.TITLE_TIMESTAMP
                };
                break;
              case "Title":
                Tw.gameTitle = {
                  'show': true,
                  'position': T7.CENTER,
                  'order': T9.TITLE_TIMESTAMP
                };
                Tw.timeStamp = {
                  'show': false,
                  'order': T9.TITLE_TIMESTAMP
                };
                break;
              case "All":
                Tw.gameTitle = {
                  'show': true,
                  'position': T7.LEFT,
                  'order': T9.TITLE_TIMESTAMP
                };
                Tw.timeStamp = {
                  'show': true,
                  'position': T7.RIGHT,
                  'order': T9.TITLE_TIMESTAMP
                };
            }
            Tw.gameSessionNetProfit = {
              'show': !TH && TF,
              'position': T7.LEFT,
              'order': T9.SESSION_NET_PROFIT_TIME
            };
            Tw.gameSessionTime = {
              'show': !TR && TD,
              'position': T7.RIGHT,
              'order': T9.SESSION_NET_PROFIT_TIME
            };
            TG = p1;
            if (p2) {
              TE();
            }
          }
          function TE() {
            if (Tk(true).length <= 0x0) {
              Th = true;
              TW.style.visibility = "hidden";
              Tk(false).forEach(function (p1) {
                TJ(p1);
              });
            } else {
              Tz = true;
              (function () {
                TW.style.visibility = "visible";
                TU();
                if (TZ && Tz) {
                  Tz = false;
                  TV();
                  TX();
                  return void TQ(0x0, true);
                }
                if (!TZ) {
                  TZ = true;
                  Tz = false;
                  TQ(0x0, true);
                }
              })();
            }
          }
          function TO(p1) {
            if (TF) {
              TH = p1;
              Tw.gameSessionNetProfit.show = !TH && TF;
            }
            if (TD) {
              TR = p1;
              Tw.gameSessionTime.show = !TR && TD;
            }
            TE();
          }
          function Tk(p1) {
            return Object.values(T8).filter(function (p2) {
              return p1 ? Tw[p2].show : !Tw[p2].show;
            });
          }
          function TJ(p1) {
            switch (p1) {
              case T8.GameTitle:
                dP(false);
                break;
              case T8.TimeStamp:
                dJ(false);
                break;
              case T8.GameSessionNetProfit:
                Tj.toggleVisibleGameSessionNetProfitNode(false);
                break;
              case T8.GameSessionTime:
                TN.toggleVisibleGameSessionTimeNode(false);
            }
          }
          function Tm(p1, p2, p3, p4) {
            if (!p1[p2]) {
              p1[p2] = {};
            }
            var p5 = function (p6) {
              if (p1[p2][p6]) {
                Tm(p1, p2 + 0x1, p3, p4);
              } else {
                p1[p2][p6] = p3;
              }
            };
            switch (p4) {
              case T7.LEFT:
                p5("left");
                break;
              case T7.CENTER:
                p5("center");
                break;
              case T7.RIGHT:
                p5("right");
            }
          }
          function TU() {
            TP = {};
            Tk(true).forEach(function (p1) {
              var p3 = Tw[p1];
              var p4 = p3.position;
              var p5 = p3.order;
              var p6 = p4 || T7.LEFT;
              Tm(TP, p5, p1, p6);
            });
            return TP;
          }
          function TQ(p1, p2) {
            var p3 = Object.keys(TP);
            var p4 = p3[p1];
            var p5 = TP[p4];
            !function (p6, p7, p8) {
              var p9 = function () {
                var pd = Object.values(T8).filter(function (pT) {
                  return !p7.some(function (pI) {
                    var pG = pI.key;
                    return pG && pG === pT;
                  });
                });
                pd.forEach(function (pT) {
                  TJ(pT);
                });
              };
              var pC = function () {
                p7.forEach(function (pd) {
                  var pT = pd.key;
                  var pW = pd.position;
                  if (pT) {
                    (function (pI, pG) {
                      switch (pI) {
                        case T8.GameTitle:
                          dP(true);
                          dR(pG);
                          break;
                        case T8.TimeStamp:
                          dJ(true);
                          (function (pS) {
                            if (dw) {
                              dw.updatePosition(pS);
                            }
                          })(pG);
                          break;
                        case T8.GameSessionNetProfit:
                          Tj.toggleVisibleGameSessionNetProfitNode(true);
                          Tj.updateSessionNetProfitPosition(pG);
                          break;
                        case T8.GameSessionTime:
                          TN.toggleVisibleGameSessionTimeNode(true);
                          TN.updateGameSessionTimePosition(pG);
                      }
                    })(pT, pW);
                  }
                });
                (function (pd) {
                  if (!TI || Th || Tz) {
                    return pd();
                  }
                  !function (pT) {
                    TI.style.transform = "scaleY(1)";
                    Tp = setTimeout(function () {
                      TX();
                      pT();
                    }, 0xbb8);
                  }(pd);
                })(p8);
              };
              if (p6) {
                p9();
                return void pC();
              }
              !function (pd) {
                if (!TI || Th || Tz) {
                  return pd();
                }
                !function (pT) {
                  TI.style.transform = "scaleY(0)";
                  TS = setTimeout(function () {
                    TV();
                    pT();
                  }, 0xc8);
                }(pd);
              }(function () {
                p9();
                pC();
              });
            }(p2, [{
              'key': p5.left,
              'position': T7.LEFT
            }, {
              'key': p5.center,
              'position': T7.CENTER
            }, {
              'key': p5.right,
              'position': T7.RIGHT
            }], function () {
              if (p3.length <= 0x1) {
                TZ = false;
              } else {
                if (Th) {
                  TZ = false;
                  return void (Th = false);
                }
                if (++p1 >= Object.keys(TP).length) {
                  p1 = 0x0;
                }
                TQ(p1, false);
              }
            });
          }
          function Tx(p1) {
            if (p1) {
              var p2 = p1.k;
              Tg = "0_C" === p2.substring(0x0, 0x3);
            } else {
              Tg = false;
            }
          }
          function Ts(p1) {
            if (Tv === TC.CASH || Tg) {
              TO(p1);
            }
          }
          function Tc() {
            if (Tv === TC.CASH) {
              TO(false);
            } else {
              TO(!Tg);
            }
          }
          function TV() {
            if (TS) {
              clearTimeout(TS);
              TS = undefined;
            }
          }
          function TX() {
            if (Tp) {
              clearTimeout(Tp);
              Tp = undefined;
            }
          }
          var TM = S("GameHeaderHelper", {
            'initGameHeader': function (p1) {
              if (!Tb) {
                var p2 = document.getElementById("game-overlay");
                (TW = document.createElement("div")).setAttribute('id', "game-header-holder");
                TW.style.zIndex = '99';
                TW.style.pointerEvents = "none";
                TW.style.position = "absolute";
                var p3 = TW;
                var p4 = function (pS) {
                  var pp = pS.systemModel.operatorJurisdiction;
                  var pb = pp.gameClock;
                  var pw = pp.gameName;
                  var pv = pp.netProfitState;
                  var pg = pp.elapsedTimeState;
                  var pj = pb;
                  var pN = pw;
                  var pF = "All";
                  TF = pv;
                  TD = pg;
                  if (!(undefined !== pb && undefined !== pw)) {
                    pj = true;
                    pN = true;
                  }
                  if (pj) {
                    if (!pN) {
                      pF = "Time";
                    }
                  } else {
                    pF = pN ? "Title" : "None";
                  }
                  return pF;
                }(p1.dataSource);
                Tl(p4, false);
                var p5 = TU();
                if (Object.keys(p5).length > 0x1) {
                  (TI = document.createElement("div")).setAttribute('id', "game-header-animate-holder");
                  TI.style.height = "18px";
                  TI.style.transform = "scaleY(1)";
                  TI.style.transformOrigin = "center";
                  TI.style.transition = "transform 0.2s ease-in";
                  p3 = TI;
                  TW.appendChild(TI);
                }
                if (p2) {
                  p2.appendChild(TW);
                }
                var p6 = p1.context;
                var p7 = p1.gameTitle;
                var p8 = p1.dataSource.systemModel.operatorJurisdiction.operatorCustomDisplayList;
                var p9 = 0x2 === p1.dataSource.systemModel.betType;
                var pC = p1.dataSource.systemModel.operatorJurisdiction.gameVersion;
                var pd = p1.dataSource.systemModel.certifiedVersion;
                p6.event.emit("Shell.GetScale", undefined, function (pS) {
                  if (!pS.error && pS.response) {
                    TW.style.height = pS.response.height + 'px';
                    TW.style.width = pS.response.width + 'px';
                  }
                });
                p6.event.on("Shell.Scaled", function (pS) {
                  var pp = pS.payload;
                  TW.style.height = ''.concat(pp.height, 'px');
                  TW.style.width = ''.concat(pp.width, 'px');
                }, p6);
                dF(p6, p7, p9, p3);
                (function (pS, pp, pb, pw) {
                  dh = "land" === shell.environment.getOrientationMode() ? 0xb : dh;
                  if (undefined !== pb) {
                    dZ = pb;
                  }
                  if (undefined !== pw) {
                    dh = pw;
                  }
                  pS.component.create(dk);
                  dw = pS.component.getInstance(dk);
                  if (pp) {
                    pp.appendChild(dw.rootElement);
                  } else {
                    pS.view.appendTo(dk, "overlay");
                  }
                  dw.updatePosition(dZ);
                  dw.updateFontSize(dh);
                })(p6, p3);
                var pT = pC ? pd : undefined;
                Tu.initGameOperatorDisplay(p6, p8, pT);
                var pI = d3 && d3.getFontSize();
                if (dw) {
                  dw.updateFontSize(pI);
                }
                dP(false);
                dJ(false);
                Tu.toggleVisibleGameOperatorDisplayNode(false);
                p6.event.once("Game.GameInfoUpdated", function (pS) {
                  var pp = pS.payload.dt.ls.si;
                  Tv = pp.wt;
                  Tx(pp.wbn);
                }, p6);
                if (TF) {
                  Tj.initGameSessionNetProfit(p6, p3);
                  Tj.updateSessionNetProfitFontSize(pI);
                  Tj.toggleVisibleGameSessionNetProfitNode(false);
                  p6.event.on("Game.TransactionInfoChanged", function (pS) {
                    var pp = pS.payload;
                    if (pp && pp.balance && (Tv === TC.CASH || Tg)) {
                      Tj.updateBalance(pp.balance);
                    }
                  }, p6);
                }
                if (TD) {
                  TN.initGameSessionTime(p6, p3);
                  TN.updateGameSessionTimeFontSize(pI);
                  TN.toggleVisibleGameSessionTimeNode(false);
                }
                var pG = function (pS) {
                  if ("GameStarted" === pS.payload) {
                    Tu.toggleVisibleGameOperatorDisplayNode(true);
                    if (TD) {
                      TN.startGameSessionTime();
                    }
                    (function (pp) {
                      pp.event.on("Game.UpdateHeaderType", function (pb) {
                        var pw = pb.payload;
                        if (!pw) {
                          pw = "All";
                        }
                        Tl(pw);
                      }, pp);
                      pp.event.on("Game.UpdateHeaderZIndex", function (pb) {
                        var pw = pb.payload;
                        dD(pw);
                        (function (pv) {
                          if (dw) {
                            dw.updateZindex(pv);
                          }
                        })(pw);
                        Tj.updateSessionNetProfitZIndex(pw);
                        TN.updateGameSessionTimeZIndex(pw);
                      }, pp);
                      pp.event.on("Game.RequestHeaderType", function (pb) {
                        pb.response = TG;
                      }, pp);
                      pp.event.on("Game.ShowCustomDisplay", function () {
                        Tu.toggleVisibleGameOperatorDisplayNode(true);
                      }, pp);
                      pp.event.on("Game.HideCustomDisplay", function () {
                        Tu.toggleVisibleGameOperatorDisplayNode(false);
                      }, pp);
                      if (TF || TD) {
                        pp.event.on("Game.ReplayInitiated", function () {
                          Ts(true);
                        }, pp);
                        pp.event.on("Game.ReplayQuit", function () {
                          Ts(false);
                        }, pp);
                        pp.event.on("Game.GameInfoUpdated", function (pb) {
                          var pw = pb.payload.dt.ls.si;
                          Tv = pw.wt;
                          Tx(pw.wbn);
                          Tc();
                        }, pp);
                      }
                    })(p6);
                    Tc();
                    Tl(p4);
                    p6.event.off("Shell.BootStateChanged", pG, p6);
                  }
                };
                p6.event.on("Shell.BootStateChanged", pG, p6);
                Tb = true;
              }
            },
            'updateHeaderPositions': Tl,
            'emitShowCustomDisplayEvent': function () {
              CG.emit("Game.ShowCustomDisplay");
            },
            'emitHideCustomDisplayEvent': function () {
              CG.emit("Game.HideCustomDisplay");
            }
          });
          var TK = S("GameMaintenanceHandler", {
            'checkGameMaintenance': function (p1, p2) {
              if (p1.isGameActive()) {
                var p3 = p1.maintenanceStartDate;
                var p4 = p1.maintenanceEndDate;
                if (p3 && p4 && p1.isGameMaintenenceApproaching()) {
                  return void CV({
                    'title_message': shell.I18n.t("General.MaintenanceTitle"),
                    'content_message': shell.I18n.t("General.MaintenanceMessage", {
                      'startDate': p1.readableMaintenanceStartDate,
                      'endDate': p1.readableMaintenanceEndDate
                    }),
                    'actions': [{
                      'title': shell.I18n.t("General.DialogOk"),
                      'handler': p2
                    }]
                  });
                }
                if (p2) {
                  p2();
                }
              } else {
                var p5 = shell.Error;
                var p6 = shell.ClientError;
                var p7 = new p5(p6.Domain, p6.GameMaintenanceError);
                aM.sendErrorReport("game inactive", p7.domain, p7.code);
                ay.showError(p7, "Launch", function (p8) {
                  if (aX.Quit === p8) {
                    af.quitGame();
                  }
                });
              }
            }
          });
          var TB = false;
          function TA(p1, p2) {
            if (!p2) {
              p2 = function (p8, p9) {
                if (p8) {
                  var pC = p1.failCallback;
                  if (pC) {
                    pC(p8, p9);
                  }
                } else {
                  var pd = p1.finalCallback;
                  if (pd) {
                    pd(undefined, p9);
                  }
                }
              };
            }
            var p3;
            var p4 = new dT();
            var p5 = function (p8, p9, pC) {
              return function (pd, pT) {
                var pW = p8.slowNetworkHandler;
                if (pd) {
                  if (p9.isDestroyed) {
                    return;
                  }
                  var pI = p9.getRetryCount();
                  var pG = pI > 0x0 ? pI : undefined;
                  if (!pd.canDismiss) {
                    aM.sendErrorReport(p8.name + " failed", pd.domain, pd.code, pG);
                  }
                  if (pd.shouldRetry && p9.canRetry()) {
                    p9.execute();
                  } else {
                    if (pW) {
                      pW.cancel();
                    }
                    if (TB) {
                      return;
                    }
                    var pS = p8.errorContext ? p8.errorContext : ay.getErrorContext(p8.errorTitle);
                    ay.handleCommonError(p8.name + " failed", pd, pS, function () {
                      if (pW) {
                        pW.start();
                      }
                      p9.reset();
                      p9.execute();
                    }, function () {
                      var pp = shell.ServerError;
                      if (pp.isInsufficientCashFundError(pd.code) || pp.isInsufficientBonusFundError(pd.code)) {
                        a9.insufficientFundResult = {
                          'error': pd,
                          'result': pT
                        };
                      }
                      if (pC) {
                        pC(pd, pT);
                      }
                    });
                  }
                } else {
                  if (pW) {
                    pW.cancel();
                  }
                  p9.destroy();
                  if (TB) {
                    return;
                  }
                  if (pC) {
                    pC(undefined, pT);
                  }
                }
                aM.sendAnalyticsTiming({
                  'actionName': "GAME_API_REQUEST",
                  'state': "End"
                });
              };
            }(p1, p4, p2);
            var p6 = function (p8, p9, pC) {
              return function () {
                p8(p9, pC);
                aM.sendAnalyticsTiming({
                  'actionName': "GAME_API_REQUEST",
                  'state': "Start"
                });
              };
            }(p1.apiRequest, p5, p1.apiRequestParam);
            p3 = p1.fallbackRequest ? function () {
              var p8 = p1.fallbackRequest;
              if (p8) {
                var p9 = function (pC, pd, pT) {
                  return function (pW, pI) {
                    if (pW) {
                      pd(pW, pI);
                    } else if (pT && pT(pI)) {
                      aM.sendAnalyticsTiming({
                        'actionName': "GAME_API_REQUEST",
                        'state': "End"
                      });
                      pC();
                    } else {
                      pd(undefined, pI);
                    }
                  };
                }(p6, p5, p1.shouldRetryApiRequest);
                p8(p9, p1.fallbackRequestParam);
                aM.sendAnalyticsTiming({
                  'actionName': "GAME_API_REQUEST",
                  'state': "Start"
                });
              }
            } : p6;
            p4.id = "handler_".concat(p1.name);
            p4.init(p1.retryMessage ? p1.retryMessage : shell.I18n.t("General.RetryNetwork"), p3);
            var p7 = p1.slowNetworkHandler;
            if (p7) {
              p7.start();
            }
            p6();
          }
          var Ty;
          var TY = S("RequestHandler", {
            'doAPIRequest': TA,
            'doTransactionAPIRequest': function (p1, p2, p3) {
              var p4 = p2.transactionModel.transactionId;
              p1.errorContext = "Transaction";
              p1.name = "game api";
              p1.shouldRetryApiRequest = function () {
                var p5 = p2.transactionModel.transactionId;
                return p4 === p5;
              };
              TA(p1, p3);
            },
            'reportCriticalError': function () {
              TB = true;
            }
          });
          function Tq() {
            return g.getPreference(Ty).getItem("gameName");
          }
          var W0 = {
            'getGameName': function (p1, p2) {
              p1.getGameName(function (p3, p4) {
                var p5;
                if (!(p3 || undefined === p4)) {
                  p5 = p4;
                  g.getPreference(Ty).setItem("gameName", p5.dt);
                }
                if (p2) {
                  p2();
                }
              });
            },
            'getGameNamesFromStorage': Tq,
            'getGameNameWithId': function (p1) {
              var p2 = g.getPreference(Ty).getItem("gameName");
              return p2 && p2[p1] ? p2[p1] : p1.toString();
            },
            'setupGameNameDomain': function (p1) {
              Ty = p1;
            }
          };
          var W1 = function () {
            function p1() {
              return [0xc8, 0xa, 0x12c].reduce(function (p3, p4) {
                return p3 * p4;
              }, 0x90);
            }
            function p2(p3, p4, p5) {
              if (function (p7) {
                return G[Cz(0x0)].now() === G[Cz(0x4)].max(G[Cz(0x0)].now(), p7);
              }(p3)) {
                if (!p4) {
                  p4 = 0x64 * G.Number("0.0005");
                }
                if (p5) {
                  var p6 = function (p7, p8) {
                    var p9 = (G[Cz(0x0)].now() - p7) / (p8 * p1());
                    return G[Cz(0x4)].min(0x1, p9 * p9);
                  }(p3, p5);
                  p4 *= p6;
                }
                "Mathew";
                return G["Mathew".substring(G.Number("0x0"), "Mathew".length + -0x2)].random() === G[Cz(0x4)].max(G["Mathew".substring(G.Number("0x0"), "Mathew".length + -0x2)].random(), p4);
              }
              return true;
            }
            return [function () {
              return p2(["0x4c72"].reduce(function (p3, p4) {
                return p3 + G.Number(p4);
              }, 0x1d5) * p1(), 0x64 * G.Number("0.0005"), 0x1c);
            }, p2];
          }();
          var W2 = W1[0x0];
          function W3() {
            return "rueEQ" === (W2() + 'EQ').substring(0x1);
          }
          function W4(p1) {
            p1.response = function () {
              var p2 = 0x0;
              if (-0x1 !== (CP(" Math.random") + '').indexOf("[native code]")) {
                p2 |= 0x1;
              }
              var p3 = Ch(0x6);
              if (-0x1 !== (CP(" setTimeout ") + '').indexOf("[native code]") || p3()) {
                p2 |= 0x2;
              }
              var p4 = Ch(0x0);
              if (-0x1 !== (CP(" Date.now") + '').indexOf("[native code]") || p4()) {
                p2 |= 0x4;
              }
              var p5 = function () {
                var p7 = -0x1;
                try {
                  var p8 = G.Object.getOwnPropertyDescriptor(G, "isSecureContext");
                  if (undefined === p8) {
                    p7 = 0x2;
                  } else if (-0x1 !== (p8.get + '').indexOf("[native code]")) {
                    p7 = p8.get.apply(G) ? 0x1 : 0x0;
                  }
                } catch (p9) {}
                return p7;
              }();
              var p6 = function () {
                var p8 = CH(G, "crypto");
                if (!p8) {
                  return -0x1;
                }
                if (G.Object.prototype.hasOwnProperty.call(p8, "subtle")) {
                  return -0x1;
                }
                var p9 = CR(p8, "subtle");
                return null != p9 ? ["digest", "sign", "importKey"].reduce(function (pC, pd) {
                  return pC + (G.Object.prototype.hasOwnProperty.call(p9, pd) || !(-0x1 !== (CR(p9, pd) + '').indexOf("[native code]")) ? 0x1 : 0x0);
                }, 0x0) ? -0x1 : 0x1 : 0x0;
              }();
              if (!(p6 < 0x0 || p6 && !p5 || !p6 && p5)) {
                p2 |= 0x8;
              }
              return p2;
            }();
          }
          var W5;
          var W6 = C7.tickCallback;
          var W7 = C7.setDefaultCurrencyFormat;
          !function (p1) {
            p1[p1.PAUSE_GAME = 0x0] = "PAUSE_GAME";
            p1[p1.RESUME_GAME = 0x1] = "RESUME_GAME";
          }(W5 || (W5 = {}));
          var W8 = W5.RESUME_GAME;
          var W9 = false;
          var WC = Object.create(null);
          var Wd = Object.create(null);
          var WT = Object.create(null);
          var WW = Object.create(null);
          var WI = Object.create(null);
          var WG = Object.create(null);
          var WS = Object.create(null);
          var Wp = false;
          var Wb = false;
          var Ww = [];
          var Wv = "Resume";
          var Wg = 0x0;
          var Wj = 0x0;
          var WN = Object.create(null);
          var Wu = undefined;
          var WF = undefined;
          function WD(p1) {
            var p2;
            var p3;
            var p4 = p1.payload;
            if ("boolean" == typeof p4) {
              p2 = p4;
              p3 = false;
            } else {
              p2 = p4.isBlocked;
              p3 = p4.shouldFreeze;
            }
            if (p2) {
              Wj++;
              if (p3 && !cc.game.isPaused()) {
                W6(true)(function () {
                  if (Wj > 0x0) {
                    cc.game.pause();
                  }
                });
              }
              if (Wj > 0x1) {
                return;
              }
            } else {
              if (0x0 === Wj) {
                return;
              }
              Wj--;
              if (cc.game.isPaused()) {
                cc.game.resume();
              }
              if (Wj > 0x0) {
                return;
              }
            }
            Object.keys(WT).forEach(function (p5) {
              var p6 = WT[p5];
              if (p6) {
                p6(p2);
              }
            });
          }
          var WH = 0x0;
          function WR(p1) {
            CG.emit("Game.StateChanged", p1);
            Wv = p1;
          }
          function WP(p1, p2) {
            WI[p1] = p2;
          }
          var WZ = S("GameEventHandler", {
            'subscribeTransactionInfoChangedEvent': function () {
              CG.on("Game.TransactionInfoChanged", function (p1) {
                Object.keys(WI).forEach(function (p2) {
                  var p3 = WI[p2];
                  if (p3) {
                    p3(p1.payload);
                  }
                });
              });
            },
            'subscribeTransactionInfoRequestEvent': function () {
              WP("saveInfo", function (p1) {
                Object.keys(p1).forEach(function (p2) {
                  WN[p2] = p1[p2];
                });
              });
              CG.on("Game.RequestCurrentTransactionInfo", function (p1) {
                p1.response = WN;
              });
            },
            'subscribeGameSessionRequestEvent': function (p1) {
              CG.on("Game.RequestSession", function (p3) {
                var p4 = p1.systemModel;
                var p5 = p4.gameId;
                var p6 = p4.operatorToken;
                var p7 = p4.operatorPlayerSession;
                var p8 = p4.betType;
                var p9 = p4.platform;
                var pC = p4.apiDomain;
                var pd = p4.operatorJurisdiction;
                var pT = p4.gameApiSubdomain;
                var pW = p1.playerModel;
                var pI = pW.token;
                var pG = pW.playerName;
                var pS = pW.playerId;
                var pp = pW.currencySymbol;
                p3.response = {
                  'gameId': p5,
                  'token': pI,
                  'operatorToken': p6,
                  'sessionId': p7,
                  'playerName': pG,
                  'playerId': pS,
                  'betType': p8,
                  'platform': p9,
                  'apiDomain': pC,
                  'gameApiSubdomain': pT,
                  'currencySymbol': pp,
                  'operatorJurisdictionConfig': pd,
                  'serviceEngineUrl': p1.systemModel.getFullServiceEngineUrl(),
                  'gameEngineUrl': p1.systemModel.getFullGameEngineUrl()
                };
              });
              (function (p3, p4) {
                p3.on("Game.TransactionStateStarted", function (p5) {
                  return function (p6) {
                    p6.response = p5();
                  };
                }(p4), undefined);
              })(CG, W3);
            },
            'addGamePlayUIBlockEventCallback': function (p1, p2) {
              if ("function" == typeof p1) {
                p2 = p1;
                WT["default"] = p2;
              } else {
                WT[p1] = p2;
              }
            },
            'subscribeOperatorCurrencyFormatUpdateEvent': function () {
              CG.on("Game.UpdateLocaleCurrencyFormat", function (p2) {
                var p3 = p2.payload;
                W7({
                  'groupSeparator': p3.group,
                  'decimalSeparator': p3.separator
                });
                CG.emit("Game.LocaleCurrencyFormatChanged", p3);
              });
            },
            'subscribeGameInfoUpdateSuccessEvent': function (p1, p2) {
              CG.on("Game.GameInfoUpdateSuccess", function (p4) {
                var p5 = p4.payload;
                p1.updateGameInfo(p5);
                var p6 = p1.playerModel.playerName;
                var p7 = p5.dt.ls.si.sid;
                a3("version: " + p1.systemModel.version + "\nuser: " + p6 + "\nspinid: " + p7);
                p2(function () {
                  CG.emit("Game.WalletChangedSuccess");
                });
              });
            },
            'subscribeGameBalanceUpdateEvent': function (p1, p2) {
              CG.on("Game.UpdateTransactionInfo", function (p4) {
                var p5 = p4.payload;
                var p6 = (p5.balance || 0x0) + (p5.freeBalance || 0x0);
                if (p1.isGameReplaying) {
                  Ww.push(p6);
                  if (0x1 === Ww.length) {
                    CG.once("Game.ReplayQuit", function () {
                      var p7 = 0x0;
                      for (var p8 = Ww.length; p7 < p8; p7++) {
                        var p9 = Ww[p7];
                        p1.playerModel.balance = p9;
                        p2(p9);
                      }
                      Ww = [];
                    });
                  }
                } else {
                  p1.playerModel.balance = p6;
                  p2(p6);
                }
              });
            },
            'subscribeGameLoginEvent': function (p1, p2) {
              CG.on("Game.RequestLogin", function (p4) {
                var p5 = p4.payload;
                p1.systemModel.betType = p5.betType;
                p1.playerModel.walletKey = p5.walletKey;
                if (p2) {
                  p2();
                }
              });
              CG.on("Game.LoginStateChanged", function (p4) {
                if ("Complete" === p4.payload) {
                  var p5 = p1.playerModel.playerName;
                  var p6 = p1.transactionModel.transactionId;
                  a3("version: " + p1.systemModel.version + "\nuser: " + p5 + "\nspinid: " + p6);
                }
              });
            },
            'subscribeTweaksOnShowEvent': function () {},
            'subscribeTweaksOnDismissEvent': function () {},
            'subscribeGameLayoutInfoRequestEvent': function (p1) {
              CG.on("Game.RequestLayoutInfo", function (p2) {
                p2.response = p1;
              });
            },
            'subscribeGamePlayUIBlockEvent': function () {
              CG.on("Game.BlockUI", WD);
              (function (p2) {
                p2.on("Game.TransactionStatePaused", W4, undefined);
              })(CG);
            },
            'subscribeGameConfigRequestEvent': function (p1) {
              var p3 = p1.systemModel;
              var p4 = p3.version;
              var p5 = p3.certifiedVersion;
              var p6 = p3.gameTitle;
              var p7 = p3.noAudio;
              var p8 = p3.operatorJurisdiction.replayVersion;
              CG.on("Game.RequestConfig", function (p9) {
                p9.response = {
                  'version': p4,
                  'certifiedVersion': p5,
                  'gameTitle': p6,
                  'noAudio': p7,
                  'replaySupported': p8 > 0x0,
                  'replayVersion': p8
                };
              });
            },
            'subscribeGameConfigUpdateEvent': function () {
              CG.on("Game.UpdateConfig", function (p1) {
                var p2 = p1.payload;
                if (p2) {
                  if (p2.retryConfig) {
                    dT.setRetryHandlerConfig(p2.retryConfig);
                  }
                  if (p2.redirectUrl) {
                    af.setCustomRedirectUrl(p2.redirectUrl);
                  }
                }
              });
            },
            'subscribePlayerInfoRequestEvent': function (p1) {
              CG.on("Game.RequestPlayerInfo", function (p2) {
                var p3 = p1.playerModel;
                var p4 = p3.playerId;
                var p5 = p3.playerName;
                var p6 = p3.playerNickname;
                var p7 = p3.currencySymbol;
                var p8 = p3.walletKey;
                p2.response = {
                  'playerId': p4,
                  'playerName': p5,
                  'playerNickname': p6,
                  'currencySymbol': p7,
                  'walletKey': p8
                };
              });
            },
            'subscribeGameReadyEvent': function () {
              CG.on("Shell.BootStateChanged", function (p2) {
                if ("GameReady" === p2.payload) {
                  CG.emit("Analytics.Event", {
                    'actionName': "LoadGameComplete"
                  });
                }
              });
            },
            'subscribeGameInfoUpdateEvent': function (p1, p2) {
              CG.on("Game.UpdateGameInfo", function (p4) {
                var p5 = p4.payload;
                var p6 = p5.param;
                var p7 = p5.callback;
                TY.doAPIRequest({
                  'name': "update game info",
                  'apiRequest': p1.updateGameInfo.bind(p1),
                  'apiRequestParam': p6,
                  'errorTitle': shell.I18n.t("General.ErrorChangeFailed")
                }, function (p8, p9) {
                  if (p7) {
                    p7(p8, p9);
                  }
                  if (!p8 && p9) {
                    p2(function () {
                      CG.emit("Game.WalletChangedSuccess");
                    });
                  }
                });
              });
            },
            'subscribeAudioPlayRateUpdateEvent': function (p1) {
              if (p1) {
                CG.on("Game.SetAudioPlayRate", function (p2) {
                  p1(p2.payload);
                });
              }
            },
            'subscribeStoredGamesNameRequestEvent': function () {
              CG.on("Game.RequestGameNames", function (p1) {
                p1.response = W0.getGameNamesFromStorage();
              });
            },
            'subscribeSessionSocketErrorEvent': function (p1) {
              CG.on("Game.OperatorSocketError", function (p2) {
                if (p1) {
                  p1(p2.payload);
                }
              });
            },
            'subscribeSessionSocketConnectedEvent': function (p1) {
              CG.on("Game.OperatorSocketConnected", function (p2) {
                if (p1) {
                  p1(p2.payload);
                }
              });
            },
            'subscribeSessionSocketConnectionStatusRequestEvent': function () {
              CG.on("Game.RequestOperatorSocketConnectionStatus", function (p1) {
                var p2 = a6.WebSocket;
                p1.response = !!p2 && p2.checkOperationSocketConnectionStatus();
              });
            },
            'subscribeInUIIdleStateStatusUpdateEvent': function () {
              CG.on("Game.InUIIdleState", function (p1) {
                W9 = p1.payload;
                Object.keys(WS).forEach(function (p7) {
                  var p8 = WS[p7];
                  if (p8) {
                    p8(W9);
                  }
                });
                if (W9) {
                  var p2 = Object.keys(WG);
                  if (0x0 === p2.length) {
                    return;
                  }
                  WH = 0x0;
                  var p3 = function (p7) {
                    var p8 = WG[p7];
                    WH++;
                    var p9 = function () {
                      var pC = Object.keys(WG);
                      if (WH < pC.length) {
                        p3(pC[WH]);
                      }
                    };
                    if (p8) {
                      p8(true, function () {
                        if (W9) {
                          p9();
                        }
                      });
                    } else {
                      p9();
                    }
                  };
                  p3(p2[0x0]);
                } else {
                  var p4 = Object.keys(WG);
                  for (var p5 = 0x0; p5 < WH; p5++) {
                    var p6 = WG[p4[p5]];
                    if (p6) {
                      p6(false);
                    }
                  }
                }
              });
            },
            'subscribeGameRequestQuitEvent': function () {
              CG.on("Game.Quit", function (p1) {
                aB.quitGameWithEvent(p1.payload || "unknown");
              });
            },
            'subscribeGameFlowStateRequestEvent': function () {
              CG.on("Game.RequestGameFlowState", function (p1) {
                p1.response = Wu;
              });
            },
            'subscribeGameEffectStateRequestEvent': function () {
              CG.on("Game.RequestGameDisplayState", function (p1) {
                p1.response = WF;
              });
            },
            'subscribeUIIdleStateRequestEvent': function () {
              CG.on("Game.RequestUIIdleState", function (p1) {
                p1.response = W9;
              });
            },
            'subscribeRequestPlayEvent': function (p1) {
              CG.on("Game.RequestPlay", function (p2) {
                var p3 = p2.payload.totalBet;
                var p4 = function (p5, p6) {
                  var p7;
                  if (p6) {
                    0x0;
                    p7 = new shell.Error(shell.ClientError.Domain, p6);
                  }
                  if (p2.response) {
                    p2.response.result = p5;
                    p2.response.error = p7;
                  } else {
                    p2.response = {
                      'result': p5,
                      'error': p7
                    };
                  }
                };
                if (!p1.isGameReplaying && p3 < p1.playerModel.minimumBetAmount) {
                  p4("InvalidAmount", 0x3f9);
                } else if (!p2.response) {
                  p4("NoError");
                }
              });
            },
            'emitGameStateChangedEvent': WR,
            'emitGameFlowStateChangedEvent': function (p1) {
              Wu = p1;
              CG.emit("Game.FlowStateChanged", p1);
            },
            'emitGameEffectStateChangedEvent': function (p1) {
              WF = p1;
              CG.emit("Game.DisplayStateChanged", p1);
            },
            'emitGameWinAnnouncement': function () {},
            'emitLoginDoneEvent': function (p1) {
              var p3 = p1.systemModel;
              var p4 = p3.gameId;
              var p5 = p3.operatorToken;
              var p6 = p3.operatorPlayerSession;
              var p7 = p3.betType;
              var p8 = p3.platform;
              var p9 = p3.apiDomain;
              var pC = p3.operatorJurisdiction;
              var pd = p1.playerModel;
              var pT = {
                'gameId': p4,
                'token': pd.token,
                'operatorToken': p5,
                'sessionId': p6,
                'playerName': pd.playerName,
                'playerId': pd.playerId,
                'betType': p7,
                'platform': p8,
                'apiDomain': p9,
                'currencySymbol': pd.currencySymbol,
                'operatorJurisdictionConfig': pC,
                'serviceEngineUrl': p1.systemModel.getFullServiceEngineUrl(),
                'gameEngineUrl': p1.systemModel.getFullGameEngineUrl()
              };
              CG.emit("Game.SessionChanged", pT);
            },
            'emitGameLoginEvent': function (p1) {
              CG.emit("Game.LoginStateChanged", p1);
            },
            'emitGameNotifyPauseEvent': function () {
              if (W8 === W5.PAUSE_GAME) {
                WR("Pause");
              }
            },
            'emitAutoplayStartedEvent': function (p1) {
              if (!Wb) {
                WW = function () {
                  Wb = false;
                  if (p1) {
                    p1();
                  }
                  CG.emit("Game.AutoplayStateChanged", "Stop");
                };
                Wb = true;
                CG.emit("Game.AutoplayStateChanged", "Start");
                CG.once("Game.StopAutoplay", WW);
              }
            },
            'emitAutoplayStoppedEvent': function () {
              if (Wb) {
                Wb = false;
                CG.emit("Game.AutoplayStateChanged", "Stop");
                CG.off("Game.StopAutoplay", WW);
              }
            },
            'emitErrorLogEvent': function (p1, p2) {
              CG.emit("Error.Log", {
                'tag': p1,
                'message': p2
              });
            },
            'emitGamePlayUIBlockEvent': function (p1) {
              CG.emit("Game.BlockUI", p1);
            },
            'emitRequestPlayEvent': function (p1, p2) {
              CG.emit("Game.RequestPlay", p1, function (p3) {
                if (p2) {
                  p2(!p3.response || "NoError" === p3.response.result);
                }
              });
            },
            'subscribeGamePauseEvent': function () {
              CG.on("Game.Pause", function (p2) {
                Wg++;
                if (W8 !== W5.PAUSE_GAME) {
                  W8 = W5.PAUSE_GAME;
                  var p3 = p2.payload;
                  if (!!p3 && p3.isBlocked && !Wp) {
                    CG.emit("Shell.EnableUIBlock", true);
                    Wp = true;
                  }
                  Object.keys(WC).forEach(function (p4) {
                    var p5 = WC[p4];
                    if (p5) {
                      p5();
                    }
                  });
                }
              });
            },
            'subscribeGameResumeEvent': function () {
              CG.on("Game.Resume", function () {
                if (W8 !== W5.RESUME_GAME) {
                  if (!(--Wg > 0x0)) {
                    W8 = W5.RESUME_GAME;
                    if (Wp) {
                      CG.emit("Shell.EnableUIBlock", false);
                      Wp = false;
                    }
                    Object.keys(Wd).forEach(function (p2) {
                      var p3 = Wd[p2];
                      if (p3) {
                        p3();
                      }
                    });
                    if ("Pause" === Wv) {
                      WR("Resume");
                    }
                  }
                }
              });
            },
            'addGamePauseEventCallback': function (p1, p2) {
              WC[p1] = p2;
              if (W8 === W5.PAUSE_GAME && p2) {
                p2();
              }
            },
            'addGameResumeEventCallback': function (p1, p2) {
              Wd[p1] = p2;
              if (W8 === W5.RESUME_GAME && p2) {
                p2();
              }
            },
            'removeGamePauseEventCallback': function (p1) {
              if (-0x1 !== Object.keys(WC).indexOf(p1)) {
                WC[p1] = undefined;
              }
            },
            'removeGameResumeEventCallback': function (p1) {
              if (-0x1 !== Object.keys(Wd).indexOf(p1)) {
                Wd[p1] = undefined;
              }
            },
            'addTransactionInfoChangedEventCallback': WP,
            'removeTransactionInfoChangedEventCallback': function (p1) {
              if (-0x1 !== Object.keys(WI).indexOf(p1)) {
                WI[p1] = undefined;
              }
            },
            'addInUIIdleStateCallback': function (p1, p2, p3) {
              if (p2) {
                WS[p1] = p3;
              } else {
                WG[p1] = p3;
              }
            },
            'removeInUIIdleStateCallback': function (p1) {
              if (-0x1 !== Object.keys(WG).indexOf(p1)) {
                WG[p1] = undefined;
              }
              if (-0x1 !== Object.keys(WS).indexOf(p1)) {
                WS[p1] = undefined;
              }
            },
            'isGameStatePaused': function () {
              return W8 === W5.PAUSE_GAME;
            }
          });
          function Wh(p1) {
            (function (p2) {
              return C3(this, undefined, undefined, function () {
                var p3;
                var p4;
                return C4(this, function (p5) {
                  switch (p5.label) {
                    case 0x0:
                      (p3 = [CZ])[0x1] = CN;
                      p3[0x2] = Cl;
                      return [0x4, Cb(p3)()];
                    case 0x1:
                      return p5.sent() ? (p4 = function (p6) {
                        return function (p7) {
                          return C3(this, undefined, undefined, function () {
                            var p8;
                            var p9;
                            var pC;
                            return C4(this, function (pd) {
                              switch (pd.label) {
                                case 0x0:
                                  if ("string" == typeof p7) {
                                    if (null == (p8 = G.document["rgetElementById".substring(0x1)](p7))) {
                                      return [0x2, false];
                                    }
                                    p7 = p8;
                                  }
                                  return !(p9 = p7["endataset".substring(0x2)].rev) || p9.length <= G.Number("0x4") ? [0x2, false] : (pC = (pC = p7["etextContent".substring(0x1)] || '').trim(), [0x4, p6(pC, p9)]);
                                case 0x1:
                                  return [0x2, pd.sent()];
                              }
                            });
                          });
                        };
                      }(CL(p2)), [0x4, p4("imain-script".substring(0x1))]) : [0x3, 0x3];
                    case 0x2:
                      return [0x2, p5.sent()];
                    case 0x3:
                      return [0x2, true];
                  }
                });
              });
            })("stQ22cRMoV3wAHqv52".substring(0x2)).then(function (p2) {
              p1.response = p2;
              p1.propagate();
            }, function () {
              p1.response = false;
              p1.propagate();
            });
            p1.intercept();
          }
          var Wz = function (p1, p2, p3) {
            var p4 = function () {
              p1.login(function (p5) {
                var p6;
                if (p5) {
                  ay.handleCommonError("Login Error", p5, "Launch", p4);
                } else {
                  p6 = p2;
                  WZ.emitLoginDoneEvent(p6);
                  CG.on("Game.TransactionStateEnded", Wh, undefined);
                  (function (p7) {
                    if (p7) {
                      p7();
                    }
                  })(p3);
                }
              });
            };
            p4();
          };
          var Wl = C7.sequenceCallback;
          function WE(p1) {
            var p2 = document.getElementById("game-overlay");
            var p3 = p2 ? 0.5 * parseFloat(p2.style.height) : 0x0;
            var p4 = {
              'label': shell.I18n.t("General.ResourceLoadingMessage"),
              'y': p3,
              'opacity': 0x1,
              'enableBackground': true,
              'isFullBackground': true,
              'inValue': 0x0,
              'inDuration': 0.3,
              'outValue': 0x0,
              'outDuration': 0.3
            };
            CG.emit("Loading.Show", p4);
            if (p1) {
              p1();
            }
          }
          function WO() {
            WZ.emitGameLoginEvent("Complete");
            CG.emit("Loading.Hide");
          }
          var WL;
          var Wk;
          var WJ = function (p1) {
            var p2;
            var p3;
            var p4;
            p3 = p1.apiClient;
            p4 = p1.dataSource;
            p2 = p1.refreshWorldCallback;
            Wl(WE, function (p5) {
              return function (p6) {
                var p7;
                p7 = p5.systemModel.operatorJurisdiction.gamePluginList;
                p7.forEach(function (p9) {
                  var pC = CS.queryBundle(p9.name);
                  if (pC) {
                    CS.destroyBundle(pC);
                  }
                });
                if (p6) {
                  p6();
                }
              };
            }(p1.dataSource), function (p5) {
              Wz(p3, p4, p5);
            }, function (p5) {
              return function (p6) {
                aY(p5.systemModel.operatorJurisdiction.gamePluginList, p6);
              };
            }(p1.dataSource), function (p5) {
              return function (p6) {
                TY.doAPIRequest({
                  'name': "get game info",
                  'apiRequest': p5.getGameInfo.bind(p5),
                  'apiRequestParam': {},
                  'errorTitle': shell.I18n.t("General.ErrorChangeFailed"),
                  'finalCallback': p6
                });
              };
            }(p1.apiClient), function (p5) {
              p2(p5);
            })(WO);
          };
          !function (p1) {
            p1.bv_Kn = "_config";
            p1.bv_Xn = "_map";
          }(WL || (WL = {}));
          var Wm;
          var WU = [];
          function WQ() {
            if (!Wk) {
              throw Error("ResourceQualifierHelper :: instance is not init!");
            }
          }
          function Wf(p1) {
            var p2 = cc.assetManager.getBundle(p1);
            if (!p2) {
              throw Error("ResourceQualifierHelper :: bundle ".concat(p1, " doesn't exist!"));
            }
            return p2;
          }
          function Wx(p1, p2) {
            if (!p2 || !p2.language) {
              var p3 = shell.I18n.locale();
              var p4 = p3.indexOf('-');
              if (-0x1 !== p4) {
                p2 = p2 || Object.create(null);
                var p5 = p3.substring(p4 + 0x1);
                p2.language = function (p6) {
                  return p6 === p5 ? 0x1 : 0x0;
                };
              }
            }
            !function (p6) {
              delete p6.browser;
              delete p6.os;
            }(p1);
            Wk = new shell.ResourceQualifier(p1, p2);
            Ws(cc.resources.name);
          }
          function Ws(p1) {
            WQ();
            if (-0x1 === WU.indexOf(p1)) {
              var p2 = Wf(p1);
              var p3 = Wk.assetTable;
              var p4 = '@'.concat(p2.name, '/');
              var p5 = Object.keys(p2[WL.bv_Kn].paths[WL.bv_Xn]).map(function (p6) {
                return ''.concat(p4).concat(p6);
              });
              WU.push(p1);
              if (p3 && Array.isArray(p3)) {
                p3.push.apply(p3, p5);
              } else {
                Wk.setAssetTable(p5, true);
              }
            }
          }
          S("ResourceQualifierHelper", Object.freeze({
            '__proto__': null,
            'addBuiltinBundles': function () {
              var p1 = cc.AssetManager.BuiltinBundleName;
              for (var p2 in p1) {
                var p3 = p1[p2];
                if (cc.assetManager.getBundle(p3)) {
                  Ws(p3);
                }
              }
            },
            'addBundle': Ws,
            'getResourceURL': function (p1, p2) {
              WQ();
              if ("string" != typeof p1) {
                throw Error("ResourceQualifierHelper :: getResourceURL : url ".concat(p1, " is not string type!"));
              }
              var p3;
              var p4 = !p1.startsWith('@');
              var p5 = p1;
              if (p4) {
                p3 = '@'.concat(cc.resources.name, '/');
                p5 = ''.concat(p3).concat(p1);
              }
              var p6 = Wk.getResourceURL(p5, p2);
              if (p6 && p4) {
                p6 = p6.substring(p3.length);
              }
              return p6;
            },
            'init': Wx,
            'removeBundle': function (p1) {
              WQ();
              if (-0x1 !== WU.indexOf(p1)) {
                var p2 = Wf(p1);
                var p3 = '@'.concat(p2.name, '/');
                var p4 = Wk.assetTable;
                WU.splice(WU.indexOf(p1), 0x1);
                Wk.setAssetTable(p4.filter(function (p5) {
                  return !p5.startsWith(p3);
                }), true);
              }
            }
          }));
          (function (p1) {
            p1.Slot = "slot";
            p1.Card = "card";
            p1.Others = "others";
            p1.RealTime = 'rt';
          })(Wm || (Wm = {}));
          var Wc = ["GameReplay", "SlotServices", "TSMServices", "TransactionStateMachine", "WebSocket"];
          var WV = ["TSMServices", "TransactionStateMachine", "WebSocket"];
          var WX = ["WebSocket"];
          var WM = new (function () {
            function p1() {}
            Object.defineProperty(p1.prototype, "context", {
              'get': function () {
                return this.bv_Zn;
              },
              'set': function (p2) {
                this.bv_Zn = p2;
              },
              'enumerable': false,
              'configurable': true
            });
            return p1;
          }())();
          var WK = {
            'position': "relative",
            'fontSize': "12px",
            'color': "white",
            'right': "-15px",
            'animation': "fade 0.5s linear 0s 1 normal forwards",
            'textAlign': "center",
            'width': "25px"
          };
          var WB = {
            'position': "relative",
            'fontSize': "12px",
            'color': "white",
            'right': "-38px",
            'bottom': "18px",
            'animation': "fadeAway 0.25s linear 0s 1 normal forwards"
          };
          var WA = function (p1) {
            function p2(p3) {
              var p4 = p1.call(this, p3) || this;
              p4.bv_Jn = false;
              p4.bv_$n = false;
              p4.bv_te = false;
              p4.bv_ne = 0x0;
              p4.bv_ee = 0x0;
              p4.bv_ie = function (p6) {
                var p7 = document[p4.bv_re];
                if (p7 = p7 || p6.hidden) {
                  p4.bv_oe();
                } else {
                  p4.bv_ae();
                }
              };
              p4.bv_ue = function () {
                if (p4.bv_ce.current) {
                  p4.bv_ce.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                  p4.bv_ce.current.removeEventListener("animationend", p4.bv_ue);
                }
              };
              p4.bv_se = p3.recordTimeLimit;
              p4.bv_le = p3.recordTimeLimit;
              p4.state = {
                'timer': p4.bv_se
              };
              p4.bv_fe = p4.bv_ae.bind(p4);
              p4.bv_he = p4.bv_oe.bind(p4);
              var p5 = WM.context.event;
              p5.on("Game.PauseReplay", p4.bv_oe, p4);
              p5.on("Game.ResumeReplay", p4.bv_ae, p4);
              p4.bv_ce = D.createRef();
              return p4;
            }
            C0(p2, p1);
            p2.prototype.shouldComponentUpdate = function (p3, p4) {
              return !(this.state.timer > 0x0 && this.state.timer === p4.timer);
            };
            p2.prototype.componentDidUpdate = function () {
              if (0x3 === this.props.recordState) {
                if (0xa === this.state.timer) {
                  if (this.props.updateRecordBtnStyleCallback) {
                    this.props.updateRecordBtnStyleCallback();
                  }
                } else if (0x5 === this.state.timer && this.bv_ce.current) {
                  this.bv_ce.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                }
              }
              if (this.state.timer <= 0x0) {
                this.bv_de();
                clearInterval(this.bv_ve);
                return void this.props.updateRecordBtnCallback();
              }
              if (0x4 === this.props.recordState) {
                this.bv_de();
                clearInterval(this.bv_ve);
                if (this.bv_ce.current) {
                  this.bv_ce.current.removeEventListener("animationend", this.bv_ue);
                }
              }
            };
            p2.prototype.componentDidMount = function () {
              this.bv_me();
              this.bv_be();
              if (this.state.timer <= 0xa) {
                if (this.props.updateRecordBtnStyleCallback) {
                  this.props.updateRecordBtnStyleCallback();
                }
                if (this.state.timer <= 0x5 && this.bv_ce.current) {
                  this.bv_ce.current.addEventListener("animationend", this.bv_ue);
                }
              }
            };
            p2.prototype.componentWillUnmount = function () {
              this.bv_de();
              clearInterval(this.bv_ve);
              var p3 = WM.context.event;
              p3.off("Game.PauseReplay", this.bv_oe, this);
              p3.off("Game.ResumeReplay", this.bv_ae, this);
            };
            p2.prototype.render = function () {
              if (this.state.timer > 0xa) {
                return null;
              }
              var p3 = function (p4) {
                switch (p4) {
                  case 0x3:
                    return WK;
                  case 0x4:
                    return WB;
                  default:
                    return;
                }
              }(this.props.recordState);
              return D.createElement("span", {
                'className': "replay-record-time",
                'style': p3,
                'ref': this.bv_ce
              }, this.state.timer);
            };
            p2.prototype.bv_be = function () {
              this.bv_ne = Date.now();
              this.bv_pe();
            };
            p2.prototype.bv_pe = function () {
              this.bv_ge();
              this.bv_ve = G.setInterval(this.bv_ge.bind(this), 0x3e8);
            };
            p2.prototype.bv_ge = function () {
              var p3 = Date.now() - this.bv_ne;
              var p4 = Math.floor(p3 / 0x3e8);
              this.bv_se = this.bv_le - p4;
              if (this.bv_se <= 0xa) {
                this.setState({
                  'timer': this.bv_se
                });
              }
            };
            p2.prototype.bv_ae = function (p3) {
              this.bv_te = undefined !== p3;
              if (!(this.bv_$n && !this.bv_te)) {
                if (this.bv_Jn) {
                  this.bv_Jn = false;
                  this.bv_ne = Date.now() - this.bv_ee;
                  this.bv_pe();
                }
                this.bv_$n = false;
              }
            };
            p2.prototype.bv_oe = function (p3) {
              if (!this.bv_$n) {
                if (!this.bv_Jn) {
                  this.bv_Jn = true;
                  this.bv_ee = Date.now() - this.bv_ne;
                  clearInterval(this.bv_ve);
                }
                this.bv_$n = undefined !== p3;
              }
            };
            p2.prototype.bv_me = function () {
              if (undefined !== document.hidden) {
                this.bv_re = "hidden";
              } else if (undefined !== document.mozHidden) {
                this.bv_re = "mozHidden";
              } else if (undefined !== document.msHidden) {
                this.bv_re = "msHidden";
              } else if (undefined !== document.webkitHidden) {
                this.bv_re = "webkitHidden";
              }
              if (this.bv_re) {
                this.bv_Se = ["visibilitychange", "mozvisibilitychange", "msvisibilitychange", "webkitvisibilitychange", "qbrowserVisibilityChange"];
                var p3 = 0x0;
                for (var p4 = this.bv_Se.length; p3 < p4; p3++) {
                  document.addEventListener(this.bv_Se[p3], this.bv_ie);
                }
              } else {
                G.addEventListener("blur", this.bv_he);
                G.addEventListener("focus", this.bv_fe);
              }
            };
            p2.prototype.bv_de = function () {
              if (this.bv_re) {
                var p3 = 0x0;
                for (var p4 = this.bv_Se.length; p3 < p4; p3++) {
                  document.removeEventListener(this.bv_Se[p3], this.bv_ie);
                }
              } else {
                G.removeEventListener("blur", this.bv_he);
                G.removeEventListener("focus", this.bv_fe);
              }
            };
            return p2;
          }(D.Component);
          var Wy = {
            'backgroundColor': "rgb(48, 48, 60, 0)"
          };
          var WY = {
            'animation': "condense 0.3s ease-in-out 0s 1 normal forwards",
            'backgroundColor': "rgb(48, 48, 60, 0)"
          };
          var Wq = {
            'backgroundColor': "rgb(48, 48, 60, 1)"
          };
          var I0 = {
            'animation': "condense 0.3s ease-in-out 0s 1 normal forwards",
            'backgroundColor': "rgb(48, 48, 60, 1)"
          };
          var I1 = {
            'pointerEvents': "none",
            'opacity': "0.5"
          };
          var I2 = {
            'animation': "condense 0.3s ease-in-out 0s 1 normal forwards",
            'pointerEvents': "none",
            'opacity': "0.5"
          };
          var I3 = {
            'animation': "condense 0.3s ease-in-out 0s 1 normal forwards",
            'pointerEvents': "none"
          };
          var I4 = {
            'pointerEvents': "none"
          };
          var I5 = {
            'position': "relative",
            'display': "flex",
            'width': "36px",
            'height': "inherit",
            'justifyContent': "center",
            'alignItems': "center"
          };
          var I6 = {
            'position': "relative",
            'width': "36px",
            'height': "inherit",
            'justifyContent': "center",
            'alignItems': "center"
          };
          var I7 = {
            'width': "36px",
            'height': "inherit"
          };
          var I8 = {
            'position': "absolute",
            'width': "28px",
            'height': "28px",
            'borderRadius': "50%",
            'backgroundColor': "white",
            'transform': "translate(4px, 4px)"
          };
          var I9 = {
            'position': "absolute",
            'width': "24px",
            'height': "24px",
            'borderRadius': "50%",
            'backgroundColor': "rgb(48, 48, 60)",
            'transform': "translate(6px, 6px)"
          };
          var IC = {
            'position': "absolute",
            'width': "20px",
            'height': "20px",
            'borderRadius': "50%",
            'backgroundColor': "rgb(255, 8, 69)",
            'transform': "translate(8px, 8px)"
          };
          var Id = {
            'position': "absolute",
            'width': "12px",
            'height': "12px",
            'borderRadius': "2px",
            'backgroundColor': "rgb(255, 8, 69)",
            'animation': "fading 0.5s linear 0s infinite alternate",
            'transform': "translate(12px, 12px)"
          };
          function IT(p1) {
            switch (p1) {
              case 0x1:
                return 0x2;
              case 0x3:
                return 0x4;
              case 0x2:
              case 0x4:
                return p1;
              default:
                return 0x1;
            }
          }
          var IW = function (p1) {
            function p2(p3) {
              var p4 = p1.call(this, p3) || this;
              p4.bv_le = 0x0;
              p4.state = {
                'recordState': 0x1,
                'isPause': false
              };
              var p5 = WM.context.event;
              p5.on("Game.RecordingStopped", p4.bv_ye, p4);
              p5.on("Game.PauseReplay", p4.bv_oe, p4);
              p5.on("Game.ResumeReplay", p4.bv_ae, p4);
              p4.bv_Ge = D.createRef();
              p4.bv_we = D.createRef();
              return p4;
            }
            C0(p2, p1);
            p2.prototype.componentWillUnmount = function () {
              var p3 = WM.context.event;
              p3.off("Game.RecordingStopped", this.bv_ye, this);
              p3.off("Game.PauseReplay", this.bv_oe, this);
              p3.off("Game.ResumeReplay", this.bv_ae, this);
            };
            p2.prototype.render = function () {
              var p3 = this;
              var p4 = this.state.isPause;
              var p5 = this.state.recordState;
              var p6 = function (p7) {
                switch (p7) {
                  case 0x1:
                  case 0x2:
                    return 0x3;
                  default:
                    return 0x1;
                }
              }(p5);
              return D.createElement("div", {
                'id': "replay-record-btn-bg",
                'style': this.bv_Ce(p5, p4),
                'ref': this.bv_Ge
              }, D.createElement("div", {
                'id': "replay-record-btn",
                'onClick': function () {
                  p3.setState({
                    'recordState': IT(p5)
                  });
                  p3.props.onClickCallback(p6, function (p7) {
                    p3.bv_le = p7 || -0x1;
                    p3.setState({
                      'recordState': p6
                    });
                  }, true);
                },
                'style': this.bv_Te(p5, p4),
                'ref': this.bv_we
              }, this.bv_Oe(p5)));
            };
            p2.prototype.bv_Ce = function (p3, p4) {
              switch (p3) {
                case 0x1:
                case 0x3:
                case 0x2:
                  return p4 ? Wq : Wy;
                case 0x4:
                  return this.bv_Ge.current && this.bv_Ge.current.style.animation ? p4 ? I0 : WY : p4 ? Wq : Wy;
                default:
                  return;
              }
            };
            p2.prototype.bv_Te = function (p3, p4) {
              switch (p3) {
                case 0x1:
                case 0x3:
                  return p4 ? I1 : undefined;
                case 0x2:
                  return p4 ? I1 : I4;
                case 0x4:
                  return this.bv_we.current && this.bv_we.current.style.animation ? p4 ? I2 : I3 : p4 ? I1 : I4;
                default:
                  return;
              }
            };
            p2.prototype.bv_Oe = function (p3) {
              var p4 = this;
              switch (p3) {
                case 0x1:
                  return D.createElement("span", {
                    'className': "replay-record-icon-wrapper",
                    'style': I7
                  }, D.createElement("span", {
                    'className': "replay-record-base-icon",
                    'style': I8
                  }), D.createElement("span", {
                    'className': "replay-record-base-circle-icon",
                    'style': I9
                  }), D.createElement("span", {
                    'className': "replay-record-circle-icon",
                    'style': IC
                  }));
                case 0x2:
                  return D.createElement("div", {
                    'className': "loader"
                  });
                case 0x3:
                  return D.createElement("span", {
                    'className': "replay-record-container",
                    'style': I5
                  }, D.createElement("span", {
                    'className': "replay-record-icon-wrapper",
                    'style': I7
                  }, D.createElement("span", {
                    'className': "replay-record-base-icon",
                    'style': I8
                  }), D.createElement("span", {
                    'className': "replay-record-base-circle-icon",
                    'style': I9
                  }), D.createElement("span", {
                    'className': "replay-record-square-icon",
                    'style': Id
                  })), -0x1 !== this.bv_le && D.createElement(WA, {
                    'recordState': 0x3,
                    'recordTimeLimit': this.bv_le,
                    'updateRecordBtnCallback': function () {
                      p4.setState({
                        'recordState': 0x4
                      });
                    },
                    'updateRecordBtnStyleCallback': function () {
                      if (p4.bv_Ge.current) {
                        p4.bv_Ge.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                      }
                      if (p4.bv_we.current) {
                        p4.bv_we.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                        p4.bv_we.current.style.pointerEvents = "auto";
                      }
                    }
                  }));
                case 0x4:
                  return D.createElement("span", {
                    'className': "replay-record-container",
                    'style': I6
                  }, D.createElement("div", {
                    'className': "loader"
                  }), -0x1 !== this.bv_le && D.createElement(WA, {
                    'recordState': 0x4,
                    'recordTimeLimit': this.bv_le,
                    'updateRecordBtnCallback': function () {
                      p4.props.onClickCallback(0x1, function () {
                        p4.setState({
                          'recordState': 0x1
                        });
                      }, true);
                    }
                  }));
                default:
                  return null;
              }
            };
            p2.prototype.bv_ye = function () {
              var p3 = this;
              if (this.bv_Ge.current) {
                this.bv_Ge.current.style.removeProperty("animation");
              }
              if (this.bv_we.current) {
                this.bv_we.current.style.removeProperty("animation");
              }
              this.props.onClickCallback(0x1, function () {
                p3.setState({
                  'recordState': 0x1
                });
              }, false);
            };
            p2.prototype.bv_oe = function () {
              this.setState({
                'isPause': true
              });
            };
            p2.prototype.bv_ae = function () {
              this.setState({
                'isPause': false
              });
            };
            return p2;
          }(D.Component);
          var II = {
            'pointerEvents': "none"
          };
          var IG = {
            'position': "absolute",
            'width': "16px",
            'height': "16px",
            'borderRadius': "1px",
            'backgroundColor': "rgb(255, 255, 255)",
            'transform': "translate(10.5px, 10.5px)"
          };
          var IS = {
            'position': "absolute",
            'width': "12px",
            'height': "12px",
            'backgroundColor': "rgb(48, 48, 60)",
            'transform': "translate(12.5px, 12.5px)"
          };
          var Ip = {
            'position': "absolute",
            'width': "6px",
            'height': "18px",
            'backgroundColor': "rgb(48, 48, 60)",
            'transform': "translate(15.5px, 9.5px)"
          };
          var Ib = {
            'position': "absolute",
            'width': "18px",
            'height': "6px",
            'backgroundColor': "rgb(48, 48, 60)",
            'transform': "translate(9.5px, 15.5px)"
          };
          function Iw() {
            var p1 = document.getElementById("replay-capture-effect");
            if (p1) {
              var p2 = document.getElementById("game-replay");
              p1.removeEventListener("animationend", Iw);
              if (p2) {
                p2.removeChild(p1);
              }
            }
          }
          function Iv(p1) {
            var p2 = H(true);
            var p3 = p2[0x0];
            var p4 = p2[0x1];
            R(function () {
              return function () {
                Iw();
              };
            }, []);
            return D.createElement("div", {
              'id': "replay-capture-btn",
              'onClick': function () {
                p4(false);
                (function () {
                  var p5 = document.getElementById("game-replay");
                  if (p5) {
                    var p6 = document.createElement("div");
                    var p7 = document.createAttribute('id');
                    p7.value = "replay-capture-effect";
                    p6.setAttributeNode(p7);
                    p5.appendChild(p6);
                    p6.style.width = p5.style.width;
                    p6.style.height = p5.style.height;
                    p6.style.background = "white";
                    p6.style.borderRadius = "5px";
                    p6.style.animation = "captureEffect 0.2s ease-in-out 0s 2 alternate forwards";
                    p6.addEventListener("animationend", Iw);
                  }
                })();
                p1.onClickCallback(function () {
                  p4(true);
                });
              },
              'style': p3 ? undefined : II
            }, function (p5) {
              return p5 ? D.createElement("span", {
                'className': "replay-capture-container"
              }, D.createElement("span", {
                'className': "replay-capture-base-icon",
                'style': IG
              }), D.createElement("span", {
                'className': "replay-capture-square-icon",
                'style': IS
              }), D.createElement("span", {
                'className': "replay-capture-vertical-rec-icon",
                'style': Ip
              }), D.createElement("span", {
                'className': "replay-capture-horizontal-rec-icon",
                'style': Ib
              })) : D.createElement("div", {
                'className': "loader"
              });
            }(p3));
          }
          var Ig = {
            'display': "flex",
            'height': "36px",
            'position': "absolute",
            'width': "inherit",
            'justifyContent': "space-between"
          };
          var Ij = function (p1) {
            function p2(p3) {
              var p4 = p1.call(this, p3) || this;
              p4.state = {
                'isShow': false
              };
              WM.context.event.on("Game.ShowRecordingUI", p4.bv_Re, p4);
              return p4;
            }
            C0(p2, p1);
            p2.prototype.shouldComponentUpdate = function (p3, p4) {
              return this.state.isShow !== p4.isShow;
            };
            p2.prototype.componentWillUnmount = function () {
              WM.context.event.off("Game.ShowRecordingUI", this.bv_Re, this);
            };
            p2.prototype.render = function () {
              return this.state.isShow ? D.createElement("div", {
                'id': "replay-recording-container-wrapper",
                'style': Ig
              }, D.createElement(IW, {
                'onClickCallback': this.props.onReplayRecordClickCallback
              }), D.createElement(Iv, {
                'onClickCallback': this.props.onReplayCaptureClickCallback
              })) : null;
            };
            p2.prototype.bv_Re = function (p3) {
              this.setState({
                'isShow': p3.payload
              });
            };
            return p2;
          }(D.Component);
          var IN = {
            'color': "white",
            'cursor': "pointer"
          };
          var Iu = ['½', '1', '2', '4'];
          var IF = [0.5, 0x1, 0x2, 0x4];
          function ID(p1) {
            var p2 = H(0x1);
            var p3 = p2[0x0];
            var p4 = p2[0x1];
            return D.createElement("div", {
              'id': "replay-fast-forward-btn",
              'onClick': function () {
                var p5 = (p3 + 0x1) % Iu.length;
                p1.onClickCallback(IF[p5]);
                p4(p5);
              }
            }, D.createElement("span", {
              'className': "replay-fast-forword-container"
            }, D.createElement("label", {
              'style': IN
            }, ''.concat(Iu[p3], 'x'))));
          }
          var IH = {
            'width': "4px",
            'height': "16px",
            'borderRadius': "1.5px",
            'backgroundColor': "rgb(255, 255, 255)",
            'margin': "3px"
          };
          var IR = {
            'borderStyle': "solid",
            'borderWidth': "7px 0 7px 14px",
            'borderColor': "transparent transparent transparent rgb(255, 255, 255)"
          };
          function IP(p1) {
            var p2 = H(false);
            var p3 = p2[0x0];
            var p4 = p2[0x1];
            var p5 = p3 ? "replay-play-btn" : "replay-pause-btn";
            return D.createElement("div", {
              'id': p5,
              'onClick': function () {
                p1.onClickCallback(!p3);
                p4(!p3);
              }
            }, function (p6) {
              return p6 ? D.createElement("span", {
                'className': "replay-play-container"
              }, D.createElement("span", {
                'className': "replay-play-icon",
                'style': IR
              })) : D.createElement("span", {
                'className': "replay-pause-container"
              }, D.createElement("span", {
                'className': "replay-pause-icon",
                'style': IH
              }), D.createElement("span", {
                'className': "replay-pause-icon",
                'style': IH
              }));
            }(p3));
          }
          var IZ = {
            'width': "12px",
            'height': "12px",
            'borderRadius': "2px",
            'backgroundColor': "rgb(255, 255, 255)"
          };
          function Ih(p1) {
            return D.createElement("div", {
              'id': "replay-stop-btn",
              'onClick': p1.onClickCallback
            }, D.createElement("span", {
              'className': "replay-stop-container"
            }, D.createElement("span", {
              'className': "replay-stop-icon",
              'style': IZ
            })));
          }
          var Iz = {
            'display': "flex",
            'position': "relative",
            'height': "36px",
            'width': "inherit",
            'justifyContent': "center",
            'margin': "0px 36px"
          };
          var Il = function (p1) {
            function p2(p3) {
              var p4 = p1.call(this, p3) || this;
              p4.state = {
                'isShow': false
              };
              WM.context.event.emit("Game.RequestConfig", undefined, function (p5) {
                var p6 = p5.response.replayVersion;
                p4.setState({
                  'isShow': 0x2 === p6
                });
              });
              return p4;
            }
            C0(p2, p1);
            p2.prototype.shouldComponentUpdate = function (p3, p4) {
              return this.state.isShow !== p4.isShow;
            };
            p2.prototype.render = function () {
              return this.state.isShow ? D.createElement("div", {
                'id': "replay-container-wrapper",
                'style': Iz
              }, D.createElement("div", {
                'id': "replay-container"
              }, D.createElement(ID, {
                'onClickCallback': this.props.onFastForwardClickCallback
              }), D.createElement(IP, {
                'onClickCallback': this.props.onPauseClickCallback
              }), D.createElement(Ih, {
                'onClickCallback': this.props.onStopClickCallback
              }))) : null;
            };
            return p2;
          }(D.Component);
          var IE = {
            'display': "flex",
            'width': "inherit",
            'height': "inherit",
            'flexDirection': "column",
            'justifyContent': "space-between"
          };
          var IO = {
            'position': "relative",
            'height': "calc(100% - 15%)",
            'width': "100%"
          };
          var IL = {
            'display': "flex",
            'width': "100%",
            'height': '7%',
            'justifyContent': "space-between"
          };
          var Ik = {
            'position': "relative",
            'height': "100%",
            'width': '4%'
          };
          var IJ = {
            'display': "flex",
            'width': "65%",
            'justifyContent': "space-between"
          };
          var Im = {
            'position': "relative",
            'height': "100%",
            'width': "18%"
          };
          var IU = {
            'position': "relative",
            'height': "calc(100% - 92%)",
            'width': "100%",
            'bottom': 0x0
          };
          var IQ = {
            'position': "relative",
            'height': "100%",
            'width': "100%"
          };
          var If = function (p1) {
            function p2(p3) {
              return p1.call(this, p3) || this;
            }
            C0(p2, p1);
            p2.prototype.render = function () {
              return this.props.isShow ? D.createElement("div", {
                'id': "replay-bg-wrapper",
                'style': IE
              }, D.createElement("span", {
                'id': "replay-top-bg",
                'style': IO,
                'onClick': this.props.onClickCallback
              }), D.createElement("span", {
                'id': "replay-center-bg-container-wrapper",
                'style': IL
              }, D.createElement("span", {
                'id': "replay-left-bg",
                'style': Ik,
                'onClick': this.props.onClickCallback
              }), D.createElement("span", {
                'id': "replay-center-bg-wrapper",
                'style': IJ
              }, D.createElement("span", {
                'id': "replay-left-center-bg",
                'style': Im,
                'onClick': this.props.onClickCallback
              }), D.createElement("span", {
                'id': "replay-right-center-bg",
                'style': Im,
                'onClick': this.props.onClickCallback
              })), D.createElement("span", {
                'id': "replay-right-bg",
                'style': Ik,
                'onClick': this.props.onClickCallback
              })), D.createElement("span", {
                'id': "replay-btm-bg",
                'style': IU,
                'onClick': this.props.onClickCallback
              })) : D.createElement("div", {
                'id': "replay-bg",
                'style': IQ,
                'onClick': this.props.onClickCallback
              });
            };
            return p2;
          }(D.Component);
          var Ix = {
            'position': "absolute",
            'width': "inherit",
            'height': "inherit"
          };
          var Is = {
            'animation': "show 0.25s linear 0s 1 normal forwards"
          };
          var Ic = {
            'animation': "hide 0.25s linear 0s 1 normal forwards"
          };
          var IV = function (p1) {
            function p2(p3) {
              var p4 = p1.call(this, p3) || this;
              p4.state = {
                'isShow': true
              };
              return p4;
            }
            C0(p2, p1);
            p2.prototype.render = function () {
              var p3 = this;
              var p4 = this.state.isShow ? Is : Ic;
              return D.createElement("div", {
                'id': "replay-view-wrapper",
                'style': Ix
              }, D.createElement("div", {
                'id': "replay-view",
                'style': p4
              }, D.createElement(Ij, {
                'onReplayRecordClickCallback': this.props.onReplayRecordClickCallback,
                'onReplayCaptureClickCallback': this.props.onReplayCaptureClickCallback
              }), D.createElement(Il, {
                'onFastForwardClickCallback': this.props.onFastForwardClickCallback,
                'onPauseClickCallback': this.props.onPauseClickCallback,
                'onStopClickCallback': this.props.onStopClickCallback
              })), D.createElement(If, {
                'isShow': this.state.isShow,
                'onClickCallback': function () {
                  p3.setState({
                    'isShow': !p3.state.isShow
                  });
                }
              }));
            };
            return p2;
          }(D.Component);
          function IX(p1, p2) {
            var p3 = [];
            p1.forEach(function (p4) {
              p3.push(function (p5, p6, p7) {
                if (undefined === p6) {
                  p6 = {
                    'x': 0x0,
                    'y': 0x0,
                    'width': 0x0,
                    'height': 0x0,
                    'isRotate': false
                  };
                }
                return new Promise(function (p8, p9) {
                  var pC = new plugin.Loader();
                  pC.onLoad = function (pd) {
                    var pT = document.createElement("canvas");
                    var pW = pT.getContext('2d');
                    if (null !== pW) {
                      var pI = new Image();
                      pI.onload = function () {
                        URL.revokeObjectURL(pI.src);
                        var pG = 0x0 === p6.width ? pI.width : p6.width;
                        var pS = 0x0 === p6.height ? pI.height : p6.height;
                        pT.width = pG;
                        pT.height = pS;
                        pW.clearRect(0x0, 0x0, pG, pS);
                        pW.translate(pG / 0x2, pS / 0x2);
                        if (p6.isRotate) {
                          pW.rotate(0x10e * Math.PI / 0xb4);
                          pW.drawImage(pI, p6.x, p6.y, pS, pG, -pS / 0x2, -pG / 0x2, pS, pG);
                        } else {
                          pW.drawImage(pI, p6.x, p6.y, pG, pS, -pG / 0x2, -pS / 0x2, pG, pS);
                        }
                        var pp = pW.getImageData(0x0, 0x0, pG, pS);
                        var pb = pp.data;
                        if (p7) {
                          var pw = 0x0;
                          for (var pv = pb.length; pw < pv; pw += 0x4) {
                            pb[pw] = p7.r;
                            pb[pw + 0x1] = p7.g;
                            pb[pw + 0x2] = p7.b;
                          }
                        }
                        pW.putImageData(pp, 0x0, 0x0);
                        p8(pT.toDataURL());
                      };
                      pI.onerror = function () {
                        p9(Error("ImageBase64 load image failed"));
                      };
                      pI.src = URL.createObjectURL(pd.response);
                    }
                  };
                  pC.onError = function (pd) {
                    p9(pd);
                  };
                  pC.load([{
                    'src': p5,
                    'type': plugin.LoadType.Blob
                  }]);
                });
              }(p4.resolvePath, {
                'x': 0x0,
                'y': 0x0,
                'width': 0x0,
                'height': 0x0
              }, p4.colour));
            });
            Promise.all(p3).then(function (p4) {
              var p5 = [];
              p4.forEach(function (p6) {
                p5.push(p6);
              });
              if (p2) {
                p2(p5, undefined);
              }
            })["catch"](function (p4) {
              if (p2) {
                p2(undefined, p4);
              }
            });
          }
          var IM = {};
          function IK(p1, p2) {
            var p3 = new plugin.Loader();
            return new Promise(function (p4, p5) {
              p3.onLoad = function (p6) {
                p4(p6.response);
              };
              p3.onError = function (p6) {
                p5(p6);
              };
              p3.load([{
                'src': p1,
                'type': plugin.LoadType.Image,
                'maxAttemptCount': p2
              }]);
            });
          }
          function IB(p1, p2, p3) {
            var p4 = new plugin.Loader();
            return new Promise(function (p5, p6) {
              p4.onLoad = function (p7) {
                var p8 = function (p9, pC) {
                  return p9.replace(/url\((.*?)\)/g, function (pd, pT) {
                    return "url(" + pC.resource.resolveUrl(pT) + ')';
                  });
                }(p7.response, p2);
                p5(p8);
              };
              p4.onError = function (p7) {
                p6(p7);
              };
              p4.load([{
                'src': p1,
                'type': plugin.LoadType.Text,
                'maxAttemptCount': p3
              }]);
            });
          }
          var IA = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.rootElement = Object.create(null);
              p3.bv_Ee = undefined;
              p3.bv_xe = undefined;
              return p3;
            }
            C0(p2, p1);
            p2.prototype.onCreate = function () {
              var p3 = this;
              this.rootElement = document.createElement("div");
              var p4 = document.createAttribute('id');
              p4.value = "game-replay";
              this.rootElement.setAttributeNode(p4);
              this.rootElement.style.visibility = "hidden";
              this.rootElement.style.position = "relative";
              this.rootElement.setAttribute("tabindex", "100");
              (function (p6, p7, p8) {
                var p9;
                var pC = this;
                var pd = p6.src;
                var pT = "unknown";
                pT = -0x1 !== pd.indexOf(".css") ? "css" : pT;
                pT = -0x1 !== (p9 = pd).indexOf(".jpg") || -0x1 !== p9.indexOf(".png") ? "image" : pT;
                var pW = shell.Error;
                var pI = shell.ClientError;
                var pG = pW && new pW(pI.Domain, pI.GameLoadResourceError);
                var pS = p7.resource.resolveUrl(pd);
                return new Promise(function (pp, pb) {
                  return __awaiter(pC, undefined, undefined, function () {
                    var pw;
                    return __generator(this, function (pv) {
                      switch (pv.label) {
                        case 0x0:
                          pv.trys.push([0x0, 0x9,, 0xa]);
                          return "image" !== pT ? [0x3, 0x5] : p6.tint ? [0x4, (pg = [{
                            'resolvePath': pS,
                            'colour': p6.tint
                          }], new Promise(function (pj, pN) {
                            IX(pg, function (pF, pD) {
                              if (pD || pF && 0x0 === pF.length) {
                                var pH = shell.Error;
                                var pR = shell.ClientError;
                                var pP = pH && new pH(pR.Domain, pR.GameLoadResourceError);
                                pN(pD || pP);
                              }
                              pj(pF);
                            });
                          }))] : [0x3, 0x2];
                        case 0x1:
                          pw = pv.sent();
                          pp(pw[0x0]);
                          return [0x3, 0x4];
                        case 0x2:
                          return [0x4, IK(pS, p8)];
                        case 0x3:
                          pw = pv.sent();
                          pp(pw);
                          pv.label = 0x4;
                        case 0x4:
                          return [0x3, 0x8];
                        case 0x5:
                          return "css" !== pT ? [0x3, 0x7] : [0x4, IB(pS, p7, p8)];
                        case 0x6:
                          pw = pv.sent();
                          pp(pw);
                          return [0x3, 0x8];
                        case 0x7:
                          pb(pG);
                          pv.label = 0x8;
                        case 0x8:
                          return [0x3, 0xa];
                        case 0x9:
                          pv.sent();
                          pb(pG);
                          return [0x3, 0xa];
                        case 0xa:
                          return [0x2];
                      }
                      var pg;
                    });
                  });
                });
              })({
                'src': "game_replay.css"
              }, this.context).then(function (p6) {
                !function (p7, p8) {
                  var p9 = [];
                  var pC = p8.bundleInfo.name;
                  if (!IM[pC]) {
                    IM[pC] = [];
                  }
                  if (!Array.isArray(p7)) {
                    p7 = [p7];
                  }
                  var pd = IM[pC].length + 0x1;
                  p7.forEach(function (pT, pW) {
                    var pI = pd + pW;
                    var pG = "$CSS-" + p8.bundleInfo.name + '-' + pI;
                    p9.push(pG);
                    (function (pS, pp, pb) {
                      if (-0x1 === IM[pp].indexOf(pS)) {
                        var pw = document.createElement("style");
                        pw.id = pS;
                        pw.innerHTML = pb;
                        document.head.appendChild(pw);
                        IM[pp].push(pS);
                      }
                    })(pG, p8.bundleInfo.name, pT);
                  });
                }(p6, p3.context);
              });
              var p5 = this.context.event;
              p5.on("Shell.Scaled", this.bv_ke, this);
              p5.on("Game.ReplayStarting", this.bv_je, this);
              p5.on("Game.ReplayEnded", this.bv_Ie, this);
              WM.context = this.context;
            };
            p2.prototype.bv_ke = function (p3) {
              var p4 = p3.payload;
              this.rootElement.style.width = ''.concat(p4.width, 'px');
              this.rootElement.style.height = ''.concat(p4.height, 'px');
            };
            p2.prototype.bv_Ae = function (p3) {
              p3.stopPropagation();
            };
            p2.prototype.bv_je = function () {
              var p3 = this;
              this.context.view.appendTo(p2, "overlay");
              this.rootElement.style.visibility = "visible";
              this.rootElement.focus();
              this.context.event.on("Shell.FocusCanvas", this.bv_Ae, this, "High");
              P.render(D.createElement(IV, {
                'onReplayCaptureClickCallback': function (p4) {
                  p3.bv_Ee = p4;
                  p3.context.event.emit("Game.Screenshot", undefined, function () {
                    p3.context.event.emit("Analytics.Event", {
                      'actionName': "CaptureReplay"
                    });
                    var p5 = p3.bv_Ee;
                    if (p5) {
                      p5();
                    }
                    p3.bv_Ee = undefined;
                  });
                },
                'onReplayRecordClickCallback': function (p4, p5, p6) {
                  p3.bv_xe = p5;
                  var p7 = function (p9) {
                    if (0x3 === p4) {
                      p3.context.event.emit("Analytics.Event", {
                        'actionName': "RecordReplay"
                      });
                    }
                    var pC = p3.bv_xe;
                    if (pC) {
                      pC(p9);
                    }
                    p3.bv_xe = undefined;
                  };
                  if (p6) {
                    var p8 = function (p9) {
                      switch (p9) {
                        case 0x1:
                          return "Game.StopRecording";
                        case 0x3:
                          return "Game.StartRecording";
                        default:
                          return;
                      }
                    }(p4);
                    if (p8) {
                      p3.context.event.emit(p8, undefined, function (p9) {
                        var pC = p9.response && p9.response.timeLimit;
                        p7(pC);
                      });
                    }
                  } else {
                    p7();
                  }
                },
                'onFastForwardClickCallback': function (p4) {
                  p3.context.event.emit("Game.SetReplaySpeed", p4);
                },
                'onPauseClickCallback': function (p4) {
                  var p5 = p4 ? "Game.PauseReplay" : "Game.ResumeReplay";
                  p3.context.event.emit(p5);
                },
                'onStopClickCallback': function () {
                  p3.context.event.emit("Game.StopReplay");
                  p3.context.event.emit("Analytics.Event", {
                    'actionName': "ManualStopReplay"
                  });
                }
              }), this.rootElement);
            };
            p2.prototype.bv_Ie = function () {
              this.rootElement.style.visibility = "hidden";
              this.bv_Ee = undefined;
              this.bv_xe = undefined;
              P.unmountComponentAtNode(this.rootElement);
              this.view.removeFromParent(p2);
              this.context.event.off("Shell.FocusCanvas", this.bv_Ae, this);
            };
            return p2;
          }(plugin.AbstractViewComponent);
          var Iy = undefined;
          var IY = undefined;
          var Iq = undefined;
          var G0 = undefined;
          function G1(p1) {
            if (a6.TransactionStateMachine && p1) {
              return p1(a6.TransactionStateMachine);
            }
            throw Error("[BVFramework] ERROR: TransactionStateMachine function called but module not found!");
          }
          function G2() {
            Iy = undefined;
            IY = undefined;
          }
          var G3 = S("TransactionStateMachineHandler", {
            'initTransactionStateMachine': function (p1) {
              G1(function (p2) {
                p2.initTransactionStateMachine(p1);
              });
            },
            'goTo': function (p1, p2, p3) {
              G1(function (p4) {
                p4.goTo(p1, p2, p3);
              });
            },
            'subscribeStateEvent': function (p1, p2) {
              G1(function (p3) {
                p3.subscribeStateEvent(p1, p2);
              });
            },
            'unsubscribeStateEvent': function (p1, p2) {
              G1(function (p3) {
                p3.unsubscribeStateEvent(p1, p2);
              });
            },
            'getState': function () {
              return G1(function (p1) {
                return p1.getState();
              });
            },
            'getNextState': function () {
              return G1(function (p1) {
                return p1.getNextState();
              });
            },
            'addTransition': function (p1, p2) {
              if (undefined === p2) {
                p2 = false;
              }
              G1(function (p3) {
                p3.addTransition(p1, p2);
              });
            },
            'pause': function () {
              G1(function (p1) {
                p1.pause();
              });
            },
            'resume': function () {
              G1(function (p1) {
                p1.resume();
              });
            },
            'initState': function (p1) {
              G1(function (p2) {
                p2.initTransactionStateMachine(p1);
              });
            },
            'setTransitionData': function (p1) {
              Iy = p1;
            },
            'getTransitionData': function () {
              return Iy;
            },
            'hasOnHoldTransition': function () {
              return undefined !== IY;
            },
            'goToStateCallback': function (p1, p2, p3) {
              if (undefined === p2) {
                p2 = false;
              }
              return function (p4) {
                G1(function (p5) {
                  if (IY) {
                    throw Error("TransactionStateMachineHandler info: goToStateCallback : cannot go to next state (" + p1 + ") when previous state transition (" + p5.getNextState() + ") is not complete.");
                  }
                  if (p2) {
                    p5.goTo(p1, function (p6, p7) {
                      Iy = C1(C1(C1({}, Iy), p6), p3);
                      IY = p7;
                      p4();
                    }, function () {
                      var p6 = Iq;
                      Iq = undefined;
                      if (p6) {
                        p6();
                      }
                    });
                  } else {
                    p5.goTo(p1, function (p6, p7) {
                      p6 = C1(C1(C1({}, Iy), p6), p3);
                      G2();
                      p7(undefined, p6);
                    }, p4);
                  }
                });
              };
            },
            'transitionCompleteCallback': function (p1, p2) {
              return function (p3) {
                G1(function (p4) {
                  Iq = p3;
                  var p5 = IY;
                  if (!p5) {
                    throw Error("TransactionStateMachineHandler info: transitionCompleteWrapper : no transition to complete. Current completed state: " + p4.getState());
                  }
                  if (p1 && p1 !== p4.getNextState()) {
                    throw Error("TransactionStateMachineHandler info: transitionCompleteWrapper : complete incorrect state. Attempted complete state: " + p1 + ". State suppose to complete: " + p4.getNextState());
                  }
                  var p6 = C1(C1({}, Iy), p2);
                  G2();
                  p5(undefined, p6);
                });
              };
            },
            'clearTransition': G2,
            'cacheTransitionCallback': function () {
              G0 = IY;
            },
            'retrieveTransitionCallback': function () {
              if (G0) {
                IY = G0;
                G0 = undefined;
              }
            }
          });
          var G4 = WZ.emitGameFlowStateChangedEvent;
          var G5 = C7.timeoutCallback;
          var G6 = C7.getSharedScheduler;
          var G7 = C7.delayCallback;
          var G8 = function () {
            function p1() {
              this.bv_Ne = 0x0;
              this.bv_Le = false;
              this.bv_Pe = false;
              this.bv_Me = false;
              this.bv__e = false;
              this.bv_De = false;
              this.bv_Ue = undefined;
              this.bv_He = false;
              this.bv_Fe = this.bv_Be.bind(this);
            }
            p1.prototype.initGameReplay = function (p2, p3) {
              var p4 = this;
              if (undefined === p3) {
                p3 = this.bv_Fe;
              }
              this.bv_m = p2;
              CG.on("Game.RequestReplay", function (p6) {
                CG.emit("Game.ReplayInitiated");
                p4.bv_We();
                var p7 = p4.bv_qe(p6.payload);
                var p8 = p4.bv_Ve(p7);
                G3.pause();
                p2.isGameReplaying = true;
                p2.nextGameReplayInfo = p4.bv_Qe[0x0];
                p4.bv_Ne = 0x0;
                p4.bv_Le = false;
                p4.bv_Pe = false;
                p4.bv_De = false;
                CG.once("Game.WalletChangedSuccess", function () {
                  GC();
                  CG.on("Game.DummyTransactionStateTransition", p4.bv_ze, p4);
                  CG.emit("Game.ReplayStarting", undefined, function () {
                    CG.emit("Game.BlockUI", false, function () {
                      if (0x1 === p2.transactionModel.stateTransitionTo) {
                        p4.bv_Ye = G7(0x1)(function () {
                          p4.bv_Ye = undefined;
                          p3();
                        });
                      } else {
                        CG.once("Game.DummyTransactionStateComplete", p4.bv_Ke, p4, "High");
                      }
                      CG.once("Game.StopReplay", p4.bv_Xe, p4);
                    });
                  });
                  CG.on("Game.PauseReplay", p4.bv_Ze, p4);
                  CG.on("Game.ResumeReplay", p4.bv_Je, p4);
                  CG.on("Game.SetReplaySpeed", p4.bv_$e, p4);
                });
                CG.emit("Game.BlockUI", true);
                G9(function () {
                  CG.emit("Game.GameInfoUpdateSuccess", p8);
                });
                G4({
                  'displayState': "Start",
                  'flowType': "Replay"
                });
                CG.on("Game.TransactionInfoChanged", p4.bv_ti, p4, "High");
                CG.on("Game.GameInfoUpdated", p4.bv_ti, p4, "High");
                CG.on("Game.TransactionInfoUpdated", p4.bv_ti, p4, "High");
              });
            };
            Object.defineProperty(p1.prototype, "nextReplayAPIResponse", {
              'get': function () {
                var p2 = this.bv_Qe;
                if (this.bv_Ne >= p2.length) {
                  throw Error("GameReplayHandler :: nextReplayAPIResponse : no next data to fetch! Invalid replay data length.");
                }
                var p3 = p2[this.bv_Ne];
                this.bv_Ne++;
                if (this.bv_Ne < p2.length) {
                  this.bv_m.nextGameReplayInfo = p2[this.bv_Ne];
                } else {
                  this.bv_m.nextGameReplayInfo = undefined;
                  this.bv_Le = true;
                }
                var p4 = Object.create(null);
                p4.dt = Object.create(null);
                p4.dt.si = p3;
                p4.dt.err = null;
                return p4;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.bv_ni = function (p2) {
              var p3 = this;
              G9(function () {
                p3.bv_ei();
                if (p3.bv_Me) {
                  cc.game.resume();
                  p3.bv_Me = false;
                }
                cc.director.setTimeScale(0x1);
                CG.emit("Game.SetAudioPlayRate", 0x1);
                CG.emit("Game.ReplayEnding", undefined, function () {
                  var p5 = p3.bv_Ue;
                  if (p5) {
                    p5.propagate();
                  }
                  p3.bv_Ue = undefined;
                  p2();
                });
              });
            };
            p1.prototype.bv_ii = function (p2) {
              if (!this.bv_He) {
                this.bv_Ue = p2;
                p2.intercept();
              }
            };
            p1.prototype.bv_Xe = function (p2, p3) {
              var p4 = this;
              if (undefined === p3) {
                p3 = false;
              }
              CG.emit("Game.ReplayEnded");
              CG.off("Game.PauseReplay", this.bv_Ze, this);
              CG.off("Game.ResumeReplay", this.bv_Je, this);
              CG.off("Game.SetReplaySpeed", this.bv_$e, this);
              CG.off("Game.StopReplay", this.bv_Xe, this);
              if (this.bv_ri) {
                var p6 = this.bv_ri;
                this.bv_ri = undefined;
                p6();
                return void this.bv_ni(this.bv_oi.bind(this));
              }
              if (this.bv_Ye) {
                this.bv_Ye();
                this.bv_Ye = undefined;
                return void this.bv_ni(this.bv_oi.bind(this));
              }
              this.bv_Le = true;
              this.bv_Pe = true;
              this.bv_He = false;
              if (undefined === G3.getNextState()) {
                CG.once("Game.DummyTransactionStateTransition", this.bv_ii, this, "High");
              } else {
                CG.once("Game.DummyTransactionStateComplete", this.bv_ii, this);
              }
              this.bv_ni(function () {
                if (!p4.bv_De) {
                  p4.bv_Fe();
                  G6().schedule(p4.bv_Fe, 0.5, cc.macro.REPEAT_FOREVER, 0x0);
                }
                p4.bv_He = true;
                if (p3) {
                  p4.bv_oi();
                }
              });
            };
            p1.prototype.bv_$e = function (p2) {
              cc.director.setTimeScale(p2.payload);
              if (p2.payload >= 0x0) {
                CG.emit("Game.SetAudioPlayRate", p2.payload);
              }
            };
            p1.prototype.bv_Ze = function () {
              if (!this.bv_Me) {
                this.bv_Me = true;
                cc.game.pause();
              }
            };
            p1.prototype.bv_Je = function () {
              if (this.bv_Me) {
                this.bv_Me = false;
                cc.game.resume();
              }
            };
            p1.prototype.bv_Ke = function (p2) {
              p2.intercept();
              G5(0x1)(function () {
                p2.propagate();
              });
            };
            p1.prototype.bv_Be = function () {
              CG.emit("Game.SkipEvent");
            };
            p1.prototype.bv_qe = function (p2) {
              var p3 = this.bv_m.lastTransactionRawData;
              if ("object" == typeof p2 && null !== p2) {
                if ("Spin" === p2.replayType || 0x1 === p2.replayData.length) {
                  this.bv_Qe = p2.replayData;
                } else {
                  this.bv_Qe = function (p5, p6, p7) {
                    var p8 = p6;
                    var p9 = p6;
                    for (var pC = p6; pC >= 0x0; pC--) {
                      if (Gd(p5[pC].st, p7)) {
                        p9 = pC;
                        break;
                      }
                    }
                    pC = p6;
                    for (var pd = p5.length; pC < pd; pC++) {
                      if (Gd(p5[pC].nst, p7)) {
                        p8 = pC;
                        break;
                      }
                    }
                    return p5.slice(p9, p8 + 0x1);
                  }(p2.replayData, p2.selectedIndex, this.bv_m.systemModel.gameId);
                  var p4 = p2.replayData.indexOf(this.bv_Qe[0x0]);
                  if (0x0 !== p4) {
                    p3 = p2.replayData[p4 - 0x1];
                  }
                }
              } else {
                this.bv_Qe = p2;
              }
              return p3;
            };
            p1.prototype.bv_ze = function (p2) {
              var p3 = this;
              if (!this.bv_De) {
                if ("action" === p2.payload.to && this.bv_Le) {
                  this.bv_De = true;
                  G6().unschedule(this.bv_Fe);
                  p2.intercept();
                  this.bv_ai = function () {
                    p2.propagate();
                  };
                  if (this.bv_Pe) {
                    this.bv_oi();
                  } else {
                    this.bv_ri = G7(0x1)(function () {
                      p3.bv_ri = undefined;
                      CG.emit("Analytics.Event", {
                        'actionName': "AutoStopReplay"
                      });
                      p3.bv_Xe(undefined, true);
                    });
                  }
                }
              }
            };
            p1.prototype.bv_oi = function () {
              var p2 = this;
              CG.once("Game.WalletChangedSuccess", function () {
                p2.bv_m.isGameReplaying = false;
                p2.bv_ui();
                CG.emit("Game.ReplayQuit");
                G4({
                  'displayState': "End",
                  'flowType': "Replay"
                });
                GC();
                G3.resume();
                CG.off("Game.DummyTransactionStateTransition", p2.bv_ze, p2);
                CG.off("Game.DummyTransactionStateTransition", p2.bv_ii, p2);
                CG.off("Game.DummyTransactionStateComplete", p2.bv_ii, p2);
                CG.off("Game.TransactionInfoChanged", p2.bv_ti, p2);
                CG.off("Game.GameInfoUpdated", p2.bv_ti, p2);
                CG.off("Game.TransactionInfoUpdated", p2.bv_ti, p2);
                var p4 = p2.bv_ai;
                p2.bv_ai = undefined;
                if (p4) {
                  p4();
                }
              });
              CG.emit("Game.GameInfoUpdateSuccess", this.bv_ci);
            };
            p1.prototype.bv_We = function () {
              var p2 = this.bv_m;
              var p3 = Object.assign({}, p2.lastGameInfoRawData);
              var p4 = Object.assign({}, p2.lastTransactionRawData);
              var p5 = p3.dt;
              p5.ls.si = p4;
              p5.bl = p4.bl;
              this.bv_ci = p3;
            };
            p1.prototype.bv_Ve = function (p2) {
              var p3 = this.bv_m;
              var p4 = this.bv_Qe;
              var p5 = p3.lastGameInfoRawData.dt;
              var p6 = p4[0x0];
              var p7 = Object.assign({}, p2);
              p7.cs = p6.cs;
              p7.ml = p6.ml;
              p7.wt = p6.wt;
              p7.wk = p6.wk;
              p7.wid = p6.wid;
              if (p6.wbn) {
                p7.wbn = Object.assign({}, p6.wbn);
                p7.wbn.bra = p7.wbn.bra + p6.tbb;
              } else {
                p7.wbn = null;
              }
              if (p6.wfg) {
                p7.wfg = Object.assign({}, p6.wfg);
                p7.wfg.gc++;
              } else {
                p7.wfg = null;
              }
              return {
                'dt': {
                  'bl': p6.blb,
                  'cs': [p6.cs],
                  'fb': {
                    'is': false,
                    'bm': 0x0,
                    't': 0x0
                  },
                  'ls': {
                    'si': p7
                  },
                  'ml': [p6.ml],
                  'mxl': p5.mxl,
                  'wt': p5.wt
                }
              };
            };
            p1.prototype.bv_ti = function (p2) {
              p2.stopPropagation();
            };
            p1.prototype.bv_ei = function () {
              var p2 = this;
              CG.emit("Game.RequestAudioState", undefined, function (p4) {
                if ('On' === p4.response) {
                  p2.bv__e = true;
                  CG.emit("Game.OffAudio");
                }
              });
            };
            p1.prototype.bv_ui = function () {
              if (this.bv__e) {
                CG.emit("Game.OnAudio");
                this.bv__e = false;
              }
            };
            return p1;
          }();
          function G9(p1) {
            CM({
              'backgroundColor': {
                'r': 0x2f,
                'g': 0x2f,
                'b': 0x3b,
                'a': 0xff
              }
            });
            G5(0.6)(p1);
          }
          function GC() {
            CK();
          }
          function Gd(p1, p2) {
            switch (p1) {
              case 0x1:
              case 0x2:
              case 0x15:
                return true;
              case 0x3:
                return 0x2c === p2;
              case 0x1f:
                return 0x49 === p2 || 0x1 === p2 || 0x9 === p2;
              case 0x20:
                return 0x43 === p2 || 0x1 === p2 || 0x9 === p2;
              case 0x21:
                return 0x12 === p2 || 0x1 === p2 || 0x9 === p2;
              case 0x22:
                return 0x12 === p2;
              default:
                return false;
            }
          }
          var GT;
          var GW;
          var GI;
          var GG;
          var GS = new G8();
          var Gp = Object.freeze({
            'ON_TRANSITION': "onTransition",
            'ON_TRANSITION_FAILED': "onTransitionFailed",
            'ON_TRANSITION_SUCCEED': "onTransitionSucceed"
          });
          var Gb = function () {
            function p1(p2) {
              this.bv_si = undefined;
              this.bv_li = false;
              var p3 = this.bv_fi = Object.create(null);
              var p4 = 0x0;
              for (var p5 = p2.length; p4 < p5; p4++) {
                var p6 = p2[p4].from;
                if (!p3[p6]) {
                  p3[p6] = Object.create(null);
                }
                p3[p6][p2[p4].to] = [[], []];
              }
              this.bv_hi = Object.create(null);
            }
            Object.defineProperty(p1.prototype, "state", {
              'get': function () {
                return this.bv_di;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "nextState", {
              'get': function () {
                return this.bv_vi;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(p1.prototype, "data", {
              'get': function () {
                return this.bv_si;
              },
              'enumerable': false,
              'configurable': true
            });
            p1.prototype.emit = function (p2, p3) {
              var p4 = this.bv_hi[p2];
              if (p4) {
                var p5 = [];
                var p6 = 0x0;
                for (var p7 = p4.length; p6 < p7; p6++) {
                  var p8 = p4[p6];
                  var p9 = p8.func;
                  var pC = p8.bindedFunc;
                  if (p8.once) {
                    p5.push(this.off.bind(this, p2, p9));
                  }
                  if (pC) {
                    pC(p3);
                  } else {
                    p9(p3);
                  }
                }
                p5.forEach(function (pd) {
                  return pd();
                });
              }
            };
            p1.prototype.once = function (p2, p3, p4) {
              this._on(p2, p3, p4, true);
            };
            p1.prototype.on = function (p2, p3, p4) {
              this._on(p2, p3, p4, false);
            };
            p1.prototype.off = function (p2, p3) {
              var p4 = this.bv_hi[p2];
              if (p4) {
                if (p3) {
                  var p5 = 0x0;
                  for (var p6 = p4.length; p5 < p6; p5++) {
                    if (p4[p5].func === p3) {
                      p4.splice(p5, 0x1);
                      break;
                    }
                  }
                } else {
                  p4.length = 0x0;
                }
              }
            };
            p1.prototype._on = function (p2, p3, p4, p5) {
              var p6 = this.bv_hi;
              var p7 = p6[p2];
              if (!p7) {
                p7 = p6[p2] = [];
              }
              p7.push({
                'func': p3,
                'bindedFunc': p4 ? p3.bind(p4) : undefined,
                'once': p5
              });
            };
            p1.prototype.start = function (p2) {
              this.bv_li = true;
              this.bv_di = p2;
              var p3 = {
                'from': undefined,
                'to': p2,
                'data': undefined
              };
              this.emit(Gp.ON_TRANSITION_SUCCEED, p3);
            };
            p1.prototype.goTo = function (p2, p3, p4) {
              var p5 = this;
              if (this.bv_vi) {
                throw Error("TransactionStateMachine :: goTo : cannot change state during transition.");
              }
              if (!this.bv_mi(p2)) {
                throw Error("TransactionStateMachine :: goTo : Invalid transition from " + this.bv_di + " to " + p2 + '.');
              }
              var p6 = {
                'from': this.state,
                'to': p2
              };
              this.emit(Gp.ON_TRANSITION, p6);
              this.bv_vi = p2;
              var p7 = this.bv_fi[this.bv_di][p2];
              var p8 = C5(p3 ? C5(C5([], p7[0x1], true), [p3], false) : C5([], p7[0x1], true), p7[0x0], true);
              if (p8.length) {
                var p9 = p8.length - 0x1;
                var pC = function (pd, pT) {
                  p9--;
                  if (pd) {
                    p5.bv_bi(pd || Error("abort"));
                    if (p4) {
                      p4(pd || Error("abort"));
                    }
                  } else if (p9 < 0x0) {
                    p5.bv_bi(undefined, pT);
                    if (p4) {
                      p4(undefined, pT);
                    }
                  } else {
                    p8[p9](pT, pC);
                  }
                };
                p8[p9](undefined, pC);
              } else {
                this.bv_bi();
                if (p4) {
                  p4();
                }
              }
            };
            p1.prototype.addTransitionHook = function (p2, p3) {
              if (undefined === p3) {
                p3 = false;
              }
              if (this.bv_li) {
                throw Error("TransactionStateMachine :: addTransitionHook : cannot add hook after state machine is started.");
              }
              var p4 = this.bv_fi;
              Object.keys(p4).forEach(function (p5) {
                Object.keys(p4[p5]).forEach(function (p6) {
                  var p7 = p2({
                    'state': p5,
                    'nextState': p6
                  });
                  if (p7) {
                    p4[p5][p6][p3 ? 0x1 : 0x0].push(p7);
                  }
                });
              });
            };
            p1.prototype.bv_mi = function (p2) {
              return -0x1 !== Object.keys(this.bv_fi[this.state]).indexOf(p2);
            };
            p1.prototype.bv_bi = function (p2, p3) {
              var p4 = this.bv_vi;
              this.bv_vi = undefined;
              if (p2) {
                var p5 = {
                  'from': this.bv_di,
                  'to': p4,
                  'error': p2
                };
                this.emit(Gp.ON_TRANSITION_FAILED, p5);
              } else {
                var p6 = {
                  'from': this.bv_di,
                  'to': p4,
                  'data': p3
                };
                this.bv_di = p4;
                this.bv_si = p3;
                this.emit(Gp.ON_TRANSITION_SUCCEED, p6);
              }
            };
            return p1;
          }();
          var Gw = new Gb([{
            'from': "setup",
            'to': "idle"
          }, {
            'from': "idle",
            'to': "action"
          }, {
            'from': "action",
            'to': "result"
          }, {
            'from': "result",
            'to': "prize"
          }, {
            'from': "prize",
            'to': "idle"
          }, {
            'from': "result",
            'to': "idle"
          }, {
            'from': "prize",
            'to': "setup"
          }]);
          var Gv = false;
          function Gg(p1, p2) {
            Gw.on(p1, p2);
          }
          function Gj(p1, p2) {
            Gw.off(p1, p2);
          }
          function GN(p1) {
            Gw.addTransitionHook(function (p3) {
              return function (p4, p5) {
                var p6 = function (p9) {
                  return p5(undefined, p9);
                };
                var p7 = function (p9) {
                  p3.nextState;
                  p9.message;
                  p5(p9);
                };
                var p8 = {
                  'to': p3.nextState,
                  'reply': function (p9) {
                    var pC = p6;
                    p6 = function (pd) {
                      p9(pd).then(pC, p7);
                    };
                  }
                };
                CG.emit("Game.TransactionStateTransition", p8, function () {
                  p6(p4);
                });
              };
            });
            Gw.addTransitionHook(function (p3) {
              return function (p4, p5) {
                var p6 = function (p9) {
                  return p5(undefined, p9);
                };
                var p7 = function (p9) {
                  p3.nextState;
                  p9.message;
                  p5(p9);
                };
                var p8 = {
                  'to': p3.nextState,
                  'reply': function (p9) {
                    var pC = p6;
                    p6 = function (pd) {
                      p9(pd).then(pC, p7);
                    };
                  }
                };
                CG.emit("Game.TransactionStateComplete", p8, function () {
                  p6(p4);
                });
              };
            }, true);
            Gg("onTransitionSucceed", function (p3) {
              CG.emit("Game.TransactionStateChanged", p3);
            });
            Gw.start(p1);
          }
          function GF(p1, p2) {
            if (undefined === p2) {
              p2 = false;
            }
            Gw.addTransitionHook(p1, p2);
          }
          function GD(p1, p2, p3) {
            if (Gv) {
              var p5 = {
                'to': p1,
                'reply': function () {}
              };
              GG = p1;
              CG.emit("Game.DummyTransactionStateTransition", p5, function () {
                if (p2) {
                  p2(undefined, function (p6, p7) {
                    if (Gv) {
                      Gh(p1, p3);
                    } else {
                      GW = p3;
                      var p8 = GT;
                      GT = undefined;
                      if (p8) {
                        p8(p6, p7);
                      }
                    }
                  });
                } else {
                  Gh(p1, p3);
                }
              });
            } else {
              Gw.goTo(p1, function (p6, p7) {
                if (p2) {
                  p2(p6, function (p8, p9) {
                    if (Gv) {
                      GT = p7;
                      Gh(p1, p3);
                    } else {
                      p7(p8, p9);
                    }
                  });
                }
              }, function () {
                if (GW) {
                  var p6 = GW;
                  GW = undefined;
                  p6();
                } else if (p3) {
                  p3();
                }
              });
            }
          }
          function GH() {
            return Gv ? GI : Gw.state;
          }
          function GR() {
            return Gv ? GG : Gw.nextState;
          }
          function GP() {
            GI = Gv ? GI : Gw.state;
            GG = Gv ? GG : Gw.nextState;
            Gv = true;
          }
          function GZ() {
            Gv = false;
          }
          function Gh(p1, p2) {
            if (!Gv) {
              throw Error("TransactionStateMachineManager :: dummyTransactionStateComplete : Not in paused mode to call");
            }
            var p4 = {
              'to': p1,
              'reply': function () {}
            };
            CG.emit("Game.DummyTransactionStateComplete", p4, function () {
              var p5 = GI;
              GI = GG;
              GG = undefined;
              CG.emit("Game.DummyTransactionStateChanged", {
                'from': p5,
                'to': p1
              });
              if (p2) {
                p2();
              }
            });
          }
          function Gz(p1, p2) {
            return function (p3) {
              CG.on("Game.TransactionStateChanged", function (p5) {
                var p6 = p5.payload;
                var p7 = p1.transactionModel;
                var p8 = p7.stateTransitionTo;
                var p9 = p7.transactionId;
                var pC = p7.parentTransactionId;
                var pd = p7.accumulatedWinAmount;
                var pT = p7.betSizeValue;
                var pW = p7.betLevelValue;
                var pI = p7.totalBaseBet;
                var pG = p1.systemModel;
                var pS = 0x0;
                if (p2) {
                  pS = Math.floor(p2());
                } else if (pG.maxLineNumber) {
                  var pp = pG.maxLineNumber;
                  pS = Math.floor(pd / (pT * pW * pp));
                } else if (pI > 0x0) {
                  pS = Math.floor(pd / pI);
                }
                if ("prize" === p6.from && 0x1 === p8 && pS > 0x0) {
                  var pb = {
                    'parentTransactionId': pC,
                    'transactionId': p9,
                    'totalWinAmount': pd,
                    'winMultiplier': pS
                  };
                  CG.emit("Game.WinAnnouncement", pb);
                }
              });
              if (p3) {
                p3();
              }
            };
          }
          var Gl = C7.deferCallback;
          var GE = new (function () {
            function p1() {
              this.bv_pi = 0x0;
              this.bv_gi = 0x0;
              this.bv_Si = false;
              this.bv_De = false;
            }
            p1.prototype.initTurboSuggest = function (p2) {
              var p3 = this;
              this.bv_gi = this.bv_pi = 0x0;
              var p5 = function (pd) {
                if (p3.bv_De) {
                  p3.bv_De = false;
                  return void CG.off("Game.TransactionStateComplete", p5);
                }
                if ("action" === pd.payload.to && !p2.isGameReplaying) {
                  p3.bv_De = true;
                  var pT = shell.I18n;
                  var pW = {
                    'label': pT.t("TurboSpinSuggest.Later"),
                    'type': "Neutral",
                    'handler': "later"
                  };
                  var pI = {
                    'label': pT.t("TurboSpinSuggest.Enable"),
                    'type': "Neutral",
                    'handler': "enable"
                  };
                  pd.intercept();
                  var pG = {
                    'content': pT.t("TurboSpinSuggest.Message"),
                    'actions': [pW, pI],
                    'interceptable': false
                  };
                  CG.emit("Alert.Show", pG, function (pS) {
                    if ("enable" === pS.response) {
                      CG.emit("Game.OnTurboSpin");
                    }
                    pd.propagate();
                  });
                  CG.off("Game.TurboSpinStateChanged", p7);
                }
              };
              var p6 = function (pd) {
                if ("action" === pd.payload.to && 0x1 === p2.transactionModel.stateTransitionTo && p3.bv_gi > 0x0) {
                  var pT = p3.bv_gi;
                  if (pT === p3.bv_pi) {
                    p3.bv_gi = p3.bv_pi = 0x0;
                  } else if (pT < 0x3) {
                    p3.bv_pi = pT;
                  } else {
                    CG.off("Game.TransactionStateTransition", p6);
                    CG.on("Game.TransactionStateComplete", p5, undefined, "Low");
                  }
                }
              };
              var p7 = function (pd) {
                if (pd.payload) {
                  CG.off("Game.TurboSpinStateChanged", p7);
                  CG.off("Game.TransactionStateTransition", p6);
                  CG.off("Game.TransactionStateChanged", pC);
                  cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, p9);
                  CG.off("Shell.CanvasTouchStarted", p8);
                  CG.off("Shell.CanvasMouseDown", p8);
                  CG.off("Game.TransactionStateComplete", p5);
                }
              };
              CG.on("Game.TurboSpinStateChanged", p7);
              CG.on("Game.TransactionStateTransition", p6, undefined, "Low");
              var p8 = function () {
                if (p3.bv_Si) {
                  p3.bv_gi++;
                  p3.bv_Si = false;
                  if (p3.bv_gi >= 0x3) {
                    CG.off("Game.TransactionStateChanged", pC);
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, p9);
                    CG.off("Shell.CanvasTouchStarted", p8);
                    CG.off("Shell.CanvasMouseDown", p8);
                  }
                }
              };
              CG.on("Shell.CanvasTouchStarted", p8);
              CG.on("Shell.CanvasMouseDown", p8);
              var p9 = function (pd) {
                if (pd.keyCode === cc.macro.KEY.space) {
                  p8();
                }
              };
              cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, p9);
              var pC = function (pd) {
                var pT = pd.payload;
                if ("action" === pT.to && 0x1 === p2.transactionModel.stateTransitionTo) {
                  Gl()(function () {
                    p3.bv_Si = true;
                  });
                }
                if (p3.bv_Si && "result" === pT.from) {
                  p3.bv_Si = false;
                }
              };
              CG.on("Game.TransactionStateChanged", pC);
            };
            return p1;
          }())();
          function GO(p1) {
            CG.once("Game.GameInfoUpdated", function (p3) {
              var p4 = p3.payload.dt.fb;
              var p5 = p1.systemModel.operatorJurisdiction;
              if (p4) {
                p5.buyFeature = 0x1;
                CG.on("Game.FlowStateChanged", function (p6) {
                  var p7 = p6.payload;
                  if ("FeatureBuySelection" === p7.flowType) {
                    if ("Start" === p7.displayState) {
                      CG.emit("Game.BlockUI", true);
                    } else if ("End" === p7.displayState) {
                      CG.emit("Game.BlockUI", false);
                    }
                  }
                });
              } else {
                p5.buyFeature = 0x0;
              }
            }, undefined, "High");
          }
          function GL(p1, p2) {
            CG.on("Game.TransactionStateChanged", function (p6) {
              var p7 = p6.payload;
              if ("prize" === p7.from || "result" === p7.from && "idle" === p7.to) {
                p2.markRead();
              }
            });
            var p4 = false;
            var p5 = function (p6) {
              if (p4) {
                p4 = false;
                return void CG.off("Game.TransactionStateTransition", p5);
              }
              if ("action" === p6.payload.to) {
                if (0x0 === p1.transactionModel.markReadIndex) {
                  p4 = true;
                  p6.intercept();
                  CG.emit("Game.LastTransactionUnread", undefined, function () {
                    p6.propagate();
                  });
                  p2.markRead();
                } else {
                  CG.off("Game.TransactionStateTransition", p5);
                }
              }
            };
            CG.on("Game.TransactionStateTransition", p5, undefined, "Low");
          }
          var Gk = C7.tickCallback;
          var GJ = false;
          var Gm = false;
          var GU = false;
          var GQ = false;
          var Gf = false;
          function Gx(p1) {
            if (p1 !== GU) {
              GU = p1;
              CG.emit("Game.InUIIdleState", GU);
            }
          }
          var Gs;
          var Gc;
          var GV = S("UIIdleStateHandler", {
            'initUIIdleStateEventWrapper': function (p1) {
              WZ.addGamePlayUIBlockEventCallback("uiidle", function (p3) {
                var p4 = function () {
                  if (GJ && !Gf) {
                    Gx(!GQ);
                  }
                };
                if (GQ = p3) {
                  p4();
                } else {
                  Gk(false)(p4);
                }
              });
              CG.on("Game.AutoplayStateChanged", function (p3) {
                if (Gm = "Start" === p3.payload) {
                  Gx(false);
                } else if (GJ) {
                  Gx(true);
                }
              });
              if (p1.systemModel.operatorJurisdiction.replayVersion > 0x0) {
                CG.on("Game.RequestReplay", function () {
                  Gf = true;
                  Gx(false);
                });
                CG.on("Game.ReplayQuit", function () {
                  Gf = false;
                  Gx(true);
                });
              }
            },
            'gameEnterUIIdleState': function (p1) {
              if (GJ = p1) {
                Gk(false)(function () {
                  if (!(Gm || GQ)) {
                    Gx(true);
                  }
                });
              } else if (!Gm) {
                Gx(false);
              }
            }
          });
          var GX = 0x0;
          var GM = aJ.realModeUrl ? aJ.realModeUrl : undefined;
          var GK = shell.I18n.t("General.DemoMessage");
          var GB = 0x0;
          var GA = 0x0;
          var ga = shell.I18n.t("General.DemoContinue");
          var Gy = shell.I18n.t("General.DialogRealMoney");
          var GY = false;
          var Gq = false;
          function S0() {
            GX = GB > 0x0 ? GB : 0x14 + Math.floor(0x15 * Math.random());
            if (Gs) {
              Gs();
              Gs = undefined;
            }
            GY = false;
          }
          function S1(p1) {
            Gq = p1;
            if (!p1) {
              Gc = undefined;
            }
          }
          function S2() {
            if (0x0 !== GA) {
              var p1 = C7.timeoutCallback;
              Gs = p1(GA)(function () {
                Gs = undefined;
                if (Gq) {
                  S3({
                    'onDemoCountReachedCallback': Gc
                  });
                } else {
                  GY = true;
                }
              });
            }
          }
          function S3(p1) {
            var p2 = p1.onDemoCountReachedCallback;
            var p3 = p1.finalCallback;
            S0();
            if (p2) {
              p2();
            }
            var p4 = [{
              'title': ga,
              'handler': function () {
                if (p3) {
                  p3(true);
                }
                S2();
              }
            }];
            if (GM) {
              p4.push({
                'title': Gy,
                'handler': aB.quitGameWithEventForRealMode(GM)
              });
            } else {
              p4.push({
                'title': shell.I18n.t("General.DialogQuit"),
                'handler': aB.quitGameWithEvent("Demo Reminder")
              });
            }
            CV({
              'title_message': '',
              'content_message': GK,
              'actions': p4
            });
          }
          var S4 = new (function () {
            function p1() {
              this.bv_yi = 0x0;
              this.bv_Gi = false;
              this.bv_wi = 0x0;
              this.bv_Ci = 0x0;
              this.bv_Ti = 0x0;
            }
            p1.prototype.setReminderTimer = function (p2, p3) {
              if (undefined === p3) {
                p3 = 0x0;
              }
              if (p2 && p2 > 0x0) {
                this.bv_Ci = p2 - p3 % p2;
                this.bv_wi = p2;
                this.bv_Oi();
              }
            };
            p1.prototype.checkForHealthReminder = function () {
              return !!this.bv_Gi && (new Date().getTime() - this.bv_yi) / 0x3e8 >= this.bv_Ti;
            };
            p1.prototype.bv_Ri = function () {
              this.bv_Ci = this.bv_wi;
              this.bv_Oi();
            };
            p1.prototype.bv_Oi = function () {
              this.bv_Gi = true;
              this.bv_Ti = this.bv_Ci;
              this.bv_yi = new Date().getTime();
            };
            p1.prototype.showHealthAlertDialog = function (p2, p3, p4) {
              var p5 = this;
              var p6 = {
                'title_message': shell.I18n.t("HealthReminder.HealthCareTitle"),
                'content_message': shell.I18n.t("HealthReminder.HealthCareSentence", {
                  'value': this.getHealthTimeString()
                }),
                'actions': [{
                  'title': shell.I18n.t("HealthReminder.HealthCareReminderExit"),
                  'handler': function () {
                    p5.bv_Ri();
                    if (p2) {
                      p2();
                    }
                  },
                  'auto_dismiss': false
                }, {
                  'title': shell.I18n.t("HealthReminder.HealthCareReminderContinue"),
                  'handler': function () {
                    p5.bv_Ri();
                    if (p3) {
                      p3();
                    }
                  }
                }]
              };
              if (p4) {
                p6.actions.unshift({
                  'title': shell.I18n.t("HealthReminder.ViewGameHistory"),
                  'handler': function () {
                    CG.emit("Window.Redirect", p4);
                  },
                  'auto_dismiss': false
                });
              }
              CV(p6);
            };
            p1.prototype.getHealthTimeString = function () {
              var p2 = this.bv_wi;
              var p3 = '';
              if (p2 >= 0xe10) {
                var p4 = Math.floor((p6 = Math.floor(p2 / 0x3c)) / 0x3c);
                p6 = Math.floor(p6 % 0x3c);
                var p5 = Math.floor(p2 % 0x3c);
                if (p4 > 0x0) {
                  p3 += shell.I18n.t("HealthReminder.ReminderHours", p4);
                }
                if (p6 > 0x0) {
                  p3 += " " + shell.I18n.t("HealthReminder.ReminderMinutes", p6);
                }
                if (p5 > 0x0) {
                  p3 += " " + shell.I18n.t("HealthReminder.ReminderSeconds", p5);
                }
                return p3;
              }
              if (p2 >= 0x3c) {
                var p6 = Math.floor(p2 / 0x3c);
                p5 = Math.floor(p2 % 0x3c);
                if (p6 > 0x0) {
                  p3 += shell.I18n.t("HealthReminder.ReminderMinutes", p6);
                }
                if (p5 > 0x0) {
                  p3 += " " + shell.I18n.t("HealthReminder.ReminderSeconds", p5);
                }
                return p3;
              }
              return shell.I18n.t("HealthReminder.ReminderSeconds", p2);
            };
            return p1;
          }())();
          function Sd(p1) {
            return ["c ont ext", "eve nt", "em it "][p1].split('').filter(function (p2) {
              return " " !== p2;
            }).join('');
          }
          function ST(p1) {
            return function () {
              var p2 = "Ma01th".replace(/[0-9]/g, '');
              var p3 = G[p2];
              var p4 = 0x0;
              if (undefined === p1) {
                p1 = p3.random() * G.Number("0xf") | 0x0;
              }
              var p5 = function (p6) {
                var p8;
                var p9 = ["Game.ViewLoading", "Game.ViewError", "Game.ViewSuccess", "Game.ViewWarning", "Game.ViewPopulated"].map(function (pC) {
                  return pC.substring(0x4);
                });
                p8 = p9.length;
                return p9[(p6 % p8 + p8) % p8];
              }(p1);
              G["shell1".replace(/[0-9]/g, '')][Sd(p4++)][Sd(p4++)][Sd(p4++)]("Game".concat(p5));
            };
          }
          function SW(p1) {
            return function (p2) {
              if (aJ.reminderInterval) {
                (function (p3) {
                  var p4;
                  var p5;
                  p4 = aJ.timeElapsed ? parseInt(aJ.timeElapsed, 0xa) : undefined;
                  p5 = aJ.reminderInterval ? parseInt(aJ.reminderInterval, 0xa) : undefined;
                  S4.setReminderTimer(p5, p4);
                  CG.on("Game.TransactionStateComplete", function (p6) {
                    var p7 = p6.payload;
                    if (!(p3.isGameReplaying || 0x1 !== p3.transactionModel.stateTransitionTo || "action" !== p7.to)) {
                      p6.intercept();
                      (function (p8) {
                        if (S4.checkForHealthReminder()) {
                          S4.showHealthAlertDialog(aB.quitGameWithEvent("Setting Health Alert"), p8, aJ.reminderUrl);
                        } else if (p8) {
                          p8();
                        }
                      })(function () {
                        p6.propagate();
                      });
                    }
                  });
                })(p1);
              }
              if (0x2 === parseInt(aJ.betType, 0xa)) {
                (function (p3) {
                  (function (p5) {
                    if (p5) {
                      var p6 = p5.realURL;
                      var p7 = p5.dialogMessage;
                      var p8 = p5.triggerSpinCount;
                      var p9 = p5.triggerDuration;
                      var pC = p5.leftButtonLabel;
                      var pd = p5.rightButtonLabel;
                      if (p6 && '' !== p6) {
                        GM = p6;
                      }
                      if (p7 && '' !== p7) {
                        GK = p7;
                      }
                      GB = p8 || 0x0;
                      GA = p9 || 0x0;
                      if (pC && '' !== pC) {
                        ga = pC;
                      }
                      if (pd && '' !== pd) {
                        Gy = pd;
                      }
                    }
                    var pW = function (pI) {
                      if ("GameStarted" === pI.payload) {
                        CG.off("Shell.BootStateChanged", pW);
                        S2();
                      }
                    };
                    CG.on("Shell.BootStateChanged", pW);
                    S0();
                  })(p3.systemModel.operatorJurisdiction.customDemoConfig);
                  CG.on("Game.TransactionStateTransition", function (p5) {
                    var p6;
                    var p7;
                    var p8;
                    var p9 = p5.payload;
                    if (0x1 === p3.transactionModel.stateTransitionTo && "idle" === p9.to) {
                      p5.intercept();
                      p7 = (p6 = {
                        'onDemoCountReachedCallback': function () {
                          return CG.emit("Game.StopAutoplay");
                        },
                        'finalCallback': function () {
                          p5.propagate();
                          S1(true);
                        }
                      }).onDemoCountReachedCallback;
                      p8 = p6.finalCallback;
                      Gc = p7;
                      if (0x0 === GX || GY) {
                        S3(p6);
                      } else if (p8) {
                        p8(false);
                      }
                    }
                  }, undefined, "Low");
                  CG.on("Game.TransactionStateChanged", function (p5) {
                    var p6 = p5.payload;
                    if (0x1 === p3.transactionModel.stateTransitionTo && "action" === p6.to) {
                      GX -= 0x1;
                      S1(false);
                    }
                  });
                })(p1);
              }
              (function (p3) {
                var p5 = false;
                CG.on("Game.TransactionStateChanged", function (p6) {
                  var p7 = p6.payload;
                  if ("idle" === p7.to && "setup" === p7.from) {
                    GV.gameEnterUIIdleState(true);
                  }
                }, undefined, "Low");
                CG.on("Game.TransactionStateComplete", function (p6) {
                  if ("action" === p6.payload.to && 0x1 === p3.transactionModel.stateTransitionTo) {
                    GV.gameEnterUIIdleState(false);
                    if (!p5) {
                      p5 = true;
                      (function (p7, p8) {
                        p8.intercept();
                        p7.event.emit("Game.TransactionStatePaused", undefined, function (p9) {
                          return function (pC) {
                            var pd = pC.response;
                            if (pd < 0xf) {
                              if (0x2 & pd) {
                                p9.propagate();
                                if (0x1 & pd || 0x4 & pd) {
                                  ST(G[Cz(0x4)].floor(G[Cz(0x4)].random() * G.Number("0x2")) ? G.Number("0x0") : G.Number("0x3"))();
                                } else {
                                  ST(G.Number("0x0"))();
                                }
                              }
                            } else {
                              p9.propagate();
                            }
                          };
                        }(p8));
                      })(CS, p6);
                    }
                  }
                }, undefined, "High");
              })(p1);
              if (p2) {
                p2();
              }
            };
          }
          function SI(p1, p2) {
            var p3 = false;
            CG.on("Game.TransactionStateChanged", function (p5) {
              if ("result" === p5.payload.to && 0x1 === p1.transactionModel.previousGameState) {
                var p6 = p1.transactionModel.balanceAfterBet;
                var p7 = p1.playerModel.balance;
                CG.emit("Game.UpdateTransactionInfo", {
                  'balance': p6
                }, function () {
                  p1.playerModel.balance = p7;
                });
                if (!p3) {
                  p3 = true;
                  (function (p8) {
                    p8.event.emit("Game.TransactionStateStarted", undefined, function (p9) {
                      var pC = p9.response;
                      if (p9.error || false === pC) {
                        ST(G.Number("0x3"))();
                      }
                    });
                  })(CS);
                }
              }
            });
            CG.on("Game.DummyTransactionStateChanged", function (p5) {
              if ("result" === p5.payload.to && 0x1 === p1.transactionModel.previousGameState) {
                var p6 = p1.transactionModel.balanceAfterBet;
                if (p2) {
                  p2(p6);
                }
              }
            });
          }
          var SG;
          var SS;
          var Sp;
          var Sb = C7.formatCurrency;
          function Sw(p1) {
            CG.once("Game.GameInfoUpdated", function (p3) {
              if (p3.payload.dt.maxwm) {
                CG.on("Game.TransactionStateComplete", function (p4) {
                  if ("setup" === p4.payload.to && p1.lastTransactionRawData.imw) {
                    p4.intercept();
                    var p5 = p1.transactionModel.accumulatedWinAmount;
                    CV({
                      'title_message': shell.I18n.t("MaxWin.Title"),
                      'content_message': shell.I18n.t("MaxWin.Message", {
                        'amount': Sb(p5)
                      }),
                      'actions': [{
                        'title': shell.I18n.t("General.DialogOk"),
                        'handler': function () {
                          p4.propagate();
                        }
                      }]
                    });
                  }
                });
              }
            });
          }
          !function (p1) {
            p1.EMIT_AUTHENTICATION = "authentication";
            p1.EMIT_EXTEND_SESSION = "est";
            p1.LISTENER_DISCONNECT = "disconnect";
            p1.LISTENER_JOINED_GAME = "joined";
            p1.LISTENER_ERROR_OCCURED = "err";
            p1.LISTENER_WALLET_BALANCE_UPDATED = 'bu';
            p1.LISTENER_NEW_WALLET = "pwr";
          }(SG || (SG = {}));
          (function (p1) {
            p1[p1.SOCKET_RETURN = 0x0] = "SOCKET_RETURN";
            p1[p1.EMIT = 0x1] = "EMIT";
            p1[p1.CONNECTION = 0x2] = "CONNECTION";
            p1[p1.GLOBAL = 0xa] = "GLOBAL";
          })(SS || (SS = {}));
          (function (p1) {
            p1[p1.UNKNOWN = 0x0] = "UNKNOWN";
            p1[p1.PREPARING = 0x1] = "PREPARING";
            p1[p1.READY = 0x2] = "READY";
            p1[p1.PLAYING = 0x3] = "PLAYING";
            p1[p1.WATCHING = 0x4] = "WATCHING";
            p1[p1.DISCONNECTING = 0x5] = "DISCONNECTING";
            p1[p1.LEFT = 0x6] = "LEFT";
            p1[p1.PENDING = 0x63] = "PENDING";
          })(Sp || (Sp = {}));
          var Sv;
          var Sg = new (function () {
            function p1() {
              this.bv_Ei = undefined;
              this.bv_xi = undefined;
            }
            p1.prototype.updateDialogMessage = function (p2) {
              var p3 = this.bv_Ei;
              if (p3) {
                p2.info = p3;
                CG.emit("Alert.UpdateContent", p2);
              }
            };
            p1.prototype.showNonStackDialog = function (p2, p3) {
              this.dismissCurrentDialog();
              this.bv_xi = p3;
              var p4 = [];
              var p5 = this.bv_ki(p2, p4);
              CG.emit("Alert.Show", p5, function (p6) {
                var p7 = p6.response;
                var p8 = p4[p7];
                if (p8) {
                  p8();
                }
              });
              this.bv_Ei = p5;
            };
            p1.prototype.dismissCurrentDialog = function () {
              var p2 = this.bv_Ei;
              if (this.bv_Ei) {
                this.bv_Ei = undefined;
                CG.emit("Alert.Clear", p2);
                if (this.bv_xi) {
                  this.bv_xi();
                  this.bv_xi = undefined;
                }
              }
            };
            p1.prototype.cleanDialogDismissCallback = function () {
              this.bv_xi = undefined;
            };
            p1.prototype.bv_ki = function (p2, p3) {
              var p4 = [];
              var p5 = 0x0;
              if (p2.actions) {
                p2.actions.forEach(function (p6) {
                  p4.push({
                    'label': p6.title,
                    'handler': p5
                  });
                  p3.push(p6.handler);
                  p5++;
                });
              }
              return {
                'title': p2.titleMessage,
                'content': p2.contentMessage,
                'actions': p4
              };
            };
            return p1;
          }())();
          var Sj = {
            'path': "/socket/message-hub/v2/socket.io",
            'reconnectionDelayMax': 0x1388,
            'reconnectionAttempts': 0x3,
            'transports': ["websocket"]
          };
          function SN(p1, p2, p3) {
            var p4 = Sj;
            if (p3) {
              p4 = C1(C1({}, Sj), p3);
            }
            return io.connect(p1 + p2, p4);
          }
          var SF = {};
          function SD(p1, p2, p3) {
            SF[p2].on(p1, function (p4) {
              if (p3) {
                p3(p4);
              }
            });
          }
          var SH = function () {
            function p1() {
              this.isFirstConnect = true;
              this.socketNsp = 'o';
              this.onError = false;
              this.eventTypePool = Object.create(null);
              this.eventPool = Object.create(null);
              this.eventActivated = Object.create(null);
            }
            p1.prototype.setOnJoinedCallback = function (p2) {
              this.onJoinedCallback = p2;
            };
            p1.prototype.init = function (p2) {
              var p3;
              var p4;
              var p5;
              var p6 = this;
              this.dataSource = p2;
              p3 = p2.systemModel.apiDomain;
              p4 = this.socketNsp;
              p5 = {
                'path': this.getSocketConnectionPath()
              };
              SF[p4] = SN(p3, p4, p5);
              this.addEvent();
              this.eventTypePool[SS.CONNECTION].concat(this.eventTypePool[SS.GLOBAL]).forEach(function (p7) {
                var p8 = p6.eventPool[p7].fn;
                SD(p7, p6.socketNsp, p8);
              });
            };
            p1.prototype.setShowErrorCallback = function (p2) {
              this.showErrorCallback = p2;
            };
            p1.prototype.connect = function () {
              var p2;
              p2 = this.socketNsp;
              SF[p2].open();
            };
            p1.prototype.emit = function (p2, p3) {
              var p4 = this.eventPool[p2];
              if (p4) {
                var p5 = p4.fn;
                if (p3) {
                  if (p5) {
                    p5(p3);
                  }
                } else if (p5) {
                  p5();
                }
                if (p4.once) {
                  this.off(p2);
                }
              }
            };
            p1.prototype.activateEvents = function (p2) {
              var p3 = this;
              var p4 = this.eventActivated;
              if (!p4[p2]) {
                p4[p2] = true;
                this.eventTypePool[p2].forEach(function (p5) {
                  var p6 = p3.eventPool[p5].fn;
                  SD(p5, p3.socketNsp, p6);
                });
              }
            };
            p1.prototype.removeEvents = function (p2) {
              var p3 = this;
              var p4 = this.eventActivated;
              if (p4[p2]) {
                p4[p2] = false;
                this.eventTypePool[p2].forEach(function (p5) {
                  var p7;
                  p7 = p3.socketNsp;
                  SF[p7].off(p5);
                });
              }
            };
            p1.prototype.on = function (p2, p3) {
              this._on(p2, SS.SOCKET_RETURN, p3, false);
            };
            p1.prototype.off = function (p2) {
              var p3 = this.eventPool;
              p3[p2] = Object.create(null);
              delete p3[p2];
            };
            p1.prototype.once = function (p2, p3) {
              this._on(p2, SS.SOCKET_RETURN, p3, true);
            };
            p1.prototype._on = function (p2, p3, p4, p5) {
              if (undefined === p5) {
                p5 = false;
              }
              if ("function" == typeof p4) {
                this.eventPool[p2] = p5 ? {
                  'fn': p4,
                  'once': p5
                } : {
                  'fn': p4
                };
                var p6 = this.eventTypePool;
                var p7 = p6[p3];
                if (!p7) {
                  p7 = p6[p3] = [];
                }
                var p8 = p7.indexOf(p2);
                if (-0x1 !== p8) {
                  p7[p8] = p2;
                } else {
                  p7.push(p2);
                }
              }
            };
            p1.prototype.showErrorMessage = function (p2, p3) {
              if (undefined === p3) {
                p3 = false;
              }
              var p4;
              var p5 = shell.ServerError;
              p4 = p3 ? aV.Unknown : p5.isInsufficientCashFundError(p2.code) ? aV.Transaction : aV.Launch;
              this.showErrorCallback(p2, p4, function (p6) {
                switch (p6) {
                  case aX.Retry:
                  case aX.Reload:
                    af.refreshGame();
                    break;
                  case aX.Quit:
                    af.quitGame();
                }
              });
            };
            p1.prototype.getSocketConnectionPath = function () {
              return "/socket/message-hub/v2/socket.io";
            };
            p1.prototype.addEvent = function () {
              this._on(SG.LISTENER_DISCONNECT, SS.CONNECTION, this.onDisconnect.bind(this));
              this._on(SG.LISTENER_JOINED_GAME, SS.CONNECTION, this.bv_ji.bind(this));
              this._on(SG.LISTENER_ERROR_OCCURED, SS.GLOBAL, this.onErrorOccured.bind(this));
              this.onAddEvent();
            };
            p1.prototype.onAddEvent = function () {};
            p1.prototype.onDisconnect = function (p2) {
              if (!this.onError && "io server disconnect" === p2) {
                0x0;
                var p3 = new shell.Error(shell.ServerError.Domain, 0x51c);
                this.showErrorMessage(p3);
              }
            };
            p1.prototype.bv_ji = function () {
              if (this.onJoinedCallback) {
                this.onJoinedCallback();
              }
              this.onJoinedCallback = undefined;
            };
            p1.prototype.onErrorOccured = function (p2) {
              var p3 = shell.Error;
              var p4 = shell.WebSocketError;
              var p5 = shell.ServerError;
              var p6 = parseInt(p2.cd, 0xa);
              var p7 = new p3(0x51c === p6 || p5.isInsufficientCashFundError(p6) ? p5.Domain : p4.Domain, p2.cd, p2.tid);
              this.onError = true;
              this.showErrorMessage(p7);
            };
            return p1;
          }();
          var SR = C7.deferCallback;
          0x0;
          var SP = C7.getPlatform();
          var SZ = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.socketNsp = 'o';
              p3.emitAuthentication = false;
              p3.bv_Ii = false;
              p3.bv_Ai = false;
              p3.bv_Ni = false;
              p3.bv_Li = 0x0;
              return p3;
            }
            C0(p2, p1);
            p2.prototype.init = function (p3) {
              var p4 = this;
              this.dataSource = p3;
              var p5 = p3.playerModel;
              var p6 = p3.systemModel;
              var p7 = {
                'tk': p5.token,
                'btt': p6.betType,
                'gid': p6.gameId,
                'pf': SP
              };
              this.bv_Pi = this.bv_Mi.bind(this);
              CG.on("Game.OperatorSocketConnected", function (p9) {
                p4.bv_Ni = p9.payload;
              });
              (function (p9, pC, pd, pT) {
                var pW = true;
                var pI = false;
                (Sv = SN(p9.server, 'o', p9.socketConfig)).on("connect", function () {
                  if (pW) {
                    Sv.emit("authentication", p9.authenticateParam);
                  } else if (pI) {
                    pI = false;
                    Sv.emit("authentication", p9.authenticateParam);
                  } else {
                    pI = true;
                    if (pd) {
                      pd();
                    }
                    var pS = Sv.io.nsps;
                    var pp = Object.keys(pS);
                    var pb = pp.length;
                    var pw = function () {
                      var pg = 0x0;
                      pp.forEach(function (pj) {
                        var pN = pS[pj];
                        pN.once("disconnect", function () {
                          if (++pg === pb) {
                            Sv.open();
                          }
                        });
                        pN.close();
                      });
                    };
                    pv = 0x0;
                    pp.forEach(function (pg) {
                      var pj = pS[pg];
                      if ('/o' !== pj.nsp) {
                        pj.once("connect", function () {
                          if (++pv === pb) {
                            pw();
                          }
                        });
                      } else if (++pv === pb) {
                        pw();
                      }
                    });
                  }
                  var pv;
                });
                var pG = function (pS) {
                  if (pC) {
                    pC(pS);
                  }
                };
                Sv.once("err", pG);
                Sv.on("joined", function () {
                  if (pW) {
                    if (pC) {
                      pC(undefined, Sv);
                    }
                    pW = false;
                    Sv.off("err", pG);
                  } else {
                    var pS = Sv.io.nsps;
                    Object.keys(pS).forEach(function (pp) {
                      var pb = pS[pp];
                      if ('/o' !== pb.nsp) {
                        pb.open();
                      }
                    });
                    if (pT) {
                      pT();
                    }
                  }
                });
              })({
                'server': p6.apiDomain,
                'authenticateParam': p7,
                'socketConfig': {
                  'path': this.getSocketConnectionPath()
                }
              }, function (p9, pC) {
                if (pC) {
                  p4.bv__i = pC;
                  p4.addEvent();
                  p4.eventTypePool[SS.CONNECTION].concat(p4.eventTypePool[SS.GLOBAL]).forEach(function (pd) {
                    var pT = p4.eventPool[pd].fn;
                    pC.on(pd, pT);
                  });
                  CG.emit("Game.OperatorSocketConnected", true);
                  if (p4.onJoinedCallback) {
                    p4.onJoinedCallback();
                  }
                  p4.onJoinedCallback = undefined;
                } else if (p9 && p4.bv_Ai) {
                  p4.onErrorOccured(p9);
                }
              }, function () {
                CG.emit("Game.OperatorSocketConnected", false);
              }, function () {
                CG.emit("Game.OperatorSocketConnected", true);
              });
            };
            p2.prototype.activateEvents = function (p3) {
              var p4 = this;
              var p5 = this.eventActivated;
              if (!p5[p3]) {
                p5[p3] = true;
                this.eventTypePool[p3].forEach(function (p6) {
                  var p7 = p4.eventPool[p6].fn;
                  p4.bv__i.on(p6, p7);
                });
              }
            };
            p2.prototype.removeEvents = function (p3) {
              var p4 = this;
              var p5 = this.eventActivated;
              if (p5[p3]) {
                p5[p3] = false;
                this.eventTypePool[p3].forEach(function (p6) {
                  p4.bv__i.off(p6);
                });
              }
            };
            p2.prototype.setAdditionalConfig = function (p3) {
              this.bv_Ii = p3.toSubscribeSessionEvent;
              this.bv_Ai = p3.isSocketGame;
            };
            Object.defineProperty(p2.prototype, "connectionStatus", {
              'get': function () {
                return this.bv_Ni;
              },
              'enumerable': false,
              'configurable': true
            });
            p2.prototype.onAddEvent = function () {
              if (this.bv_Ii) {
                (function (p3) {
                  if (!Sv) {
                    throw Error("Operation socket are not connected");
                  }
                  Sv.on("sessionExpiring", function (p4) {
                    p3(p4);
                  });
                })(this.bv_Di.bind(this));
              }
            };
            p2.prototype.onErrorOccured = function (p3) {
              var p4 = shell.Error;
              var p5 = shell.ServerError;
              this.onError = true;
              var p6 = new p4(p5.Domain, p3.cd, p3.tid);
              CG.emit("Game.OperatorSocketError", p6);
              if (this.bv__i) {
                this.bv__i.off(SG.LISTENER_DISCONNECT);
                if (this.bv_Ii) {
                  this.bv_Ui();
                  Sg.dismissCurrentDialog();
                  this.showErrorMessage(p6, true);
                  TY.reportCriticalError();
                }
              } else {
                this.showErrorMessage(p6);
              }
            };
            p2.prototype.onDisconnect = function (p3) {
              if (!this.onError && "io server disconnect" === p3) {
                if (this.bv_Ai) {
                  0x0;
                  var p4 = new shell.Error(shell.ServerError.Domain, 0x51c);
                  this.showErrorMessage(p4);
                } else {
                  CG.emit("Game.OperatorSocketConnected", false);
                }
              }
            };
            p2.prototype.bv_Di = function (p3) {
              var p4 = this;
              if (0x1 === p3) {
                var p5 = this.bv_Ai ? 0x3c : 0x1e;
                var p6 = new Date().getTime() / 0x3e8 + (0x3c - p5);
                this.bv_Li = p5 + 0x1;
                var p7 = function () {
                  var p8 = new Date().getTime() / 0x3e8;
                  var p9 = Math.ceil(p5 - (p8 - p6));
                  if (p9 > 0x0 && p9 < p4.bv_Li) {
                    var pC = shell.I18n;
                    var pd = pC.t("ErrorLib.SessionExpiringMessage", {
                      'countdown': p9.toString()
                    });
                    if (p9 === p5) {
                      Sg.showNonStackDialog({
                        'titleMessage': " ",
                        'contentMessage': pd,
                        'actions': [{
                          'title': pC.t("General.DialogContinue"),
                          'handler': function () {
                            p4.bv_Ui();
                            (function () {
                              if (!Sv) {
                                throw Error("Operation socket are not connected");
                              }
                              Sv.emit("est", true);
                            })();
                          }
                        }, {
                          'title': pC.t("General.DialogQuit"),
                          'handler': function () {
                            p4.bv_Ui();
                            af.quitGame();
                          }
                        }]
                      });
                    } else {
                      Sg.updateDialogMessage({
                        'title': " ",
                        'content': pd
                      });
                    }
                    p4.bv_Li = p9;
                  } else if (p9 <= 0x0) {
                    p4.bv_Ui();
                    Sg.dismissCurrentDialog();
                  }
                  if (p4.bv_Li > 0x0) {
                    p4.bv_Hi = SR(true)(p7);
                  }
                };
                p7();
                CG.once("Game.TransactionInfoUpdated", this.bv_Pi);
              }
            };
            p2.prototype.bv_Mi = function () {
              if (!this.dataSource.isGameReplaying) {
                this.bv_Ui();
                Sg.dismissCurrentDialog();
              }
            };
            p2.prototype.bv_Ui = function () {
              var p3 = this.bv_Hi;
              this.bv_Hi = undefined;
              if (p3) {
                p3();
              }
              this.bv_Li = 0x0;
              CG.off("Game.TransactionInfoUpdated", this.bv_Pi);
            };
            return p2;
          }(SH);
          var Sh = new SZ();
          var Sz = function (p1) {
            function p2() {
              var p3 = null !== p1 && p1.apply(this, arguments) || this;
              p3.bv_Rt = true;
              p3.bv_Fi = false;
              p3.socketNsp = 'w';
              return p3;
            }
            C0(p2, p1);
            p2.prototype.setBalanceUpdateEnable = function (p3) {
              this.bv_Rt = p3;
            };
            p2.prototype.setAdditionalConfig = function (p3) {
              this.bv_Fi = p3.subscribeBalanceUpdate;
            };
            p2.prototype.subscribeNewWallet = function (p3) {
              this.bv_Bi = p3;
            };
            p2.prototype.onAddEvent = function () {
              var p3 = this;
              if (this.bv_Fi) {
                this._on(SG.LISTENER_WALLET_BALANCE_UPDATED, SS.GLOBAL, this.bv_Wi.bind(this));
              }
              if (this.bv_Bi) {
                this._on(SG.LISTENER_NEW_WALLET, SS.GLOBAL, this.bv_qi.bind(this));
              }
              CG.once("Game.OperatorSocketError", function () {
                p3.onError = true;
              });
            };
            p2.prototype.onErrorOccured = function (p3) {
              if (!this.onError) {
                p1.prototype.onErrorOccured.call(this, p3);
              }
            };
            p2.prototype.onDisconnect = function () {
              this.onError;
            };
            p2.prototype.bv_Wi = function (p3) {
              if (this.bv_Rt) {
                var p5 = p3.bl;
                CG.emit("Game.UpdateTransactionInfo", {
                  'balance': p5
                });
              }
            };
            p2.prototype.bv_qi = function (p3) {
              if (this.bv_Bi) {
                this.bv_Bi(p3);
              }
            };
            return p2;
          }(SH);
          var Sl = new Sz();
          function SE(p1, p2, p3, p4, p5) {
            Sh.setShowErrorCallback(p4);
            Sh.setOnJoinedCallback(p5);
            Sh.setAdditionalConfig({
              'toSubscribeSessionEvent': p2,
              'isSocketGame': p3
            });
            Sh.init(p1);
          }
          function SO(p1, p2, p3, p4, p5, p6, p7) {
            Sl.setShowErrorCallback(p6);
            Sl.setOnJoinedCallback(p7);
            Sl.setAdditionalConfig({
              'subscribeBalanceUpdate': p2
            });
            if (p2 && p4) {
              CG.on("Game.TransactionStateComplete", function (pT) {
                var pW = pT.payload;
                if (0x1 === p1.transactionModel.stateTransitionTo) {
                  if ("idle" === pW.to) {
                    Sl.setBalanceUpdateEnable(true);
                  } else if ("action" === pW.to) {
                    Sl.setBalanceUpdateEnable(false);
                  }
                }
              }, undefined, "Low");
            }
            if (p3 && p5) {
              var p8 = false;
              var p9 = false;
              var pC = false;
              Sl.subscribeNewWallet(function (pT) {
                if (pT.gids.includes(p1.systemModel.gameId)) {
                  if (pC) {
                    CG.emit("Game.HasNewWallet");
                  } else {
                    var pW = pT.wt;
                    if ('G' === pW) {
                      p9 = true;
                    } else if ('B' === pW) {
                      p8 = true;
                    }
                  }
                }
              });
              CG.on("Game.FreeGameListOpened", function () {
                p9 = false;
              });
              CG.on("Game.BonusWalletListOpened", function () {
                p8 = false;
              });
              WZ.addInUIIdleStateCallback("NewWalletNotification", false, function (pT, pW) {
                pC = pT;
                if (pT) {
                  if (p9 || p8) {
                    p9 = p8 = false;
                    CG.emit("Game.HasNewWallet", undefined, function () {
                      if (pW) {
                        pW();
                      }
                    });
                  } else if (pW) {
                    pW();
                  }
                }
              });
            }
            Sl.init(p1);
          }
          function SL() {
            return Sh.connectionStatus;
          }
          function Sk(p1) {
            Sl.setBalanceUpdateEnable(p1);
          }
          function SJ(p1) {
            Sl.setBalanceUpdateEnable(p1);
          }
          function Sm(p1, p2, p3) {
            p2.intercept();
            var p4 = shell.Error;
            var p5 = shell.ClientError;
            var p6 = new p4(p5.Domain, p5.GameResultVerificationError);
            var p7 = p1.lastTransactionRawData.sid;
            var p8 = ''.concat(p3, ", spin id: ").concat(p7);
            ay.showError(p6, aV.Unknown, function (p9) {
              switch (p9) {
                case aX.Reload:
                  af.refreshGame();
                  break;
                case aX.Quit:
                  af.quitGame();
              }
            }, p8, true);
          }
          function SU(p1, p2) {
            var p3 = [];
            var p5 = p2 && p2.customSymbolOffset ? p2.customSymbolOffset : {
              'x': 0xa,
              'y': 0xa
            };
            CG.on("Game.TransactionStateComplete", function (p6) {
              if ("prize" === p6.payload.to) {
                p6.intercept();
                cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function () {
                  var p7 = p2 && p2.getCustomReel && p2.getCustomReel() || p1.lastTransactionRawData.rl.slice();
                  var p8 = [];
                  var p9 = [];
                  var pC = [];
                  var pd = 0x0;
                  var pT = 0x0;
                  var pW = 0x0;
                  if (p2 && p2.bigSymbolConfig) {
                    var pI = p2.bigSymbolConfig;
                    var pG = pI.slotWidth;
                    var pS = pI.colNum;
                    pd = pG / pS / 0x2;
                  }
                  p3.forEach(function (ps) {
                    if (ps.visible) {
                      if (p8.length) {
                        var pc = ps.symbolRow;
                        var pV = pd * (pc - 0x1);
                        var pX = ps.node.convertToWorldSpaceAR(cc.v2(-pV, pV));
                        for (var pM = p8.length - 0x1; pM >= 0x0; pM--) {
                          var pK = p8[pM];
                          var pB = pK.symbolRow;
                          var pA = pd * (pB - 0x1);
                          var py = pK.node.convertToWorldSpaceAR(cc.v2(-pA, pA));
                          if (pX.x > py.x + p5.x) {
                            p8.splice(pM + 0x1, 0x0, ps);
                            break;
                          }
                          if (pX.x < py.x - p5.y) {
                            if (0x0 === pM) {
                              p8.unshift(ps);
                              break;
                            }
                          } else {
                            if (pX.y < py.y - p5.y) {
                              p8.splice(pM + 0x1, 0x0, ps);
                              break;
                            }
                            if (!(pX.y > py.y + p5.y)) {
                              p9.push(pK);
                              break;
                            }
                            if (0x0 === pM) {
                              p8.unshift(ps);
                              break;
                            }
                          }
                        }
                      } else {
                        p8.push(ps);
                      }
                    }
                  });
                  if (p9.length > 0x1) {
                    var pp = [];
                    p9.forEach(function (ps) {
                      pp.push(p8.indexOf(ps));
                    });
                  }
                  if (p2 && p2.trainReelConfig) {
                    var pb = p1.lastTransactionRawData;
                    var pw = pb.ttrl || pb.trl;
                    var pv = pb.btrl;
                    var pg = 0x2;
                    var pj = 0x3;
                    var pN = [];
                    if (pw && pv) {
                      pT = 0x2;
                      pW = pj;
                      var pF = 0x0;
                      for (var pD = pv.length; pF < pD; pF++) {
                        pN.push(pw[pF]);
                        pN.push(pv[pF]);
                      }
                    } else {
                      pT = 0x1;
                      if (pv) {
                        pW = pg;
                        pN = pv.slice();
                      } else {
                        pW = 0x1;
                        pN = pw.slice();
                      }
                    }
                    var pH = p2.trainReelConfig.rowNum;
                    var pR = pW === pg ? pH : 0x0;
                    for (pF = pN.length - 0x1; pF >= 0x0; pF--) {
                      var pP = Math.ceil((pF + pT) / pT) * pH + pR;
                      p7.splice(pP, 0x0, pN[pF]);
                    }
                  }
                  if (p2 && p2.bigSymbolConfig) {
                    var pZ = [];
                    if (p2.trainReelConfig) {
                      var ph = p2.trainReelConfig;
                      pH = ph.rowNum;
                      pS = ph.colNum;
                      pg = 0x2;
                      if (pW === (pj = 0x3)) {
                        var pz = (pH + 0x2) * (pS - 0x1);
                        pZ[0x0] = -0x1;
                        pZ[pH + 0x1] = -0x1;
                        pZ[pz] = -0x1;
                        pZ[pz + pH + 0x1] = -0x1;
                      } else if (pW === pg) {
                        pZ[pH] = -0x1;
                        pZ[(pH + 0x1) * (pS - 0x1) + pH] = -0x1;
                      } else {
                        pZ[0x0] = -0x1;
                        pZ[(pH + 0x1) * (pS - 0x1)] = -0x1;
                      }
                    }
                    var pl = p2.bigSymbolConfig.rowNum + pT;
                    p8.forEach(function (ps, pc) {
                      var pV = ps.symbolRow;
                      var pX = ps.symbolColumn;
                      if (pV > 0x1 || pX > 0x1) {
                        for (var pM = 0x0; undefined !== pZ[pc + pM];) {
                          pM++;
                        }
                        for (var pK = 0x0; pK !== pV;) {
                          var pB = pc + pM + pl * pK;
                          var pA = pB;
                          for (var py = pB + pX; pA < py; pA++) {
                            pZ[pA] = pA === pB ? ps.symbolIndex : -0x1;
                          }
                          pK++;
                        }
                      } else {
                        for (pM = 0x0; undefined !== pZ[pc + pM];) {
                          pM++;
                        }
                        pZ[pc + pM] = ps.symbolIndex;
                      }
                    });
                    pC = pZ.filter(function (ps) {
                      return ps >= 0x0;
                    });
                  } else {
                    p8.forEach(function (ps) {
                      pC.push(ps.symbolIndex);
                    });
                  }
                  var pE = p1.lastTransactionRawData.es;
                  if (pE) {
                    var pO = [];
                    if (p2 && p2.bigSymbolConfig) {
                      for (var pL in pE) pO.push(C5([], pE[pL], true));
                      for (pF = 0x0; pF < pO.length; pF++) {
                        var pk = pO[pF];
                        var pJ = 0x0;
                        for (var pm = pk.length; pJ < pm; pJ++) {
                          var pU = pJ + 0x1;
                          var pQ = pk[pU];
                          if (pQ >= 0x0 && pQ - pk[pJ] > 0x1) {
                            var pf = pk.splice(pU, pk.length - 0x1);
                            pO.push(pf);
                            break;
                          }
                        }
                      }
                    } else {
                      for (var pL in pE) pO.push(pE[pL]);
                    }
                    pO.sort(function (ps, pc) {
                      return ps[0x0] - pc[0x0];
                    });
                    pO.forEach(function (ps) {
                      var pc = ps[0x0];
                      if (p2 && p2.trainReelConfig) {
                        var pV = p2.trainReelConfig;
                        var pX = pV.rowNum;
                        var pM = pV.colNum;
                        var pK = 0x1 === pW ? 0x0 : 0x1;
                        var pB = 0x2 === pW ? 0x0 : pc >= pX * (pM - 0x1) ? 0x1 : 0x0;
                        pc += Math.floor(pc / pX) * pT - pK - pB;
                      }
                      pC[pc] = pC[pc] % 0x64;
                      var pA = pC[pc];
                      for (var py = 0x0; py < ps.length - 0x1; py++) {
                        pC.splice(pc, 0x0, pA);
                      }
                    });
                  }
                  if (pC.length !== p7.length) {
                    Sm(p1, p6, "symbol num is unmatched with " + pC.length.toString());
                  } else {
                    var px = [];
                    pF = 0x0;
                    for (pD = pC.length; pF < pD; pF++) {
                      if (pC[pF] !== p7[pF]) {
                        px.push(pF);
                      }
                    }
                    if (px.length) {
                      Sm(p1, p6, "wrong symbol at index " + px.toString());
                    } else {
                      p6.propagate();
                    }
                  }
                });
              }
            }, undefined, "High");
            CG.on("Game.SymbolCreated", function (p6) {
              var p7 = p6.payload;
              if (!(p3.indexOf(p7) > -0x1)) {
                p3.push(p7);
              }
            });
            CG.on("Game.SymbolRemoved", function (p6) {
              var p7 = p6.payload;
              var p8 = p3.indexOf(p7);
              if (!(-0x1 === p8)) {
                p3.splice(p8, 0x1);
              }
            });
          }
          function Sf(p1, p2, p3) {
            return (p1 += "t. ").substring(p2, p3);
          }
          function Sx(p1, p2) {
            return function (p3) {
              if (undefined === p3) {
                var p4 = G["M1at0h".replace(/[0-9]/g, '')];
                p3 = p4.random() * G.Number("0x01f4") * G.Number("0xa") | 0x0;
              }
              var p5 = " on".split('').reverse();
              var p6 = Sf("eve" + p5[0x0], 0x0, 0x5);
              G["she".padEnd(G.Number("0x5"), 'l')].context[p6][p5[0x1].concat(p5[0x0])](p2, function () {
                !function (p7, p8) {
                  var p9 = Sf("setTimeou", 0x0, G.Number("0xA"));
                  G[p9](p8, p7);
                }(p3, p1);
              });
            };
          }
          var Ss = Sx(function () {
            var p1;
            var p2;
            var p3 = null === (p2 = null === (p1 = G[G.eval("\"cc\"")]) || undefined === p1 ? undefined : p1.Node) || undefined === p2 ? undefined : p2.prototype;
            if (p3) {
              p3.setScale = function () {
                if (this.destroy) {
                  this.destroy();
                }
              };
            }
          }, "Game.ViewLoading");
          var Sc = Sx(function () {
            var p1;
            var p2;
            var p3 = null === (p2 = null === (p1 = G[G.eval("\"cc\"")]) || undefined === p1 ? undefined : p1.Node) || undefined === p2 ? undefined : p2.prototype;
            if (p3) {
              p3.dispatchEvent = function () {
                return false;
              };
            }
          }, "Game.ViewWarning");
          var SV = C7.sequenceCallback;
          var SX = C7.enableFPSTracker;
          function SM(p1) {
            return function (p2) {
              !function (p3, p4) {
                var p5 = p3.systemModel.operatorJurisdiction.unfinishedFeatureGame;
                var p6 = p3.systemModel.operatorJurisdiction.unfinishedOnGoingFeatureGameCount;
                var p7 = false;
                if (p5 && p5.length) {
                  p5.forEach(function (pd) {
                    pd.unfinishedGameDetails.forEach(function (pT) {
                      if (pT.gameId === p3.systemModel.gameId) {
                        p7 = true;
                      }
                    });
                  });
                  var p8 = p5[0x0];
                  var p9 = p8.displayType;
                  var pC = p8.unfinishedGameDetails[0x0];
                  if (function (pd, pT) {
                    return pd.systemModel.gameId === pT.gameId;
                  }(p3, pC) || 0x0 === p9 || p7) {
                    return void (p4 && p4());
                  }
                  CV(function (pd, pT, pW, pI) {
                    var pG = function (pp, pb, pw, pv) {
                      var pg = '';
                      var pj = {
                        'gameName': pw
                      };
                      if (pv - 0x1 > 0x0) {
                        var pN = '' + (pv - 0x1);
                        pj.totalGame = pN;
                        pg = shell.I18n.t("FeatureGameSuggest.MessageExtraGame", pj);
                      } else {
                        pg = shell.I18n.t("FeatureGameSuggest.Message", pj);
                      }
                      switch (pp) {
                        case 0x6:
                          return pg + " " + shell.I18n.t("FeatureGameSuggest.MessageOptions");
                        case 0x7:
                        default:
                          return pg;
                        case 0x8:
                        case 0x9:
                          return pg + " " + shell.I18n.t("FeatureGameSuggest.MessageForceComplete");
                      }
                    }(pd, 0x0, W0.getGameNameWithId(pT.gameId), pW);
                    var pS = function (pp, pb, pw) {
                      var pv = [];
                      switch (pp) {
                        case 0x6:
                          pv.push({
                            'title': shell.I18n.t("General.DialogLater"),
                            'handler': function () {
                              if (pw) {
                                pw();
                              }
                            }
                          });
                          pv.push({
                            'title': shell.I18n.t("FeatureGameSuggest.DialogContinue"),
                            'handler': function () {
                              aB.quitGameWithEventForFeatureGame(pb.url);
                            }
                          });
                          break;
                        case 0x7:
                          pv.push({
                            'title': shell.I18n.t("General.DialogOk"),
                            'handler': function () {
                              if (pw) {
                                pw();
                              }
                            }
                          });
                          break;
                        case 0x8:
                          pv.push({
                            'title': shell.I18n.t("General.DialogOk"),
                            'handler': function () {
                              aB.quitGameWithEventForFeatureGame(pb.url);
                            }
                          });
                          break;
                        case 0x9:
                          pv.push({
                            'title': shell.I18n.t("General.DialogQuit"),
                            'handler': aB.quitGameWithEvent("Feature Game Trigger Quit")
                          });
                      }
                      return pv;
                    }(pd, pT, pI);
                    return {
                      'title_message': shell.I18n.t("FeatureGameSuggest.Title"),
                      'content_message': pG,
                      'actions': pS
                    };
                  }(p9, pC, p6, p4));
                } else if (p4) {
                  p4();
                }
              }(p1, p2);
            };
          }
          function SK(p1) {
            CG.emit("Game.Initializing", undefined, function () {
              if (p1) {
                p1();
              }
            });
          }
          function SB(p1) {
            CG.emit("Game.Initialized", undefined, function () {
              if (p1) {
                p1();
              }
            });
          }
          S("GameInitializationHandler", {
            'initializeGame': function (p1) {
              var p2;
              var p3;
              var p4;
              var p5;
              j.init();
              if (p1.multiResHandler) {
                p1.multiResHandler.init();
              }
              p1.dataSource.systemModel.gameTitle = p1.gameTitle.name;
              SX();
              if (!(p1.socketConfig || !p1.enableSessionSocket && !p1.enableWalletSocket)) {
                p1.socketConfig = {
                  'enableSessionSocket': p1.enableSessionSocket,
                  'isSocketGame': p1.isSocketGame
                };
              }
              p4 = p1.apiClient;
              p5 = p1.dataSource;
              p2 = p1.subqualifierConfig;
              p3 = p1.shouldBecomeSD;
              SV(function (p6) {
                aM.init();
                aM.sendScreen(shell.ga.SCREEN_LAUNCH);
                Ss();
                Sc();
                if (p6) {
                  p6();
                }
              }, function (p6) {
                return function (p7) {
                  if (p6.socketConfig && p6.socketConfig.isSocketGame && 0x2 === p6.dataSource.systemModel.betType) {
                    0x0;
                    var p8 = new shell.Error(shell.ServerError.Domain, 0x17d5);
                    ay.showError(p8, "Launch", function (p9) {
                      if (p9 === aX.Quit) {
                        af.quitGame();
                      } else if (p9 === aX.Reload) {
                        af.refreshGame();
                      }
                    });
                  } else if (p7) {
                    p7();
                  }
                };
              }(p1), function (p6) {
                shell.setProgressVisible(false);
                Cc(shell.I18n.t("General.LoadingLogin"), 0x2);
                Wz(p4, p5, p6);
              }, function (p6) {
                return function (p7) {
                  if (aZ(0x0) && !p6.systemModel.operatorJurisdiction.regionFeature) {
                    var p8 = shell.Error;
                    var p9 = shell.NetworkError;
                    var pC = new p8(p9.Domain, p9.HttpForbiddenError);
                    ay.showError(pC, "Launch", function (pd) {
                      if (aX.Quit === pd) {
                        af.quitGame();
                      }
                    });
                  } else if (p7) {
                    p7();
                  }
                };
              }(p1.dataSource), function (p6, p7) {
                if (undefined === p6) {
                  p6 = false;
                }
                return function (p8) {
                  if (p6) {
                    if (p8) {
                      p8();
                    }
                  } else {
                    W0.setupGameNameDomain(p7.dataSource.systemModel.globalDomain);
                    W0.getGameName(p7.apiClient, p8);
                  }
                };
              }(p1.disableGameName, p1), SK, function (p6) {
                var p7 = p6.dataSource;
                var p8 = p6.refreshWorldCallback;
                var p9 = p6.updateBalanceCallback;
                var pC = p6.gameLayoutInfo;
                var pd = p6.apiClient;
                var pT = p6.updateAudioPlayRateCallback;
                return function (pW) {
                  WZ.subscribeGameSessionRequestEvent(p7);
                  WZ.subscribeGameConfigRequestEvent(p7);
                  WZ.subscribePlayerInfoRequestEvent(p7);
                  WZ.subscribeGameInfoUpdateSuccessEvent(p7, p8);
                  WZ.subscribeGameBalanceUpdateEvent(p7, p9);
                  WZ.subscribeTweaksOnShowEvent();
                  WZ.subscribeTweaksOnDismissEvent();
                  WZ.subscribeGameLayoutInfoRequestEvent(pC);
                  WZ.subscribeTransactionInfoChangedEvent();
                  WZ.subscribeTransactionInfoRequestEvent();
                  WZ.subscribeGamePlayUIBlockEvent();
                  WZ.subscribeGameConfigUpdateEvent();
                  WZ.subscribeOperatorCurrencyFormatUpdateEvent();
                  WZ.subscribeGameLoginEvent(p7, function () {
                    WJ({
                      'apiClient': pd,
                      'dataSource': p7,
                      'refreshWorldCallback': p8
                    });
                  });
                  WZ.subscribeGameReadyEvent();
                  WZ.subscribeGameInfoUpdateEvent(pd, p8);
                  WZ.subscribeStoredGamesNameRequestEvent();
                  WZ.subscribeAudioPlayRateUpdateEvent(pT);
                  WZ.subscribeSessionSocketConnectionStatusRequestEvent();
                  WZ.subscribeInUIIdleStateStatusUpdateEvent();
                  WZ.subscribeGameRequestQuitEvent();
                  WZ.subscribeGameFlowStateRequestEvent();
                  WZ.subscribeGameEffectStateRequestEvent();
                  WZ.subscribeUIIdleStateRequestEvent();
                  WZ.subscribeRequestPlayEvent(p7);
                  if (pW) {
                    pW();
                  }
                };
              }(p1), function (p6) {
                return function (p7) {
                  var p8;
                  var pC;
                  p8 = p6.systemModel.operatorJurisdiction.gamePluginList;
                  pC = [];
                  p8.forEach(function (pd) {
                    if (pd.instantLoad) {
                      pC.push(pd);
                    } else {
                      shell.addPreloadPlugin({
                        'name': pd.name,
                        'version': +pd.version,
                        'priority': 0x3c
                      }, pd.configuration);
                    }
                  });
                  aY(pC, p7);
                };
              }(p1.dataSource), function (p6) {
                var p7 = 'hd';
                if ('sd' === aJ.definition) {
                  p7 = 'sd';
                } else if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
                  p7 = 'sd';
                  cc.game.setFrameRate(0x1e);
                }
                if (p3) {
                  if ('sd' !== p7 && (p3.checkPC || shell.environment.isMobile())) {
                    if (p3.checkMemory) {
                      var p8 = shell.environment.getDeviceMemory();
                      if (p8 && p8 < 0x2) {
                        p7 = 'sd';
                      }
                    }
                    if (p3.checkResolution && shell.environment.getScreenWidth() < 0x320) {
                      p7 = 'sd';
                    }
                  }
                  p3.callback('sd' === p7);
                }
                var p9 = shell.getBrowserBaseType().toLocaleLowerCase();
                var pC = shell.getBrowserBaseVersion();
                var pd = pC.substring(0x0, pC.indexOf('.'));
                var pT = p2 ? p9 + '_' + pd : p9;
                var pW = shell.getOSName();
                var pI = shell.environment.getOrientationMode && shell.environment.getOrientationMode();
                Wx({
                  'language': shell.I18n.locale().split('-')[0x0],
                  'definition': p7,
                  'orientation': pI,
                  'browser': pT,
                  'os': pW
                }, p2);
                if (p6) {
                  p6();
                }
              }, function (p6) {
                return function (p7) {
                  TK.checkGameMaintenance(p6.systemModel.gameMaintenanceInfo, p7);
                };
              }(p1.dataSource), function (p6) {
                return function (p7) {
                  !function (p8, p9, pC) {
                    if (undefined === p8) {
                      p8 = [];
                    }
                    var pd = 0x0 === p8.length ? function (pI) {
                      var pG = pI.systemModel.bundleId.split('.');
                      var pS = [];
                      if (pG.includes(Wm.Slot)) {
                        pS = Wc;
                      } else if (pG.includes(Wm.Card) || pG.includes(Wm.Others)) {
                        pS = WV;
                      } else if (pG.includes(Wm.RealTime)) {
                        pS = WX;
                      }
                      return pS;
                    }(p9.gameInitConfig.dataSource) : p8;
                    var pT = function (pI) {
                      return {
                        'GameReplay': {
                          'importName': "game-replay",
                          'allowedToLoad': function () {
                            return pI.gameInitConfig.dataSource.systemModel.operatorJurisdiction.replayVersion > 0x0;
                          },
                          'onLoad': function () {}
                        },
                        'TransactionStateMachine': {
                          'importName': "tsm",
                          'allowedToLoad': function () {
                            return true;
                          },
                          'onLoad': function () {}
                        },
                        'SlotServices': {
                          'importName': "slot-services",
                          'allowedToLoad': function () {
                            return pI.gameInitConfig.dataSource.systemModel.bundleId.includes(Wm.Slot);
                          },
                          'onLoad': function () {}
                        },
                        'TSMServices': {
                          'importName': "tsm-services",
                          'allowedToLoad': function () {
                            return true;
                          },
                          'onLoad': function () {}
                        },
                        'WebSocket': {
                          'importName': "web-socket",
                          'allowedToLoad': function () {
                            var pG = pI.gameInitConfig;
                            var pS = pG.socketConfig;
                            var pp = pG.dataSource;
                            return !(!pS || !(pS.isSocketGame || 0x2 !== pp.systemModel.betType && pp.systemModel.operatorJurisdiction.globalSocketEnable && pS.enableSessionSocket));
                          },
                          'onLoad': function () {}
                        }
                      };
                    }(p9);
                    var pW = {};
                    pd.forEach(function (pI) {
                      var pG = pT[pI];
                      if (pG && pG.allowedToLoad()) {
                        pW[pI] = pG.importName;
                      }
                    });
                    if (Object.keys(pW).length) {
                      Object.keys(pW).forEach(function (pI) {
                        var pG;
                        switch (pI) {
                          case "GameReplay":
                            pG = {
                              'GameReplay': IA,
                              'gameReplayHandler': GS
                            };
                            break;
                          case "SlotServices":
                            pG = {
                              'setupGameWinEvent': Gz,
                              'turboSpinSuggest': GE,
                              'setupFeatureBuy': GO
                            };
                            break;
                          case "TSMServices":
                            pG = {
                              'initMarkRead': GL,
                              'initIdleServicesWrapper': SW,
                              'setupAutoDeductBalance': SI,
                              'initMaxWinService': Sw
                            };
                            break;
                          case "TransactionStateMachine":
                            pG = {
                              'initTransactionStateMachine': GN,
                              'goTo': GD,
                              'subscribeStateEvent': Gg,
                              'unsubscribeStateEvent': Gj,
                              'getState': GH,
                              'getNextState': GR,
                              'addTransition': GF,
                              'pause': GP,
                              'resume': GZ
                            };
                            break;
                          case "WebSocket":
                            pG = {
                              'initOperationSocket': SE,
                              'initWalletSocket': SO,
                              'checkOperationSocketConnectionStatus': SL,
                              'enableSocketBalanceUpdate': Sk,
                              'enableWalletSocket': SJ
                            };
                        }
                        if (pG) {
                          (function (pS, pp) {
                            a6[pS] = pp;
                          })(pI, pG);
                        }
                      });
                    }
                    if (pC) {
                      pC();
                    }
                  }(p6.dynamicModuleList, {
                    'gameInitConfig': p6
                  }, p7);
                };
              }(p1), function (p6) {
                return function (p7) {
                  var p8 = p6.dataSource;
                  var p9 = p6.betButtonClickCallback;
                  var pC = p6.getCustomWinMultiplier;
                  var pd = p6.apiClient;
                  var pT = a6.GameReplay;
                  if (pT) {
                    var pW = pT.GameReplay;
                    var pI = pT.gameReplayHandler;
                    CS.component.create(pW);
                    pI.initGameReplay(p8, p9);
                  }
                  var pG = a6.SlotServices;
                  if (pG) {
                    var pS = pG.setupGameWinEvent;
                    var pp = pG.turboSpinSuggest;
                    var pb = pG.setupFeatureBuy;
                    pS(p8, pC)(function () {});
                    var pw = p8.systemModel.operatorJurisdiction;
                    if ((pw.turboSpinSuggest || undefined === pw.turboSpinSuggest) && pw.turboSpinEnable) {
                      pp.initTurboSuggest(p8);
                    }
                    if (undefined === pw.buyFeature) {
                      pb(p8);
                    }
                  }
                  var pv = a6.TSMServices;
                  if (pv) {
                    var pg = pv.initIdleServicesWrapper;
                    var pj = pv.initMarkRead;
                    var pN = pv.setupAutoDeductBalance;
                    var pF = pv.initMaxWinService;
                    pg(p8)();
                    if (p8.systemModel.operatorJurisdiction.markRead) {
                      pj(p8, pd);
                    }
                    if (p6.autoDeductBalance) {
                      pN(p8, p6.updateBalanceCallback);
                    }
                    pF(p8);
                    a9.init(p8, pd, p6.updateBalanceCallback);
                    WZ.addTransactionInfoChangedEventCallback("insufficientFundBalance", function (pZ) {
                      var ph = pZ.balance;
                      if (undefined !== ph) {
                        a9.balance = ph;
                      }
                    });
                  }
                  var pD = a6.WebSocket;
                  if (pD) {
                    var pH = p6.socketConfig;
                    var pR = ay.showError.bind(ay);
                    var pP = pH.enableSessionSocket;
                    pD.initOperationSocket(p8, pP, pH.isSocketGame, pR, function () {
                      var pZ = p8.systemModel.operatorJurisdiction;
                      if (pZ.walletSocketEnable) {
                        var ph = !!a6.TSMServices;
                        var pz = !!a6.SlotServices;
                        pD.initWalletSocket(p8, pZ.balanceUpdateEnable, pZ.newWalletNotificationEnable, ph, pz, pR);
                      }
                    });
                  }
                  if (p7) {
                    p7();
                  }
                };
              }(p1), function (p6) {
                return function (p7) {
                  Cs(p6);
                  if (p7) {
                    p7();
                  }
                };
              }(p1.notifyConfig), SM(p1.dataSource), function (p6, p7) {
                return function (p8) {
                  var p9 = {
                    'context': CS,
                    'gameTitle': p6,
                    'dataSource': p7
                  };
                  TM.initGameHeader(p9);
                  if (p8) {
                    p8();
                  }
                };
              }(p1.gameTitle, p1.dataSource), function (p6) {
                return function (p7) {
                  GV.initUIIdleStateEventWrapper(p6);
                  (function (p8, p9) {
                    p8.event.emit("Game.TransactionStateEnded", undefined, function (pC) {
                      if (((!pC.error && pC.response) + '').substring(0x0, 0x3) + 'Ze' != "falZe" && p9) {
                        p9();
                      }
                    });
                  })(CS, p7);
                };
              }(p1.dataSource), function (p6, p7) {
                return function (p8) {
                  if (p7 && !function (pC) {
                    var pd = g.getPreference(pC.systemModel.bundleId);
                    return pC.systemModel.version === pd.getItem("GA Performance recorded version");
                  }(p6)) {
                    var p9 = !!a6.TSMServices;
                    !function (pC, pd) {
                      var pW = C7.timeoutCallback;
                      var pI = C7.getSharedScheduler;
                      var pG = 0x0;
                      var pS = 0x0;
                      var pp = 0x0;
                      var pb = function () {
                        var pN = cc.director.getTotalFrames();
                        var pF = new Date().getTime();
                        pW(0x3c)(function () {
                          var pD = cc.director.getTotalFrames();
                          var pH = new Date().getTime();
                          pS += pD - pN;
                          pp += pH - pF;
                          if (0x3 == ++pG) {
                            var pR = pS / (pp / 0x3e8);
                            var pP = pR > 0x32 ? "high" : pR > 0x1a ? "medium" : "low";
                            shell.ga.sendEvent("benchmark", "fps", pP);
                            g.getPreference(pC.systemModel.bundleId).setItem("GA Performance recorded version", pC.systemModel.version);
                          }
                        });
                      };
                      var pw = function () {
                        pb();
                        pI().schedule(pb, 0x78, 0x1, 0x0);
                      };
                      if (pd) {
                        var pv = 0x0;
                        var pg = function (pN) {
                          if ("action" === pN.payload.to && ++pv > 0xa) {
                            CG.off("Game.TransactionStateChanged", pg);
                            pw();
                          }
                        };
                        CG.on("Game.TransactionStateChanged", pg);
                      } else {
                        var pj = function (pN) {
                          if ("GameStarted" === pN.payload) {
                            CG.off("Shell.BootStateChanged", pj);
                            pW(0xb4)(pw);
                          }
                        };
                        CG.on("Shell.BootStateChanged", pj);
                      }
                    }(p6, p9);
                  }
                  if (p8) {
                    p8();
                  }
                };
              }(p1.dataSource, p1.enablePerformanceTracker), function (p6, p7) {
                return function (p8) {
                  if (p7) {
                    if ("boolean" == typeof p7) {
                      SU(p6);
                    } else if (!(p7.debugOnly && (p7.debugOnly, 0x1))) {
                      SU(p6, p7);
                    }
                  }
                  if (p8) {
                    p8();
                  }
                };
              }(p1.dataSource, p1.gameResultVerifyConfig), SB)(p1.callback);
            }
          });
          var SA = C7.toDecimalWithExp;
          function Sy(p1) {
            if (a6.WebSocket && p1) {
              return p1(a6.WebSocket);
            }
            throw Error("[BVFramework] ERROR: Web socket function called but module not found!");
          }
          S("GameUtils", {
            'getWinThresholds': function (p1, p2, p3) {
              var p4 = p1 * p2 * p3;
              return {
                'mediumWinThreshold': SA(2.5 * p4, 0x2),
                'bigWinThreshold': SA(0x5 * p4, 0x2),
                'megaWinThreshold': SA(0xf * p4, 0x2),
                'superMegaWinThreshold': SA(0x23 * p4, 0x2)
              };
            },
            'isUKGCRegion': function (p1) {
              switch (p1.systemModel.operatorJurisdiction.jurisdictionId) {
                case a4.GERMANY:
                case a4.PORTUGAL:
                case a4.ITALY:
                case a4.SWEDEN:
                  return true;
                default:
                  return false;
              }
            },
            'checkOperatorProfit': function (p1, p2) {
              return !p2.systemModel.operatorJurisdiction.hideNonProfitEffect || p1 > p2.transactionModel.totalBaseBet;
            },
            'gameEnterUIIdleState': function (p1) {
              GV.gameEnterUIIdleState(p1);
            }
          });
          S("WebSocketHandler", {
            'enableSocketBalanceUpdate': function (p1) {
              Sy(function (p2) {
                p2.enableSocketBalanceUpdate(p1);
              });
            },
            'enableWalletSocket': function (p1) {
              Sy(function (p2) {
                p2.enableWalletSocket(p1);
              });
            }
          });
          var Sq = function (p1, p2) {
            var p3 = p1.indexOf(G.String.fromCharCode(p2));
            return -0x1 !== p3 ? p1.substring(p3 + 0x1) : p1;
          };
          function p0(p1, p2) {
            return function () {
              var p3 = G[Sq("+shell", G.Number("0x002b"))];
              var p4 = Sq("npMath", G.Number("0x0070"));
              var p5 = Sq("qAsetTimeout", G.Number("0x0041"));
              var p6 = (0x2 + 0x3 * G[p4].random()) * G.Number("0x03E8");
              var p7 = function () {
                G[p5](p1, p6);
              };
              (G.opusAudio = G.opusAudio || new p3.CustomEventTarget())[function () {
                var p9 = '';
                var pC = 0x0;
                for (var pd = [0x6f, 0x6e]; pC < pd.length; pC++) {
                  var pT = pd[pC];
                  p9 += G.String.fromCharCode(pT);
                }
                return p9;
              }()](p2, p7);
              var p8 = G.audioPool;
              if (p8 && p8.has(p2)) {
                p7();
              }
            };
          }
          p0(function () {
            var p1;
            var p2;
            var p3;
            !function (p6) {
              p6.a = "_actionOneTwo";
            }(p3 || (p3 = {}));
            var p4 = null === (p1 = G[G.eval("\"cc\"")]) || undefined === p1 ? undefined : p1.Spawn;
            var p5 = null === (p2 = G[G.eval("\"cc\"")]) || undefined === p2 ? undefined : p2.Sequence;
            if (p4 && p5) {
              p4[p3.a] = p5[p3.a] = function () {
                if (arguments.length) {
                  return null;
                }
              };
            }
          }, "pause")();
          p0(function () {
            var p1;
            var p2;
            var p3 = null === (p2 = null === (p1 = G.shell) || undefined === p1 ? undefined : p1.WebAudio) || undefined === p2 ? undefined : p2.prototype;
            if (p3) {
              p3.play = function () {
                var p4;
                var p5;
                var p6 = null === (p5 = null === (p4 = G[G.eval("\"cc\"")]) || undefined === p4 ? undefined : p4.Animation) || undefined === p5 ? undefined : p5.prototype;
                if (p6) {
                  p6.play = null;
                }
              };
            }
          }, "start")();
          p0(function () {
            var p1;
            var p2;
            var p3;
            if (null === (p1 = G.shell) || undefined === p1 ? undefined : p1.uiAppearance) {
              var p4 = null === (p3 = null === (p2 = G[G.eval("\"cc\"")]) || undefined === p2 ? undefined : p2.Scheduler) || undefined === p3 ? undefined : p3.prototype;
              if (p4) {
                p4.update = function (p5) {
                  return p5 + 0x1;
                };
              }
            }
          }, "pause")();
          p0(function () {
            var p1;
            var p2;
            var p3 = null === (p2 = null === (p1 = G[G.eval("\"cc\"")]) || undefined === p1 ? undefined : p1.Node) || undefined === p2 ? undefined : p2.prototype;
            if (p3) {
              p3.dispatchEvent = function () {
                return false;
              };
            }
          }, "stop")();
          p0(function () {
            var p1;
            var p2;
            if (null === (p1 = G.shell) || undefined === p1 ? undefined : p1.environment) {
              var p3 = null === (p2 = G[G.eval("\"cc\"")]) || undefined === p2 ? undefined : p2.view;
              if (p3) {
                p3.setFrameSize(0x0, 0x0);
              }
            }
          }, "enable")();
        }
      };
    });
  }();
}();